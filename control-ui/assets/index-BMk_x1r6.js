(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const ys=globalThis,vo=ys.ShadowRoot&&(ys.ShadyCSS===void 0||ys.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bo=Symbol(),Aa=new WeakMap;let ml=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==bo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(vo&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=Aa.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Aa.set(n,t))}return t}toString(){return this.cssText}};const Vd=e=>new ml(typeof e=="string"?e:e+"",void 0,bo),Qd=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,i,o)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new ml(n,e,bo)},Yd=(e,t)=>{if(vo)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),i=ys.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=n.cssText,e.appendChild(s)}},Ca=vo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return Vd(n)})(e):e;const{is:Zd,defineProperty:Xd,getOwnPropertyDescriptor:eu,getOwnPropertyNames:tu,getOwnPropertySymbols:nu,getPrototypeOf:su}=Object,Us=globalThis,Ta=Us.trustedTypes,iu=Ta?Ta.emptyScript:"",ou=Us.reactiveElementPolyfillSupport,Fn=(e,t)=>e,Ts={toAttribute(e,t){switch(t){case Boolean:e=e?iu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},yo=(e,t)=>!Zd(e,t),_a={attribute:!0,type:String,converter:Ts,reflect:!1,useDefault:!1,hasChanged:yo};Symbol.metadata??=Symbol("metadata"),Us.litPropertyMetadata??=new WeakMap;let ln=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=_a){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,n);i!==void 0&&Xd(this.prototype,t,i)}}static getPropertyDescriptor(t,n,s){const{get:i,set:o}=eu(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get:i,set(a){const r=i?.call(this);o?.call(this,a),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_a}static _$Ei(){if(this.hasOwnProperty(Fn("elementProperties")))return;const t=su(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Fn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fn("properties"))){const n=this.properties,s=[...tu(n),...nu(n)];for(const i of s)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,i]of n)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const i=this._$Eu(n,s);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)n.unshift(Ca(i))}else t!==void 0&&n.push(Ca(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yd(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:Ts).toAttribute(n,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Ts;this._$Em=i;const r=a.fromAttribute(n,o.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,n,s,i=!1,o){if(t!==void 0){const a=this.constructor;if(i===!1&&(o=this[t]),s??=a.getPropertyOptions(t),!((s.hasChanged??yo)(o,n)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:i,wrapped:o},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??n??this[t]),o!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:a}=o,r=this[i];a!==!0||this._$AL.has(i)||r===void 0||this.C(i,void 0,o,r)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};ln.elementStyles=[],ln.shadowRootOptions={mode:"open"},ln[Fn("elementProperties")]=new Map,ln[Fn("finalized")]=new Map,ou?.({ReactiveElement:ln}),(Us.reactiveElementVersions??=[]).push("2.1.2");const $o=globalThis,Ea=e=>e,_s=$o.trustedTypes,Ra=_s?_s.createPolicy("lit-html",{createHTML:e=>e}):void 0,vl="$lit$",vt=`lit$${Math.random().toFixed(9).slice(2)}$`,bl="?"+vt,au=`<${bl}>`,Gt=document,Hn=()=>Gt.createComment(""),zn=e=>e===null||typeof e!="object"&&typeof e!="function",xo=Array.isArray,ru=e=>xo(e)||typeof e?.[Symbol.iterator]=="function",ui=`[ 	
\f\r]`,kn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ia=/-->/g,La=/>/g,Lt=RegExp(`>|${ui}(?:([^\\s"'>=/]+)(${ui}*=${ui}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ma=/'/g,Da=/"/g,yl=/^(?:script|style|textarea|title)$/i,$l=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),c=$l(1),Mt=$l(2),kt=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Fa=new WeakMap,Kt=Gt.createTreeWalker(Gt,129);function xl(e,t){if(!xo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ra!==void 0?Ra.createHTML(t):t}const lu=(e,t)=>{const n=e.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",a=kn;for(let r=0;r<n;r++){const l=e[r];let d,g,u=-1,m=0;for(;m<l.length&&(a.lastIndex=m,g=a.exec(l),g!==null);)m=a.lastIndex,a===kn?g[1]==="!--"?a=Ia:g[1]!==void 0?a=La:g[2]!==void 0?(yl.test(g[2])&&(i=RegExp("</"+g[2],"g")),a=Lt):g[3]!==void 0&&(a=Lt):a===Lt?g[0]===">"?(a=i??kn,u=-1):g[1]===void 0?u=-2:(u=a.lastIndex-g[2].length,d=g[1],a=g[3]===void 0?Lt:g[3]==='"'?Da:Ma):a===Da||a===Ma?a=Lt:a===Ia||a===La?a=kn:(a=Lt,i=void 0);const h=a===Lt&&e[r+1].startsWith("/>")?" ":"";o+=a===kn?l+au:u>=0?(s.push(d),l.slice(0,u)+vl+l.slice(u)+vt+h):l+vt+(u===-2?r:h)}return[xl(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class jn{constructor({strings:t,_$litType$:n},s){let i;this.parts=[];let o=0,a=0;const r=t.length-1,l=this.parts,[d,g]=lu(t,n);if(this.el=jn.createElement(d,s),Kt.currentNode=this.el.content,n===2||n===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Kt.nextNode())!==null&&l.length<r;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(vl)){const m=g[a++],h=i.getAttribute(u).split(vt),b=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:b[2],strings:h,ctor:b[1]==="."?du:b[1]==="?"?uu:b[1]==="@"?gu:Hs}),i.removeAttribute(u)}else u.startsWith(vt)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(yl.test(i.tagName)){const u=i.textContent.split(vt),m=u.length-1;if(m>0){i.textContent=_s?_s.emptyScript:"";for(let h=0;h<m;h++)i.append(u[h],Hn()),Kt.nextNode(),l.push({type:2,index:++o});i.append(u[m],Hn())}}}else if(i.nodeType===8)if(i.data===bl)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(vt,u+1))!==-1;)l.push({type:7,index:o}),u+=vt.length-1}o++}}static createElement(t,n){const s=Gt.createElement("template");return s.innerHTML=t,s}}function mn(e,t,n=e,s){if(t===kt)return t;let i=s!==void 0?n._$Co?.[s]:n._$Cl;const o=zn(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,s)),s!==void 0?(n._$Co??=[])[s]=i:n._$Cl=i),i!==void 0&&(t=mn(e,i._$AS(e,t.values),i,s)),t}class cu{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,i=(t?.creationScope??Gt).importNode(n,!0);Kt.currentNode=i;let o=Kt.nextNode(),a=0,r=0,l=s[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new Bs(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new pu(o,this,t)),this._$AV.push(d),l=s[++r]}a!==l?.index&&(o=Kt.nextNode(),a++)}return Kt.currentNode=Gt,i}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let Bs=class wl{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=mn(this,t,n),zn(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==kt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ru(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&zn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Gt.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=jn.createElement(xl(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(n);else{const o=new cu(i,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(t){let n=Fa.get(t.strings);return n===void 0&&Fa.set(t.strings,n=new jn(t)),n}k(t){xo(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const o of t)i===n.length?n.push(s=new wl(this.O(Hn()),this.O(Hn()),this,this.options)):s=n[i],s._$AI(o),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const s=Ea(t).nextSibling;Ea(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Hs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,i,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,n=this,s,i){const o=this.strings;let a=!1;if(o===void 0)t=mn(this,t,n,0),a=!zn(t)||t!==this._$AH&&t!==kt,a&&(this._$AH=t);else{const r=t;let l,d;for(t=o[0],l=0;l<o.length-1;l++)d=mn(this,r[s+l],n,l),d===kt&&(d=this._$AH[l]),a||=!zn(d)||d!==this._$AH[l],d===f?t=f:t!==f&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}a&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},du=class extends Hs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},uu=class extends Hs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},gu=class extends Hs{constructor(t,n,s,i,o){super(t,n,s,i,o),this.type=5}_$AI(t,n=this){if((t=mn(this,t,n,0)??f)===kt)return;const s=this._$AH,i=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},pu=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){mn(this,t)}};const fu={I:Bs},hu=$o.litHtmlPolyfillSupport;hu?.(jn,Bs),($o.litHtmlVersions??=[]).push("3.3.2");const mu=(e,t,n)=>{const s=n?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=n?.renderBefore??null;s._$litPart$=i=new Bs(t.insertBefore(Hn(),o),o,void 0,n??{})}return i._$AI(e),i};const wo=globalThis;let pn=class extends ln{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mu(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return kt}};pn._$litElement$=!0,pn.finalized=!0,wo.litElementHydrateSupport?.({LitElement:pn});const vu=wo.litElementPolyfillSupport;vu?.({LitElement:pn});(wo.litElementVersions??=[]).push("4.2.2");const Sl=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const bu={attribute:!0,type:String,converter:Ts,reflect:!1,hasChanged:yo},yu=(e=bu,t,n)=>{const{kind:s,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),s==="accessor"){const{name:a}=n;return{set(r){const l=t.get.call(this);t.set.call(this,r),this.requestUpdate(a,l,e,!0,r)},init(r){return r!==void 0&&this.C(a,void 0,e,r),r}}}if(s==="setter"){const{name:a}=n;return function(r){const l=this[a];t.call(this,r),this.requestUpdate(a,l,e,!0,r)}}throw Error("Unsupported decorator location: "+s)};function zs(e){return(t,n)=>typeof n=="object"?yu(e,t,n):((s,i,o)=>{const a=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),a?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}function w(e){return zs({...e,state:!0,attribute:!1})}const $u={common:{version:"Version",health:"Health",ok:"OK",offline:"Offline",connect:"Connect",refresh:"Refresh",enabled:"Enabled",disabled:"Disabled",na:"n/a",docs:"Docs",resources:"Resources"},nav:{chat:"Chat",control:"Control",agent:"Agent",settings:"Settings",expand:"Expand sidebar",collapse:"Collapse sidebar"},tabs:{agents:"Agents",overview:"Overview",channels:"Channels",instances:"Instances",sessions:"Sessions",usage:"Usage",cron:"Cron Jobs",skills:"Skills",nodes:"Nodes",chat:"Chat",config:"Config",debug:"Debug",logs:"Logs"},subtitles:{agents:"Manage agent workspaces, tools, and identities.",overview:"Gateway status, entry points, and a fast health read.",channels:"Manage channels and settings.",instances:"Presence beacons from connected clients and nodes.",sessions:"Inspect active sessions and adjust per-session defaults.",usage:"Monitor API usage and costs.",cron:"Schedule wakeups and recurring agent runs.",skills:"Manage skill availability and API key injection.",nodes:"Paired devices, capabilities, and command exposure.",chat:"Direct gateway chat session for quick interventions.",config:"Edit ~/.openclaw/openclaw.json safely.",debug:"Gateway snapshots, events, and manual RPC calls.",logs:"Live tail of the gateway file logs."},overview:{access:{title:"Gateway Access",subtitle:"Where the dashboard connects and how it authenticates.",wsUrl:"WebSocket URL",token:"Gateway Token",password:"Password (not stored)",sessionKey:"Default Session Key",language:"Language",connectHint:"Click Connect to apply connection changes.",trustedProxy:"Authenticated via trusted proxy."},snapshot:{title:"Snapshot",subtitle:"Latest gateway handshake information.",status:"Status",uptime:"Uptime",tickInterval:"Tick Interval",lastChannelsRefresh:"Last Channels Refresh",channelsHint:"Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage."},stats:{instances:"Instances",instancesHint:"Presence beacons in the last 5 minutes.",sessions:"Sessions",sessionsHint:"Recent session keys tracked by the gateway.",cron:"Cron",cronNext:"Next wake {time}"},notes:{title:"Notes",subtitle:"Quick reminders for remote control setups.",tailscaleTitle:"Tailscale serve",tailscaleText:"Prefer serve mode to keep the gateway on loopback with tailnet auth.",sessionTitle:"Session hygiene",sessionText:"Use /new or sessions.patch to reset context.",cronTitle:"Cron reminders",cronText:"Use isolated sessions for recurring runs."},auth:{required:"This gateway requires auth. Add a token or password, then click Connect.",failed:"Auth failed. Re-copy a tokenized URL with {command}, or update the token, then click Connect.",rateLimited:"Too many failed attempts. Wait ~5 minutes, or restart the gateway (openclaw gateway stop then openclaw gateway install) to clear the lockout."},pairing:{hint:"This device needs pairing approval from the gateway host.",mobileHint:"On mobile? Copy the full URL (including #token=...) from openclaw dashboard --no-open on your desktop."},insecure:{hint:"This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open {url} on the gateway host.",stayHttp:"If you must stay on HTTP, set {config} (token-only)."}},chat:{disconnected:"Disconnected from gateway.",refreshTitle:"Refresh chat data",thinkingToggle:"Toggle assistant thinking/working output",focusToggle:"Toggle focus mode (hide sidebar + page header)",hideCronSessions:"Hide cron sessions",showCronSessions:"Show cron sessions",showCronSessionsHidden:"Show cron sessions ({count} hidden)",onboardingDisabled:"Disabled during onboarding"},languages:{en:"English",zhCN:"简体中文 (Simplified Chinese)",zhTW:"繁體中文 (Traditional Chinese)",ptBR:"Português (Brazilian Portuguese)",de:"Deutsch (German)"},cron:{summary:{enabled:"Enabled",yes:"Yes",no:"No",jobs:"Jobs",nextWake:"Next wake",refreshing:"Refreshing...",refresh:"Refresh"},jobs:{title:"Jobs",subtitle:"All scheduled jobs stored in the gateway.",shownOf:"{shown} shown of {total}",searchJobs:"Search jobs",searchPlaceholder:"Name, description, or agent",enabled:"Enabled",schedule:"Schedule",lastRun:"Last run",all:"All",sort:"Sort",nextRun:"Next run",recentlyUpdated:"Recently updated",name:"Name",direction:"Direction",ascending:"Ascending",descending:"Descending",reset:"Reset",noMatching:"No matching jobs.",loading:"Loading...",loadMore:"Load more jobs"},runs:{title:"Run history",subtitleAll:"Latest runs across all jobs.",subtitleJob:"Latest runs for {title}.",scope:"Scope",allJobs:"All jobs",selectedJob:"Selected job",searchRuns:"Search runs",searchPlaceholder:"Summary, error, or job",newestFirst:"Newest first",oldestFirst:"Oldest first",status:"Status",delivery:"Delivery",clear:"Clear",allStatuses:"All statuses",allDelivery:"All delivery",selectJobHint:"Select a job to inspect run history.",noMatching:"No matching runs.",loadMore:"Load more runs",runStatusOk:"OK",runStatusError:"Error",runStatusSkipped:"Skipped",runStatusUnknown:"Unknown",deliveryDelivered:"Delivered",deliveryNotDelivered:"Not delivered",deliveryUnknown:"Unknown",deliveryNotRequested:"Not requested"},form:{editJob:"Edit Job",newJob:"New Job",updateSubtitle:"Update the selected scheduled job.",createSubtitle:"Create a scheduled wakeup or agent run.",required:"Required",requiredSr:"required",basics:"Basics",basicsSub:"Name it, choose the assistant, and set enabled state.",fieldName:"Name",description:"Description",agentId:"Agent ID",namePlaceholder:"Morning brief",descriptionPlaceholder:"Optional context for this job",agentPlaceholder:"main or ops",agentHelp:"Start typing to pick a known agent, or enter a custom one.",schedule:"Schedule",scheduleSub:"Control when this job runs.",every:"Every",at:"At",cronOption:"Cron",runAt:"Run at",unit:"Unit",minutes:"Minutes",hours:"Hours",days:"Days",expression:"Expression",expressionPlaceholder:"0 7 * * *",everyAmountPlaceholder:"30",timezoneOptional:"Timezone (optional)",timezonePlaceholder:"America/Los_Angeles",timezoneHelp:"Pick a common timezone or enter any valid IANA timezone.",jitterHelp:"Need jitter? Use Advanced → Stagger window / Stagger unit.",execution:"Execution",executionSub:"Choose when to wake, and what this job should do.",session:"Session",main:"Main",isolated:"Isolated",sessionHelp:"Main posts a system event. Isolated runs a dedicated agent turn.",wakeMode:"Wake mode",now:"Now",nextHeartbeat:"Next heartbeat",wakeModeHelp:"Now triggers immediately. Next heartbeat waits for the next cycle.",payloadKind:"What should run?",systemEvent:"Post message to main timeline",agentTurn:"Run assistant task (isolated)",systemEventHelp:"Sends your text to the gateway main timeline (good for reminders/triggers).",agentTurnHelp:"Starts an assistant run in its own session using your prompt.",timeoutSeconds:"Timeout (seconds)",timeoutPlaceholder:"Optional, e.g. 90",timeoutHelp:"Optional. Leave blank to use the gateway default timeout behavior for this run.",mainTimelineMessage:"Main timeline message",assistantTaskPrompt:"Assistant task prompt",deliverySection:"Delivery",deliverySub:"Choose where run summaries are sent.",resultDelivery:"Result delivery",announceDefault:"Announce summary (default)",webhookPost:"Webhook POST",noneInternal:"None (internal)",deliveryHelp:"Announce posts a summary to chat. None keeps execution internal.",webhookUrl:"Webhook URL",channel:"Channel",webhookPlaceholder:"https://example.com/cron",channelHelp:"Choose which connected channel receives the summary.",webhookHelp:"Send run summaries to a webhook endpoint.",to:"To",toPlaceholder:"+1555... or chat id",toHelp:"Optional recipient override (chat id, phone, or user id).",advanced:"Advanced",advancedHelp:"Optional overrides for delivery guarantees, schedule jitter, and model controls.",deleteAfterRun:"Delete after run",deleteAfterRunHelp:"Best for one-shot reminders that should auto-clean up.",clearAgentOverride:"Clear agent override",clearAgentHelp:"Force this job to use the gateway default assistant.",exactTiming:"Exact timing (no stagger)",exactTimingHelp:"Run on exact cron boundaries with no spread.",staggerWindow:"Stagger window",staggerUnit:"Stagger unit",staggerPlaceholder:"30",seconds:"Seconds",model:"Model",modelPlaceholder:"openai/gpt-5.2",modelHelp:"Start typing to pick a known model, or enter a custom one.",thinking:"Thinking",thinkingPlaceholder:"low",thinkingHelp:"Use a suggested level or enter a provider-specific value.",bestEffortDelivery:"Best effort delivery",bestEffortHelp:"Do not fail the job if delivery itself fails.",cantAddYet:"Can't add job yet",fillRequired:"Fill the required fields below to enable submit.",fixFields:"Fix {count} field to continue.",fixFieldsPlural:"Fix {count} fields to continue.",saving:"Saving...",saveChanges:"Save changes",addJob:"Add job",cancel:"Cancel"},jobList:{allJobs:"all jobs",selectJob:"(select a job)",enabled:"enabled",disabled:"disabled",edit:"Edit",clone:"Clone",disable:"Disable",enable:"Enable",run:"Run",history:"History",remove:"Remove"},jobDetail:{system:"System",prompt:"Prompt",delivery:"Delivery",agent:"Agent"},jobState:{status:"Status",next:"Next",last:"Last"},runEntry:{noSummary:"No summary.",runAt:"Run at",openRunChat:"Open run chat",next:"Next {rel}",due:"Due {rel}"},errors:{nameRequired:"Name is required.",scheduleAtInvalid:"Enter a valid date/time.",everyAmountInvalid:"Interval must be greater than 0.",cronExprRequired:"Cron expression is required.",staggerAmountInvalid:"Stagger must be greater than 0.",systemTextRequired:"System text is required.",agentMessageRequired:"Agent message is required.",timeoutInvalid:"If set, timeout must be greater than 0 seconds.",webhookUrlRequired:"Webhook URL is required.",webhookUrlInvalid:"Webhook URL must start with http:// or https://.",invalidRunTime:"Invalid run time.",invalidIntervalAmount:"Invalid interval amount.",cronExprRequiredShort:"Cron expression required.",invalidStaggerAmount:"Invalid stagger amount.",systemEventTextRequired:"System event text required.",agentMessageRequiredShort:"Agent message required.",nameRequiredShort:"Name required."}}},xu="modulepreload",wu=function(e,t){return new URL(e,t).href},Pa={},as=function(t,n,s){let i=Promise.resolve();if(n&&n.length>0){let d=function(g){return Promise.all(g.map(u=>Promise.resolve(u).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const a=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");i=d(n.map(g=>{if(g=wu(g,s),g in Pa)return;Pa[g]=!0;const u=g.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(s)for(let b=a.length-1;b>=0;b--){const y=a[b];if(y.href===g&&(!u||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${m}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":xu,u||(h.as="script"),h.crossOrigin="",h.href=g,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((b,y)=>{h.addEventListener("load",b),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${g}`)))})}))}function o(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return i.then(a=>{for(const r of a||[])r.status==="rejected"&&o(r.reason);return t().catch(o)})},Ve="en",kl=["zh-CN","zh-TW","pt-BR","de"],Su={"zh-CN":{exportName:"zh_CN",loader:()=>as(()=>import("./zh-CN-DafEakQp.js"),[],import.meta.url)},"zh-TW":{exportName:"zh_TW",loader:()=>as(()=>import("./zh-TW-Cyl5GDQh.js"),[],import.meta.url)},"pt-BR":{exportName:"pt_BR",loader:()=>as(()=>import("./pt-BR-C2uaHesk.js"),[],import.meta.url)},de:{exportName:"de",loader:()=>as(()=>import("./de-Bm0iuKxz.js"),[],import.meta.url)}},Al=[Ve,...kl];function So(e){return e!=null&&Al.includes(e)}function ku(e){return kl.includes(e)}function Au(e){return e.startsWith("zh")?e==="zh-TW"||e==="zh-HK"?"zh-TW":"zh-CN":e.startsWith("pt")?"pt-BR":e.startsWith("de")?"de":Ve}async function Cu(e){if(!ku(e))return null;const t=Su[e];return(await t.loader())[t.exportName]??null}class Tu{constructor(){this.locale=Ve,this.translations={[Ve]:$u},this.subscribers=new Set,this.loadLocale()}resolveInitialLocale(){const t=localStorage.getItem("openclaw.i18n.locale");return So(t)?t:Au(navigator.language)}loadLocale(){const t=this.resolveInitialLocale();if(t===Ve){this.locale=Ve;return}this.setLocale(t)}getLocale(){return this.locale}async setLocale(t){const n=t!==Ve&&!this.translations[t];if(!(this.locale===t&&!n)){if(n)try{const s=await Cu(t);if(!s)return;this.translations[t]=s}catch(s){console.error(`Failed to load locale: ${t}`,s);return}this.locale=t,localStorage.setItem("openclaw.i18n.locale",t),this.notify()}}registerTranslation(t,n){this.translations[t]=n}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}notify(){this.subscribers.forEach(t=>t(this.locale))}t(t,n){const s=t.split(".");let i=this.translations[this.locale]||this.translations[Ve];for(const o of s)if(i&&typeof i=="object")i=i[o];else{i=void 0;break}if(i===void 0&&this.locale!==Ve){i=this.translations[Ve];for(const o of s)if(i&&typeof i=="object")i=i[o];else{i=void 0;break}}return typeof i!="string"?t:n?i.replace(/\{(\w+)\}/g,(o,a)=>n[a]||`{${a}}`):i}}const Kn=new Tu,p=(e,t)=>Kn.t(e,t);class _u{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){this.unsubscribe=Kn.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe?.()}}async function Ee(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{const n=await e.client.request("channels.status",{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,e.channelsLastSuccess=Date.now()}catch(n){e.channelsError=String(n)}finally{e.channelsLoading=!1}}}async function Eu(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const n=await e.client.request("web.login.start",{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(n){e.whatsappLoginMessage=String(n),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Ru(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const t=await e.client.request("web.login.wait",{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Iu(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request("channels.logout",{channel:"whatsapp"}),e.whatsappLoginMessage="Logged out.",e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function Re(e){if(e)return Array.isArray(e.type)?e.type.filter(n=>n!=="null")[0]??e.type[0]:e.type}function Cl(e){if(!e)return"";if(e.default!==void 0)return e.default;switch(Re(e)){case"object":return{};case"array":return[];case"boolean":return!1;case"number":case"integer":return 0;case"string":return"";default:return""}}function ko(e){return e.filter(t=>typeof t=="string").join(".")}function $t(e,t){const n=ko(e),s=t[n];if(s)return s;const i=n.split(".");for(const[o,a]of Object.entries(t)){if(!o.includes("*"))continue;const r=o.split(".");if(r.length!==i.length)continue;let l=!0;for(let d=0;d<i.length;d+=1)if(r[d]!=="*"&&r[d]!==i[d]){l=!1;break}if(l)return a}}function js(e){return e.replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").replace(/^./,t=>t.toUpperCase())}function Na(e,t){const n=e.trim();if(n==="")return;const s=Number(n);return!Number.isFinite(s)||t&&!Number.isInteger(s)?e:s}function Oa(e){const t=e.trim();return t==="true"?!0:t==="false"?!1:e}function mt(e,t){if(e==null)return e;if(t.allOf&&t.allOf.length>0){let s=e;for(const i of t.allOf)s=mt(s,i);return s}const n=Re(t);if(t.anyOf||t.oneOf){const s=(t.anyOf??t.oneOf??[]).filter(i=>!(i.type==="null"||Array.isArray(i.type)&&i.type.includes("null")));if(s.length===1)return mt(e,s[0]);if(typeof e=="string")for(const i of s){const o=Re(i);if(o==="number"||o==="integer"){const a=Na(e,o==="integer");if(a===void 0||typeof a=="number")return a}if(o==="boolean"){const a=Oa(e);if(typeof a=="boolean")return a}}for(const i of s){const o=Re(i);if(o==="object"&&typeof e=="object"&&!Array.isArray(e)||o==="array"&&Array.isArray(e))return mt(e,i)}return e}if(n==="number"||n==="integer"){if(typeof e=="string"){const s=Na(e,n==="integer");if(s===void 0||typeof s=="number")return s}return e}if(n==="boolean"){if(typeof e=="string"){const s=Oa(e);if(typeof s=="boolean")return s}return e}if(n==="object"){if(typeof e!="object"||Array.isArray(e))return e;const s=e,i=t.properties??{},o=t.additionalProperties&&typeof t.additionalProperties=="object"?t.additionalProperties:null,a={};for(const[r,l]of Object.entries(s)){const d=i[r]??o,g=d?mt(l,d):l;g!==void 0&&(a[r]=g)}return a}if(n==="array"){if(!Array.isArray(e))return e;if(Array.isArray(t.items)){const i=t.items;return e.map((o,a)=>{const r=a<i.length?i[a]:void 0;return r?mt(o,r):o})}const s=t.items;return s?e.map(i=>mt(i,s)).filter(i=>i!==void 0):e}return e}function Jt(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Wn(e){return`${JSON.stringify(e,null,2).trimEnd()}
`}function Tl(e,t,n){if(t.length===0)return;let s=e;for(let o=0;o<t.length-1;o+=1){const a=t[o],r=t[o+1];if(typeof a=="number"){if(!Array.isArray(s))return;s[a]==null&&(s[a]=typeof r=="number"?[]:{}),s=s[a]}else{if(typeof s!="object"||s==null)return;const l=s;l[a]==null&&(l[a]=typeof r=="number"?[]:{}),s=l[a]}}const i=t[t.length-1];if(typeof i=="number"){Array.isArray(s)&&(s[i]=n);return}typeof s=="object"&&s!=null&&(s[i]=n)}function _l(e,t){if(t.length===0)return;let n=e;for(let i=0;i<t.length-1;i+=1){const o=t[i];if(typeof o=="number"){if(!Array.isArray(n))return;n=n[o]}else{if(typeof n!="object"||n==null)return;n=n[o]}if(n==null)return}const s=t[t.length-1];if(typeof s=="number"){Array.isArray(n)&&n.splice(s,1);return}typeof n=="object"&&n!=null&&delete n[s]}async function ze(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{const t=await e.client.request("config.get",{});Mu(e,t)}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function El(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{const t=await e.client.request("config.schema",{});Lu(e,t)}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function Lu(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function Mu(e,t){e.configSnapshot=t;const n=typeof t.raw=="string"?t.raw:t.config&&typeof t.config=="object"?Wn(t.config):e.configRaw;!e.configFormDirty||e.configFormMode==="raw"?e.configRaw=n:e.configForm?e.configRaw=Wn(e.configForm):e.configRaw=n,e.configValid=typeof t.valid=="boolean"?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=Jt(t.config??{}),e.configFormOriginal=Jt(t.config??{}),e.configRawOriginal=n)}function Du(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function Rl(e){if(e.configFormMode!=="form"||!e.configForm)return e.configRaw;const t=Du(e.configSchema),n=t?mt(e.configForm,t):e.configForm;return Wn(n)}async function $s(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const t=Rl(e),n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.set",{raw:t,baseHash:n}),e.configFormDirty=!1,await ze(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function Fu(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{const t=Rl(e),n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.apply",{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await ze(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function Ua(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{await e.client.request("update.run",{sessionKey:e.applySessionKey})}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function Le(e,t,n){const s=Jt(e.configForm??e.configSnapshot?.config??{});Tl(s,t,n),e.configForm=s,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Wn(s))}function ot(e,t){const n=Jt(e.configForm??e.configSnapshot?.config??{});_l(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Wn(n))}function Pu(e){const{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function Nu(e){const{state:t,callbacks:n,accountId:s}=e,i=Pu(t),o=(r,l,d={})=>{const{type:g="text",placeholder:u,maxLength:m,help:h}=d,b=t.values[r]??"",y=t.fieldErrors[r],_=`nostr-profile-${r}`;return g==="textarea"?c`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${_}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${l}
          </label>
          <textarea
            id="${_}"
            .value=${b}
            placeholder=${u??""}
            maxlength=${m??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; resize: vertical; font-family: inherit;"
            @input=${L=>{const R=L.target;n.onFieldChange(r,R.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${h?c`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${h}</div>`:f}
          ${y?c`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${y}</div>`:f}
        </div>
      `:c`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${_}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${l}
        </label>
        <input
          id="${_}"
          type=${g}
          .value=${b}
          placeholder=${u??""}
          maxlength=${m??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px;"
          @input=${L=>{const R=L.target;n.onFieldChange(r,R.value)}}
          ?disabled=${t.saving}
        />
        ${h?c`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${h}</div>`:f}
        ${y?c`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${y}</div>`:f}
      </div>
    `},a=()=>{const r=t.values.picture;return r?c`
      <div style="margin-bottom: 12px;">
        <img
          src=${r}
          alt="Profile picture preview"
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${l=>{const d=l.target;d.style.display="none"}}
          @load=${l=>{const d=l.target;d.style.display="block"}}
        />
      </div>
    `:f};return c`
    <div class="nostr-profile-form" style="padding: 16px; background: var(--bg-secondary); border-radius: 8px; margin-top: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="font-weight: 600; font-size: 16px;">Edit Profile</div>
        <div style="font-size: 12px; color: var(--text-muted);">Account: ${s}</div>
      </div>

      ${t.error?c`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:f}

      ${t.success?c`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:f}

      ${a()}

      ${o("name","Username",{placeholder:"satoshi",maxLength:256,help:"Short username (e.g., satoshi)"})}

      ${o("displayName","Display Name",{placeholder:"Satoshi Nakamoto",maxLength:256,help:"Your full display name"})}

      ${o("about","Bio",{type:"textarea",placeholder:"Tell people about yourself...",maxLength:2e3,help:"A brief bio or description"})}

      ${o("picture","Avatar URL",{type:"url",placeholder:"https://example.com/avatar.jpg",help:"HTTPS URL to your profile picture"})}

      ${t.showAdvanced?c`
            <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">Advanced</div>

              ${o("banner","Banner URL",{type:"url",placeholder:"https://example.com/banner.jpg",help:"HTTPS URL to a banner image"})}

              ${o("website","Website",{type:"url",placeholder:"https://example.com",help:"Your personal website"})}

              ${o("nip05","NIP-05 Identifier",{placeholder:"you@example.com",help:"Verifiable identifier (e.g., you@domain.com)"})}

              ${o("lud16","Lightning Address",{placeholder:"you@getalby.com",help:"Lightning address for tips (LUD-16)"})}
            </div>
          `:f}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!i}
        >
          ${t.saving?"Saving...":"Save & Publish"}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?"Importing...":"Import from Relays"}
        </button>

        <button
          class="btn"
          @click=${n.onToggleAdvanced}
        >
          ${t.showAdvanced?"Hide Advanced":"Show Advanced"}
        </button>

        <button
          class="btn"
          @click=${n.onCancel}
          ?disabled=${t.saving}
        >
          Cancel
        </button>
      </div>

      ${i?c`
              <div style="font-size: 12px; color: var(--warning-color); margin-top: 8px">
                You have unsaved changes
              </div>
            `:f}
    </div>
  `}function Ou(e){const t={name:e?.name??"",displayName:e?.displayName??"",about:e?.about??"",picture:e?.picture??"",banner:e?.banner??"",website:e?.website??"",nip05:e?.nip05??"",lud16:e?.lud16??""};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}async function Uu(e,t){await Eu(e,t),await Ee(e,!0)}async function Bu(e){await Ru(e),await Ee(e,!0)}async function Hu(e){await Iu(e),await Ee(e,!0)}async function zu(e){await $s(e),await ze(e),await Ee(e,!0)}async function ju(e){await ze(e),await Ee(e,!0)}function Ku(e){if(!Array.isArray(e))return{};const t={};for(const n of e){if(typeof n!="string")continue;const[s,...i]=n.split(":");if(!s||i.length===0)continue;const o=s.trim(),a=i.join(":").trim();o&&a&&(t[o]=a)}return t}function Il(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??"default"}function Ll(e,t=""){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function Wu(e){const t=e.hello?.auth?.deviceToken?.trim();if(t)return`Bearer ${t}`;const n=e.settings.token.trim();if(n)return`Bearer ${n}`;const s=e.password.trim();return s?`Bearer ${s}`:null}function Ml(e){const t=Wu(e);return t?{Authorization:t}:{}}function qu(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=Ou(n??void 0)}function Gu(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function Ju(e,t,n){const s=e.nostrProfileFormState;s&&(e.nostrProfileFormState={...s,values:{...s.values,[t]:n},fieldErrors:{...s.fieldErrors,[t]:""}})}function Vu(e){const t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function Qu(e){const t=e.nostrProfileFormState;if(!t||t.saving)return;const n=Il(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{const s=await fetch(Ll(n),{method:"PUT",headers:{"Content-Type":"application/json",...Ml(e)},body:JSON.stringify(t.values)}),i=await s.json().catch(()=>null);if(!s.ok||i?.ok===!1||!i){const o=i?.error??`Profile update failed (${s.status})`;e.nostrProfileFormState={...t,saving:!1,error:o,success:null,fieldErrors:Ku(i?.details)};return}if(!i.persisted){e.nostrProfileFormState={...t,saving:!1,error:"Profile publish failed on all relays.",success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:"Profile published to relays.",fieldErrors:{},original:{...t.values}},await Ee(e,!0)}catch(s){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(s)}`,success:null}}}async function Yu(e){const t=e.nostrProfileFormState;if(!t||t.importing)return;const n=Il(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{const s=await fetch(Ll(n,"/import"),{method:"POST",headers:{"Content-Type":"application/json",...Ml(e)},body:JSON.stringify({autoMerge:!0})}),i=await s.json().catch(()=>null);if(!s.ok||i?.ok===!1||!i){const l=i?.error??`Profile import failed (${s.status})`;e.nostrProfileFormState={...t,importing:!1,error:l,success:null};return}const o=i.merged??i.imported??null,a=o?{...t.values,...o}:t.values,r=!!(a.banner||a.website||a.nip05||a.lud16);e.nostrProfileFormState={...t,importing:!1,values:a,error:null,success:i.saved?"Profile imported from relays. Review and publish.":"Profile imported. Review and publish.",showAdvanced:r},i.saved&&await Ee(e,!0)}catch(s){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(s)}`,success:null}}}function Dl(e){const t=(e??"").trim().toLowerCase();if(!t)return null;const n=t.split(":").filter(Boolean);if(n.length<3||n[0]!=="agent")return null;const s=n[1]?.trim(),i=n.slice(2).join(":");return!s||!i?null:{agentId:s,rest:i}}const Ui=450;function Qn(e,t=!1,n=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);const s=()=>{const i=e.querySelector(".chat-thread");if(i){const o=getComputedStyle(i).overflowY;if(o==="auto"||o==="scroll"||i.scrollHeight-i.clientHeight>1)return i}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;const i=s();if(!i)return;const o=i.scrollHeight-i.scrollTop-i.clientHeight,a=t&&!e.chatHasAutoScrolled;if(!(a||e.chatUserNearBottom||o<Ui)){e.chatNewMessagesBelow=!0;return}a&&(e.chatHasAutoScrolled=!0);const l=n&&(typeof window>"u"||typeof window.matchMedia!="function"||!window.matchMedia("(prefers-reduced-motion: reduce)").matches),d=i.scrollHeight;typeof i.scrollTo=="function"?i.scrollTo({top:d,behavior:l?"smooth":"auto"}):i.scrollTop=d,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;const g=a?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;const u=s();if(!u)return;const m=u.scrollHeight-u.scrollTop-u.clientHeight;(a||e.chatUserNearBottom||m<Ui)&&(u.scrollTop=u.scrollHeight,e.chatUserNearBottom=!0)},g)})})}function Fl(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;const n=e.querySelector(".log-stream");if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;(t||s<80)&&(n.scrollTop=n.scrollHeight)})})}function Zu(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.chatUserNearBottom=s<Ui,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1)}function Xu(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.logsAtBottom=s<80}function Ba(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function eg(e,t){if(e.length===0)return;const n=new Blob([`${e.join(`
`)}
`],{type:"text/plain"}),s=URL.createObjectURL(n),i=document.createElement("a"),o=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");i.href=s,i.download=`openclaw-logs-${t}-${o}.log`,i.click(),URL.revokeObjectURL(s)}function tg(e){if(typeof ResizeObserver>"u")return;const t=e.querySelector(".topbar");if(!t)return;const n=()=>{const{height:s}=t.getBoundingClientRect();e.style.setProperty("--topbar-height",`${s}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}async function Ks(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{const[t,n,s,i]=await Promise.all([e.client.request("status",{}),e.client.request("health",{}),e.client.request("models.list",{}),e.client.request("last-heartbeat",{})]);e.debugStatus=t,e.debugHealth=n;const o=s;e.debugModels=Array.isArray(o?.models)?o?.models:[],e.debugHeartbeat=i}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function ng(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{const t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}const sg=2e3,ig=new Set(["trace","debug","info","warn","error","fatal"]);function og(e){if(typeof e!="string")return null;const t=e.trim();if(!t.startsWith("{")||!t.endsWith("}"))return null;try{const n=JSON.parse(t);return!n||typeof n!="object"?null:n}catch{return null}}function ag(e){if(typeof e!="string")return null;const t=e.toLowerCase();return ig.has(t)?t:null}function rg(e){if(!e.trim())return{raw:e,message:e};try{const t=JSON.parse(e),n=t&&typeof t._meta=="object"&&t._meta!==null?t._meta:null,s=typeof t.time=="string"?t.time:typeof n?.date=="string"?n?.date:null,i=ag(n?.logLevelName??n?.level),o=typeof t[0]=="string"?t[0]:typeof n?.name=="string"?n?.name:null,a=og(o);let r=null;a&&(typeof a.subsystem=="string"?r=a.subsystem:typeof a.module=="string"&&(r=a.module)),!r&&o&&o.length<120&&(r=o);let l=null;return typeof t[1]=="string"?l=t[1]:!a&&typeof t[0]=="string"?l=t[0]:typeof t.message=="string"&&(l=t.message),{raw:e,time:s,level:i,subsystem:r,message:l??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Ao(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{const s=await e.client.request("logs.tail",{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),o=(Array.isArray(s.lines)?s.lines.filter(r=>typeof r=="string"):[]).map(rg),a=!!(t?.reset||s.reset||e.logsCursor==null);e.logsEntries=a?o:[...e.logsEntries,...o].slice(-sg),typeof s.cursor=="number"&&(e.logsCursor=s.cursor),typeof s.file=="string"&&(e.logsFile=s.file),e.logsTruncated=!!s.truncated,e.logsLastFetchAt=Date.now()}catch(n){e.logsError=String(n)}finally{t?.quiet||(e.logsLoading=!1)}}}async function Ws(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{const n=await e.client.request("node.list",{});e.nodes=Array.isArray(n.nodes)?n.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function lg(e){e.nodesPollInterval==null&&(e.nodesPollInterval=window.setInterval(()=>{Ws(e,{quiet:!0})},5e3))}function cg(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function Pl(e){e.logsPollInterval==null&&(e.logsPollInterval=window.setInterval(()=>{e.tab==="logs"&&Ao(e,{quiet:!0})},2e3))}function Nl(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function Ol(e){e.debugPollInterval==null&&(e.debugPollInterval=window.setInterval(()=>{e.tab==="debug"&&Ks(e)},3e3))}function Ul(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}async function Bl(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{const n=await e.client.request("agent.identity.get",{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(n){e.agentIdentityError=String(n)}finally{e.agentIdentityLoading=!1}}}async function Hl(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;const n=t.filter(s=>!e.agentIdentityById[s]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(const s of n){const i=await e.client.request("agent.identity.get",{agentId:s});i&&(e.agentIdentityById={...e.agentIdentityById,[s]:i})}}catch(s){e.agentIdentityError=String(s)}finally{e.agentIdentityLoading=!1}}}async function xs(e,t){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{const n=await e.client.request("skills.status",{agentId:t});n&&(e.agentSkillsReport=n,e.agentSkillsAgentId=t)}catch(n){e.agentSkillsError=String(n)}finally{e.agentSkillsLoading=!1}}}async function Co(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{const t=await e.client.request("agents.list",{});if(t){e.agentsList=t;const n=e.agentsSelectedId,s=t.agents.some(i=>i.id===n);(!n||!s)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){e.agentsError=String(t)}finally{e.agentsLoading=!1}}}async function Pn(e,t){if(!(!e.client||!e.connected)&&!e.toolsCatalogLoading){e.toolsCatalogLoading=!0,e.toolsCatalogError=null;try{const n=await e.client.request("tools.catalog",{agentId:t??e.agentsSelectedId??void 0,includePlugins:!0});n&&(e.toolsCatalogResult=n)}catch(n){e.toolsCatalogError=String(n)}finally{e.toolsCatalogLoading=!1}}}const dg={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},Es={name:"",description:"",agentId:"",clearAgent:!1,enabled:!0,deleteAfterRun:!0,scheduleKind:"every",scheduleAt:"",everyAmount:"30",everyUnit:"minutes",cronExpr:"0 7 * * *",cronTz:"",scheduleExact:!1,staggerAmount:"",staggerUnit:"seconds",sessionTarget:"isolated",wakeMode:"now",payloadKind:"agentTurn",payloadText:"",payloadModel:"",payloadThinking:"",deliveryMode:"announce",deliveryChannel:"last",deliveryTo:"",deliveryBestEffort:!1,failureAlertMode:"inherit",failureAlertAfter:"2",failureAlertCooldownSeconds:"3600",failureAlertChannel:"last",failureAlertTo:"",timeoutSeconds:""};function To(e,t){if(e==null||!Number.isFinite(e)||e<=0)return;if(e<1e3)return`${Math.round(e)}ms`;const n=t?.spaced?" ":"",s=Math.round(e/1e3),i=Math.floor(s/3600),o=Math.floor(s%3600/60),a=s%60;if(i>=24){const r=Math.floor(i/24),l=i%24;return l>0?`${r}d${n}${l}h`:`${r}d`}return i>0?o>0?`${i}h${n}${o}m`:`${i}h`:o>0?a>0?`${o}m${n}${a}s`:`${o}m`:`${a}s`}function _o(e,t="n/a"){if(e==null||!Number.isFinite(e)||e<0)return t;if(e<1e3)return`${Math.round(e)}ms`;const n=Math.round(e/1e3);if(n<60)return`${n}s`;const s=Math.round(n/60);if(s<60)return`${s}m`;const i=Math.round(s/60);return i<24?`${i}h`:`${Math.round(i/24)}d`}function se(e,t){const n=t?.fallback??"n/a";if(e==null||!Number.isFinite(e))return n;const s=Date.now()-e,i=Math.abs(s),o=s>=0,a=Math.round(i/1e3);if(a<60)return o?"just now":"in <1m";const r=Math.round(a/60);if(r<60)return o?`${r}m ago`:`in ${r}m`;const l=Math.round(r/60);if(l<48)return o?`${l}h ago`:`in ${l}h`;const d=Math.round(l/24);return o?`${d}d ago`:`in ${d}d`}function Bi(e){const t=[],n=/(^|\n)(```|~~~)[^\n]*\n[\s\S]*?(?:\n\2(?:\n|$)|$)/g;for(const i of e.matchAll(n)){const o=(i.index??0)+i[1].length;t.push({start:o,end:o+i[0].length-i[1].length})}const s=/`+[^`]+`+/g;for(const i of e.matchAll(s)){const o=i.index??0,a=o+i[0].length;t.some(l=>o>=l.start&&a<=l.end)||t.push({start:o,end:a})}return t.sort((i,o)=>i.start-o.start),t}function Hi(e,t){return t.some(n=>e>=n.start&&e<n.end)}const ug=/<\s*\/?\s*(?:think(?:ing)?|thought|antthinking|final)\b/i,rs=/<\s*\/?\s*final\b[^<>]*>/gi,Ha=/<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^<>]*>/gi;function gg(e,t){return e.trimStart()}function pg(e,t){if(!e||!ug.test(e))return e;let n=e;if(rs.test(n)){rs.lastIndex=0;const r=[],l=Bi(n);for(const d of n.matchAll(rs)){const g=d.index??0;r.push({start:g,length:d[0].length,inCode:Hi(g,l)})}for(let d=r.length-1;d>=0;d--){const g=r[d];g.inCode||(n=n.slice(0,g.start)+n.slice(g.start+g.length))}}else rs.lastIndex=0;const s=Bi(n);Ha.lastIndex=0;let i="",o=0,a=!1;for(const r of n.matchAll(Ha)){const l=r.index??0,d=r[1]==="/";Hi(l,s)||(a?d&&(a=!1):(i+=n.slice(o,l),d||(a=!0)),o=l+r[0].length)}return i+=n.slice(o),gg(i)}const za=/<\s*(\/?)\s*relevant[-_]memories\b[^<>]*>/gi,fg=/<\s*\/?\s*relevant[-_]memories\b/i;function hg(e){if(!e||!fg.test(e))return e;za.lastIndex=0;const t=Bi(e);let n="",s=0,i=!1;for(const o of e.matchAll(za)){const a=o.index??0;if(Hi(a,t))continue;const r=o[1]==="/";i?r&&(i=!1):(n+=e.slice(s,a),r||(i=!0)),s=a+o[0].length}return i||(n+=e.slice(s)),n}function mg(e){const t=pg(e);return hg(t).trimStart()}function At(e){return!e&&e!==0?"n/a":new Date(e).toLocaleString()}function zi(e){return!e||e.length===0?"none":e.filter(t=>!!(t&&t.trim())).join(", ")}function ji(e,t=120){return e.length<=t?e:`${e.slice(0,Math.max(0,t-1))}…`}function zl(e,t){return e.length<=t?{text:e,truncated:!1,total:e.length}:{text:e.slice(0,Math.max(0,t)),truncated:!0,total:e.length}}function Fe(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function vg(e){return mg(e)}const ws="last";function bg(e){return e.sessionTarget==="isolated"&&e.payloadKind==="agentTurn"}function Eo(e){return e.deliveryMode!=="announce"||bg(e)?e:{...e,deliveryMode:"none"}}function Yn(e){const t={};if(e.name.trim()||(t.name="cron.errors.nameRequired"),e.scheduleKind==="at"){const n=Date.parse(e.scheduleAt);Number.isFinite(n)||(t.scheduleAt="cron.errors.scheduleAtInvalid")}else if(e.scheduleKind==="every")Fe(e.everyAmount,0)<=0&&(t.everyAmount="cron.errors.everyAmountInvalid");else if(e.cronExpr.trim()||(t.cronExpr="cron.errors.cronExprRequired"),!e.scheduleExact){const n=e.staggerAmount.trim();n&&Fe(n,0)<=0&&(t.staggerAmount="cron.errors.staggerAmountInvalid")}if(e.payloadText.trim()||(t.payloadText=e.payloadKind==="systemEvent"?"cron.errors.systemTextRequired":"cron.errors.agentMessageRequired"),e.payloadKind==="agentTurn"){const n=e.timeoutSeconds.trim();n&&Fe(n,0)<=0&&(t.timeoutSeconds="cron.errors.timeoutInvalid")}if(e.deliveryMode==="webhook"){const n=e.deliveryTo.trim();n?/^https?:\/\//i.test(n)||(t.deliveryTo="cron.errors.webhookUrlInvalid"):t.deliveryTo="cron.errors.webhookUrlRequired"}if(e.failureAlertMode==="custom"){const n=e.failureAlertAfter.trim();if(n){const i=Fe(n,0);(!Number.isFinite(i)||i<=0)&&(t.failureAlertAfter="Failure alert threshold must be greater than 0.")}const s=e.failureAlertCooldownSeconds.trim();if(s){const i=Fe(s,-1);(!Number.isFinite(i)||i<0)&&(t.failureAlertCooldownSeconds="Cooldown must be 0 or greater.")}}return t}function jl(e){return Object.keys(e).length>0}async function Zn(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("cron.status",{});e.cronStatus=t}catch(t){e.cronError=String(t)}}async function yg(e){if(!(!e.client||!e.connected))try{const n=(await e.client.request("models.list",{}))?.models;if(!Array.isArray(n)){e.cronModelSuggestions=[];return}const s=n.map(i=>{if(!i||typeof i!="object")return"";const o=i.id;return typeof o=="string"?o.trim():""}).filter(Boolean);e.cronModelSuggestions=Array.from(new Set(s)).toSorted((i,o)=>i.localeCompare(o))}catch{e.cronModelSuggestions=[]}}async function qs(e){return await Ro(e,{append:!1})}function Kl(e){const t=typeof e.totalRaw=="number"&&Number.isFinite(e.totalRaw)?Math.max(0,Math.floor(e.totalRaw)):e.pageCount,n=typeof e.limitRaw=="number"&&Number.isFinite(e.limitRaw)?Math.max(1,Math.floor(e.limitRaw)):Math.max(1,e.pageCount),s=typeof e.offsetRaw=="number"&&Number.isFinite(e.offsetRaw)?Math.max(0,Math.floor(e.offsetRaw)):0,i=typeof e.hasMoreRaw=="boolean"?e.hasMoreRaw:s+e.pageCount<Math.max(t,s+e.pageCount),o=typeof e.nextOffsetRaw=="number"&&Number.isFinite(e.nextOffsetRaw)?Math.max(0,Math.floor(e.nextOffsetRaw)):i?s+e.pageCount:null;return{total:t,limit:n,offset:s,hasMore:i,nextOffset:o}}async function Ro(e,t){if(!e.client||!e.connected||e.cronLoading||e.cronJobsLoadingMore)return;const n=t?.append===!0;if(n){if(!e.cronJobsHasMore)return;e.cronJobsLoadingMore=!0}else e.cronLoading=!0;e.cronError=null;try{const s=n?Math.max(0,e.cronJobsNextOffset??e.cronJobs.length):0,i=await e.client.request("cron.list",{includeDisabled:e.cronJobsEnabledFilter==="all",limit:e.cronJobsLimit,offset:s,query:e.cronJobsQuery.trim()||void 0,enabled:e.cronJobsEnabledFilter,sortBy:e.cronJobsSortBy,sortDir:e.cronJobsSortDir}),o=Array.isArray(i.jobs)?i.jobs:[];e.cronJobs=n?[...e.cronJobs,...o]:o;const a=Kl({totalRaw:i.total,limitRaw:i.limit,offsetRaw:i.offset,nextOffsetRaw:i.nextOffset,hasMoreRaw:i.hasMore,pageCount:o.length});e.cronJobsTotal=Math.max(a.total,e.cronJobs.length),e.cronJobsHasMore=a.hasMore,e.cronJobsNextOffset=a.nextOffset,e.cronEditingJobId&&!e.cronJobs.some(r=>r.id===e.cronEditingJobId)&&Xn(e)}catch(s){e.cronError=String(s)}finally{n?e.cronJobsLoadingMore=!1:e.cronLoading=!1}}async function $g(e){await Ro(e,{append:!0})}async function ja(e){await Ro(e,{append:!1})}function Ka(e,t){typeof t.cronJobsQuery=="string"&&(e.cronJobsQuery=t.cronJobsQuery),t.cronJobsEnabledFilter&&(e.cronJobsEnabledFilter=t.cronJobsEnabledFilter),t.cronJobsScheduleKindFilter&&(e.cronJobsScheduleKindFilter=t.cronJobsScheduleKindFilter),t.cronJobsLastStatusFilter&&(e.cronJobsLastStatusFilter=t.cronJobsLastStatusFilter),t.cronJobsSortBy&&(e.cronJobsSortBy=t.cronJobsSortBy),t.cronJobsSortDir&&(e.cronJobsSortDir=t.cronJobsSortDir)}function xg(e){return e.cronJobs.filter(t=>!(e.cronJobsScheduleKindFilter!=="all"&&t.schedule.kind!==e.cronJobsScheduleKindFilter||e.cronJobsLastStatusFilter!=="all"&&t.state?.lastStatus!==e.cronJobsLastStatusFilter))}function Xn(e){e.cronEditingJobId=null}function Wl(e){e.cronForm={...Es},e.cronFieldErrors=Yn(e.cronForm)}function wg(e){const t=Date.parse(e);if(!Number.isFinite(t))return"";const n=new Date(t),s=n.getFullYear(),i=String(n.getMonth()+1).padStart(2,"0"),o=String(n.getDate()).padStart(2,"0"),a=String(n.getHours()).padStart(2,"0"),r=String(n.getMinutes()).padStart(2,"0");return`${s}-${i}-${o}T${a}:${r}`}function Sg(e){if(e%864e5===0)return{everyAmount:String(Math.max(1,e/864e5)),everyUnit:"days"};if(e%36e5===0)return{everyAmount:String(Math.max(1,e/36e5)),everyUnit:"hours"};const t=Math.max(1,Math.ceil(e/6e4));return{everyAmount:String(t),everyUnit:"minutes"}}function kg(e){return e===0?{scheduleExact:!0,staggerAmount:"",staggerUnit:"seconds"}:typeof e!="number"||!Number.isFinite(e)||e<0?{scheduleExact:!1,staggerAmount:"",staggerUnit:"seconds"}:e%6e4===0?{scheduleExact:!1,staggerAmount:String(Math.max(1,e/6e4)),staggerUnit:"minutes"}:{scheduleExact:!1,staggerAmount:String(Math.max(1,Math.ceil(e/1e3))),staggerUnit:"seconds"}}function ql(e,t){const n=e.failureAlert,s={...t,name:e.name,description:e.description??"",agentId:e.agentId??"",clearAgent:!1,enabled:e.enabled,deleteAfterRun:e.deleteAfterRun??!1,scheduleKind:e.schedule.kind,scheduleAt:"",everyAmount:t.everyAmount,everyUnit:t.everyUnit,cronExpr:t.cronExpr,cronTz:"",scheduleExact:!1,staggerAmount:"",staggerUnit:"seconds",sessionTarget:e.sessionTarget,wakeMode:e.wakeMode,payloadKind:e.payload.kind,payloadText:e.payload.kind==="systemEvent"?e.payload.text:e.payload.message,payloadModel:e.payload.kind==="agentTurn"?e.payload.model??"":"",payloadThinking:e.payload.kind==="agentTurn"?e.payload.thinking??"":"",deliveryMode:e.delivery?.mode??"none",deliveryChannel:e.delivery?.channel??ws,deliveryTo:e.delivery?.to??"",deliveryBestEffort:e.delivery?.bestEffort??!1,failureAlertMode:n===!1?"disabled":n&&typeof n=="object"?"custom":"inherit",failureAlertAfter:n&&typeof n=="object"&&typeof n.after=="number"?String(n.after):Es.failureAlertAfter,failureAlertCooldownSeconds:n&&typeof n=="object"&&typeof n.cooldownMs=="number"?String(Math.floor(n.cooldownMs/1e3)):Es.failureAlertCooldownSeconds,failureAlertChannel:n&&typeof n=="object"?n.channel??ws:ws,failureAlertTo:n&&typeof n=="object"?n.to??"":"",timeoutSeconds:e.payload.kind==="agentTurn"&&typeof e.payload.timeoutSeconds=="number"?String(e.payload.timeoutSeconds):""};if(e.schedule.kind==="at")s.scheduleAt=wg(e.schedule.at);else if(e.schedule.kind==="every"){const i=Sg(e.schedule.everyMs);s.everyAmount=i.everyAmount,s.everyUnit=i.everyUnit}else{s.cronExpr=e.schedule.expr,s.cronTz=e.schedule.tz??"";const i=kg(e.schedule.staggerMs);s.scheduleExact=i.scheduleExact,s.staggerAmount=i.staggerAmount,s.staggerUnit=i.staggerUnit}return Eo(s)}function Ag(e){if(e.scheduleKind==="at"){const o=Date.parse(e.scheduleAt);if(!Number.isFinite(o))throw new Error(p("cron.errors.invalidRunTime"));return{kind:"at",at:new Date(o).toISOString()}}if(e.scheduleKind==="every"){const o=Fe(e.everyAmount,0);if(o<=0)throw new Error(p("cron.errors.invalidIntervalAmount"));const a=e.everyUnit;return{kind:"every",everyMs:o*(a==="minutes"?6e4:a==="hours"?36e5:864e5)}}const t=e.cronExpr.trim();if(!t)throw new Error(p("cron.errors.cronExprRequiredShort"));if(e.scheduleExact)return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0,staggerMs:0};const n=e.staggerAmount.trim();if(!n)return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0};const s=Fe(n,0);if(s<=0)throw new Error(p("cron.errors.invalidStaggerAmount"));const i=e.staggerUnit==="minutes"?s*6e4:s*1e3;return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0,staggerMs:i}}function Cg(e){if(e.payloadKind==="systemEvent"){const a=e.payloadText.trim();if(!a)throw new Error(p("cron.errors.systemEventTextRequired"));return{kind:"systemEvent",text:a}}const t=e.payloadText.trim();if(!t)throw new Error(p("cron.errors.agentMessageRequiredShort"));const n={kind:"agentTurn",message:t},s=e.payloadModel.trim();s&&(n.model=s);const i=e.payloadThinking.trim();i&&(n.thinking=i);const o=Fe(e.timeoutSeconds,0);return o>0&&(n.timeoutSeconds=o),n}function Tg(e){if(e.failureAlertMode==="disabled")return!1;if(e.failureAlertMode!=="custom")return;const t=Fe(e.failureAlertAfter.trim(),0),n=e.failureAlertCooldownSeconds.trim(),s=n.length>0?Fe(n,0):void 0,i=s!==void 0&&Number.isFinite(s)&&s>=0?Math.floor(s*1e3):void 0;return{after:t>0?Math.floor(t):void 0,channel:e.failureAlertChannel.trim()||ws,to:e.failureAlertTo.trim()||void 0,...i!==void 0?{cooldownMs:i}:{}}}async function _g(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const t=Eo(e.cronForm);t!==e.cronForm&&(e.cronForm=t);const n=Yn(t);if(e.cronFieldErrors=n,jl(n))return;const s=Ag(t),i=Cg(t),o=t.deliveryMode,a=o&&o!=="none"?{mode:o,channel:o==="announce"?t.deliveryChannel.trim()||"last":void 0,to:t.deliveryTo.trim()||void 0,bestEffort:t.deliveryBestEffort}:o==="none"?{mode:"none"}:void 0,r=Tg(t),l=t.clearAgent?null:t.agentId.trim(),d={name:t.name.trim(),description:t.description.trim(),agentId:l===null?null:l||void 0,enabled:t.enabled,deleteAfterRun:t.deleteAfterRun,schedule:s,sessionTarget:t.sessionTarget,wakeMode:t.wakeMode,payload:i,delivery:a,failureAlert:r};if(!d.name)throw new Error(p("cron.errors.nameRequiredShort"));e.cronEditingJobId?(await e.client.request("cron.update",{id:e.cronEditingJobId,patch:d}),Xn(e)):(await e.client.request("cron.add",d),Wl(e)),await qs(e),await Zn(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function Eg(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.update",{id:t.id,patch:{enabled:n}}),await qs(e),await Zn(e)}catch(s){e.cronError=String(s)}finally{e.cronBusy=!1}}}async function Rg(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.run",{id:t.id,mode:"force"}),e.cronRunsScope==="all"?await xt(e,null):await xt(e,t.id)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function Ig(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.remove",{id:t.id}),e.cronEditingJobId===t.id&&Xn(e),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[],e.cronRunsTotal=0,e.cronRunsHasMore=!1,e.cronRunsNextOffset=null),await qs(e),await Zn(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function xt(e,t,n){if(!e.client||!e.connected)return;const s=e.cronRunsScope,i=t??e.cronRunsJobId;if(s==="job"&&!i){e.cronRuns=[],e.cronRunsTotal=0,e.cronRunsHasMore=!1,e.cronRunsNextOffset=null;return}const o=n?.append===!0;if(!(o&&!e.cronRunsHasMore))try{o&&(e.cronRunsLoadingMore=!0);const a=o?Math.max(0,e.cronRunsNextOffset??e.cronRuns.length):0,r=await e.client.request("cron.runs",{scope:s,id:s==="job"?i??void 0:void 0,limit:e.cronRunsLimit,offset:a,statuses:e.cronRunsStatuses.length>0?e.cronRunsStatuses:void 0,status:e.cronRunsStatusFilter,deliveryStatuses:e.cronRunsDeliveryStatuses.length>0?e.cronRunsDeliveryStatuses:void 0,query:e.cronRunsQuery.trim()||void 0,sortDir:e.cronRunsSortDir}),l=Array.isArray(r.entries)?r.entries:[];e.cronRuns=o&&(s==="all"||e.cronRunsJobId===i)?[...e.cronRuns,...l]:l,s==="job"&&(e.cronRunsJobId=i??null);const d=Kl({totalRaw:r.total,limitRaw:r.limit,offsetRaw:r.offset,nextOffsetRaw:r.nextOffset,hasMoreRaw:r.hasMore,pageCount:l.length});e.cronRunsTotal=Math.max(d.total,e.cronRuns.length),e.cronRunsHasMore=d.hasMore,e.cronRunsNextOffset=d.nextOffset}catch(a){e.cronError=String(a)}finally{o&&(e.cronRunsLoadingMore=!1)}}async function Lg(e){e.cronRunsScope==="job"&&!e.cronRunsJobId||await xt(e,e.cronRunsJobId,{append:!0})}function Wa(e,t){t.cronRunsScope&&(e.cronRunsScope=t.cronRunsScope),Array.isArray(t.cronRunsStatuses)&&(e.cronRunsStatuses=t.cronRunsStatuses,e.cronRunsStatusFilter=t.cronRunsStatuses.length===1?t.cronRunsStatuses[0]:"all"),Array.isArray(t.cronRunsDeliveryStatuses)&&(e.cronRunsDeliveryStatuses=t.cronRunsDeliveryStatuses),t.cronRunsStatusFilter&&(e.cronRunsStatusFilter=t.cronRunsStatusFilter,e.cronRunsStatuses=t.cronRunsStatusFilter==="all"?[]:[t.cronRunsStatusFilter]),typeof t.cronRunsQuery=="string"&&(e.cronRunsQuery=t.cronRunsQuery),t.cronRunsSortDir&&(e.cronRunsSortDir=t.cronRunsSortDir)}function Mg(e,t){e.cronEditingJobId=t.id,e.cronRunsJobId=t.id,e.cronForm=ql(t,e.cronForm),e.cronFieldErrors=Yn(e.cronForm)}function Dg(e,t){const n=e.trim()||"Job",s=`${n} copy`;if(!t.has(s.toLowerCase()))return s;let i=2;for(;i<1e3;){const o=`${n} copy ${i}`;if(!t.has(o.toLowerCase()))return o;i+=1}return`${n} copy ${Date.now()}`}function Fg(e,t){Xn(e),e.cronRunsJobId=t.id;const n=new Set(e.cronJobs.map(i=>i.name.trim().toLowerCase())),s=ql(t,e.cronForm);s.name=Dg(t.name,n),e.cronForm=s,e.cronFieldErrors=Yn(e.cronForm)}function Pg(e){Xn(e),Wl(e)}function Io(e){return e.trim()}function Ng(e){if(!Array.isArray(e))return[];const t=new Set;for(const n of e){const s=n.trim();s&&t.add(s)}return[...t].toSorted()}function Og(e){const t=e.adapter.readStore();if(!t||t.deviceId!==e.deviceId)return null;const n=Io(e.role),s=t.tokens[n];return!s||typeof s.token!="string"?null:s}function Ug(e){const t=Io(e.role),n=e.adapter.readStore(),s={version:1,deviceId:e.deviceId,tokens:n&&n.deviceId===e.deviceId&&n.tokens?{...n.tokens}:{}},i={token:e.token,role:t,scopes:Ng(e.scopes),updatedAtMs:Date.now()};return s.tokens[t]=i,e.adapter.writeStore(s),i}function Bg(e){const t=e.adapter.readStore();if(!t||t.deviceId!==e.deviceId)return;const n=Io(e.role);if(!t.tokens[n])return;const s={version:1,deviceId:t.deviceId,tokens:{...t.tokens}};delete s.tokens[n],e.adapter.writeStore(s)}const Gl="openclaw.device.auth.v1";function Lo(){try{const e=window.localStorage.getItem(Gl);if(!e)return null;const t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!="string"||!t.tokens||typeof t.tokens!="object"?null:t}catch{return null}}function Mo(e){try{window.localStorage.setItem(Gl,JSON.stringify(e))}catch{}}function Hg(e){return Og({adapter:{readStore:Lo,writeStore:Mo},deviceId:e.deviceId,role:e.role})}function Jl(e){return Ug({adapter:{readStore:Lo,writeStore:Mo},deviceId:e.deviceId,role:e.role,token:e.token,scopes:e.scopes})}function Vl(e){Bg({adapter:{readStore:Lo,writeStore:Mo},deviceId:e.deviceId,role:e.role})}const Ql={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:we,n:Ss,Gx:qa,Gy:Ga,a:gi,d:pi,h:zg}=Ql,Vt=32,Do=64,jg=(...e)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...e)},ve=(e="")=>{const t=new Error(e);throw jg(t,ve),t},Kg=e=>typeof e=="bigint",Wg=e=>typeof e=="string",qg=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array",Tt=(e,t,n="")=>{const s=qg(e),i=e?.length,o=t!==void 0;if(!s||o&&i!==t){const a=n&&`"${n}" `,r=o?` of length ${t}`:"",l=s?`length=${i}`:`type=${typeof e}`;ve(a+"expected Uint8Array"+r+", got "+l)}return e},Gs=e=>new Uint8Array(e),Yl=e=>Uint8Array.from(e),Zl=(e,t)=>e.toString(16).padStart(t,"0"),Xl=e=>Array.from(Tt(e)).map(t=>Zl(t,2)).join(""),at={_0:48,_9:57,A:65,F:70,a:97,f:102},Ja=e=>{if(e>=at._0&&e<=at._9)return e-at._0;if(e>=at.A&&e<=at.F)return e-(at.A-10);if(e>=at.a&&e<=at.f)return e-(at.a-10)},ec=e=>{const t="hex invalid";if(!Wg(e))return ve(t);const n=e.length,s=n/2;if(n%2)return ve(t);const i=Gs(s);for(let o=0,a=0;o<s;o++,a+=2){const r=Ja(e.charCodeAt(a)),l=Ja(e.charCodeAt(a+1));if(r===void 0||l===void 0)return ve(t);i[o]=r*16+l}return i},tc=()=>globalThis?.crypto,Gg=()=>tc()?.subtle??ve("crypto.subtle must be defined, consider polyfill"),qn=(...e)=>{const t=Gs(e.reduce((s,i)=>s+Tt(i).length,0));let n=0;return e.forEach(s=>{t.set(s,n),n+=s.length}),t},Jg=(e=Vt)=>tc().getRandomValues(Gs(e)),Rs=BigInt,Ot=(e,t,n,s="bad number: out of range")=>Kg(e)&&t<=e&&e<n?e:ve(s),B=(e,t=we)=>{const n=e%t;return n>=0n?n:t+n},nc=e=>B(e,Ss),Vg=(e,t)=>{(e===0n||t<=0n)&&ve("no inverse n="+e+" mod="+t);let n=B(e,t),s=t,i=0n,o=1n;for(;n!==0n;){const a=s/n,r=s%n,l=i-o*a;s=n,n=r,i=o,o=l}return s===1n?B(i,t):ve("no inverse")},Qg=e=>{const t=ac[e];return typeof t!="function"&&ve("hashes."+e+" not set"),t},fi=e=>e instanceof De?e:ve("Point expected"),Ki=2n**256n;class De{static BASE;static ZERO;X;Y;Z;T;constructor(t,n,s,i){const o=Ki;this.X=Ot(t,0n,o),this.Y=Ot(n,0n,o),this.Z=Ot(s,1n,o),this.T=Ot(i,0n,o),Object.freeze(this)}static CURVE(){return Ql}static fromAffine(t){return new De(t.x,t.y,1n,B(t.x*t.y))}static fromBytes(t,n=!1){const s=pi,i=Yl(Tt(t,Vt)),o=t[31];i[31]=o&-129;const a=ic(i);Ot(a,0n,n?Ki:we);const l=B(a*a),d=B(l-1n),g=B(s*l+1n);let{isValid:u,value:m}=Zg(d,g);u||ve("bad point: y not sqrt");const h=(m&1n)===1n,b=(o&128)!==0;return!n&&m===0n&&b&&ve("bad point: x==0, isLastByteOdd"),b!==h&&(m=B(-m)),new De(m,a,1n,B(m*a))}static fromHex(t,n){return De.fromBytes(ec(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const t=gi,n=pi,s=this;if(s.is0())return ve("bad point: ZERO");const{X:i,Y:o,Z:a,T:r}=s,l=B(i*i),d=B(o*o),g=B(a*a),u=B(g*g),m=B(l*t),h=B(g*B(m+d)),b=B(u+B(n*B(l*d)));if(h!==b)return ve("bad point: equation left != right (1)");const y=B(i*o),_=B(a*r);return y!==_?ve("bad point: equation left != right (2)"):this}equals(t){const{X:n,Y:s,Z:i}=this,{X:o,Y:a,Z:r}=fi(t),l=B(n*r),d=B(o*i),g=B(s*r),u=B(a*i);return l===d&&g===u}is0(){return this.equals(gn)}negate(){return new De(B(-this.X),this.Y,this.Z,B(-this.T))}double(){const{X:t,Y:n,Z:s}=this,i=gi,o=B(t*t),a=B(n*n),r=B(2n*B(s*s)),l=B(i*o),d=t+n,g=B(B(d*d)-o-a),u=l+a,m=u-r,h=l-a,b=B(g*m),y=B(u*h),_=B(g*h),L=B(m*u);return new De(b,y,L,_)}add(t){const{X:n,Y:s,Z:i,T:o}=this,{X:a,Y:r,Z:l,T:d}=fi(t),g=gi,u=pi,m=B(n*a),h=B(s*r),b=B(o*u*d),y=B(i*l),_=B((n+s)*(a+r)-m-h),L=B(y-b),R=B(y+b),A=B(h-g*m),S=B(_*L),D=B(R*A),T=B(_*A),I=B(L*R);return new De(S,D,I,T)}subtract(t){return this.add(fi(t).negate())}multiply(t,n=!0){if(!n&&(t===0n||this.is0()))return gn;if(Ot(t,1n,Ss),t===1n)return this;if(this.equals(Qt))return cp(t).p;let s=gn,i=Qt;for(let o=this;t>0n;o=o.double(),t>>=1n)t&1n?s=s.add(o):n&&(i=i.add(o));return s}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){const{X:t,Y:n,Z:s}=this;if(this.equals(gn))return{x:0n,y:1n};const i=Vg(s,we);B(s*i)!==1n&&ve("invalid inverse");const o=B(t*i),a=B(n*i);return{x:o,y:a}}toBytes(){const{x:t,y:n}=this.assertValidity().toAffine(),s=sc(n);return s[31]|=t&1n?128:0,s}toHex(){return Xl(this.toBytes())}clearCofactor(){return this.multiply(Rs(zg),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let t=this.multiply(Ss/2n,!1).double();return Ss%2n&&(t=t.add(this)),t.is0()}}const Qt=new De(qa,Ga,1n,B(qa*Ga)),gn=new De(0n,1n,1n,0n);De.BASE=Qt;De.ZERO=gn;const sc=e=>ec(Zl(Ot(e,0n,Ki),Do)).reverse(),ic=e=>Rs("0x"+Xl(Yl(Tt(e)).reverse())),qe=(e,t)=>{let n=e;for(;t-- >0n;)n*=n,n%=we;return n},Yg=e=>{const n=e*e%we*e%we,s=qe(n,2n)*n%we,i=qe(s,1n)*e%we,o=qe(i,5n)*i%we,a=qe(o,10n)*o%we,r=qe(a,20n)*a%we,l=qe(r,40n)*r%we,d=qe(l,80n)*l%we,g=qe(d,80n)*l%we,u=qe(g,10n)*o%we;return{pow_p_5_8:qe(u,2n)*e%we,b2:n}},Va=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,Zg=(e,t)=>{const n=B(t*t*t),s=B(n*n*t),i=Yg(e*s).pow_p_5_8;let o=B(e*n*i);const a=B(t*o*o),r=o,l=B(o*Va),d=a===e,g=a===B(-e),u=a===B(-e*Va);return d&&(o=r),(g||u)&&(o=l),(B(o)&1n)===1n&&(o=B(-o)),{isValid:d||g,value:o}},Wi=e=>nc(ic(e)),Fo=(...e)=>ac.sha512Async(qn(...e)),Xg=(...e)=>Qg("sha512")(qn(...e)),oc=e=>{const t=e.slice(0,Vt);t[0]&=248,t[31]&=127,t[31]|=64;const n=e.slice(Vt,Do),s=Wi(t),i=Qt.multiply(s),o=i.toBytes();return{head:t,prefix:n,scalar:s,point:i,pointBytes:o}},Po=e=>Fo(Tt(e,Vt)).then(oc),ep=e=>oc(Xg(Tt(e,Vt))),tp=e=>Po(e).then(t=>t.pointBytes),np=e=>Fo(e.hashable).then(e.finish),sp=(e,t,n)=>{const{pointBytes:s,scalar:i}=e,o=Wi(t),a=Qt.multiply(o).toBytes();return{hashable:qn(a,s,n),finish:d=>{const g=nc(o+Wi(d)*i);return Tt(qn(a,sc(g)),Do)}}},ip=async(e,t)=>{const n=Tt(e),s=await Po(t),i=await Fo(s.prefix,n);return np(sp(s,i,n))},ac={sha512Async:async e=>{const t=Gg(),n=qn(e);return Gs(await t.digest("SHA-512",n.buffer))},sha512:void 0},op=(e=Jg(Vt))=>e,ap={getExtendedPublicKeyAsync:Po,getExtendedPublicKey:ep,randomSecretKey:op},Is=8,rp=256,rc=Math.ceil(rp/Is)+1,qi=2**(Is-1),lp=()=>{const e=[];let t=Qt,n=t;for(let s=0;s<rc;s++){n=t,e.push(n);for(let i=1;i<qi;i++)n=n.add(t),e.push(n);t=n.double()}return e};let Qa;const Ya=(e,t)=>{const n=t.negate();return e?n:t},cp=e=>{const t=Qa||(Qa=lp());let n=gn,s=Qt;const i=2**Is,o=i,a=Rs(i-1),r=Rs(Is);for(let l=0;l<rc;l++){let d=Number(e&a);e>>=r,d>qi&&(d-=o,e+=1n);const g=l*qi,u=g,m=g+Math.abs(d)-1,h=l%2!==0,b=d<0;d===0?s=s.add(Ya(h,t[u])):n=n.add(Ya(b,t[m]))}return e!==0n&&ve("invalid wnaf"),{p:n,f:s}},hi="openclaw-device-identity-v1";function Gi(e){let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll("+","-").replaceAll("/","_").replace(/=+$/g,"")}function lc(e){const t=e.replaceAll("-","+").replaceAll("_","/"),n=t+"=".repeat((4-t.length%4)%4),s=atob(n),i=new Uint8Array(s.length);for(let o=0;o<s.length;o+=1)i[o]=s.charCodeAt(o);return i}function dp(e){return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}async function cc(e){const t=await crypto.subtle.digest("SHA-256",e.slice().buffer);return dp(new Uint8Array(t))}async function up(){const e=ap.randomSecretKey(),t=await tp(e);return{deviceId:await cc(t),publicKey:Gi(t),privateKey:Gi(e)}}async function No(){try{const n=localStorage.getItem(hi);if(n){const s=JSON.parse(n);if(s?.version===1&&typeof s.deviceId=="string"&&typeof s.publicKey=="string"&&typeof s.privateKey=="string"){const i=await cc(lc(s.publicKey));if(i!==s.deviceId){const o={...s,deviceId:i};return localStorage.setItem(hi,JSON.stringify(o)),{deviceId:i,publicKey:s.publicKey,privateKey:s.privateKey}}return{deviceId:s.deviceId,publicKey:s.publicKey,privateKey:s.privateKey}}}}catch{}const e=await up(),t={version:1,deviceId:e.deviceId,publicKey:e.publicKey,privateKey:e.privateKey,createdAtMs:Date.now()};return localStorage.setItem(hi,JSON.stringify(t)),e}async function gp(e,t){const n=lc(e),s=new TextEncoder().encode(t),i=await ip(s,n);return Gi(i)}async function _t(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{const n=await e.client.request("device.pair.list",{});e.devicesList={pending:Array.isArray(n?.pending)?n.pending:[],paired:Array.isArray(n?.paired)?n.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function pp(e,t){if(!(!e.client||!e.connected))try{await e.client.request("device.pair.approve",{requestId:t}),await _t(e)}catch(n){e.devicesError=String(n)}}async function fp(e,t){if(!(!e.client||!e.connected||!window.confirm("Reject this device pairing request?")))try{await e.client.request("device.pair.reject",{requestId:t}),await _t(e)}catch(s){e.devicesError=String(s)}}async function hp(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("device.token.rotate",t);if(n?.token){const s=await No(),i=n.role??t.role;(n.deviceId===s.deviceId||t.deviceId===s.deviceId)&&Jl({deviceId:s.deviceId,role:i,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt("New device token (copy and store securely):",n.token)}await _t(e)}catch(n){e.devicesError=String(n)}}async function mp(e,t){if(!(!e.client||!e.connected||!window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`)))try{await e.client.request("device.token.revoke",t);const s=await No();t.deviceId===s.deviceId&&Vl({deviceId:s.deviceId,role:t.role}),await _t(e)}catch(s){e.devicesError=String(s)}}function vp(e){if(!e||e.kind==="gateway")return{method:"exec.approvals.get",params:{}};const t=e.nodeId.trim();return t?{method:"exec.approvals.node.get",params:{nodeId:t}}:null}function bp(e,t){if(!e||e.kind==="gateway")return{method:"exec.approvals.set",params:t};const n=e.nodeId.trim();return n?{method:"exec.approvals.node.set",params:{...t,nodeId:n}}:null}async function Oo(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{const n=vp(t);if(!n){e.lastError="Select a node before loading exec approvals.";return}const s=await e.client.request(n.method,n.params);yp(e,s)}catch(n){e.lastError=String(n)}finally{e.execApprovalsLoading=!1}}}function yp(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=Jt(t.file??{}))}async function $p(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{const n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError="Exec approvals hash missing; reload and retry.";return}const s=e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},i=bp(t,{file:s,baseHash:n});if(!i){e.lastError="Select a node before saving exec approvals.";return}await e.client.request(i.method,i.params),e.execApprovalsDirty=!1,await Oo(e,t)}catch(n){e.lastError=String(n)}finally{e.execApprovalsSaving=!1}}}function xp(e,t,n){const s=Jt(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});Tl(s,t,n),e.execApprovalsForm=s,e.execApprovalsDirty=!0}function wp(e,t){const n=Jt(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});_l(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function Uo(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{const t=await e.client.request("system-presence",{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?"No instances yet.":null):(e.presenceEntries=[],e.presenceStatus="No presence payload.")}catch(t){e.presenceError=String(t)}finally{e.presenceLoading=!1}}}async function Zt(e,t){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{const n=t?.includeGlobal??e.sessionsIncludeGlobal,s=t?.includeUnknown??e.sessionsIncludeUnknown,i=t?.activeMinutes??Fe(e.sessionsFilterActive,0),o=t?.limit??Fe(e.sessionsFilterLimit,0),a={includeGlobal:n,includeUnknown:s};i>0&&(a.activeMinutes=i),o>0&&(a.limit=o);const r=await e.client.request("sessions.list",a);r&&(e.sessionsResult=r)}catch(n){e.sessionsError=String(n)}finally{e.sessionsLoading=!1}}}async function Sp(e,t,n){if(!e.client||!e.connected)return;const s={key:t};"label"in n&&(s.label=n.label),"thinkingLevel"in n&&(s.thinkingLevel=n.thinkingLevel),"verboseLevel"in n&&(s.verboseLevel=n.verboseLevel),"reasoningLevel"in n&&(s.reasoningLevel=n.reasoningLevel);try{await e.client.request("sessions.patch",s),await Zt(e)}catch(i){e.sessionsError=String(i)}}async function kp(e,t){if(!e.client||!e.connected||e.sessionsLoading||!window.confirm(`Delete session "${t}"?

Deletes the session entry and archives its transcript.`))return!1;e.sessionsLoading=!0,e.sessionsError=null;try{return await e.client.request("sessions.delete",{key:t,deleteTranscript:!0}),!0}catch(s){return e.sessionsError=String(s),!1}finally{e.sessionsLoading=!1}}async function Ap(e,t){return await kp(e,t)?(await Zt(e),!0):!1}function vn(e,t,n){if(!t.trim())return;const s={...e.skillMessages};n?s[t]=n:delete s[t],e.skillMessages=s}function Js(e){return e instanceof Error?e.message:String(e)}async function es(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{const n=await e.client.request("skills.status",{});n&&(e.skillsReport=n)}catch(n){e.skillsError=Js(n)}finally{e.skillsLoading=!1}}}function Cp(e,t,n){e.skillEdits={...e.skillEdits,[t]:n}}async function Tp(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.update",{skillKey:t,enabled:n}),await es(e),vn(e,t,{kind:"success",message:n?"Skill enabled":"Skill disabled"})}catch(s){const i=Js(s);e.skillsError=i,vn(e,t,{kind:"error",message:i})}finally{e.skillsBusyKey=null}}}async function _p(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const n=e.skillEdits[t]??"";await e.client.request("skills.update",{skillKey:t,apiKey:n}),await es(e),vn(e,t,{kind:"success",message:"API key saved"})}catch(n){const s=Js(n);e.skillsError=s,vn(e,t,{kind:"error",message:s})}finally{e.skillsBusyKey=null}}}async function Ep(e,t,n,s){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const i=await e.client.request("skills.install",{name:n,installId:s,timeoutMs:12e4});await es(e),vn(e,t,{kind:"success",message:i?.message??"Installed"})}catch(i){const o=Js(i);e.skillsError=o,vn(e,t,{kind:"error",message:o})}finally{e.skillsBusyKey=null}}}const Rp=[{label:"chat",tabs:["chat"]},{label:"control",tabs:["overview","channels","instances","sessions","usage","cron"]},{label:"agent",tabs:["agents","skills","nodes"]},{label:"settings",tabs:["config","debug","logs"]}],dc={agents:"/agents",overview:"/overview",channels:"/channels",instances:"/instances",sessions:"/sessions",usage:"/usage",cron:"/cron",skills:"/skills",nodes:"/nodes",chat:"/chat",config:"/config",debug:"/debug",logs:"/logs"},uc=new Map(Object.entries(dc).map(([e,t])=>[t,e]));function Et(e){if(!e)return"";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t==="/"?"":(t.endsWith("/")&&(t=t.slice(0,-1)),t)}function Gn(e){if(!e)return"/";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function Vs(e,t=""){const n=Et(t),s=dc[e];return n?`${n}${s}`:s}function gc(e,t=""){const n=Et(t);let s=e||"/";n&&(s===n?s="/":s.startsWith(`${n}/`)&&(s=s.slice(n.length)));let i=Gn(s).toLowerCase();return i.endsWith("/index.html")&&(i="/"),i==="/"?"chat":uc.get(i)??null}function pc(e){let t=Gn(e);if(t.endsWith("/index.html")&&(t=Gn(t.slice(0,-11))),t==="/")return"";const n=t.split("/").filter(Boolean);if(n.length===0)return"";for(let s=0;s<n.length;s++){const i=`/${n.slice(s).join("/")}`.toLowerCase();if(uc.has(i)){const o=n.slice(0,s);return o.length?`/${o.join("/")}`:""}}return`/${n.join("/")}`}function Ip(e){switch(e){case"agents":return"folder";case"chat":return"messageSquare";case"overview":return"barChart";case"channels":return"link";case"instances":return"radio";case"sessions":return"fileText";case"usage":return"barChart";case"cron":return"loader";case"skills":return"zap";case"nodes":return"monitor";case"config":return"settings";case"debug":return"bug";case"logs":return"scrollText";default:return"folder"}}function Ji(e){return p(`tabs.${e}`)}function Lp(e){return p(`subtitles.${e}`)}const fc="openclaw.control.settings.v1";function Mp(){const t={gatewayUrl:(()=>{const n=location.protocol==="https:"?"wss":"ws",s=typeof window<"u"&&typeof window.__OPENCLAW_CONTROL_UI_BASE_PATH__=="string"&&window.__OPENCLAW_CONTROL_UI_BASE_PATH__.trim(),i=s?Et(s):pc(location.pathname);return`${n}://${location.host}${i}`})(),token:"",sessionKey:"main",lastActiveSessionKey:"main",theme:"system",chatFocusMode:!1,chatShowThinking:!0,splitRatio:.6,navCollapsed:!1,navGroupsCollapsed:{}};try{const n=localStorage.getItem(fc);if(!n)return t;const s=JSON.parse(n);return{gatewayUrl:typeof s.gatewayUrl=="string"&&s.gatewayUrl.trim()?s.gatewayUrl.trim():t.gatewayUrl,token:typeof s.token=="string"?s.token:t.token,sessionKey:typeof s.sessionKey=="string"&&s.sessionKey.trim()?s.sessionKey.trim():t.sessionKey,lastActiveSessionKey:typeof s.lastActiveSessionKey=="string"&&s.lastActiveSessionKey.trim()?s.lastActiveSessionKey.trim():typeof s.sessionKey=="string"&&s.sessionKey.trim()||t.lastActiveSessionKey,theme:s.theme==="light"||s.theme==="dark"||s.theme==="system"?s.theme:t.theme,chatFocusMode:typeof s.chatFocusMode=="boolean"?s.chatFocusMode:t.chatFocusMode,chatShowThinking:typeof s.chatShowThinking=="boolean"?s.chatShowThinking:t.chatShowThinking,splitRatio:typeof s.splitRatio=="number"&&s.splitRatio>=.4&&s.splitRatio<=.7?s.splitRatio:t.splitRatio,navCollapsed:typeof s.navCollapsed=="boolean"?s.navCollapsed:t.navCollapsed,navGroupsCollapsed:typeof s.navGroupsCollapsed=="object"&&s.navGroupsCollapsed!==null?s.navGroupsCollapsed:t.navGroupsCollapsed,locale:So(s.locale)?s.locale:void 0}}catch{return t}}function Dp(e){localStorage.setItem(fc,JSON.stringify(e))}const ls=e=>Number.isNaN(e)?.5:e<=0?0:e>=1?1:e,Fp=()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches??!1,cs=e=>{e.classList.remove("theme-transition"),e.style.removeProperty("--theme-switch-x"),e.style.removeProperty("--theme-switch-y")},Pp=({nextTheme:e,applyTheme:t,context:n,currentTheme:s})=>{if(s===e)return;const i=globalThis.document??null;if(!i){t();return}const o=i.documentElement,a=i,r=Fp();if(!!a.startViewTransition&&!r){let d=.5,g=.5;if(n?.pointerClientX!==void 0&&n?.pointerClientY!==void 0&&typeof window<"u")d=ls(n.pointerClientX/window.innerWidth),g=ls(n.pointerClientY/window.innerHeight);else if(n?.element){const u=n.element.getBoundingClientRect();u.width>0&&u.height>0&&typeof window<"u"&&(d=ls((u.left+u.width/2)/window.innerWidth),g=ls((u.top+u.height/2)/window.innerHeight))}o.style.setProperty("--theme-switch-x",`${d*100}%`),o.style.setProperty("--theme-switch-y",`${g*100}%`),o.classList.add("theme-transition");try{const u=a.startViewTransition?.(()=>{t()});u?.finished?u.finished.finally(()=>cs(o)):cs(o)}catch{cs(o),t()}return}t(),cs(o)};function Np(){return typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Bo(e){return e==="system"?Np():e}function lt(e,t){const n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||"main"};e.settings=n,Dp(n),t.theme!==e.theme&&(e.theme=t.theme,Qs(e,Bo(t.theme))),e.applySessionKey=e.settings.lastActiveSessionKey}function hc(e,t){const n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&lt(e,{...e.settings,lastActiveSessionKey:n})}function Op(e){if(!window.location.search&&!window.location.hash)return;const t=new URL(window.location.href),n=new URLSearchParams(t.search),s=new URLSearchParams(t.hash.startsWith("#")?t.hash.slice(1):t.hash),i=n.get("token")??s.get("token"),o=n.get("password")??s.get("password"),a=n.get("session")??s.get("session"),r=n.get("gatewayUrl")??s.get("gatewayUrl");let l=!1;if(i!=null){const u=i.trim();u&&u!==e.settings.token&&lt(e,{...e.settings,token:u}),n.delete("token"),s.delete("token"),l=!0}if(o!=null&&(n.delete("password"),s.delete("password"),l=!0),a!=null){const u=a.trim();u&&(e.sessionKey=u,lt(e,{...e.settings,sessionKey:u,lastActiveSessionKey:u}))}if(r!=null){const u=r.trim();u&&u!==e.settings.gatewayUrl&&(e.pendingGatewayUrl=u),n.delete("gatewayUrl"),s.delete("gatewayUrl"),l=!0}const d=n.get("agent")??s.get("agent");if(d!=null&&typeof e.agentsSelectedId<"u"){const u=d.trim();u&&(e.agentsSelectedId=u)}if(!l)return;t.search=n.toString();const g=s.toString();t.hash=g?`#${g}`:"",window.history.replaceState({},"",t.toString())}function Up(e,t){bc(e,t,{refreshPolicy:"always",syncUrl:!0})}function Bp(e,t,n){Pp({nextTheme:t,applyTheme:()=>{e.theme=t,lt(e,{...e.settings,theme:t}),Qs(e,Bo(t))},context:n,currentTheme:e.theme})}async function mc(e){if(e.tab==="overview"&&await $c(e),e.tab==="channels"&&await Gp(e),e.tab==="instances"&&await Uo(e),e.tab==="sessions"&&await Zt(e),e.tab==="cron"&&await Ls(e),e.tab==="skills"&&await es(e),e.tab==="agents"){await Co(e),await Pn(e),await ze(e);const t=e.agentsList?.agents?.map(s=>s.id)??[];t.length>0&&Hl(e,t);const n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(Bl(e,n),e.agentsPanel==="skills"&&xs(e,n),e.agentsPanel==="channels"&&Ee(e,!1),e.agentsPanel==="cron"&&Ls(e))}e.tab==="nodes"&&(await Ws(e),await _t(e),await ze(e),await Oo(e)),e.tab==="chat"&&(await Mc(e),Qn(e,!e.chatHasAutoScrolled)),e.tab==="config"&&(await El(e),await ze(e)),e.tab==="debug"&&(await Ks(e),e.eventLog=e.eventLogBuffer),e.tab==="logs"&&(e.logsAtBottom=!0,await Ao(e,{reset:!0}),Fl(e,!0))}function Hp(){if(typeof window>"u")return"";const e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e=="string"&&e.trim()?Et(e):pc(window.location.pathname)}function zp(e){e.theme=e.settings.theme??"system",Qs(e,Bo(e.theme))}function Qs(e,t){if(e.themeResolved=t,typeof document>"u")return;const n=document.documentElement;n.dataset.theme=t,n.style.colorScheme=t}function jp(e){if(typeof window>"u"||typeof window.matchMedia!="function")return;if(e.themeMedia=window.matchMedia("(prefers-color-scheme: dark)"),e.themeMediaHandler=n=>{e.theme==="system"&&Qs(e,n.matches?"dark":"light")},typeof e.themeMedia.addEventListener=="function"){e.themeMedia.addEventListener("change",e.themeMediaHandler);return}e.themeMedia.addListener(e.themeMediaHandler)}function Kp(e){if(!e.themeMedia||!e.themeMediaHandler)return;if(typeof e.themeMedia.removeEventListener=="function"){e.themeMedia.removeEventListener("change",e.themeMediaHandler);return}e.themeMedia.removeListener(e.themeMediaHandler),e.themeMedia=null,e.themeMediaHandler=null}function Wp(e,t){if(typeof window>"u")return;const n=gc(window.location.pathname,e.basePath)??"chat";vc(e,n),Ho(e,n,t)}function qp(e){if(typeof window>"u")return;const t=gc(window.location.pathname,e.basePath);if(!t)return;const s=new URL(window.location.href).searchParams.get("session")?.trim();s&&(e.sessionKey=s,lt(e,{...e.settings,sessionKey:s,lastActiveSessionKey:s})),vc(e,t)}function vc(e,t){bc(e,t,{refreshPolicy:"connected"})}function bc(e,t,n){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Pl(e):Nl(e),t==="debug"?Ol(e):Ul(e),(n.refreshPolicy==="always"||e.connected)&&mc(e),n.syncUrl&&Ho(e,t,!1)}function Ho(e,t,n){if(typeof window>"u")return;const s=Gn(Vs(t,e.basePath)),i=Gn(window.location.pathname),o=new URL(window.location.href);t==="chat"&&e.sessionKey?o.searchParams.set("session",e.sessionKey):o.searchParams.delete("session"),t==="agents"&&e.agentsSelectedId&&o.searchParams.set("agent",e.agentsSelectedId),i!==s&&(o.pathname=s),n?window.history.replaceState({},"",o.toString()):window.history.pushState({},"",o.toString())}function yc(e,t,n){if(typeof window>"u")return;const s=new URL(window.location.href);s.searchParams.set("session",t),window.history.replaceState({},"",s.toString())}async function $c(e){await Promise.all([Ee(e,!1),Uo(e),Zt(e),Zn(e),Ks(e)])}async function Gp(e){await Promise.all([Ee(e,!0),El(e),ze(e)])}async function Ls(e){const t=e;if(await Promise.all([Ee(e,!1),Zn(t),qs(t),yg(t)]),t.cronRunsScope==="all"){await xt(t,null);return}t.cronRunsJobId&&await xt(t,t.cronRunsJobId)}const Za=50,Jp=80,Vp=12e4;function Pe(e){if(typeof e!="string")return null;const t=e.trim();return t||null}function rn(e,t){const n=Pe(t);if(!n)return null;const s=Pe(e);if(s){const o=`${s}/`;if(n.toLowerCase().startsWith(o.toLowerCase())){const a=n.slice(o.length).trim();if(a)return`${s}/${a}`}return`${s}/${n}`}const i=n.indexOf("/");if(i>0){const o=n.slice(0,i).trim(),a=n.slice(i+1).trim();if(o&&a)return`${o}/${a}`}return n}function Qp(e){return Array.isArray(e)?e.map(t=>Pe(t)).filter(t=>!!t):[]}function Yp(e){if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,i=Pe(s.provider),o=Pe(s.model);if(!i||!o)continue;const a=Pe(s.reason)?.replace(/_/g," ")??Pe(s.code)??(typeof s.status=="number"?`HTTP ${s.status}`:null)??Pe(s.error)??"error";t.push({provider:i,model:o,reason:a})}return t}function Zp(e){if(!e||typeof e!="object")return null;const t=e;if(typeof t.text=="string")return t.text;const n=t.content;if(!Array.isArray(n))return null;const s=n.map(i=>{if(!i||typeof i!="object")return null;const o=i;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(i=>!!i);return s.length===0?null:s.join(`
`)}function Xa(e){if(e==null)return null;if(typeof e=="number"||typeof e=="boolean")return String(e);const t=Zp(e);let n;if(typeof e=="string")n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}const s=zl(n,Vp);return s.truncated?`${s.text}

… truncated (${s.total} chars, showing first ${s.text.length}).`:s.text}function Xp(e){const t=[];return t.push({type:"toolcall",name:e.name,arguments:e.args??{}}),e.output&&t.push({type:"toolresult",name:e.name,text:e.output}),{role:"assistant",toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function ef(e){if(e.toolStreamOrder.length<=Za)return;const t=e.toolStreamOrder.length-Za,n=e.toolStreamOrder.splice(0,t);for(const s of n)e.toolStreamById.delete(s)}function tf(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(t=>!!t)}function Vi(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),tf(e)}function nf(e,t=!1){if(t){Vi(e);return}e.toolStreamSyncTimer==null&&(e.toolStreamSyncTimer=window.setTimeout(()=>Vi(e),Jp))}function Ys(e){e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],Vi(e)}const sf=5e3,of=8e3;function af(e,t){const n=t.data??{},s=typeof n.phase=="string"?n.phase:"";e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),s==="start"?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:s==="end"&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},sf))}function xc(e,t,n){const s=typeof t.sessionKey=="string"?t.sessionKey:void 0;return s&&s!==e.sessionKey?{accepted:!1}:!e.chatRunId&&n?.allowSessionScopedWhenIdle&&s?{accepted:!0,sessionKey:s}:!s&&e.chatRunId&&t.runId!==e.chatRunId?{accepted:!1}:e.chatRunId&&t.runId!==e.chatRunId?{accepted:!1}:e.chatRunId?{accepted:!0,sessionKey:s}:{accepted:!1}}function rf(e,t){const n=t.data??{},s=t.stream==="fallback"?"fallback":Pe(n.phase);if(t.stream==="lifecycle"&&s!=="fallback"&&s!=="fallback_cleared"||!xc(e,t,{allowSessionScopedWhenIdle:!0}).accepted)return;const o=rn(n.selectedProvider,n.selectedModel)??rn(n.fromProvider,n.fromModel),a=rn(n.activeProvider,n.activeModel)??rn(n.toProvider,n.toModel),r=rn(n.previousActiveProvider,n.previousActiveModel)??Pe(n.previousActiveModel);if(!o||!a||s==="fallback"&&o===a)return;const l=Pe(n.reasonSummary)??Pe(n.reason),d=(()=>{const g=Qp(n.attemptSummaries);return g.length>0?g:Yp(n.attempts).map(u=>`${rn(u.provider,u.model)??`${u.provider}/${u.model}`}: ${u.reason}`)})();e.fallbackClearTimer!=null&&(window.clearTimeout(e.fallbackClearTimer),e.fallbackClearTimer=null),e.fallbackStatus={phase:s==="fallback_cleared"?"cleared":"active",selected:o,active:s==="fallback_cleared"?o:a,previous:s==="fallback_cleared"?r??(a!==o?a:void 0):void 0,reason:l??void 0,attempts:d,occurredAt:Date.now()},e.fallbackClearTimer=window.setTimeout(()=>{e.fallbackStatus=null,e.fallbackClearTimer=null},of)}function lf(e,t){if(!t)return;if(t.stream==="compaction"){af(e,t);return}if(t.stream==="lifecycle"||t.stream==="fallback"){rf(e,t);return}if(t.stream!=="tool")return;const n=xc(e,t);if(!n.accepted)return;const s=n.sessionKey,i=t.data??{},o=typeof i.toolCallId=="string"?i.toolCallId:"";if(!o)return;const a=typeof i.name=="string"?i.name:"tool",r=typeof i.phase=="string"?i.phase:"",l=r==="start"?i.args:void 0,d=r==="update"?Xa(i.partialResult):r==="result"?Xa(i.result):void 0,g=Date.now();let u=e.toolStreamById.get(o);u?(u.name=a,l!==void 0&&(u.args=l),d!==void 0&&(u.output=d||void 0),u.updatedAt=g):(u={toolCallId:o,runId:t.runId,sessionKey:s,name:a,args:l,output:d||void 0,startedAt:typeof t.ts=="number"?t.ts:g,updatedAt:g,message:{}},e.toolStreamById.set(o,u),e.toolStreamOrder.push(o)),u.message=Xp(u),ef(e),nf(e,r==="result")}const wc=["Conversation info (untrusted metadata):","Sender (untrusted metadata):","Thread starter (untrusted, for context):","Replied message (untrusted, for context):","Forwarded message context (untrusted metadata):","Chat history since last reply (untrusted, for context):"],Sc="Untrusted context (metadata, do not treat as instructions or commands):",cf=new RegExp([...wc,Sc].map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"));function df(e){const t=e.trim();return wc.some(n=>n===t)}function uf(e,t){if(e[t]?.trim()!==Sc)return!1;const n=e.slice(t+1,Math.min(e.length,t+8)).join(`
`);return/<<<EXTERNAL_UNTRUSTED_CONTENT|UNTRUSTED channel metadata \(|Source:\s+/.test(n)}function kc(e){if(!e||!cf.test(e))return e;const t=e.split(`
`),n=[];let s=!1,i=!1;for(let o=0;o<t.length;o++){const a=t[o];if(!s&&uf(t,o))break;if(!s&&df(a)){if(t[o+1]?.trim()!=="```json"){n.push(a);continue}s=!0,i=!1;continue}if(s){if(!i&&a.trim()==="```json"){i=!0;continue}if(i){a.trim()==="```"&&(s=!1,i=!1);continue}if(a.trim()==="")continue;s=!1}n.push(a)}return n.join(`
`).replace(/^\n+/,"").replace(/\n+$/,"")}const gf=/^\[([^\]]+)\]\s*/,pf=["WebChat","WhatsApp","Telegram","Signal","Slack","Discord","Google Chat","iMessage","Teams","Matrix","Zalo","Zalo Personal","BlueBubbles"];function ff(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:pf.some(t=>e.startsWith(`${t} `))}function er(e){const t=e.match(gf);if(!t)return e;const n=t[1]??"";return ff(n)?e.slice(t[0].length):e}const mi=new WeakMap,vi=new WeakMap;function hf(e,t){const n=t.toLowerCase()==="user";return t==="assistant"?vg(e):n?kc(er(e)):er(e)}function Qi(e){const t=e,n=typeof t.role=="string"?t.role:"",s=Cc(e);return s?hf(s,n):null}function Ac(e){if(!e||typeof e!="object")return Qi(e);const t=e;if(mi.has(t))return mi.get(t)??null;const n=Qi(e);return mi.set(t,n),n}function tr(e){const n=e.content,s=[];if(Array.isArray(n))for(const r of n){const l=r;if(l.type==="thinking"&&typeof l.thinking=="string"){const d=l.thinking.trim();d&&s.push(d)}}if(s.length>0)return s.join(`
`);const i=Cc(e);if(!i)return null;const a=[...i.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(r=>(r[1]??"").trim()).filter(Boolean);return a.length>0?a.join(`
`):null}function mf(e){if(!e||typeof e!="object")return tr(e);const t=e;if(vi.has(t))return vi.get(t)??null;const n=tr(e);return vi.set(t,n),n}function Cc(e){const t=e,n=t.content;if(typeof n=="string")return n;if(Array.isArray(n)){const s=n.map(i=>{const o=i;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(i=>typeof i=="string");if(s.length>0)return s.join(`
`)}return typeof t.text=="string"?t.text:null}function vf(e){const t=e.trim();if(!t)return"";const n=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(s=>`_${s}_`);return n.length?["_Reasoning:_",...n].join(`
`):""}let nr=!1;function sr(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function bf(){const e=new Uint8Array(16),t=Date.now();for(let n=0;n<e.length;n++)e[n]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function yf(){nr||(nr=!0,console.warn("[uuid] crypto API missing; falling back to weak randomness"))}function Zs(e=globalThis.crypto){if(e&&typeof e.randomUUID=="function")return e.randomUUID();if(e&&typeof e.getRandomValues=="function"){const t=new Uint8Array(16);return e.getRandomValues(t),sr(t)}return yf(),sr(bf())}async function fn(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{const t=await e.client.request("chat.history",{sessionKey:e.sessionKey,limit:200});e.chatMessages=Array.isArray(t.messages)?t.messages:[],e.chatThinkingLevel=t.thinkingLevel??null}catch(t){e.lastError=String(t)}finally{e.chatLoading=!1}}}function $f(e){const t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}function Tc(e,t){if(!e||typeof e!="object")return null;const n=e,s=n.role;if(typeof s=="string"){if((t.roleCaseSensitive?s:s.toLowerCase())!=="assistant")return null}else if(t.roleRequirement==="required")return null;return t.requireContentArray?Array.isArray(n.content)?n:null:!("content"in n)&&!(t.allowTextField&&"text"in n)?null:n}function xf(e){return Tc(e,{roleRequirement:"required",roleCaseSensitive:!0,requireContentArray:!0})}function ir(e){return Tc(e,{roleRequirement:"optional",allowTextField:!0})}async function wf(e,t,n){if(!e.client||!e.connected)return null;const s=t.trim(),i=n&&n.length>0;if(!s&&!i)return null;const o=Date.now(),a=[];if(s&&a.push({type:"text",text:s}),i)for(const d of n)a.push({type:"image",source:{type:"base64",media_type:d.mimeType,data:d.dataUrl}});e.chatMessages=[...e.chatMessages,{role:"user",content:a,timestamp:o}],e.chatSending=!0,e.lastError=null;const r=Zs();e.chatRunId=r,e.chatStream="",e.chatStreamStartedAt=o;const l=i?n.map(d=>{const g=$f(d.dataUrl);return g?{type:"image",mimeType:g.mimeType,content:g.content}:null}).filter(d=>d!==null):void 0;try{return await e.client.request("chat.send",{sessionKey:e.sessionKey,message:s,deliver:!1,idempotencyKey:r,attachments:l}),r}catch(d){const g=String(d);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=g,e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:"Error: "+g}],timestamp:Date.now()}],null}finally{e.chatSending=!1}}async function Sf(e){if(!e.client||!e.connected)return!1;const t=e.chatRunId;try{return await e.client.request("chat.abort",t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(n){return e.lastError=String(n),!1}}function kf(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId){if(t.state==="final"){const n=ir(t.message);return n?(e.chatMessages=[...e.chatMessages,n],null):"final"}return null}if(t.state==="delta"){const n=Qi(t.message);if(typeof n=="string"){const s=e.chatStream??"";(!s||n.length>=s.length)&&(e.chatStream=n)}}else if(t.state==="final"){const n=ir(t.message);n&&(e.chatMessages=[...e.chatMessages,n]),e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null}else if(t.state==="aborted"){const n=xf(t.message);if(n)e.chatMessages=[...e.chatMessages,n];else{const s=e.chatStream??"";s.trim()&&(e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:s}],timestamp:Date.now()}])}e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null}else t.state==="error"&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??"chat error");return t.state}const _c=120;function Ec(e){return e.chatSending||!!e.chatRunId}function Af(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/stop"?!0:n==="stop"||n==="esc"||n==="abort"||n==="wait"||n==="exit"}function Cf(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/new"||n==="/reset"?!0:n.startsWith("/new ")||n.startsWith("/reset ")}async function Rc(e){e.connected&&(e.chatMessage="",await Sf(e))}function Tf(e,t,n,s){const i=t.trim(),o=!!(n&&n.length>0);!i&&!o||(e.chatQueue=[...e.chatQueue,{id:Zs(),text:i,createdAt:Date.now(),attachments:o?n?.map(a=>({...a})):void 0,refreshSessions:s}])}async function Ic(e,t,n){Ys(e);const s=await wf(e,t,n?.attachments),i=!!s;return!i&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!i&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),i&&hc(e,e.sessionKey),i&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),i&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),Qn(e),i&&!e.chatRunId&&Lc(e),i&&n?.refreshSessions&&s&&e.refreshSessionsAfterChat.add(s),i}async function Lc(e){if(!e.connected||Ec(e))return;const[t,...n]=e.chatQueue;if(!t)return;e.chatQueue=n,await Ic(e,t.text,{attachments:t.attachments,refreshSessions:t.refreshSessions})||(e.chatQueue=[t,...e.chatQueue])}function _f(e,t){e.chatQueue=e.chatQueue.filter(n=>n.id!==t)}async function Ef(e,t,n){if(!e.connected)return;const s=e.chatMessage,i=(t??e.chatMessage).trim(),o=e.chatAttachments??[],a=t==null?o:[],r=a.length>0;if(!i&&!r)return;if(Af(i)){await Rc(e);return}const l=Cf(i);if(t==null&&(e.chatMessage="",e.chatAttachments=[]),Ec(e)){Tf(e,i,a,l);return}await Ic(e,i,{previousDraft:t==null?s:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:r?a:void 0,previousAttachments:t==null?o:void 0,restoreAttachments:!!(t&&n?.restoreDraft),refreshSessions:l})}async function Mc(e,t){await Promise.all([fn(e),Zt(e,{activeMinutes:_c}),Yi(e)]),t?.scheduleScroll!==!1&&Qn(e)}const Rf=Lc;function If(e){const t=Dl(e.sessionKey);return t?.agentId?t.agentId:e.hello?.snapshot?.sessionDefaults?.defaultAgentId?.trim()||"main"}function Lf(e,t){const n=Et(e),s=encodeURIComponent(t);return n?`${n}/avatar/${s}?meta=1`:`/avatar/${s}?meta=1`}async function Yi(e){if(!e.connected){e.chatAvatarUrl=null;return}const t=If(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;const n=Lf(e.basePath,t);try{const s=await fetch(n,{method:"GET"});if(!s.ok){e.chatAvatarUrl=null;return}const i=await s.json(),o=typeof i.avatarUrl=="string"?i.avatarUrl.trim():"";e.chatAvatarUrl=o||null}catch{e.chatAvatarUrl=null}}const Zi="/__openclaw/control-ui-config.json",Mf="update.available";function Df(e){if(!e||e.state!=="final")return!1;if(!e.message||typeof e.message!="object")return!0;const t=e.message,n=typeof t.role=="string"?t.role.toLowerCase():"";return!!(n&&n!=="assistant")}const Ff=50,Pf=200,Nf="Assistant";function or(e,t){if(typeof e!="string")return;const n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}function zo(e){const t=or(e?.name,Ff)??Nf,n=or(e?.avatar??void 0,Pf)??null;return{agentId:typeof e?.agentId=="string"&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}async function Dc(e,t){if(!e.client||!e.connected)return;const n=e.sessionKey.trim(),s=n?{sessionKey:n}:{};try{const i=await e.client.request("agent.identity.get",s);if(!i)return;const o=zo(i);e.assistantName=o.name,e.assistantAvatar=o.avatar,e.assistantAgentId=o.agentId??null}catch{}}function Xi(e){return typeof e=="object"&&e!==null}function Of(e){if(!Xi(e))return null;const t=typeof e.id=="string"?e.id.trim():"",n=e.request;if(!t||!Xi(n))return null;const s=typeof n.command=="string"?n.command.trim():"";if(!s)return null;const i=typeof e.createdAtMs=="number"?e.createdAtMs:0,o=typeof e.expiresAtMs=="number"?e.expiresAtMs:0;return!i||!o?null:{id:t,request:{command:s,cwd:typeof n.cwd=="string"?n.cwd:null,host:typeof n.host=="string"?n.host:null,security:typeof n.security=="string"?n.security:null,ask:typeof n.ask=="string"?n.ask:null,agentId:typeof n.agentId=="string"?n.agentId:null,resolvedPath:typeof n.resolvedPath=="string"?n.resolvedPath:null,sessionKey:typeof n.sessionKey=="string"?n.sessionKey:null},createdAtMs:i,expiresAtMs:o}}function Uf(e){if(!Xi(e))return null;const t=typeof e.id=="string"?e.id.trim():"";return t?{id:t,decision:typeof e.decision=="string"?e.decision:null,resolvedBy:typeof e.resolvedBy=="string"?e.resolvedBy:null,ts:typeof e.ts=="number"?e.ts:null}:null}function Fc(e){const t=Date.now();return e.filter(n=>n.expiresAtMs>t)}function Bf(e,t){const n=Fc(e).filter(s=>s.id!==t.id);return n.push(t),n}function ar(e,t){return Fc(e).filter(n=>n.id!==t)}function Hf(e){const t=e.scopes.join(","),n=e.token??"";return["v2",e.deviceId,e.clientId,e.clientMode,e.role,t,String(e.signedAtMs),n,e.nonce].join("|")}const Pc={WEBCHAT_UI:"webchat-ui",CONTROL_UI:"openclaw-control-ui",WEBCHAT:"webchat",CLI:"cli",GATEWAY_CLIENT:"gateway-client",MACOS_APP:"openclaw-macos",IOS_APP:"openclaw-ios",ANDROID_APP:"openclaw-android",NODE_HOST:"node-host",TEST:"test",FINGERPRINT:"fingerprint",PROBE:"openclaw-probe"},rr=Pc,eo={WEBCHAT:"webchat",CLI:"cli",UI:"ui",BACKEND:"backend",NODE:"node",PROBE:"probe",TEST:"test"};new Set(Object.values(Pc));new Set(Object.values(eo));const me={AUTH_REQUIRED:"AUTH_REQUIRED",AUTH_UNAUTHORIZED:"AUTH_UNAUTHORIZED",AUTH_TOKEN_MISSING:"AUTH_TOKEN_MISSING",AUTH_TOKEN_MISMATCH:"AUTH_TOKEN_MISMATCH",AUTH_TOKEN_NOT_CONFIGURED:"AUTH_TOKEN_NOT_CONFIGURED",AUTH_PASSWORD_MISSING:"AUTH_PASSWORD_MISSING",AUTH_PASSWORD_MISMATCH:"AUTH_PASSWORD_MISMATCH",AUTH_PASSWORD_NOT_CONFIGURED:"AUTH_PASSWORD_NOT_CONFIGURED",AUTH_DEVICE_TOKEN_MISMATCH:"AUTH_DEVICE_TOKEN_MISMATCH",AUTH_RATE_LIMITED:"AUTH_RATE_LIMITED",AUTH_TAILSCALE_IDENTITY_MISSING:"AUTH_TAILSCALE_IDENTITY_MISSING",AUTH_TAILSCALE_PROXY_MISSING:"AUTH_TAILSCALE_PROXY_MISSING",AUTH_TAILSCALE_WHOIS_FAILED:"AUTH_TAILSCALE_WHOIS_FAILED",AUTH_TAILSCALE_IDENTITY_MISMATCH:"AUTH_TAILSCALE_IDENTITY_MISMATCH",CONTROL_UI_DEVICE_IDENTITY_REQUIRED:"CONTROL_UI_DEVICE_IDENTITY_REQUIRED",DEVICE_IDENTITY_REQUIRED:"DEVICE_IDENTITY_REQUIRED",PAIRING_REQUIRED:"PAIRING_REQUIRED"};function zf(e){if(!e||typeof e!="object"||Array.isArray(e))return null;const t=e.code;return typeof t=="string"&&t.trim().length>0?t:null}class lr extends Error{constructor(t){super(t.message),this.name="GatewayRequestError",this.gatewayCode=t.code,this.details=t.details}}function jf(e){return zf(e?.details)}const Kf=4008;class Wf{constructor(t){this.opts=t,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.pendingConnectError=void 0,this.flushPending(new Error("gateway client stopped"))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.addEventListener("open",()=>this.queueConnect()),this.ws.addEventListener("message",t=>this.handleMessage(String(t.data??""))),this.ws.addEventListener("close",t=>{const n=String(t.reason??""),s=this.pendingConnectError;this.pendingConnectError=void 0,this.ws=null,this.flushPending(new Error(`gateway closed (${t.code}): ${n}`)),this.opts.onClose?.({code:t.code,reason:n,error:s}),this.scheduleReconnect()}),this.ws.addEventListener("error",()=>{}))}scheduleReconnect(){if(this.closed)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),t)}flushPending(t){for(const[,n]of this.pending)n.reject(t);this.pending.clear()}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);const t=typeof crypto<"u"&&!!crypto.subtle,n=["operator.admin","operator.approvals","operator.pairing"],s="operator";let i=null,o=!1,a=this.opts.token;if(t){i=await No();const g=Hg({deviceId:i.deviceId,role:s})?.token;a=g??this.opts.token,o=!!(g&&this.opts.token)}const r=a||this.opts.password?{token:a,password:this.opts.password}:void 0;let l;if(t&&i){const g=Date.now(),u=this.connectNonce??"",m=Hf({deviceId:i.deviceId,clientId:this.opts.clientName??rr.CONTROL_UI,clientMode:this.opts.mode??eo.WEBCHAT,role:s,scopes:n,signedAtMs:g,token:a??null,nonce:u}),h=await gp(i.privateKey,m);l={id:i.deviceId,publicKey:i.publicKey,signature:h,signedAt:g,nonce:u}}const d={minProtocol:3,maxProtocol:3,client:{id:this.opts.clientName??rr.CONTROL_UI,version:this.opts.clientVersion??"dev",platform:this.opts.platform??navigator.platform??"web",mode:this.opts.mode??eo.WEBCHAT,instanceId:this.opts.instanceId},role:s,scopes:n,device:l,caps:[],auth:r,userAgent:navigator.userAgent,locale:navigator.language};this.request("connect",d).then(g=>{g?.auth?.deviceToken&&i&&Jl({deviceId:i.deviceId,role:g.auth.role??s,token:g.auth.deviceToken,scopes:g.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(g)}).catch(g=>{g instanceof lr?this.pendingConnectError={code:g.gatewayCode,message:g.message,details:g.details}:this.pendingConnectError=void 0,o&&i&&Vl({deviceId:i.deviceId,role:s}),this.ws?.close(Kf,"connect failed")})}handleMessage(t){let n;try{n=JSON.parse(t)}catch{return}const s=n;if(s.type==="event"){const i=n;if(i.event==="connect.challenge"){const a=i.payload,r=a&&typeof a.nonce=="string"?a.nonce:null;r&&(this.connectNonce=r,this.sendConnect());return}const o=typeof i.seq=="number"?i.seq:null;o!==null&&(this.lastSeq!==null&&o>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:o}),this.lastSeq=o);try{this.opts.onEvent?.(i)}catch(a){console.error("[gateway] event handler error:",a)}return}if(s.type==="res"){const i=n,o=this.pending.get(i.id);if(!o)return;this.pending.delete(i.id),i.ok?o.resolve(i.payload):o.reject(new lr({code:i.error?.code??"UNAVAILABLE",message:i.error?.message??"request failed",details:i.error?.details}));return}}request(t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(new Error("gateway not connected"));const s=Zs(),i={type:"req",id:s,method:t,params:n},o=new Promise((a,r)=>{this.pending.set(s,{resolve:l=>a(l),reject:r})});return this.ws.send(JSON.stringify(i)),o}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}}function bi(e,t){const n=(e??"").trim(),s=t.mainSessionKey?.trim();if(!s)return n;if(!n)return s;const i=t.mainKey?.trim()||"main",o=t.defaultAgentId?.trim();return n==="main"||n===i||o&&(n===`agent:${o}:main`||n===`agent:${o}:${i}`)?s:n}function qf(e,t){if(!t?.mainSessionKey)return;const n=bi(e.sessionKey,t),s=bi(e.settings.sessionKey,t),i=bi(e.settings.lastActiveSessionKey,t),o=n||s||e.sessionKey,a={...e.settings,sessionKey:s||o,lastActiveSessionKey:i||o},r=a.sessionKey!==e.settings.sessionKey||a.lastActiveSessionKey!==e.settings.lastActiveSessionKey;o!==e.sessionKey&&(e.sessionKey=o),r&&lt(e,a)}async function Gf(e){try{const n=Et(e.basePath??"")+Zi,s=await fetch(n,{method:"GET",headers:{Accept:"application/json"},credentials:"same-origin"});if(!s.ok)return;const i=await s.json(),o=typeof i?.gatewayToken=="string"?i.gatewayToken.trim():"";if(!o)return;lt(e,{...e.settings,token:o}),e.lastError=null,e.lastErrorCode=null,jo(e)}catch{}}function jo(e){e.lastError=null,e.lastErrorCode=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null;const t=e.client,n=new Wf({url:e.settings.gatewayUrl,token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:"openclaw-control-ui",mode:"webchat",instanceId:e.clientInstanceId,onHello:s=>{e.client===n&&(e.connected=!0,e.lastError=null,e.lastErrorCode=null,e.hello=s,Zf(e,s),e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,Ys(e),Dc(e),Co(e),Pn(e),Ws(e,{quiet:!0}),_t(e,{quiet:!0}),mc(e))},onClose:({code:s,reason:i,error:o})=>{if(e.client===n)if(e.connected=!1,e.lastErrorCode=jf(o)??(typeof o?.code=="string"?o.code:null),s!==1012){if(o?.message?e.lastError=o.message:e.lastError=`disconnected (${s}): ${i||"no reason"}`,(s===1008||typeof i=="string"&&/unauthorized|token/i.test(i))&&!e.settings.token?.trim()&&typeof e.basePath<"u"){Gf(e);return}}else e.lastError=null,e.lastErrorCode=null},onEvent:s=>{e.client===n&&Jf(e,s)},onGap:({expected:s,received:i})=>{e.client===n&&(e.lastError=`event gap detected (expected seq ${s}, got ${i}); refresh recommended`,e.lastErrorCode=null)}});e.client=n,t?.stop(),n.start()}function Jf(e,t){try{Yf(e,t)}catch(n){console.error("[gateway] handleGatewayEvent error:",t.event,n)}}function Vf(e,t,n){if(n!=="final"&&n!=="error"&&n!=="aborted")return;Ys(e),Rf(e);const s=t?.runId;!s||!e.refreshSessionsAfterChat.has(s)||(e.refreshSessionsAfterChat.delete(s),n==="final"&&Zt(e,{activeMinutes:_c}))}function Qf(e,t){t?.sessionKey&&hc(e,t.sessionKey);const n=kf(e,t);Vf(e,t,n),n==="final"&&Df(t)&&fn(e)}function Yf(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),e.tab==="debug"&&(e.eventLog=e.eventLogBuffer),t.event==="agent"){if(e.onboarding)return;lf(e,t.payload);return}if(t.event==="chat"){Qf(e,t.payload);return}if(t.event==="presence"){const n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event==="cron"&&e.tab==="cron"&&Ls(e),(t.event==="device.pair.requested"||t.event==="device.pair.resolved")&&_t(e,{quiet:!0}),t.event==="exec.approval.requested"){const n=Of(t.payload);if(n){e.execApprovalQueue=Bf(e.execApprovalQueue,n),e.execApprovalError=null;const s=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=ar(e.execApprovalQueue,n.id)},s)}return}if(t.event==="exec.approval.resolved"){const n=Uf(t.payload);n&&(e.execApprovalQueue=ar(e.execApprovalQueue,n.id));return}if(t.event===Mf){const n=t.payload;e.updateAvailable=n?.updateAvailable??null}}function Zf(e,t){const n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health),n?.sessionDefaults&&qf(e,n.sessionDefaults),e.updateAvailable=n?.updateAvailable??null}async function Xf(e){if(typeof window>"u"||typeof fetch!="function")return;const t=Et(e.basePath??""),n=t?`${t}${Zi}`:Zi;try{const s=await fetch(n,{method:"GET",headers:{Accept:"application/json"},credentials:"same-origin"});if(!s.ok)return;const i=await s.json(),o=zo({agentId:i.assistantAgentId??null,name:i.assistantName,avatar:i.assistantAvatar??null});e.assistantName=o.name,e.assistantAvatar=o.avatar,e.assistantAgentId=o.agentId??null}catch{}}function eh(e){e.basePath=Hp(),Xf(e),Op(e),Wp(e,!0),zp(e),jp(e),window.addEventListener("popstate",e.popStateHandler),jo(e),lg(e),e.tab==="logs"&&Pl(e),e.tab==="debug"&&Ol(e)}function th(e){tg(e)}function nh(e){window.removeEventListener("popstate",e.popStateHandler),cg(e),Nl(e),Ul(e),e.client?.stop(),e.client=null,e.connected=!1,Kp(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function sh(e,t){if(!(e.tab==="chat"&&e.chatManualRefreshInFlight)){if(e.tab==="chat"&&(t.has("chatMessages")||t.has("chatToolMessages")||t.has("chatStream")||t.has("chatLoading")||t.has("tab"))){const n=t.has("tab"),s=t.has("chatLoading")&&t.get("chatLoading")===!0&&!e.chatLoading;Qn(e,n||s||!e.chatHasAutoScrolled)}e.tab==="logs"&&(t.has("logsEntries")||t.has("logsAutoFollow")||t.has("tab"))&&e.logsAutoFollow&&e.logsAtBottom&&Fl(e,t.has("tab")||t.has("logsAutoFollow"))}}const Nc="openclaw.control.usage.date-params.v1",ih="__default__",oh=/unexpected property ['"]mode['"]/i,ah=/unexpected property ['"]utcoffset['"]/i,rh=/invalid sessions\.usage params/i;let yi=null;function Oc(){return typeof window<"u"&&window.localStorage?window.localStorage:typeof localStorage<"u"?localStorage:null}function lh(){const e=Oc();if(!e)return new Set;try{const t=e.getItem(Nc);if(!t)return new Set;const n=JSON.parse(t);return!n||!Array.isArray(n.unsupportedGatewayKeys)?new Set:new Set(n.unsupportedGatewayKeys.filter(s=>typeof s=="string").map(s=>s.trim()).filter(Boolean))}catch{return new Set}}function ch(e){const t=Oc();if(t)try{t.setItem(Nc,JSON.stringify({unsupportedGatewayKeys:Array.from(e)}))}catch{}}function Uc(){return yi||(yi=lh()),yi}function dh(e){const t=e?.trim();if(!t)return ih;try{const n=new URL(t),s=n.pathname==="/"?"":n.pathname;return`${n.protocol}//${n.host}${s}`.toLowerCase()}catch{return t.toLowerCase()}}function Bc(e){return dh(e.settings?.gatewayUrl)}function uh(e){return!Uc().has(Bc(e))}function gh(e){const t=Uc();t.add(Bc(e)),ch(t)}function ph(e){const t=Hc(e);return rh.test(t)&&(oh.test(t)||ah.test(t))}const fh=e=>{const t=-e,n=t>=0?"+":"-",s=Math.abs(t),i=Math.floor(s/60),o=s%60;return o===0?`UTC${n}${i}`:`UTC${n}${i}:${o.toString().padStart(2,"0")}`},hh=(e,t)=>{if(t)return e==="utc"?{mode:"utc"}:{mode:"specific",utcOffset:fh(new Date().getTimezoneOffset())}};function Hc(e){if(typeof e=="string")return e;if(e instanceof Error&&typeof e.message=="string"&&e.message.trim())return e.message;if(e&&typeof e=="object")try{const t=JSON.stringify(e);if(t)return t}catch{}return"request failed"}async function to(e,t){const n=e.client;if(!(!n||!e.connected)&&!e.usageLoading){e.usageLoading=!0,e.usageError=null;try{const s=t?.startDate??e.usageStartDate,i=t?.endDate??e.usageEndDate,o=async l=>{const d=hh(e.usageTimeZone,l);return await Promise.all([n.request("sessions.usage",{startDate:s,endDate:i,...d,limit:1e3,includeContextWeight:!0}),n.request("usage.cost",{startDate:s,endDate:i,...d})])},a=(l,d)=>{l&&(e.usageResult=l),d&&(e.usageCostSummary=d)},r=uh(e);try{const[l,d]=await o(r);a(l,d)}catch(l){if(r&&ph(l)){gh(e);const[d,g]=await o(!1);a(d,g)}else throw l}}catch(s){e.usageError=Hc(s)}finally{e.usageLoading=!1}}}async function mh(e,t){if(!(!e.client||!e.connected)&&!e.usageTimeSeriesLoading){e.usageTimeSeriesLoading=!0,e.usageTimeSeries=null;try{const n=await e.client.request("sessions.usage.timeseries",{key:t});n&&(e.usageTimeSeries=n)}catch{e.usageTimeSeries=null}finally{e.usageTimeSeriesLoading=!1}}}async function vh(e,t){if(!(!e.client||!e.connected)&&!e.usageSessionLogsLoading){e.usageSessionLogsLoading=!0,e.usageSessionLogs=null;try{const n=await e.client.request("sessions.usage.logs",{key:t,limit:1e3});n&&Array.isArray(n.logs)&&(e.usageSessionLogs=n.logs)}catch{e.usageSessionLogs=null}finally{e.usageSessionLogsLoading=!1}}}const bh=new Set(["agent","channel","chat","provider","model","tool","label","key","session","id","has","mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"]),Ms=e=>e.trim().toLowerCase(),yh=e=>{const t=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*").replace(/\?/g,".");return new RegExp(`^${t}$`,"i")},Ut=e=>{let t=e.trim().toLowerCase();if(!t)return null;t.startsWith("$")&&(t=t.slice(1));let n=1;t.endsWith("k")?(n=1e3,t=t.slice(0,-1)):t.endsWith("m")&&(n=1e6,t=t.slice(0,-1));const s=Number(t);return Number.isFinite(s)?s*n:null},Ko=e=>(e.match(/"[^"]+"|\S+/g)??[]).map(n=>{const s=n.replace(/^"|"$/g,""),i=s.indexOf(":");if(i>0){const o=s.slice(0,i),a=s.slice(i+1);return{key:o,value:a,raw:s}}return{value:s,raw:s}}),$h=e=>[e.label,e.key,e.sessionId].filter(n=>!!n).map(n=>n.toLowerCase()),cr=e=>{const t=new Set;e.modelProvider&&t.add(e.modelProvider.toLowerCase()),e.providerOverride&&t.add(e.providerOverride.toLowerCase()),e.origin?.provider&&t.add(e.origin.provider.toLowerCase());for(const n of e.usage?.modelUsage??[])n.provider&&t.add(n.provider.toLowerCase());return Array.from(t)},dr=e=>{const t=new Set;e.model&&t.add(e.model.toLowerCase());for(const n of e.usage?.modelUsage??[])n.model&&t.add(n.model.toLowerCase());return Array.from(t)},xh=e=>(e.usage?.toolUsage?.tools??[]).map(t=>t.name.toLowerCase()),wh=(e,t)=>{const n=Ms(t.value??"");if(!n)return!0;if(!t.key)return $h(e).some(i=>i.includes(n));switch(Ms(t.key)){case"agent":return e.agentId?.toLowerCase().includes(n)??!1;case"channel":return e.channel?.toLowerCase().includes(n)??!1;case"chat":return e.chatType?.toLowerCase().includes(n)??!1;case"provider":return cr(e).some(i=>i.includes(n));case"model":return dr(e).some(i=>i.includes(n));case"tool":return xh(e).some(i=>i.includes(n));case"label":return e.label?.toLowerCase().includes(n)??!1;case"key":case"session":case"id":if(n.includes("*")||n.includes("?")){const i=yh(n);return i.test(e.key)||(e.sessionId?i.test(e.sessionId):!1)}return e.key.toLowerCase().includes(n)||(e.sessionId?.toLowerCase().includes(n)??!1);case"has":switch(n){case"tools":return(e.usage?.toolUsage?.totalCalls??0)>0;case"errors":return(e.usage?.messageCounts?.errors??0)>0;case"context":return!!e.contextWeight;case"usage":return!!e.usage;case"model":return dr(e).length>0;case"provider":return cr(e).length>0;default:return!0}case"mintokens":{const i=Ut(n);return i===null?!0:(e.usage?.totalTokens??0)>=i}case"maxtokens":{const i=Ut(n);return i===null?!0:(e.usage?.totalTokens??0)<=i}case"mincost":{const i=Ut(n);return i===null?!0:(e.usage?.totalCost??0)>=i}case"maxcost":{const i=Ut(n);return i===null?!0:(e.usage?.totalCost??0)<=i}case"minmessages":{const i=Ut(n);return i===null?!0:(e.usage?.messageCounts?.total??0)>=i}case"maxmessages":{const i=Ut(n);return i===null?!0:(e.usage?.messageCounts?.total??0)<=i}default:return!0}},Sh=(e,t)=>{const n=Ko(t);if(n.length===0)return{sessions:e,warnings:[]};const s=[];for(const o of n){if(!o.key)continue;const a=Ms(o.key);if(!bh.has(a)){s.push(`Unknown filter: ${o.key}`);continue}if(o.value===""&&s.push(`Missing value for ${o.key}`),a==="has"){const r=new Set(["tools","errors","context","usage","model","provider"]);o.value&&!r.has(Ms(o.value))&&s.push(`Unknown has:${o.value}`)}["mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"].includes(a)&&o.value&&Ut(o.value)===null&&s.push(`Invalid number for ${o.key}`)}return{sessions:e.filter(o=>n.every(a=>wh(o,a))),warnings:s}};function zc(e){const t=e.split(`
`),n=new Map,s=[];for(const r of t){const l=/^\[Tool:\s*([^\]]+)\]/.exec(r.trim());if(l){const d=l[1];n.set(d,(n.get(d)??0)+1);continue}r.trim().startsWith("[Tool Result]")||s.push(r)}const i=Array.from(n.entries()).toSorted((r,l)=>l[1]-r[1]),o=i.reduce((r,[,l])=>r+l,0),a=i.length>0?`Tools: ${i.map(([r,l])=>`${r}×${l}`).join(", ")} (${o} calls)`:"";return{tools:i,summary:a,cleanContent:s.join(`
`).trim()}}function kh(e,t){!t||t.count<=0||(e.count+=t.count,e.sum+=t.avgMs*t.count,e.min=Math.min(e.min,t.minMs),e.max=Math.max(e.max,t.maxMs),e.p95Max=Math.max(e.p95Max,t.p95Ms))}function Ah(e,t){for(const n of t??[]){const s=e.get(n.date)??{date:n.date,count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};s.count+=n.count,s.sum+=n.avgMs*n.count,s.min=Math.min(s.min,n.minMs),s.max=Math.max(s.max,n.maxMs),s.p95Max=Math.max(s.p95Max,n.p95Ms),e.set(n.date,s)}}function Ch(e){return{byChannel:Array.from(e.byChannelMap.entries()).map(([t,n])=>({channel:t,totals:n})).toSorted((t,n)=>n.totals.totalCost-t.totals.totalCost),latency:e.latencyTotals.count>0?{count:e.latencyTotals.count,avgMs:e.latencyTotals.sum/e.latencyTotals.count,minMs:e.latencyTotals.min===Number.POSITIVE_INFINITY?0:e.latencyTotals.min,maxMs:e.latencyTotals.max,p95Ms:e.latencyTotals.p95Max}:void 0,dailyLatency:Array.from(e.dailyLatencyMap.values()).map(t=>({date:t.date,count:t.count,avgMs:t.count?t.sum/t.count:0,minMs:t.min===Number.POSITIVE_INFINITY?0:t.min,maxMs:t.max,p95Ms:t.p95Max})).toSorted((t,n)=>t.date.localeCompare(n.date)),modelDaily:Array.from(e.modelDailyMap.values()).toSorted((t,n)=>t.date.localeCompare(n.date)||n.cost-t.cost),daily:Array.from(e.dailyMap.values()).toSorted((t,n)=>t.date.localeCompare(n.date))}}const Th=4;function Dt(e){return Math.round(e/Th)}function z(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}function _h(e){const t=new Date;return t.setHours(e,0,0,0),t.toLocaleTimeString(void 0,{hour:"numeric"})}function Eh(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:24},()=>0);for(const i of e){const o=i.usage;if(!o?.messageCounts||o.messageCounts.total===0)continue;const a=o.firstActivity??i.updatedAt,r=o.lastActivity??i.updatedAt;if(!a||!r)continue;const l=Math.min(a,r),d=Math.max(a,r),u=Math.max(d-l,1)/6e4;let m=l;for(;m<d;){const h=new Date(m),b=Wo(h,t),y=qo(h,t),_=Math.min(y.getTime(),d),R=Math.max((_-m)/6e4,0)/u;n[b]+=o.messageCounts.errors*R,s[b]+=o.messageCounts.total*R,m=_+1}}return s.map((i,o)=>{const a=n[o],r=i>0?a/i:0;return{hour:o,rate:r,errors:a,msgs:i}}).filter(i=>i.msgs>0&&i.errors>0).toSorted((i,o)=>o.rate-i.rate).slice(0,5).map(i=>({label:_h(i.hour),value:`${(i.rate*100).toFixed(2)}%`,sub:`${Math.round(i.errors)} errors · ${Math.round(i.msgs)} msgs`}))}const Rh=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Wo(e,t){return t==="utc"?e.getUTCHours():e.getHours()}function Ih(e,t){return t==="utc"?e.getUTCDay():e.getDay()}function qo(e,t){const n=new Date(e);return t==="utc"?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function Lh(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:7},()=>0);let i=0,o=!1;for(const r of e){const l=r.usage;if(!l||!l.totalTokens||l.totalTokens<=0)continue;i+=l.totalTokens;const d=l.firstActivity??r.updatedAt,g=l.lastActivity??r.updatedAt;if(!d||!g)continue;o=!0;const u=Math.min(d,g),m=Math.max(d,g),b=Math.max(m-u,1)/6e4;let y=u;for(;y<m;){const _=new Date(y),L=Wo(_,t),R=Ih(_,t),A=qo(_,t),S=Math.min(A.getTime(),m),T=Math.max((S-y)/6e4,0)/b;n[L]+=l.totalTokens*T,s[R]+=l.totalTokens*T,y=S+1}}const a=Rh.map((r,l)=>({label:r,tokens:s[l]}));return{hasData:o,totalTokens:i,hourTotals:n,weekdayTotals:a}}function Mh(e,t,n,s){const i=Lh(e,t);if(!i.hasData)return c`
      <div class="card usage-mosaic">
        <div class="usage-mosaic-header">
          <div>
            <div class="usage-mosaic-title">Activity by Time</div>
            <div class="usage-mosaic-sub">Estimates require session timestamps.</div>
          </div>
          <div class="usage-mosaic-total">${z(0)} tokens</div>
        </div>
        <div class="muted" style="padding: 12px; text-align: center;">No timeline data yet.</div>
      </div>
    `;const o=Math.max(...i.hourTotals,1),a=Math.max(...i.weekdayTotals.map(r=>r.tokens),1);return c`
    <div class="card usage-mosaic">
      <div class="usage-mosaic-header">
        <div>
          <div class="usage-mosaic-title">Activity by Time</div>
          <div class="usage-mosaic-sub">
            Estimated from session spans (first/last activity). Time zone: ${t==="utc"?"UTC":"Local"}.
          </div>
        </div>
        <div class="usage-mosaic-total">${z(i.totalTokens)} tokens</div>
      </div>
      <div class="usage-mosaic-grid">
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">Day of Week</div>
          <div class="usage-daypart-grid">
            ${i.weekdayTotals.map(r=>{const l=Math.min(r.tokens/a,1),d=r.tokens>0?`rgba(255, 77, 77, ${.12+l*.6})`:"transparent";return c`
                <div class="usage-daypart-cell" style="background: ${d};">
                  <div class="usage-daypart-label">${r.label}</div>
                  <div class="usage-daypart-value">${z(r.tokens)}</div>
                </div>
              `})}
          </div>
        </div>
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">
            <span>Hours</span>
            <span class="usage-mosaic-sub">0 → 23</span>
          </div>
          <div class="usage-hour-grid">
            ${i.hourTotals.map((r,l)=>{const d=Math.min(r/o,1),g=r>0?`rgba(255, 77, 77, ${.08+d*.7})`:"transparent",u=`${l}:00 · ${z(r)} tokens`,m=d>.7?"rgba(255, 77, 77, 0.6)":"rgba(255, 77, 77, 0.2)",h=n.includes(l);return c`
                <div
                  class="usage-hour-cell ${h?"selected":""}"
                  style="background: ${g}; border-color: ${m};"
                  title="${u}"
                  @click=${b=>s(l,b.shiftKey)}
                ></div>
              `})}
          </div>
          <div class="usage-hour-labels">
            <span>Midnight</span>
            <span>4am</span>
            <span>8am</span>
            <span>Noon</span>
            <span>4pm</span>
            <span>8pm</span>
          </div>
          <div class="usage-hour-legend">
            <span></span>
            Low → High token density
          </div>
        </div>
      </div>
    </div>
  `}function ie(e,t=2){return`$${e.toFixed(t)}`}function $i(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function jc(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;const[,n,s,i]=t,o=new Date(Date.UTC(Number(n),Number(s)-1,Number(i)));return Number.isNaN(o.valueOf())?null:o}function Kc(e){const t=jc(e);return t?t.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e}function Dh(e){const t=jc(e);return t?t.toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}):e}const ds=()=>({input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),us=(e,t)=>{e.input+=t.input??0,e.output+=t.output??0,e.cacheRead+=t.cacheRead??0,e.cacheWrite+=t.cacheWrite??0,e.totalTokens+=t.totalTokens??0,e.totalCost+=t.totalCost??0,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0},Fh=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};const n={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},s=new Map,i=new Map,o=new Map,a=new Map,r=new Map,l=new Map,d=new Map,g=new Map,u={count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};for(const h of e){const b=h.usage;if(b){if(b.messageCounts&&(n.total+=b.messageCounts.total,n.user+=b.messageCounts.user,n.assistant+=b.messageCounts.assistant,n.toolCalls+=b.messageCounts.toolCalls,n.toolResults+=b.messageCounts.toolResults,n.errors+=b.messageCounts.errors),b.toolUsage)for(const y of b.toolUsage.tools)s.set(y.name,(s.get(y.name)??0)+y.count);if(b.modelUsage)for(const y of b.modelUsage){const _=`${y.provider??"unknown"}::${y.model??"unknown"}`,L=i.get(_)??{provider:y.provider,model:y.model,count:0,totals:ds()};L.count+=y.count,us(L.totals,y.totals),i.set(_,L);const R=y.provider??"unknown",A=o.get(R)??{provider:y.provider,model:void 0,count:0,totals:ds()};A.count+=y.count,us(A.totals,y.totals),o.set(R,A)}if(kh(u,b.latency),h.agentId){const y=a.get(h.agentId)??ds();us(y,b),a.set(h.agentId,y)}if(h.channel){const y=r.get(h.channel)??ds();us(y,b),r.set(h.channel,y)}for(const y of b.dailyBreakdown??[]){const _=l.get(y.date)??{date:y.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};_.tokens+=y.tokens,_.cost+=y.cost,l.set(y.date,_)}for(const y of b.dailyMessageCounts??[]){const _=l.get(y.date)??{date:y.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};_.messages+=y.total,_.toolCalls+=y.toolCalls,_.errors+=y.errors,l.set(y.date,_)}Ah(d,b.dailyLatency);for(const y of b.dailyModelUsage??[]){const _=`${y.date}::${y.provider??"unknown"}::${y.model??"unknown"}`,L=g.get(_)??{date:y.date,provider:y.provider,model:y.model,tokens:0,cost:0,count:0};L.tokens+=y.tokens,L.cost+=y.cost,L.count+=y.count,g.set(_,L)}}}const m=Ch({byChannelMap:r,latencyTotals:u,dailyLatencyMap:d,modelDailyMap:g,dailyMap:l});return{messages:n,tools:{totalCalls:Array.from(s.values()).reduce((h,b)=>h+b,0),uniqueTools:s.size,tools:Array.from(s.entries()).map(([h,b])=>({name:h,count:b})).toSorted((h,b)=>b.count-h.count)},byModel:Array.from(i.values()).toSorted((h,b)=>b.totals.totalCost-h.totals.totalCost),byProvider:Array.from(o.values()).toSorted((h,b)=>b.totals.totalCost-h.totals.totalCost),byAgent:Array.from(a.entries()).map(([h,b])=>({agentId:h,totals:b})).toSorted((h,b)=>b.totals.totalCost-h.totals.totalCost),...m}},Ph=(e,t,n)=>{let s=0,i=0;for(const g of e){const u=g.usage?.durationMs??0;u>0&&(s+=u,i+=1)}const o=i?s/i:0,a=t&&s>0?t.totalTokens/(s/6e4):void 0,r=t&&s>0?t.totalCost/(s/6e4):void 0,l=n.messages.total?n.messages.errors/n.messages.total:0,d=n.daily.filter(g=>g.messages>0&&g.errors>0).map(g=>({date:g.date,errors:g.errors,messages:g.messages,rate:g.errors/g.messages})).toSorted((g,u)=>u.rate-g.rate||u.errors-g.errors)[0];return{durationSumMs:s,durationCount:i,avgDurationMs:o,throughputTokensPerMin:a,throughputCostPerMin:r,errorRate:l,peakErrorDay:d}};function xi(e,t,n="text/plain"){const s=new Blob([t],{type:`${n};charset=utf-8`}),i=URL.createObjectURL(s),o=document.createElement("a");o.href=i,o.download=e,o.click(),URL.revokeObjectURL(i)}function Nh(e){return/[",\n]/.test(e)?`"${e.replaceAll('"','""')}"`:e}function Ds(e){return e.map(t=>t==null?"":Nh(String(t))).join(",")}const Oh=e=>{const t=[Ds(["key","label","agentId","channel","provider","model","updatedAt","durationMs","messages","errors","toolCalls","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","totalCost"])];for(const n of e){const s=n.usage;t.push(Ds([n.key,n.label??"",n.agentId??"",n.channel??"",n.modelProvider??n.providerOverride??"",n.model??n.modelOverride??"",n.updatedAt?new Date(n.updatedAt).toISOString():"",s?.durationMs??"",s?.messageCounts?.total??"",s?.messageCounts?.errors??"",s?.messageCounts?.toolCalls??"",s?.input??"",s?.output??"",s?.cacheRead??"",s?.cacheWrite??"",s?.totalTokens??"",s?.totalCost??""]))}return t.join(`
`)},Uh=e=>{const t=[Ds(["date","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","inputCost","outputCost","cacheReadCost","cacheWriteCost","totalCost"])];for(const n of e)t.push(Ds([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??"",n.outputCost??"",n.cacheReadCost??"",n.cacheWriteCost??"",n.totalCost]));return t.join(`
`)},Bh=(e,t,n)=>{const s=e.trim();if(!s)return[];const i=s.length?s.split(/\s+/):[],o=i.length?i[i.length-1]:"",[a,r]=o.includes(":")?[o.slice(0,o.indexOf(":")),o.slice(o.indexOf(":")+1)]:["",""],l=a.toLowerCase(),d=r.toLowerCase(),g=R=>{const A=new Set;for(const S of R)S&&A.add(S);return Array.from(A)},u=g(t.map(R=>R.agentId)).slice(0,6),m=g(t.map(R=>R.channel)).slice(0,6),h=g([...t.map(R=>R.modelProvider),...t.map(R=>R.providerOverride),...n?.byProvider.map(R=>R.provider)??[]]).slice(0,6),b=g([...t.map(R=>R.model),...n?.byModel.map(R=>R.model)??[]]).slice(0,6),y=g(n?.tools.tools.map(R=>R.name)??[]).slice(0,6);if(!l)return[{label:"agent:",value:"agent:"},{label:"channel:",value:"channel:"},{label:"provider:",value:"provider:"},{label:"model:",value:"model:"},{label:"tool:",value:"tool:"},{label:"has:errors",value:"has:errors"},{label:"has:tools",value:"has:tools"},{label:"minTokens:",value:"minTokens:"},{label:"maxCost:",value:"maxCost:"}];const _=[],L=(R,A)=>{for(const S of A)(!d||S.toLowerCase().includes(d))&&_.push({label:`${R}:${S}`,value:`${R}:${S}`})};switch(l){case"agent":L("agent",u);break;case"channel":L("channel",m);break;case"provider":L("provider",h);break;case"model":L("model",b);break;case"tool":L("tool",y);break;case"has":["errors","tools","context","usage","model","provider"].forEach(R=>{(!d||R.includes(d))&&_.push({label:`has:${R}`,value:`has:${R}`})});break}return _},Hh=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/);return s[s.length-1]=t,`${s.join(" ")} `},Ht=e=>e.trim().toLowerCase(),zh=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/),i=s[s.length-1]??"",o=t.includes(":")?t.split(":")[0]:null,a=i.includes(":")?i.split(":")[0]:null;return i.endsWith(":")&&o&&a===o?(s[s.length-1]=t,`${s.join(" ")} `):s.includes(t)?`${s.join(" ")} `:`${s.join(" ")} ${t} `},ur=(e,t)=>{const s=e.trim().split(/\s+/).filter(Boolean).filter(i=>i!==t);return s.length?`${s.join(" ")} `:""},gr=(e,t,n)=>{const s=Ht(t),o=[...Ko(e).filter(a=>Ht(a.key??"")!==s).map(a=>a.raw),...n.map(a=>`${t}:${a}`)];return o.length?`${o.join(" ")} `:""};function bt(e,t){return t===0?0:e/t*100}function jh(e){const t=e.totalCost||0;return{input:{tokens:e.input,cost:e.inputCost||0,pct:bt(e.inputCost||0,t)},output:{tokens:e.output,cost:e.outputCost||0,pct:bt(e.outputCost||0,t)},cacheRead:{tokens:e.cacheRead,cost:e.cacheReadCost||0,pct:bt(e.cacheReadCost||0,t)},cacheWrite:{tokens:e.cacheWrite,cost:e.cacheWriteCost||0,pct:bt(e.cacheWriteCost||0,t)},totalCost:t}}function Kh(e,t,n,s,i,o,a,r){if(!(e.length>0||t.length>0||n.length>0))return f;const d=n.length===1?s.find(b=>b.key===n[0]):null,g=d?(d.label||d.key).slice(0,20)+((d.label||d.key).length>20?"…":""):n.length===1?n[0].slice(0,8)+"…":`${n.length} sessions`,u=d?d.label||d.key:n.length===1?n[0]:n.join(", "),m=e.length===1?e[0]:`${e.length} days`,h=t.length===1?`${t[0]}:00`:`${t.length} hours`;return c`
    <div class="active-filters">
      ${e.length>0?c`
            <div class="filter-chip">
              <span class="filter-chip-label">Days: ${m}</span>
              <button class="filter-chip-remove" @click=${i} title="Remove filter">×</button>
            </div>
          `:f}
      ${t.length>0?c`
            <div class="filter-chip">
              <span class="filter-chip-label">Hours: ${h}</span>
              <button class="filter-chip-remove" @click=${o} title="Remove filter">×</button>
            </div>
          `:f}
      ${n.length>0?c`
            <div class="filter-chip" title="${u}">
              <span class="filter-chip-label">Session: ${g}</span>
              <button class="filter-chip-remove" @click=${a} title="Remove filter">×</button>
            </div>
          `:f}
      ${(e.length>0||t.length>0)&&n.length>0?c`
            <button class="btn btn-sm filter-clear-btn" @click=${r}>
              Clear All
            </button>
          `:f}
    </div>
  `}function Wh(e,t,n,s,i,o){if(!e.length)return c`
      <div class="daily-chart-compact">
        <div class="sessions-panel-title">Daily Usage</div>
        <div class="muted" style="padding: 20px; text-align: center">No data</div>
      </div>
    `;const a=n==="tokens",r=e.map(u=>a?u.totalTokens:u.totalCost),l=Math.max(...r,a?1:1e-4),d=e.length>30?12:e.length>20?18:e.length>14?24:32,g=e.length<=14;return c`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        <div class="chart-toggle small sessions-toggle">
          <button
            class="toggle-btn ${s==="total"?"active":""}"
            @click=${()=>i("total")}
          >
            Total
          </button>
          <button
            class="toggle-btn ${s==="by-type"?"active":""}"
            @click=${()=>i("by-type")}
          >
            By Type
          </button>
        </div>
        <div class="card-title">Daily ${a?"Token":"Cost"} Usage</div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-bars" style="--bar-max-width: ${d}px">
          ${e.map((u,m)=>{const b=r[m]/l*100,y=t.includes(u.date),_=Kc(u.date),L=e.length>20?String(parseInt(u.date.slice(8),10)):_,R=e.length>20?"font-size: 8px":"",A=s==="by-type"?a?[{value:u.output,class:"output"},{value:u.input,class:"input"},{value:u.cacheWrite,class:"cache-write"},{value:u.cacheRead,class:"cache-read"}]:[{value:u.outputCost??0,class:"output"},{value:u.inputCost??0,class:"input"},{value:u.cacheWriteCost??0,class:"cache-write"},{value:u.cacheReadCost??0,class:"cache-read"}]:[],S=s==="by-type"?a?[`Output ${z(u.output)}`,`Input ${z(u.input)}`,`Cache write ${z(u.cacheWrite)}`,`Cache read ${z(u.cacheRead)}`]:[`Output ${ie(u.outputCost??0)}`,`Input ${ie(u.inputCost??0)}`,`Cache write ${ie(u.cacheWriteCost??0)}`,`Cache read ${ie(u.cacheReadCost??0)}`]:[],D=a?z(u.totalTokens):ie(u.totalCost);return c`
              <div
                class="daily-bar-wrapper ${y?"selected":""}"
                @click=${T=>o(u.date,T.shiftKey)}
              >
                ${s==="by-type"?c`
                        <div
                          class="daily-bar"
                          style="height: ${b.toFixed(1)}%; display: flex; flex-direction: column;"
                        >
                          ${(()=>{const T=A.reduce((I,v)=>I+v.value,0)||1;return A.map(I=>c`
                                <div
                                  class="cost-segment ${I.class}"
                                  style="height: ${I.value/T*100}%"
                                ></div>
                              `)})()}
                        </div>
                      `:c`
                        <div class="daily-bar" style="height: ${b.toFixed(1)}%"></div>
                      `}
                ${g?c`<div class="daily-bar-total">${D}</div>`:f}
                <div class="daily-bar-label" style="${R}">${L}</div>
                <div class="daily-bar-tooltip">
                  <strong>${Dh(u.date)}</strong><br />
                  ${z(u.totalTokens)} tokens<br />
                  ${ie(u.totalCost)}
                  ${S.length?c`${S.map(T=>c`<div>${T}</div>`)}`:f}
                </div>
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function qh(e,t){const n=jh(e),s=t==="tokens",i=e.totalTokens||1,o={output:bt(e.output,i),input:bt(e.input,i),cacheWrite:bt(e.cacheWrite,i),cacheRead:bt(e.cacheRead,i)};return c`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">${s?"Tokens":"Cost"} by Type</div>
      <div class="cost-breakdown-bar">
        <div class="cost-segment output" style="width: ${(s?o.output:n.output.pct).toFixed(1)}%"
          title="Output: ${s?z(e.output):ie(n.output.cost)}"></div>
        <div class="cost-segment input" style="width: ${(s?o.input:n.input.pct).toFixed(1)}%"
          title="Input: ${s?z(e.input):ie(n.input.cost)}"></div>
        <div class="cost-segment cache-write" style="width: ${(s?o.cacheWrite:n.cacheWrite.pct).toFixed(1)}%"
          title="Cache Write: ${s?z(e.cacheWrite):ie(n.cacheWrite.cost)}"></div>
        <div class="cost-segment cache-read" style="width: ${(s?o.cacheRead:n.cacheRead.pct).toFixed(1)}%"
          title="Cache Read: ${s?z(e.cacheRead):ie(n.cacheRead.cost)}"></div>
      </div>
      <div class="cost-breakdown-legend">
        <span class="legend-item"><span class="legend-dot output"></span>Output ${s?z(e.output):ie(n.output.cost)}</span>
        <span class="legend-item"><span class="legend-dot input"></span>Input ${s?z(e.input):ie(n.input.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-write"></span>Cache Write ${s?z(e.cacheWrite):ie(n.cacheWrite.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-read"></span>Cache Read ${s?z(e.cacheRead):ie(n.cacheRead.cost)}</span>
      </div>
      <div class="cost-breakdown-total">
        Total: ${s?z(e.totalTokens):ie(e.totalCost)}
      </div>
    </div>
  `}function zt(e,t,n){return c`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?c`<div class="muted">${n}</div>`:c`
              <div class="usage-list">
                ${t.map(s=>c`
                    <div class="usage-list-item">
                      <span>${s.label}</span>
                      <span class="usage-list-value">
                        <span>${s.value}</span>
                        ${s.sub?c`<span class="usage-list-sub">${s.sub}</span>`:f}
                      </span>
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function pr(e,t,n){return c`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?c`<div class="muted">${n}</div>`:c`
              <div class="usage-error-list">
                ${t.map(s=>c`
                    <div class="usage-error-row">
                      <div class="usage-error-date">${s.label}</div>
                      <div class="usage-error-rate">${s.value}</div>
                      ${s.sub?c`<div class="usage-error-sub">${s.sub}</div>`:f}
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function Gh(e,t,n,s,i,o,a){if(!e)return f;const r=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,l=t.messages.total?e.totalCost/t.messages.total:0,d=e.input+e.cacheRead,g=d>0?e.cacheRead/d:0,u=d>0?`${(g*100).toFixed(1)}%`:"—",m=n.errorRate*100,h=n.throughputTokensPerMin!==void 0?`${z(Math.round(n.throughputTokensPerMin))} tok/min`:"—",b=n.throughputCostPerMin!==void 0?`${ie(n.throughputCostPerMin,4)} / min`:"—",y=n.durationCount>0?To(n.avgDurationMs,{spaced:!0})??"—":"—",_="Cache hit rate = cache read / (input + cache read). Higher is better.",L="Error rate = errors / total messages. Lower is better.",R="Throughput shows tokens per minute over active time. Higher is better.",A="Average tokens per message in this range.",S=s?"Average cost per message when providers report costs. Cost data is missing for some or all sessions in this range.":"Average cost per message when providers report costs.",D=t.daily.filter(M=>M.messages>0&&M.errors>0).map(M=>{const j=M.errors/M.messages;return{label:Kc(M.date),value:`${(j*100).toFixed(2)}%`,sub:`${M.errors} errors · ${M.messages} msgs · ${z(M.tokens)}`,rate:j}}).toSorted((M,j)=>j.rate-M.rate).slice(0,5).map(({rate:M,...j})=>j),T=t.byModel.slice(0,5).map(M=>({label:M.model??"unknown",value:ie(M.totals.totalCost),sub:`${z(M.totals.totalTokens)} · ${M.count} msgs`})),I=t.byProvider.slice(0,5).map(M=>({label:M.provider??"unknown",value:ie(M.totals.totalCost),sub:`${z(M.totals.totalTokens)} · ${M.count} msgs`})),v=t.tools.tools.slice(0,6).map(M=>({label:M.name,value:`${M.count}`,sub:"calls"})),E=t.byAgent.slice(0,5).map(M=>({label:M.agentId,value:ie(M.totals.totalCost),sub:z(M.totals.totalTokens)})),U=t.byChannel.slice(0,5).map(M=>({label:M.channel,value:ie(M.totals.totalCost),sub:z(M.totals.totalTokens)}));return c`
    <section class="card" style="margin-top: 16px;">
      <div class="card-title">Usage Overview</div>
      <div class="usage-summary-grid">
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Messages
            <span class="usage-summary-hint" title="Total user + assistant messages in range.">?</span>
          </div>
          <div class="usage-summary-value">${t.messages.total}</div>
          <div class="usage-summary-sub">
            ${t.messages.user} user · ${t.messages.assistant} assistant
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Tool Calls
            <span class="usage-summary-hint" title="Total tool call count across sessions.">?</span>
          </div>
          <div class="usage-summary-value">${t.tools.totalCalls}</div>
          <div class="usage-summary-sub">${t.tools.uniqueTools} tools used</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Errors
            <span class="usage-summary-hint" title="Total message/tool errors in range.">?</span>
          </div>
          <div class="usage-summary-value">${t.messages.errors}</div>
          <div class="usage-summary-sub">${t.messages.toolResults} tool results</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Avg Tokens / Msg
            <span class="usage-summary-hint" title=${A}>?</span>
          </div>
          <div class="usage-summary-value">${z(r)}</div>
          <div class="usage-summary-sub">Across ${t.messages.total||0} messages</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Avg Cost / Msg
            <span class="usage-summary-hint" title=${S}>?</span>
          </div>
          <div class="usage-summary-value">${ie(l,4)}</div>
          <div class="usage-summary-sub">${ie(e.totalCost)} total</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Sessions
            <span class="usage-summary-hint" title="Distinct sessions in the range.">?</span>
          </div>
          <div class="usage-summary-value">${o}</div>
          <div class="usage-summary-sub">of ${a} in range</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Throughput
            <span class="usage-summary-hint" title=${R}>?</span>
          </div>
          <div class="usage-summary-value">${h}</div>
          <div class="usage-summary-sub">${b}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Error Rate
            <span class="usage-summary-hint" title=${L}>?</span>
          </div>
          <div class="usage-summary-value ${m>5?"bad":m>1?"warn":"good"}">${m.toFixed(2)}%</div>
          <div class="usage-summary-sub">
            ${t.messages.errors} errors · ${y} avg session
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Cache Hit Rate
            <span class="usage-summary-hint" title=${_}>?</span>
          </div>
          <div class="usage-summary-value ${g>.6?"good":g>.3?"warn":"bad"}">${u}</div>
          <div class="usage-summary-sub">
            ${z(e.cacheRead)} cached · ${z(d)} prompt
          </div>
        </div>
      </div>
      <div class="usage-insights-grid">
        ${zt("Top Models",T,"No model data")}
        ${zt("Top Providers",I,"No provider data")}
        ${zt("Top Tools",v,"No tool calls")}
        ${zt("Top Agents",E,"No agent data")}
        ${zt("Top Channels",U,"No channel data")}
        ${pr("Peak Error Days",D,"No error data")}
        ${pr("Peak Error Hours",i,"No error data")}
      </div>
    </section>
  `}function Jh(e,t,n,s,i,o,a,r,l,d,g,u,m,h,b){const y=C=>m.includes(C),_=C=>{const q=C.label||C.key;return q.startsWith("agent:")&&q.includes("?token=")?q.slice(0,q.indexOf("?token=")):q},L=async C=>{const q=_(C);try{await navigator.clipboard.writeText(q)}catch{}},R=C=>{const q=[];return y("channel")&&C.channel&&q.push(`channel:${C.channel}`),y("agent")&&C.agentId&&q.push(`agent:${C.agentId}`),y("provider")&&(C.modelProvider||C.providerOverride)&&q.push(`provider:${C.modelProvider??C.providerOverride}`),y("model")&&C.model&&q.push(`model:${C.model}`),y("messages")&&C.usage?.messageCounts&&q.push(`msgs:${C.usage.messageCounts.total}`),y("tools")&&C.usage?.toolUsage&&q.push(`tools:${C.usage.toolUsage.totalCalls}`),y("errors")&&C.usage?.messageCounts&&q.push(`errors:${C.usage.messageCounts.errors}`),y("duration")&&C.usage?.durationMs&&q.push(`dur:${To(C.usage.durationMs,{spaced:!0})??"—"}`),q},A=C=>{const q=C.usage;if(!q)return 0;if(n.length>0&&q.dailyBreakdown&&q.dailyBreakdown.length>0){const Q=q.dailyBreakdown.filter(oe=>n.includes(oe.date));return s?Q.reduce((oe,Z)=>oe+Z.tokens,0):Q.reduce((oe,Z)=>oe+Z.cost,0)}return s?q.totalTokens??0:q.totalCost??0},S=[...e].toSorted((C,q)=>{switch(i){case"recent":return(q.updatedAt??0)-(C.updatedAt??0);case"messages":return(q.usage?.messageCounts?.total??0)-(C.usage?.messageCounts?.total??0);case"errors":return(q.usage?.messageCounts?.errors??0)-(C.usage?.messageCounts?.errors??0);case"cost":return A(q)-A(C);default:return A(q)-A(C)}}),D=o==="asc"?S.toReversed():S,T=D.reduce((C,q)=>C+A(q),0),I=D.length?T/D.length:0,v=D.reduce((C,q)=>C+(q.usage?.messageCounts?.errors??0),0),E=(C,q)=>{const Q=A(C),oe=_(C),Z=R(C);return c`
      <div
        class="session-bar-row ${q?"selected":""}"
        @click=${F=>l(C.key,F.shiftKey)}
        title="${C.key}"
      >
        <div class="session-bar-label">
          <div class="session-bar-title">${oe}</div>
          ${Z.length>0?c`<div class="session-bar-meta">${Z.join(" · ")}</div>`:f}
        </div>
        <div class="session-bar-track" style="display: none;"></div>
        <div class="session-bar-actions">
          <button
            class="session-copy-btn"
            title="Copy session name"
            @click=${F=>{F.stopPropagation(),L(C)}}
          >
            Copy
          </button>
          <div class="session-bar-value">${s?z(Q):ie(Q)}</div>
        </div>
      </div>
    `},U=new Set(t),M=D.filter(C=>U.has(C.key)),j=M.length,V=new Map(D.map(C=>[C.key,C])),J=a.map(C=>V.get(C)).filter(C=>!!C);return c`
    <div class="card sessions-card">
      <div class="sessions-card-header">
        <div class="card-title">Sessions</div>
        <div class="sessions-card-count">
          ${e.length} shown${h!==e.length?` · ${h} total`:""}
        </div>
      </div>
      <div class="sessions-card-meta">
        <div class="sessions-card-stats">
          <span>${s?z(I):ie(I)} avg</span>
          <span>${v} errors</span>
        </div>
        <div class="chart-toggle small">
          <button
            class="toggle-btn ${r==="all"?"active":""}"
            @click=${()=>u("all")}
          >
            All
          </button>
          <button
            class="toggle-btn ${r==="recent"?"active":""}"
            @click=${()=>u("recent")}
          >
            Recently viewed
          </button>
        </div>
        <label class="sessions-sort">
          <span>Sort</span>
          <select
            @change=${C=>d(C.target.value)}
          >
            <option value="cost" ?selected=${i==="cost"}>Cost</option>
            <option value="errors" ?selected=${i==="errors"}>Errors</option>
            <option value="messages" ?selected=${i==="messages"}>Messages</option>
            <option value="recent" ?selected=${i==="recent"}>Recent</option>
            <option value="tokens" ?selected=${i==="tokens"}>Tokens</option>
          </select>
        </label>
        <button
          class="btn btn-sm sessions-action-btn icon"
          @click=${()=>g(o==="desc"?"asc":"desc")}
          title=${o==="desc"?"Descending":"Ascending"}
        >
          ${o==="desc"?"↓":"↑"}
        </button>
        ${j>0?c`
                <button class="btn btn-sm sessions-action-btn sessions-clear-btn" @click=${b}>
                  Clear Selection
                </button>
              `:f}
      </div>
      ${r==="recent"?J.length===0?c`
                <div class="muted" style="padding: 20px; text-align: center">No recent sessions</div>
              `:c`
	                <div class="session-bars" style="max-height: 220px; margin-top: 6px;">
	                  ${J.map(C=>E(C,U.has(C.key)))}
	                </div>
	              `:e.length===0?c`
                <div class="muted" style="padding: 20px; text-align: center">No sessions in range</div>
              `:c`
	                <div class="session-bars">
	                  ${D.slice(0,50).map(C=>E(C,U.has(C.key)))}
	                  ${e.length>50?c`<div class="muted" style="padding: 8px; text-align: center; font-size: 11px;">+${e.length-50} more</div>`:f}
	                </div>
	              `}
      ${j>1?c`
              <div style="margin-top: 10px;">
                <div class="sessions-card-count">Selected (${j})</div>
                <div class="session-bars" style="max-height: 160px; margin-top: 6px;">
                  ${M.map(C=>E(C,!0))}
                </div>
              </div>
            `:f}
    </div>
  `}const Vh=.75,Qh=8,Yh=.06,gs=5,Me=12,ht=.7;function yt(e,t){return!t||t<=0?0:e/t*100}function Zh(){return f}function Wc(e){return e<1e12?e*1e3:e}function Xh(e,t,n){const s=Math.min(t,n),i=Math.max(t,n);return e.filter(o=>{if(o.timestamp<=0)return!0;const a=Wc(o.timestamp);return a>=s&&a<=i})}function em(e,t,n){const s=t||e.usage;if(!s)return c`
      <div class="muted">No usage data for this session.</div>
    `;const i=u=>u?new Date(u).toLocaleString():"—",o=[];e.channel&&o.push(`channel:${e.channel}`),e.agentId&&o.push(`agent:${e.agentId}`),(e.modelProvider||e.providerOverride)&&o.push(`provider:${e.modelProvider??e.providerOverride}`),e.model&&o.push(`model:${e.model}`);const a=s.toolUsage?.tools.slice(0,6)??[];let r,l,d;if(n){const u=new Map;for(const m of n){const{tools:h}=zc(m.content);for(const[b]of h)u.set(b,(u.get(b)||0)+1)}d=a.map(m=>({label:m.name,value:`${u.get(m.name)??0}`,sub:"calls"})),r=[...u.values()].reduce((m,h)=>m+h,0),l=u.size}else d=a.map(u=>({label:u.name,value:`${u.count}`,sub:"calls"})),r=s.toolUsage?.totalCalls??0,l=s.toolUsage?.uniqueTools??0;const g=s.modelUsage?.slice(0,6).map(u=>({label:u.model??"unknown",value:ie(u.totals.totalCost),sub:z(u.totals.totalTokens)}))??[];return c`
    ${o.length>0?c`<div class="usage-badges">${o.map(u=>c`<span class="usage-badge">${u}</span>`)}</div>`:f}
    <div class="session-summary-grid">
      <div class="session-summary-card">
        <div class="session-summary-title">Messages</div>
        <div class="session-summary-value">${s.messageCounts?.total??0}</div>
        <div class="session-summary-meta">${s.messageCounts?.user??0} user · ${s.messageCounts?.assistant??0} assistant</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Tool Calls</div>
        <div class="session-summary-value">${r}</div>
        <div class="session-summary-meta">${l} tools</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Errors</div>
        <div class="session-summary-value">${s.messageCounts?.errors??0}</div>
        <div class="session-summary-meta">${s.messageCounts?.toolResults??0} tool results</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Duration</div>
        <div class="session-summary-value">${To(s.durationMs,{spaced:!0})??"—"}</div>
        <div class="session-summary-meta">${i(s.firstActivity)} → ${i(s.lastActivity)}</div>
      </div>
    </div>
    <div class="usage-insights-grid" style="margin-top: 12px;">
      ${zt("Top Tools",d,"No tool calls")}
      ${zt("Model Mix",g,"No model data")}
    </div>
  `}function tm(e,t,n,s){const i=Math.min(n,s),o=Math.max(n,s),a=t.filter(y=>y.timestamp>=i&&y.timestamp<=o);if(a.length===0)return;let r=0,l=0,d=0,g=0,u=0,m=0,h=0,b=0;for(const y of a)r+=y.totalTokens||0,l+=y.cost||0,u+=y.input||0,m+=y.output||0,h+=y.cacheRead||0,b+=y.cacheWrite||0,y.output>0&&g++,y.input>0&&d++;return{...e,totalTokens:r,totalCost:l,input:u,output:m,cacheRead:h,cacheWrite:b,durationMs:a[a.length-1].timestamp-a[0].timestamp,firstActivity:a[0].timestamp,lastActivity:a[a.length-1].timestamp,messageCounts:{total:a.length,user:d,assistant:g,toolCalls:0,toolResults:0,errors:0}}}function nm(e,t,n,s,i,o,a,r,l,d,g,u,m,h,b,y,_,L,R,A,S,D,T,I,v,E){const U=e.label||e.key,M=U.length>50?U.slice(0,50)+"…":U,j=e.usage,V=r!==null&&l!==null,J=r!==null&&l!==null&&t?.points&&j?tm(j,t.points,r,l):void 0,C=J?{totalTokens:J.totalTokens,totalCost:J.totalCost}:{totalTokens:j?.totalTokens??0,totalCost:j?.totalCost??0},q=J?" (filtered)":"";return c`
    <div class="card session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">
            ${M}
            ${q?c`<span style="font-size: 11px; color: var(--muted); margin-left: 8px;">${q}</span>`:f}
          </div>
        </div>
        <div class="session-detail-stats">
          ${j?c`
            <span><strong>${z(C.totalTokens)}</strong> tokens${q}</span>
            <span><strong>${ie(C.totalCost)}</strong>${q}</span>
          `:f}
        </div>
        <button class="session-close-btn" @click=${E} title="Close session details">×</button>
      </div>
      <div class="session-detail-content">
        ${em(e,J,r!=null&&l!=null&&h?Xh(h,r,l):void 0)}
        <div class="session-detail-row">
          ${sm(t,n,s,i,o,a,g,u,m,r,l,d)}
        </div>
        <div class="session-detail-bottom">
          ${om(h,b,y,_,L,R,A,S,D,T,V?r:null,V?l:null)}
          ${im(e.contextWeight,j,I,v)}
        </div>
      </div>
    </div>
  `}function sm(e,t,n,s,i,o,a,r,l,d,g,u){if(t)return c`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">Loading...</div>
      </div>
    `;if(!e||e.points.length<2)return c`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">No timeline data</div>
      </div>
    `;let m=e.points;if(a||r||l&&l.length>0){const W=a?new Date(a+"T00:00:00").getTime():0,re=r?new Date(r+"T23:59:59").getTime():1/0;m=e.points.filter(de=>{if(de.timestamp<W||de.timestamp>re)return!1;if(l&&l.length>0){const be=new Date(de.timestamp),Ie=`${be.getFullYear()}-${String(be.getMonth()+1).padStart(2,"0")}-${String(be.getDate()).padStart(2,"0")}`;return l.includes(Ie)}return!0})}if(m.length<2)return c`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">No data in range</div>
      </div>
    `;let h=0,b=0,y=0,_=0,L=0,R=0;m=m.map(W=>(h+=W.totalTokens,b+=W.cost,y+=W.output,_+=W.input,L+=W.cacheRead,R+=W.cacheWrite,{...W,cumulativeTokens:h,cumulativeCost:b}));const A=d!=null&&g!=null,S=A?Math.min(d,g):0,D=A?Math.max(d,g):1/0;let T=0,I=m.length;if(A){T=m.findIndex(re=>re.timestamp>=S),T===-1&&(T=m.length);const W=m.findIndex(re=>re.timestamp>D);I=W===-1?m.length:W}const v=A?m.slice(T,I):m;let E=0,U=0,M=0,j=0;for(const W of v)E+=W.output,U+=W.input,M+=W.cacheRead,j+=W.cacheWrite;const V=400,J=100,C={top:8,right:4,bottom:14,left:30},q=V-C.left-C.right,Q=J-C.top-C.bottom,oe=n==="cumulative",Z=n==="per-turn"&&i==="by-type",F=E+U+M+j,N=m.map(W=>oe?W.cumulativeTokens:Z?W.input+W.output+W.cacheRead+W.cacheWrite:W.totalTokens),O=Math.max(...N,1),G=q/m.length,ue=Math.min(Qh,Math.max(1,G*Vh)),ne=G-ue,ae=C.left+T*(ue+ne),X=I>=m.length?C.left+(m.length-1)*(ue+ne)+ue:C.left+(I-1)*(ue+ne)+ue;return c`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title" style="font-size: 12px; color: var(--text);">Usage Over Time</div>
        <div class="timeseries-controls">
          ${A?c`
            <div class="chart-toggle small">
              <button class="toggle-btn active" @click=${()=>u?.(null,null)}>Reset</button>
            </div>
          `:f}
          <div class="chart-toggle small">
            <button
              class="toggle-btn ${oe?"":"active"}"
              @click=${()=>s("per-turn")}
            >
              Per Turn
            </button>
            <button
              class="toggle-btn ${oe?"active":""}"
              @click=${()=>s("cumulative")}
            >
              Cumulative
            </button>
          </div>
          ${oe?f:c`
                  <div class="chart-toggle small">
                    <button
                      class="toggle-btn ${i==="total"?"active":""}"
                      @click=${()=>o("total")}
                    >
                      Total
                    </button>
                    <button
                      class="toggle-btn ${i==="by-type"?"active":""}"
                      @click=${()=>o("by-type")}
                    >
                      By Type
                    </button>
                  </div>
                `}
        </div>
      </div>
      <div class="timeseries-chart-wrapper" style="position: relative; cursor: crosshair;">
        <svg 
          viewBox="0 0 ${V} ${J+18}" 
          class="timeseries-svg" 
          style="width: 100%; height: auto; display: block;"
        >
          <!-- Y axis -->
          <line x1="${C.left}" y1="${C.top}" x2="${C.left}" y2="${C.top+Q}" stroke="var(--border)" />
          <!-- X axis -->
          <line x1="${C.left}" y1="${C.top+Q}" x2="${V-C.right}" y2="${C.top+Q}" stroke="var(--border)" />
          <!-- Y axis labels -->
          <text x="${C.left-4}" y="${C.top+5}" text-anchor="end" class="ts-axis-label">${z(O)}</text>
          <text x="${C.left-4}" y="${C.top+Q}" text-anchor="end" class="ts-axis-label">0</text>
          <!-- X axis labels (first and last) -->
          ${m.length>0?Mt`
            <text x="${C.left}" y="${C.top+Q+10}" text-anchor="start" class="ts-axis-label">${new Date(m[0].timestamp).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}</text>
            <text x="${V-C.right}" y="${C.top+Q+10}" text-anchor="end" class="ts-axis-label">${new Date(m[m.length-1].timestamp).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}</text>
          `:f}
          <!-- Bars -->
          ${m.map((W,re)=>{const de=N[re],be=C.left+re*(ue+ne),Ie=de/O*Q,Ze=C.top+Q-Ie,ye=[new Date(W.timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),`${z(de)} tokens`];Z&&(ye.push(`Out ${z(W.output)}`),ye.push(`In ${z(W.input)}`),ye.push(`CW ${z(W.cacheWrite)}`),ye.push(`CR ${z(W.cacheRead)}`));const je=ye.join(" · "),Xe=A&&(re<T||re>=I);if(!Z)return Mt`<rect x="${be}" y="${Ze}" width="${ue}" height="${Ie}" class="ts-bar${Xe?" dimmed":""}" rx="1"><title>${je}</title></rect>`;const et=[{value:W.output,cls:"output"},{value:W.input,cls:"input"},{value:W.cacheWrite,cls:"cache-write"},{value:W.cacheRead,cls:"cache-read"}];let tt=C.top+Q;const ut=Xe?" dimmed":"";return Mt`
              ${et.map(gt=>{if(gt.value<=0||de<=0)return f;const Rt=Ie*(gt.value/de);return tt-=Rt,Mt`<rect x="${be}" y="${tt}" width="${ue}" height="${Rt}" class="ts-bar ${gt.cls}${ut}" rx="1"><title>${je}</title></rect>`})}
            `})}
          <!-- Selection highlight overlay (always visible between handles) -->
          ${Mt`
            <rect 
              x="${ae}" 
              y="${C.top}" 
              width="${Math.max(1,X-ae)}" 
              height="${Q}" 
              fill="var(--accent)" 
              opacity="${Yh}" 
              pointer-events="none"
            />
          `}
          <!-- Left cursor line + handle -->
          ${Mt`
            <line x1="${ae}" y1="${C.top}" x2="${ae}" y2="${C.top+Q}" stroke="var(--accent)" stroke-width="0.8" opacity="0.7" />
            <rect x="${ae-gs/2}" y="${C.top+Q/2-Me/2}" width="${gs}" height="${Me}" rx="1.5" fill="var(--accent)" class="cursor-handle" />
            <line x1="${ae-ht}" y1="${C.top+Q/2-Me/5}" x2="${ae-ht}" y2="${C.top+Q/2+Me/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
            <line x1="${ae+ht}" y1="${C.top+Q/2-Me/5}" x2="${ae+ht}" y2="${C.top+Q/2+Me/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
          `}
          <!-- Right cursor line + handle -->
          ${Mt`
            <line x1="${X}" y1="${C.top}" x2="${X}" y2="${C.top+Q}" stroke="var(--accent)" stroke-width="0.8" opacity="0.7" />
            <rect x="${X-gs/2}" y="${C.top+Q/2-Me/2}" width="${gs}" height="${Me}" rx="1.5" fill="var(--accent)" class="cursor-handle" />
            <line x1="${X-ht}" y1="${C.top+Q/2-Me/5}" x2="${X-ht}" y2="${C.top+Q/2+Me/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
            <line x1="${X+ht}" y1="${C.top+Q/2-Me/5}" x2="${X+ht}" y2="${C.top+Q/2+Me/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
          `}
        </svg>
        <!-- Handle drag zones (only on handles, not full chart) -->
        ${(()=>{const W=`${(ae/V*100).toFixed(1)}%`,re=`${(X/V*100).toFixed(1)}%`,de=be=>Ie=>{if(!u)return;Ie.preventDefault(),Ie.stopPropagation();const dt=Ie.currentTarget.closest(".timeseries-chart-wrapper")?.querySelector("svg");if(!dt)return;const ye=dt.getBoundingClientRect(),je=ye.width,Xe=C.left/V*je,tt=(V-C.right)/V*je-Xe,ut=Ke=>{const Te=Math.max(0,Math.min(1,(Ke-ye.left-Xe)/tt));return Math.min(Math.floor(Te*m.length),m.length-1)},gt=be==="left"?ae:X,Rt=ye.left+gt/V*je,ii=Ie.clientX-Rt;document.body.style.cursor="col-resize";const tn=Ke=>{const Te=Ke.clientX-ii,wn=ut(Te),nn=m[wn];if(nn)if(be==="left"){const ft=g??m[m.length-1].timestamp;u(Math.min(nn.timestamp,ft),ft)}else{const ft=d??m[0].timestamp;u(ft,Math.max(nn.timestamp,ft))}},pt=()=>{document.body.style.cursor="",document.removeEventListener("mousemove",tn),document.removeEventListener("mouseup",pt)};document.addEventListener("mousemove",tn),document.addEventListener("mouseup",pt)};return c`
            <div class="chart-handle-zone chart-handle-left" 
                 style="left: ${W};"
                 @mousedown=${de("left")}></div>
            <div class="chart-handle-zone chart-handle-right" 
                 style="left: ${re};"
                 @mousedown=${de("right")}></div>
          `})()}
      </div>
      <div class="timeseries-summary">
        ${A?c`
              <span style="color: var(--accent);">▶ Turns ${T+1}–${I} of ${m.length}</span> · 
              ${new Date(S).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}–${new Date(D).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})} · 
              ${z(E+U+M+j)} · 
              ${ie(v.reduce((W,re)=>W+(re.cost||0),0))}
            `:c`${m.length} msgs · ${z(h)} · ${ie(b)}`}
      </div>
      ${Z?c`
              <div style="margin-top: 8px;">
                <div class="card-title" style="font-size: 12px; margin-bottom: 6px; color: var(--text);">Tokens by Type</div>
                <div class="cost-breakdown-bar" style="height: 18px;">
                  <div class="cost-segment output" style="width: ${yt(E,F).toFixed(1)}%"></div>
                  <div class="cost-segment input" style="width: ${yt(U,F).toFixed(1)}%"></div>
                  <div class="cost-segment cache-write" style="width: ${yt(j,F).toFixed(1)}%"></div>
                  <div class="cost-segment cache-read" style="width: ${yt(M,F).toFixed(1)}%"></div>
                </div>
                <div class="cost-breakdown-legend">
                  <div class="legend-item" title="Assistant output tokens">
                    <span class="legend-dot output"></span>Output ${z(E)}
                  </div>
                  <div class="legend-item" title="User + tool input tokens">
                    <span class="legend-dot input"></span>Input ${z(U)}
                  </div>
                  <div class="legend-item" title="Tokens written to cache">
                    <span class="legend-dot cache-write"></span>Cache Write ${z(j)}
                  </div>
                  <div class="legend-item" title="Tokens read from cache">
                    <span class="legend-dot cache-read"></span>Cache Read ${z(M)}
                  </div>
                </div>
                <div class="cost-breakdown-total">Total: ${z(F)}</div>
              </div>
            `:f}
    </div>
  `}function im(e,t,n,s){if(!e)return c`
      <div class="context-details-panel">
        <div class="muted" style="padding: 20px; text-align: center">No context data</div>
      </div>
    `;const i=Dt(e.systemPrompt.chars),o=Dt(e.skills.promptChars),a=Dt(e.tools.listChars+e.tools.schemaChars),r=Dt(e.injectedWorkspaceFiles.reduce((A,S)=>A+S.injectedChars,0)),l=i+o+a+r;let d="";if(t&&t.totalTokens>0){const A=t.input+t.cacheRead;A>0&&(d=`~${Math.min(l/A*100,100).toFixed(0)}% of input`)}const g=e.skills.entries.toSorted((A,S)=>S.blockChars-A.blockChars),u=e.tools.entries.toSorted((A,S)=>S.summaryChars+S.schemaChars-(A.summaryChars+A.schemaChars)),m=e.injectedWorkspaceFiles.toSorted((A,S)=>S.injectedChars-A.injectedChars),h=4,b=n,y=b?g:g.slice(0,h),_=b?u:u.slice(0,h),L=b?m:m.slice(0,h),R=g.length>h||u.length>h||m.length>h;return c`
    <div class="context-details-panel">
      <div class="context-breakdown-header">
        <div class="card-title" style="font-size: 12px; color: var(--text);">System Prompt Breakdown</div>
        ${R?c`<button class="context-expand-btn" @click=${s}>
                ${b?"Collapse":"Expand all"}
              </button>`:f}
      </div>
      <p class="context-weight-desc">
        ${d||"Base context per message"}
      </p>
      <div class="context-stacked-bar">
        <div class="context-segment system" style="width: ${yt(i,l).toFixed(1)}%" title="System: ~${z(i)}"></div>
        <div class="context-segment skills" style="width: ${yt(o,l).toFixed(1)}%" title="Skills: ~${z(o)}"></div>
        <div class="context-segment tools" style="width: ${yt(a,l).toFixed(1)}%" title="Tools: ~${z(a)}"></div>
        <div class="context-segment files" style="width: ${yt(r,l).toFixed(1)}%" title="Files: ~${z(r)}"></div>
      </div>
      <div class="context-legend">
        <span class="legend-item"><span class="legend-dot system"></span>Sys ~${z(i)}</span>
        <span class="legend-item"><span class="legend-dot skills"></span>Skills ~${z(o)}</span>
        <span class="legend-item"><span class="legend-dot tools"></span>Tools ~${z(a)}</span>
        <span class="legend-item"><span class="legend-dot files"></span>Files ~${z(r)}</span>
      </div>
      <div class="context-total">Total: ~${z(l)}</div>
      <div class="context-breakdown-grid">
        ${g.length>0?(()=>{const A=g.length-y.length;return c`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Skills (${g.length})</div>
                    <div class="context-breakdown-list">
                      ${y.map(S=>c`
                          <div class="context-breakdown-item">
                            <span class="mono">${S.name}</span>
                            <span class="muted">~${z(Dt(S.blockChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${A>0?c`<div class="context-breakdown-more">+${A} more</div>`:f}
                  </div>
                `})():f}
        ${u.length>0?(()=>{const A=u.length-_.length;return c`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Tools (${u.length})</div>
                    <div class="context-breakdown-list">
                      ${_.map(S=>c`
                          <div class="context-breakdown-item">
                            <span class="mono">${S.name}</span>
                            <span class="muted">~${z(Dt(S.summaryChars+S.schemaChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${A>0?c`<div class="context-breakdown-more">+${A} more</div>`:f}
                  </div>
                `})():f}
        ${m.length>0?(()=>{const A=m.length-L.length;return c`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Files (${m.length})</div>
                    <div class="context-breakdown-list">
                      ${L.map(S=>c`
                          <div class="context-breakdown-item">
                            <span class="mono">${S.name}</span>
                            <span class="muted">~${z(Dt(S.injectedChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${A>0?c`<div class="context-breakdown-more">+${A} more</div>`:f}
                  </div>
                `})():f}
      </div>
    </div>
  `}function om(e,t,n,s,i,o,a,r,l,d,g,u){if(t)return c`
      <div class="session-logs-compact">
        <div class="session-logs-header">Conversation</div>
        <div class="muted" style="padding: 20px; text-align: center">Loading...</div>
      </div>
    `;if(!e||e.length===0)return c`
      <div class="session-logs-compact">
        <div class="session-logs-header">Conversation</div>
        <div class="muted" style="padding: 20px; text-align: center">No messages</div>
      </div>
    `;const m=i.query.trim().toLowerCase(),h=e.map(D=>{const T=zc(D.content),I=T.cleanContent||D.content;return{log:D,toolInfo:T,cleanContent:I}}),b=Array.from(new Set(h.flatMap(D=>D.toolInfo.tools.map(([T])=>T)))).toSorted((D,T)=>D.localeCompare(T)),y=h.filter(D=>{if(g!=null&&u!=null){const T=D.log.timestamp;if(T>0){const I=Math.min(g,u),v=Math.max(g,u),E=Wc(T);if(E<I||E>v)return!1}}return!(i.roles.length>0&&!i.roles.includes(D.log.role)||i.hasTools&&D.toolInfo.tools.length===0||i.tools.length>0&&!D.toolInfo.tools.some(([I])=>i.tools.includes(I))||m&&!D.cleanContent.toLowerCase().includes(m))}),_=i.roles.length>0||i.tools.length>0||i.hasTools||m,L=g!=null&&u!=null,R=_||L?`${y.length} of ${e.length} ${L?"(timeline filtered)":""}`:`${e.length}`,A=new Set(i.roles),S=new Set(i.tools);return c`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>Conversation <span style="font-weight: normal; color: var(--muted);">(${R} messages)</span></span>
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${s}>
          ${n?"Collapse All":"Expand All"}
        </button>
      </div>
      <div class="usage-filters-inline" style="margin: 10px 12px;">
        <select
          multiple
          size="4"
          @change=${D=>o(Array.from(D.target.selectedOptions).map(T=>T.value))}
        >
          <option value="user" ?selected=${A.has("user")}>User</option>
          <option value="assistant" ?selected=${A.has("assistant")}>Assistant</option>
          <option value="tool" ?selected=${A.has("tool")}>Tool</option>
          <option value="toolResult" ?selected=${A.has("toolResult")}>Tool result</option>
        </select>
        <select
          multiple
          size="4"
          @change=${D=>a(Array.from(D.target.selectedOptions).map(T=>T.value))}
        >
          ${b.map(D=>c`<option value=${D} ?selected=${S.has(D)}>${D}</option>`)}
        </select>
        <label class="usage-filters-inline" style="gap: 6px;">
          <input
            type="checkbox"
            .checked=${i.hasTools}
            @change=${D=>r(D.target.checked)}
          />
          Has tools
        </label>
        <input
          type="text"
          placeholder="Search conversation"
          .value=${i.query}
          @input=${D=>l(D.target.value)}
        />
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${d}>
          Clear
        </button>
      </div>
      <div class="session-logs-list">
        ${y.map(D=>{const{log:T,toolInfo:I,cleanContent:v}=D,E=T.role==="user"?"user":"assistant",U=T.role==="user"?"You":T.role==="assistant"?"Assistant":"Tool";return c`
          <div class="session-log-entry ${E}">
            <div class="session-log-meta">
              <span class="session-log-role">${U}</span>
              <span>${new Date(T.timestamp).toLocaleString()}</span>
              ${T.tokens?c`<span>${z(T.tokens)}</span>`:f}
            </div>
            <div class="session-log-content">${v}</div>
            ${I.tools.length>0?c`
                    <details class="session-log-tools" ?open=${n}>
                      <summary>${I.summary}</summary>
                      <div class="session-log-tools-list">
                        ${I.tools.map(([M,j])=>c`
                            <span class="session-log-tools-pill">${M} × ${j}</span>
                          `)}
                      </div>
                    </details>
                  `:f}
          </div>
        `})}
        ${y.length===0?c`
                <div class="muted" style="padding: 12px">No messages match the filters.</div>
              `:f}
      </div>
    </div>
  `}const am=`
  .usage-page-header {
    margin: 4px 0 12px;
  }
  .usage-page-title {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  .usage-page-subtitle {
    font-size: 13px;
    color: var(--muted);
    margin: 0 0 12px;
  }
  /* ===== FILTERS & HEADER ===== */
  .usage-filters-inline {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-filters-inline select {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="date"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="text"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
    min-width: 180px;
  }
  .usage-filters-inline .btn-sm {
    padding: 6px 12px;
    font-size: 14px;
  }
  .usage-refresh-indicator {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(255, 77, 77, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: #ff4d4d;
  }
  .usage-refresh-indicator::before {
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #ff4d4d;
    border-top-color: transparent;
    border-radius: 50%;
    animation: usage-spin 0.6s linear infinite;
  }
  @keyframes usage-spin {
    to { transform: rotate(360deg); }
  }
  .active-filters {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .filter-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px 4px 12px;
    background: var(--accent-subtle);
    border: 1px solid var(--accent);
    border-radius: 16px;
    font-size: 12px;
  }
  .filter-chip-label {
    color: var(--accent);
    font-weight: 500;
  }
  .filter-chip-remove {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    padding: 2px 4px;
    font-size: 14px;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.15s;
  }
  .filter-chip-remove:hover {
    opacity: 1;
  }
  .filter-clear-btn {
    padding: 4px 10px !important;
    font-size: 12px !important;
    line-height: 1 !important;
    margin-left: 8px;
  }
  .usage-query-bar {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto;
    gap: 10px;
    align-items: center;
    /* Keep the dropdown filter row from visually touching the query row. */
    margin-bottom: 10px;
  }
  .usage-query-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
    justify-self: end;
  }
  .usage-query-actions .btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-query-actions .btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-action-btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-action-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-primary-btn {
    background: #ff4d4d;
    color: #fff;
    border-color: #ff4d4d;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  }
  .btn.usage-primary-btn {
    background: #ff4d4d !important;
    border-color: #ff4d4d !important;
    color: #fff !important;
  }
  .usage-primary-btn:hover {
    background: #e64545;
    border-color: #e64545;
  }
  .btn.usage-primary-btn:hover {
    background: #e64545 !important;
    border-color: #e64545 !important;
  }
  .usage-primary-btn:disabled {
    background: rgba(255, 77, 77, 0.18);
    border-color: rgba(255, 77, 77, 0.3);
    color: #ff4d4d;
    box-shadow: none;
    cursor: default;
    opacity: 1;
  }
  .usage-primary-btn[disabled] {
    background: rgba(255, 77, 77, 0.18) !important;
    border-color: rgba(255, 77, 77, 0.3) !important;
    color: #ff4d4d !important;
    opacity: 1 !important;
  }
  .usage-secondary-btn {
    background: var(--bg-secondary);
    color: var(--text);
    border-color: var(--border);
  }
  .usage-query-input {
    width: 100%;
    min-width: 220px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-query-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-suggestion {
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
    transition: background 0.15s;
  }
  .usage-query-suggestion:hover {
    background: var(--bg-hover);
  }
  .usage-filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-top: 14px;
  }
  details.usage-filter-select {
    position: relative;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 6px 10px;
    background: var(--bg);
    font-size: 12px;
    min-width: 140px;
  }
  details.usage-filter-select summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    font-weight: 500;
  }
  details.usage-filter-select summary::-webkit-details-marker {
    display: none;
  }
  .usage-filter-badge {
    font-size: 11px;
    color: var(--muted);
  }
  .usage-filter-popover {
    position: absolute;
    left: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 220px;
    z-index: 20;
  }
  .usage-filter-actions {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-filter-actions button {
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 11px;
  }
  .usage-filter-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 200px;
    overflow: auto;
  }
  .usage-filter-option {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }
  .usage-query-hint {
    font-size: 11px;
    color: var(--muted);
  }
  .usage-query-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
  }
  .usage-query-chip button {
    background: none;
    border: none;
    color: var(--muted);
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  .usage-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--bg);
  }
  .usage-header.pinned {
    position: sticky;
    top: 12px;
    z-index: 6;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }
  .usage-pin-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
  }
  .usage-pin-btn.active {
    background: var(--accent-subtle);
    border-color: var(--accent);
    color: var(--accent);
  }
  .usage-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-header-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .usage-header-metrics {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-metric-badge {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: transparent;
    font-size: 11px;
    color: var(--muted);
  }
  .usage-metric-badge strong {
    font-size: 12px;
    color: var(--text);
  }
  .usage-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .usage-controls .active-filters {
    flex: 1 1 100%;
  }
  .usage-controls input[type="date"] {
    min-width: 140px;
  }
  .usage-presets {
    display: inline-flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .usage-presets .btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .usage-quick-filters {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-select {
    min-width: 120px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .usage-export-menu summary {
    cursor: pointer;
    font-weight: 500;
    color: var(--text);
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-export-menu summary::-webkit-details-marker {
    display: none;
  }
  .usage-export-menu {
    position: relative;
  }
  .usage-export-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 12px;
  }
  .usage-export-popover {
    position: absolute;
    right: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 160px;
    z-index: 10;
  }
  .usage-export-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .usage-export-item {
    text-align: left;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 12px;
  }
  .usage-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-top: 12px;
  }
  .usage-summary-card {
    padding: 12px;
    border-radius: 8px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .usage-mosaic {
    margin-top: 16px;
    padding: 16px;
  }
  .usage-mosaic-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }
  .usage-mosaic-title {
    font-weight: 600;
  }
  .usage-mosaic-sub {
    font-size: 12px;
    color: var(--muted);
  }
  .usage-mosaic-grid {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) minmax(260px, 2fr);
    gap: 16px;
    align-items: start;
  }
  .usage-mosaic-section {
    background: var(--bg-subtle);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px;
  }
  .usage-mosaic-section-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .usage-mosaic-total {
    font-size: 20px;
    font-weight: 700;
  }
  .usage-daypart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 8px;
  }
  .usage-daypart-cell {
    border-radius: 8px;
    padding: 10px;
    color: var(--text);
    background: rgba(255, 77, 77, 0.08);
    border: 1px solid rgba(255, 77, 77, 0.2);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .usage-daypart-label {
    font-size: 12px;
    font-weight: 600;
  }
  .usage-daypart-value {
    font-size: 14px;
  }
  .usage-hour-grid {
    display: grid;
    grid-template-columns: repeat(24, minmax(6px, 1fr));
    gap: 4px;
  }
  .usage-hour-cell {
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 77, 77, 0.1);
    border: 1px solid rgba(255, 77, 77, 0.2);
    cursor: pointer;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .usage-hour-cell.selected {
    border-color: rgba(255, 77, 77, 0.8);
    box-shadow: 0 0 0 2px rgba(255, 77, 77, 0.2);
  }
  .usage-hour-labels {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 6px;
    margin-top: 8px;
    font-size: 11px;
    color: var(--muted);
  }
  .usage-hour-legend {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 10px;
    font-size: 11px;
    color: var(--muted);
  }
  .usage-hour-legend span {
    display: inline-block;
    width: 14px;
    height: 10px;
    border-radius: 4px;
    background: rgba(255, 77, 77, 0.15);
    border: 1px solid rgba(255, 77, 77, 0.2);
  }
  .usage-calendar-labels {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
    font-size: 10px;
    color: var(--muted);
    margin-bottom: 6px;
  }
  .usage-calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
  }
  .usage-calendar-cell {
    height: 18px;
    border-radius: 4px;
    border: 1px solid rgba(255, 77, 77, 0.2);
    background: rgba(255, 77, 77, 0.08);
  }
  .usage-calendar-cell.empty {
    background: transparent;
    border-color: transparent;
  }
  .usage-summary-title {
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-left: 6px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 10px;
    color: var(--muted);
    cursor: help;
  }
  .usage-summary-value {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-strong);
  }
  .usage-summary-value.good {
    color: #1f8f4e;
  }
  .usage-summary-value.warn {
    color: #c57a00;
  }
  .usage-summary-value.bad {
    color: #c9372c;
  }
  .usage-summary-hint {
    font-size: 10px;
    color: var(--muted);
    cursor: help;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0 6px;
    line-height: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .usage-summary-sub {
    font-size: 11px;
    color: var(--muted);
    margin-top: 4px;
  }
  .usage-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .usage-list-item {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 12px;
    color: var(--text);
    align-items: flex-start;
  }
  .usage-list-value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    text-align: right;
  }
  .usage-list-sub {
    font-size: 11px;
    color: var(--muted);
  }
  .usage-list-item.button {
    border: none;
    background: transparent;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .usage-list-item.button:hover {
    color: var(--text-strong);
  }
`,rm=`
  .usage-list-item .muted {
    font-size: 11px;
  }
  .usage-error-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .usage-error-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    align-items: center;
    font-size: 12px;
  }
  .usage-error-date {
    font-weight: 600;
  }
  .usage-error-rate {
    font-variant-numeric: tabular-nums;
  }
  .usage-error-sub {
    grid-column: 1 / -1;
    font-size: 11px;
    color: var(--muted);
  }
  .usage-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 8px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 11px;
    background: var(--bg);
    color: var(--text);
  }
  .usage-meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
  }
  .usage-meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
  }
  .usage-meta-item span {
    color: var(--muted);
    font-size: 11px;
  }
  .usage-insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 12px;
  }
  .usage-insight-card {
    padding: 14px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
  }
  .usage-insight-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .usage-insight-subtitle {
    font-size: 11px;
    color: var(--muted);
    margin-top: 6px;
  }
  /* ===== CHART TOGGLE ===== */
  .chart-toggle {
    display: flex;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
  }
  .chart-toggle .toggle-btn {
    padding: 6px 14px;
    font-size: 13px;
    background: transparent;
    border: none;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .chart-toggle .toggle-btn:hover {
    color: var(--text);
  }
  .chart-toggle .toggle-btn.active {
    background: #ff4d4d;
    color: white;
  }
  .chart-toggle.small .toggle-btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .sessions-toggle {
    border-radius: 4px;
  }
  .sessions-toggle .toggle-btn {
    border-radius: 4px;
  }
  .daily-chart-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 6px;
  }

  /* ===== DAILY BAR CHART ===== */
  .daily-chart {
    margin-top: 12px;
  }
  .daily-chart-bars {
    display: flex;
    align-items: flex-end;
    height: 200px;
    gap: 4px;
    padding: 8px 4px 36px;
  }
  .daily-bar-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
    border-radius: 4px 4px 0 0;
    transition: background 0.15s;
    min-width: 0;
  }
  .daily-bar-wrapper:hover {
    background: var(--bg-hover);
  }
  .daily-bar-wrapper.selected {
    background: var(--accent-subtle);
  }
  .daily-bar-wrapper.selected .daily-bar {
    background: var(--accent);
  }
  .daily-bar {
    width: 100%;
    max-width: var(--bar-max-width, 32px);
    background: #ff4d4d;
    border-radius: 3px 3px 0 0;
    min-height: 2px;
    transition: all 0.15s;
    overflow: hidden;
  }
  .daily-bar-wrapper:hover .daily-bar {
    background: #cc3d3d;
  }
  .daily-bar-label {
    position: absolute;
    bottom: -28px;
    font-size: 10px;
    color: var(--muted);
    white-space: nowrap;
    text-align: center;
    transform: rotate(-35deg);
    transform-origin: top center;
  }
  .daily-bar-total {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    color: var(--muted);
    white-space: nowrap;
  }
  .daily-bar-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
  }
  .daily-bar-wrapper:hover .daily-bar-tooltip {
    opacity: 1;
  }

  /* ===== COST/TOKEN BREAKDOWN BAR ===== */
  .cost-breakdown {
    margin-top: 18px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .cost-breakdown-header {
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: var(--text-strong);
  }
  .cost-breakdown-bar {
    height: 28px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .cost-segment {
    height: 100%;
    transition: width 0.3s ease;
    position: relative;
  }
  .cost-segment.output {
    background: #ef4444;
  }
  .cost-segment.input {
    background: #f59e0b;
  }
  .cost-segment.cache-write {
    background: #10b981;
  }
  .cost-segment.cache-read {
    background: #06b6d4;
  }
  .cost-breakdown-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .cost-breakdown-total {
    margin-top: 10px;
    font-size: 12px;
    color: var(--muted);
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text);
    cursor: help;
  }
  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .legend-dot.output {
    background: #ef4444;
  }
  .legend-dot.input {
    background: #f59e0b;
  }
  .legend-dot.cache-write {
    background: #10b981;
  }
  .legend-dot.cache-read {
    background: #06b6d4;
  }
  .legend-dot.system {
    background: #ff4d4d;
  }
  .legend-dot.skills {
    background: #8b5cf6;
  }
  .legend-dot.tools {
    background: #ec4899;
  }
  .legend-dot.files {
    background: #f59e0b;
  }
  .cost-breakdown-note {
    margin-top: 10px;
    font-size: 11px;
    color: var(--muted);
    line-height: 1.4;
  }

  /* ===== SESSION BARS (scrollable list) ===== */
  .session-bars {
    margin-top: 16px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
  }
  .session-bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.15s;
  }
  .session-bar-row:last-child {
    border-bottom: none;
  }
  .session-bar-row:hover {
    background: var(--bg-hover);
  }
  .session-bar-row.selected {
    background: var(--accent-subtle);
  }
  .session-bar-label {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 13px;
    color: var(--text);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .session-bar-title {
    /* Prefer showing the full name; wrap instead of truncating. */
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .session-bar-meta {
    font-size: 10px;
    color: var(--muted);
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .session-bar-track {
    flex: 0 0 90px;
    height: 6px;
    background: var(--bg-secondary);
    border-radius: 4px;
    overflow: hidden;
    opacity: 0.6;
  }
  .session-bar-fill {
    height: 100%;
    background: rgba(255, 77, 77, 0.7);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
  .session-bar-value {
    flex: 0 0 70px;
    text-align: right;
    font-size: 12px;
    font-family: var(--font-mono);
    color: var(--muted);
  }
  .session-bar-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }
  .session-copy-btn {
    height: 26px;
    padding: 0 10px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    font-weight: 600;
    color: var(--muted);
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .session-copy-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
    color: var(--text);
  }

  /* ===== TIME SERIES CHART ===== */
  .session-timeseries {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .timeseries-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .timeseries-controls {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .timeseries-header {
    font-weight: 600;
    color: var(--text);
  }
  .timeseries-chart {
    width: 100%;
    overflow: hidden;
  }
  .timeseries-svg {
    width: 100%;
    height: auto;
    display: block;
  }
  .timeseries-svg .axis-label {
    font-size: 10px;
    fill: var(--muted);
  }
  .timeseries-svg .ts-area {
    fill: #ff4d4d;
    fill-opacity: 0.1;
  }
  .timeseries-svg .ts-line {
    fill: none;
    stroke: #ff4d4d;
    stroke-width: 2;
  }
  .timeseries-svg .ts-dot {
    fill: #ff4d4d;
    transition: r 0.15s, fill 0.15s;
  }
  .timeseries-svg .ts-dot:hover {
    r: 5;
  }
  .timeseries-svg .ts-bar {
    fill: #ff4d4d;
    transition: fill 0.15s;
  }
  .timeseries-svg .ts-bar:hover {
    fill: #cc3d3d;
  }
  .timeseries-svg .ts-bar.output { fill: #ef4444; }
  .timeseries-svg .ts-bar.input { fill: #f59e0b; }
  .timeseries-svg .ts-bar.cache-write { fill: #10b981; }
  .timeseries-svg .ts-bar.cache-read { fill: #06b6d4; }
  .timeseries-summary {
    margin-top: 12px;
    font-size: 13px;
    color: var(--muted);
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .timeseries-loading {
    padding: 24px;
    text-align: center;
    color: var(--muted);
  }

  /* ===== SESSION LOGS ===== */
  .session-logs {
    margin-top: 24px;
    background: var(--bg-secondary);
    border-radius: 8px;
    overflow: hidden;
  }
  .session-logs-header {
    padding: 10px 14px;
    font-weight: 600;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    background: var(--bg-secondary);
  }
  .session-logs-loading {
    padding: 24px;
    text-align: center;
    color: var(--muted);
  }
  .session-logs-list {
    max-height: 400px;
    overflow-y: auto;
  }
  .session-log-entry {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: var(--bg);
  }
  .session-log-entry:last-child {
    border-bottom: none;
  }
  .session-log-entry.user {
    border-left: 3px solid var(--accent);
  }
  .session-log-entry.assistant {
    border-left: 3px solid var(--border-strong);
  }
  .session-log-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 11px;
    color: var(--muted);
    flex-wrap: wrap;
  }
  .session-log-role {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 999px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .session-log-entry.user .session-log-role {
    color: var(--accent);
  }
  .session-log-entry.assistant .session-log-role {
    color: var(--muted);
  }
  .session-log-content {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text);
    white-space: pre-wrap;
    word-break: break-word;
    background: var(--bg-secondary);
    border-radius: 8px;
    padding: 8px 10px;
    border: 1px solid var(--border);
    max-height: 220px;
    overflow-y: auto;
  }

  /* ===== CONTEXT WEIGHT BREAKDOWN ===== */
  .context-weight-breakdown {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .context-weight-breakdown .context-weight-header {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 4px;
    color: var(--text);
  }
  .context-weight-desc {
    font-size: 12px;
    color: var(--muted);
    margin: 0 0 12px 0;
  }
  .context-stacked-bar {
    height: 24px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .context-segment {
    height: 100%;
    transition: width 0.3s ease;
  }
  .context-segment.system {
    background: #ff4d4d;
  }
  .context-segment.skills {
    background: #8b5cf6;
  }
  .context-segment.tools {
    background: #ec4899;
  }
  .context-segment.files {
    background: #f59e0b;
  }
  .context-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .context-total {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 600;
    color: var(--muted);
  }
  .context-details {
    margin-top: 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  .context-details summary {
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }
  .context-details[open] summary {
    border-bottom: 1px solid var(--border);
  }
  .context-list {
    max-height: 200px;
    overflow-y: auto;
  }
  .context-list-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 11px;
    text-transform: uppercase;
    color: var(--muted);
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
  }
  .context-list-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 12px;
    border-bottom: 1px solid var(--border);
  }
  .context-list-item:last-child {
    border-bottom: none;
  }
  .context-list-item .mono {
    font-family: var(--font-mono);
    color: var(--text);
  }
  .context-list-item .muted {
    color: var(--muted);
    font-family: var(--font-mono);
  }

  /* ===== NO CONTEXT NOTE ===== */
  .no-context-note {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 13px;
    color: var(--muted);
    line-height: 1.5;
  }

  /* ===== TWO COLUMN LAYOUT ===== */
  .usage-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 18px;
    align-items: stretch;
  }
  .usage-grid-left {
    display: flex;
    flex-direction: column;
  }
  .usage-grid-right {
    display: flex;
    flex-direction: column;
  }
  
  /* ===== LEFT CARD (Daily + Breakdown) ===== */
  .usage-left-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .usage-left-card .daily-chart-bars {
    flex: 1;
    min-height: 200px;
  }
  .usage-left-card .sessions-panel-title {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 12px;
  }
`,lm=`
  
  /* ===== COMPACT DAILY CHART ===== */
  .daily-chart-compact {
    margin-bottom: 16px;
  }
  .daily-chart-compact .sessions-panel-title {
    margin-bottom: 8px;
  }
  .daily-chart-compact .daily-chart-bars {
    height: 100px;
    padding-bottom: 20px;
  }
  
  /* ===== COMPACT COST BREAKDOWN ===== */
  .cost-breakdown-compact {
    padding: 0;
    margin: 0;
    background: transparent;
    border-top: 1px solid var(--border);
    padding-top: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-header {
    margin-bottom: 8px;
  }
  .cost-breakdown-compact .cost-breakdown-legend {
    gap: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-note {
    display: none;
  }
  
  /* ===== SESSIONS CARD ===== */
  .sessions-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .sessions-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .sessions-card-title {
    font-weight: 600;
    font-size: 14px;
  }
  .sessions-card-count {
    font-size: 12px;
    color: var(--muted);
  }
  .sessions-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 8px 0 10px;
    font-size: 12px;
    color: var(--muted);
  }
  .sessions-card-stats {
    display: inline-flex;
    gap: 12px;
  }
  .sessions-sort {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--muted);
  }
  .sessions-sort select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .sessions-action-btn {
    height: 28px;
    padding: 0 10px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1;
  }
  .sessions-action-btn.icon {
    width: 32px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .sessions-card-hint {
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 8px;
  }
  .sessions-card .session-bars {
    max-height: 280px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    margin: 0;
    overflow-y: auto;
    padding: 8px;
  }
  .sessions-card .session-bar-row {
    padding: 6px 8px;
    border-radius: 6px;
    margin-bottom: 3px;
    border: 1px solid transparent;
    transition: all 0.15s;
  }
  .sessions-card .session-bar-row:hover {
    border-color: var(--border);
    background: var(--bg-hover);
  }
  .sessions-card .session-bar-row.selected {
    border-color: var(--accent);
    background: var(--accent-subtle);
    box-shadow: inset 0 0 0 1px rgba(255, 77, 77, 0.15);
  }
  .sessions-card .session-bar-label {
    flex: 1 1 auto;
    min-width: 140px;
    font-size: 12px;
  }
  .sessions-card .session-bar-value {
    flex: 0 0 60px;
    font-size: 11px;
    font-weight: 600;
  }
  .sessions-card .session-bar-track {
    flex: 0 0 70px;
    height: 5px;
    opacity: 0.5;
  }
  .sessions-card .session-bar-fill {
    background: rgba(255, 77, 77, 0.55);
  }
  .sessions-clear-btn {
    margin-left: auto;
  }
  
  /* ===== EMPTY DETAIL STATE ===== */
  .session-detail-empty {
    margin-top: 18px;
    background: var(--bg-secondary);
    border-radius: 8px;
    border: 2px dashed var(--border);
    padding: 32px;
    text-align: center;
  }
  .session-detail-empty-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 8px;
  }
  .session-detail-empty-desc {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 16px;
    line-height: 1.5;
  }
  .session-detail-empty-features {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
  }
  .session-detail-empty-feature {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--muted);
  }
  .session-detail-empty-feature .icon {
    font-size: 16px;
  }
  
  /* ===== SESSION DETAIL PANEL ===== */
  .session-detail-panel {
    margin-top: 12px;
    /* inherits background, border-radius, shadow from .card */
    border: 2px solid var(--accent) !important;
  }
  .session-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
  }
  .session-detail-header:hover {
    background: var(--bg-hover);
  }
  .session-detail-title {
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-detail-header-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-close-btn {
    background: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    cursor: pointer;
    padding: 2px 8px;
    font-size: 16px;
    line-height: 1;
    border-radius: 4px;
    transition: background 0.15s, color 0.15s;
  }
  .session-close-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
    border-color: var(--accent);
  }
  .session-detail-stats {
    display: flex;
    gap: 10px;
    font-size: 12px;
    color: var(--muted);
  }
  .session-detail-stats strong {
    color: var(--text);
    font-family: var(--font-mono);
  }
  .session-detail-content {
    padding: 12px;
  }
  .session-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }
  .session-summary-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .session-summary-title {
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 4px;
  }
  .session-summary-value {
    font-size: 14px;
    font-weight: 600;
  }
  .session-summary-meta {
    font-size: 11px;
    color: var(--muted);
    margin-top: 4px;
  }
  .session-detail-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    /* Separate "Usage Over Time" from the summary + Top Tools/Model Mix cards above. */
    margin-top: 12px;
    margin-bottom: 10px;
  }
  .session-detail-bottom {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
    gap: 10px;
    align-items: stretch;
  }
  .session-detail-bottom .session-logs-compact {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-detail-bottom .session-logs-compact .session-logs-list {
    flex: 1 1 auto;
    max-height: none;
  }
  .context-details-panel {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
  }
  .context-breakdown-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
    margin-top: 8px;
  }
  .context-breakdown-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .context-breakdown-title {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .context-breakdown-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 11px;
  }
  .context-breakdown-item {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  .context-breakdown-more {
    font-size: 10px;
    color: var(--muted);
    margin-top: 4px;
  }
  .context-breakdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .context-expand-btn {
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--muted);
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .context-expand-btn:hover {
    color: var(--text);
    border-color: var(--border-strong);
    background: var(--bg);
  }
  
  /* ===== COMPACT TIMESERIES ===== */
  .session-timeseries-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .session-timeseries-compact .timeseries-header-row {
    margin-bottom: 8px;
  }
  .session-timeseries-compact .timeseries-header {
    font-size: 12px;
  }
  .session-timeseries-compact .timeseries-summary {
    font-size: 11px;
    margin-top: 8px;
  }
  
  /* ===== COMPACT CONTEXT ===== */
  .context-weight-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .context-weight-compact .context-weight-header {
    font-size: 12px;
    margin-bottom: 4px;
  }
  .context-weight-compact .context-weight-desc {
    font-size: 11px;
    margin-bottom: 8px;
  }
  .context-weight-compact .context-stacked-bar {
    height: 16px;
  }
  .context-weight-compact .context-legend {
    font-size: 11px;
    gap: 10px;
    margin-top: 8px;
  }
  .context-weight-compact .context-total {
    font-size: 11px;
    margin-top: 6px;
  }
  .context-weight-compact .context-details {
    margin-top: 8px;
  }
  .context-weight-compact .context-details summary {
    font-size: 12px;
    padding: 6px 10px;
  }
  
  /* ===== COMPACT LOGS ===== */
  .session-logs-compact {
    background: var(--bg);
    border-radius: 10px;
    border: 1px solid var(--border);
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-logs-compact .session-logs-header {
    padding: 10px 12px;
    font-size: 12px;
  }
  .session-logs-compact .session-logs-list {
    max-height: none;
    flex: 1 1 auto;
    overflow: auto;
  }
  .session-logs-compact .session-log-entry {
    padding: 8px 12px;
  }
  .session-logs-compact .session-log-content {
    font-size: 12px;
    max-height: 160px;
  }
  .session-log-tools {
    margin-top: 6px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg-secondary);
    padding: 6px 8px;
    font-size: 11px;
    color: var(--text);
  }
  .session-log-tools summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }
  .session-log-tools summary::-webkit-details-marker {
    display: none;
  }
  .session-log-tools-list {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .session-log-tools-pill {
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 10px;
    background: var(--bg);
    color: var(--text);
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 900px) {
    .usage-grid {
      grid-template-columns: 1fr;
    }
    .session-detail-row {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .session-bar-label {
      flex: 0 0 100px;
    }
    .cost-breakdown-legend {
      gap: 10px;
    }
    .legend-item {
      font-size: 11px;
    }
    .daily-chart-bars {
      height: 170px;
      gap: 6px;
      padding-bottom: 40px;
    }
    .daily-bar-label {
      font-size: 8px;
      bottom: -30px;
      transform: rotate(-45deg);
    }
    .usage-mosaic-grid {
      grid-template-columns: 1fr;
    }
    .usage-hour-grid {
      grid-template-columns: repeat(12, minmax(10px, 1fr));
    }
    .usage-hour-cell {
      height: 22px;
    }
  }

  /* ===== CHART AXIS ===== */
  .ts-axis-label {
    font-size: 5px;
    fill: var(--muted);
  }

  /* ===== RANGE SELECTION HANDLES ===== */
  .chart-handle-zone {
    position: absolute;
    top: 0;
    width: 16px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    transform: translateX(-50%);
  }

  .timeseries-chart-wrapper {
    position: relative;
  }

  .timeseries-reset-btn {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px 10px;
    font-size: 11px;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s ease;
    margin-left: 8px;
  }

  .timeseries-reset-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
    border-color: var(--border-strong);
  }
`,cm=[am,rm,lm].join(`
`);function dm(e){if(e.loading&&!e.totals)return c`
      <style>
        @keyframes initial-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes initial-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
      <section class="card">
        <div class="row" style="justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 2px;">
              <div class="card-title" style="margin: 0;">Token Usage</div>
              <span style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                background: rgba(255, 77, 77, 0.1);
                border-radius: 4px;
                font-size: 12px;
                color: #ff4d4d;
              ">
                <span style="
                  width: 10px;
                  height: 10px;
                  border: 2px solid #ff4d4d;
                  border-top-color: transparent;
                  border-radius: 50%;
                  animation: initial-spin 0.6s linear infinite;
                "></span>
                Loading
              </span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="date" .value=${e.startDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
              <span style="color: var(--muted);">to</span>
              <input type="date" .value=${e.endDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
            </div>
          </div>
        </div>
      </section>
    `;const t=e.chartMode==="tokens",n=e.query.trim().length>0,s=e.queryDraft.trim().length>0,i=[...e.sessions].toSorted((F,N)=>{const O=t?F.usage?.totalTokens??0:F.usage?.totalCost??0;return(t?N.usage?.totalTokens??0:N.usage?.totalCost??0)-O}),o=e.selectedDays.length>0?i.filter(F=>{if(F.usage?.activityDates?.length)return F.usage.activityDates.some(G=>e.selectedDays.includes(G));if(!F.updatedAt)return!1;const N=new Date(F.updatedAt),O=`${N.getFullYear()}-${String(N.getMonth()+1).padStart(2,"0")}-${String(N.getDate()).padStart(2,"0")}`;return e.selectedDays.includes(O)}):i,a=(F,N)=>{if(N.length===0)return!0;const O=F.usage,G=O?.firstActivity??F.updatedAt,ue=O?.lastActivity??F.updatedAt;if(!G||!ue)return!1;const ne=Math.min(G,ue),ae=Math.max(G,ue);let X=ne;for(;X<=ae;){const W=new Date(X),re=Wo(W,e.timeZone);if(N.includes(re))return!0;const de=qo(W,e.timeZone);X=Math.min(de.getTime(),ae)+1}return!1},r=e.selectedHours.length>0?o.filter(F=>a(F,e.selectedHours)):o,l=Sh(r,e.query),d=l.sessions,g=l.warnings,u=Bh(e.queryDraft,i,e.aggregates),m=Ko(e.query),h=F=>{const N=Ht(F);return m.filter(O=>Ht(O.key??"")===N).map(O=>O.value).filter(Boolean)},b=F=>{const N=new Set;for(const O of F)O&&N.add(O);return Array.from(N)},y=b(i.map(F=>F.agentId)).slice(0,12),_=b(i.map(F=>F.channel)).slice(0,12),L=b([...i.map(F=>F.modelProvider),...i.map(F=>F.providerOverride),...e.aggregates?.byProvider.map(F=>F.provider)??[]]).slice(0,12),R=b([...i.map(F=>F.model),...e.aggregates?.byModel.map(F=>F.model)??[]]).slice(0,12),A=b(e.aggregates?.tools.tools.map(F=>F.name)??[]).slice(0,12),S=e.selectedSessions.length===1?e.sessions.find(F=>F.key===e.selectedSessions[0])??d.find(F=>F.key===e.selectedSessions[0]):null,D=F=>F.reduce((N,O)=>(O.usage&&(N.input+=O.usage.input,N.output+=O.usage.output,N.cacheRead+=O.usage.cacheRead,N.cacheWrite+=O.usage.cacheWrite,N.totalTokens+=O.usage.totalTokens,N.totalCost+=O.usage.totalCost,N.inputCost+=O.usage.inputCost??0,N.outputCost+=O.usage.outputCost??0,N.cacheReadCost+=O.usage.cacheReadCost??0,N.cacheWriteCost+=O.usage.cacheWriteCost??0,N.missingCostEntries+=O.usage.missingCostEntries??0),N),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),T=F=>e.costDaily.filter(O=>F.includes(O.date)).reduce((O,G)=>(O.input+=G.input,O.output+=G.output,O.cacheRead+=G.cacheRead,O.cacheWrite+=G.cacheWrite,O.totalTokens+=G.totalTokens,O.totalCost+=G.totalCost,O.inputCost+=G.inputCost??0,O.outputCost+=G.outputCost??0,O.cacheReadCost+=G.cacheReadCost??0,O.cacheWriteCost+=G.cacheWriteCost??0,O),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0});let I,v;const E=i.length;if(e.selectedSessions.length>0){const F=d.filter(N=>e.selectedSessions.includes(N.key));I=D(F),v=F.length}else e.selectedDays.length>0&&e.selectedHours.length===0?(I=T(e.selectedDays),v=d.length):e.selectedHours.length>0||n?(I=D(d),v=d.length):(I=e.totals,v=E);const U=e.selectedSessions.length>0?d.filter(F=>e.selectedSessions.includes(F.key)):n||e.selectedHours.length>0?d:e.selectedDays.length>0?o:i,M=Fh(U,e.aggregates),j=e.selectedSessions.length>0?(()=>{const F=d.filter(O=>e.selectedSessions.includes(O.key)),N=new Set;for(const O of F)for(const G of O.usage?.activityDates??[])N.add(G);return N.size>0?e.costDaily.filter(O=>N.has(O.date)):e.costDaily})():e.costDaily,V=Ph(U,I,M),J=!e.loading&&!e.totals&&e.sessions.length===0,C=(I?.missingCostEntries??0)>0||(I?I.totalTokens>0&&I.totalCost===0&&I.input+I.output+I.cacheRead+I.cacheWrite>0:!1),q=[{label:"Today",days:1},{label:"7d",days:7},{label:"30d",days:30}],Q=F=>{const N=new Date,O=new Date;O.setDate(O.getDate()-(F-1)),e.onStartDateChange($i(O)),e.onEndDateChange($i(N))},oe=(F,N,O)=>{if(O.length===0)return f;const G=h(F),ue=new Set(G.map(X=>Ht(X))),ne=O.length>0&&O.every(X=>ue.has(Ht(X))),ae=G.length;return c`
      <details
        class="usage-filter-select"
        @toggle=${X=>{const W=X.currentTarget;if(!W.open)return;const re=de=>{de.composedPath().includes(W)||(W.open=!1,window.removeEventListener("click",re,!0))};window.addEventListener("click",re,!0)}}
      >
        <summary>
          <span>${N}</span>
          ${ae>0?c`<span class="usage-filter-badge">${ae}</span>`:c`
                  <span class="usage-filter-badge">All</span>
                `}
        </summary>
        <div class="usage-filter-popover">
          <div class="usage-filter-actions">
            <button
              class="btn btn-sm"
              @click=${X=>{X.preventDefault(),X.stopPropagation(),e.onQueryDraftChange(gr(e.queryDraft,F,O))}}
              ?disabled=${ne}
            >
              Select All
            </button>
            <button
              class="btn btn-sm"
              @click=${X=>{X.preventDefault(),X.stopPropagation(),e.onQueryDraftChange(gr(e.queryDraft,F,[]))}}
              ?disabled=${ae===0}
            >
              Clear
            </button>
          </div>
          <div class="usage-filter-options">
            ${O.map(X=>{const W=ue.has(Ht(X));return c`
                <label class="usage-filter-option">
                  <input
                    type="checkbox"
                    .checked=${W}
                    @change=${re=>{const de=re.target,be=`${F}:${X}`;e.onQueryDraftChange(de.checked?zh(e.queryDraft,be):ur(e.queryDraft,be))}}
                  />
                  <span>${X}</span>
                </label>
              `})}
          </div>
        </div>
      </details>
    `},Z=$i(new Date);return c`
    <style>${cm}</style>

    <section class="usage-page-header">
      <div class="usage-page-title">Usage</div>
      <div class="usage-page-subtitle">See where tokens go, when sessions spike, and what drives cost.</div>
    </section>

    <section class="card usage-header ${e.headerPinned?"pinned":""}">
      <div class="usage-header-row">
        <div class="usage-header-title">
          <div class="card-title" style="margin: 0;">Filters</div>
          ${e.loading?c`
                  <span class="usage-refresh-indicator">Loading</span>
                `:f}
          ${J?c`
                  <span class="usage-query-hint">Select a date range and click Refresh to load usage.</span>
                `:f}
        </div>
        <div class="usage-header-metrics">
          ${I?c`
                <span class="usage-metric-badge">
                  <strong>${z(I.totalTokens)}</strong> tokens
                </span>
                <span class="usage-metric-badge">
                  <strong>${ie(I.totalCost)}</strong> cost
                </span>
                <span class="usage-metric-badge">
                  <strong>${v}</strong>
                  session${v!==1?"s":""}
                </span>
              `:f}
          <button
            class="usage-pin-btn ${e.headerPinned?"active":""}"
            title=${e.headerPinned?"Unpin filters":"Pin filters"}
            @click=${e.onToggleHeaderPinned}
          >
            ${e.headerPinned?"Pinned":"Pin"}
          </button>
          <details
            class="usage-export-menu"
            @toggle=${F=>{const N=F.currentTarget;if(!N.open)return;const O=G=>{G.composedPath().includes(N)||(N.open=!1,window.removeEventListener("click",O,!0))};window.addEventListener("click",O,!0)}}
          >
            <summary class="usage-export-button">Export ▾</summary>
            <div class="usage-export-popover">
              <div class="usage-export-list">
                <button
                  class="usage-export-item"
                  @click=${()=>xi(`openclaw-usage-sessions-${Z}.csv`,Oh(d),"text/csv")}
                  ?disabled=${d.length===0}
                >
                  Sessions CSV
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>xi(`openclaw-usage-daily-${Z}.csv`,Uh(j),"text/csv")}
                  ?disabled=${j.length===0}
                >
                  Daily CSV
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>xi(`openclaw-usage-${Z}.json`,JSON.stringify({totals:I,sessions:d,daily:j,aggregates:M},null,2),"application/json")}
                  ?disabled=${d.length===0&&j.length===0}
                >
                  JSON
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div class="usage-header-row">
        <div class="usage-controls">
          ${Kh(e.selectedDays,e.selectedHours,e.selectedSessions,e.sessions,e.onClearDays,e.onClearHours,e.onClearSessions,e.onClearFilters)}
          <div class="usage-presets">
            ${q.map(F=>c`
                <button class="btn btn-sm" @click=${()=>Q(F.days)}>
                  ${F.label}
                </button>
              `)}
          </div>
          <input
            type="date"
            .value=${e.startDate}
            title="Start Date"
            @change=${F=>e.onStartDateChange(F.target.value)}
          />
          <span style="color: var(--muted);">to</span>
          <input
            type="date"
            .value=${e.endDate}
            title="End Date"
            @change=${F=>e.onEndDateChange(F.target.value)}
          />
          <select
            title="Time zone"
            .value=${e.timeZone}
            @change=${F=>e.onTimeZoneChange(F.target.value)}
          >
            <option value="local">Local</option>
            <option value="utc">UTC</option>
          </select>
          <div class="chart-toggle">
            <button
              class="toggle-btn ${t?"active":""}"
              @click=${()=>e.onChartModeChange("tokens")}
            >
              Tokens
            </button>
            <button
              class="toggle-btn ${t?"":"active"}"
              @click=${()=>e.onChartModeChange("cost")}
            >
              Cost
            </button>
          </div>
          <button
            class="btn btn-sm usage-action-btn usage-primary-btn"
            @click=${e.onRefresh}
            ?disabled=${e.loading}
          >
            Refresh
          </button>
        </div>
        
      </div>

      <div style="margin-top: 12px;">
          <div class="usage-query-bar">
          <input
            class="usage-query-input"
            type="text"
            .value=${e.queryDraft}
            placeholder="Filter sessions (e.g. key:agent:main:cron* model:gpt-4o has:errors minTokens:2000)"
            @input=${F=>e.onQueryDraftChange(F.target.value)}
            @keydown=${F=>{F.key==="Enter"&&(F.preventDefault(),e.onApplyQuery())}}
          />
          <div class="usage-query-actions">
            <button
              class="btn btn-sm usage-action-btn usage-secondary-btn"
              @click=${e.onApplyQuery}
              ?disabled=${e.loading||!s&&!n}
            >
              Filter (client-side)
            </button>
            ${s||n?c`<button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${e.onClearQuery}>Clear</button>`:f}
            <span class="usage-query-hint">
              ${n?`${d.length} of ${E} sessions match`:`${E} sessions in range`}
            </span>
          </div>
        </div>
        <div class="usage-filter-row">
          ${oe("agent","Agent",y)}
          ${oe("channel","Channel",_)}
          ${oe("provider","Provider",L)}
          ${oe("model","Model",R)}
          ${oe("tool","Tool",A)}
          <span class="usage-query-hint">
            Tip: use filters or click bars to filter days.
          </span>
        </div>
        ${m.length>0?c`
                <div class="usage-query-chips">
                  ${m.map(F=>{const N=F.raw;return c`
                      <span class="usage-query-chip">
                        ${N}
                        <button
                          title="Remove filter"
                          @click=${()=>e.onQueryDraftChange(ur(e.queryDraft,N))}
                        >
                          ×
                        </button>
                      </span>
                    `})}
                </div>
              `:f}
        ${u.length>0?c`
                <div class="usage-query-suggestions">
                  ${u.map(F=>c`
                      <button
                        class="usage-query-suggestion"
                        @click=${()=>e.onQueryDraftChange(Hh(e.queryDraft,F.value))}
                      >
                        ${F.label}
                      </button>
                    `)}
                </div>
              `:f}
        ${g.length>0?c`
                <div class="callout warning" style="margin-top: 8px;">
                  ${g.join(" · ")}
                </div>
              `:f}
      </div>

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}

      ${e.sessionsLimitReached?c`
              <div class="callout warning" style="margin-top: 12px">
                Showing first 1,000 sessions. Narrow date range for complete results.
              </div>
            `:f}
    </section>

    ${Gh(I,M,V,C,Eh(U,e.timeZone),v,E)}

    ${Mh(U,e.timeZone,e.selectedHours,e.onSelectHour)}

    <!-- Two-column layout: Daily+Breakdown on left, Sessions on right -->
    <div class="usage-grid">
      <div class="usage-grid-left">
        <div class="card usage-left-card">
          ${Wh(j,e.selectedDays,e.chartMode,e.dailyChartMode,e.onDailyChartModeChange,e.onSelectDay)}
          ${I?qh(I,e.chartMode):f}
        </div>
      </div>
      <div class="usage-grid-right">
        ${Jh(d,e.selectedSessions,e.selectedDays,t,e.sessionSort,e.sessionSortDir,e.recentSessions,e.sessionsTab,e.onSelectSession,e.onSessionSortChange,e.onSessionSortDirChange,e.onSessionsTabChange,e.visibleColumns,E,e.onClearSessions)}
      </div>
    </div>

    <!-- Session Detail Panel (when selected) or Empty State -->
    ${S?nm(S,e.timeSeries,e.timeSeriesLoading,e.timeSeriesMode,e.onTimeSeriesModeChange,e.timeSeriesBreakdownMode,e.onTimeSeriesBreakdownChange,e.timeSeriesCursorStart,e.timeSeriesCursorEnd,e.onTimeSeriesCursorRangeChange,e.startDate,e.endDate,e.selectedDays,e.sessionLogs,e.sessionLogsLoading,e.sessionLogsExpanded,e.onToggleSessionLogsExpanded,{roles:e.logFilterRoles,tools:e.logFilterTools,hasTools:e.logFilterHasTools,query:e.logFilterQuery},e.onLogFilterRolesChange,e.onLogFilterToolsChange,e.onLogFilterHasToolsChange,e.onLogFilterQueryChange,e.onLogFilterClear,e.contextExpanded,e.onToggleContextExpanded,e.onClearSessions):Zh()}
  `}let wi=null;const fr=e=>{wi&&clearTimeout(wi),wi=window.setTimeout(()=>{to(e)},400)};function um(e){return e.tab!=="usage"?f:dm({loading:e.usageLoading,error:e.usageError,startDate:e.usageStartDate,endDate:e.usageEndDate,sessions:e.usageResult?.sessions??[],sessionsLimitReached:(e.usageResult?.sessions?.length??0)>=1e3,totals:e.usageResult?.totals??null,aggregates:e.usageResult?.aggregates??null,costDaily:e.usageCostSummary?.daily??[],selectedSessions:e.usageSelectedSessions,selectedDays:e.usageSelectedDays,selectedHours:e.usageSelectedHours,chartMode:e.usageChartMode,dailyChartMode:e.usageDailyChartMode,timeSeriesMode:e.usageTimeSeriesMode,timeSeriesBreakdownMode:e.usageTimeSeriesBreakdownMode,timeSeries:e.usageTimeSeries,timeSeriesLoading:e.usageTimeSeriesLoading,timeSeriesCursorStart:e.usageTimeSeriesCursorStart,timeSeriesCursorEnd:e.usageTimeSeriesCursorEnd,sessionLogs:e.usageSessionLogs,sessionLogsLoading:e.usageSessionLogsLoading,sessionLogsExpanded:e.usageSessionLogsExpanded,logFilterRoles:e.usageLogFilterRoles,logFilterTools:e.usageLogFilterTools,logFilterHasTools:e.usageLogFilterHasTools,logFilterQuery:e.usageLogFilterQuery,query:e.usageQuery,queryDraft:e.usageQueryDraft,sessionSort:e.usageSessionSort,sessionSortDir:e.usageSessionSortDir,recentSessions:e.usageRecentSessions,sessionsTab:e.usageSessionsTab,visibleColumns:e.usageVisibleColumns,timeZone:e.usageTimeZone,contextExpanded:e.usageContextExpanded,headerPinned:e.usageHeaderPinned,onStartDateChange:t=>{e.usageStartDate=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],fr(e)},onEndDateChange:t=>{e.usageEndDate=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],fr(e)},onRefresh:()=>to(e),onTimeZoneChange:t=>{e.usageTimeZone=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],to(e)},onToggleContextExpanded:()=>{e.usageContextExpanded=!e.usageContextExpanded},onToggleSessionLogsExpanded:()=>{e.usageSessionLogsExpanded=!e.usageSessionLogsExpanded},onLogFilterRolesChange:t=>{e.usageLogFilterRoles=t},onLogFilterToolsChange:t=>{e.usageLogFilterTools=t},onLogFilterHasToolsChange:t=>{e.usageLogFilterHasTools=t},onLogFilterQueryChange:t=>{e.usageLogFilterQuery=t},onLogFilterClear:()=>{e.usageLogFilterRoles=[],e.usageLogFilterTools=[],e.usageLogFilterHasTools=!1,e.usageLogFilterQuery=""},onToggleHeaderPinned:()=>{e.usageHeaderPinned=!e.usageHeaderPinned},onSelectHour:(t,n)=>{if(n&&e.usageSelectedHours.length>0){const s=Array.from({length:24},(r,l)=>l),i=e.usageSelectedHours[e.usageSelectedHours.length-1],o=s.indexOf(i),a=s.indexOf(t);if(o!==-1&&a!==-1){const[r,l]=o<a?[o,a]:[a,o],d=s.slice(r,l+1);e.usageSelectedHours=[...new Set([...e.usageSelectedHours,...d])]}}else e.usageSelectedHours.includes(t)?e.usageSelectedHours=e.usageSelectedHours.filter(s=>s!==t):e.usageSelectedHours=[...e.usageSelectedHours,t]},onQueryDraftChange:t=>{e.usageQueryDraft=t,e.usageQueryDebounceTimer&&window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=window.setTimeout(()=>{e.usageQuery=e.usageQueryDraft,e.usageQueryDebounceTimer=null},250)},onApplyQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQuery=e.usageQueryDraft},onClearQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQueryDraft="",e.usageQuery=""},onSessionSortChange:t=>{e.usageSessionSort=t},onSessionSortDirChange:t=>{e.usageSessionSortDir=t},onSessionsTabChange:t=>{e.usageSessionsTab=t},onToggleColumn:t=>{e.usageVisibleColumns.includes(t)?e.usageVisibleColumns=e.usageVisibleColumns.filter(n=>n!==t):e.usageVisibleColumns=[...e.usageVisibleColumns,t]},onSelectSession:(t,n)=>{if(e.usageTimeSeries=null,e.usageSessionLogs=null,e.usageRecentSessions=[t,...e.usageRecentSessions.filter(s=>s!==t)].slice(0,8),n&&e.usageSelectedSessions.length>0){const s=e.usageChartMode==="tokens",o=[...e.usageResult?.sessions??[]].toSorted((d,g)=>{const u=s?d.usage?.totalTokens??0:d.usage?.totalCost??0;return(s?g.usage?.totalTokens??0:g.usage?.totalCost??0)-u}).map(d=>d.key),a=e.usageSelectedSessions[e.usageSelectedSessions.length-1],r=o.indexOf(a),l=o.indexOf(t);if(r!==-1&&l!==-1){const[d,g]=r<l?[r,l]:[l,r],u=o.slice(d,g+1),m=[...new Set([...e.usageSelectedSessions,...u])];e.usageSelectedSessions=m}}else e.usageSelectedSessions.length===1&&e.usageSelectedSessions[0]===t?e.usageSelectedSessions=[]:e.usageSelectedSessions=[t];e.usageTimeSeriesCursorStart=null,e.usageTimeSeriesCursorEnd=null,e.usageSelectedSessions.length===1&&(mh(e,e.usageSelectedSessions[0]),vh(e,e.usageSelectedSessions[0]))},onSelectDay:(t,n)=>{if(n&&e.usageSelectedDays.length>0){const s=(e.usageCostSummary?.daily??[]).map(r=>r.date),i=e.usageSelectedDays[e.usageSelectedDays.length-1],o=s.indexOf(i),a=s.indexOf(t);if(o!==-1&&a!==-1){const[r,l]=o<a?[o,a]:[a,o],d=s.slice(r,l+1),g=[...new Set([...e.usageSelectedDays,...d])];e.usageSelectedDays=g}}else e.usageSelectedDays.includes(t)?e.usageSelectedDays=e.usageSelectedDays.filter(s=>s!==t):e.usageSelectedDays=[t]},onChartModeChange:t=>{e.usageChartMode=t},onDailyChartModeChange:t=>{e.usageDailyChartMode=t},onTimeSeriesModeChange:t=>{e.usageTimeSeriesMode=t},onTimeSeriesBreakdownChange:t=>{e.usageTimeSeriesBreakdownMode=t},onTimeSeriesCursorRangeChange:(t,n)=>{e.usageTimeSeriesCursorStart=t,e.usageTimeSeriesCursorEnd=n},onClearDays:()=>{e.usageSelectedDays=[]},onClearHours:()=>{e.usageSelectedHours=[]},onClearSessions:()=>{e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null},onClearFilters:()=>{e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null}})}const Go={CHILD:2},Jo=e=>(...t)=>({_$litDirective$:e,values:t});let Vo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const{I:gm}=fu,hr=e=>e,pm=e=>e.strings===void 0,mr=()=>document.createComment(""),An=(e,t,n)=>{const s=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=s.insertBefore(mr(),i),a=s.insertBefore(mr(),i);n=new gm(o,a,e,e.options)}else{const o=n._$AB.nextSibling,a=n._$AM,r=a!==e;if(r){let l;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(l=e._$AU)!==a._$AU&&n._$AP(l)}if(o!==i||r){let l=n._$AA;for(;l!==o;){const d=hr(l).nextSibling;hr(s).insertBefore(l,i),l=d}}}return n},Ft=(e,t,n=e)=>(e._$AI(t,n),e),fm={},hm=(e,t=fm)=>e._$AH=t,mm=e=>e._$AH,Si=e=>{e._$AR(),e._$AA.remove()};const vr=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},qc=Jo(class extends Vo{constructor(e){if(super(e),e.type!==Go.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const i=[],o=[];let a=0;for(const r of e)i[a]=s?s(r,a):a,o[a]=n(r,a),a++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const i=mm(e),{values:o,keys:a}=this.dt(t,n,s);if(!Array.isArray(i))return this.ut=a,o;const r=this.ut??=[],l=[];let d,g,u=0,m=i.length-1,h=0,b=o.length-1;for(;u<=m&&h<=b;)if(i[u]===null)u++;else if(i[m]===null)m--;else if(r[u]===a[h])l[h]=Ft(i[u],o[h]),u++,h++;else if(r[m]===a[b])l[b]=Ft(i[m],o[b]),m--,b--;else if(r[u]===a[b])l[b]=Ft(i[u],o[b]),An(e,l[b+1],i[u]),u++,b--;else if(r[m]===a[h])l[h]=Ft(i[m],o[h]),An(e,i[u],i[m]),m--,h++;else if(d===void 0&&(d=vr(a,h,b),g=vr(r,u,m)),d.has(r[u]))if(d.has(r[m])){const y=g.get(a[h]),_=y!==void 0?i[y]:null;if(_===null){const L=An(e,i[u]);Ft(L,o[h]),l[h]=L}else l[h]=Ft(_,o[h]),An(e,i[u],_),i[y]=null;h++}else Si(i[m]),m--;else Si(i[u]),u++;for(;h<=b;){const y=An(e,l[b+1]);Ft(y,o[h]),l[h++]=y}for(;u<=m;){const y=i[u++];y!==null&&Si(y)}return this.ut=a,hm(e,l),kt}}),he={messageSquare:c`
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  `,barChart:c`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,link:c`
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  `,radio:c`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:c`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:c`
    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  `,monitor:c`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,settings:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,bug:c`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:c`
    <svg viewBox="0 0 24 24">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  `,folder:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,menu:c`
    <svg viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  `,x:c`
    <svg viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,check:c`
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
  `,arrowDown:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,copy:c`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:c`
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `,brain:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:c`
    <svg viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  `,loader:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,wrench:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  `,fileCode:c`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:c`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:c`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:c`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  `,image:c`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:c`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:c`
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  `,puzzle:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `};function vm(e){const t=e.hello?.snapshot,n=t?.sessionDefaults?.mainSessionKey?.trim();if(n)return n;const s=t?.sessionDefaults?.mainKey?.trim();return s||"main"}function Gc(e,t){e.sessionKey=t,e.chatMessage="",e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:t,lastActiveSessionKey:t})}function Jc(e,t){const s=(t.hello?.snapshot?.sessionDefaults?.mainKey?.trim()||"main").toLowerCase();return`agent:${e.trim()}:${s}`}function bm(e,t){const n=Vs(t,e.basePath);return c`
    <a
      href=${n}
      class="nav-item ${e.tab===t?"active":""}"
      @click=${s=>{if(!(s.defaultPrevented||s.button!==0||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey)){if(s.preventDefault(),t==="chat"){const i=e.agentsSelectedId,o=e.agentsList,a=i&&o?.agents?.some(l=>l?.id===i)&&i,r=a?Jc(a,e):vm(e);e.sessionKey!==r&&(Gc(e,r),e.loadAssistantIdentity())}e.setTab(t)}}}
      title=${Ji(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${he[Ip(t)]}</span>
      <span class="nav-item__text">${Ji(t)}</span>
    </a>
  `}function ym(e){return c`
    <span style="position: relative; display: inline-flex; align-items: center;">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      ${e>0?c`<span
            style="
              position: absolute;
              top: -5px;
              right: -6px;
              background: var(--color-accent, #6366f1);
              color: #fff;
              border-radius: 999px;
              font-size: 9px;
              line-height: 1;
              padding: 1px 3px;
              pointer-events: none;
            "
          >${e}</span
          >`:""}
    </span>
  `}function $m(e){const t=xm(e.hello,e.sessionsResult),n=e.sessionsHideCron??!0,s=n?Am(e.sessionKey,e.sessionsResult):0,i=km(e.sessionKey,e.sessionsResult,t,n),o=e.onboarding,a=e.onboarding,r=e.onboarding?!1:e.settings.chatShowThinking,l=e.onboarding?!0:e.settings.chatFocusMode,d=c`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
      <path d="M21 3v5h-5"></path>
    </svg>
  `,g=c`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return c`
    <div class="chat-controls">
      <label class="field chat-controls__session">
        <select
          .value=${e.sessionKey}
          ?disabled=${!e.connected}
          @change=${u=>{const m=u.target.value;e.sessionKey=m,e.chatMessage="",e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:m,lastActiveSessionKey:m}),e.loadAssistantIdentity(),yc(e,m),fn(e)}}
        >
          ${qc(i,u=>u.key,u=>c`<option value=${u.key} title=${u.key}>
                ${u.displayName??u.key}
              </option>`)}
        </select>
      </label>
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${async()=>{const u=e;u.chatManualRefreshInFlight=!0,u.chatNewMessagesBelow=!1,await u.updateComplete,u.resetToolStream();try{await Mc(e,{scheduleScroll:!1}),u.scrollToBottom({smooth:!0})}finally{requestAnimationFrame(()=>{u.chatManualRefreshInFlight=!1,u.chatNewMessagesBelow=!1})}}}
        title=${p("chat.refreshTitle")}
      >
        ${d}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${r?"active":""}"
        ?disabled=${o}
        @click=${()=>{o||e.applySettings({...e.settings,chatShowThinking:!e.settings.chatShowThinking})}}
        aria-pressed=${r}
        title=${p(o?"chat.onboardingDisabled":"chat.thinkingToggle")}
      >
        ${he.brain}
      </button>
      <button
        class="btn btn--sm btn--icon ${l?"active":""}"
        ?disabled=${a}
        @click=${()=>{a||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${l}
        title=${p(a?"chat.onboardingDisabled":"chat.focusToggle")}
      >
        ${g}
      </button>
      <button
        class="btn btn--sm btn--icon ${n?"active":""}"
        @click=${()=>{e.sessionsHideCron=!n}}
        aria-pressed=${n}
        title=${n?s>0?p("chat.showCronSessionsHidden",{count:String(s)}):p("chat.showCronSessions"):p("chat.hideCronSessions")}
      >
        ${ym(s)}
      </button>
    </div>
  `}function xm(e,t){const n=e?.snapshot,s=n?.sessionDefaults?.mainSessionKey?.trim();if(s)return s;const i=n?.sessionDefaults?.mainKey?.trim();return i||(t?.sessions?.some(o=>o.key==="main")?"main":null)}const ks={bluebubbles:"iMessage",telegram:"Telegram",discord:"Discord",signal:"Signal",slack:"Slack",whatsapp:"WhatsApp",matrix:"Matrix",email:"Email",sms:"SMS"},wm=Object.keys(ks);function br(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Sm(e){const t=e.toLowerCase();if(e==="main"||e==="agent:main:main")return{prefix:"",fallbackName:"Main Session"};if(e.includes(":subagent:"))return{prefix:"Subagent:",fallbackName:"Subagent:"};if(t.startsWith("cron:")||e.includes(":cron:"))return{prefix:"Cron:",fallbackName:"Cron Job:"};const n=e.match(/^agent:[^:]+:([^:]+):direct:(.+)$/);if(n){const i=n[1],o=n[2];return{prefix:"",fallbackName:`${ks[i]??br(i)} · ${o}`}}const s=e.match(/^agent:[^:]+:([^:]+):group:(.+)$/);if(s){const i=s[1];return{prefix:"",fallbackName:`${ks[i]??br(i)} Group`}}for(const i of wm)if(e===i||e.startsWith(`${i}:`))return{prefix:"",fallbackName:`${ks[i]} Session`};return{prefix:"",fallbackName:e}}function ki(e,t){const n=t?.label?.trim()||"",s=t?.displayName?.trim()||"",{prefix:i,fallbackName:o}=Sm(e),a=r=>i?new RegExp(`^${i.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&")}\\s*`,"i").test(r)?r:`${i} ${r}`:r;return n&&n!==e?a(n):s&&s!==e?a(s):o}function Vc(e){const t=e.trim().toLowerCase();if(!t)return!1;if(t.startsWith("cron:"))return!0;if(!t.startsWith("agent:"))return!1;const n=t.split(":").filter(Boolean);return n.length<3?!1:n.slice(2).join(":").startsWith("cron:")}function km(e,t,n,s=!1){const i=new Set,o=[],a=n&&t?.sessions?.find(l=>l.key===n),r=t?.sessions?.find(l=>l.key===e);if(n&&(i.add(n),o.push({key:n,displayName:ki(n,a||void 0)})),i.has(e)||(i.add(e),o.push({key:e,displayName:ki(e,r)})),t?.sessions)for(const l of t.sessions)!i.has(l.key)&&!(s&&Vc(l.key))&&(i.add(l.key),o.push({key:l.key,displayName:ki(l.key,l)}));return o}function Am(e,t){return t?.sessions?t.sessions.filter(n=>Vc(n.key)&&n.key!==e).length:0}const Cm=["system","light","dark"];function Tm(e){const t=Math.max(0,Cm.indexOf(e.theme)),n=s=>i=>{const a={element:i.currentTarget};(i.clientX||i.clientY)&&(a.pointerClientX=i.clientX,a.pointerClientY=i.clientY),e.setTheme(s,a)};return c`
    <div class="theme-toggle" style="--theme-index: ${t};">
      <div class="theme-toggle__track" role="group" aria-label="Theme">
        <span class="theme-toggle__indicator"></span>
        <button
          class="theme-toggle__button ${e.theme==="system"?"active":""}"
          @click=${n("system")}
          aria-pressed=${e.theme==="system"}
          aria-label="System theme"
          title="System"
        >
          ${Rm()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="light"?"active":""}"
          @click=${n("light")}
          aria-pressed=${e.theme==="light"}
          aria-label="Light theme"
          title="Light"
        >
          ${_m()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="dark"?"active":""}"
          @click=${n("dark")}
          aria-pressed=${e.theme==="dark"}
          aria-label="Dark theme"
          title="Dark"
        >
          ${Em()}
        </button>
      </div>
    </div>
  `}function _m(){return c`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  `}function Em(){return c`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      ></path>
    </svg>
  `}function Rm(){return c`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
      <line x1="8" x2="16" y1="21" y2="21"></line>
      <line x1="12" x2="12" y1="17" y2="21"></line>
    </svg>
  `}function Qc(e,t){if(!e)return e;const s=e.files.some(i=>i.name===t.name)?e.files.map(i=>i.name===t.name?t:i):[...e.files,t];return{...e,files:s}}async function Ai(e,t){if(!(!e.client||!e.connected||e.agentFilesLoading)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const n=await e.client.request("agents.files.list",{agentId:t});n&&(e.agentFilesList=n,e.agentFileActive&&!n.files.some(s=>s.name===e.agentFileActive)&&(e.agentFileActive=null))}catch(n){e.agentFilesError=String(n)}finally{e.agentFilesLoading=!1}}}async function Im(e,t,n,s){if(!(!e.client||!e.connected||e.agentFilesLoading)&&!Object.hasOwn(e.agentFileContents,n)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const i=await e.client.request("agents.files.get",{agentId:t,name:n});if(i?.file){const o=i.file.content??"",a=e.agentFileContents[n]??"",r=e.agentFileDrafts[n],l=s?.preserveDraft??!0;e.agentFilesList=Qc(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:o},(!l||!Object.hasOwn(e.agentFileDrafts,n)||r===a)&&(e.agentFileDrafts={...e.agentFileDrafts,[n]:o})}}catch(i){e.agentFilesError=String(i)}finally{e.agentFilesLoading=!1}}}async function Lm(e,t,n,s){if(!(!e.client||!e.connected||e.agentFileSaving)){e.agentFileSaving=!0,e.agentFilesError=null;try{const i=await e.client.request("agents.files.set",{agentId:t,name:n,content:s});i?.file&&(e.agentFilesList=Qc(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:s},e.agentFileDrafts={...e.agentFileDrafts,[n]:s})}catch(i){e.agentFilesError=String(i)}finally{e.agentFileSaving=!1}}}const yr=["noopener","noreferrer"],cn="_blank";function dn(e){const t=[],n=new Set(yr);for(const s of"".split(/\s+/)){const i=s.trim().toLowerCase();!i||n.has(i)||(n.add(i),t.push(i))}return[...yr,...t].join(" ")}const Mm=[{id:"fs",label:"Files"},{id:"runtime",label:"Runtime"},{id:"web",label:"Web"},{id:"memory",label:"Memory"},{id:"sessions",label:"Sessions"},{id:"ui",label:"UI"},{id:"messaging",label:"Messaging"},{id:"automation",label:"Automation"},{id:"nodes",label:"Nodes"},{id:"agents",label:"Agents"},{id:"media",label:"Media"}],Jn=[{id:"read",label:"read",description:"Read file contents",sectionId:"fs",profiles:["coding"]},{id:"write",label:"write",description:"Create or overwrite files",sectionId:"fs",profiles:["coding"]},{id:"edit",label:"edit",description:"Make precise edits",sectionId:"fs",profiles:["coding"]},{id:"apply_patch",label:"apply_patch",description:"Patch files (OpenAI)",sectionId:"fs",profiles:["coding"]},{id:"exec",label:"exec",description:"Run shell commands",sectionId:"runtime",profiles:["coding"]},{id:"process",label:"process",description:"Manage background processes",sectionId:"runtime",profiles:["coding"]},{id:"web_search",label:"web_search",description:"Search the web",sectionId:"web",profiles:[],includeInOpenClawGroup:!0},{id:"web_fetch",label:"web_fetch",description:"Fetch web content",sectionId:"web",profiles:[],includeInOpenClawGroup:!0},{id:"memory_search",label:"memory_search",description:"Semantic search",sectionId:"memory",profiles:["coding"],includeInOpenClawGroup:!0},{id:"memory_get",label:"memory_get",description:"Read memory files",sectionId:"memory",profiles:["coding"],includeInOpenClawGroup:!0},{id:"sessions_list",label:"sessions_list",description:"List sessions",sectionId:"sessions",profiles:["coding","messaging"],includeInOpenClawGroup:!0},{id:"sessions_history",label:"sessions_history",description:"Session history",sectionId:"sessions",profiles:["coding","messaging"],includeInOpenClawGroup:!0},{id:"sessions_send",label:"sessions_send",description:"Send to session",sectionId:"sessions",profiles:["coding","messaging"],includeInOpenClawGroup:!0},{id:"sessions_spawn",label:"sessions_spawn",description:"Spawn sub-agent",sectionId:"sessions",profiles:["coding"],includeInOpenClawGroup:!0},{id:"subagents",label:"subagents",description:"Manage sub-agents",sectionId:"sessions",profiles:["coding"],includeInOpenClawGroup:!0},{id:"session_status",label:"session_status",description:"Session status",sectionId:"sessions",profiles:["minimal","coding","messaging"],includeInOpenClawGroup:!0},{id:"browser",label:"browser",description:"Control web browser",sectionId:"ui",profiles:[],includeInOpenClawGroup:!0},{id:"canvas",label:"canvas",description:"Control canvases",sectionId:"ui",profiles:[],includeInOpenClawGroup:!0},{id:"message",label:"message",description:"Send messages",sectionId:"messaging",profiles:["messaging"],includeInOpenClawGroup:!0},{id:"cron",label:"cron",description:"Schedule tasks",sectionId:"automation",profiles:["coding"],includeInOpenClawGroup:!0},{id:"gateway",label:"gateway",description:"Gateway control",sectionId:"automation",profiles:[],includeInOpenClawGroup:!0},{id:"nodes",label:"nodes",description:"Nodes + devices",sectionId:"nodes",profiles:[],includeInOpenClawGroup:!0},{id:"agents_list",label:"agents_list",description:"List agents",sectionId:"agents",profiles:[],includeInOpenClawGroup:!0},{id:"image",label:"image",description:"Image understanding",sectionId:"media",profiles:["coding"],includeInOpenClawGroup:!0},{id:"tts",label:"tts",description:"Text-to-speech conversion",sectionId:"media",profiles:[],includeInOpenClawGroup:!0}];new Map(Jn.map(e=>[e.id,e]));function Ci(e){return Jn.filter(t=>t.profiles.includes(e)).map(t=>t.id)}const Dm={minimal:{allow:Ci("minimal")},coding:{allow:Ci("coding")},messaging:{allow:Ci("messaging")},full:{}};function Fm(){const e=new Map;for(const n of Jn){const s=`group:${n.sectionId}`,i=e.get(s)??[];i.push(n.id),e.set(s,i)}return{"group:openclaw":Jn.filter(n=>n.includeInOpenClawGroup).map(n=>n.id),...Object.fromEntries(e.entries())}}const Pm=Fm(),Nm=[{id:"minimal",label:"Minimal"},{id:"coding",label:"Coding"},{id:"messaging",label:"Messaging"},{id:"full",label:"Full"}];function Om(e){if(!e)return;const t=Dm[e];if(t&&!(!t.allow&&!t.deny))return{allow:t.allow?[...t.allow]:void 0,deny:t.deny?[...t.deny]:void 0}}function Um(){return Mm.map(e=>({id:e.id,label:e.label,tools:Jn.filter(t=>t.sectionId===e.id).map(t=>({id:t.id,label:t.label,description:t.description}))})).filter(e=>e.tools.length>0)}const Bm={bash:"exec","apply-patch":"apply_patch"},Hm={...Pm};function Ye(e){const t=e.trim().toLowerCase();return Bm[t]??t}function zm(e){return e?e.map(Ye).filter(Boolean):[]}function jm(e){const t=zm(e),n=[];for(const s of t){const i=Hm[s];if(i){n.push(...i);continue}n.push(s)}return Array.from(new Set(n))}function Km(e){return Om(e)}const Wm=Um(),qm=Nm;function no(e){return e.name?.trim()||e.identity?.name?.trim()||e.id}function ps(e){const t=e.trim();if(!t||t.length>16)return!1;let n=!1;for(let s=0;s<t.length;s+=1)if(t.charCodeAt(s)>127){n=!0;break}return!(!n||t.includes("://")||t.includes("/")||t.includes("."))}function Xs(e,t){const n=t?.emoji?.trim();if(n&&ps(n))return n;const s=e.identity?.emoji?.trim();if(s&&ps(s))return s;const i=t?.avatar?.trim();if(i&&ps(i))return i;const o=e.identity?.avatar?.trim();return o&&ps(o)?o:""}function Yc(e,t){return t&&e===t?"default":null}function Gm(e){if(e==null||!Number.isFinite(e))return"-";if(e<1024)return`${e} B`;const t=["KB","MB","GB","TB"];let n=e/1024,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s+=1;return`${n.toFixed(n<10?1:0)} ${t[s]}`}function ei(e,t){const n=e;return{entry:(n?.agents?.list??[]).find(o=>o?.id===t),defaults:n?.agents?.defaults,globalTools:n?.tools}}function $r(e,t,n,s,i){const o=ei(t,e.id),r=(n&&n.agentId===e.id?n.workspace:null)||o.entry?.workspace||o.defaults?.workspace||"default",l=o.entry?.model?Nn(o.entry?.model):Nn(o.defaults?.model),d=i?.name?.trim()||e.identity?.name?.trim()||e.name?.trim()||o.entry?.name||e.id,g=Xs(e,i)||"-",u=Array.isArray(o.entry?.skills)?o.entry?.skills:null,m=u?.length??null;return{workspace:r,model:l,identityName:d,identityEmoji:g,skillsLabel:u?`${m} selected`:"all skills",isDefault:!!(s&&e.id===s)}}function Nn(e){if(!e)return"-";if(typeof e=="string")return e.trim()||"-";if(typeof e=="object"&&e){const t=e,n=t.primary?.trim();if(n){const s=Array.isArray(t.fallbacks)?t.fallbacks.length:0;return s>0?`${n} (+${s} fallback)`:n}}return"-"}function xr(e){const t=e.match(/^(.+) \(\+\d+ fallback\)$/);return t?t[1]:e}function wr(e){if(!e)return null;if(typeof e=="string")return e.trim()||null;if(typeof e=="object"&&e){const t=e;return(typeof t.primary=="string"?t.primary:typeof t.model=="string"?t.model:typeof t.id=="string"?t.id:typeof t.value=="string"?t.value:null)?.trim()||null}return null}function Sr(e){if(!e||typeof e=="string")return null;if(typeof e=="object"&&e){const t=e,n=Array.isArray(t.fallbacks)?t.fallbacks:Array.isArray(t.fallback)?t.fallback:null;return n?n.filter(s=>typeof s=="string"):null}return null}function Jm(e,t){return Sr(e)??Sr(t)}function Bt(e,t){if(typeof t!="string")return;const n=t.trim();n&&e.add(n)}function kr(e,t){if(!t)return;if(typeof t=="string"){Bt(e,t);return}if(typeof t!="object")return;const n=t;Bt(e,n.primary),Bt(e,n.model),Bt(e,n.id),Bt(e,n.value);const s=Array.isArray(n.fallbacks)?n.fallbacks:Array.isArray(n.fallback)?n.fallback:[];for(const i of s)Bt(e,i)}function Vm(e){if(!e||typeof e!="object")return[];const t=e.agents;if(!t||typeof t!="object")return[];const n=new Set,s=t.defaults;if(s&&typeof s=="object"){const o=s;kr(n,o.model);const a=o.models;if(a&&typeof a=="object")for(const r of Object.keys(a))Bt(n,r)}const i=t.list;if(i&&typeof i=="object")for(const o of Object.values(i))!o||typeof o!="object"||kr(n,o.model);return[...n].toSorted((o,a)=>o.localeCompare(a))}function Qm(e){return e.split(",").map(t=>t.trim()).filter(Boolean)}function Ym(e){const n=e?.agents?.defaults?.models;if(!n||typeof n!="object")return[];const s=[];for(const[i,o]of Object.entries(n)){const a=i.trim();if(!a)continue;const r=o&&typeof o=="object"&&"alias"in o&&typeof o.alias=="string"?o.alias?.trim():void 0,l=r&&r!==a?`${r} (${a})`:a;s.push({value:a,label:l})}return s}function Zm(e,t){const n=Ym(e),s=t?n.some(i=>i.value===t):!1;return t&&!s&&n.unshift({value:t,label:`Current (${t})`}),n.length===0?c`
      <option value="" disabled>No configured models</option>
    `:n.map(i=>c`<option value=${i.value}>${i.label}</option>`)}function Xm(e){const t=Ye(e);if(!t)return{kind:"exact",value:""};if(t==="*")return{kind:"all"};if(!t.includes("*"))return{kind:"exact",value:t};const n=t.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&");return{kind:"regex",value:new RegExp(`^${n.replaceAll("\\*",".*")}$`)}}function so(e){return Array.isArray(e)?jm(e).map(Xm).filter(t=>t.kind!=="exact"||t.value.length>0):[]}function On(e,t){for(const n of t)if(n.kind==="all"||n.kind==="exact"&&e===n.value||n.kind==="regex"&&n.value.test(e))return!0;return!1}function ev(e,t){if(!t)return!0;const n=Ye(e),s=so(t.deny);if(On(n,s))return!1;const i=so(t.allow);return!!(i.length===0||On(n,i)||n==="apply_patch"&&On("exec",i))}function Ar(e,t){if(!Array.isArray(t)||t.length===0)return!1;const n=Ye(e),s=so(t);return!!(On(n,s)||n==="apply_patch"&&On("exec",s))}function tv(e){return Km(e)??void 0}function nv(e){const t=e.host??"unknown",n=e.ip?`(${e.ip})`:"",s=e.mode??"",i=e.version??"";return`${t} ${n} ${s} ${i}`.trim()}function sv(e){const t=e.ts??null;return t?se(t):"n/a"}function Qo(e){return e?`${new Date(e).toLocaleDateString(void 0,{weekday:"short"})}, ${At(e)} (${se(e)})`:"n/a"}function iv(e){if(e.totalTokens==null)return"n/a";const t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function ov(e){if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return String(e)}}function av(e){const t=e.state??{},n=t.nextRunAtMs?At(t.nextRunAtMs):"n/a",s=t.lastRunAtMs?At(t.lastRunAtMs):"n/a";return`${t.lastStatus??"n/a"} · next ${n} · last ${s}`}function Zc(e){const t=e.schedule;if(t.kind==="at"){const n=Date.parse(t.at);return Number.isFinite(n)?`At ${At(n)}`:`At ${t.at}`}return t.kind==="every"?`Every ${_o(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:""}`}function rv(e){const t=e.payload;if(t.kind==="systemEvent")return`System: ${t.text}`;const n=`Agent: ${t.message}`,s=e.delivery;if(s&&s.mode!=="none"){const i=s.mode==="webhook"?s.to?` (${s.to})`:"":s.channel||s.to?` (${s.channel??"last"}${s.to?` -> ${s.to}`:""})`:"";return`${n} · ${s.mode}${i}`}return n}function Xc(e,t){return c`
    <section class="card">
      <div class="card-title">Agent Context</div>
      <div class="card-sub">${t}</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div class="mono">${e.workspace}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${e.model}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Name</div>
          <div>${e.identityName}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Emoji</div>
          <div>${e.identityEmoji}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${e.skillsLabel}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Default</div>
          <div>${e.isDefault?"yes":"no"}</div>
        </div>
      </div>
    </section>
  `}function lv(e,t){const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function cv(e){if(!e)return[];const t=new Set;for(const i of e.channelOrder??[])t.add(i);for(const i of e.channelMeta??[])t.add(i.id);for(const i of Object.keys(e.channelAccounts??{}))t.add(i);const n=[],s=e.channelOrder?.length?e.channelOrder:Array.from(t);for(const i of s)t.has(i)&&(n.push(i),t.delete(i));for(const i of t)n.push(i);return n.map(i=>({id:i,label:lv(e,i),accounts:e.channelAccounts?.[i]??[]}))}const dv=["groupPolicy","streamMode","dmPolicy"];function uv(e,t){if(!e)return null;const s=(e.channels??{})[t];if(s&&typeof s=="object")return s;const i=e[t];return i&&typeof i=="object"?i:null}function gv(e){if(e==null)return"n/a";if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return"n/a"}}function pv(e,t){const n=uv(e,t);return n?dv.flatMap(s=>s in n?[{label:s,value:gv(n[s])}]:[]):[]}function fv(e){let t=0,n=0,s=0;for(const i of e){const o=i.probe&&typeof i.probe=="object"&&"ok"in i.probe?!!i.probe.ok:!1;(i.connected===!0||i.running===!0||o)&&(t+=1),i.configured&&(n+=1),i.enabled&&(s+=1)}return{total:e.length,connected:t,configured:n,enabled:s}}function hv(e){const t=cv(e.snapshot),n=e.lastSuccess?se(e.lastSuccess):"never";return c`
    <section class="grid grid-cols-2">
      ${Xc(e.context,"Workspace, identity, and model configuration.")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Channels</div>
            <div class="card-sub">Gateway-wide channel status snapshot.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="muted" style="margin-top: 8px;">
          Last refresh: ${n}
        </div>
        ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}
        ${e.snapshot?f:c`
                <div class="callout info" style="margin-top: 12px">Load channels to see live status.</div>
              `}
        ${t.length===0?c`
                <div class="muted" style="margin-top: 16px">No channels found.</div>
              `:c`
                <div class="list" style="margin-top: 16px;">
                  ${t.map(s=>{const i=fv(s.accounts),o=i.total?`${i.connected}/${i.total} connected`:"no accounts",a=i.configured?`${i.configured} configured`:"not configured",r=i.total?`${i.enabled} enabled`:"disabled",l=pv(e.configForm,s.id);return c`
                      <div class="list-item">
                        <div class="list-main">
                          <div class="list-title">${s.label}</div>
                          <div class="list-sub mono">${s.id}</div>
                        </div>
                        <div class="list-meta">
                          <div>${o}</div>
                          <div>${a}</div>
                          <div>${r}</div>
                          ${l.length>0?l.map(d=>c`<div>${d.label}: ${d.value}</div>`):f}
                        </div>
                      </div>
                    `})}
                </div>
              `}
      </section>
    </section>
  `}function mv(e){const t=e.jobs.filter(n=>n.agentId===e.agentId);return c`
    <section class="grid grid-cols-2">
      ${Xc(e.context,"Workspace and scheduling targets.")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Scheduler</div>
            <div class="card-sub">Gateway cron status.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">Enabled</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?"Yes":"No":"n/a"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">Jobs</div>
            <div class="stat-value">${e.status?.jobs??"n/a"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Next wake</div>
            <div class="stat-value">${Qo(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}
      </section>
    </section>
    <section class="card">
      <div class="card-title">Agent Cron Jobs</div>
      <div class="card-sub">Scheduled jobs targeting this agent.</div>
      ${t.length===0?c`
              <div class="muted" style="margin-top: 16px">No jobs assigned.</div>
            `:c`
              <div class="list" style="margin-top: 16px;">
                ${t.map(n=>c`
                    <div class="list-item">
                      <div class="list-main">
                        <div class="list-title">${n.name}</div>
                        ${n.description?c`<div class="list-sub">${n.description}</div>`:f}
                        <div class="chip-row" style="margin-top: 6px;">
                          <span class="chip">${Zc(n)}</span>
                          <span class="chip ${n.enabled?"chip-ok":"chip-warn"}">
                            ${n.enabled?"enabled":"disabled"}
                          </span>
                          <span class="chip">${n.sessionTarget}</span>
                        </div>
                      </div>
                      <div class="list-meta">
                        <div class="mono">${av(n)}</div>
                        <div class="muted">${rv(n)}</div>
                      </div>
                    </div>
                  `)}
              </div>
            `}
    </section>
  `}function vv(e){const t=e.agentFilesList?.agentId===e.agentId?e.agentFilesList:null,n=t?.files??[],s=e.agentFileActive??null,i=s?n.find(l=>l.name===s)??null:null,o=s?e.agentFileContents[s]??"":"",a=s?e.agentFileDrafts[s]??o:"",r=s?a!==o:!1;return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Core Files</div>
          <div class="card-sub">Bootstrap persona, identity, and tool guidance.</div>
        </div>
        <button
          class="btn btn--sm"
          ?disabled=${e.agentFilesLoading}
          @click=${()=>e.onLoadFiles(e.agentId)}
        >
          ${e.agentFilesLoading?"Loading…":"Refresh"}
        </button>
      </div>
      ${t?c`<div class="muted mono" style="margin-top: 8px;">Workspace: ${t.workspace}</div>`:f}
      ${e.agentFilesError?c`<div class="callout danger" style="margin-top: 12px;">${e.agentFilesError}</div>`:f}
      ${t?c`
              <div class="agent-files-grid" style="margin-top: 16px;">
                <div class="agent-files-list">
                  ${n.length===0?c`
                          <div class="muted">No files found.</div>
                        `:n.map(l=>bv(l,s,()=>e.onSelectFile(l.name)))}
                </div>
                <div class="agent-files-editor">
                  ${i?c`
                          <div class="agent-file-header">
                            <div>
                              <div class="agent-file-title mono">${i.name}</div>
                              <div class="agent-file-sub mono">${i.path}</div>
                            </div>
                            <div class="agent-file-actions">
                              <button
                                class="btn btn--sm"
                                ?disabled=${!r}
                                @click=${()=>e.onFileReset(i.name)}
                              >
                                Reset
                              </button>
                              <button
                                class="btn btn--sm primary"
                                ?disabled=${e.agentFileSaving||!r}
                                @click=${()=>e.onFileSave(i.name)}
                              >
                                ${e.agentFileSaving?"Saving…":"Save"}
                              </button>
                            </div>
                          </div>
                          ${i.missing?c`
                                  <div class="callout info" style="margin-top: 10px">
                                    This file is missing. Saving will create it in the agent workspace.
                                  </div>
                                `:f}
                          <label class="field" style="margin-top: 12px;">
                            <span>Content</span>
                            <textarea
                              .value=${a}
                              @input=${l=>e.onFileDraftChange(i.name,l.target.value)}
                            ></textarea>
                          </label>
                        `:c`
                          <div class="muted">Select a file to edit.</div>
                        `}
                </div>
              </div>
            `:c`
              <div class="callout info" style="margin-top: 12px">
                Load the agent workspace files to edit core instructions.
              </div>
            `}
    </section>
  `}function bv(e,t,n){const s=e.missing?"Missing":`${Gm(e.size)} · ${se(e.updatedAtMs??null)}`;return c`
    <button
      type="button"
      class="agent-file-row ${t===e.name?"active":""}"
      @click=${n}
    >
      <div>
        <div class="agent-file-name mono">${e.name}</div>
        <div class="agent-file-meta">${s}</div>
      </div>
      ${e.missing?c`
              <span class="agent-pill warn">missing</span>
            `:f}
    </button>
  `}const fs=[{id:"workspace",label:"Workspace Skills",sources:["openclaw-workspace"]},{id:"built-in",label:"Built-in Skills",sources:["openclaw-bundled"]},{id:"installed",label:"Installed Skills",sources:["openclaw-managed"]},{id:"extra",label:"Extra Skills",sources:["openclaw-extra"]}];function ed(e){const t=new Map;for(const o of fs)t.set(o.id,{id:o.id,label:o.label,skills:[]});const n=fs.find(o=>o.id==="built-in"),s={id:"other",label:"Other Skills",skills:[]};for(const o of e){const a=o.bundled?n:fs.find(r=>r.sources.includes(o.source));a?t.get(a.id)?.skills.push(o):s.skills.push(o)}const i=fs.map(o=>t.get(o.id)).filter(o=>!!(o&&o.skills.length>0));return s.skills.length>0&&i.push(s),i}function td(e){return[...e.missing.bins.map(t=>`bin:${t}`),...e.missing.env.map(t=>`env:${t}`),...e.missing.config.map(t=>`config:${t}`),...e.missing.os.map(t=>`os:${t}`)]}function nd(e){const t=[];return e.disabled&&t.push("disabled"),e.blockedByAllowlist&&t.push("blocked by allowlist"),t}function sd(e){const t=e.skill,n=!!e.showBundledBadge;return c`
    <div class="chip-row" style="margin-top: 6px;">
      <span class="chip">${t.source}</span>
      ${n?c`
              <span class="chip">bundled</span>
            `:f}
      <span class="chip ${t.eligible?"chip-ok":"chip-warn"}">
        ${t.eligible?"eligible":"blocked"}
      </span>
      ${t.disabled?c`
              <span class="chip chip-warn">disabled</span>
            `:f}
    </div>
  `}function yv(e){const t=ei(e.configForm,e.agentId),n=t.entry?.tools??{},s=t.globalTools??{},i=n.profile??s.profile??"full",o=n.profile?"agent override":s.profile?"global default":"default",a=Array.isArray(n.allow)&&n.allow.length>0,r=Array.isArray(s.allow)&&s.allow.length>0,l=!!e.configForm&&!e.configLoading&&!e.configSaving&&!a,d=a?[]:Array.isArray(n.alsoAllow)?n.alsoAllow:[],g=a?[]:Array.isArray(n.deny)?n.deny:[],u=a?{allow:n.allow??[],deny:n.deny??[]}:tv(i)??void 0,m=e.toolsCatalogResult?.groups?.length&&e.toolsCatalogResult.agentId===e.agentId?e.toolsCatalogResult.groups:Wm,h=e.toolsCatalogResult?.profiles?.length&&e.toolsCatalogResult.agentId===e.agentId?e.toolsCatalogResult.profiles:qm,b=m.flatMap(A=>A.tools.map(S=>S.id)),y=A=>{const S=ev(A,u),D=Ar(A,d),T=Ar(A,g);return{allowed:(S||D)&&!T,baseAllowed:S,denied:T}},_=b.filter(A=>y(A).allowed).length,L=(A,S)=>{const D=new Set(d.map(E=>Ye(E)).filter(E=>E.length>0)),T=new Set(g.map(E=>Ye(E)).filter(E=>E.length>0)),I=y(A).baseAllowed,v=Ye(A);S?(T.delete(v),I||D.add(v)):(D.delete(v),T.add(v)),e.onOverridesChange(e.agentId,[...D],[...T])},R=A=>{const S=new Set(d.map(T=>Ye(T)).filter(T=>T.length>0)),D=new Set(g.map(T=>Ye(T)).filter(T=>T.length>0));for(const T of b){const I=y(T).baseAllowed,v=Ye(T);A?(D.delete(v),I||S.add(v)):(S.delete(v),D.add(v))}e.onOverridesChange(e.agentId,[...S],[...D])};return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Tool Access</div>
          <div class="card-sub">
            Profile + per-tool overrides for this agent.
            <span class="mono">${_}/${b.length}</span> enabled.
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn btn--sm" ?disabled=${!l} @click=${()=>R(!0)}>
            Enable All
          </button>
          <button class="btn btn--sm" ?disabled=${!l} @click=${()=>R(!1)}>
            Disable All
          </button>
          <button class="btn btn--sm" ?disabled=${e.configLoading} @click=${e.onConfigReload}>
            Reload Config
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"Saving…":"Save"}
          </button>
        </div>
      </div>

      ${e.toolsCatalogError?c`
              <div class="callout warn" style="margin-top: 12px">
                Could not load runtime tool catalog. Showing fallback list.
              </div>
            `:f}
      ${e.configForm?f:c`
              <div class="callout info" style="margin-top: 12px">
                Load the gateway config to adjust tool profiles.
              </div>
            `}
      ${a?c`
              <div class="callout info" style="margin-top: 12px">
                This agent is using an explicit allowlist in config. Tool overrides are managed in the Config tab.
              </div>
            `:f}
      ${r?c`
              <div class="callout info" style="margin-top: 12px">
                Global tools.allow is set. Agent overrides cannot enable tools that are globally blocked.
              </div>
            `:f}

      <div class="agent-tools-meta" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Profile</div>
          <div class="mono">${i}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Source</div>
          <div>${o}</div>
        </div>
        ${e.configDirty?c`
                <div class="agent-kv">
                  <div class="label">Status</div>
                  <div class="mono">unsaved</div>
                </div>
              `:f}
      </div>

      <div class="agent-tools-presets" style="margin-top: 16px;">
        <div class="label">Quick Presets</div>
        <div class="agent-tools-buttons">
          ${h.map(A=>c`
              <button
                class="btn btn--sm ${i===A.id?"active":""}"
                ?disabled=${!l}
                @click=${()=>e.onProfileChange(e.agentId,A.id,!0)}
              >
                ${A.label}
              </button>
            `)}
          <button
            class="btn btn--sm"
            ?disabled=${!l}
            @click=${()=>e.onProfileChange(e.agentId,null,!1)}
          >
            Inherit
          </button>
        </div>
      </div>

      <div class="agent-tools-grid" style="margin-top: 20px;">
        ${m.map(A=>c`
              <div class="agent-tools-section">
                <div class="agent-tools-header">
                  ${A.label}
                  ${"source"in A&&A.source==="plugin"?c`
                          <span class="mono" style="margin-left: 6px">plugin</span>
                        `:f}
                </div>
                <div class="agent-tools-list">
                  ${A.tools.map(S=>{const{allowed:D}=y(S.id),T=S,I=T.source==="plugin"?T.pluginId?`plugin:${T.pluginId}`:"plugin":"core",v=T.optional===!0;return c`
                      <div class="agent-tool-row">
                        <div>
                          <div class="agent-tool-title mono">
                            ${S.label}
                            <span class="mono" style="margin-left: 8px; opacity: 0.8;">${I}</span>
                            ${v?c`
                                    <span class="mono" style="margin-left: 6px; opacity: 0.8">optional</span>
                                  `:f}
                          </div>
                          <div class="agent-tool-sub">${S.description}</div>
                        </div>
                        <label class="cfg-toggle">
                          <input
                            type="checkbox"
                            .checked=${D}
                            ?disabled=${!l}
                            @change=${E=>L(S.id,E.target.checked)}
                          />
                          <span class="cfg-toggle__track"></span>
                        </label>
                      </div>
                    `})}
                </div>
              </div>
            `)}
      </div>
      ${e.toolsCatalogLoading?c`
              <div class="card-sub" style="margin-top: 10px">Refreshing tool catalog…</div>
            `:f}
    </section>
  `}function $v(e){const t=!!e.configForm&&!e.configLoading&&!e.configSaving,n=ei(e.configForm,e.agentId),s=Array.isArray(n.entry?.skills)?n.entry?.skills:void 0,i=new Set((s??[]).map(h=>h.trim()).filter(Boolean)),o=s!==void 0,a=!!(e.report&&e.activeAgentId===e.agentId),r=a?e.report?.skills??[]:[],l=e.filter.trim().toLowerCase(),d=l?r.filter(h=>[h.name,h.description,h.source].join(" ").toLowerCase().includes(l)):r,g=ed(d),u=o?r.filter(h=>i.has(h.name)).length:r.length,m=r.length;return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">
            Per-agent skill allowlist and workspace skills.
            ${m>0?c`<span class="mono">${u}/${m}</span>`:f}
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn btn--sm" ?disabled=${!t} @click=${()=>e.onClear(e.agentId)}>
            Use All
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${!t}
            @click=${()=>e.onDisableAll(e.agentId)}
          >
            Disable All
          </button>
          <button class="btn btn--sm" ?disabled=${e.configLoading} @click=${e.onConfigReload}>
            Reload Config
          </button>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"Saving…":"Save"}
          </button>
        </div>
      </div>

      ${e.configForm?f:c`
              <div class="callout info" style="margin-top: 12px">
                Load the gateway config to set per-agent skills.
              </div>
            `}
      ${o?c`
              <div class="callout info" style="margin-top: 12px">This agent uses a custom skill allowlist.</div>
            `:c`
              <div class="callout info" style="margin-top: 12px">
                All skills are enabled. Disabling any skill will create a per-agent allowlist.
              </div>
            `}
      ${!a&&!e.loading?c`
              <div class="callout info" style="margin-top: 12px">
                Load skills for this agent to view workspace-specific entries.
              </div>
            `:f}
      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>Filter</span>
          <input
            .value=${e.filter}
            @input=${h=>e.onFilterChange(h.target.value)}
            placeholder="Search skills"
          />
        </label>
        <div class="muted">${d.length} shown</div>
      </div>

      ${d.length===0?c`
              <div class="muted" style="margin-top: 16px">No skills found.</div>
            `:c`
              <div class="agent-skills-groups" style="margin-top: 16px;">
                ${g.map(h=>xv(h,{agentId:e.agentId,allowSet:i,usingAllowlist:o,editable:t,onToggle:e.onToggle}))}
              </div>
            `}
    </section>
  `}function xv(e,t){const n=e.id==="workspace"||e.id==="built-in";return c`
    <details class="agent-skills-group" ?open=${!n}>
      <summary class="agent-skills-header">
        <span>${e.label}</span>
        <span class="muted">${e.skills.length}</span>
      </summary>
      <div class="list skills-grid">
        ${e.skills.map(s=>wv(s,{agentId:t.agentId,allowSet:t.allowSet,usingAllowlist:t.usingAllowlist,editable:t.editable,onToggle:t.onToggle}))}
      </div>
    </details>
  `}function wv(e,t){const n=t.usingAllowlist?t.allowSet.has(e.name):!0,s=td(e),i=nd(e);return c`
    <div class="list-item agent-skill-row">
      <div class="list-main">
        <div class="list-title">${e.emoji?`${e.emoji} `:""}${e.name}</div>
        <div class="list-sub">${e.description}</div>
        ${sd({skill:e})}
        ${s.length>0?c`<div class="muted" style="margin-top: 6px;">Missing: ${s.join(", ")}</div>`:f}
        ${i.length>0?c`<div class="muted" style="margin-top: 6px;">Reason: ${i.join(", ")}</div>`:f}
      </div>
      <div class="list-meta">
        <label class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${n}
            ?disabled=${!t.editable}
            @change=${o=>t.onToggle(t.agentId,e.name,o.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </label>
      </div>
    </div>
  `}function Sv(e){const t=e.agentsList?.agents??[],n=e.agentsList?.defaultId??null,s=e.selectedAgentId??n??t[0]?.id??null,i=s?t.find(o=>o.id===s)??null:null;return c`
    <div class="agents-layout">
      <section class="card agents-sidebar">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Agents</div>
            <div class="card-sub">${t.length} configured. 选中后点左侧 Chat 即与该角色对话。</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
        </div>
        ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}
        <div class="agent-list" style="margin-top: 12px;">
          ${t.length===0?c`
                  <div class="muted">No agents found.</div>
                `:t.map(o=>{const a=Yc(o.id,n),r=Xs(o,e.agentIdentityById[o.id]??null);return c`
                    <button
                      type="button"
                      class="agent-row ${s===o.id?"active":""}"
                      @click=${()=>e.onSelectAgent(o.id)}
                    >
                      <div class="agent-avatar">${r||no(o).slice(0,1)}</div>
                      <div class="agent-info">
                        <div class="agent-title">${no(o)}</div>
                        <div class="agent-sub mono">${o.id}</div>
                      </div>
                      ${a?c`<span class="agent-pill">${a}</span>`:f}
                    </button>
                  `})}
        </div>
      </section>
      <section class="agents-main">
        ${i?c`
                ${kv(i,n,e.agentIdentityById[i.id]??null,e.onUseAgentForChat)}
                ${Av(e.activePanel,o=>e.onSelectPanel(o))}
                ${e.activePanel==="overview"?Cv({agent:i,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[i.id]??null,agentIdentityError:e.agentIdentityError,agentIdentityLoading:e.agentIdentityLoading,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave,onModelChange:e.onModelChange,onModelFallbacksChange:e.onModelFallbacksChange}):f}
                ${e.activePanel==="files"?vv({agentId:i.id,agentFilesList:e.agentFilesList,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,onLoadFiles:e.onLoadFiles,onSelectFile:e.onSelectFile,onFileDraftChange:e.onFileDraftChange,onFileReset:e.onFileReset,onFileSave:e.onFileSave}):f}
                ${e.activePanel==="tools"?yv({agentId:i.id,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,toolsCatalogLoading:e.toolsCatalogLoading,toolsCatalogError:e.toolsCatalogError,toolsCatalogResult:e.toolsCatalogResult,onProfileChange:e.onToolsProfileChange,onOverridesChange:e.onToolsOverridesChange,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):f}
                ${e.activePanel==="skills"?$v({agentId:i.id,report:e.agentSkillsReport,loading:e.agentSkillsLoading,error:e.agentSkillsError,activeAgentId:e.agentSkillsAgentId,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,filter:e.skillsFilter,onFilterChange:e.onSkillsFilterChange,onRefresh:e.onSkillsRefresh,onToggle:e.onAgentSkillToggle,onClear:e.onAgentSkillsClear,onDisableAll:e.onAgentSkillsDisableAll,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):f}
                ${e.activePanel==="channels"?hv({context:$r(i,e.configForm,e.agentFilesList,n,e.agentIdentityById[i.id]??null),configForm:e.configForm,snapshot:e.channelsSnapshot,loading:e.channelsLoading,error:e.channelsError,lastSuccess:e.channelsLastSuccess,onRefresh:e.onChannelsRefresh}):f}
                ${e.activePanel==="cron"?mv({context:$r(i,e.configForm,e.agentFilesList,n,e.agentIdentityById[i.id]??null),agentId:i.id,jobs:e.cronJobs,status:e.cronStatus,loading:e.cronLoading,error:e.cronError,onRefresh:e.onCronRefresh}):f}
              `:c`
                <div class="card">
                  <div class="card-title">Select an agent</div>
                  <div class="card-sub">Pick an agent to inspect its workspace and tools.</div>
                </div>
              `}
      </section>
    </div>
  `}function kv(e,t,n,s){const i=Yc(e.id,t),o=no(e),a=e.identity?.theme?.trim()||"Agent workspace and routing.",r=Xs(e,n);return c`
    <section class="card agent-header">
      <div class="agent-header-main">
        <div class="agent-avatar agent-avatar--lg">${r||o.slice(0,1)}</div>
        <div>
          <div class="card-title">${o}</div>
          <div class="card-sub">${a}</div>
        </div>
      </div>
      <div class="agent-header-meta">
        <div class="mono">${e.id}</div>
        ${i?c`<span class="agent-pill">${i}</span>`:f}
        ${s?c`
              <button
                type="button"
                class="btn btn--sm btn--primary"
                @click=${()=>s(e.id)}
                title="用此角色对话"
              >
                用此角色对话
              </button>
            `:f}
      </div>
    </section>
  `}function Av(e,t){return c`
    <div class="agent-tabs">
      ${[{id:"overview",label:"Overview"},{id:"files",label:"Files"},{id:"tools",label:"Tools"},{id:"skills",label:"Skills"},{id:"channels",label:"Channels"},{id:"cron",label:"Cron Jobs"}].map(s=>c`
          <button
            class="agent-tab ${e===s.id?"active":""}"
            type="button"
            @click=${()=>t(s.id)}
          >
            ${s.label}
          </button>
        `)}
    </div>
  `}function Cv(e){const{agent:t,configForm:n,agentFilesList:s,agentIdentity:i,agentIdentityLoading:o,agentIdentityError:a,configLoading:r,configSaving:l,configDirty:d,onConfigReload:g,onConfigSave:u,onModelChange:m,onModelFallbacksChange:h}=e,b=ei(n,t.id),_=(s&&s.agentId===t.id?s.workspace:null)||b.entry?.workspace||b.defaults?.workspace||"default",L=b.entry?.model?Nn(b.entry?.model):Nn(b.defaults?.model),R=Nn(b.defaults?.model),A=wr(b.entry?.model)||(L!=="-"?xr(L):null),S=wr(b.defaults?.model)||(R!=="-"?xr(R):null),D=A??S??null,T=Jm(b.entry?.model,b.defaults?.model),I=T?T.join(", "):"",v=i?.name?.trim()||t.identity?.name?.trim()||t.name?.trim()||b.entry?.name||"-",U=Xs(t,i)||"-",M=Array.isArray(b.entry?.skills)?b.entry?.skills:null,j=M?.length??null,V=o?"Loading…":a?"Unavailable":"",J=!!(e.defaultId&&t.id===e.defaultId);return c`
    <section class="card">
      <div class="card-title">Overview</div>
      <div class="card-sub">Workspace paths and identity metadata.</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div class="mono">${_}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${L}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Name</div>
          <div>${v}</div>
          ${V?c`<div class="agent-kv-sub muted">${V}</div>`:f}
        </div>
        <div class="agent-kv">
          <div class="label">Default</div>
          <div>${J?"yes":"no"}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Emoji</div>
          <div>${U}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${M?`${j} selected`:"all skills"}</div>
        </div>
      </div>

      <div class="agent-model-select" style="margin-top: 20px;">
        <div class="label">Model Selection</div>
        <div class="row" style="gap: 12px; flex-wrap: wrap;">
          <label class="field" style="min-width: 260px; flex: 1;">
            <span>Primary model${J?" (default)":""}</span>
            <select
              .value=${D??""}
              ?disabled=${!n||r||l}
              @change=${C=>m(t.id,C.target.value||null)}
            >
              ${J?f:c`
                      <option value="">
                        ${S?`Inherit default (${S})`:"Inherit default"}
                      </option>
                    `}
              ${Zm(n,D??void 0)}
            </select>
          </label>
          <label class="field" style="min-width: 260px; flex: 1;">
            <span>Fallbacks (comma-separated)</span>
            <input
              .value=${I}
              ?disabled=${!n||r||l}
              placeholder="provider/model, provider/model"
              @input=${C=>h(t.id,Qm(C.target.value))}
            />
          </label>
        </div>
        <div class="row" style="justify-content: flex-end; gap: 8px;">
          <button class="btn btn--sm" ?disabled=${r} @click=${g}>
            Reload Config
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${l||!d}
            @click=${u}
          >
            ${l?"Saving…":"Save"}
          </button>
        </div>
      </div>
    </section>
  `}const Tv=new Set(["title","description","default","nullable","tags","x-tags"]);function _v(e){return Object.keys(e??{}).filter(n=>!Tv.has(n)).length===0}function Ev(e){if(e===void 0)return"";try{return JSON.stringify(e,null,2)??""}catch{return""}}const Vn={chevronDown:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,plus:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,minus:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,trash:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  `,edit:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `};function yn(e){return!!(e&&(e.text.length>0||e.tags.length>0))}function id(e){const t=[],n=new Set;return{text:e.trim().replace(/(^|\s)tag:([^\s]+)/gi,(o,a,r)=>{const l=r.trim().toLowerCase();return l&&!n.has(l)&&(n.add(l),t.push(l)),a}).trim().toLowerCase(),tags:t}}function Cr(e){if(!Array.isArray(e))return[];const t=new Set,n=[];for(const s of e){if(typeof s!="string")continue;const i=s.trim();if(!i)continue;const o=i.toLowerCase();t.has(o)||(t.add(o),n.push(i))}return n}function Xt(e,t,n){const s=$t(e,n),i=s?.label??t.title??js(String(e.at(-1))),o=s?.help??t.description,a=Cr(t["x-tags"]??t.tags),r=Cr(s?.tags);return{label:i,help:o,tags:r.length>0?r:a}}function Rv(e,t){if(!e)return!0;for(const n of t)if(n&&n.toLowerCase().includes(e))return!0;return!1}function Iv(e,t){if(e.length===0)return!0;const n=new Set(t.map(s=>s.toLowerCase()));return e.every(s=>n.has(s))}function Yo(e){const{schema:t,path:n,hints:s,criteria:i}=e;if(!yn(i))return!0;const{label:o,help:a,tags:r}=Xt(n,t,s);if(!Iv(i.tags,r))return!1;if(!i.text)return!0;const l=n.filter(g=>typeof g=="string").join("."),d=t.enum&&t.enum.length>0?t.enum.map(g=>String(g)).join(" "):"";return Rv(i.text,[o,a,t.title,t.description,l,d])}function hn(e){const{schema:t,value:n,path:s,hints:i,criteria:o}=e;if(!yn(o)||Yo({schema:t,path:s,hints:i,criteria:o}))return!0;const a=Re(t);if(a==="object"){const r=n??t.default,l=r&&typeof r=="object"&&!Array.isArray(r)?r:{},d=t.properties??{};for(const[u,m]of Object.entries(d))if(hn({schema:m,value:l[u],path:[...s,u],hints:i,criteria:o}))return!0;const g=t.additionalProperties;if(g&&typeof g=="object"){const u=new Set(Object.keys(d));for(const[m,h]of Object.entries(l))if(!u.has(m)&&hn({schema:g,value:h,path:[...s,m],hints:i,criteria:o}))return!0}return!1}if(a==="array"){const r=Array.isArray(t.items)?t.items[0]:t.items;if(!r)return!1;const l=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];if(l.length===0)return!1;for(let d=0;d<l.length;d+=1)if(hn({schema:r,value:l[d],path:[...s,d],hints:i,criteria:o}))return!0}return!1}function wt(e){return e.length===0?f:c`
    <div class="cfg-tags">
      ${e.map(t=>c`<span class="cfg-tag">${t}</span>`)}
    </div>
  `}function Ct(e){const{schema:t,value:n,path:s,hints:i,unsupported:o,disabled:a,onPatch:r}=e,l=e.showLabel??!0,d=Re(t),{label:g,help:u,tags:m}=Xt(s,t,i),h=ko(s),b=e.searchCriteria;if(o.has(h))return c`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${g}</div>
      <div class="cfg-field__error">Unsupported schema node. Use Raw mode.</div>
    </div>`;if(b&&yn(b)&&!hn({schema:t,value:n,path:s,hints:i,criteria:b}))return f;if(t.anyOf||t.oneOf){const _=(t.anyOf??t.oneOf??[]).filter(T=>!(T.type==="null"||Array.isArray(T.type)&&T.type.includes("null")));if(_.length===1)return Ct({...e,schema:_[0]});const L=T=>{if(T.const!==void 0)return T.const;if(T.enum&&T.enum.length===1)return T.enum[0]},R=_.map(L),A=R.every(T=>T!==void 0);if(A&&R.length>0&&R.length<=5){const T=n??t.default;return c`
        <div class="cfg-field">
          ${l?c`<label class="cfg-field__label">${g}</label>`:f}
          ${u?c`<div class="cfg-field__help">${u}</div>`:f}
          ${wt(m)}
          <div class="cfg-segmented">
            ${R.map(I=>c`
              <button
                type="button"
                class="cfg-segmented__btn ${I===T||String(I)===String(T)?"active":""}"
                ?disabled=${a}
                @click=${()=>r(s,I)}
              >
                ${String(I)}
              </button>
            `)}
          </div>
        </div>
      `}if(A&&R.length>5)return _r({...e,options:R,value:n??t.default});const S=new Set(_.map(T=>Re(T)).filter(Boolean)),D=new Set([...S].map(T=>T==="integer"?"number":T));if([...D].every(T=>["string","number","boolean"].includes(T))){const T=D.has("string"),I=D.has("number");if(D.has("boolean")&&D.size===1)return Ct({...e,schema:{...t,type:"boolean",anyOf:void 0,oneOf:void 0}});if(T||I)return Tr({...e,inputType:I&&!T?"number":"text"})}}if(t.enum){const y=t.enum;if(y.length<=5){const _=n??t.default;return c`
        <div class="cfg-field">
          ${l?c`<label class="cfg-field__label">${g}</label>`:f}
          ${u?c`<div class="cfg-field__help">${u}</div>`:f}
          ${wt(m)}
          <div class="cfg-segmented">
            ${y.map(L=>c`
              <button
                type="button"
                class="cfg-segmented__btn ${L===_||String(L)===String(_)?"active":""}"
                ?disabled=${a}
                @click=${()=>r(s,L)}
              >
                ${String(L)}
              </button>
            `)}
          </div>
        </div>
      `}return _r({...e,options:y,value:n??t.default})}if(d==="object")return Mv(e);if(d==="array")return Dv(e);if(d==="boolean"){const y=typeof n=="boolean"?n:typeof t.default=="boolean"?t.default:!1;return c`
      <label class="cfg-toggle-row ${a?"disabled":""}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${g}</span>
          ${u?c`<span class="cfg-toggle-row__help">${u}</span>`:f}
          ${wt(m)}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${y}
            ?disabled=${a}
            @change=${_=>r(s,_.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return d==="number"||d==="integer"?Lv(e):d==="string"?Tr({...e,inputType:"text"}):c`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${g}</div>
      <div class="cfg-field__error">Unsupported type: ${d}. Use Raw mode.</div>
    </div>
  `}function Tr(e){const{schema:t,value:n,path:s,hints:i,disabled:o,onPatch:a,inputType:r}=e,l=e.showLabel??!0,d=$t(s,i),{label:g,help:u,tags:m}=Xt(s,t,i),h=(d?.sensitive??!1)&&!/^\$\{[^}]*\}$/.test(String(n??"").trim()),b=d?.placeholder??(h?"••••":t.default!==void 0?`Default: ${String(t.default)}`:""),y=n??"";return c`
    <div class="cfg-field">
      ${l?c`<label class="cfg-field__label">${g}</label>`:f}
      ${u?c`<div class="cfg-field__help">${u}</div>`:f}
      ${wt(m)}
      <div class="cfg-input-wrap">
        <input
          type=${h?"password":r}
          class="cfg-input"
          placeholder=${b}
          .value=${y==null?"":String(y)}
          ?disabled=${o}
          @input=${_=>{const L=_.target.value;if(r==="number"){if(L.trim()===""){a(s,void 0);return}const R=Number(L);a(s,Number.isNaN(R)?L:R);return}a(s,L)}}
          @change=${_=>{if(r==="number")return;const L=_.target.value;a(s,L.trim())}}
        />
        ${t.default!==void 0?c`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${o}
            @click=${()=>a(s,t.default)}
          >↺</button>
        `:f}
      </div>
    </div>
  `}function Lv(e){const{schema:t,value:n,path:s,hints:i,disabled:o,onPatch:a}=e,r=e.showLabel??!0,{label:l,help:d,tags:g}=Xt(s,t,i),u=n??t.default??"",m=typeof u=="number"?u:0;return c`
    <div class="cfg-field">
      ${r?c`<label class="cfg-field__label">${l}</label>`:f}
      ${d?c`<div class="cfg-field__help">${d}</div>`:f}
      ${wt(g)}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${o}
          @click=${()=>a(s,m-1)}
        >−</button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${u==null?"":String(u)}
          ?disabled=${o}
          @input=${h=>{const b=h.target.value,y=b===""?void 0:Number(b);a(s,y)}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${o}
          @click=${()=>a(s,m+1)}
        >+</button>
      </div>
    </div>
  `}function _r(e){const{schema:t,value:n,path:s,hints:i,disabled:o,options:a,onPatch:r}=e,l=e.showLabel??!0,{label:d,help:g,tags:u}=Xt(s,t,i),m=n??t.default,h=a.findIndex(y=>y===m||String(y)===String(m)),b="__unset__";return c`
    <div class="cfg-field">
      ${l?c`<label class="cfg-field__label">${d}</label>`:f}
      ${g?c`<div class="cfg-field__help">${g}</div>`:f}
      ${wt(u)}
      <select
        class="cfg-select"
        ?disabled=${o}
        .value=${h>=0?String(h):b}
        @change=${y=>{const _=y.target.value;r(s,_===b?void 0:a[Number(_)])}}
      >
        <option value=${b}>Select...</option>
        ${a.map((y,_)=>c`
          <option value=${String(_)}>${String(y)}</option>
        `)}
      </select>
    </div>
  `}function Mv(e){const{schema:t,value:n,path:s,hints:i,unsupported:o,disabled:a,onPatch:r,searchCriteria:l}=e,d=e.showLabel??!0,{label:g,help:u,tags:m}=Xt(s,t,i),b=(l&&yn(l)?Yo({schema:t,path:s,hints:i,criteria:l}):!1)?void 0:l,y=n??t.default,_=y&&typeof y=="object"&&!Array.isArray(y)?y:{},L=t.properties??{},A=Object.entries(L).toSorted((v,E)=>{const U=$t([...s,v[0]],i)?.order??0,M=$t([...s,E[0]],i)?.order??0;return U!==M?U-M:v[0].localeCompare(E[0])}),S=new Set(Object.keys(L)),D=t.additionalProperties,T=!!D&&typeof D=="object",I=c`
    ${A.map(([v,E])=>Ct({schema:E,value:_[v],path:[...s,v],hints:i,unsupported:o,disabled:a,searchCriteria:b,onPatch:r}))}
    ${T?Fv({schema:D,value:_,path:s,hints:i,unsupported:o,disabled:a,reservedKeys:S,searchCriteria:b,onPatch:r}):f}
  `;return s.length===1?c`
      <div class="cfg-fields">
        ${I}
      </div>
    `:d?c`
    <details class="cfg-object" ?open=${s.length<=2}>
      <summary class="cfg-object__header">
        <span class="cfg-object__title-wrap">
          <span class="cfg-object__title">${g}</span>
          ${wt(m)}
        </span>
        <span class="cfg-object__chevron">${Vn.chevronDown}</span>
      </summary>
      ${u?c`<div class="cfg-object__help">${u}</div>`:f}
      <div class="cfg-object__content">
        ${I}
      </div>
    </details>
  `:c`
      <div class="cfg-fields cfg-fields--inline">
        ${I}
      </div>
    `}function Dv(e){const{schema:t,value:n,path:s,hints:i,unsupported:o,disabled:a,onPatch:r,searchCriteria:l}=e,d=e.showLabel??!0,{label:g,help:u,tags:m}=Xt(s,t,i),b=(l&&yn(l)?Yo({schema:t,path:s,hints:i,criteria:l}):!1)?void 0:l,y=Array.isArray(t.items)?t.items[0]:t.items;if(!y)return c`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${g}</div>
        <div class="cfg-field__error">Unsupported array schema. Use Raw mode.</div>
      </div>
    `;const _=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return c`
    <div class="cfg-array">
      <div class="cfg-array__header">
        <div class="cfg-array__title">
          ${d?c`<span class="cfg-array__label">${g}</span>`:f}
          ${wt(m)}
        </div>
        <span class="cfg-array__count">${_.length} item${_.length!==1?"s":""}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${a}
          @click=${()=>{const L=[..._,Cl(y)];r(s,L)}}
        >
          <span class="cfg-array__add-icon">${Vn.plus}</span>
          Add
        </button>
      </div>
      ${u?c`<div class="cfg-array__help">${u}</div>`:f}

      ${_.length===0?c`
              <div class="cfg-array__empty">No items yet. Click "Add" to create one.</div>
            `:c`
        <div class="cfg-array__items">
          ${_.map((L,R)=>c`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${R+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${a}
                  @click=${()=>{const A=[..._];A.splice(R,1),r(s,A)}}
                >
                  ${Vn.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${Ct({schema:y,value:L,path:[...s,R],hints:i,unsupported:o,disabled:a,searchCriteria:b,showLabel:!1,onPatch:r})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function Fv(e){const{schema:t,value:n,path:s,hints:i,unsupported:o,disabled:a,reservedKeys:r,onPatch:l,searchCriteria:d}=e,g=_v(t),u=Object.entries(n??{}).filter(([h])=>!r.has(h)),m=d&&yn(d)?u.filter(([h,b])=>hn({schema:t,value:b,path:[...s,h],hints:i,criteria:d})):u;return c`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${a}
          @click=${()=>{const h={...n};let b=1,y=`custom-${b}`;for(;y in h;)b+=1,y=`custom-${b}`;h[y]=g?{}:Cl(t),l(s,h)}}
        >
          <span class="cfg-map__add-icon">${Vn.plus}</span>
          Add Entry
        </button>
      </div>

      ${m.length===0?c`
              <div class="cfg-map__empty">No custom entries.</div>
            `:c`
        <div class="cfg-map__items">
          ${m.map(([h,b])=>{const y=[...s,h],_=Ev(b);return c`
              <div class="cfg-map__item">
                <div class="cfg-map__item-header">
                  <div class="cfg-map__item-key">
                    <input
                      type="text"
                      class="cfg-input cfg-input--sm"
                      placeholder="Key"
                      .value=${h}
                      ?disabled=${a}
                      @change=${L=>{const R=L.target.value.trim();if(!R||R===h)return;const A={...n};R in A||(A[R]=A[h],delete A[h],l(s,A))}}
                    />
                  </div>
                  <button
                    type="button"
                    class="cfg-map__item-remove"
                    title="Remove entry"
                    ?disabled=${a}
                    @click=${()=>{const L={...n};delete L[h],l(s,L)}}
                  >
                    ${Vn.trash}
                  </button>
                </div>
                <div class="cfg-map__item-value">
                  ${g?c`
                        <textarea
                          class="cfg-textarea cfg-textarea--sm"
                          placeholder="JSON value"
                          rows="2"
                          .value=${_}
                          ?disabled=${a}
                          @change=${L=>{const R=L.target,A=R.value.trim();if(!A){l(y,void 0);return}try{l(y,JSON.parse(A))}catch{R.value=_}}}
                        ></textarea>
                      `:Ct({schema:t,value:b,path:y,hints:i,unsupported:o,disabled:a,searchCriteria:d,showLabel:!1,onPatch:l})}
                </div>
              </div>
            `})}
        </div>
      `}
    </div>
  `}const Er={env:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},Zo={env:{label:"Environment Variables",description:"Environment variables passed to the gateway process"},update:{label:"Updates",description:"Auto-update settings and release channel"},agents:{label:"Agents",description:"Agent configurations, models, and identities"},auth:{label:"Authentication",description:"API keys and authentication profiles"},channels:{label:"Channels",description:"Messaging channels (Telegram, Discord, Slack, etc.)"},messages:{label:"Messages",description:"Message handling and routing settings"},commands:{label:"Commands",description:"Custom slash commands"},hooks:{label:"Hooks",description:"Webhooks and event hooks"},skills:{label:"Skills",description:"Skill packs and capabilities"},tools:{label:"Tools",description:"Tool configurations (browser, search, etc.)"},gateway:{label:"Gateway",description:"Gateway server settings (port, auth, binding)"},wizard:{label:"Setup Wizard",description:"Setup wizard state and history"},meta:{label:"Metadata",description:"Gateway metadata and version information"},logging:{label:"Logging",description:"Log levels and output configuration"},browser:{label:"Browser",description:"Browser automation settings"},ui:{label:"UI",description:"User interface preferences"},models:{label:"Models",description:"AI model configurations and providers"},bindings:{label:"Bindings",description:"Key bindings and shortcuts"},broadcast:{label:"Broadcast",description:"Broadcast and notification settings"},audio:{label:"Audio",description:"Audio input/output settings"},session:{label:"Session",description:"Session management and persistence"},cron:{label:"Cron",description:"Scheduled tasks and automation"},web:{label:"Web",description:"Web server and API settings"},discovery:{label:"Discovery",description:"Service discovery and networking"},canvasHost:{label:"Canvas Host",description:"Canvas rendering and display"},talk:{label:"Talk",description:"Voice and speech settings"},plugins:{label:"Plugins",description:"Plugin management and extensions"}};function Rr(e){return Er[e]??Er.default}function Pv(e){if(!e.query)return!0;const t=id(e.query),n=t.text,s=Zo[e.key];return n&&e.key.toLowerCase().includes(n)||n&&s&&(s.label.toLowerCase().includes(n)||s.description.toLowerCase().includes(n))?!0:hn({schema:e.schema,value:e.sectionValue,path:[e.key],hints:e.uiHints,criteria:t})}function Nv(e){if(!e.schema)return c`
      <div class="muted">Schema unavailable.</div>
    `;const t=e.schema,n=e.value??{};if(Re(t)!=="object"||!t.properties)return c`
      <div class="callout danger">Unsupported schema. Use Raw.</div>
    `;const s=new Set(e.unsupportedPaths??[]),i=t.properties,o=e.searchQuery??"",a=id(o),r=e.activeSection,l=e.activeSubsection??null,g=Object.entries(i).toSorted((m,h)=>{const b=$t([m[0]],e.uiHints)?.order??50,y=$t([h[0]],e.uiHints)?.order??50;return b!==y?b-y:m[0].localeCompare(h[0])}).filter(([m,h])=>!(r&&m!==r||o&&!Pv({key:m,schema:h,sectionValue:n[m],uiHints:e.uiHints,query:o})));let u=null;if(r&&l&&g.length===1){const m=g[0]?.[1];m&&Re(m)==="object"&&m.properties&&m.properties[l]&&(u={sectionKey:r,subsectionKey:l,schema:m.properties[l]})}return g.length===0?c`
      <div class="config-empty">
        <div class="config-empty__icon">${he.search}</div>
        <div class="config-empty__text">
          ${o?`No settings match "${o}"`:"No settings in this section"}
        </div>
      </div>
    `:c`
    <div class="config-form config-form--modern">
      ${u?(()=>{const{sectionKey:m,subsectionKey:h,schema:b}=u,y=$t([m,h],e.uiHints),_=y?.label??b.title??js(h),L=y?.help??b.description??"",R=n[m],A=R&&typeof R=="object"?R[h]:void 0,S=`config-section-${m}-${h}`;return c`
              <section class="config-section-card" id=${S}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${Rr(m)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${_}</h3>
                    ${L?c`<p class="config-section-card__desc">${L}</p>`:f}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${Ct({schema:b,value:A,path:[m,h],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,searchCriteria:a,onPatch:e.onPatch})}
                </div>
              </section>
            `})():g.map(([m,h])=>{const b=Zo[m]??{label:m.charAt(0).toUpperCase()+m.slice(1),description:h.description??""};return c`
              <section class="config-section-card" id="config-section-${m}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${Rr(m)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${b.label}</h3>
                    ${b.description?c`<p class="config-section-card__desc">${b.description}</p>`:f}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${Ct({schema:h,value:n[m],path:[m],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,searchCriteria:a,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}const Ov=new Set(["title","description","default","nullable"]);function Uv(e){return Object.keys(e??{}).filter(n=>!Ov.has(n)).length===0}function od(e){const t=e.filter(i=>i!=null),n=t.length!==e.length,s=[];for(const i of t)s.some(o=>Object.is(o,i))||s.push(i);return{enumValues:s,nullable:n}}function ad(e){return!e||typeof e!="object"?{schema:null,unsupportedPaths:["<root>"]}:Un(e,[])}function Un(e,t){const n=new Set,s={...e},i=ko(t)||"<root>";if(e.anyOf||e.oneOf||e.allOf){const r=Bv(e,t);return r||{schema:e,unsupportedPaths:[i]}}const o=Array.isArray(e.type)&&e.type.includes("null"),a=Re(e)??(e.properties||e.additionalProperties?"object":void 0);if(s.type=a??e.type,s.nullable=o||e.nullable,s.enum){const{enumValues:r,nullable:l}=od(s.enum);s.enum=r,l&&(s.nullable=!0),r.length===0&&n.add(i)}if(a==="object"){const r=e.properties??{},l={};for(const[d,g]of Object.entries(r)){const u=Un(g,[...t,d]);u.schema&&(l[d]=u.schema);for(const m of u.unsupportedPaths)n.add(m)}if(s.properties=l,e.additionalProperties===!0)n.add(i);else if(e.additionalProperties===!1)s.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties=="object"&&!Uv(e.additionalProperties)){const d=Un(e.additionalProperties,[...t,"*"]);s.additionalProperties=d.schema??e.additionalProperties,d.unsupportedPaths.length>0&&n.add(i)}}else if(a==="array"){const r=Array.isArray(e.items)?e.items[0]:e.items;if(!r)n.add(i);else{const l=Un(r,[...t,"*"]);s.items=l.schema??r,l.unsupportedPaths.length>0&&n.add(i)}}else a!=="string"&&a!=="number"&&a!=="integer"&&a!=="boolean"&&!s.enum&&n.add(i);return{schema:s,unsupportedPaths:Array.from(n)}}function Bv(e,t){if(e.allOf)return null;const n=e.anyOf??e.oneOf;if(!n)return null;const s=[],i=[];let o=!1;for(const r of n){if(!r||typeof r!="object")return null;if(Array.isArray(r.enum)){const{enumValues:l,nullable:d}=od(r.enum);s.push(...l),d&&(o=!0);continue}if("const"in r){if(r.const==null){o=!0;continue}s.push(r.const);continue}if(Re(r)==="null"){o=!0;continue}i.push(r)}if(s.length>0&&i.length===0){const r=[];for(const l of s)r.some(d=>Object.is(d,l))||r.push(l);return{schema:{...e,enum:r,nullable:o,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(i.length===1){const r=Un(i[0],t);return r.schema&&(r.schema.nullable=o||r.schema.nullable),r}const a=new Set(["string","number","integer","boolean"]);return i.length>0&&s.length===0&&i.every(r=>r.type&&a.has(String(r.type)))?{schema:{...e,nullable:o},unsupportedPaths:[]}:null}function Hv(e,t){let n=e;for(const s of t){if(!n)return null;const i=Re(n);if(i==="object"){const o=n.properties??{};if(typeof s=="string"&&o[s]){n=o[s];continue}const a=n.additionalProperties;if(typeof s=="string"&&a&&typeof a=="object"){n=a;continue}return null}if(i==="array"){if(typeof s!="number")return null;n=(Array.isArray(n.items)?n.items[0]:n.items)??null;continue}return null}return n}function zv(e,t){const s=(e.channels??{})[t],i=e[t];return(s&&typeof s=="object"?s:null)??(i&&typeof i=="object"?i:null)??{}}const jv=["groupPolicy","streamMode","dmPolicy"];function Kv(e){if(e==null)return"n/a";if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return"n/a"}}function Wv(e){const t=jv.flatMap(n=>n in e?[[n,e[n]]]:[]);return t.length===0?null:c`
    <div class="status-list" style="margin-top: 12px;">
      ${t.map(([n,s])=>c`
          <div>
            <span class="label">${n}</span>
            <span>${Kv(s)}</span>
          </div>
        `)}
    </div>
  `}function qv(e){const t=ad(e.schema),n=t.schema;if(!n)return c`
      <div class="callout danger">Schema unavailable. Use Raw.</div>
    `;const s=Hv(n,["channels",e.channelId]);if(!s)return c`
      <div class="callout danger">Channel config schema unavailable.</div>
    `;const i=e.configValue??{},o=zv(i,e.channelId);return c`
    <div class="config-form">
      ${Ct({schema:s,value:o,path:["channels",e.channelId],hints:e.uiHints,unsupported:new Set(t.unsupportedPaths),disabled:e.disabled,showLabel:!1,onPatch:e.onPatch})}
    </div>
    ${Wv(o)}
  `}function ct(e){const{channelId:t,props:n}=e,s=n.configSaving||n.configSchemaLoading;return c`
    <div style="margin-top: 16px;">
      ${n.configSchemaLoading?c`
              <div class="muted">Loading config schema…</div>
            `:qv({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,disabled:s,onPatch:n.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${s||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?"Saving…":"Save"}
        </button>
        <button
          class="btn"
          ?disabled=${s}
          @click=${()=>n.onConfigReload()}
        >
          Reload
        </button>
      </div>
    </div>
  `}function Gv(e){const{props:t,discord:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">Discord</div>
      <div class="card-sub">Bot status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?se(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?se(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:f}

      ${ct({channelId:"discord",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function Jv(e){const{props:t,googleChat:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">Google Chat</div>
      <div class="card-sub">Chat API webhook status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?n.configured?"Yes":"No":"n/a"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?n.running?"Yes":"No":"n/a"}</span>
        </div>
        <div>
          <span class="label">Credential</span>
          <span>${n?.credentialSource??"n/a"}</span>
        </div>
        <div>
          <span class="label">Audience</span>
          <span>
            ${n?.audienceType?`${n.audienceType}${n.audience?` · ${n.audience}`:""}`:"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?se(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?se(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:f}

      ${ct({channelId:"googlechat",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function Vv(e){const{props:t,imessage:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">iMessage</div>
      <div class="card-sub">macOS bridge status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?se(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?se(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.error??""}
          </div>`:f}

      ${ct({channelId:"imessage",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function Ir(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:"n/a"}function Qv(e){const{props:t,nostr:n,nostrAccounts:s,accountCountLabel:i,profileFormState:o,profileFormCallbacks:a,onEditProfile:r}=e,l=s[0],d=n?.configured??l?.configured??!1,g=n?.running??l?.running??!1,u=n?.publicKey??l?.publicKey,m=n?.lastStartAt??l?.lastStartAt??null,h=n?.lastError??l?.lastError??null,b=s.length>1,y=o!=null,_=R=>{const A=R.publicKey,S=R.profile,D=S?.displayName??S?.name??R.name??R.accountId;return c`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${D}</div>
          <div class="account-card-id">${R.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">Running</span>
            <span>${R.running?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Configured</span>
            <span>${R.configured?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Public Key</span>
            <span class="monospace" title="${A??""}">${Ir(A)}</span>
          </div>
          <div>
            <span class="label">Last inbound</span>
            <span>${R.lastInboundAt?se(R.lastInboundAt):"n/a"}</span>
          </div>
          ${R.lastError?c`
                <div class="account-card-error">${R.lastError}</div>
              `:f}
        </div>
      </div>
    `},L=()=>{if(y&&a)return Nu({state:o,callbacks:a,accountId:s[0]?.accountId??"default"});const R=l?.profile??n?.profile,{name:A,displayName:S,about:D,picture:T,nip05:I}=R??{},v=A||S||D||T||I;return c`
      <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 500;">Profile</div>
          ${d?c`
                <button
                  class="btn btn-sm"
                  @click=${r}
                  style="font-size: 12px; padding: 4px 8px;"
                >
                  Edit Profile
                </button>
              `:f}
        </div>
        ${v?c`
              <div class="status-list">
                ${T?c`
                      <div style="margin-bottom: 8px;">
                        <img
                          src=${T}
                          alt="Profile picture"
                          style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
                          @error=${E=>{E.target.style.display="none"}}
                        />
                      </div>
                    `:f}
                ${A?c`<div><span class="label">Name</span><span>${A}</span></div>`:f}
                ${S?c`<div><span class="label">Display Name</span><span>${S}</span></div>`:f}
                ${D?c`<div><span class="label">About</span><span style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;">${D}</span></div>`:f}
                ${I?c`<div><span class="label">NIP-05</span><span>${I}</span></div>`:f}
              </div>
            `:c`
                <div style="color: var(--text-muted); font-size: 13px">
                  No profile set. Click "Edit Profile" to add your name, bio, and avatar.
                </div>
              `}
      </div>
    `};return c`
    <div class="card">
      <div class="card-title">Nostr</div>
      <div class="card-sub">Decentralized DMs via Nostr relays (NIP-04).</div>
      ${i}

      ${b?c`
            <div class="account-card-list">
              ${s.map(R=>_(R))}
            </div>
          `:c`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${d?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${g?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Public Key</span>
                <span class="monospace" title="${u??""}"
                  >${Ir(u)}</span
                >
              </div>
              <div>
                <span class="label">Last start</span>
                <span>${m?se(m):"n/a"}</span>
              </div>
            </div>
          `}

      ${h?c`<div class="callout danger" style="margin-top: 12px;">${h}</div>`:f}

      ${L()}

      ${ct({channelId:"nostr",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!1)}>Refresh</button>
      </div>
    </div>
  `}function Yv(e,t){const n=t.snapshot,s=n?.channels;if(!n||!s)return!1;const i=s[e],o=typeof i?.configured=="boolean"&&i.configured,a=typeof i?.running=="boolean"&&i.running,r=typeof i?.connected=="boolean"&&i.connected,d=(n.channelAccounts?.[e]??[]).some(g=>g.configured||g.running||g.connected);return o||a||r||d}function Zv(e,t){return t?.[e]?.length??0}function rd(e,t){const n=Zv(e,t);return n<2?f:c`<div class="account-count">Accounts (${n})</div>`}function Xv(e){const{props:t,signal:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">Signal</div>
      <div class="card-sub">signal-cli status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Base URL</span>
          <span>${n?.baseUrl??"n/a"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?se(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?se(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:f}

      ${ct({channelId:"signal",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function eb(e){const{props:t,slack:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">Slack</div>
      <div class="card-sub">Socket mode status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?se(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?se(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:f}

      ${ct({channelId:"slack",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function tb(e){const{props:t,telegram:n,telegramAccounts:s,accountCountLabel:i}=e,o=s.length>1,a=r=>{const d=r.probe?.bot?.username,g=r.name||r.accountId;return c`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">
            ${d?`@${d}`:g}
          </div>
          <div class="account-card-id">${r.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">Running</span>
            <span>${r.running?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Configured</span>
            <span>${r.configured?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Last inbound</span>
            <span>${r.lastInboundAt?se(r.lastInboundAt):"n/a"}</span>
          </div>
          ${r.lastError?c`
                <div class="account-card-error">
                  ${r.lastError}
                </div>
              `:f}
        </div>
      </div>
    `};return c`
    <div class="card">
      <div class="card-title">Telegram</div>
      <div class="card-sub">Bot status and channel configuration.</div>
      ${i}

      ${o?c`
            <div class="account-card-list">
              ${s.map(r=>a(r))}
            </div>
          `:c`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${n?.configured?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${n?.running?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Mode</span>
                <span>${n?.mode??"n/a"}</span>
              </div>
              <div>
                <span class="label">Last start</span>
                <span>${n?.lastStartAt?se(n.lastStartAt):"n/a"}</span>
              </div>
              <div>
                <span class="label">Last probe</span>
                <span>${n?.lastProbeAt?se(n.lastProbeAt):"n/a"}</span>
              </div>
            </div>
          `}

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:f}

      ${ct({channelId:"telegram",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function nb(e){const{props:t,whatsapp:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">WhatsApp</div>
      <div class="card-sub">Link WhatsApp Web and monitor connection health.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Linked</span>
          <span>${n?.linked?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Connected</span>
          <span>${n?.connected?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last connect</span>
          <span>
            ${n?.lastConnectedAt?se(n.lastConnectedAt):"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Last message</span>
          <span>
            ${n?.lastMessageAt?se(n.lastMessageAt):"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Auth age</span>
          <span>
            ${n?.authAgeMs!=null?_o(n.authAgeMs):"n/a"}
          </span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${t.whatsappMessage?c`<div class="callout" style="margin-top: 12px;">
            ${t.whatsappMessage}
          </div>`:f}

      ${t.whatsappQrDataUrl?c`<div class="qr-wrap">
            <img src=${t.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`:f}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!1)}
        >
          ${t.whatsappBusy?"Working…":"Show QR"}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!0)}
        >
          Relink
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppWait()}
        >
          Wait for scan
        </button>
        <button
          class="btn danger"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppLogout()}
        >
          Logout
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Refresh
        </button>
      </div>

      ${ct({channelId:"whatsapp",props:t})}
    </div>
  `}function sb(e){const t=e.snapshot?.channels,n=t?.whatsapp??void 0,s=t?.telegram??void 0,i=t?.discord??null,o=t?.googlechat??null,a=t?.slack??null,r=t?.signal??null,l=t?.imessage??null,d=t?.nostr??null,u=ib(e.snapshot).map((m,h)=>({key:m,enabled:Yv(m,e),order:h})).toSorted((m,h)=>m.enabled!==h.enabled?m.enabled?-1:1:m.order-h.order);return c`
    <section class="grid grid-cols-2">
      ${u.map(m=>ob(m.key,e,{whatsapp:n,telegram:s,discord:i,googlechat:o,slack:a,signal:r,imessage:l,nostr:d,channelAccounts:e.snapshot?.channelAccounts??null}))}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Channel health</div>
          <div class="card-sub">Channel status snapshots from the gateway.</div>
        </div>
        <div class="muted">${e.lastSuccessAt?se(e.lastSuccessAt):"n/a"}</div>
      </div>
      ${e.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:f}
      <pre class="code-block" style="margin-top: 12px;">
${e.snapshot?JSON.stringify(e.snapshot,null,2):"No snapshot yet."}
      </pre>
    </section>
  `}function ib(e){return e?.channelMeta?.length?e.channelMeta.map(t=>t.id):e?.channelOrder?.length?e.channelOrder:["whatsapp","telegram","discord","googlechat","slack","signal","imessage","nostr"]}function ob(e,t,n){const s=rd(e,n.channelAccounts);switch(e){case"whatsapp":return nb({props:t,whatsapp:n.whatsapp,accountCountLabel:s});case"telegram":return tb({props:t,telegram:n.telegram,telegramAccounts:n.channelAccounts?.telegram??[],accountCountLabel:s});case"discord":return Gv({props:t,discord:n.discord,accountCountLabel:s});case"googlechat":return Jv({props:t,googleChat:n.googlechat,accountCountLabel:s});case"slack":return eb({props:t,slack:n.slack,accountCountLabel:s});case"signal":return Xv({props:t,signal:n.signal,accountCountLabel:s});case"imessage":return Vv({props:t,imessage:n.imessage,accountCountLabel:s});case"nostr":{const i=n.channelAccounts?.nostr??[],o=i[0],a=o?.accountId??"default",r=o?.profile??null,l=t.nostrProfileAccountId===a?t.nostrProfileFormState:null,d=l?{onFieldChange:t.onNostrProfileFieldChange,onSave:t.onNostrProfileSave,onImport:t.onNostrProfileImport,onCancel:t.onNostrProfileCancel,onToggleAdvanced:t.onNostrProfileToggleAdvanced}:null;return Qv({props:t,nostr:n.nostr,nostrAccounts:i,accountCountLabel:s,profileFormState:l,profileFormCallbacks:d,onEditProfile:()=>t.onNostrProfileEdit(a,r)})}default:return ab(e,t,n.channelAccounts??{})}}function ab(e,t,n){const s=lb(t.snapshot,e),i=t.snapshot?.channels?.[e],o=typeof i?.configured=="boolean"?i.configured:void 0,a=typeof i?.running=="boolean"?i.running:void 0,r=typeof i?.connected=="boolean"?i.connected:void 0,l=typeof i?.lastError=="string"?i.lastError:void 0,d=n[e]??[],g=rd(e,n);return c`
    <div class="card">
      <div class="card-title">${s}</div>
      <div class="card-sub">Channel status and configuration.</div>
      ${g}

      ${d.length>0?c`
            <div class="account-card-list">
              ${d.map(u=>gb(u))}
            </div>
          `:c`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${o==null?"n/a":o?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${a==null?"n/a":a?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Connected</span>
                <span>${r==null?"n/a":r?"Yes":"No"}</span>
              </div>
            </div>
          `}

      ${l?c`<div class="callout danger" style="margin-top: 12px;">
            ${l}
          </div>`:f}

      ${ct({channelId:e,props:t})}
    </div>
  `}function rb(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(t=>[t.id,t])):{}}function lb(e,t){return rb(e)[t]?.label??e?.channelLabels?.[t]??t}const cb=600*1e3;function ld(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<cb:!1}function db(e){return e.running?"Yes":ld(e)?"Active":"No"}function ub(e){return e.connected===!0?"Yes":e.connected===!1?"No":ld(e)?"Active":"n/a"}function gb(e){const t=db(e),n=ub(e);return c`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${e.name||e.accountId}</div>
        <div class="account-card-id">${e.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">Running</span>
          <span>${t}</span>
        </div>
        <div>
          <span class="label">Configured</span>
          <span>${e.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Connected</span>
          <span>${n}</span>
        </div>
        <div>
          <span class="label">Last inbound</span>
          <span>${e.lastInboundAt?se(e.lastInboundAt):"n/a"}</span>
        </div>
        ${e.lastError?c`
              <div class="account-card-error">
                ${e.lastError}
              </div>
            `:f}
      </div>
    </div>
  `}const Bn=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(t,!1),Bn(s,t);return!0},Fs=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},cd=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),hb(t)}};function pb(e){this._$AN!==void 0?(Fs(this),this._$AM=e,cd(this)):this._$AM=e}function fb(e,t=!1,n=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let o=n;o<s.length;o++)Bn(s[o],!1),Fs(s[o]);else s!=null&&(Bn(s,!1),Fs(s));else Bn(this,e)}const hb=e=>{e.type==Go.CHILD&&(e._$AP??=fb,e._$AQ??=pb)};class mb extends Vo{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,s){super._$AT(t,n,s),cd(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(Bn(this,t),Fs(this))}setValue(t){if(pm(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const Ti=new WeakMap,vb=Jo(class extends mb{render(e){return f}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),f}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Ti.get(t);n===void 0&&(n=new WeakMap,Ti.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ti.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class io extends Vo{constructor(t){if(super(t),this.it=f,t.type!==Go.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===f||t==null)return this._t=void 0,this.it=t;if(t===kt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}io.directiveName="unsafeHTML",io.resultType=1;const oo=Jo(io);const{entries:dd,setPrototypeOf:Lr,isFrozen:bb,getPrototypeOf:yb,getOwnPropertyDescriptor:$b}=Object;let{freeze:Ae,seal:Ne,create:ao}=Object,{apply:ro,construct:lo}=typeof Reflect<"u"&&Reflect;Ae||(Ae=function(t){return t});Ne||(Ne=function(t){return t});ro||(ro=function(t,n){for(var s=arguments.length,i=new Array(s>2?s-2:0),o=2;o<s;o++)i[o-2]=arguments[o];return t.apply(n,i)});lo||(lo=function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return new t(...s)});const hs=Ce(Array.prototype.forEach),xb=Ce(Array.prototype.lastIndexOf),Mr=Ce(Array.prototype.pop),Cn=Ce(Array.prototype.push),wb=Ce(Array.prototype.splice),As=Ce(String.prototype.toLowerCase),_i=Ce(String.prototype.toString),Ei=Ce(String.prototype.match),Tn=Ce(String.prototype.replace),Sb=Ce(String.prototype.indexOf),kb=Ce(String.prototype.trim),Oe=Ce(Object.prototype.hasOwnProperty),Se=Ce(RegExp.prototype.test),_n=Ab(TypeError);function Ce(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return ro(e,t,s)}}function Ab(e){return function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return lo(e,n)}}function Y(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:As;Lr&&Lr(e,null);let s=t.length;for(;s--;){let i=t[s];if(typeof i=="string"){const o=n(i);o!==i&&(bb(t)||(t[s]=o),i=o)}e[i]=!0}return e}function Cb(e){for(let t=0;t<e.length;t++)Oe(e,t)||(e[t]=null);return e}function Ge(e){const t=ao(null);for(const[n,s]of dd(e))Oe(e,n)&&(Array.isArray(s)?t[n]=Cb(s):s&&typeof s=="object"&&s.constructor===Object?t[n]=Ge(s):t[n]=s);return t}function En(e,t){for(;e!==null;){const s=$b(e,t);if(s){if(s.get)return Ce(s.get);if(typeof s.value=="function")return Ce(s.value)}e=yb(e)}function n(){return null}return n}const Dr=Ae(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ri=Ae(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ii=Ae(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Tb=Ae(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Li=Ae(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),_b=Ae(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Fr=Ae(["#text"]),Pr=Ae(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Mi=Ae(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Nr=Ae(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ms=Ae(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Eb=Ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Rb=Ne(/<%[\w\W]*|[\w\W]*%>/gm),Ib=Ne(/\$\{[\w\W]*/gm),Lb=Ne(/^data-[\-\w.\u00B7-\uFFFF]+$/),Mb=Ne(/^aria-[\-\w]+$/),ud=Ne(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Db=Ne(/^(?:\w+script|data):/i),Fb=Ne(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),gd=Ne(/^html$/i),Pb=Ne(/^[a-z][.\w]*(-[.\w]+)+$/i);var Or=Object.freeze({__proto__:null,ARIA_ATTR:Mb,ATTR_WHITESPACE:Fb,CUSTOM_ELEMENT:Pb,DATA_ATTR:Lb,DOCTYPE_NAME:gd,ERB_EXPR:Rb,IS_ALLOWED_URI:ud,IS_SCRIPT_OR_DATA:Db,MUSTACHE_EXPR:Eb,TMPLIT_EXPR:Ib});const Rn={element:1,text:3,progressingInstruction:7,comment:8,document:9},Nb=function(){return typeof window>"u"?null:window},Ob=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(s=n.getAttribute(i));const o="dompurify"+(s?"#"+s:"");try{return t.createPolicy(o,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Ur=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function pd(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Nb();const t=K=>pd(K);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==Rn.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const s=n,i=s.currentScript,{DocumentFragment:o,HTMLTemplateElement:a,Node:r,Element:l,NodeFilter:d,NamedNodeMap:g=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:u,DOMParser:m,trustedTypes:h}=e,b=l.prototype,y=En(b,"cloneNode"),_=En(b,"remove"),L=En(b,"nextSibling"),R=En(b,"childNodes"),A=En(b,"parentNode");if(typeof a=="function"){const K=n.createElement("template");K.content&&K.content.ownerDocument&&(n=K.content.ownerDocument)}let S,D="";const{implementation:T,createNodeIterator:I,createDocumentFragment:v,getElementsByTagName:E}=n,{importNode:U}=s;let M=Ur();t.isSupported=typeof dd=="function"&&typeof A=="function"&&T&&T.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:j,ERB_EXPR:V,TMPLIT_EXPR:J,DATA_ATTR:C,ARIA_ATTR:q,IS_SCRIPT_OR_DATA:Q,ATTR_WHITESPACE:oe,CUSTOM_ELEMENT:Z}=Or;let{IS_ALLOWED_URI:F}=Or,N=null;const O=Y({},[...Dr,...Ri,...Ii,...Li,...Fr]);let G=null;const ue=Y({},[...Pr,...Mi,...Nr,...ms]);let ne=Object.seal(ao(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ae=null,X=null;const W=Object.seal(ao(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let re=!0,de=!0,be=!1,Ie=!0,Ze=!1,dt=!0,ye=!1,je=!1,Xe=!1,et=!1,tt=!1,ut=!1,gt=!0,Rt=!1;const ii="user-content-";let tn=!0,pt=!1,Ke={},Te=null;const wn=Y({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let nn=null;const ft=Y({},["audio","video","img","source","image","track"]);let oi=null;const ga=Y({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ns="http://www.w3.org/1998/Math/MathML",ss="http://www.w3.org/2000/svg",nt="http://www.w3.org/1999/xhtml";let sn=nt,ai=!1,ri=null;const zd=Y({},[ns,ss,nt],_i);let is=Y({},["mi","mo","mn","ms","mtext"]),os=Y({},["annotation-xml"]);const jd=Y({},["title","style","font","a","script"]);let Sn=null;const Kd=["application/xhtml+xml","text/html"],Wd="text/html";let fe=null,on=null;const qd=n.createElement("form"),pa=function(k){return k instanceof RegExp||k instanceof Function},li=function(){let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(on&&on===k)){if((!k||typeof k!="object")&&(k={}),k=Ge(k),Sn=Kd.indexOf(k.PARSER_MEDIA_TYPE)===-1?Wd:k.PARSER_MEDIA_TYPE,fe=Sn==="application/xhtml+xml"?_i:As,N=Oe(k,"ALLOWED_TAGS")?Y({},k.ALLOWED_TAGS,fe):O,G=Oe(k,"ALLOWED_ATTR")?Y({},k.ALLOWED_ATTR,fe):ue,ri=Oe(k,"ALLOWED_NAMESPACES")?Y({},k.ALLOWED_NAMESPACES,_i):zd,oi=Oe(k,"ADD_URI_SAFE_ATTR")?Y(Ge(ga),k.ADD_URI_SAFE_ATTR,fe):ga,nn=Oe(k,"ADD_DATA_URI_TAGS")?Y(Ge(ft),k.ADD_DATA_URI_TAGS,fe):ft,Te=Oe(k,"FORBID_CONTENTS")?Y({},k.FORBID_CONTENTS,fe):wn,ae=Oe(k,"FORBID_TAGS")?Y({},k.FORBID_TAGS,fe):Ge({}),X=Oe(k,"FORBID_ATTR")?Y({},k.FORBID_ATTR,fe):Ge({}),Ke=Oe(k,"USE_PROFILES")?k.USE_PROFILES:!1,re=k.ALLOW_ARIA_ATTR!==!1,de=k.ALLOW_DATA_ATTR!==!1,be=k.ALLOW_UNKNOWN_PROTOCOLS||!1,Ie=k.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ze=k.SAFE_FOR_TEMPLATES||!1,dt=k.SAFE_FOR_XML!==!1,ye=k.WHOLE_DOCUMENT||!1,et=k.RETURN_DOM||!1,tt=k.RETURN_DOM_FRAGMENT||!1,ut=k.RETURN_TRUSTED_TYPE||!1,Xe=k.FORCE_BODY||!1,gt=k.SANITIZE_DOM!==!1,Rt=k.SANITIZE_NAMED_PROPS||!1,tn=k.KEEP_CONTENT!==!1,pt=k.IN_PLACE||!1,F=k.ALLOWED_URI_REGEXP||ud,sn=k.NAMESPACE||nt,is=k.MATHML_TEXT_INTEGRATION_POINTS||is,os=k.HTML_INTEGRATION_POINTS||os,ne=k.CUSTOM_ELEMENT_HANDLING||{},k.CUSTOM_ELEMENT_HANDLING&&pa(k.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ne.tagNameCheck=k.CUSTOM_ELEMENT_HANDLING.tagNameCheck),k.CUSTOM_ELEMENT_HANDLING&&pa(k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ne.attributeNameCheck=k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),k.CUSTOM_ELEMENT_HANDLING&&typeof k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(ne.allowCustomizedBuiltInElements=k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ze&&(de=!1),tt&&(et=!0),Ke&&(N=Y({},Fr),G=[],Ke.html===!0&&(Y(N,Dr),Y(G,Pr)),Ke.svg===!0&&(Y(N,Ri),Y(G,Mi),Y(G,ms)),Ke.svgFilters===!0&&(Y(N,Ii),Y(G,Mi),Y(G,ms)),Ke.mathMl===!0&&(Y(N,Li),Y(G,Nr),Y(G,ms))),k.ADD_TAGS&&(typeof k.ADD_TAGS=="function"?W.tagCheck=k.ADD_TAGS:(N===O&&(N=Ge(N)),Y(N,k.ADD_TAGS,fe))),k.ADD_ATTR&&(typeof k.ADD_ATTR=="function"?W.attributeCheck=k.ADD_ATTR:(G===ue&&(G=Ge(G)),Y(G,k.ADD_ATTR,fe))),k.ADD_URI_SAFE_ATTR&&Y(oi,k.ADD_URI_SAFE_ATTR,fe),k.FORBID_CONTENTS&&(Te===wn&&(Te=Ge(Te)),Y(Te,k.FORBID_CONTENTS,fe)),k.ADD_FORBID_CONTENTS&&(Te===wn&&(Te=Ge(Te)),Y(Te,k.ADD_FORBID_CONTENTS,fe)),tn&&(N["#text"]=!0),ye&&Y(N,["html","head","body"]),N.table&&(Y(N,["tbody"]),delete ae.tbody),k.TRUSTED_TYPES_POLICY){if(typeof k.TRUSTED_TYPES_POLICY.createHTML!="function")throw _n('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof k.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw _n('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');S=k.TRUSTED_TYPES_POLICY,D=S.createHTML("")}else S===void 0&&(S=Ob(h,i)),S!==null&&typeof D=="string"&&(D=S.createHTML(""));Ae&&Ae(k),on=k}},fa=Y({},[...Ri,...Ii,...Tb]),ha=Y({},[...Li,..._b]),Gd=function(k){let P=A(k);(!P||!P.tagName)&&(P={namespaceURI:sn,tagName:"template"});const H=As(k.tagName),le=As(P.tagName);return ri[k.namespaceURI]?k.namespaceURI===ss?P.namespaceURI===nt?H==="svg":P.namespaceURI===ns?H==="svg"&&(le==="annotation-xml"||is[le]):!!fa[H]:k.namespaceURI===ns?P.namespaceURI===nt?H==="math":P.namespaceURI===ss?H==="math"&&os[le]:!!ha[H]:k.namespaceURI===nt?P.namespaceURI===ss&&!os[le]||P.namespaceURI===ns&&!is[le]?!1:!ha[H]&&(jd[H]||!fa[H]):!!(Sn==="application/xhtml+xml"&&ri[k.namespaceURI]):!1},We=function(k){Cn(t.removed,{element:k});try{A(k).removeChild(k)}catch{_(k)}},It=function(k,P){try{Cn(t.removed,{attribute:P.getAttributeNode(k),from:P})}catch{Cn(t.removed,{attribute:null,from:P})}if(P.removeAttribute(k),k==="is")if(et||tt)try{We(P)}catch{}else try{P.setAttribute(k,"")}catch{}},ma=function(k){let P=null,H=null;if(Xe)k="<remove></remove>"+k;else{const ge=Ei(k,/^[\r\n\t ]+/);H=ge&&ge[0]}Sn==="application/xhtml+xml"&&sn===nt&&(k='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+k+"</body></html>");const le=S?S.createHTML(k):k;if(sn===nt)try{P=new m().parseFromString(le,Sn)}catch{}if(!P||!P.documentElement){P=T.createDocument(sn,"template",null);try{P.documentElement.innerHTML=ai?D:le}catch{}}const xe=P.body||P.documentElement;return k&&H&&xe.insertBefore(n.createTextNode(H),xe.childNodes[0]||null),sn===nt?E.call(P,ye?"html":"body")[0]:ye?P.documentElement:xe},va=function(k){return I.call(k.ownerDocument||k,k,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},ci=function(k){return k instanceof u&&(typeof k.nodeName!="string"||typeof k.textContent!="string"||typeof k.removeChild!="function"||!(k.attributes instanceof g)||typeof k.removeAttribute!="function"||typeof k.setAttribute!="function"||typeof k.namespaceURI!="string"||typeof k.insertBefore!="function"||typeof k.hasChildNodes!="function")},ba=function(k){return typeof r=="function"&&k instanceof r};function st(K,k,P){hs(K,H=>{H.call(t,k,P,on)})}const ya=function(k){let P=null;if(st(M.beforeSanitizeElements,k,null),ci(k))return We(k),!0;const H=fe(k.nodeName);if(st(M.uponSanitizeElement,k,{tagName:H,allowedTags:N}),dt&&k.hasChildNodes()&&!ba(k.firstElementChild)&&Se(/<[/\w!]/g,k.innerHTML)&&Se(/<[/\w!]/g,k.textContent)||k.nodeType===Rn.progressingInstruction||dt&&k.nodeType===Rn.comment&&Se(/<[/\w]/g,k.data))return We(k),!0;if(!(W.tagCheck instanceof Function&&W.tagCheck(H))&&(!N[H]||ae[H])){if(!ae[H]&&xa(H)&&(ne.tagNameCheck instanceof RegExp&&Se(ne.tagNameCheck,H)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(H)))return!1;if(tn&&!Te[H]){const le=A(k)||k.parentNode,xe=R(k)||k.childNodes;if(xe&&le){const ge=xe.length;for(let _e=ge-1;_e>=0;--_e){const it=y(xe[_e],!0);it.__removalCount=(k.__removalCount||0)+1,le.insertBefore(it,L(k))}}}return We(k),!0}return k instanceof l&&!Gd(k)||(H==="noscript"||H==="noembed"||H==="noframes")&&Se(/<\/no(script|embed|frames)/i,k.innerHTML)?(We(k),!0):(Ze&&k.nodeType===Rn.text&&(P=k.textContent,hs([j,V,J],le=>{P=Tn(P,le," ")}),k.textContent!==P&&(Cn(t.removed,{element:k.cloneNode()}),k.textContent=P)),st(M.afterSanitizeElements,k,null),!1)},$a=function(k,P,H){if(gt&&(P==="id"||P==="name")&&(H in n||H in qd))return!1;if(!(de&&!X[P]&&Se(C,P))){if(!(re&&Se(q,P))){if(!(W.attributeCheck instanceof Function&&W.attributeCheck(P,k))){if(!G[P]||X[P]){if(!(xa(k)&&(ne.tagNameCheck instanceof RegExp&&Se(ne.tagNameCheck,k)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(k))&&(ne.attributeNameCheck instanceof RegExp&&Se(ne.attributeNameCheck,P)||ne.attributeNameCheck instanceof Function&&ne.attributeNameCheck(P,k))||P==="is"&&ne.allowCustomizedBuiltInElements&&(ne.tagNameCheck instanceof RegExp&&Se(ne.tagNameCheck,H)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(H))))return!1}else if(!oi[P]){if(!Se(F,Tn(H,oe,""))){if(!((P==="src"||P==="xlink:href"||P==="href")&&k!=="script"&&Sb(H,"data:")===0&&nn[k])){if(!(be&&!Se(Q,Tn(H,oe,"")))){if(H)return!1}}}}}}}return!0},xa=function(k){return k!=="annotation-xml"&&Ei(k,Z)},wa=function(k){st(M.beforeSanitizeAttributes,k,null);const{attributes:P}=k;if(!P||ci(k))return;const H={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:G,forceKeepAttr:void 0};let le=P.length;for(;le--;){const xe=P[le],{name:ge,namespaceURI:_e,value:it}=xe,an=fe(ge),di=it;let $e=ge==="value"?di:kb(di);if(H.attrName=an,H.attrValue=$e,H.keepAttr=!0,H.forceKeepAttr=void 0,st(M.uponSanitizeAttribute,k,H),$e=H.attrValue,Rt&&(an==="id"||an==="name")&&(It(ge,k),$e=ii+$e),dt&&Se(/((--!?|])>)|<\/(style|title|textarea)/i,$e)){It(ge,k);continue}if(an==="attributename"&&Ei($e,"href")){It(ge,k);continue}if(H.forceKeepAttr)continue;if(!H.keepAttr){It(ge,k);continue}if(!Ie&&Se(/\/>/i,$e)){It(ge,k);continue}Ze&&hs([j,V,J],ka=>{$e=Tn($e,ka," ")});const Sa=fe(k.nodeName);if(!$a(Sa,an,$e)){It(ge,k);continue}if(S&&typeof h=="object"&&typeof h.getAttributeType=="function"&&!_e)switch(h.getAttributeType(Sa,an)){case"TrustedHTML":{$e=S.createHTML($e);break}case"TrustedScriptURL":{$e=S.createScriptURL($e);break}}if($e!==di)try{_e?k.setAttributeNS(_e,ge,$e):k.setAttribute(ge,$e),ci(k)?We(k):Mr(t.removed)}catch{It(ge,k)}}st(M.afterSanitizeAttributes,k,null)},Jd=function K(k){let P=null;const H=va(k);for(st(M.beforeSanitizeShadowDOM,k,null);P=H.nextNode();)st(M.uponSanitizeShadowNode,P,null),ya(P),wa(P),P.content instanceof o&&K(P.content);st(M.afterSanitizeShadowDOM,k,null)};return t.sanitize=function(K){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},P=null,H=null,le=null,xe=null;if(ai=!K,ai&&(K="<!-->"),typeof K!="string"&&!ba(K))if(typeof K.toString=="function"){if(K=K.toString(),typeof K!="string")throw _n("dirty is not a string, aborting")}else throw _n("toString is not a function");if(!t.isSupported)return K;if(je||li(k),t.removed=[],typeof K=="string"&&(pt=!1),pt){if(K.nodeName){const it=fe(K.nodeName);if(!N[it]||ae[it])throw _n("root node is forbidden and cannot be sanitized in-place")}}else if(K instanceof r)P=ma("<!---->"),H=P.ownerDocument.importNode(K,!0),H.nodeType===Rn.element&&H.nodeName==="BODY"||H.nodeName==="HTML"?P=H:P.appendChild(H);else{if(!et&&!Ze&&!ye&&K.indexOf("<")===-1)return S&&ut?S.createHTML(K):K;if(P=ma(K),!P)return et?null:ut?D:""}P&&Xe&&We(P.firstChild);const ge=va(pt?K:P);for(;le=ge.nextNode();)ya(le),wa(le),le.content instanceof o&&Jd(le.content);if(pt)return K;if(et){if(tt)for(xe=v.call(P.ownerDocument);P.firstChild;)xe.appendChild(P.firstChild);else xe=P;return(G.shadowroot||G.shadowrootmode)&&(xe=U.call(s,xe,!0)),xe}let _e=ye?P.outerHTML:P.innerHTML;return ye&&N["!doctype"]&&P.ownerDocument&&P.ownerDocument.doctype&&P.ownerDocument.doctype.name&&Se(gd,P.ownerDocument.doctype.name)&&(_e="<!DOCTYPE "+P.ownerDocument.doctype.name+`>
`+_e),Ze&&hs([j,V,J],it=>{_e=Tn(_e,it," ")}),S&&ut?S.createHTML(_e):_e},t.setConfig=function(){let K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};li(K),je=!0},t.clearConfig=function(){on=null,je=!1},t.isValidAttribute=function(K,k,P){on||li({});const H=fe(K),le=fe(k);return $a(H,le,P)},t.addHook=function(K,k){typeof k=="function"&&Cn(M[K],k)},t.removeHook=function(K,k){if(k!==void 0){const P=xb(M[K],k);return P===-1?void 0:wb(M[K],P,1)[0]}return Mr(M[K])},t.removeHooks=function(K){M[K]=[]},t.removeAllHooks=function(){M=Ur()},t}var co=pd();function Xo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var en=Xo();function fd(e){en=e}var jt={exec:()=>null};function ee(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(ke.caret,"$1"),n=n.replace(i,a),s},getRegex:()=>new RegExp(n,t)};return s}var Ub=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),ke={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}>`)},Bb=/^(?:[ \t]*(?:\n|$))+/,Hb=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,zb=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ts=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,jb=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ea=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,hd=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,md=ee(hd).replace(/bull/g,ea).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Kb=ee(hd).replace(/bull/g,ea).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ta=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Wb=/^[^\n]+/,na=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,qb=ee(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",na).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Gb=ee(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ea).getRegex(),ti="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",sa=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Jb=ee("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",sa).replace("tag",ti).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),vd=ee(ta).replace("hr",ts).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ti).getRegex(),Vb=ee(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",vd).getRegex(),ia={blockquote:Vb,code:Hb,def:qb,fences:zb,heading:jb,hr:ts,html:Jb,lheading:md,list:Gb,newline:Bb,paragraph:vd,table:jt,text:Wb},Br=ee("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ts).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ti).getRegex(),Qb={...ia,lheading:Kb,table:Br,paragraph:ee(ta).replace("hr",ts).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Br).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ti).getRegex()},Yb={...ia,html:ee(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",sa).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:jt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ee(ta).replace("hr",ts).replace("heading",` *#{1,6} *[^
]`).replace("lheading",md).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Zb=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Xb=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,bd=/^( {2,}|\\)\n(?!\s*$)/,ey=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ni=/[\p{P}\p{S}]/u,oa=/[\s\p{P}\p{S}]/u,yd=/[^\s\p{P}\p{S}]/u,ty=ee(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,oa).getRegex(),$d=/(?!~)[\p{P}\p{S}]/u,ny=/(?!~)[\s\p{P}\p{S}]/u,sy=/(?:[^\s\p{P}\p{S}]|~)/u,xd=/(?![*_])[\p{P}\p{S}]/u,iy=/(?![*_])[\s\p{P}\p{S}]/u,oy=/(?:[^\s\p{P}\p{S}]|[*_])/u,ay=ee(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Ub?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),wd=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,ry=ee(wd,"u").replace(/punct/g,ni).getRegex(),ly=ee(wd,"u").replace(/punct/g,$d).getRegex(),Sd="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",cy=ee(Sd,"gu").replace(/notPunctSpace/g,yd).replace(/punctSpace/g,oa).replace(/punct/g,ni).getRegex(),dy=ee(Sd,"gu").replace(/notPunctSpace/g,sy).replace(/punctSpace/g,ny).replace(/punct/g,$d).getRegex(),uy=ee("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,yd).replace(/punctSpace/g,oa).replace(/punct/g,ni).getRegex(),gy=ee(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,xd).getRegex(),py="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",fy=ee(py,"gu").replace(/notPunctSpace/g,oy).replace(/punctSpace/g,iy).replace(/punct/g,xd).getRegex(),hy=ee(/\\(punct)/,"gu").replace(/punct/g,ni).getRegex(),my=ee(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),vy=ee(sa).replace("(?:-->|$)","-->").getRegex(),by=ee("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",vy).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ps=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,yy=ee(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Ps).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),kd=ee(/^!?\[(label)\]\[(ref)\]/).replace("label",Ps).replace("ref",na).getRegex(),Ad=ee(/^!?\[(ref)\](?:\[\])?/).replace("ref",na).getRegex(),$y=ee("reflink|nolink(?!\\()","g").replace("reflink",kd).replace("nolink",Ad).getRegex(),Hr=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,aa={_backpedal:jt,anyPunctuation:hy,autolink:my,blockSkip:ay,br:bd,code:Xb,del:jt,delLDelim:jt,delRDelim:jt,emStrongLDelim:ry,emStrongRDelimAst:cy,emStrongRDelimUnd:uy,escape:Zb,link:yy,nolink:Ad,punctuation:ty,reflink:kd,reflinkSearch:$y,tag:by,text:ey,url:jt},xy={...aa,link:ee(/^!?\[(label)\]\((.*?)\)/).replace("label",Ps).getRegex(),reflink:ee(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ps).getRegex()},uo={...aa,emStrongRDelimAst:dy,emStrongLDelim:ly,delLDelim:gy,delRDelim:fy,url:ee(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Hr).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ee(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Hr).getRegex()},wy={...uo,br:ee(bd).replace("{2,}","*").getRegex(),text:ee(uo.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},vs={normal:ia,gfm:Qb,pedantic:Yb},In={normal:aa,gfm:uo,breaks:wy,pedantic:xy},Sy={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},zr=e=>Sy[e];function Je(e,t){if(t){if(ke.escapeTest.test(e))return e.replace(ke.escapeReplace,zr)}else if(ke.escapeTestNoEncode.test(e))return e.replace(ke.escapeReplaceNoEncode,zr);return e}function jr(e){try{e=encodeURI(e).replace(ke.percentDecode,"%")}catch{return null}return e}function Kr(e,t){let n=e.replace(ke.findPipe,(o,a,r)=>{let l=!1,d=a;for(;--d>=0&&r[d]==="\\";)l=!l;return l?"|":" |"}),s=n.split(ke.splitPipe),i=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(ke.slashPipe,"|");return s}function Ln(e,t,n){let s=e.length;if(s===0)return"";let i=0;for(;i<s&&e.charAt(s-i-1)===t;)i++;return e.slice(0,s-i)}function ky(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function Ay(e,t=0){let n=t,s="";for(let i of e)if(i==="	"){let o=4-n%4;s+=" ".repeat(o),n+=o}else s+=i,n++;return s}function Wr(e,t,n,s,i){let o=t.href,a=t.title||null,r=e[1].replace(i.other.outputLinkReplace,"$1");s.state.inLink=!0;let l={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:a,text:r,tokens:s.inlineTokens(r)};return s.state.inLink=!1,l}function Cy(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let i=s[1];return t.split(`
`).map(o=>{let a=o.match(n.other.beginningSpace);if(a===null)return o;let[r]=a;return r.length>=i.length?o.slice(i.length):o}).join(`
`)}var Ns=class{options;rules;lexer;constructor(e){this.options=e||en}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Ln(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Cy(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=Ln(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Ln(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=Ln(t[0],`
`).split(`
`),s="",i="",o=[];for(;n.length>0;){let a=!1,r=[],l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))r.push(n[l]),a=!0;else if(!a)r.push(n[l]);else break;n=n.slice(l);let d=r.join(`
`),g=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${d}`:d,i=i?`${i}
${g}`:g;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,o,!0),this.lexer.state.top=u,n.length===0)break;let m=o.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let h=m,b=h.raw+`
`+n.join(`
`),y=this.blockquote(b);o[o.length-1]=y,s=s.substring(0,s.length-h.raw.length)+y.raw,i=i.substring(0,i.length-h.text.length)+y.text;break}else if(m?.type==="list"){let h=m,b=h.raw+`
`+n.join(`
`),y=this.list(b);o[o.length-1]=y,s=s.substring(0,s.length-m.raw.length)+y.raw,i=i.substring(0,i.length-h.raw.length)+y.raw,n=b.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let o=this.rules.other.listItemRegex(n),a=!1;for(;e;){let l=!1,d="",g="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;d=t[0],e=e.substring(d.length);let u=Ay(t[2].split(`
`,1)[0],t[1].length),m=e.split(`
`,1)[0],h=!u.trim(),b=0;if(this.options.pedantic?(b=2,g=u.trimStart()):h?b=t[1].length+1:(b=u.search(this.rules.other.nonSpaceChar),b=b>4?1:b,g=u.slice(b),b+=t[1].length),h&&this.rules.other.blankLine.test(m)&&(d+=m+`
`,e=e.substring(m.length+1),l=!0),!l){let y=this.rules.other.nextBulletRegex(b),_=this.rules.other.hrRegex(b),L=this.rules.other.fencesBeginRegex(b),R=this.rules.other.headingBeginRegex(b),A=this.rules.other.htmlBeginRegex(b),S=this.rules.other.blockquoteBeginRegex(b);for(;e;){let D=e.split(`
`,1)[0],T;if(m=D,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),T=m):T=m.replace(this.rules.other.tabCharGlobal,"    "),L.test(m)||R.test(m)||A.test(m)||S.test(m)||y.test(m)||_.test(m))break;if(T.search(this.rules.other.nonSpaceChar)>=b||!m.trim())g+=`
`+T.slice(b);else{if(h||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||L.test(u)||R.test(u)||_.test(u))break;g+=`
`+m}h=!m.trim(),d+=D+`
`,e=e.substring(D.length+1),u=T.slice(b)}}i.loose||(a?i.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(a=!0)),i.items.push({type:"list_item",raw:d,task:!!this.options.gfm&&this.rules.other.listIsTask.test(g),loose:!1,text:g,tokens:[]}),i.raw+=d}let r=i.items.at(-1);if(r)r.raw=r.raw.trimEnd(),r.text=r.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let l of i.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let g=this.lexer.inlineQueue.length-1;g>=0;g--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)){this.lexer.inlineQueue[g].src=this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask,"");break}}let d=this.rules.other.listTaskCheckbox.exec(l.raw);if(d){let g={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};l.checked=g.checked,i.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=g.raw+l.tokens[0].raw,l.tokens[0].text=g.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(g)):l.tokens.unshift({type:"paragraph",raw:g.raw,text:g.raw,tokens:[g]}):l.tokens.unshift(g)}}if(!i.loose){let d=l.tokens.filter(u=>u.type==="space"),g=d.length>0&&d.some(u=>this.rules.other.anyLine.test(u.raw));i.loose=g}}if(i.loose)for(let l of i.items){l.loose=!0;for(let d of l.tokens)d.type==="text"&&(d.type="paragraph")}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:i}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Kr(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<n.length;a++)o.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:o.align[a]});for(let a of i)o.rows.push(Kr(a,o.header.length).map((r,l)=>({text:r,tokens:this.lexer.inline(r),header:!1,align:o.align[l]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=Ln(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=ky(t[2],"()");if(o===-2)return;if(o>-1){let a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),Wr(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[s.toLowerCase()];if(!i){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Wr(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,o,a,r=i,l=0,d=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(s=d.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(a=[...o].length,s[3]||s[4]){r+=a;continue}else if((s[5]||s[6])&&i%3&&!((i+a)%3)){l+=a;continue}if(r-=a,r>0)continue;a=Math.min(a,a+r+l);let g=[...s[0]][0].length,u=e.slice(0,i+s.index+g+a);if(Math.min(i,a)%2){let h=u.slice(1,-1);return{type:"em",raw:u,text:h,tokens:this.lexer.inlineTokens(h)}}let m=u.slice(2,-2);return{type:"strong",raw:u,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,n=""){let s=this.rules.inline.delLDelim.exec(e);if(s&&(!s[1]||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,o,a,r=i,l=this.rules.inline.delRDelim;for(l.lastIndex=0,t=t.slice(-1*e.length+i);(s=l.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o||(a=[...o].length,a!==i))continue;if(s[3]||s[4]){r+=a;continue}if(r-=a,r>0)continue;a=Math.min(a,a+r);let d=[...s[0]][0].length,g=e.slice(0,i+s.index+d+a),u=g.slice(i,-i);return{type:"del",raw:g,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(i!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Be=class go{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||en,this.options.tokenizer=this.options.tokenizer||new Ns,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:ke,block:vs.normal,inline:In.normal};this.options.pedantic?(n.block=vs.pedantic,n.inline=In.pedantic):this.options.gfm&&(n.block=vs.gfm,this.options.breaks?n.inline=In.breaks:n.inline=In.gfm),this.tokenizer.rules=n}static get rules(){return{block:vs,inline:In}}static lex(t,n){return new go(n).lex(t)}static lexInline(t,n){return new go(n).inlineTokens(t)}lex(t){t=t.replace(ke.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace(ke.tabCharGlobal,"    ").replace(ke.spaceLine,""));t;){let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},t,n))?(t=t.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);let a=n.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(t)){t=t.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(t)){t=t.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length),n.push(i);continue}let o=t;if(this.options.extensions?.startBlock){let a=1/0,r=t.slice(1),l;this.options.extensions.startBlock.forEach(d=>{l=d.call({lexer:this},r),typeof l=="number"&&l>=0&&(a=Math.min(a,l))}),a<1/0&&a>=0&&(o=t.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(o))){let a=n.at(-1);s&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i),s=o.length!==t.length,t=t.substring(i.raw.length);continue}if(i=this.tokenizer.text(t)){t=t.substring(i.raw.length);let a=n.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(t){let a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,i=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)l.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,i.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)o=i[2]?i[2].length:0,s=s.slice(0,i.index+o)+"["+"a".repeat(i[0].length-o-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let a=!1,r="";for(;t;){a||(r=""),a=!1;let l;if(this.options.extensions?.inline?.some(g=>(l=g.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.escape(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.tag(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.link(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(l.raw.length);let g=n.at(-1);l.type==="text"&&g?.type==="text"?(g.raw+=l.raw,g.text+=l.text):n.push(l);continue}if(l=this.tokenizer.emStrong(t,s,r)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.codespan(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.br(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.del(t,s,r)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.autolink(t)){t=t.substring(l.raw.length),n.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(t))){t=t.substring(l.raw.length),n.push(l);continue}let d=t;if(this.options.extensions?.startInline){let g=1/0,u=t.slice(1),m;this.options.extensions.startInline.forEach(h=>{m=h.call({lexer:this},u),typeof m=="number"&&m>=0&&(g=Math.min(g,m))}),g<1/0&&g>=0&&(d=t.substring(0,g+1))}if(l=this.tokenizer.inlineText(d)){t=t.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(r=l.raw.slice(-1)),a=!0;let g=n.at(-1);g?.type==="text"?(g.raw+=l.raw,g.text+=l.text):n.push(l);continue}if(t){let g="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}},Os=class{options;parser;constructor(e){this.options=e||en}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(ke.notSpaceStart)?.[0],i=e.replace(ke.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Je(s)+'">'+(n?i:Je(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:Je(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let a=0;a<e.items.length;a++){let r=e.items[a];s+=this.listitem(r)}let i=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+i+o+`>
`+s+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let i=0;i<e.header.length;i++)n+=this.tablecell(e.header[i]);t+=this.tablerow({text:n});let s="";for(let i=0;i<e.rows.length;i++){let o=e.rows[i];n="";for(let a=0;a<o.length;a++)n+=this.tablecell(o[a]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Je(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),i=jr(e);if(i===null)return s;e=i;let o='<a href="'+e+'"';return t&&(o+=' title="'+Je(t)+'"'),o+=">"+s+"</a>",o}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let i=jr(e);if(i===null)return Je(n);e=i;let o=`<img src="${e}" alt="${Je(n)}"`;return t&&(o+=` title="${Je(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Je(e.text)}},ra=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},He=class po{options;renderer;textRenderer;constructor(t){this.options=t||en,this.options.renderer=this.options.renderer||new Os,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ra}static parse(t,n){return new po(n).parse(t)}static parseInline(t,n){return new po(n).parseInline(t)}parse(t){let n="";for(let s=0;s<t.length;s++){let i=t[s];if(this.options.extensions?.renderers?.[i.type]){let a=i,r=this.options.extensions.renderers[a.type].call({parser:this},a);if(r!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){n+=r||"";continue}}let o=i;switch(o.type){case"space":{n+=this.renderer.space(o);break}case"hr":{n+=this.renderer.hr(o);break}case"heading":{n+=this.renderer.heading(o);break}case"code":{n+=this.renderer.code(o);break}case"table":{n+=this.renderer.table(o);break}case"blockquote":{n+=this.renderer.blockquote(o);break}case"list":{n+=this.renderer.list(o);break}case"checkbox":{n+=this.renderer.checkbox(o);break}case"html":{n+=this.renderer.html(o);break}case"def":{n+=this.renderer.def(o);break}case"paragraph":{n+=this.renderer.paragraph(o);break}case"text":{n+=this.renderer.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(t,n=this.renderer){let s="";for(let i=0;i<t.length;i++){let o=t[i];if(this.options.extensions?.renderers?.[o.type]){let r=this.options.extensions.renderers[o.type].call({parser:this},o);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=r||"";continue}}let a=o;switch(a.type){case"escape":{s+=n.text(a);break}case"html":{s+=n.html(a);break}case"link":{s+=n.link(a);break}case"image":{s+=n.image(a);break}case"checkbox":{s+=n.checkbox(a);break}case"strong":{s+=n.strong(a);break}case"em":{s+=n.em(a);break}case"codespan":{s+=n.codespan(a);break}case"br":{s+=n.br(a);break}case"del":{s+=n.del(a);break}case"text":{s+=n.text(a);break}default:{let r='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return s}},Dn=class{options;block;constructor(e){this.options=e||en}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Be.lex:Be.lexInline}provideParser(){return this.block?He.parse:He.parseInline}},Ty=class{defaults=Xo();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=He;Renderer=Os;TextRenderer=ra;Lexer=Be;Tokenizer=Ns;Hooks=Dn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let i=s;for(let o of i.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of i.rows)for(let a of o)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{let i=s;n=n.concat(this.walkTokens(i.items,t));break}default:{let i=s;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(o=>{let a=i[o].flat(1/0);n=n.concat(this.walkTokens(a,t))}):i.tokens&&(n=n.concat(this.walkTokens(i.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let o=t.renderers[i.name];o?t.renderers[i.name]=function(...a){let r=i.renderer.apply(this,a);return r===!1&&(r=o.apply(this,a)),r}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[i.level];o?o.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),n.renderer){let i=this.defaults.renderer||new Os(this.defaults);for(let o in n.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,r=n.renderer[a],l=i[a];i[a]=(...d)=>{let g=r.apply(i,d);return g===!1&&(g=l.apply(i,d)),g||""}}s.renderer=i}if(n.tokenizer){let i=this.defaults.tokenizer||new Ns(this.defaults);for(let o in n.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,r=n.tokenizer[a],l=i[a];i[a]=(...d)=>{let g=r.apply(i,d);return g===!1&&(g=l.apply(i,d)),g}}s.tokenizer=i}if(n.hooks){let i=this.defaults.hooks||new Dn;for(let o in n.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,r=n.hooks[a],l=i[a];Dn.passThroughHooks.has(o)?i[a]=d=>{if(this.defaults.async&&Dn.passThroughHooksRespectAsync.has(o))return(async()=>{let u=await r.call(i,d);return l.call(i,u)})();let g=r.call(i,d);return l.call(i,g)}:i[a]=(...d)=>{if(this.defaults.async)return(async()=>{let u=await r.apply(i,d);return u===!1&&(u=await l.apply(i,d)),u})();let g=r.apply(i,d);return g===!1&&(g=l.apply(i,d)),g}}s.hooks=i}if(n.walkTokens){let i=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(a){let r=[];return r.push(o.call(this,a)),i&&(r=r.concat(i.call(this,a))),r}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Be.lex(e,t??this.defaults)}parser(e,t){return He.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},i={...this.defaults,...s},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let a=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer():e?Be.lex:Be.lexInline)(a,i),l=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(l,i.walkTokens));let d=await(i.hooks?await i.hooks.provideParser():e?He.parse:He.parseInline)(l,i);return i.hooks?await i.hooks.postprocess(d):d})().catch(o);try{i.hooks&&(t=i.hooks.preprocess(t));let a=(i.hooks?i.hooks.provideLexer():e?Be.lex:Be.lexInline)(t,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let r=(i.hooks?i.hooks.provideParser():e?He.parse:He.parseInline)(a,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(a){return o(a)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+Je(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Yt=new Ty;function te(e,t){return Yt.parse(e,t)}te.options=te.setOptions=function(e){return Yt.setOptions(e),te.defaults=Yt.defaults,fd(te.defaults),te};te.getDefaults=Xo;te.defaults=en;te.use=function(...e){return Yt.use(...e),te.defaults=Yt.defaults,fd(te.defaults),te};te.walkTokens=function(e,t){return Yt.walkTokens(e,t)};te.parseInline=Yt.parseInline;te.Parser=He;te.parser=He.parse;te.Renderer=Os;te.TextRenderer=ra;te.Lexer=Be;te.lexer=Be.lex;te.Tokenizer=Ns;te.Hooks=Dn;te.parse=te;te.options;te.setOptions;te.use;te.walkTokens;te.parseInline;He.parse;Be.lex;te.setOptions({gfm:!0,breaks:!0});const _y=["a","b","blockquote","br","code","del","em","h1","h2","h3","h4","hr","i","li","ol","p","pre","strong","table","tbody","td","th","thead","tr","ul","img"],Ey=["class","href","rel","target","title","start","src","alt"],qr={ALLOWED_TAGS:_y,ALLOWED_ATTR:Ey,ADD_DATA_URI_TAGS:["img"]};let Gr=!1;const Ry=14e4,Iy=4e4,Ly=200,Di=5e4,Wt=new Map;function My(e){const t=Wt.get(e);return t===void 0?null:(Wt.delete(e),Wt.set(e,t),t)}function Jr(e,t){if(Wt.set(e,t),Wt.size<=Ly)return;const n=Wt.keys().next().value;n&&Wt.delete(n)}function Dy(){Gr||(Gr=!0,co.addHook("afterSanitizeAttributes",e=>{!(e instanceof HTMLAnchorElement)||!e.getAttribute("href")||(e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank"))}))}function fo(e){const t=e.trim();if(!t)return"";if(Dy(),t.length<=Di){const a=My(t);if(a!==null)return a}const n=zl(t,Ry),s=n.truncated?`

… truncated (${n.total} chars, showing first ${n.text.length}).`:"";if(n.text.length>Iy){const r=`<pre class="code-block">${Td(`${n.text}${s}`)}</pre>`,l=co.sanitize(r,qr);return t.length<=Di&&Jr(t,l),l}const i=te.parse(`${n.text}${s}`,{renderer:Cd}),o=co.sanitize(i,qr);return t.length<=Di&&Jr(t,o),o}const Cd=new te.Renderer;Cd.html=({text:e})=>Td(e);function Td(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Cs="data:",Fy=new Set(["http:","https:","blob:"]),Py=new Set(["image/svg+xml"]);function Ny(e){if(!e.toLowerCase().startsWith(Cs))return!1;const t=e.indexOf(",");if(t<Cs.length)return!1;const s=e.slice(Cs.length,t).split(";")[0]?.trim().toLowerCase()??"";return s.startsWith("image/")?!Py.has(s):!1}function Oy(e,t,n={}){const s=e.trim();if(!s)return null;if(n.allowDataImage===!0&&Ny(s))return s;if(s.toLowerCase().startsWith(Cs))return null;try{const i=new URL(s,t);return Fy.has(i.protocol.toLowerCase())?i.toString():null}catch{return null}}function Uy(e,t={}){const n=t.baseHref??window.location.href,s=Oy(e,n,t);if(!s)return null;const i=window.open(s,"_blank","noopener,noreferrer");return i&&(i.opener=null),i}const By=new RegExp("\\p{Script=Hebrew}|\\p{Script=Arabic}|\\p{Script=Syriac}|\\p{Script=Thaana}|\\p{Script=Nko}|\\p{Script=Samaritan}|\\p{Script=Mandaic}|\\p{Script=Adlam}|\\p{Script=Phoenician}|\\p{Script=Lydian}","u");function _d(e,t=/[\s\p{P}\p{S}]/u){if(!e)return"ltr";for(const n of e)if(!t.test(n))return By.test(n)?"rtl":"ltr";return"ltr"}const Hy=1500,zy=2e3,Ed="Copy as markdown",jy="Copied",Ky="Copy failed";async function Wy(e){if(!e)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function bs(e,t){e.title=t,e.setAttribute("aria-label",t)}function qy(e){const t=e.label??Ed;return c`
    <button
      class="chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{const s=n.currentTarget;if(!s||s.dataset.copying==="1")return;s.dataset.copying="1",s.setAttribute("aria-busy","true"),s.disabled=!0;const i=await Wy(e.text());if(s.isConnected){if(delete s.dataset.copying,s.removeAttribute("aria-busy"),s.disabled=!1,!i){s.dataset.error="1",bs(s,Ky),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.error,bs(s,t))},zy);return}s.dataset.copied="1",bs(s,jy),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.copied,bs(s,t))},Hy)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${he.copy}</span>
        <span class="chat-copy-btn__icon-check">${he.check}</span>
      </span>
    </button>
  `}function Gy(e){return qy({text:()=>e,label:Ed})}function Rd(e){const t=e;let n=typeof t.role=="string"?t.role:"unknown";const s=typeof t.toolCallId=="string"||typeof t.tool_call_id=="string",i=t.content,o=Array.isArray(i)?i:null,a=Array.isArray(o)&&o.some(u=>{const m=u,h=(typeof m.type=="string"?m.type:"").toLowerCase();return h==="toolresult"||h==="tool_result"}),r=typeof t.toolName=="string"||typeof t.tool_name=="string";(s||a||r)&&(n="toolResult");let l=[];typeof t.content=="string"?l=[{type:"text",text:t.content}]:Array.isArray(t.content)?l=t.content.map(u=>({type:u.type||"text",text:u.text,name:u.name,args:u.args||u.arguments})):typeof t.text=="string"&&(l=[{type:"text",text:t.text}]);const d=typeof t.timestamp=="number"?t.timestamp:Date.now(),g=typeof t.id=="string"?t.id:void 0;return(n==="user"||n==="User")&&(l=l.map(u=>u.type==="text"&&typeof u.text=="string"?{...u,text:kc(u.text)}:u)),{role:n,content:l,timestamp:d,id:g}}function la(e){const t=e.toLowerCase();return e==="user"||e==="User"?e:e==="assistant"?"assistant":e==="system"?"system":t==="toolresult"||t==="tool_result"||t==="tool"||t==="function"?"tool":e}function Id(e){const t=e,n=typeof t.role=="string"?t.role.toLowerCase():"";return n==="toolresult"||n==="tool_result"}const Jy={emoji:"🧩",detailKeys:["command","path","url","targetUrl","targetId","ref","element","node","nodeId","id","requestId","to","channelId","guildId","userId","name","query","pattern","messageId"]},Vy={bash:{emoji:"🛠️",title:"Bash",detailKeys:["command"]},process:{emoji:"🧰",title:"Process",detailKeys:["sessionId"]},read:{emoji:"📖",title:"Read",detailKeys:["path"]},write:{emoji:"✍️",title:"Write",detailKeys:["path"]},edit:{emoji:"📝",title:"Edit",detailKeys:["path"]},attach:{emoji:"📎",title:"Attach",detailKeys:["path","url","fileName"]},browser:{emoji:"🌐",title:"Browser",actions:{status:{label:"status"},start:{label:"start"},stop:{label:"stop"},tabs:{label:"tabs"},open:{label:"open",detailKeys:["targetUrl"]},focus:{label:"focus",detailKeys:["targetId"]},close:{label:"close",detailKeys:["targetId"]},snapshot:{label:"snapshot",detailKeys:["targetUrl","targetId","ref","element","format"]},screenshot:{label:"screenshot",detailKeys:["targetUrl","targetId","ref","element"]},navigate:{label:"navigate",detailKeys:["targetUrl","targetId"]},console:{label:"console",detailKeys:["level","targetId"]},pdf:{label:"pdf",detailKeys:["targetId"]},upload:{label:"upload",detailKeys:["paths","ref","inputRef","element","targetId"]},dialog:{label:"dialog",detailKeys:["accept","promptText","targetId"]},act:{label:"act",detailKeys:["request.kind","request.ref","request.selector","request.text","request.value"]}}},canvas:{emoji:"🖼️",title:"Canvas",actions:{present:{label:"present",detailKeys:["target","node","nodeId"]},hide:{label:"hide",detailKeys:["node","nodeId"]},navigate:{label:"navigate",detailKeys:["url","node","nodeId"]},eval:{label:"eval",detailKeys:["javaScript","node","nodeId"]},snapshot:{label:"snapshot",detailKeys:["format","node","nodeId"]},a2ui_push:{label:"A2UI push",detailKeys:["jsonlPath","node","nodeId"]},a2ui_reset:{label:"A2UI reset",detailKeys:["node","nodeId"]}}},nodes:{emoji:"📱",title:"Nodes",actions:{status:{label:"status"},describe:{label:"describe",detailKeys:["node","nodeId"]},pending:{label:"pending"},approve:{label:"approve",detailKeys:["requestId"]},reject:{label:"reject",detailKeys:["requestId"]},notify:{label:"notify",detailKeys:["node","nodeId","title","body"]},camera_snap:{label:"camera snap",detailKeys:["node","nodeId","facing","deviceId"]},camera_list:{label:"camera list",detailKeys:["node","nodeId"]},camera_clip:{label:"camera clip",detailKeys:["node","nodeId","facing","duration","durationMs"]},screen_record:{label:"screen record",detailKeys:["node","nodeId","duration","durationMs","fps","screenIndex"]}}},cron:{emoji:"⏰",title:"Cron",actions:{status:{label:"status"},list:{label:"list"},add:{label:"add",detailKeys:["job.name","job.id","job.schedule","job.cron"]},update:{label:"update",detailKeys:["id"]},remove:{label:"remove",detailKeys:["id"]},run:{label:"run",detailKeys:["id"]},runs:{label:"runs",detailKeys:["id"]},wake:{label:"wake",detailKeys:["text","mode"]}}},gateway:{emoji:"🔌",title:"Gateway",actions:{restart:{label:"restart",detailKeys:["reason","delayMs"]}}},whatsapp_login:{emoji:"🟢",title:"WhatsApp Login",actions:{start:{label:"start"},wait:{label:"wait"}}},discord:{emoji:"💬",title:"Discord",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sticker:{label:"sticker",detailKeys:["to","stickerIds"]},poll:{label:"poll",detailKeys:["question","to"]},permissions:{label:"permissions",detailKeys:["channelId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},threadCreate:{label:"thread create",detailKeys:["channelId","name"]},threadList:{label:"thread list",detailKeys:["guildId","channelId"]},threadReply:{label:"thread reply",detailKeys:["channelId","content"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},searchMessages:{label:"search",detailKeys:["guildId","content"]},memberInfo:{label:"member",detailKeys:["guildId","userId"]},roleInfo:{label:"roles",detailKeys:["guildId"]},emojiList:{label:"emoji list",detailKeys:["guildId"]},roleAdd:{label:"role add",detailKeys:["guildId","userId","roleId"]},roleRemove:{label:"role remove",detailKeys:["guildId","userId","roleId"]},channelInfo:{label:"channel",detailKeys:["channelId"]},channelList:{label:"channels",detailKeys:["guildId"]},voiceStatus:{label:"voice",detailKeys:["guildId","userId"]},eventList:{label:"events",detailKeys:["guildId"]},eventCreate:{label:"event create",detailKeys:["guildId","name"]},timeout:{label:"timeout",detailKeys:["guildId","userId"]},kick:{label:"kick",detailKeys:["guildId","userId"]},ban:{label:"ban",detailKeys:["guildId","userId"]}}}},Qy={fallback:Jy,tools:Vy};function $n(e){return e&&typeof e=="object"?e:void 0}function Yy(e){return(e??"tool").trim()}function Zy(e){const t=e.replace(/_/g," ").trim();return t?t.split(/\s+/).map(n=>n.length<=2&&n.toUpperCase()===n?n:`${n.at(0)?.toUpperCase()??""}${n.slice(1)}`).join(" "):"Tool"}function Xy(e){const t=e?.trim();if(t)return t.replace(/_/g," ")}function e0(e){if(!e||typeof e!="object")return;const t=e.action;return typeof t!="string"?void 0:t.trim()||void 0}function ho(e,t={}){const n=t.maxStringChars??160,s=t.maxArrayEntries??3;if(e!=null){if(typeof e=="string"){const i=e.trim();if(!i)return;const o=i.split(/\r?\n/)[0]?.trim()??"";return o?o.length>n?`${o.slice(0,Math.max(0,n-3))}…`:o:void 0}if(typeof e=="boolean")return!e&&!t.includeFalse?void 0:e?"true":"false";if(typeof e=="number")return Number.isFinite(e)?e===0&&!t.includeZero?void 0:String(e):t.includeNonFinite?String(e):void 0;if(Array.isArray(e)){const i=e.map(a=>ho(a,t)).filter(a=>!!a);if(i.length===0)return;const o=i.slice(0,s).join(", ");return i.length>s?`${o}…`:o}}}function Vr(e,t){if(!e||typeof e!="object")return;let n=e;for(const s of t.split(".")){if(!s||!n||typeof n!="object")return;n=n[s]}return n}function Ld(e){const t=$n(e);if(t)for(const n of[t.path,t.file_path,t.filePath]){if(typeof n!="string")continue;const s=n.trim();if(s)return s}}function t0(e){const t=$n(e);if(!t)return;const n=Ld(t);if(!n)return;const s=typeof t.offset=="number"&&Number.isFinite(t.offset)?Math.floor(t.offset):void 0,i=typeof t.limit=="number"&&Number.isFinite(t.limit)?Math.floor(t.limit):void 0,o=s!==void 0?Math.max(1,s):void 0,a=i!==void 0?Math.max(1,i):void 0;return o!==void 0&&a!==void 0?`${a===1?"line":"lines"} ${o}-${o+a-1} from ${n}`:o!==void 0?`from line ${o} in ${n}`:a!==void 0?`first ${a} ${a===1?"line":"lines"} of ${n}`:`from ${n}`}function n0(e,t){const n=$n(t);if(!n)return;const s=Ld(n)??(typeof n.url=="string"?n.url.trim():void 0);if(!s)return;if(e==="attach")return`from ${s}`;const i=e==="edit"?"in":"to",o=typeof n.content=="string"?n.content:typeof n.newText=="string"?n.newText:typeof n.new_string=="string"?n.new_string:void 0;return o&&o.length>0?`${i} ${s} (${o.length} chars)`:`${i} ${s}`}function s0(e){const t=$n(e);if(!t)return;const n=typeof t.query=="string"?t.query.trim():void 0,s=typeof t.count=="number"&&Number.isFinite(t.count)&&t.count>0?Math.floor(t.count):void 0;if(n)return s!==void 0?`for "${n}" (top ${s})`:`for "${n}"`}function i0(e){const t=$n(e);if(!t)return;const n=typeof t.url=="string"?t.url.trim():void 0;if(!n)return;const s=typeof t.extractMode=="string"?t.extractMode.trim():void 0,i=typeof t.maxChars=="number"&&Number.isFinite(t.maxChars)&&t.maxChars>0?Math.floor(t.maxChars):void 0,o=[s?`mode ${s}`:void 0,i!==void 0?`max ${i} chars`:void 0].filter(a=>!!a).join(", ");return o?`from ${n} (${o})`:`from ${n}`}function ca(e){if(!e)return e;const t=e.trim();return t.length>=2&&(t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'"))?t.slice(1,-1).trim():t}function qt(e,t=48){if(!e)return[];const n=[];let s="",i,o=!1;for(let a=0;a<e.length;a+=1){const r=e[a];if(o){s+=r,o=!1;continue}if(r==="\\"){o=!0;continue}if(i){r===i?i=void 0:s+=r;continue}if(r==='"'||r==="'"){i=r;continue}if(/\s/.test(r)){if(!s)continue;if(n.push(s),n.length>=t)return n;s="";continue}s+=r}return s&&n.push(s),n}function xn(e){if(!e)return;const t=ca(e)??e;return(t.split(/[/]/).at(-1)??t).trim().toLowerCase()}function Pt(e,t){const n=new Set(t);for(let s=0;s<e.length;s+=1){const i=e[s];if(i){if(n.has(i)){const o=e[s+1];if(o&&!o.startsWith("-"))return o;continue}for(const o of t)if(o.startsWith("--")&&i.startsWith(`${o}=`))return i.slice(o.length+1)}}}function un(e,t=1,n=[]){const s=[],i=new Set(n);for(let o=t;o<e.length;o+=1){const a=e[o];if(a){if(a==="--"){for(let r=o+1;r<e.length;r+=1){const l=e[r];l&&s.push(l)}break}if(a.startsWith("--")){if(a.includes("="))continue;i.has(a)&&(o+=1);continue}if(a.startsWith("-")){i.has(a)&&(o+=1);continue}s.push(a)}}return s}function rt(e,t=1,n=[]){return un(e,t,n)[0]}function Fi(e){if(e.length===0)return e;let t=0;if(xn(e[0])==="env"){for(t=1;t<e.length;){const n=e[t];if(!n)break;if(n.startsWith("-")){t+=1;continue}if(/^[A-Za-z_][A-Za-z0-9_]*=/.test(n)){t+=1;continue}break}return e.slice(t)}for(;t<e.length&&/^[A-Za-z_][A-Za-z0-9_]*=/.test(e[t]);)t+=1;return e.slice(t)}function o0(e){const t=qt(e,10);if(t.length<3)return e;const n=xn(t[0]);if(!(n==="bash"||n==="sh"||n==="zsh"||n==="fish"))return e;const s=t.findIndex((o,a)=>a>0&&(o==="-c"||o==="-lc"||o==="-ic"));if(s===-1)return e;const i=t.slice(s+1).join(" ").trim();return i?ca(i)??e:e}function da(e,t){let n,s=!1;for(let i=0;i<e.length;i+=1){const o=e[i];if(s){s=!1;continue}if(o==="\\"){s=!0;continue}if(n){o===n&&(n=void 0);continue}if(o==='"'||o==="'"){n=o;continue}if(t(o,i)===!1)return}}function a0(e){const t=[];let n=0;return da(e,(s,i)=>s===";"?(t.push(e.slice(n,i)),n=i+1,!0):((s==="&"||s==="|")&&e[i+1]===s&&(t.push(e.slice(n,i)),n=i+2),!0)),t.push(e.slice(n)),t.map(s=>s.trim()).filter(s=>s.length>0)}function r0(e){const t=[];let n=0;return da(e,(s,i)=>(s==="|"&&e[i-1]!=="|"&&e[i+1]!=="|"&&(t.push(e.slice(n,i)),n=i+1),!0)),t.push(e.slice(n)),t.map(s=>s.trim()).filter(s=>s.length>0)}function l0(e){const t=qt(e,3),n=xn(t[0]);if(n==="cd"||n==="pushd")return t[1]||void 0}function c0(e){const t=xn(qt(e,2)[0]);return t==="cd"||t==="pushd"||t==="popd"}function d0(e){return xn(qt(e,2)[0])==="popd"}function u0(e){let t=e.trim(),n;for(let s=0;s<4;s+=1){let i;da(t,(l,d)=>{if(l==="&"&&t[d+1]==="&")return i={index:d,length:2},!1;if(l==="|"&&t[d+1]==="|")return i={index:d,length:2,isOr:!0},!1;if(l===";"||l===`
`)return i={index:d,length:1},!1});const o=(i?t.slice(0,i.index):t).trim(),a=(i?!i.isOr:s>0)&&c0(o);if(!(o.startsWith("set ")||o.startsWith("export ")||o.startsWith("unset ")||a)||(a&&(d0(o)?n=void 0:n=l0(o)??n),t=i?t.slice(i.index+i.length).trimStart():"",!t))break}return{command:t.trim(),chdirPath:n}}function Pi(e){if(e.length===0)return"run command";const t=xn(e[0])??"command";if(t==="git"){const s=new Set(["-C","-c","--git-dir","--work-tree","--namespace","--config-env"]),i=Pt(e,["-C"]);let o;for(let r=1;r<e.length;r+=1){const l=e[r];if(l){if(l==="--"){o=rt(e,r+1);break}if(l.startsWith("--")){if(l.includes("="))continue;s.has(l)&&(r+=1);continue}if(l.startsWith("-")){s.has(l)&&(r+=1);continue}o=l;break}}const a={status:"check git status",diff:"check git diff",log:"view git history",show:"show git object",branch:"list git branches",checkout:"switch git branch",switch:"switch git branch",commit:"create git commit",pull:"pull git changes",push:"push git changes",fetch:"fetch git changes",merge:"merge git changes",rebase:"rebase git branch",add:"stage git changes",restore:"restore git files",reset:"reset git state",stash:"stash git changes"};return o&&a[o]?a[o]:!o||o.startsWith("/")||o.startsWith("~")||o.includes("/")?i?`run git command in ${i}`:"run git command":`run git ${o}`}if(t==="grep"||t==="rg"||t==="ripgrep"){const s=un(e,1,["-e","--regexp","-f","--file","-m","--max-count","-A","--after-context","-B","--before-context","-C","--context"]),i=Pt(e,["-e","--regexp"])??s[0],o=s.length>1?s.at(-1):void 0;return i?o?`search "${i}" in ${o}`:`search "${i}"`:"search text"}if(t==="find"){const s=e[1]&&!e[1].startsWith("-")?e[1]:".",i=Pt(e,["-name","-iname"]);return i?`find files named "${i}" in ${s}`:`find files in ${s}`}if(t==="ls"){const s=rt(e,1);return s?`list files in ${s}`:"list files"}if(t==="head"||t==="tail"){const s=Pt(e,["-n","--lines"])??e.slice(1).find(l=>/^-\d+$/.test(l))?.slice(1),i=un(e,1,["-n","--lines"]);let o=i.at(-1);o&&/^\d+$/.test(o)&&i.length===1&&(o=void 0);const a=t==="head"?"first":"last",r=s==="1"?"line":"lines";return s&&o?`show ${a} ${s} ${r} of ${o}`:s?`show ${a} ${s} ${r}`:o?`show ${o}`:`show ${t} output`}if(t==="cat"){const s=rt(e,1);return s?`show ${s}`:"show output"}if(t==="sed"){const s=Pt(e,["-e","--expression"]),i=un(e,1,["-e","--expression","-f","--file"]),o=s??i[0],a=s?i[0]:i[1];if(o){const r=(ca(o)??o).replace(/\s+/g,""),l=r.match(/^([0-9]+),([0-9]+)p$/);if(l)return a?`print lines ${l[1]}-${l[2]} from ${a}`:`print lines ${l[1]}-${l[2]}`;const d=r.match(/^([0-9]+)p$/);if(d)return a?`print line ${d[1]} from ${a}`:`print line ${d[1]}`}return a?`run sed on ${a}`:"run sed transform"}if(t==="printf"||t==="echo")return"print text";if(t==="cp"||t==="mv"){const s=un(e,1,["-t","--target-directory","-S","--suffix"]),i=s[0],o=s[1],a=t==="cp"?"copy":"move";return i&&o?`${a} ${i} to ${o}`:i?`${a} ${i}`:`${a} files`}if(t==="rm"){const s=rt(e,1);return s?`remove ${s}`:"remove files"}if(t==="mkdir"){const s=rt(e,1);return s?`create folder ${s}`:"create folder"}if(t==="touch"){const s=rt(e,1);return s?`create file ${s}`:"create file"}if(t==="curl"||t==="wget"){const s=e.find(i=>/^https?:\/\//i.test(i));return s?`fetch ${s}`:"fetch url"}if(t==="npm"||t==="pnpm"||t==="yarn"||t==="bun"){const s=un(e,1,["--prefix","-C","--cwd","--config"]),i=s[0]??"command";return{install:"install dependencies",test:"run tests",build:"run build",start:"start app",lint:"run lint",run:s[1]?`run ${s[1]}`:"run script"}[i]??`run ${t} ${i}`}if(t==="node"||t==="python"||t==="python3"||t==="ruby"||t==="php"){if(e.slice(1).find(l=>l.startsWith("<<")))return`run ${t} inline script (heredoc)`;if((t==="node"?Pt(e,["-e","--eval"]):t==="python"||t==="python3"?Pt(e,["-c"]):void 0)!==void 0)return`run ${t} inline script`;const r=rt(e,1,t==="node"?["-e","--eval","-m"]:["-c","-e","--eval","-m"]);return r?t==="node"?`${e.includes("--check")||e.includes("-c")?"check js syntax for":"run node script"} ${r}`:`run ${t} ${r}`:`run ${t}`}if(t==="openclaw"){const s=rt(e,1);return s?`run openclaw ${s}`:"run openclaw"}const n=rt(e,1);return!n||n.length>48?`run ${t}`:/^[A-Za-z0-9._/-]+$/.test(n)?`run ${t} ${n}`:`run ${t}`}function g0(e){const t=r0(e);if(t.length>1){const n=Pi(Fi(qt(t[0]))),s=Pi(Fi(qt(t[t.length-1]))),i=t.length>2?` (+${t.length-2} steps)`:"";return`${n} -> ${s}${i}`}return Pi(Fi(qt(e)))}function Qr(e){const{command:t,chdirPath:n}=u0(e);if(!t)return n?{text:"",chdirPath:n}:void 0;const s=a0(t);if(s.length===0)return;const i=s.map(r=>g0(r)),o=i.length===1?i[0]:i.join(" → "),a=i.every(r=>Md(r));return{text:o,chdirPath:n,allGeneric:a}}const p0=["check git","view git","show git","list git","switch git","create git","pull git","push git","fetch git","merge git","rebase git","stage git","restore git","reset git","stash git","search ","find files","list files","show first","show last","print line","print text","copy ","move ","remove ","create folder","create file","fetch http","install dependencies","run tests","run build","start app","run lint","run openclaw","run node script","run node ","run python","run ruby","run php","run sed","run git ","run npm ","run pnpm ","run yarn ","run bun ","check js syntax"];function Md(e){return e==="run command"?!0:e.startsWith("run ")?!p0.some(t=>e.startsWith(t)):!1}function f0(e,t=120){const n=e.replace(/\s*\n\s*/g," ").replace(/\s{2,}/g," ").trim();return n.length<=t?n:`${n.slice(0,Math.max(0,t-1))}…`}function h0(e){const t=$n(e);if(!t)return;const n=typeof t.command=="string"?t.command.trim():void 0;if(!n)return;const s=o0(n),i=Qr(s)??Qr(n),o=i?.text||"run command",r=(typeof t.workdir=="string"?t.workdir:typeof t.cwd=="string"?t.cwd:void 0)?.trim()||i?.chdirPath||void 0,l=f0(s);if(i?.allGeneric!==!1&&Md(o))return r?`${l} (in ${r})`:l;const d=r?`${o} (in ${r})`:o;return l&&l!==d&&l!==o?`${d}

\`${l}\``:d}function m0(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function v0(e,t,n){if(n.mode==="first"){for(const a of t){const r=Vr(e,a),l=ho(r,n.coerce);if(l)return l}return}const s=[];for(const a of t){const r=Vr(e,a),l=ho(r,n.coerce);l&&s.push({label:n.formatKey?n.formatKey(a):a,value:l})}if(s.length===0)return;if(s.length===1)return s[0].value;const i=new Set,o=[];for(const a of s){const r=`${a.label}:${a.value}`;i.has(r)||(i.add(r),o.push(a))}if(o.length!==0)return o.slice(0,n.maxEntries??8).map(a=>`${a.label} ${a.value}`).join(" · ")}function b0(e){const t=m0(e.spec,e.action),n=e.toolKey==="web_search"?"search":e.toolKey==="web_fetch"?"fetch":e.toolKey.replace(/_/g," ").replace(/\./g," "),s=Xy(t?.label??e.action??n);let i;e.toolKey==="exec"&&(i=h0(e.args)),!i&&e.toolKey==="read"&&(i=t0(e.args)),!i&&(e.toolKey==="write"||e.toolKey==="edit"||e.toolKey==="attach")&&(i=n0(e.toolKey,e.args)),!i&&e.toolKey==="web_search"&&(i=s0(e.args)),!i&&e.toolKey==="web_fetch"&&(i=i0(e.args));const o=t?.detailKeys??e.spec?.detailKeys??e.fallbackDetailKeys??[];return!i&&o.length>0&&(i=v0(e.args,o,{mode:e.detailMode,coerce:e.detailCoerce,maxEntries:e.detailMaxEntries,formatKey:e.detailFormatKey})),!i&&e.meta&&(i=e.meta),{verb:s,detail:i}}function y0(e,t={}){if(!e)return;const n=e.includes(" · ")?e.split(" · ").map(s=>s.trim()).filter(s=>s.length>0).join(", "):e;if(n)return t.prefixWithWith?`with ${n}`:n}const $0={"🧩":"puzzle","🛠️":"wrench","🧰":"wrench","📖":"fileText","✍️":"edit","📝":"penLine","📎":"paperclip","🌐":"globe","📺":"monitor","🧾":"fileText","🔐":"settings","💻":"monitor","🔌":"plug","💬":"messageSquare"},x0={icon:"messageSquare",title:"Slack",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},memberInfo:{label:"member",detailKeys:["userId"]},emojiList:{label:"emoji list"}}};function w0(e){return e?$0[e]??"puzzle":"puzzle"}function Dd(e){return{icon:w0(e?.emoji),title:e?.title,label:e?.label,detailKeys:e?.detailKeys,actions:e?.actions}}const Fd=Qy,Yr=Dd(Fd.fallback??{emoji:"🧩"}),Pd=Object.fromEntries(Object.entries(Fd.tools??{}).map(([e,t])=>[e,Dd(t)]));Pd.slack=x0;function S0(e){if(!e)return e;const t=[{re:/^\/Users\/[^/]+(\/|$)/,replacement:"~$1"},{re:/^\/home\/[^/]+(\/|$)/,replacement:"~$1"},{re:/^C:\\Users\\[^\\]+(\\|$)/i,replacement:"~$1"}];for(const n of t)if(n.re.test(e))return e.replace(n.re,n.replacement);return e}function k0(e){const t=Yy(e.name),n=t.toLowerCase(),s=Pd[n],i=s?.icon??Yr.icon??"puzzle",o=s?.title??Zy(t),a=s?.label??o,r=e0(e.args);let{verb:l,detail:d}=b0({toolKey:n,args:e.args,meta:e.meta,action:r,spec:s,fallbackDetailKeys:Yr.detailKeys,detailMode:"first",detailCoerce:{includeFalse:!0,includeZero:!0}});return d&&(d=S0(d)),{name:t,icon:i,title:o,label:a,verb:l,detail:d}}function A0(e){return y0(e.detail,{prefixWithWith:!0})}const C0=80,T0=2,Zr=100;function _0(e){const t=e.trim();if(t.startsWith("{")||t.startsWith("["))try{const n=JSON.parse(t);return"```json\n"+JSON.stringify(n,null,2)+"\n```"}catch{}return e}function E0(e){const t=e.split(`
`),n=t.slice(0,T0),s=n.join(`
`);return s.length>Zr?s.slice(0,Zr)+"…":n.length<t.length?s+"…":s}function R0(e){const t=e,n=I0(t.content),s=[];for(const i of n){const o=(typeof i.type=="string"?i.type:"").toLowerCase();(["toolcall","tool_call","tooluse","tool_use"].includes(o)||typeof i.name=="string"&&i.arguments!=null)&&s.push({kind:"call",name:i.name??"tool",args:L0(i.arguments??i.args)})}for(const i of n){const o=(typeof i.type=="string"?i.type:"").toLowerCase();if(o!=="toolresult"&&o!=="tool_result")continue;const a=M0(i),r=typeof i.name=="string"?i.name:"tool";s.push({kind:"result",name:r,text:a})}if(Id(e)&&!s.some(i=>i.kind==="result")){const i=typeof t.toolName=="string"&&t.toolName||typeof t.tool_name=="string"&&t.tool_name||"tool",o=Ac(e)??void 0;s.push({kind:"result",name:i,text:o})}return s}function Xr(e,t){const n=k0({name:e.name,args:e.args}),s=A0(n),i=!!e.text?.trim(),o=!!t,a=o?()=>{if(i){t(_0(e.text));return}const u=`## ${n.label}

${s?`**Command:** \`${s}\`

`:""}*No output — tool completed successfully.*`;t(u)}:void 0,r=i&&(e.text?.length??0)<=C0,l=i&&!r,d=i&&r,g=!i;return c`
    <div
      class="chat-tool-card ${o?"chat-tool-card--clickable":""}"
      @click=${a}
      role=${o?"button":f}
      tabindex=${o?"0":f}
      @keydown=${o?u=>{u.key!=="Enter"&&u.key!==" "||(u.preventDefault(),a?.())}:f}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${he[n.icon]}</span>
          <span>${n.label}</span>
        </div>
        ${o?c`<span class="chat-tool-card__action">${i?"View":""} ${he.check}</span>`:f}
        ${g&&!o?c`<span class="chat-tool-card__status">${he.check}</span>`:f}
      </div>
      ${s?c`<div class="chat-tool-card__detail">${s}</div>`:f}
      ${g?c`
              <div class="chat-tool-card__status-text muted">Completed</div>
            `:f}
      ${l?c`<div class="chat-tool-card__preview mono">${E0(e.text)}</div>`:f}
      ${d?c`<div class="chat-tool-card__inline mono">${e.text}</div>`:f}
    </div>
  `}function I0(e){return Array.isArray(e)?e.filter(Boolean):[]}function L0(e){if(typeof e!="string")return e;const t=e.trim();if(!t||!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function M0(e){if(typeof e.text=="string")return e.text;if(typeof e.content=="string")return e.content}function D0(e){const n=e.content,s=[];if(Array.isArray(n))for(const i of n){if(typeof i!="object"||i===null)continue;const o=i;if(o.type==="image"){const a=o.source;if(a?.type==="base64"&&typeof a.data=="string"){const r=a.data,l=a.media_type||"image/png",d=r.startsWith("data:")?r:`data:${l};base64,${r}`;s.push({url:d})}else typeof o.url=="string"&&s.push({url:o.url})}else if(o.type==="image_url"){const a=o.image_url;typeof a?.url=="string"&&s.push({url:a.url})}}return s}function F0(e){return c`
    <div class="chat-group assistant">
      ${ua("assistant",e)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function P0(e,t,n,s){const i=new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),o=s?.name??"Assistant";return c`
    <div class="chat-group assistant">
      ${ua("assistant",s)}
      <div class="chat-group-messages">
        ${Nd({role:"assistant",content:[{type:"text",text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${o}</span>
          <span class="chat-group-timestamp">${i}</span>
        </div>
      </div>
    </div>
  `}function N0(e,t){const n=la(e.role),s=t.assistantName??"Assistant",i=n==="user"?"You":n==="assistant"?s:n,o=n==="user"?"user":n==="assistant"?"assistant":"other",a=new Date(e.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return c`
    <div class="chat-group ${o}">
      ${ua(e.role,{name:s,avatar:t.assistantAvatar??null})}
      <div class="chat-group-messages">
        ${e.messages.map((r,l)=>Nd(r.message,{isStreaming:e.isStreaming&&l===e.messages.length-1,showReasoning:t.showReasoning},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${i}</span>
          <span class="chat-group-timestamp">${a}</span>
        </div>
      </div>
    </div>
  `}function ua(e,t){const n=la(e),s=t?.name?.trim()||"Assistant",i=t?.avatar?.trim()||"",o=n==="user"?"U":n==="assistant"?s.charAt(0).toUpperCase()||"A":n==="tool"?"⚙":"?",a=n==="user"?"user":n==="assistant"?"assistant":n==="tool"?"tool":"other";return i&&n==="assistant"?O0(i)?c`<img
        class="chat-avatar ${a}"
        src="${i}"
        alt="${s}"
      />`:c`<div class="chat-avatar ${a}">${i}</div>`:c`<div class="chat-avatar ${a}">${o}</div>`}function O0(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||e.startsWith("/")}function U0(e){if(e.length===0)return f;const t=n=>{Uy(n,{allowDataImage:!0})};return c`
    <div class="chat-message-images">
      ${e.map(n=>c`
          <img
            src=${n.url}
            alt=${n.alt??"Attached image"}
            class="chat-message-image"
            @click=${()=>t(n.url)}
          />
        `)}
    </div>
  `}function Nd(e,t,n){const s=e,i=typeof s.role=="string"?s.role:"unknown",o=Id(e)||i.toLowerCase()==="toolresult"||i.toLowerCase()==="tool_result"||typeof s.toolCallId=="string"||typeof s.tool_call_id=="string",a=R0(e),r=a.length>0,l=D0(e),d=l.length>0,g=Ac(e),u=t.showReasoning&&i==="assistant"?mf(e):null,m=g?.trim()?g:null,h=u?vf(u):null,b=m,y=i==="assistant"&&!!b?.trim(),_=["chat-bubble",y?"has-copy":"",t.isStreaming?"streaming":"","fade-in"].filter(Boolean).join(" ");return!b&&r&&o?c`${a.map(L=>Xr(L,n))}`:!b&&!r&&!d?f:c`
    <div class="${_}">
      ${y?Gy(b):f}
      ${U0(l)}
      ${h?c`<div class="chat-thinking">${oo(fo(h))}</div>`:f}
      ${b?c`<div class="chat-text" dir="${_d(b)}">${oo(fo(b))}</div>`:f}
      ${a.map(L=>Xr(L,n))}
    </div>
  `}function B0(e){return c`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${he.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?c`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?c`<div class="sidebar-markdown">${oo(fo(e.content))}</div>`:c`
                  <div class="muted">No content available</div>
                `}
      </div>
    </div>
  `}var H0=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,si=(e,t,n,s)=>{for(var i=s>1?void 0:s?z0(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,n,i):a(i))||i);return s&&i&&H0(t,n,i),i};let bn=class extends pn{constructor(){super(...arguments),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add("dragging"),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;const t=this.parentElement;if(!t)return;const n=t.getBoundingClientRect().width,i=(e.clientX-this.startX)/n;let o=this.startRatio+i;o=Math.max(this.minRatio,Math.min(this.maxRatio,o)),this.dispatchEvent(new CustomEvent("resize",{detail:{splitRatio:o},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove("dragging"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}}render(){return f}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}};bn.styles=Qd`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `;si([zs({type:Number})],bn.prototype,"splitRatio",2);si([zs({type:Number})],bn.prototype,"minRatio",2);si([zs({type:Number})],bn.prototype,"maxRatio",2);bn=si([Sl("resizable-divider")],bn);const j0=5e3,K0=8e3;function el(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}function W0(e){return e?e.active?c`
      <div class="compaction-indicator compaction-indicator--active" role="status" aria-live="polite">
        ${he.loader} Compacting context...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<j0?c`
        <div class="compaction-indicator compaction-indicator--complete" role="status" aria-live="polite">
          ${he.check} Context compacted
        </div>
      `:f:f}function q0(e){if(!e)return f;const t=e.phase??"active";if(Date.now()-e.occurredAt>=K0)return f;const s=[`Selected: ${e.selected}`,t==="cleared"?`Active: ${e.selected}`:`Active: ${e.active}`,t==="cleared"&&e.previous?`Previous fallback: ${e.previous}`:null,e.reason?`Reason: ${e.reason}`:null,e.attempts.length>0?`Attempts: ${e.attempts.slice(0,3).join(" | ")}`:null].filter(Boolean).join(" • "),i=t==="cleared"?`Fallback cleared: ${e.selected}`:`Fallback active: ${e.active}`,o=t==="cleared"?"compaction-indicator compaction-indicator--fallback-cleared":"compaction-indicator compaction-indicator--fallback",a=t==="cleared"?he.check:he.brain;return c`
    <div
      class=${o}
      role="status"
      aria-live="polite"
      title=${s}
    >
      ${a} ${i}
    </div>
  `}function G0(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function J0(e,t){const n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;const s=[];for(let i=0;i<n.length;i++){const o=n[i];o.type.startsWith("image/")&&s.push(o)}if(s.length!==0){e.preventDefault();for(const i of s){const o=i.getAsFile();if(!o)continue;const a=new FileReader;a.addEventListener("load",()=>{const r=a.result,l={id:G0(),dataUrl:r,mimeType:o.type},d=t.attachments??[];t.onAttachmentsChange?.([...d,l])}),a.readAsDataURL(o)}}}function V0(e){const t=e.attachments??[];return t.length===0?f:c`
    <div class="chat-attachments">
      ${t.map(n=>c`
          <div class="chat-attachment">
            <img
              src=${n.dataUrl}
              alt="Attachment preview"
              class="chat-attachment__img"
            />
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="Remove attachment"
              @click=${()=>{const s=(e.attachments??[]).filter(i=>i.id!==n.id);e.onAttachmentsChange?.(s)}}
            >
              ${he.x}
            </button>
          </div>
        `)}
    </div>
  `}function Q0(e){const t=e.connected,n=e.sending||e.stream!==null,s=!!(e.canAbort&&e.onAbort),o=e.sessions?.sessions?.find(h=>h.key===e.sessionKey)?.reasoningLevel??"off",a=e.showThinking&&o!=="off",r={name:e.assistantName,avatar:e.assistantAvatar??e.assistantAvatarUrl??null},l=(e.attachments?.length??0)>0,d=e.connected?l?"Add a message or paste more images...":"Message (↩ to send, Shift+↩ for line breaks, paste images)":"Connect to the gateway to start chatting…",g=e.splitRatio??.6,u=!!(e.sidebarOpen&&e.onCloseSidebar),m=c`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
    >
      ${e.loading?c`
              <div class="muted">Loading chat…</div>
            `:f}
      ${qc(Z0(e),h=>h.key,h=>h.kind==="divider"?c`
              <div class="chat-divider" role="separator" data-ts=${String(h.timestamp)}>
                <span class="chat-divider__line"></span>
                <span class="chat-divider__label">${h.label}</span>
                <span class="chat-divider__line"></span>
              </div>
            `:h.kind==="reading-indicator"?F0(r):h.kind==="stream"?P0(h.text,h.startedAt,e.onOpenSidebar,r):h.kind==="group"?N0(h,{onOpenSidebar:e.onOpenSidebar,showReasoning:a,assistantName:e.assistantName,assistantAvatar:r.avatar}):f)}
    </div>
  `;return c`
    <section class="card chat">
      ${e.disabledReason?c`<div class="callout">${e.disabledReason}</div>`:f}

      ${e.error?c`<div class="callout danger">${e.error}</div>`:f}

      ${e.focusMode?c`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${he.x}
            </button>
          `:f}

      <div
        class="chat-split-container ${u?"chat-split-container--open":""}"
      >
        <div
          class="chat-main"
          style="flex: ${u?`0 0 ${g*100}%`:"1 1 100%"}"
        >
          ${m}
        </div>

        ${u?c`
              <resizable-divider
                .splitRatio=${g}
                @resize=${h=>e.onSplitRatioChange?.(h.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${B0({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`
${e.sidebarContent}
\`\`\``)}})}
              </div>
            `:f}
      </div>

      ${e.queue.length?c`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${e.queue.length})</div>
              <div class="chat-queue__list">
                ${e.queue.map(h=>c`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${h.text||(h.attachments?.length?`Image (${h.attachments.length})`:"")}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${()=>e.onQueueRemove(h.id)}
                      >
                        ${he.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:f}

      ${q0(e.fallbackStatus)}
      ${W0(e.compactionStatus)}

      ${e.showNewMessages?c`
            <button
              class="btn chat-new-messages"
              type="button"
              @click=${e.onScrollToBottom}
            >
              New messages ${he.arrowDown}
            </button>
          `:f}

      <div class="chat-compose">
        ${V0(e)}
        <div class="chat-compose__row">
          <label class="field chat-compose__field">
            <span>Message</span>
            <textarea
              ${vb(h=>h&&el(h))}
              .value=${e.draft}
              dir=${_d(e.draft)}
              ?disabled=${!e.connected}
              @keydown=${h=>{h.key==="Enter"&&(h.isComposing||h.keyCode===229||h.shiftKey||e.connected&&(h.preventDefault(),t&&e.onSend()))}}
              @input=${h=>{const b=h.target;el(b),e.onDraftChange(b.value)}}
              @paste=${h=>J0(h,e)}
              placeholder=${d}
            ></textarea>
          </label>
          <div class="chat-compose__actions">
            <button
              class="btn"
              ?disabled=${!e.connected||!s&&e.sending}
              @click=${s?e.onAbort:e.onNewSession}
            >
              ${s?"Stop":"New session"}
            </button>
            <button
              class="btn primary"
              ?disabled=${!e.connected}
              @click=${e.onSend}
            >
              ${n?"Queue":"Send"}<kbd class="btn-kbd">↵</kbd>
            </button>
          </div>
        </div>
      </div>
    </section>
  `}const tl=200;function Y0(e){const t=[];let n=null;for(const s of e){if(s.kind!=="message"){n&&(t.push(n),n=null),t.push(s);continue}const i=Rd(s.message),o=la(i.role),a=i.timestamp||Date.now();!n||n.role!==o?(n&&t.push(n),n={kind:"group",key:`group:${o}:${s.key}`,role:o,messages:[{message:s.message,key:s.key}],timestamp:a,isStreaming:!1}):n.messages.push({message:s.message,key:s.key})}return n&&t.push(n),t}function Z0(e){const t=[],n=Array.isArray(e.messages)?e.messages:[],s=Array.isArray(e.toolMessages)?e.toolMessages:[],i=Math.max(0,n.length-tl);i>0&&t.push({kind:"message",key:"chat:history:notice",message:{role:"system",content:`Showing last ${tl} messages (${i} hidden).`,timestamp:Date.now()}});for(let o=i;o<n.length;o++){const a=n[o],r=Rd(a),d=a.__openclaw;if(d&&d.kind==="compaction"){t.push({kind:"divider",key:typeof d.id=="string"?`divider:compaction:${d.id}`:`divider:compaction:${r.timestamp}:${o}`,label:"Compaction",timestamp:r.timestamp??Date.now()});continue}!e.showThinking&&r.role.toLowerCase()==="toolresult"||t.push({kind:"message",key:nl(a,o),message:a})}if(e.showThinking)for(let o=0;o<s.length;o++)t.push({kind:"message",key:nl(s[o],o+n.length),message:s[o]});if(e.stream!==null){const o=`stream:${e.sessionKey}:${e.streamStartedAt??"live"}`;e.stream.trim().length>0?t.push({kind:"stream",key:o,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:"reading-indicator",key:o})}return Y0(t)}function nl(e,t){const n=e,s=typeof n.toolCallId=="string"?n.toolCallId:"";if(s)return`tool:${s}`;const i=typeof n.id=="string"?n.id:"";if(i)return`msg:${i}`;const o=typeof n.messageId=="string"?n.messageId:"";if(o)return`msg:${o}`;const a=typeof n.timestamp=="number"?n.timestamp:null,r=typeof n.role=="string"?n.role:"unknown";return a!=null?`msg:${r}:${a}:${t}`:`msg:${r}:${t}`}function Od(e){return e.trim().toLowerCase()}function X0(e){const t=new Set,n=[],s=/(^|\s)tag:([^\s]+)/gi,i=e.trim();let o=s.exec(i);for(;o;){const a=Od(o[2]??"");a&&!t.has(a)&&(t.add(a),n.push(a)),o=s.exec(i)}return n}function e$(e,t){const n=[],s=new Set;for(const r of t){const l=Od(r);!l||s.has(l)||(s.add(l),n.push(l))}const o=e.trim().replace(/(^|\s)tag:([^\s]+)/gi," ").replace(/\s+/g," ").trim(),a=n.map(r=>`tag:${r}`).join(" ");return o&&a?`${o} ${a}`:o||a}const t$=["security","auth","network","access","privacy","observability","performance","reliability","storage","models","media","automation","channels","tools","advanced"],mo={all:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  `,env:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},sl=[{key:"env",label:"Environment"},{key:"update",label:"Updates"},{key:"agents",label:"Agents"},{key:"auth",label:"Authentication"},{key:"channels",label:"Channels"},{key:"messages",label:"Messages"},{key:"commands",label:"Commands"},{key:"hooks",label:"Hooks"},{key:"skills",label:"Skills"},{key:"tools",label:"Tools"},{key:"gateway",label:"Gateway"},{key:"wizard",label:"Setup Wizard"}],il="__all__";function ol(e){return mo[e]??mo.default}function n$(e,t){const n=Zo[e];return n||{label:t?.title??js(e),description:t?.description??""}}function s$(e){const{key:t,schema:n,uiHints:s}=e;if(!n||Re(n)!=="object"||!n.properties)return[];const i=Object.entries(n.properties).map(([o,a])=>{const r=$t([t,o],s),l=r?.label??a.title??js(o),d=r?.help??a.description??"",g=r?.order??50;return{key:o,label:l,description:d,order:g}});return i.sort((o,a)=>o.order!==a.order?o.order-a.order:o.key.localeCompare(a.key)),i}function i$(e,t){if(!e||!t)return[];const n=[];function s(i,o,a){if(i===o)return;if(typeof i!=typeof o){n.push({path:a,from:i,to:o});return}if(typeof i!="object"||i===null||o===null){i!==o&&n.push({path:a,from:i,to:o});return}if(Array.isArray(i)&&Array.isArray(o)){JSON.stringify(i)!==JSON.stringify(o)&&n.push({path:a,from:i,to:o});return}const r=i,l=o,d=new Set([...Object.keys(r),...Object.keys(l)]);for(const g of d)s(r[g],l[g],a?`${a}.${g}`:g)}return s(e,t,""),n}function al(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+"..."}function o$(e){const t=e.valid==null?"unknown":e.valid?"valid":"invalid",n=ad(e.schema),s=n.schema?n.unsupportedPaths.length>0:!1,i=n.schema?.properties??{},o=sl.filter(I=>I.key in i),a=new Set(sl.map(I=>I.key)),r=Object.keys(i).filter(I=>!a.has(I)).map(I=>({key:I,label:I.charAt(0).toUpperCase()+I.slice(1)})),l=[...o,...r],d=e.activeSection&&n.schema&&Re(n.schema)==="object"?n.schema.properties?.[e.activeSection]:void 0,g=e.activeSection?n$(e.activeSection,d):null,u=e.activeSection?s$({key:e.activeSection,schema:d,uiHints:e.uiHints}):[],m=e.formMode==="form"&&!!e.activeSection&&u.length>0,h=e.activeSubsection===il,b=e.searchQuery||h?null:e.activeSubsection??u[0]?.key??null,y=e.formMode==="form"?i$(e.originalValue,e.formValue):[],_=e.formMode==="raw"&&e.raw!==e.originalRaw,L=e.formMode==="form"?y.length>0:_,R=!!e.formValue&&!e.loading&&!!n.schema,A=e.connected&&!e.saving&&L&&(e.formMode==="raw"?!0:R),S=e.connected&&!e.applying&&!e.updating&&L&&(e.formMode==="raw"?!0:R),D=e.connected&&!e.applying&&!e.updating,T=new Set(X0(e.searchQuery));return c`
    <div class="config-layout">
      <!-- Sidebar -->
      <aside class="config-sidebar">
        <div class="config-sidebar__header">
          <div class="config-sidebar__title">Settings</div>
          <span
            class="pill pill--sm ${t==="valid"?"pill--ok":t==="invalid"?"pill--danger":""}"
            >${t}</span
          >
        </div>

        <!-- Search -->
        <div class="config-search">
          <div class="config-search__input-row">
            <svg
              class="config-search__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              class="config-search__input"
              placeholder="Search settings..."
              .value=${e.searchQuery}
              @input=${I=>e.onSearchChange(I.target.value)}
            />
            ${e.searchQuery?c`
                  <button
                    class="config-search__clear"
                    @click=${()=>e.onSearchChange("")}
                  >
                    ×
                  </button>
                `:f}
          </div>
          <div class="config-search__hint">
            <span class="config-search__hint-label" id="config-tag-filter-label">Tag filters:</span>
            <details class="config-search__tag-picker">
              <summary class="config-search__tag-trigger" aria-labelledby="config-tag-filter-label">
                ${T.size===0?c`
                        <span class="config-search__tag-placeholder">Add tags</span>
                      `:c`
                        <div class="config-search__tag-chips">
                          ${Array.from(T).slice(0,2).map(I=>c`<span class="config-search__tag-chip">tag:${I}</span>`)}
                          ${T.size>2?c`
                                  <span class="config-search__tag-chip config-search__tag-chip--count"
                                    >+${T.size-2}</span
                                  >
                                `:f}
                        </div>
                      `}
                <span class="config-search__tag-caret" aria-hidden="true">▾</span>
              </summary>
              <div class="config-search__tag-menu">
                ${t$.map(I=>{const v=T.has(I);return c`
                    <button
                      type="button"
                      class="config-search__tag-option ${v?"active":""}"
                      data-tag="${I}"
                      aria-pressed=${v?"true":"false"}
                      @click=${()=>{const E=v?Array.from(T).filter(U=>U!==I):[...T,I];e.onSearchChange(e$(e.searchQuery,E))}}
                    >
                      tag:${I}
                    </button>
                  `})}
              </div>
            </details>
          </div>
        </div>

        <!-- Section nav -->
        <nav class="config-nav">
          <button
            class="config-nav__item ${e.activeSection===null?"active":""}"
            @click=${()=>e.onSectionChange(null)}
          >
            <span class="config-nav__icon">${mo.all}</span>
            <span class="config-nav__label">All Settings</span>
          </button>
          ${l.map(I=>c`
              <button
                class="config-nav__item ${e.activeSection===I.key?"active":""}"
                @click=${()=>e.onSectionChange(I.key)}
              >
                <span class="config-nav__icon"
                  >${ol(I.key)}</span
                >
                <span class="config-nav__label">${I.label}</span>
              </button>
            `)}
        </nav>

        <!-- Mode toggle at bottom -->
        <div class="config-sidebar__footer">
          <div class="config-mode-toggle">
            <button
              class="config-mode-toggle__btn ${e.formMode==="form"?"active":""}"
              ?disabled=${e.schemaLoading||!e.schema}
              @click=${()=>e.onFormModeChange("form")}
            >
              Form
            </button>
            <button
              class="config-mode-toggle__btn ${e.formMode==="raw"?"active":""}"
              @click=${()=>e.onFormModeChange("raw")}
            >
              Raw
            </button>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="config-main">
        <!-- Action bar -->
        <div class="config-actions">
          <div class="config-actions__left">
            ${L?c`
                  <span class="config-changes-badge"
                    >${e.formMode==="raw"?"Unsaved changes":`${y.length} unsaved change${y.length!==1?"s":""}`}</span
                  >
                `:c`
                    <span class="config-status muted">No changes</span>
                  `}
          </div>
          <div class="config-actions__right">
            <button
              class="btn btn--sm"
              ?disabled=${e.loading}
              @click=${e.onReload}
            >
              ${e.loading?"Loading…":"Reload"}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!A}
              @click=${e.onSave}
            >
              ${e.saving?"Saving…":"Save"}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!S}
              @click=${e.onApply}
            >
              ${e.applying?"Applying…":"Apply"}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!D}
              @click=${e.onUpdate}
            >
              ${e.updating?"Updating…":"Update"}
            </button>
          </div>
        </div>

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${L&&e.formMode==="form"?c`
              <details class="config-diff">
                <summary class="config-diff__summary">
                  <span
                    >View ${y.length} pending
                    change${y.length!==1?"s":""}</span
                  >
                  <svg
                    class="config-diff__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="config-diff__content">
                  ${y.map(I=>c`
                      <div class="config-diff__item">
                        <div class="config-diff__path">${I.path}</div>
                        <div class="config-diff__values">
                          <span class="config-diff__from"
                            >${al(I.from)}</span
                          >
                          <span class="config-diff__arrow">→</span>
                          <span class="config-diff__to"
                            >${al(I.to)}</span
                          >
                        </div>
                      </div>
                    `)}
                </div>
              </details>
            `:f}
        ${g&&e.formMode==="form"?c`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">
                  ${ol(e.activeSection??"")}
                </div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">
                    ${g.label}
                  </div>
                  ${g.description?c`<div class="config-section-hero__desc">
                        ${g.description}
                      </div>`:f}
                </div>
              </div>
            `:f}
        ${m?c`
              <div class="config-subnav">
                <button
                  class="config-subnav__item ${b===null?"active":""}"
                  @click=${()=>e.onSubsectionChange(il)}
                >
                  All
                </button>
                ${u.map(I=>c`
                    <button
                      class="config-subnav__item ${b===I.key?"active":""}"
                      title=${I.description||I.label}
                      @click=${()=>e.onSubsectionChange(I.key)}
                    >
                      ${I.label}
                    </button>
                  `)}
              </div>
            `:f}

        <!-- Form content -->
        <div class="config-content">
          ${e.formMode==="form"?c`
                ${e.schemaLoading?c`
                        <div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>Loading schema…</span>
                        </div>
                      `:Nv({schema:n.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:n.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:b})}
                ${s?c`
                        <div class="callout danger" style="margin-top: 12px">
                          Form view can't safely edit some fields. Use Raw to avoid losing config entries.
                        </div>
                      `:f}
              `:c`
                <label class="field config-raw-field">
                  <span>Raw JSON5</span>
                  <textarea
                    .value=${e.raw}
                    @input=${I=>e.onRawChange(I.target.value)}
                  ></textarea>
                </label>
              `}
        </div>

        ${e.issues.length>0?c`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">
${JSON.stringify(e.issues,null,2)}</pre
              >
            </div>`:f}
      </main>
    </div>
  `}const Ue=e=>e??f;function a$(){return[{value:"ok",label:p("cron.runs.runStatusOk")},{value:"error",label:p("cron.runs.runStatusError")},{value:"skipped",label:p("cron.runs.runStatusSkipped")}]}function r$(){return[{value:"delivered",label:p("cron.runs.deliveryDelivered")},{value:"not-delivered",label:p("cron.runs.deliveryNotDelivered")},{value:"unknown",label:p("cron.runs.deliveryUnknown")},{value:"not-requested",label:p("cron.runs.deliveryNotRequested")}]}function rl(e,t,n){const s=new Set(e);return n?s.add(t):s.delete(t),Array.from(s)}function ll(e,t){return e.length===0?t:e.length<=2?e.join(", "):`${e[0]} +${e.length-1}`}function l$(e){const t=["last",...e.channels.filter(Boolean)],n=e.form.deliveryChannel?.trim();n&&!t.includes(n)&&t.push(n);const s=new Set;return t.filter(i=>s.has(i)?!1:(s.add(i),!0))}function cl(e,t){if(t==="last")return"last";const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function dl(e){return c`
    <div class="field cron-filter-dropdown" data-filter=${e.id}>
      <span>${e.title}</span>
      <details class="cron-filter-dropdown__details">
        <summary class="btn cron-filter-dropdown__trigger">
          <span>${e.summary}</span>
        </summary>
        <div class="cron-filter-dropdown__panel">
          <div class="cron-filter-dropdown__list">
            ${e.options.map(t=>c`
                <label class="cron-filter-dropdown__option">
                  <input
                    type="checkbox"
                    value=${t.value}
                    .checked=${e.selected.includes(t.value)}
                    @change=${n=>{const s=n.target;e.onToggle(t.value,s.checked)}}
                  />
                  <span>${t.label}</span>
                </label>
              `)}
          </div>
          <div class="row">
            <button class="btn" type="button" @click=${e.onClear}>${p("cron.runs.clear")}</button>
          </div>
        </div>
      </details>
    </div>
  `}function Mn(e,t){const n=Array.from(new Set(t.map(s=>s.trim()).filter(Boolean)));return n.length===0?f:c`<datalist id=${e}>
    ${n.map(s=>c`<option value=${s}></option> `)}
  </datalist>`}function pe(e){return`cron-error-${e}`}function c$(e){return e==="name"?"cron-name":e==="scheduleAt"?"cron-schedule-at":e==="everyAmount"?"cron-every-amount":e==="cronExpr"?"cron-cron-expr":e==="staggerAmount"?"cron-stagger-amount":e==="payloadText"?"cron-payload-text":e==="payloadModel"?"cron-payload-model":e==="payloadThinking"?"cron-payload-thinking":e==="timeoutSeconds"?"cron-timeout-seconds":e==="failureAlertAfter"?"cron-failure-alert-after":e==="failureAlertCooldownSeconds"?"cron-failure-alert-cooldown-seconds":"cron-delivery-to"}function d$(e,t,n){return e==="payloadText"?t.payloadKind==="systemEvent"?p("cron.form.mainTimelineMessage"):p("cron.form.assistantTaskPrompt"):e==="deliveryTo"?p(n==="webhook"?"cron.form.webhookUrl":"cron.form.to"):{name:p("cron.form.fieldName"),scheduleAt:p("cron.form.runAt"),everyAmount:p("cron.form.every"),cronExpr:p("cron.form.expression"),staggerAmount:p("cron.form.staggerWindow"),payloadText:p("cron.form.assistantTaskPrompt"),payloadModel:p("cron.form.model"),payloadThinking:p("cron.form.thinking"),timeoutSeconds:p("cron.form.timeoutSeconds"),deliveryTo:p("cron.form.to"),failureAlertAfter:"Failure alert after",failureAlertCooldownSeconds:"Failure alert cooldown"}[e]}function u$(e,t,n){const s=["name","scheduleAt","everyAmount","cronExpr","staggerAmount","payloadText","payloadModel","payloadThinking","timeoutSeconds","deliveryTo","failureAlertAfter","failureAlertCooldownSeconds"],i=[];for(const o of s){const a=e[o];a&&i.push({key:o,label:d$(o,t,n),message:a,inputId:c$(o)})}return i}function g$(e){const t=document.getElementById(e);t instanceof HTMLElement&&(typeof t.scrollIntoView=="function"&&t.scrollIntoView({block:"center",behavior:"smooth"}),t.focus())}function ce(e,t=!1){return c`<span>
    ${e}
    ${t?c`
            <span class="cron-required-marker" aria-hidden="true">*</span>
            <span class="cron-required-sr">${p("cron.form.requiredSr")}</span>
          `:f}
  </span>`}function p$(e){const t=!!e.editingJobId,n=e.form.payloadKind==="agentTurn",s=e.form.scheduleKind==="cron",i=l$(e),o=e.runsJobId==null?void 0:e.jobs.find(S=>S.id===e.runsJobId),a=e.runsScope==="all"?p("cron.jobList.allJobs"):o?.name??e.runsJobId??p("cron.jobList.selectJob"),r=e.runs,l=a$(),d=r$(),g=l.filter(S=>e.runsStatuses.includes(S.value)).map(S=>S.label),u=d.filter(S=>e.runsDeliveryStatuses.includes(S.value)).map(S=>S.label),m=ll(g,p("cron.runs.allStatuses")),h=ll(u,p("cron.runs.allDelivery")),b=e.form.sessionTarget==="isolated"&&e.form.payloadKind==="agentTurn",y=e.form.deliveryMode==="announce"&&!b?"none":e.form.deliveryMode,_=u$(e.fieldErrors,e.form,y),L=!e.busy&&_.length>0,R=e.jobsQuery.trim().length>0||e.jobsEnabledFilter!=="all"||e.jobsScheduleKindFilter!=="all"||e.jobsLastStatusFilter!=="all"||e.jobsSortBy!=="nextRunAtMs"||e.jobsSortDir!=="asc",A=L&&!e.canSubmit?_.length===1?p("cron.form.fixFields",{count:String(_.length)}):p("cron.form.fixFieldsPlural",{count:String(_.length)}):"";return c`
    <section class="card cron-summary-strip">
      <div class="cron-summary-strip__left">
        <div class="cron-summary-item">
          <div class="cron-summary-label">${p("cron.summary.enabled")}</div>
          <div class="cron-summary-value">
            <span class=${`chip ${e.status?.enabled?"chip-ok":"chip-danger"}`}>
              ${e.status?e.status.enabled?p("cron.summary.yes"):p("cron.summary.no"):p("common.na")}
            </span>
          </div>
        </div>
        <div class="cron-summary-item">
          <div class="cron-summary-label">${p("cron.summary.jobs")}</div>
          <div class="cron-summary-value">${e.status?.jobs??p("common.na")}</div>
        </div>
        <div class="cron-summary-item cron-summary-item--wide">
          <div class="cron-summary-label">${p("cron.summary.nextWake")}</div>
          <div class="cron-summary-value">${Qo(e.status?.nextWakeAtMs??null)}</div>
        </div>
      </div>
      <div class="cron-summary-strip__actions">
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?p("cron.summary.refreshing"):p("cron.summary.refresh")}
        </button>
        ${e.error?c`<span class="muted">${e.error}</span>`:f}
      </div>
    </section>

    <section class="cron-workspace">
      <div class="cron-workspace-main">
        <section class="card">
          <div class="row" style="justify-content: space-between; align-items: flex-start; gap: 12px;">
            <div>
              <div class="card-title">${p("cron.jobs.title")}</div>
              <div class="card-sub">${p("cron.jobs.subtitle")}</div>
            </div>
            <div class="muted">${p("cron.jobs.shownOf",{shown:String(e.jobs.length),total:String(e.jobsTotal)})}</div>
          </div>
          <div class="filters" style="margin-top: 12px;">
            <label class="field cron-filter-search">
              <span>${p("cron.jobs.searchJobs")}</span>
              <input
                .value=${e.jobsQuery}
                placeholder=${p("cron.jobs.searchPlaceholder")}
                @input=${S=>e.onJobsFiltersChange({cronJobsQuery:S.target.value})}
              />
            </label>
            <label class="field">
              <span>${p("cron.jobs.enabled")}</span>
              <select
                .value=${e.jobsEnabledFilter}
                @change=${S=>e.onJobsFiltersChange({cronJobsEnabledFilter:S.target.value})}
              >
                <option value="all">${p("cron.jobs.all")}</option>
                <option value="enabled">${p("common.enabled")}</option>
                <option value="disabled">${p("common.disabled")}</option>
              </select>
            </label>
            <label class="field">
              <span>${p("cron.jobs.schedule")}</span>
              <select
                data-test-id="cron-jobs-schedule-filter"
                .value=${e.jobsScheduleKindFilter}
                @change=${S=>e.onJobsFiltersChange({cronJobsScheduleKindFilter:S.target.value})}
              >
                <option value="all">${p("cron.jobs.all")}</option>
                <option value="at">${p("cron.form.at")}</option>
                <option value="every">${p("cron.form.every")}</option>
                <option value="cron">${p("cron.form.cronOption")}</option>
              </select>
            </label>
            <label class="field">
              <span>${p("cron.jobs.lastRun")}</span>
              <select
                data-test-id="cron-jobs-last-status-filter"
                .value=${e.jobsLastStatusFilter}
                @change=${S=>e.onJobsFiltersChange({cronJobsLastStatusFilter:S.target.value})}
              >
                <option value="all">${p("cron.jobs.all")}</option>
                <option value="ok">${p("cron.runs.runStatusOk")}</option>
                <option value="error">${p("cron.runs.runStatusError")}</option>
                <option value="skipped">${p("cron.runs.runStatusSkipped")}</option>
              </select>
            </label>
            <label class="field">
              <span>${p("cron.jobs.sort")}</span>
              <select
                .value=${e.jobsSortBy}
                @change=${S=>e.onJobsFiltersChange({cronJobsSortBy:S.target.value})}
              >
                <option value="nextRunAtMs">${p("cron.jobs.nextRun")}</option>
                <option value="updatedAtMs">${p("cron.jobs.recentlyUpdated")}</option>
                <option value="name">${p("cron.jobs.name")}</option>
              </select>
            </label>
            <label class="field">
              <span>${p("cron.jobs.direction")}</span>
              <select
                .value=${e.jobsSortDir}
                @change=${S=>e.onJobsFiltersChange({cronJobsSortDir:S.target.value})}
              >
                <option value="asc">${p("cron.jobs.ascending")}</option>
                <option value="desc">${p("cron.jobs.descending")}</option>
              </select>
            </label>
            <label class="field">
              <span>${p("cron.jobs.reset")}</span>
              <button
                class="btn"
                data-test-id="cron-jobs-filters-reset"
                ?disabled=${!R}
                @click=${e.onJobsFiltersReset}
              >
                ${p("cron.jobs.reset")}
              </button>
            </label>
          </div>
          ${e.jobs.length===0?c`
                  <div class="muted" style="margin-top: 12px">${p("cron.jobs.noMatching")}</div>
                `:c`
                  <div class="list" style="margin-top: 12px;">
                    ${e.jobs.map(S=>h$(S,e))}
                  </div>
                `}
          ${e.jobsHasMore?c`
                  <div class="row" style="margin-top: 12px">
                    <button
                      class="btn"
                      ?disabled=${e.loading||e.jobsLoadingMore}
                      @click=${e.onLoadMoreJobs}
                    >
                      ${e.jobsLoadingMore?p("cron.jobs.loading"):p("cron.jobs.loadMore")}
                    </button>
                  </div>
                `:f}
        </section>

        <section class="card">
          <div class="row" style="justify-content: space-between; align-items: flex-start; gap: 12px;">
            <div>
              <div class="card-title">${p("cron.runs.title")}</div>
              <div class="card-sub">
                ${e.runsScope==="all"?p("cron.runs.subtitleAll"):p("cron.runs.subtitleJob",{title:a})}
              </div>
            </div>
            <div class="muted">${p("cron.jobs.shownOf",{shown:String(r.length),total:String(e.runsTotal)})}</div>
          </div>
          <div class="cron-run-filters">
            <div class="cron-run-filters__row cron-run-filters__row--primary">
              <label class="field">
                <span>${p("cron.runs.scope")}</span>
                <select
                  .value=${e.runsScope}
                  @change=${S=>e.onRunsFiltersChange({cronRunsScope:S.target.value})}
                >
                  <option value="all">${p("cron.runs.allJobs")}</option>
                  <option value="job" ?disabled=${e.runsJobId==null}>${p("cron.runs.selectedJob")}</option>
                </select>
              </label>
              <label class="field cron-run-filter-search">
                <span>${p("cron.runs.searchRuns")}</span>
                <input
                  .value=${e.runsQuery}
                  placeholder=${p("cron.runs.searchPlaceholder")}
                  @input=${S=>e.onRunsFiltersChange({cronRunsQuery:S.target.value})}
                />
              </label>
              <label class="field">
                <span>${p("cron.jobs.sort")}</span>
                <select
                  .value=${e.runsSortDir}
                  @change=${S=>e.onRunsFiltersChange({cronRunsSortDir:S.target.value})}
                >
                  <option value="desc">${p("cron.runs.newestFirst")}</option>
                  <option value="asc">${p("cron.runs.oldestFirst")}</option>
                </select>
              </label>
            </div>
            <div class="cron-run-filters__row cron-run-filters__row--secondary">
              ${dl({id:"status",title:p("cron.runs.status"),summary:m,options:l,selected:e.runsStatuses,onToggle:(S,D)=>{const T=rl(e.runsStatuses,S,D);e.onRunsFiltersChange({cronRunsStatuses:T})},onClear:()=>{e.onRunsFiltersChange({cronRunsStatuses:[]})}})}
              ${dl({id:"delivery",title:p("cron.runs.delivery"),summary:h,options:d,selected:e.runsDeliveryStatuses,onToggle:(S,D)=>{const T=rl(e.runsDeliveryStatuses,S,D);e.onRunsFiltersChange({cronRunsDeliveryStatuses:T})},onClear:()=>{e.onRunsFiltersChange({cronRunsDeliveryStatuses:[]})}})}
            </div>
          </div>
          ${e.runsScope==="job"&&e.runsJobId==null?c`
                  <div class="muted" style="margin-top: 12px">${p("cron.runs.selectJobHint")}</div>
                `:r.length===0?c`
                    <div class="muted" style="margin-top: 12px">${p("cron.runs.noMatching")}</div>
                  `:c`
                    <div class="list" style="margin-top: 12px;">
                      ${r.map(S=>x$(S,e.basePath))}
                    </div>
                  `}
          ${(e.runsScope==="all"||e.runsJobId!=null)&&e.runsHasMore?c`
                  <div class="row" style="margin-top: 12px">
                    <button
                      class="btn"
                      ?disabled=${e.runsLoadingMore}
                      @click=${e.onLoadMoreRuns}
                    >
                      ${e.runsLoadingMore?p("cron.jobs.loading"):p("cron.runs.loadMore")}
                    </button>
                  </div>
                `:f}
        </section>
      </div>

      <section class="card cron-workspace-form">
        <div class="card-title">${p(t?"cron.form.editJob":"cron.form.newJob")}</div>
        <div class="card-sub">
          ${p(t?"cron.form.updateSubtitle":"cron.form.createSubtitle")}
        </div>
        <div class="cron-form">
          <div class="cron-required-legend">
            <span class="cron-required-marker" aria-hidden="true">*</span> ${p("cron.form.required")}
          </div>
          <section class="cron-form-section">
            <div class="cron-form-section__title">${p("cron.form.basics")}</div>
            <div class="cron-form-section__sub">${p("cron.form.basicsSub")}</div>
            <div class="form-grid cron-form-grid">
              <label class="field">
                ${ce(p("cron.form.fieldName"),!0)}
                <input
                  id="cron-name"
                  .value=${e.form.name}
                  placeholder=${p("cron.form.namePlaceholder")}
                  aria-invalid=${e.fieldErrors.name?"true":"false"}
                  aria-describedby=${Ue(e.fieldErrors.name?pe("name"):void 0)}
                  @input=${S=>e.onFormChange({name:S.target.value})}
                />
                ${Qe(e.fieldErrors.name,pe("name"))}
              </label>
              <label class="field">
                <span>${p("cron.form.description")}</span>
                <input
                  .value=${e.form.description}
                  placeholder=${p("cron.form.descriptionPlaceholder")}
                  @input=${S=>e.onFormChange({description:S.target.value})}
                />
              </label>
              <label class="field">
                ${ce(p("cron.form.agentId"))}
                <input
                  id="cron-agent-id"
                  .value=${e.form.agentId}
                  list="cron-agent-suggestions"
                  ?disabled=${e.form.clearAgent}
                  @input=${S=>e.onFormChange({agentId:S.target.value})}
                  placeholder=${p("cron.form.agentPlaceholder")}
                />
                <div class="cron-help">${p("cron.form.agentHelp")}</div>
              </label>
              <label class="field checkbox cron-checkbox cron-checkbox-inline">
                <input
                  type="checkbox"
                  .checked=${e.form.enabled}
                  @change=${S=>e.onFormChange({enabled:S.target.checked})}
                />
                <span class="field-checkbox__label">${p("cron.summary.enabled")}</span>
              </label>
            </div>
          </section>

          <section class="cron-form-section">
            <div class="cron-form-section__title">${p("cron.form.schedule")}</div>
            <div class="cron-form-section__sub">${p("cron.form.scheduleSub")}</div>
            <div class="form-grid cron-form-grid">
              <label class="field cron-span-2">
                ${ce(p("cron.form.schedule"))}
                <select
                  id="cron-schedule-kind"
                  .value=${e.form.scheduleKind}
                  @change=${S=>e.onFormChange({scheduleKind:S.target.value})}
                >
                  <option value="every">${p("cron.form.every")}</option>
                  <option value="at">${p("cron.form.at")}</option>
                  <option value="cron">${p("cron.form.cronOption")}</option>
                </select>
              </label>
            </div>
            ${f$(e)}
          </section>

          <section class="cron-form-section">
            <div class="cron-form-section__title">${p("cron.form.execution")}</div>
            <div class="cron-form-section__sub">${p("cron.form.executionSub")}</div>
            <div class="form-grid cron-form-grid">
              <label class="field">
                ${ce(p("cron.form.session"))}
                <select
                  id="cron-session-target"
                  .value=${e.form.sessionTarget}
                  @change=${S=>e.onFormChange({sessionTarget:S.target.value})}
                >
                  <option value="main">${p("cron.form.main")}</option>
                  <option value="isolated">${p("cron.form.isolated")}</option>
                </select>
                <div class="cron-help">${p("cron.form.sessionHelp")}</div>
              </label>
              <label class="field">
                ${ce(p("cron.form.wakeMode"))}
                <select
                  id="cron-wake-mode"
                  .value=${e.form.wakeMode}
                  @change=${S=>e.onFormChange({wakeMode:S.target.value})}
                >
                  <option value="now">${p("cron.form.now")}</option>
                  <option value="next-heartbeat">${p("cron.form.nextHeartbeat")}</option>
                </select>
                <div class="cron-help">${p("cron.form.wakeModeHelp")}</div>
              </label>
              <label class="field ${n?"":"cron-span-2"}">
                ${ce(p("cron.form.payloadKind"))}
                <select
                  id="cron-payload-kind"
                  .value=${e.form.payloadKind}
                  @change=${S=>e.onFormChange({payloadKind:S.target.value})}
                >
                  <option value="systemEvent">${p("cron.form.systemEvent")}</option>
                  <option value="agentTurn">${p("cron.form.agentTurn")}</option>
                </select>
                <div class="cron-help">
                  ${e.form.payloadKind==="systemEvent"?p("cron.form.systemEventHelp"):p("cron.form.agentTurnHelp")}
                </div>
              </label>
              ${n?c`
                      <label class="field">
                        ${ce(p("cron.form.timeoutSeconds"))}
                        <input
                          id="cron-timeout-seconds"
                          .value=${e.form.timeoutSeconds}
                          placeholder=${p("cron.form.timeoutPlaceholder")}
                          aria-invalid=${e.fieldErrors.timeoutSeconds?"true":"false"}
                          aria-describedby=${Ue(e.fieldErrors.timeoutSeconds?pe("timeoutSeconds"):void 0)}
                          @input=${S=>e.onFormChange({timeoutSeconds:S.target.value})}
                        />
                        <div class="cron-help">${p("cron.form.timeoutHelp")}</div>
                        ${Qe(e.fieldErrors.timeoutSeconds,pe("timeoutSeconds"))}
                      </label>
                    `:f}
            </div>
            <label class="field cron-span-2">
              ${ce(e.form.payloadKind==="systemEvent"?p("cron.form.mainTimelineMessage"):p("cron.form.assistantTaskPrompt"),!0)}
              <textarea
                id="cron-payload-text"
                .value=${e.form.payloadText}
                aria-invalid=${e.fieldErrors.payloadText?"true":"false"}
                aria-describedby=${Ue(e.fieldErrors.payloadText?pe("payloadText"):void 0)}
                @input=${S=>e.onFormChange({payloadText:S.target.value})}
                rows="4"
              ></textarea>
              ${Qe(e.fieldErrors.payloadText,pe("payloadText"))}
            </label>
          </section>

          <section class="cron-form-section">
            <div class="cron-form-section__title">${p("cron.form.deliverySection")}</div>
            <div class="cron-form-section__sub">${p("cron.form.deliverySub")}</div>
            <div class="form-grid cron-form-grid">
              <label class="field ${y==="none"?"cron-span-2":""}">
                ${ce(p("cron.form.resultDelivery"))}
                <select
                  id="cron-delivery-mode"
                  .value=${y}
                  @change=${S=>e.onFormChange({deliveryMode:S.target.value})}
                >
                  ${b?c`
                          <option value="announce">${p("cron.form.announceDefault")}</option>
                        `:f}
                  <option value="webhook">${p("cron.form.webhookPost")}</option>
                  <option value="none">${p("cron.form.noneInternal")}</option>
                </select>
                <div class="cron-help">${p("cron.form.deliveryHelp")}</div>
              </label>
              ${y!=="none"?c`
                      <label class="field ${y==="webhook"?"cron-span-2":""}">
                        ${ce(p(y==="webhook"?"cron.form.webhookUrl":"cron.form.channel"),y==="webhook")}
                        ${y==="webhook"?c`
                                <input
                                  id="cron-delivery-to"
                                  .value=${e.form.deliveryTo}
                                  list="cron-delivery-to-suggestions"
                                  aria-invalid=${e.fieldErrors.deliveryTo?"true":"false"}
                                  aria-describedby=${Ue(e.fieldErrors.deliveryTo?pe("deliveryTo"):void 0)}
                                  @input=${S=>e.onFormChange({deliveryTo:S.target.value})}
                                  placeholder=${p("cron.form.webhookPlaceholder")}
                                />
                              `:c`
                                <select
                                  id="cron-delivery-channel"
                                  .value=${e.form.deliveryChannel||"last"}
                                  @change=${S=>e.onFormChange({deliveryChannel:S.target.value})}
                                >
                                  ${i.map(S=>c`<option value=${S}>
                                        ${cl(e,S)}
                                      </option>`)}
                                </select>
                              `}
                        ${y==="announce"?c`
                                <div class="cron-help">${p("cron.form.channelHelp")}</div>
                              `:c`
                                <div class="cron-help">${p("cron.form.webhookHelp")}</div>
                              `}
                      </label>
                      ${y==="announce"?c`
                              <label class="field cron-span-2">
                                ${ce(p("cron.form.to"))}
                                <input
                                  id="cron-delivery-to"
                                  .value=${e.form.deliveryTo}
                                  list="cron-delivery-to-suggestions"
                                  @input=${S=>e.onFormChange({deliveryTo:S.target.value})}
                                  placeholder=${p("cron.form.toPlaceholder")}
                                />
                                <div class="cron-help">${p("cron.form.toHelp")}</div>
                              </label>
                            `:f}
                      ${y==="webhook"?Qe(e.fieldErrors.deliveryTo,pe("deliveryTo")):f}
                    `:f}
            </div>
          </section>

          <details class="cron-advanced">
            <summary class="cron-advanced__summary">${p("cron.form.advanced")}</summary>
            <div class="cron-help">${p("cron.form.advancedHelp")}</div>
            <div class="form-grid cron-form-grid">
              <label class="field checkbox cron-checkbox">
                <input
                  type="checkbox"
                  .checked=${e.form.deleteAfterRun}
                  @change=${S=>e.onFormChange({deleteAfterRun:S.target.checked})}
                />
                <span class="field-checkbox__label">${p("cron.form.deleteAfterRun")}</span>
                <div class="cron-help">${p("cron.form.deleteAfterRunHelp")}</div>
              </label>
              <label class="field checkbox cron-checkbox">
                <input
                  type="checkbox"
                  .checked=${e.form.clearAgent}
                  @change=${S=>e.onFormChange({clearAgent:S.target.checked})}
                />
                <span class="field-checkbox__label">${p("cron.form.clearAgentOverride")}</span>
                <div class="cron-help">${p("cron.form.clearAgentHelp")}</div>
              </label>
              ${s?c`
                      <label class="field checkbox cron-checkbox cron-span-2">
                        <input
                          type="checkbox"
                          .checked=${e.form.scheduleExact}
                          @change=${S=>e.onFormChange({scheduleExact:S.target.checked})}
                        />
                        <span class="field-checkbox__label">${p("cron.form.exactTiming")}</span>
                        <div class="cron-help">${p("cron.form.exactTimingHelp")}</div>
                      </label>
                      <div class="cron-stagger-group cron-span-2">
                        <label class="field">
                          ${ce(p("cron.form.staggerWindow"))}
                          <input
                            id="cron-stagger-amount"
                            .value=${e.form.staggerAmount}
                            ?disabled=${e.form.scheduleExact}
                            aria-invalid=${e.fieldErrors.staggerAmount?"true":"false"}
                            aria-describedby=${Ue(e.fieldErrors.staggerAmount?pe("staggerAmount"):void 0)}
                            @input=${S=>e.onFormChange({staggerAmount:S.target.value})}
                            placeholder=${p("cron.form.staggerPlaceholder")}
                          />
                          ${Qe(e.fieldErrors.staggerAmount,pe("staggerAmount"))}
                        </label>
                        <label class="field">
                          <span>${p("cron.form.staggerUnit")}</span>
                          <select
                            .value=${e.form.staggerUnit}
                            ?disabled=${e.form.scheduleExact}
                            @change=${S=>e.onFormChange({staggerUnit:S.target.value})}
                          >
                            <option value="seconds">${p("cron.form.seconds")}</option>
                            <option value="minutes">${p("cron.form.minutes")}</option>
                          </select>
                        </label>
                      </div>
                    `:f}
              ${n?c`
                      <label class="field">
                        ${ce(p("cron.form.model"))}
                        <input
                          id="cron-payload-model"
                          .value=${e.form.payloadModel}
                          list="cron-model-suggestions"
                          @input=${S=>e.onFormChange({payloadModel:S.target.value})}
                          placeholder=${p("cron.form.modelPlaceholder")}
                        />
                        <div class="cron-help">${p("cron.form.modelHelp")}</div>
                      </label>
                      <label class="field">
                        ${ce(p("cron.form.thinking"))}
                        <input
                          id="cron-payload-thinking"
                          .value=${e.form.payloadThinking}
                          list="cron-thinking-suggestions"
                          @input=${S=>e.onFormChange({payloadThinking:S.target.value})}
                          placeholder=${p("cron.form.thinkingPlaceholder")}
                        />
                        <div class="cron-help">${p("cron.form.thinkingHelp")}</div>
                      </label>
                    `:f}
              ${n?c`
                      <label class="field cron-span-2">
                        ${ce("Failure alerts")}
                        <select
                          .value=${e.form.failureAlertMode}
                          @change=${S=>e.onFormChange({failureAlertMode:S.target.value})}
                        >
                          <option value="inherit">Inherit global setting</option>
                          <option value="disabled">Disable for this job</option>
                          <option value="custom">Custom per-job settings</option>
                        </select>
                        <div class="cron-help">
                          Control when this job sends repeated-failure alerts.
                        </div>
                      </label>
                      ${e.form.failureAlertMode==="custom"?c`
                              <label class="field">
                                ${ce("Alert after")}
                                <input
                                  id="cron-failure-alert-after"
                                  .value=${e.form.failureAlertAfter}
                                  aria-invalid=${e.fieldErrors.failureAlertAfter?"true":"false"}
                                  aria-describedby=${Ue(e.fieldErrors.failureAlertAfter?pe("failureAlertAfter"):void 0)}
                                  @input=${S=>e.onFormChange({failureAlertAfter:S.target.value})}
                                  placeholder="2"
                                />
                                <div class="cron-help">Consecutive errors before alerting.</div>
                                ${Qe(e.fieldErrors.failureAlertAfter,pe("failureAlertAfter"))}
                              </label>
                              <label class="field">
                                ${ce("Cooldown (seconds)")}
                                <input
                                  id="cron-failure-alert-cooldown-seconds"
                                  .value=${e.form.failureAlertCooldownSeconds}
                                  aria-invalid=${e.fieldErrors.failureAlertCooldownSeconds?"true":"false"}
                                  aria-describedby=${Ue(e.fieldErrors.failureAlertCooldownSeconds?pe("failureAlertCooldownSeconds"):void 0)}
                                  @input=${S=>e.onFormChange({failureAlertCooldownSeconds:S.target.value})}
                                  placeholder="3600"
                                />
                                <div class="cron-help">Minimum seconds between alerts.</div>
                                ${Qe(e.fieldErrors.failureAlertCooldownSeconds,pe("failureAlertCooldownSeconds"))}
                              </label>
                              <label class="field">
                                ${ce("Alert channel")}
                                <select
                                  .value=${e.form.failureAlertChannel||"last"}
                                  @change=${S=>e.onFormChange({failureAlertChannel:S.target.value})}
                                >
                                  ${i.map(S=>c`<option value=${S}>
                                        ${cl(e,S)}
                                      </option>`)}
                                </select>
                              </label>
                              <label class="field">
                                ${ce("Alert to")}
                                <input
                                  .value=${e.form.failureAlertTo}
                                  list="cron-delivery-to-suggestions"
                                  @input=${S=>e.onFormChange({failureAlertTo:S.target.value})}
                                  placeholder="+1555... or chat id"
                                />
                                <div class="cron-help">
                                  Optional recipient override for failure alerts.
                                </div>
                              </label>
                            `:f}
                    `:f}
              ${y!=="none"?c`
                      <label class="field checkbox cron-checkbox cron-span-2">
                        <input
                          type="checkbox"
                          .checked=${e.form.deliveryBestEffort}
                          @change=${S=>e.onFormChange({deliveryBestEffort:S.target.checked})}
                        />
                        <span class="field-checkbox__label">${p("cron.form.bestEffortDelivery")}</span>
                        <div class="cron-help">${p("cron.form.bestEffortHelp")}</div>
                      </label>
                    `:f}
            </div>
          </details>
        </div>
        ${L?c`
                <div class="cron-form-status" role="status" aria-live="polite">
                  <div class="cron-form-status__title">${p("cron.form.cantAddYet")}</div>
                  <div class="cron-help">${p("cron.form.fillRequired")}</div>
                  <ul class="cron-form-status__list">
                    ${_.map(S=>c`
                        <li>
                          <button
                            type="button"
                            class="cron-form-status__link"
                            @click=${()=>g$(S.inputId)}
                          >
                            ${S.label}: ${p(S.message)}
                          </button>
                        </li>
                      `)}
                  </ul>
                </div>
              `:f}
        <div class="row cron-form-actions">
          <button class="btn primary" ?disabled=${e.busy||!e.canSubmit} @click=${e.onAdd}>
            ${e.busy?p("cron.form.saving"):p(t?"cron.form.saveChanges":"cron.form.addJob")}
          </button>
          ${A?c`<div class="cron-submit-reason" aria-live="polite">${A}</div>`:f}
          ${t?c`
                  <button class="btn" ?disabled=${e.busy} @click=${e.onCancelEdit}>
                    ${p("cron.form.cancel")}
                  </button>
                `:f}
        </div>
      </section>
    </section>

    ${Mn("cron-agent-suggestions",e.agentSuggestions)}
    ${Mn("cron-model-suggestions",e.modelSuggestions)}
    ${Mn("cron-thinking-suggestions",e.thinkingSuggestions)}
    ${Mn("cron-tz-suggestions",e.timezoneSuggestions)}
    ${Mn("cron-delivery-to-suggestions",e.deliveryToSuggestions)}
  `}function f$(e){const t=e.form;return t.scheduleKind==="at"?c`
      <label class="field cron-span-2" style="margin-top: 12px;">
        ${ce(p("cron.form.runAt"),!0)}
        <input
          id="cron-schedule-at"
          type="datetime-local"
          .value=${t.scheduleAt}
          aria-invalid=${e.fieldErrors.scheduleAt?"true":"false"}
          aria-describedby=${Ue(e.fieldErrors.scheduleAt?pe("scheduleAt"):void 0)}
          @input=${n=>e.onFormChange({scheduleAt:n.target.value})}
        />
        ${Qe(e.fieldErrors.scheduleAt,pe("scheduleAt"))}
      </label>
    `:t.scheduleKind==="every"?c`
      <div class="form-grid cron-form-grid" style="margin-top: 12px;">
        <label class="field">
          ${ce(p("cron.form.every"),!0)}
          <input
            id="cron-every-amount"
            .value=${t.everyAmount}
            aria-invalid=${e.fieldErrors.everyAmount?"true":"false"}
            aria-describedby=${Ue(e.fieldErrors.everyAmount?pe("everyAmount"):void 0)}
            @input=${n=>e.onFormChange({everyAmount:n.target.value})}
            placeholder=${p("cron.form.everyAmountPlaceholder")}
          />
          ${Qe(e.fieldErrors.everyAmount,pe("everyAmount"))}
        </label>
        <label class="field">
          <span>${p("cron.form.unit")}</span>
          <select
            .value=${t.everyUnit}
            @change=${n=>e.onFormChange({everyUnit:n.target.value})}
          >
            <option value="minutes">${p("cron.form.minutes")}</option>
            <option value="hours">${p("cron.form.hours")}</option>
            <option value="days">${p("cron.form.days")}</option>
          </select>
        </label>
      </div>
    `:c`
    <div class="form-grid cron-form-grid" style="margin-top: 12px;">
      <label class="field">
        ${ce(p("cron.form.expression"),!0)}
        <input
          id="cron-cron-expr"
          .value=${t.cronExpr}
          aria-invalid=${e.fieldErrors.cronExpr?"true":"false"}
          aria-describedby=${Ue(e.fieldErrors.cronExpr?pe("cronExpr"):void 0)}
          @input=${n=>e.onFormChange({cronExpr:n.target.value})}
          placeholder=${p("cron.form.expressionPlaceholder")}
        />
        ${Qe(e.fieldErrors.cronExpr,pe("cronExpr"))}
      </label>
      <label class="field">
        <span>${p("cron.form.timezoneOptional")}</span>
        <input
          .value=${t.cronTz}
          list="cron-tz-suggestions"
          @input=${n=>e.onFormChange({cronTz:n.target.value})}
          placeholder=${p("cron.form.timezonePlaceholder")}
        />
        <div class="cron-help">${p("cron.form.timezoneHelp")}</div>
      </label>
      <div class="cron-help cron-span-2">${p("cron.form.jitterHelp")}</div>
    </div>
  `}function Qe(e,t){return e?c`<div id=${Ue(t)} class="cron-help cron-error">${p(e)}</div>`:f}function h$(e,t){const s=`list-item list-item-clickable cron-job${t.runsJobId===e.id?" list-item-selected":""}`,i=o=>{t.onLoadRuns(e.id),o()};return c`
    <div class=${s} @click=${()=>t.onLoadRuns(e.id)}>
      <div class="list-main">
        <div class="list-title">${e.name}</div>
        <div class="list-sub">${Zc(e)}</div>
        ${m$(e)}
        ${e.agentId?c`<div class="muted cron-job-agent">${p("cron.jobDetail.agent")}: ${e.agentId}</div>`:f}
      </div>
      <div class="list-meta">
        ${b$(e)}
      </div>
      <div class="cron-job-footer">
        <div class="chip-row cron-job-chips">
          <span class=${`chip ${e.enabled?"chip-ok":"chip-danger"}`}>
            ${e.enabled?p("cron.jobList.enabled"):p("cron.jobList.disabled")}
          </span>
          <span class="chip">${e.sessionTarget}</span>
          <span class="chip">${e.wakeMode}</span>
        </div>
        <div class="row cron-job-actions">
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onEdit(e))}}
          >
            ${p("cron.jobList.edit")}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onClone(e))}}
          >
            ${p("cron.jobList.clone")}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onToggle(e,!e.enabled))}}
          >
            ${e.enabled?p("cron.jobList.disable"):p("cron.jobList.enable")}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onRun(e))}}
          >
            ${p("cron.jobList.run")}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onLoadRuns(e.id))}}
          >
            ${p("cron.jobList.history")}
          </button>
          <button
            class="btn danger"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onRemove(e))}}
          >
            ${p("cron.jobList.remove")}
          </button>
        </div>
      </div>
    </div>
  `}function m$(e){if(e.payload.kind==="systemEvent")return c`<div class="cron-job-detail">
      <span class="cron-job-detail-label">${p("cron.jobDetail.system")}</span>
      <span class="muted cron-job-detail-value">${e.payload.text}</span>
    </div>`;const t=e.delivery,n=t?.mode==="webhook"?t.to?` (${t.to})`:"":t?.channel||t?.to?` (${t.channel??"last"}${t.to?` -> ${t.to}`:""})`:"";return c`
    <div class="cron-job-detail">
      <span class="cron-job-detail-label">${p("cron.jobDetail.prompt")}</span>
      <span class="muted cron-job-detail-value">${e.payload.message}</span>
    </div>
    ${t?c`<div class="cron-job-detail">
            <span class="cron-job-detail-label">${p("cron.jobDetail.delivery")}</span>
            <span class="muted cron-job-detail-value">${t.mode}${n}</span>
          </div>`:f}
  `}function ul(e){return typeof e!="number"||!Number.isFinite(e)?p("common.na"):se(e)}function v$(e,t=Date.now()){const n=se(e);return e>t?p("cron.runEntry.next",{rel:n}):p("cron.runEntry.due",{rel:n})}function b$(e){const t=e.state?.lastStatus,n=t==="ok"?"cron-job-status-ok":t==="error"?"cron-job-status-error":t==="skipped"?"cron-job-status-skipped":"cron-job-status-na",s=p(t==="ok"?"cron.runs.runStatusOk":t==="error"?"cron.runs.runStatusError":t==="skipped"?"cron.runs.runStatusSkipped":"common.na"),i=e.state?.nextRunAtMs,o=e.state?.lastRunAtMs;return c`
    <div class="cron-job-state">
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">${p("cron.jobState.status")}</span>
        <span class=${`cron-job-status-pill ${n}`}>${s}</span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">${p("cron.jobState.next")}</span>
        <span class="cron-job-state-value" title=${At(i)}>
          ${ul(i)}
        </span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">${p("cron.jobState.last")}</span>
        <span class="cron-job-state-value" title=${At(o)}>
          ${ul(o)}
        </span>
      </div>
    </div>
  `}function y$(e){switch(e){case"ok":return p("cron.runs.runStatusOk");case"error":return p("cron.runs.runStatusError");case"skipped":return p("cron.runs.runStatusSkipped");default:return p("cron.runs.runStatusUnknown")}}function $$(e){switch(e){case"delivered":return p("cron.runs.deliveryDelivered");case"not-delivered":return p("cron.runs.deliveryNotDelivered");case"not-requested":return p("cron.runs.deliveryNotRequested");case"unknown":return p("cron.runs.deliveryUnknown");default:return p("cron.runs.deliveryUnknown")}}function x$(e,t){const n=typeof e.sessionKey=="string"&&e.sessionKey.trim().length>0?`${Vs("chat",t)}?session=${encodeURIComponent(e.sessionKey)}`:null,s=y$(e.status??"unknown"),i=$$(e.deliveryStatus??"not-requested"),o=e.usage,a=o&&typeof o.total_tokens=="number"?`${o.total_tokens} tokens`:o&&typeof o.input_tokens=="number"&&typeof o.output_tokens=="number"?`${o.input_tokens} in / ${o.output_tokens} out`:null;return c`
    <div class="list-item cron-run-entry">
      <div class="list-main cron-run-entry__main">
        <div class="list-title cron-run-entry__title">
          ${e.jobName??e.jobId}
          <span class="muted"> · ${s}</span>
        </div>
        <div class="list-sub cron-run-entry__summary">${e.summary??e.error??p("cron.runEntry.noSummary")}</div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${i}</span>
          ${e.model?c`<span class="chip">${e.model}</span>`:f}
          ${e.provider?c`<span class="chip">${e.provider}</span>`:f}
          ${a?c`<span class="chip">${a}</span>`:f}
        </div>
      </div>
      <div class="list-meta cron-run-entry__meta">
        <div>${At(e.ts)}</div>
        ${typeof e.runAtMs=="number"?c`<div class="muted">${p("cron.runEntry.runAt")} ${At(e.runAtMs)}</div>`:f}
        <div class="muted">${e.durationMs??0}ms</div>
        ${typeof e.nextRunAtMs=="number"?c`<div class="muted">${v$(e.nextRunAtMs)}</div>`:f}
        ${n?c`<div><a class="session-link" href=${n}>${p("cron.runEntry.openRunChat")}</a></div>`:f}
        ${e.error?c`<div class="muted">${e.error}</div>`:f}
        ${e.deliveryError?c`<div class="muted">${e.deliveryError}</div>`:f}
      </div>
    </div>
  `}function w$(e){const n=(e.status&&typeof e.status=="object"?e.status.securityAudit:null)?.summary??null,s=n?.critical??0,i=n?.warn??0,o=n?.info??0,a=s>0?"danger":i>0?"warn":"success",r=s>0?`${s} critical`:i>0?`${i} warnings`:"No critical issues";return c`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Snapshots</div>
            <div class="card-sub">Status, health, and heartbeat data.</div>
          </div>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">Status</div>
            ${n?c`<div class="callout ${a}" style="margin-top: 8px;">
                  Security audit: ${r}${o>0?` · ${o} info`:""}. Run
                  <span class="mono">openclaw security audit --deep</span> for details.
                </div>`:f}
            <pre class="code-block">${JSON.stringify(e.status??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">Health</div>
            <pre class="code-block">${JSON.stringify(e.health??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">Last heartbeat</div>
            <pre class="code-block">${JSON.stringify(e.heartbeat??{},null,2)}</pre>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Manual RPC</div>
        <div class="card-sub">Send a raw gateway method with JSON params.</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>Method</span>
            <input
              .value=${e.callMethod}
              @input=${l=>e.onCallMethodChange(l.target.value)}
              placeholder="system-presence"
            />
          </label>
          <label class="field">
            <span>Params (JSON)</span>
            <textarea
              .value=${e.callParams}
              @input=${l=>e.onCallParamsChange(l.target.value)}
              rows="6"
            ></textarea>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${e.onCall}>Call</button>
        </div>
        ${e.callError?c`<div class="callout danger" style="margin-top: 12px;">
              ${e.callError}
            </div>`:f}
        ${e.callResult?c`<pre class="code-block" style="margin-top: 12px;">${e.callResult}</pre>`:f}
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Models</div>
      <div class="card-sub">Catalog from models.list.</div>
      <pre class="code-block" style="margin-top: 12px;">${JSON.stringify(e.models??[],null,2)}</pre>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Event Log</div>
      <div class="card-sub">Latest gateway events.</div>
      ${e.eventLog.length===0?c`
              <div class="muted" style="margin-top: 12px">No events yet.</div>
            `:c`
            <div class="list debug-event-log" style="margin-top: 12px;">
              ${e.eventLog.map(l=>c`
                  <div class="list-item debug-event-log__item">
                    <div class="list-main">
                      <div class="list-title">${l.event}</div>
                      <div class="list-sub">${new Date(l.ts).toLocaleTimeString()}</div>
                    </div>
                    <div class="list-meta debug-event-log__meta">
                      <pre class="code-block debug-event-log__payload">${ov(l.payload)}</pre>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function S$(e){const t=Math.max(0,e),n=Math.floor(t/1e3);if(n<60)return`${n}s`;const s=Math.floor(n/60);return s<60?`${s}m`:`${Math.floor(s/60)}h`}function Nt(e,t){return t?c`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:f}function k$(e){const t=e.execApprovalQueue[0];if(!t)return f;const n=t.request,s=t.expiresAtMs-Date.now(),i=s>0?`expires in ${S$(s)}`:"expired",o=e.execApprovalQueue.length;return c`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Exec approval needed</div>
            <div class="exec-approval-sub">${i}</div>
          </div>
          ${o>1?c`<div class="exec-approval-queue">${o} pending</div>`:f}
        </div>
        <div class="exec-approval-command mono">${n.command}</div>
        <div class="exec-approval-meta">
          ${Nt("Host",n.host)}
          ${Nt("Agent",n.agentId)}
          ${Nt("Session",n.sessionKey)}
          ${Nt("CWD",n.cwd)}
          ${Nt("Resolved",n.resolvedPath)}
          ${Nt("Security",n.security)}
          ${Nt("Ask",n.ask)}
        </div>
        ${e.execApprovalError?c`<div class="exec-approval-error">${e.execApprovalError}</div>`:f}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-once")}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-always")}
          >
            Always allow
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("deny")}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function A$(e){const{pendingGatewayUrl:t}=e;return t?c`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Change Gateway URL</div>
            <div class="exec-approval-sub">This will reconnect to a different gateway server</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${t}</div>
        <div class="callout danger" style="margin-top: 12px;">
          Only confirm if you trust this URL. Malicious URLs can compromise your system.
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            @click=${()=>e.handleGatewayUrlConfirm()}
          >
            Confirm
          </button>
          <button
            class="btn"
            @click=${()=>e.handleGatewayUrlCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  `:f}function C$(e){return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Connected Instances</div>
          <div class="card-sub">Presence beacons from the gateway and clients.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>
      ${e.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:f}
      ${e.statusMessage?c`<div class="callout" style="margin-top: 12px;">
            ${e.statusMessage}
          </div>`:f}
      <div class="list" style="margin-top: 16px;">
        ${e.entries.length===0?c`
                <div class="muted">No instances reported yet.</div>
              `:e.entries.map(t=>T$(t))}
      </div>
    </section>
  `}function T$(e){const t=e.lastInputSeconds!=null?`${e.lastInputSeconds}s ago`:"n/a",n=e.mode??"unknown",s=Array.isArray(e.roles)?e.roles.filter(Boolean):[],i=Array.isArray(e.scopes)?e.scopes.filter(Boolean):[],o=i.length>0?i.length>3?`${i.length} scopes`:`scopes: ${i.join(", ")}`:null;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.host??"unknown host"}</div>
        <div class="list-sub">${nv(e)}</div>
        <div class="chip-row">
          <span class="chip">${n}</span>
          ${s.map(a=>c`<span class="chip">${a}</span>`)}
          ${o?c`<span class="chip">${o}</span>`:f}
          ${e.platform?c`<span class="chip">${e.platform}</span>`:f}
          ${e.deviceFamily?c`<span class="chip">${e.deviceFamily}</span>`:f}
          ${e.modelIdentifier?c`<span class="chip">${e.modelIdentifier}</span>`:f}
          ${e.version?c`<span class="chip">${e.version}</span>`:f}
        </div>
      </div>
      <div class="list-meta">
        <div>${sv(e)}</div>
        <div class="muted">Last input ${t}</div>
        <div class="muted">Reason ${e.reason??""}</div>
      </div>
    </div>
  `}const gl=["trace","debug","info","warn","error","fatal"];function _$(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleTimeString()}function E$(e,t){return t?[e.message,e.subsystem,e.raw].filter(Boolean).join(" ").toLowerCase().includes(t):!0}function R$(e){const t=e.filterText.trim().toLowerCase(),n=gl.some(o=>!e.levelFilters[o]),s=e.entries.filter(o=>o.level&&!e.levelFilters[o.level]?!1:E$(o,t)),i=t||n?"filtered":"visible";return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Logs</div>
          <div class="card-sub">Gateway file logs (JSONL).</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
          <button
            class="btn"
            ?disabled=${s.length===0}
            @click=${()=>e.onExport(s.map(o=>o.raw),i)}
          >
            Export ${i}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="min-width: 220px;">
          <span>Filter</span>
          <input
            .value=${e.filterText}
            @input=${o=>e.onFilterTextChange(o.target.value)}
            placeholder="Search logs"
          />
        </label>
        <label class="field checkbox">
          <span>Auto-follow</span>
          <input
            type="checkbox"
            .checked=${e.autoFollow}
            @change=${o=>e.onToggleAutoFollow(o.target.checked)}
          />
        </label>
      </div>

      <div class="chip-row" style="margin-top: 12px;">
        ${gl.map(o=>c`
            <label class="chip log-chip ${o}">
              <input
                type="checkbox"
                .checked=${e.levelFilters[o]}
                @change=${a=>e.onLevelToggle(o,a.target.checked)}
              />
              <span>${o}</span>
            </label>
          `)}
      </div>

      ${e.file?c`<div class="muted" style="margin-top: 10px;">File: ${e.file}</div>`:f}
      ${e.truncated?c`
              <div class="callout" style="margin-top: 10px">Log output truncated; showing latest chunk.</div>
            `:f}
      ${e.error?c`<div class="callout danger" style="margin-top: 10px;">${e.error}</div>`:f}

      <div class="log-stream" style="margin-top: 12px;" @scroll=${e.onScroll}>
        ${s.length===0?c`
                <div class="muted" style="padding: 12px">No log entries.</div>
              `:s.map(o=>c`
                <div class="log-row">
                  <div class="log-time mono">${_$(o.time)}</div>
                  <div class="log-level ${o.level??""}">${o.level??""}</div>
                  <div class="log-subsystem mono">${o.subsystem??""}</div>
                  <div class="log-message mono">${o.message??o.raw}</div>
                </div>
              `)}
      </div>
    </section>
  `}function Ud(e){const t=e?.agents??{},n=Array.isArray(t.list)?t.list:[],s=[];return n.forEach((i,o)=>{if(!i||typeof i!="object")return;const a=i,r=typeof a.id=="string"?a.id.trim():"";if(!r)return;const l=typeof a.name=="string"?a.name.trim():void 0,d=a.default===!0;s.push({id:r,name:l||void 0,isDefault:d,index:o,record:a})}),s}function Bd(e,t){const n=new Set(t),s=[];for(const i of e){if(!(Array.isArray(i.commands)?i.commands:[]).some(d=>n.has(String(d))))continue;const r=typeof i.nodeId=="string"?i.nodeId.trim():"";if(!r)continue;const l=typeof i.displayName=="string"&&i.displayName.trim()?i.displayName.trim():r;s.push({id:r,label:l===r?r:`${l} · ${r}`})}return s.sort((i,o)=>i.label.localeCompare(o.label)),s}const St="__defaults__",pl=[{value:"deny",label:"Deny"},{value:"allowlist",label:"Allowlist"},{value:"full",label:"Full"}],I$=[{value:"off",label:"Off"},{value:"on-miss",label:"On miss"},{value:"always",label:"Always"}];function fl(e){return e==="allowlist"||e==="full"||e==="deny"?e:"deny"}function L$(e){return e==="always"||e==="off"||e==="on-miss"?e:"on-miss"}function M$(e){const t=e?.defaults??{};return{security:fl(t.security),ask:L$(t.ask),askFallback:fl(t.askFallback??"deny"),autoAllowSkills:!!(t.autoAllowSkills??!1)}}function D$(e){return Ud(e).map(t=>({id:t.id,name:t.name,isDefault:t.isDefault}))}function F$(e,t){const n=D$(e),s=Object.keys(t?.agents??{}),i=new Map;n.forEach(a=>i.set(a.id,a)),s.forEach(a=>{i.has(a)||i.set(a,{id:a})});const o=Array.from(i.values());return o.length===0&&o.push({id:"main",isDefault:!0}),o.sort((a,r)=>{if(a.isDefault&&!r.isDefault)return-1;if(!a.isDefault&&r.isDefault)return 1;const l=a.name?.trim()?a.name:a.id,d=r.name?.trim()?r.name:r.id;return l.localeCompare(d)}),o}function P$(e,t){return e===St?St:e&&t.some(n=>n.id===e)?e:St}function N$(e){const t=e.execApprovalsForm??e.execApprovalsSnapshot?.file??null,n=!!t,s=M$(t),i=F$(e.configForm,t),o=K$(e.nodes),a=e.execApprovalsTarget;let r=a==="node"&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;a==="node"&&r&&!o.some(u=>u.id===r)&&(r=null);const l=P$(e.execApprovalsSelectedAgent,i),d=l!==St?(t?.agents??{})[l]??null:null,g=Array.isArray(d?.allowlist)?d.allowlist??[]:[];return{ready:n,disabled:e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:t,defaults:s,selectedScope:l,selectedAgent:d,agents:i,allowlist:g,target:a,targetNodeId:r,targetNodes:o,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals}}function O$(e){const t=e.ready,n=e.target!=="node"||!!e.targetNodeId;return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">Exec approvals</div>
          <div class="card-sub">
            Allowlist and approval policy for <span class="mono">exec host=gateway/node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.dirty||!n}
          @click=${e.onSave}
        >
          ${e.saving?"Saving…":"Save"}
        </button>
      </div>

      ${U$(e)}

      ${t?c`
            ${B$(e)}
            ${H$(e)}
            ${e.selectedScope===St?f:z$(e)}
          `:c`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">Load exec approvals to edit allowlists.</div>
            <button class="btn" ?disabled=${e.loading||!n} @click=${e.onLoad}>
              ${e.loading?"Loading…":"Load approvals"}
            </button>
          </div>`}
    </section>
  `}function U$(e){const t=e.targetNodes.length>0,n=e.targetNodeId??"";return c`
    <div class="list" style="margin-top: 12px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Target</div>
          <div class="list-sub">
            Gateway edits local approvals; node edits the selected node.
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Host</span>
            <select
              ?disabled=${e.disabled}
              @change=${s=>{if(s.target.value==="node"){const a=e.targetNodes[0]?.id??null;e.onSelectTarget("node",n||a)}else e.onSelectTarget("gateway",null)}}
            >
              <option value="gateway" ?selected=${e.target==="gateway"}>Gateway</option>
              <option value="node" ?selected=${e.target==="node"}>Node</option>
            </select>
          </label>
          ${e.target==="node"?c`
                <label class="field">
                  <span>Node</span>
                  <select
                    ?disabled=${e.disabled||!t}
                    @change=${s=>{const o=s.target.value.trim();e.onSelectTarget("node",o||null)}}
                  >
                    <option value="" ?selected=${n===""}>Select node</option>
                    ${e.targetNodes.map(s=>c`<option
                          value=${s.id}
                          ?selected=${n===s.id}
                        >
                          ${s.label}
                        </option>`)}
                  </select>
                </label>
              `:f}
        </div>
      </div>
      ${e.target==="node"&&!t?c`
              <div class="muted">No nodes advertise exec approvals yet.</div>
            `:f}
    </div>
  `}function B$(e){return c`
    <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap;">
      <span class="label">Scope</span>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button
          class="btn btn--sm ${e.selectedScope===St?"active":""}"
          @click=${()=>e.onSelectScope(St)}
        >
          Defaults
        </button>
        ${e.agents.map(t=>{const n=t.name?.trim()?`${t.name} (${t.id})`:t.id;return c`
            <button
              class="btn btn--sm ${e.selectedScope===t.id?"active":""}"
              @click=${()=>e.onSelectScope(t.id)}
            >
              ${n}
            </button>
          `})}
      </div>
    </div>
  `}function H$(e){const t=e.selectedScope===St,n=e.defaults,s=e.selectedAgent??{},i=t?["defaults"]:["agents",e.selectedScope],o=typeof s.security=="string"?s.security:void 0,a=typeof s.ask=="string"?s.ask:void 0,r=typeof s.askFallback=="string"?s.askFallback:void 0,l=t?n.security:o??"__default__",d=t?n.ask:a??"__default__",g=t?n.askFallback:r??"__default__",u=typeof s.autoAllowSkills=="boolean"?s.autoAllowSkills:void 0,m=u??n.autoAllowSkills,h=u==null;return c`
    <div class="list" style="margin-top: 16px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Security</div>
          <div class="list-sub">
            ${t?"Default security mode.":`Default: ${n.security}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Mode</span>
            <select
              ?disabled=${e.disabled}
              @change=${b=>{const _=b.target.value;!t&&_==="__default__"?e.onRemove([...i,"security"]):e.onPatch([...i,"security"],_)}}
            >
              ${t?f:c`<option value="__default__" ?selected=${l==="__default__"}>
                    Use default (${n.security})
                  </option>`}
              ${pl.map(b=>c`<option
                    value=${b.value}
                    ?selected=${l===b.value}
                  >
                    ${b.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Ask</div>
          <div class="list-sub">
            ${t?"Default prompt policy.":`Default: ${n.ask}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Mode</span>
            <select
              ?disabled=${e.disabled}
              @change=${b=>{const _=b.target.value;!t&&_==="__default__"?e.onRemove([...i,"ask"]):e.onPatch([...i,"ask"],_)}}
            >
              ${t?f:c`<option value="__default__" ?selected=${d==="__default__"}>
                    Use default (${n.ask})
                  </option>`}
              ${I$.map(b=>c`<option
                    value=${b.value}
                    ?selected=${d===b.value}
                  >
                    ${b.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Ask fallback</div>
          <div class="list-sub">
            ${t?"Applied when the UI prompt is unavailable.":`Default: ${n.askFallback}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Fallback</span>
            <select
              ?disabled=${e.disabled}
              @change=${b=>{const _=b.target.value;!t&&_==="__default__"?e.onRemove([...i,"askFallback"]):e.onPatch([...i,"askFallback"],_)}}
            >
              ${t?f:c`<option value="__default__" ?selected=${g==="__default__"}>
                    Use default (${n.askFallback})
                  </option>`}
              ${pl.map(b=>c`<option
                    value=${b.value}
                    ?selected=${g===b.value}
                  >
                    ${b.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Auto-allow skill CLIs</div>
          <div class="list-sub">
            ${t?"Allow skill executables listed by the Gateway.":h?`Using default (${n.autoAllowSkills?"on":"off"}).`:`Override (${m?"on":"off"}).`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Enabled</span>
            <input
              type="checkbox"
              ?disabled=${e.disabled}
              .checked=${m}
              @change=${b=>{const y=b.target;e.onPatch([...i,"autoAllowSkills"],y.checked)}}
            />
          </label>
          ${!t&&!h?c`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...i,"autoAllowSkills"])}
              >
                Use default
              </button>`:f}
        </div>
      </div>
    </div>
  `}function z$(e){const t=["agents",e.selectedScope,"allowlist"],n=e.allowlist;return c`
    <div class="row" style="margin-top: 18px; justify-content: space-between;">
      <div>
        <div class="card-title">Allowlist</div>
        <div class="card-sub">Case-insensitive glob patterns.</div>
      </div>
      <button
        class="btn btn--sm"
        ?disabled=${e.disabled}
        @click=${()=>{const s=[...n,{pattern:""}];e.onPatch(t,s)}}
      >
        Add pattern
      </button>
    </div>
    <div class="list" style="margin-top: 12px;">
      ${n.length===0?c`
              <div class="muted">No allowlist entries yet.</div>
            `:n.map((s,i)=>j$(e,s,i))}
    </div>
  `}function j$(e,t,n){const s=t.lastUsedAt?se(t.lastUsedAt):"never",i=t.lastUsedCommand?ji(t.lastUsedCommand,120):null,o=t.lastResolvedPath?ji(t.lastResolvedPath,120):null;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${t.pattern?.trim()?t.pattern:"New pattern"}</div>
        <div class="list-sub">Last used: ${s}</div>
        ${i?c`<div class="list-sub mono">${i}</div>`:f}
        ${o?c`<div class="list-sub mono">${o}</div>`:f}
      </div>
      <div class="list-meta">
        <label class="field">
          <span>Pattern</span>
          <input
            type="text"
            .value=${t.pattern??""}
            ?disabled=${e.disabled}
            @input=${a=>{const r=a.target;e.onPatch(["agents",e.selectedScope,"allowlist",n,"pattern"],r.value)}}
          />
        </label>
        <button
          class="btn btn--sm danger"
          ?disabled=${e.disabled}
          @click=${()=>{if(e.allowlist.length<=1){e.onRemove(["agents",e.selectedScope,"allowlist"]);return}e.onRemove(["agents",e.selectedScope,"allowlist",n])}}
        >
          Remove
        </button>
      </div>
    </div>
  `}function K$(e){return Bd(e,["system.execApprovals.get","system.execApprovals.set"])}function W$(e){const t=Q$(e),n=N$(e);return c`
    ${O$(n)}
    ${Y$(t)}
    ${q$(e)}
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Nodes</div>
          <div class="card-sub">Paired devices and live links.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>
      <div class="list" style="margin-top: 16px;">
        ${e.nodes.length===0?c`
                <div class="muted">No nodes found.</div>
              `:e.nodes.map(s=>tx(s))}
      </div>
    </section>
  `}function q$(e){const t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],s=Array.isArray(t.paired)?t.paired:[];return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Devices</div>
          <div class="card-sub">Pairing requests + role tokens.</div>
        </div>
        <button class="btn" ?disabled=${e.devicesLoading} @click=${e.onDevicesRefresh}>
          ${e.devicesLoading?"Loading…":"Refresh"}
        </button>
      </div>
      ${e.devicesError?c`<div class="callout danger" style="margin-top: 12px;">${e.devicesError}</div>`:f}
      <div class="list" style="margin-top: 16px;">
        ${n.length>0?c`
              <div class="muted" style="margin-bottom: 8px;">Pending</div>
              ${n.map(i=>G$(i,e))}
            `:f}
        ${s.length>0?c`
              <div class="muted" style="margin-top: 12px; margin-bottom: 8px;">Paired</div>
              ${s.map(i=>J$(i,e))}
            `:f}
        ${n.length===0&&s.length===0?c`
                <div class="muted">No paired devices.</div>
              `:f}
      </div>
    </section>
  `}function G$(e,t){const n=e.displayName?.trim()||e.deviceId,s=typeof e.ts=="number"?se(e.ts):"n/a",i=e.role?.trim()?`role: ${e.role}`:"role: -",o=e.isRepair?" · repair":"",a=e.remoteIp?` · ${e.remoteIp}`:"";return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${a}</div>
        <div class="muted" style="margin-top: 6px;">
          ${i} · requested ${s}${o}
        </div>
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm primary" @click=${()=>t.onDeviceApprove(e.requestId)}>
            Approve
          </button>
          <button class="btn btn--sm" @click=${()=>t.onDeviceReject(e.requestId)}>
            Reject
          </button>
        </div>
      </div>
    </div>
  `}function J$(e,t){const n=e.displayName?.trim()||e.deviceId,s=e.remoteIp?` · ${e.remoteIp}`:"",i=`roles: ${zi(e.roles)}`,o=`scopes: ${zi(e.scopes)}`,a=Array.isArray(e.tokens)?e.tokens:[];return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${s}</div>
        <div class="muted" style="margin-top: 6px;">${i} · ${o}</div>
        ${a.length===0?c`
                <div class="muted" style="margin-top: 6px">Tokens: none</div>
              `:c`
              <div class="muted" style="margin-top: 10px;">Tokens</div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                ${a.map(r=>V$(e.deviceId,r,t))}
              </div>
            `}
      </div>
    </div>
  `}function V$(e,t,n){const s=t.revokedAtMs?"revoked":"active",i=`scopes: ${zi(t.scopes)}`,o=se(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return c`
    <div class="row" style="justify-content: space-between; gap: 8px;">
      <div class="list-sub">${t.role} · ${s} · ${i} · ${o}</div>
      <div class="row" style="justify-content: flex-end; gap: 6px; flex-wrap: wrap;">
        <button
          class="btn btn--sm"
          @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
        >
          Rotate
        </button>
        ${t.revokedAtMs?f:c`
              <button
                class="btn btn--sm danger"
                @click=${()=>n.onDeviceRevoke(e,t.role)}
              >
                Revoke
              </button>
            `}
      </div>
    </div>
  `}function Q$(e){const t=e.configForm,n=X$(e.nodes),{defaultBinding:s,agents:i}=ex(t),o=!!t,a=e.configSaving||e.configFormMode==="raw";return{ready:o,disabled:a,configDirty:e.configDirty,configLoading:e.configLoading,configSaving:e.configSaving,defaultBinding:s,agents:i,nodes:n,onBindDefault:e.onBindDefault,onBindAgent:e.onBindAgent,onSave:e.onSaveBindings,onLoadConfig:e.onLoadConfig,formMode:e.configFormMode}}function Y$(e){const t=e.nodes.length>0,n=e.defaultBinding??"";return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">Exec node binding</div>
          <div class="card-sub">
            Pin agents to a specific node when using <span class="mono">exec host=node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.configDirty}
          @click=${e.onSave}
        >
          ${e.configSaving?"Saving…":"Save"}
        </button>
      </div>

      ${e.formMode==="raw"?c`
              <div class="callout warn" style="margin-top: 12px">
                Switch the Config tab to <strong>Form</strong> mode to edit bindings here.
              </div>
            `:f}

      ${e.ready?c`
            <div class="list" style="margin-top: 16px;">
              <div class="list-item">
                <div class="list-main">
                  <div class="list-title">Default binding</div>
                  <div class="list-sub">Used when agents do not override a node binding.</div>
                </div>
                <div class="list-meta">
                  <label class="field">
                    <span>Node</span>
                    <select
                      ?disabled=${e.disabled||!t}
                      @change=${s=>{const o=s.target.value.trim();e.onBindDefault(o||null)}}
                    >
                      <option value="" ?selected=${n===""}>Any node</option>
                      ${e.nodes.map(s=>c`<option
                            value=${s.id}
                            ?selected=${n===s.id}
                          >
                            ${s.label}
                          </option>`)}
                    </select>
                  </label>
                  ${t?f:c`
                          <div class="muted">No nodes with system.run available.</div>
                        `}
                </div>
              </div>

              ${e.agents.length===0?c`
                      <div class="muted">No agents found.</div>
                    `:e.agents.map(s=>Z$(s,e))}
            </div>
          `:c`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">Load config to edit bindings.</div>
            <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
              ${e.configLoading?"Loading…":"Load config"}
            </button>
          </div>`}
    </section>
  `}function Z$(e,t){const n=e.binding??"__default__",s=e.name?.trim()?`${e.name} (${e.id})`:e.id,i=t.nodes.length>0;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${e.isDefault?"default agent":"agent"} ·
          ${n==="__default__"?`uses default (${t.defaultBinding??"any"})`:`override: ${e.binding}`}
        </div>
      </div>
      <div class="list-meta">
        <label class="field">
          <span>Binding</span>
          <select
            ?disabled=${t.disabled||!i}
            @change=${o=>{const r=o.target.value.trim();t.onBindAgent(e.index,r==="__default__"?null:r)}}
          >
            <option value="__default__" ?selected=${n==="__default__"}>
              Use default
            </option>
            ${t.nodes.map(o=>c`<option
                  value=${o.id}
                  ?selected=${n===o.id}
                >
                  ${o.label}
                </option>`)}
          </select>
        </label>
      </div>
    </div>
  `}function X$(e){return Bd(e,["system.run"])}function ex(e){const t={id:"main",name:void 0,index:0,isDefault:!0,binding:null};if(!e||typeof e!="object")return{defaultBinding:null,agents:[t]};const s=(e.tools??{}).exec??{},i=typeof s.node=="string"&&s.node.trim()?s.node.trim():null,o=e.agents??{};if(!Array.isArray(o.list)||o.list.length===0)return{defaultBinding:i,agents:[t]};const a=Ud(e).map(r=>{const d=(r.record.tools??{}).exec??{},g=typeof d.node=="string"&&d.node.trim()?d.node.trim():null;return{id:r.id,name:r.name,index:r.index,isDefault:r.isDefault,binding:g}});return a.length===0&&a.push(t),{defaultBinding:i,agents:a}}function tx(e){const t=!!e.connected,n=!!e.paired,s=typeof e.displayName=="string"&&e.displayName.trim()||(typeof e.nodeId=="string"?e.nodeId:"unknown"),i=Array.isArray(e.caps)?e.caps:[],o=Array.isArray(e.commands)?e.commands:[];return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${typeof e.nodeId=="string"?e.nodeId:""}
          ${typeof e.remoteIp=="string"?` · ${e.remoteIp}`:""}
          ${typeof e.version=="string"?` · ${e.version}`:""}
        </div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${n?"paired":"unpaired"}</span>
          <span class="chip ${t?"chip-ok":"chip-warn"}">
            ${t?"connected":"offline"}
          </span>
          ${i.slice(0,12).map(a=>c`<span class="chip">${String(a)}</span>`)}
          ${o.slice(0,8).map(a=>c`<span class="chip">${String(a)}</span>`)}
        </div>
      </div>
    </div>
  `}function nx(e,t,n){return e||!t?!1:n===me.PAIRING_REQUIRED?!0:t.toLowerCase().includes("pairing required")}function sx(e){const t=e.hello?.snapshot,n=t?.uptimeMs?_o(t.uptimeMs):p("common.na"),s=t?.policy?.tickIntervalMs?`${t.policy.tickIntervalMs}ms`:p("common.na"),o=t?.authMode==="trusted-proxy",a=nx(e.connected,e.lastError,e.lastErrorCode)?c`
      <div class="muted" style="margin-top: 8px">
        ${p("overview.pairing.hint")}
        <div style="margin-top: 6px">
          <span class="mono">openclaw devices list</span><br />
          <span class="mono">openclaw devices approve &lt;requestId&gt;</span>
        </div>
        <div style="margin-top: 6px; font-size: 12px;">
          ${p("overview.pairing.mobileHint")}
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#device-pairing-first-connection"
            target=${cn}
            rel=${dn()}
            title="Device pairing docs (opens in new tab)"
            >Docs: Device pairing</a
          >
        </div>
      </div>
    `:null,r=(()=>{if(e.connected||!e.lastError)return null;const g=e.lastError.toLowerCase(),u=new Set([me.AUTH_REQUIRED,me.AUTH_TOKEN_MISSING,me.AUTH_PASSWORD_MISSING,me.AUTH_TOKEN_NOT_CONFIGURED,me.AUTH_PASSWORD_NOT_CONFIGURED]),m=new Set([...u,me.AUTH_UNAUTHORIZED,me.AUTH_TOKEN_MISMATCH,me.AUTH_PASSWORD_MISMATCH,me.AUTH_DEVICE_TOKEN_MISMATCH,me.AUTH_RATE_LIMITED,me.AUTH_TAILSCALE_IDENTITY_MISSING,me.AUTH_TAILSCALE_PROXY_MISSING,me.AUTH_TAILSCALE_WHOIS_FAILED,me.AUTH_TAILSCALE_IDENTITY_MISMATCH]);if(!(e.lastErrorCode?m.has(e.lastErrorCode):g.includes("unauthorized")||g.includes("connect failed")))return null;const b=e.lastErrorCode===me.AUTH_RATE_LIMITED||g.includes("retry later"),y=!!e.settings.token.trim(),_=!!e.password.trim();return(e.lastErrorCode?u.has(e.lastErrorCode):!y&&!_)?c`
        <div class="muted" style="margin-top: 8px">
          ${p("overview.auth.required")}
          <div style="margin-top: 6px">
            <span class="mono">openclaw dashboard --no-open</span> → tokenized URL<br />
            <span class="mono">openclaw doctor --generate-gateway-token</span> → set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.openclaw.ai/web/dashboard"
              target=${cn}
              rel=${dn()}
              title="Control UI auth docs (opens in new tab)"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `:c`
      <div class="muted" style="margin-top: 8px">
        ${p("overview.auth.failed",{command:"openclaw dashboard --no-open"})}
        ${b?c`
              <div style="margin-top: 6px">${p("overview.auth.rateLimited")}</div>
            `:""}
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/dashboard"
            target=${cn}
            rel=${dn()}
            title="Control UI auth docs (opens in new tab)"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `})(),l=(()=>{if(e.connected||!e.lastError||(typeof window<"u"?window.isSecureContext:!0))return null;const u=e.lastError.toLowerCase();return!(e.lastErrorCode===me.CONTROL_UI_DEVICE_IDENTITY_REQUIRED||e.lastErrorCode===me.DEVICE_IDENTITY_REQUIRED)&&!u.includes("secure context")&&!u.includes("device identity required")?null:c`
      <div class="muted" style="margin-top: 8px">
        ${p("overview.insecure.hint",{url:"http://127.0.0.1:18789"})}
        <div style="margin-top: 6px">
          ${p("overview.insecure.stayHttp",{config:"gateway.controlUi.allowInsecureAuth: true"})}
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/gateway/tailscale"
            target=${cn}
            rel=${dn()}
            title="Tailscale Serve docs (opens in new tab)"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#insecure-http"
            target=${cn}
            rel=${dn()}
            title="Insecure HTTP docs (opens in new tab)"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `})(),d=Kn.getLocale();return c`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${p("overview.access.title")}</div>
        <div class="card-sub">${p("overview.access.subtitle")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${p("overview.access.wsUrl")}</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${g=>{const u=g.target.value;e.onSettingsChange({...e.settings,gatewayUrl:u})}}
              placeholder="ws://100.x.y.z:18789"
            />
          </label>
          ${o?"":c`
                <label class="field">
                  <span>${p("overview.access.token")}</span>
                  <input
                    .value=${e.settings.token}
                    @input=${g=>{const u=g.target.value;e.onSettingsChange({...e.settings,token:u})}}
                    placeholder="OPENCLAW_GATEWAY_TOKEN"
                  />
                </label>
                <label class="field">
                  <span>${p("overview.access.password")}</span>
                  <input
                    type="password"
                    .value=${e.password}
                    @input=${g=>{const u=g.target.value;e.onPasswordChange(u)}}
                    placeholder="system or shared password"
                  />
                </label>
              `}
          <label class="field">
            <span>${p("overview.access.sessionKey")}</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${g=>{const u=g.target.value;e.onSessionKeyChange(u)}}
            />
          </label>
          <label class="field">
            <span>${p("overview.access.language")}</span>
            <select
              .value=${d}
              @change=${g=>{const u=g.target.value;Kn.setLocale(u),e.onSettingsChange({...e.settings,locale:u})}}
            >
              ${Al.map(g=>{const u=g.replace(/-([a-zA-Z])/g,(m,h)=>h.toUpperCase());return c`<option value=${g}>${p(`languages.${u}`)}</option>`})}
            </select>
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>${p("common.connect")}</button>
          <button class="btn" @click=${()=>e.onRefresh()}>${p("common.refresh")}</button>
          <span class="muted">${p(o?"overview.access.trustedProxy":"overview.access.connectHint")}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${p("overview.snapshot.title")}</div>
        <div class="card-sub">${p("overview.snapshot.subtitle")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${p("overview.snapshot.status")}</div>
            <div class="stat-value ${e.connected?"ok":"warn"}">
              ${e.connected?p("common.ok"):p("common.offline")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${p("overview.snapshot.uptime")}</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${p("overview.snapshot.tickInterval")}</div>
            <div class="stat-value">${s}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${p("overview.snapshot.lastChannelsRefresh")}</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?se(e.lastChannelsRefresh):p("common.na")}
            </div>
          </div>
        </div>
        ${e.lastError?c`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${a??""}
              ${r??""}
              ${l??""}
            </div>`:c`
                <div class="callout" style="margin-top: 14px">
                  ${p("overview.snapshot.channelsHint")}
                </div>
              `}
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      <div class="card stat-card">
        <div class="stat-label">${p("overview.stats.instances")}</div>
        <div class="stat-value">${e.presenceCount}</div>
        <div class="muted">${p("overview.stats.instancesHint")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${p("overview.stats.sessions")}</div>
        <div class="stat-value">${e.sessionsCount??p("common.na")}</div>
        <div class="muted">${p("overview.stats.sessionsHint")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${p("overview.stats.cron")}</div>
        <div class="stat-value">
          ${e.cronEnabled==null?p("common.na"):e.cronEnabled?p("common.enabled"):p("common.disabled")}
        </div>
        <div class="muted">${p("overview.stats.cronNext",{time:Qo(e.cronNext)})}</div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${p("overview.notes.title")}</div>
      <div class="card-sub">${p("overview.notes.subtitle")}</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">${p("overview.notes.tailscaleTitle")}</div>
          <div class="muted">
            ${p("overview.notes.tailscaleText")}
          </div>
        </div>
        <div>
          <div class="note-title">${p("overview.notes.sessionTitle")}</div>
          <div class="muted">${p("overview.notes.sessionText")}</div>
        </div>
        <div>
          <div class="note-title">${p("overview.notes.cronTitle")}</div>
          <div class="muted">${p("overview.notes.cronText")}</div>
        </div>
      </div>
    </section>
  `}const ix=["","off","minimal","low","medium","high","xhigh"],ox=["","off","on"],ax=[{value:"",label:"inherit"},{value:"off",label:"off (explicit)"},{value:"on",label:"on"},{value:"full",label:"full"}],rx=["","off","on","stream"];function lx(e){if(!e)return"";const t=e.trim().toLowerCase();return t==="z.ai"||t==="z-ai"?"zai":t}function Hd(e){return lx(e)==="zai"}function cx(e){return Hd(e)?ox:ix}function hl(e,t){return t?e.includes(t)?[...e]:[...e,t]:[...e]}function dx(e,t){return t?e.some(n=>n.value===t)?[...e]:[...e,{value:t,label:`${t} (custom)`}]:[...e]}function ux(e,t){return!t||!e||e==="off"?e:"on"}function gx(e,t){return e?t&&e==="on"?"low":e:null}function px(e){const t=e.result?.sessions??[];return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Sessions</div>
          <div class="card-sub">Active session keys and per-session overrides.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>Active within (minutes)</span>
          <input
            .value=${e.activeMinutes}
            @input=${n=>e.onFiltersChange({activeMinutes:n.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field">
          <span>Limit</span>
          <input
            .value=${e.limit}
            @input=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:n.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>Include global</span>
          <input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:n.target.checked,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>Include unknown</span>
          <input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:n.target.checked})}
          />
        </label>
      </div>

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}

      <div class="muted" style="margin-top: 12px;">
        ${e.result?`Store: ${e.result.path}`:""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          <div>Key</div>
          <div>Label</div>
          <div>Kind</div>
          <div>Updated</div>
          <div>Tokens</div>
          <div>Thinking</div>
          <div>Verbose</div>
          <div>Reasoning</div>
          <div>Actions</div>
        </div>
        ${t.length===0?c`
                <div class="muted">No sessions found.</div>
              `:t.map(n=>fx(n,e.basePath,e.onPatch,e.onDelete,e.loading))}
      </div>
    </section>
  `}function fx(e,t,n,s,i){const o=e.updatedAt?se(e.updatedAt):"n/a",a=e.thinkingLevel??"",r=Hd(e.modelProvider),l=ux(a,r),d=hl(cx(e.modelProvider),l),g=e.verboseLevel??"",u=dx(ax,g),m=e.reasoningLevel??"",h=hl(rx,m),b=typeof e.displayName=="string"&&e.displayName.trim().length>0?e.displayName.trim():null,y=typeof e.label=="string"?e.label.trim():"",_=!!(b&&b!==e.key&&b!==y),L=e.kind!=="global",R=L?`${Vs("chat",t)}?session=${encodeURIComponent(e.key)}`:null;return c`
    <div class="table-row">
      <div class="mono session-key-cell">
        ${L?c`<a href=${R} class="session-link">${e.key}</a>`:e.key}
        ${_?c`<span class="muted session-key-display-name">${b}</span>`:f}
      </div>
      <div>
        <input
          .value=${e.label??""}
          ?disabled=${i}
          placeholder="(optional)"
          @change=${A=>{const S=A.target.value.trim();n(e.key,{label:S||null})}}
        />
      </div>
      <div>${e.kind}</div>
      <div>${o}</div>
      <div>${iv(e)}</div>
      <div>
        <select
          ?disabled=${i}
          @change=${A=>{const S=A.target.value;n(e.key,{thinkingLevel:gx(S,r)})}}
        >
          ${d.map(A=>c`<option value=${A} ?selected=${l===A}>
                ${A||"inherit"}
              </option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${i}
          @change=${A=>{const S=A.target.value;n(e.key,{verboseLevel:S||null})}}
        >
          ${u.map(A=>c`<option value=${A.value} ?selected=${g===A.value}>
                ${A.label}
              </option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${i}
          @change=${A=>{const S=A.target.value;n(e.key,{reasoningLevel:S||null})}}
        >
          ${h.map(A=>c`<option value=${A} ?selected=${m===A}>
                ${A||"inherit"}
              </option>`)}
        </select>
      </div>
      <div>
        <button class="btn danger" ?disabled=${i} @click=${()=>s(e.key)}>
          Delete
        </button>
      </div>
    </div>
  `}function hx(e){const t=e.report?.skills??[],n=e.filter.trim().toLowerCase(),s=n?t.filter(o=>[o.name,o.description,o.source].join(" ").toLowerCase().includes(n)):t,i=ed(s);return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">Bundled, managed, and workspace skills.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>Filter</span>
          <input
            .value=${e.filter}
            @input=${o=>e.onFilterChange(o.target.value)}
            placeholder="Search skills"
          />
        </label>
        <div class="muted">${s.length} shown</div>
      </div>

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}

      ${s.length===0?c`
              <div class="muted" style="margin-top: 16px">No skills found.</div>
            `:c`
            <div class="agent-skills-groups" style="margin-top: 16px;">
              ${i.map(o=>{const a=o.id==="workspace"||o.id==="built-in";return c`
                  <details class="agent-skills-group" ?open=${!a}>
                    <summary class="agent-skills-header">
                      <span>${o.label}</span>
                      <span class="muted">${o.skills.length}</span>
                    </summary>
                    <div class="list skills-grid">
                      ${o.skills.map(r=>mx(r,e))}
                    </div>
                  </details>
                `})}
            </div>
          `}
    </section>
  `}function mx(e,t){const n=t.busyKey===e.skillKey,s=t.edits[e.skillKey]??"",i=t.messages[e.skillKey]??null,o=e.install.length>0&&e.missing.bins.length>0,a=!!(e.bundled&&e.source!=="openclaw-bundled"),r=td(e),l=nd(e);return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">
          ${e.emoji?`${e.emoji} `:""}${e.name}
        </div>
        <div class="list-sub">${ji(e.description,140)}</div>
        ${sd({skill:e,showBundledBadge:a})}
        ${r.length>0?c`
              <div class="muted" style="margin-top: 6px;">
                Missing: ${r.join(", ")}
              </div>
            `:f}
        ${l.length>0?c`
              <div class="muted" style="margin-top: 6px;">
                Reason: ${l.join(", ")}
              </div>
            `:f}
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; flex-wrap: wrap;">
          <button
            class="btn"
            ?disabled=${n}
            @click=${()=>t.onToggle(e.skillKey,e.disabled)}
          >
            ${e.disabled?"Enable":"Disable"}
          </button>
          ${o?c`<button
                class="btn"
                ?disabled=${n}
                @click=${()=>t.onInstall(e.skillKey,e.name,e.install[0].id)}
              >
                ${n?"Installing…":e.install[0].label}
              </button>`:f}
        </div>
        ${i?c`<div
              class="muted"
              style="margin-top: 8px; color: ${i.kind==="error"?"var(--danger-color, #d14343)":"var(--success-color, #0a7f5a)"};"
            >
              ${i.message}
            </div>`:f}
        ${e.primaryEnv?c`
              <div class="field" style="margin-top: 10px;">
                <span>API key</span>
                <input
                  type="password"
                  .value=${s}
                  @input=${d=>t.onEdit(e.skillKey,d.target.value)}
                />
              </div>
              <button
                class="btn primary"
                style="margin-top: 8px;"
                ?disabled=${n}
                @click=${()=>t.onSaveKey(e.skillKey)}
              >
                Save key
              </button>
            `:f}
      </div>
    </div>
  `}const vx=/^data:/i,bx=/^https?:\/\//i,yx=["off","minimal","low","medium","high"],$x=["UTC","America/Los_Angeles","America/Denver","America/Chicago","America/New_York","Europe/London","Europe/Berlin","Asia/Tokyo"];function xx(e){return/^https?:\/\//i.test(e.trim())}function Ni(e){return typeof e=="string"?e.trim():""}function wx(e){const t=new Set,n=[];for(const s of e){const i=s.trim();if(!i)continue;const o=i.toLowerCase();t.has(o)||(t.add(o),n.push(i))}return n}function Sx(e){const t=e.agentsList?.agents??[],s=Dl(e.sessionKey)?.agentId??e.agentsList?.defaultId??"main",o=t.find(r=>r.id===s)?.identity,a=o?.avatarUrl??o?.avatar;if(a)return vx.test(a)||bx.test(a)?a:o?.avatarUrl}function kx(e){const t=typeof e.hello?.server?.version=="string"&&e.hello.server.version.trim()||e.updateAvailable?.currentVersion||p("common.na"),n=e.updateAvailable&&e.updateAvailable.latestVersion!==e.updateAvailable.currentVersion?e.updateAvailable:null,s=n?"warn":"ok",i=e.presenceEntries.length,o=e.sessionsResult?.count??null,a=e.cronStatus?.nextWakeAtMs??null,r=e.connected?null:p("chat.disconnected"),l=e.tab==="chat",d=l&&(e.settings.chatFocusMode||e.onboarding),g=e.onboarding?!1:e.settings.chatShowThinking,u=Sx(e),m=e.chatAvatarUrl??u??null,h=e.configForm??e.configSnapshot?.config,b=Et(e.basePath??""),y=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null,_=Array.from(new Set([...e.agentsList?.agents?.map(v=>v.id.trim())??[],...e.cronJobs.map(v=>typeof v.agentId=="string"?v.agentId.trim():"").filter(Boolean)].filter(Boolean))).toSorted((v,E)=>v.localeCompare(E)),L=Array.from(new Set([...e.cronModelSuggestions,...Vm(h),...e.cronJobs.map(v=>v.payload.kind!=="agentTurn"||typeof v.payload.model!="string"?"":v.payload.model.trim()).filter(Boolean)].filter(Boolean))).toSorted((v,E)=>v.localeCompare(E)),R=xg(e),A=e.cronForm.deliveryChannel&&e.cronForm.deliveryChannel.trim()?e.cronForm.deliveryChannel.trim():"last",S=e.cronJobs.map(v=>Ni(v.delivery?.to)).filter(Boolean),D=(A==="last"?Object.values(e.channelsSnapshot?.channelAccounts??{}).flat():e.channelsSnapshot?.channelAccounts?.[A]??[]).flatMap(v=>[Ni(v.accountId),Ni(v.name)]).filter(Boolean),T=wx([...S,...D]),I=e.cronForm.deliveryMode==="webhook"?T.filter(v=>xx(v)):T;return c`
    <div class="shell ${l?"shell--chat":""} ${d?"shell--chat-focus":""} ${e.settings.navCollapsed?"shell--nav-collapsed":""} ${e.onboarding?"shell--onboarding":""}">
      <header class="topbar">
        <div class="topbar-left">
          <button
            class="nav-collapse-toggle"
            @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
            title="${e.settings.navCollapsed?p("nav.expand"):p("nav.collapse")}"
            aria-label="${e.settings.navCollapsed?p("nav.expand"):p("nav.collapse")}"
          >
            <span class="nav-collapse-toggle__icon">${he.menu}</span>
          </button>
          <div class="brand">
            <div class="brand-logo">
              <img src=${b?`${b}/favicon.svg`:"/favicon.svg"} alt="OpenClaw" />
            </div>
            <div class="brand-text">
              <div class="brand-title">OPENCLAW</div>
              <div class="brand-sub">Gateway Dashboard</div>
            </div>
          </div>
        </div>
        <div class="topbar-status">
          <div class="pill">
            <span class="statusDot ${s}"></span>
            <span>${p("common.version")}</span>
            <span class="mono">${t}</span>
          </div>
          <div class="pill">
            <span class="statusDot ${e.connected?"ok":""}"></span>
            <span>${p("common.health")}</span>
            <span class="mono">${e.connected?p("common.ok"):p("common.offline")}</span>
          </div>
          ${Tm(e)}
        </div>
      </header>
      <aside class="nav ${e.settings.navCollapsed?"nav--collapsed":""}">
        ${Rp.map(v=>{const E=e.settings.navGroupsCollapsed[v.label]??!1,U=v.tabs.some(M=>M===e.tab);return c`
            <div class="nav-group ${E&&!U?"nav-group--collapsed":""}">
              <button
                class="nav-label"
                @click=${()=>{const M={...e.settings.navGroupsCollapsed};M[v.label]=!E,e.applySettings({...e.settings,navGroupsCollapsed:M})}}
                aria-expanded=${!E}
              >
                <span class="nav-label__text">${p(`nav.${v.label}`)}</span>
                <span class="nav-label__chevron">${E?"+":"−"}</span>
              </button>
              <div class="nav-group__items">
                ${v.tabs.map(M=>bm(e,M))}
              </div>
            </div>
          `})}
        <div class="nav-group nav-group--links">
          <div class="nav-label nav-label--static">
            <span class="nav-label__text">${p("common.resources")}</span>
          </div>
          <div class="nav-group__items">
            <a
              class="nav-item nav-item--external"
              href="https://docs.openclaw.ai"
              target=${cn}
              rel=${dn()}
              title="${p("common.docs")} (opens in new tab)"
            >
              <span class="nav-item__icon" aria-hidden="true">${he.book}</span>
              <span class="nav-item__text">${p("common.docs")}</span>
            </a>
          </div>
        </div>
      </aside>
      <main class="content ${l?"content--chat":""}">
        ${n?c`<div class="update-banner callout danger" role="alert">
              <strong>Update available:</strong> v${n.latestVersion}
              (running v${n.currentVersion}).
              <button
                class="btn btn--sm update-banner__btn"
                ?disabled=${e.updateRunning||!e.connected}
                @click=${()=>Ua(e)}
              >${e.updateRunning?"Updating…":"Update now"}</button>
            </div>`:f}
        <section class="content-header">
          <div>
            ${e.tab==="usage"?f:c`<div class="page-title">${Ji(e.tab)}</div>`}
            ${e.tab==="usage"?f:c`<div class="page-sub">${Lp(e.tab)}</div>`}
          </div>
          <div class="page-meta">
            ${e.lastError?c`<div class="pill danger">${e.lastError}</div>`:f}
            ${l?$m(e):f}
          </div>
        </section>

        ${e.tab==="overview"?sx({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,lastErrorCode:e.lastErrorCode,presenceCount:i,sessionsCount:o,cronEnabled:e.cronStatus?.enabled??null,cronNext:a,lastChannelsRefresh:e.channelsLastSuccess,onSettingsChange:v=>e.applySettings(v),onPasswordChange:v=>e.password=v,onSessionKeyChange:v=>{e.sessionKey=v,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:v,lastActiveSessionKey:v}),e.loadAssistantIdentity()},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview()}):f}

        ${e.tab==="channels"?sb({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:v=>Ee(e,v),onWhatsAppStart:v=>e.handleWhatsAppStart(v),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onConfigPatch:(v,E)=>Le(e,v,E),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(v,E)=>e.handleNostrProfileEdit(v,E),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(v,E)=>e.handleNostrProfileFieldChange(v,E),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()}):f}

        ${e.tab==="instances"?C$({loading:e.presenceLoading,entries:e.presenceEntries,lastError:e.presenceError,statusMessage:e.presenceStatus,onRefresh:()=>Uo(e)}):f}

        ${e.tab==="sessions"?px({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,onFiltersChange:v=>{e.sessionsFilterActive=v.activeMinutes,e.sessionsFilterLimit=v.limit,e.sessionsIncludeGlobal=v.includeGlobal,e.sessionsIncludeUnknown=v.includeUnknown},onRefresh:()=>Zt(e),onPatch:(v,E)=>Sp(e,v,E),onDelete:v=>Ap(e,v)}):f}

        ${um(e)}

        ${e.tab==="cron"?p$({basePath:e.basePath,loading:e.cronLoading,jobsLoadingMore:e.cronJobsLoadingMore,status:e.cronStatus,jobs:R,jobsTotal:e.cronJobsTotal,jobsHasMore:e.cronJobsHasMore,jobsQuery:e.cronJobsQuery,jobsEnabledFilter:e.cronJobsEnabledFilter,jobsScheduleKindFilter:e.cronJobsScheduleKindFilter,jobsLastStatusFilter:e.cronJobsLastStatusFilter,jobsSortBy:e.cronJobsSortBy,jobsSortDir:e.cronJobsSortDir,error:e.cronError,busy:e.cronBusy,form:e.cronForm,fieldErrors:e.cronFieldErrors,canSubmit:!jl(e.cronFieldErrors),editingJobId:e.cronEditingJobId,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(v=>v.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,runsTotal:e.cronRunsTotal,runsHasMore:e.cronRunsHasMore,runsLoadingMore:e.cronRunsLoadingMore,runsScope:e.cronRunsScope,runsStatuses:e.cronRunsStatuses,runsDeliveryStatuses:e.cronRunsDeliveryStatuses,runsStatusFilter:e.cronRunsStatusFilter,runsQuery:e.cronRunsQuery,runsSortDir:e.cronRunsSortDir,agentSuggestions:_,modelSuggestions:L,thinkingSuggestions:yx,timezoneSuggestions:$x,deliveryToSuggestions:I,onFormChange:v=>{e.cronForm=Eo({...e.cronForm,...v}),e.cronFieldErrors=Yn(e.cronForm)},onRefresh:()=>e.loadCron(),onAdd:()=>_g(e),onEdit:v=>Mg(e,v),onClone:v=>Fg(e,v),onCancelEdit:()=>Pg(e),onToggle:(v,E)=>Eg(e,v,E),onRun:v=>Rg(e,v),onRemove:v=>Ig(e,v),onLoadRuns:async v=>{Wa(e,{cronRunsScope:"job"}),await xt(e,v)},onLoadMoreJobs:()=>$g(e),onJobsFiltersChange:async v=>{Ka(e,v),(typeof v.cronJobsQuery=="string"||v.cronJobsEnabledFilter||v.cronJobsSortBy||v.cronJobsSortDir)&&await ja(e)},onJobsFiltersReset:async()=>{Ka(e,{cronJobsQuery:"",cronJobsEnabledFilter:"all",cronJobsScheduleKindFilter:"all",cronJobsLastStatusFilter:"all",cronJobsSortBy:"nextRunAtMs",cronJobsSortDir:"asc"}),await ja(e)},onLoadMoreRuns:()=>Lg(e),onRunsFiltersChange:async v=>{if(Wa(e,v),e.cronRunsScope==="all"){await xt(e,null);return}await xt(e,e.cronRunsJobId)}}):f}

        ${e.tab==="agents"?Sv({loading:e.agentsLoading,error:e.agentsError,agentsList:e.agentsList,selectedAgentId:y,activePanel:e.agentsPanel,configForm:h,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,channelsLoading:e.channelsLoading,channelsError:e.channelsError,channelsSnapshot:e.channelsSnapshot,channelsLastSuccess:e.channelsLastSuccess,cronLoading:e.cronLoading,cronStatus:e.cronStatus,cronJobs:e.cronJobs,cronError:e.cronError,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFilesList:e.agentFilesList,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,agentIdentityLoading:e.agentIdentityLoading,agentIdentityError:e.agentIdentityError,agentIdentityById:e.agentIdentityById,agentSkillsLoading:e.agentSkillsLoading,agentSkillsReport:e.agentSkillsReport,agentSkillsError:e.agentSkillsError,agentSkillsAgentId:e.agentSkillsAgentId,toolsCatalogLoading:e.toolsCatalogLoading,toolsCatalogError:e.toolsCatalogError,toolsCatalogResult:e.toolsCatalogResult,skillsFilter:e.skillsFilter,onRefresh:async()=>{await Co(e);const v=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null;await Pn(e,v);const E=e.agentsList?.agents?.map(U=>U.id)??[];E.length>0&&Hl(e,E)},onSelectAgent:v=>{e.agentsSelectedId!==v&&(e.agentsSelectedId=v,Ho(e,"agents",!0),e.agentFilesList=null,e.agentFilesError=null,e.agentFilesLoading=!1,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},e.agentSkillsReport=null,e.agentSkillsError=null,e.agentSkillsAgentId=null,Bl(e,v),e.agentsPanel==="tools"&&Pn(e,v),e.agentsPanel==="files"&&Ai(e,v),e.agentsPanel==="skills"&&xs(e,v))},onSelectPanel:v=>{e.agentsPanel=v,v==="files"&&y&&e.agentFilesList?.agentId!==y&&(e.agentFilesList=null,e.agentFilesError=null,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},Ai(e,y)),v==="tools"&&Pn(e,y),v==="skills"&&y&&xs(e,y),v==="channels"&&Ee(e,!1),v==="cron"&&e.loadCron()},onLoadFiles:v=>Ai(e,v),onSelectFile:v=>{e.agentFileActive=v,y&&Im(e,y,v)},onFileDraftChange:(v,E)=>{e.agentFileDrafts={...e.agentFileDrafts,[v]:E}},onFileReset:v=>{const E=e.agentFileContents[v]??"";e.agentFileDrafts={...e.agentFileDrafts,[v]:E}},onFileSave:v=>{if(!y)return;const E=e.agentFileDrafts[v]??e.agentFileContents[v]??"";Lm(e,y,v,E)},onToolsProfileChange:(v,E,U)=>{if(!h)return;const M=h.agents?.list;if(!Array.isArray(M))return;const j=M.findIndex(J=>J&&typeof J=="object"&&"id"in J&&J.id===v);if(j<0)return;const V=["agents","list",j,"tools"];E?Le(e,[...V,"profile"],E):ot(e,[...V,"profile"]),U&&ot(e,[...V,"allow"])},onToolsOverridesChange:(v,E,U)=>{if(!h)return;const M=h.agents?.list;if(!Array.isArray(M))return;const j=M.findIndex(J=>J&&typeof J=="object"&&"id"in J&&J.id===v);if(j<0)return;const V=["agents","list",j,"tools"];E.length>0?Le(e,[...V,"alsoAllow"],E):ot(e,[...V,"alsoAllow"]),U.length>0?Le(e,[...V,"deny"],U):ot(e,[...V,"deny"])},onConfigReload:()=>ze(e),onConfigSave:()=>$s(e),onChannelsRefresh:()=>Ee(e,!1),onCronRefresh:()=>e.loadCron(),onSkillsFilterChange:v=>e.skillsFilter=v,onSkillsRefresh:()=>{y&&xs(e,y)},onAgentSkillToggle:(v,E,U)=>{if(!h)return;const M=h.agents?.list;if(!Array.isArray(M))return;const j=M.findIndex(Z=>Z&&typeof Z=="object"&&"id"in Z&&Z.id===v);if(j<0)return;const V=M[j],J=E.trim();if(!J)return;const C=e.agentSkillsReport?.skills?.map(Z=>Z.name).filter(Boolean)??[],Q=(Array.isArray(V.skills)?V.skills.map(Z=>String(Z).trim()).filter(Boolean):void 0)??C,oe=new Set(Q);U?oe.add(J):oe.delete(J),Le(e,["agents","list",j,"skills"],[...oe])},onAgentSkillsClear:v=>{if(!h)return;const E=h.agents?.list;if(!Array.isArray(E))return;const U=E.findIndex(M=>M&&typeof M=="object"&&"id"in M&&M.id===v);U<0||ot(e,["agents","list",U,"skills"])},onAgentSkillsDisableAll:v=>{if(!h)return;const E=h.agents?.list;if(!Array.isArray(E))return;const U=E.findIndex(M=>M&&typeof M=="object"&&"id"in M&&M.id===v);U<0||Le(e,["agents","list",U,"skills"],[])},onModelChange:(v,E)=>{if(!h)return;const U=h.agents?.list;if(!Array.isArray(U))return;const M=U.findIndex(C=>C&&typeof C=="object"&&"id"in C&&C.id===v);if(M<0)return;const j=["agents","list",M,"model"];if(!E){ot(e,j);return}const J=U[M]?.model;if(J&&typeof J=="object"&&!Array.isArray(J)){const C=J.fallbacks,q={primary:E,...Array.isArray(C)?{fallbacks:C}:{}};Le(e,j,q)}else Le(e,j,E)},onModelFallbacksChange:(v,E)=>{if(!h)return;const U=h.agents?.list;if(!Array.isArray(U))return;const M=U.findIndex(Z=>Z&&typeof Z=="object"&&"id"in Z&&Z.id===v);if(M<0)return;const j=["agents","list",M,"model"],V=U[M],J=E.map(Z=>Z.trim()).filter(Boolean),C=V.model,Q=(()=>{if(typeof C=="string")return C.trim()||null;if(C&&typeof C=="object"&&!Array.isArray(C)){const Z=C.primary;if(typeof Z=="string")return Z.trim()||null}return null})();if(J.length===0){Q?Le(e,j,Q):ot(e,j);return}Le(e,j,Q?{primary:Q,fallbacks:J}:{fallbacks:J})},onUseAgentForChat:v=>{const E=Jc(v,e);Gc(e,E),e.setTab("chat"),yc(e,E),e.loadAssistantIdentity(),fn(e)}}):f}

        ${e.tab==="skills"?hx({loading:e.skillsLoading,report:e.skillsReport,error:e.skillsError,filter:e.skillsFilter,edits:e.skillEdits,messages:e.skillMessages,busyKey:e.skillsBusyKey,onFilterChange:v=>e.skillsFilter=v,onRefresh:()=>es(e,{clearMessages:!0}),onToggle:(v,E)=>Tp(e,v,E),onEdit:(v,E)=>Cp(e,v,E),onSaveKey:v=>_p(e,v),onInstall:(v,E,U)=>Ep(e,v,E,U)}):f}

        ${e.tab==="nodes"?W$({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>Ws(e),onDevicesRefresh:()=>_t(e),onDeviceApprove:v=>pp(e,v),onDeviceReject:v=>fp(e,v),onDeviceRotate:(v,E,U)=>hp(e,{deviceId:v,role:E,scopes:U}),onDeviceRevoke:(v,E)=>mp(e,{deviceId:v,role:E}),onLoadConfig:()=>ze(e),onLoadExecApprovals:()=>{const v=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Oo(e,v)},onBindDefault:v=>{v?Le(e,["tools","exec","node"],v):ot(e,["tools","exec","node"])},onBindAgent:(v,E)=>{const U=["agents","list",v,"tools","exec","node"];E?Le(e,U,E):ot(e,U)},onSaveBindings:()=>$s(e),onExecApprovalsTargetChange:(v,E)=>{e.execApprovalsTarget=v,e.execApprovalsTargetNodeId=E,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:v=>{e.execApprovalsSelectedAgent=v},onExecApprovalsPatch:(v,E)=>xp(e,v,E),onExecApprovalsRemove:v=>wp(e,v),onSaveExecApprovals:()=>{const v=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return $p(e,v)}}):f}

        ${e.tab==="chat"?Q0({sessionKey:e.sessionKey,onSessionKeyChange:v=>{e.sessionKey=v,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:v,lastActiveSessionKey:v}),e.loadAssistantIdentity(),fn(e),Yi(e)},thinkingLevel:e.chatThinkingLevel,showThinking:g,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,fallbackStatus:e.fallbackStatus,assistantAvatarUrl:m,messages:e.chatMessages,toolMessages:e.chatToolMessages,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:r,error:e.lastError,sessions:e.sessionsResult,focusMode:d,onRefresh:()=>(e.resetToolStream(),Promise.all([fn(e),Yi(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:v=>e.handleChatScroll(v),onDraftChange:v=>e.chatMessage=v,attachments:e.chatAttachments,onAttachmentsChange:v=>e.chatAttachments=v,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>{e.handleAbortChat()},onQueueRemove:v=>e.removeQueuedMessage(v),onNewSession:()=>e.handleSendChat("/new",{restoreDraft:!0}),showNewMessages:e.chatNewMessagesBelow&&!e.chatManualRefreshInFlight,onScrollToBottom:()=>e.scrollToBottom(),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:v=>e.handleOpenSidebar(v),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:v=>e.handleSplitRatioChange(v),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar}):f}

        ${e.tab==="config"?o$({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection,activeSubsection:e.configActiveSubsection,onRawChange:v=>{e.configRaw=v},onFormModeChange:v=>e.configFormMode=v,onFormPatch:(v,E)=>Le(e,v,E),onSearchChange:v=>e.configSearchQuery=v,onSectionChange:v=>{e.configActiveSection=v,e.configActiveSubsection=null},onSubsectionChange:v=>e.configActiveSubsection=v,onReload:()=>ze(e),onSave:()=>$s(e),onApply:()=>Fu(e),onUpdate:()=>Ua(e)}):f}

        ${e.tab==="debug"?w$({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:v=>e.debugCallMethod=v,onCallParamsChange:v=>e.debugCallParams=v,onRefresh:()=>Ks(e),onCall:()=>ng(e)}):f}

        ${e.tab==="logs"?R$({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:v=>e.logsFilterText=v,onLevelToggle:(v,E)=>{e.logsLevelFilters={...e.logsLevelFilters,[v]:E}},onToggleAutoFollow:v=>e.logsAutoFollow=v,onRefresh:()=>Ao(e,{reset:!0}),onExport:(v,E)=>e.exportLogs(v,E),onScroll:v=>e.handleLogsScroll(v)}):f}
      </main>
      ${k$(e)}
      ${A$(e)}
    </div>
  `}var Ax=Object.defineProperty,Cx=Object.getOwnPropertyDescriptor,x=(e,t,n,s)=>{for(var i=s>1?void 0:s?Cx(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,n,i):a(i))||i);return s&&i&&Ax(t,n,i),i};const Oi=zo({});function Tx(){if(!window.location.search)return!1;const t=new URLSearchParams(window.location.search).get("onboarding");if(!t)return!1;const n=t.trim().toLowerCase();return n==="1"||n==="true"||n==="yes"||n==="on"}let $=class extends pn{constructor(){super(),this.i18nController=new _u(this),this.clientInstanceId=Zs(),this.settings=Mp(),this.password="",this.tab="chat",this.onboarding=Tx(),this.connected=!1,this.theme=this.settings.theme??"system",this.themeResolved="dark",this.hello=null,this.lastError=null,this.lastErrorCode=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=Oi.name,this.assistantAvatar=Oi.avatar,this.assistantAgentId=Oi.agentId??null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage="",this.chatMessages=[],this.chatToolMessages=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.fallbackStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatQueue=[],this.chatAttachments=[],this.chatManualRefreshInFlight=!1,this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget="gateway",this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal="",this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode="form",this.configSearchQuery="",this.configActiveSection=null,this.configActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.agentsSelectedId=null,this.toolsCatalogLoading=!1,this.toolsCatalogError=null,this.toolsCatalogResult=null,this.agentsPanel="overview",this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.agentIdentityById={},this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionsError=null,this.sessionsFilterActive="",this.sessionsFilterLimit="120",this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.sessionsHideCron=!0,this.usageLoading=!1,this.usageResult=null,this.usageCostSummary=null,this.usageError=null,this.usageStartDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageEndDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode="tokens",this.usageDailyChartMode="by-type",this.usageTimeSeriesMode="per-turn",this.usageTimeSeriesBreakdownMode="by-type",this.usageTimeSeries=null,this.usageTimeSeriesLoading=!1,this.usageTimeSeriesCursorStart=null,this.usageTimeSeriesCursorEnd=null,this.usageSessionLogs=null,this.usageSessionLogsLoading=!1,this.usageSessionLogsExpanded=!1,this.usageQuery="",this.usageQueryDraft="",this.usageSessionSort="recent",this.usageSessionSortDir="desc",this.usageRecentSessions=[],this.usageTimeZone="local",this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab="all",this.usageVisibleColumns=["channel","agent","provider","model","messages","tools","errors","duration"],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery="",this.usageQueryDebounceTimer=null,this.cronLoading=!1,this.cronJobsLoadingMore=!1,this.cronJobs=[],this.cronJobsTotal=0,this.cronJobsHasMore=!1,this.cronJobsNextOffset=null,this.cronJobsLimit=50,this.cronJobsQuery="",this.cronJobsEnabledFilter="all",this.cronJobsScheduleKindFilter="all",this.cronJobsLastStatusFilter="all",this.cronJobsSortBy="nextRunAtMs",this.cronJobsSortDir="asc",this.cronStatus=null,this.cronError=null,this.cronForm={...Es},this.cronFieldErrors={},this.cronEditingJobId=null,this.cronRunsJobId=null,this.cronRunsLoadingMore=!1,this.cronRuns=[],this.cronRunsTotal=0,this.cronRunsHasMore=!1,this.cronRunsNextOffset=null,this.cronRunsLimit=50,this.cronRunsScope="all",this.cronRunsStatuses=[],this.cronRunsDeliveryStatuses=[],this.cronRunsStatusFilter="all",this.cronRunsQuery="",this.cronRunsSortDir="desc",this.cronModelSuggestions=[],this.cronBusy=!1,this.updateAvailable=null,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter="",this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod="",this.debugCallParams="{}",this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText="",this.logsLevelFilters={...dg},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.chatNewMessagesBelow=!1,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath="",this.popStateHandler=()=>qp(this),this.themeMedia=null,this.themeMediaHandler=null,this.topbarObserver=null,So(this.settings.locale)&&Kn.setLocale(this.settings.locale)}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),eh(this)}firstUpdated(){th(this)}disconnectedCallback(){nh(this),super.disconnectedCallback()}updated(e){sh(this,e)}connect(){jo(this)}handleChatScroll(e){Zu(this,e)}handleLogsScroll(e){Xu(this,e)}exportLogs(e,t){eg(e,t)}resetToolStream(){Ys(this)}resetChatScroll(){Ba(this)}scrollToBottom(e){Ba(this),Qn(this,!0,!!e?.smooth)}async loadAssistantIdentity(){await Dc(this)}applySettings(e){lt(this,e)}setTab(e){Up(this,e)}setTheme(e,t){Bp(this,e,t)}async loadOverview(){await $c(this)}async loadCron(){await Ls(this)}async handleAbortChat(){await Rc(this)}removeQueuedMessage(e){_f(this,e)}async handleSendChat(e,t){await Ef(this,e,t)}async handleWhatsAppStart(e){await Uu(this,e)}async handleWhatsAppWait(){await Bu(this)}async handleWhatsAppLogout(){await Hu(this)}async handleChannelConfigSave(){await zu(this)}async handleChannelConfigReload(){await ju(this)}handleNostrProfileEdit(e,t){qu(this,e,t)}handleNostrProfileCancel(){Gu(this)}handleNostrProfileFieldChange(e,t){Ju(this,e,t)}async handleNostrProfileSave(){await Qu(this)}async handleNostrProfileImport(){await Yu(this)}handleNostrProfileToggleAdvanced(){Vu(this)}async handleExecApprovalDecision(e){const t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request("exec.approval.resolve",{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(n=>n.id!==t.id)}catch(n){this.execApprovalError=`Exec approval failed: ${String(n)}`}finally{this.execApprovalBusy=!1}}}handleGatewayUrlConfirm(){const e=this.pendingGatewayUrl;e&&(this.pendingGatewayUrl=null,lt(this,{...this.settings,gatewayUrl:e}),this.connect())}handleGatewayUrlCancel(){this.pendingGatewayUrl=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){const t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}render(){return kx(this)}};x([w()],$.prototype,"settings",2);x([w()],$.prototype,"password",2);x([w()],$.prototype,"tab",2);x([w()],$.prototype,"onboarding",2);x([w()],$.prototype,"connected",2);x([w()],$.prototype,"theme",2);x([w()],$.prototype,"themeResolved",2);x([w()],$.prototype,"hello",2);x([w()],$.prototype,"lastError",2);x([w()],$.prototype,"lastErrorCode",2);x([w()],$.prototype,"eventLog",2);x([w()],$.prototype,"assistantName",2);x([w()],$.prototype,"assistantAvatar",2);x([w()],$.prototype,"assistantAgentId",2);x([w()],$.prototype,"sessionKey",2);x([w()],$.prototype,"chatLoading",2);x([w()],$.prototype,"chatSending",2);x([w()],$.prototype,"chatMessage",2);x([w()],$.prototype,"chatMessages",2);x([w()],$.prototype,"chatToolMessages",2);x([w()],$.prototype,"chatStream",2);x([w()],$.prototype,"chatStreamStartedAt",2);x([w()],$.prototype,"chatRunId",2);x([w()],$.prototype,"compactionStatus",2);x([w()],$.prototype,"fallbackStatus",2);x([w()],$.prototype,"chatAvatarUrl",2);x([w()],$.prototype,"chatThinkingLevel",2);x([w()],$.prototype,"chatQueue",2);x([w()],$.prototype,"chatAttachments",2);x([w()],$.prototype,"chatManualRefreshInFlight",2);x([w()],$.prototype,"sidebarOpen",2);x([w()],$.prototype,"sidebarContent",2);x([w()],$.prototype,"sidebarError",2);x([w()],$.prototype,"splitRatio",2);x([w()],$.prototype,"nodesLoading",2);x([w()],$.prototype,"nodes",2);x([w()],$.prototype,"devicesLoading",2);x([w()],$.prototype,"devicesError",2);x([w()],$.prototype,"devicesList",2);x([w()],$.prototype,"execApprovalsLoading",2);x([w()],$.prototype,"execApprovalsSaving",2);x([w()],$.prototype,"execApprovalsDirty",2);x([w()],$.prototype,"execApprovalsSnapshot",2);x([w()],$.prototype,"execApprovalsForm",2);x([w()],$.prototype,"execApprovalsSelectedAgent",2);x([w()],$.prototype,"execApprovalsTarget",2);x([w()],$.prototype,"execApprovalsTargetNodeId",2);x([w()],$.prototype,"execApprovalQueue",2);x([w()],$.prototype,"execApprovalBusy",2);x([w()],$.prototype,"execApprovalError",2);x([w()],$.prototype,"pendingGatewayUrl",2);x([w()],$.prototype,"configLoading",2);x([w()],$.prototype,"configRaw",2);x([w()],$.prototype,"configRawOriginal",2);x([w()],$.prototype,"configValid",2);x([w()],$.prototype,"configIssues",2);x([w()],$.prototype,"configSaving",2);x([w()],$.prototype,"configApplying",2);x([w()],$.prototype,"updateRunning",2);x([w()],$.prototype,"applySessionKey",2);x([w()],$.prototype,"configSnapshot",2);x([w()],$.prototype,"configSchema",2);x([w()],$.prototype,"configSchemaVersion",2);x([w()],$.prototype,"configSchemaLoading",2);x([w()],$.prototype,"configUiHints",2);x([w()],$.prototype,"configForm",2);x([w()],$.prototype,"configFormOriginal",2);x([w()],$.prototype,"configFormDirty",2);x([w()],$.prototype,"configFormMode",2);x([w()],$.prototype,"configSearchQuery",2);x([w()],$.prototype,"configActiveSection",2);x([w()],$.prototype,"configActiveSubsection",2);x([w()],$.prototype,"channelsLoading",2);x([w()],$.prototype,"channelsSnapshot",2);x([w()],$.prototype,"channelsError",2);x([w()],$.prototype,"channelsLastSuccess",2);x([w()],$.prototype,"whatsappLoginMessage",2);x([w()],$.prototype,"whatsappLoginQrDataUrl",2);x([w()],$.prototype,"whatsappLoginConnected",2);x([w()],$.prototype,"whatsappBusy",2);x([w()],$.prototype,"nostrProfileFormState",2);x([w()],$.prototype,"nostrProfileAccountId",2);x([w()],$.prototype,"presenceLoading",2);x([w()],$.prototype,"presenceEntries",2);x([w()],$.prototype,"presenceError",2);x([w()],$.prototype,"presenceStatus",2);x([w()],$.prototype,"agentsLoading",2);x([w()],$.prototype,"agentsList",2);x([w()],$.prototype,"agentsError",2);x([w()],$.prototype,"agentsSelectedId",2);x([w()],$.prototype,"toolsCatalogLoading",2);x([w()],$.prototype,"toolsCatalogError",2);x([w()],$.prototype,"toolsCatalogResult",2);x([w()],$.prototype,"agentsPanel",2);x([w()],$.prototype,"agentFilesLoading",2);x([w()],$.prototype,"agentFilesError",2);x([w()],$.prototype,"agentFilesList",2);x([w()],$.prototype,"agentFileContents",2);x([w()],$.prototype,"agentFileDrafts",2);x([w()],$.prototype,"agentFileActive",2);x([w()],$.prototype,"agentFileSaving",2);x([w()],$.prototype,"agentIdentityLoading",2);x([w()],$.prototype,"agentIdentityError",2);x([w()],$.prototype,"agentIdentityById",2);x([w()],$.prototype,"agentSkillsLoading",2);x([w()],$.prototype,"agentSkillsError",2);x([w()],$.prototype,"agentSkillsReport",2);x([w()],$.prototype,"agentSkillsAgentId",2);x([w()],$.prototype,"sessionsLoading",2);x([w()],$.prototype,"sessionsResult",2);x([w()],$.prototype,"sessionsError",2);x([w()],$.prototype,"sessionsFilterActive",2);x([w()],$.prototype,"sessionsFilterLimit",2);x([w()],$.prototype,"sessionsIncludeGlobal",2);x([w()],$.prototype,"sessionsIncludeUnknown",2);x([w()],$.prototype,"sessionsHideCron",2);x([w()],$.prototype,"usageLoading",2);x([w()],$.prototype,"usageResult",2);x([w()],$.prototype,"usageCostSummary",2);x([w()],$.prototype,"usageError",2);x([w()],$.prototype,"usageStartDate",2);x([w()],$.prototype,"usageEndDate",2);x([w()],$.prototype,"usageSelectedSessions",2);x([w()],$.prototype,"usageSelectedDays",2);x([w()],$.prototype,"usageSelectedHours",2);x([w()],$.prototype,"usageChartMode",2);x([w()],$.prototype,"usageDailyChartMode",2);x([w()],$.prototype,"usageTimeSeriesMode",2);x([w()],$.prototype,"usageTimeSeriesBreakdownMode",2);x([w()],$.prototype,"usageTimeSeries",2);x([w()],$.prototype,"usageTimeSeriesLoading",2);x([w()],$.prototype,"usageTimeSeriesCursorStart",2);x([w()],$.prototype,"usageTimeSeriesCursorEnd",2);x([w()],$.prototype,"usageSessionLogs",2);x([w()],$.prototype,"usageSessionLogsLoading",2);x([w()],$.prototype,"usageSessionLogsExpanded",2);x([w()],$.prototype,"usageQuery",2);x([w()],$.prototype,"usageQueryDraft",2);x([w()],$.prototype,"usageSessionSort",2);x([w()],$.prototype,"usageSessionSortDir",2);x([w()],$.prototype,"usageRecentSessions",2);x([w()],$.prototype,"usageTimeZone",2);x([w()],$.prototype,"usageContextExpanded",2);x([w()],$.prototype,"usageHeaderPinned",2);x([w()],$.prototype,"usageSessionsTab",2);x([w()],$.prototype,"usageVisibleColumns",2);x([w()],$.prototype,"usageLogFilterRoles",2);x([w()],$.prototype,"usageLogFilterTools",2);x([w()],$.prototype,"usageLogFilterHasTools",2);x([w()],$.prototype,"usageLogFilterQuery",2);x([w()],$.prototype,"cronLoading",2);x([w()],$.prototype,"cronJobsLoadingMore",2);x([w()],$.prototype,"cronJobs",2);x([w()],$.prototype,"cronJobsTotal",2);x([w()],$.prototype,"cronJobsHasMore",2);x([w()],$.prototype,"cronJobsNextOffset",2);x([w()],$.prototype,"cronJobsLimit",2);x([w()],$.prototype,"cronJobsQuery",2);x([w()],$.prototype,"cronJobsEnabledFilter",2);x([w()],$.prototype,"cronJobsScheduleKindFilter",2);x([w()],$.prototype,"cronJobsLastStatusFilter",2);x([w()],$.prototype,"cronJobsSortBy",2);x([w()],$.prototype,"cronJobsSortDir",2);x([w()],$.prototype,"cronStatus",2);x([w()],$.prototype,"cronError",2);x([w()],$.prototype,"cronForm",2);x([w()],$.prototype,"cronFieldErrors",2);x([w()],$.prototype,"cronEditingJobId",2);x([w()],$.prototype,"cronRunsJobId",2);x([w()],$.prototype,"cronRunsLoadingMore",2);x([w()],$.prototype,"cronRuns",2);x([w()],$.prototype,"cronRunsTotal",2);x([w()],$.prototype,"cronRunsHasMore",2);x([w()],$.prototype,"cronRunsNextOffset",2);x([w()],$.prototype,"cronRunsLimit",2);x([w()],$.prototype,"cronRunsScope",2);x([w()],$.prototype,"cronRunsStatuses",2);x([w()],$.prototype,"cronRunsDeliveryStatuses",2);x([w()],$.prototype,"cronRunsStatusFilter",2);x([w()],$.prototype,"cronRunsQuery",2);x([w()],$.prototype,"cronRunsSortDir",2);x([w()],$.prototype,"cronModelSuggestions",2);x([w()],$.prototype,"cronBusy",2);x([w()],$.prototype,"updateAvailable",2);x([w()],$.prototype,"skillsLoading",2);x([w()],$.prototype,"skillsReport",2);x([w()],$.prototype,"skillsError",2);x([w()],$.prototype,"skillsFilter",2);x([w()],$.prototype,"skillEdits",2);x([w()],$.prototype,"skillsBusyKey",2);x([w()],$.prototype,"skillMessages",2);x([w()],$.prototype,"debugLoading",2);x([w()],$.prototype,"debugStatus",2);x([w()],$.prototype,"debugHealth",2);x([w()],$.prototype,"debugModels",2);x([w()],$.prototype,"debugHeartbeat",2);x([w()],$.prototype,"debugCallMethod",2);x([w()],$.prototype,"debugCallParams",2);x([w()],$.prototype,"debugCallResult",2);x([w()],$.prototype,"debugCallError",2);x([w()],$.prototype,"logsLoading",2);x([w()],$.prototype,"logsError",2);x([w()],$.prototype,"logsFile",2);x([w()],$.prototype,"logsEntries",2);x([w()],$.prototype,"logsFilterText",2);x([w()],$.prototype,"logsLevelFilters",2);x([w()],$.prototype,"logsAutoFollow",2);x([w()],$.prototype,"logsTruncated",2);x([w()],$.prototype,"logsCursor",2);x([w()],$.prototype,"logsLastFetchAt",2);x([w()],$.prototype,"logsLimit",2);x([w()],$.prototype,"logsMaxBytes",2);x([w()],$.prototype,"logsAtBottom",2);x([w()],$.prototype,"chatNewMessagesBelow",2);$=x([Sl("openclaw-app")],$);
//# sourceMappingURL=index-BMk_x1r6.js.map
