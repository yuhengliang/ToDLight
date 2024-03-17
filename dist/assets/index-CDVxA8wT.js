var q=Object.defineProperty;var G=(s,e,t)=>e in s?q(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var f=(s,e,t)=>(G(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var S={};"global"in S||(typeof window<"u"?S.global=window:typeof global<"u"?S.global=global:S.global={});"document"in S||typeof document<"u"&&(S.document=document);var $={...S,delegatedEvents:new Set};function j(s,e){return!e||s.length!==e.length?!1:s.every((t,n)=>!(t instanceof Object)&&e[n]===t)}var W={Comp:0,For:1,Cond:2,Env:3,Exp:4,Snippet:5,Try:6},w=class{constructor(s){f(this,"_$dlNodeType");this._$dlNodeType=s}get _$el(){return w.toEls(this._$nodes)}static toEls(s){let e=[];return this.loopShallowEls(s,t=>{e.push(t)}),e}static loopShallowEls(s,e){let t=[...s].reverse();for(;t.length>0;){let n=t.pop();"_$dlNodeType"in n?n._$nodes&&t.push(...[...n._$nodes].reverse()):e(n)}}static addParentEl(s,e){s.forEach(t=>{"_$dlNodeType"in t&&(t._$parentEl=e,t._$nodes&&w.addParentEl(t._$nodes,e))})}static getFlowIndexFromNodes(s,e){let t=0,n=[...s].reverse();for(;n.length>0;){let i=n.pop();if(i===e)break;"_$dlNodeType"in i?i._$nodes&&n.push(...[...i._$nodes].reverse()):t++}return t}static appendNodesWithSibling(s,e,t){return t?this.insertNodesBefore(s,e,t):this.appendNodes(s,e)}static appendNodesWithIndex(s,e,t,n){return n=n??e.childNodes.length,n!==t?this.insertNodesBefore(s,e,e.childNodes[t]):this.appendNodes(s,e)}static insertNodesBefore(s,e,t){let n=0;return this.loopShallowEls(s,i=>{e.insertBefore(i,t),n++}),n}static appendNodes(s,e){let t=0;return this.loopShallowEls(s,n=>{e.appendChild(n),t++}),t}static addWillUnmount(s,e){let t=$.global.WillUnmountStore,n=t[t.length-1];n&&n.push(e.bind(null,s))}static addDidUnmount(s,e){let t=$.global.DidUnmountStore,n=t[t.length-1];n&&n.push(e.bind(null,s))}static addDidMount(s,e){$.global.DidMountStore||($.global.DidMountStore=[]),$.global.DidMountStore.push(e.bind(null,s))}static runDidMount(){let s=$.global.DidMountStore;if(!(!s||s.length===0)){for(let e=s.length-1;e>=0;e--)s[e]();$.global.DidMountStore=[]}}};function k(s,e,t){if(t.length===0)return!1;let n=`$${e}`;return j(t,s[n])?!0:(s[n]=t,!1)}function B(s,e){Object.entries(e).forEach(([t,n])=>{t.startsWith("--")?s.style.setProperty(t,n):s.style[t]=n})}function K(s,e){Object.assign(s.dataset,e)}function y(s,e,t,n){k(s,e,n)||(s[e]=t())}function X(s,e){Object.entries(e).forEach(([t,n])=>{if(t==="style")return B(s,n);if(t==="dataset")return K(s,n);y(s,t,()=>n,[])})}function F(s,e,t,n){k(s,e,n)||s.setAttribute(e,t())}function Y(s,e){Object.entries(e).forEach(([t,n])=>{F(s,t,()=>n,[])})}function J(s,e,t){let n=s[`$on${e}`];n&&s.removeEventListener(e,n),s.addEventListener(e,t),s[`$on${e}`]=t}function Q(s){let e=`$$${s.type}`;for(let t of s.composedPath())if(t[e]&&t[e](s),s.cancelBubble)return}function R(s,e,t){s[`$$${e}`]!==t&&(s[`$$${e}`]=t,$.delegatedEvents.has(e)||($.delegatedEvents.add(e),$.document.addEventListener(e,Q)))}function u(s){return $.document.createElement(s)}function H(s,e,t){s._$nodes||(s._$nodes=Array.from(s.childNodes)),s._$nodes.splice(t,0,e);let n=w.getFlowIndexFromNodes(s._$nodes,e);w.appendNodesWithIndex([e],s,n),w.addParentEl([e],s)}function Z(s,e,t,n){if(e==="style")return B(s,t());if(e==="dataset")return K(s,t());if(e!=="element"){if(e==="prop")return X(s,t());if(e==="attr")return Y(s,t());if(e==="innerHTML")return y(s,"innerHTML",t,n);if(e==="textContent")return y(s,"textContent",t,n);if(e!=="forwardProp"){if(e.startsWith("on"))return J(s,e.slice(2).toLowerCase(),t());F(s,e,t,n)}}}var V=class extends w{constructor(){super(W.Comp)}_$init(s,e,t,n){var i,o;this._$notInitd=!0,n&&n._$addForwardProps(this),e&&this._$setContent(()=>e[0],e[1]),s&&s.forEach(([d,r,p])=>{if(d==="props")return this._$setProps(()=>r,p);this._$setProp(d,()=>r,p)}),t&&(this._$children=t),$.global.DLEnvStore&&Object.entries($.global.DLEnvStore.envs).forEach(([d,[r,p]])=>{if(d==="_$catchable"){this._$catchable=r;return}`$e$${d}`in this&&(p.addNode(this),this._$initEnv(d,r,p))}),this._$callUpdatesBeforeInit(),this.didMount&&w.addDidMount(this,this.didMount.bind(this)),this.willUnmount&&w.addWillUnmount(this,this.willUnmount.bind(this)),w.addDidUnmount(this,this._$setUnmounted.bind(this)),this.didUnmount&&w.addDidUnmount(this,this.didUnmount.bind(this)),(i=this.willMount)==null||i.call(this),this._$nodes=((o=this.Body)==null?void 0:o.call(this))??[],this._$catchable&&(this._$update&&(this._$update=this._$catchable(this._$update.bind(this))),this._$updateDerived=this._$catchable(this._$updateDerived.bind(this)),delete this._$catchable)}_$setUnmounted(){this._$unmounted=!0}_$callUpdatesBeforeInit(){let s=Object.getOwnPropertyNames(Object.getPrototypeOf(this)),e=Object.getOwnPropertyNames(this);[...s,...e].forEach(t=>{if(t.startsWith("$w$"))return this[t.slice(3)]();if(t.startsWith("$md$")){let n=t.slice(4);this[n]=this[n]();return}if(t.startsWith("$f$")){let n=t.slice(3);this[n]=this[t],this._$updateDerived(n)}}),delete this._$notInitd}_$setPropToForward(s,e,t){this._$forwardPropsSet.forEach(n=>{let i=s==="_$content";if(n._$dlNodeType===W.Comp){i?n._$setContent(()=>e,t):n._$setProp(s,()=>e,t);return}n instanceof HTMLElement&&(i&&(s="textContent"),Z(n,s,()=>e,t))})}_$setForwardProp(s,e,t){let n="_$notInitd"in this;if(!n&&this._$cache(s,t))return;let i=e();s==="_$content"&&this._$contentKey&&(this[this._$contentKey]=i,this._$updateDerived(this._$contentKey)),this[s]=i,this._$updateDerived(s),n?this._$forwardPropsId.push(s):this._$setPropToForward(s,i,t)}_$addForwardProps(s){this._$forwardPropsSet.add(s),this._$forwardPropsId.forEach(e=>{this._$setPropToForward(e,this[e],[])}),w.addWillUnmount(s,this._$forwardPropsSet.delete.bind(this._$forwardPropsSet,s))}_$cache(s,e){if(!e||!e.length)return!1;let t=`$cc$${s}`;return j(e,this[t])?!0:(this[t]=e,!1)}_$setContent(s,e){if("_$forwardProps"in this)return this._$setForwardProp("_$content",s,e);let t=this._$contentKey;t&&(this._$cache(t,e)||(this[t]=s(),this._$updateDerived(t)))}_$setProp(s,e,t){if("_$forwardProps"in this)return this._$setForwardProp(s,e,t);if(!(`$p$${s}`in this)){console.warn(`[${s}] is not a prop in ${this.constructor.name}`);return}this._$cache(s,t)||(this[s]=e(),this._$updateDerived(s))}_$setProps(s,e){if(this._$cache("props",e))return;let t=s();t&&Object.entries(t).forEach(([n,i])=>{this._$setProp(n,()=>i,[])})}_$initEnv(s,e,t){this[s]=e,this[`$en$${s}`]=t}_$updateEnv(s,e,t){`$e$${s}`in this&&t===this[`$en$${s}`]&&(this[s]=e,this._$updateDerived(s))}_$ud(s,e){return this._$updateDerived(e),s}_$updateDerived(s){var e;"_$notInitd"in this||((e=this[`$s$${s}`])==null||e.forEach(t=>{`$w$${t}`in this?this[t](s):`$md$${t}`in this?this[t]._$update():this[t]=this[`$f$${t}`]}),this._$updateView(s))}_$updateView(s){if(this._$modelCallee)return this._$updateModelCallee();if(!("_$update"in this))return;let e=this[`$$${s}`];e&&("_$depNumsToUpdate"in this?this._$depNumsToUpdate.push(e):(this._$depNumsToUpdate=[e],Promise.resolve().then(()=>{if(this._$unmounted)return;let t=this._$depNumsToUpdate;if(t.length>0){let n=t.reduce((i,o)=>i|o,0);this._$update(n)}delete this._$depNumsToUpdate})))}_$updateModelCallee(){"_$depNumsToUpdate"in this||(this._$depNumsToUpdate=!0,Promise.resolve().then(()=>{this._$unmounted||(this._$modelCallee._$updateDerived(this._$modelKey),delete this._$depNumsToUpdate)}))}static _$updateModel(s,e,t){var d;let n=e()??{},i=n.s??[];(d=n.m)==null||d.forEach(([r,p])=>{Object.entries(r).forEach(([c,g])=>{i.push([c,g,p])})}),i.forEach(([r,p,c])=>{s._$setProp(r,()=>p,c)});let o=t();o&&s._$setContent(()=>o[0],o[1])}static _$releaseModel(){delete this._$modelCallee}_$injectModel(s,e,t,n){var r;let i=e()??{},o=i.s??[];(r=i.m)==null||r.forEach(([p,c])=>{Object.entries(p).forEach(([g,N])=>{o.push([g,N,c])})});let d=new s;return d._$init(o,t(),null,null),d._$modelCallee=this,d._$modelKey=n,d._$update=V._$updateModel.bind(null,d,e,t),d}},tt=V,et=class extends w{constructor(s){super(s),$.global.DLEnvStore&&$.global.DLEnvStore.currentEnvNodes.length>0&&(this.savedEnvNodes=[...$.global.DLEnvStore.currentEnvNodes])}initNewNodes(s){w.addParentEl(s,this._$parentEl)}geneNewNodesInEnv(s){if(!this.savedEnvNodes){let n=s();return this.initNewNodes(n),n}let e=$.global.DLEnvStore.currentEnvNodes;$.global.DLEnvStore.replaceEnvNodes(this.savedEnvNodes);let t=s();return $.global.DLEnvStore.replaceEnvNodes(e),this.initNewNodes(t),t}initUnmountStore(){$.global.WillUnmountStore.push([]),$.global.DidUnmountStore.push([])}removeNodes(s){w.loopShallowEls(s,e=>{this._$parentEl.removeChild(e)})}},_=class extends et{constructor(e,t,n,i){super(W.For);f(this,"array");f(this,"nodeFunc");f(this,"depNum");f(this,"nodesMap",new Map);f(this,"updateArr",[]);this.array=[...e],this.keys=n,this.depNum=t,this.addNodeFunc(i)}get _$nodes(){var t;let e=[];for(let n=0;n<this.array.length;n++)e.push(...this.nodesMap.get(((t=this.keys)==null?void 0:t[n])??n));return e}addNodeFunc(e){this.nodeFunc=e,this.array.forEach((t,n)=>{var d;this.initUnmountStore();let i=((d=this.keys)==null?void 0:d[n])??n,o=e(t,this.updateArr,n);this.nodesMap.set(i,o),this.setUnmountMap(i)}),_.addWillUnmount(this,this.runAllWillUnmount.bind(this)),_.addDidUnmount(this,this.runAllDidUnmount.bind(this))}updateItem(e,t,n){var i,o;(o=(i=this.updateArr)[e])==null||o.call(i,n??this.depNum,t[e])}updateItems(e){for(let t=0;t<this.array.length;t++)this.updateItem(t,this.array,e)}update(e){~this.depNum&e&&this.updateItems(e)}updateArray(e,t){if(t){this.updateWithKey(e,t);return}this.updateWithOutKey(e)}getNewNodes(e,t,n,i){this.initUnmountStore();let o=this.geneNewNodesInEnv(()=>this.nodeFunc(n[e],i??this.updateArr,e));return this.setUnmountMap(t),this.nodesMap.set(t,o),o}setUnmountMap(e){let t=$.global.WillUnmountStore.pop();t&&t.length>0&&(this.willUnmountMap||(this.willUnmountMap=new Map),this.willUnmountMap.set(e,t));let n=$.global.DidUnmountStore.pop();n&&n.length>0&&(this.didUnmountMap||(this.didUnmountMap=new Map),this.didUnmountMap.set(e,n))}runAllWillUnmount(){!this.willUnmountMap||this.willUnmountMap.size===0||(this.willUnmountMap.forEach(e=>{var t;for(let n=0;n<e.length;n++)(t=e[n])==null||t.call(e)}),this.willUnmountMap.clear())}runAllDidUnmount(){!this.didUnmountMap||this.didUnmountMap.size===0||(this.didUnmountMap.forEach(e=>{var t;for(let n=e.length-1;n>=0;n--)(t=e[n])==null||t.call(e)}),this.didUnmountMap.clear())}runWillUnmount(e){var n;if(!this.willUnmountMap||this.willUnmountMap.size===0)return;let t=this.willUnmountMap.get(e);if(t){for(let i=0;i<t.length;i++)(n=t[i])==null||n.call(t);this.willUnmountMap.delete(e)}}runDidUnmount(e){var n;if(!this.didUnmountMap||this.didUnmountMap.size===0)return;let t=this.didUnmountMap.get(e);if(t){for(let i=t.length-1;i>=0;i--)(n=t[i])==null||n.call(t);this.didUnmountMap.delete(e)}}removeNodes(e,t){this.runWillUnmount(t),super.removeNodes(e),this.runDidUnmount(t),this.nodesMap.delete(t)}updateWithOutKey(e){let t=this.array.length,n=e.length;if(t===n){for(let o=0;o<this.array.length;o++)this.updateItem(o,e);this.array=[...e];return}let i=this._$parentEl;if(t<n){let o=_.getFlowIndexFromNodes(i._$nodes,this),d=i.childNodes.length;for(let r=0;r<n;r++){if(r<t){o+=_.getFlowIndexFromNodes(this.nodesMap.get(r)),this.updateItem(r,e);continue}let p=this.getNewNodes(r,r,e);_.appendNodesWithIndex(p,i,o,d)}_.runDidMount(),this.array=[...e];return}for(let o=0;o<n;o++)this.updateItem(o,e);for(let o=n;o<t;o++){let d=this.nodesMap.get(o);this.removeNodes(d,o)}this.updateArr.splice(n,t-n),this.array=[...e]}updateWithKey(e,t){var N;if(t.length!==new Set(t).size)throw new Error("DLight: Duplicate keys in for loop are not allowed");let n=this.keys;if(this.keys=t,_.arrayEqual(n,this.keys)){for(let l=0;l<e.length;l++)this.updateItem(l,e);this.array=[...e];return}let i=this._$parentEl;if(this.keys.length===0){let l=i._$nodes??[];if(l.length===1&&l[0]===this)this.runAllWillUnmount(),i.innerHTML="",this.runAllDidUnmount();else for(let h=0;h<n.length;h++){let m=n[h];this.removeNodes(this.nodesMap.get(m),m)}this.nodesMap.clear(),this.updateArr=[],this.array=[];return}let o=_.getFlowIndexFromNodes(i._$nodes,this);if(n.length===0){let l=i.childNodes[o];for(let h=0;h<this.keys.length;h++){let m=this.getNewNodes(h,this.keys[h],e);_.appendNodesWithSibling(m,i,l)}_.runDidMount(),this.array=[...e];return}let d=[],r=[];for(let l=0;l<n.length;l++){let h=n[l];if(this.keys.includes(h)){d.push(h),r.push(this.updateArr[l]);continue}this.removeNodes(this.nodesMap.get(h),h)}let p=i.childNodes.length,c=o;for(let l=0;l<this.keys.length;l++){let h=this.keys[l],m=d.indexOf(h);if(m!==-1){c+=_.getFlowIndexFromNodes(this.nodesMap.get(h)),(N=r[m])==null||N.call(r,this.depNum,e[l]);continue}r.splice(l,0,null);let v=this.getNewNodes(l,h,e,r);d.splice(l,0,h);let x=_.appendNodesWithIndex(v,i,c,p);c+=x,p+=x}if(_.runDidMount(),_.arrayEqual(this.keys,d)){this.array=[...e],this.updateArr=r;return}c=o;let g=new Map;for(let l=0;l<this.keys.length;l++){let h=this.keys[l],m=d.indexOf(h),v=g.get(h);if(v){let a=_.getFlowIndexFromNodes(v),C=_.toEls(v).pop(),E=i.childNodes[c+a];C!==E&&C.nextSibling!==E&&_.insertNodesBefore(v,i,E),c+=a,delete g[l]}else if(m===l){c+=_.getFlowIndexFromNodes(this.nodesMap.get(h));continue}else{let a=d[l];g.set(a,this.nodesMap.get(a));let C=this.nodesMap.get(h),E=_.toEls(C).pop(),b=i.childNodes[c];E!==b&&E.nextSibling!==b&&(c+=_.insertNodesBefore(C,i,b))}let x=d[l];d[l]=d[m],d[m]=x;let M=r[l];r[l]=r[m],r[m]=M}this.array=[...e],this.updateArr=r}static arrayEqual(e,t){return e.length!==t.length?!1:e.every((n,i)=>n===t[i])}};function st(){$.global.WillUnmountStore=[],$.global.DidUnmountStore=[]}function nt(s,e){let t=s;if(typeof s=="string"){let i=$.document.getElementById(s);if(i)t=i;else throw new Error(`DLight: Element with id ${s} not found`)}st(),t.innerHTML="";let n=new e;n._$init(),H(t,n,0),w.runDidMount()}const T=class T extends tt{constructor(){super();f(this,"docment_type","text/html");f(this,"$$docment_type",1);f(this,"indent_character"," ");f(this,"$$indent_character",2);f(this,"$s$indent_character",["watchElements"]);f(this,"indent_size",4);f(this,"$$indent_size",4);f(this,"$s$indent_size",["watchElements"]);f(this,"elements","");f(this,"$$elements",8);f(this,"$s$elements",["watchElements"]);f(this,"dsl","");f(this,"$$dsl",16);f(this,"$w$watchElements");this.watchElements=this.watchElements.bind(this),this.traverse=this.traverse.bind(this)}watchElements(){this._$cache("watchElements",[this.elements,this.indent_character,this.indent_size])||this.traverse(new DOMParser().parseFromString(this.elements,this.docment_type).body)}traverse(t,n=0){console.log(t.attributes);let i=this.indent_character.repeat(this.indent_size*n);if(t.nodeName=="BODY")this._$ud(this.dsl=`Body()
`,"dsl");else if(!(t.nodeName=="#text"&&/^\s+$/.test(t.nodeValue))){if(t.nodeName=="#text")this._$ud(this.dsl+=i+'"'+t.textContent+`"
`,"dsl");else if(this._$ud(this.dsl+=i+t.nodeName.toLowerCase()+`()
`,"dsl"),t.attributes.length)for(let o=0;o<t.attributes.length;o++)this._$ud(this.dsl+=i+"."+t.attributes[o].name+'("'+t.attributes[o].value+`")
`,"dsl")}if(t.hasChildNodes()){this._$ud(this.dsl+=i+`{
`,"dsl");for(let o=0;o<t.childNodes.length;o++)this.traverse(t.childNodes[o],n+1);this._$ud(this.dsl+=i+`}
`,"dsl")}}Body(){let t,n,i,o,d,r,p,c,g,N,l,h,m,v,x,M;return this._$update=a=>{a&1&&(l&&y(l,"selected",()=>this.docment_type=="text/html",[this.docment_type=="text/html"]),h&&y(h,"selected",()=>this.docment_type=="text/xml",[this.docment_type=="text/xml"]),m&&y(m,"selected",()=>this.docment_type=="image/svg+xml",[this.docment_type=="image/svg+xml"])),a&2&&(v&&y(v,"selected",()=>this.indent_character==" ",[this.indent_character==" "]),x&&y(x,"selected",()=>this.indent_character=="	",[this.indent_character=="	"])),a&8&&p&&F(p,"value",()=>this.elements,[this.elements]),a&16&&N&&y(N,"textContent",()=>this.dsl,[this.dsl]),M&&M.update(a)},t=T.$t0.cloneNode(!0),n=t.firstChild.nextSibling,i=n.firstChild,o=n.firstChild.nextSibling.nextSibling,d=o.firstChild,r=i.firstChild.firstChild,p=i.firstChild.nextSibling.firstChild,c=d.firstChild,g=d.firstChild.nextSibling,N=o.firstChild.nextSibling.firstChild,l=r.firstChild,h=r.firstChild.nextSibling,m=r.firstChild.nextSibling.nextSibling,v=g.firstChild,x=g.firstChild.nextSibling,r.addEventListener("change",a=>{this._$ud(this.docment_type=a.target.value,"docment_type")}),y(l,"selected",()=>this.docment_type=="text/html",[this.docment_type=="text/html"]),y(h,"selected",()=>this.docment_type=="text/xml",[this.docment_type=="text/xml"]),y(m,"selected",()=>this.docment_type=="image/svg+xml",[this.docment_type=="image/svg+xml"]),R(p,"input",a=>{this._$ud(this.elements=a.target.value,"elements")}),F(p,"value",()=>this.elements,[this.elements]),c.addEventListener("change",a=>{this._$ud(this.indent_size=a.target.value,"indent_size")}),g.addEventListener("change",a=>{this._$ud(this.indent_character=a.target.value,"indent_character")}),y(v,"selected",()=>this.indent_character==" ",[this.indent_character==" "]),y(x,"selected",()=>this.indent_character=="	",[this.indent_character=="	"]),y(N,"textContent",()=>this.dsl,[this.dsl]),M=new _([1,2,3,4,5,6,7,8],0,null,(a,C,E)=>{let b;return C[E]=(D,U)=>{a=U,D&4&&b&&y(b,"selected",()=>this.indent_size==a,[this.indent_size==a])},b=u("option"),y(b,"selected",()=>this.indent_size==a,[this.indent_size==a]),b.value=a,b.textContent="Indent by "+a,[b]}),H(c,M,0),[t]}};f(T,"$t0",(()=>{let t,n,i,o,d,r,p,c,g,N,l,h,m,v,x,M,a,C,E,b,D,U,L,P,A,I,O;return t=u("div"),t.setAttribute("class","min-h-screen flex flex-col"),n=u("div"),n.setAttribute("class","text-center p-5 space-y-2"),i=u("h1"),i.setAttribute("class","text-5xl"),i.textContent="ToDLight",n.appendChild(i),o=u("p"),o.setAttribute("class","text-sm text-center space-x-2"),d=u("span"),d.textContent="Convert HTML(XML or SVG) to DLight DSL",o.appendChild(d),r=u("a"),r.target="_black",r.href="https://www.github.com/yuhengliang/ToDLight",p=u("img"),p.src="https://img.shields.io/github/stars/yuhengliang/ToDLight?logo=github",p.setAttribute("class","inline"),r.appendChild(p),o.appendChild(r),n.appendChild(o),t.appendChild(n),c=u("div"),c.setAttribute("class","grow flex space-x-5 p-5"),g=u("div"),g.setAttribute("class","grow flex flex-col space-y-5"),N=u("div"),N.setAttribute("class","space-x-5"),l=u("select"),l.setAttribute("class","select select-bordered"),h=u("option"),h.value="text/html",h.textContent="HTML",l.appendChild(h),m=u("option"),m.value="text/xml",m.textContent="XML",l.appendChild(m),v=u("option"),v.value="image/svg+xml",v.textContent="SVG",l.appendChild(v),N.appendChild(l),g.appendChild(N),x=u("div"),x.setAttribute("class","grow"),M=u("textarea"),M.placeholder="Paste HTML code",M.setAttribute("class","w-full h-full textarea textarea-bordered"),x.appendChild(M),g.appendChild(x),c.appendChild(g),a=u("div"),a.setAttribute("class","shrink self-center"),C=u("span"),C.setAttribute("class","text-gray-400 text-2xl"),C.textContent="›",a.appendChild(C),c.appendChild(a),E=u("div"),E.setAttribute("class","grow flex flex-col space-y-5"),b=u("div"),b.setAttribute("class","space-x-5"),D=u("select"),D.setAttribute("class","select select-bordered"),b.appendChild(D),U=u("select"),U.setAttribute("class","select select-bordered"),L=u("option"),L.value=" ",L.textContent="Space",U.appendChild(L),P=u("option"),P.value="	",P.textContent="Tab",U.appendChild(P),b.appendChild(U),E.appendChild(b),A=u("div"),A.setAttribute("class","grow"),I=u("textarea"),I.placeholder="DLight DSL Code",I.setAttribute("class","w-full h-full textarea textarea-bordered"),A.appendChild(I),E.appendChild(A),c.appendChild(E),t.appendChild(c),O=u("div"),O.setAttribute("class",""),t.appendChild(O),t})());let z=T;nt("app",z);