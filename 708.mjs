(self.webpackChunkdata_test_wc_plugin=self.webpackChunkdata_test_wc_plugin||[]).push([[708],{80760:(t,e,n)=>{var i=n(89881);t.exports=function(t,e){var n=[];return i(t,(function(t,i,r){e(t,i,r)&&n.push(t)})),n}},63105:(t,e,n)=>{var i=n(34963),r=n(80760),s=n(67206),o=n(1469);t.exports=function(t,e){return(o(t)?i:r)(t,s(e,3))}},17204:t=>{t.exports=function(t){for(var e=-1,n=null==t?0:t.length,i={};++e<n;){var r=t[e];i[r[0]]=r[1]}return i}},64721:(t,e,n)=>{var i=n(42118),r=n(98612),s=n(47037),o=n(40554),a=n(52628),c=Math.max;t.exports=function(t,e,n,u){t=r(t)?t:a(t),n=n&&!u?o(n):0;var l=t.length;return n<0&&(n=c(l+n,0)),s(t)?n<=l&&t.indexOf(e,n)>-1:!!l&&i(t,e,n)>-1}},94885:t=>{t.exports=function(t){if("function"!=typeof t)throw new TypeError("Expected a function");return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}},16028:(t,e,n)=>{function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=i(n(4819));function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s.apply(this,arguments)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}var a=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},u="object"==typeof c&&c&&c.Object===Object&&c,l="object"==typeof self&&self&&self.Object===Object&&self,f=u||l||Function("return this")(),p=function(){return f.Date.now()},d=/\s/,h=/^\s+/,v=function(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&d.test(t.charAt(e)););return e}(t)+1).replace(h,""):t},m=f.Symbol,w=Object.prototype,b=w.hasOwnProperty,g=w.toString,y=m?m.toStringTag:void 0,x=Object.prototype.toString,O=m?m.toStringTag:void 0,j=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":O&&O in Object(t)?function(t){var e=b.call(t,y),n=t[y];try{t[y]=void 0;var i=!0}catch(t){}var r=g.call(t);return i&&(e?t[y]=n:delete t[y]),r}(t):function(t){return x.call(t)}(t)},E=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,N=/^0o[0-7]+$/i,C=parseInt,L=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==j(t)}(t))return NaN;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=v(t);var n=T.test(t);return n||N.test(t)?C(t.slice(2),n?2:8):E.test(t)?NaN:+t},R=Math.max,S=Math.min,k=["innerRef"],W="undefined"!=typeof window;t.exports=function(t,e){return void 0===t&&(t=150),function(n){var i=function(i){var c,u;function l(n){var r;return(r=i.call(this,n)||this).state={winWidth:W?window.innerWidth:0},r.onResize=function(t,e,n){var i,r,s,o,c,u,l=0,f=!1,d=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=i,s=r;return i=r=void 0,l=e,o=t.apply(s,n)}function m(t){var n=t-u;return void 0===u||n>=e||n<0||d&&t-l>=s}function w(){var t=p();if(m(t))return b(t);c=setTimeout(w,function(t){var n=e-(t-u);return d?S(n,s-(t-l)):n}(t))}function b(t){return c=void 0,h&&i?v(t):(i=r=void 0,o)}function g(){var t=p(),n=m(t);if(i=arguments,r=this,u=t,n){if(void 0===c)return function(t){return l=t,c=setTimeout(w,e),f?v(t):o}(u);if(d)return clearTimeout(c),c=setTimeout(w,e),v(u)}return void 0===c&&(c=setTimeout(w,e)),o}return e=L(e)||0,a(n)&&(f=!!n.leading,s=(d="maxWait"in n)?R(L(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h),g.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=u=r=c=void 0},g.flush=function(){return void 0===c?o:b(p())},g}(r.onResize.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r)),t,e),r}u=i,(c=l).prototype=Object.create(u.prototype),c.prototype.constructor=c,o(c,u);var f=l.prototype;return f.componentDidMount=function(){window.addEventListener("resize",this.onResize)},f.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.onResize.cancel()},f.onResize=function(){this.setState({winWidth:window.innerWidth})},f.render=function(){var t=this.props,e=t.innerRef,i=function(t,e){if(null==t)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,k);return r.default.createElement(n,s({ref:e},i,this.state))},l}(r.default.Component);return i.displayName="Responsive("+(n.displayName||n.name)+")",i.defaultProps={innerRef:function(){}},i}}},14057:(t,e,n)=>{n.d(e,{Hn:()=>o,oO:()=>r,s9:()=>s});var i=n(6557);class r{constructor(t,e=i){this.decorated=t,this.wrapper=e,this.wrap=t=>this.wrapper(t)}forDefinition(t){return this.wrap(this.decorated.forDefinition(t))}forItems(t,e){return this.wrap(this.decorated.forItems(t,e))}forBuckets(t,e){return this.wrap(this.decorated.forBuckets(t,e))}forInsight(t,e){return this.wrap(this.decorated.forInsight(t,e))}forInsightByRef(t,e){return this.wrap(this.decorated.forInsightByRef(t,e))}}class s{constructor(t){this.decorated=t,this.definition=t.definition}equals(t){return this.decorated.equals(t)}execute(){return this.decorated.execute()}explain(t){return this.decorated.explain(t)}fingerprint(){return this.decorated.fingerprint()}withDimensions(...t){return this.createNew(this.decorated.withDimensions(...t))}withSorting(...t){return this.createNew(this.decorated.withSorting(...t))}withBuckets(...t){return this.createNew(this.decorated.withBuckets(...t))}withDateFormat(t){return this.createNew(this.decorated.withDateFormat(t))}withExecConfig(t){return this.createNew(this.decorated.withExecConfig(t))}}class o{constructor(t,e=i){this.decorated=t,this.wrapper=e,this.definition=t.definition,this.dimensions=t.dimensions}export(t){return this.decorated.export(t)}readAll(){return this.decorated.readAll()}readWindow(t,e){return this.decorated.readWindow(t,e)}transform(){return this.wrapper(this.decorated.transform())}equals(t){return this.decorated.equals(t)}fingerprint(){return this.decorated.fingerprint()}}},6870:(t,e,n)=>{n.d(e,{Z:()=>f});var i=n(4819);function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r.apply(this,arguments)}const s={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},o=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"],a=["component","ellipsis","trimRight","className"];function c(t,e){for(;t&&e--;)t=t.previousElementSibling;return t}const u={basedOn:void 0,className:"",component:"div",ellipsis:"…",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},l=Object.keys(u);class f extends i.Component{constructor(t){super(t),this.state={text:t.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(t){t.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==t&&this.reflow(this.props)}componentWillUnmount(){this.canvas&&(this.canvas.parentNode.removeChild(this.canvas),this.canvas=null)}setState(t,e){return void 0!==t.clamped&&(this.clamped=t.clamped),super.setState(t,e)}initCanvas(){if(this.canvas)return;const t=this.canvas=document.createElement("div");t.className=`LinesEllipsis-canvas ${this.props.className}`,t.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(s).forEach((e=>{t.style[e]=s[e]})),document.body.appendChild(t)}copyStyleToCanvas(){const t=window.getComputedStyle(this.target);o.forEach((e=>{this.canvas.style[e]=t[e]}))}reflow(t){const e=t.basedOn||(/^[\x00-\x7F]+$/.test(t.text)?"words":"letters");switch(e){case"words":this.units=t.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(t.text);break;default:throw new Error(`Unsupported options basedOn: ${e}`)}this.maxLine=+t.maxLine||1,this.canvas.innerHTML=this.units.map((t=>`<span class='LinesEllipsis-unit'>${t}</span>`)).join("");const n=this.putEllipsis(this.calcIndexes()),i=n>-1,r={clamped:i,text:i?this.units.slice(0,n).join(""):t.text};this.setState(r,t.onReflow.bind(this,r))}calcIndexes(){const t=[0];let e=this.canvas.firstElementChild;if(!e)return t;let n=0,i=1,r=e.offsetTop;for(;(e=e.nextElementSibling)&&(e.offsetTop>r&&(i++,t.push(n),r=e.offsetTop),n++,!(i>this.maxLine)););return t}putEllipsis(t){if(t.length<=this.maxLine)return-1;const e=t[this.maxLine],n=this.units.slice(0,e),i=this.canvas.children[e].offsetTop;this.canvas.innerHTML=n.map(((t,e)=>`<span class='LinesEllipsis-unit'>${t}</span>`)).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const r=this.canvas.lastElementChild;let s=c(r,2);for(;s&&(r.offsetTop>i||r.offsetHeight>s.offsetHeight||r.offsetTop>s.offsetTop);)this.canvas.removeChild(s),s=c(r,2),n.pop();return n.length}isClamped(){return this.clamped}render(){const{text:t,clamped:e}=this.state,n=this.props,{component:s,ellipsis:o,trimRight:c,className:u}=n,f=function(t,e){if(null==t)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(n,a);return i.createElement(s,r({className:`LinesEllipsis ${e?"LinesEllipsis--clamped":""} ${u}`,ref:t=>this.target=t},function(t,e){if(!t||"object"!=typeof t)return t;const n={};return Object.keys(t).forEach((i=>{e.indexOf(i)>-1||(n[i]=t[i])})),n}(f,l)),e&&c?t.replace(/[\s\uFEFF\xA0]+$/,""):t,i.createElement("wbr",null),e&&i.createElement("span",{className:"LinesEllipsis-ellipsis"},o))}}f.defaultProps=u}}]);