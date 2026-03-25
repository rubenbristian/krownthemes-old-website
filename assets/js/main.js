// ============================================
// VENDOR LIBRARIES
// ============================================

// --- GSAP 3.5.0 ---
/*!
 * GSAP 3.5.0
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t){return"string"==typeof t}function o(t){return"function"==typeof t}function p(t){return"number"==typeof t}function q(t){return void 0===t}function r(t){return"object"==typeof t}function s(t){return!1!==t}function t(){return"undefined"!=typeof window}function u(t){return o(t)||n(t)}function K(t){return(l=mt(t,ot))&&ae}function L(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function M(t,e){return!e&&console.warn(t)}function N(t,e){return t&&(ot[t]=e)&&l&&(l[t]=e)||ot}function O(){return 0}function Y(t){var e,i,n=t[0];if(r(n)||o(n)||(t=[t]),!(e=(n._gsap||{}).harness)){for(i=_t.length;i--&&!_t[i].targetTest(n););e=_t[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new It(t[i],e)))||t.splice(i,1);return t}function Z(t){return t._gsap||Y(bt(t))[0]._gsap}function $(t,e,r){return(r=t[e])&&o(r)?t[e]():q(r)&&t.getAttribute&&t.getAttribute(e)||r}function _(t,e){return(t=t.split(",")).forEach(e)||t}function aa(t){return Math.round(1e5*t)/1e5||0}function ba(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ca(t,e,r){var i,n=p(t[1]),a=(n?2:1)+(e<2?0:1),o=t[a];if(n&&(o.duration=t[1]),o.parent=r,e){for(i=o;r&&!("immediateRender"in i);)i=r.vars.defaults||{},r=s(r.vars.inherit)&&r.parent;o.immediateRender=s(i.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return o}function da(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ea(t,e,r,i){ht.length&&da(),t.render(e,r,i),ht.length&&da()}function fa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(st).length<2?e:n(t)?t.trim():t}function ga(t){return t}function ha(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ia(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ka(t,e){for(var i in e)t[i]=r(e[i])?ka(t[i]||(t[i]={}),e[i]):e[i];return t}function la(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function ma(t){var e=t.parent||E,r=t.keyframes?ia:ha;if(s(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function pa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function qa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ra(t,e){if(!e||e._end>t._dur||e._start<0)for(var r=t;r;)r._dirty=1,r=r.parent;return t}function ua(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function wa(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function xa(t){return t._end=aa(t._start+(t._tDur/Math.abs(t._ts||t._rts||U)||0))}function ya(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=aa(t._dp._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),xa(t),r._dirty||ra(r,t)),t}function za(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=wa(t.rawTime(),e),(!e._dur||yt(0,e.totalDuration(),r)-e._tTime>U)&&e.render(r,!0)),ra(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-U}}function Aa(t,e,r,i){return e.parent&&qa(e),e._start=aa(r+e._delay),e._end=aa(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||za(t,e),t}function Ba(t,e){return(ot.ScrollTrigger||L("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ca(t,e,r,i){return Nt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&d!==At.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Fa(t,e,r,i){var n=t._repeat,a=aa(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:aa(a*(n+1)+t._rDelay*n):a,s&&!i?ya(t,t._tTime=t._tDur*s):t.parent&&xa(t),r||ra(t.parent,t),t}function Ga(t){return t instanceof Bt?ra(t):Fa(t,t._dur)}function Ia(t,e){var r,i,a=t.labels,s=t._recent||vt,o=t.duration()>=B?s.endTime(!1):t._dur;return n(e)&&(isNaN(e)||e in a)?"<"===(r=e.charAt(0))||">"===r?("<"===r?s._start:s.endTime(0<=s._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in a||(a[e]=o),a[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?Ia(t,e.substr(0,r-1))+i:o+i):null==e?o:+e}function Ja(t,e){return t||0===t?e(t):e}function La(t){return(t+"").substr((parseFloat(t)+"").length)}function Oa(t,e){return t&&r(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&r(t[0]))&&!t.nodeType&&t!==i}function Ra(t){return t.sort(function(){return.5-Math.random()})}function Sa(t){if(o(t))return t;var _=r(t)?t:{each:t},c=Rt(_.ease),m=_.from||0,g=parseFloat(_.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,T=_.axis,b=m,w=m;return n(m)?b=w={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(b=m[0],w=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||_).length,p=v[d];if(!p){if(!(f="auto"===_.grid?0:(_.grid||[1,B])[1])){for(h=-B;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(p=v[d]=[],i=y?Math.min(f,d)*b-.5:m%f,n=y?d*w/f-.5:m/f|0,l=B,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),p[u]=o=T?Math.abs("y"===T?s:a):J(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&Ra(p),p.max=h-l,p.min=l,p.v=d=(parseFloat(_.amount)||parseFloat(_.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),p.b=d<0?g-d:g,p.u=La(_.amount||_.each)||0,c=c&&d<0?Ft(c):c}return d=(p[t]-p.min)/p.max||0,aa(p.b+(c?c(d):d)*p.v)+p.u}}function Ta(e){var r=e<1?Math.pow(10,(e+"").length-2):1;return function(t){return Math.floor(Math.round(parseFloat(t)/e)*e*r)/r+(p(t)?0:La(t))}}function Ua(u,t){var h,l,e=tt(u);return!e&&r(u)&&(h=e=u.radius||B,u.values?(u=bt(u.values),(l=!p(u[0]))&&(h*=h)):u=Ta(u.increment)),Ja(t,e?o(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=B,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||p(t)?s:s+La(t)}:Ta(u))}function Va(t,e,r,i){return Ja(tt(t)?!e:!0===r?!!(r=0):!i,function(){return tt(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t+Math.random()*(e-t))/r)*r*i)/i})}function Za(e,r,t){return Ja(t,function(t){return e[~~r(t)]})}function ab(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?st:et),s+=t.substr(a,e-a)+Va(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function db(t,e,r){var i,n,a,s=t.labels,o=B;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function fb(t){return qa(t),t.progress()<1&&xt(t,"onInterrupt"),t}function kb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*kt+.5|0}function lb(t,e,r){var i,n,a,s,o,u,h,l,f,d,_=t?p(t)?[t>>16,t>>8&kt,t&kt]:0:Ot.black;if(!_){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Ot[t])_=Ot[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a),_=[(t=parseInt(t.substr(1),16))>>16,t>>8&kt,t&kt];else if("hsl"===t.substr(0,3))if(_=d=t.match(et),e){if(~t.indexOf("="))return _=t.match(rt),r&&_.length<4&&(_[3]=1),_}else s=+_[0]%360/360,o=_[1]/100,i=2*(u=_[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<_.length&&(_[3]*=1),_[0]=kb(s+1/3,i,n),_[1]=kb(s,i,n),_[2]=kb(s-1/3,i,n);else _=t.match(et)||Ot.transparent;_=_.map(Number)}return e&&!d&&(i=_[0]/kt,n=_[1]/kt,a=_[2]/kt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),_[0]=~~(s+.5),_[1]=~~(100*o+.5),_[2]=~~(100*u+.5)),r&&_.length<4&&(_[3]=1),_}function mb(t){var r=[],i=[],n=-1;return t.split(Mt).forEach(function(t){var e=t.match(it)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function nb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Mt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=lb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=mb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Mt,"1").split(it)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Mt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function qb(t){var e,r=t.join(" ");if(Mt.lastIndex=0,Mt.test(r))return e=Ct.test(r),t[1]=nb(t[1],e),t[0]=nb(t[0],e,mb(t[1])),!0}function zb(t){var e=(t+"").split("("),r=Dt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(zt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(fa)):Dt._CE&&St.test(t)?Dt._CE("",t):r}function Bb(t,e){for(var r,i=t._first;i;)i instanceof Bt?Bb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Bb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Db(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return _(t,function(t){for(var e in Dt[t]=ot[t]=a,Dt[n=t.toLowerCase()]=r,a)Dt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Dt[t+"."+e]=a[e]}),a}function Eb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Fb(r,t,e){function ul(t){return 1===t?1:i*Math.pow(2,-10*t)*W((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/V*(Math.asin(1/i)||0),s="out"===r?ul:"in"===r?function(t){return 1-ul(1-t)}:Eb(ul);return n=V/n,s.config=function(t,e){return Fb(r,t,e)},s}function Gb(e,r){function Cl(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Cl:"in"===e?function(t){return 1-Cl(1-t)}:Eb(Cl);return t.config=function(t){return Gb(e,t)},t}var E,i,a,h,l,f,d,c,m,g,v,y,T,b,w,x,k,C,A,P,D,S,z,F,R,j={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},I={duration:.5,overwrite:!1,delay:0},B=1e8,U=1/B,V=2*Math.PI,X=V/4,G=0,J=Math.sqrt,Q=Math.cos,W=Math.sin,H="function"==typeof ArrayBuffer?ArrayBuffer.isView:function(){},tt=Array.isArray,et=/(?:-?\.?\d|\.)+/gi,rt=/[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,it=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nt=/[-+=.]*\d+(?:\.|e-|e)*\d*/gi,at=/[+-]=-?[\.\d]+/,st=/[#\-+.]*\b[a-z\d-=+%.]+/gi,ot={},ut={},ht=[],lt={},ft={},dt={},pt=30,_t=[],ct="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){return(t/=e)&&~~t===t?~~t-1:~~t},vt={_start:0,endTime:O},yt=function _clamp(t,e,r){return r<t?t:e<r?e:r},Tt=[].slice,bt=function toArray(t,e){return!n(t)||e||!a&&Pt()?tt(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return n(t)&&!e||Oa(t,1)?r.push.apply(r,bt(t)):r.push(t)})||r}(t,e):Oa(t)?Tt.call(t,0):t?[t]:[]:Tt.call(h.querySelectorAll(t),0)},wt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Ja(n,function(t){return r+((t-e)/a*s||0)})},xt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&da(),i?s.apply(n,i):s.call(n)},kt=255,Ot={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},Mt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in Ot)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ct=/hsl[a]?\(/,At=(x=Date.now,k=500,C=33,A=x(),P=A,S=D=1e3/240,T={time:0,frame:0,tick:function tick(){qk(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){f&&(!a&&t()&&(i=a=window,h=i.document||{},ot.gsap=ae,(i.gsapVersions||(i.gsapVersions=[])).push(ae.version),K(l||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),g&&T.sleep(),v=y||function(t){return setTimeout(t,S-1e3*T.time+1|0)},m=1,qk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(g),m=0,v=O},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,C=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),S=1e3*T.time+D},add:function add(t){z.indexOf(t)<0&&z.push(t),Pt()},remove:function remove(t){var e;~(e=z.indexOf(t))&&z.splice(e,1)&&e<=w&&w--},_listeners:z=[]}),Pt=function _wake(){return!m&&At.wake()},Dt={},St=/^[\d.\-M][\d.\-,\s]/,zt=/["']/g,Ft=function _invertEase(e){return function(t){return 1-e(1-t)}},Rt=function _parseEase(t,e){return t&&(o(t)?t:Dt[t]||zb(t))||e};function qk(t){var e,r,i,n,a=x()-P,s=!0===t;if(k<a&&(A+=a-C),(0<(e=(i=(P+=a)-A)-S)||s)&&(n=++T.frame,b=i-1e3*T.time,T.time=i/=1e3,S+=e+(D<=e?4:D-e),r=1),s||(g=v(qk)),r)for(w=0;w<z.length;w++)z[w](i,b,n,t)}function Tl(t){return t<R?F*t*t:t<.7272727272727273?F*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?F*(t-=2.25/2.75)*t+.9375:F*Math.pow(t-2.625/2.75,2)+.984375}_("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Db(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Dt.Linear.easeNone=Dt.none=Dt.Linear.easeIn,Db("Elastic",Fb("in"),Fb("out"),Fb()),F=7.5625,R=1/2.75,Db("Bounce",function(t){return 1-Tl(1-t)},Tl),Db("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Db("Circ",function(t){return-(J(1-t*t)-1)}),Db("Sine",function(t){return 1===t?1:1-Q(t*X)}),Db("Back",Gb("in"),Gb("out"),Gb()),Dt.SteppedEase=Dt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*yt(0,.99999999,t)|0)+n)*r}}},I.ease=Dt["quad.out"],_("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ct+=t+","+t+"Params,"});var Et,It=function GSCache(t,e){this.id=G++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:$,this.set=e?e.getSetter:Qt},Lt=((Et=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Et.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Et.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Fa(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Et.totalTime=function totalTime(t,e){if(Pt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ya(this,t);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Aa(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===U||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),ea(this,t,e)),this},Et.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+ua(this))%this._dur||(t?this._dur:0),e):this._time},Et.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Et.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+ua(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Et.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},Et.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-U?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?wa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-U?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(yt(-this._delay,this._tDur,e),!0))},Et.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=U)&&Math.abs(this._zTime)!==U))),this):this._ps},Et.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Aa(e,this,t-this._delay),this}return this._start},Et.endTime=function endTime(t){return this._start+(s(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},Et.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wa(e.rawTime(t),this):this._tTime:this._tTime},Et.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},Et.repeat=function repeat(t){return arguments.length?(this._repeat=t,Ga(this)):this._repeat},Et.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Ga(this)):this._rDelay},Et.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Et.seek=function seek(t,e){return this.totalTime(Ia(this,t),s(e))},Et.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,s(e))},Et.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Et.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Et.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Et.resume=function resume(){return this.paused(!1)},Et.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-U:0)),this):this._rts<0},Et.invalidate=function invalidate(){return this._initted=0,this._zTime=-U,this},Et.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-U))},Et.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Et.then=function then(t){var i=this;return new Promise(function(e){function jn(){var t=i.then;i.then=null,o(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=o(t)?t:ga;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?jn():i._prom=jn})},Et.kill=function kill(){fb(this)},Animation);function Animation(t,e){var r=t.parent||E;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Fa(this,+t.duration,1,1),this.data=t.data,m||At.wake(),r&&Aa(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ha(Lt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-U,_prom:0,_ps:!1,_rts:1});var Bt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t,e)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=s(t.sortChildren),r.parent&&za(r.parent,_assertThisInitialized(r)),t.scrollTrigger&&Ba(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var t=Timeline.prototype;return t.to=function to(t,e,r,i){return new Xt(t,ca(arguments,0,this),Ia(this,p(e)?i:r)),this},t.from=function from(t,e,r,i){return new Xt(t,ca(arguments,1,this),Ia(this,p(e)?i:r)),this},t.fromTo=function fromTo(t,e,r,i,n){return new Xt(t,ca(arguments,2,this),Ia(this,p(e)?n:i)),this},t.set=function set(t,e,r){return e.duration=0,e.parent=this,ma(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Xt(t,e,Ia(this,r),1),this},t.call=function call(t,e,r){return Aa(this,Xt.delayedCall(0,t,e),Ia(this,r))},t.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Xt(t,r,Ia(this,n)),this},t.staggerFrom=function staggerFrom(t,e,r,i,n,a,o){return r.runBackwards=1,ma(r).immediateRender=s(r.immediateRender),this.staggerTo(t,e,r,i,n,a,o)},t.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,o,u){return i.startAt=r,ma(i).immediateRender=s(i.immediateRender),this.staggerTo(t,e,i,n,a,o,u)},t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,p,_,c=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==E&&m-U<t&&0<=t?m:t<U?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(c!==this._time&&g&&(v+=this._time-c,t+=this._time-c),i=v,f=this._start,u=!(l=this._ts),y&&(g||(c=this._zTime),!t&&e||(this._zTime=t)),this._repeat&&(p=this._yoyo,o=g+this._rDelay,i=aa(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!c&&this._tTime&&d!==s&&(d=s),p&&1&s&&(i=g-i,_=1),s!==d&&!this._lock)){var T=p&&1&d,b=T===(p&&1&s);if(s<d&&(T=!T),c=T?0:g,this._lock=1,this.render(c||(_?0:aa(s*o)),e,!g)._lock=0,!e&&this.parent&&xt(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1),c!==this._time||u!=!this._ts)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,c=T?g+1e-4:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Bb(this,_)}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,aa(c),aa(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t),c||!i||e||xt(this,"onStart"),c<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-U);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-U:U);break}}n=a}}if(h&&!e&&(this.pause(),h.render(c<=i?0:-U)._zTime=c<=i?1:-1,this._ts))return this._start=f,xa(this),this.render(t,e,r);this._onUpdate&&!e&&xt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&c)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||qa(this,1),e||t<0&&!c||!v&&!c||(xt(this,v===m?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},t.add=function add(t,e){var r=this;if(p(e)||(e=Ia(this,e)),!(t instanceof Lt)){if(tt(t))return t.forEach(function(t){return r.add(t,e)}),this;if(n(t))return this.addLabel(t,e);if(!o(t))return this;t=Xt.delayedCall(0,t)}return this!==t?Aa(this,t,e):this},t.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-B);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Xt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},t.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},t.remove=function remove(t){return n(t)?this.removeLabel(t):o(t)?this.killTweensOf(t):(pa(this,t),t===this._recent&&(this._recent=this._last),ra(this))},t.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=aa(At.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},t.addLabel=function addLabel(t,e){return this.labels[t]=Ia(this,e),this},t.removeLabel=function removeLabel(t){return delete this.labels[t],this},t.addPause=function addPause(t,e,r){var i=Xt.delayedCall(0,e||O,r);return i.data="isPause",this._hasPause=1,Aa(this,i,Ia(this,t))},t.removePause=function removePause(t){var e=this._first;for(t=Ia(this,t);e;)e._start===t&&"isPause"===e.data&&qa(e),e=e._next},t.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)qt!==i[n]&&i[n].kill(t,e);return this},t.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=bt(t),a=this._first,s=p(e);a;)a instanceof Xt?ba(a._targets,n)&&(s?(!qt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},t.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=Ia(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=Xt.to(r,ha(e,{ease:"none",lazy:!1,time:i,duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||U,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());o._dur!==t&&Fa(o,t,0,1).render(o._time,!0,!0),a&&a.apply(o,s||[])}}));return o},t.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ha({startAt:{time:Ia(this,t)}},r))},t.recent=function recent(){return this._recent},t.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),db(this,Ia(this,t))},t.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),db(this,Ia(this,t),1)},t.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+U)},t.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ra(this)},t.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return i.prototype.invalidate.call(this)},t.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._time=this._tTime=this._pTime=0,t&&(this.labels={}),ra(this)},t.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=B;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Aa(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Fa(a,a===E&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(E._ts&&(ea(E,wa(t,E)),d=At.frame),At.frame>=pt){pt+=j.autoSleep||120;var e=E._first;if((!e||!e._ts)&&j.autoSleep&&At._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||At.sleep()}}},Timeline}(Lt);ha(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Nb(t,e,i,a,s,u){var h,l,f,d;if(ft[t]&&!1!==(h=new ft[t]).init(s,h.rawVars?e[t]:function _processVars(t,e,i,a,s){if(o(t)&&(t=jt(t,s,e,i,a)),!r(t)||t.style&&t.nodeType||tt(t)||H(t))return n(t)?jt(t,s,e,i,a):t;var u,h={};for(u in t)h[u]=jt(t[u],s,e,i,a);return h}(e[t],a,s,u,i),i,a,u)&&(i._pt=l=new ie(i._pt,s,t,0,1,h.render,h,0,h.priority),i!==c))for(f=i._ptLookup[i._targets.indexOf(s)],d=h._props.length;d--;)f[h._props[d]]=l;return h}var qt,Yt=function _addPropTween(t,e,r,i,a,s,u,h,l){o(i)&&(i=i(a||0,t,s));var f,d=t[e],p="get"!==r?r:o(d)?l?t[e.indexOf("set")||!o(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,_=o(d)?l?Jt:Zt:Gt;if(n(i)&&(~i.indexOf("random(")&&(i=ab(i)),"="===i.charAt(1)&&(i=parseFloat(p)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(La(p)||0))),p!==i)return isNaN(p*i)?(d||e in t||L(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,p,_,c=new ie(this._pt,t,e,0,1,Ht,null,n),m=0,g=0;for(c.b=r,c.e=i,r+="",(p=~(i+="").indexOf("random("))&&(i=ab(i)),a&&(a(_=[r,i],t,e),r=_[0],i=_[1]),u=r.match(nt)||[];o=nt.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,c._pt={_next:c._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=nt.lastIndex);return c.c=m<i.length?i.substring(m,i.length):"",c.fp=s,(at.test(i)||p)&&(c.e=0),this._pt=c}.call(this,t,e,p,i,_,h||j.stringFilter,l)):(f=new ie(this._pt,t,e,+p||0,i-(p||0),"boolean"==typeof d?$t:Wt,0,_),l&&(f.fp=l),u&&f.modifier(u,this,t),this._pt=f)},Nt=function _initTween(t,e){var r,i,n,a,o,u,h,l,f,d,p,_,c,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,w=m.onUpdateParams,x=m.callbackScope,k=m.runBackwards,O=m.yoyoEase,M=m.keyframes,C=m.autoRevert,A=t._dur,P=t._startAt,D=t._targets,S=t.parent,z=S&&"nested"===S.data?S.parent._targets:D,F="auto"===t._overwrite,R=t.timeline;if(!R||M&&g||(g="none"),t._ease=Rt(g,I.ease),t._yEase=O?Ft(Rt(!0===O?g:O,I.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),!R){if(_=(l=D[0]?Z(D[0]).harness:0)&&m[l.prop],r=la(m,ut),P&&P.render(-1,!0).kill(),v){if(qa(t._startAt=Xt.set(D,ha({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:s(T),startAt:null,delay:0,onUpdate:b,onUpdateParams:w,callbackScope:x,stagger:0},v))),y)if(0<e)C||(t._startAt=0);else if(A&&!(e<0&&P))return void(e&&(t._zTime=e))}else if(k&&A)if(P)C||(t._startAt=0);else if(e&&(y=!1),n=ha({overwrite:!1,data:"isFromStart",lazy:y&&s(T),immediateRender:y,stagger:0,parent:S},r),_&&(n[l.prop]=_),qa(t._startAt=Xt.set(D,n)),y){if(!e)return}else _initTween(t._startAt,U);for(t._pt=0,T=A&&s(T)||T&&!A,i=0;i<D.length;i++){if(h=(o=D[i])._gsap||Y(D)[i]._gsap,t._ptLookup[i]=d={},lt[h.id]&&da(),p=z===D?i:z.indexOf(o),l&&!1!==(f=new l).init(o,_||r,t,p,z)&&(t._pt=a=new ie(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=a}),f.priority&&(u=1)),!l||_)for(n in r)ft[n]&&(f=Nb(n,r,t,p,o,z))?f.priority&&(u=1):d[n]=a=Yt.call(t,o,n,"get",r[n],p,z,0,m.stringFilter);t._op&&t._op[i]&&t.kill(o,t._op[i]),F&&t._pt&&(qt=t,E.killTweensOf(o,d,t.globalTime(0)),c=!t.parent,qt=0),t._pt&&T&&(lt[h.id]=1)}u&&re(t),t._onInit&&t._onInit(t)}t._from=!R&&!!m.runBackwards,t._onUpdate=b,t._initted=(!t._op||t._pt)&&!c},jt=function _parseFuncOrString(t,e,r,i,a){return o(t)?t.call(e,r,i,a):n(t)&&~t.indexOf("random(")?ab(t):t},Ut=ct+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Vt=(Ut+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Xt=function(S){function Tween(t,e,i,n){var a;"number"==typeof e&&(i.duration=e,e=i,i=null);var o,h,l,f,d,_,c,m,g=(a=S.call(this,n?e:ma(e),i)||this).vars,v=g.duration,y=g.delay,T=g.immediateRender,b=g.stagger,w=g.overwrite,x=g.keyframes,k=g.defaults,C=g.scrollTrigger,A=g.yoyoEase,P=a.parent,D=(tt(t)||H(t)?p(t[0]):"length"in e)?[t]:bt(t);if(a._targets=D.length?Y(D):M("GSAP target "+t+" not found. https://greensock.com",!j.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=w,x||b||u(v)||u(y)){if(e=a.vars,(o=a.timeline=new Bt({data:"nested",defaults:k||{}})).kill(),o.parent=_assertThisInitialized(a),x)ha(o.vars.defaults,{ease:"none"}),x.forEach(function(t){return o.to(D,t,">")});else{if(f=D.length,c=b?Sa(b):O,r(b))for(d in b)~Ut.indexOf(d)&&((m=m||{})[d]=b[d]);for(h=0;h<f;h++){for(d in l={},e)Vt.indexOf(d)<0&&(l[d]=e[d]);l.stagger=0,A&&(l.yoyoEase=A),m&&mt(l,m),_=D[h],l.duration=+jt(v,_assertThisInitialized(a),h,_,D),l.delay=(+jt(y,_assertThisInitialized(a),h,_,D)||0)-a._delay,!b&&1===f&&l.delay&&(a._delay=y=l.delay,a._start+=y,l.delay=0),o.to(_,l,c(h,_,D))}o.duration()?v=y=0:a.timeline=0}v||a.duration(v=o.duration())}else a.timeline=0;return!0===w&&(qt=_assertThisInitialized(a),E.killTweensOf(D),qt=0),P&&za(P,_assertThisInitialized(a)),(T||!v&&!x&&a._start===aa(P._time)&&s(T)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-U,a.render(Math.max(0,-y))),C&&Ba(_assertThisInitialized(a),C),a}_inheritsLoose(Tween,S);var t=Tween.prototype;return t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,p=this._tDur,_=this._dur,c=p-U<t&&0<=t?p:t<U?0:t;if(_){if(c!==this._tTime||!t||r||this._startAt&&this._zTime<0!=t<0){if(i=c,l=this.timeline,this._repeat){if(s=_+this._rDelay,i=aa(c%s),c===p?(a=this._repeat,i=_):((a=~~(c/s))&&a===c/s&&(i=_,a--),_<i&&(i=_)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=_-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Bb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(aa(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ca(this,t<0?t:i,r,e))return this._tTime=0,this;if(_!==this._dur)return this.render(t,e,r)}for(this._tTime=c,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/_),this._from&&(this.ratio=h=1-h),!i||d||e||xt(this,"onStart"),n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-U:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),xt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&xt(this,"onRepeat"),c!==this._tDur&&c||this._tTime!==c||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&_||!(c===this._tDur&&0<this._ts||!c&&this._ts<0)||qa(this,1),e||t<0&&!d||!c&&!d||(xt(this,c===p?"onComplete":"onReverseComplete",!0),!this._prom||c<p&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s=t.ratio,o=e<0||!e&&s&&!t._start&&t._zTime>U&&!t._dp._lock||(t._ts<0||t._dp._ts<0)&&"isFromStart"!==t.data&&"isStart"!==t.data?0:1,u=t._rDelay,h=0;if(u&&t._repeat&&(h=yt(0,t._tDur,e),gt(h,u)!==(a=gt(t._tTime,u))&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),t._initted||!Ca(t,e,i,r))if(o!==s||i||t._zTime===U||!e&&t._zTime){for(a=t._zTime,t._zTime=e||(r?U:0),r=r||e&&!a,t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=h,r||xt(t,"onStart"),n=t._pt;n;)n.r(o,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&xt(t,"onUpdate"),h&&t._repeat&&!r&&t.parent&&xt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&qa(t,1),r||(xt(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},t.targets=function targets(){return this._targets},t.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),S.prototype.invalidate.call(this)},t.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e)&&(this._lazy=0,this.parent))return fb(this);if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,qt&&!0!==qt.vars.overwrite)._first||fb(this),this.parent&&r!==this.timeline.totalDuration()&&Fa(this,this._dur*this.timeline._tDur/r,0,1),this}var i,a,s,o,u,h,l,f=this._targets,d=t?bt(t):f,p=this._ptLookup,c=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),fb(this);for(i=this._op=this._op||[],"all"!==e&&(n(e)&&(u={},_(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?Z(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in a=p[l],"all"===e?(i[l]=e,o=a,s={}):(s=i[l]=i[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||pa(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&c&&fb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ca(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ca(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return E.killTweensOf(t,e,r)},Tween}(Lt);ha(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),_("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var t=new Bt,e=Tt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function Yb(t,e,r){return t.setAttribute(e,r)}function ec(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Gt=function _setterPlain(t,e,r){return t[e]=r},Zt=function _setterFunc(t,e,r){return t[e](r)},Jt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Qt=function _getSetter(t,e){return o(t[e])?Zt:q(t[e])&&t.setAttribute?Yb:Gt},Wt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},$t=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ht=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},Kt=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},te=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ee=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?pa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},re=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ie=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=ec,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Wt,this.d=s||this,this.set=o||Gt,this.pr=u||0,(this._next=t)&&(t._prev=this)}_(ct+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Xt,ot.TimelineLite=ot.TimelineMax=Bt,E=new Bt({sortChildren:!1,defaults:I,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),j.stringFilter=qb;var ne={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=o(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:O,render:Kt,add:Yt,kill:ee,modifier:te,rawVars:0},a={targetTest:0,get:0,getSetter:Qt,aliases:{},register:0};if(Pt(),t!==i){if(ft[e])return;ha(i,ha(la(t,n),a)),mt(i.prototype,mt(n,la(t,a))),ft[i.prop=e]=i,t.targetTest&&(_t.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}N(e,i),t.register&&t.register(ae,i,ie)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return E.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){n(i)&&(i=bt(i)[0]);var a=Z(i||{}).get,s=e?ga:fa;return"native"===e&&(e=""),i?t?s((ft[t]&&ft[t].get||a)(i,t,e,r)):function(t,e,r){return s((ft[t]&&ft[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=bt(r)).length){var n=r.map(function(t){return ae.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=Z(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&Kt(1,c)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<E.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Rt(t.ease,I.ease)),ka(I,t||{})},config:function config(t){return ka(j,t||{})},registerEffect:function registerEffect(t){var n=t.name,i=t.effect,e=t.plugins,a=t.defaults,s=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&M(n+" effect requires "+t+" plugin.")}),dt[n]=function(t,e,r){return i(bt(t),ha(e||{},a),r)},s&&(Bt.prototype[n]=function(t,e,i){return this.add(dt[n](t,r(e)?e:(i=e)&&{},this),i)})},registerEase:function registerEase(t,e){Dt[t]=Rt(e)},parseEase:function parseEase(t,e){return arguments.length?Rt(t,e):Dt},getById:function getById(t){return E.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Bt(t);for(n.smoothChildTiming=s(t.smoothChildTiming),E.remove(n),n._dp=0,n._time=n._tTime=E._time,r=E._first;r;)i=r._next,!e&&!r._dur&&r instanceof Xt&&r.vars.onComplete===r._targets[0]||Aa(n,r,r._start-r._delay),r=i;return Aa(E,n,0),n},utils:{wrap:function wrap(e,t,r){var i=t-e;return tt(e)?Za(e,wrap(0,e.length),t):Ja(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return tt(e)?Za(e,wrapYoyo(0,e.length-1),t):Ja(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Sa,random:Va,snap:Ua,normalize:function normalize(t,e,r){return wt(t,e,0,1,r)},getUnit:La,clamp:function clamp(e,r,t){return Ja(t,function(t){return yt(e,r,t)})},splitColor:lb,toArray:bt,mapRange:wt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||La(t))}},interpolate:function interpolate(e,r,t,i){var a=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!a){var s,o,u,h,l,f=n(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(tt(e)&&!tt(r)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(tt(e)?[]:{},e));if(!u){for(s in r)Yt.call(d,e,s,"get",r[s]);a=function func(t){return Kt(t,d)||(f?e.p:e)}}}return Ja(t,a)},shuffle:Ra},install:K,effects:dt,ticker:At,updateRoot:Bt.updateRoot,plugins:ft,globalTimeline:E,core:{PropTween:ie,globals:N,Tween:Xt,Timeline:Bt,Animation:Lt,getCache:Z,_removeLinkedListItem:pa}};_("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ne[t]=Xt[t]}),At.add(Bt.updateRoot),c=ne.to({},{duration:0});function ic(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function kc(t,a){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(n(i)&&(e={},_(i,function(t){return e[t]=1}),i=e),a){for(r in e={},i)e[r]=a(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=ic(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var ae=ne.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},kc("roundProps",Ta),kc("modifiers"),kc("snap",Ua))||ne;Xt.version=Bt.version=ae.version="3.5.0",f=1,t()&&Pt();function Vc(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Wc(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Xc(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function Yc(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function Zc(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function $c(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function _c(t,e,r){return t.style[e]=r}function ad(t,e,r){return t.style.setProperty(e,r)}function bd(t,e,r){return t._gsap[e]=r}function cd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function dd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function ed(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function id(t,e){var r=oe.createElementNS?oe.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):oe.createElement(t);return r.style?r:oe.createElement(t)}function jd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ie,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&jd(t,Ue(e)||e,1)||""}function md(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(se=window,oe=se.document,ue=oe.documentElement,le=id("div")||{style:{}},fe=id("div"),Ye=Ue(Ye),Ne=Ye+"Origin",le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pe=!!Ue("perspective"),he=1)}function nd(t){var e,r=id("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(ue.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=nd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ue.removeChild(r),this.style.cssText=a,e}function od(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function pd(e){var r;try{r=e.getBBox()}catch(t){r=nd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===nd||(r=nd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+od(e,["x","cx","x1"])||0,y:+od(e,["y","cy","y1"])||0,width:0,height:0}}function qd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!pd(t))}function rd(t,e){if(e){var r=t.style;e in ze&&e!==Ne&&(e=Ye),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Ie,"-$1").toLowerCase())):r.removeAttribute(e)}}function sd(t,e,r,i,n,a){var s=new ie(t._pt,e,r,0,1,a?$c:Zc);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function ud(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=le.style,f=Le.test(e),d="svg"===t.tagName.toLowerCase(),p=(d?"client":"offset")+(f?"Width":"Height"),_="px"===i,c="%"===i;return i===h||!u||Ve[i]||Ve[h]?u:("px"===h||_||(u=ud(t,e,r,"px")),o=t.getCTM&&qd(t),c&&(ze[e]||~e.indexOf("adius"))?aa(u/(o?t.getBBox()[f?"width":"height"]:t[p])*100):(l[f?"width":"height"]=100+(_?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==oe&&a.appendChild||(a=oe.body),(s=a._gsap)&&c&&s.width&&f&&s.time===At.time?aa(u/s.width*100):(!c&&"%"!==h||(l.position=jd(t,"position")),a===t&&(l.position="static"),a.appendChild(le),n=le[p],a.removeChild(le),l.position="absolute",f&&c&&((s=Z(a)).time=At.time,s.width=a[p]),aa(_?n*u/100:n&&u?100/n*u:0))))}function vd(t,e,r,i){var n;return he||md(),e in qe&&"transform"!==e&&~(e=qe[e]).indexOf(",")&&(e=e.split(",")[0]),ze[e]&&"transform"!==e?(n=Qe(t,i),n="transformOrigin"!==e?n[e]:We(jd(t,Ne))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Ge[e]&&Ge[e](t,e,r)||jd(t,e)||$(t,e)||("opacity"===e?1:0)),r&&!~(n+"").indexOf(" ")?ud(t,e,n,r)+r:n}function wd(t,e,r,i){if(!r||"none"===r){var n=Ue(e,t,1),a=n&&jd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=jd(t,"borderTopColor"))}var s,o,u,h,l,f,d,p,_,c,m,g,v=new ie(this._pt,t.style,e,0,1,Ht),y=0,T=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=jd(t,e)||i,t.style[e]=r),qb(s=[r,i]),i=s[1],u=(r=s[0]).match(it)||[],(i.match(it)||[]).length){for(;o=it.exec(i);)d=o[0],_=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==_.substr(-5)&&"hsla("!==_.substr(-5)||(l=1),d!==(f=u[T++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),p=parseFloat(d),c=d.substr((p+"").length),y=it.lastIndex-c.length,c||(c=c||j.units[e]||m,y===i.length&&(i+=c,v.e+=c)),m!==c&&(h=ud(t,e,f,c)||0),v._pt={_next:v._pt,p:_||1===T?_:",",s:h,c:g?g*p:p-h,m:l&&l<4?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?$c:Zc;return at.test(i)&&(v.e=0),this._pt=v}function yd(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Xe[r]||r,e[1]=Xe[i]||i,e.join(" ")}function zd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ze[r]&&(i=1,r="transformOrigin"===r?Ne:Ye),rd(a,r);i&&(rd(a,Ye),u&&(u.svg&&a.removeAttribute("transform"),Qe(a,1),u.uncache=1))}}function Dd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Ed(t){var e=jd(t,Ye);return Dd(e)?Ze:e.substr(7).match(rt).map(aa)}function Fd(t,e){var r,i,n,a,s=t._gsap||Z(t),o=t.style,u=Ed(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Ze:u:(u!==Ze||t.offsetParent||t===ue||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,ue.appendChild(t)),u=Ed(t),n?o.display=n:rd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):ue.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Gd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Fd(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,p=h.xOffset||0,_=h.yOffset||0,c=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==Ze&&(o=c*v-m*g)&&(u=w*(-m/o)+x*(c/o)-(c*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=pd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=p+(y*c+T*g)-y,h.yOffset=_+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Ne]="0px 0px",a&&(sd(a,h,"xOrigin",f,w),sd(a,h,"yOrigin",d,x),sd(a,h,"xOffset",p,h.xOffset),sd(a,h,"yOffset",_,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Jd(t,e,r){var i=La(e);return aa(parseFloat(e)+parseFloat(ud(t,"x",r+"px",i)))+i}function Qd(t,e,r,i,a,s){var o,u,h=360,l=n(a),f=parseFloat(a)*(l&&~a.indexOf("rad")?Fe:1),d=s?f*s:f-i,p=i+d+"deg";return l&&("short"===(o=a.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===o&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===o&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ie(t._pt,e,r,i,d,Wc),u.e=p,u.u="deg",t._props.push(r),u}function Rd(t,e,r){var i,n,a,s,o,u,h,l=fe.style,f=r._gsap;for(n in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Ye]=e,oe.body.appendChild(fe),i=Qe(fe,1),ze)(a=f[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=La(a)!==(h=La(s))?ud(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ie(t._pt,f,n,o,u-o,Vc),t._pt.u=h||0,t._props.push(n));oe.body.removeChild(fe)}var se,oe,ue,he,le,fe,de,pe,_e=Dt.Power0,ce=Dt.Power1,me=Dt.Power2,ge=Dt.Power3,ve=Dt.Power4,ye=Dt.Linear,Te=Dt.Quad,be=Dt.Cubic,we=Dt.Quart,xe=Dt.Quint,ke=Dt.Strong,Oe=Dt.Elastic,Me=Dt.Back,Ce=Dt.SteppedEase,Ae=Dt.Bounce,Pe=Dt.Sine,De=Dt.Expo,Se=Dt.Circ,ze={},Fe=180/Math.PI,Re=Math.PI/180,Ee=Math.atan2,Ie=/([A-Z])/g,Le=/(?:left|right|width|margin|padding|x)/i,Be=/[\s,\(]\S/,qe={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ye="transform",Ne=Ye+"Origin",je="O,Moz,ms,Ms,Webkit".split(","),Ue=function _checkPropPrefix(t,e,r){var i=(e||le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(je[n]+t in i););return n<0?null:(3===n?"ms":0<=n?je[n]:"")+t},Ve={deg:1,rad:1,turn:1},Xe={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ge={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ie(t._pt,e,r,0,0,zd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Ze=[1,0,0,1,0,0],Je={},Qe=function _parseTransform(t,e){var r=t._gsap||new It(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,p,_,c,m,g,v,y,T,b,w,x,k,O,M,C,A,P,D,S,z,F,R,E=t.style,I=r.scaleX<0,L="deg",B=jd(t,Ne)||"0";return i=n=a=u=h=l=f=d=p=0,s=o=1,r.svg=!(!t.getCTM||!qd(t)),m=Fd(t,r.svg),r.svg&&(M=!r.uncache&&t.getAttribute("data-svg-origin"),Gd(t,M||B,!!M||r.originIsAbsolute,!1!==r.smooth,m)),_=r.xOrigin||0,c=r.yOrigin||0,m!==Ze&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=O=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?Ee(b,T)*Fe:0,(f=w||x?Ee(w,x)*Fe+u:0)&&(o*=Math.cos(f*Re)),r.svg&&(i-=_-(_*T+c*w),n-=c-(_*b+c*x))):(R=m[6],z=m[7],P=m[8],D=m[9],S=m[10],F=m[11],i=m[12],n=m[13],a=m[14],h=(g=Ee(R,S))*Fe,g&&(M=k*(v=Math.cos(-g))+P*(y=Math.sin(-g)),C=O*v+D*y,A=R*v+S*y,P=k*-y+P*v,D=O*-y+D*v,S=R*-y+S*v,F=z*-y+F*v,k=M,O=C,R=A),l=(g=Ee(-w,S))*Fe,g&&(v=Math.cos(-g),F=x*(y=Math.sin(-g))+F*v,T=M=T*v-P*y,b=C=b*v-D*y,w=A=w*v-S*y),u=(g=Ee(b,T))*Fe,g&&(M=T*(v=Math.cos(g))+b*(y=Math.sin(g)),C=k*v+O*y,b=b*v-T*y,O=O*v-k*y,T=M,k=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=aa(Math.sqrt(T*T+b*b+w*w)),o=aa(Math.sqrt(O*O+R*R)),g=Ee(k,O),f=2e-4<Math.abs(g)?g*Fe:0,p=F?1/(F<0?-F:F):0),r.svg&&(M=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Dd(jd(t,Ye)),M&&t.setAttribute("transform",M))),90<Math.abs(f)&&Math.abs(f)<270&&(I?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=((r.xPercent=i&&Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)?0:i)+"px",r.y=((r.yPercent=n&&Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)?0:n)+"px",r.z=a+"px",r.scaleX=aa(s),r.scaleY=aa(o),r.rotation=aa(u)+L,r.rotationX=aa(h)+L,r.rotationY=aa(l)+L,r.skewX=f+L,r.skewY=d+L,r.transformPerspective=p+"px",(r.zOrigin=parseFloat(B.split(" ")[2])||0)&&(E[Ne]=We(B)),r.xOffset=r.yOffset=0,r.force3D=j.force3D,r.renderTransform=r.svg?rr:pe?er:$e,r.uncache=0,r},We=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},$e=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,er(t,e)},He="0deg",Ke="0px",tr=") ",er=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,p=r.scaleX,_=r.scaleY,c=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==He||h!==He)){var b,w=parseFloat(h)*Re,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*Re,b=Math.cos(w),a=Jd(g,a,x*b*-v),s=Jd(g,s,-Math.sin(w)*-v),o=Jd(g,o,k*b*-v+v)}c!==Ke&&(y+="perspective("+c+tr),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Ke&&s===Ke&&o===Ke||(y+=o!==Ke||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+tr),u!==He&&(y+="rotate("+u+tr),h!==He&&(y+="rotateY("+h+tr),l!==He&&(y+="rotateX("+l+tr),f===He&&d===He||(y+="skew("+f+", "+d+tr),1===p&&1===_||(y+="scale("+p+", "+_+tr),g.style[Ye]=y||"translate(0, 0)"},rr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,p=o.skewX,_=o.skewY,c=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);d=parseFloat(d),p=parseFloat(p),(_=parseFloat(_))&&(p+=_=parseFloat(_),d+=_),d||p?(d*=Re,p*=Re,r=Math.cos(d)*c,i=Math.sin(d)*c,n=Math.sin(d-p)*-m,a=Math.cos(d-p)*m,p&&(_*=Re,s=Math.tan(p-_),n*=s=Math.sqrt(1+s*s),a*=s,_&&(s=Math.tan(_),r*=s=Math.sqrt(1+s*s),i*=s)),r=aa(r),i=aa(i),n=aa(n),a=aa(a)):(r=c,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=ud(g,"x",l,"px"),k=ud(g,"y",f,"px")),(v||y||T||b)&&(x=aa(x+v-(v*r+y*n)+T),k=aa(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=aa(x+u/100*s.width),k=aa(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[Ye]=s)};_("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Ge[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return vd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var ir,nr,ar,sr={name:"css",register:md,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,p,_,c,m,g,v,y,T=this._props,b=t.style;for(f in he||md(),e)if("autoRound"!==f&&(s=e[f],!ft[f]||!Nb(f,e,r,i,t,n)))if(h=typeof s,l=Ge[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=ab(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))this.add(b,"setProperty",getComputedStyle(t).getPropertyValue(f)+"",s+"",i,n,0,0,f);else if("undefined"!==h){if(a=vd(t,f),u=parseFloat(a),(_="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in qe&&("autoAlpha"===f&&(1===u&&"hidden"===vd(t,"visibility")&&o&&(u=0),sd(this,b,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=qe[f]).indexOf(",")&&(f=f.split(",")[0])),c=f in ze)if(m||((g=t._gsap).renderTransform||Qe(t),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ie(this._pt,b,Ye,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ie(this._pt,g,"scaleY",g.scaleY,_?_*o:o-g.scaleY),T.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=yd(s),g.svg?Gd(t,s,0,v,0,this):((p=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&sd(this,g,"zOrigin",g.zOrigin,p),sd(this,b,f,We(a),We(s)));continue}if("svgOrigin"===f){Gd(t,s,1,v,0,this);continue}if(f in Je){Qd(this,g,f,u,s,_);continue}if("smoothOrigin"===f){sd(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Rd(this,s,t);continue}}else f in b||(f=Ue(f)||f);if(c||(o||0===o)&&(u||0===u)&&!Be.test(s)&&f in b)(d=(a+"").substr((u+"").length))!==(p=(s+"").substr(((o=o||0)+"").length)||(f in j.units?j.units[f]:d))&&(u=ud(t,f,a,p)),this._pt=new ie(this._pt,c?g:b,f,u,_?_*o:o-u,"px"!==p||!1===e.autoRound||c?Vc:Yc),this._pt.u=p||0,d!==p&&(this._pt.b=a,this._pt.r=Xc);else if(f in b)wd.call(this,t,f,a,s);else{if(!(f in t)){L(f,s);continue}this.add(t,f,t[f],s,i,n)}T.push(f)}y&&re(this)},get:vd,aliases:qe,getSetter:function getSetter(t,e,r){var i=qe[e];return i&&i.indexOf(",")<0&&(e=i),e in ze&&e!==Ne&&(t._gsap.x||vd(t,"x"))?r&&de===r?"scale"===e?cd:bd:(de=r||{})&&("scale"===e?dd:ed):t.style&&!q(t.style[e])?_c:~e.indexOf("-")?ad:Qt(t,e)},core:{_removeProperty:rd,_getMatrix:Fd}};ae.utils.checkPrefix=Ue,ar=_((ir="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(nr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ze[t]=1}),_(nr,function(t){j.units[t]="deg",Je[t]=1}),qe[ar[13]]=ir+","+nr,_("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");qe[e[1]]=ar[e[0]]}),_("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){j.units[t]="px"}),ae.registerPlugin(sr);var or=ae.registerPlugin(sr)||ae,ur=or.core.Tween;e.Back=Me,e.Bounce=Ae,e.CSSPlugin=sr,e.Circ=Se,e.Cubic=be,e.Elastic=Oe,e.Expo=De,e.Linear=ye,e.Power0=_e,e.Power1=ce,e.Power2=me,e.Power3=ge,e.Power4=ve,e.Quad=Te,e.Quart=we,e.Quint=xe,e.Sine=Pe,e.SteppedEase=Ce,e.Strong=ke,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=Xt,e.TweenMax=ur,e.default=or,e.gsap=or;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


// --- DrawSVGPlugin 3.5.0 ---
/*!
 * DrawSVGPlugin 3.5.0
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function i(){return"undefined"!=typeof window}function j(){return t||i()&&(t=window.gsap)&&t.registerPlugin&&t}function m(e){return Math.round(1e4*e)/1e4}function n(e){return parseFloat(e||0)}function o(e,t){return n(e.getAttribute(t))}function q(e,t,s,r,i,o){return P(Math.pow((n(s)-n(e))*i,2)+Math.pow((n(r)-n(t))*o,2))}function r(e){return console.warn(e)}function s(e){return"non-scaling-stroke"===e.getAttribute("vector-effect")}function v(e){if(!(e=k(e)[0]))return 0;var t,n,i,a,f,h,d,l=e.tagName.toLowerCase(),u=e.style,c=1,g=1;s(e)&&(g=e.getScreenCTM(),c=P(g.a*g.a+g.b*g.b),g=P(g.d*g.d+g.c*g.c));try{n=e.getBBox()}catch(e){r("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var _=n||{x:0,y:0,width:0,height:0},p=_.x,x=_.y,y=_.width,m=_.height;if(n&&(y||m)||!M[l]||(y=o(e,M[l][0]),m=o(e,M[l][1]),"rect"!==l&&"line"!==l&&(y*=2,m*=2),"line"===l&&(p=o(e,"x1"),x=o(e,"y1"),y=Math.abs(y-p),m=Math.abs(m-x))),"path"===l)a=u.strokeDasharray,u.strokeDasharray="none",t=e.getTotalLength()||0,c!==g&&r("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(c+g)/2,u.strokeDasharray=a;else if("rect"===l)t=2*y*c+2*m*g;else if("line"===l)t=q(p,x,p+y,x+m,c,g);else if("polyline"===l||"polygon"===l)for(i=e.getAttribute("points").match(b)||[],"polygon"===l&&i.push(i[0],i[1]),t=0,f=2;f<i.length;f+=2)t+=q(i[f-2],i[f-1],i[f],i[f+1],c,g)||0;else"circle"!==l&&"ellipse"!==l||(h=y/2*c,d=m/2*g,t=Math.PI*(3*(h+d)-P((3*h+d)*(h+3*d))));return t||0}function w(e,t){if(!(e=k(e)[0]))return[0,0];t=t||v(e)+1;var s=h.getComputedStyle(e),r=s.strokeDasharray||"",i=n(s.strokeDashoffset),o=r.indexOf(",");return o<0&&(o=r.indexOf(" ")),t<(r=o<0?t:n(r.substr(0,o))||1e-5)&&(r=t),[Math.max(0,-i),Math.max(0,r-i)]}function x(){i()&&(h=window,l=t=j(),k=t.utils.toArray,d=-1!==((h.navigator||{}).userAgent||"").indexOf("Edge"))}var t,k,h,d,l,b=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,M={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},P=Math.sqrt,a={version:"3.5.0",name:"drawSVG",register:function register(e){t=e,x()},init:function init(e,t){if(!e.getBBox)return!1;l||x();var r,i,o,a,f=v(e)+1;return this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",i=function _parse(e,t,s){var r,i,o=e.indexOf(" ");return i=o<0?(r=void 0!==s?s+"":e,e):(r=e.substr(0,o),e.substr(o+1)),r=~r.indexOf("%")?n(r)/100*t:n(r),(i=~i.indexOf("%")?n(i)/100*t:n(i))<r?[i,r]:[r,i]}(t,f,(r=w(e,f))[0]),this._length=m(f+10),0===r[0]&&0===i[0]?(o=Math.max(1e-5,i[1]-f),this._dash=m(f+o),this._offset=m(f-r[1]+o),this._offsetPT=this.add(this,"_offset",this._offset,m(f-i[1]+o))):(this._dash=m(r[1]-r[0])||1e-6,this._offset=m(-r[0]),this._dashPT=this.add(this,"_dash",this._dash,m(i[1]-i[0])||1e-5),this._offsetPT=this.add(this,"_offset",this._offset,m(-i[0]))),d&&(a=h.getComputedStyle(e)).strokeLinecap!==a.strokeLinejoin&&(i=n(a.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",i,i+.01)),this._live=s(e)||~(t+"").indexOf("live"),this._props.push("drawSVG"),1},render:function render(e,t){var n,s,r,i,o=t._pt,a=t._style;if(o){for(t._live&&(n=v(t._target)+11)!==t._length&&(s=n/t._length,t._length=n,t._offsetPT.s*=s,t._offsetPT.c*=s,t._dashPT?(t._dashPT.s*=s,t._dashPT.c*=s):t._dash*=s);o;)o.r(e,o.d),o=o._next;r=t._dash,i=t._offset,n=t._length,a.strokeDashoffset=t._offset,1!==e&&e?a.strokeDasharray=r+"px,"+n+"px":(r-i<.001&&n-r<=10&&(a.strokeDashoffset=i+1),a.strokeDasharray=i<.001&&n-r<=10?"none":i===r?"0px, 999999px":r+"px,"+n+"px")}},getLength:v,getPosition:w};j()&&t.registerPlugin(a),e.DrawSVGPlugin=a,e.default=a;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


// --- ScrollTrigger 3.5.0 ---
/*!
 * ScrollTrigger 3.5.0
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function H(e){return e}function I(){return"undefined"!=typeof window}function J(){return ke||I()&&(ke=window.gsap)&&ke.registerPlugin&&ke}function K(e){return!!~i.indexOf(e)}function L(e,t){return~We.indexOf(e)&&We[We.indexOf(e)+1][t]}function M(t,e){var r=e.s,n=e.sc,o=h.indexOf(t),i=n===rt.sc?1:2;return~o||(o=h.push(t)-1),h[o+i]||(h[o+i]=L(t,r)||(K(t)?n:function(e){return arguments.length?t[r]=e:t[r]}))}function N(e){return L(e,"getBoundingClientRect")||(K(e)?function(){return ft.width=Me.innerWidth,ft.height=Me.innerHeight,ft}:function(){return nt(e)})}function Q(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return(r="scroll"+n)&&(i=L(e,r))?i()-N(e)()[o]:K(e)?Math.max(Pe[r],Oe[r])-(Me["inner"+n]||Pe["client"+n]||Oe["client"+n]):e[r]-e["offset"+n]}function R(e,t){for(var r=0;r<d.length;r+=3)t&&!~t.indexOf(d[r+1])||e(d[r],d[r+1],d[r+2])}function S(e){return"string"==typeof e}function T(e){return"function"==typeof e}function U(e){return"number"==typeof e}function V(e){return"object"==typeof e}function W(e){return T(e)&&e()}function X(r,n){return function(){var e=W(r),t=W(n);return function(){W(e),W(t)}}}function qa(e){return Me.getComputedStyle(e)}function sa(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function ua(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function wa(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function xa(e,t,r){return e.addEventListener(t,r,{passive:!0})}function ya(e,t,r){return e.removeEventListener(t,r)}function Ca(e,t){if(S(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;n&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in m?m[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Da(e,t,r,n,o,i,a){var s=o.startColor,l=o.endColor,c=o.fontSize,f=o.indent,u=o.fontWeight,p=_e.createElement("div"),d=K(r)||"fixed"===L(r,"pinType"),g=-1!==e.indexOf("scroller"),h=d?Oe:r,v=-1!==e.indexOf("start"),x=v?s:l,m="border-color:"+x+";font-size:"+c+";color:"+x+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return m+="position:"+(g&&d?"fixed;":"absolute;"),!g&&d||(m+=(n===rt?b:y)+":"+(i+parseFloat(f))+"px;"),a&&(m+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e),p.style.cssText=m,p.innerText=t||0===t?e+"-"+t:e,h.insertBefore(p,h.children[0]),p._offset=p["offset"+n.op.d2],w(p,0,n,v),p}function Ha(){return l=l||s(B)}function Ia(){l||(l=s(B),De||P("scrollStart"),De=He())}function Ja(){return!Re&&a.restart(!0)}function Pa(e){var t=ke.ticker.frame,r=[],n=0;if(g!==t||Fe){for(A();n<_.length;n+=3)Me.matchMedia(_[n]).matches?r.push(n):A(1,_[n])||T(_[n+2])&&_[n+2]();for(E(),n=0;n<r.length;n++)Be=_[r[n]],_[r[n]+2]=_[r[n]+1](e);z(Be=0,1),g=t,P("matchMedia")}}function Qa(){return ya(Y,"scrollEnd",Qa)||z(!0)}function ab(e,t,r,n){if(e.parentNode!==t){for(var o,i=F.length,a=t.style,s=e.style;i--;)a[o=F[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[y]=s[b]="auto",a.overflow="visible",a.boxSizing="border-box",a[Ke]=ua(e,tt)+et,a[je]=ua(e,rt)+et,a[$e]=s[Ze]=s.top=s[x]="0",ct(n),s[Ke]=r[Ke],s[je]=r[je],s[$e]=r[$e],e.parentNode.insertBefore(t,e),t.appendChild(e)}}function db(e){for(var t=D.length,r=e.style,n=[],o=0;o<t;o++)n.push(D[o],r[D[o]]);return n.t=e,n}function gb(e,t,r,n,o,i,a,s,l,c,f,u){if(T(e)&&(e=e(s)),S(e)&&"max"===e.substr(0,3)&&(e=u+("="===e.charAt(4)?Ca("0"+e.substr(3),r):0)),U(e))a&&w(a,r,n,!0);else{T(t)&&(t=t(s));var p,d,g,h=Ee(t)[0]||Oe,v=nt(h)||{},x=e.split(" ");v&&(v.left||v.top)||"none"!==qa(h).display||(g=h.style.display,h.style.display="block",v=nt(h),g?h.style.display=g:h.style.removeProperty("display")),p=Ca(x[0],v[n.d]),d=Ca(x[1]||"0",r),e=v[n.p]-l[n.p]-c+p+o-d,a&&w(a,d,n,r-d<20||a._isStart&&20<d),r-=r-d}if(i){var m=e+r,b=i._isStart;u="scroll"+n.d2,w(i,m,n,b&&20<m||!b&&(f?Math.max(Oe[u],Pe[u]):i.parentNode[u])<=m+1),f&&(l=nt(a),f&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+et))}return Math.round(e)}function jb(l,e){var c,f,u=M(l,e),p="_scroll"+e.p2;return l[p]=u,function getTween(e,t,r,n,o){var i=getTween.tween,a=t.onComplete,s={};return i&&i.kill(),c=r,t[p]=e,(t.modifiers=s)[p]=function(e){return(e=u())!==c&&e!==f?(i.kill(),getTween.tween=0):e=r+n*i.ratio+o*i.ratio*i.ratio,f=c,c=Math.round(e)},t.onComplete=function(){getTween.tween=0,a&&a.call(i)},i=getTween.tween=ke.to(l,t)}}var ke,o,Me,_e,Pe,Oe,i,a,s,l,Ee,Le,Ie,c,Re,Ae,f,ze,u,p,d,Ne,qe,Be,g,Fe=1,We=[],h=[],He=Date.now,v=He(),De=0,Je=1,Qe=Math.abs,t="scrollLeft",r="scrollTop",x="left",b="right",y="bottom",Ke="width",je="height",Ve="Right",Xe="Left",Ue="Top",Ye="Bottom",$e="padding",Ze="margin",Ge="Width",n="Height",et="px",tt={s:t,p:x,p2:Xe,os:b,os2:Ve,d:Ke,d2:Ge,a:"x",sc:function sc(e){return arguments.length?Me.scrollTo(e,rt.sc()):Me.pageXOffset||_e[t]||Pe[t]||Oe[t]||0}},rt={s:r,p:"top",p2:Ue,os:y,os2:Ye,d:je,d2:n,a:"y",op:tt,sc:function sc(e){return arguments.length?Me.scrollTo(tt.sc(),e):Me.pageYOffset||_e[r]||Pe[r]||Oe[r]||0}},nt=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==qa(e)[f]&&ke.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},ot={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},it={toggleActions:"play",anticipatePin:0},m={top:0,left:0,center:.5,bottom:1,right:1},w=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?1:0,o["border"+i+Ge]=1,o["border"+a+Ge]=0,o[r.p]=t,ke.set(e,o)},at=[],st={},C={},k=[],_=[],P=function _dispatch(e){return C[e]&&C[e].map(function(e){return e()})||k},O=[],E=function _revertRecorded(e){for(var t=0;t<O.length;t+=4)e&&O[t+3]!==e||(O[t].style.cssText=O[t+1],O[t+2].uncache=1)},A=function _revertAll(e,t){var r;for(ze=0;ze<at.length;ze++)r=at[ze],t&&r.media!==t||(e?r.kill(1):(r.scroll.rec||(r.scroll.rec=r.scroll()),r.revert()));E(t),t||P("revert")},z=function _refreshAll(e,t){if(!De||e){var r=P("refreshInit");for(Ne&&Y.sort(),t||A(),ze=0;ze<at.length;ze++)at[ze].refresh();for(r.forEach(function(e){return e&&e.render&&e.render(-1)}),ze=at.length;ze--;)at[ze].scroll.rec=0;P("refresh")}else xa(Y,"scrollEnd",Qa)},q=0,lt=1,B=function _updateAll(){var e=at.length,t=He(),r=50<=t-v,n=e&&at[0].scroll();if(lt=n<q?-1:1,q=n,r&&(De&&!Ae&&200<t-De&&(De=0,P("scrollEnd")),Ie=v,v=t),lt<0){for(ze=e;ze--;)at[ze]&&at[ze].update(0,r);lt=1}else for(ze=0;ze<e;ze++)at[ze]&&at[ze].update(0,r);l=0},F=[x,"top",y,b,Ze+Ye,Ze+Ve,Ze+Ue,Ze+Xe,"display","flexShrink","float"],D=F.concat([Ke,je,"boxSizing","max"+Ge,"max"+n,"position",Ze,$e,$e+Ue,$e+Ve,$e+Ye,$e+Xe]),j=/([A-Z])/g,ct=function _setState(e){if(e)for(var t,r,n=e.t.style,o=e.length,i=0;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(j,"-$1").toLowerCase())},ft={left:0,top:0},ut=/(?:webkit|moz|length|cssText)/i;tt.op=rt;var Y=(ScrollTrigger.prototype.init=function init(b,y){if(this.progress=0,this.vars&&this.kill(1),Je){var d,n,l,w,C,k,_,P,O,E,I,R,e,A,z,q,B,F,t,W,g,D,J,h,j,v,x,r,m,X,Y,o,c,$,Z,G,ee,te=(b=sa(S(b)||U(b)||b.nodeType?{trigger:b}:b,it)).horizontal?tt:rt,re=b.onUpdate,ne=b.toggleClass,i=b.id,oe=b.onToggle,ie=b.onRefresh,a=b.scrub,ae=b.trigger,se=b.pin,le=b.pinSpacing,ce=b.invalidateOnRefresh,fe=b.anticipatePin,s=b.onScrubComplete,f=b.onSnapComplete,ue=b.once,pe=b.snap,de=b.pinReparent,ge=!a&&0!==a,he=Ee(b.scroller||Me)[0],u=ke.core.getCache(he),p=K(he),ve="pinType"in b?"fixed"===b.pinType:p||"fixed"===L(he,"pinType"),xe=[b.onEnter,b.onLeave,b.onEnterBack,b.onLeaveBack],me=ge&&b.toggleActions.split(" "),be="markers"in b?b.markers:it.markers,ye=p?0:parseFloat(qa(he)["border"+te.p2+Ge])||0,Te=this,Se=b.onRefreshInit&&function(){return b.onRefreshInit(Te)},we=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=L(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Me["inner"+o]:e["client"+o])||0}}(he,p,te),Ce=function _getOffsetsFunc(e,t){return!t||~We.indexOf(e)?N(e):function(){return ft}}(he,p);Te.media=Be,fe*=45,at.push(Te),Te.scroller=he,Te.scroll=M(he,te),C=Te.scroll(),Te.vars=b,y=y||b.animation,"refreshPriority"in b&&(Ne=1),u.tweenScroll=u.tweenScroll||{top:jb(he,rt),left:jb(he,tt)},Te.tweenTo=d=u.tweenScroll[te.p],y&&(y.vars.lazy=!1,y._initted||!1!==y.vars.immediateRender&&!1!==b.immediateRender&&y.render(0,!0,!0),Te.animation=y.pause(),y.scrollTrigger=Te,(o=U(a)&&a)&&(Y=ke.to(y,{ease:"power3",duration:o,onComplete:function onComplete(){return s&&s(Te)}})),m=0,i=i||y.vars.id),pe&&(V(pe)||(pe={snapTo:pe}),ke.set(p?[Oe,Pe]:he,{scrollBehavior:"auto"}),l=T(pe.snapTo)?pe.snapTo:"labels"===pe.snapTo?function _getLabels(i){return function(e){var t,r=[],n=i.labels,o=i.duration();for(t in n)r.push(n[t]/o);return ke.utils.snap(r,e)}}(y):ke.utils.snap(pe.snapTo),c=pe.duration||{min:.1,max:2},c=V(c)?Le(c.min,c.max):Le(c,c),$=ke.delayedCall(pe.delay||o/2||.1,function(){if(Math.abs(Te.getVelocity())<10&&!Ae){var e=y&&!ge?y.totalProgress():Te.progress,t=(e-X)/(He()-Ie)*1e3||0,r=Qe(t/2)*t/.185,n=e+r,o=Le(0,1,l(n,Te)),i=Te.scroll(),a=Math.round(_+o*A),s=d.tween;if(i<=P&&_<=i&&a!==i){if(s&&!s._initted&&s.data<=Math.abs(a-i))return;d(a,{duration:c(Qe(.185*Math.max(Qe(n-e),Qe(o-e))/t/.05||0)),ease:pe.ease||"power3",data:Math.abs(a-i),onComplete:function onComplete(){m=X=y&&!ge?y.totalProgress():Te.progress,f&&f(Te)}},i,r*A,a-i-r*A)}}else Te.isActive&&$.restart(!0)}).pause()),i&&(st[i]=Te),ae=Te.trigger=Ee(ae||se)[0],se=!0===se?ae:Ee(se)[0],S(ne)&&(ne={targets:ae,className:ne}),se&&(!1===le||le===Ze||(le=!(!le&&"flex"===qa(se.parentNode).display)&&$e),Te.pin=se,!1!==b.force3D&&ke.set(se,{force3D:!0}),(n=ke.core.getCache(se)).spacer?z=n.pinState:(n.spacer=F=_e.createElement("div"),F.setAttribute("class","pin-spacer"+(i?" pin-spacer-"+i:"")),n.pinState=z=db(se)),Te.spacer=F=n.spacer,r=qa(se),h=r[le+te.os2],W=ke.getProperty(se),g=ke.quickSetter(se,te.a,et),ab(se,F,r),B=db(se)),be&&(e=V(be)?sa(be,ot):ot,I=Da("scroller-start",i,he,te,e,0),R=Da("scroller-end",i,he,te,e,0,I),t=I["offset"+te.op.d2],O=Da("start",i,he,te,e,t),E=Da("end",i,he,te,e,t),ve||(function _makePositionable(e){e.style.position="absolute"===qa(e).position?"absolute":"relative"}(he),ke.set([I,R],{force3D:!0}),v=ke.quickSetter(I,te.a,et),x=ke.quickSetter(R,te.a,et))),Te.revert=function(e){var t=!1!==e||!Te.enabled,r=Re;t!==w&&(t&&(G=Math.max(Te.scroll(),Te.scroll.rec||0),Z=Te.progress,ee=y&&y.progress()),O&&[O,E,I,R].forEach(function(e){return e.style.display=t?"none":"block"}),t&&(Re=1),Te.update(t),Re=r,se&&(t?function _swapPinOut(e,t,r){if(ct(r),e.parentNode===t){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}}(se,F,z):de&&Te.isActive||ab(se,F,qa(se),j)),w=t)},Te.refresh=function(e){if(!Re&&Te.enabled)if(se&&e&&De)xa(ScrollTrigger,"scrollEnd",Qa);else{Re=1,Y&&Y.kill(),ce&&y&&y.progress(0).invalidate(),w||Te.revert();for(var t,r,n,o,i,a,s,l,c=we(),f=Ce(),u=Q(he,te),p=0,d=0,g=b.end,h=b.endTrigger||ae,v=b.start||(se||!ae?"0 0":"0 100%"),x=ae&&Math.max(0,at.indexOf(Te))||0,m=x;m--;)!(s=at[m].pin)||s!==ae&&s!==se||at[m].revert();for(_=gb(v,ae,c,te,Te.scroll(),O,I,Te,f,ye,ve,u)||(se?-.001:0),T(g)&&(g=g(Te)),S(g)&&!g.indexOf("+=")&&(~g.indexOf(" ")?g=(S(v)?v.split(" ")[0]:"")+g:(p=Ca(g.substr(2),c),g=S(v)?v:_+p,h=ae)),P=Math.max(_,gb(g||(h?"100% 0":u),h,c,te,Te.scroll()+p,E,R,Te,f,ye,ve,u))||-.001,A=P-_||(_-=.01)&&.001,p=0,m=x;m--;)(s=(a=at[m]).pin)&&a.start-a._pinPush<_&&(t=a.end-a.start,s===ae&&(p+=t),s===se&&(d+=t));if(_+=p,P+=p,Te._pinPush=d,O&&p&&((t={})[te.a]="+="+p,ke.set([O,E],t)),se)t=qa(se),o=te===rt,n=Te.scroll(),D=parseFloat(W(te.a))+d,ab(se,F,t),B=db(se),r=nt(se,!0),l=ve&&M(he,o?tt:rt)(),le&&((j=[le+te.os2,A+d+et]).t=F,(m=le===$e?ua(se,te)+A+d:0)&&j.push(te.d,m+et),ct(j),ve&&Te.scroll(G)),ve&&((i={top:r.top+(o?n-_:l)+et,left:r.left+(o?l:n-_)+et,boxSizing:"border-box",position:"fixed"})[Ke]=i.maxWidth=Math.ceil(r.width)+et,i[je]=i.maxHeight=Math.ceil(r.height)+et,i[Ze]=i[Ze+Ue]=i[Ze+Ve]=i[Ze+Ye]=i[Ze+Xe]="0",i[$e]=t[$e],i[$e+Ue]=t[$e+Ue],i[$e+Ve]=t[$e+Ve],i[$e+Ye]=t[$e+Ye],i[$e+Xe]=t[$e+Xe],q=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(z,i,de)),y?(y.progress(1,!0),J=W(te.a)-D+A+d,A!==J&&q.splice(q.length-2,2),y.progress(0,!0)):J=A;else if(ae&&Te.scroll())for(r=ae.parentNode;r&&r!==Oe;)r._pinOffset&&(_-=r._pinOffset,P-=r._pinOffset),r=r.parentNode;for(m=0;m<x;m++)!(a=at[m].pin)||a!==ae&&a!==se||at[m].revert(!1);Te.start=_,Te.end=P,(C=k=Te.scroll())<G&&Te.scroll(G),Te.revert(!1),Re=0,ee&&ge&&y.progress(ee,!0),Z!==Te.progress&&(Y&&y.totalProgress(Z,!0),Te.progress=Z,Te.update()),se&&le&&(F._pinOffset=Math.round(Te.progress*J)),ie&&ie(Te)}},Te.getVelocity=function(){return(Te.scroll()-k)/(He()-Ie)*1e3||0},Te.update=function(e,t){var r,n,o,i,a,s=Te.scroll(),l=e?0:(s-_)/A,c=l<0?0:1<l?1:l||0,f=Te.progress;if(t&&(k=C,C=s,pe&&(X=m,m=y&&!ge?y.totalProgress():c)),fe&&!c&&se&&!Re&&!Fe&&De&&_<s+(s-k)/(He()-Ie)*fe&&(c=1e-4),c!==f&&Te.enabled){if(i=(a=(r=Te.isActive=!!c&&c<1)!=(!!f&&f<1))||!!c!=!!f,Te.direction=f<c?1:-1,Te.progress=c,ge||(!Y||Re||Fe?y&&y.totalProgress(c,!!Re):(Y.vars.totalProgress=c,Y.invalidate().restart())),se)if(e&&le&&(F.style[le+te.os2]=h),ve){if(i){if(o=!e&&f<c&&s<P+1&&s+1>=Q(he,te),de){if(!e&&(r||o)){var u=nt(se,!0),p=s-_;se.style.top=u.top+(te===rt?p:0)+et,se.style.left=u.left+(te===rt?0:p)+et}!function _reparent(e,t){if(e.parentNode!==t){var r,n,o=e.style;if(t===Oe)for(r in e._stOrig=o.cssText,n=qa(e))+r||ut.test(r)||!n[r]||"string"!=typeof o[r]||"0"===r||(o[r]=n[r]);else o.cssText=e._stOrig;t.appendChild(e)}}(se,e||!r&&!o?F:Oe)}ct(r||o?q:B),J!==A&&c<1&&r||g(D+(1!==c||o?0:J))}}else g(D+J*c);!pe||d.tween||Re||Fe||$.restart(!0),ne&&(a||ue&&c&&(c<1||!qe))&&Ee(ne.targets).forEach(function(e){return e.classList[r||ue?"add":"remove"](ne.className)}),!re||ge||e||re(Te),i&&!Re?(n=c&&!f?0:1===c?1:1===f?2:3,ge&&(o=!a&&"none"!==me[n+1]&&me[n+1]||me[n],y&&("complete"===o||"reset"===o||o in y)&&("complete"===o?y.pause().totalProgress(1):"reset"===o?y.restart(!0).pause():y[o]()),re&&re(Te)),!a&&qe||(oe&&a&&oe(Te),xe[n]&&xe[n](Te),ue&&(1===c?Te.kill(!1,1):xe[n]=0),a||xe[n=1===c?1:3]&&xe[n](Te))):ge&&re&&!Re&&re(Te)}x&&(v(s+(I._isFlipped?1:0)),x(s))},Te.enable=function(){Te.enabled||(Te.enabled=!0,xa(he,"resize",Ja),xa(he,"scroll",Ia),Se&&xa(ScrollTrigger,"refreshInit",Se),y&&y.add?ke.delayedCall(.01,function(){return _||P||Te.refresh()})&&(A=.01)&&(_=P=0):Te.refresh())},Te.disable=function(e,t){if(Te.enabled&&(!1!==e&&Te.revert(),Te.enabled=Te.isActive=!1,t||Y&&Y.pause(),G=0,n&&(n.uncache=1),Se&&ya(ScrollTrigger,"refreshInit",Se),$&&($.pause(),d.tween&&d.tween.kill()),!p)){for(var r=at.length;r--;)if(at[r].scroller===he&&at[r]!==Te)return;ya(he,"resize",Ja),ya(he,"scroll",Ia)}},Te.kill=function(e,t){Te.disable(e,t),i&&delete st[i];var r=at.indexOf(Te);at.splice(r,1),r===ze&&0<lt&&ze--,y&&(y.scrollTrigger=null,e&&y.render(-1),t||y.kill()),O&&[O,E,I,R].forEach(function(e){return e.parentNode.removeChild(e)}),n&&(n.uncache=1)},Te.enable()}else this.update=this.refresh=this.kill=H},ScrollTrigger.register=function register(e){if(!o&&(ke=e||J(),I()&&window.document&&(Me=window,_e=document,Pe=_e.documentElement,Oe=_e.body),ke&&(Ee=ke.utils.toArray,Le=ke.utils.clamp,ke.core.globals("ScrollTrigger",ScrollTrigger),Oe))){s=Me.requestAnimationFrame||function(e){return setTimeout(e,16)},xa(Me,"mousewheel",Ia),i=[Me,_e,Pe,Oe],xa(_e,"scroll",Ia);var t,r=Oe.style,n=r.borderTop;r.borderTop="1px solid #000",t=nt(Oe),rt.m=Math.round(t.top+rt.sc())||0,tt.m=Math.round(t.left+tt.sc())||0,n?r.borderTop=n:r.removeProperty("border-top"),c=setInterval(Ha,200),ke.delayedCall(.5,function(){return Fe=0}),xa(_e,"touchcancel",H),xa(Oe,"touchstart",H),wa(xa,_e,"pointerdown,touchstart,mousedown",function(){return Ae=1}),wa(xa,_e,"pointerup,touchend,mouseup",function(){return Ae=0}),f=ke.utils.checkPrefix("transform"),D.push(f),o=He(),a=ke.delayedCall(.2,z).pause(),d=[_e,"visibilitychange",function(){var e=Me.innerWidth,t=Me.innerHeight;_e.hidden?(u=e,p=t):u===e&&p===t||Ja()},_e,"DOMContentLoaded",z,Me,"load",function(){return De||z()},Me,"resize",Ja],R(xa)}return o},ScrollTrigger.defaults=function defaults(e){for(var t in e)it[t]=e[t]},ScrollTrigger.kill=function kill(){Je=0,at.slice(0).forEach(function(e){return e.kill(1)})},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(qe=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(c)||(c=t)&&setInterval(Ha,t),"autoRefreshEvents"in e&&(R(ya)||R(xa,e.autoRefreshEvents||"none"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=Ee(e)[0];K(r)?We.unshift(Me,t,Oe,t,Pe,t):We.unshift(r,t)},ScrollTrigger.matchMedia=function matchMedia(e){var t,r,n,o,i;for(r in e)n=_.indexOf(r),o=e[r],"all"===(Be=r)?o():(t=Me.matchMedia(r))&&(t.matches&&(i=o()),~n?(_[n+1]=X(_[n+1],o),_[n+2]=X(_[n+2],i)):(n=_.length,_.push(r,o,i),t.addListener?t.addListener(Pa):t.addEventListener("change",Pa))),Be=0;return _},ScrollTrigger.clearMatchMedia=function clearMatchMedia(e){e||(_.length=0),0<=(e=_.indexOf(e))&&_.splice(e,3)},ScrollTrigger);function ScrollTrigger(e,t){o||ScrollTrigger.register(ke)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}Y.version="3.5.0",Y.saveStyles=function(e){return e?Ee(e).forEach(function(e){var t=O.indexOf(e);0<=t&&O.splice(t,4),O.push(e,e.style.cssText,ke.core.getCache(e),Be)}):O},Y.revert=function(e,t){return A(!e,t)},Y.create=function(e,t){return new Y(e,t)},Y.refresh=function(e){return e?Ja():z(!0)},Y.update=B,Y.maxScroll=function(e,t){return Q(e,t?tt:rt)},Y.getScrollFunc=function(e,t){return M(Ee(e)[0],t?tt:rt)},Y.getById=function(e){return st[e]},Y.getAll=function(){return at.slice(0)},Y.isScrolling=function(){return!!De},Y.addEventListener=function(e,t){var r=C[e]||(C[e]=[]);~r.indexOf(t)||r.push(t)},Y.removeEventListener=function(e,t){var r=C[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},Y.batch=function(e,t){function $h(e,t){var r=[],n=[],o=ke.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&T(t[r])&&"onRefreshInit"!==r?$h(0,t[r]):t[r];return T(a)&&(a=a(),xa(Y,"refresh",function(){return a=t.batchMax()})),Ee(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(Y.create(t))}),n},Y.sort=function(e){return at.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},J()&&ke.registerPlugin(Y),e.ScrollTrigger=Y,e.default=Y;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


// --- ASScroll ---
function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

(function webpackUniversalModuleDefinition(root, factory) {
  if (
    (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ===
      "object" &&
    (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object"
  )
    module.exports = factory();
  else if (typeof define === "function" && define.amd)
    define("ASScroll", [], factory);
  else if (
    (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ===
    "object"
  )
    exports["ASScroll"] = factory();
  else root["ASScroll"] = factory();
})(window, function () {
  return (
    /******/
    (function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = (installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/
        });
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(
          module.exports,
          module,
          module.exports,
          __webpack_require__
        );
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/

      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/
      };
      /******/

      /******/
      // define __esModule on exports

      /******/

      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
          });
          /******/
        }
        /******/

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/

      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (
          mode & 4 &&
          _typeof(value) === "object" &&
          value &&
          value.__esModule
        )
          return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/

        Object.defineProperty(ns, "default", {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != "string")
          for (var key in value) {
            __webpack_require__.d(
              ns,
              key,
              function (key) {
                return value[key];
              }.bind(null, key)
            );
          }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/

      __webpack_require__.n = function (module) {
        /******/
        var getter =
          module && module.__esModule
            ? /******/
              function getDefault() {
                return module["default"];
              }
            : /******/
              function getModuleExports() {
                return module;
              };
        /******/

        __webpack_require__.d(getter, "a", getter);
        /******/

        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/

      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__((__webpack_require__.s = 77));
      /******/
    })(
      /************************************************************************/

      /******/
      [
        /* 0 */

        /***/
        function (module, exports) {
          var Store = {
            html: document.documentElement,
            body: document.body,
            windowSize: {
              w: window.innerWidth,
              h: window.innerHeight
            }
          };
          module.exports = Store;
          /***/
        },
        /* 1 */

        /***/
        function (module, exports, __webpack_require__) {
          /* WEBPACK VAR INJECTION */
          (function (global) {
            var check = function check(it) {
              return it && it.Math == Math && it;
            }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028

            module.exports = // eslint-disable-next-line no-undef
              check(
                (typeof globalThis === "undefined"
                  ? "undefined"
                  : _typeof(globalThis)) == "object" && globalThis
              ) ||
              check(
                (typeof window === "undefined"
                  ? "undefined"
                  : _typeof(window)) == "object" && window
              ) ||
              check(
                (typeof self === "undefined" ? "undefined" : _typeof(self)) ==
                  "object" && self
              ) ||
              check(_typeof(global) == "object" && global) || // eslint-disable-next-line no-new-func
              Function("return this")();
            /* WEBPACK VAR INJECTION */
          }.call(this, __webpack_require__(26)));
          /***/
        },
        /* 2 */

        /***/
        function (module, exports) {
          module.exports = function (exec) {
            try {
              return !!exec();
            } catch (error) {
              return true;
            }
          };
          /***/
        },
        /* 3 */

        /***/
        function (module, exports) {
          var hasOwnProperty = {}.hasOwnProperty;

          module.exports = function (it, key) {
            return hasOwnProperty.call(it, key);
          };
          /***/
        },
        /* 4 */

        /***/
        function (module, exports, __webpack_require__) {
          var global = __webpack_require__(1);

          var shared = __webpack_require__(27);

          var has = __webpack_require__(3);

          var uid = __webpack_require__(31);

          var NATIVE_SYMBOL = __webpack_require__(32);

          var USE_SYMBOL_AS_UID = __webpack_require__(53);

          var WellKnownSymbolsStore = shared("wks");
          var _Symbol = global.Symbol;
          var createWellKnownSymbol = USE_SYMBOL_AS_UID
            ? _Symbol
            : (_Symbol && _Symbol.withoutSetter) || uid;

          module.exports = function (name) {
            if (!has(WellKnownSymbolsStore, name)) {
              if (NATIVE_SYMBOL && has(_Symbol, name))
                WellKnownSymbolsStore[name] = _Symbol[name];
              else
                WellKnownSymbolsStore[name] = createWellKnownSymbol(
                  "Symbol." + name
                );
            }

            return WellKnownSymbolsStore[name];
          };
          /***/
        },
        /* 5 */

        /***/
        function (module, exports, __webpack_require__) {
          var DESCRIPTORS = __webpack_require__(7);

          var definePropertyModule = __webpack_require__(8);

          var createPropertyDescriptor = __webpack_require__(11);

          module.exports = DESCRIPTORS
            ? function (object, key, value) {
                return definePropertyModule.f(
                  object,
                  key,
                  createPropertyDescriptor(1, value)
                );
              }
            : function (object, key, value) {
                object[key] = value;
                return object;
              };
          /***/
        },
        /* 6 */

        /***/
        function (module, exports) {
          module.exports = function (it) {
            return _typeof(it) === "object"
              ? it !== null
              : typeof it === "function";
          };
          /***/
        },
        /* 7 */

        /***/
        function (module, exports, __webpack_require__) {
          var fails = __webpack_require__(2); // Thank's IE8 for his funny defineProperty

          module.exports = !fails(function () {
            return (
              Object.defineProperty({}, 1, {
                get: function get() {
                  return 7;
                }
              })[1] != 7
            );
          });
          /***/
        },
        /* 8 */

        /***/
        function (module, exports, __webpack_require__) {
          var DESCRIPTORS = __webpack_require__(7);

          var IE8_DOM_DEFINE = __webpack_require__(29);

          var anObject = __webpack_require__(9);

          var toPrimitive = __webpack_require__(14);

          var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
          // https://tc39.github.io/ecma262/#sec-object.defineproperty

          exports.f = DESCRIPTORS
            ? nativeDefineProperty
            : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE)
                  try {
                    return nativeDefineProperty(O, P, Attributes);
                  } catch (error) {
                    /* empty */
                  }
                if ("get" in Attributes || "set" in Attributes)
                  throw TypeError("Accessors not supported");
                if ("value" in Attributes) O[P] = Attributes.value;
                return O;
              };
          /***/
        },
        /* 9 */

        /***/
        function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__(6);

          module.exports = function (it) {
            if (!isObject(it)) {
              throw TypeError(String(it) + " is not an object");
            }

            return it;
          };
          /***/
        },
        /* 10 */

        /***/
        function (module, exports, __webpack_require__) {
          // toObject with fallback for non-array-like ES3 strings
          var IndexedObject = __webpack_require__(23);

          var requireObjectCoercible = __webpack_require__(25);

          module.exports = function (it) {
            return IndexedObject(requireObjectCoercible(it));
          };
          /***/
        },
        /* 11 */

        /***/
        function (module, exports) {
          module.exports = function (bitmap, value) {
            return {
              enumerable: !(bitmap & 1),
              configurable: !(bitmap & 2),
              writable: !(bitmap & 4),
              value: value
            };
          };
          /***/
        },
        /* 12 */

        /***/
        function (module, exports) {
          module.exports = false;
          /***/
        },
        /* 13 */

        /***/
        function (module, exports, __webpack_require__) {
          var global = __webpack_require__(1);

          var createNonEnumerableProperty = __webpack_require__(5);

          module.exports = function (key, value) {
            try {
              createNonEnumerableProperty(global, key, value);
            } catch (error) {
              global[key] = value;
            }

            return value;
          };
          /***/
        },
        /* 14 */

        /***/
        function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__(6); // `ToPrimitive` abstract operation
          // https://tc39.github.io/ecma262/#sec-toprimitive
          // instead of the ES6 spec version, we didn't implement @@toPrimitive case
          // and the second argument - flag - preferred type is a string

          module.exports = function (input, PREFERRED_STRING) {
            if (!isObject(input)) return input;
            var fn, val;
            if (
              PREFERRED_STRING &&
              typeof (fn = input.toString) == "function" &&
              !isObject((val = fn.call(input)))
            )
              return val;
            if (
              typeof (fn = input.valueOf) == "function" &&
              !isObject((val = fn.call(input)))
            )
              return val;
            if (
              !PREFERRED_STRING &&
              typeof (fn = input.toString) == "function" &&
              !isObject((val = fn.call(input)))
            )
              return val;
            throw TypeError("Can't convert object to primitive value");
          };
          /***/
        },
        /* 15 */

        /***/
        function (module, exports) {
          module.exports = {};
          /***/
        },
        /* 16 */

        /***/
        function (module, exports) {
          // IE8- don't enum bug keys
          module.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf"
          ];
          /***/
        },
        /* 17 */

        /***/
        function (module, exports, __webpack_require__) {
          var path = __webpack_require__(58);

          var global = __webpack_require__(1);

          var aFunction = function aFunction(variable) {
            return typeof variable == "function" ? variable : undefined;
          };

          module.exports = function (namespace, method) {
            return arguments.length < 2
              ? aFunction(path[namespace]) || aFunction(global[namespace])
              : (path[namespace] && path[namespace][method]) ||
                  (global[namespace] && global[namespace][method]);
          };
          /***/
        },
        /* 18 */

        /***/
        function (module, exports, __webpack_require__) {
          var shared = __webpack_require__(27);

          var uid = __webpack_require__(31);

          var keys = shared("keys");

          module.exports = function (key) {
            return keys[key] || (keys[key] = uid(key));
          };
          /***/
        },
        /* 19 */

        /***/
        function (module, exports) {
          module.exports = {};
          /***/
        },
        /* 20 */

        /***/
        function (module, exports, __webpack_require__) {
          var global = __webpack_require__(1);

          var getOwnPropertyDescriptor = __webpack_require__(40).f;

          var createNonEnumerableProperty = __webpack_require__(5);

          var redefine = __webpack_require__(42);

          var setGlobal = __webpack_require__(13);

          var copyConstructorProperties = __webpack_require__(61);

          var isForced = __webpack_require__(64);
          /*
        options.target      - name of the target object
        options.global      - target is the global object
        options.stat        - export as static methods of target
        options.proto       - export as prototype methods of target
        options.real        - real prototype method for the `pure` version
        options.forced      - export even if the native feature is available
        options.bind        - bind methods to the target, required for the `pure` version
        options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
        options.unsafe      - use the simple assignment of property instead of delete + defineProperty
        options.sham        - add a flag to not completely full polyfills
        options.enumerable  - export as enumerable property
        options.noTargetGet - prevent calling a getter on target
      */

          module.exports = function (options, source) {
            var TARGET = options.target;
            var GLOBAL = options.global;
            var STATIC = options.stat;
            var FORCED, target, key, targetProperty, sourceProperty, descriptor;

            if (GLOBAL) {
              target = global;
            } else if (STATIC) {
              target = global[TARGET] || setGlobal(TARGET, {});
            } else {
              target = (global[TARGET] || {}).prototype;
            }

            if (target)
              for (key in source) {
                sourceProperty = source[key];

                if (options.noTargetGet) {
                  descriptor = getOwnPropertyDescriptor(target, key);
                  targetProperty = descriptor && descriptor.value;
                } else targetProperty = target[key];

                FORCED = isForced(
                  GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key,
                  options.forced
                ); // contained in target

                if (!FORCED && targetProperty !== undefined) {
                  if (_typeof(sourceProperty) === _typeof(targetProperty))
                    continue;
                  copyConstructorProperties(sourceProperty, targetProperty);
                } // add a flag to not completely full polyfills

                if (options.sham || (targetProperty && targetProperty.sham)) {
                  createNonEnumerableProperty(sourceProperty, "sham", true);
                } // extend global

                redefine(target, key, sourceProperty, options);
              }
          };
          /***/
        },
        /* 21 */

        /***/
        function (module, exports, __webpack_require__) {
          var requireObjectCoercible = __webpack_require__(25); // `ToObject` abstract operation
          // https://tc39.github.io/ecma262/#sec-toobject

          module.exports = function (argument) {
            return Object(requireObjectCoercible(argument));
          };
          /***/
        },
        /* 22 */

        /***/
        function (module, exports, __webpack_require__) {
          "use strict";

          var toIndexedObject = __webpack_require__(10);

          var addToUnscopables = __webpack_require__(52);

          var Iterators = __webpack_require__(19);

          var InternalStateModule = __webpack_require__(38);

          var defineIterator = __webpack_require__(60);

          var ARRAY_ITERATOR = "Array Iterator";
          var setInternalState = InternalStateModule.set;
          var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.entries
          // `Array.prototype.keys` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.keys
          // `Array.prototype.values` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.values
          // `Array.prototype[@@iterator]` method
          // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
          // `CreateArrayIterator` internal method
          // https://tc39.github.io/ecma262/#sec-createarrayiterator

          module.exports = defineIterator(
            Array,
            "Array",
            function (iterated, kind) {
              setInternalState(this, {
                type: ARRAY_ITERATOR,
                target: toIndexedObject(iterated),
                // target
                index: 0,
                // next index
                kind: kind // kind
              }); // `%ArrayIteratorPrototype%.next` method
              // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
            },
            function () {
              var state = getInternalState(this);
              var target = state.target;
              var kind = state.kind;
              var index = state.index++;

              if (!target || index >= target.length) {
                state.target = undefined;
                return {
                  value: undefined,
                  done: true
                };
              }

              if (kind == "keys")
                return {
                  value: index,
                  done: false
                };
              if (kind == "values")
                return {
                  value: target[index],
                  done: false
                };
              return {
                value: [index, target[index]],
                done: false
              };
            },
            "values"
          ); // argumentsList[@@iterator] is %ArrayProto_values%
          // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
          // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

          Iterators.Arguments = Iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

          addToUnscopables("keys");
          addToUnscopables("values");
          addToUnscopables("entries");
          /***/
        },
        /* 23 */

        /***/
        function (module, exports, __webpack_require__) {
          var fails = __webpack_require__(2);

          var classof = __webpack_require__(24);

          var split = "".split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

          module.exports = fails(function () {
            // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
            // eslint-disable-next-line no-prototype-builtins
            return !Object("z").propertyIsEnumerable(0);
          })
            ? function (it) {
                return classof(it) == "String"
                  ? split.call(it, "")
                  : Object(it);
              }
            : Object;
          /***/
        },
        /* 24 */

        /***/
        function (module, exports) {
          var toString = {}.toString;

          module.exports = function (it) {
            return toString.call(it).slice(8, -1);
          };
          /***/
        },
        /* 25 */

        /***/
        function (module, exports) {
          // `RequireObjectCoercible` abstract operation
          // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
          module.exports = function (it) {
            if (it == undefined) throw TypeError("Can't call method on " + it);
            return it;
          };
          /***/
        },
        /* 26 */

        /***/
        function (module, exports) {
          var g; // This works in non-strict mode

          g = (function () {
            return this;
          })();

          try {
            // This works if eval is allowed (see CSP)
            g = g || new Function("return this")();
          } catch (e) {
            // This works if the window reference is available
            if (
              (typeof window === "undefined"
                ? "undefined"
                : _typeof(window)) === "object"
            )
              g = window;
          } // g can still be undefined, but nothing to do about it...
          // We return undefined, instead of nothing here, so it's
          // easier to handle this case. if(!global) { ...}

          module.exports = g;
          /***/
        },
        /* 27 */

        /***/
        function (module, exports, __webpack_require__) {
          var IS_PURE = __webpack_require__(12);

          var store = __webpack_require__(28);

          (module.exports = function (key, value) {
            return (
              store[key] || (store[key] = value !== undefined ? value : {})
            );
          })("versions", []).push({
            version: "3.6.5",
            mode: IS_PURE ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
          });
          /***/
        },
        /* 28 */

        /***/
        function (module, exports, __webpack_require__) {
          var global = __webpack_require__(1);

          var setGlobal = __webpack_require__(13);

          var SHARED = "__core-js_shared__";
          var store = global[SHARED] || setGlobal(SHARED, {});
          module.exports = store;
          /***/
        },
        /* 29 */

        /***/
        function (module, exports, __webpack_require__) {
          var DESCRIPTORS = __webpack_require__(7);

          var fails = __webpack_require__(2);

          var createElement = __webpack_require__(30); // Thank's IE8 for his funny defineProperty

          module.exports =
            !DESCRIPTORS &&
            !fails(function () {
              return (
                Object.defineProperty(createElement("div"), "a", {
                  get: function get() {
                    return 7;
                  }
                }).a != 7
              );
            });
          /***/
        },
        /* 30 */

        /***/
        function (module, exports, __webpack_require__) {
          var global = __webpack_require__(1);

          var isObject = __webpack_require__(6);

          var document = global.document; // typeof document.createElement is 'object' in old IE

          var EXISTS = isObject(document) && isObject(document.createElement);

          module.exports = function (it) {
            return EXISTS ? document.createElement(it) : {};
          };
          /***/
        },
        /* 31 */

        /***/
        function (module, exports) {
          var id = 0;
          var postfix = Math.random();

          module.exports = function (key) {
            return (
              "Symbol(" +
              String(key === undefined ? "" : key) +
              ")_" +
              (++id + postfix).toString(36)
            );
          };
          /***/
        },
        /* 32 */

        /***/
        function (module, exports, __webpack_require__) {
          var fails = __webpack_require__(2);

          module.exports =
            !!Object.getOwnPropertySymbols &&
            !fails(function () {
              // Chrome 38 Symbol has incorrect toString conversion
              // eslint-disable-next-line no-undef
              return !String(Symbol());
            });
          /***/
        },
        /* 33 */

        /***/
        function (module, exports, __webpack_require__) {
          var anObject = __webpack_require__(9);

          var defineProperties = __webpack_require__(54);

          var enumBugKeys = __webpack_require__(16);

          var hiddenKeys = __webpack_require__(15);

          var html = __webpack_require__(57);

          var documentCreateElement = __webpack_require__(30);

          var sharedKey = __webpack_require__(18);

          var GT = ">";
          var LT = "<";
          var PROTOTYPE = "prototype";
          var SCRIPT = "script";
          var IE_PROTO = sharedKey("IE_PROTO");

          var EmptyConstructor = function EmptyConstructor() {
            /* empty */
          };

          var scriptTag = function scriptTag(content) {
            return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
          }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype

          var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(
            activeXDocument
          ) {
            activeXDocument.write(scriptTag(""));
            activeXDocument.close();
            var temp = activeXDocument.parentWindow.Object;
            activeXDocument = null; // avoid memory leak

            return temp;
          }; // Create object with fake `null` prototype: use iframe Object with cleared prototype

          var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = documentCreateElement("iframe");
            var JS = "java" + SCRIPT + ":";
            var iframeDocument;
            iframe.style.display = "none";
            html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

            iframe.src = String(JS);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(scriptTag("document.F=Object"));
            iframeDocument.close();
            return iframeDocument.F;
          }; // Check for document.domain and active x support
          // No need to use active x approach when document.domain is not set
          // see https://github.com/es-shims/es5-shim/issues/150
          // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
          // avoid IE GC bug

          var activeXDocument;

          var _NullProtoObject = function NullProtoObject() {
            try {
              /* global ActiveXObject */
              activeXDocument =
                document.domain && new ActiveXObject("htmlfile");
            } catch (error) {
              /* ignore */
            }

            _NullProtoObject = activeXDocument
              ? NullProtoObjectViaActiveX(activeXDocument)
              : NullProtoObjectViaIFrame();
            var length = enumBugKeys.length;

            while (length--) {
              delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
            }

            return _NullProtoObject();
          };

          hiddenKeys[IE_PROTO] = true; // `Object.create` method
          // https://tc39.github.io/ecma262/#sec-object.create

          module.exports =
            Object.create ||
            function create(O, Properties) {
              var result;

              if (O !== null) {
                EmptyConstructor[PROTOTYPE] = anObject(O);
                result = new EmptyConstructor();
                EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

                result[IE_PROTO] = O;
              } else result = _NullProtoObject();

              return Properties === undefined
                ? result
                : defineProperties(result, Properties);
            };
          /***/
        },
        /* 34 */

        /***/
        function (module, exports, __webpack_require__) {
          var internalObjectKeys = __webpack_require__(35);

          var enumBugKeys = __webpack_require__(16); // `Object.keys` method
          // https://tc39.github.io/ecma262/#sec-object.keys

          module.exports =
            Object.keys ||
            function keys(O) {
              return internalObjectKeys(O, enumBugKeys);
            };
          /***/
        },
        /* 35 */

        /***/
        function (module, exports, __webpack_require__) {
          var has = __webpack_require__(3);

          var toIndexedObject = __webpack_require__(10);

          var indexOf = __webpack_require__(55).indexOf;

          var hiddenKeys = __webpack_require__(15);

          module.exports = function (object, names) {
            var O = toIndexedObject(object);
            var i = 0;
            var result = [];
            var key;

            for (key in O) {
              !has(hiddenKeys, key) && has(O, key) && result.push(key);
            } // Don't enum bug & hidden keys

            while (names.length > i) {
              if (has(O, (key = names[i++]))) {
                ~indexOf(result, key) || result.push(key);
              }
            }

            return result;
          };
          /***/
        },
        /* 36 */

        /***/
        function (module, exports, __webpack_require__) {
          var toInteger = __webpack_require__(37);

          var min = Math.min; // `ToLength` abstract operation
          // https://tc39.github.io/ecma262/#sec-tolength

          module.exports = function (argument) {
            return argument > 0
              ? min(toInteger(argument), 0x1fffffffffffff)
              : 0; // 2 ** 53 - 1 == 9007199254740991
          };
          /***/
        },
        /* 37 */

        /***/
        function (module, exports) {
          var ceil = Math.ceil;
          var floor = Math.floor; // `ToInteger` abstract operation
          // https://tc39.github.io/ecma262/#sec-tointeger

          module.exports = function (argument) {
            return isNaN((argument = +argument))
              ? 0
              : (argument > 0 ? floor : ceil)(argument);
          };
          /***/
        },
        /* 38 */

        /***/
        function (module, exports, __webpack_require__) {
          var NATIVE_WEAK_MAP = __webpack_require__(59);

          var global = __webpack_require__(1);

          var isObject = __webpack_require__(6);

          var createNonEnumerableProperty = __webpack_require__(5);

          var objectHas = __webpack_require__(3);

          var sharedKey = __webpack_require__(18);

          var hiddenKeys = __webpack_require__(15);

          var WeakMap = global.WeakMap;
          var set, get, has;

          var enforce = function enforce(it) {
            return has(it) ? get(it) : set(it, {});
          };

          var getterFor = function getterFor(TYPE) {
            return function (it) {
              var state;

              if (!isObject(it) || (state = get(it)).type !== TYPE) {
                throw TypeError("Incompatible receiver, " + TYPE + " required");
              }

              return state;
            };
          };

          if (NATIVE_WEAK_MAP) {
            var store = new WeakMap();
            var wmget = store.get;
            var wmhas = store.has;
            var wmset = store.set;

            set = function set(it, metadata) {
              wmset.call(store, it, metadata);
              return metadata;
            };

            get = function get(it) {
              return wmget.call(store, it) || {};
            };

            has = function has(it) {
              return wmhas.call(store, it);
            };
          } else {
            var STATE = sharedKey("state");
            hiddenKeys[STATE] = true;

            set = function set(it, metadata) {
              createNonEnumerableProperty(it, STATE, metadata);
              return metadata;
            };

            get = function get(it) {
              return objectHas(it, STATE) ? it[STATE] : {};
            };

            has = function has(it) {
              return objectHas(it, STATE);
            };
          }

          module.exports = {
            set: set,
            get: get,
            has: has,
            enforce: enforce,
            getterFor: getterFor
          };
          /***/
        },
        /* 39 */

        /***/
        function (module, exports, __webpack_require__) {
          var store = __webpack_require__(28);

          var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

          if (typeof store.inspectSource != "function") {
            store.inspectSource = function (it) {
              return functionToString.call(it);
            };
          }

          module.exports = store.inspectSource;
          /***/
        },
        /* 40 */

        /***/
        function (module, exports, __webpack_require__) {
          var DESCRIPTORS = __webpack_require__(7);

          var propertyIsEnumerableModule = __webpack_require__(41);

          var createPropertyDescriptor = __webpack_require__(11);

          var toIndexedObject = __webpack_require__(10);

          var toPrimitive = __webpack_require__(14);

          var has = __webpack_require__(3);

          var IE8_DOM_DEFINE = __webpack_require__(29);

          var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
          // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

          exports.f = DESCRIPTORS
            ? nativeGetOwnPropertyDescriptor
            : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE)
                  try {
                    return nativeGetOwnPropertyDescriptor(O, P);
                  } catch (error) {
                    /* empty */
                  }
                if (has(O, P))
                  return createPropertyDescriptor(
                    !propertyIsEnumerableModule.f.call(O, P),
                    O[P]
                  );
              };
          /***/
        },
        /* 41 */

        /***/
        function (module, exports, __webpack_require__) {
          "use strict";

          var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
          var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

          var NASHORN_BUG =
            getOwnPropertyDescriptor &&
            !nativePropertyIsEnumerable.call(
              {
                1: 2
              },
              1
            ); // `Object.prototype.propertyIsEnumerable` method implementation
          // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

          exports.f = NASHORN_BUG
            ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
              }
            : nativePropertyIsEnumerable;
          /***/
        },
        /* 42 */

        /***/
        function (module, exports, __webpack_require__) {
          var global = __webpack_require__(1);

          var createNonEnumerableProperty = __webpack_require__(5);

          var has = __webpack_require__(3);

          var setGlobal = __webpack_require__(13);

          var inspectSource = __webpack_require__(39);

          var InternalStateModule = __webpack_require__(38);

          var getInternalState = InternalStateModule.get;
          var enforceInternalState = InternalStateModule.enforce;
          var TEMPLATE = String(String).split("String");
          (module.exports = function (O, key, value, options) {
            var unsafe = options ? !!options.unsafe : false;
            var simple = options ? !!options.enumerable : false;
            var noTargetGet = options ? !!options.noTargetGet : false;

            if (typeof value == "function") {
              if (typeof key == "string" && !has(value, "name"))
                createNonEnumerableProperty(value, "name", key);
              enforceInternalState(value).source = TEMPLATE.join(
                typeof key == "string" ? key : ""
              );
            }

            if (O === global) {
              if (simple) O[key] = value;
              else setGlobal(key, value);
              return;
            } else if (!unsafe) {
              delete O[key];
            } else if (!noTargetGet && O[key]) {
              simple = true;
            }

            if (simple) O[key] = value;
            else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
          })(Function.prototype, "toString", function toString() {
            return (
              (typeof this == "function" && getInternalState(this).source) ||
              inspectSource(this)
            );
          });
          /***/
        },
        /* 43 */

        /***/
        function (module, exports) {
          exports.f = Object.getOwnPropertySymbols;
          /***/
        },
        /* 44 */

        /***/
        function (module, exports, __webpack_require__) {
          "use strict";

          var getPrototypeOf = __webpack_require__(45);

          var createNonEnumerableProperty = __webpack_require__(5);

          var has = __webpack_require__(3);

          var wellKnownSymbol = __webpack_require__(4);

          var IS_PURE = __webpack_require__(12);

          var ITERATOR = wellKnownSymbol("iterator");
          var BUGGY_SAFARI_ITERATORS = false;

          var returnThis = function returnThis() {
            return this;
          }; // `%IteratorPrototype%` object
          // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object

          var IteratorPrototype,
            PrototypeOfArrayIteratorPrototype,
            arrayIterator;

          if ([].keys) {
            arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

            if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
            else {
              PrototypeOfArrayIteratorPrototype = getPrototypeOf(
                getPrototypeOf(arrayIterator)
              );
              if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
                IteratorPrototype = PrototypeOfArrayIteratorPrototype;
            }
          }

          if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

          if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
            createNonEnumerableProperty(
              IteratorPrototype,
              ITERATOR,
              returnThis
            );
          }

          module.exports = {
            IteratorPrototype: IteratorPrototype,
            BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
          };
          /***/
        },
        /* 45 */

        /***/
        function (module, exports, __webpack_require__) {
          var has = __webpack_require__(3);

          var toObject = __webpack_require__(21);

          var sharedKey = __webpack_require__(18);

          var CORRECT_PROTOTYPE_GETTER = __webpack_require__(66);

          var IE_PROTO = sharedKey("IE_PROTO");
          var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
          // https://tc39.github.io/ecma262/#sec-object.getprototypeof

          module.exports = CORRECT_PROTOTYPE_GETTER
            ? Object.getPrototypeOf
            : function (O) {
                O = toObject(O);
                if (has(O, IE_PROTO)) return O[IE_PROTO];

                if (
                  typeof O.constructor == "function" &&
                  _instanceof(O, O.constructor)
                ) {
                  return O.constructor.prototype;
                }

                return _instanceof(O, Object) ? ObjectPrototype : null;
              };
          /***/
        },
        /* 46 */

        /***/
        function (module, exports, __webpack_require__) {
          var defineProperty = __webpack_require__(8).f;

          var has = __webpack_require__(3);

          var wellKnownSymbol = __webpack_require__(4);

          var TO_STRING_TAG = wellKnownSymbol("toStringTag");

          module.exports = function (it, TAG, STATIC) {
            if (it && !has((it = STATIC ? it : it.prototype), TO_STRING_TAG)) {
              defineProperty(it, TO_STRING_TAG, {
                configurable: true,
                value: TAG
              });
            }
          };
          /***/
        },
        /* 47 */

        /***/
        function (module, exports, __webpack_require__) {
          "use strict";

          var $ = __webpack_require__(20);

          var fails = __webpack_require__(2);

          var isArray = __webpack_require__(48);

          var isObject = __webpack_require__(6);

          var toObject = __webpack_require__(21);

          var toLength = __webpack_require__(36);

          var createProperty = __webpack_require__(71);

          var arraySpeciesCreate = __webpack_require__(72);

          var arrayMethodHasSpeciesSupport = __webpack_require__(73);

          var wellKnownSymbol = __webpack_require__(4);

          var V8_VERSION = __webpack_require__(49);

          var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
          var MAX_SAFE_INTEGER = 0x1fffffffffffff;
          var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded"; // We can't use this feature detection in V8 since it causes
          // deoptimization and serious performance degradation
          // https://github.com/zloirock/core-js/issues/679

          var IS_CONCAT_SPREADABLE_SUPPORT =
            V8_VERSION >= 51 ||
            !fails(function () {
              var array = [];
              array[IS_CONCAT_SPREADABLE] = false;
              return array.concat()[0] !== array;
            });
          var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");

          var isConcatSpreadable = function isConcatSpreadable(O) {
            if (!isObject(O)) return false;
            var spreadable = O[IS_CONCAT_SPREADABLE];
            return spreadable !== undefined ? !!spreadable : isArray(O);
          };

          var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.concat
          // with adding support of @@isConcatSpreadable and @@species

          $(
            {
              target: "Array",
              proto: true,
              forced: FORCED
            },
            {
              concat: function concat(arg) {
                // eslint-disable-line no-unused-vars
                var O = toObject(this);
                var A = arraySpeciesCreate(O, 0);
                var n = 0;
                var i, k, length, len, E;

                for (i = -1, length = arguments.length; i < length; i++) {
                  E = i === -1 ? O : arguments[i];

                  if (isConcatSpreadable(E)) {
                    len = toLength(E.length);
                    if (n + len > MAX_SAFE_INTEGER)
                      throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

                    for (k = 0; k < len; k++, n++) {
                      if (k in E) createProperty(A, n, E[k]);
                    }
                  } else {
                    if (n >= MAX_SAFE_INTEGER)
                      throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    createProperty(A, n++, E);
                  }
                }

                A.length = n;
                return A;
              }
            }
          );
          /***/
        },
        /* 48 */

        /***/
        function (module, exports, __webpack_require__) {
          var classof = __webpack_require__(24); // `IsArray` abstract operation
          // https://tc39.github.io/ecma262/#sec-isarray

          module.exports =
            Array.isArray ||
            function isArray(arg) {
              return classof(arg) == "Array";
            };
          /***/
        },
        /* 49 */

        /***/
        function (module, exports, __webpack_require__) {
          var global = __webpack_require__(1);

          var userAgent = __webpack_require__(74);

          var process = global.process;
          var versions = process && process.versions;
          var v8 = versions && versions.v8;
          var match, version;

          if (v8) {
            match = v8.split(".");
            version = match[0] + match[1];
          } else if (userAgent) {
            match = userAgent.match(/Edge\/(\d+)/);

            if (!match || match[1] >= 74) {
              match = userAgent.match(/Chrome\/(\d+)/);
              if (match) version = match[1];
            }
          }

          module.exports = version && +version;
          /***/
        },
        /* 50 */

        /***/
        function (module, exports, __webpack_require__) {
          /* WEBPACK VAR INJECTION */
          (function (global) {
            /**
             * lodash (Custom Build) <https://lodash.com/>
             * Build: `lodash modularize exports="npm" -o ./`
             * Copyright jQuery Foundation and other contributors <https://jquery.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */

            /** Used as the `TypeError` message for "Functions" methods. */
            var FUNC_ERROR_TEXT = "Expected a function";
            /** Used as references for various `Number` constants. */

            var NAN = 0 / 0;
            /** `Object#toString` result references. */

            var symbolTag = "[object Symbol]";
            /** Used to match leading and trailing whitespace. */

            var reTrim = /^\s+|\s+$/g;
            /** Used to detect bad signed hexadecimal string values. */

            var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
            /** Used to detect binary string values. */

            var reIsBinary = /^0b[01]+$/i;
            /** Used to detect octal string values. */

            var reIsOctal = /^0o[0-7]+$/i;
            /** Built-in method references without a dependency on `root`. */

            var freeParseInt = parseInt;
            /** Detect free variable `global` from Node.js. */

            var freeGlobal =
              _typeof(global) == "object" &&
              global &&
              global.Object === Object &&
              global;
            /** Detect free variable `self`. */

            var freeSelf =
              (typeof self === "undefined" ? "undefined" : _typeof(self)) ==
                "object" &&
              self &&
              self.Object === Object &&
              self;
            /** Used as a reference to the global object. */

            var root = freeGlobal || freeSelf || Function("return this")();
            /** Used for built-in method references. */

            var objectProto = Object.prototype;
            /**
             * Used to resolve the
             * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
             * of values.
             */

            var objectToString = objectProto.toString;
            /* Built-in method references for those with the same name as other `lodash` methods. */

            var nativeMax = Math.max,
              nativeMin = Math.min;
            /**
             * Gets the timestamp of the number of milliseconds that have epalmsed since
             * the Unix epoch (1 January 1970 00:00:00 UTC).
             *
             * @static
             * @memberOf _
             * @since 2.4.0
             * @category Date
             * @returns {number} Returns the timestamp.
             * @example
             *
             * _.defer(function(stamp) {
             *   console.log(_.now() - stamp);
             * }, _.now());
             * // => Logs the number of milliseconds it took for the deferred invocation.
             */

            var now = function now() {
              return root.Date.now();
            };
            /**
             * Creates a debounced function that delays invoking `func` until after `wait`
             * milliseconds have epalmsed since the last time the debounced function was
             * invoked. The debounced function comes with a `cancel` method to cancel
             * delayed `func` invocations and a `flush` method to immediately invoke them.
             * Provide `options` to indicate whether `func` should be invoked on the
             * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
             * with the last arguments provided to the debounced function. Subsequent
             * calls to the debounced function return the result of the last `func`
             * invocation.
             *
             * **Note:** If `leading` and `trailing` options are `true`, `func` is
             * invoked on the trailing edge of the timeout only if the debounced function
             * is invoked more than once during the `wait` timeout.
             *
             * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
             * until to the next tick, similar to `setTimeout` with a timeout of `0`.
             *
             * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
             * for details over the differences between `_.debounce` and `_.throttle`.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Function
             * @param {Function} func The function to debounce.
             * @param {number} [wait=0] The number of milliseconds to delay.
             * @param {Object} [options={}] The options object.
             * @param {boolean} [options.leading=false]
             *  Specify invoking on the leading edge of the timeout.
             * @param {number} [options.maxWait]
             *  The maximum time `func` is allowed to be delayed before it's invoked.
             * @param {boolean} [options.trailing=true]
             *  Specify invoking on the trailing edge of the timeout.
             * @returns {Function} Returns the new debounced function.
             * @example
             *
             * // Avoid costly calculations while the window size is in flux.
             * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
             *
             * // Invoke `sendMail` when clicked, debouncing subsequent calls.
             * jQuery(element).on('click', _.debounce(sendMail, 300, {
             *   'leading': true,
             *   'trailing': false
             * }));
             *
             * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
             * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
             * var source = new EventSource('/stream');
             * jQuery(source).on('message', debounced);
             *
             * // Cancel the trailing debounced invocation.
             * jQuery(window).on('popstate', debounced.cancel);
             */

            function debounce(func, wait, options) {
              var lastArgs,
                lastThis,
                maxWait,
                result,
                timerId,
                lastCallTime,
                lastInvokeTime = 0,
                leading = false,
                maxing = false,
                trailing = true;

              if (typeof func != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }

              wait = toNumber(wait) || 0;

              if (isObject(options)) {
                leading = !!options.leading;
                maxing = "maxWait" in options;
                maxWait = maxing
                  ? nativeMax(toNumber(options.maxWait) || 0, wait)
                  : maxWait;
                trailing =
                  "trailing" in options ? !!options.trailing : trailing;
              }

              function invokeFunc(time) {
                var args = lastArgs,
                  thisArg = lastThis;
                lastArgs = lastThis = undefined;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
              }

              function leadingEdge(time) {
                // Reset any `maxWait` timer.
                lastInvokeTime = time; // Start the timer for the trailing edge.

                timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

                return leading ? invokeFunc(time) : result;
              }

              function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime,
                  timeSinceLastInvoke = time - lastInvokeTime,
                  result = wait - timeSinceLastCall;
                return maxing
                  ? nativeMin(result, maxWait - timeSinceLastInvoke)
                  : result;
              }

              function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime,
                  timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
                // trailing edge, the system time has gone backwards and we're treating
                // it as the trailing edge, or we've hit the `maxWait` limit.

                return (
                  lastCallTime === undefined ||
                  timeSinceLastCall >= wait ||
                  timeSinceLastCall < 0 ||
                  (maxing && timeSinceLastInvoke >= maxWait)
                );
              }

              function timerExpired() {
                var time = now();

                if (shouldInvoke(time)) {
                  return trailingEdge(time);
                } // Restart the timer.

                timerId = setTimeout(timerExpired, remainingWait(time));
              }

              function trailingEdge(time) {
                timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
                // debounced at least once.

                if (trailing && lastArgs) {
                  return invokeFunc(time);
                }

                lastArgs = lastThis = undefined;
                return result;
              }

              function cancel() {
                if (timerId !== undefined) {
                  clearTimeout(timerId);
                }

                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = undefined;
              }

              function flush() {
                return timerId === undefined ? result : trailingEdge(now());
              }

              function debounced() {
                var time = now(),
                  isInvoking = shouldInvoke(time);
                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;

                if (isInvoking) {
                  if (timerId === undefined) {
                    return leadingEdge(lastCallTime);
                  }

                  if (maxing) {
                    // Handle invocations in a tight loop.
                    timerId = setTimeout(timerExpired, wait);
                    return invokeFunc(lastCallTime);
                  }
                }

                if (timerId === undefined) {
                  timerId = setTimeout(timerExpired, wait);
                }

                return result;
              }

              debounced.cancel = cancel;
              debounced.flush = flush;
              return debounced;
            }
            /**
             * Checks if `value` is the
             * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
             * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an object, else `false`.
             * @example
             *
             * _.isObject({});
             * // => true
             *
             * _.isObject([1, 2, 3]);
             * // => true
             *
             * _.isObject(_.noop);
             * // => true
             *
             * _.isObject(null);
             * // => false
             */

            function isObject(value) {
              var type = _typeof(value);

              return !!value && (type == "object" || type == "function");
            }
            /**
             * Checks if `value` is object-like. A value is object-like if it's not `null`
             * and has a `typeof` result of "object".
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
             * @example
             *
             * _.isObjectLike({});
             * // => true
             *
             * _.isObjectLike([1, 2, 3]);
             * // => true
             *
             * _.isObjectLike(_.noop);
             * // => false
             *
             * _.isObjectLike(null);
             * // => false
             */

            function isObjectLike(value) {
              return !!value && _typeof(value) == "object";
            }
            /**
             * Checks if `value` is classified as a `Symbol` primitive or object.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
             * @example
             *
             * _.isSymbol(Symbol.iterator);
             * // => true
             *
             * _.isSymbol('abc');
             * // => false
             */

            function isSymbol(value) {
              return (
                _typeof(value) == "symbol" ||
                (isObjectLike(value) && objectToString.call(value) == symbolTag)
              );
            }
            /**
             * Converts `value` to a number.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to process.
             * @returns {number} Returns the number.
             * @example
             *
             * _.toNumber(3.2);
             * // => 3.2
             *
             * _.toNumber(Number.MIN_VALUE);
             * // => 5e-324
             *
             * _.toNumber(Infinity);
             * // => Infinity
             *
             * _.toNumber('3.2');
             * // => 3.2
             */

            function toNumber(value) {
              if (typeof value == "number") {
                return value;
              }

              if (isSymbol(value)) {
                return NAN;
              }

              if (isObject(value)) {
                var other =
                  typeof value.valueOf == "function" ? value.valueOf() : value;
                value = isObject(other) ? other + "" : other;
              }

              if (typeof value != "string") {
                return value === 0 ? value : +value;
              }

              value = value.replace(reTrim, "");
              var isBinary = reIsBinary.test(value);
              return isBinary || reIsOctal.test(value)
                ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
                : reIsBadHex.test(value)
                ? NAN
                : +value;
            }

            module.exports = debounce;
            /* WEBPACK VAR INJECTION */
          }.call(this, __webpack_require__(26)));
          /***/
        },
        /* 51 */

        /***/
        function (module, exports, __webpack_require__) {
          !(function (e, t) {
            true ? (module.exports = t()) : undefined;
          })(window, function () {
            return (function (e) {
              var t = {};

              function n(r) {
                if (t[r]) return t[r].exports;
                var i = (t[r] = {
                  i: r,
                  l: !1,
                  exports: {}
                });
                return (
                  e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
                );
              }

              return (
                (n.m = e),
                (n.c = t),
                (n.d = function (e, t, r) {
                  n.o(e, t) ||
                    Object.defineProperty(e, t, {
                      enumerable: !0,
                      get: r
                    });
                }),
                (n.r = function (e) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                      value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                      value: !0
                    });
                }),
                (n.t = function (e, t) {
                  if ((1 & t && (e = n(e)), 8 & t)) return e;
                  if (4 & t && "object" == _typeof(e) && e && e.__esModule)
                    return e;
                  var r = Object.create(null);
                  if (
                    (n.r(r),
                    Object.defineProperty(r, "default", {
                      enumerable: !0,
                      value: e
                    }),
                    2 & t && "string" != typeof e)
                  )
                    for (var i in e) {
                      n.d(
                        r,
                        i,
                        function (t) {
                          return e[t];
                        }.bind(null, i)
                      );
                    }
                  return r;
                }),
                (n.n = function (e) {
                  var t =
                    e && e.__esModule
                      ? function () {
                          return e.default;
                        }
                      : function () {
                          return e;
                        };
                  return n.d(t, "a", t), t;
                }),
                (n.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.p = "/"),
                n((n.s = 0))
              );
            })([
              function (e, t, n) {
                e.exports = n(2);
              },
              function (e, t) {
                if ("function" != typeof window.WeakSet) {
                  var n = Date.now() % 1e9;

                  window.WeakSet =
                    window.WeakSet ||
                    function (e) {
                      (this.name =
                        "__st" + ((1e9 * Math.random()) >>> 0) + n++ + "__"),
                        e && e.forEach && e.forEach(this.add, this);
                    };

                  var r = window.WeakSet.prototype;
                  (r.add = function (e) {
                    var t = this.name;
                    return (
                      e[t] ||
                        Object.defineProperty(e, t, {
                          value: !0,
                          writable: !0
                        }),
                      this
                    );
                  }),
                    (r.delete = function (e) {
                      return !!e[this.name] && ((e[this.name] = void 0), !0);
                    }),
                    (r.has = function (e) {
                      return !!e[this.name];
                    });
                }

                e.exports = window.WeakSet;
              },
              function (e, t, n) {
                "use strict";

                n.r(t);
                n(1);

                function r() {
                  if (!_instanceof(this, r)) return new r();
                  (this.size = 0),
                    (this.uid = 0),
                    (this.selectors = []),
                    (this.indexes = Object.create(this.indexes)),
                    (this.activeIndexes = []);
                }

                var i = window.document.documentElement,
                  o =
                    i.matches ||
                    i.webkitMatchesSelector ||
                    i.mozMatchesSelector ||
                    i.oMatchesSelector ||
                    i.msMatchesSelector;
                (r.prototype.matchesSelector = function (e, t) {
                  return o.call(e, t);
                }),
                  (r.prototype.querySelectorAll = function (e, t) {
                    return t.querySelectorAll(e);
                  }),
                  (r.prototype.indexes = []);
                var a = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
                r.prototype.indexes.push({
                  name: "ID",
                  selector: function selector(e) {
                    var t;
                    if ((t = e.match(a))) return t[0].slice(1);
                  },
                  element: function element(e) {
                    if (e.id) return [e.id];
                  }
                });
                var s = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
                r.prototype.indexes.push({
                  name: "CLASS",
                  selector: function selector(e) {
                    var t;
                    if ((t = e.match(s))) return t[0].slice(1);
                  },
                  element: function element(e) {
                    var t = e.className;

                    if (t) {
                      if ("string" == typeof t) return t.split(/\s/);
                      if ("object" == _typeof(t) && "baseVal" in t)
                        return t.baseVal.split(/\s/);
                    }
                  }
                });
                var u,
                  c = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
                r.prototype.indexes.push({
                  name: "TAG",
                  selector: function selector(e) {
                    var t;
                    if ((t = e.match(c))) return t[0].toUpperCase();
                  },
                  element: function element(e) {
                    return [e.nodeName.toUpperCase()];
                  }
                }),
                  (r.prototype.indexes.default = {
                    name: "UNIVERSAL",
                    selector: function selector() {
                      return !0;
                    },
                    element: function element() {
                      return [!0];
                    }
                  }),
                  (u =
                    "function" == typeof window.Map
                      ? window.Map
                      : (function () {
                          function e() {
                            this.map = {};
                          }

                          return (
                            (e.prototype.get = function (e) {
                              return this.map[e + " "];
                            }),
                            (e.prototype.set = function (e, t) {
                              this.map[e + " "] = t;
                            }),
                            e
                          );
                        })());
                var f = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

                function l(e, t) {
                  var n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = (e = e.slice(0).concat(e.default)).length,
                    c = t,
                    l = [];

                  do {
                    if (
                      (f.exec(""), (i = f.exec(c)) && ((c = i[3]), i[2] || !c))
                    )
                      for (n = 0; n < u; n++) {
                        if ((a = (s = e[n]).selector(i[1]))) {
                          for (r = l.length, o = !1; r--; ) {
                            if (l[r].index === s && l[r].key === a) {
                              o = !0;
                              break;
                            }
                          }

                          o ||
                            l.push({
                              index: s,
                              key: a
                            });
                          break;
                        }
                      }
                  } while (i);

                  return l;
                }

                function d(e, t) {
                  var n, r, i;

                  for (n = 0, r = e.length; n < r; n++) {
                    if (((i = e[n]), t.isPrototypeOf(i))) return i;
                  }
                }

                function h(e, t) {
                  return e.id - t.id;
                }

                function p(e) {
                  return (
                    (function (e) {
                      if (Array.isArray(e)) {
                        for (
                          var t = 0, n = new Array(e.length);
                          t < e.length;
                          t++
                        ) {
                          n[t] = e[t];
                        }

                        return n;
                      }
                    })(e) ||
                    (function (e) {
                      if (
                        Symbol.iterator in Object(e) ||
                        "[object Arguments]" ===
                          Object.prototype.toString.call(e)
                      )
                        return Array.from(e);
                    })(e) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to spread non-iterable instance"
                      );
                    })()
                  );
                }

                function v(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }

                function y(e, t) {
                  var n = t.get(e);
                  if (!n)
                    throw new TypeError(
                      "attempted to get private field on non-instance"
                    );
                  return n.get ? n.get.call(e) : n.value;
                }

                function m(e, t, n) {
                  if (!t.has(e))
                    throw new TypeError(
                      "attempted to get private field on non-instance"
                    );
                  return n;
                }

                (r.prototype.logDefaultIndexUsed = function () {}),
                  (r.prototype.add = function (e, t) {
                    var n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      c,
                      f,
                      h = this.activeIndexes,
                      p = this.selectors;

                    if ("string" == typeof e) {
                      for (
                        n = {
                          id: this.uid++,
                          selector: e,
                          data: t
                        },
                          c = l(this.indexes, e),
                          r = 0;
                        r < c.length;
                        r++
                      ) {
                        (o = (f = c[r]).key),
                          (a = d(h, (i = f.index))) ||
                            (((a = Object.create(i)).map = new u()), h.push(a)),
                          i === this.indexes.default &&
                            this.logDefaultIndexUsed(n),
                          (s = a.map.get(o)) || ((s = []), a.map.set(o, s)),
                          s.push(n);
                      }

                      this.size++, p.push(e);
                    }
                  }),
                  (r.prototype.remove = function (e, t) {
                    if ("string" == typeof e) {
                      var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        c,
                        f = this.activeIndexes,
                        d = {},
                        h = 1 === arguments.length;

                      for (n = l(this.indexes, e), i = 0; i < n.length; i++) {
                        for (r = n[i], o = f.length; o--; ) {
                          if (((s = f[o]), r.index.isPrototypeOf(s))) {
                            if ((u = s.map.get(r.key)))
                              for (a = u.length; a--; ) {
                                (c = u[a]).selector !== e ||
                                  (!h && c.data !== t) ||
                                  (u.splice(a, 1), (d[c.id] = !0));
                              }
                            break;
                          }
                        }
                      }

                      this.size -= Object.keys(d).length;
                    }
                  }),
                  (r.prototype.queryAll = function (e) {
                    if (!this.selectors.length) return [];
                    var t,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      c = {},
                      f = [],
                      l = this.querySelectorAll(this.selectors.join(", "), e);

                    for (t = 0, r = l.length; t < r; t++) {
                      for (
                        o = l[t], n = 0, i = (a = this.matches(o)).length;
                        n < i;
                        n++
                      ) {
                        c[(u = a[n]).id]
                          ? (s = c[u.id])
                          : ((s = {
                              id: u.id,
                              selector: u.selector,
                              data: u.data,
                              elements: []
                            }),
                            (c[u.id] = s),
                            f.push(s)),
                          s.elements.push(o);
                      }
                    }

                    return f.sort(h);
                  }),
                  (r.prototype.matches = function (e) {
                    if (!e) return [];
                    var t,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      c,
                      f,
                      l,
                      d = this.activeIndexes,
                      p = {},
                      v = [];

                    for (t = 0, i = d.length; t < i; t++) {
                      if ((u = (s = d[t]).element(e)))
                        for (n = 0, o = u.length; n < o; n++) {
                          if ((c = s.map.get(u[n])))
                            for (r = 0, a = c.length; r < a; r++) {
                              !p[(l = (f = c[r]).id)] &&
                                this.matchesSelector(e, f.selector) &&
                                ((p[l] = !0), v.push(f));
                            }
                        }
                    }

                    return v.sort(h);
                  }),
                  n.d(t, "default", function () {
                    return g;
                  });

                var g = (function () {
                    function e() {
                      var t = this;
                      !(function (e, t) {
                        if (!_instanceof(e, t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                        E.add(this),
                        O.add(this),
                        S.add(this),
                        k.add(this),
                        x.add(this),
                        w.set(this, {
                          writable: !0,
                          value: {}
                        }),
                        b.set(this, {
                          writable: !0,
                          value: {}
                        }),
                        j.set(this, {
                          writable: !0,
                          value: function value(e) {
                            var n = m(t, O, W).call(
                              t,
                              y(t, w)[e.type],
                              e.target
                            );
                            if (n.length)
                              for (var r = 0; r < n.length; r++) {
                                for (var i = 0; i < n[r].stack.length; i++) {
                                  m(t, E, F).call(t, e, n[r].delegatedTarget),
                                    n[r].stack[i].data(e);
                                }
                              }
                          }
                        });
                    }

                    var t, n, i;
                    return (
                      (t = e),
                      (n = [
                        {
                          key: "bindAll",
                          value: function value(e, t) {
                            void 0 === t &&
                              (t = Object.getOwnPropertyNames(
                                Object.getPrototypeOf(e)
                              ));

                            for (var n = 0; n < t.length; n++) {
                              e[t[n]] = e[t[n]].bind(e);
                            }
                          }
                        },
                        {
                          key: "on",
                          value: function value(e, t, n) {
                            if ("function" == typeof t && void 0 === n)
                              return (
                                m(this, S, T).call(this, e),
                                void y(this, b)[e].push(t)
                              );
                            if (t.nodeType && 1 === t.nodeType)
                              t.addEventListener(e, n);
                            else {
                              t = m(this, k, M).call(this, t);

                              for (var r = 0; r < t.length; r++) {
                                t[r].addEventListener(e, n);
                              }
                            }
                          }
                        },
                        {
                          key: "delegate",
                          value: function value(e, t, n) {
                            var i = y(this, w)[e];
                            void 0 === i &&
                              ((i = new r()),
                              (y(this, w)[e] = i),
                              document.addEventListener(e, y(this, j), !0)),
                              i.add(t, n);
                          }
                        },
                        {
                          key: "off",
                          value: function value(e, t, n) {
                            var r = y(this, w)[e];
                            if (void 0 !== t) {
                              if ("function" != typeof t) {
                                if (
                                  void 0 !== r &&
                                  (r.remove(t, n), 0 === r.size)
                                )
                                  return (
                                    delete y(this, w)[e],
                                    void document.removeEventListener(
                                      e,
                                      y(this, j)
                                    )
                                  );

                                if (void 0 === t.removeEventListener) {
                                  t = m(this, k, M).call(this, t);

                                  for (var i = 0; i < t.length; i++) {
                                    t[i].removeEventListener(e, n);
                                  }
                                } else t.removeEventListener(e, n);
                              } else {
                                m(this, S, T).call(this, e);

                                for (var o = 0; o < y(this, b)[e].length; o++) {
                                  y(this, b)[e][o] === t &&
                                    y(this, b)[e].splice(o, 1);
                                }
                              }
                            } else y(this, b)[e] = [];
                          }
                        },
                        {
                          key: "emit",
                          value: function value(e) {
                            for (
                              var t = arguments.length,
                                n = new Array(t > 1 ? t - 1 : 0),
                                r = 1;
                              r < t;
                              r++
                            ) {
                              n[r - 1] = arguments[r];
                            }

                            m(this, x, A).call(this, e, n);
                          }
                        }
                      ]) && v(t.prototype, n),
                      i && v(t, i),
                      e
                    );
                  })(),
                  w = new WeakMap(),
                  b = new WeakMap(),
                  x = new WeakSet(),
                  k = new WeakSet(),
                  S = new WeakSet(),
                  j = new WeakMap(),
                  O = new WeakSet(),
                  E = new WeakSet(),
                  A = function A(e, t) {
                    if (y(this, b)[e])
                      for (var n = 0; n < y(this, b)[e].length; n++) {
                        var r;
                        (r = y(this, b)[e])[n].apply(r, p(t));
                      }
                  },
                  M = function M(e) {
                    return "string" == typeof e
                      ? document.querySelectorAll(e)
                      : e;
                  },
                  T = function T(e) {
                    void 0 === y(this, b)[e] && (y(this, b)[e] = []);
                  },
                  W = function W(e, t) {
                    var n = [],
                      r = t;

                    do {
                      if (1 !== r.nodeType) break;
                      var i = e.matches(r);
                      i.length &&
                        n.push({
                          delegatedTarget: r,
                          stack: i
                        });
                    } while ((r = r.parentElement));

                    return n;
                  },
                  F = function F(e, t) {
                    Object.defineProperty(e, "delegatedTarget", {
                      configurable: !0,
                      enumerable: !0,
                      value: t
                    });
                  };
              }
            ]);
          });
          /***/
        },
        /* 52 */

        /***/
        function (module, exports, __webpack_require__) {
          var wellKnownSymbol = __webpack_require__(4);

          var create = __webpack_require__(33);

          var definePropertyModule = __webpack_require__(8);

          var UNSCOPABLES = wellKnownSymbol("unscopables");
          var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
          // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

          if (ArrayPrototype[UNSCOPABLES] == undefined) {
            definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
              configurable: true,
              value: create(null)
            });
          } // add a key to Array.prototype[@@unscopables]

          module.exports = function (key) {
            ArrayPrototype[UNSCOPABLES][key] = true;
          };
          /***/
        },
        /* 53 */

        /***/
        function (module, exports, __webpack_require__) {
          var NATIVE_SYMBOL = __webpack_require__(32);

          module.exports =
            NATIVE_SYMBOL && // eslint-disable-next-line no-undef
            !Symbol.sham && // eslint-disable-next-line no-undef
            _typeof(Symbol.iterator) == "symbol";
          /***/
        },
        /* 54 */

        /***/
        function (module, exports, __webpack_require__) {
          var DESCRIPTORS = __webpack_require__(7);

          var definePropertyModule = __webpack_require__(8);

          var anObject = __webpack_require__(9);

          var objectKeys = __webpack_require__(34); // `Object.defineProperties` method
          // https://tc39.github.io/ecma262/#sec-object.defineproperties

          module.exports = DESCRIPTORS
            ? Object.defineProperties
            : function defineProperties(O, Properties) {
                anObject(O);
                var keys = objectKeys(Properties);
                var length = keys.length;
                var index = 0;
                var key;

                while (length > index) {
                  definePropertyModule.f(
                    O,
                    (key = keys[index++]),
                    Properties[key]
                  );
                }

                return O;
              };
          /***/
        },
        /* 55 */

        /***/
        function (module, exports, __webpack_require__) {
          var toIndexedObject = __webpack_require__(10);

          var toLength = __webpack_require__(36);

          var toAbsoluteIndex = __webpack_require__(56); // `Array.prototype.{ indexOf, includes }` methods implementation

          var createMethod = function createMethod(IS_INCLUDES) {
            return function ($this, el, fromIndex) {
              var O = toIndexedObject($this);
              var length = toLength(O.length);
              var index = toAbsoluteIndex(fromIndex, length);
              var value; // Array#includes uses SameValueZero equality algorithm
              // eslint-disable-next-line no-self-compare

              if (IS_INCLUDES && el != el)
                while (length > index) {
                  value = O[index++]; // eslint-disable-next-line no-self-compare

                  if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
                }
              else
                for (; length > index; index++) {
                  if ((IS_INCLUDES || index in O) && O[index] === el)
                    return IS_INCLUDES || index || 0;
                }
              return !IS_INCLUDES && -1;
            };
          };

          module.exports = {
            // `Array.prototype.includes` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.includes
            includes: createMethod(true),
            // `Array.prototype.indexOf` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
            indexOf: createMethod(false)
          };
          /***/
        },
        /* 56 */

        /***/
        function (module, exports, __webpack_require__) {
          var toInteger = __webpack_require__(37);

          var max = Math.max;
          var min = Math.min; // Helper for a popular repeating case of the spec:
          // Let integer be ? ToInteger(index).
          // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

          module.exports = function (index, length) {
            var integer = toInteger(index);
            return integer < 0
              ? max(integer + length, 0)
              : min(integer, length);
          };
          /***/
        },
        /* 57 */

        /***/
        function (module, exports, __webpack_require__) {
          var getBuiltIn = __webpack_require__(17);

          module.exports = getBuiltIn("document", "documentElement");
          /***/
        },
        /* 58 */

        /***/
        function (module, exports, __webpack_require__) {
          var global = __webpack_require__(1);

          module.exports = global;
          /***/
        },
        /* 59 */

        /***/
        function (module, exports, __webpack_require__) {
          var global = __webpack_require__(1);

          var inspectSource = __webpack_require__(39);

          var WeakMap = global.WeakMap;
          module.exports =
            typeof WeakMap === "function" &&
            /native code/.test(inspectSource(WeakMap));
          /***/
        },
        /* 60 */

        /***/
        function (module, exports, __webpack_require__) {
          "use strict";

          var $ = __webpack_require__(20);

          var createIteratorConstructor = __webpack_require__(65);

          var getPrototypeOf = __webpack_require__(45);

          var setPrototypeOf = __webpack_require__(67);

          var setToStringTag = __webpack_require__(46);

          var createNonEnumerableProperty = __webpack_require__(5);

          var redefine = __webpack_require__(42);

          var wellKnownSymbol = __webpack_require__(4);

          var IS_PURE = __webpack_require__(12);

          var Iterators = __webpack_require__(19);

          var IteratorsCore = __webpack_require__(44);

          var IteratorPrototype = IteratorsCore.IteratorPrototype;
          var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
          var ITERATOR = wellKnownSymbol("iterator");
          var KEYS = "keys";
          var VALUES = "values";
          var ENTRIES = "entries";

          var returnThis = function returnThis() {
            return this;
          };

          module.exports = function (
            Iterable,
            NAME,
            IteratorConstructor,
            next,
            DEFAULT,
            IS_SET,
            FORCED
          ) {
            createIteratorConstructor(IteratorConstructor, NAME, next);

            var getIterationMethod = function getIterationMethod(KIND) {
              if (KIND === DEFAULT && defaultIterator) return defaultIterator;
              if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
                return IterablePrototype[KIND];

              switch (KIND) {
                case KEYS:
                  return function keys() {
                    return new IteratorConstructor(this, KIND);
                  };

                case VALUES:
                  return function values() {
                    return new IteratorConstructor(this, KIND);
                  };

                case ENTRIES:
                  return function entries() {
                    return new IteratorConstructor(this, KIND);
                  };
              }

              return function () {
                return new IteratorConstructor(this);
              };
            };

            var TO_STRING_TAG = NAME + " Iterator";
            var INCORRECT_VALUES_NAME = false;
            var IterablePrototype = Iterable.prototype;
            var nativeIterator =
              IterablePrototype[ITERATOR] ||
              IterablePrototype["@@iterator"] ||
              (DEFAULT && IterablePrototype[DEFAULT]);
            var defaultIterator =
              (!BUGGY_SAFARI_ITERATORS && nativeIterator) ||
              getIterationMethod(DEFAULT);
            var anyNativeIterator =
              NAME == "Array"
                ? IterablePrototype.entries || nativeIterator
                : nativeIterator;
            var CurrentIteratorPrototype, methods, KEY; // fix native

            if (anyNativeIterator) {
              CurrentIteratorPrototype = getPrototypeOf(
                anyNativeIterator.call(new Iterable())
              );

              if (
                IteratorPrototype !== Object.prototype &&
                CurrentIteratorPrototype.next
              ) {
                if (
                  !IS_PURE &&
                  getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype
                ) {
                  if (setPrototypeOf) {
                    setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                  } else if (
                    typeof CurrentIteratorPrototype[ITERATOR] != "function"
                  ) {
                    createNonEnumerableProperty(
                      CurrentIteratorPrototype,
                      ITERATOR,
                      returnThis
                    );
                  }
                } // Set @@toStringTag to native iterators

                setToStringTag(
                  CurrentIteratorPrototype,
                  TO_STRING_TAG,
                  true,
                  true
                );
                if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
              }
            } // fix Array#{values, @@iterator}.name in V8 / FF

            if (
              DEFAULT == VALUES &&
              nativeIterator &&
              nativeIterator.name !== VALUES
            ) {
              INCORRECT_VALUES_NAME = true;

              defaultIterator = function values() {
                return nativeIterator.call(this);
              };
            } // define iterator

            if (
              (!IS_PURE || FORCED) &&
              IterablePrototype[ITERATOR] !== defaultIterator
            ) {
              createNonEnumerableProperty(
                IterablePrototype,
                ITERATOR,
                defaultIterator
              );
            }

            Iterators[NAME] = defaultIterator; // export additional methods

            if (DEFAULT) {
              methods = {
                values: getIterationMethod(VALUES),
                keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                entries: getIterationMethod(ENTRIES)
              };
              if (FORCED)
                for (KEY in methods) {
                  if (
                    BUGGY_SAFARI_ITERATORS ||
                    INCORRECT_VALUES_NAME ||
                    !(KEY in IterablePrototype)
                  ) {
                    redefine(IterablePrototype, KEY, methods[KEY]);
                  }
                }
              else
                $(
                  {
                    target: NAME,
                    proto: true,
                    forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                  },
                  methods
                );
            }

            return methods;
          };
          /***/
        },
        /* 61 */

        /***/
        function (module, exports, __webpack_require__) {
          var has = __webpack_require__(3);

          var ownKeys = __webpack_require__(62);

          var getOwnPropertyDescriptorModule = __webpack_require__(40);

          var definePropertyModule = __webpack_require__(8);

          module.exports = function (target, source) {
            var keys = ownKeys(source);
            var defineProperty = definePropertyModule.f;
            var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (!has(target, key))
                defineProperty(
                  target,
                  key,
                  getOwnPropertyDescriptor(source, key)
                );
            }
          };
          /***/
        },
        /* 62 */

        /***/
        function (module, exports, __webpack_require__) {
          var getBuiltIn = __webpack_require__(17);

          var getOwnPropertyNamesModule = __webpack_require__(63);

          var getOwnPropertySymbolsModule = __webpack_require__(43);

          var anObject = __webpack_require__(9); // all object keys, includes non-enumerable and symbols

          module.exports =
            getBuiltIn("Reflect", "ownKeys") ||
            function ownKeys(it) {
              var keys = getOwnPropertyNamesModule.f(anObject(it));
              var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
              return getOwnPropertySymbols
                ? keys.concat(getOwnPropertySymbols(it))
                : keys;
            };
          /***/
        },
        /* 63 */

        /***/
        function (module, exports, __webpack_require__) {
          var internalObjectKeys = __webpack_require__(35);

          var enumBugKeys = __webpack_require__(16);

          var hiddenKeys = enumBugKeys.concat("length", "prototype"); // `Object.getOwnPropertyNames` method
          // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

          exports.f =
            Object.getOwnPropertyNames ||
            function getOwnPropertyNames(O) {
              return internalObjectKeys(O, hiddenKeys);
            };
          /***/
        },
        /* 64 */

        /***/
        function (module, exports, __webpack_require__) {
          var fails = __webpack_require__(2);

          var replacement = /#|\.prototype\./;

          var isForced = function isForced(feature, detection) {
            var value = data[normalize(feature)];
            return value == POLYFILL
              ? true
              : value == NATIVE
              ? false
              : typeof detection == "function"
              ? fails(detection)
              : !!detection;
          };

          var normalize = (isForced.normalize = function (string) {
            return String(string).replace(replacement, ".").toLowerCase();
          });

          var data = (isForced.data = {});
          var NATIVE = (isForced.NATIVE = "N");
          var POLYFILL = (isForced.POLYFILL = "P");
          module.exports = isForced;
          /***/
        },
        /* 65 */

        /***/
        function (module, exports, __webpack_require__) {
          "use strict";

          var IteratorPrototype = __webpack_require__(44).IteratorPrototype;

          var create = __webpack_require__(33);

          var createPropertyDescriptor = __webpack_require__(11);

          var setToStringTag = __webpack_require__(46);

          var Iterators = __webpack_require__(19);

          var returnThis = function returnThis() {
            return this;
          };

          module.exports = function (IteratorConstructor, NAME, next) {
            var TO_STRING_TAG = NAME + " Iterator";
            IteratorConstructor.prototype = create(IteratorPrototype, {
              next: createPropertyDescriptor(1, next)
            });
            setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
            Iterators[TO_STRING_TAG] = returnThis;
            return IteratorConstructor;
          };
          /***/
        },
        /* 66 */

        /***/
        function (module, exports, __webpack_require__) {
          var fails = __webpack_require__(2);

          module.exports = !fails(function () {
            function F() {
              /* empty */
            }

            F.prototype.constructor = null;
            return Object.getPrototypeOf(new F()) !== F.prototype;
          });
          /***/
        },
        /* 67 */

        /***/
        function (module, exports, __webpack_require__) {
          var anObject = __webpack_require__(9);

          var aPossiblePrototype = __webpack_require__(68); // `Object.setPrototypeOf` method
          // https://tc39.github.io/ecma262/#sec-object.setprototypeof
          // Works with __proto__ only. Old v8 can't work with null proto objects.

          /* eslint-disable no-proto */

          module.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var CORRECT_SETTER = false;
                  var test = {};
                  var setter;

                  try {
                    setter = Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set;
                    setter.call(test, []);
                    CORRECT_SETTER = _instanceof(test, Array);
                  } catch (error) {
                    /* empty */
                  }

                  return function setPrototypeOf(O, proto) {
                    anObject(O);
                    aPossiblePrototype(proto);
                    if (CORRECT_SETTER) setter.call(O, proto);
                    else O.__proto__ = proto;
                    return O;
                  };
                })()
              : undefined);
          /***/
        },
        /* 68 */

        /***/
        function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__(6);

          module.exports = function (it) {
            if (!isObject(it) && it !== null) {
              throw TypeError("Can't set " + String(it) + " as a prototype");
            }

            return it;
          };
          /***/
        },
        /* 69 */

        /***/
        function (module, exports, __webpack_require__) {
          var global = __webpack_require__(1);

          var DOMIterables = __webpack_require__(70);

          var ArrayIteratorMethods = __webpack_require__(22);

          var createNonEnumerableProperty = __webpack_require__(5);

          var wellKnownSymbol = __webpack_require__(4);

          var ITERATOR = wellKnownSymbol("iterator");
          var TO_STRING_TAG = wellKnownSymbol("toStringTag");
          var ArrayValues = ArrayIteratorMethods.values;

          for (var COLLECTION_NAME in DOMIterables) {
            var Collection = global[COLLECTION_NAME];
            var CollectionPrototype = Collection && Collection.prototype;

            if (CollectionPrototype) {
              // some Chrome versions have non-configurable methods on DOMTokenList
              if (CollectionPrototype[ITERATOR] !== ArrayValues)
                try {
                  createNonEnumerableProperty(
                    CollectionPrototype,
                    ITERATOR,
                    ArrayValues
                  );
                } catch (error) {
                  CollectionPrototype[ITERATOR] = ArrayValues;
                }

              if (!CollectionPrototype[TO_STRING_TAG]) {
                createNonEnumerableProperty(
                  CollectionPrototype,
                  TO_STRING_TAG,
                  COLLECTION_NAME
                );
              }

              if (DOMIterables[COLLECTION_NAME])
                for (var METHOD_NAME in ArrayIteratorMethods) {
                  // some Chrome versions have non-configurable methods on DOMTokenList
                  if (
                    CollectionPrototype[METHOD_NAME] !==
                    ArrayIteratorMethods[METHOD_NAME]
                  )
                    try {
                      createNonEnumerableProperty(
                        CollectionPrototype,
                        METHOD_NAME,
                        ArrayIteratorMethods[METHOD_NAME]
                      );
                    } catch (error) {
                      CollectionPrototype[METHOD_NAME] =
                        ArrayIteratorMethods[METHOD_NAME];
                    }
                }
            }
          }
          /***/
        },
        /* 70 */

        /***/
        function (module, exports) {
          // iterable DOM collections
          // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
          module.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
          };
          /***/
        },
        /* 71 */

        /***/
        function (module, exports, __webpack_require__) {
          "use strict";

          var toPrimitive = __webpack_require__(14);

          var definePropertyModule = __webpack_require__(8);

          var createPropertyDescriptor = __webpack_require__(11);

          module.exports = function (object, key, value) {
            var propertyKey = toPrimitive(key);
            if (propertyKey in object)
              definePropertyModule.f(
                object,
                propertyKey,
                createPropertyDescriptor(0, value)
              );
            else object[propertyKey] = value;
          };
          /***/
        },
        /* 72 */

        /***/
        function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__(6);

          var isArray = __webpack_require__(48);

          var wellKnownSymbol = __webpack_require__(4);

          var SPECIES = wellKnownSymbol("species"); // `ArraySpeciesCreate` abstract operation
          // https://tc39.github.io/ecma262/#sec-arrayspeciescreate

          module.exports = function (originalArray, length) {
            var C;

            if (isArray(originalArray)) {
              C = originalArray.constructor; // cross-realm fallback

              if (
                typeof C == "function" &&
                (C === Array || isArray(C.prototype))
              )
                C = undefined;
              else if (isObject(C)) {
                C = C[SPECIES];
                if (C === null) C = undefined;
              }
            }

            return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
          };
          /***/
        },
        /* 73 */

        /***/
        function (module, exports, __webpack_require__) {
          var fails = __webpack_require__(2);

          var wellKnownSymbol = __webpack_require__(4);

          var V8_VERSION = __webpack_require__(49);

          var SPECIES = wellKnownSymbol("species");

          module.exports = function (METHOD_NAME) {
            // We can't use this feature detection in V8 since it causes
            // deoptimization and serious performance degradation
            // https://github.com/zloirock/core-js/issues/677
            return (
              V8_VERSION >= 51 ||
              !fails(function () {
                var array = [];
                var constructor = (array.constructor = {});

                constructor[SPECIES] = function () {
                  return {
                    foo: 1
                  };
                };

                return array[METHOD_NAME](Boolean).foo !== 1;
              })
            );
          };
          /***/
        },
        /* 74 */

        /***/
        function (module, exports, __webpack_require__) {
          var getBuiltIn = __webpack_require__(17);

          module.exports = getBuiltIn("navigator", "userAgent") || "";
          /***/
        },
        /* 75 */

        /***/
        function (module, exports, __webpack_require__) {
          var $ = __webpack_require__(20);

          var assign = __webpack_require__(76); // `Object.assign` method
          // https://tc39.github.io/ecma262/#sec-object.assign

          $(
            {
              target: "Object",
              stat: true,
              forced: Object.assign !== assign
            },
            {
              assign: assign
            }
          );
          /***/
        },
        /* 76 */

        /***/
        function (module, exports, __webpack_require__) {
          "use strict";

          var DESCRIPTORS = __webpack_require__(7);

          var fails = __webpack_require__(2);

          var objectKeys = __webpack_require__(34);

          var getOwnPropertySymbolsModule = __webpack_require__(43);

          var propertyIsEnumerableModule = __webpack_require__(41);

          var toObject = __webpack_require__(21);

          var IndexedObject = __webpack_require__(23);

          var nativeAssign = Object.assign;
          var defineProperty = Object.defineProperty; // `Object.assign` method
          // https://tc39.github.io/ecma262/#sec-object.assign

          module.exports =
            !nativeAssign ||
            fails(function () {
              // should have correct order of operations (Edge bug)
              if (
                DESCRIPTORS &&
                nativeAssign(
                  {
                    b: 1
                  },
                  nativeAssign(
                    defineProperty({}, "a", {
                      enumerable: true,
                      get: function get() {
                        defineProperty(this, "b", {
                          value: 3,
                          enumerable: false
                        });
                      }
                    }),
                    {
                      b: 2
                    }
                  )
                ).b !== 1
              )
                return true; // should work with symbols and should have deterministic property order (V8 bug)

              var A = {};
              var B = {}; // eslint-disable-next-line no-undef

              var symbol = Symbol();
              var alphabet = "abcdefghijklmnopqrst";
              A[symbol] = 7;
              alphabet.split("").forEach(function (chr) {
                B[chr] = chr;
              });
              return (
                nativeAssign({}, A)[symbol] != 7 ||
                objectKeys(nativeAssign({}, B)).join("") != alphabet
              );
            })
              ? function assign(target, source) {
                  // eslint-disable-line no-unused-vars
                  var T = toObject(target);
                  var argumentsLength = arguments.length;
                  var index = 1;
                  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                  var propertyIsEnumerable = propertyIsEnumerableModule.f;

                  while (argumentsLength > index) {
                    var S = IndexedObject(arguments[index++]);
                    var keys = getOwnPropertySymbols
                      ? objectKeys(S).concat(getOwnPropertySymbols(S))
                      : objectKeys(S);
                    var length = keys.length;
                    var j = 0;
                    var key;

                    while (length > j) {
                      key = keys[j++];
                      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key))
                        T[key] = S[key];
                    }
                  }

                  return T;
                }
              : nativeAssign;
          /***/
        },
        /* 77 */

        /***/
        function (module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js

          var es_array_iterator = __webpack_require__(22); // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js

          var web_dom_collections_iterator = __webpack_require__(69); // EXTERNAL MODULE: ./src/Store.js

          var Store = __webpack_require__(0);

          var Store_default = /*#__PURE__*/ __webpack_require__.n(Store); // EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js

          var lodash_debounce = __webpack_require__(50);

          var lodash_debounce_default = /*#__PURE__*/ __webpack_require__.n(
            lodash_debounce
          ); // EXTERNAL MODULE: ./node_modules/@unseenco/e/dist/e.min.js

          var e_min = __webpack_require__(51);

          var e_min_default = /*#__PURE__*/ __webpack_require__.n(e_min); // CONCATENATED MODULE: ./src/E.js

          var E = new e_min_default.a();
          /* harmony default export */

          var src_E = E; // CONCATENATED MODULE: ./src/Events.js

          var Events_Events = /*#__PURE__*/ (function () {
            function Events_Events() {
              _classCallCheck(this, Events_Events);

              var options =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              this.options = options;
              src_E.bindAll(this, ["onRaf"]);
              Store_default.a.events = {
                RAF: 1,
                EXTERNALRAF: 2,
                SCROLL: 3,
                WHEEL: 4,
                COMBOSCROLL: 5,
                RESIZE: 6,
                TOUCHMOUSE: 7
              };
              this.addEvents();
            }

            _createClass(Events_Events, [
              {
                key: "addEvents",
                value: function addEvents() {
                  var _this = this;

                  if (!this.options.disableRaf) {
                    requestAnimationFrame(this.onRaf);
                  }

                  if (!this.options.disableResize) {
                    window.addEventListener(
                      "resize",
                      lodash_debounce_default()(function () {
                        _this.onResize();
                      }, 150)
                    );
                  }

                  this.onScroll();

                  if ("ontouchstart" in document.documentElement) {
                    Store_default.a.isTouch = true; // touch has been detected in the browser, but let's check for a mouse input

                    this.detectMouse();
                  }
                }
              },
              {
                key: "onRaf",
                value: function onRaf() {
                  src_E.emit(Store_default.a.events.RAF);
                  if (this.options.disableRaf) return;
                  requestAnimationFrame(this.onRaf);
                }
              },
              {
                key: "onScroll",
                value: function onScroll() {
                  window.addEventListener(
                    "wheel",
                    function (e) {
                      src_E.emit(Store_default.a.events.WHEEL, {
                        event: e
                      });
                    },
                    {
                      passive: false
                    }
                  );
                  window.addEventListener(
                    "scroll",
                    function (e) {
                      src_E.emit(Store_default.a.events.SCROLL, {
                        event: e
                      });
                    },
                    {
                      passive: true
                    }
                  );
                }
              },
              {
                key: "onResize",
                value: function onResize(windowWidth, windowHeight) {
                  Store_default.a.windowSize.w =
                    windowWidth || window.innerWidth;
                  Store_default.a.windowSize.h =
                    windowHeight || window.innerHeight;
                  src_E.emit(Store_default.a.events.RESIZE);
                }
              },
              {
                key: "detectMouse",
                value: function detectMouse() {
                  window.addEventListener("mousemove", function detectMouse(e) {
                    if (
                      Math.abs(e.movementX) > 0 ||
                      Math.abs(e.movementY) > 0
                    ) {
                      // mouse has moved on touch screen, not just a tap firing mousemove
                      Store_default.a.isTouch = false;
                      src_E.emit(Store_default.a.events.TOUCHMOUSE);
                      window.removeEventListener("mousemove", detectMouse);
                    }
                  });
                }
              }
            ]);

            return Events_Events;
          })(); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js

          var es_array_concat = __webpack_require__(47); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js

          var es_object_assign = __webpack_require__(75); // CONCATENATED MODULE: ./src/Scrollbar.js

          var Scrollbar_Scrollbar = /*#__PURE__*/ (function () {
            function Scrollbar_Scrollbar(smoothScroll) {
              _classCallCheck(this, Scrollbar_Scrollbar);

              src_E.bindAll(this, ["onMouseMove", "onMouseDown", "onMouseUp"]);
              this.smoothScroll = smoothScroll;
              this.addHTML();
              this.el = document.querySelector(
                this.smoothScroll.options.scrollbarEl
              );
              this.handle = document.querySelector(
                this.smoothScroll.options.scrollbarHandleEl
              );
              this.addStyles();
              this.addEvents();
            }

            _createClass(Scrollbar_Scrollbar, [
              {
                key: "addEvents",
                value: function addEvents() {
                  src_E.on("mousedown", this.handle, this.onMouseDown);
                  window.addEventListener("mousemove", this.onMouseMove);
                  window.addEventListener("mouseup", this.onMouseUp);
                }
              },
              {
                key: "onResize",
                value: function onResize() {
                  this.scale =
                    (-this.smoothScroll.maxScroll +
                      Store_default.a.windowSize.h) /
                    Store_default.a.windowSize.h;

                  if (this.scale <= 1) {
                    this.handle.style.height = 0;
                    return;
                  }

                  this.trueSize =
                    Math.min(
                      Store_default.a.windowSize.h /
                        -this.smoothScroll.maxScroll,
                      1
                    ) * Store_default.a.windowSize.h;
                  this.handleHeight = Math.max(this.trueSize, 40);
                  this.handle.style.height = "".concat(this.handleHeight, "px");
                }
              },
              {
                key: "transform",
                value: function transform() {
                  var y =
                    (-this.smoothScroll.scrollPos /
                      -this.smoothScroll.maxScroll) *
                    (Store_default.a.windowSize.h - this.handleHeight);
                  this.handle.style.transform = "translate3d(0, ".concat(
                    y,
                    "px, 0)"
                  );
                }
              },
              {
                key: "show",
                value: function show() {
                  this.el.classList.add("show");
                }
              },
              {
                key: "hide",
                value: function hide() {
                  this.el.classList.remove("show");
                }
              },
              {
                key: "onMouseMove",
                value: function onMouseMove(e) {
                  if (!this.mouseDown) return;
                  var totalHeight =
                    Store_default.a.windowSize.h +
                    (this.trueSize - this.handleHeight);
                  this.smoothScroll.scrollPos =
                    (e.clientY / totalHeight) * this.smoothScroll.maxScroll;
                  this.smoothScroll.syncScroll = true;
                  src_E.emit(
                    Store_default.a.events.COMBOSCROLL,
                    this.smoothScroll.scrollPos
                  );
                }
              },
              {
                key: "onMouseDown",
                value: function onMouseDown() {
                  this.mouseDown = true;
                  Store_default.a.body.style.userSelect = "none";
                  Store_default.a.body.style["-ms-user-select"] = "none";
                  this.el.classList.add("active");
                }
              },
              {
                key: "onMouseUp",
                value: function onMouseUp() {
                  this.mouseDown = false;
                  Store_default.a.body.style.removeProperty("user-select");
                  Store_default.a.body.style.removeProperty("-ms-user-select");
                  this.el.classList.remove("active");
                }
              },
              {
                key: "addHTML",
                value: function addHTML() {
                  if (
                    !!document.querySelector(
                      this.smoothScroll.options.scrollbarEl
                    )
                  )
                    return;
                  var div = document.createElement("div");
                  div.classList.add(
                    this.smoothScroll.options.scrollbarEl.substring(1)
                  );
                  div.innerHTML = '<div class="'.concat(
                    this.smoothScroll.options.scrollbarHandleEl.substring(1),
                    '"><div></div></div>'
                  );
                  document.body.appendChild(div);
                }
              },
              {
                key: "addStyles",
                value: function addStyles() {
                  if (
                    !this.smoothScroll.options.disableNativeScrollbar &&
                    !this.smoothScroll.options.scrollbarStyles
                  )
                    return;
                  var styles = "";

                  if (this.smoothScroll.options.disableNativeScrollbar) {
                    styles +=
                      "html{scrollbar-width:none;}body{-ms-overflow-style:none;}body::-webkit-scrollbar{width:0;height:0;}";
                  }

                  if (this.smoothScroll.options.scrollbarStyles) {
                    styles += ""
                      .concat(
                        this.smoothScroll.options.scrollbarEl,
                        " {position: fixed;top: 0;right: 0;width: 20px;height: 100%;z-index: 900;}.is-touch "
                      )
                      .concat(
                        this.smoothScroll.options.scrollbarEl,
                        " {display: none;}"
                      )
                      .concat(
                        this.smoothScroll.options.scrollbarEl,
                        " > div {padding: 6px 0;width: 10px;height: 0;margin: 0 auto;visibility: hidden;}"
                      )
                      .concat(
                        this.smoothScroll.options.scrollbarEl,
                        " > div > div {width: 100%;height: 100%;border-radius: 10px;opacity: 0.3;background-color: #000000;}"
                      )
                      .concat(
                        this.smoothScroll.options.scrollbarEl,
                        " > div > div:hover {opacity: 0.9;}"
                      )
                      .concat(
                        this.smoothScroll.options.scrollbarEl,
                        ":hover > div, "
                      )
                      .concat(
                        this.smoothScroll.options.scrollbarEl,
                        ".show > div, "
                      )
                      .concat(
                        this.smoothScroll.options.scrollbarEl,
                        ".active > div {visibility: visible;}"
                      )
                      .concat(
                        this.smoothScroll.options.scrollbarEl,
                        ".active > div > div {opacity: 0.9;}"
                      );
                  }

                  var css = document.createElement("style");
                  css.type = "text/css";
                  if (css.styleSheet) css.styleSheet.cssText = styles;
                  else css.appendChild(document.createTextNode(styles));
                  document.getElementsByTagName("head")[0].appendChild(css);
                }
              },
              {
                key: "destroy",
                value: function destroy() {
                  src_E.off("mousedown", this.handle, this.onMouseDown);
                  window.removeEventListener("mousemove", this.onMouseMove);
                  window.removeEventListener("mouseup", this.onMouseUp);
                }
              }
            ]);

            return Scrollbar_Scrollbar;
          })(); // CONCATENATED MODULE: ./src/normalizeWheel.js

          /* eslint-disable */

          /**
           * Copyright (c) 2015, Facebook, Inc.
           * All rights reserved.
           *
           * This source code is licensed under the BSD-style license found in the
           * LICENSE file in the root directory of this source tree. An additional grant
           * of patent rights can be found in the PATENTS file in the same directory.
           *
           * @providesModule normalizeWheel
           * @typechecks
           */
          // Reasonable defaults

          var PIXEL_STEP = 10;
          var LINE_HEIGHT = 40;
          var PAGE_HEIGHT = 800;

          function normalizeWheel(
            /*object*/
            event
          ) {
            /*object*/
            var sX = 0,
              sY = 0,
              // spinX, spinY
              pX = 0,
              pY = 0; // pixelX, pixelY
            // Legacy

            if ("detail" in event) {
              sY = event.detail;
            }

            if ("wheelDelta" in event) {
              sY = -event.wheelDelta / 120;
            }

            if ("wheelDeltaY" in event) {
              sY = -event.wheelDeltaY / 120;
            }

            if ("wheelDeltaX" in event) {
              sX = -event.wheelDeltaX / 120;
            } // side scrolling on FF with DOMMouseScroll

            if ("axis" in event && event.axis === event.HORIZONTAL_AXIS) {
              sX = sY;
              sY = 0;
            }

            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;

            if ("deltaY" in event) {
              pY = event.deltaY;
            }

            if ("deltaX" in event) {
              pX = event.deltaX;
            }

            if ((pX || pY) && event.deltaMode) {
              if (event.deltaMode == 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
              } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
              }
            } // Fall-back if spin cannot be determined

            if (pX && !sX) {
              sX = pX < 1 ? -1 : 1;
            }

            if (pY && !sY) {
              sY = pY < 1 ? -1 : 1;
            }

            return {
              spinX: sX,
              spinY: sY,
              pixelX: pX,
              pixelY: pY
            };
          }
          /* harmony default export */

          var src_normalizeWheel = normalizeWheel; // CONCATENATED MODULE: ./src/Scroll.js

          var Scroll_Scroll = /*#__PURE__*/ (function () {
            function Scroll_Scroll() {
              var _this2 = this;

              _classCallCheck(this, Scroll_Scroll);

              var options =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              this.options = options;
              this.scrollbarCheck = this.options.customScrollbar;
              src_E.bindAll(this, ["onScroll", "onRAF", "onResize"]);
              this.scrollContainer = document.querySelector(
                this.options.element
              );
              var possibleScrollTargets = this.scrollContainer.querySelectorAll(
                this.options.innerElement
              );
              this.scrollTargets = possibleScrollTargets.length
                ? possibleScrollTargets
                : [this.scrollContainer.firstElementChild];
              this.scrollTargetsLength = this.scrollTargets.length;
              this.scrollPos = this.smoothScrollPos = this.prevScrollPos = this.maxScroll = 0;
              this.scrolling = false;
              this.syncScroll = false;
              this.deltaY = 0;
              this.wheeling = false;
              this.wheel = true;
              this.ease = Store_default.a.isTouch
                ? this.options.touchEase
                : this.options.ease;

              if (!Store_default.a.isTouch || !this.options.disableOnTouch) {
                if (Store_default.a.isTouch)
                  this.options.customScrollbar = false;
                this.smoothSetup();
              } else {
                this.options.customScrollbar = false;
              } // enable smooth scroll if mouse is detected

              src_E.on(Store_default.a.events.TOUCHMOUSE, function () {
                if (!_this2.options.disableOnTouch) return;
                _this2.options.customScrollbar = _this2.scrollbarCheck;

                _this2.smoothSetup();

                _this2.onResize();
              });
              document.addEventListener("mouseleave", function () {
                window.scrollTo(0, -_this2.scrollPos);
              });
            }

            _createClass(Scroll_Scroll, [
              {
                key: "smoothSetup",
                value: function smoothSetup() {
                  Object.assign(this.scrollContainer.style, {
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    contain: "content"
                  });

                  if (this.options.customScrollbar) {
                    this.scrollbar = new Scrollbar_Scrollbar(this);
                  }

                  src_E.on(Store_default.a.events.RAF, this.onRAF);
                  src_E.on(Store_default.a.events.RESIZE, this.onResize);
                }
              },
              {
                key: "onScroll",
                value: function onScroll(_ref) {
                  var event = _ref.event;

                  if (!this.scrolling) {
                    this.options.customScrollbar && this.scrollbar.show();
                    this.toggleIframes();
                    this.scrolling = true;
                  }

                  if (!Store_default.a.isTouch && event.type === "wheel") {
                    event.preventDefault();
                    this.deltaY = src_normalizeWheel(event).pixelY;
                    this.wheeling = true;
                    this.syncScroll = true;
                    this.wheel = true;
                    return;
                  } else {
                    this.scrollPos = -window.scrollY;
                    this.wheel = false;

                    if (
                      Store_default.a.isTouch &&
                      this.options.disableOnTouch
                    ) {
                      this.smoothScrollPos = this.scrollPos;
                    }

                    src_E.emit(
                      Store_default.a.events.COMBOSCROLL,
                      this.scrollPos
                    );
                  }
                }
              },
              {
                key: "onRAF",
                value: function onRAF() {
                  if (!this.enabled) return;

                  if (this.wheeling) {
                    this.scrollPos += this.deltaY * -1;
                    this.wheeling = false;
                    src_E.emit(
                      Store_default.a.events.COMBOSCROLL,
                      this.scrollPos
                    );
                  }

                  this.clamp();

                  if (Math.abs(this.scrollPos - this.smoothScrollPos) < 0.5) {
                    this.smoothScrollPos = this.scrollPos;

                    if (this.syncScroll) {
                      window.scrollTo(0, -this.scrollPos);
                      this.syncScroll = false;
                    }

                    if (this.scrolling) {
                      this.options.customScrollbar && this.scrollbar.hide();
                      this.toggleIframes(true);
                      this.scrolling = false;
                    }
                  } else {
                    this.smoothScrollPos +=
                      (this.scrollPos - this.smoothScrollPos) * this.ease;
                  }

                  var x = this.horizontalScroll ? this.smoothScrollPos : 0;
                  var y = this.horizontalScroll ? 0 : this.smoothScrollPos;
                  this.applyTransform(x, y);
                  this.options.customScrollbar && this.scrollbar.transform();
                  src_E.emit(Store_default.a.events.EXTERNALRAF, {
                    scrollPos: this.scrollPos,
                    smoothScrollPos: this.smoothScrollPos
                  });
                }
              },
              {
                key: "applyTransform",
                value: function applyTransform(x, y) {
                  for (var i = 0; i < this.scrollTargetsLength; i++) {
                    this.scrollTargets[
                      i
                    ].style.transform = "translate3d("
                      .concat(x, "px, ")
                      .concat(y, "px, 0px)");
                  }
                }
              },
              {
                key: "enable",
                value: function enable() {
                  var restore =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : false;
                  var reset =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : false;
                  var newTargets =
                    arguments.length > 2 && arguments[2] !== undefined
                      ? arguments[2]
                      : false;
                  var horizontalScroll =
                    arguments.length > 3 && arguments[3] !== undefined
                      ? arguments[3]
                      : false;
                  if (this.enabled) return;
                  this.enabled = true;
                  this.horizontalScroll = horizontalScroll;

                  if (newTargets) {
                    this.scrollTargets = newTargets.length
                      ? newTargets
                      : [newTargets];
                    this.scrollTargetsLength = this.scrollTargets.length;
                  }

                  this.iframes = this.scrollContainer.querySelectorAll(
                    "iframe"
                  );

                  if (Store_default.a.isTouch && this.options.disableOnTouch) {
                    Store_default.a.body.style.removeProperty("height");

                    if (reset) {
                      window.scrollTo(0, 0);
                    }
                  } else {
                    if (reset) {
                      this.scrollPos = this.smoothScrollPos = 0;
                      this.applyTransform(0, 0);
                    }

                    this.onResize();
                  }

                  if (restore) {
                    this.scrollPos = this.prevScrollPos;
                    window.scrollTo(0, -this.prevScrollPos);
                  }

                  src_E.on(Store_default.a.events.WHEEL, this.onScroll);
                  src_E.on(Store_default.a.events.SCROLL, this.onScroll);
                }
              },
              {
                key: "disable",
                value: function disable() {
                  if (!this.enabled) return;
                  this.enabled = false;
                  src_E.off(Store_default.a.events.WHEEL, this.onScroll);
                  src_E.off(Store_default.a.events.SCROLL, this.onScroll);
                  this.prevScrollPos = this.scrollPos;
                  Store_default.a.body.style.height = "0px";
                }
              },
              {
                key: "clamp",
                value: function clamp() {
                  this.scrollPos = Math.max(
                    Math.min(this.scrollPos, 0),
                    this.maxScroll
                  );
                }
              },
              {
                key: "scrollTo",
                value: function scrollTo(y) {
                  var emitEvent =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : true;
                  this.scrollPos = y;
                  this.clamp();
                  this.syncScroll = true;
                  if (emitEvent)
                    src_E.emit(
                      Store_default.a.events.COMBOSCROLL,
                      this.scrollPos
                    );
                }
              },
              {
                key: "onResize",
                value: function onResize() {
                  if (this.scrollTargetsLength > 1) {
                    var lastTarget = this.scrollTargets[
                      this.scrollTargetsLength - 1
                    ];
                    var compStyle = window.getComputedStyle(lastTarget);
                    var marginOffset = parseFloat(
                      this.horizontalScroll
                        ? compStyle.marginRight
                        : compStyle.marginBottom
                    );
                    var bcr = lastTarget.getBoundingClientRect();
                    var endPosition = this.horizontalScroll
                      ? bcr.right
                      : bcr.bottom;
                    this.scrollLength =
                      endPosition + marginOffset - this.smoothScrollPos;
                  } else {
                    var _bcr = this.scrollTargets[0].getBoundingClientRect();

                    this.scrollLength = this.horizontalScroll
                      ? _bcr.width
                      : _bcr.height;
                  }

                  var windowSize = this.horizontalScroll
                    ? Store_default.a.windowSize.w
                    : Store_default.a.windowSize.h;
                  this.maxScroll =
                    this.scrollLength > windowSize
                      ? -(this.scrollLength - windowSize)
                      : 0;
                  Store_default.a.body.style.height = this.scrollLength + "px";
                  this.options.customScrollbar && this.scrollbar.onResize();
                }
              },
              {
                key: "toggleIframes",
                value: function toggleIframes(enable) {
                  for (var i = 0; i < this.iframes.length; i++) {
                    this.iframes[i].style.pointerEvents = enable
                      ? "auto"
                      : "none";
                  }
                }
              }
            ]);

            return Scroll_Scroll;
          })(); // CONCATENATED MODULE: ./src/index.js

          /* harmony export (binding) */

          __webpack_require__.d(__webpack_exports__, "default", function () {
            return src_ASScroll;
          });

          var src_ASScroll = /*#__PURE__*/ (function () {
            function src_ASScroll() {
              _classCallCheck(this, src_ASScroll);

              var _ref =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {},
                _ref$element = _ref.element,
                element =
                  _ref$element === void 0
                    ? ".asscroll-container"
                    : _ref$element,
                _ref$innerElement = _ref.innerElement,
                innerElement =
                  _ref$innerElement === void 0
                    ? "[data-asscroll]"
                    : _ref$innerElement,
                _ref$ease = _ref.ease,
                ease = _ref$ease === void 0 ? 0.075 : _ref$ease,
                _ref$touchEase = _ref.touchEase,
                touchEase = _ref$touchEase === void 0 ? 1 : _ref$touchEase,
                _ref$customScrollbar = _ref.customScrollbar,
                customScrollbar =
                  _ref$customScrollbar === void 0 ? true : _ref$customScrollbar,
                _ref$scrollbarEl = _ref.scrollbarEl,
                scrollbarEl =
                  _ref$scrollbarEl === void 0
                    ? ".asscrollbar"
                    : _ref$scrollbarEl,
                _ref$scrollbarHandleE = _ref.scrollbarHandleEl,
                scrollbarHandleEl =
                  _ref$scrollbarHandleE === void 0
                    ? ".asscrollbar__handle"
                    : _ref$scrollbarHandleE,
                _ref$scrollbarStyles = _ref.scrollbarStyles,
                scrollbarStyles =
                  _ref$scrollbarStyles === void 0 ? true : _ref$scrollbarStyles,
                _ref$disableNativeScr = _ref.disableNativeScrollbar,
                disableNativeScrollbar =
                  _ref$disableNativeScr === void 0
                    ? true
                    : _ref$disableNativeScr,
                _ref$disableOnTouch = _ref.disableOnTouch,
                disableOnTouch =
                  _ref$disableOnTouch === void 0 ? false : _ref$disableOnTouch,
                _ref$disableRaf = _ref.disableRaf,
                disableRaf =
                  _ref$disableRaf === void 0 ? false : _ref$disableRaf,
                _ref$disableResize = _ref.disableResize,
                disableResize =
                  _ref$disableResize === void 0 ? false : _ref$disableResize;

              src_E.bindAll(this, [
                "enable",
                "disable",
                "on",
                "scrollTo",
                "onRaf",
                "onResize"
              ]);
              this.Events = new Events_Events({
                disableRaf: disableRaf,
                disableResize: disableResize
              });
              this.Scroll = new Scroll_Scroll({
                element: element,
                innerElement: innerElement,
                ease: ease,
                touchEase: touchEase,
                customScrollbar: customScrollbar,
                scrollbarEl: scrollbarEl,
                scrollbarHandleEl: scrollbarHandleEl,
                scrollbarStyles: scrollbarStyles,
                disableNativeScrollbar: disableNativeScrollbar,
                disableOnTouch: disableOnTouch
              });
            }

            _createClass(src_ASScroll, [
              {
                key: "enable",
                value: function enable() {
                  var _this$Scroll;

                  (_this$Scroll = this.Scroll).enable.apply(
                    _this$Scroll,
                    arguments
                  );
                }
              },
              {
                key: "disable",
                value: function disable() {
                  this.Scroll.disable();
                }
              },
              {
                key: "onRaf",
                value: function onRaf() {
                  this.Events.onRaf();
                }
              },
              {
                key: "onResize",
                value: function onResize() {
                  var _this$Events;

                  (_this$Events = this.Events).onResize.apply(
                    _this$Events,
                    arguments
                  );
                }
              },
              {
                key: "on",
                value: function on(eventName, cb) {
                  if (eventName === "scroll") {
                    src_E.on(Store_default.a.events.COMBOSCROLL, cb);
                  }

                  if (eventName === "raf") {
                    src_E.on(Store_default.a.events.EXTERNALRAF, cb);
                  }
                }
              },
              {
                key: "off",
                value: function off(eventName, cb) {
                  if (eventName === "scroll") {
                    src_E.off(Store_default.a.events.COMBOSCROLL, cb);
                  }

                  if (eventName === "raf") {
                    src_E.off(Store_default.a.events.EXTERNALRAF, cb);
                  }
                }
              },
              {
                key: "scrollTo",
                value: function scrollTo(y) {
                  var emitEvent =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : true;
                  this.Scroll.scrollTo(-y, emitEvent);
                }
              },
              {
                key: "scrollPos",
                get: function get() {
                  return this.Scroll.scrollPos;
                }
              },
              {
                key: "smoothScrollPos",
                get: function get() {
                  return this.Scroll.smoothScrollPos;
                }
              }
            ]);

            return src_ASScroll;
          })();
          /***/
        }
        /******/
      ]
    )
  );
});

// --- Flickity 2.2.1 ---
/*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

!function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,d=void 0===n?function(){}:function(t){n.error(t)};function s(h,s,c){(c=c||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[h]=function(t){return"string"==typeof t?function(t,o,r){var a,l="$()."+h+'("'+o+'")';return t.each(function(t,e){var i=c.data(e,h);if(i){var n=i[o];if(n&&"_"!=o.charAt(0)){var s=n.apply(i,r);a=void 0===a?s:a}else d(l+" is not a valid method")}else d(h+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:t}(this,t,i.call(arguments,1)):(function(t,n){t.each(function(t,e){var i=c.data(e,h);i?(i.option(n),i._init()):(i=new s(e,n),c.data(e,h,i))})}(this,t),this)},o(c))}function o(t){!t||t&&t.bridget||(t.bridget=s)}return o(e||t.jQuery),s}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function m(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var S,C=!1;function x(t){if(function(){if(!C){C=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=E(t);S=200==Math.round(m(i.width)),x.isBoxSizeOuter=S,e.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=E(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<b;e++){t[y[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var n=i.isBorderBox="border-box"==e.boxSizing,s=0;s<b;s++){var o=y[s],r=e[o],a=parseFloat(r);i[o]=isNaN(a)?0:a}var l=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,u=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,p=n&&S,g=m(e.width);!1!==g&&(i.width=g+(p?0:l+u));var v=m(e.height);return!1!==v&&(i.height=v+(p?0:h+f)),i.innerWidth=i.width-(l+u),i.innerHeight=i.height-(h+f),i.outerWidth=i.width+c,i.outerHeight=i.height+d,i}}return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,o){var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,o(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){o(t,n)&&s.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)s.push(e[i])}else s.push(t)}),s},c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,i=this;this[o]=setTimeout(function(){s.apply(i,e),delete i[o]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=h.console;return c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l),s="data-"+t,e=document.querySelectorAll("["+s+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),o=s+"-options",r=h.jQuery;n.forEach(function(e){var t,i=e.getAttribute(s)||e.getAttribute(o);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+s+" on "+e.className+": "+t))}var n=new a(e,t);r&&r.data(e,l,n)})})},c}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=i(e,e.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=i(e,e.fizzyUIUtils))}(window,function(t,e){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&1<this.cells.length&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=0<e?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}),function(r,a){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,o){return a(r,t,e,i,n,s,o)});else if("object"==typeof module&&module.exports)module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var t=r.Flickity;r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}}(window,function(n,t,e,a,i,r,s){var l=n.jQuery,o=n.getComputedStyle,h=n.console;function c(t,e){for(t=a.makeArray(t);t.length;)e.appendChild(t.shift())}var d=0,u={};function f(t,e){var i=a.getQueryElement(t);if(i){if(this.element=i,this.element.flickityGUID){var n=u[this.element.flickityGUID];return n.option(e),n}l&&(this.$element=l(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e),this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},f.createMethods=[];var p=f.prototype;a.extend(p,t.prototype),p._create=function(){var t=this.guid=++d;for(var e in this.element.flickityGUID=t,(u[t]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),this.options.on){var i=this.options.on[e];this.on(e,i)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){a.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new i(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(0<t){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var n=new r(this);this.slides.push(n);var s="left"==this.originSide?"marginRight":"marginLeft",o=this._getCanCellFit();this.cells.forEach(function(t,e){if(n.cells.length){var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);o.call(this,e,i)||(n.updateTarget(),n=new r(this),this.slides.push(n)),n.addCell(t)}else n.addCell(t)},this),n.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=e(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];0<t;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),l&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var o=l.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=a.modulo(t,this.slides.length)),this.slides[t])){var n=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=n&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&1<e))return t;var i=a.modulo(t,e),n=Math.abs(i-this.selectedIndex),s=Math.abs(i+e-this.selectedIndex),o=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&s<n?t+=e:!this.isDragSelect&&o<n&&(t-=e),t<0?this.x-=this.slideableWidth:e<=t&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),(this.selectedSlide=t).select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t)if(this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=a.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getCell(t);e&&i.push(e)},this),i},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=a.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(i<=1+2*t)return this.getCellElements();for(var n=[],s=e-t;s<=e+t;s++){var o=this.options.wrapAround?a.modulo(s,i):s,r=this.slides[o];r&&(n=n.concat(r.getCellElements()))}return n},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#\.]?[\d\/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=o(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:!0}),n.pageYOffset!=t&&n.scrollTo(n.pageXOffset,t)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},a.extend(p,s),f.data=function(t){var e=(t=a.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},a.htmlInit(f,"flickity"),l&&l.bridget&&l.bridget("flickity",f),f.setJQuery=function(t){l=t},f.Cell=i,f.Slide=r,f}),function(e,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.Unipointer=i(e,e.EvEmitter)}(window,function(s,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(t,e){var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n="mousedown";s.PointerEvent?n="pointerdown":"ontouchstart"in s&&(n="touchstart"),t[i](n,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(t){if(t){var e=n[t.type];e.forEach(function(t){s.addEventListener(t,this)},this),this._boundPointerEvents=e}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},e.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},e}),function(e,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("unipointer")):e.Unidragger=i(e,e.Unipointer)}(window,function(o,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(t){for(var e=(t=void 0===t||t)?"addEventListener":"removeEventListener",i=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t),s[e]("click",this),o.PointerEvent&&(s.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(t){var e=s[t.target.nodeName],i=r[t.target.type],n=!e||i;return n||this._pointerReset(),n},i.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},i.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},i._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},i.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},i._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},i._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},i.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},i._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},i.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},i._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},i.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},i.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},i._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},e.getPointerPoint=t.getPointerPoint,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(i,t,e,a){a.extend(t.defaults,{draggable:">1",dragThreshold:3}),t.createMethods.push("_createDrag");var n=t.prototype;a.extend(n,e.prototype),n._touchActionValue="pan-y";var s="createTouch"in document,o=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),s&&!o&&(i.addEventListener("touchmove",function(){}),o=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n.pointerDown=function(t,e){this.isDraggable?this.okayPointerDown(t)&&(this._pointerDownPreventDefault(t),this.pointerDownFocus(t),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),i.addEventListener("scroll",this),this._pointerDownDefault(t,e)):this._pointerDownDefault(t,e)},n._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:i.pageXOffset,y:i.pageYOffset}}return n.pointerDownFocus=function(t){r[t.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=r[t.target.nodeName];e||i||n||t.preventDefault()},n.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},n.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(t,e){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",t,[e]))},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},n.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=o<s?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},n.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},n.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},n._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},n.getSlideDistance=function(t,e){var i=this.slides.length,n=this.options.wrapAround&&1<i,s=n?a.modulo(e,i):e,o=this.slides[s];if(!o)return null;var r=n?this.slideableWidth*Math.floor(e/i):0;return t-(o.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return 0<t&&0<e?1:t<0&&e<0?-1:0},n.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},n.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(3<Math.abs(e)||3<Math.abs(i))&&this._pointerDone()},t}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}(o.prototype=Object.create(i.prototype))._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(s,"path"),i=function(t){return"string"!=typeof t?"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z":t}(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&1<t.length)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e;this[this.parent.selectedIndex==i?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}(s.prototype=Object.create(i.prototype))._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;0<t?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,n){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)}):"object"==typeof module&&module.exports?module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}(n.prototype=Object.create(t.prototype)).play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,n){var i=e.prototype;return i.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s=function(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}(i),o=e==n;if(o)this.slider.appendChild(s);else{var r=this.cells[e].element;this.slider.insertBefore(s,r)}if(0===e)this.cells=i.concat(this.cells);else if(o)this.cells=this.cells.concat(i);else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i),this.cellChange(e,!0)}},i.append=function(t){this.insert(t,this.cells.length)},i.prepend=function(t){this.insert(t,0)},i.remove=function(t){var e=this.getCells(t);if(e&&e.length){var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i),n.removeFrom(this.cells,t)},this),this.cellChange(i,!0)}},i.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},i.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,o){"use strict";e.createMethods.push("_createLazyload");var i=e.prototype;function s(t,e){this.img=t,this.flickity=e,this.load()}return i._createLazyload=function(){this.on("select",this.lazyLoad)},i.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[];i.forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),i=t.getAttribute("data-flickity-lazyload-src"),n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n)return[t]}var s=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return o.makeArray(s)}(t);n=n.concat(e)}),n.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(n,s){n.createMethods.push("_createAsNavFor");var t=n.prototype;return t._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},t.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(e&&e!=this){this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()},e.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},t.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(e){var i=e[0],n=this.navCompanion.cells.indexOf(i),s=n+e.length-1,o=Math.floor(function(t,e,i){return(e-t)*i+t}(n,s,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var r=this.cells.slice(n,1+s);this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},t.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})},t.activateAsNavFor=function(){this.navCompanionSelect(!0)},t.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},t.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},t.deactivateAsNavFor=function(){this.removeNavSelectedElements()},t.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(e,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){var s=e.jQuery,o=e.console;function r(t,e){for(var i in e)t[i]=e[i];return t}var a=Array.prototype.slice;function l(t,e,i){if(!(this instanceof l))return new l(t,e,i);var n=t;"string"==typeof t&&(n=document.querySelectorAll(t)),n?(this.elements=function(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?a.call(t):[t]}(n),this.options=r({},this.options),"function"==typeof e?i=e:r(this.options,e),i&&this.on("always",i),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(n||t))}(l.prototype=Object.create(t.prototype)).options={},l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},l.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&h[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var h={1:!0,9:!0,11:!0};function i(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return l.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},l.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},l.prototype.addBackground=function(t,e){var i=new n(t,e);this.images.push(i)},l.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},l.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+i,t,e)},l.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(i.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},l.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((s=t).fn.imagesLoaded=function(t,e){return new l(this,t,e).jqDeferred.promise(s(this))})},l.makeJQueryPlugin(),l}),function(i,n){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("flickity"),require("imagesloaded")):i.Flickity=n(i,i.Flickity,i.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var n=this;i(this.slider).on("progress",function(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element),n.options.freeScroll||n.positionSliderAtSelected()})}},e});
// --- can-autoplay ---
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.canAutoplay = factory());
}(this, (function () { 'use strict';

/* global Blob */
// This file is generated. Do not edit this file directly.
// Command: 'npm run generate' should be used to update the content.

/**
 * @type {Blob}
 */
var AUDIO = new Blob([new Uint8Array([255, 227, 24, 196, 0, 0, 0, 3, 72, 1, 64, 0, 0, 4, 132, 16, 31, 227, 192, 225, 76, 255, 67, 12, 255, 221, 27, 255, 228, 97, 73, 63, 255, 195, 131, 69, 192, 232, 223, 255, 255, 207, 102, 239, 255, 255, 255, 101, 158, 206, 70, 20, 59, 255, 254, 95, 70, 149, 66, 4, 16, 128, 0, 2, 2, 32, 240, 138, 255, 36, 106, 183, 255, 227, 24, 196, 59, 11, 34, 62, 80, 49, 135, 40, 0, 253, 29, 191, 209, 200, 141, 71, 7, 255, 252, 152, 74, 15, 130, 33, 185, 6, 63, 255, 252, 195, 70, 203, 86, 53, 15, 255, 255, 247, 103, 76, 121, 64, 32, 47, 255, 34, 227, 194, 209, 138, 76, 65, 77, 69, 51, 46, 57, 55, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 255, 227, 24, 196, 73, 13, 153, 210, 100, 81, 135, 56, 0, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170])], { type: 'audio/mpeg' });

/**
 * @type {Blob}
 */
var VIDEO = new Blob([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], { type: 'video/mp4' });

/* global URL */
function setupDefaultValues(options) {
  return Object.assign({
    muted: false,
    timeout: 250,
    inline: false
  }, options);
}

function startPlayback(_ref, elementCallback) {
  var muted = _ref.muted,
      timeout = _ref.timeout,
      inline = _ref.inline;

  var _elementCallback = elementCallback(),
      element = _elementCallback.element,
      source = _elementCallback.source;



  var playResult = void 0;
  var timeoutId = void 0;
  var sendOutput = void 0;

  element.muted = muted;
  if (muted === true) {
    element.setAttribute('muted', 'muted');
  }
  // indicates that the video is to be played "inline",
  // that is within the element's playback area.
  if (inline === true) {
    element.setAttribute('playsinline', 'playsinline');
  }

  element.src = source;
  element.style.position = 'fixed';
  document.querySelector('body').appendChild(element); 

  return new Promise(function (resolve) {
    playResult = element.play();
    timeoutId = setTimeout(function () {
      sendOutput(false, new Error('Timeout ' + timeout + ' ms has been reached'));
    }, timeout);
    sendOutput = function sendOutput(result) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      element.remove();
      clearTimeout(timeoutId);
      resolve({ result: result, error: error });
    };

    if (playResult !== undefined) {
      playResult.then(function () {
        return sendOutput(true);
      }).catch(function (playError) {
        return sendOutput(false, playError);
      });
    } else {
      sendOutput(true);
    }
  });
}

//
// API
//

function video(options) {
  options = setupDefaultValues(options);
  return startPlayback(options, function () {
    return {
      element: document.createElement('video'),
      source: URL.createObjectURL(VIDEO)
    };
  });
}

function audio(options) {
  options = setupDefaultValues(options);
  return startPlayback(options, function () {
    return {
      element: document.createElement('audio'),
      source: URL.createObjectURL(AUDIO)
    };
  });
}

var index = { audio: audio, video: video };

return index;

})));
// --- lazysizes ---
/*! lazysizes - v5.2.2 */

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,a=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,l=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],i={},G=Array.prototype.forEach,J=function(e,t){if(!i[t]){i[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return i[t].test(e[$]("class")||"")&&i[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var i;if(i=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(i," "))}},V=function(t,i,e){var a=e?P:"removeEventListener";if(e){V(t,i)}r.forEach(function(e){t[a](e,i)})},X=function(e,t,i,a,r){var n=D.createEvent("Event");if(!i){i={}}i.instance=k;n.initEvent(t,!a,!r);n.detail=i;e.dispatchEvent(n);return n},Y=function(e,t){var i;if(!a&&(i=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}i({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,i){i=i||e.offsetWidth;while(i<H.minSize&&t&&!e._lazysizesWidth){i=t.offsetWidth;t=t.parentNode}return i},ee=function(){var i,a;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;i=true;a=false;while(e.length){e.shift()()}i=false};var e=function(e,t){if(i&&!t){e.apply(this,arguments)}else{n.push(e);if(!a){a=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(i,e){return e?function(){ee(i)}:function(){var e=this;var t=arguments;ee(function(){i.apply(e,t)})}},ie=function(e){var i;var a=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){i=false;a=f.now();e()};var s=l&&n>49?function(){l(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(i){return}i=true;t=r-(f.now()-a);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ae=function(e){var t,i;var a=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-i;if(e<a){I(n,a-e)}else{(l||r)(r)}};return function(){i=f.now();if(!t){t=I(n,a)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var N=0;var M=-1;var x=function(e){N--;if(!e||N<0||!e.target){N=0}};var W=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var S=function(e,t){var i;var a=e;var r=W(e);g-=t;b+=t;p-=t;C+=t;while(r&&(a=a.offsetParent)&&a!=D.body&&a!=O){r=(Z(a,"opacity")||1)>0;if(r&&Z(a,"overflow")!="visible"){i=a.getBoundingClientRect();r=C>i.left&&p<i.right&&b>i.top-1&&g<i.bottom+1}}return r};var t=function(){var e,t,i,a,r,n,s,l,o,u,f,c;var d=k.elements;if((h=H.loadMode)&&N<8&&(e=d.length)){t=0;M++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(l=d[t][$]("data-expand"))||!(n=l*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&N<1&&M>2&&h>2&&!D.hidden){w=f;M=0}else if(h>1&&M>1&&N<6){w=u}else{w=_}}if(o!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;o=n}i=d[t].getBoundingClientRect();if((b=i.bottom)>=s&&(g=i.top)<=z&&(C=i.right)>=s*c&&(p=i.left)<=y&&(b||C||p||g)&&(H.loadHidden||W(d[t]))&&(m&&N<3&&!l&&(h<3||M<4)||S(d[t],n))){R(d[t]);r=true;if(N>9){break}}else if(!r&&m&&!a&&N<4&&M<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!l&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){a=v[0]||d[t]}}if(a&&!r){R(a)}}};var i=ie(t);var B=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}x(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,L);X(t,"lazyloaded")};var a=te(B);var L=function(e){a({target:e.target})};var T=function(t,i){try{t.contentWindow.location.replace(i)}catch(e){t.src=i}};var F=function(e){var t;var i=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(i){e.setAttribute("srcset",i)}};var s=te(function(t,e,i,a,r){var n,s,l,o,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(a){if(i){K(t,H.autosizesClass)}else{t.setAttribute("sizes",a)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){l=t.parentNode;o=l&&j.test(l.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||o);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(x,2500);V(t,L,true)}if(o){G.call(l.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!o){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||o)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,"ls-is-cached")}B(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){N--}},true)});var R=function(e){if(e._lazyRace){return}var t;var i=n.test(e.nodeName);var a=i&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=a=="auto";if((r||!m)&&i&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;N++;s(e,t,r,a,i)};var r=ae(function(){H.loadMode=3;i()});var l=function(){if(H.loadMode==3){H.loadMode=2}r()};var o=function(){if(m){return}if(f.now()-e<999){I(o,999);return}m=true;H.loadMode=3;i();q("scroll",l,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",i,true);q("resize",i,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(i).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",i,true);O[P]("DOMAttrModified",i,true);setInterval(i,999)}q("hashchange",i,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,i,true)});if(/d$|^c/.test(D.readyState)){o()}else{q("load",o);D[P]("DOMContentLoaded",i);I(o,2e4)}if(k.elements.length){t();ee._lsFlush()}else{i()}},checkElems:i,unveil:R,_aLSL:l}}(),re=function(){var i;var n=te(function(e,t,i,a){var r,n,s;e._lazysizesWidth=a;a+="px";e.setAttribute("sizes",a);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",a)}}if(!i.detail.dataAttr){Y(e,i.detail)}});var a=function(e,t,i){var a;var r=e.parentNode;if(r){i=s(e,r,i);a=X(e,"lazybeforesizes",{width:i,dataAttr:!!t});if(!a.defaultPrevented){i=a.detail.width;if(i&&i!==e._lazysizesWidth){n(e,r,a,i)}}}};var e=function(){var e;var t=i.length;if(t){e=0;for(;e<t;e++){a(i[e])}}};var t=ae(e);return{_:function(){i=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:a}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});

// ============================================
// CUSTOM CODE - Framework
// ============================================

window.debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

window.addEventListener("pageshow", function(event) {
 var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    window.location.reload();
  }
});

KROWN = {};
KROWN.Games = {};
KROWN.Colors = {
	black: '#161616',
	white: "#f4f4f4",
	blue: '#0000ff'
};
KROWN.Dot = document.getElementById('dot');
KROWN.DotWheel = null;

KROWN.General = {

	_initLinks: function() {

		document.querySelectorAll('.page-link').forEach(function($link){
			if ( $link.classList.contains('blog-post__url') ) {
				$link.addEventListener('mouseenter', KROWN.Pointer.showRead.bind(KROWN.Pointer));
				$link.addEventListener('mouseleave', KROWN.Pointer.hideRead.bind(KROWN.Pointer));
			} else {
				$link.addEventListener('mouseenter', KROWN.Pointer.showView.bind(KROWN.Pointer));
				$link.addEventListener('mouseleave', KROWN.Pointer.hideView.bind(KROWN.Pointer));
			}
			$link.addEventListener('click', (function(e){
				if ( ! $link.hasAttribute('target') ) {
					e.preventDefault();
					KROWN.Pointer.fillScreen();
					sessionStorage.fauxBlue = true;
					setTimeout(function(){
						document.location.href = $link.getAttribute('href');
					}, 500);
				}
			}).bind(this));
		});

		document.querySelectorAll('a:not(.page-link)').forEach(function($link){
			if ( $link.getAttribute('target') != '_blank' ) {
				$link.addEventListener('click', function(e){
				e.preventDefault();
				KROWN.Pointer.fillScreen(true);
					setTimeout(function(){
						document.location.href = $link.getAttribute('href');
					}, 500);
				});

			}
		})

		document.querySelectorAll('a:not(.page-link), .menu-opener').forEach(function($link){
			$link.addEventListener('mouseenter', KROWN.Pointer.switchToBorder.bind(KROWN.Pointer, true));
			$link.addEventListener('mouseleave', KROWN.Pointer.switchToBorder.bind(KROWN.Pointer, false));
		});

		setTimeout(function(){
			Array.from(document.getElementsByTagName('a')).forEach(function(elm){
				elm.removeAttribute('title');
			})
		}, 2000);

	}

};

KROWN._eventListener = function($element, _event, _function, _context){
	_function = _function.bind(_context);
	$element.addEventListener(_event, _function);
};

window.delay = function(callback, ms) {
  var timer = 0;
  return function() {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}

// ============================================
// CUSTOM CODE - Components
// ============================================

// --- Footer ---
KROWN.Footer = {

	$body: null,
	$footer: null,

	$newsletterInput: null,
	$newsletterSubmit: null,

	mount: function(){

		this.$body = document.querySelector('body');
		this.$footer = document.getElementById('footer');

		this.$newsletterInput = this.$footer.querySelector('input[type="text"]');
		this.$newsletterSubmit = this.$footer.querySelector('button[type="submit"]');

		this.$newsletterInput.addEventListener('mouseenter', KROWN.Pointer.switchToBorder.bind(KROWN.Pointer, true));
		this.$newsletterInput.addEventListener('mouseleave', KROWN.Pointer.switchToBorder.bind(KROWN.Pointer, false));

		this.$newsletterSubmit.addEventListener('mouseenter', KROWN.Pointer.switchToBorder.bind(KROWN.Pointer, true));
		this.$newsletterSubmit.addEventListener('mouseleave', KROWN.Pointer.switchToBorder.bind(KROWN.Pointer, false));


		this.$footer.addEventListener('mouseenter', KROWN.Pointer.changeColor.bind(KROWN.Pointer, KROWN.Colors.black));

	}
	
}
// --- Header ---
KROWN.Header = {

	$body: null,

	$header: null,
	$logo: null,
	$menuOpener: null,
	$menuHolder: null,
	$main: null,

	menuOpened: false,

	$backgroundSwitchers: null,

	_toggleMenuListener: null,

	mount: function(){

		this.$body = document.querySelector('body');
		this.$header = document.querySelector('.header');
		this.$logo = document.querySelector('.logo');
		this.$menuOpener = this.$header.querySelector('.menu-opener');
		this.$menuHolder = this.$header.querySelector('.menu-holder');
		this.$main = document.querySelector('.main');

		this.$menuOpener.querySelector('.menu-opener__icon').innerHTML = '<span class="line"></span><span class="line"></span>';

		this._toggleMenuListener = this._toggleMenu.bind(this);
		this.$menuOpener.addEventListener('click', this._toggleMenuListener);

		gsap.set('.logo-path', {visibility: 'visible'});
		gsap.from('.logo-path', {drawSVG: 0, duration: .75, ease: Power1.easeInOut});

		this.$logo.addEventListener('mouseenter', this._animateLogo.bind(this));
		setTimeout((function(){
			this.$menuOpener.classList.remove('initial-transition');
		}).bind(this), 1000);

		this.$backgroundSwitchers = Array.from(document.querySelectorAll('.background-color-switch'));
		this.$backgroundSwitchers = this.$backgroundSwitchers.reverse();

		this.$menuHolder.querySelectorAll('a').forEach((function($item){
			$item.addEventListener('mouseenter', (function(){
				this.$body.classList.add('blue-pointer');	
			}).bind(this));
			$item.addEventListener('mouseleave', (function(){
				this.$body.classList.remove('blue-pointer');
			}).bind(this));
		}).bind(this));

		if ( window.touch ) {

			window.lst = window.scrollY;
			window.addEventListener('scroll', (function(){

			  var st = window.scrollY;

        if ( st < 0 || Math.abs(lst - st) <= 5 ) 
          return;	

       	if ( st == 0 ) {

					this.$header.classList.remove('animate');
					this.$header.classList.remove('fix');
					this.$header.classList.remove('ready');
					//$('body').css('paddingTop', 0);

       	} else if ( st <= lst && ! this.$header.classList.contains('fix') ) {

					this.$header.classList.add('fix');
					//$('body').css('paddingTop', this.$siteHeader.outerHeight());
					setTimeout((function(){
						this.$header.classList.add('ready');
					}).bind(this), 5);
					setTimeout((function(){
						this.$header.classList.add('animate');
					}).bind(this), 25);

				} else if ( st > lst && this.$header.classList.contains('animate') ) {

					this.$header.classList.remove('animate');
					setTimeout((function(){
						this.$header.classList.remove('fix');
						this.$header.classList.remove('ready');
						//$('body').css('paddingTop', 0);
					}).bind(this), 105);

				}

				window.lst = st;


			}).bind(this));

		}

		/*window.on('scroll.sticky-header', (function(){


      


		}).bind(this));*/


	},

	_animateLogo: function(e){
		gsap.to('.logo-path', {drawSVG: '100% 100%', ease: "none", overwrite: 1, onComplete: function(){
			gsap.fromTo('.logo-path', {drawSVG: '0%'}, {drawSVG: '100%', duration: .5, ease: "none"});
		}});
	},

	_toggleMenu: function(e){

		if ( this.menuOpened ) {

			this.$menuOpener.classList.remove('opened');
			setTimeout((function(){
				this.$menuOpener.classList.remove('opening-animation');
			}).bind(this), 500);

			this.menuOpened = false;
			this.$menuHolder.classList.remove('open');
			this.$body.classList.remove('menu-opened');
			this.$main.removeEventListener('click', this._toggleMenuListener);
			window.asscroll.enable();

		} else {

			this.$menuOpener.classList.add('opened');
			this.$menuOpener.classList.add('opening-animation');

			this.menuOpened = true;
			this.$menuHolder.classList.add('open');
			this.$body.classList.add('menu-opened');
			this.$main.addEventListener('click', this._toggleMenuListener);
			window.asscroll.disable();

		}

	}

}

// --- Pointer ---
KROWN.Pointer = {

	$pointer: null,
	$pointerText: null,

	hasTrail: false,
	trail: [],

	globalX: 0,
	globalY: 0,
	_raf: true,

	mount: function(){

		// Create pointer

		this.$pointer = document.createElement('span');
		this.$pointer.id = 'pointer';
		this.$pointer.innerHTML = '<span class="text"></span>';
		this.$pointerText = this.$pointer.querySelector('.text');
		document.body.append(this.$pointer);

		// Add event listener

		document.body.addEventListener('mousemove', (function(e){
			e.preventDefault();
			if ( this._raf ) {
				this._raf = false;
				requestAnimationFrame(this.movePointer.bind(this, e.clientX, e.clientY));
			}
		}).bind(this));
	},

	movePointer: function(evX, evY){

		this.globalX = evX;
		this.globalY = evY;

		//this.$pointer.style.left = evX + 'px';
		//this.$pointer.style.top = evY + 'px';

		gsap.to(this.$pointer, {
			duration: .15,
			left: evX,
			top: evY,
			ease: "sine.out",
			overwrite: true
		});

/*

		if ( this.hasTrail ) {
			gsap.to(this.trail, {
				duration: .08,
				left:  evX,
				top: evY,
				ease: "none",
				overwrite: false,
				stagger: {
					each: .02
				}
			});
		}*/
		this._raf = true;

	},

	showView: function(){
		this.$pointer.classList.add('view');
		this.grow();
		this.changeText('View');
	},
	hideView: function(){
		this.$pointer.classList.remove('view');
		this.shrink();
		this.changeText('');
	},

	showRead: function(){
		this.$pointer.classList.add('view');
		this.grow();
		this.changeText('Read');
	},
	hideRead: function(){
		this.$pointer.classList.remove('view');
		this.shrink();
		this.changeText('');
	},

	bounce: function(){
		this.$pointer.classList.add('no-transitions');
		gsap.to(this.$pointer, {
			duration: .5,
			width: 200,
			height: 200,
			marginTop: -100,
			marginLeft: -100,
			ease: "elastic.out(1, 0.4)",
			yoyo: true,
			repeat: 1,
			onComplete: function($pointer){
				$pointer.classList.remove('no-transitions');
			},
			onCompleteParams: [this.$pointer]
		})
	},

	changeText: function(text){
		this.$pointerText.innerHTML = text;
	},

	showDrag: function(){
		this.$pointer.classList.add('drag');
		this.grow();
		this.changeText('Drag');
	},
	hideDrag: function(){
		this.$pointer.classList.remove('drag');
		this.shrink();
		this.changeText('');
	},

	addTrail: function(){
		for ( i=0; i<5; i++ ) {
			trailPart = document.createElement('span');
			trailPart.classList.add('trail');
			trailPart.style.opacity = (5-i) / 10,
			trailPart.style.left = this.$pointer.style.left;
			trailPart.style.top = this.$pointer.style.top;
			this.$pointer.appendChild(trailPart);
			this.trail.push(trailPart);
		}
		this.hasTrail = true;
	},
	removeTrail: function(){
		this.hasTrail = false;
		for ( i=0; i<5; i++ ) {
			this.trail[i].remove();
		}
		this.trail = [];
	},

	showHighlight: function(){
		this.$pointer.classList.add('highlight');
		this.$pointer.classList.add('easing');
	},
	hideHighlight: function(){
		this.$pointer.classList.remove('highlight');
		this.$pointer.classList.remove('easing');
	},

	hide: function(easy){
		this.$pointer.classList.add('hide');
		if ( easy ) {
			this.$pointer.classList.add('hide-easy')
		}
	},
	show: function(){
		this.$pointer.classList.remove('hide');
		this.$pointer.classList.remove('hide-easy');
	},

	showInput: function(){
		this.$pointer.classList.add('input');
	},
	hideInput: function(){
		this.$pointer.classList.remove('input');
	},

	changeColor: function(color){
		if ( color != null ) {
			this.$pointer.style.backgroundColor = color;
		} else {
			this.$pointer.style.backgroundColor = '';
		}
	},

	fillScreen: function(white){
		this.changeText('');
		this.$pointer.classList.add('fill');
		if ( white != null ) {
			this.$pointer.classList.add('white');
		}
	},

	grow: function(){
		this.$pointer.classList.add('grow');
	},
	shrink: function(){
		this.$pointer.classList.remove('grow');
	},

	switchToBorder: function(borderOn){
		if ( borderOn ) {
			this.$pointer.classList.add('border');
		} else {
			this.$pointer.classList.remove('border');
		}
	}

}

KROWN.Pointer.mount();
// --- Video ---
canAutoplay
	.video({timeout: 1000, muted: true, inline: true})
  .then(function(result, error) {
  	if ( ! result.result ) {
  		document.querySelectorAll('.video').forEach(function($element){
  			$element.querySelector('.lazy-video').remove();
  			var poster = document.createElement('img');
        poster.onload = function(){
          this.classList.add('loaded');
        }
        poster.setAttribute('src', $element.dataset.poster + '.jpg');
        poster.setAttribute('opacity', '1');
        poster.setAttribute('clip-path', 'none');
        poster.setAttribute('transform', 'none');
  			$element.appendChild(poster);
  		});
  	}
  });

document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("div.video"));
  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(videoParent) {
        if (videoParent.isIntersecting) {
          var video = videoParent.target.querySelector('video');
          for (var source in video.children) {
            var videoSource = video.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }
          video.oncanplay = function(){
            this.classList.remove("lazy-video");
            this.classList.add("loaded");
            this.play();
          }
          video.onpause = function(){
            setTimeout((function(){
              this.play();
            }).bind(this), 20);
          }
          video.load();
          lazyVideoObserver.unobserve(videoParent.target);
        }
      });
    },{
      threshold: [0,1]
    });
    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  } else {
  	lazyVideos.forEach(function($element){
  		var videoSource = $element.querySelector('source');
     	videoSource.src = videoSource.dataset.src;
     	$element.load();
  	});
  }
});
// --- Slider Navigation ---
document.querySelectorAll('.carousel-navigation').forEach(function($navigation){
	$navigation.querySelectorAll('.carousel-navigation__button').forEach(function($arrow){
		$arrow.addEventListener('mouseenter', KROWN.Pointer.switchToBorder.bind(KROWN.Pointer, true));
		$arrow.addEventListener('mouseleave', KROWN.Pointer.switchToBorder.bind(KROWN.Pointer, false));
	});
});

// ============================================
// CUSTOM CODE - Pages
// ============================================

// --- 404 ---
KROWN.Error = {

	$shape: null,
	$clip: null,

	mount: function() {

		this.$shape = document.getElementById('shape-1');
		this.$clip = document.getElementById('error-clip');

		document.getElementById('error').addEventListener('mousemove', (function(e){
			gsap.to(this.$clip, {
				duration: 1,
				x: e.offsetX,
				y: e.offsetY,
				ease: "sine.out",
				overwrite: 1
			});
		}).bind(this));

		// header color trigger

		ScrollTrigger.create({
			trigger: '.error-page',
			start: 'top 100',
			end: 'bottom 60',
			toggleClass: {
				targets: '.header',
				className: 'background-switch'
			}
		});


	}

}
// --- Article ---
KROWN.Article = {

	mount: function() {

		var $cloneHeader = document.querySelector('.article__header').cloneNode(true);
		$cloneHeader.classList.add('duplicate');
		document.querySelector('.article__body').append($cloneHeader);

		setTimeout(function(){
			document.querySelector('.article__image').classList.add('active');
		}, 250);

		document.addEventListener('lazyloaded', function(e){
			if ( e.target.id == 'article-image' ) {
				$cloneHeader.classList.add('active');
			}
		});


		ScrollTrigger.matchMedia({

			"(min-width: 1025px)": function(){
				
				ScrollTrigger.batch('.article-animate-in', {
					onEnter: function(batch){
						gsap.to(batch, {autoAlpha: 1, y: 0, stagger: 0, duration: .5})
					},
					start: 'center bottom'
				});

			}

		});

	}

}
// --- Blog ---
KROWN.Blog = {

	_raf: true,
	$posts: null,

	mount: function() {

		this.$posts = document.querySelectorAll('.blog-post');
		this.$posts.forEach((function($element){

			$element.addEventListener('mousemove', (function(e){
				e.preventDefault();
				if ( this._raf ) {
					this._raf = false;
					requestAnimationFrame(this._moveImage.bind(this, e.offsetX, e.offsetY, $element.querySelector('.blog-post__image')));
				}
			}).bind(this));

		}).bind(this));


	},

	_moveImage: function(evX, evY, $image) {
		this._raf = true;
		gsap.to($image, {
			duration: .5,
			x: evX/10,
			y: evY/10,
			ease: "sine.out",
			overwrite: true
		});
	}

}
// --- Contact ---
KROWN.Contact = {

	mount: function(){

		var tl = gsap.timeline();
		gsap.set('.contact__map path', {visibility: 'visible'})
		tl.staggerFrom('.contact__map path', 0.3, {drawSVG: '50% 50%', ease: Power1.easeInOut}, 0.025)
			.to('#RO', 0.5, {fill: '#000'}, '-=1.5')
			.to('#LT', 0.5, {fill: '#000'}, '-=1.2');

	}

}
// --- Homepage: Themes ---
KROWN.Themes = {

	$headline: null,
	$themes: null,
	$theme: null,
	$parallax: null,

	mount: function(){

		this.$headline = document.querySelector('.themes__headline');

		this.$themes = document.getElementById('themes');
		this.$themes.addEventListener('mouseenter', KROWN.Pointer.changeColor.bind(KROWN.Pointer, KROWN.Colors.blue));
		this.$themes.addEventListener('mouseleave', KROWN.Pointer.changeColor.bind(KROWN.Pointer, KROWN.Colors.white));

		this.$theme = this.$themes.querySelectorAll('.theme');
		this.$theme.forEach((function($theme) {

			var $themeImage = $theme.querySelector('.theme__holder');

			$theme.addEventListener('mouseenter', (function(e){
				KROWN.Pointer.showView.bind(KROWN.Pointer);
				//this.$headline.classList.add('reduce');

				gsap.to($themeImage, {
					duration: .5,
					x: ( e.offsetX - $themeImage.getBoundingClientRect().width / 2 ) / 5,
					y: ( e.offsetY - $themeImage.getBoundingClientRect().height / 2 ) / 5,
					ease: "sine.out",
					overwrite: true
				});
			}).bind(this));

			$theme.addEventListener('mouseleave', (function(e){
				KROWN.Pointer.hideView.bind(KROWN.Pointer);
				//this.$headline.classList.remove('reduce');
				gsap.to($themeImage, {
					duration: .5,
					x: 0,
					y: 0,
					ease: "sine.out",
					overwrite: true
				});
			}).bind(this));

			$theme.addEventListener('mousemove', (function(e){
				gsap.to($themeImage, {
					duration: .5,
					x: ( e.offsetX - $themeImage.getBoundingClientRect().width / 2 ) / 5,
					y: ( e.offsetY - $themeImage.getBoundingClientRect().height / 2 ) / 5,
					ease: "sine.out",
					overwrite: true
				});
			}).bind(this));

		}).bind(this));

		ScrollTrigger.matchMedia({

			"(min-width: 1025px)": function(){
				ScrollTrigger.create({
		      trigger: '#themes',
		      pin: '.themes__headline',
		      start: 'top top',
		      end: 'bottom bottom'
		    });
			},

			"(max-width: 1024px)": function(){

			}

		})


		document.querySelectorAll('.parallax').forEach(function($element){
			gsap.to($element, {
			  scrollTrigger: {
			  	trigger: '#themes',
					toggleActions: 'restart play reverse reset',
					start: 'top center',
					scrub: true
			  }, 
			  yPercent: -100 * $element.dataset.parallax,
			  ease: "none",
			  duration: 2
			});
		});

		gsap.to(document.querySelector('.parallax-alternate'), {
		  scrollTrigger: {
		  	trigger: '#themes',
				toggleActions: 'restart play reverse reset',
				start: 'top bottom',
		    scrub: true
		  }, 
		  yPercent: -150,
		  ease: "none",
		  duration: 2
		});

	}

}
// --- Homepage: Text Slider ---
KROWN.TextSlider = {

	$html: null,

	$textSlider: null,
	$textSliderHolder: null,
	$textSliderCarousel:null,
	$textSliderIndex: null,

	flkty: null,

	mount: function() {

		this.$html = document.querySelector('html');

		this.$textSlider = document.getElementById('text-slider');
		this.$textSliderHolder = this.$textSlider.querySelector('.text-slider');
		this.$textSliderCarousel = this.$textSlider.querySelector('.carousel');
		this.$textSliderIndex = this.$textSlider.querySelector('.carousel-navigation__index');

		// Init flickity slider

		this.flkty = new Flickity( this.$textSliderCarousel, {
			cellAlign: 'left',
			cellSelector: '.carousel-cell',
			pageDots: false,
			prevNextButtons: false,
			freeScroll: true,
			selectedAttraction: 0.01,
			friction: 0.15,
			on: {
				ready: (function(){

					this.$textSliderFlickity = this.$textSlider.querySelector('.flickity-slider');
					this.$textSliderFlickityViewport = this.$textSlider.querySelector('.flickity-viewport');
					
					this.$textSliderCarousel.addEventListener('mouseenter', function(e){
						KROWN.Pointer.showDrag();
					});

					this.$textSliderCarousel.addEventListener('mouseleave', function(e){	
						KROWN.Pointer.hideDrag();
					});

				}).bind(this)
			}
		});

		this.$textSlider.querySelector('.carousel-navigation__previous').addEventListener('click', (function(){
			this.flkty.previous();
		}).bind(this));
		this.$textSlider.querySelector('.carousel-navigation__next').addEventListener('click', (function(){
			this.flkty.next();
		}).bind(this));

		// Add pointer, scroll events

		this.flkty.on('pointerDown', (function(e, pointer){
			KROWN.Pointer.changeText('<svg width="43" height="14" viewBox="0 0 43 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.3961 8L35.3636 12.5L36.7272 14L42.9955 7.00493L43 7L42.9999 6.99997L43 6.99994L42.9967 6.99639L36.7272 0L35.3636 1.5L39.3961 6.00001L3.60394 6L7.63641 1.5L6.27277 0L0.00452886 6.99505L3.05176e-05 7L6.26678e-05 7.00004L4.05517e-05 7.00006L0.00312825 7.00346L6.27276 14L7.6364 12.5L3.60392 7.99999L39.3961 8Z" fill="white"/></svg>');
		}).bind(this));
			this.flkty.on('dragMove', (function(e, pointer){
			KROWN.Pointer.movePointer(e.clientX, e.clientY);
		}).bind(this));
			this.flkty.on('pointerUp', (function(e, pointer){
			KROWN.Pointer.changeText('Drag');
		}).bind(this));
			this.flkty.on('change', (function(index){
			this.$textSliderIndex.innerHTML = index + 1;
		}).bind(this));

		// Scroll animation

		

		ScrollTrigger.matchMedia({
			"(min-width: 1025px)": function(){
				gsap.to(KROWN.Dot, {
					scrollTrigger: {
						trigger: '#text-slider',
						start: 'top center',
						toggleActions: 'restart pause reverse reset',
						onEnter: function(){
							KROWN.Dot.className = 'white';
						},
						onLeaveBack: function(){
							KROWN.Dot.className = 'black';
						}
					}
				});
			}
		});

	},

	_scrollHelpers: function(){
		if ( 
			window.scrollY + window.innerHeight >= this.$textSlider.offsetTop && 
			window.scrollY + window.innerHeight < this.$textSlider.offsetTop + window.innerHeight
		) {
			bgTranslate = (window.scrollY + window.innerHeight - this.$textSlider.offsetTop) / 4;
			this.$textSliderHolder.style.transform = 'translateY(' + bgTranslate + 'px)';
		}
	}

}
// --- Homepage: Testimonials ---
KROWN.Testimonials = {

	$testimonials: null,
	$testimonialsSlider: null,
	$testimonialsCarousel:null,
	$testimonialsIndex: null,

	flkty: null,

	mount: function() {
		this.$testimonials = document.getElementById('testimonials');
		this.$testimonialsSlider = this.$testimonials.querySelector('.testimonial-slider');
		this.$testimonialsCarousel = this.$testimonials.querySelector('.carousel');
		this.$testimonialsIndex = this.$testimonials.querySelector('.carousel-navigation__index');

		// Init flickity slider

		this.flkty = new Flickity( this.$testimonialsCarousel, {
			cellAlign: 'left',
			cellSelector: '.carousel-cell',
			pageDots: false,
			prevNextButtons: false,
			freeScroll: true,
			selectedAttraction: 0.01,
			friction: 0.15,
			on: {
				ready: (function(){

					this.$testimonialsFlickityViewport = this.$testimonials.querySelector('.flickity-viewport');

					this.$testimonialsCarousel.addEventListener('mouseenter', function(e){
						KROWN.Pointer.showDrag();
					});

					this.$testimonialsCarousel.addEventListener('mouseleave', function(e){	
						KROWN.Pointer.hideDrag();
					});

				}).bind(this)
			}
		});

		this.$testimonials.querySelector('.carousel-navigation__previous').addEventListener('click', (function(){
			this.flkty.previous();
		}).bind(this));
		this.$testimonials.querySelector('.carousel-navigation__next').addEventListener('click', (function(){
			this.flkty.next();
		}).bind(this));

		// Scroll animation

		if ( document.querySelector('body').classList.contains('home-template') ) {
			ScrollTrigger.matchMedia({

				"(min-width: 1025px)": function(){
					ScrollTrigger.create({
						trigger: '#testimonials',
						start: 'top center',
						toggleActions: 'restart pause reverse reset',
						toggleClass: {
							targets: '.header',
							className: 'background-switch'
						},
						onEnter: function(){
							KROWN.Testimonials.$testimonialsSlider.classList.add('blue');
							KROWN.Dot.className = 'blue';
							KROWN.Pointer.changeColor(KROWN.Colors.black);
						},
						onLeaveBack: function(){
							KROWN.Testimonials.$testimonialsSlider.classList.remove('blue');
							KROWN.Dot.className = 'white';
							KROWN.Pointer.changeColor(KROWN.Colors.blue);
						}
					});
				},

				"(max-width: 1024px)": function(){
					ScrollTrigger.create({
						trigger: '#testimonials',
						start: 'top 40px',
  					endTrigger: "#support",
  					end: 'bottom 40px',
						toggleClass: {
							targets: '.header',
							className: 'background-switch'
						}
					});
				}

			});
		}
		
		// Add pointer, scroll events

		this.flkty.on('pointerDown', (function(e, pointer){
			KROWN.Pointer.changeText('<svg width="43" height="14" viewBox="0 0 43 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.3961 8L35.3636 12.5L36.7272 14L42.9955 7.00493L43 7L42.9999 6.99997L43 6.99994L42.9967 6.99639L36.7272 0L35.3636 1.5L39.3961 6.00001L3.60394 6L7.63641 1.5L6.27277 0L0.00452886 6.99505L3.05176e-05 7L6.26678e-05 7.00004L4.05517e-05 7.00006L0.00312825 7.00346L6.27276 14L7.6364 12.5L3.60392 7.99999L39.3961 8Z" fill="white"/></svg>');
		}).bind(this));
		this.flkty.on('dragMove', (function(e, pointer){
			KROWN.Pointer.movePointer(e.clientX, e.clientY);
		}).bind(this));
		this.flkty.on('pointerUp', (function(e, pointer){
			KROWN.Pointer.changeText('Drag');
		}).bind(this));

		this.flkty.on('change', (function(index){
			this.$testimonialsIndex.innerHTML = index + 1;
		}).bind(this));

	}
	
}
// --- Homepage: Support ---
KROWN.SupportBall = {

	$supportWheel: null,
	$supportWheelParent: null,
	$supportWheelContent: null,

	mount: function(){

		this.$supportWheel = document.querySelector('#wheel');
		this.$supportWheelParent = this.$supportWheel.parentNode;
		this.$supportWheelContent = this.$supportWheel.querySelector('div');

		gsap.to(this.$supportWheel, {
			scrollTrigger: {
				trigger: '#support',
				toggleActions: 'play pause reverse reset',
				end: 'top 25%',
				onEnter: (function(){
					this.$supportWheelParent.style.display = 'block';
					KROWN.Dot.className = 'black-no-transition';
				}).bind(this),
				onLeaveBack: (function(){
					KROWN.Dot.className = 'blue-no-transition';
					KROWN.Pointer.changeColor(KROWN.Colors.black);
					this.$supportWheelParent.style.display = 'none';
				}).bind(this),
				onUpdate: (function(e){
				//	var rotation = ( ( e.progress * 50 ) ) * 9;
				//	this.$supportWheelContent.style.transform = 'rotate(' + rotation + 'deg)';
				}).bind(this),
				onLeave: (function(){
					KROWN.Pointer.changeColor(KROWN.Colors.white);
				}).bind(this),
				onEnterBack: (function(){
					KROWN.Pointer.changeColor(KROWN.Colors.black);
				}).bind(this),
				scrub: 1
			},
			width: 450,
			height: 450,
			duration: 1,
			ease: "sine.out"
		});

		gsap.to(this.$supportWheelContent, {
			scrollTrigger: {
				trigger: '#support',
				toggleActions: 'play pause reverse reset',
				end: 'bottom 50%',
				scrub: 1
			},
			rotation: 600,
			duration: 1
		});

		ScrollTrigger.create({
			trigger: '#support',
			start: 'top top',
			toggleActions: 'restart pause reverse reset',
			toggleClass: {
				targets: '.header',
				className: 'background-switch'
			}
		});

	}
}
// --- Homepage: Hero ---
KROWN.Hero = {

	$hero: null,
	$heroStyle: null,
	$heroSvgStroke: null,

	$heroLinkSplit: null,
	$heroLinkKingdom: null,

	$dotSvg: null,
	$dotMagnet: null,
	
	$letterM1: null,
	$letterR1: null,
	$letterE1: null,

	$letterM2: null,
	$letterR2: null,
	$letterE2: null,

	mount: function(){

		this.$heroStyle = document.getElementById('hero-style');
		this._positionDot();
		if ( window.touch ) {
			this._fixVHunits();
		}

		// Animate the text

		var tl = gsap.timeline();

		gsap.set('.st0, .st1, .st2, .st3', {visibility: 'visible'});

		this.$heroLinkSplit = document.getElementById('hero-link-split');
		var $heroLinkSplitImage = this.$heroLinkSplit.querySelector('div');
		this.$heroLinkHighlight = document.getElementById('hero-link-highlight');
		var $heroLinkHighlightImage = this.$heroLinkHighlight.querySelector('div');
		this.$heroLinkKingdom = document.getElementById('hero-link-kingdom');
		var $heroLinkKingdomImage = this.$heroLinkKingdom.querySelector('div');

		tl.staggerFrom('.st0', 0.3, {drawSVG: '50% 50%', ease: Power1.easeInOut}, 0.1)
			.to('.hero-svg', 0.2, {y: '33.33%', ease: "sine.out"}, "-=.2")
			.staggerFrom('.st1', 0.3, {drawSVG: '50% 50%', ease: Power1.easeInOut}, 0.1)
			.fromTo('.stcolor-1', .5, 
				{fill: 'none', stroke: KROWN.Colors.black}, 
				{
					fill: KROWN.Colors.black, stroke: KROWN.Colors.black, 
					ease: Power1.easeInOut, 
					onComplete: this._followImage.bind(this), 
					onCompleteParams: ['hero-link-split', this.$heroLinkSplit, $heroLinkSplitImage]
				}, "-=1.1")
			.fromTo('.stcolor-2', .5, 
				{fill: 'none', stroke: KROWN.Colors.black}, 
				{
					fill: KROWN.Colors.black, stroke: KROWN.Colors.black, 
					ease: Power1.easeInOut,
					onComplete: this._followImage.bind(this), 
					onCompleteParams: ['hero-link-highlight', this.$heroLinkHighlight, $heroLinkHighlightImage]
				}, "-=.6")
				.to('.hero-svg', 0.2, {y: 0, ease: "sine.out", onComplete: function(){
					document.querySelector('.hero-svg').style.transform = 'none';
					document.querySelector('.hero__detail').classList.add('active');
				}}, "-=.8")
				.fromTo('.stcolor-3', .5, 
					{fill: 'none', stroke: KROWN.Colors.black}, 
					{
						fill: KROWN.Colors.black, stroke: KROWN.Colors.black, 
						ease: Power1.easeInOut,
						onComplete: this._followImage.bind(this), 
						onCompleteParams: ['hero-link-kingdom', this.$heroLinkKingdom, $heroLinkKingdomImage]
					}, "-=0")
			.call((function(){

				// enable scrolling actions

				this._positionDot();
				window.asscroll.enable(false, ( ( window.touch && window.innerWidth > 1024 ) ? false : true ), document.querySelector(".scroll-inner"));

				gsap.to(KROWN.Dot, {
					scrollTrigger: {
						trigger: '#spacer',
						toggleActions: 'restart pause reverse reset',
						scrub: 1
					},
					width: window.innerWidth > window.innerHeight ? window.innerWidth * 1.5 : window.innerHeight * 1.5,
					height: window.innerWidth > window.innerHeight ? window.innerWidth * 1.5 : window.innerHeight * 1.5,
					duration: 3,
					ease: "sine.out"
				});

				gsap.to(KROWN.Dot, {
					scrollTrigger: {
						trigger: '#spacer',
						start: 'top 25%',
						toggleActions: 'restart pause reverse reset',
						scrub: .75
					},
					top: '50%',
					left: '50%',
					duration: 2,
					ease: "sine.out"
				});

				ScrollTrigger.matchMedia({
					"(min-width: 1025px)": function(){
						ScrollTrigger.create({
							trigger: '#spacer',
							start: 'bottom 100%',
							end: 'top -150%',
							toggleClass: {
								targets: '.header',
								className: 'background-switch'
							}
						});
					}
				});

				gsap.to(this.$dotSvg, {
					scrollTrigger: {
						trigger: '#spacer',
						toggleActions: 'restart pause reverse reset',
						scrub: 1
					},
					clipPath: 'circle(' + ( window.innerWidth > window.innerHeight ? window.innerWidth * .75 : window.innerHeight * .75) + 'px at 41.18% 15.5%)',
					duration: 3,
					ease: "sine.out"
				});

				gsap.to(this.$dotSvg, {
					scrollTrigger: {
						trigger: '#spacer',
						start: 'top 25%',
						toggleActions: 'restart pause reverse reset',
						scrub: .7
					},
					y: -window.innerHeight,
					duration: 1,
					ease: "sine.out"
				});

			}).bind(this));

		// Clone text for stroke animation

		var $heroSvg = document.querySelector('.hero-svg');
		this.$heroSvgStroke = $heroSvg.cloneNode(true);
		document.getElementById('hero-text').appendChild(this.$heroSvgStroke);
		this.$heroSvgStroke.classList.add('hero-svg--stroke');
		this.$heroSvgStroke.style.transform = 'none';

		// Create black dot and cache "more" letters

		this.$dotMagnet = document.getElementById('dot-magnet');
		this.$dotSvg = $heroSvg.cloneNode(true);
		this.$dotSvg.classList.add('hero-svg--dot');
		this.$dotSvg.style.transform = 'none';
		var $dotSvgHolder = document.createElement('div');
		$dotSvgHolder.innerHTML = '<div>' + this.$dotSvg.outerHTML + '</div>';
		$dotSvgHolder.classList.add('hero-svg-dot-holder');
		document.querySelector('body').appendChild($dotSvgHolder);
		this.$dotSvg = document.querySelector('.hero-svg--dot');

		this.$letterM1 = this.$dotSvg.getElementById('letter-m');
		this.$letterR1 = this.$dotSvg.getElementById('letter-r');
		this.$letterE1 = this.$dotSvg.getElementById('letter-e');

		this.$letterM2 = $heroSvg.getElementById('letter-m');
		this.$letterR2 = $heroSvg.getElementById('letter-r');
		this.$letterE2 = $heroSvg.getElementById('letter-e');

		gsap.to([this.$letterM1, this.$letterM2, this.$letterR1, this.$letterR2, this.$letterE1, this.$letterE2], {
			scrollTrigger: {
				trigger: '#spacer',
				start: 'top 65%',
				toggleActions: 'restart pause reverse reset',
				scrub: 1
			},
			y: function(i, target){
				if ( target.id == 'letter-m' ) {
					return '50%';
				} else if ( target.id == 'letter-r' ) {
					return '-100%';
				} else if ( target.id == 'letter-e' ) {
					return '-200%';
				} 
			},
			duration: 2,
			ease: "sine.out"
		});

		// align the dot

		window.addEventListener('resize', this._positionDot.bind(this));
		window.addEventListener('orientationchange', this._fixVHunits.bind(this));

	},

	_fixVHunits: function(){
		if ( window.touch && this.$heroStyle ) {
			this.$heroStyle.innerHTML = '#hero, .hero-svg-dot-holder, .text-hero-holder { height: ' + window.innerHeight + 'px; }';
		}
	},

	_positionDot: function(){
		if ( this.$dotMagnet ) {
			var magnetPos = this.$dotMagnet.getBoundingClientRect();
			KROWN.Dot.style.left = (magnetPos.x + (magnetPos.width/2)) + 'px';
			KROWN.Dot.style.top = (magnetPos.y + (magnetPos.height/2)) + 'px';
		}
	},

	_followImage: function(id, $link, $image){

		$link.classList.add('active');
		$link.classList.add('line-in');

		// Theme image follows word on mouse move 

		$link.addEventListener('mousemove', function(e){
			if ( e.target.id == id ) {
				gsap.to($image, {
					duration: .5,
					x: e.offsetX,
					y: e.offsetY,
					ease: "sine.out",
					overwrite: true
				});
			}
		});

		// Pointer needs to be changed

		$link.addEventListener('mouseenter', (function(e){
			//e.target.classList.add('line-in');
			if ( e.target.id == 'hero-link-split' ) {
				document.getElementById('hero-link-kingdom').classList.add('line-out');
				document.getElementById('hero-link-highlight').classList.add('line-out');
			} else if ( e.target.id == 'hero-link-kingdom' ) {
				document.getElementById('hero-link-split').classList.add('line-out');
				document.getElementById('hero-link-highlight').classList.add('line-out');
			} else if ( e.target.id == 'hero-link-highlight' ) {
				document.getElementById('hero-link-split').classList.add('line-out');
				document.getElementById('hero-link-kingdom').classList.add('line-out');
			}
		}).bind(this));
		$link.addEventListener('mouseleave', (function(e){
			if ( e.target.id == 'hero-link-split' ) {
				document.getElementById('hero-link-kingdom').classList.remove('line-out');
				document.getElementById('hero-link-highlight').classList.remove('line-out');
			} else if ( e.target.id == 'hero-link-kingdom' ) {
				document.getElementById('hero-link-split').classList.remove('line-out');
				document.getElementById('hero-link-highlight').classList.remove('line-out');
			} else if ( e.target.id == 'hero-link-highlight' ) {
				document.getElementById('hero-link-split').classList.remove('line-out');
				document.getElementById('hero-link-kingdom').classList.remove('line-out');
			}
		}).bind(this));

	}

}

// --- Homepage: Game ---
KROWN.Games.Wave = {

  canvas: null,
  ctx: null,

  dots: [],
  o: {
    dotSize: 2,
    hitArea: 40,
    collision: 150
  },
 	padding: window.innerHeight * .1,
  
  _dumi: null,
  _raf: true,
  _tout: null,
  _bindedPainter: null,

  mount: function () {
    
    this.canvas = document.createElement("CANVAS");
    document.getElementById('line-game').appendChild(this.canvas);
    this._bindedPainter = this._paintCanvas.bind(this);
    this._initCanvas();
    
    window.addEventListener('resize', debounce((function(){
      this.canvas.remove();
      this.canvas = document.createElement("CANVAS");
      document.getElementById('line-game').appendChild(this.canvas);
      this.dots = [];
      this.padding = window.innerHeight * .2;
      this._initCanvas();
    }).bind(this), 300));

		ScrollTrigger.matchMedia({
			"(min-width: 1025px)": (function(){
				ScrollTrigger.create({
					trigger: '#game',
					start: 'top 75%',
					onEnter: (function() {
						var fi = 0,
								r = 0;
			      clearTimeout(this._tout);
			      gsap.ticker.add(this._bindedPainter);
						this._dumi = setInterval((function(){
							r += Math.random()*100 - 50;
							this._drawDots.call(this, window.innerWidth*.5 + fi + r, window.innerHeight*.35 + fi + r);
							fi += 10;
							if ( fi == 800 ) {
								clearInterval(this._dumi);
							}
						}).bind(this), 60);
					}).bind(this)
				});
			}).bind(this)
		});
    
  },

  // init canvas, used at beginning and resize
  _initCanvas: function () {
    
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight * 1.4;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = '#000';

    var cols = Math.floor(this.canvas.width / this.o.hitArea),
      rows = Math.ceil(window.innerHeight / this.o.hitArea),
      total = cols * rows;

    // create dots array, with default positions
    for (
      i = 1, x = this.o.hitArea / 2, y = this.o.hitArea / 2;
      i <= total;
      i++
    ) {
      this.dots.push({
        x: x,
        y: y + this.padding,
        dotX: x,
        dotY: y + this.padding,
        randomX: Math.random() * -1,
        randomY: Math.random() * -1
      });

      x += this.o.hitArea;
      if (i % cols == 0) {
        x = this.o.hitArea / 2;
        y += this.o.hitArea;
      }
    }

    // add mouse events on canvas

    this.canvas.addEventListener("mouseenter", (function(e){

			KROWN.Pointer.changeColor('#fff');
			KROWN.Pointer.grow();

      clearTimeout(this._tout);
      if ( this._dumi ) {
      	clearInterval(this._dumi);
      } 
    	gsap.ticker.add(this._bindedPainter);

    }).bind(this));

    this.canvas.addEventListener("mousemove", (function(e){

      var rect = this.canvas.getBoundingClientRect();
      if ( this._raf ) {
        this._raf = false;
        requestAnimationFrame(this._drawDots.bind(this, e.clientX - rect.left, e.clientY - rect.top + this.padding));
      }

    }).bind(this));
    
    this.canvas.addEventListener("mouseleave", (function(e){

			KROWN.Pointer.changeColor(null);
			KROWN.Pointer.shrink();

      this._drawDots(-1, -1);    
      clearTimeout(this._tout);
      this._tout = setTimeout((function(){
        gsap.ticker.remove(this._bindedPainter);
      }).bind(this), 500);

    }).bind(this));

    // first draw
    this._drawDots(-1, -1);
    this._paintCanvas();
    
  },

  // dot drawer
  _drawDots: function (mouseX, mouseY) {

    for (i = 0; i < this.dots.length; i++) {
      
      var dot = this.dots[i],
          dotX = dot.x,
          dotY = dot.y,
          f = 1;

      if (mouseX > 0 && mouseY > 0) {
        
        if ( 
          dot.x > mouseX - this.o.collision &&
          dot.x < mouseX + this.o.collision && 
          dot.y > mouseY - this.o.collision &&
          dot.y < mouseY + this.o.collision 
        ) {
          
          var diffX = (mouseX - dot.x),
              diffY = (mouseY - dot.y);
          
          if ( ( diffX < 50 || diffY < 50 ) || ( diffX > 100 || diffY > 100 ) ) {
            f = 2;
          } else if ( ( diffX < -50 && diffY < -50 ) || ( diffX > 50 && diffY > 50 ) ) {
            f = .5;
          }
          
          if (dot.x > mouseX - this.o.collision && dot.x < mouseX) {
            dotX += diffX * dot.randomX;
          } else if ( dot.x > mouseX && dot.x < mouseX + this.o.collision ) {
            dotX += diffX * dot.randomX;
          }
          
          if (dot.y > mouseY - this.o.collision && dot.y < mouseY) {
            dotY += diffY * dot.randomY * f;
          } else if ( dot.y > mouseY && dot.y < mouseY + this.o.collision ) {
            dotY += diffY * dot.randomY * f;
          }

        } else if (
          dot.x < mouseX - this.o.collision &&
          dot.x > mouseX + this.o.collision && 
          dot.y < mouseY - this.o.collision &&
          dot.y > mouseY + this.o.collision 
        ) {
          dotX = this.dots[i].x;
          dotY = this.dots[i].y;
        }
        
      }
       
      gsap.to(this.dots[i], {
        duration: .4,
        dotX: dotX,
        dotY: dotY,
        ease: "sine.out",
        overwrite: true
      });
      
    }

    this._raf = true;
    
  },
  
  _paintCanvas: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (i = 0; i < this.dots.length; i++) {
      this.ctx.fillRect(this.dots[i].dotX, this.dots[i].dotY, this.o.dotSize, this.o.dotSize);
    }
  }

}
// --- Homepage: Affiliate ---
KROWN.Affiliate = {

	$affiliateText: null,
	$affiliateTextPieces: null,
	$affiliateTextHighlight: null,
	$affiliateDotHighlight: null,

	affiliateDotEasing: ["sine.out", "elastic.outout(11,0.3)", "elastic.outout(11,0.3)"],

	_raf: true,
	fauxPointer: false,
	fauxX: 0,
	fauxY: 0,

	mount: function(){


		// Create all pieces of text for animation

		this.$affiliateText = document.querySelector('.affiliate-text');
		this.$affiliateText.id = 'affiliate-text';
		this.$affiliateTextPieces = this.$affiliateText.querySelectorAll('span, mark');

		this.$affiliateTextHighlight = this.$affiliateText.cloneNode(true);
		this.$affiliateText.appendChild(this.$affiliateTextHighlight);

		for ( i=0; i<3; i++ ) {
			dotHighlight = document.createElement('span');
			dotHighlight.classList.add('dot-highlight');
			this.$affiliateText.appendChild(dotHighlight);
		}
		this.$affiliateDotHighlight = document.querySelectorAll('.dot-highlight');

		this.$affiliateTextHighlight.classList.add('highlight');

		// Move hightlight & clip path on mouse move

		this.$affiliateText.addEventListener('mousemove', (function(e){
			e.preventDefault();
			if ( this._raf ) {
				this._raf = false;
				requestAnimationFrame(this.movePointer.bind(this, e.offsetX, e.offsetY));
			}
		}).bind(this));

		// Show highlight & clip path on mouse enter

		this.$affiliateText.addEventListener('mouseenter', (function(e){

			this.fauxPointer = true;

			this.$affiliateDotHighlight.forEach((function($dot, i) {
				$dot.classList.add('active');
				gsap.to($dot, {
					duration: function(){
						return .2 + (.2 * i);
					},
					ease: this.affiliateDotEasing[i],
					left: e.offsetX,
					top: e.offsetY,
					width: function(){
						return 30-(i*10) + 'vw';
					},
					height: function(){
						return 30-(i*10) + 'vw';
					},
					overwrite: true
				})

			}).bind(this));

			gsap.to(this.$affiliateTextHighlight, {
				duration: .2,
				clipPath: 'circle(15vw at ' + e.offsetX + 'px ' + e.offsetY + 'px)',
				ease: "sine.out",
				overwrite: true
			});

		}).bind(this));

		// Hide highlight & clip path on mouse leave

		this.$affiliateText.addEventListener('mouseleave', (function(e){	

			this.fauxPointer = false;

			gsap.to(this.$affiliateDotHighlight, {
				duration: .1,
				left: e.offsetX,
				top: e.offsetY,
				width: '0vw',
				height: '0vw',
				ease: "sine.out",
				onComplete: function($dots){
					$dots.forEach(function($dot){
						$dot.classList.remove('active');
					})
				},
				onCompleteParams: [this.$affiliateDotHighlight],
				overwrite: true
			});

			gsap.to(this.$affiliateTextHighlight, {
				duration: .1,
				clipPath: 'circle(0vw at ' + e.offsetX + 'px ' + e.offsetY + 'px)',
				ease: "sine.out",
				overwrite: true
			});

		}).bind(this));

		// Mobile header switch

		ScrollTrigger.matchMedia({
			"(max-width: 1024px)": function(){
				ScrollTrigger.create({
					trigger: '#affiliate',
					start: 'top 40px',
					end: 'bottom 40px',
					toggleClass: {
						targets: '.header',
						className: 'background-switch'
					}
				});
			}
		});

	},

	movePointer: function(evX, evY){

		if ( evX == null ) {
			evX = this.fauxX;
			evY = this.fauxY;
		} else {
			this.fauxX = evX;
			this.fauxY = evY;
		}

		this.$affiliateDotHighlight.forEach((function($dot, i) {
			gsap.to($dot, {
				duration: function(){
					return .2 + (.2 * i);
				},
				ease: this.affiliateDotEasing[i],
				left: evX,
				top: evY,
				width: function(){
					return 30-(i*10) + 'vw';
				},
				height: function(){
					return 30-(i*10) + 'vw';
				},
				overwrite: true
			})

		}).bind(this));

		gsap.to(this.$affiliateTextHighlight, {
			duration: .2,
			clipPath: 'circle(15vw at ' + evX + 'px ' + evY + 'px)',
			ease: "sine.out",
			overwrite: true
		});

		this._raf = true;

	}

}

// --- Homepage ---
KROWN.HomePage = {

	mount: function(){

		KROWN.General._initLinks();
		KROWN.Hero.mount();
		KROWN.Affiliate.mount();
		KROWN.TextSlider.mount();
		KROWN.Games.Wave.mount();
		KROWN.Testimonials.mount();
		KROWN.Themes.mount();
		KROWN.SupportBall.mount();

		var $main = document.querySelector('.main'),
				$mainRef = document.getElementById('dot'),
				$inner = document.querySelector('.scroll-inner'),
				$innerRef = document.getElementById('spacer'),
				$hero = document.getElementById('hero'),
				heroWhereabouts = 'outer';

		window.addEventListener('resize', function(){
			heroMover();
		});
		heroMover();

		function heroMover(){
			if ( window.innerWidth < 1024 && heroWhereabouts == 'outer') {
				heroWhereabouts = 'inner';
				$inner.insertBefore($hero, $innerRef);
			} else if ( window.innerWidth >= 1024 && heroWhereabouts == 'inner' ) {
				heroWhereabouts = 'outer';
				$main.insertBefore($hero, $mainRef);
			}
		}

	}

}
// --- Showcase ---
KROWN.Showcase = {

	$theme: null,

	mount: function(){

		this.$theme = document.querySelectorAll('.showcase-item__link');
		this.$theme.forEach((function($theme) {

			var $themeImage = $theme.querySelector('.showcase-item__content');

			$theme.addEventListener('mouseenter', (function(e){
				KROWN.Pointer.showView.bind(KROWN.Pointer);
				gsap.to($themeImage, {
					duration: .5,
					x: ( e.offsetX - $themeImage.getBoundingClientRect().width / 2 ) / 5,
					y: ( e.offsetY - $themeImage.getBoundingClientRect().height / 2 ) / 5,
					ease: "sine.out",
					overwrite: true
				});
			}).bind(this));

			$theme.addEventListener('mouseleave', (function(e){
				KROWN.Pointer.hideView.bind(KROWN.Pointer);
				gsap.to($themeImage, {
					duration: .5,
					x: 0,
					y: 0,
					ease: "sine.out",
					overwrite: true
				});
			}).bind(this));

			$theme.addEventListener('mousemove', (function(e){
				gsap.to($themeImage, {
					duration: .5,
					x: ( e.offsetX - $themeImage.getBoundingClientRect().width / 2 ) / 5,
					y: ( e.offsetY - $themeImage.getBoundingClientRect().height / 2 ) / 5,
					ease: "sine.out",
					overwrite: true
				});
			}).bind(this));

		}).bind(this));

		if ( document.querySelector('body').classList.contains('page-theme-showcase') ) {
			document.querySelectorAll('.showcase-item__link').forEach(function($element){
				var index = $element.dataset.parallax_index;
				if ( ( index % 4 == 0 || index % 4 == 1 ) ) {
					$element.classList.add('do-the-parallax');
					gsap.to($element, {
					  scrollTrigger: {
					  	trigger: $element.dataset.parallax_parent,
							toggleActions: 'restart play reverse reset',
							start: index == 0 ? 'bottom bottom' : 'top bottom',
							scrub: 1
					  }, 
					  yPercent: -25 * ( index == 0 ? 4 : ( ( (index%4) * 2 )+ 1) ),
					  ease: "none",
					  duration: 2
					});
				}
			});
		}

	}

}
// --- Support Page ---
KROWN.Support = {

	$formHolder: null,
	$form: null,

	$formFile: null,
	$formFileHelper: null,

	$formSubmit: null,
	$formName: null,
	$formTheme: null,
	$formSubject: null,
	$formMessage: null,
	$formStore: null,
	$formPwd: null,
	$formEmail: null,

	$formRelated: null,

	_mailFormat: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,

	mount: function(){

		this.$formHolder = document.querySelector('.contact__form');
		this.$form = document.getElementById('contact-form');
		this.$formFile = this.$form.querySelector('input[type="file"]');
		this.$formFileHelper = this.$form.querySelector('span.faux-upload');
		this.$formName = this.$form.querySelector('#full-name');
		this.$formTheme = this.$form.querySelector('#theme-name');
		this.$formSubject = this.$form.querySelector('#subject');
		this.$formMessage = this.$form.querySelector('#message');
		this.$formStore = this.$form.querySelector('#store');
		this.$formPwd = this.$form.querySelector('#pwd');
		this.$formEmail = this.$form.querySelector('#email-address');

		this.$formSubmit = this.$form.querySelector('button[type="submit"]');

		this.$formRelated = document.querySelector('.contact__related');

		this.$formFile.addEventListener('change', (function(){
			this.$formFileHelper.innerHTML = this.$formFile.files[0].name;
		}).bind(this));

		this.$formSubject.addEventListener('keyup', window.delay((function(){

			if ( this.$formSubject.value != '' ) {
				this._search(this.$formSubject);
			} else {
				KROWN.Support.$formRelated.innerHTML = '';
			}
		}).bind(this), 300));

		this.$form.addEventListener('submit', (function(e){

			e.preventDefault();

			var valid = true,
					$scrollToError = null;

			// form validation

			if ( ! this._validateEmail(this.$formEmail) ) {
				valid = false;
				$scrollToError = this.$formEmail.parentNode;
			}
			if ( ! this._validateText(this.$formMessage) ) {
				valid = false;
				$scrollToError = this.$formMessage.parentNode;
			}
			if ( ! this._validateText(this.$formSubject) ) {
				valid = false;
				$scrollToError = this.$formSubject.parentNode;
			}
			if ( ! this._validateText(this.$formTheme) ) {
				valid = false;
				$scrollToError = this.$formTheme.parentNode;
			}
			if ( ! this._validateText(this.$formName) ) {
				valid = false;
				$scrollToError = this.$formName.parentNode;
			}

			if ( $scrollToError != null ) {
				window.asscroll.scrollTo(this._offset($scrollToError).top - 20);
			}

			// submit is validation passes
			if ( valid ) {
				var data = new FormData(this.$form);
				this.$form.classList.add('form-processing');
				this._submitForm(this.$form.method, this.$form.action, data, this._success.bind(this), this._error.bind(this));
			}

		}).bind(this));

		this.$form.querySelectorAll('input, textarea').forEach(function($elm){
			$elm.addEventListener('focus', function(){
				if ( this.parentNode.classList.contains('form-error') ) {
					this.parentNode.classList.remove('form-error');
				}
			})
		});

		// header color trigger

		ScrollTrigger.create({
			trigger: '#support-page',
			start: 'top 100',
			end: 'bottom 60',
			toggleClass: {
				targets: '.header',
				className: 'background-switch'
			}
		});

	},

	_validateText: function($field) {
		if ( $field.value != '' && $field.value != ' ' ) {
			return true;
		} else {
			$field.parentNode.classList.add('form-error');
			return false;
		}
	},
	_validateEmail: function($field) {
		if ( $field.value.match(this._mailFormat) ) {
			return true;
		} else {
			$field.parentNode.classList.add('form-error');
			return false;
		}
	},

	_submitForm(method, url, data, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = function() {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
			  success(JSON.parse(xhr.responseText));
			} else {
			  error(JSON.parse(xhr.responseText));
			}
		};
		xhr.send(data);
	},

	_search: function($field) {
		var query = $field.value;
		var http_request;
		http_request = new XMLHttpRequest();
		http_request.onreadystatechange = function() {
			if ( this.readyState == 4 && this.status == 200 ) {
				var relatedDOM = '';
				var results = JSON.parse(this.response);
				if ( results.articles.count > 0 ) {
					for ( var i = 0; i < 4; i++ ) {
						var article = results.articles.results[i];
						if ( typeof article != 'undefined' ) {
							relatedDOM += '<a target="_blank" href="' + article.url + '"><span>' + article.name + '</span></a>';
						}
					}
				}
				if ( relatedDOM != '' ) {
					KROWN.Support.$formRelated.innerHTML = '<span>Have you already seen these related articles?</span>' + relatedDOM;
				}
			}
		}
		http_request.open("GET", "https://shopify-krownthemes.helpscoutdocs.com/search/ajax?query=" + query);
		http_request.send();
	},

	_success: function(response) {
		gsap.to(this.$form, {
	  	duration: .2,
			height: 0,
			onComplete: function($formHolder){
				$formHolder.classList.add('form-sent');
				$formHolder.innerHTML = '<p>Your message was successfully submitted!</p><span>We will review your query and get back to you via email in max 24 hrs during business days (Mon - Fri).</span>';
			},
			onCompleteParams: [this.$formHolder]
	  });
		window.asscroll.scrollTo(this._offset(document.querySelector('.contact-page')).top);
	},

	_error: function(response) {

		this.$formHolder.classList.add('form-sent');

		var errorMessage = 'We are sorry for the inconvenience, it looks like we have some server errors.';
		if ( response.error ) {
			errorMessage = response.error;
		}

		this.$formHolder.innerHTML = '<p>Your message was not submitted!</p><span>' + errorMessage + '<br /><br /><strong style="font-size: 16px;font-weight: 500;">Please try again or reach out at <a href="mailto:support@krownthemes.com">support@krownthemes.com</a>.</strong></span>';
		window.asscroll.scrollTo(this._offset(document.querySelector('.contact-page')).top);
	},

	_offset($element) {
    var rect = $element.getBoundingClientRect(),
    scrollTop = window.asscroll.scrollPos * -1;
    return { top: rect.top + scrollTop };
	}

}
// --- Theme Page: Call to Action ---
KROWN.Cta = {
	mount: function(){
		gsap.to(document.querySelector('.theme-purchase'), {
			y: 0,
			duration: .2,
			delay: 1.4,
			ease: "sine.out"
		});
		var ctaTimeline = gsap.timeline();
		ctaTimeline.to(document.querySelectorAll('.animate-in-light'), {
			opacity: 1,
			duration: .2,
			delay: 1.5,
			stagger: .1
		});
	}
}
// --- Theme Page: Game ---
KROWN.Games.Look = {

  canvas: null,
  ctx: null,

  o: {
    strokeSize: 20,
    hitArea: 40,
    collision: 150
  },

  dots: [],
  
  _raf: true,
  _tout: null,
  _bindedPainter: null,

  mount: function () {
    
    this.canvas = document.createElement("CANVAS");
    document.getElementById('line-game').appendChild(this.canvas);
    this._bindedPainter = this._paintCanvas.bind(this);
    this._initCanvas();
    
    window.addEventListener('resize', debounce((function(){
      this.canvas.remove();
      this.canvas = document.createElement("CANVAS");
      document.getElementById('line-game').appendChild(this.canvas);
      this.dots = [];
      this._initCanvas();
    }).bind(this), 300));

		ScrollTrigger.matchMedia({
			"(min-width: 1025px)": (function(){
				ScrollTrigger.create({
					trigger: '#game',
					start: 'top 75%',
					onEnter: (function() {
						var fi = 0;
			      clearTimeout(this._tout);
			      gsap.ticker.add(this._bindedPainter);
						this._dumi = setInterval((function(){
							this._drawDots.call(this, window.innerWidth*.5 + fi, window.innerHeight*.35 + fi);
							fi += 10;
							if ( fi == 400 ) {
								clearInterval(this._dumi);
							}
						}).bind(this), 60);
					}).bind(this)
				});
			}).bind(this)
		});
    
  },

  // init canvas, used at beginning and resize
  _initCanvas: function () {
    
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#000';

    var cols = Math.floor(this.canvas.width / this.o.hitArea),
      rows = Math.floor(this.canvas.height / this.o.hitArea),
      total = cols * rows;

    // create dots array, with default positions
    for (
      i = 1, x = this.o.hitArea / 2, y = this.o.hitArea / 2;
      i <= total;
      i++
    ) {
      this.dots.push({
        x: x,
        y: y,
        dotX: x,
        dotY: y,
        rotation: Math.random()*90 + 15
      });

      x += this.o.hitArea;
      if (i % cols == 0) {
        x = this.o.hitArea / 2;
        y += this.o.hitArea;
      }
    }

    // add mouse events on canvas

    this.canvas.addEventListener("mouseenter", (function(e){

			KROWN.Pointer.changeColor('#fff');
			KROWN.Pointer.grow();

      clearTimeout(this._tout);
      if ( this._dumi ) {
      	clearInterval(this._dumi);
      } 
    	gsap.ticker.add(this._bindedPainter);

    }).bind(this));

    this.canvas.addEventListener("mousemove", (function(e){

      var rect = this.canvas.getBoundingClientRect();
      if ( this._raf ) {
        this._raf = false;
        requestAnimationFrame(this._drawDots.bind(this, e.clientX - rect.left, e.clientY - rect.top));
      }

    }).bind(this));
    
    this.canvas.addEventListener("mouseleave", (function(e){

			KROWN.Pointer.changeColor(null);
			KROWN.Pointer.shrink();

      this._drawDots(-1, -1);    
      clearTimeout(this._tout);
      this._tout = setTimeout((function(){
        gsap.ticker.remove(this._bindedPainter);
      }).bind(this), 500);

    }).bind(this));

    // first draw
    this._drawDots(-1, -1);
    this._paintCanvas();
    
  },

  // dot drawer
  _drawDots: function (mouseX, mouseY) {

    for (i = 0; i < this.dots.length; i++) {
      
      var dot = this.dots[i],
          dotX = this.dots[i].dotX,
          dotY = this.dots[i].dotY,
          rotation = this.dots[i].rotation;
      
      if ( mouseX > -1 && mouseY > -1 ) {
        var rotateX = ((mouseX - this.dots[i].x) * 60 / window.innerWidth);
        var rotateY = ((mouseY*2 - this.dots[i].y) * 40 / window.innerHeight);
        dotX = this.dots[i].x - rotateX;
        dotY = this.dots[i].y - rotateY;
      } else {
        dotX = this.dots[i].x;
        dotY = this.dots[i].y;
      }
      
      gsap.to(this.dots[i], {
        duration: .4,
        dotX: dotX,
        dotY: dotY,
        ease: "sine.out",
        overwrite: true
      });
      
    }

    this._raf = true;
    
  },
  
  _paintCanvas: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (i = 0; i < this.dots.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.dots[i].x, this.dots[i].y);
      this.ctx.lineTo(this.dots[i].dotX, this.dots[i].dotY+this.o.strokeSize);
      this.ctx.stroke();
    }
  }

}
// --- Theme Page: Hero ---
KROWN.ThemeHero = {

	$hero: null,
	$styles: null,
	$styleImages: null,

	$mobileSlider: null,
	$mobileSliderIndex: null,

	mount: function(){

		this.$styles = document.querySelectorAll('.theme-hero__style');
		this.$styleImages = document.querySelectorAll('.theme-hero__image-holder');
		this.$styles.forEach((function($style){
			$style.addEventListener('mouseenter', this._activeStyle.bind(this, $style));
		}).bind(this));
		this.$styles[0].classList.add('active');
		this.$styleImages[0].classList.add('active');

		this.$hero = document.getElementById('theme-hero');
		var heroTimeline = gsap.timeline();
		heroTimeline.to(this.$hero.querySelectorAll('.hero-animate-in'), {
			y: 0,
			opacity: 1,
			duration: .8,
			stagger: .1
		});

		// Mobile slider

		this.$mobileSlider = document.querySelector('.theme-hero__mobile-slider .carousel');
		this.$mobileSliderIndex = this.$hero.querySelector('.carousel-navigation__index');
		this.flkty = new Flickity( this.$mobileSlider, {
			cellAlign: 'left',
			cellSelector: '.carousel-cell',
			pageDots: false,
			prevNextButtons: false,
			freeScroll: false,
			responsive: true
		});


		this.$hero.querySelector('.carousel-navigation__previous').addEventListener('click', (function(){
			this.flkty.previous();
		}).bind(this));
		this.$hero.querySelector('.carousel-navigation__next').addEventListener('click', (function(){
			this.flkty.next();
		}).bind(this));

		this.flkty.on('change', (function(index){
			this.$mobileSliderIndex.innerHTML = index + 1;
		}).bind(this));

	},

	_activeStyle: function($style, e){

		this.$styles.forEach(function($style){
			$style.classList.remove('active');
		});
		this.$styleImages.forEach(function($style){
			$style.classList.remove('active');
		});

		$style.classList.add('active');

		document.querySelector('.theme-hero__image-holder[data-theme="' + $style.dataset.theme + '"]').classList.add('active');

	}

}
// --- Theme Page: Navigation ---

// --- Theme Page: Reviews ---
KROWN.Reviews = {

	$html: document.querySelector('html'),

	$reviews: null,
	$reviewsCSS: null,
	$reviewsText: null,
	$reviewsRating: null,
	$reviewsClose: null,
	$testimonials: null,

	circleAnimation: true,
	openedReviews: false,
	reviewsCircleSize: 0,
	
	mount: function(){

		this.$reviewsCSS = document.createElement('style');
		document.querySelector('head').appendChild(this.$reviewsCSS);

		this.$reviews = document.getElementById('reviews');
		this.$reviewsText = this.$reviews.querySelectorAll('.reviews__sales');
		this.$testimonials = document.getElementById('testimonials');

		this.$reviewsRating = this.$reviews.querySelector('.reviews--rating');
		if ( ! window.touch ) {
			this.$reviewsRating.addEventListener('mouseenter', this._circleMouseEnter.bind(this));
			this.$reviewsRating.addEventListener('mouseleave', this._circleMouseLeave.bind(this));
			this.$reviewsRating.addEventListener('mousemove', this._circleMouseMove.bind(this));
		}
		this.$reviewsRating.addEventListener('click', this._openReviews.bind(this));

		this.$reviewsClose = document.querySelector('.testimonials__close');
		this.$reviewsClose.addEventListener('mouseenter', KROWN.Pointer.switchToBorder.bind(KROWN.Pointer, true));
		this.$reviewsClose.addEventListener('mouseleave', KROWN.Pointer.switchToBorder.bind(KROWN.Pointer, false));
		this.$reviewsClose.addEventListener('click', this._closeReviews.bind(this));

		KROWN.Testimonials.mount();

		ScrollTrigger.matchMedia({
			"(min-width: 1025px)": function(){
				ScrollTrigger.create({
					trigger: '#reviews',
					end: 'top 20%',
					toggleActions: 'restart pause reverse reset',
					onUpdate: (function(e){
						this._circlesSizing(e.progress);
					}).bind(KROWN.Reviews)
				});
			}
		});

	},

	_circlesSizing: function(progress){

		var size = progress * 100;
		var percent = size*1.5-50;

		if ( size > 50 && size <= 100 ) {
			this.$reviewsCSS.innerHTML = '.reviews > div {font-size: ' + size/10 + 'vw;}.reviews > div:before {width: ' + size + '%;height: ' + size + '%;}';
		} else if ( size > 100 && this.circleAnimation ) {
			this.$reviewsCSS.innerHTML = '.reviews > div {font-size: 11vw;}.reviews > div:before {width: 100%;height: 100%;}';
		}

		if ( percent > 0 && percent < 100 ) {
			this.circleAnimation = true;
			this.$reviewsText.forEach(function($element){
				$element.innerHTML = String(percent * parseFloat($element.dataset.total) / 100 ).slice(0,parseInt($element.dataset.trail));
			})
		} else if ( percent >= 100 && this.circleAnimation ) {
			this.circleAnimation = false;
			this.$reviewsText.forEach(function($element){
				$element.innerHTML = String(100 * parseFloat($element.dataset.total) / 100 ).slice(0,3);
			})
		}

	},

	_circleMouseEnter: function(e){
		if ( ! this.openedReviews ) {
			this.reviewsCircleSize = this.$reviewsRating.offsetWidth;
			KROWN.Pointer.changeColor(KROWN.Colors.white);
			KROWN.Pointer.switchToBorder(true);
		}
	},
	_circleMouseLeave: function(e){
		if ( ! this.openedReviews ) {
			KROWN.Pointer.changeColor(KROWN.Colors.blue);
			KROWN.Pointer.switchToBorder(false);
			gsap.to(this.$reviewsRating, {
				duration: .2,
				marginTop: 0,
				marginLeft: 0,
				//width: this.reviewsCircleSize,
				//height: this.reviewsCircleSize,
				ease: "sine.out",
				overwrite: true
			});
		}
	},
	_circleMouseMove: function(e){
		gsap.to(this.$reviewsRating, {
			duration: .2,
			marginTop: (e.offsetY - (this.$reviewsRating.getBoundingClientRect().height / 2))/10,
			marginLeft: (e.offsetX - (this.$reviewsRating.getBoundingClientRect().width / 2))/-10,
			//width: this.reviewsCircleSize*1.1,
			//height: this.reviewsCircleSize*1.1,
			ease: "sine.out",
			overwrite: true
		});
	},

	_openReviews: function(){
		this.openedReviews = true;
		this.$reviews.classList.add('opened'); 
		this.$testimonials.classList.add('opened');
		//this.$html.classList.add('no-overflow');
		window.asscroll.disable();
		this.$html.classList.add('hide-elements');
		KROWN.Pointer.changeColor(KROWN.Colors.black);
		KROWN.Pointer.switchToBorder(false);
		this._escReviews = this._escReviews.bind(this);
		document.addEventListener('keyup', this._escReviews);
	},

	_closeReviews: function(){
		document.removeEventListener('keyup', this._escReviews);
		this.openedReviews = false;
		this.$reviews.classList.remove('opened'); 
		this.$testimonials.classList.remove('opened');
	//	this.$html.classList.remove('no-overflow');
		window.asscroll.enable();
		this.$html.classList.remove('hide-elements');
		KROWN.Pointer.changeColor(KROWN.Colors.blue);
	},
	_escReviews: function(e){
		if ( e.code == 27 || e.code == 'Escape' ) {
			this._closeReviews();
		}
	}
	
}


// --- Theme Page: Speed ---
KROWN.Speed = {

	speedScore: { val: 0 },
	$speedScoreElms: null,

	mount: function(){

		this.$speedScoreElms = document.querySelectorAll('.speed__percent');
		this.$speedScoreElms.forEach(function($element){
			$element.innerHTML = '0';
		});

		this.$speedScoreElms.forEach((function($element){
			gsap.to(this.speedScore, {
				scrollTrigger: {
					trigger: '#speed',
					start: 'top center'
				},
				duration: 1,
				val: $element.dataset.percent,
				roundProps: "val",
				onUpdate: function($element, speedScore){
					$element.innerHTML = speedScore.val;
				},
				onUpdateParams: [ $element, this.speedScore ]
			});
		}).bind(this))

	}

}
// --- Theme Page: Theme Page ---
KROWN.ThemePage = {

	mount: function(){

		KROWN.ThemeHero.mount();
		KROWN.Cta.mount();
		KROWN.Speed.mount();
		KROWN.Reviews.mount();
		KROWN.Games.Look.mount();
		KROWN.Showcase.mount();

		KROWN.Hero._followImage('navigation-link', document.getElementById('navigation-link'), document.getElementById('navigation-image'));

		// scroll triggers for header on black bg 

		ScrollTrigger.create({
			trigger: '#feature-split_adaptive_grid',
			start: 'top 60px',
			end: 'bottom 60px',
			toggleClass: {
				targets: '.header',
				className: 'background-switch'
			}
		});
		ScrollTrigger.create({
			trigger: '#generic-features',
			start: 'top 60px',
			end: 'bottom 60px',
			toggleClass: {
				targets: '.header',
				className: 'background-switch'
			}
		});
		if ( document.querySelector('body').classList.contains('page-kingdom') || document.querySelector('body').classList.contains('page-highlight') ) {
			ScrollTrigger.create({
				trigger: '#featured-split__shop-the-look',
				start: 'top 60px',
				end: 'bottom 60px',
				toggleClass: {
					targets: '.header',
					className: 'background-switch'
				}
			});
		}
		if ( document.querySelector('body').classList.contains('page-highlight') ) {
			ScrollTrigger.create({
				trigger: '#feature-split_adaptive_grid',
				start: 'top 60px',
				end: 'bottom 60px',
				toggleClass: {
					targets: '.header',
					className: 'background-switch'
				}
			});
		}

	}

}
// ============================================
// ENTRY POINT
// ============================================

// remove titles (we don't like how it looks)
if ( ! window.touch ) {
	window.scrollTo(0,0);
}
gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

// init custom scroll object

window.asscroll = new ASScroll.default({
  customScrollbar: false,
  element: '.scroll-container',
  innerElement: '.scroll-inner',
  disableOnTouch: window.innerWidth > 1024 ? false : true
});

ScrollTrigger.defaults({
  scroller: '.scroll-inner'
});

ScrollTrigger.scrollerProxy(".scroll-inner", {
  scrollTop(value) {
    return arguments.length ? window.asscroll.scrollTo(value) : -window.asscroll.smoothScrollPos;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
  }
});

var $supportPage = document.getElementById('support');
if ( document.querySelector('body').classList.contains('home-template') ) {
	window.asscroll.on("raf", function(e){
		ScrollTrigger.update();
		var wheelMargin = ( e.smoothScrollPos + $supportPage.offsetTop + window.innerHeight * .75 );
		if ( KROWN.SupportBall.$supportWheelParent && wheelMargin < 0 ) {
			KROWN.SupportBall.$supportWheelParent.style.marginTop = wheelMargin + 'px';
		}
	});
} else {
	window.asscroll.on("raf", function(e){
		ScrollTrigger.update();
	});
}
ScrollTrigger.addEventListener("refresh", () => window.asscroll.onResize());

if ( ! document.querySelector('body').classList.contains('home-template') ) {
	window.asscroll.enable(false, false, document.querySelector(".scroll-inner"));
}

setTimeout(function(){

	// mount header & footer

	KROWN.Header.mount();
	KROWN.Footer.mount();

	// mount page

	var $body = document.querySelector('body');
	var $main = document.querySelector('.main');

	if ( $body.classList.contains('home-template') ) {

		KROWN.HomePage.mount();
		setTimeout(function(){
			_raf = true;
		}, 1000);

	} else {

		window.globalScroll = true;
		KROWN.General._initLinks();

		// init parallax in all other pages

		document.querySelectorAll('.parallax').forEach(function($element){
			gsap.to($element, {
			  scrollTrigger: {
			  	trigger: $element.dataset.parallax_parent,
					toggleActions: 'restart play reverse reset',
					start: typeof $element.dataset.parallax_offset == 'undefined' ? 'top center' : $element.dataset.parallax_offset,
			    scrub: true
			  }, 
			  yPercent: -100 * $element.dataset.parallax,
			  ease: "none",
			  duration: 2
			});
		});

		// init animation in all other pages

		ScrollTrigger.matchMedia({

			"(min-width: 1025px)": function(){
				
				ScrollTrigger.batch('.animate-in', {
					onEnter: function(batch){
						gsap.to(batch, {autoAlpha: 1, y: 0, stagger: .5, duration: 1})
					},
					start: 'center bottom'
				});

			},

			"(max-width: 1024px)": function(){

				ScrollTrigger.batch('.animate-in', {
					onEnter: function(batch){
						gsap.to(batch, {autoAlpha: 1, y: 0, stagger: .2, duration: .3})
					},
					start: 'center bottom'
				});

			}

		});

		// init individual pages

	 if ( $body.classList.contains('page-split') || $body.classList.contains('page-kingdom') || $body.classList.contains('page-highlight') ) {
			KROWN.ThemePage.mount();
		} else if ( $body.classList.contains('page-blog') ) {
			KROWN.Blog.mount();
		} else if ( $body.classList.contains('post-template') ) {
			KROWN.Article.mount();
		} else if ( $body.classList.contains('page-contact') ) {
			KROWN.Contact.mount();
		} else if ( $main.classList.contains('error-page') ) {
			KROWN.Error.mount();
		} else if ( $body.classList.contains('page-shopify-support-contact') ) {
			KROWN.Support.mount();
		} else if ( $body.classList.contains('page-theme-showcase') ) {
			KROWN.Showcase.mount();
		} 
		
	}

}, generalDelay);