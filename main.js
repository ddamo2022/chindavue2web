import App from './App'
import store from './store'
import util from './common/core/util';
import apit from './common/api.js';
import common from './common/common'
import MgImg from '@/components/common/my-img.vue'
import TabBar from '@/components/common/tabbar.vue'
import siteInfo from './common/siteinfo'


import i18n from './locale/index.js'
import facebookSDK from './common/facebook-sdk';
var appid = siteInfo.facebookid
Vue.use(facebookSDK, {
	appId: appid
});
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.util = util
Vue.prototype.api = apit
Vue.use(common);
Vue.component('mg-img', MgImg)
Vue.component('tab-bar', TabBar)

const app = new Vue({
	store,
	i18n,
	...App
})
app.$mount()
// #endif