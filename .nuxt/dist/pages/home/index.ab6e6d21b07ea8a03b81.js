webpackJsonp([0],{Bn3n:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n    "+e._s(e.res)+"\n")])};r._withStripped=!0;var u={render:r,staticRenderFns:[]};t.a=u},hIDu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n("Xxa5")),u=s(n("exGp")),a=n("jQFf");function s(e){return e&&e.__esModule?e:{default:e}}t.default={asyncData:function(){var e=this;return(0,u.default)(r.default.mark(function t(){var n,u;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.http.get("https://www.ezhangyu.com/user/base");case 2:return n=e.sent,u=n.data,e.abrupt("return",{res:u});case 5:case"end":return e.stop()}},t,e)}))()},mounted:function(){this.$http.get("api/user/base").then(function(e){})}}},sAkS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("hIDu"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var s=n("Bn3n"),i=n("VU/8")(u.a,s.a,!1,null,null,null);i.options.__file="pages/home/index.vue",t.default=i.exports}});