(function(t){function e(e){for(var o,r,i=e[0],s=e[1],u=e[2],d=0,l=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);f&&f(e);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a={app:0},c=[];function i(t){return s.p+"js/"+({about:"about",controller:"controller",images:"images",todo:"todo"}[t]||t)+"."+{about:"00fddb26",controller:"1ae98639",images:"9f899f51",todo:"cc91421d"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={controller:1,images:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({about:"about",controller:"controller",images:"images",todo:"todo"}[t]||t)+"."+{about:"31d6cfe0",controller:"3ea45e28",images:"53d8ac62",todo:"31d6cfe0"}[t]+".css",a=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===a))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===o||d===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[t],f.parentNode.removeChild(f),n(c)},f.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(t);var l=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f1b":function(t,e,n){},"21e5":function(t,e,n){},"41ff":function(t,e,n){"use strict";n("21e5")},"49bc":function(t,e,n){},"4dae":function(t,e,n){"use strict";n("fb6a");var o=n("7a23");function r(t,e,n,r,a,c){var i=Object(o["y"])("postForm");return Object(o["r"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(i,{class:"comp",onAddRowBulk:c.addRowBulk,msg:n.msg},null,8,["onAddRowBulk","msg"]),(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(a.rows.slice().reverse(),(function(t){return Object(o["r"])(),Object(o["d"])(Object(o["z"])(n.itemType),{key:t.id,post:t,onDelRow:c.delRow,onBoldRow:function(e){return c.boldRow(t.id)},class:"comp"},null,8,["post","onDelRow","onBoldRow"])})),128))],64)}var a=n("2909"),c=n("1da1"),i=(n("96cf"),n("cc71"),n("4de4"),n("d81d"),n("99af"),n("ac1f"),n("1276"),n("9ccc"));Object(o["u"])("data-v-72411446");var s={class:""},u={class:"hide"};function d(t,e,n,r,a,c){return Object(o["r"])(),Object(o["e"])("div",{class:Object(o["n"])([{emphasis:n.post.bold},"show"])},[Object(o["f"])("span",s,Object(o["B"])(n.post.msg),1),Object(o["f"])("span",u,[Object(o["f"])("i",{class:"fas fa-bold",onClick:e[0]||(e[0]=function(e){return t.$emit("bold-row")})}),Object(o["f"])("i",{class:"far fa-copy",onClick:e[1]||(e[1]=function(t){return c.copyTC(n.post.msg)})}),Object(o["f"])("i",{class:Object(o["n"])(n.post.bold?"fas fa-lock":"fas fa-times"),onClick:e[2]||(e[2]=function(e){return t.$emit("del-row",n.post)})},null,2)])],2)}Object(o["s"])();var l={name:"Item",props:{post:Object},methods:{copyTC:function(t){navigator.clipboard.writeText(t)}}};n("87d3");l.render=d,l.__scopeId="data-v-72411446";var f=l;n("b680");Object(o["u"])("data-v-35407c10");var b=["href"],p={class:"hide"};function m(t,e,n,r,a,c){return Object(o["r"])(),Object(o["e"])("div",{class:Object(o["n"])([{emphasis:n.post.bold},"show"])},[Object(o["f"])("span",null,[Object(o["f"])("a",{href:"http://reddit.com/".concat(n.post.id),target:"_blank"},Object(o["B"])(n.post.title)+" ("+Object(o["B"])((n.post.score/1e3).toFixed(1))+"k) ",9,b)]),Object(o["f"])("span",p,[Object(o["f"])("i",{class:Object(o["n"])(n.post.bold?"fas fa-lock":"fas fa-times"),onClick:e[0]||(e[0]=function(e){return t.$emit("del-row",n.post)})},null,2)])],2)}Object(o["s"])();var h={props:{post:Object},methods:{copyTC:function(t){navigator.clipboard.writeText(t)}}};n("966f");h.render=m,h.__scopeId="data-v-35407c10";var j=h,O=n("bc3a"),g=n.n(O),v={props:{itemType:String,msg:String},components:{postForm:i["a"],item:f,redditpost:j},methods:{delRow:function(t){t.bold||(this.rows=this.shift?[]:this.rows.filter((function(e){return e.id!==t.id})),this.saveRows())},boldRow:function(t){this.rows.map((function(e){e.id===t&&(e.bold=!e.bold)})),this.saveRows()},addRowBulk:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("item"!=e.itemType){n.next=5;break}e.rows=[].concat(Object(a["a"])(e.rows),Object(a["a"])(t)),e.saveRows(),n.next=12;break;case 5:if("redditpost"!=e.itemType){n.next=12;break}return e.rows=[],o=t[0].msg.split("/").pop(),n.next=10,g.a.get("https://www.reddit.com/r/".concat(o,".json?limit=10"));case 10:r=n.sent,e.rows=Object(a["a"])(r.data.data.children.map((function(t){return{title:t.data.title,id:t.data.id,score:t.data.score,timestamp:t.data.created,upvote_ratio:t.data.upvote_ratio}})).reverse());case 12:case"end":return n.stop()}}),n)})))()},saveRows:function(){var t=JSON.stringify(this.rows);localStorage.setItem(this.itemType,t)}},data:function(){return{rows:[{id:0,msg:"item 1",bold:!1},{id:1,msg:"item 2",bold:!1},{id:2,msg:"item 3",bold:!1}],shift:!1}},mounted:function(){var t=this;localStorage.getItem(this.itemType)&&(this.rows=JSON.parse(localStorage.getItem(this.itemType))),window.addEventListener("keydown",(function(e){e.shiftKey&&(t.shift=!0)})),window.addEventListener("keyup",(function(e){e.shiftKey||(t.shift=!1)})),"redditpost"==this.itemType&&(this.rows=[])}};v.render=r;e["a"]=v},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},a=Object(o["g"])("Home"),c=Object(o["g"])(" | "),i=Object(o["g"])("Todos"),s=Object(o["g"])(" | "),u=Object(o["g"])("Images"),d=Object(o["g"])(" | "),l=Object(o["g"])("Controller"),f=Object(o["g"])(" | "),b=Object(o["f"])("a",{href:"https://github.com/jiphan/jiphan.github.io",target:"_blank"},"About",-1);function p(t,e){var n=Object(o["y"])("router-link"),p=Object(o["y"])("router-view");return Object(o["r"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("div",r,[Object(o["h"])(n,{to:"/"},{default:Object(o["G"])((function(){return[a]})),_:1}),c,Object(o["h"])(n,{to:"/todos"},{default:Object(o["G"])((function(){return[i]})),_:1}),s,Object(o["h"])(n,{to:"/images"},{default:Object(o["G"])((function(){return[u]})),_:1}),d,Object(o["h"])(n,{to:"/controller"},{default:Object(o["G"])((function(){return[l]})),_:1}),f,b]),Object(o["h"])(p)],64)}n("41ff");const m={};m.render=p;var h=m,j=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02"));function O(t,e,n,r,a,c){var i=Object(o["y"])("postItems");return Object(o["r"])(),Object(o["d"])(i,{msg:"Enter subreddit here",itemType:"redditpost"})}var g=n("4dae"),v={components:{postItems:g["a"]}};v.render=O;var w=v,y=Object(o["f"])("h1",null,"404",-1),k=Object(o["f"])("img",{src:"https://c.tenor.com/WN-ECKjusvgAAAAM/confused-bird.gif"},null,-1);function T(t,e){return Object(o["r"])(),Object(o["e"])(o["a"],null,[y,k],64)}const _={};_.render=T;var R=_,x=[{path:"/",name:"Home",component:w,meta:{title:"Home"}},{path:"/todos",name:"Todos",component:function(){return n.e("todo").then(n.bind(null,"75cf"))},meta:{title:"Todos"}},{path:"/reddit",name:"Reddit",component:function(){return n.e("todo").then(n.bind(null,"fdbd"))},meta:{title:"Reddit"}},{path:"/images",name:"Images",component:function(){return n.e("images").then(n.bind(null,"ab31"))},meta:{title:"Images"}},{path:"/controller",name:"Controller",component:function(){return n.e("controller").then(n.bind(null,"3559"))},meta:{title:"Controller"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{title:"About"}},{path:"/:pathMatch(.*)",component:R,meta:{title:"404"}}],C=Object(j["a"])({history:Object(j["b"])("/"),routes:x});C.beforeEach((function(t,e,n){document.title=t.meta.title,n()}));var A=C;Object(o["c"])(h).use(A).mount("#app")},7997:function(t,e,n){},"87d3":function(t,e,n){"use strict";n("7997")},"966f":function(t,e,n){"use strict";n("0f1b")},"9ccc":function(t,e,n){"use strict";var o=n("7a23");Object(o["u"])("data-v-0044ee3b");var r=["placeholder"],a=["disabled"];function c(t,e,n,c,i,s){return Object(o["r"])(),Object(o["e"])("div",{onDragover:e[3]||(e[3]=Object(o["J"])((function(){}),["prevent"])),onDrop:[e[4]||(e[4]=Object(o["J"])((function(){}),["prevent"])),e[5]||(e[5]=function(){return s.dragFile&&s.dragFile.apply(s,arguments)})]},[Object(o["H"])(Object(o["f"])("input",{type:"text",placeholder:n.msg,"onUpdate:modelValue":e[0]||(e[0]=function(t){return i.content=t}),class:"field",onKeydown:e[1]||(e[1]=Object(o["I"])((function(){return s.onPost&&s.onPost.apply(s,arguments)}),["enter"]))},null,40,r),[[o["D"],i.content]]),Object(o["f"])("button",{disabled:0==i.content.length,onClick:e[2]||(e[2]=function(){return s.onPost&&s.onPost.apply(s,arguments)}),style:{outline:"none"}}," Post ",8,a)],32)}Object(o["s"])();n("d81d"),n("a630"),n("3ca3"),n("4de4"),n("ac1f"),n("1276"),n("5319"),n("b0c0");var i=n("ec26"),s={name:"postItem",props:{msg:String},methods:{onPost:function(){this.content&&(this.$emit("add-row-bulk",[{id:Object(i["a"])(),msg:this.content,bold:!1}]),this.content="")},dragFile:function(t){var e=this,n=[];t.dataTransfer.getData("text")?n=this.handleText(t.dataTransfer.getData("text")):t.dataTransfer.files&&(n=Array.from(t.dataTransfer.files).map((function(t){return e.handleImage(t)}))),this.$emit("add-row-bulk",n)},handleText:function(t){return t.replace("\r","").split("\n").filter((function(t){return t.length>0})).map((function(t){return{id:Object(i["a"])(),msg:t,bold:!1}}))},handleImage:function(t){var e=this,n=new FileReader;return n.onload=function(){e.$emit("preview",{key:Object(i["a"])(),data:n.result})},n.readAsDataURL(t),{id:Object(i["a"])(),msg:t.name,bold:!1}}},data:function(){return{content:"",file:[]}}};n("db49");s.render=c,s.__scopeId="data-v-0044ee3b";e["a"]=s},db49:function(t,e,n){"use strict";n("49bc")}});
//# sourceMappingURL=app.a441bcab.js.map