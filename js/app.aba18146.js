(function(t){function e(e){for(var a,r,s=e[0],o=e[1],u=e[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(c.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},c=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"18ad":function(t,e,n){"use strict";n("9da1")},3042:function(t,e,n){"use strict";n("e66d")},3294:function(t,e,n){"use strict";n("791d")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i=(n("f5fa"),Object(a["B"])("data-v-8bad635c"));Object(a["s"])("data-v-8bad635c");var c={class:"container"},r={class:"bd-container"},s={class:"bd-content scroll-container"},o={class:"content"};Object(a["q"])();var u=i((function(t,e,n,i,u,l){var d=Object(a["w"])("Aside"),f=Object(a["w"])("Header"),b=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])("div",c,[Object(a["g"])(d,{status:u.asideStatus,navData:u.navInfo},null,8,["status","navData"]),Object(a["g"])("div",r,[Object(a["g"])(f,{onSetAsideStatus:l.setAsideStatus,onGetNavInfo:l.getNavInfo},null,8,["onSetAsideStatus","onGetNavInfo"]),Object(a["g"])("div",s,[Object(a["g"])("div",o,[Object(a["g"])(b)])])])])})),l={class:"header"},d={class:"hd-logo"},f={class:"hd-nav"};function b(t,e,n,i,c,r){return Object(a["p"])(),Object(a["d"])("div",l,[Object(a["g"])("div",d,[Object(a["g"])("span",{class:["switch",c.isClose?"switch-open":"switch-close"],onClick:e[1]||(e[1]=function(t){return r.setAsideStatus("")})},null,2),Object(a["g"])("span",{class:"hd-name",style:{color:c.isClose?"#fa8919":"#409EFF"}}," caiwenHub ",4)]),Object(a["g"])("div",f,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(c.navList,(function(t){return Object(a["p"])(),Object(a["d"])("span",{key:t.key,class:r.getNavItemClass(t.isActive),onClick:function(e){return r.handleNavItemClick(t)}},Object(a["y"])(t.value),11,["onClick"])})),128))])])}n("4de4"),n("159b");var h=n("3835"),v=n("ade3"),p=(n("4fad"),n("5530")),j=(n("d3b7"),n("1bf2"),n("ac1f"),n("1276"),n("a434"),function(t){return t&&"string"===typeof t}),g=function(t){return t&&"[object Object]"===Object.prototype.toString.call(t)},O=function(t){return g(t)&&Reflect.ownKeys(t).length},m=function(t){return t&&Array.isArray(t)},y=function(t){return m(t)&&t.length},S=function(t){var e={"[object String]":"string","[object Number]":"number","[object Boolean]":"boolean","[object Null]":"null","[object Undefined]":"undefined","[object Symbol]":"symbol","[object BigInt]":"bigInt","[object Object]":"object","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Error]":"error"};return e[Object.prototype.toString.call(t)]},A=function t(e){var n=S(e),a=null;if("array"===n){a=[];for(var i=0;i<e.length;i++)a.push(t(e[i]))}else{if("object"!==n)return e;for(var c in a={},e)Reflect.ownKeys(e).length&&(a[c]=t(e[c]))}return a},w=function(){return location.hash.split("/").pop()},k=function(t,e){var n=-1;return t.some((function(t,a){return t.key===e&&(n=a,!0)})),n},I=function(t){var e=location.hash.split("/");e.splice(0,2);var n=function t(e,n){var a=e.shift(),i=k(n,a);i>=0&&(n[i]=Object(p["a"])(Object(p["a"])({},n[i]),{},{isActive:!0}),y(n[i].children)&&t(e,n[i].children))};return y(e)&&n(e,t),console.log(111,t),t},P=function(t){return JSON.parse(localStorage.getItem(t))},C=function(t,e){return localStorage.setItem(t,JSON.stringify(e))},N=function(t){return localStorage.hasOwnProperty(t)},L=function(){return localStorage.clear()},x=function(t){return localStorage.deleteData(t)},D=function(t){if(j(t)&&N(t))return Object(v["a"])({},t,P(t));if(y(t)){var e={};return t.forEach((function(n){N(n)&&(e[n]=P(t))})),e}return{}},E=function(t){if(!O(t))throw new Error("param need Object");Object.entries(t).forEach((function(t){var e=Object(h["a"])(t,2),n=e[0],a=e[1];C(n,a)}))},M=function(t){j(t)&&x(t),y(t)&&t.forEach((function(t){return x(t)}))},T={getData:D,setData:E,clearData:L,deleteData:M},_=T,R=n("1da1"),H=(n("96cf"),n("bc3a")),$=n.n(H);function B(t){return J.apply(this,arguments)}function J(){return J=Object(R["a"])(regeneratorRuntime.mark((function t(e){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=$.a.create(),a={baseURL:"/",timeout:5e3,method:"get"},t.next=4,n(Object(p["a"])(Object(p["a"])({},a),{},{url:e})).then((function(t){return t}));case 4:return i=t.sent,t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)}))),J.apply(this,arguments)}var q=B,F={data:function(){return{isClose:!1,navList:[],cacheNavList:[]}},created:function(){this.getNavList()},methods:{getNavList:function(){var t=this;q("static/data-config/nav.json").then((function(e){if(e&&e.data){var n=e.data;_.setData({navList:n}),t.cacheNavList=A(n);var a=I(n),i=a.filter((function(t){return!!t.isActive}))[0];t.$emit("getNavInfo",i),t.navList=a}}))},setAsideStatus:function(t){this.isClose=t?!("open"===t):!this.isClose,this.$emit("setAsideStatus",t)},getNavItemClass:function(t){return t?"hd-nav-item hd-nav-item-active":"hd-nav-item"},handleNavItemClick:function(t){this.navList=A(this.cacheNavList),this.navList.forEach((function(e){t.key===e.key?e.isActive=!0:e.isActive=!1})),this.setAsideStatus("open"),this.$emit("getNavInfo",t),this.$router.push({path:"/nav".concat(t.path)})}}},G=(n("b8be"),n("6b0d")),K=n.n(G);const U=K()(F,[["render",b]]);var W=U,z=n("9d64"),Q=n.n(z),V=n("e841"),X=n.n(V),Y=Object(a["B"])("data-v-997cf440");Object(a["s"])("data-v-997cf440");var Z=Object(a["g"])("div",{class:"aside-logo"},[Object(a["g"])("img",{class:"logo-img",src:Q.a,alt:"头像",srcset:""})],-1),tt=Object(a["g"])("div",{class:"aside-brief"},[Object(a["g"])("div",{class:"head-img-box"},[Object(a["g"])("img",{class:"head-img",src:X.a,alt:"头像",srcset:""})]),Object(a["g"])("div",{class:"head-info"},[Object(a["g"])("span",null,[Object(a["g"])("strong",null,"哈皮艾瑞day")]),Object(a["g"])("span",{class:"head-info-msg"},"前端之路..."),Object(a["g"])("span",{class:"head-info-msg"},"岂是一句‘卧槽’能概括")])],-1),et={key:0,class:"aside-list"};Object(a["q"])();var nt=Y((function(t,e,n,i,c,r){var s=Object(a["w"])("Empty");return Object(a["p"])(),Object(a["d"])("div",{class:["aside",r.getAsideClass]},[Z,tt,r.isRealArr(r.navInfo.children)?(Object(a["p"])(),Object(a["d"])("div",et,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(r.navInfo.children,(function(t,e){return Object(a["p"])(),Object(a["d"])("div",{key:e,class:"aside-list-item"},[Object(a["g"])("div",{class:["aside-item",r.getIconActive(t)],onClick:function(e){return r.handleClickListItem(t)}},[Object(a["g"])("span",null,Object(a["y"])(t.value),1)],10,["onClick"]),r.isRealArr(t.children)?(Object(a["p"])(),Object(a["d"])("div",{key:0,class:"aside-sub-items",style:t.style},[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(t.children,(function(e,n){return Object(a["p"])(),Object(a["d"])("div",{key:n,class:[r.getSubStyle(e),"aside-sub-item"],onClick:function(n){return r.hadleClickSubItem(e,t.children)}},Object(a["y"])(e.value),11,["onClick"])})),128))],4)):Object(a["e"])("",!0)])})),128))])):(Object(a["p"])(),Object(a["d"])(s,{key:1}))],2)})),at=Object(a["B"])("data-v-21e2929e");Object(a["s"])("data-v-21e2929e");var it={class:"empty"};Object(a["q"])();var ct=at((function(t,e,n,i,c,r){return Object(a["p"])(),Object(a["d"])("div",it," 暂未更新... ")})),rt={};n("3294");const st=K()(rt,[["render",ct],["__scopeId","data-v-21e2929e"]]);var ot=st,ut={components:{Empty:ot},props:{status:{type:String,default:""},navData:{type:Object,default:function(){}}},computed:{getAsideClass:function(){return"open"===this.status?"aside-open":"hide"===this.status?"aside-hide":""},navInfo:function(){return console.log(this.navData),this.navData}},methods:{isRealArr:function(t){return y(t)},toArticalPage:function(t){var e=t.children,n=t.path;y(e)||this.$router.push({path:"/artical".concat(n)})},getIconActive:function(t){var e=t||{},n=e.children,a=e.isActive;return y(n)?(this.setSubAsideHeight(t),a?"aside-item-icon aside-item-up":"aside-item-icon"):""},setSubAsideHeight:function(t){var e=t.children,n=t.isActive;t.style={height:n&&y(e)?"".concat(60*e.length,"px"):0}},handleClickListItem:function(t){t.isActive=!t.isActive,this.setSubAsideHeight(t),this.toArticalPage(t)},hadleClickSubItem:function(t){this.navInfo.children.forEach((function(t){t.children.forEach((function(e,n){t.children[n].isActive=!1}))})),t.isActive=!t.isActive,this.$emit("getData",t.key),this.toArticalPage(t)},getSubStyle:function(t){var e=t.isActive;return e?"aside-sub-item-active":""}}};n("18ad");const lt=K()(ut,[["render",nt],["__scopeId","data-v-997cf440"]]);var dt=lt,ft={components:{Header:W,Aside:dt},data:function(){return{isContent:!1,isList:!0,content:"",mdTile:"",articles:[],asideStatus:"",navInfo:{},navList:[]}},methods:{setAsideStatus:function(t){if(t){if(!this.asideStatus)return;this.asideStatus=t}else this.asideStatus&&"open"!==this.asideStatus?this.asideStatus="open":this.asideStatus="hide"},getNavInfo:function(t){t&&(this.navInfo=t)},clipPage:function(t){this.content=t,this.isContent=!1,this.isList=!1},goIndex:function(){this.isContent=!1,this.isList=!0}}};n("3042");const bt=K()(ft,[["render",u],["__scopeId","data-v-8bad635c"]]);var ht=bt,vt=n("6c02"),pt=Object(a["f"])("页面加载错误。。。");function jt(t,e,n,i,c,r){var s=Object(a["w"])("Index"),o=Object(a["w"])("wep-page"),u=Object(a["w"])("other");return Object(a["p"])(),Object(a["d"])("div",null,[c.curModal.index?(Object(a["p"])(),Object(a["d"])(s,{key:0})):c.curModal.webpage?(Object(a["p"])(),Object(a["d"])(o,{key:1,title:c.title},null,8,["title"])):c.curModal.other?(Object(a["p"])(),Object(a["d"])(u,{key:2,title:c.title},null,8,["title"])):(Object(a["p"])(),Object(a["d"])(a["a"],{key:3},[pt],64))])}var gt=Object(a["g"])("h1",null,"首页",-1);function Ot(t,e,n,i,c,r){return Object(a["p"])(),Object(a["d"])("div",null,[gt])}var mt={};const yt=K()(mt,[["render",Ot]]);var St=yt;function At(t,e,n,i,c,r){return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])("h1",null,Object(a["y"])(n.title),1)])}var wt={props:{title:{type:String,default:""}}};const kt=K()(wt,[["render",At]]);var It=kt,Pt=Object(a["g"])("h1",null,"其他",-1);function Ct(t,e,n,i,c,r){return Object(a["p"])(),Object(a["d"])("div",null,[Pt])}var Nt={};const Lt=K()(Nt,[["render",Ct]]);var xt=Lt,Dt={components:{Index:St,WepPage:It,Other:xt},name:w(),data:function(){return{title:"",modalPath:"",curModal:{index:!1,webpage:!1,other:!1}}},created:function(){this.init()},watch:{"$route.params":{handler:function(){this.init()}}},methods:{init:function(){var t=w();this.modalPath=t,this.isCurPage(),"nav"===this.getPageType()&&this.initNavPage()},getPageType:function(){return location.hash.split("/",2).pop()},isCurPage:function(){var t=this,e=["base","frame","engine","cli"];"nav"===this.getPageType()&&(this.curModal=Object(p["a"])(Object(p["a"])({},this.curModal),{},{index:"index"===this.modalPath,webpage:e.some((function(e){return e===t.modalPath})),other:"other"===this.modalPath}))},fomateNavListToObj:function(){var t=_.getData("navList")||{},e=t.navList;if(y(e)){var n={};return e.forEach((function(t){var e=t.key,a=t.value;n[e]=a})),n}},initNavPage:function(){var t=this.fomateNavListToObj();this.title=t[this.modalPath]}}};const Et=K()(Dt,[["render",jt]]);var Mt=Et;function Tt(t,e,n,i,c,r){return Object(a["p"])(),Object(a["d"])("div",{innerHTML:c.articles&&c.articles.content},null,8,["innerHTML"])}var _t={data:function(){return{articles:{}}},created:function(){this.init()},watch:{"$route.params":{handler:function(){this.init()},deep:!0}},methods:{init:function(){"artical"===this.getPageType()&&this.initArticalPage()},getPageType:function(){return location.hash.split("/",2).pop()},initArticalPage:function(){var t=this,e=w();q("static/parsefile/".concat(e,".json")).then((function(e){t.articles=e.data}))}}};const Rt=K()(_t,[["render",Tt]]);var Ht=Rt,$t=[{path:"/",redirect:"/nav/index"},{path:"/nav/:navName",name:"basePage",component:Mt},{path:"/artical/:articalName+",name:"articalPage",component:Ht}],Bt=new vt["a"]({history:Object(vt["b"])(),routes:$t}),Jt=Bt,qt=Object(a["c"])(ht);qt.use(Jt),qt.mount("#app")},"791d":function(t,e,n){},"96d8":function(t,e,n){},"9d64":function(t,e,n){t.exports=n.p+"img/logo.e3f5de11.png"},"9da1":function(t,e,n){},b8be:function(t,e,n){"use strict";n("96d8")},e66d:function(t,e,n){},e841:function(t,e,n){t.exports=n.p+"img/head.b202c535.png"},f5fa:function(t,e,n){}});
//# sourceMappingURL=app.aba18146.js.map