(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{226:function(t,e,o){var content=o(378);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("2242607a",content,!0,{sourceMap:!1})},377:function(t,e,o){"use strict";var n=o(226);o.n(n).a},378:function(t,e,o){(e=o(36)(!1)).push([t.i,".pbox{background-color:#fff;overflow:hidden;margin-bottom:20px;box-shadow:3px 3px 3px 3px #d9d9d9;width:250px!important;height:250px!important;-o-object-fit:cover;object-fit:cover;vertical-align:middle}.pbox-text{margin-top:11px;text-align:center;padding-bottom:20px;padding-left:10px;padding-right:10px;color:#000}a{text-decoration:none}",""]),t.exports=e},404:function(t,e,o){"use strict";o.r(e);var n=o(38),c=o.n(n),r=o(222),d=o.n(r),l={headers:{"x-tenant":"c9a65443-eed1-41ed-b9d2-743223b5ee75"}},h={title:"Reach - Podcasts",meta:[{hid:"description",name:"description",content:"Stream some of the best gaming or community related podcasts right here."}],asyncData:function(t){t.params;var e=t.error;return c.a.get("https://app-o.radiopanel.co/api/v1/podcasts",l).then((function(t){return{podcasts:t.data._embedded}})).catch((function(t){e({statusCode:404,message:"Post not found"})}))},filters:{moment:function(t){return d()(t).format("MMMM Do YYYY, h:mm a")}}},x=(o(377),o(28)),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container pt-3"},[o("div",[t._m(0),t._v(" "),o("div",{staticClass:"row"},t._l(t.podcasts,(function(e){return o("div",[o("div",{staticClass:"col"},[o("n-link",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{to:"/podcast/"+e.uuid}},[o("div",{staticClass:"mb-2 pbox"},[o("img",{staticStyle:{width:"250px",height:"175px","object-fit":"cover"},attrs:{src:e.graphic}}),t._v(" "),o("p",{staticClass:"pbox-text"},[t._v(t._s(e.title))])])])],1)])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pt-3 pb-3 text-white pl-3 pr-3 mb-3",staticStyle:{"background-color":"#003d91",display:"flex"}},[e("h4",{staticStyle:{"padding-right":"10px"}},[this._v("Podcasts")])])}],!1,null,null,null);e.default=component.exports}}]);