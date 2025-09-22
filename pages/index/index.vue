<template>
	<view class="pb130 o-h" :style="{ background: layout.pageSetting?layout.pageSetting.styles.colorIcon:'' }">
		<block v-if="!showloading">
			<a-tion :co="layout.pageSetting.styles"
				v-if="layout.pageSetting && layout.pageSetting.styles.msgOpen==1"></a-tion>
			<block v-if="firing">
				<open-list :co="firing"></open-list>
			</block>
			<uni-nav-bar v-if="layout.pageSetting.styles.navOpen==1" id='uninavbar' uropcity="1" :isleft="false"
				:fixed='true' :ispr='true' :statusBar="true" :border='false' :bg='layout.pageSetting.styles.navColorBg'
				:color="layout.pageSetting.styles.colorWord" :title="$t('pagetitle.Membership')">
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
				<roll-package :co="v.styles" :v="v" v-else-if="v.hide==1 && v.name == 'rollPackage'" :rl="rollOrder" />
			</block>
			<block v-if="indexAd">
				<i-ad :co="indexAd"></i-ad>
			</block>
			<tcyhq v-if='xkzxInfo' type="3" @close='xkzxshow=false' :co='xkzxInfo' v-model="xkzxshow" :color='tColor'
				@sh="sqsjh">
			</tcyhq>
			<tcyhq v-if='wcInfo' type="1" @close='wcshow=false' :co='wcInfo' v-model="wcshow"></tcyhq>
			<tcyhq v-if='user && user.birthdayPack' type="6" @close='srshow=false' :co='user.birthdayPack'
				v-model="srshow"></tcyhq>
			<view class="posi-r">
				<tab-bar></tab-bar>
			</view>
			<sq-btn type="1" ref="sqBtn"></sq-btn>
			<returnOrder @open="goOrder" v-if="startOrder" />
			<bind-mobile ref="bindmobile"></bind-mobile>
		</block>
		<load v-if="showloading"></load>
		<userPrivacy ref="privacy"></userPrivacy>

		<uni-popup ref="popupShare" type="center">
			<!-- #ifdef  H5 -->
			<view class="popShare bs20">
				<view class="wei f40 f-c">{{$t('my-coupon.notification')}}</view>
				<view class="mt30 f-c" v-if="cInfo">
					{{$t("other-coupon.your_friend")}}“{{cInfo.member.nickname}}”，{{$t("other-coupon.send_you_coupon")}}
				</view>
				<view class="f-c">
					<button class="cf xzhy f-c bs10 f30" @click="opencoupon"
						:style="{background:tColor}">{{$t('other-coupon.receive')}}</button>
				</view>
			</view>
			<!-- #endif -->
		</uni-popup>
	</view>
</template>

<script>
	import {
		loadLineSDK
	} from '@/common/line-sdk-loader.js';
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
	import openList from '@/components/drag/open.vue';
	import iAd from '@/components/drag/ad.vue';
	import sqBtn from '@/components/common/sq-btn.vue'
	import nOrder from '@/components/drag/onOrder.vue'
	import sPoint from '@/components/drag/setPoint.vue'
	import tcyhq from '@/components/template/tcyhq.vue'
	import userPrivacy from "@/components/user/userPrivacy.vue";
	import customVideo from '@/components/drag/custom-video.vue'
	import rollPackage from '@/components/drag/rollPackage.vue'
	import returnOrder from "./index/returnOrder.vue"

	import bindMobile from '@/components/common/bind-mobile.vue'

	import {
		getDw
	} from "@/common/wechat-util.js"

	import {
		mapActions,
		mapState
	} from 'vuex';
	import utils from '@/common/utils.js'
	export default {
		name: 'index',
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
			openList,
			sqBtn,
			iAd,
			nOrder,
			sPoint,
			tcyhq,
			userPrivacy,
			customVideo,
			rollPackage,
			returnOrder,
			bindMobile,
		},
		data() {
			return {
				// layout: {
				// 	list: [],
				// }
				showloading: true,
				indexAd: [],
				xkzxshow: false,
				xkzxInfo: '',
				wcshow: false,
				wcInfo: '',
				wccdd: [],
				rollOrder: [],
				privacyShow: false,
				srshow: true,
				startOrder: '',
				cInfo: ''
				// startOrder: {
				// 	tableId:4034
				// },
			}
		},
		computed: {
			...mapState({
				layout: state => state.layout.index || {},
				firing: state => state.layout.firing || {},
				orderCollect: state => state.layout.orderCollect || {},
				basicSetting: state => state.config.basicSetting,
			})
		},
		async onLoad(options) {
			if (options && options.linecode) {
				await this.checkLineCode(options.linecode);
			}
			await this.init()
			this.query = options
			if (options && options.partnerId) {
				this.fxsId = options.partnerId
			} else if ((options.q && decodeURIComponent(options.q).indexOf('partnerId') > -1)) {
				let q = decodeURIComponent(options.q)
				this.fxsId = utils.getUrlParams(q)['partnerId']
			}
		},
		onShow() {

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
				complete: (res) => {
					console.log(res)
				}
			})
			// #endif
		},
		// onShow() {
		// 	if(this.query && this.query.partnerId){
		// 		this.fxsId = this.query.partnerId
		// 	}else if((this.query.q && decodeURIComponent(this.query.q).indexOf('partnerId')>-1)){
		// 		let q = decodeURIComponent(this.query.q)
		// 		this.fxsId = utils.getUrlParams(q)['partnerId']
		// 	}
		// },
		methods: {
			...mapActions(["getConfig", "checkLineCode"]),
			async init() {
				
				
				await this.getLoginInfo().then(() => {
					console.log('fx', this.fxsId, this.isLogin)
					if (this.fxsId && !this.isLogin) {
						this.$refs['sqBtn'].openf(this.fxsId)
					}
				})
				
				// #ifndef  MP-WEIXIN || MP-ALIPAY
				var _this = this;
				if (!this.$store.state.isLogin) {
					let liffId = getApp().globalData.siteInfo.liffId
					var _this = this;

					loadLineSDK(liffId).then(async (liff) => {
						console.log(liff.isLoggedIn())
						if (liff) {
							if (liff.isLoggedIn()) {
								return liff.getProfile();
							} else {
								if (liff.isInClient()) {
									return liff.login()
								}
							}
						}
					}).then(async profile => {
						if (profile && profile.userId) {
							await _this.linelogin(profile.userId, profile.displayName)
						}

					}).catch(err => {
						console.error(err);
					});
				}
				// #endif
				await this.getLayout()
				this.showloading = false
				await this.getConfig({
					ident: ["basicSetting", "storeBasicSetting", "orderSetting", "inStoreOrderConfig",
						"birthdayGift"
					]
				})
				this.util.setNT(this.layout.pageSetting.styles.navTitle || '首页')
			
				// #ifndef H5
				 this.getDw()
				// #endif
				if (uni.getStorageSync('token')) {
					await this.getCinfo()
				}

				await this.gAd()
				// console.log('layout',this.layout)
				// console.log('layout-list',this.layout.list)
				if (this.layout && this.layout.list) {
					if (this.layout.list.find(v => v.name == 'orderState')) {
						this.gOrder()
					}
					if (this.layout.list.find(v => v.name == 'rollPackage')) {
						this.gRollOrder()
					}
				}
				this.gStartOrder()

				await this.getGift()

				//console.log(this.user.mobile)
				if (this.isLogin && !this.user.mobile) {
					this.$refs['bindmobile'].open()
				}
			},
			async linelogin(id, name) {
				var rest = await this.util.request({
					'url': this.api.lineLogin,
					method: 'post',
					data: {
						id: id,
						name: name
					}
				})
				if (rest.data) {
					this.$store.commit('setUser', rest.data.userInfo);
					this.$store.commit('setToken', rest.data.token);
				}
			},
			sqsjh() {
				this.$refs['sqBtn'].openf(this.fxsId)
			},
			async getCinfo() {
				let res = await Promise.all([this.util.request({
					'url': this.api.xkzx,
				}), this.util.request({
					'url': this.api.wc,
					data: {
						pos: 1
					}
				})])
				console.log('res', res)
				if (res[0].data) {
					this.xkzxInfo = res[0].data
					setTimeout(() => {
						this.xkzxshow = true
					}, 400)
				}
				if (res[1].data) {
					this.wcInfo = res[1].data
					setTimeout(() => {
						this.wcshow = true
					}, 400)
				}
			},
			async gAd() {
				let {
					data
				} = await this.util.request({
					'url': this.api.gglb,
					data: {
						location: 1
					}
				})
				this.indexAd = data ? data.window : []
				console.log('ad', data)
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
			async gRollOrder() {
				let {
					data
				} = await this.util.request({
					url: this.api.couponPack,
				})
				this.rollOrder = data ? data.list : []
			},
			async gStartOrder() {
				let {
					data
				} = await this.util.request({
					url: this.api.startOrder,
				})
				this.startOrder = data
			},
			goOrder() {
				uni.navigateTo({
					url: `/pages/shop/in/goods?tableId=${this.startOrder.tableId}&storeId=${this.startOrder.storeId}`,
				})
			},
			getDw() {
				getDw({
					t: 0
				})
			},
			async getGift() {
				//判断是否有赠送的卷
				let {
					data
				} = await this.util.request({
					url: this.api.getGift,
				})
				if (data) {
					console.log(data)
					this.cInfo = data;
					if (!this.wcshow) {
						this.$refs['popupShare'].open()
					}
				}

			},
			opencoupon() {
				if (this.cInfo.memberCouponId) {

					this.go({
						t: 1,
						url: `/pages/other/coupon/couponList?couponId=${this.cInfo.memberCouponId}`,
					})
					this.$refs['popupShare'].close()
				}

			}

		},
		onShareAppMessage() {
			return this.util.mpShare({
				t: this.basicSetting.appletTitle,
				i: this.getImgS(this.basicSetting.appletPicture),
			})
		},
		onShareTimeline(e) {
			return {
				title: this.basicSetting.appletTitle,
				imageUrl: this.getImgS(this.basicSetting.appletPicture),
			}
		},
	}
</script>

<style scoped lang="scss">
	.popCode,
	.popShare {
		padding: 100rpx;
		position: relative;
		background: #fff;

		.code {
			width: 400rpx;
			height: 400rpx;
		}

		.xzhy {
			width: 400rpx;
			height: 90rpx;
			margin-top: 60rpx;
		}
	}
</style>