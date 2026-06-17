var yf=Object.defineProperty;var Rc=n=>{throw TypeError(n)};var Tf=(n,e,t)=>e in n?yf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var sn=(n,e,t)=>Tf(n,typeof e!="symbol"?e+"":e,t),co=(n,e,t)=>e.has(n)||Rc("Cannot "+t);var N=(n,e,t)=>(co(n,e,"read from private field"),t?t.call(n):e.get(n)),Oe=(n,e,t)=>e.has(n)?Rc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),Ie=(n,e,t,i)=>(co(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),et=(n,e,t)=>(co(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Yu=!1;var Ja=Array.isArray,bf=Array.prototype.indexOf,za=Array.prototype.includes,Qa=Array.from,Af=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,wf=Object.getOwnPropertyDescriptors,Rf=Object.prototype,Cf=Array.prototype,ju=Object.getPrototypeOf,Cc=Object.isExtensible;const Pf=()=>{};function Df(n){return n()}function jo(n){for(var e=0;e<n.length;e++)n[e]()}function Ku(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}const Bt=2,es=4,qs=8,Zu=1<<24,On=16,Vn=32,Ni=64,Ko=128,yn=512,Ct=1024,Ut=2048,Zn=4096,qt=8192,fn=16384,fs=32768,Zo=1<<25,ts=65536,Ha=1<<17,Lf=1<<18,ds=1<<19,$u=1<<20,hi=1<<25,fr=65536,ka=1<<21,Vr=1<<22,Li=1<<23,pi=Symbol("$state"),Uf=Symbol("legacy props"),If=Symbol("attributes"),$o=Symbol("class"),Jo=Symbol("style"),ws=Symbol("text"),wa=Symbol("form reset"),eo=new class extends Error{constructor(){super(...arguments);sn(this,"name","StaleReactionError");sn(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Ju(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Nf(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ff(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Of(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Bf(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function zf(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Hf(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function kf(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Vf(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Gf(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Wf(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Xf(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const qf=1,Yf=2,jf=16,Kf=1,Zf=2,$f=4,Jf=8,Qf=16,ed=1,td=2,wt=Symbol("uninitialized");function nd(){console.warn("https://svelte.dev/e/derived_inert")}function id(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function rd(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Qu(n){return n===this.v}function sd(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function eh(n){return!sd(n,this.v)}let ps=!1,ad=!1;function od(){ps=!0}let pt=null;function ns(n){pt=n}function Bi(n,e=!1,t){pt={p:pt,i:!1,c:null,e:null,s:n,x:null,r:je,l:ps&&!e?{s:null,u:null,$:[]}:null}}function zi(n){var e=pt,t=e.e;if(t!==null){e.e=null;for(var i of t)Sh(i)}return e.i=!0,pt=e.p,{}}function ms(){return!ps||pt!==null&&pt.l===null}let Ji=[];function th(){var n=Ji;Ji=[],jo(n)}function ar(n){if(Ji.length===0&&!Is){var e=Ji;queueMicrotask(()=>{e===Ji&&th()})}Ji.push(n)}function ld(){for(;Ji.length>0;)th()}function nh(n){var e=je;if(e===null)return qe.f|=Li,n;if((e.f&fs)===0&&(e.f&es)===0)throw n;Pi(n,e)}function Pi(n,e){if(!(e!==null&&(e.f&fn)!==0)){for(;e!==null;){if((e.f&Ko)!==0){if((e.f&fs)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}const cd=-7169;function Et(n,e){n.f=n.f&cd|e}function Zl(n){(n.f&yn)!==0||n.deps===null?Et(n,Ct):Et(n,Zn)}function ih(n){if(n!==null)for(const e of n)(e.f&Bt)===0||(e.f&fr)===0||(e.f^=fr,ih(e.deps))}function rh(n,e,t){(n.f&Ut)!==0?e.add(n):(n.f&Zn)!==0&&t.add(n),ih(n.deps),Et(n,Ct)}let ta=!1;function ud(n){var e=ta;try{return ta=!1,[n(),ta]}finally{ta=e}}function hd(n){let e=0,t=pr(0),i;return()=>{tc()&&(K(t),ic(()=>(e===0&&(i=hn(()=>n(()=>Ns(t)))),e+=1,()=>{ar(()=>{e-=1,e===0&&(i==null||i(),i=void 0,Ns(t))})})))}}var fd=ts|ds;function dd(n,e,t,i){new pd(n,e,t,i)}var vn,Kl,xn,tr,$t,Mn,Xt,cn,oi,nr,Ri,Yr,ks,Vs,li,Ka,St,md,_d,gd,Qo,Ra,Ca,el,tl;class pd{constructor(e,t,i,r){Oe(this,St);sn(this,"parent");sn(this,"is_pending",!1);sn(this,"transform_error");Oe(this,vn);Oe(this,Kl,null);Oe(this,xn);Oe(this,tr);Oe(this,$t);Oe(this,Mn,null);Oe(this,Xt,null);Oe(this,cn,null);Oe(this,oi,null);Oe(this,nr,0);Oe(this,Ri,0);Oe(this,Yr,!1);Oe(this,ks,new Set);Oe(this,Vs,new Set);Oe(this,li,null);Oe(this,Ka,hd(()=>(Ie(this,li,pr(N(this,nr))),()=>{Ie(this,li,null)})));var s;Ie(this,vn,e),Ie(this,xn,t),Ie(this,tr,o=>{var a=je;a.b=this,a.f|=Ko,i(o)}),this.parent=je.b,this.transform_error=r??((s=this.parent)==null?void 0:s.transform_error)??(o=>o),Ie(this,$t,io(()=>{et(this,St,Qo).call(this)},fd))}defer_effect(e){rh(e,N(this,ks),N(this,Vs))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!N(this,xn).pending}update_pending_count(e,t){et(this,St,el).call(this,e,t),Ie(this,nr,N(this,nr)+e),!(!N(this,li)||N(this,Yr))&&(Ie(this,Yr,!0),ar(()=>{Ie(this,Yr,!1),N(this,li)&&is(N(this,li),N(this,nr))}))}get_effect_pending(){return N(this,Ka).call(this),K(N(this,li))}error(e){if(!N(this,xn).onerror&&!N(this,xn).failed)throw e;Te!=null&&Te.is_fork?(N(this,Mn)&&Te.skip_effect(N(this,Mn)),N(this,Xt)&&Te.skip_effect(N(this,Xt)),N(this,cn)&&Te.skip_effect(N(this,cn)),Te.oncommit(()=>{et(this,St,tl).call(this,e)})):et(this,St,tl).call(this,e)}}vn=new WeakMap,Kl=new WeakMap,xn=new WeakMap,tr=new WeakMap,$t=new WeakMap,Mn=new WeakMap,Xt=new WeakMap,cn=new WeakMap,oi=new WeakMap,nr=new WeakMap,Ri=new WeakMap,Yr=new WeakMap,ks=new WeakMap,Vs=new WeakMap,li=new WeakMap,Ka=new WeakMap,St=new WeakSet,md=function(){try{Ie(this,Mn,Sn(()=>N(this,tr).call(this,N(this,vn))))}catch(e){this.error(e)}},_d=function(e){const t=N(this,xn).failed;t&&Ie(this,cn,Sn(()=>{t(N(this,vn),()=>e,()=>()=>{})}))},gd=function(){const e=N(this,xn).pending;e&&(this.is_pending=!0,Ie(this,Xt,Sn(()=>e(N(this,vn)))),ar(()=>{var t=Ie(this,oi,document.createDocumentFragment()),i=lr();t.append(i),Ie(this,Mn,et(this,St,Ca).call(this,()=>Sn(()=>N(this,tr).call(this,i)))),N(this,Ri)===0&&(N(this,vn).before(t),Ie(this,oi,null),cr(N(this,Xt),()=>{Ie(this,Xt,null)}),et(this,St,Ra).call(this,Te))}))},Qo=function(){try{if(this.is_pending=this.has_pending_snippet(),Ie(this,Ri,0),Ie(this,nr,0),Ie(this,Mn,Sn(()=>{N(this,tr).call(this,N(this,vn))})),N(this,Ri)>0){var e=Ie(this,oi,document.createDocumentFragment());sc(N(this,Mn),e);const t=N(this,xn).pending;Ie(this,Xt,Sn(()=>t(N(this,vn))))}else et(this,St,Ra).call(this,Te)}catch(t){this.error(t)}},Ra=function(e){this.is_pending=!1,e.transfer_effects(N(this,ks),N(this,Vs))},Ca=function(e){var t=je,i=qe,r=pt;$n(N(this,$t)),bn(N(this,$t)),ns(N(this,$t).ctx);try{return dr.ensure(),e()}catch(s){return nh(s),null}finally{$n(t),bn(i),ns(r)}},el=function(e,t){var i;if(!this.has_pending_snippet()){this.parent&&et(i=this.parent,St,el).call(i,e,t);return}Ie(this,Ri,N(this,Ri)+e),N(this,Ri)===0&&(et(this,St,Ra).call(this,t),N(this,Xt)&&cr(N(this,Xt),()=>{Ie(this,Xt,null)}),N(this,oi)&&(N(this,vn).before(N(this,oi)),Ie(this,oi,null)))},tl=function(e){N(this,Mn)&&(tn(N(this,Mn)),Ie(this,Mn,null)),N(this,Xt)&&(tn(N(this,Xt)),Ie(this,Xt,null)),N(this,cn)&&(tn(N(this,cn)),Ie(this,cn,null));var t=N(this,xn).onerror;let i=N(this,xn).failed;var r=!1,s=!1;const o=()=>{if(r){rd();return}r=!0,s&&Xf(),N(this,cn)!==null&&cr(N(this,cn),()=>{Ie(this,cn,null)}),et(this,St,Ca).call(this,()=>{et(this,St,Qo).call(this)})},a=l=>{try{s=!0,t==null||t(l,o),s=!1}catch(c){Pi(c,N(this,$t)&&N(this,$t).parent)}i&&Ie(this,cn,et(this,St,Ca).call(this,()=>{try{return Sn(()=>{var c=je;c.b=this,c.f|=Ko,i(N(this,vn),()=>l,()=>o)})}catch(c){return Pi(c,N(this,$t).parent),null}}))};ar(()=>{var l;try{l=this.transform_error(e)}catch(c){Pi(c,N(this,$t)&&N(this,$t).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(a,c=>Pi(c,N(this,$t)&&N(this,$t).parent)):a(l)})};function vd(n,e,t,i){const r=ms()?Os:to;var s=n.filter(m=>!m.settled),o=e.map(r);if(t.length===0&&s.length===0){i(o);return}var a=je,l=xd(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(m=>m.promise)):null;function u(m){if((a.f&fn)===0){l();try{i([...o,...m])}catch(_){Pi(_,a)}Va()}}var d=sh();if(t.length===0){c.then(()=>u([])).finally(d);return}function h(){Promise.all(t.map(m=>Md(m))).then(u).catch(m=>Pi(m,a)).finally(d)}c?c.then(()=>{l(),h(),Va()}):h()}function xd(){var n=je,e=qe,t=pt,i=Te;return function(s=!0){$n(n),bn(e),ns(t),s&&(n.f&fn)===0&&(i==null||i.activate(),i==null||i.apply())}}function Va(n=!0){$n(null),bn(null),ns(null),n&&(Te==null||Te.deactivate())}function sh(){var n=je,e=n.b,t=Te,i=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,t),t.increment(i,n),()=>{e==null||e.update_pending_count(-1,t),t.decrement(i,n)}}function Os(n){var e=Bt|Ut;return je!==null&&(je.f|=ds),{ctx:pt,deps:null,effects:null,equals:Qu,f:e,fn:n,reactions:null,rv:0,v:wt,wv:0,parent:je,ac:null}}const Rs=Symbol("obsolete");function Md(n,e,t){let i=je;i===null&&Nf();var r=void 0,s=pr(wt),o=!qe,a=new Set;return Fd(()=>{var m,_;var l=je,c=Ku();r=c.promise;try{Promise.resolve(n()).then(c.resolve,g=>{g!==eo&&c.reject(g)}).finally(Va)}catch(g){c.reject(g),Va()}var u=Te;if(o){if((l.f&fs)!==0)var d=sh();if((m=i.b)!=null&&m.is_rendered())(_=u.async_deriveds.get(l))==null||_.reject(Rs);else for(const g of a.values())g.reject(Rs);a.add(c),u.async_deriveds.set(l,c)}const h=(g,p=void 0)=>{d==null||d(),a.delete(c),p!==Rs&&(u.activate(),p?(s.f|=Li,is(s,p)):((s.f&Li)!==0&&(s.f^=Li),is(s,g)),u.deactivate())};c.promise.then(h,g=>h(null,g||"unknown"))}),nc(()=>{for(const l of a)l.reject(Rs)}),new Promise(l=>{function c(u){function d(){u===r?l(s):c(r)}u.then(d,d)}c(r)})}function to(n){const e=Os(n);return e.equals=eh,e}function Sd(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)tn(e[t])}}function $l(n){var e,t=je,i=n.parent;if(!_i&&i!==null&&n.v!==wt&&(i.f&(fn|qt))!==0)return nd(),n.v;$n(i);try{n.f&=~fr,Sd(n),e=Ph(n)}finally{$n(t)}return e}function ah(n){var e=$l(n);if(!n.equals(e)&&(n.wv=Rh(),(!(Te!=null&&Te.is_fork)||n.deps===null)&&(Te!==null?(Te.capture(n,e,!0),Us==null||Us.capture(n,e,!0)):n.v=e,n.deps===null))){Et(n,Ct);return}_i||(Nt!==null?(tc()||Te!=null&&Te.is_fork)&&Nt.set(n,e):Zl(n))}function Ed(n){var e,t;if(n.effects!==null)for(const i of n.effects)(i.teardown||i.ac)&&((e=i.teardown)==null||e.call(i),(t=i.ac)==null||t.abort(eo),i.fn!==null&&(i.teardown=Pf),i.ac=null,Bs(i,0),rc(i))}function oh(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&rs(e)}let uo=null,Mr=null,Te=null,Us=null,Nt=null,nl=null,Is=!1,ho=!1,Or=null,Pa=null;var Pc=0;let yd=1;var jr,Ci,ir,Kr,Zr,$r,ci,Jr,Jt,Gs,ui,Ln,Gn,Qr,rr,ot,il,Cs,rl,lh,ch,Nr,Td,Ps;const Za=class Za{constructor(){Oe(this,ot);sn(this,"id",yd++);Oe(this,jr,!1);sn(this,"linked",!0);Oe(this,Ci,null);Oe(this,ir,null);sn(this,"async_deriveds",new Map);sn(this,"current",new Map);sn(this,"previous",new Map);Oe(this,Kr,new Set);Oe(this,Zr,new Set);Oe(this,$r,0);Oe(this,ci,new Map);Oe(this,Jr,null);Oe(this,Jt,[]);Oe(this,Gs,[]);Oe(this,ui,new Set);Oe(this,Ln,new Set);Oe(this,Gn,new Map);Oe(this,Qr,new Set);sn(this,"is_fork",!1);Oe(this,rr,!1);Mr===null?uo=Mr=this:(Ie(Mr,ir,this),Ie(this,Ci,Mr)),Mr=this}skip_effect(e){N(this,Gn).has(e)||N(this,Gn).set(e,{d:[],m:[]}),N(this,Qr).delete(e)}unskip_effect(e,t=i=>this.schedule(i)){var i=N(this,Gn).get(e);if(i){N(this,Gn).delete(e);for(var r of i.d)Et(r,Ut),t(r);for(r of i.m)Et(r,Zn),t(r)}N(this,Qr).add(e)}capture(e,t,i=!1){e.v!==wt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Li)===0&&(this.current.set(e,[t,i]),Nt==null||Nt.set(e,t)),this.is_fork||(e.v=t)}activate(){Te=this}deactivate(){Te=null,Nt=null}flush(){try{ho=!0,Te=this,et(this,ot,Cs).call(this)}finally{Pc=0,nl=null,Or=null,Pa=null,ho=!1,Te=null,Nt=null,or.clear()}}discard(){var e;for(const t of N(this,Zr))t(this);N(this,Zr).clear();for(const t of this.async_deriveds.values())t.reject(Rs);et(this,ot,Ps).call(this),(e=N(this,Jr))==null||e.resolve()}register_created_effect(e){N(this,Gs).push(e)}increment(e,t){if(Ie(this,$r,N(this,$r)+1),e){let i=N(this,ci).get(t)??0;N(this,ci).set(t,i+1)}}decrement(e,t){if(Ie(this,$r,N(this,$r)-1),e){let i=N(this,ci).get(t)??0;i===1?N(this,ci).delete(t):N(this,ci).set(t,i-1)}N(this,rr)||(Ie(this,rr,!0),ar(()=>{Ie(this,rr,!1),this.linked&&this.flush()}))}transfer_effects(e,t){for(const i of e)N(this,ui).add(i);for(const i of t)N(this,Ln).add(i);e.clear(),t.clear()}oncommit(e){N(this,Kr).add(e)}ondiscard(e){N(this,Zr).add(e)}settled(){return(N(this,Jr)??Ie(this,Jr,Ku())).promise}static ensure(){if(Te===null){const e=Te=new Za;!ho&&!Is&&ar(()=>{N(e,jr)||e.flush()})}return Te}apply(){{Nt=null;return}}schedule(e){var r;if(nl=e,(r=e.b)!=null&&r.is_pending&&(e.f&(es|qs|Zu))!==0&&(e.f&fs)===0){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var i=t.f;if(Or!==null&&t===je&&(qe===null||(qe.f&Bt)===0))return;if((i&(Ni|Vn))!==0){if((i&Ct)===0)return;t.f^=Ct}}N(this,Jt).push(t)}};jr=new WeakMap,Ci=new WeakMap,ir=new WeakMap,Kr=new WeakMap,Zr=new WeakMap,$r=new WeakMap,ci=new WeakMap,Jr=new WeakMap,Jt=new WeakMap,Gs=new WeakMap,ui=new WeakMap,Ln=new WeakMap,Gn=new WeakMap,Qr=new WeakMap,rr=new WeakMap,ot=new WeakSet,il=function(){if(this.is_fork)return!0;for(const i of N(this,ci).keys()){for(var e=i,t=!1;e.parent!==null;){if(N(this,Gn).has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1},Cs=function(){var l,c,u,d;Ie(this,jr,!0),Pc++>1e3&&(et(this,ot,Ps).call(this),Ad());for(const h of N(this,ui))N(this,Ln).delete(h),Et(h,Ut),this.schedule(h);for(const h of N(this,Ln))Et(h,Zn),this.schedule(h);const e=N(this,Jt);Ie(this,Jt,[]),this.apply();var t=Or=[],i=[],r=Pa=[];for(const h of e)try{et(this,ot,rl).call(this,h,t,i)}catch(m){throw fh(h),et(this,ot,il).call(this)||this.discard(),m}if(Te=null,r.length>0){var s=Za.ensure();for(const h of r)s.schedule(h)}if(Or=null,Pa=null,et(this,ot,il).call(this)){et(this,ot,Nr).call(this,i),et(this,ot,Nr).call(this,t);for(const[h,m]of N(this,Gn))hh(h,m);r.length>0&&et(l=Te,ot,Cs).call(l);return}const o=et(this,ot,lh).call(this);if(o){et(this,ot,Nr).call(this,i),et(this,ot,Nr).call(this,t),et(c=o,ot,ch).call(c,this);return}N(this,ui).clear(),N(this,Ln).clear();for(const h of N(this,Kr))h(this);N(this,Kr).clear(),Us=this,Dc(i),Dc(t),Us=null,(u=N(this,Jr))==null||u.resolve();var a=Te;if(N(this,$r)===0&&(N(this,Jt).length===0||a!==null)&&et(this,ot,Ps).call(this),N(this,Jt).length>0)if(a!==null){const h=a;N(h,Jt).push(...N(this,Jt).filter(m=>!N(h,Jt).includes(m)))}else a=this;a!==null&&et(d=a,ot,Cs).call(d)},rl=function(e,t,i){e.f^=Ct;for(var r=e.first;r!==null;){var s=r.f,o=(s&(Vn|Ni))!==0,a=o&&(s&Ct)!==0,l=a||(s&qt)!==0||N(this,Gn).has(r);if(!l&&r.fn!==null){o?r.f^=Ct:(s&es)!==0?t.push(r):js(r)&&((s&On)!==0&&N(this,Ln).add(r),rs(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var u=r.next;if(u!==null){r=u;break}r=r.parent}}},lh=function(){for(var e=N(this,Ci);e!==null;){if(!e.is_fork){for(const[t,[,i]]of this.current)if(e.current.has(t)&&!i)return e}e=N(e,Ci)}return null},ch=function(e){var i;for(const[r,s]of e.current)!this.previous.has(r)&&e.previous.has(r)&&this.previous.set(r,e.previous.get(r)),this.current.set(r,s);for(const[r,s]of e.async_deriveds){const o=this.async_deriveds.get(r);o&&s.promise.then(o.resolve).catch(o.reject)}e.async_deriveds.clear(),this.transfer_effects(N(e,ui),N(e,Ln));const t=r=>{var s=r.reactions;if(s!==null)for(const l of s){var o=l.f;if((o&Bt)!==0)t(l);else{var a=l;o&(Vr|On)&&!this.async_deriveds.has(a)&&(N(this,Ln).delete(a),Et(a,Ut),this.schedule(a))}}};for(const r of this.current.keys())t(r);this.oncommit(()=>e.discard()),et(i=e,ot,Ps).call(i),Te=this,et(this,ot,Cs).call(this)},Nr=function(e){for(var t=0;t<e.length;t+=1)rh(e[t],N(this,ui),N(this,Ln))},Td=function(){var d;for(let h=uo;h!==null;h=N(h,ir)){var e=h.id<this.id,t=[];for(const[m,[_,g]]of this.current){if(h.current.has(m)){var i=h.current.get(m)[0];if(e&&_!==i)h.current.set(m,[_,g]);else continue}t.push(m)}if(e)for(const[m,_]of this.async_deriveds){const g=h.async_deriveds.get(m);g&&_.promise.then(g.resolve).catch(g.reject)}var r=[...h.current.keys()].filter(m=>!h.current.get(m)[1]);if(!(!N(h,jr)||r.length===0)){var s=r.filter(m=>!this.current.has(m));if(s.length===0)e&&h.discard();else if(t.length>0){if(e)for(const m of N(this,Qr))h.unskip_effect(m,_=>{var g;(_.f&(On|Vr))!==0?h.schedule(_):et(g=h,ot,Nr).call(g,[_])});h.activate();var o=new Set,a=new Map;for(var l of t)uh(l,s,o,a);a=new Map;var c=[...h.current].filter(([m,_])=>{const g=this.current.get(m);return g?g[0]!==_[0]||g[1]!==_[1]:!0}).map(([m])=>m);if(c.length>0)for(const m of N(this,Gs))(m.f&(fn|qt|Ha))===0&&Jl(m,c,a)&&((m.f&(Vr|On))!==0?(Et(m,Ut),h.schedule(m)):N(h,ui).add(m));if(N(h,Jt).length>0&&!N(h,rr)){h.apply();for(var u of N(h,Jt))et(d=h,ot,rl).call(d,u,[],[]);Ie(h,Jt,[])}h.deactivate()}}}},Ps=function(){if(this.linked){var e=N(this,Ci),t=N(this,ir);e===null?uo=t:Ie(e,ir,t),t===null?Mr=e:Ie(t,Ci,e),this.linked=!1}};let dr=Za;function bd(n){var e=Is;Is=!0;try{for(var t;;){if(ld(),Te===null)return t;Te.flush()}}finally{Is=e}}function Ad(){try{Hf()}catch(n){Pi(n,nl)}}let Dn=null;function Dc(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(fn|qt))===0&&js(i)&&(Dn=new Set,rs(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Th(i),(Dn==null?void 0:Dn.size)>0)){or.clear();for(const r of Dn){if((r.f&(fn|qt))!==0)continue;const s=[r];let o=r.parent;for(;o!==null;)Dn.has(o)&&(Dn.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];(l.f&(fn|qt))===0&&rs(l)}}Dn.clear()}}Dn=null}}function uh(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;(s&Bt)!==0?uh(r,e,t,i):(s&(Vr|On))!==0&&(s&Ut)===0&&Jl(r,e,i)&&(Et(r,Ut),Ql(r))}}function Jl(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(za.call(e,r))return!0;if((r.f&Bt)!==0&&Jl(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function Ql(n){Te.schedule(n)}function hh(n,e){if(!((n.f&Vn)!==0&&(n.f&Ct)!==0)){(n.f&Ut)!==0?e.d.push(n):(n.f&Zn)!==0&&e.m.push(n),Et(n,Ct);for(var t=n.first;t!==null;)hh(t,e),t=t.next}}function fh(n){Et(n,Ct);for(var e=n.first;e!==null;)fh(e),e=e.next}let Ga=new Set;const or=new Map;let dh=!1;function pr(n,e){var t={f:0,v:n,reactions:null,equals:Qu,rv:0,wv:0};return t}function vi(n,e){const t=pr(n);return zd(t),t}function bt(n,e=!1,t=!0){var r;const i=pr(n);return e||(i.equals=eh),ps&&t&&pt!==null&&pt.l!==null&&((r=pt.l).s??(r.s=[])).push(i),i}function Ce(n,e,t=!1){qe!==null&&(!Bn||(qe.f&Ha)!==0)&&ms()&&(qe.f&(Bt|On|Vr|Ha))!==0&&(Kn===null||!Kn.has(n))&&Wf();let i=t?Br(e):e;return is(n,i,Pa)}function is(n,e,t=null){if(!n.equals(e)){or.set(n,_i?e:n.v);var i=dr.ensure();if(i.capture(n,e),(n.f&Bt)!==0){const r=n;(n.f&Ut)!==0&&$l(r),Nt===null&&Zl(r)}n.wv=Rh(),ph(n,Ut,t),ms()&&je!==null&&(je.f&Ct)!==0&&(je.f&(Vn|Ni))===0&&(gn===null?Hd([n]):gn.push(n)),!i.is_fork&&Ga.size>0&&!dh&&wd()}return e}function wd(){dh=!1;for(const n of Ga){(n.f&Ct)!==0&&Et(n,Zn);let e;try{e=js(n)}catch{e=!0}e&&rs(n)}Ga.clear()}function Ns(n){Ce(n,n.v+1)}function ph(n,e,t){var i=n.reactions;if(i!==null)for(var r=ms(),s=i.length,o=0;o<s;o++){var a=i[o],l=a.f;if(!(!r&&a===je)){var c=(l&Ut)===0;if(c&&Et(a,e),(l&Ha)!==0)Ga.add(a);else if((l&Bt)!==0){var u=a;Nt==null||Nt.delete(u),(l&fr)===0&&(l&yn&&(je===null||(je.f&ka)===0)&&(a.f|=fr),ph(u,Zn,t))}else if(c){var d=a;(l&On)!==0&&Dn!==null&&Dn.add(d),t!==null?t.push(d):Ql(d)}}}}function Br(n){if(typeof n!="object"||n===null||pi in n)return n;const e=ju(n);if(e!==Rf&&e!==Cf)return n;var t=new Map,i=Ja(n),r=vi(0),s=ur,o=a=>{if(ur===s)return a();var l=qe,c=ur;bn(null),Fc(s);var u=a();return bn(l),Fc(c),u};return i&&t.set("length",vi(n.length)),new Proxy(n,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Vf();var u=t.get(l);return u===void 0?o(()=>{var d=vi(c.value);return t.set(l,d),d}):Ce(u,c.value,!0),!0},deleteProperty(a,l){var c=t.get(l);if(c===void 0){if(l in a){const u=o(()=>vi(wt));t.set(l,u),Ns(r)}}else Ce(c,wt),Ns(r);return!0},get(a,l,c){var m;if(l===pi)return n;var u=t.get(l),d=l in a;if(u===void 0&&(!d||(m=kr(a,l))!=null&&m.writable)&&(u=o(()=>{var _=Br(d?a[l]:wt),g=vi(_);return g}),t.set(l,u)),u!==void 0){var h=K(u);return h===wt?void 0:h}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var u=t.get(l);u&&(c.value=K(u))}else if(c===void 0){var d=t.get(l),h=d==null?void 0:d.v;if(d!==void 0&&h!==wt)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(a,l){var h;if(l===pi)return!0;var c=t.get(l),u=c!==void 0&&c.v!==wt||Reflect.has(a,l);if(c!==void 0||je!==null&&(!u||(h=kr(a,l))!=null&&h.writable)){c===void 0&&(c=o(()=>{var m=u?Br(a[l]):wt,_=vi(m);return _}),t.set(l,c));var d=K(c);if(d===wt)return!1}return u},set(a,l,c,u){var T;var d=t.get(l),h=l in a;if(i&&l==="length")for(var m=c;m<d.v;m+=1){var _=t.get(m+"");_!==void 0?Ce(_,wt):m in a&&(_=o(()=>vi(wt)),t.set(m+"",_))}if(d===void 0)(!h||(T=kr(a,l))!=null&&T.writable)&&(d=o(()=>vi(void 0)),Ce(d,Br(c)),t.set(l,d));else{h=d.v!==wt;var g=o(()=>Br(c));Ce(d,g)}var p=Reflect.getOwnPropertyDescriptor(a,l);if(p!=null&&p.set&&p.set.call(u,c),!h){if(i&&typeof l=="string"){var f=t.get("length"),y=Number(l);Number.isInteger(y)&&y>=f.v&&Ce(f,y+1)}Ns(r)}return!0},ownKeys(a){K(r);var l=Reflect.ownKeys(a).filter(d=>{var h=t.get(d);return h===void 0||h.v!==wt});for(var[c,u]of t)u.v!==wt&&!(c in a)&&l.push(c);return l},setPrototypeOf(){Gf()}})}function Lc(n){try{if(n!==null&&typeof n=="object"&&pi in n)return n[pi]}catch{}return n}function Rd(n,e){return Object.is(Lc(n),Lc(e))}var Uc,mh,_h,gh;function Cd(){if(Uc===void 0){Uc=window,mh=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;_h=kr(e,"firstChild").get,gh=kr(e,"nextSibling").get,Cc(n)&&(n[$o]=void 0,n[If]=null,n[Jo]=void 0,n.__e=void 0),Cc(t)&&(t[ws]=void 0)}}function lr(n=""){return document.createTextNode(n)}function Wa(n){return _h.call(n)}function Ys(n){return gh.call(n)}function ye(n,e){return Wa(n)}function ec(n,e=!1){{var t=Wa(n);return t instanceof Comment&&t.data===""?Ys(t):t}}function Me(n,e=1,t=!1){let i=n;for(;e--;)i=Ys(i);return i}function Pd(n){n.textContent=""}function vh(){return!1}function Dd(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}let Ic=!1;function Ld(){Ic||(Ic=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t[wa])==null||e.call(t)})},{capture:!0}))}function no(n){var e=qe,t=je;bn(null),$n(null);try{return n()}finally{bn(e),$n(t)}}function xh(n,e,t,i=t){n.addEventListener(e,()=>no(t));const r=n[wa];r?n[wa]=()=>{r(),i(!0)}:n[wa]=()=>i(!0),Ld()}function Mh(n){je===null&&(qe===null&&zf(),Bf()),_i&&Of()}function Ud(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Qn(n,e){var t=je;t!==null&&(t.f&qt)!==0&&(n|=qt);var i={ctx:pt,deps:null,nodes:null,f:n|Ut|yn,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};Te==null||Te.register_created_effect(i);var r=i;if((n&es)!==0)Or!==null?Or.push(i):dr.ensure().schedule(i);else if(e!==null){try{rs(i)}catch(o){throw tn(i),o}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&ds)===0&&(r=r.first,(n&On)!==0&&(n&ts)!==0&&r!==null&&(r.f|=ts))}if(r!==null&&(r.parent=t,t!==null&&Ud(r,t),qe!==null&&(qe.f&Bt)!==0&&(n&Ni)===0)){var s=qe;(s.effects??(s.effects=[])).push(r)}return i}function tc(){return qe!==null&&!Bn}function nc(n){const e=Qn(qs,null);return Et(e,Ct),e.teardown=n,e}function Xa(n){Mh();var e=je.f,t=!qe&&(e&Vn)!==0&&pt!==null&&!pt.i;if(t){var i=pt;(i.e??(i.e=[])).push(n)}else return Sh(n)}function Sh(n){return Qn(es|$u,n)}function Id(n){return Mh(),Qn(qs|$u,n)}function Nd(n){dr.ensure();const e=Qn(Ni|ds,n);return(t={})=>new Promise(i=>{t.outro?cr(e,()=>{tn(e),i(void 0)}):(tn(e),i(void 0))})}function Eh(n){return Qn(es,n)}function Fd(n){return Qn(Vr|ds,n)}function ic(n,e=0){return Qn(qs|e,n)}function dn(n,e=[],t=[],i=[]){vd(i,e,t,r=>{Qn(qs,()=>{n(...r.map(K))})})}function io(n,e=0){var t=Qn(On|e,n);return t}function Sn(n){return Qn(Vn|ds,n)}function yh(n){var e=n.teardown;if(e!==null){const t=_i,i=qe;Nc(!0),bn(null);try{e.call(null)}finally{Nc(t),bn(i)}}}function rc(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&no(()=>{r.abort(eo)});var i=t.next;(t.f&Ni)!==0?t.parent=null:tn(t,e),t=i}}function Od(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Vn)===0&&tn(e),e=t}}function tn(n,e=!0){var t=!1;(e||(n.f&Lf)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Bd(n.nodes.start,n.nodes.end),t=!0),n.f|=Zo,rc(n,e&&!t),Bs(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();yh(n),n.f^=Zo,n.f|=fn;var r=n.parent;r!==null&&r.first!==null&&Th(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function Bd(n,e){for(;n!==null;){var t=n===e?null:Ys(n);n.remove(),n=t}}function Th(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function cr(n,e,t=!0){var i=[];bh(n,i,!0);var r=()=>{t&&tn(n),e&&e()},s=i.length;if(s>0){var o=()=>--s||r();for(var a of i)a.out(o)}else r()}function bh(n,e,t){if((n.f&qt)===0){n.f^=qt;var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)(a.is_global||t)&&e.push(a);for(var r=n.first;r!==null;){var s=r.next;if((r.f&Ni)===0){var o=(r.f&ts)!==0||(r.f&Vn)!==0&&(n.f&On)!==0;bh(r,e,o?t:!1)}r=s}}}function qa(n){Ah(n,!0)}function Ah(n,e){if((n.f&qt)!==0){n.f^=qt,(n.f&Ct)===0&&(Et(n,Ut),dr.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&ts)!==0||(t.f&Vn)!==0;Ah(t,r?e:!1),t=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const o of s)(o.is_global||e)&&o.in()}}function sc(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:Ys(t);e.append(t),t=r}}let Da=!1,_i=!1;function Nc(n){_i=n}let qe=null,Bn=!1;function bn(n){qe=n}let je=null;function $n(n){je=n}let Kn=null;function zd(n){qe!==null&&(Kn??(Kn=new Set)).add(n)}let Qt=null,ln=0,gn=null;function Hd(n){gn=n}let wh=1,Qi=0,ur=Qi;function Fc(n){ur=n}function Rh(){return++wh}function js(n){var e=n.f;if((e&Ut)!==0)return!0;if(e&Bt&&(n.f&=~fr),(e&Zn)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var s=t[r];if(js(s)&&ah(s),s.wv>n.wv)return!0}(e&yn)!==0&&Nt===null&&Et(n,Ct)}return!1}function Ch(n,e,t=!0){var i=n.reactions;if(i!==null&&!(Kn!==null&&Kn.has(n)))for(var r=0;r<i.length;r++){var s=i[r];(s.f&Bt)!==0?Ch(s,e,!1):e===s&&(t?Et(s,Ut):(s.f&Ct)!==0&&Et(s,Zn),Ql(s))}}function Ph(n){var g;var e=Qt,t=ln,i=gn,r=qe,s=Kn,o=pt,a=Bn,l=ur,c=n.f;Qt=null,ln=0,gn=null,qe=(c&(Vn|Ni))===0?n:null,Kn=null,ns(n.ctx),Bn=!1,ur=++Qi,n.ac!==null&&(no(()=>{n.ac.abort(eo)}),n.ac=null);try{n.f|=ka;var u=n.fn,d=u();n.f|=fs;var h=n.deps,m=Te==null?void 0:Te.is_fork;if(Qt!==null){var _;if(m||Bs(n,ln),h!==null&&ln>0)for(h.length=ln+Qt.length,_=0;_<Qt.length;_++)h[ln+_]=Qt[_];else n.deps=h=Qt;if(tc()&&(n.f&yn)!==0)for(_=ln;_<h.length;_++)((g=h[_]).reactions??(g.reactions=[])).push(n)}else!m&&h!==null&&ln<h.length&&(Bs(n,ln),h.length=ln);if(ms()&&gn!==null&&!Bn&&h!==null&&(n.f&(Bt|Zn|Ut))===0)for(_=0;_<gn.length;_++)Ch(gn[_],n);if(r!==null&&r!==n){if(Qi++,r.deps!==null)for(let p=0;p<t;p+=1)r.deps[p].rv=Qi;if(e!==null)for(const p of e)p.rv=Qi;gn!==null&&(i===null?i=gn:i.push(...gn))}return(n.f&Li)!==0&&(n.f^=Li),d}catch(p){return nh(p)}finally{n.f^=ka,Qt=e,ln=t,gn=i,qe=r,Kn=s,ns(o),Bn=a,ur=l}}function kd(n,e){let t=e.reactions;if(t!==null){var i=bf.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&Bt)!==0&&(Qt===null||!za.call(Qt,e))){var s=e;(s.f&yn)!==0&&(s.f^=yn,s.f&=~fr),s.v!==wt&&Zl(s),Ed(s),Bs(s,0)}}function Bs(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)kd(n,t[i])}function rs(n){var e=n.f;if((e&fn)===0){Et(n,Ct);var t=je,i=Da;je=n,Da=!0;try{(e&(On|Zu))!==0?Od(n):rc(n),yh(n);var r=Ph(n);n.teardown=typeof r=="function"?r:null,n.wv=wh;var s;Yu&&ad&&(n.f&Ut)!==0&&n.deps}finally{Da=i,je=t}}}async function Vd(){await Promise.resolve(),bd()}function K(n){var e=n.f,t=(e&Bt)!==0;if(qe!==null&&!Bn){var i=je!==null&&(je.f&fn)!==0;if(!i&&(Kn===null||!Kn.has(n))){var r=qe.deps;if((qe.f&ka)!==0)n.rv<Qi&&(n.rv=Qi,Qt===null&&r!==null&&r[ln]===n?ln++:Qt===null?Qt=[n]:Qt.push(n));else{qe.deps??(qe.deps=[]),za.call(qe.deps,n)||qe.deps.push(n);var s=n.reactions;s===null?n.reactions=[qe]:za.call(s,qe)||s.push(qe)}}}if(_i&&or.has(n))return or.get(n);if(t){var o=n;if(_i){var a=o.v;return((o.f&Ct)===0&&o.reactions!==null||Lh(o))&&(a=$l(o)),or.set(o,a),a}var l=(o.f&yn)===0&&!Bn&&qe!==null&&(Da||(qe.f&yn)!==0),c=(o.f&fs)===0;js(o)&&(l&&(o.f|=yn),ah(o)),l&&!c&&(oh(o),Dh(o))}if(Nt!=null&&Nt.has(n))return Nt.get(n);if((n.f&Li)!==0)throw n.v;return n.v}function Dh(n){if(n.f|=yn,n.deps!==null)for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),(e.f&Bt)!==0&&(e.f&yn)===0&&(oh(e),Dh(e))}function Lh(n){if(n.v===wt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(or.has(e)||(e.f&Bt)!==0&&Lh(e))return!0;return!1}function hn(n){var e=Bn;try{return Bn=!0,n()}finally{Bn=e}}function Gd(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(pi in n)sl(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&pi in t&&sl(t)}}}function sl(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{sl(n[i],e)}catch{}const t=ju(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=wf(t);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}const Wd=["touchstart","touchmove"];function Xd(n){return Wd.includes(n)}const na=Symbol("events"),qd=new Set,Oc=new Set;function Yd(n,e,t,i={}){function r(s){if(i.capture||al.call(e,s),!s.cancelBubble)return no(()=>t==null?void 0:t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?ar(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function In(n,e,t,i,r){var s={capture:i,passive:r},o=Yd(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&nc(()=>{e.removeEventListener(n,o,s)})}let Bc=null;function al(n){var g,p;var e=this,t=e.ownerDocument,i=n.type,r=((g=n.composedPath)==null?void 0:g.call(n))||[],s=r[0]||n.target;Bc=n;var o=0,a=Bc===n&&n[na];if(a){var l=r.indexOf(a);if(l!==-1&&(e===document||e===window)){n[na]=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=r[o]||n.target,s!==e){Af(n,"currentTarget",{configurable:!0,get(){return s||t}});var u=qe,d=je;bn(null),$n(null);try{for(var h,m=[];s!==null&&s!==e;){try{var _=(p=s[na])==null?void 0:p[i];_!=null&&(!s.disabled||n.target===s)&&_.call(s,n)}catch(f){h?m.push(f):h=f}if(n.cancelBubble)break;o++,s=o<r.length?r[o]:null}if(h){for(let f of m)queueMicrotask(()=>{throw f});throw h}}finally{n[na]=e,delete n.currentTarget,bn(u),$n(d)}}}var Xu;const fo=((Xu=globalThis==null?void 0:globalThis.window)==null?void 0:Xu.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function jd(n){return(fo==null?void 0:fo.createHTML(n))??n}function Kd(n){var e=Dd("template");return e.innerHTML=jd(n.replaceAll("<!>","<!---->")),e.content}function zc(n,e){var t=je;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function lt(n,e){var t=(e&ed)!==0,i=(e&td)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=Kd(s?n:"<!>"+n),t||(r=Wa(r)));var o=i||mh?document.importNode(r,!0):r.cloneNode(!0);if(t){var a=Wa(o),l=o.lastChild;zc(a,l)}else zc(o,o);return o}}function at(n,e){n!==null&&n.before(e)}function Ft(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[ws]??(n[ws]=n.nodeValue))&&(n[ws]=t,n.nodeValue=`${t}`)}function Zd(n,e){return $d(n,e)}const ia=new Map;function $d(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:o=!0,transformError:a}){Cd();var l=void 0,c=Nd(()=>{var u=t??e.appendChild(lr());dd(u,{pending:()=>{}},m=>{Bi({});var _=pt;s&&(_.c=s),r&&(i.$$events=r),l=n(m,i)||{},zi()},a);var d=new Set,h=m=>{for(var _=0;_<m.length;_++){var g=m[_];if(!d.has(g)){d.add(g);var p=Xd(g);for(const T of[e,document]){var f=ia.get(T);f===void 0&&(f=new Map,ia.set(T,f));var y=f.get(g);y===void 0?(T.addEventListener(g,al,{passive:p}),f.set(g,1)):f.set(g,y+1)}}}};return h(Qa(qd)),Oc.add(h),()=>{var p;for(var m of d)for(const f of[e,document]){var _=ia.get(f),g=_.get(m);--g==0?(f.removeEventListener(m,al),_.delete(m),_.size===0&&ia.delete(f)):_.set(m,g)}Oc.delete(h),u!==t&&((p=u.parentNode)==null||p.removeChild(u))}});return Jd.set(l,c),l}let Jd=new WeakMap;var Un,Wn,un,sr,Ws,Xs,$a;class Uh{constructor(e,t=!0){sn(this,"anchor");Oe(this,Un,new Map);Oe(this,Wn,new Map);Oe(this,un,new Map);Oe(this,sr,new Set);Oe(this,Ws,!0);Oe(this,Xs,e=>{if(N(this,Un).has(e)){var t=N(this,Un).get(e),i=N(this,Wn).get(t);if(i)qa(i),N(this,sr).delete(t);else{var r=N(this,un).get(t);r&&(qa(r.effect),N(this,Wn).set(t,r.effect),N(this,un).delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,o]of N(this,Un)){if(N(this,Un).delete(s),s===e)break;const a=N(this,un).get(o);a&&(tn(a.effect),N(this,un).delete(o))}for(const[s,o]of N(this,Wn)){if(s===t||N(this,sr).has(s))continue;const a=()=>{if(Array.from(N(this,Un).values()).includes(s)){var c=document.createDocumentFragment();sc(o,c),c.append(lr()),N(this,un).set(s,{effect:o,fragment:c})}else tn(o);N(this,sr).delete(s),N(this,Wn).delete(s)};N(this,Ws)||!i?(N(this,sr).add(s),cr(o,a,!1)):a()}}});Oe(this,$a,e=>{N(this,Un).delete(e);const t=Array.from(N(this,Un).values());for(const[i,r]of N(this,un))t.includes(i)||(tn(r.effect),N(this,un).delete(i))});this.anchor=e,Ie(this,Ws,t)}ensure(e,t){var i=Te,r=vh();if(t&&!N(this,Wn).has(e)&&!N(this,un).has(e))if(r){var s=document.createDocumentFragment(),o=lr();s.append(o),N(this,un).set(e,{effect:Sn(()=>t(o)),fragment:s})}else N(this,Wn).set(e,Sn(()=>t(this.anchor)));if(N(this,Un).set(i,e),r){for(const[a,l]of N(this,Wn))a===e?i.unskip_effect(l):i.skip_effect(l);for(const[a,l]of N(this,un))a===e?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(N(this,Xs)),i.ondiscard(N(this,$a))}else N(this,Xs).call(this,i)}}Un=new WeakMap,Wn=new WeakMap,un=new WeakMap,sr=new WeakMap,Ws=new WeakMap,Xs=new WeakMap,$a=new WeakMap;function Nn(n,e,t=!1){var i=new Uh(n),r=t?ts:0;function s(o,a){i.ensure(o,a)}io(()=>{var o=!1;e((a,l=0)=>{o=!0,s(l,a)}),o||s(-1,null)},r)}const Qd=Symbol("NaN");function ep(n,e,t){var i=new Uh(n),r=!ms();io(()=>{var s=e();s!==s&&(s=Qd),r&&s!==null&&typeof s=="object"&&(s={}),i.ensure(s,t)})}function tp(n,e){return e}function np(n,e,t){for(var i=[],r=e.length,s,o=e.length,a=0;a<r;a++){let d=e[a];cr(d,()=>{if(s){if(s.pending.delete(d),s.done.add(d),s.pending.size===0){var h=n.outrogroups;ol(n,Qa(s.done)),h.delete(s),h.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=i.length===0&&t!==null;if(l){var c=t,u=c.parentNode;Pd(u),u.append(c),n.items.clear()}ol(n,e,!l)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function ol(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const o of n.pending.values())for(const a of o)i.add(n.items.get(a).e)}for(var r=0;r<e.length;r++){var s=e[r];if(i!=null&&i.has(s)){s.f|=hi;const o=document.createDocumentFragment();sc(s,o)}else tn(e[r],t)}}var Hc;function ip(n,e,t,i,r,s=null){var o=n,a=new Map;{var l=n;o=l.appendChild(lr())}var c=null,u=to(()=>{var y=t();return Ja(y)?y:y==null?[]:Qa(y)}),d,h=new Map,m=!0;function _(y){(f.effect.f&fn)===0&&(f.pending.delete(y),f.fallback=c,rp(f,d,o,e,i),c!==null&&(d.length===0?(c.f&hi)===0?qa(c):(c.f^=hi,Ds(c,null,o)):cr(c,()=>{c=null})))}function g(y){f.pending.delete(y)}var p=io(()=>{d=K(u);for(var y=d.length,T=new Set,M=Te,C=vh(),R=0;R<y;R+=1){var A=d[R],L=i(A,R),E=m?null:a.get(L);E?(E.v&&is(E.v,A),E.i&&is(E.i,R),C&&M.unskip_effect(E.e)):(E=sp(a,m?o:Hc??(Hc=lr()),A,L,R,r,e,t),m||(E.e.f|=hi),a.set(L,E)),T.add(L)}if(y===0&&s&&!c&&(m?c=Sn(()=>s(o)):(c=Sn(()=>s(Hc??(Hc=lr()))),c.f|=hi)),y>T.size&&Ff(),!m)if(h.set(M,T),C){for(const[S,P]of a)T.has(S)||M.skip_effect(P.e);M.oncommit(_),M.ondiscard(g)}else _(M);K(u)}),f={effect:p,items:a,pending:h,outrogroups:null,fallback:c};m=!1}function Ss(n){for(;n!==null&&(n.f&Vn)===0;)n=n.next;return n}function rp(n,e,t,i,r){var L;var s=e.length,o=n.items,a=Ss(n.effect.first),l,c=null,u=[],d=[],h,m,_,g;for(g=0;g<s;g+=1){if(h=e[g],m=r(h,g),_=o.get(m).e,n.outrogroups!==null)for(const E of n.outrogroups)E.pending.delete(_),E.done.delete(_);if((_.f&qt)!==0&&qa(_),(_.f&hi)!==0)if(_.f^=hi,_===a)Ds(_,null,t);else{var p=c?c.next:a;_===n.effect.last&&(n.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),xi(n,c,_),xi(n,_,p),Ds(_,p,t),c=_,u=[],d=[],a=Ss(c.next);continue}if(_!==a){if(l!==void 0&&l.has(_)){if(u.length<d.length){var f=d[0],y;c=f.prev;var T=u[0],M=u[u.length-1];for(y=0;y<u.length;y+=1)Ds(u[y],f,t);for(y=0;y<d.length;y+=1)l.delete(d[y]);xi(n,T.prev,M.next),xi(n,c,T),xi(n,M,f),a=f,c=M,g-=1,u=[],d=[]}else l.delete(_),Ds(_,a,t),xi(n,_.prev,_.next),xi(n,_,c===null?n.effect.first:c.next),xi(n,c,_),c=_;continue}for(u=[],d=[];a!==null&&a!==_;)(l??(l=new Set)).add(a),d.push(a),a=Ss(a.next);if(a===null)continue}(_.f&hi)===0&&u.push(_),c=_,a=Ss(_.next)}if(n.outrogroups!==null){for(const E of n.outrogroups)E.pending.size===0&&(ol(n,Qa(E.done)),(L=n.outrogroups)==null||L.delete(E));n.outrogroups.size===0&&(n.outrogroups=null)}if(a!==null||l!==void 0){var C=[];if(l!==void 0)for(_ of l)(_.f&qt)===0&&C.push(_);for(;a!==null;)(a.f&qt)===0&&a!==n.fallback&&C.push(a),a=Ss(a.next);var R=C.length;if(R>0){var A=s===0?t:null;np(n,C,A)}}}function sp(n,e,t,i,r,s,o,a){var l=(o&qf)!==0?(o&jf)===0?bt(t,!1,!1):pr(t):null,c=(o&Yf)!==0?pr(r):null;return{v:l,i:c,e:Sn(()=>(s(e,l??t,c??r,a),()=>{n.delete(i)}))}}function Ds(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=e&&(e.f&hi)===0?e.nodes.start:t;i!==null;){var o=Ys(i);if(s.before(i),i===r)return;i=o}}function xi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const kc=[...` 	
\r\f \v\uFEFF`];function ap(n,e,t){var i=""+n;if(t){for(var r of Object.keys(t))if(t[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,o=0;(o=i.indexOf(r,o))>=0;){var a=o+s;(o===0||kc.includes(i[o-1]))&&(a===i.length||kc.includes(i[a]))?i=(o===0?"":i.substring(0,o))+i.substring(a+1):o=a}}return i===""?null:i}function op(n,e){return n==null?null:String(n)}function lp(n,e,t,i,r,s){var o=n[$o];if(o!==t||o===void 0){var a=ap(t,i,s);a==null?n.removeAttribute("class"):n.className=a,n[$o]=t}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return s}function cp(n,e,t,i){var r=n[Jo];if(r!==e){var s=op(e);s==null?n.removeAttribute("style"):n.style.cssText=s,n[Jo]=e}return i}function Ih(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Ja(e))return id();for(var i of n.options)i.selected=e.includes(Fs(i));return}for(i of n.options){var r=Fs(i);if(Rd(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function up(n){var e=new MutationObserver(()=>{Ih(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),nc(()=>{e.disconnect()})}function Vc(n,e,t=e){var i=new WeakSet,r=!0;xh(n,"change",s=>{var o=s?"[selected]":":checked",a;if(n.multiple)a=[].map.call(n.querySelectorAll(o),Fs);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");a=l&&Fs(l)}t(a),n.__value=a,Te!==null&&i.add(Te)}),Eh(()=>{var s=e();if(n===document.activeElement){var o=Te;if(i.has(o))return}if(Ih(n,s,r),r&&s===void 0){var a=n.querySelector(":checked");a!==null&&(s=Fs(a),t(s))}n.__value=s,r=!1}),up(n)}function Fs(n){return"__value"in n?n.__value:n.value}function Xn(n,e,t=e){var i=new WeakSet;xh(n,"input",async r=>{var s=r?n.defaultValue:n.value;if(s=po(n)?mo(s):s,t(s),Te!==null&&i.add(Te),await Vd(),s!==(s=e())){var o=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=s??"",a!==null){var c=n.value.length;o===a&&a===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(a,c))}}}),hn(e)==null&&n.value&&(t(po(n)?mo(n.value):n.value),Te!==null&&i.add(Te)),ic(()=>{var r=e();if(n===document.activeElement){var s=Te;if(i.has(s))return}po(n)&&r===mo(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function po(n){var e=n.type;return e==="number"||e==="range"}function mo(n){return n===""?null:+n}function _o(n,e){return n===e||(n==null?void 0:n[pi])===e}function hp(n={},e,t,i){var r=pt.r,s=je;return Eh(()=>{var o,a;return ic(()=>{o=a,a=[],hn(()=>{_o(t(...a),n)||(e(n,...a),o&&_o(t(...o),n)&&e(null,...o))})}),()=>{let l=s;for(;l!==r&&l.parent!==null&&l.parent.f&Zo;)l=l.parent;const c=()=>{a&&_o(t(...a),n)&&e(null,...a)},u=l.teardown;l.teardown=()=>{c(),u==null||u()}}}),n}function _s(n=!1){const e=pt,t=e.l.u;if(!t)return;let i=()=>Gd(e.s);if(n){let r=0,s={};const o=Os(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&r++,r});i=()=>K(o)}t.b.length&&Id(()=>{Gc(e,i),jo(t.b)}),Xa(()=>{const r=hn(()=>t.m.map(Df));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&Xa(()=>{Gc(e,i),jo(t.a)})}function Gc(n,e){if(n.l.s)for(const t of n.l.s)K(t);e()}function Rt(n,e,t,i){var M;var r=!ps||(t&Zf)!==0,s=(t&Jf)!==0,o=(t&Qf)!==0,a=i,l=!0,c=void 0,u=()=>o&&r?(c??(c=Os(i)),K(c)):(l&&(l=!1,a=o?hn(i):i),a);let d;if(s){var h=pi in n||Uf in n;d=((M=kr(n,e))==null?void 0:M.set)??(h&&e in n?C=>n[e]=C:void 0)}var m,_=!1;s?[m,_]=ud(()=>n[e]):m=n[e],m===void 0&&i!==void 0&&(m=u(),d&&(r&&kf(),d(m)));var g;if(r?g=()=>{var C=n[e];return C===void 0?u():(l=!0,C)}:g=()=>{var C=n[e];return C!==void 0&&(a=void 0),C===void 0?a:C},r&&(t&$f)===0)return g;if(d){var p=n.$$legacy;return(function(C,R){return arguments.length>0?((!r||!R||p||_)&&d(R?g():C),C):g()})}var f=!1,y=((t&Kf)!==0?Os:to)(()=>(f=!1,g()));s&&K(y);var T=je;return(function(C,R){if(arguments.length>0){const A=R?K(y):r&&s?Br(C):C;return Ce(y,A),f=!0,a!==void 0&&(a=A),C}return _i&&f||(T.f&fn)!==0?y.v:K(y)})}function ac(n){pt===null&&Ju(),ps&&pt.l!==null?dp(pt).m.push(n):Xa(()=>{const e=hn(n);if(typeof e=="function")return e})}function fp(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}function Ks(){const n=pt;return n===null&&Ju(),(e,t,i)=>{var s;const r=(s=n.s.$$events)==null?void 0:s[e];if(r){const o=Ja(r)?r.slice():[r],a=fp(e,t,i);for(const l of o)l.call(n.x,a);return!a.defaultPrevented}return!0}}function dp(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}const pp="5";var qu;typeof window<"u"&&((qu=window.__svelte??(window.__svelte={})).v??(qu.v=new Set)).add(pp);od();var mp=lt("<p>Loading projects...</p>"),_p=lt('<p class="error svelte-1vgb4qo"> </p>'),gp=lt("<p>No projects yet. Create one to get started!</p>"),vp=lt('<tr tabindex="0" role="button"><td class="svelte-1vgb4qo"> </td><td class="svelte-1vgb4qo"> </td><td class="svelte-1vgb4qo"> </td><td class="svelte-1vgb4qo"> </td></tr>'),xp=lt('<table class="svelte-1vgb4qo"><thead><tr class="svelte-1vgb4qo"><th class="svelte-1vgb4qo">Name</th><th class="svelte-1vgb4qo">Description</th><th class="svelte-1vgb4qo">BBOX</th><th class="svelte-1vgb4qo">Created</th></tr></thead><tbody></tbody></table>'),Mp=lt('<div class="project-list"><h2>Projects</h2> <!></div>');function Sp(n,e){Bi(e,!1);let t=Rt(e,"apiUrl",24,()=>"http://localhost:8000"),i=Rt(e,"selectedId",8,null);const r=Ks();let s=bt([]),o=bt(!0),a=bt(null);ac(async()=>{try{const p=await fetch(`${t()}/projects`);if(!p.ok)throw new Error(`HTTP ${p.status}`);Ce(s,await p.json())}catch(p){Ce(a,p.message)}finally{Ce(o,!1)}});function l(p){r("select",p)}function c(p){return p?new Date(p).toLocaleDateString():"-"}_s();var u=Mp(),d=Me(ye(u),2);{var h=p=>{var f=mp();at(p,f)},m=p=>{var f=_p(),y=ye(f);dn(()=>Ft(y,`Error: ${K(a)??""}`)),at(p,f)},_=p=>{var f=gp();at(p,f)},g=p=>{var f=xp(),y=Me(ye(f));ip(y,5,()=>K(s),tp,(T,M)=>{var C=vp();let R;var A=ye(C),L=ye(A),E=Me(A),S=ye(E),P=Me(E),G=ye(P),k=Me(P),Z=ye(k);dn(($,q)=>{R=lp(C,1,"svelte-1vgb4qo",null,R,{selected:K(M).id===i()}),Ft(L,(K(M),hn(()=>K(M).name))),Ft(S,(K(M),hn(()=>K(M).description||"-"))),Ft(G,$),Ft(Z,q)},[()=>(K(M),hn(()=>K(M).bbox.join(", "))),()=>(K(M),hn(()=>c(K(M).created_at)))]),In("click",C,()=>l(K(M))),In("keydown",C,$=>$.key==="Enter"&&l(K(M))),at(T,C)}),at(p,f)};Nn(d,p=>{K(o)?p(h):K(a)?p(m,1):(K(s),hn(()=>K(s).length===0)?p(_,2):p(g,-1))})}at(n,u),zi()}var Ep=lt('<form class="project-form"><div class="field"><label>Name</label> <input type="text" required=""/></div> <div class="field"><label>Description</label> <textarea></textarea></div> <div class="bbox"><h4>Bounding Box (EPSG:2056)</h4> <div class="row"><label>Min X</label> <input type="number"/></div> <div class="row"><label>Min Y</label> <input type="number"/></div> <div class="row"><label>Max X</label> <input type="number"/></div> <div class="row"><label>Max Y</label> <input type="number"/></div></div> <button type="submit">Create Project</button></form>');function yp(n,e){Bi(e,!1);let t=Rt(e,"name",12,""),i=Rt(e,"description",12,""),r=Rt(e,"minx",12,2788e3),s=Rt(e,"miny",12,1181e3),o=Rt(e,"maxx",12,2792e3),a=Rt(e,"maxy",12,1185e3);const l=Ks();function c(L){L.preventDefault(),l("submit",{name:t(),description:i(),bbox:[r(),s(),o(),a()]})}_s();var u=Ep(),d=ye(u),h=Me(ye(d),2),m=Me(d,2),_=Me(ye(m),2),g=Me(m,2),p=Me(ye(g),2),f=Me(ye(p),2),y=Me(p,2),T=Me(ye(y),2),M=Me(y,2),C=Me(ye(M),2),R=Me(M,2),A=Me(ye(R),2);Xn(h,t),Xn(_,i),Xn(f,r),Xn(T,s),Xn(C,o),Xn(A,a),In("submit",u,c),at(n,u),zi()}var Tp=lt('<p class="success">✓ GPX uploaded successfully!</p>'),bp=lt("<p> </p>"),Ap=lt('<p class="error"> </p>'),wp=lt('<input type="file" accept=".gpx"/> <!> <button> </button> <!>',1),Rp=lt('<div class="gpx-upload"><h3>Upload GPX Track</h3> <!></div>');function Cp(n,e){Bi(e,!1);let t=Rt(e,"projectId",8,0),i=Rt(e,"apiUrl",24,()=>"http://localhost:8000"),r=bt(null),s=bt(!1),o=bt(null),a=bt(!1);const l=Ks();function c(g){const p=g.target;p.files&&p.files.length>0&&(Ce(r,p.files[0]),Ce(o,null),Ce(a,!1))}async function u(){if(K(r)){Ce(s,!0),Ce(o,null);try{const g=new FormData;g.append("file",K(r)),g.append("project_id",String(t())),g.append("name",K(r).name);const p=await fetch(`${i()}/gpx`,{method:"POST",body:g});if(!p.ok)throw new Error(`HTTP ${p.status}`);Ce(a,!0),l("uploaded",{file:K(r),status:"success"})}catch(g){Ce(o,g.message)}finally{Ce(s,!1)}}}_s();var d=Rp(),h=Me(ye(d),2);{var m=g=>{var p=Tp();at(g,p)},_=g=>{var p=wp(),f=ec(p),y=Me(f,2);{var T=L=>{var E=bp(),S=ye(E);dn(P=>Ft(S,`Selected: ${K(r),hn(()=>K(r).name)??""} (${P??""} KB)`),[()=>(K(r),hn(()=>(K(r).size/1024).toFixed(1)))]),at(L,E)};Nn(y,L=>{K(r)&&L(T)})}var M=Me(y,2),C=ye(M),R=Me(M,2);{var A=L=>{var E=Ap(),S=ye(E);dn(()=>Ft(S,`Error: ${K(o)??""}`)),at(L,E)};Nn(R,L=>{K(o)&&L(A)})}dn(()=>{f.disabled=K(s),M.disabled=!K(r)||K(s),Ft(C,K(s)?"Uploading...":"Upload GPX")}),In("change",f,c),In("click",M,u),at(g,p)};Nn(h,g=>{K(a)?g(m):g(_,-1)})}at(n,d),zi()}var Pp=lt('<div class="rendering-controls"><h3>Rendering Parameters</h3> <div class="field"><label>Profile</label> <select><option>default</option></select></div> <div class="field"><label>Resolution (m/px)</label> <input type="number" step="0.1" min="0.1" max="2.0"/></div> <div class="field"><label>Max Texture Dim</label> <select><option>4096</option><option>8192</option><option>16384</option></select></div> <div class="field"><label>Mesh Stride</label> <input type="number" min="1" max="16"/></div> <button>Apply Parameters</button></div>');function Dp(n,e){Bi(e,!1);let t=Rt(e,"profile",12,"default"),i=Rt(e,"resolutionM",12,.5),r=Rt(e,"maxTextureDim",12,8192),s=Rt(e,"stride",12,2);const o=Ks();function a(){o("apply",{profile:t(),resolutionM:i(),maxTextureDim:r(),stride:s()})}_s();var l=Pp(),c=Me(ye(l),2),u=Me(ye(c),2),d=ye(u);d.value=d.__value="default";var h=Me(c,2),m=Me(ye(h),2),_=Me(h,2),g=Me(ye(_),2),p=ye(g);p.value=p.__value="4096";var f=Me(p);f.value=f.__value="8192";var y=Me(f);y.value=y.__value="16384";var T=Me(_,2),M=Me(ye(T),2),C=Me(T,2);Vc(u,t),Xn(m,i),Vc(g,r),Xn(M,s),In("click",C,a),at(n,l),zi()}var Lp=lt('<div class="progress-bar"><div class="progress-fill"></div></div> <p> </p>',1),Up=lt('<p class="success">✓ Task completed successfully!</p>'),Ip=lt('<p class="error"> </p>'),Np=lt("<p> </p>"),Fp=lt("<p>Waiting for task to start...</p>"),Op=lt('<div class="task-progress"><!></div>');function Bp(n,e){Bi(e,!1);let t=Rt(e,"taskId",8,""),i=Rt(e,"apiUrl",24,()=>"http://localhost:8000");const r=Ks();let s=bt(""),o=bt(0),a=bt(""),l=bt(null),c=null,u=!1;ac(()=>{async function y(){try{const T=await fetch(`${i()}/tasks/${t()}`);if(!T.ok)throw new Error(`HTTP ${T.status}`);const M=await T.json();Ce(s,M.status),typeof M.progress=="number"?Ce(o,M.progress):M.progress&&typeof M.progress=="object"&&(Ce(a,M.progress.message||M.progress.step||K(a)),typeof M.progress.progress=="number"&&Ce(o,M.progress.progress)),M.message&&(Ce(l,M.status==="FAILURE"?M.message:null),Ce(a,M.message)),!u&&(K(s)==="SUCCESS"||K(s)==="FAILURE")&&(u=!0,r("complete",M),c&&clearInterval(c))}catch(T){Ce(l,T.message)}}return y(),c=window.setInterval(y,2e3),()=>{c&&clearInterval(c)}}),_s();var d=Op(),h=ye(d);{var m=y=>{var T=Lp(),M=ec(T),C=ye(M),R=Me(M,2),A=ye(R);dn(()=>{cp(C,`width: ${K(o)*100}%`),Ft(A,`Status: ${K(s)??""} - ${K(a)??""}`)}),at(y,T)},_=y=>{var T=Up();at(y,T)},g=y=>{var T=Ip(),M=ye(T);dn(()=>Ft(M,`✗ Task failed: ${K(l)??""}`)),at(y,T)},p=y=>{var T=Np(),M=ye(T);dn(()=>Ft(M,`Status: ${K(s)??""}`)),at(y,T)},f=y=>{var T=Fp();at(y,T)};Nn(h,y=>{K(s)==="PENDING"||K(s)==="STARTED"?y(m):K(s)==="SUCCESS"?y(_,1):K(s)==="FAILURE"?y(g,2):K(s)?y(p,3):y(f,-1)})}at(n,d),zi()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="172",Gr={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zp=0,Wc=1,Hp=2,Nh=1,kp=2,ai=3,Fi=0,nn=1,Yn=2,Ui=0,Wr=1,Xc=2,qc=3,Yc=4,Vp=5,Zi=100,Gp=101,Wp=102,Xp=103,qp=104,Yp=200,jp=201,Kp=202,Zp=203,ll=204,cl=205,$p=206,Jp=207,Qp=208,em=209,tm=210,nm=211,im=212,rm=213,sm=214,ul=0,hl=1,fl=2,ss=3,dl=4,pl=5,ml=6,_l=7,Fh=0,am=1,om=2,Ii=0,lm=1,cm=2,um=3,Oh=4,hm=5,fm=6,dm=7,Bh=300,as=301,os=302,gl=303,vl=304,ro=306,xl=1e3,er=1001,Ml=1002,kn=1003,pm=1004,ra=1005,zn=1006,go=1007,Di=1008,gi=1009,zh=1010,Hh=1011,zs=1012,lc=1013,mr=1014,fi=1015,Zs=1016,cc=1017,uc=1018,ls=1020,kh=35902,Vh=1021,Gh=1022,Hn=1023,Wh=1024,Xh=1025,Xr=1026,cs=1027,qh=1028,hc=1029,Yh=1030,fc=1031,dc=1033,La=33776,Ua=33777,Ia=33778,Na=33779,Sl=35840,El=35841,yl=35842,Tl=35843,bl=36196,Al=37492,wl=37496,Rl=37808,Cl=37809,Pl=37810,Dl=37811,Ll=37812,Ul=37813,Il=37814,Nl=37815,Fl=37816,Ol=37817,Bl=37818,zl=37819,Hl=37820,kl=37821,Fa=36492,Vl=36494,Gl=36495,jh=36283,Wl=36284,Xl=36285,ql=36286,mm=3200,_m=3201,Kh=0,gm=1,wi="",en="srgb",us="srgb-linear",Ya="linear",ut="srgb",Sr=7680,jc=519,vm=512,xm=513,Mm=514,Zh=515,Sm=516,Em=517,ym=518,Tm=519,Kc=35044,Zc="300 es",di=2e3,ja=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oa=Math.PI/180,Yl=180/Math.PI;function $s(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function bm(n,e){return(n%e+e)%e}function vo(n,e,t){return(1-t)*n+t*e}function Es(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Am={DEG2RAD:Oa};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],_=i[8],g=r[0],p=r[3],f=r[6],y=r[1],T=r[4],M=r[7],C=r[2],R=r[5],A=r[8];return s[0]=o*g+a*y+l*C,s[3]=o*p+a*T+l*R,s[6]=o*f+a*M+l*A,s[1]=c*g+u*y+d*C,s[4]=c*p+u*T+d*R,s[7]=c*f+u*M+d*A,s[2]=h*g+m*y+_*C,s[5]=h*p+m*T+_*R,s[8]=h*f+m*M+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,m=c*s-o*l,_=t*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xo.makeScale(e,t)),this}rotate(e){return this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xo=new Be;function $h(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wm(){const n=Hs("canvas");return n.style.display="block",n}const $c={};function Fr(n){n in $c||($c[n]=!0,console.warn(n))}function Rm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Cm(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Pm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Jc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dm(){const n={enabled:!0,workingColorSpace:us,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?Ya:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[us]:{primaries:e,whitePoint:i,transfer:Ya,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const tt=Dm();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Er;class Lm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=Hs("canvas")),Er.width=e.width,Er.height=e.height;const i=Er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Um=0;class Jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=$s(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mo(r[o].image)):s.push(Mo(r[o]))}else s=Mo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Im=0;class Yt extends vr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=er,r=er,s=zn,o=Di,a=Hn,l=gi,c=Yt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=$s(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xl:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xl:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Bh;Yt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],_=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(m+1)/2,C=(f+1)/2,R=(u+h)/4,A=(d+g)/4,L=(_+p)/4;return T>M&&T>C?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=A/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=L/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(d-g)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nm extends vr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Jh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends Nm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qh extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fm extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==h||c!==m||u!==_){let p=1-a;const f=l*h+c*m+u*_+d*g,y=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const C=Math.sqrt(T),R=Math.atan2(C,f*y);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const M=a*y;if(l=l*p+h*M,c=c*p+m*M,u=u*p+_*M,d=d*p+g*M,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*d+l*m-c*h,e[t+1]=l*_+u*h+c*d-a*m,e[t+2]=c*_+u*m+a*h-l*d,e[t+3]=u*_-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"YXZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"ZXY":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"ZYX":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"YZX":this._x=h*u*d+c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d-h*m*_;break;case"XZY":this._x=h*u*d-c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new B,eu=new gr;class gs{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(s,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sa.copy(i.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),aa.subVectors(this.max,ys),yr.subVectors(e.a,ys),Tr.subVectors(e.b,ys),br.subVectors(e.c,ys),Mi.subVectors(Tr,yr),Si.subVectors(br,Tr),Gi.subVectors(yr,br);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Gi.z,Gi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Gi.z,0,-Gi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Gi.y,Gi.x,0];return!Eo(t,yr,Tr,br,aa)||(t=[1,0,0,0,1,0,0,0,1],!Eo(t,yr,Tr,br,aa))?!1:(oa.crossVectors(Mi,Si),t=[oa.x,oa.y,oa.z],Eo(t,yr,Tr,br,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new B,new B,new B,new B,new B,new B,new B,new B],Rn=new B,sa=new gs,yr=new B,Tr=new B,br=new B,Mi=new B,Si=new B,Gi=new B,ys=new B,aa=new B,oa=new B,Wi=new B;function Eo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Wi.fromArray(n,s);const a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Om=new gs,Ts=new B,yo=new B;class pc{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Om.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ts,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(yo)),this.expandByPoint(Ts.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new B,To=new B,la=new B,Ei=new B,bo=new B,ca=new B,Ao=new B;class ef{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){To.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(To);const s=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=Ei.dot(this.direction),l=-Ei.dot(la),c=Ei.lengthSq(),u=Math.abs(1-o*o);let d,h,m,_;if(u>0)if(d=o*l-a,h=o*a-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(To).addScaledVector(la,h),m}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,r,s){bo.subVectors(t,e),ca.subVectors(i,e),Ao.crossVectors(bo,ca);let o=this.direction.dot(Ao),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);const l=a*this.direction.dot(ca.crossVectors(Ei,ca));if(l<0)return null;const c=a*this.direction.dot(bo.cross(Ei));if(c<0||l+c>o)return null;const u=-a*Ei.dot(Ao);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,r,s,o,a,l,c,u,d,h,m,_,g,p){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,h,m,_,g,p)}set(e,t,i,r,s,o,a,l,c,u,d,h,m,_,g,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*d,_=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,_=c*u,g=c*d;t[0]=h+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,_=c*u,g=c*d;t[0]=h-g*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,_=a*u,g=a*d;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-h*d,t[8]=_*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=o*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bm,e,zm)}lookAt(e,t,i){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),yi.crossVectors(i,an),yi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),yi.crossVectors(i,an)),yi.normalize(),ua.crossVectors(an,yi),r[0]=yi.x,r[4]=ua.x,r[8]=an.x,r[1]=yi.y,r[5]=ua.y,r[9]=an.y,r[2]=yi.z,r[6]=ua.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],_=i[2],g=i[6],p=i[10],f=i[14],y=i[3],T=i[7],M=i[11],C=i[15],R=r[0],A=r[4],L=r[8],E=r[12],S=r[1],P=r[5],G=r[9],k=r[13],Z=r[2],$=r[6],q=r[10],ee=r[14],F=r[3],J=r[7],se=r[11],ve=r[15];return s[0]=o*R+a*S+l*Z+c*F,s[4]=o*A+a*P+l*$+c*J,s[8]=o*L+a*G+l*q+c*se,s[12]=o*E+a*k+l*ee+c*ve,s[1]=u*R+d*S+h*Z+m*F,s[5]=u*A+d*P+h*$+m*J,s[9]=u*L+d*G+h*q+m*se,s[13]=u*E+d*k+h*ee+m*ve,s[2]=_*R+g*S+p*Z+f*F,s[6]=_*A+g*P+p*$+f*J,s[10]=_*L+g*G+p*q+f*se,s[14]=_*E+g*k+p*ee+f*ve,s[3]=y*R+T*S+M*Z+C*F,s[7]=y*A+T*P+M*$+C*J,s[11]=y*L+T*G+M*q+C*se,s[15]=y*E+T*k+M*ee+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],_=e[3],g=e[7],p=e[11],f=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+g*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+f*(-r*a*u-t*l*d+t*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],_=e[12],g=e[13],p=e[14],f=e[15],y=d*p*c-g*h*c+g*l*m-a*p*m-d*l*f+a*h*f,T=_*h*c-u*p*c-_*l*m+o*p*m+u*l*f-o*h*f,M=u*g*c-_*d*c+_*a*m-o*g*m-u*a*f+o*d*f,C=_*d*l-u*g*l-_*a*h+o*g*h+u*a*p-o*d*p,R=t*y+i*T+r*M+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=y*A,e[1]=(g*h*s-d*p*s-g*r*m+i*p*m+d*r*f-i*h*f)*A,e[2]=(a*p*s-g*l*s+g*r*c-i*p*c-a*r*f+i*l*f)*A,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*A,e[4]=T*A,e[5]=(u*p*s-_*h*s+_*r*m-t*p*m-u*r*f+t*h*f)*A,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*f-t*l*f)*A,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*A,e[8]=M*A,e[9]=(_*d*s-u*g*s-_*i*m+t*g*m+u*i*f-t*d*f)*A,e[10]=(o*g*s-_*a*s+_*i*c-t*g*c-o*i*f+t*a*f)*A,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*m-t*a*m)*A,e[12]=C*A,e[13]=(u*g*r-_*d*r+_*i*h-t*g*h-u*i*p+t*d*p)*A,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*p-t*a*p)*A,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,m=s*u,_=s*d,g=o*u,p=o*d,f=a*d,y=l*c,T=l*u,M=l*d,C=i.x,R=i.y,A=i.z;return r[0]=(1-(g+f))*C,r[1]=(m+M)*C,r[2]=(_-T)*C,r[3]=0,r[4]=(m-M)*R,r[5]=(1-(h+f))*R,r[6]=(p+y)*R,r[7]=0,r[8]=(_+T)*A,r[9]=(p-y)*A,r[10]=(1-(h+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const o=Ar.set(r[4],r[5],r[6]).length(),a=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,u=1/o,d=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,t.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=di){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(a===di)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ja)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=di){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*c,m=(i+r)*u;let _,g;if(a===di)_=(o+s)*d,g=-2*d;else if(a===ja)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ar=new B,Cn=new Mt,Bm=new B(0,0,0),zm=new B(1,1,1),yi=new B,ua=new B,an=new B,tu=new Mt,nu=new gr;class Jn{constructor(e=0,t=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class tf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hm=0;const iu=new B,wr=new gr,ii=new Mt,ha=new B,bs=new B,km=new B,Vm=new gr,ru=new B(1,0,0),su=new B(0,1,0),au=new B(0,0,1),ou={type:"added"},Gm={type:"removed"},Rr={type:"childadded",child:null},wo={type:"childremoved",child:null};class Ot extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new B,t=new Jn,i=new gr,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Be}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ha.copy(e):ha.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(bs,ha,this.up):ii.lookAt(ha,bs,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(ii),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ou),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gm),wo.child=e,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ou),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Vm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new B(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new B,ri=new B,Ro=new B,si=new B,Cr=new B,Pr=new B,lu=new B,Co=new B,Po=new B,Do=new B,Lo=new xt,Uo=new xt,Io=new xt;class Fn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Pn.subVectors(e,t),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Pn.subVectors(r,t),ri.subVectors(i,t),Ro.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ri),l=Pn.dot(Ro),c=ri.dot(ri),u=ri.dot(Ro),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Lo.setScalar(0),Uo.setScalar(0),Io.setScalar(0),Lo.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,i),Io.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Lo,s.x),o.addScaledVector(Uo,s.y),o.addScaledVector(Io,s.z),o}static isFrontFacing(e,t,i,r){return Pn.subVectors(i,t),ri.subVectors(e,t),Pn.cross(ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Pn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,i),Pr.subVectors(s,i),Co.subVectors(e,i);const l=Cr.dot(Co),c=Pr.dot(Co);if(l<=0&&c<=0)return t.copy(i);Po.subVectors(e,r);const u=Cr.dot(Po),d=Pr.dot(Po);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Cr,o);Do.subVectors(e,s);const m=Cr.dot(Do),_=Pr.dot(Do);if(_>=0&&m<=_)return t.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Pr,a);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return lu.subVectors(s,r),a=(d-u)/(d-u+(m-_)),t.copy(r).addScaledVector(lu,a);const f=1/(p+g+h);return o=g*f,a=h*f,t.copy(i).addScaledVector(Cr,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},fa={h:0,s:0,l:0};function No(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=bm(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=No(o,s,e+1/3),this.g=No(o,s,e),this.b=No(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=en){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=nf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return tt.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ye(kt.r*255,0,255))*65536+Math.round(Ye(kt.g*255,0,255))*256+Math.round(Ye(kt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(kt.copy(this),t);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=en){tt.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,r=kt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(fa);const i=vo(Ti.h,fa.h,t),r=vo(Ti.s,fa.s,t),s=vo(Ti.l,fa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Je;Je.NAMES=nf;let Wm=0;class vs extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Wr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ll&&(i.blendSrc=this.blendSrc),this.blendDst!==cl&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rf extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new B,da=new ze;class Tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kc,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class sf extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mc extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hr extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Xm=0;const _n=new Mt,Fo=new Ot,Dr=new B,on=new gs,As=new gs,Lt=new B;class Hi extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($h(e)?mc:sf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];As.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(on.min,As.min),on.expandByPoint(Lt),Lt.addVectors(on.max,As.max),on.expandByPoint(Lt)):(on.expandByPoint(As.min),on.expandByPoint(As.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(e,c),Lt.add(Dr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new B,l[L]=new B;const c=new B,u=new B,d=new B,h=new ze,m=new ze,_=new ze,g=new B,p=new B;function f(L,E,S){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,L),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),u.sub(c),d.sub(c),m.sub(h),_.sub(h);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(P),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(P),a[L].add(g),a[E].add(g),a[S].add(g),l[L].add(p),l[E].add(p),l[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,E=y.length;L<E;++L){const S=y[L],P=S.start,G=S.count;for(let k=P,Z=P+G;k<Z;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new B,M=new B,C=new B,R=new B;function A(L){C.fromBufferAttribute(r,L),R.copy(C);const E=a[L];T.copy(E),T.sub(C.multiplyScalar(C.dot(E))).normalize(),M.crossVectors(R,E);const P=M.dot(l[L])<0?-1:1;o.setXYZW(L,T.x,T.y,T.z,P)}for(let L=0,E=y.length;L<E;++L){const S=y[L],P=S.start,G=S.count;for(let k=P,Z=P+G;k<Z;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let f=0;f<u;f++)h[_++]=c[m++]}return new Tn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new Mt,Xi=new ef,pa=new pc,uu=new B,ma=new B,_a=new B,ga=new B,Oo=new B,va=new B,hu=new B,xa=new B;class jn extends Ot{constructor(e=new Hi,t=new rf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){va.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Oo.fromBufferAttribute(d,e),o?va.addScaledVector(Oo,u):va.addScaledVector(Oo.sub(t),u))}t.add(va)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(pa.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(pa,uu)===null||Xi.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(cu.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(cu),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],f=o[p.materialIndex],y=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,C=T;M<C;M+=3){const R=a.getX(M),A=a.getX(M+1),L=a.getX(M+2);r=Ma(this,f,e,i,c,u,d,R,A,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const y=a.getX(p),T=a.getX(p+1),M=a.getX(p+2);r=Ma(this,o,e,i,c,u,d,y,T,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],f=o[p.materialIndex],y=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,C=T;M<C;M+=3){const R=M,A=M+1,L=M+2;r=Ma(this,f,e,i,c,u,d,R,A,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const y=p,T=p+1,M=p+2;r=Ma(this,o,e,i,c,u,d,y,T,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function qm(n,e,t,i,r,s,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fi,a),l===null)return null;xa.copy(a),xa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xa);return c<t.near||c>t.far?null:{distance:c,point:xa.clone(),object:n}}function Ma(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ma),n.getVertexPosition(l,_a),n.getVertexPosition(c,ga);const u=qm(n,e,t,i,ma,_a,ga,hu);if(u){const d=new B;Fn.getBarycoord(hu,ma,_a,ga,d),r&&(u.uv=Fn.getInterpolatedAttribute(r,a,l,c,d,new ze)),s&&(u.uv1=Fn.getInterpolatedAttribute(s,a,l,c,d,new ze)),o&&(u.normal=Fn.getInterpolatedAttribute(o,a,l,c,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Fn.getNormal(ma,_a,ga,h.normal),u.face=h,u.barycoord=d}return u}class Js extends Hi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hr(c,3)),this.setAttribute("normal",new hr(u,3)),this.setAttribute("uv",new hr(d,2));function _(g,p,f,y,T,M,C,R,A,L,E){const S=M/A,P=C/L,G=M/2,k=C/2,Z=R/2,$=A+1,q=L+1;let ee=0,F=0;const J=new B;for(let se=0;se<q;se++){const ve=se*P-k;for(let Ve=0;Ve<$;Ve++){const nt=Ve*S-G;J[g]=nt*y,J[p]=ve*T,J[f]=Z,c.push(J.x,J.y,J.z),J[g]=0,J[p]=0,J[f]=R>0?1:-1,u.push(J.x,J.y,J.z),d.push(Ve/A),d.push(1-se/L),ee+=1}}for(let se=0;se<L;se++)for(let ve=0;ve<A;ve++){const Ve=h+ve+$*se,nt=h+ve+$*(se+1),X=h+(ve+1)+$*(se+1),ie=h+(ve+1)+$*se;l.push(Ve,nt,ie),l.push(nt,X,ie),F+=6}a.addGroup(m,F,E),m+=F,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=hs(n[t]);for(const r in i)e[r]=i[r]}return e}function Ym(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function af(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const jm={clone:hs,merge:Wt};var Km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Km,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class of extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new B,fu=new ze,du=new ze;class En extends of{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yl*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,fu,du),t.subVectors(du,fu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=-90,Ur=1;class $m extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Lr,Ur,e,t);r.layers=this.layers,this.add(r);const s=new En(Lr,Ur,e,t);s.layers=this.layers,this.add(s);const o=new En(Lr,Ur,e,t);o.layers=this.layers,this.add(o);const a=new En(Lr,Ur,e,t);a.layers=this.layers,this.add(a);const l=new En(Lr,Ur,e,t);l.layers=this.layers,this.add(l);const c=new En(Lr,Ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class lf extends Yt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jm extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Js(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Ui});s.uniforms.tEquirect.value=t;const o=new jn(r,s),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=zn),new $m(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Qm extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bo=new B,e_=new B,t_=new Be;class Ai{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Bo.subVectors(i,t).cross(e_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Bo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||t_.getNormalMatrix(e),r=this.coplanarPoint(Bo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new pc,Sa=new B;class _c{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],_=r[9],g=r[10],p=r[11],f=r[12],y=r[13],T=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-m,M-f).normalize(),i[1].setComponents(l+s,h+c,p+m,M+f).normalize(),i[2].setComponents(l+o,h+u,p+_,M+y).normalize(),i[3].setComponents(l-o,h-u,p-_,M-y).normalize(),i[4].setComponents(l-a,h-d,p-g,M-T).normalize(),t===di)i[5].setComponents(l+a,h+d,p+g,M+T).normalize();else if(t===ja)i[5].setComponents(a,d,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Sa.x=r.normal.x>0?e.max.x:e.min.x,Sa.y=r.normal.y>0?e.max.y:e.min.y,Sa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ea extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}class cf extends Yt{constructor(e,t,i,r,s,o,a,l,c,u=Xr){if(u!==Xr&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xr&&(i=mr),i===void 0&&u===cs&&(i=ls),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class so extends Hi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,m=[],_=[],g=[],p=[];for(let f=0;f<u;f++){const y=f*h-o;for(let T=0;T<c;T++){const M=T*d-s;_.push(M,-y,0),g.push(0,0,1),p.push(T/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const T=y+c*f,M=y+c*(f+1),C=y+1+c*(f+1),R=y+1+c*f;m.push(T,M,R),m.push(M,C,R)}this.setIndex(m),this.setAttribute("position",new hr(_,3)),this.setAttribute("normal",new hr(g,3)),this.setAttribute("uv",new hr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.widthSegments,e.heightSegments)}}class n_ extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i_ extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r_ extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class s_{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const a_=new s_;class gc{constructor(e){this.manager=e!==void 0?e:a_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gc.DEFAULT_MATERIAL_NAME="__DEFAULT";class o_ extends gc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Hs("img");function l(){u(),pu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class l_ extends gc{constructor(e){super(e)}load(e,t,i,r){const s=new Yt,o=new o_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class vc extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class c_ extends vc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const zo=new Mt,mu=new B,_u=new B;class u_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _c,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uf extends of{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class h_ extends u_{constructor(){super(new uf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f_ extends vc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new h_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class d_ extends vc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class p_ extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class m_ extends vr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function vu(n,e,t,i){const r=__(i);switch(t){case Vh:return n*e;case Wh:return n*e;case Xh:return n*e*2;case qh:return n*e/r.components*r.byteLength;case hc:return n*e/r.components*r.byteLength;case Yh:return n*e*2/r.components*r.byteLength;case fc:return n*e*2/r.components*r.byteLength;case Gh:return n*e*3/r.components*r.byteLength;case Hn:return n*e*4/r.components*r.byteLength;case dc:return n*e*4/r.components*r.byteLength;case La:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ia:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:case Tl:return Math.max(n,16)*Math.max(e,8)/4;case Sl:case yl:return Math.max(n,8)*Math.max(e,8)/2;case bl:case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fa:case Vl:case Gl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jh:case Wl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xl:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function __(n){switch(n){case gi:case zh:return{byteLength:1,components:1};case zs:case Hh:case Zs:return{byteLength:2,components:1};case cc:case uc:return{byteLength:2,components:4};case mr:case lc:case fi:return{byteLength:4,components:1};case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function g_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<d.length;m++){const _=d[h],g=d[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let m=0,_=d.length;m<_;m++){const g=d[m];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var v_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x_=`#ifdef USE_ALPHAHASH
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
#endif`,M_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T_=`#ifdef USE_AOMAP
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
#endif`,b_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A_=`#ifdef USE_BATCHING
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
#endif`,w_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D_=`#ifdef USE_IRIDESCENCE
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
#endif`,L_=`#ifdef USE_BUMPMAP
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
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,k_=`#define PI 3.141592653589793
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
} // validated`,V_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G_=`vec3 transformedNormal = objectNormal;
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
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j_="gl_FragColor = linearToOutputTexel( gl_FragColor );",K_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z_=`#ifdef USE_ENVMAP
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
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J_=`#ifdef USE_ENVMAP
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
#endif`,Q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
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
}`,ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cg=`uniform bool receiveShadow;
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
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mg=`PhysicalMaterial material;
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
#endif`,_g=`struct PhysicalMaterial {
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
}`,gg=`
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
#endif`,vg=`#if defined( RE_IndirectDiffuse )
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wg=`#if defined( USE_POINTS_UV )
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
#endif`,Rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`#ifdef USE_MORPHTARGETS
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
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hg=`#ifdef USE_NORMALMAP
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
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nv=`float getShadowMask() {
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
}`,iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,av=`#ifdef USE_SKINNING
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
#endif`,ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
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
#endif`,fv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vv=`uniform sampler2D t2D;
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`#include <common>
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
}`,Tv=`#if DEPTH_PACKING == 3200
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
}`,bv=`#define DISTANCE
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
}`,Av=`#define DISTANCE
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`uniform float scale;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Dv=`#include <common>
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Uv=`#define LAMBERT
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
}`,Iv=`#define LAMBERT
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
}`,Nv=`#define MATCAP
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
}`,Fv=`#define MATCAP
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
}`,Ov=`#define NORMAL
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
}`,Bv=`#define NORMAL
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
}`,zv=`#define PHONG
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
}`,Hv=`#define PHONG
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
}`,kv=`#define STANDARD
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
}`,Vv=`#define STANDARD
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
}`,Gv=`#define TOON
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
}`,Wv=`#define TOON
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
}`,Xv=`uniform float size;
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
}`,qv=`uniform vec3 diffuse;
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
}`,Yv=`#include <common>
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
}`,jv=`uniform vec3 color;
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
}`,Kv=`uniform float rotation;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:v_,alphahash_pars_fragment:x_,alphamap_fragment:M_,alphamap_pars_fragment:S_,alphatest_fragment:E_,alphatest_pars_fragment:y_,aomap_fragment:T_,aomap_pars_fragment:b_,batching_pars_vertex:A_,batching_vertex:w_,begin_vertex:R_,beginnormal_vertex:C_,bsdfs:P_,iridescence_fragment:D_,bumpmap_pars_fragment:L_,clipping_planes_fragment:U_,clipping_planes_pars_fragment:I_,clipping_planes_pars_vertex:N_,clipping_planes_vertex:F_,color_fragment:O_,color_pars_fragment:B_,color_pars_vertex:z_,color_vertex:H_,common:k_,cube_uv_reflection_fragment:V_,defaultnormal_vertex:G_,displacementmap_pars_vertex:W_,displacementmap_vertex:X_,emissivemap_fragment:q_,emissivemap_pars_fragment:Y_,colorspace_fragment:j_,colorspace_pars_fragment:K_,envmap_fragment:Z_,envmap_common_pars_fragment:$_,envmap_pars_fragment:J_,envmap_pars_vertex:Q_,envmap_physical_pars_fragment:ug,envmap_vertex:eg,fog_vertex:tg,fog_pars_vertex:ng,fog_fragment:ig,fog_pars_fragment:rg,gradientmap_pars_fragment:sg,lightmap_pars_fragment:ag,lights_lambert_fragment:og,lights_lambert_pars_fragment:lg,lights_pars_begin:cg,lights_toon_fragment:hg,lights_toon_pars_fragment:fg,lights_phong_fragment:dg,lights_phong_pars_fragment:pg,lights_physical_fragment:mg,lights_physical_pars_fragment:_g,lights_fragment_begin:gg,lights_fragment_maps:vg,lights_fragment_end:xg,logdepthbuf_fragment:Mg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:yg,map_fragment:Tg,map_pars_fragment:bg,map_particle_fragment:Ag,map_particle_pars_fragment:wg,metalnessmap_fragment:Rg,metalnessmap_pars_fragment:Cg,morphinstance_vertex:Pg,morphcolor_vertex:Dg,morphnormal_vertex:Lg,morphtarget_pars_vertex:Ug,morphtarget_vertex:Ig,normal_fragment_begin:Ng,normal_fragment_maps:Fg,normal_pars_fragment:Og,normal_pars_vertex:Bg,normal_vertex:zg,normalmap_pars_fragment:Hg,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Vg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Wg,opaque_fragment:Xg,packing:qg,premultiplied_alpha_fragment:Yg,project_vertex:jg,dithering_fragment:Kg,dithering_pars_fragment:Zg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:Jg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:ev,shadowmap_vertex:tv,shadowmask_pars_fragment:nv,skinbase_vertex:iv,skinning_pars_vertex:rv,skinning_vertex:sv,skinnormal_vertex:av,specularmap_fragment:ov,specularmap_pars_fragment:lv,tonemapping_fragment:cv,tonemapping_pars_fragment:uv,transmission_fragment:hv,transmission_pars_fragment:fv,uv_pars_fragment:dv,uv_pars_vertex:pv,uv_vertex:mv,worldpos_vertex:_v,background_vert:gv,background_frag:vv,backgroundCube_vert:xv,backgroundCube_frag:Mv,cube_vert:Sv,cube_frag:Ev,depth_vert:yv,depth_frag:Tv,distanceRGBA_vert:bv,distanceRGBA_frag:Av,equirect_vert:wv,equirect_frag:Rv,linedashed_vert:Cv,linedashed_frag:Pv,meshbasic_vert:Dv,meshbasic_frag:Lv,meshlambert_vert:Uv,meshlambert_frag:Iv,meshmatcap_vert:Nv,meshmatcap_frag:Fv,meshnormal_vert:Ov,meshnormal_frag:Bv,meshphong_vert:zv,meshphong_frag:Hv,meshphysical_vert:kv,meshphysical_frag:Vv,meshtoon_vert:Gv,meshtoon_frag:Wv,points_vert:Xv,points_frag:qv,shadow_vert:Yv,shadow_frag:jv,sprite_vert:Kv,sprite_frag:Zv},ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},qn={basic:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Wt([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Wt([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Wt([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Wt([ae.common,ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Wt([ae.lights,ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};qn.physical={uniforms:Wt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ya={r:0,b:0,g:0},Yi=new Jn,$v=new Mt;function Jv(n,e,t,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,d=null,h=0,m=null;function _(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function g(T){let M=!1;const C=_(T);C===null?f(a,l):C&&C.isColor&&(f(C,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(T,M){const C=_(M);C&&(C.isCubeTexture||C.mapping===ro)?(u===void 0&&(u=new jn(new Js(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:hs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Yi.copy(M.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($v.makeRotationFromEuler(Yi)),u.material.toneMapped=tt.getTransfer(C.colorSpace)!==ut,(d!==C||h!==C.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,h=C.version,m=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new jn(new so(2,2),new Oi({name:"BackgroundMaterial",uniforms:hs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=tt.getTransfer(C.colorSpace)!==ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,h=C.version,m=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,M){T.getRGB(ya,af(n)),i.buffers.color.setClear(ya.r,ya.g,ya.b,M,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:g,addToRenderList:p,dispose:y}}function Qv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,P,G,k,Z){let $=!1;const q=d(k,G,P);s!==q&&(s=q,c(s.object)),$=m(S,k,G,Z),$&&_(S,k,G,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(S,P,G,k),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,P,G){const k=G.wireframe===!0;let Z=i[S.id];Z===void 0&&(Z={},i[S.id]=Z);let $=Z[P.id];$===void 0&&($={},Z[P.id]=$);let q=$[k];return q===void 0&&(q=h(l()),$[k]=q),q}function h(S){const P=[],G=[],k=[];for(let Z=0;Z<t;Z++)P[Z]=0,G[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:k,object:S,attributes:{},index:null}}function m(S,P,G,k){const Z=s.attributes,$=P.attributes;let q=0;const ee=G.getAttributes();for(const F in ee)if(ee[F].location>=0){const se=Z[F];let ve=$[F];if(ve===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),se===void 0||se.attribute!==ve||ve&&se.data!==ve.data)return!0;q++}return s.attributesNum!==q||s.index!==k}function _(S,P,G,k){const Z={},$=P.attributes;let q=0;const ee=G.getAttributes();for(const F in ee)if(ee[F].location>=0){let se=$[F];se===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));const ve={};ve.attribute=se,se&&se.data&&(ve.data=se.data),Z[F]=ve,q++}s.attributes=Z,s.attributesNum=q,s.index=k}function g(){const S=s.newAttributes;for(let P=0,G=S.length;P<G;P++)S[P]=0}function p(S){f(S,0)}function f(S,P){const G=s.newAttributes,k=s.enabledAttributes,Z=s.attributeDivisors;G[S]=1,k[S]===0&&(n.enableVertexAttribArray(S),k[S]=1),Z[S]!==P&&(n.vertexAttribDivisor(S,P),Z[S]=P)}function y(){const S=s.newAttributes,P=s.enabledAttributes;for(let G=0,k=P.length;G<k;G++)P[G]!==S[G]&&(n.disableVertexAttribArray(G),P[G]=0)}function T(S,P,G,k,Z,$,q){q===!0?n.vertexAttribIPointer(S,P,G,Z,$):n.vertexAttribPointer(S,P,G,k,Z,$)}function M(S,P,G,k){g();const Z=k.attributes,$=G.getAttributes(),q=P.defaultAttributeValues;for(const ee in $){const F=$[ee];if(F.location>=0){let J=Z[ee];if(J===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const se=J.normalized,ve=J.itemSize,Ve=e.get(J);if(Ve===void 0)continue;const nt=Ve.buffer,X=Ve.type,ie=Ve.bytesPerElement,ge=X===n.INT||X===n.UNSIGNED_INT||J.gpuType===lc;if(J.isInterleavedBufferAttribute){const oe=J.data,Ae=oe.stride,Pe=J.offset;if(oe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<F.locationSize;Ge++)f(F.location+Ge,oe.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ge=0;Ge<F.locationSize;Ge++)p(F.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Ge=0;Ge<F.locationSize;Ge++)T(F.location+Ge,ve/F.locationSize,X,se,Ae*ie,(Pe+ve/F.locationSize*Ge)*ie,ge)}else{if(J.isInstancedBufferAttribute){for(let oe=0;oe<F.locationSize;oe++)f(F.location+oe,J.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let oe=0;oe<F.locationSize;oe++)p(F.location+oe);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let oe=0;oe<F.locationSize;oe++)T(F.location+oe,ve/F.locationSize,X,se,ve*ie,ve/F.locationSize*oe*ie,ge)}}else if(q!==void 0){const se=q[ee];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(F.location,se);break;case 3:n.vertexAttrib3fv(F.location,se);break;case 4:n.vertexAttrib4fv(F.location,se);break;default:n.vertexAttrib1fv(F.location,se)}}}}y()}function C(){L();for(const S in i){const P=i[S];for(const G in P){const k=P[G];for(const Z in k)u(k[Z].object),delete k[Z];delete P[G]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const G in P){const k=P[G];for(const Z in k)u(k[Z].object),delete k[Z];delete P[G]}delete i[S.id]}function A(S){for(const P in i){const G=i[P];if(G[S.id]===void 0)continue;const k=G[S.id];for(const Z in k)u(k[Z].object),delete k[Z];delete G[S.id]}}function L(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function e0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_];t.update(m,i,1)}function l(c,u,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*h[g];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function t0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Hn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==gi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fi&&!L)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:C,maxSamples:R}}function n0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ai,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const y=s?0:i,T=y*4;let M=f.clippingState||null;l.value=M,M=u(_,h,T,m);for(let C=0;C!==T;++C)M[C]=t[C];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const f=m+g*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let T=0,M=m;T!==g;++T,M+=4)o.copy(d[T]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function i0(n){let e=new WeakMap;function t(o,a){return a===gl?o.mapping=as:a===vl&&(o.mapping=os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gl||a===vl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jm(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Hr=4,xu=[.125,.215,.35,.446,.526,.582],$i=20,Ho=new uf,Mu=new Je;let ko=null,Vo=0,Go=0,Wo=!1;const Ki=(1+Math.sqrt(5))/2,Ir=1/Ki,Su=[new B(-Ki,Ir,0),new B(Ki,Ir,0),new B(-Ir,0,Ki),new B(Ir,0,Ki),new B(0,Ki,-Ir),new B(0,Ki,Ir),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ko=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko,Vo,Go),this._renderer.xr.enabled=Wo,e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Zs,format:Hn,colorSpace:us,depthBuffer:!1},r=yu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r0(s)),this._blurMaterial=s0(s,e,t)}return r}_compileMaterial(e){const t=new jn(this._lodPlanes[0],e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,i,r){const a=new En(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Mu),u.toneMapping=Ii,u.autoClear=!1;const m=new rf({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new jn(new Js,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Mu),g=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const T=this._cubeSize;Ta(r,y*T,f>2?T:0,T,T),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===as||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ta(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ho)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Su[(r-s-1)%Su.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new jn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*$i-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):$i;p>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$i}`);const f=[];let y=0;for(let A=0;A<$i;++A){const L=A/g,E=Math.exp(-L*L/2);f.push(E),A===0?y+=E:A<p&&(y+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=_,h.mipInt.value=T-i;const M=this._sizeLods[r],C=3*M*(r>T-Hr?r-T+Hr:0),R=4*(this._cubeSize-M);Ta(t,C,R,3*M,2*M),l.setRenderTarget(t),l.render(d,Ho)}}function r0(n){const e=[],t=[],i=[];let r=n;const s=n-Hr+1+xu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Hr?l=xu[o-n+Hr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,g=3,p=2,f=1,y=new Float32Array(g*_*m),T=new Float32Array(p*_*m),M=new Float32Array(f*_*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,L=R>2?0:-1,E=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];y.set(E,g*_*R),T.set(h,p*_*R);const S=[R,R,R,R,R,R];M.set(S,f*_*R)}const C=new Hi;C.setAttribute("position",new Tn(y,g)),C.setAttribute("uv",new Tn(T,p)),C.setAttribute("faceIndex",new Tn(M,f)),e.push(C),r>Hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yu(n,e,t){const i=new _r(n,e,t);return i.texture.mapping=ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ta(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function s0(n,e,t){const i=new Float32Array($i),r=new B(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Tu(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function bu(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function a0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===gl||l===vl,u=l===as||l===os;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Eu(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Eu(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function o0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Fr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function l0(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function c(d){const h=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const y=m.array;g=m.version;for(let T=0,M=y.length;T<M;T+=3){const C=y[T+0],R=y[T+1],A=y[T+2];h.push(C,R,R,A,A,C)}}else if(_!==void 0){const y=_.array;g=_.version;for(let T=0,M=y.length/3-1;T<M;T+=3){const C=T+0,R=T+1,A=T+2;h.push(C,R,R,A,A,C)}}else return;const p=new($h(h)?mc:sf)(h,1);p.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function c0(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*o),t.update(m,i,1)}function c(h,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,h*o,_),t.update(m,i,_))}function u(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];t.update(p,i,1)}function d(h,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/o,m[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,g,0,_);let f=0;for(let y=0;y<_;y++)f+=m[y]*g[y];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function u0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function h0(n,e,t){const i=new WeakMap,r=new xt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),p===!0&&(M=3);let C=a.attributes.position.count*M,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*R*4*d),L=new Qh(A,C,R,d);L.type=fi,L.needsUpdate=!0;const E=M*4;for(let P=0;P<d;P++){const G=f[P],k=y[P],Z=T[P],$=C*R*4*P;for(let q=0;q<G.count;q++){const ee=q*E;_===!0&&(r.fromBufferAttribute(G,q),A[$+ee+0]=r.x,A[$+ee+1]=r.y,A[$+ee+2]=r.z,A[$+ee+3]=0),g===!0&&(r.fromBufferAttribute(k,q),A[$+ee+4]=r.x,A[$+ee+5]=r.y,A[$+ee+6]=r.z,A[$+ee+7]=0),p===!0&&(r.fromBufferAttribute(Z,q),A[$+ee+8]=r.x,A[$+ee+9]=r.y,A[$+ee+10]=r.z,A[$+ee+11]=Z.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new ze(C,R)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function f0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ff=new Yt,Au=new cf(1,1),df=new Qh,pf=new Fm,mf=new lf,wu=[],Ru=[],Cu=new Float32Array(16),Pu=new Float32Array(9),Du=new Float32Array(4);function xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wu[r];if(s===void 0&&(s=new Float32Array(r),wu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ao(n,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function d0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function p0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function m0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function g0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Du.set(i),n.uniformMatrix2fv(this.addr,!1,Du),Dt(t,i)}}function v0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Pu.set(i),n.uniformMatrix3fv(this.addr,!1,Pu),Dt(t,i)}}function x0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Cu.set(i),n.uniformMatrix4fv(this.addr,!1,Cu),Dt(t,i)}}function M0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function S0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function E0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function T0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function b0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function A0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function R0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Au.compareFunction=Zh,s=Au):s=ff,t.setTexture2D(e||s,r)}function C0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||pf,r)}function P0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mf,r)}function D0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||df,r)}function L0(n){switch(n){case 5126:return d0;case 35664:return p0;case 35665:return m0;case 35666:return _0;case 35674:return g0;case 35675:return v0;case 35676:return x0;case 5124:case 35670:return M0;case 35667:case 35671:return S0;case 35668:case 35672:return E0;case 35669:case 35673:return y0;case 5125:return T0;case 36294:return b0;case 36295:return A0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return D0}}function U0(n,e){n.uniform1fv(this.addr,e)}function I0(n,e){const t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function N0(n,e){const t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function F0(n,e){const t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function O0(n,e){const t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function B0(n,e){const t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function z0(n,e){const t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function H0(n,e){n.uniform1iv(this.addr,e)}function k0(n,e){n.uniform2iv(this.addr,e)}function V0(n,e){n.uniform3iv(this.addr,e)}function G0(n,e){n.uniform4iv(this.addr,e)}function W0(n,e){n.uniform1uiv(this.addr,e)}function X0(n,e){n.uniform2uiv(this.addr,e)}function q0(n,e){n.uniform3uiv(this.addr,e)}function Y0(n,e){n.uniform4uiv(this.addr,e)}function j0(n,e,t){const i=this.cache,r=e.length,s=ao(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ff,s[o])}function K0(n,e,t){const i=this.cache,r=e.length,s=ao(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||pf,s[o])}function Z0(n,e,t){const i=this.cache,r=e.length,s=ao(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||mf,s[o])}function $0(n,e,t){const i=this.cache,r=e.length,s=ao(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||df,s[o])}function J0(n){switch(n){case 5126:return U0;case 35664:return I0;case 35665:return N0;case 35666:return F0;case 35674:return O0;case 35675:return B0;case 35676:return z0;case 5124:case 35670:return H0;case 35667:case 35671:return k0;case 35668:case 35672:return V0;case 35669:case 35673:return G0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return $0}}class Q0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=L0(t.type)}}class ex{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J0(t.type)}}class tx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function Lu(n,e){n.seq.push(e),n.map[e.id]=e}function nx(n,e,t){const i=n.name,r=i.length;for(Xo.lastIndex=0;;){const s=Xo.exec(i),o=Xo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Lu(t,c===void 0?new Q0(a,n,e):new ex(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new tx(a),Lu(t,d)),t=d}}}class Ba{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);nx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Uu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ix=37297;let rx=0;function sx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Iu=new Be;function ax(n){tt._getMatrix(Iu,tt.workingColorSpace,n);const e=`mat3( ${Iu.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case Ya:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Nu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sx(n.getShaderSource(e),o)}else return r}function ox(n,e){const t=ax(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lx(n,e){let t;switch(e){case lm:t="Linear";break;case cm:t="Reinhard";break;case um:t="Cineon";break;case Oh:t="ACESFilmic";break;case fm:t="AgX";break;case dm:t="Neutral";break;case hm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ba=new B;function cx(){tt.getLuminanceCoefficients(ba);const n=ba.x.toFixed(4),e=ba.y.toFixed(4),t=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ux(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function hx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ls(n){return n!==""}function Fu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(n){return n.replace(dx,mx)}const px=new Map;function mx(n,e){let t=ke[e];if(t===void 0){const i=px.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jl(t)}const _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(n){return n.replace(_x,gx)}function gx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function vx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function xx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case as:case os:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function Sx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case am:e="ENVMAP_BLENDING_MIX";break;case om:e="ENVMAP_BLENDING_ADD";break}return e}function Ex(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vx(t),c=xx(t),u=Mx(t),d=Sx(t),h=Ex(t),m=ux(t),_=hx(s),g=r.createProgram();let p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ls).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ls).join(`
`),f.length>0&&(f+=`
`)):(p=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),f=[zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?ke.tonemapping_pars_fragment:"",t.toneMapping!==Ii?lx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,ox("linearToOutputTexel",t.outputColorSpace),cx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),o=jl(o),o=Fu(o,t),o=Ou(o,t),a=jl(a),a=Fu(a,t),a=Ou(a,t),o=Bu(o),a=Bu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=y+p+o,M=y+f+a,C=Uu(r,r.VERTEX_SHADER,T),R=Uu(r,r.FRAGMENT_SHADER,M);r.attachShader(g,C),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(P){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(g).trim(),k=r.getShaderInfoLog(C).trim(),Z=r.getShaderInfoLog(R).trim();let $=!0,q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,R);else{const ee=Nu(r,C,"vertex"),F=Nu(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+ee+`
`+F)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||Z==="")&&(q=!1);q&&(P.diagnostics={runnable:$,programLog:G,vertexShader:{log:k,prefix:p},fragmentShader:{log:Z,prefix:f}})}r.deleteShader(C),r.deleteShader(R),L=new Ba(r,g),E=fx(r,g)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,ix)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=R,this}let Tx=0;class bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ax(e),t.set(e,i)),i}}class Ax{constructor(e){this.id=Tx++,this.code=e,this.usedTimes=0}}function wx(n,e,t,i,r,s,o){const a=new tf,l=new bx,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,S,P,G,k){const Z=G.fog,$=k.geometry,q=E.isMeshStandardMaterial?G.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),F=ee&&ee.mapping===ro?ee.image.height:null,J=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ve=se!==void 0?se.length:0;let Ve=0;$.morphAttributes.position!==void 0&&(Ve=1),$.morphAttributes.normal!==void 0&&(Ve=2),$.morphAttributes.color!==void 0&&(Ve=3);let nt,X,ie,ge;if(J){const st=qn[J];nt=st.vertexShader,X=st.fragmentShader}else nt=E.vertexShader,X=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const oe=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Pe=k.isInstancedMesh===!0,Ge=k.isBatchedMesh===!0,dt=!!E.map,Ke=!!E.matcap,mt=!!ee,w=!!E.aoMap,Vt=!!E.lightMap,We=!!E.bumpMap,Xe=!!E.normalMap,Se=!!E.displacementMap,ct=!!E.emissiveMap,Ee=!!E.metalnessMap,b=!!E.roughnessMap,v=E.anisotropy>0,O=E.clearcoat>0,Y=E.dispersion>0,Q=E.iridescence>0,W=E.sheen>0,xe=E.transmission>0,le=v&&!!E.anisotropyMap,re=O&&!!E.clearcoatMap,Ne=O&&!!E.clearcoatNormalMap,ne=O&&!!E.clearcoatRoughnessMap,pe=Q&&!!E.iridescenceMap,Re=Q&&!!E.iridescenceThicknessMap,De=W&&!!E.sheenColorMap,me=W&&!!E.sheenRoughnessMap,Ze=!!E.specularMap,He=!!E.specularColorMap,ft=!!E.specularIntensityMap,D=xe&&!!E.transmissionMap,ce=xe&&!!E.thicknessMap,V=!!E.gradientMap,j=!!E.alphaMap,fe=E.alphaTest>0,he=!!E.alphaHash,Fe=!!E.extensions;let gt=Ii;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(gt=n.toneMapping);const zt={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:nt,fragmentShader:X,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ge,batchingColor:Ge&&k._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&k.instanceColor!==null,instancingMorph:Pe&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:us,alphaToCoverage:!!E.alphaToCoverage,map:dt,matcap:Ke,envMap:mt,envMapMode:mt&&ee.mapping,envMapCubeUVHeight:F,aoMap:w,lightMap:Vt,bumpMap:We,normalMap:Xe,displacementMap:h&&Se,emissiveMap:ct,normalMapObjectSpace:Xe&&E.normalMapType===gm,normalMapTangentSpace:Xe&&E.normalMapType===Kh,metalnessMap:Ee,roughnessMap:b,anisotropy:v,anisotropyMap:le,clearcoat:O,clearcoatMap:re,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ne,dispersion:Y,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:Re,sheen:W,sheenColorMap:De,sheenRoughnessMap:me,specularMap:Ze,specularColorMap:He,specularIntensityMap:ft,transmission:xe,transmissionMap:D,thicknessMap:ce,gradientMap:V,opaque:E.transparent===!1&&E.blending===Wr&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:fe,alphaHash:he,combine:E.combine,mapUv:dt&&g(E.map.channel),aoMapUv:w&&g(E.aoMap.channel),lightMapUv:Vt&&g(E.lightMap.channel),bumpMapUv:We&&g(E.bumpMap.channel),normalMapUv:Xe&&g(E.normalMap.channel),displacementMapUv:Se&&g(E.displacementMap.channel),emissiveMapUv:ct&&g(E.emissiveMap.channel),metalnessMapUv:Ee&&g(E.metalnessMap.channel),roughnessMapUv:b&&g(E.roughnessMap.channel),anisotropyMapUv:le&&g(E.anisotropyMap.channel),clearcoatMapUv:re&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(E.sheenRoughnessMap.channel),specularMapUv:Ze&&g(E.specularMap.channel),specularColorMapUv:He&&g(E.specularColorMap.channel),specularIntensityMapUv:ft&&g(E.specularIntensityMap.channel),transmissionMapUv:D&&g(E.transmissionMap.channel),thicknessMapUv:ce&&g(E.thicknessMap.channel),alphaMapUv:j&&g(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Xe||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(dt||j),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ae,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:dt&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===ut,decodeVideoTextureEmissive:ct&&E.emissiveMap.isVideoTexture===!0&&tt.getTransfer(E.emissiveMap.colorSpace)===ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yn,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function f(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(y(S,E),T(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function y(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function T(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){const S=_[E.type];let P;if(S){const G=qn[S];P=jm.clone(G.uniforms)}else P=E.uniforms;return P}function C(E,S){let P;for(let G=0,k=u.length;G<k;G++){const Z=u[G];if(Z.cacheKey===S){P=Z,++P.usedTimes;break}}return P===void 0&&(P=new yx(n,S,E,s),u.push(P)),P}function R(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:L}}function Rx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Cx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ku(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,_,g,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=p),e++,f}function a(d,h,m,_,g,p){const f=o(d,h,m,_,g,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(d,h,m,_,g,p){const f=o(d,h,m,_,g,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||Cx),i.length>1&&i.sort(h||Hu),r.length>1&&r.sort(h||Hu)}function u(){for(let d=e,h=n.length;d<h;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Px(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ku,n.set(i,[o])):r>=s.length?(o=new ku,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Dx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Je};break;case"SpotLight":t={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Lx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ux=0;function Ix(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Nx(n){const e=new Dx,t=Lx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new Mt,o=new Mt;function a(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,g=0,p=0,f=0,y=0,T=0,M=0,C=0,R=0,A=0;c.sort(Ix);for(let E=0,S=c.length;E<S;E++){const P=c[E],G=P.color,k=P.intensity,Z=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=G.r*k,d+=G.g*k,h+=G.b*k;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],k);A++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,F=t.get(P);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,i.directionalShadow[m]=F,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=P.shadow.matrix,y++}i.directional[m]=q,m++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(G).multiplyScalar(k),q.distance=Z,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[g]=q;const ee=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,ee.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[g]=ee.matrix,P.castShadow){const F=t.get(P);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,i.spotShadow[g]=F,i.spotShadowMap[g]=$,M++}g++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(G).multiplyScalar(k),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=q,p++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const ee=P.shadow,F=t.get(P);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,F.shadowCameraNear=ee.camera.near,F.shadowCameraFar=ee.camera.far,i.pointShadow[_]=F,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=P.shadow.matrix,T++}i.point[_]=q,_++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(k),q.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[f]=q,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==p||L.hemiLength!==f||L.numDirectionalShadows!==y||L.numPointShadows!==T||L.numSpotShadows!==M||L.numSpotMaps!==C||L.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,L.directionalLength=m,L.pointLength=_,L.spotLength=g,L.rectAreaLength=p,L.hemiLength=f,L.numDirectionalShadows=y,L.numPointShadows=T,L.numSpotShadows=M,L.numSpotMaps=C,L.numLightProbes=A,i.version=Ux++)}function l(c,u){let d=0,h=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const T=c[f];if(T.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(T.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(T.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function Vu(n){const e=new Nx(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Fx(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Vu(n),e.set(r,[a])):s>=o.length?(a=new Vu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
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
}`;function zx(n,e,t){let i=new _c;const r=new ze,s=new ze,o=new xt,a=new i_({depthPacking:_m}),l=new r_,c={},u=t.maxTextureSize,d={[Fi]:nn,[nn]:Fi,[Yn]:Yn},h=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Ox,fragmentShader:Bx}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Hi;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new jn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let f=this.type;this.render=function(R,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Ui),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=f!==ai&&this.type===ai,Z=f===ai&&this.type!==ai;for(let $=0,q=R.length;$<q;$++){const ee=R[$],F=ee.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const J=F.getFrameExtents();if(r.multiply(J),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,F.mapSize.y=s.y)),F.map===null||k===!0||Z===!0){const ve=this.type!==ai?{minFilter:kn,magFilter:kn}:{};F.map!==null&&F.map.dispose(),F.map=new _r(r.x,r.y,ve),F.map.texture.name=ee.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const se=F.getViewportCount();for(let ve=0;ve<se;ve++){const Ve=F.getViewport(ve);o.set(s.x*Ve.x,s.y*Ve.y,s.x*Ve.z,s.y*Ve.w),G.viewport(o),F.updateMatrices(ee,ve),i=F.getFrustum(),M(A,L,F.camera,ee,this.type)}F.isPointLightShadow!==!0&&this.type===ai&&y(F,L),F.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(E,S,P)};function y(R,A){const L=e.update(g);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new _r(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,L,h,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,L,m,g,null)}function T(R,A,L,E){let S=null;const P=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=S.uuid,k=A.uuid;let Z=c[G];Z===void 0&&(Z={},c[G]=Z);let $=Z[k];$===void 0&&($=S.clone(),Z[k]=$,A.addEventListener("dispose",C)),S=$}if(S.visible=A.visible,S.wireframe=A.wireframe,E===ai?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=n.properties.get(S);G.light=L}return S}function M(R,A,L,E,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===ai)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const k=e.update(R),Z=R.material;if(Array.isArray(Z)){const $=k.groups;for(let q=0,ee=$.length;q<ee;q++){const F=$[q],J=Z[F.materialIndex];if(J&&J.visible){const se=T(R,J,E,S);R.onBeforeShadow(n,R,A,L,k,se,F),n.renderBufferDirect(L,null,k,se,R,F),R.onAfterShadow(n,R,A,L,k,se,F)}}}else if(Z.visible){const $=T(R,Z,E,S);R.onBeforeShadow(n,R,A,L,k,$,null),n.renderBufferDirect(L,null,k,$,R,null),R.onAfterShadow(n,R,A,L,k,$,null)}}const G=R.children;for(let k=0,Z=G.length;k<Z;k++)M(G[k],A,L,E,S)}function C(R){R.target.removeEventListener("dispose",C);for(const L in c){const E=c[L],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Hx={[ul]:hl,[fl]:ml,[dl]:_l,[ss]:pl,[hl]:ul,[ml]:fl,[_l]:dl,[pl]:ss};function kx(n,e){function t(){let D=!1;const ce=new xt;let V=null;const j=new xt(0,0,0,0);return{setMask:function(fe){V!==fe&&!D&&(n.colorMask(fe,fe,fe,fe),V=fe)},setLocked:function(fe){D=fe},setClear:function(fe,he,Fe,gt,zt){zt===!0&&(fe*=gt,he*=gt,Fe*=gt),ce.set(fe,he,Fe,gt),j.equals(ce)===!1&&(n.clearColor(fe,he,Fe,gt),j.copy(ce))},reset:function(){D=!1,V=null,j.set(-1,0,0,0)}}}function i(){let D=!1,ce=!1,V=null,j=null,fe=null;return{setReversed:function(he){if(ce!==he){const Fe=e.get("EXT_clip_control");ce?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const gt=fe;fe=null,this.setClear(gt)}ce=he},getReversed:function(){return ce},setTest:function(he){he?oe(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(he){V!==he&&!D&&(n.depthMask(he),V=he)},setFunc:function(he){if(ce&&(he=Hx[he]),j!==he){switch(he){case ul:n.depthFunc(n.NEVER);break;case hl:n.depthFunc(n.ALWAYS);break;case fl:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case dl:n.depthFunc(n.EQUAL);break;case pl:n.depthFunc(n.GEQUAL);break;case ml:n.depthFunc(n.GREATER);break;case _l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=he}},setLocked:function(he){D=he},setClear:function(he){fe!==he&&(ce&&(he=1-he),n.clearDepth(he),fe=he)},reset:function(){D=!1,V=null,j=null,fe=null,ce=!1}}}function r(){let D=!1,ce=null,V=null,j=null,fe=null,he=null,Fe=null,gt=null,zt=null;return{setTest:function(st){D||(st?oe(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(st){ce!==st&&!D&&(n.stencilMask(st),ce=st)},setFunc:function(st,An,ei){(V!==st||j!==An||fe!==ei)&&(n.stencilFunc(st,An,ei),V=st,j=An,fe=ei)},setOp:function(st,An,ei){(he!==st||Fe!==An||gt!==ei)&&(n.stencilOp(st,An,ei),he=st,Fe=An,gt=ei)},setLocked:function(st){D=st},setClear:function(st){zt!==st&&(n.clearStencil(st),zt=st)},reset:function(){D=!1,ce=null,V=null,j=null,fe=null,he=null,Fe=null,gt=null,zt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,m=[],_=null,g=!1,p=null,f=null,y=null,T=null,M=null,C=null,R=null,A=new Je(0,0,0),L=0,E=!1,S=null,P=null,G=null,k=null,Z=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(F)[1]),q=ee>=1):F.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),q=ee>=2);let J=null,se={};const ve=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),nt=new xt().fromArray(ve),X=new xt().fromArray(Ve);function ie(D,ce,V,j){const fe=new Uint8Array(4),he=n.createTexture();n.bindTexture(D,he),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<V;Fe++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(ce+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return he}const ge={};ge[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(ss),We(!1),Xe(Wc),oe(n.CULL_FACE),w(Ui);function oe(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Ae(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Pe(D,ce){return d[D]!==ce?(n.bindFramebuffer(D,ce),d[D]=ce,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ce),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ge(D,ce){let V=m,j=!1;if(D){V=h.get(ce),V===void 0&&(V=[],h.set(ce,V));const fe=D.textures;if(V.length!==fe.length||V[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Fe=fe.length;he<Fe;he++)V[he]=n.COLOR_ATTACHMENT0+he;V.length=fe.length,j=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,j=!0);j&&n.drawBuffers(V)}function dt(D){return _!==D?(n.useProgram(D),_=D,!0):!1}const Ke={[Zi]:n.FUNC_ADD,[Gp]:n.FUNC_SUBTRACT,[Wp]:n.FUNC_REVERSE_SUBTRACT};Ke[Xp]=n.MIN,Ke[qp]=n.MAX;const mt={[Yp]:n.ZERO,[jp]:n.ONE,[Kp]:n.SRC_COLOR,[ll]:n.SRC_ALPHA,[tm]:n.SRC_ALPHA_SATURATE,[Qp]:n.DST_COLOR,[$p]:n.DST_ALPHA,[Zp]:n.ONE_MINUS_SRC_COLOR,[cl]:n.ONE_MINUS_SRC_ALPHA,[em]:n.ONE_MINUS_DST_COLOR,[Jp]:n.ONE_MINUS_DST_ALPHA,[nm]:n.CONSTANT_COLOR,[im]:n.ONE_MINUS_CONSTANT_COLOR,[rm]:n.CONSTANT_ALPHA,[sm]:n.ONE_MINUS_CONSTANT_ALPHA};function w(D,ce,V,j,fe,he,Fe,gt,zt,st){if(D===Ui){g===!0&&(Ae(n.BLEND),g=!1);return}if(g===!1&&(oe(n.BLEND),g=!0),D!==Vp){if(D!==p||st!==E){if((f!==Zi||M!==Zi)&&(n.blendEquation(n.FUNC_ADD),f=Zi,M=Zi),st)switch(D){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xc:n.blendFunc(n.ONE,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,T=null,C=null,R=null,A.set(0,0,0),L=0,p=D,E=st}return}fe=fe||ce,he=he||V,Fe=Fe||j,(ce!==f||fe!==M)&&(n.blendEquationSeparate(Ke[ce],Ke[fe]),f=ce,M=fe),(V!==y||j!==T||he!==C||Fe!==R)&&(n.blendFuncSeparate(mt[V],mt[j],mt[he],mt[Fe]),y=V,T=j,C=he,R=Fe),(gt.equals(A)===!1||zt!==L)&&(n.blendColor(gt.r,gt.g,gt.b,zt),A.copy(gt),L=zt),p=D,E=!1}function Vt(D,ce){D.side===Yn?Ae(n.CULL_FACE):oe(n.CULL_FACE);let V=D.side===nn;ce&&(V=!V),We(V),D.blending===Wr&&D.transparent===!1?w(Ui):w(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){S!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),S=D)}function Xe(D){D!==zp?(oe(n.CULL_FACE),D!==P&&(D===Wc?n.cullFace(n.BACK):D===Hp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),P=D}function Se(D){D!==G&&(q&&n.lineWidth(D),G=D)}function ct(D,ce,V){D?(oe(n.POLYGON_OFFSET_FILL),(k!==ce||Z!==V)&&(n.polygonOffset(ce,V),k=ce,Z=V)):Ae(n.POLYGON_OFFSET_FILL)}function Ee(D){D?oe(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function b(D){D===void 0&&(D=n.TEXTURE0+$-1),J!==D&&(n.activeTexture(D),J=D)}function v(D,ce,V){V===void 0&&(J===null?V=n.TEXTURE0+$-1:V=J);let j=se[V];j===void 0&&(j={type:void 0,texture:void 0},se[V]=j),(j.type!==D||j.texture!==ce)&&(J!==V&&(n.activeTexture(V),J=V),n.bindTexture(D,ce||ge[D]),j.type=D,j.texture=ce)}function O(){const D=se[J];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){nt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),nt.copy(D))}function me(D){X.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Ze(D,ce){let V=c.get(ce);V===void 0&&(V=new WeakMap,c.set(ce,V));let j=V.get(D);j===void 0&&(j=n.getUniformBlockIndex(ce,D.name),V.set(D,j))}function He(D,ce){const j=c.get(ce).get(D);l.get(ce)!==j&&(n.uniformBlockBinding(ce,j,D.__bindingPointIndex),l.set(ce,j))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,se={},d={},h=new WeakMap,m=[],_=null,g=!1,p=null,f=null,y=null,T=null,M=null,C=null,R=null,A=new Je(0,0,0),L=0,E=!1,S=null,P=null,G=null,k=null,Z=null,nt.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Ae,bindFramebuffer:Pe,drawBuffers:Ge,useProgram:dt,setBlending:w,setMaterial:Vt,setFlipSided:We,setCullFace:Xe,setLineWidth:Se,setPolygonOffset:ct,setScissorTest:Ee,activeTexture:b,bindTexture:v,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:pe,texImage3D:Re,updateUBOMapping:Ze,uniformBlockBinding:He,texStorage2D:Ne,texStorage3D:ne,texSubImage2D:W,texSubImage3D:xe,compressedTexSubImage2D:le,compressedTexSubImage3D:re,scissor:De,viewport:me,reset:ft}}function Vx(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,v){return m?new OffscreenCanvas(b,v):Hs("canvas")}function g(b,v,O){let Y=1;const Q=Ee(b);if((Q.width>O||Q.height>O)&&(Y=O/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor(Y*Q.width),xe=Math.floor(Y*Q.height);d===void 0&&(d=_(W,xe));const le=v?_(W,xe):d;return le.width=W,le.height=xe,le.getContext("2d").drawImage(b,0,0,W,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+xe+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function p(b){return b.generateMipmaps}function f(b){n.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(b,v,O,Y,Q=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=v;if(v===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),v===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){const xe=Q?Ya:tt.getTransfer(Y);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=xe===ut?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(b,v){let O;return b?v===null||v===mr||v===ls?O=n.DEPTH24_STENCIL8:v===fi?O=n.DEPTH32F_STENCIL8:v===zs&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mr||v===ls?O=n.DEPTH_COMPONENT24:v===fi?O=n.DEPTH_COMPONENT32F:v===zs&&(O=n.DEPTH_COMPONENT16),O}function C(b,v){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==kn&&b.minFilter!==zn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function R(b){const v=b.target;v.removeEventListener("dispose",R),L(v),v.isVideoTexture&&u.delete(v)}function A(b){const v=b.target;v.removeEventListener("dispose",A),S(v)}function L(b){const v=i.get(b);if(v.__webglInit===void 0)return;const O=b.source,Y=h.get(O);if(Y){const Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(b),Object.keys(Y).length===0&&h.delete(O)}i.remove(b)}function E(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const O=b.source,Y=h.get(O);delete Y[v.__cacheKey],o.memory.textures--}function S(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=b.textures;for(let Y=0,Q=O.length;Y<Q;Y++){const W=i.get(O[Y]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(b)}let P=0;function G(){P=0}function k(){const b=P;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),P+=1,b}function Z(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function $(b,v){const O=i.get(b);if(b.isVideoTexture&&Se(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,b,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function q(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){X(O,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function ee(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){X(O,b,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function F(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){ie(O,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const J={[xl]:n.REPEAT,[er]:n.CLAMP_TO_EDGE,[Ml]:n.MIRRORED_REPEAT},se={[kn]:n.NEAREST,[pm]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[go]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},ve={[vm]:n.NEVER,[Tm]:n.ALWAYS,[xm]:n.LESS,[Zh]:n.LEQUAL,[Mm]:n.EQUAL,[ym]:n.GEQUAL,[Sm]:n.GREATER,[Em]:n.NOTEQUAL};function Ve(b,v){if(v.type===fi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===zn||v.magFilter===go||v.magFilter===ra||v.magFilter===Di||v.minFilter===zn||v.minFilter===go||v.minFilter===ra||v.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,J[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,J[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,J[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,se[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,se[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===kn||v.minFilter!==ra&&v.minFilter!==Di||v.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function nt(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",R));const Y=v.source;let Q=h.get(Y);Q===void 0&&(Q={},h.set(Y,Q));const W=Z(v);if(W!==b.__cacheKey){Q[W]===void 0&&(Q[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[W].usedTimes++;const xe=Q[b.__cacheKey];xe!==void 0&&(Q[b.__cacheKey].usedTimes--,xe.usedTimes===0&&E(v)),b.__cacheKey=W,b.__webglTexture=Q[W].texture}return O}function X(b,v,O){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=nt(b,v),W=v.source;t.bindTexture(Y,b.__webglTexture,n.TEXTURE0+O);const xe=i.get(W);if(W.version!==xe.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const le=tt.getPrimaries(tt.workingColorSpace),re=v.colorSpace===wi?null:tt.getPrimaries(v.colorSpace),Ne=v.colorSpace===wi||le===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ne=g(v.image,!1,r.maxTextureSize);ne=ct(v,ne);const pe=s.convert(v.format,v.colorSpace),Re=s.convert(v.type);let De=T(v.internalFormat,pe,Re,v.colorSpace,v.isVideoTexture);Ve(Y,v);let me;const Ze=v.mipmaps,He=v.isVideoTexture!==!0,ft=xe.__version===void 0||Q===!0,D=W.dataReady,ce=C(v,ne);if(v.isDepthTexture)De=M(v.format===cs,v.type),ft&&(He?t.texStorage2D(n.TEXTURE_2D,1,De,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,De,ne.width,ne.height,0,pe,Re,null));else if(v.isDataTexture)if(Ze.length>0){He&&ft&&t.texStorage2D(n.TEXTURE_2D,ce,De,Ze[0].width,Ze[0].height);for(let V=0,j=Ze.length;V<j;V++)me=Ze[V],He?D&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,me.width,me.height,pe,Re,me.data):t.texImage2D(n.TEXTURE_2D,V,De,me.width,me.height,0,pe,Re,me.data);v.generateMipmaps=!1}else He?(ft&&t.texStorage2D(n.TEXTURE_2D,ce,De,ne.width,ne.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,pe,Re,ne.data)):t.texImage2D(n.TEXTURE_2D,0,De,ne.width,ne.height,0,pe,Re,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){He&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,De,Ze[0].width,Ze[0].height,ne.depth);for(let V=0,j=Ze.length;V<j;V++)if(me=Ze[V],v.format!==Hn)if(pe!==null)if(He){if(D)if(v.layerUpdates.size>0){const fe=vu(me.width,me.height,v.format,v.type);for(const he of v.layerUpdates){const Fe=me.data.subarray(he*fe/me.data.BYTES_PER_ELEMENT,(he+1)*fe/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,he,me.width,me.height,1,pe,Fe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,ne.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,De,me.width,me.height,ne.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,ne.depth,pe,Re,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,De,me.width,me.height,ne.depth,0,pe,Re,me.data)}else{He&&ft&&t.texStorage2D(n.TEXTURE_2D,ce,De,Ze[0].width,Ze[0].height);for(let V=0,j=Ze.length;V<j;V++)me=Ze[V],v.format!==Hn?pe!==null?He?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,V,De,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?D&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,me.width,me.height,pe,Re,me.data):t.texImage2D(n.TEXTURE_2D,V,De,me.width,me.height,0,pe,Re,me.data)}else if(v.isDataArrayTexture)if(He){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,De,ne.width,ne.height,ne.depth),D)if(v.layerUpdates.size>0){const V=vu(ne.width,ne.height,v.format,v.type);for(const j of v.layerUpdates){const fe=ne.data.subarray(j*V/ne.data.BYTES_PER_ELEMENT,(j+1)*V/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,ne.width,ne.height,1,pe,Re,fe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,Re,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ne.width,ne.height,ne.depth,0,pe,Re,ne.data);else if(v.isData3DTexture)He?(ft&&t.texStorage3D(n.TEXTURE_3D,ce,De,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,Re,ne.data)):t.texImage3D(n.TEXTURE_3D,0,De,ne.width,ne.height,ne.depth,0,pe,Re,ne.data);else if(v.isFramebufferTexture){if(ft)if(He)t.texStorage2D(n.TEXTURE_2D,ce,De,ne.width,ne.height);else{let V=ne.width,j=ne.height;for(let fe=0;fe<ce;fe++)t.texImage2D(n.TEXTURE_2D,fe,De,V,j,0,pe,Re,null),V>>=1,j>>=1}}else if(Ze.length>0){if(He&&ft){const V=Ee(Ze[0]);t.texStorage2D(n.TEXTURE_2D,ce,De,V.width,V.height)}for(let V=0,j=Ze.length;V<j;V++)me=Ze[V],He?D&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe,Re,me):t.texImage2D(n.TEXTURE_2D,V,De,pe,Re,me);v.generateMipmaps=!1}else if(He){if(ft){const V=Ee(ne);t.texStorage2D(n.TEXTURE_2D,ce,De,V.width,V.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Re,ne)}else t.texImage2D(n.TEXTURE_2D,0,De,pe,Re,ne);p(v)&&f(Y),xe.__version=W.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ie(b,v,O){if(v.image.length!==6)return;const Y=nt(b,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const W=i.get(Q);if(Q.version!==W.__version||Y===!0){t.activeTexture(n.TEXTURE0+O);const xe=tt.getPrimaries(tt.workingColorSpace),le=v.colorSpace===wi?null:tt.getPrimaries(v.colorSpace),re=v.colorSpace===wi||xe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let j=0;j<6;j++)!Ne&&!ne?pe[j]=g(v.image[j],!0,r.maxCubemapSize):pe[j]=ne?v.image[j].image:v.image[j],pe[j]=ct(v,pe[j]);const Re=pe[0],De=s.convert(v.format,v.colorSpace),me=s.convert(v.type),Ze=T(v.internalFormat,De,me,v.colorSpace),He=v.isVideoTexture!==!0,ft=W.__version===void 0||Y===!0,D=Q.dataReady;let ce=C(v,Re);Ve(n.TEXTURE_CUBE_MAP,v);let V;if(Ne){He&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Ze,Re.width,Re.height);for(let j=0;j<6;j++){V=pe[j].mipmaps;for(let fe=0;fe<V.length;fe++){const he=V[fe];v.format!==Hn?De!==null?He?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,he.width,he.height,De,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Ze,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,he.width,he.height,De,me,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Ze,he.width,he.height,0,De,me,he.data)}}}else{if(V=v.mipmaps,He&&ft){V.length>0&&ce++;const j=Ee(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Ze,j.width,j.height)}for(let j=0;j<6;j++)if(ne){He?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe[j].width,pe[j].height,De,me,pe[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ze,pe[j].width,pe[j].height,0,De,me,pe[j].data);for(let fe=0;fe<V.length;fe++){const Fe=V[fe].image[j].image;He?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,Fe.width,Fe.height,De,me,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Ze,Fe.width,Fe.height,0,De,me,Fe.data)}}else{He?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,De,me,pe[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ze,De,me,pe[j]);for(let fe=0;fe<V.length;fe++){const he=V[fe];He?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,De,me,he.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Ze,De,me,he.image[j])}}}p(v)&&f(n.TEXTURE_CUBE_MAP),W.__version=Q.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ge(b,v,O,Y,Q,W){const xe=s.convert(O.format,O.colorSpace),le=s.convert(O.type),re=T(O.internalFormat,xe,le,O.colorSpace),Ne=i.get(v),ne=i.get(O);if(ne.__renderTarget=v,!Ne.__hasExternalTextures){const pe=Math.max(1,v.width>>W),Re=Math.max(1,v.height>>W);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,W,re,pe,Re,v.depth,0,xe,le,null):t.texImage2D(Q,W,re,pe,Re,0,xe,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Xe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,ne.__webglTexture,0,We(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,ne.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(b,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,W=M(v.stencilBuffer,Q),xe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=We(v);Xe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,W,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,b)}else{const Y=v.textures;for(let Q=0;Q<Y.length;Q++){const W=Y[Q],xe=s.convert(W.format,W.colorSpace),le=s.convert(W.type),re=T(W.internalFormat,xe,le,W.colorSpace),Ne=We(v);O&&Xe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,re,v.width,v.height):Xe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,re,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,re,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const Q=Y.__webglTexture,W=We(v);if(v.depthTexture.format===Xr)Xe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===cs)Xe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pe(b){const v=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ae(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),oe(v.__webglDepthbuffer[Y],b,!1);else{const Q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),oe(v.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(b,v,O){const Y=i.get(b);v!==void 0&&ge(Y.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Pe(b)}function dt(b){const v=b.texture,O=i.get(b),Y=i.get(v);b.addEventListener("dispose",A);const Q=b.textures,W=b.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let re=0;re<v.mipmaps.length;re++)O.__webglFramebuffer[le][re]=n.createFramebuffer()}else O.__webglFramebuffer[le]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)O.__webglFramebuffer[le]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(xe)for(let le=0,re=Q.length;le<re;le++){const Ne=i.get(Q[le]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Xe(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const re=Q[le];O.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const Ne=s.convert(re.format,re.colorSpace),ne=s.convert(re.type),pe=T(re.internalFormat,Ne,ne,re.colorSpace,b.isXRRenderTarget===!0),Re=We(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,pe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,O.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let re=0;re<v.mipmaps.length;re++)ge(O.__webglFramebuffer[le][re],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,re);else ge(O.__webglFramebuffer[le],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(v)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let le=0,re=Q.length;le<re;le++){const Ne=Q[le],ne=i.get(Ne);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),Ve(n.TEXTURE_2D,Ne),ge(O.__webglFramebuffer,b,Ne,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),p(Ne)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),Ve(le,v),v.mipmaps&&v.mipmaps.length>0)for(let re=0;re<v.mipmaps.length;re++)ge(O.__webglFramebuffer[re],b,v,n.COLOR_ATTACHMENT0,le,re);else ge(O.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,le,0);p(v)&&f(le),t.unbindTexture()}b.depthBuffer&&Pe(b)}function Ke(b){const v=b.textures;for(let O=0,Y=v.length;O<Y;O++){const Q=v[O];if(p(Q)){const W=y(b),xe=i.get(Q).__webglTexture;t.bindTexture(W,xe),f(W),t.unbindTexture()}}}const mt=[],w=[];function Vt(b){if(b.samples>0){if(Xe(b)===!1){const v=b.textures,O=b.width,Y=b.height;let Q=n.COLOR_BUFFER_BIT;const W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(b),le=v.length>1;if(le)for(let re=0;re<v.length;re++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let re=0;re<v.length;re++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[re]);const Ne=i.get(v[re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,O,Y,0,0,O,Y,Q,n.NEAREST),l===!0&&(mt.length=0,w.length=0,mt.push(n.COLOR_ATTACHMENT0+re),b.depthBuffer&&b.resolveDepthBuffer===!1&&(mt.push(W),w.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let re=0;re<v.length;re++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,xe.__webglColorRenderbuffer[re]);const Ne=i.get(v[re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function We(b){return Math.min(r.maxSamples,b.samples)}function Xe(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Se(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function ct(b,v){const O=b.colorSpace,Y=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==us&&O!==wi&&(tt.getTransfer(O)===ut?(Y!==Hn||Q!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Ee(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=F,this.rebindTextures=Ge,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Xe}function Gx(n,e){function t(i,r=wi){let s;const o=tt.getTransfer(r);if(i===gi)return n.UNSIGNED_BYTE;if(i===cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zh)return n.BYTE;if(i===Hh)return n.SHORT;if(i===zs)return n.UNSIGNED_SHORT;if(i===lc)return n.INT;if(i===mr)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Zs)return n.HALF_FLOAT;if(i===Vh)return n.ALPHA;if(i===Gh)return n.RGB;if(i===Hn)return n.RGBA;if(i===Wh)return n.LUMINANCE;if(i===Xh)return n.LUMINANCE_ALPHA;if(i===Xr)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===qh)return n.RED;if(i===hc)return n.RED_INTEGER;if(i===Yh)return n.RG;if(i===fc)return n.RG_INTEGER;if(i===dc)return n.RGBA_INTEGER;if(i===La||i===Ua||i===Ia||i===Na)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===La)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===La)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sl||i===El||i===yl||i===Tl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===El)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bl||i===Al||i===wl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bl||i===Al)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rl||i===Cl||i===Pl||i===Dl||i===Ll||i===Ul||i===Il||i===Nl||i===Fl||i===Ol||i===Bl||i===zl||i===Hl||i===kl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ll)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ul)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Il)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===Vl||i===Gl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fa)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jh||i===Wl||i===Xl||i===ql)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ql)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Wx={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ea;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qx=`
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

}`;class Yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Oi({vertexShader:Xx,fragmentShader:qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jn(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jx extends vr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,_=null;const g=new Yx,p=t.getContextAttributes();let f=null,y=null;const T=[],M=[],C=new ze;let R=null;const A=new En;A.viewport=new xt;const L=new En;L.viewport=new xt;const E=[A,L],S=new p_;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=T[X];return ie===void 0&&(ie=new qo,T[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=T[X];return ie===void 0&&(ie=new qo,T[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=T[X];return ie===void 0&&(ie=new qo,T[X]=ie),ie.getHandSpace()};function k(X){const ie=M.indexOf(X.inputSource);if(ie===-1)return;const ge=T[ie];ge!==void 0&&(ge.update(X.inputSource,X.frame,c||o),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",$);for(let X=0;X<T.length;X++){const ie=M[X];ie!==null&&(M[X]=null,T[X].disconnect(ie))}P=null,G=null,g.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,y=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let ge=null,oe=null,Ae=null;p.depth&&(Ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=p.stencil?cs:Xr,oe=p.stencil?ls:mr);const Pe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new _r(h.textureWidth,h.textureHeight,{format:Hn,type:gi,depthTexture:new cf(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const ge={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new _r(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(X){for(let ie=0;ie<X.removed.length;ie++){const ge=X.removed[ie],oe=M.indexOf(ge);oe>=0&&(M[oe]=null,T[oe].disconnect(ge))}for(let ie=0;ie<X.added.length;ie++){const ge=X.added[ie];let oe=M.indexOf(ge);if(oe===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=M.length){M.push(ge),oe=Pe;break}else if(M[Pe]===null){M[Pe]=ge,oe=Pe;break}if(oe===-1)break}const Ae=T[oe];Ae&&Ae.connect(ge)}}const q=new B,ee=new B;function F(X,ie,ge){q.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(ge.matrixWorld);const oe=q.distanceTo(ee),Ae=ie.projectionMatrix.elements,Pe=ge.projectionMatrix.elements,Ge=Ae[14]/(Ae[10]-1),dt=Ae[14]/(Ae[10]+1),Ke=(Ae[9]+1)/Ae[5],mt=(Ae[9]-1)/Ae[5],w=(Ae[8]-1)/Ae[0],Vt=(Pe[8]+1)/Pe[0],We=Ge*w,Xe=Ge*Vt,Se=oe/(-w+Vt),ct=Se*-w;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ct),X.translateZ(Se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ae[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ee=Ge+Se,b=dt+Se,v=We-ct,O=Xe+(oe-ct),Y=Ke*dt/b*Ee,Q=mt*dt/b*Ee;X.projectionMatrix.makePerspective(v,O,Y,Q,Ee,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function J(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ie=X.near,ge=X.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),S.near=L.near=A.near=ie,S.far=L.far=A.far=ge,(P!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,G=S.far),A.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,S.layers.mask=A.layers.mask|L.layers.mask;const oe=X.parent,Ae=S.cameras;J(S,oe);for(let Pe=0;Pe<Ae.length;Pe++)J(Ae[Pe],oe);Ae.length===2?F(S,A,L):S.projectionMatrix.copy(A.projectionMatrix),se(X,S,oe)};function se(X,ie,ge){ge===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Yl*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let ve=null;function Ve(X,ie){if(u=ie.getViewerPose(c||o),_=ie,u!==null){const ge=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let oe=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Pe=0;Pe<ge.length;Pe++){const Ge=ge[Pe];let dt=null;if(m!==null)dt=m.getViewport(Ge);else{const mt=d.getViewSubImage(h,Ge);dt=mt.viewport,Pe===0&&(e.setRenderTargetTextures(y,mt.colorTexture,h.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(y))}let Ke=E[Pe];Ke===void 0&&(Ke=new En,Ke.layers.enable(Pe),Ke.viewport=new xt,E[Pe]=Ke),Ke.matrix.fromArray(Ge.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Ge.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(dt.x,dt.y,dt.width,dt.height),Pe===0&&(S.matrix.copy(Ke.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(Ke)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Pe=d.getDepthInformation(ge[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,r.renderState)}}for(let ge=0;ge<T.length;ge++){const oe=M[ge],Ae=T[ge];oe!==null&&Ae!==void 0&&Ae.update(oe,ie,c||o)}ve&&ve(X,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const nt=new hf;nt.setAnimationLoop(Ve),this.setAnimationLoop=function(X){ve=X},this.dispose=function(){}}}const ji=new Jn,Kx=new Mt;function Zx(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,af(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,y,T,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),g(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,y,T):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===nn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===nn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f),T=y.envMap,M=y.envMapRotation;T&&(p.envMap.value=T,ji.copy(M),ji.x*=-1,ji.y*=-1,ji.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),p.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(ji)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=T*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $x(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const M=T.program;i.uniformBlockBinding(y,M)}function c(y,T){let M=r[y.id];M===void 0&&(_(y),M=u(y),r[y.id]=M,y.addEventListener("dispose",p));const C=T.program;i.updateUBOMapping(y,C);const R=e.render.frame;s[y.id]!==R&&(h(y),s[y.id]=R)}function u(y){const T=d();y.__bindingPointIndex=T;const M=n.createBuffer(),C=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const T=r[y.id],M=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,A=M.length;R<A;R++){const L=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,S=L.length;E<S;E++){const P=L[E];if(m(P,R,E,C)===!0){const G=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let Z=0;for(let $=0;$<k.length;$++){const q=k[$],ee=g(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,G+Z,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,Z),Z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,T,M,C){const R=y.value,A=T+"_"+M;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const L=C[A];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return C[A]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function _(y){const T=y.uniforms;let M=0;const C=16;for(let A=0,L=T.length;A<L;A++){const E=Array.isArray(T[A])?T[A]:[T[A]];for(let S=0,P=E.length;S<P;S++){const G=E[S],k=Array.isArray(G.value)?G.value:[G.value];for(let Z=0,$=k.length;Z<$;Z++){const q=k[Z],ee=g(q),F=M%C,J=F%ee.boundary,se=F+J;M+=J,se!==0&&C-se<ee.storage&&(M+=C-se),G.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=ee.storage}}}const R=M%C;return R>0&&(M+=C-R),y.__size=M,y.__cache={},this}function g(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),T}function p(y){const T=y.target;T.removeEventListener("dispose",p);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Jx{constructor(e={}){const{canvas:t=wm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,f=null;const y=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=Ii,this.toneMappingExposure=1;const M=this;let C=!1,R=0,A=0,L=null,E=-1,S=null;const P=new xt,G=new xt;let k=null;const Z=new Je(0);let $=0,q=t.width,ee=t.height,F=1,J=null,se=null;const ve=new xt(0,0,q,ee),Ve=new xt(0,0,q,ee);let nt=!1;const X=new _c;let ie=!1,ge=!1;this.transmissionResolutionScale=1;const oe=new Mt,Ae=new Mt,Pe=new B,Ge=new xt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function mt(){return L===null?F:1}let w=i;function Vt(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",he,!1),w===null){const U="webgl2";if(w=Vt(U,x),w===null)throw Vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let We,Xe,Se,ct,Ee,b,v,O,Y,Q,W,xe,le,re,Ne,ne,pe,Re,De,me,Ze,He,ft,D;function ce(){We=new o0(w),We.init(),He=new Gx(w,We),Xe=new t0(w,We,e,He),Se=new kx(w,We),Xe.reverseDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),ct=new u0(w),Ee=new Rx,b=new Vx(w,We,Se,Ee,Xe,He,ct),v=new i0(M),O=new a0(M),Y=new g_(w),ft=new Qv(w,Y),Q=new l0(w,Y,ct,ft),W=new f0(w,Q,Y,ct),De=new h0(w,Xe,b),ne=new n0(Ee),xe=new wx(M,v,O,We,Xe,ft,ne),le=new Zx(M,Ee),re=new Px,Ne=new Fx(We),Re=new Jv(M,v,O,Se,W,m,l),pe=new zx(M,W,Xe),D=new $x(w,ct,Xe,Se),me=new e0(w,We,ct),Ze=new c0(w,We,ct),ct.programs=xe.programs,M.capabilities=Xe,M.extensions=We,M.properties=Ee,M.renderLists=re,M.shadowMap=pe,M.state=Se,M.info=ct}ce();const V=new jx(M,w);this.xr=V,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=We.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=We.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(x){x!==void 0&&(F=x,this.setSize(q,ee,!1))},this.getSize=function(x){return x.set(q,ee)},this.setSize=function(x,U,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=x,ee=U,t.width=Math.floor(x*F),t.height=Math.floor(U*F),z===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(q*F,ee*F).floor()},this.setDrawingBufferSize=function(x,U,z){q=x,ee=U,F=z,t.width=Math.floor(x*z),t.height=Math.floor(U*z),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(ve)},this.setViewport=function(x,U,z,H){x.isVector4?ve.set(x.x,x.y,x.z,x.w):ve.set(x,U,z,H),Se.viewport(P.copy(ve).multiplyScalar(F).round())},this.getScissor=function(x){return x.copy(Ve)},this.setScissor=function(x,U,z,H){x.isVector4?Ve.set(x.x,x.y,x.z,x.w):Ve.set(x,U,z,H),Se.scissor(G.copy(Ve).multiplyScalar(F).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(x){Se.setScissorTest(nt=x)},this.setOpaqueSort=function(x){J=x},this.setTransparentSort=function(x){se=x},this.getClearColor=function(x){return x.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(x=!0,U=!0,z=!0){let H=0;if(x){let I=!1;if(L!==null){const te=L.texture.format;I=te===dc||te===fc||te===hc}if(I){const te=L.texture.type,ue=te===gi||te===mr||te===zs||te===ls||te===cc||te===uc,de=Re.getClearColor(),_e=Re.getClearAlpha(),Le=de.r,Ue=de.g,be=de.b;ue?(_[0]=Le,_[1]=Ue,_[2]=be,_[3]=_e,w.clearBufferuiv(w.COLOR,0,_)):(g[0]=Le,g[1]=Ue,g[2]=be,g[3]=_e,w.clearBufferiv(w.COLOR,0,g))}else H|=w.COLOR_BUFFER_BIT}U&&(H|=w.DEPTH_BUFFER_BIT),z&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Re.dispose(),re.dispose(),Ne.dispose(),Ee.dispose(),v.dispose(),O.dispose(),W.dispose(),ft.dispose(),D.dispose(),xe.dispose(),V.dispose(),V.removeEventListener("sessionstart",Sc),V.removeEventListener("sessionend",Ec),ki.stop()};function j(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const x=ct.autoReset,U=pe.enabled,z=pe.autoUpdate,H=pe.needsUpdate,I=pe.type;ce(),ct.autoReset=x,pe.enabled=U,pe.autoUpdate=z,pe.needsUpdate=H,pe.type=I}function he(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Fe(x){const U=x.target;U.removeEventListener("dispose",Fe),gt(U)}function gt(x){zt(x),Ee.remove(x)}function zt(x){const U=Ee.get(x).programs;U!==void 0&&(U.forEach(function(z){xe.releaseProgram(z)}),x.isShaderMaterial&&xe.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,z,H,I,te){U===null&&(U=dt);const ue=I.isMesh&&I.matrixWorld.determinant()<0,de=gf(x,U,z,H,I);Se.setMaterial(H,ue);let _e=z.index,Le=1;if(H.wireframe===!0){if(_e=Q.getWireframeAttribute(z),_e===void 0)return;Le=2}const Ue=z.drawRange,be=z.attributes.position;let $e=Ue.start*Le,it=(Ue.start+Ue.count)*Le;te!==null&&($e=Math.max($e,te.start*Le),it=Math.min(it,(te.start+te.count)*Le)),_e!==null?($e=Math.max($e,0),it=Math.min(it,_e.count)):be!=null&&($e=Math.max($e,0),it=Math.min(it,be.count));const yt=it-$e;if(yt<0||yt===1/0)return;ft.setup(I,H,de,z,_e);let vt,Qe=me;if(_e!==null&&(vt=Y.get(_e),Qe=Ze,Qe.setIndex(vt)),I.isMesh)H.wireframe===!0?(Se.setLineWidth(H.wireframeLinewidth*mt()),Qe.setMode(w.LINES)):Qe.setMode(w.TRIANGLES);else if(I.isLine){let we=H.linewidth;we===void 0&&(we=1),Se.setLineWidth(we*mt()),I.isLineSegments?Qe.setMode(w.LINES):I.isLineLoop?Qe.setMode(w.LINE_LOOP):Qe.setMode(w.LINE_STRIP)}else I.isPoints?Qe.setMode(w.POINTS):I.isSprite&&Qe.setMode(w.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Qe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Qe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const we=I._multiDrawStarts,It=I._multiDrawCounts,rt=I._multiDrawCount,wn=_e?Y.get(_e).bytesPerElement:1,xr=Ee.get(H).currentProgram.getUniforms();for(let rn=0;rn<rt;rn++)xr.setValue(w,"_gl_DrawID",rn),Qe.render(we[rn]/wn,It[rn])}else if(I.isInstancedMesh)Qe.renderInstances($e,yt,I.count);else if(z.isInstancedBufferGeometry){const we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,It=Math.min(z.instanceCount,we);Qe.renderInstances($e,yt,It)}else Qe.render($e,yt)};function st(x,U,z){x.transparent===!0&&x.side===Yn&&x.forceSinglePass===!1?(x.side=nn,x.needsUpdate=!0,ea(x,U,z),x.side=Fi,x.needsUpdate=!0,ea(x,U,z),x.side=Yn):ea(x,U,z)}this.compile=function(x,U,z=null){z===null&&(z=x),f=Ne.get(z),f.init(U),T.push(f),z.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),x!==z&&x.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const H=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const te=I.material;if(te)if(Array.isArray(te))for(let ue=0;ue<te.length;ue++){const de=te[ue];st(de,z,I),H.add(de)}else st(te,z,I),H.add(te)}),T.pop(),f=null,H},this.compileAsync=function(x,U,z=null){const H=this.compile(x,U,z);return new Promise(I=>{function te(){if(H.forEach(function(ue){Ee.get(ue).currentProgram.isReady()&&H.delete(ue)}),H.size===0){I(x);return}setTimeout(te,10)}We.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let An=null;function ei(x){An&&An(x)}function Sc(){ki.stop()}function Ec(){ki.start()}const ki=new hf;ki.setAnimationLoop(ei),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(x){An=x,V.setAnimationLoop(x),x===null?ki.stop():ki.start()},V.addEventListener("sessionstart",Sc),V.addEventListener("sessionend",Ec),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,U,L),f=Ne.get(x,T.length),f.init(U),T.push(f),Ae.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Ae),ge=this.localClippingEnabled,ie=ne.init(this.clippingPlanes,ge),p=re.get(x,y.length),p.init(),y.push(p),V.enabled===!0&&V.isPresenting===!0){const te=M.xr.getDepthSensingMesh();te!==null&&oo(te,U,-1/0,M.sortObjects)}oo(x,U,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(J,se),Ke=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ke&&Re.addToRenderList(p,x),this.info.render.frame++,ie===!0&&ne.beginShadows();const z=f.state.shadowsArray;pe.render(z,x,U),ie===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,I=p.transmissive;if(f.setupLights(),U.isArrayCamera){const te=U.cameras;if(I.length>0)for(let ue=0,de=te.length;ue<de;ue++){const _e=te[ue];Tc(H,I,x,_e)}Ke&&Re.render(x);for(let ue=0,de=te.length;ue<de;ue++){const _e=te[ue];yc(p,x,_e,_e.viewport)}}else I.length>0&&Tc(H,I,x,U),Ke&&Re.render(x),yc(p,x,U);L!==null&&A===0&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(M,x,U),ft.resetDefaultState(),E=-1,S=null,T.pop(),T.length>0?(f=T[T.length-1],ie===!0&&ne.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function oo(x,U,z,H){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||X.intersectsSprite(x)){H&&Ge.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ae);const ue=W.update(x),de=x.material;de.visible&&p.push(x,ue,de,z,Ge.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||X.intersectsObject(x))){const ue=W.update(x),de=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ge.copy(x.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ge.copy(ue.boundingSphere.center)),Ge.applyMatrix4(x.matrixWorld).applyMatrix4(Ae)),Array.isArray(de)){const _e=ue.groups;for(let Le=0,Ue=_e.length;Le<Ue;Le++){const be=_e[Le],$e=de[be.materialIndex];$e&&$e.visible&&p.push(x,ue,$e,z,Ge.z,be)}}else de.visible&&p.push(x,ue,de,z,Ge.z,null)}}const te=x.children;for(let ue=0,de=te.length;ue<de;ue++)oo(te[ue],U,z,H)}function yc(x,U,z,H){const I=x.opaque,te=x.transmissive,ue=x.transparent;f.setupLightsView(z),ie===!0&&ne.setGlobalState(M.clippingPlanes,z),H&&Se.viewport(P.copy(H)),I.length>0&&Qs(I,U,z),te.length>0&&Qs(te,U,z),ue.length>0&&Qs(ue,U,z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Tc(x,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new _r(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Zs:gi,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const te=f.state.transmissionRenderTarget[H.id],ue=H.viewport||P;te.setSize(ue.z*M.transmissionResolutionScale,ue.w*M.transmissionResolutionScale);const de=M.getRenderTarget();M.setRenderTarget(te),M.getClearColor(Z),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),Ke&&Re.render(z);const _e=M.toneMapping;M.toneMapping=Ii;const Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),ie===!0&&ne.setGlobalState(M.clippingPlanes,H),Qs(x,z,H),b.updateMultisampleRenderTarget(te),b.updateRenderTargetMipmap(te),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let be=0,$e=U.length;be<$e;be++){const it=U[be],yt=it.object,vt=it.geometry,Qe=it.material,we=it.group;if(Qe.side===Yn&&yt.layers.test(H.layers)){const It=Qe.side;Qe.side=nn,Qe.needsUpdate=!0,bc(yt,z,H,vt,Qe,we),Qe.side=It,Qe.needsUpdate=!0,Ue=!0}}Ue===!0&&(b.updateMultisampleRenderTarget(te),b.updateRenderTargetMipmap(te))}M.setRenderTarget(de),M.setClearColor(Z,$),Le!==void 0&&(H.viewport=Le),M.toneMapping=_e}function Qs(x,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let I=0,te=x.length;I<te;I++){const ue=x[I],de=ue.object,_e=ue.geometry,Le=H===null?ue.material:H,Ue=ue.group;de.layers.test(z.layers)&&bc(de,U,z,_e,Le,Ue)}}function bc(x,U,z,H,I,te){x.onBeforeRender(M,U,z,H,I,te),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(M,U,z,H,x,te),I.transparent===!0&&I.side===Yn&&I.forceSinglePass===!1?(I.side=nn,I.needsUpdate=!0,M.renderBufferDirect(z,U,H,I,x,te),I.side=Fi,I.needsUpdate=!0,M.renderBufferDirect(z,U,H,I,x,te),I.side=Yn):M.renderBufferDirect(z,U,H,I,x,te),x.onAfterRender(M,U,z,H,I,te)}function ea(x,U,z){U.isScene!==!0&&(U=dt);const H=Ee.get(x),I=f.state.lights,te=f.state.shadowsArray,ue=I.state.version,de=xe.getParameters(x,I.state,te,U,z),_e=xe.getProgramCacheKey(de);let Le=H.programs;H.environment=x.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(x.isMeshStandardMaterial?O:v).get(x.envMap||H.environment),H.envMapRotation=H.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Le===void 0&&(x.addEventListener("dispose",Fe),Le=new Map,H.programs=Le);let Ue=Le.get(_e);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===ue)return wc(x,de),Ue}else de.uniforms=xe.getUniforms(x),x.onBeforeCompile(de,M),Ue=xe.acquireProgram(de,_e),Le.set(_e,Ue),H.uniforms=de.uniforms;const be=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=ne.uniform),wc(x,de),H.needsLights=xf(x),H.lightsStateVersion=ue,H.needsLights&&(be.ambientLightColor.value=I.state.ambient,be.lightProbe.value=I.state.probe,be.directionalLights.value=I.state.directional,be.directionalLightShadows.value=I.state.directionalShadow,be.spotLights.value=I.state.spot,be.spotLightShadows.value=I.state.spotShadow,be.rectAreaLights.value=I.state.rectArea,be.ltc_1.value=I.state.rectAreaLTC1,be.ltc_2.value=I.state.rectAreaLTC2,be.pointLights.value=I.state.point,be.pointLightShadows.value=I.state.pointShadow,be.hemisphereLights.value=I.state.hemi,be.directionalShadowMap.value=I.state.directionalShadowMap,be.directionalShadowMatrix.value=I.state.directionalShadowMatrix,be.spotShadowMap.value=I.state.spotShadowMap,be.spotLightMatrix.value=I.state.spotLightMatrix,be.spotLightMap.value=I.state.spotLightMap,be.pointShadowMap.value=I.state.pointShadowMap,be.pointShadowMatrix.value=I.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function Ac(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Ba.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function wc(x,U){const z=Ee.get(x);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function gf(x,U,z,H,I){U.isScene!==!0&&(U=dt),b.resetTextureUnits();const te=U.fog,ue=H.isMeshStandardMaterial?U.environment:null,de=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:us,_e=(H.isMeshStandardMaterial?O:v).get(H.envMap||ue),Le=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),be=!!z.morphAttributes.position,$e=!!z.morphAttributes.normal,it=!!z.morphAttributes.color;let yt=Ii;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(yt=M.toneMapping);const vt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qe=vt!==void 0?vt.length:0,we=Ee.get(H),It=f.state.lights;if(ie===!0&&(ge===!0||x!==S)){const Gt=x===S&&H.id===E;ne.setState(H,x,Gt)}let rt=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==It.state.version||we.outputColorSpace!==de||I.isBatchedMesh&&we.batching===!1||!I.isBatchedMesh&&we.batching===!0||I.isBatchedMesh&&we.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&we.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&we.instancing===!1||!I.isInstancedMesh&&we.instancing===!0||I.isSkinnedMesh&&we.skinning===!1||!I.isSkinnedMesh&&we.skinning===!0||I.isInstancedMesh&&we.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&we.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&we.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&we.instancingMorph===!1&&I.morphTexture!==null||we.envMap!==_e||H.fog===!0&&we.fog!==te||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ne.numPlanes||we.numIntersection!==ne.numIntersection)||we.vertexAlphas!==Le||we.vertexTangents!==Ue||we.morphTargets!==be||we.morphNormals!==$e||we.morphColors!==it||we.toneMapping!==yt||we.morphTargetsCount!==Qe)&&(rt=!0):(rt=!0,we.__version=H.version);let wn=we.currentProgram;rt===!0&&(wn=ea(H,U,I));let xr=!1,rn=!1,Ms=!1;const _t=wn.getUniforms(),pn=we.uniforms;if(Se.useProgram(wn.program)&&(xr=!0,rn=!0,Ms=!0),H.id!==E&&(E=H.id,rn=!0),xr||S!==x){Se.buffers.depth.getReversed()?(oe.copy(x.projectionMatrix),Cm(oe),Pm(oe),_t.setValue(w,"projectionMatrix",oe)):_t.setValue(w,"projectionMatrix",x.projectionMatrix),_t.setValue(w,"viewMatrix",x.matrixWorldInverse);const jt=_t.map.cameraPosition;jt!==void 0&&jt.setValue(w,Pe.setFromMatrixPosition(x.matrixWorld)),Xe.logarithmicDepthBuffer&&_t.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_t.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,rn=!0,Ms=!0)}if(I.isSkinnedMesh){_t.setOptional(w,I,"bindMatrix"),_t.setOptional(w,I,"bindMatrixInverse");const Gt=I.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),_t.setValue(w,"boneTexture",Gt.boneTexture,b))}I.isBatchedMesh&&(_t.setOptional(w,I,"batchingTexture"),_t.setValue(w,"batchingTexture",I._matricesTexture,b),_t.setOptional(w,I,"batchingIdTexture"),_t.setValue(w,"batchingIdTexture",I._indirectTexture,b),_t.setOptional(w,I,"batchingColorTexture"),I._colorsTexture!==null&&_t.setValue(w,"batchingColorTexture",I._colorsTexture,b));const mn=z.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&De.update(I,z,wn),(rn||we.receiveShadow!==I.receiveShadow)&&(we.receiveShadow=I.receiveShadow,_t.setValue(w,"receiveShadow",I.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(pn.envMap.value=_e,pn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(pn.envMapIntensity.value=U.environmentIntensity),rn&&(_t.setValue(w,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&vf(pn,Ms),te&&H.fog===!0&&le.refreshFogUniforms(pn,te),le.refreshMaterialUniforms(pn,H,F,ee,f.state.transmissionRenderTarget[x.id]),Ba.upload(w,Ac(we),pn,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ba.upload(w,Ac(we),pn,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_t.setValue(w,"center",I.center),_t.setValue(w,"modelViewMatrix",I.modelViewMatrix),_t.setValue(w,"normalMatrix",I.normalMatrix),_t.setValue(w,"modelMatrix",I.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Gt=H.uniformsGroups;for(let jt=0,lo=Gt.length;jt<lo;jt++){const Vi=Gt[jt];D.update(Vi,wn),D.bind(Vi,wn)}}return wn}function vf(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function xf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,U,z){Ee.get(x.texture).__webglTexture=U,Ee.get(x.depthTexture).__webglTexture=z;const H=Ee.get(x);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,U){const z=Ee.get(x);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Mf=w.createFramebuffer();this.setRenderTarget=function(x,U=0,z=0){L=x,R=U,A=z;let H=!0,I=null,te=!1,ue=!1;if(x){const _e=Ee.get(x);if(_e.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(w.FRAMEBUFFER,null),H=!1;else if(_e.__webglFramebuffer===void 0)b.setupRenderTarget(x);else if(_e.__hasExternalTextures)b.rebindTextures(x,Ee.get(x.texture).__webglTexture,Ee.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const be=x.depthTexture;if(_e.__boundDepthTexture!==be){if(be!==null&&Ee.has(be)&&(x.width!==be.image.width||x.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(x)}}const Le=x.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ue=!0);const Ue=Ee.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?I=Ue[U][z]:I=Ue[U],te=!0):x.samples>0&&b.useMultisampledRTT(x)===!1?I=Ee.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?I=Ue[z]:I=Ue,P.copy(x.viewport),G.copy(x.scissor),k=x.scissorTest}else P.copy(ve).multiplyScalar(F).floor(),G.copy(Ve).multiplyScalar(F).floor(),k=nt;if(z!==0&&(I=Mf),Se.bindFramebuffer(w.FRAMEBUFFER,I)&&H&&Se.drawBuffers(x,I),Se.viewport(P),Se.scissor(G),Se.setScissorTest(k),te){const _e=Ee.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,z)}else if(ue){const _e=Ee.get(x.texture),Le=U;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,_e.__webglTexture,z,Le)}else if(x!==null&&z!==0){const _e=Ee.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,_e.__webglTexture,z)}E=-1},this.readRenderTargetPixels=function(x,U,z,H,I,te,ue){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Ee.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(de=de[ue]),de){Se.bindFramebuffer(w.FRAMEBUFFER,de);try{const _e=x.texture,Le=_e.format,Ue=_e.type;if(!Xe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-H&&z>=0&&z<=x.height-I&&w.readPixels(U,z,H,I,He.convert(Le),He.convert(Ue),te)}finally{const _e=L!==null?Ee.get(L).__webglFramebuffer:null;Se.bindFramebuffer(w.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(x,U,z,H,I,te,ue){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Ee.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(de=de[ue]),de){const _e=x.texture,Le=_e.format,Ue=_e.type;if(!Xe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=x.width-H&&z>=0&&z<=x.height-I){Se.bindFramebuffer(w.FRAMEBUFFER,de);const be=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,be),w.bufferData(w.PIXEL_PACK_BUFFER,te.byteLength,w.STREAM_READ),w.readPixels(U,z,H,I,He.convert(Le),He.convert(Ue),0);const $e=L!==null?Ee.get(L).__webglFramebuffer:null;Se.bindFramebuffer(w.FRAMEBUFFER,$e);const it=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Rm(w,it,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,be),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,te),w.deleteBuffer(be),w.deleteSync(it),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,U=null,z=0){x.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,x=arguments[1]);const H=Math.pow(2,-z),I=Math.floor(x.image.width*H),te=Math.floor(x.image.height*H),ue=U!==null?U.x:0,de=U!==null?U.y:0;b.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,z,0,0,ue,de,I,te),Se.unbindTexture()};const Sf=w.createFramebuffer(),Ef=w.createFramebuffer();this.copyTextureToTexture=function(x,U,z=null,H=null,I=0,te=null){x.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,x=arguments[1],U=arguments[2],te=arguments[3]||0,z=null),te===null&&(I!==0?(Fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=I,I=0):te=0);let ue,de,_e,Le,Ue,be,$e,it,yt;const vt=x.isCompressedTexture?x.mipmaps[te]:x.image;if(z!==null)ue=z.max.x-z.min.x,de=z.max.y-z.min.y,_e=z.isBox3?z.max.z-z.min.z:1,Le=z.min.x,Ue=z.min.y,be=z.isBox3?z.min.z:0;else{const mn=Math.pow(2,-I);ue=Math.floor(vt.width*mn),de=Math.floor(vt.height*mn),x.isDataArrayTexture?_e=vt.depth:x.isData3DTexture?_e=Math.floor(vt.depth*mn):_e=1,Le=0,Ue=0,be=0}H!==null?($e=H.x,it=H.y,yt=H.z):($e=0,it=0,yt=0);const Qe=He.convert(U.format),we=He.convert(U.type);let It;U.isData3DTexture?(b.setTexture3D(U,0),It=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),It=w.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),It=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const rt=w.getParameter(w.UNPACK_ROW_LENGTH),wn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),xr=w.getParameter(w.UNPACK_SKIP_PIXELS),rn=w.getParameter(w.UNPACK_SKIP_ROWS),Ms=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,vt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,vt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Le),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ue),w.pixelStorei(w.UNPACK_SKIP_IMAGES,be);const _t=x.isDataArrayTexture||x.isData3DTexture,pn=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const mn=Ee.get(x),Gt=Ee.get(U),jt=Ee.get(mn.__renderTarget),lo=Ee.get(Gt.__renderTarget);Se.bindFramebuffer(w.READ_FRAMEBUFFER,jt.__webglFramebuffer),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,lo.__webglFramebuffer);for(let Vi=0;Vi<_e;Vi++)_t&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ee.get(x).__webglTexture,I,be+Vi),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ee.get(U).__webglTexture,te,yt+Vi)),w.blitFramebuffer(Le,Ue,ue,de,$e,it,ue,de,w.DEPTH_BUFFER_BIT,w.NEAREST);Se.bindFramebuffer(w.READ_FRAMEBUFFER,null),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(I!==0||x.isRenderTargetTexture||Ee.has(x)){const mn=Ee.get(x),Gt=Ee.get(U);Se.bindFramebuffer(w.READ_FRAMEBUFFER,Sf),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ef);for(let jt=0;jt<_e;jt++)_t?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,mn.__webglTexture,I,be+jt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,mn.__webglTexture,I),pn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Gt.__webglTexture,te,yt+jt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Gt.__webglTexture,te),I!==0?w.blitFramebuffer(Le,Ue,ue,de,$e,it,ue,de,w.COLOR_BUFFER_BIT,w.NEAREST):pn?w.copyTexSubImage3D(It,te,$e,it,yt+jt,Le,Ue,ue,de):w.copyTexSubImage2D(It,te,$e,it,Le,Ue,ue,de);Se.bindFramebuffer(w.READ_FRAMEBUFFER,null),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else pn?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(It,te,$e,it,yt,ue,de,_e,Qe,we,vt.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(It,te,$e,it,yt,ue,de,_e,Qe,vt.data):w.texSubImage3D(It,te,$e,it,yt,ue,de,_e,Qe,we,vt):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,te,$e,it,ue,de,Qe,we,vt.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,te,$e,it,vt.width,vt.height,Qe,vt.data):w.texSubImage2D(w.TEXTURE_2D,te,$e,it,ue,de,Qe,we,vt);w.pixelStorei(w.UNPACK_ROW_LENGTH,rt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,wn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,xr),w.pixelStorei(w.UNPACK_SKIP_ROWS,rn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ms),te===0&&U.generateMipmaps&&w.generateMipmap(It),Se.unbindTexture()},this.copyTextureToTexture3D=function(x,U,z=null,H=null,I=0){return x.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,x=arguments[2],U=arguments[3],I=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,U,z,H,I)},this.initRenderTarget=function(x){Ee.get(x).__webglFramebuffer===void 0&&b.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?b.setTextureCube(x,0):x.isData3DTexture?b.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?b.setTexture2DArray(x,0):b.setTexture2D(x,0),Se.unbindTexture()},this.resetState=function(){R=0,A=0,L=null,Se.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const Gu={type:"change"},Mc={type:"start"},_f={type:"end"},Aa=new ef,Wu=new Ai,Qx=Math.cos(70*Am.DEG2RAD),At=new B,Zt=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yo=1e-6;class eM extends m_{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new gr,this._lastTargetPosition=new B,this._quat=new gr().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gu,this._sphericalDelta=new gu,this._scale=1,this._panOffset=new B,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new B,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nM.bind(this),this._onPointerDown=tM.bind(this),this._onPointerUp=iM.bind(this),this._onContextMenu=uM.bind(this),this._onMouseWheel=aM.bind(this),this._onKeyDown=oM.bind(this),this._onTouchStart=lM.bind(this),this._onTouchMove=cM.bind(this),this._onMouseDown=rM.bind(this),this._onMouseMove=sM.bind(this),this._interceptControlDown=hM.bind(this),this._interceptControlUp=fM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gu),this.update(),this.state=ht.NONE}update(e=null){const t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Zt:i>Math.PI&&(i-=Zt),r<-Math.PI?r+=Zt:r>Math.PI&&(r-=Zt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=At.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Aa.origin.copy(this.object.position),Aa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Aa.direction))<Qx?this.object.lookAt(this.target):(Wu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Aa.intersectPlane(Wu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Yo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yo||this._lastTargetPosition.distanceToSquared(this.target)>Yo?(this.dispatchEvent(Gu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;At.copy(r).sub(this.target);let s=At.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function tM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function nM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function iM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_f),this.state=ht.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ht.DOLLY;break;case Gr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}break;case Gr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Mc)}function sM(n){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function aM(n){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(n.preventDefault(),this.dispatchEvent(Mc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(_f))}function oM(n){this.enabled!==!1&&this._handleKeyDown(n)}function lM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ht.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ht.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Mc)}function cM(n){switch(this._trackPointer(n),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ht.NONE}}function uM(n){this.enabled!==!1&&n.preventDefault()}function hM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class dM{constructor(e){this.terrainMesh=null,this.heightModels=null,this.activeElevationModel="base",this.sceneMeta=null,this.animationId=null,this.animate=()=>{this.animationId=requestAnimationFrame(this.animate),this.controls.update(),this.render()},this.container=e;const t=document.createElement("canvas");e.appendChild(t),this.renderer=new Jx({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=en,this.renderer.toneMapping=Oh,this.renderer.toneMappingExposure=1.05,this.scene=new Qm,this.scene.background=new Je(4892904),this.camera=new En(50,1,.5,5e4),this.controls=new eM(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.maxPolarAngle=Math.PI/2.02,this.controls.minDistance=20,this.controls.maxDistance=12e3;const i=new c_(4891624,14215413,.62);this.scene.add(i);const r=new d_(13164021,.12);this.scene.add(r);const s=new f_(16774888,2.6);s.position.set(2e3,3e3,1500),this.scene.add(s),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.animate(),this.controls.addEventListener("change",()=>this.render())}async load(e,t={}){this.disposeTerrain();const i=e.replace(/\/scene\.json$/,""),r=await fetch(e);if(!r.ok)throw new Error(`Scene not found: ${e}`);this.sceneMeta=await r.json(),this.activeElevationModel=t.showSnow!==!1&&this.sceneMeta.has_snow_surface?"snow_surface":"base";const[s,o,a,l]=await Promise.all([this.loadBinary(`${i}/${this.sceneMeta.files.positions}`),this.loadBinary(`${i}/${this.sceneMeta.files.uvs}`),this.loadBinary(`${i}/${this.sceneMeta.files.indices}`),this.loadTexture(`${i}/${this.sceneMeta.textures.winter}`)]);this.heightModels=await this.loadElevationModels(i,this.sceneMeta);const c=new Float32Array(s),u=new Float32Array(o),d=this.sceneMeta.index_dtype==="uint16"?Uint16Array:Uint32Array,h=new d(a),m=new Uint32Array(h.length);for(let y=0;y<h.length;y++)m[y]=h[y];const _=new Hi;_.setAttribute("position",new Tn(c,3)),_.setAttribute("uv",new Tn(u,2)),_.setIndex(new mc(m,1)),_.computeVertexNormals(),_.computeBoundingBox(),_.computeBoundingSphere();const g=this.createTerrainMaterial(l);this.terrainMesh=new jn(_,g),this.terrainMesh.frustumCulled=!1,this.scene.add(this.terrainMesh),this.applyExaggeration(t.elevationFactor??1),this.frameCamera(this.terrainMesh);const p=Math.floor(this.sceneMeta.index_count/3).toLocaleString(),f=this.sceneMeta.vertex_count.toLocaleString();return`${this.sceneMeta.tile_id} · ${f} vertices · ${p} triangles`}dispose(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.resizeObserver.disconnect(),this.disposeTerrain(),this.controls.dispose(),this.renderer.dispose(),this.container.replaceChildren()}render(){this.renderer.render(this.scene,this.camera)}resize(){const e=Math.max(this.container.clientWidth,1),t=Math.max(this.container.clientHeight,1);this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.render()}async loadBinary(e){const t=await fetch(e);if(!t.ok)throw new Error(`File not found: ${e}`);return t.arrayBuffer()}async loadTexture(e){const i=await new l_().loadAsync(e);return i.colorSpace=en,i.flipY=!0,i.generateMipmaps=!0,i.minFilter=Di,i.magFilter=zn,i.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),i}createTerrainMaterial(e){return new n_({map:e,roughness:.92,metalness:0,side:Yn,toneMapped:!0})}extractHeights(e){const t=new Float32Array(e.length/3);for(let i=0;i<t.length;i++)t[i]=e[i*3+1];return t}async loadElevationModels(e,t){var o;const i={base:null,snow_surface:null},r=await this.loadBinary(`${e}/${t.files.positions}`);i.base=this.extractHeights(new Float32Array(r));const s=(o=t.elevation_models)==null?void 0:o.snow_surface;if(s)try{const a=await this.loadBinary(`${e}/${s}`);i.snow_surface=this.extractHeights(new Float32Array(a))}catch{i.snow_surface=null}return i}currentHeights(){return this.heightModels?this.heightModels[this.activeElevationModel]||this.heightModels.base:null}applyExaggeration(e){if(!this.terrainMesh)return;const t=this.currentHeights();if(!t)return;const i=this.terrainMesh.geometry.attributes.position.array;for(let r=0;r<t.length;r++)i[r*3+1]=t[r]*e;this.terrainMesh.geometry.attributes.position.needsUpdate=!0,this.terrainMesh.geometry.computeVertexNormals(),this.terrainMesh.geometry.computeBoundingBox(),this.terrainMesh.geometry.computeBoundingSphere()}frameCamera(e){const t=new gs().setFromObject(e),i=new B,r=new B;t.getCenter(i),t.getSize(r),this.controls.target.copy(i);const s=Math.max(r.x,r.y,r.z);this.camera.near=Math.max(s/5e3,.5),this.camera.far=s*20,this.camera.updateProjectionMatrix(),this.camera.position.set(i.x+s*.55,i.y+s*.45,i.z+s*.65),this.controls.update(),this.render()}disposeTerrain(){var e;this.terrainMesh&&(this.scene.remove(this.terrainMesh),this.terrainMesh.geometry.dispose(),(e=this.terrainMesh.material.map)==null||e.dispose(),this.terrainMesh.material instanceof vs&&this.terrainMesh.material.dispose(),this.terrainMesh=null,this.heightModels=null,this.sceneMeta=null)}}var pM=lt('<span class="error svelte-1mb27h9"> </span>'),mM=lt("<span> </span>"),_M=lt('<div class="viewer-shell svelte-1mb27h9"><div class="viewer-container svelte-1mb27h9"></div> <div class="viewer-status svelte-1mb27h9"><!></div></div>');function gM(n,e){Bi(e,!0);let t=Rt(e,"sceneUrl",3,""),i=Rt(e,"showSnow",3,!0),r=Rt(e,"elevationFactor",3,1),s,o=null,a="No scene loaded",l="";ac(()=>(o=new dM(s),()=>o==null?void 0:o.dispose())),Xa(()=>{if(!o||!t()){a=t()?"Loading viewer…":"Export viewer assets to display terrain";return}l="",a="Loading scene…",o.load(t(),{showSnow:i(),elevationFactor:r()}).then(g=>{a=g}).catch(g=>{l=g.message,a="Failed to load scene"})});var c=_M(),u=ye(c);hp(u,g=>s=g,()=>s);var d=Me(u,2),h=ye(d);{var m=g=>{var p=pM(),f=ye(p);dn(()=>Ft(f,l)),at(g,p)},_=g=>{var p=mM(),f=ye(p);dn(()=>Ft(f,a)),at(g,p)};Nn(h,g=>{l?g(m):g(_,-1)})}at(n,c),zi()}var vM=lt('<p class="muted svelte-1n46o8q"> </p>'),xM=lt('<section class="panel svelte-1n46o8q"><h3>Task Progress</h3> <!></section>'),MM=lt('<p class="muted svelte-1n46o8q">Run Export Viewer to load terrain here.</p>'),SM=lt('<section class="panel svelte-1n46o8q"><h2> </h2> <!> <p class="muted svelte-1n46o8q"> </p> <p class="muted svelte-1n46o8q">Region data folder: <code>buergle/</code> · tile id in config: <code>buergle_001</code></p> <div class="field-row svelte-1n46o8q"><label class="svelte-1n46o8q">Tile ID <input type="text" placeholder="buergle_001" class="svelte-1n46o8q"/></label> <label class="svelte-1n46o8q">Config path <input type="text" placeholder="auto-detected from tile id if empty" class="svelte-1n46o8q"/></label></div> <div class="actions svelte-1n46o8q"><button type="button" class="svelte-1n46o8q">Prepare Region</button> <button type="button" class="svelte-1n46o8q">Run Pipeline</button> <button type="button" class="svelte-1n46o8q">Run Snow Pipeline</button> <button type="button" class="svelte-1n46o8q">Export Viewer</button> <button type="button" class="secondary svelte-1n46o8q">Load Viewer</button></div></section> <div class="grid svelte-1n46o8q"><section class="panel svelte-1n46o8q"><!></section> <section class="panel svelte-1n46o8q"><!></section></div> <!> <section class="panel viewer-panel svelte-1n46o8q"><h3>3D Viewer</h3> <!> <!></section>',1),EM=lt('<section class="panel empty svelte-1n46o8q"><h2>Select a project</h2> <p class="muted svelte-1n46o8q">Create a project or pick one from the list to manage GPX tracks and run the pipeline.</p></section>'),yM=lt('<p class="error svelte-1n46o8q"> </p>'),TM=lt('<div class="app svelte-1n46o8q"><header class="svelte-1n46o8q"><h1 class="svelte-1n46o8q">Let It Snow</h1> <p class="svelte-1n46o8q">Multi-user 3D WebApp for winter orthophoto rendering</p></header> <div class="layout svelte-1n46o8q"><aside class="sidebar svelte-1n46o8q"><section class="svelte-1n46o8q"><h2>Create Project</h2> <!></section> <section class="svelte-1n46o8q"><!></section></aside> <main class="workspace svelte-1n46o8q"><!> <!></main></div></div>');function bM(n,e){Bi(e,!1);const t="http://localhost:8000";let i=bt(0),r=bt(null),s=bt(null),o=bt(null),a=bt(""),l=bt(""),c=bt(""),u=bt({profile:"default",resolutionM:.5,maxTextureDim:8192,stride:2});async function d(F){Ce(o,null);try{const J=await fetch(`${t}/projects`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.detail)});if(!J.ok)throw new Error(`HTTP ${J.status}`);Ce(i,K(i)+1)}catch(J){Ce(o,J.message)}}function h(F){return F.toLowerCase().replace(/[^a-z0-9_-]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}function m(F){Ce(r,F.detail),Ce(a,`${h(F.detail.name)}_001`),Ce(o,null),Ce(s,null),Ce(l,""),Ce(c,"")}function _(F){const J=F.detail.progress;!J||F.detail.status!=="SUCCESS"||(typeof J.config_path=="string"&&Ce(l,J.config_path),typeof J.tile_id=="string"&&Ce(a,J.tile_id),typeof J.scene_url=="string"?Ce(c,`${t}${J.scene_url}`):typeof J.tile_id=="string"&&Ce(c,`${t}/viewer/data/${J.tile_id}/scene.json`))}function g(F){Ce(u,F.detail)}async function p(F,J){Ce(o,null),Ce(s,null);try{const se=await fetch(F,{method:"POST",headers:{"Content-Type":"application/json"},body:J?JSON.stringify(J):void 0});if(!se.ok)throw new Error(`HTTP ${se.status}`);const ve=await se.json();Ce(s,ve.task_id)}catch(se){Ce(o,se.message)}}async function f(){if(!K(r))return;const{id:F,name:J,bbox:se}=K(r);await p(`${t}/tasks/prepare`,{project_id:F,name:J,bbox:se})}async function y(){K(r)&&await p(`${t}/tasks/run-pipeline`,{project_id:K(r).id,tile_id:K(a),profile:K(u).profile,config_path:K(l)})}async function T(){K(r)&&await p(`${t}/tasks/run-snow`,{project_id:K(r).id,tile_id:K(a),profile:K(u).profile,config_path:K(l)})}async function M(){K(r)&&await p(`${t}/tasks/export-viewer`,{project_id:K(r).id,tile_id:K(a),config_path:K(l),params:{profile:K(u).profile,resolution_m:K(u).resolutionM,max_texture_dim:K(u).maxTextureDim,stride:K(u).stride}})}_s();var C=TM(),R=Me(ye(C),2),A=ye(R),L=ye(A),E=Me(ye(L),2);yp(E,{$$events:{submit:d}});var S=Me(L,2),P=ye(S);ep(P,()=>K(i),F=>{{let J=to(()=>{var se;return((se=K(r))==null?void 0:se.id)??null});Sp(F,{get apiUrl(){return t},get selectedId(){return K(J)},$$events:{select:m}})}});var G=Me(A,2),k=ye(G);{var Z=F=>{var J=SM(),se=ec(J),ve=ye(se),Ve=ye(ve),nt=Me(ve,2);{var X=re=>{var Ne=vM(),ne=ye(Ne);dn(()=>Ft(ne,K(r).description)),at(re,Ne)};Nn(nt,re=>{K(r).description&&re(X)})}var ie=Me(nt,2),ge=ye(ie),oe=Me(ie,4),Ae=ye(oe),Pe=Me(ye(Ae)),Ge=Me(Ae,2),dt=Me(ye(Ge)),Ke=Me(oe,2),mt=ye(Ke),w=Me(mt,2),Vt=Me(w,2),We=Me(Vt,2),Xe=Me(We,2),Se=Me(se,2),ct=ye(Se),Ee=ye(ct);Cp(Ee,{get projectId(){return K(r).id},get apiUrl(){return t}});var b=Me(ct,2),v=ye(b);Dp(v,{get profile(){return K(u).profile},get resolutionM(){return K(u).resolutionM},get maxTextureDim(){return K(u).maxTextureDim},get stride(){return K(u).stride},$$events:{apply:g}});var O=Me(Se,2);{var Y=re=>{var Ne=xM(),ne=Me(ye(Ne),2);Bp(ne,{get taskId(){return K(s)},get apiUrl(){return t},$$events:{complete:_}}),at(re,Ne)};Nn(O,re=>{K(s)&&re(Y)})}var Q=Me(O,2),W=Me(ye(Q),2);gM(W,{get sceneUrl(){return K(c)},showSnow:!0,elevationFactor:1});var xe=Me(W,2);{var le=re=>{var Ne=MM();at(re,Ne)};Nn(xe,re=>{K(c)||re(le)})}dn(re=>{Ft(Ve,K(r).name),Ft(ge,`BBox: ${re??""}`),Xe.disabled=!K(a)},[()=>K(r).bbox.join(", ")]),Xn(Pe,()=>K(a),re=>Ce(a,re)),Xn(dt,()=>K(l),re=>Ce(l,re)),In("click",mt,f),In("click",w,y),In("click",Vt,T),In("click",We,M),In("click",Xe,()=>{K(a)&&Ce(c,`${t}/viewer/data/${K(a)}/scene.json`)}),at(F,J)},$=F=>{var J=EM();at(F,J)};Nn(k,F=>{K(r)?F(Z):F($,-1)})}var q=Me(k,2);{var ee=F=>{var J=yM(),se=ye(J);dn(()=>Ft(se,`Error: ${K(o)??""}`)),at(F,J)};Nn(q,F=>{K(o)&&F(ee)})}at(n,C),zi()}Zd(bM,{target:document.getElementById("app")});
