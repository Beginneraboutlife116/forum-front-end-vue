(function(e){function t(t){for(var r,n,c=t[0],o=t[1],u=t[2],l=0,d=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s={app:0},i=[];function c(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b2ec8":"408112ae","chunk-2d0d338e":"4a43aa9e","chunk-383bc92e":"275f4ef2","chunk-3fdfc446":"93636ec5","chunk-431f310c":"bd5c3001","chunk-57ef77d8":"031d78dc","chunk-452696c7":"1a3c42d7","chunk-84cc821a":"55d77698","chunk-94324490":"990f9b5b","chunk-670da62a":"09a1a6b8","chunk-0991fea9":"65509763","chunk-76fc4d78":"03463a01","chunk-71c50812":"33197386","chunk-7add3850":"d9e21f99","chunk-958bdcfa":"2a8fc67e","chunk-aee645d8":"696daea7"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-431f310c":1,"chunk-0991fea9":1,"chunk-76fc4d78":1,"chunk-aee645d8":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0b2ec8":"31d6cfe0","chunk-2d0d338e":"31d6cfe0","chunk-383bc92e":"31d6cfe0","chunk-3fdfc446":"31d6cfe0","chunk-431f310c":"f3038fc8","chunk-57ef77d8":"31d6cfe0","chunk-452696c7":"31d6cfe0","chunk-84cc821a":"31d6cfe0","chunk-94324490":"31d6cfe0","chunk-670da62a":"31d6cfe0","chunk-0991fea9":"8d3ab14c","chunk-76fc4d78":"47956418","chunk-71c50812":"31d6cfe0","chunk-7add3850":"31d6cfe0","chunk-958bdcfa":"31d6cfe0","chunk-aee645d8":"0f5e8b38"}[e]+".css",s=o.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],f.parentNode.removeChild(f),a(i)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/forum-front-end-vue/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"05af":function(e,t,a){},"099c":function(e,t,a){},"12ab":function(e,t,a){},"15a8":function(e,t,a){"use strict";a("099c")},2375:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bouncing-loader"},[a("div"),a("div"),a("div")])])}],s=(a("15a8"),a("2877")),i={},c=Object(s["a"])(i,r,n,!1,null,"74807b6a",null);t["a"]=c.exports},2793:function(e,t,a){"use strict";a("37a6")},"37a6":function(e,t,a){},"3aee":function(e,t,a){"use strict";a("a8d3")},"43ef":function(e,t,a){"use strict";a("d0f8")},"4cce":function(e,t,a){"use strict";var r=a("b132");t["a"]={getCurrentUser:function(){return r["b"].get("/get_current_user")},get:function(e){var t=e.userId;return r["b"].get("/users/".concat(t))},addToFavorite:function(e){var t=e.restaurantId;return r["b"].post("/favorite/".concat(t),null)},deleteFromFavorite:function(e){var t=e.restaurantId;return r["b"].delete("/favorite/".concat(t))},addToLike:function(e){var t=e.restaurantId;return r["b"].post("/like/".concat(t),null)},deleteFromLike:function(e){var t=e.restaurantId;return r["b"].delete("/like/".concat(t))},getTopUsers:function(){return r["b"].get("/users/top")},followUser:function(e){var t=e.userId;return r["b"].post("/following/".concat(t),null)},cancelFollowUser:function(e){var t=e.userId;return r["b"].delete("/following/".concat(t))},update:function(e){var t=e.userId,a=e.formData;return r["b"].put("/users/".concat(t),a)}}},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"restaurant-forum"}},[a("NavBar"),a("main",{staticClass:"mt-5 bg-white",attrs:{role:"main"}},[a("router-view")],1)],1)},s=[],i=(a("7b17"),a("ab8b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[a("div",{staticClass:"container-fluid"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v(" 餐廳評論網 ")]),e._m(0),a("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ms-auto"},[e.currentUser.isAdmin?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"text-white me-3",attrs:{to:"/admin"}},[e._v(" 管理員後台 ")])],1):e._e(),e.isAuthenticated?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"text-white me-3",attrs:{to:{name:"user",params:{id:e.currentUser.id}}}},[e._v(" "+e._s(e.currentUser.name||"使用者")+" 您好 ")])],1):e._e()]),e.isAuthenticated?a("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.logout.apply(null,arguments)}}},[e._v(" 登出 ")]):e._e()])],1)])}),c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("5530"),u=a("2f62"),l={name:"NavBar",computed:Object(o["a"])({},Object(u["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/signin")}}},d=l,f=(a("6ff8"),a("2877")),p=Object(f["a"])(d,i,c,!1,null,"10b57104",null),m=p.exports,g={components:{NavBar:m}},b=g,v=(a("afe2"),Object(f["a"])(b,n,s,!1,null,"4c2f81f0",null)),h=v.exports,k=a("1da1"),w=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("b0c0"),a("2532"),a("8c4f")),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("404 Not Found")])},C=[],P={},_=Object(f["a"])(P,y,C,!1,null,null,null),x=_.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),a("div",{staticClass:"mb-2"},[a("label",{staticClass:"form-label",attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"d-grid"},[a("button",{staticClass:"btn btn-lg btn-primary mb-3",attrs:{disabled:e.isProcessing,type:"submit"}},[e._v(" Submit ")])]),a("div",{staticClass:"text-center mb-3"},[a("p",[a("router-link",{attrs:{to:"/signup"}},[e._v(" Sign Up ")])],1)]),a("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v(" © 2017-2018 ")])])])},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"h3 mb-3 fw-normal"},[e._v(" Sign In ")])])}],I=a("7696"),R=a("b132"),E={data:function(){return{email:"",password:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.email&&e.password){t.next=4;break}return R["a"].fire({icon:"warning",title:"請填入 email 和 password"}),t.abrupt("return");case 4:return e.isProcessing=!0,t.next=7,I["a"].signIn({email:e.email,password:e.password});case 7:if(a=t.sent,r=a.data,"success"===r.status){t.next=11;break}throw new Error(r.message);case 11:localStorage.setItem("token",r.token),e.$store.commit("setCurrentUser",r.user),e.$router.push("/restaurants"),t.next=22;break;case 16:t.prev=16,t.t0=t["catch"](0),e.password="",R["a"].fire({icon:"warning",title:"請確認您輸入了正確的帳號密碼"}),e.isProcessing=!1,console.log("error: ",t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}},L=E,S=Object(f["a"])(L,O,j,!1,null,null,null),F=S.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("NavTabs"),a("RestaurantsNavPills",{attrs:{categories:e.categories}}),e.isLoading?a("Spinner"):e._e(),[a("div",{staticClass:"row"},e._l(e.restaurants,(function(e){return a("RestaurantCard",{key:e.id,attrs:{"initial-restaurant":e}})})),1)],e.totalPage.length>1?a("RestaurantsPagination",{attrs:{"category-id":e.categoryId,"current-page":e.currentPage,"total-page":e.totalPage,"previous-page":e.previousPage,"next-page":e.nextPage}}):e._e(),e.restaurants.length<1?a("div",[a("h1",{staticClass:"fw-bolder"},[e._v("此類別目前無餐廳")])]):e._e()],2)},A=[],N=a("8bb1"),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 col-lg-4"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"card mb-4"},[a("img",{staticClass:"card-img-top",attrs:{src:e._f("emptyImage")(e.restaurant.image),alt:"Card image cap",width:"286px",height:"180px"},on:{load:e.changeLoading}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[a("router-link",{staticClass:"text-decoration-none",attrs:{to:{name:"restaurant",params:{id:e.restaurant.id}}}},[e._v(" "+e._s(e.restaurant.name)+" ")])],1),a("span",{staticClass:"badge bg-secondary"},[e._v(" "+e._s(e.restaurant.Category.name)+" ")]),a("p",{staticClass:"card-text text-truncate"},[e._v(" "+e._s(e.restaurant.description)+" ")])]),a("div",{staticClass:"card-footer"},[e.restaurant.isFavorited?a("button",{staticClass:"btn btn-danger btn-border favorite me-2",attrs:{type:"button",disabled:e.favoriteProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFromFavorite(e.restaurant.id)}}},[e._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary btn-border favorite me-2",attrs:{type:"button",disabled:e.favoriteProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addToFavorite(e.restaurant.id)}}},[e._v(" 加到最愛 ")]),e.restaurant.isLiked?a("button",{staticClass:"btn btn-danger like me-2",attrs:{type:"button",disabled:e.likeProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFromLike(e.restaurant.id)}}},[e._v(" Unlike ")]):a("button",{staticClass:"btn btn-primary like me-2",attrs:{type:"button",disabled:e.likeProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addToLike(e.restaurant.id)}}},[e._v(" Like ")])])])])},q=[],$=a("57f1"),D=a("4cce"),B={name:"RestaurantCard",mixins:[$["a"]],props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant,isLoading:!0,favoriteProcessing:!1,likeProcessing:!1}},methods:{changeLoading:function(){this.isLoading=!1},addToFavorite:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.favoriteProcessing=!0,a.next=4,D["a"].addToFavorite({restaurantId:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!0}),t.favoriteProcessing=!1,a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),t.favoriteProcessing=!1,R["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍候嘗試"});case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()},deleteFromFavorite:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.favoriteProcessing=!0,a.next=4,D["a"].deleteFromFavorite({restaurantId:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!1}),t.favoriteProcessing=!1,a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),t.favoriteProcessing=!1,R["a"].fire({icon:"error",title:"無法將餐廳刪除最愛，請稍後再試"});case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()},addToLike:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.likeProcessing=!0,a.next=4,D["a"].addToLike({restaurantId:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!0}),t.likeProcessing=!1,a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),t.likeProcessing=!1,R["a"].fire({icon:"error",title:"無法將餐廳加入喜愛，請稍後再嘗試"});case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()},deleteFromLike:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.likeProcessing=!0,a.next=4,D["a"].deleteFromLike({restaurantId:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!1}),t.likeProcessing=!1,a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),t.likeProcessing=!1,R["a"].fire({icon:"error",title:"無法將餐廳從喜愛刪除，請稍後再嘗試"});case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()}}},M=B,J=(a("86fa"),Object(f["a"])(M,T,q,!1,null,"b8bf320a",null)),z=J.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-pills mb-4"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{"aria-current":"page",to:{path:"/restaurants"}}},[e._v(" 全部 ")])],1),e._l(e.categories,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants",query:{categoryId:t.id}}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2)},K=[],G={name:"RestaurantsNavPills",props:{categories:{type:Array,required:!0}}},Q=G,V=(a("2793"),Object(f["a"])(Q,H,K,!1,null,"641c76fb",null)),W=V.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"pagination"},[a("li",{class:["page-item",{disabled:1===e.currentPage}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.previousPage}},"aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])],1),e._l(e.totalPage,(function(t){return a("li",{key:t,class:["page-item",{active:t===e.currentPage}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:t}}}},[e._v(" "+e._s(t)+" ")])],1)})),a("li",{class:["page-item",{disabled:e.currentPage===e.totalPage.length}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.nextPage}},"aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])],1)],2)},Y=[],Z=(a("a9e3"),{name:"RestaurantsPagination",props:{categoryId:{type:[String,Number],default:""},currentPage:{type:Number,default:1},totalPage:{type:Array,required:!0},previousPage:{type:Number,required:!0},nextPage:{type:Number,required:!0}}}),ee=Z,te=(a("3aee"),Object(f["a"])(ee,X,Y,!1,null,"9680d812",null)),ae=te.exports,re=a("2375"),ne=a("c4c3"),se={name:"Restaurants",components:{NavTabs:N["a"],RestaurantCard:z,RestaurantsNavPills:W,RestaurantsPagination:ae,Spinner:re["a"]},data:function(){return{restaurants:[],categories:[],categoryId:-1,currentPage:1,totalPage:[],previousPage:-1,nextPage:-1,isLoading:!0}},created:function(){var e=this.$route.query,t=e.page,a=void 0===t?"":t,r=e.categoryId,n=void 0===r?"":r;this.fetchRestaurants({queryPage:a,queryCategoryId:n})},beforeRouteUpdate:function(e,t,a){var r=e.query,n=r.page,s=void 0===n?"":n,i=r.categoryId,c=void 0===i?"":i;this.fetchRestaurants({queryPage:s,queryCategoryId:c}),a()},methods:{fetchRestaurants:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i,c,o,u,l,d,f,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.queryPage,n=e.queryCategoryId,a.prev=1,t.isLoading=!0,a.next=5,ne["a"].getRestaurants({page:r,categoryId:n});case 5:s=a.sent,i=s.data,c=i.categories,o=i.categoryId,u=i.next,l=i.prev,d=i.page,f=i.restaurants,p=i.totalPage,t.restaurants=f,t.categories=c,t.categoryId=o,t.currentPage=d,t.totalPage=p,t.previousPage=l,t.nextPage=u,t.isLoading=!1,a.next=21;break;case 17:a.prev=17,a.t0=a["catch"](1),t.isLoading=!1,R["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 21:case"end":return a.stop()}}),a,null,[[1,17]])})))()}}},ie=se,ce=Object(f["a"])(ie,U,A,!1,null,null,null),oe=ce.exports;r["a"].use(u["a"]);var ue=new u["a"].Store({state:{currentUser:{id:-1,name:"",email:"",image:"",isAdmin:!1},isAuthenticated:!1,token:""},mutations:{setCurrentUser:function(e,t){e.currentUser=Object(o["a"])(Object(o["a"])({},e.currentUser),t),e.isAuthenticated=!0,e.token=localStorage.getItem("token")},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,localStorage.removeItem("token")}},actions:{fetchCurrentUser:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s,i,c,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,D["a"].getCurrentUser();case 4:return r=t.sent,n=r.data,s=n.id,i=n.name,c=n.email,o=n.image,u=n.isAdmin,a("setCurrentUser",{id:s,name:i,email:c,image:o,isAdmin:u}),t.abrupt("return",!0);case 11:return t.prev=11,t.t0=t["catch"](1),console.error("can not fetch user information"),a("revokeAuthentication"),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},modules:{}});r["a"].use(w["a"]);var le=function(e,t,a){var r=ue.state.currentUser;!r||r.isAdmin?a():a("/404")},de=[{path:"/",name:"root",redirect:"/signin"},{path:"/signin",name:"sign-in",component:F},{path:"/signup",name:"sign-up",component:function(){return a.e("chunk-2d0d338e").then(a.bind(null,"5c9c"))}},{path:"/restaurants",name:"restaurants",component:oe},{path:"/restaurants/feeds",name:"restaurants-feeds",component:function(){return Promise.all([a.e("chunk-670da62a"),a.e("chunk-76fc4d78")]).then(a.bind(null,"9cab"))}},{path:"/restaurants/top",name:"restaurants-top",component:function(){return a.e("chunk-383bc92e").then(a.bind(null,"571a"))}},{path:"/restaurants/:id",name:"restaurant",component:function(){return Promise.all([a.e("chunk-670da62a"),a.e("chunk-0991fea9")]).then(a.bind(null,"ad68"))}},{path:"/restaurants/:id/dashboard",name:"restaurant-dashboard",component:function(){return a.e("chunk-2d0b2ec8").then(a.bind(null,"25d3"))}},{path:"/users/top",name:"users-top",component:function(){return a.e("chunk-7add3850").then(a.bind(null,"22ab"))}},{path:"/users/:id/edit",name:"user-edit",component:function(){return Promise.all([a.e("chunk-57ef77d8"),a.e("chunk-94324490")]).then(a.bind(null,"da5c"))}},{path:"/users/:id",name:"user",component:function(){return a.e("chunk-431f310c").then(a.bind(null,"1511"))}},{path:"/admin",exact:!0,redirect:"/admin/restaurants"},{path:"/admin/restaurants",name:"admin-restaurants",component:function(){return a.e("chunk-71c50812").then(a.bind(null,"73a3"))},beforeEnter:le},{path:"/admin/restaurants/new",name:"admin-restaurant-new",component:function(){return Promise.all([a.e("chunk-57ef77d8"),a.e("chunk-84cc821a")]).then(a.bind(null,"2743"))},beforeEnter:le},{path:"/admin/restaurants/:id/edit",name:"admin-restaurant-edit",component:function(){return Promise.all([a.e("chunk-57ef77d8"),a.e("chunk-452696c7")]).then(a.bind(null,"6945"))},beforeEnter:le},{path:"/admin/restaurants/:id",name:"admin-restaurant",component:function(){return a.e("chunk-3fdfc446").then(a.bind(null,"f91c"))},beforeEnter:le},{path:"/admin/categories",name:"admin-categories",component:function(){return a.e("chunk-aee645d8").then(a.bind(null,"5652"))},beforeEnter:le},{path:"/admin/users",name:"admin-users",component:function(){return a.e("chunk-958bdcfa").then(a.bind(null,"6135"))},beforeEnter:le},{path:"*",name:"not-found",component:x}],fe=new w["a"]({mode:"hash",routes:de,linkExactActiveClass:"active"});fe.beforeEach(function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t,a,r){var n,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("token"),s=ue.state.token,i=ue.state.isAuthenticated,!n||n===s){e.next=7;break}return e.next=6,ue.dispatch("fetchCurrentUser");case 6:i=e.sent;case 7:if(c=["sign-in","sign-up"],i||c.includes(t.name)){e.next=11;break}return r("/signin"),e.abrupt("return");case 11:if(!i||!c.includes(t.name)){e.next=14;break}return r("/restaurants"),e.abrupt("return");case 14:r();case 15:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}());var pe=fe;a("12ab");r["a"].config.productionTip=!1,new r["a"]({router:pe,store:ue,render:function(e){return e(h)}}).$mount("#app")},"57f1":function(e,t,a){"use strict";t["a"]={filters:{emptyImage:function(e){return e||"https://via.placeholder.com/350x220/DFDFDF?text=No+Image"}}}},"6ff8":function(e,t,a){"use strict";a("fc6b")},7696:function(e,t,a){"use strict";a("b0c0");var r=a("b132");t["a"]={signIn:function(e){var t=e.email,a=e.password;return r["b"].post("/signin",{email:t,password:a})},signUp:function(e){var t=e.name,a=e.email,n=e.password,s=e.passwordCheck;return r["b"].post("/signup",{name:t,email:a,password:n,passwordCheck:s})}}},"86fa":function(e,t,a){"use strict";a("d06c")},"8bb1":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-tabs mb-4"},e._l(e.tabs,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:t.path}},[e._v(" "+e._s(t.title)+" ")])],1)})),0)},n=[],s=a("ec26"),i={name:"NavTabs",data:function(){return{tabs:[{id:Object(s["a"])(),title:"首頁",path:"/restaurants"},{id:Object(s["a"])(),title:"最新動態",path:"/restaurants/feeds"},{id:Object(s["a"])(),title:"TOP 10 人氣餐廳",path:"/restaurants/top"},{id:Object(s["a"])(),title:"美食達人",path:"/users/top"}]}}},c=i,o=(a("43ef"),a("2877")),u=Object(o["a"])(c,r,n,!1,null,"79d7e545",null);t["a"]=u.exports},a8d3:function(e,t,a){},afe2:function(e,t,a){"use strict";a("05af")},b132:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return l}));a("d3b7");var r=a("bc3a"),n=a.n(r),s=a("3d20"),i=a.n(s),c="http://localhost:3000/api",o=n.a.create({baseURL:c});o.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)}));var u=o,l=i.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},c4c3:function(e,t,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0"),a("9861"),a("25f0");var r=a("b132");t["a"]={getRestaurants:function(e){var t=e.page,a=e.categoryId,n=new URLSearchParams({page:t,categoryId:a});return r["b"].get("/restaurants?".concat(n.toString()))},getFeeds:function(){return r["b"].get("/restaurants/feeds")},getTopRestaurants:function(){return r["b"].get("/restaurants/top")},getRestaurant:function(e){var t=e.restaurantId;return r["b"].get("/restaurants/".concat(t))}}},d06c:function(e,t,a){},d0f8:function(e,t,a){},fc6b:function(e,t,a){}});
//# sourceMappingURL=app.3b09cbf7.js.map