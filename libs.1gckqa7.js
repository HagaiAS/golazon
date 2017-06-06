!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},n={},r={},o={}.hasOwnProperty,i=/^\.\.?(\/|$)/,a=function(e,t){for(var n,r=[],o=(i.test(t)?e+"/"+t:t).split("/"),a=0,u=o.length;a<u;a++)n=o[a],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},u=function(e){return e.split("/").slice(0,-1).join("/")},f=function(t){return function(n){var r=a(u(t),n);return e.require(r,t)}},c=function(e,t){var r=v&&v.createHot(e),o={id:e,exports:{},hot:r};return n[e]=o,t(o.exports,f(e),o),o.exports},s=function(e){return r[e]?s(r[e]):e},l=function(e,t){return s(a(u(e),t))},p=function(e,r){null==r&&(r="/");var i=s(e);if(o.call(n,i))return n[i].exports;if(o.call(t,i))return c(i,t[i]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};p.alias=function(e,t){r[t]=e};var d=/\.[^.\/]+$/,g=/\/index(\.[^\/]+)?$/,h=function(e){if(d.test(e)){var t=e.replace(d,"");o.call(r,t)&&r[t].replace(d,"")!==t+"/index"||(r[t]=e)}if(g.test(e)){var n=e.replace(g,"");o.call(r,n)||(r[n]=e)}};p.register=p.define=function(e,r){if(e&&"object"==typeof e)for(var i in e)o.call(e,i)&&p.register(i,e[i]);else t[e]=r,delete n[e],h(e)},p.list=function(){var e=[];for(var n in t)o.call(t,n)&&e.push(n);return e};var v=e._hmr&&new e._hmr(l,p,t,n);p._cache=n,p.hmr=v&&v.wrap,p.brunch=!0,e.require=p}}(),function(){var e=("undefined"==typeof window?this:window,function(e,t,n){var r={},o=function(t,n){var i;try{return i=e(n+"/node_modules/"+t)}catch(a){if(a.toString().indexOf("Cannot find module")===-1)throw a;if(n.indexOf("node_modules")!==-1){var u=n.split("/"),f=u.lastIndexOf("node_modules"),c=u.slice(0,f).join("/");return o(t,c)}}return r};return function(i){if(i in t&&(i=t[i]),i){if("."!==i[0]&&n){var a=o(i,n);if(a!==r)return a}return e(i)}}});require.register("riot/riot.js",function(t,n,r){n=e(n,{},"riot"),function(){!function(e,n){"use strict";function o(e,t,n){var r={};return r[e.key]=t,e.pos&&(r[e.pos]=n),r}function i(e,t){for(var n,r=t.length,o=e.length;r>o;)n=t[--r],t.splice(r,1),n.unmount()}function a(e,t){Object.keys(e.tags).forEach(function(n){var r=e.tags[n];I(r)?m(r,function(e){S(e,n,t)}):S(r,n,t)})}function u(e,t,n){var r,o=e._root;for(e._virts=[];o;)r=o.nextSibling,n?t.insertBefore(o,n._root):t.appendChild(o),e._virts.push(o),o=r}function f(e,t,n,r){for(var o,i=e._root,a=0;a<r;a++)o=i.nextSibling,t.insertBefore(i,n._root),i=o}function c(e,t,n,r,o,i,a){F(t.root)||(e?i(t,r,n,a.childNodes.length):r.insertBefore(t.root,n.root))}function s(e,t,n){C(e,"each");var r,s=typeof O(e,"no-reorder")!==oe||C(e,"no-reorder"),l=$(e),p=W[l]||{tmpl:b(e)},g=se.test(l),h=e.parentNode,v=document.createTextNode(""),m=E(e),y="option"===l.toLowerCase(),x=[],w=[],_="VIRTUAL"==e.tagName;n=ve.loopKeys(n),h.insertBefore(v,e),t.one("before-mount",function(){e.parentNode.removeChild(e),h.stub&&(h=t.root)}).on("update",function(){var b=ve(n.val,t),C=document.createDocumentFragment();I(b)||(r=b||!1,b=r?Object.keys(b).map(function(e){return o(n,e,b[e])}):[]);for(var N=0,O=b.length;N<O;N++){var L=b[N],E=s&&typeof L==ie&&!r,T=w.indexOf(L),S=~T&&E?T:N,M=x[S];L=!r&&n.key?o(n,L,N):L,!E&&!M||E&&!~T||!M?(M=new d(p,{parent:t,isLoop:!0,hasImpl:!!W[l],root:g?h:e.cloneNode(),item:L},e.innerHTML),M.mount(),_&&(M._root=M.root.firstChild),N!=x.length&&x[N]?(c(_,M,x[N],h,x,u,e),w.splice(N,0,L)):_?u(M,C):C.appendChild(M.root),x.splice(N,0,M),S=N):M.update(L,!0),S!==N&&E&&x[N]&&(k(b,w[N])&&c(_,M,x[N],h,x,f,e),n.pos&&(M[n.pos]=N),x.splice(N,0,x.splice(S,1)[0]),w.splice(N,0,w.splice(S,1)[0]),!m&&M.tags&&a(M,N)),M._item=L,A(M,"_parent",t)}if(i(b,x),h.insertBefore(C,v),y&&ge&&!h.multiple)for(var j=0;j<h.length;j++)if(h[j].__riot1374){h.selectedIndex=j,delete h[j].__riot1374;break}m&&(t.tags[l]=x),w=b.slice()})}function l(e,t,n,r){D(e,function(e){if(1==e.nodeType){if(e.isLoop=e.isLoop||e.parentNode&&e.parentNode.isLoop||O(e,"each")?1:0,n){var o=E(e);o&&!e.isLoop&&n.push(M(o,{root:e,parent:t},e.innerHTML,t))}e.isLoop&&!r||z(e,t,[])}})}function p(e,t,n){function r(e,t,r){ve.hasExpr(t)&&n.push(R({dom:e,expr:t},r))}D(e,function(e){var n,o=e.nodeType;if(3==o&&"STYLE"!=e.parentNode.tagName&&r(e,e.nodeValue),1==o)return(n=O(e,"each"))?(s(e,t,n),!1):(m(e.attributes,function(t){var n=t.name,o=n.split("__")[1];if(r(e,t.value,{attr:o||n,bool:o}),o)return C(e,n),!1}),!E(e)&&void 0)})}function d(e,t,r){function o(){var e=b&&h?s:g||s;m(E.attributes,function(t){if(!(t.name in S)){var n=t.value;d[N(t.name)]=ve.hasExpr(n)?ve(n,e):n}}),m(Object.keys(S),function(t){d[N(t)]=ve(S[t],e)})}function i(e){for(var t in x)typeof s[t]!==ae&&P(s,t)&&(s[t]=e[t])}function a(e){m(Object.keys(e),function(t){var n=!le.test(t)&&k(M,t);(typeof s[t]===ae||n)&&(n||M.push(t),s[t]=e[t])})}function u(e){s.update(e,!0)}function f(e){if(m(O,function(t){t[e?"mount":"unmount"]()}),g){var t=e?"on":"off";h?g[t]("unmount",s.unmount):g[t]("update",u)[t]("unmount",s.unmount)}}var c,s=X.observable(this),d=U(t.opts)||{},g=t.parent,h=t.isLoop,b=t.hasImpl,x=H(t.item),w=[],O=[],E=t.root,T=E.tagName.toLowerCase(),S={},M=[];e.name&&E._tag&&E._tag.unmount(!0),this.isMounted=!1,E.isLoop=h,E._tag=this,A(this,"_riot_id",++Y),R(this,{parent:g,root:E,opts:d},x),A(this,"tags",{}),m(E.attributes,function(e){var t=e.value;ve.hasExpr(t)&&(S[e.name]=t)}),c=me(e.tmpl,r,h),A(this,"update",function(e,t){return e=H(e),h&&a(s.parent),e&&_(x)&&(i(e),x=e),R(s,e),o(),s.trigger("update",e),v(w,s),t&&s.parent?s.parent.one("updated",function(){s.trigger("updated")}):be(function(){s.trigger("updated")}),this}),A(this,"mixin",function(){return m(arguments,function(e){var t,n,r=[];e=typeof e===oe?X.mixin(e):e,t=y(e)?new e:e;var o=Object.getPrototypeOf(t);do r=r.concat(Object.getOwnPropertyNames(n||t));while(n=Object.getPrototypeOf(n||t));m(r,function(e){if("init"!=e){var n=Object.getOwnPropertyDescriptor(t,e)||Object.getOwnPropertyDescriptor(o,e),r=n&&(n.get||n.set);!s.hasOwnProperty(e)&&r?Object.defineProperty(s,e,n):s[e]=y(t[e])?t[e].bind(s):t[e]}}),t.init&&t.init.bind(s)()}),this}),A(this,"mount",function(){o();var t=X.mixin(ee);if(t)for(var n in t)t.hasOwnProperty(n)&&s.mixin(t[n]);if(s._parent&&s._parent.root.isLoop&&a(s._parent),e.fn&&e.fn.call(s,d),p(c,s,w),f(!0),e.attrs&&q(e.attrs,function(e,t){L(E,e,t)}),(e.attrs||b)&&p(s.root,s,w),s.parent&&!h||s.update(x),s.trigger("before-mount"),h&&!b)E=c.firstChild;else{for(;c.firstChild;)E.appendChild(c.firstChild);E.stub&&(E=g.root)}A(s,"root",E),h&&l(s.root,s.parent,null,!0),!s.parent||s.parent.isMounted?(s.isMounted=!0,s.trigger("mount")):s.parent.one("mount",function(){F(s.root)||(s.parent.isMounted=s.isMounted=!0,s.trigger("mount"))})}),A(this,"unmount",function(e){var t,r=E,o=r.parentNode,i=J.indexOf(s);if(s.trigger("before-unmount"),~i&&J.splice(i,1),o){if(g)t=j(g),I(t.tags[T])?m(t.tags[T],function(e,n){e._riot_id==s._riot_id&&t.tags[T].splice(n,1)}):t.tags[T]=n;else for(;r.firstChild;)r.removeChild(r.firstChild);e?(C(o,re),C(o,ne)):o.removeChild(r)}this._virts&&m(this._virts,function(e){e.parentNode&&e.parentNode.removeChild(e)}),s.trigger("unmount"),f(),s.off("*"),s.isMounted=!1,delete E._tag}),l(c,this,O)}function g(t,n,r,o){r[t]=function(t){var i,a=o._parent,u=o._item;if(!u)for(;a&&!u;)u=a._item,a=a._parent;t=t||e.event,P(t,"currentTarget")&&(t.currentTarget=r),P(t,"target")&&(t.target=t.srcElement),P(t,"which")&&(t.which=t.charCode||t.keyCode),t.item=u,n.call(o,t)===!0||/radio|check/.test(r.type)||(t.preventDefault&&t.preventDefault(),t.returnValue=!1),t.preventUpdate||(i=u?j(a):o,i.update())}}function h(e,t,n){e&&(e.insertBefore(n,t),e.removeChild(t))}function v(e,t){m(e,function(e,n){var r=e.dom,o=e.attr,i=ve(e.expr,t),a=e.parent||e.dom.parentNode;if(e.bool?i=!!i:null==i&&(i=""),e.value!==i){if(e.value=i,!o)return i+="",void(a&&(e.parent=a,"TEXTAREA"===a.tagName?(a.value=i,de||(r.nodeValue=i)):r.nodeValue=i));if("value"===o)return void(r.value!==i&&(r.value=i,L(r,o,i)));if(C(r,o),y(i))g(o,i,r,t);else if("if"==o){var u=e.stub,f=function(){h(u.parentNode,u,r)},c=function(){h(r.parentNode,r,u)};i?u&&(f(),r.inStub=!1,F(r)||D(r,function(e){e._tag&&!e._tag.isMounted&&(e._tag.isMounted=!!e._tag.trigger("mount"))})):(u=e.stub=u||document.createTextNode(""),r.parentNode?c():(t.parent||t).one("updated",c),r.inStub=!0)}else"show"===o?r.style.display=i?"":"none":"hide"===o?r.style.display=i?"none":"":e.bool?(r[o]=i,i&&L(r,o,o),ge&&"selected"===o&&"OPTION"===r.tagName&&(r.__riot1374=i)):(0===i||i&&typeof i!==ie)&&(Z(o,te)&&o!=ne&&(o=o.slice(te.length)),L(r,o,i))}})}function m(e,t){for(var n,r=e?e.length:0,o=0;o<r;o++)n=e[o],null!=n&&t(n,o)===!1&&o--;return e}function y(e){return typeof e===ue||!1}function b(e){if(e.outerHTML)return e.outerHTML;var t=B("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function x(e,t){if(typeof e.innerHTML!=ae)e.innerHTML=t;else{var n=(new DOMParser).parseFromString(t,"application/xml");e.appendChild(e.ownerDocument.importNode(n.documentElement,!0))}}function w(e){return~pe.indexOf(e)}function _(e){return e&&typeof e===ie}function C(e,t){e.removeAttribute(t)}function N(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function O(e,t){return e.getAttribute(t)}function L(e,t,n){var r=ce.exec(t);r&&r[1]?e.setAttributeNS(fe,r[1],n):e.setAttribute(t,n)}function E(e){return e.tagName&&W[O(e,re)||O(e,ne)||e.tagName.toLowerCase()]}function T(e,t,n){var r=n.tags[t];r?(I(r)||r!==e&&(n.tags[t]=[r]),k(n.tags[t],e)||n.tags[t].push(e)):n.tags[t]=e}function S(e,t,n){var r,o=e.parent;o&&(r=o.tags[t],I(r)?r.splice(n,0,r.splice(r.indexOf(e),1)[0]):T(e,t,o))}function M(e,t,n,r){var o=new d(e,t,n),i=$(t.root),a=j(r);return o.parent=a,o._parent=r,T(o,i,a),a!==r&&T(o,i,r),t.root.innerHTML="",o}function j(e){for(var t=e;!E(t.root)&&t.parent;)t=t.parent;return t}function A(e,t,n,r){return Object.defineProperty(e,t,R({value:n,enumerable:!1,writable:!1,configurable:!0},r)),e}function $(e){var t=E(e),n=O(e,"name"),r=n&&!ve.hasExpr(n)?n:t?t.name:e.tagName.toLowerCase();return r}function R(e){for(var t,n=arguments,r=1;r<n.length;++r)if(t=n[r])for(var o in t)P(e,o)&&(e[o]=t[o]);return e}function k(e,t){return~e.indexOf(t)}function I(e){return Array.isArray(e)||e instanceof Array}function P(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return typeof e[t]===ae||n&&n.writable}function H(e){if(!(e instanceof d||e&&typeof e.trigger==ue))return e;var t={};for(var n in e)le.test(n)||(t[n]=e[n]);return t}function D(e,t){if(e){if(t(e)===!1)return;for(e=e.firstChild;e;)D(e,t),e=e.nextSibling}}function q(e,t){for(var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=r.exec(e);)t(n[1].toLowerCase(),n[2]||n[3]||n[4])}function F(e){for(;e;){if(e.inStub)return!0;e=e.parentNode}return!1}function B(e,t){return t?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(e)}function K(e,t){return(t||document).querySelectorAll(e)}function G(e,t){return(t||document).querySelector(e)}function U(e){return Object.create(e||null)}function V(e){return O(e,"id")||O(e,"name")}function z(e,t,n){var r,o=V(e),i=function(i){k(n,o)||(r=I(i),i?(!r||r&&!k(i,e))&&(r?i.push(e):t[o]=[i,e]):t[o]=e)};o&&(ve.hasExpr(o)?t.one("mount",function(){o=V(e),i(t[o])}):i(t[o]))}function Z(e,t){return e.slice(0,t.length)===t}function Q(e,t,n){var r=W[t],o=e._innerHTML=e._innerHTML||e.innerHTML;return e.innerHTML="",r&&e&&(r=new d(r,{root:e,opts:n},o)),r&&r.mount&&(r.mount(),k(J,r)||J.push(r)),r}var X={version:"v2.6.8",settings:{}},Y=0,J=[],W={},ee="__global_mixin",te="riot-",ne=te+"tag",re="data-is",oe="string",ie="object",ae="undefined",ue="function",fe="http://www.w3.org/1999/xlink",ce=/^xlink:(\w+)/,se=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,le=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,pe=["altGlyph","animate","animateColor","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","filter","font","foreignObject","g","glyph","glyphRef","image","line","linearGradient","marker","mask","missing-glyph","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tref","tspan","use"],de=0|(e&&e.document||{}).documentMode,ge=e&&!!e.InstallTrigger;X.observable=function(e){function t(e,t){for(var n=e.split(" "),r=n.length,o=0;o<r;o++){var i=n[o];i&&t(i,o)}}e=e||{};var n={},r=Array.prototype.slice;return Object.defineProperties(e,{on:{value:function(r,o){return"function"!=typeof o?e:(t(r,function(e,t){(n[e]=n[e]||[]).push(o),o.typed=t>0}),e)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(r,o){return"*"!=r||o?t(r,function(e,t){if(o)for(var r,i=n[e],a=0;r=i&&i[a];++a)r==o&&i.splice(a--,1);else delete n[e]}):n={},e},enumerable:!1,writable:!1,configurable:!1},one:{value:function(t,n){function r(){e.off(t,r),n.apply(e,arguments)}return e.on(t,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(o){for(var i,a=arguments.length-1,u=new Array(a),f=0;f<a;f++)u[f]=arguments[f+1];return t(o,function(t,o){i=r.call(n[t]||[],0);for(var a,f=0;a=i[f];++f)a.busy||(a.busy=1,a.apply(e,a.typed?[t].concat(u):u),i[f]!==a&&f--,a.busy=0);n["*"]&&"*"!=t&&e.trigger.apply(e,["*",t].concat(u))}),e},enumerable:!1,writable:!1,configurable:!1}}),e},function(t){function n(e){return e.split(/[\/?#]/)}function r(e,t){var n=new RegExp("^"+t[N](/\*/g,"([^/?#]+?)")[N](/\.\./,".*")+"$"),r=e.match(n);if(r)return r.slice(1)}function o(e,t){var n;return function(){clearTimeout(n),n=setTimeout(e,t)}}function i(e){g=o(l,1),S[_](O,g),S[_](L,g),M[_](R,p),e&&l(!0)}function a(){this.$=[],t.observable(this),I.on("stop",this.s.bind(this)),I.on("emit",this.e.bind(this))}function u(e){return e[N](/^\/|\/$/,"")}function f(e){return"string"==typeof e}function c(e){return(e||A.href)[N](b,"")}function s(e){return"#"==h[0]?(e||A.href||"").split(h)[1]||"":(A?c(e):e||"")[N](h,"")}function l(e){var t,n=0==D;if(!(T<=D)&&(D++,H.push(function(){var t=s();(e||t!=v)&&(I[E]("emit",t),v=t)}),n)){for(;t=H.shift();)t();D=0}}function p(e){if(!(1!=e.which||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var t=e.target;t&&"A"!=t.nodeName;)t=t.parentNode;!t||"A"!=t.nodeName||t[C]("download")||!t[C]("href")||t.target&&"_self"!=t.target||t.href.indexOf(A.href.match(b)[0])==-1||t.href!=A.href&&(t.href.split("#")[0]==A.href.split("#")[0]||"#"!=h[0]&&0!==c(t.href).indexOf(h)||"#"==h[0]&&t.href.split(h)[0]!=A.href.split(h)[0]||!d(s(t.href),t.title||M.title))||e.preventDefault()}}function d(e,t,n){return j?(e=h+u(e),t=t||M.title,n?j.replaceState(null,t,e):j.pushState(null,t,e),M.title=t,P=!1,l(),P):I[E]("emit",s(e))}var g,h,v,m,y,b=/^.+?\/\/+[^\/]+/,x="EventListener",w="remove"+x,_="add"+x,C="hasAttribute",N="replace",O="popstate",L="hashchange",E="trigger",T=3,S="undefined"!=typeof e&&e,M="undefined"!=typeof document&&document,j=S&&history,A=S&&(j.location||S.location),$=a.prototype,R=M&&M.ontouchstart?"touchstart":"click",k=!1,I=t.observable(),P=!1,H=[],D=0;$.m=function(e,t,n){!f(e)||t&&!f(t)?t?this.r(e,t):this.r("@",e):d(e,t,n||!1)},$.s=function(){this.off("*"),this.$=[]},$.e=function(e){this.$.concat("@").some(function(t){var n=("@"==t?m:y)(u(e),u(t));if("undefined"!=typeof n)return this[E].apply(null,[t].concat(n)),P=!0},this)},$.r=function(e,t){"@"!=e&&(e="/"+u(e),this.$.push(e)),this.on(e,t)};var q=new a,F=q.m.bind(q);F.create=function(){var e=new a,t=e.m.bind(e);return t.stop=e.s.bind(e),t},F.base=function(e){h=e||"#",v=s()},F.exec=function(){l(!0)},F.parser=function(e,t){e||t||(m=n,y=r),e&&(m=e),t&&(y=t)},F.query=function(){var e={},t=A.href||v;return t[N](/[?&](.+?)=([^&]*)/g,function(t,n,r){e[n]=r}),e},F.stop=function(){k&&(S&&(S[w](O,g),S[w](L,g),M[w](R,p)),I[E]("stop"),k=!1)},F.start=function(e){k||(S&&("complete"==document.readyState?i(e):S[_]("load",function(){setTimeout(function(){i(e)},1)})),k=!0)},F.base(),F.parser(),t.route=F}(X);var he=function(e){function t(e){return e}function n(e,t){return t||(t=b),new RegExp(e.source.replace(/{/g,t[2]).replace(/}/g,t[3]),e.global?c:"")}function r(e){if(e===v)return m;var t=e.split(" ");if(2!==t.length||d.test(e))throw new Error('Unsupported brackets "'+e+'"');return t=t.concat(e.replace(g,"\\").split(" ")),t[4]=n(t[1].length>1?/{[\S\s]*?}/:m[4],t),t[5]=n(e.length>3?/\\({|})/g:m[5],t),t[6]=n(m[6],t),t[7]=RegExp("\\\\("+t[3]+")|([[({])|("+t[3]+")|"+p,c),t[8]=e,t}function o(e){return e instanceof RegExp?u(e):b[e]}function i(e){(e||(e=v))!==b[8]&&(b=r(e),u=e===v?t:n,b[9]=u(m[9])),y=e}function a(e){var t;e=e||{},t=e.brackets,Object.defineProperty(e,"brackets",{set:i,get:function(){return y},enumerable:!0}),f=e,i(t)}var u,f,c="g",s=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,l=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,p=l.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,d=RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),g=/(?=[[\]()*+?.^$|])/g,h={"(":RegExp("([()])|"+p,c),"[":RegExp("([[\\]])|"+p,c),"{":RegExp("([{}])|"+p,c)},v="{ }",m=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+p,c),v,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],y=e,b=[];return o.split=function(e,t,n){function r(e){t||a?c.push(e&&e.replace(n[5],"$1")):c.push(e)}function o(e,t,n){var r,o=h[t];for(o.lastIndex=n,n=1;(r=o.exec(e))&&(!r[1]||(r[1]===t?++n:--n)););return n?e.length:o.lastIndex}n||(n=b);var i,a,u,f,c=[],s=n[6];for(a=u=s.lastIndex=0;i=s.exec(e);){if(f=i.index,a){if(i[2]){s.lastIndex=o(e,i[2],s.lastIndex);continue}if(!i[3])continue}i[1]||(r(e.slice(u,f)),u=s.lastIndex,s=n[6+(a^=1)],s.lastIndex=u)}return e&&u<e.length&&r(e.slice(u)),c},o.hasExpr=function(e){return b[4].test(e)},o.loopKeys=function(e){var t=e.match(b[9]);return t?{key:t[1],pos:t[2],val:b[0]+t[3].trim()+b[1]}:{val:e.trim()}},o.array=function(e){return e?r(e):b},Object.defineProperty(o,"settings",{set:a,get:function(){return f}}),o.settings="undefined"!=typeof X&&X.settings||{},o.set=i,o.R_STRINGS=l,o.R_MLCOMMS=s,o.S_QBLOCKS=p,o}(),ve=function(){function t(e,t){return e?(u[e]||(u[e]=r(e))).call(t,n):e}function n(e,n){t.errorHandler&&(e.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},t.errorHandler(e))}function r(e){var t=o(e);return"try{return "!==t.slice(0,11)&&(t="return "+t),new Function("E",t+";")}function o(e){var t,n=[],r=he.split(e.replace(l,'"'),1);if(r.length>2||r[0]){var o,a,u=[];for(o=a=0;o<r.length;++o)t=r[o],t&&(t=1&o?i(t,1,n):'"'+t.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(u[a++]=t);t=a<2?u[0]:"["+u.join(",")+'].join("")'}else t=i(r[1],0,n);return n[0]&&(t=t.replace(p,function(e,t){return n[t].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),t}function i(e,t,n){function r(t,n){var r,o=1,i=d[t];for(i.lastIndex=n.lastIndex;r=i.exec(e);)if(r[0]===t)++o;else if(!--o)break;n.lastIndex=o?e.length:i.lastIndex}if(e=e.replace(s,function(e,t){return e.length>2&&!t?f+(n.push(e)-1)+"~":e}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var o,i=[],u=0;e&&(o=e.match(c))&&!o.index;){var l,p,g=/,|([[{(])|$/g;for(e=RegExp.rightContext,l=o[2]?n[o[2]].slice(1,-1).trim().replace(/\s+/g," "):o[1];p=(o=g.exec(e))[1];)r(p,g);p=e.slice(0,o.index),e=RegExp.rightContext,i[u++]=a(p,1,l)}e=u?u>1?"["+i.join(",")+'].join(" ").trim()':i[0]:a(e,t)}return e}function a(e,t,n){var r;return e=e.replace(h,function(e,t,n,o,i){return n&&(o=r?0:o+e.length,"this"!==n&&"global"!==n&&"window"!==n?(e=t+'("'+n+g+n,o&&(r="."===(i=i[o])||"("===i||"["===i)):o&&(r=!v.test(i.slice(o)))),e}),r&&(e="try{return "+e+"}catch(e){E(e,this)}"),n?e=(r?"function(){"+e+"}.call(this)":"("+e+")")+'?"'+n+'":""':t&&(e="function(v){"+(r?e.replace("return ","v="):"v=("+e+")")+';return v||v===0?v:""}.call(this)'),e}var u={};t.haveRaw=he.hasRaw,t.hasExpr=he.hasExpr,t.loopKeys=he.loopKeys,t.clearCache=function(){u={}},t.errorHandler=null;var f=String.fromCharCode(8279),c=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,s=RegExp(he.S_QBLOCKS,"g"),l=/\u2057/g,p=/\u2057(\d+)~/g,d={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},g='"in this?this:'+("object"!=typeof e?"global":"window")+").",h=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,v=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return t.version=he.version="v2.4.2",t}(),me=function xe(){function xe(n,r,o){var i=n&&n.match(/^\s*<([-\w]+)/),a=i&&i[1].toLowerCase(),f=B("div",o&&w(a));return n=t(n,r),u.test(a)?f=e(f,n,a):x(f,n),f.stub=!0,f}function e(e,t,n){var r="o"===n[0],o=r?"select>":"table>";if(e.innerHTML="<"+o+t.trim()+"</"+o,o=e.firstChild,r)o.selectedIndex=-1;else{var i=a[n];i&&1===o.childElementCount&&(o=G(i,o))}return o}function t(e,t){if(!n.test(e))return e;var a={};return t=t&&t.replace(o,function(e,t,n){return a[t]=a[t]||n,""}).trim(),e.replace(i,function(e,t,n){return a[t]||n||""}).replace(r,function(e,n){return t||n||""})}var n=/<yield\b/i,r=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,o=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,i=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,a={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},u=de&&de<10?se:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;return xe}(),ye=function(t){if(!e)return{add:function(){},inject:function(){}};var n=function(){var e=B("style");L(e,"type","text/css");var t=G("style[type=riot]");return t?(t.id&&(e.id=t.id),t.parentNode.replaceChild(e,t)):document.getElementsByTagName("head")[0].appendChild(e),e}(),r=n.styleSheet,o="";return Object.defineProperty(t,"styleNode",{value:n,writable:!0}),{add:function(e){o+=e},inject:function(){o&&(r?r.cssText+=o:n.innerHTML+=o,o="")}}}(X),be=function(e){var t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame;if(!t||/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent)){var n=0;t=function(e){var t=Date.now(),r=Math.max(16-(t-n),0);setTimeout(function(){e(n=t+r)},r)}}return t}(e||{});X.util={brackets:he,tmpl:ve},X.mixin=function(){var e={},t=e[ee]={},n=0;return function(r,o,i){if(_(r))return void X.mixin("__unnamed_"+n++,r,!0);var a=i?t:e;if(!o){if(typeof a[r]===ae)throw new Error("Unregistered mixin: "+r);return a[r]}y(o)?(R(o.prototype,a[r]||{}),a[r]=o):a[r]=R(a[r]||{},o)}}(),X.tag=function(e,t,n,r,o){return y(r)&&(o=r,/^[\w\-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(y(n)?o=n:ye.add(n)),e=e.toLowerCase(),W[e]={name:e,tmpl:t,attrs:r,fn:o},e},X.tag2=function(e,t,n,r,o){return n&&ye.add(n),W[e]={name:e,tmpl:t,attrs:r,fn:o},e},X.mount=function(e,t,n){function r(e){var t="";return m(e,function(e){/[^-\w]/.test(e)||(e=e.trim().toLowerCase(),t+=",["+re+'="'+e+'"],['+ne+'="'+e+'"]')}),t}function o(){var e=Object.keys(W);return e+r(e)}function i(e){if(e.tagName){var r=O(e,re)||O(e,ne);t&&r!==t&&(r=t,L(e,re,t),L(e,ne,t));var o=Q(e,r||e.tagName.toLowerCase(),n);o&&f.push(o)}else e.length&&m(e,i)}var a,u,f=[];if(ye.inject(),_(t)&&(n=t,t=0),typeof e===oe?("*"===e?e=u=o():e+=r(e.split(/, */)),a=e?K(e):[]):a=e,"*"===t){if(t=u||o(),a.tagName)a=K(t,a);else{var c=[];m(a,function(e){c.push(K(t,e))}),a=c}t=0}return i(a),f},X.update=function(){return m(J,function(e){e.update()})},X.vdom=J,X.Tag=d,typeof t===ie?r.exports=X:typeof define===ue&&typeof define.amd!==ae?define(function(){return X}):e.riot=X}("undefined"!=typeof window?window:void 0)}()}),require.alias("riot/riot.js","riot"),require.register("___globals___",function(e,t,n){})}(),require("___globals___");