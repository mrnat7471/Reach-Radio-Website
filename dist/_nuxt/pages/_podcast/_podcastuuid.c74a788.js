(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{235:function(t,o,e){var content=e(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("33c72f71",content,!0,{sourceMap:!1})},397:function(t,o,e){"use strict";var n=e(235);e.n(n).a},398:function(t,o,e){(o=e(36)(!1)).push([t.i,".pod-ep{color:#000;text-align:center}.pod-ep-back_pod{background:url(https://images.nathan7471.xyz/dg2lj35w.png) 50%;background-size:cover;background-repeat:no-repeat;color:#fff;padding-top:5%;padding-bottom:5%;text-align:center}.pod-eps{margin-top:15px;margin-bottom:15px}.pod-container{position:relative;width:100%;max-width:400px}.image{width:100%;height:auto}.pod-overlay{position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;transition:.3s ease;background-color:#003d91}.pod-container:hover .pod-overlay{opacity:1}.icon{font-size:100px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);text-align:center}.icon,.icon:hover{color:#fff}.fa-user:hover{color:#eee}",""]),t.exports=o},413:function(t,o,e){"use strict";e.r(o);var n=e(38),r=e.n(n),c=e(222),d=e.n(c),l={headers:{"x-tenant":"c9a65443-eed1-41ed-b9d2-743223b5ee75"}},f={asyncData:function(t){var o=t.params,e=t.error;return r.a.get("https://app-o.radiopanel.co/api/v1/podcasts/".concat(o.podcastuuid),l).then((function(t){return{podcast:t.data}})).catch((function(t){e({statusCode:404,message:"Post not found"})}))},filters:{moment:function(t){return d()(t).format("MMMM Do YYYY, h:mm a")}}},v=(e(397),e(28)),component=Object(v.a)(f,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"container"},[e("div",[e("div",{staticClass:"pod-ep-back_pod mt-3"},[e("h4",{staticClass:"pod-name"},[t._v(t._s(t.podcast.title))]),t._v(" "),e("p",[t._v(t._s(t.podcast.description))])]),t._v(" "),e("b-container",{staticClass:"bv-example-row"},t._l(t.podcast.entries,(function(o){return e("div",[e("b-row",{staticClass:"pod-eps"},[e("b-col",[e("div",{staticClass:"pod-container"},[e("img",{staticClass:"image",attrs:{src:t.podcast.graphic,alt:"Podcast"}}),t._v(" "),e("div",{staticClass:"pod-overlay",staticStyle:{"text-decoration":"none"}},[e("n-link",{staticClass:"icon",attrs:{to:"/listen-to-podcast/"}},[e("i",{staticClass:"fas fa-play"})])],1)])]),t._v(" "),e("b-col",{attrs:{cols:"10"}},[e("n-link",{attrs:{to:"/listen-to-podcast/"+o.uuid}},[e("h4",[t._v(t._s(o.title))])]),t._v(" "),e("p",[t._v(t._s(o.summary))]),t._v(" "),e("audio",{attrs:{src:o.source}}),t._v(" "),e("p",[t._v(t._s(t._f("moment")(o.updatedAt)))])],1)],1)],1)})),0)],1)])}),[],!1,null,null,null);o.default=component.exports}}]);