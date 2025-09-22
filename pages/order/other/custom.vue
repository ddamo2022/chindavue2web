<template>
	<view class="pb130 o-h" :style="{ background: layout.pageSetting?layout.pageSetting.styles.colorIcon:'' }">
		<block v-if="!showloading">
			<a-tion :co="layout.pageSetting.styles"
				v-if="layout.pageSetting && layout.pageSetting.styles.msgOpen==1"></a-tion>
			<uni-nav-bar v-if="layout.pageSetting.styles.navOpen==1" id='uninavbar' uropcity="1" :isleft="false"
				:fixed='true' :ispr='true' :statusBar="true" :border='false' :bg='layout.pageSetting.styles.navColorBg'
				:color="layout.pageSetting.styles.colorWord" :title="layout.pageSetting.styles.navTitle">
				<view slot='left' class="f-c c0" @click="handReturn">
					<text class="iconfont icon-right c3 f34"  :style="{color:fontColor}"></text>
				</view>
				<view class="f-g-1 f-c ml50 wei" :style="{color:fontColor}">{{layout.pageSetting.styles.navTitle}}</view>
			</uni-nav-bar>
			<uni-nav-bar v-if="layout.pageSetting.styles.navOpen==2" id='uninavbar' :isleft="false" :uropcity="opcity" :border="opcity>=1" :uriconopcity='iconOpcity'
				:fixed='true' :ispr='false' :statusBar="true">
				<view slot='left' class="f-c c0" @click="handReturn">
					<text class="iconfont icon-right c3 f34"  :style="{color:fontColor}"></text>
				</view>
				<view class="f-g-1 f-c ml50 wei" :style="{color:fontColor}"></view>
			</uni-nav-bar>
			<block v-for="(v, i) in layout.list" :key="i">
				<picLunbo-by :co="v.styles" v-if="v.hide==1 && v.name == 'picLunbo'"></picLunbo-by>
				<m-info :co="v.styles" v-else-if="v.hide==1 && v.name == 'myBalance'" @sh="sqsjh"></m-info>
				<h-zone :co="v.styles" v-else-if="v.hide==1 && v.name == 'hot'"></h-zone>
				<p-img :co="v.styles" v-else-if="v.hide==1 && v.name == 'pictures'"></p-img>
				<i-shop :co="v.styles" v-else-if="v.hide==1 && v.name == 'shop'"></i-shop>
				<s-notice :co="v.styles" v-else-if="v.hide==1 && v.name == 'notice'"></s-notice>
				<b-group :co="v.styles" v-else-if="v.hide==1 && v.name == 'btn'"></b-group>
				<l-wire :co="v.styles" v-else-if="v.hide==1 && v.name == 'lines'"></l-wire>
				<b-tit :co="v.styles" v-else-if="v.hide==1 && v.name == 'titles'"></b-tit>
				<m-gic :co="v.styles" v-else-if="v.hide==1 && v.name == 'margic'"></m-gic>
				<m-bale :co="v.styles" :v="v" v-else-if="v.hide==1 && v.name == 'balance'"></m-bale>
				<m-bale :co="v.styles" :v="v" v-else-if="v.hide==1 && v.name == 'integral'"></m-bale>
				<o-status :co="v.styles" v-else-if="v.hide==1 && v.name == 'orderState'" :wccdd="wccdd"></o-status>
				<g-product :co="v.styles" v-else-if="v.hide==1 && v.name == 'product'"></g-product>
				<l-nav :co="v.styles" :v="v" v-else-if="v.hide==1 && v.name == 'listNav'"></l-nav>
				<n-order :co="v.styles" :v="v" v-else-if="v.hide==1 && v.name == 'onOrder'"></n-order>
				<s-point :co="v.styles" :v="v"
					v-else-if="v.hide==1 && v.name == 'setPoint' && orderCollect && orderCollect.id"></s-point>
				<custom-video :co="v.styles" :v="v" v-else-if="v.hide==1 && v.name == 'videos'" />
			</block>
			<block v-if="indexAd">
				<i-ad :co="indexAd"></i-ad>
			</block>
			<tcyhq v-if='xkzxInfo' type="3" @close='xkzxshow=false' :co='xkzxInfo' v-model="xkzxshow" :color='tColor'
				@sh="sqsjh">
			</tcyhq>
			<tcyhq v-if='wcInfo' type="1" @close='wcshow=false' :co='wcInfo' v-model="wcshow"></tcyhq>
			<view class="posi-r">
				<tab-bar></tab-bar>
			</view>
			<sq-btn type="1" ref="sqBtn"></sq-btn>
		</block>
		<load v-if="showloading"></load>
		<userPrivacy ref="privacy"></userPrivacy>
	</view>
</template>
<script>
	import uniNavBar from "@/components/third/uni-nav-bar.vue"
	import picLunboBy from '@/components/drag/picLunbo.vue';
	import mInfo from '@/components/drag/m-info/m-info.vue';
	import HZone from '@/components/drag/hot.vue';
	import pImg from '@/components/drag/pictures.vue';
	import iShop from '@/components/drag/i-shop/i-shop.vue';
	import sNotice from '@/components/drag/notice.vue';
	import bGroup from '@/components/drag/btn.vue';
	import lWire from '@/components/drag/lines.vue';
	import bTit from '@/components/drag/titles.vue';
	import mGic from '@/components/drag/margic.vue';
	import mBale from '@/components/drag/myBalance.vue';
	import oStatus from '@/components/drag/o-status.vue';
	import gProduct from '@/components/drag/product/product.vue';
	import aTion from '@/components/drag/attenTion.vue';
	import lNav from '@/components/drag/listNav.vue';
	import load from '@/components/common/load.vue'
	import iAd from '@/components/drag/ad.vue';
	import sqBtn from '@/components/common/sq-btn.vue'
	import nOrder from '@/components/drag/onOrder.vue'
	import sPoint from '@/components/drag/setPoint.vue'
	import tcyhq from '@/components/template/tcyhq.vue'
	import userPrivacy from "@/components/user/userPrivacy.vue";
	import customVideo from '@/components/drag/custom-video.vue'
	import {
		mapActions,
		mapState
	} from 'vuex';
	import utils from '@/common/utils.js'
	export default {
		name: 'custom',
		components: {
			uniNavBar,
			picLunboBy,
			mInfo,
			HZone,
			pImg,
			iShop,
			sNotice,
			bGroup,
			lWire,
			bTit,
			mGic,
			mBale,
			oStatus,
			gProduct,
			aTion,
			lNav,
			load,
			sqBtn,
			iAd,
			nOrder,
			sPoint,
			tcyhq,
			userPrivacy,
			customVideo,
		},
		data() {
			return {
				showloading: true,
				indexAd: [],
				xkzxshow: false,
				xkzxInfo: '',
				wcshow: false,
				wcInfo: '',
				wccdd: [],
				privacyShow: false,
				layout: {},
				opcity: 0,
				iconOpcity: 0.5,
			};
		},
		onLoad(options) {
			this.query = options
			this.init()
			// console.log('onLoad', options)
		},
		onReady() {
			var _this = this;
			// #ifdef MP-WEIXIN
			wx.getPrivacySetting({
				success: res => {
					if (res.needAuthorization) {
						_this.$refs.privacy.open(res.privacyContractName)
						return;
					}
				},
				fail: () => {},
				complete:(res) => {
					console.log(res)
				}
			})
			// #endif
		},
		computed: {
			...mapState({
				orderCollect: state => state.layout.orderCollect || {},
				basicSetting: state => state.config.basicSetting,
			})
		},
		methods: {
			...mapActions(["getConfig"]),
			async init() {
				await this.getCusLayout(this.query.pid)
				this.showloading = false
				await this.getConfig({
					ident: ["basicSetting", "storeBasicSetting", "orderSetting" ,"inStoreOrderConfig" ]
				})
				await this.getLoginInfo()
				this.util.setNT(this.layout.pageSetting.styles.navTitle || '自定义页面')
				if(this.layout && this.layout.list){
					if(this.layout.list.find(v => v.name == 'orderState')){
						this.gOrder()
					}
				}
			},
			async getCusLayout() {
				let {
					data
				} = await this.util.request({
					url: `${this.api.layout}/${this.query.pid}`,
				})
				this.layout = data ? data.data : {}
			},
			async gOrder() {
				let {
					data
				} = await this.util.request({
					'url': this.api.wwdd,
				})
				this.wccdd = data ? data.list : []
				console.log('wccdd', data)
			},
			sqsjh() {
				this.$refs['sqBtn'].open()
			},
			handReturn(){
				this.go({t: 5,url: `/pages/index/index`})
			},
		},
		onShareAppMessage() {
			return this.util.mpShare({
				t: this.layout.pageSetting.styles.navTitle,
				i: this.getImgS(this.layout.pageSetting.styles.imgUrl && this.layout.pageSetting.styles.imgUrl[0].img),
			})
		},
		onShareTimeline(e) {
			return {
				title: this.layout.pageSetting.styles.navTitle ,
				imageUrl: this.getImgS(this.layout.pageSetting.styles.imgUrl && this.layout.pageSetting.styles.imgUrl[0].img),
			}
		},
	};
</script>
<style lang="scss" scoped>
	.icon-right {
		transform: rotateZ(180deg);
	}
</style>