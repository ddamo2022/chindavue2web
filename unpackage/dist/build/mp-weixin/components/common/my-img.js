(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/my-img"],{1390:function(t,n,e){"use strict";var i=e("8b82"),c=e.n(i);c.a},6463:function(t,n,e){"use strict";e.r(n);var i=e("b137"),c=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=c.a},"8b82":function(t,n,e){},b137:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"mg-img",props:{cname:"",sname:"",src:"",local:"",m:{type:String,default:"aspectFill"}},data:function(){return{}},methods:{getUrl:function(t){return t?t.indexOf("http")>-1||t.indexOf("/static/")>-1||t.indexOf("base64")>-1||1==this.local?t:this.url+t:"".concat(this.onImgurl,"no.png")}},computed:{}};n.default=i},c2e3:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement,n=(this._self._c,this.__get_style([this.sname])),e=this.getUrl(this.src);this.$mp.data=Object.assign({},{$root:{s0:n,m0:e}})},c=[]},ce34:function(t,n,e){"use strict";e.r(n);var i=e("c2e3"),c=e("6463");for(var a in c)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return c[t]}))}(a);e("1390");var r=e("828b"),u=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"fe5a3e96",null,!1,i["a"],void 0);n["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/my-img-create-component',
    {
        'components/common/my-img-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("ce34"))
        })
    },
    [['components/common/my-img-create-component']]
]);
