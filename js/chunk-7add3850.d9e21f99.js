(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7add3850"],{"04d1":function(e,t,r){var n=r("342f"),s=n.match(/firefox\/(\d+)/i);e.exports=!!s&&+s[1]},"22ab":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),e.isLoading?r("Spinner"):e._e(),[r("h1",{staticClass:"mt-5"},[e._v(" 美食達人 ")]),r("hr"),r("div",{staticClass:"row text-center"},e._l(e.users,(function(e){return r("UserTop",{key:e.id,attrs:{"initial-user":e}})})),1)]],2)},s=[],a=r("1da1"),o=(r("96cf"),r("4e82"),r("8bb1")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-3"},[r("router-link",{attrs:{to:{name:"user",params:{id:e.user.id}}}},[r("img",{attrs:{src:e._f("emptyImage")(e.user.image),width:"140px",height:"140px"}})]),r("h2",[e._v(" "+e._s(e.user.name)+" ")]),r("span",{staticClass:"badge bg-secondary"},[e._v("追蹤人數： "+e._s(e.user.FollowerCount)+" ")]),r("p",{staticClass:"mt-3"},[e.user.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.cancelFollowUser(e.user.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.followUser(e.user.id)}}},[e._v(" 追蹤 ")])])],1)},c=[],u=r("5530"),l=r("57f1"),f=r("4cce"),d=r("b132"),p={name:"UserTop",mixins:[l["a"]],props:{initialUser:{type:Object,required:!0}},data:function(){return{user:Object(u["a"])({},this.initialUser)}},methods:{followUser:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f["a"].followUser({userId:e});case 3:if(n=r.sent,s=n.data,"success"===s.status){r.next=7;break}throw new Error(s.message);case 7:t.user.isFollowed=!0,t.user.FollowerCount=t.user.FollowerCount+1,r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法將達人加入追蹤，請稍後再試"}),console.log("error: ",r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},cancelFollowUser:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f["a"].cancelFollowUser({userId:e});case 3:if(n=r.sent,s=n.data,"success"===s.status){r.next=7;break}throw new Error(s.message);case 7:t.user.isFollowed=!1,t.user.FollowerCount=t.user.FollowerCount-1,r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法將達人取消追蹤，請稍後再試"}),console.log("error: ",r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},v=p,h=r("2877"),w=Object(h["a"])(v,i,c,!1,null,null,null),b=w.exports,m=r("2375"),g={name:"UsersTop",components:{NavTabs:o["a"],UserTop:b,Spinner:m["a"]},data:function(){return{users:[]}},created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f["a"].getTopUsers();case 3:r=t.sent,n=r.data,e.users=n.users.sort((function(e,t){return e.id-t.id})),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),d["a"].fire({icon:"error",title:"無法讀取美食達人資料，請稍後再嘗試"}),console.log("error: ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},x=g,k=Object(h["a"])(x,n,s,!1,null,null,null);t["default"]=k.exports},"4e82":function(e,t,r){"use strict";var n=r("23e7"),s=r("e330"),a=r("59ed"),o=r("7b0b"),i=r("07fa"),c=r("577e"),u=r("d039"),l=r("addb"),f=r("a640"),d=r("04d1"),p=r("d998"),v=r("2d00"),h=r("512c"),w=[],b=s(w.sort),m=s(w.push),g=u((function(){w.sort(void 0)})),x=u((function(){w.sort(null)})),k=f("sort"),C=!u((function(){if(v)return v<70;if(!(d&&d>3)){if(p)return!0;if(h)return h<603;var e,t,r,n,s="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)w.push({k:t+n,v:r})}for(w.sort((function(e,t){return t.v-e.v})),n=0;n<w.length;n++)t=w[n].k.charAt(0),s.charAt(s.length-1)!==t&&(s+=t);return"DGBEFHACIJK"!==s}})),U=g||!x||!k||!C,_=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:c(t)>c(r)?1:-1}};n({target:"Array",proto:!0,forced:U},{sort:function(e){void 0!==e&&a(e);var t=o(this);if(C)return void 0===e?b(t):b(t,e);var r,n,s=[],c=i(t);for(n=0;n<c;n++)n in t&&m(s,t[n]);l(s,_(e)),r=s.length,n=0;while(n<r)t[n]=s[n++];while(n<c)delete t[n++];return t}})},"512c":function(e,t,r){var n=r("342f"),s=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!s&&+s[1]},d998:function(e,t,r){var n=r("342f");e.exports=/MSIE|Trident/.test(n)}}]);
//# sourceMappingURL=chunk-7add3850.d9e21f99.js.map