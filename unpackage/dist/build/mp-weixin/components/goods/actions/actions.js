(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/goods/actions/actions"],{"218c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"Actions",props:{number:{type:Number,default:0},materialsBtn:{type:Boolean,default:!1},product:{type:Object,default:function(){}}},methods:{add:function(){this.$emit("add",{g:this.product,addwz:1})},minus:function(){this.$emit("minus",{g:this.product,addwz:-1})}}};n.default=a},5635:function(t,n,e){"use strict";e.r(n);var a=e("218c"),i=e.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a},"99a2":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement,n=(this._self._c,this.materialsBtn?this.$t("goods.select_specifications"):null);this.$mp.data=Object.assign({},{$root:{m0:n}})},i=[]},a105:function(t,n,e){"use strict";var a=e("ec77"),i=e.n(a);i.a},b7fd:function(t,n,e){"use strict";e.r(n);var a=e("99a2"),i=e("5635");for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("a105");var o=e("828b"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"100a1884",null,!1,a["a"],void 0);n["default"]=c.exports},ec77:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goods/actions/actions-create-component',
    {
        'components/goods/actions/actions-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("b7fd"))
        })
    },
    [['components/goods/actions/actions-create-component']]
]);
