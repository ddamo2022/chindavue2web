<template>
	<view class="p-r bf h100v container">
		<view class="header" :style="{background:navMenu?tColor:navColor}">
			<uni-nav-bar id='uninavbar' :uropcity="0" :uriconopcity='0' :fixed='false' :ispr='false' :border='false'
				:statusBar="true" :isleft="false" :isHome='false' leftcn="icon-shouye1">
				<view slot='left' class="f-c c3">
					<view class="f36 f-y-c" :style="{color:navFontColor}">
						<text class="iconfont icon-right c3 f34 mr20" :style="{color:navFontColor}"
							@click="handReturn"></text>{{sjxx.name}}
					</view>
				</view>
				<view class="f-x-e f-g-1">
					<!-- <view class="search bsf f-c mr20"><text class="iconfont icon-sousuo f32 c9"></text></view> -->
				</view>
			</uni-nav-bar>
			<change-shop @init="init" :storeInfo="storeInfo" :navMenu="navMenu" @sh="sqsjh" :cd="sjxx"
				:navFontColor="navFontColor"></change-shop>
		</view>
		<view class="goow f-y-bt">
			<block v-if="navMenu">
				<shop-notice dType="ins" class="f-g-0"></shop-notice>
				<no-login @sh="sqsjh" v-if="!isLogin" class="f-g-0"></no-login>
			</block>
			<class-ts2 v-if="gs && gs.aideStyle==2" ref="classTs" :cs="categories" :st="scrollTop" :sx="sIndex"
				:cd="ccId" @handMenu="handMenu" :scarList="scarList" :str="pstop" @psroll="psroll" @handdl="handdl"
				@handcar="handcar" @rfcalc="rfcalc" class="main" :orSet="orderSetting" :swiper="swiper" dType="ins"
				:cgs="categoryGoods" :gs='gs'></class-ts2>
			<class-ts3 v-else-if="gs && gs.aideStyle==3" ref="classTs" :cs="categories" :st="scrollTop" :sx="sIndex"
				:cd="ccId" @handMenu="handMenu" :scarList="scarList" :str="pstop" @psroll="psroll" @handdl="handdl"
				@handcar="handcar" @rfcalc="rfcalc" class="main" :orSet="orderSetting" :swiper="swiper" dType="ins"
				:cgs="categoryGoods" :gs='gs'></class-ts3>
			<class-ts4 v-else-if="gs && gs.aideStyle==4" ref="classTs" :cs="categories" :st="scrollTop" :sx="sIndex"
				:cd="ccId" @handMenu="handMenu" :scarList="scarList" :str="pstop" @psroll="psroll" @handdl="handdl"
				@handcar="handcar" @rfcalc="rfcalc" class="main" :orSet="orderSetting" :swiper="swiper" dType="ins"
				:cgs="categoryGoods" :gs='gs'></class-ts4>
			<class-ts1 v-else ref="classTs" :cs="categories" :st="scrollTop" :sx="sIndex" :cd="ccId"
				@handMenu="handMenu" :scarList="scarList" :str="pstop" @psroll="psroll" @handdl="handdl"
				@handcar="handcar" @rfcalc="rfcalc" class="main f-g-1" :orSet="orderSetting" :swiper="swiper"
				dType="ins" :cgs="categoryGoods" :gs='gs'></class-ts1>
		</view>
		<business-status :cd="sjxx" />
		<block v-if="goodsAd">
			<g-ad :co="goodsAd"></g-ad>
		</block>
		<tcyhq v-if='wcInfo' type="1" @close='wcshow=false' :co='wcInfo' v-model="wcshow"></tcyhq>
		<block v-if="sjxx.realtimeState!=3">
			<product-modal ref="productModal" :product="product" :visible="productModalVisible"
				@cancel="closeProductDetailModal" @add-to-cart="handleAddToCartInModal" @pay="pay" :orSet="orderSetting"
				dType='ins'></product-modal>
			<view class="">
				<cart-bar dType="ins" :storeInfo="storeInfo.tableInfo" :cart="scarList" @add="handcar" @minus="handcar"
					@clear="clearCart" @pay="pay">
				</cart-bar>
			</view>
		</block>
		<view class="posi-r">
			<tab-bar />
		</view>
		<load v-if="loading"></load>
		<sq-btn type="1" :lType="2" ref="sqBtn"></sq-btn>
		<bind-mobile ref="bindmobile"></bind-mobile>
		<g-table :showTable="showTable" :storeInfo="storeInfo.tableInfo" @lc="ljdc"></g-table>
		<userPrivacy ref="privacy"></userPrivacy>

		<mg-popup v-model="privacyShow" :close='false' :zIndex="99999" :mask="true" :animation="false">
			<view class="privacyBox h100v f-c-c">
				<view class="ysxy bs20">
					<view class="privacyTit">{{$t("in_goods.privacy_policy_prompt")}}</view>
					<view class="privacyDesc">

						{{$t("in_goods.privacy_desc")}}
						<text @click="openClick" class="weui-agree__link">{{$t("in_goods.privacy_agreement")}}</text>

						{{$t("in_goods.read_carefully")}}
					</view>
					<view class="privacyPost">
						<button class="agreeBtn" @click="linelogin()"
							:style="{background:tColor,color:fontColor}">{{$t("in_goods.login_and_order")}}</button>
						<button class="noagreeBtn" @click="nologin()">{{$t("in_goods.no_login_and_order")}}</button>
					</view>
				</view>
			</view>
		</mg-popup>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import {
		getDw
	} from "@/common/wechat-util.js"
	import utils from '@/common/utils.js'
	import uniNavBar from "@/components/third/uni-nav-bar.vue"
	import ChangeShop from "./goods/gtop/change-shop.vue"
	import NoLogin from "./goods/gtop/login.vue"
	import ShopNotice from "@/components/goods/shop-notice.vue"
	import Actions from "@/components/goods/actions/actions.vue"
	import ProductModal from '@/components/goods/product-modal/product-modal.vue'
	import CartBar from '@/components/goods/cartbar/cartbar.vue'
	import businessStatus from '../../../pages/index/goods/business.vue'
	import load from '@/components/common/load.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import iDefault from '@/components/common/default.vue'
	import gAd from '@/components/drag/ad.vue';
	import picLunboBy from '@/components/drag/picLunbo.vue';
	import tcyhq from '@/components/template/tcyhq.vue';
	import classTs1 from '@/components/goods/template/class-ts1.vue'
	import classTs2 from '@/components/goods/template/class-ts2.vue'
	import classTs3 from '@/components/goods/template/class-ts3.vue'
	import classTs4 from '@/components/goods/template/class-ts4.vue'
	import userPrivacy from "@/components/user/userPrivacy.vue";
	import mgPopup from '@/components/common/popup.vue'
	import bindMobile from '@/components/common/bind-mobile.vue'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import gTable from './goods/g-table.vue'
	export default {
		components: {
			uniNavBar,
			ChangeShop,
			NoLogin,
			ShopNotice,
			Actions,
			ProductModal,
			CartBar,
			businessStatus,
			load,
			sqBtn,
			iDefault,
			gAd,
			picLunboBy,
			tcyhq,
			gTable,
			classTs1,
			classTs2,
			classTs3,
			classTs4,
			userPrivacy,
			mgPopup,
			bindMobile,

		},
		data() {
			return {
				privacyShow: false,
				storeInfo: {},
				loading: true,
				mainRef: null,
				categories: [],
				sIndex: 0,
				rectInfoList: [],
				tempCurrent: 0,
				scrollTop: 0,
				product: {},
				ccId: 0,
				notices: [],
				productModalVisible: false,
				cartPopupShow: false,
				pstop: 0,
				showSearch: false,
				showShopInfo: false,
				goodsAd: [],
				swiper: {
					imgUrl: [],
					height: '260',
					circle: '30'
				},
				wcshow: false,
				wcInfo: '',
				showTable: false,
				addgood: 0,
				navColor: '',
				navFontColor: '',
				navMenu: true,
				categoryGoods: [],
			}
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
		onShow() {
			if (this.isload) {
				this.refresh()
			}
		},
		computed: {
			...mapState(['sjxx', 'ingood']),
			...mapState({
				storeBasicSetting: state => state.config.storeBasicSetting,
				orderSetting: state => state.config.inStoreOrderConfig,
				scarList: state => state.scarList.ins || [],
				gs: state => state.layout.goodStyle || {},
			}),
			ztqs() {
				return `rgba(${this.cTR(this.tColor)},0.1)`
			},
			gcnum() {
				return id => this.scarList.goodsList.reduce((acc, cur) => {
					if (cur.spuId === id) {
						return acc += cur.num
					}
					return acc
				}, 0)
			},
		},
		mixins: [utilMixins],
		async onLoad(options) {
			console.log('options', options)
			if (options && options.q) {
				console.log('q', decodeURIComponent(options.q))
			}
			if (options && options.linecode) {
				await this.checkLineCode(options.linecode);
			}
			if (options && options.diningType == 6 && options.storeId) {
				this.tableId = 0
				this.diningType = options.diningType
				this.storeId = options.storeId
			} else if ((options.q && decodeURIComponent(options.q).indexOf('diningType') > -1)) {
				let q = decodeURIComponent(options.q)
				this.tableId = 0
				this.diningType = utils.getUrlParams(q)['diningType']
				this.storeId = utils.getUrlParams(q)['storeId']
			} else {
				let tableId = utils.getOptions(options, {
					key: 'tableId',
				})
				this.storeId = utils.getOptions(options, {
					key: 'storeId',
				})
				this.tableId = tableId
				if (options && options.addgood) {
					this.addgood = options.addgood
				}
				// if (!tableId) {
				// 	return this.tips()
				// }	
			}
			this.query = options
			this.util.setNT(this.$t("in_goods.scan_to_order"))
			this.loading = true
			console.log('tableId', this.tableId)
			console.log('storeId', this.storeId)
			await this.load(this.tableId)
			this.showPrivacyInfo()

			if (this.isLogin && !this.user.mobile) {
				this.$refs['bindmobile'].open()
			}
		},
		methods: {
			...mapActions(["getSjxx", "getConfig", "getGoods", "supInCar", "getInCar", "checkLineCode"]),
			...mapMutations(["setGoods", "setNoLogin", "setToken"]),
			async load(sid) {
				this.tableId = sid
				//console.log('1212-01', uni.getStorageSync('token'))
				//alert(uni.getStorageSync('token'));
				await this.getLoginInfo();
				await this.getLayout()
				await this.getDw()
				this.getConfig({
					ident: ["storeBasicSetting", "inStoreOrderConfig"]
				})
				this.navFontColor = this.fontColor
				// let link = window.location.href,
				// 	params = utils.getUrlParams(link)
			},
			async getDw() {
				// let lc = await getDw({
				// 	t: 0
				// })
				// this.lc = lc
				await this.init()
			},
			openClick() {
				// /pages/my/other/gywm?t=用户协议&p=1
				this.go({
					t: 1,
					url: '/pages/my/other/gywm?t=用户协议&p=1'
				})
			},
			async init() {
				// console.log('1212', this.noLogin)
				// console.log('userId', uni.getStorageSync('userId'))
				// console.log('userid-1', this.$store.state.user.id)

				if (this.tableId) {
					await this.getTable()
					await this.getGood()
				} else {
					this.storeInfo = {
						id: this.storeId,
						diningType: this.diningType,
						tableInfo: {
							id: this.tableId,
							diningType: this.diningType,
						}
					}
					await this.getGood()
				}
				//alert('init加载完成')
			},
			async getTable() {
				let res = await this.util.request({
					url: `${this.api.tsczxq}/${this.tableId}`,
					data: {
						lat: this.lc?.latitude || '',
						lng: this.lc?.longitude || '',
					}
				})
				if (res) {
					res.data.tableId = this.tableId
					this.storeInfo = {
						id: res.data.storeId,
						tableInfo: res.data,
						diningType: res.data.diningType,
					}
					this.storeId = res.data.storeId
					if (!res.data.state && res.data.people <= 0 && res.data.diningType == 4) {
						this.showTable = true

					} else {
						if (res.data.orderSn && !this.addgood) {
							return this.go({
								t: 2,
								url: `/pages/order/detail?id=${res.data.orderSn}`
							})
						}

						this.gwc = setInterval(() => {
							this.getInCar({
								storeId: this.storeId,
								tableId: this.tableId,
								diningType: this.storeInfo.diningType,
								lat: this.lc?.latitude || '',
								lng: this.lc?.longitude || '',
							})
						}, 3000)

					}
				} else {
					setTimeout(() => {
						this.go({
							t: 6,
							url: '/pages/index/index'
						})
					}, 2000)
					return
				}
			},
			async getGood() {
				if (this.gs && this.gs.goodsInStyle == 2) {
					await this.getCategory()
				} else {
					this.getGoods({
						storeId: this.storeId,
						diningType: this.storeInfo.diningType,
						dType: 'ins',
						tableId: this.tableId
					}).then(() => {
						this.categories = utils.deepCopy(this.ingood)
						this.ccId = this.categories.length && this.categories[0].id
						// this.$nextTick(() => this.calcSize())
						this.$nextTick(() => this.$refs['classTs'].calcSize())
						this.havebxp = this.ingood.findIndex(v => v.isMust == 1) > -1
						this.loading = false
					}).catch(() => {
						this.loading = false
					})
				}
				this.getInCar({
					storeId: this.storeId,
					tableId: this.tableId,
					diningType: this.storeInfo.diningType,
					lat: this.lc?.latitude || '',
					lng: this.lc?.longitude || '',
				})
				await this.getSjxx({
					storeId: this.storeId,
					lat: this.lc?.latitude || '',
					lng: this.lc?.longitude || '',
				}).then(() => {
					if (this.storeInfo.diningType == 6 && this.sjxx && this.sjxx.inStoreSetting && !this.sjxx
						.inStoreSetting.orderMode.includes(3)) {
						this.util.message(this.$t("in_goods.number_calling_unavailable"), 3, 2000)
						setTimeout(() => {
							this.go({
								t: 6,
								url: '/pages/index/index'
							})
						}, 2000)
					}
				})
				this.storeId = this.sjxx.id
				// if(this.ingood && this.ingood.length){
				// 	this.categories = utils.deepCopy(this.ingood)
				// 	this.ccId = this.categories.length && this.categories[0].id
				// 	this.$nextTick(() => this.$refs['classTs'].calcSize())
				// 	this.havebxp = this.ingood.findIndex(v => v.isMust == 1) > -1
				// }
				this.gAd()
				this.getWc()
				this.isload = true
			},
			nologin() {
				this.setNoLogin()
				this.privacyShow = false
			},
			showPrivacyInfo() {
				// #ifdef H5
				// this.$nextTick(() => {
				// 	setTimeout(() => {
				// 		console.log('1212', this.isLogin)
				// 		console.log('userId', uni.getStorageSync('userId'))
				// 		console.log('userid-1', this.user.id)

				// 	}, 500); // s
				// })
				//console.log('showPrivacyInfo-userid', this.user.id)
				if (!this.user.id) {
					this.privacyShow = true
				}
				// #endif
			},
			linelogin() {
				const currentPage = getCurrentPages().pop();
				const currentPath =
					`/${currentPage.route}${currentPage.options ? '?' + Object.keys(currentPage.options).map(key => `${key}=${currentPage.options[key]}`).join('&') : ''}`;
				console.log(currentPath)
				uni.setStorageSync('redirectPath', currentPath);
				uni.navigateTo({
					url: '/pages/other/login'
				})

				// #ifdef H5
				if (this.api.platform == 'wechat') {
					// let link = window.location.href,
					// 	params = utils.getUrlParams(link)
					//siteInfo.uniacid
					// window.location.href =
					// 	`${getApp().globalData.siteInfo.siteroot}/wechat/${getApp().globalData.siteInfo.uniacid}?refererUrl=${btoa(window.location.href)}`
				} else {
					// let link = window.location.href,
					// 	params = utils.getUrlParams(link)
					// console.log(`${getApp().globalData.siteInfo.siteroot}/line/1?refererUrl=${window.location.href}`);


					// window.location.href =
					// 	`${getApp().globalData.siteInfo.siteroot}/line/${getApp().globalData.siteInfo.uniacid}?refererUrl=${btoa(window.location.href)}`
				}
				// #endif
			},
			async getCategory() {
				let {
					data
				} = await this.util.request({
					url: this.api.gInCategory,
					data: {
						storeId: this.storeId,
						diningType: this.diningType,
					}
				})
				if (data && data.length) {
					this.categories = data
					this.havebxp = this.categories.findIndex(v => v.isMust == 1) > -1
					this.ccId = data[0].id
					this.setGoods({
						params: {
							storeId: this.storeId,
							dType: 'ins'
						},
						data,
					})
					await this.getCategoryGoods()
				} else {
					this.loading = false
				}
			},
			async getCategoryGoods() {
				let {
					data
				} = await this.util.request({
					url: this.api.ingoods,
					data: {
						storeId: this.storeId,
						diningType: this.diningType,
						categoryId: this.ccId,
					}
				})
				this.categoryGoods = data ? data : []
				this.loading = false
			},
			async refresh() {
				await this.getInCar({
					storeId: this.storeId,
					tableId: this.tableId,
					diningType: this.storeInfo.diningType,
				})
			},
			tips(msg) {
				uni.showModal({
					title: this.$t("modal.title"),
					content: this.$t("in_goods.unable_to_get_table_info"),
					showCancel: false,
					confirmText: i18n.t('modal.confirm'),
					success: res => {
						this.go({
							t: 6,
							url: '/pages/index/index'
						})
					},
				});
			},
			async gAd() {
				let {
					data
				} = await this.util.request({
					url: this.api.gglb,
					data: {
						location: 2,
						storeId: this.storeId
					}
				})
				this.goodsAd = data ? data.window : []
				if (data.banner && data.banner.length > 0) {
					for (let k in data.banner) {
						data.banner[k].url = data.banner[k].link
					}
					this.swiper = {
						imgUrl: data.banner,
						height: '260',
						circle: '30'
					}
				} else {
					this.swiper = {
						imgUrl: [],
						height: '260',
						circle: '30'
					}
				}
			},
			async getWc() {
				let {
					data
				} = await this.util.request({
					'url': this.api.wc,
					data: {
						pos: 2,
						storeId: this.storeId
					}
				})
				if (data) {
					this.wcInfo = data
					setTimeout(() => {
						this.wcshow = true
					}, 400)
				}
				console.log('wc', data)
			},
			async ljdc(paIx) {
				this.storeInfo.tableInfo.people = paIx
				this.paIx = paIx
				let {
					msg
				} = await this.util.request({
					url: `${this.api.inPeople}/${this.tableId}`,
					method: 'PUT',
					data: {
						storeId: this.storeInfo.id,
						diningType: this.storeInfo.diningType,
						people: paIx,
					}
				})
				// this.util.message(msg, 3, 1500)
				this.showTable = false
				this.gwc = setInterval(() => {
					this.getInCar({
						storeId: this.storeId,
						tableId: this.tableId,
						diningType: this.storeInfo.diningType,
						lat: this.lc?.latitude || '',
						lng: this.lc?.longitude || '',
					})
				}, 3000)
			},
			async handcar(p) {
				console.log('p', p)
				try {
					let res = await this.supInCar({
						storeId: this.storeId,
						spuId: p.g.id,
						specMd5: p.g.specSwitch ? p.g.specInfo && p.g.specInfo.specMd5 : p.g.specMd5 || p.g
							.singleSpec.specMd5,
						attrData: p.g.specMd5 ? p.g.attrData || {} : (p.g.specSwitch || p.g.attrSwitch || p.g
							.materialSwitch) ? {
							spec: p.g.specSwitch && p.g.ggdata ? p.g.ggdata : '',
							attr: p.g.attribute,
							matal: p.g.jldata,
							material: p.g.material,
						} : {},
						// setMealData:p.g.type==2 && p.g.setMealData ? p.g.setMealData : [],
						num: p.addwz,
						lat: this.lc?.latitude || '',
						lng: this.lc?.longitude || '',
						tableId: this.tableId,
						diningType: this.storeInfo.diningType,
					})
				} catch (e) {
					console.log(e)
				}
			},
			async handdl(product) {
				if (product && product.type == 2 || (this.gs && this.gs.goodsInDetail == 3)) {
					this.go({
						t: 1,
						url: `/pages/shop/good-dl?goodId=${product.id}&storeId=${this.storeId}&diningType=${this.storeInfo.diningType}&tableId=${this.tableId}&dType=ins`,
					})
				} else {
					let res = await this.util.request({
						url: `${this.api.ingoods}/${product.id}`,
						data: {
							storeId: this.storeId,
							diningType: this.storeInfo.diningType,
						}
					})
					this.product = res.data
					this.productModalVisible = true
					this.$refs['productModal'].open(product, this.storeId, this.storeInfo.diningType)
				}
			},
			handleAddToCartInModal(product) {
				this.handcar(product)
				this.closeProductDetailModal()
			},
			closeProductDetailModal() {
				this.productModalVisible = false
				this.$refs['productModal'].close()
				setTimeout(() => {
					this.product = {}
				}, 100)
			},
			clearCart() {
				// this.cart = []
			},
			handMenu(id, i) {
				if (this.gs && this.gs.goodsInStyle == 2) {
					this.ccId = id
					this.getCategoryGoods()
				} else {
					this.sIndex = i
					this.pstop = this.categories.find(item => item.id == id).top
					this.$nextTick(() => this.ccId = id)
				}
			},
			psroll({
				detail
			}) {
				const {
					scrollTop
				} = detail
				if (scrollTop > 50) {
					this.navColor = 'transparent'
					this.navFontColor = '#000'
					this.navMenu = false
				} else {
					this.navColor = this.tColor
					this.navFontColor = this.fontColor
					this.navMenu = true
				}
				let tabs = this.categories.filter(item => item.top <= scrollTop).reverse()
				if (tabs.length > 0) {
					this.ccId = tabs[0].id
				}
				this.rectInfoList.forEach((item, index) => {
					if (scrollTop >= item.top && scrollTop <= item.bottom) {
						this.scrollTop = index * uni.upx2px(100);
						this.sIndex = index
					}
				})
			},
			rfcalc(v1, v2) {
				this.rectInfoList = v1
				this.categories = v2
			},
			calcSize() {
				let h = 0
				let view = uni.createSelectorQuery().select('#ads')
				view.fields({
					size: true
				}, (data) => {
					h += Math.floor(data && data.height)
				}).exec()
				this.categories.forEach((item, i) => {
					let view = uni.createSelectorQuery().select(`#g-${item.id}`)
					view.fields({
						size: true,
						rect: true
					}, data => {
						item.top = h
						h += Math.floor(data.height)
						item.bottom = h
						this.rectInfoList[i] = {
							'top': item.top,
							'bottom': item.bottom
						}
					}).exec()
				})
			},
			async pay() {
				// if (!this.isLogin && !this.noLogin) {
				// 	this.$refs['sqBtn'].open()
				// 	return
				// }

				let sjsz = this.sjxx.inStoreSetting
				if (sjsz && sjsz.order && sjsz.order.payMode == 2 && sjsz.order.verification == 2 && sjsz.order
					.distance && this.sjxx.distanceNum && (Number(this.sjxx.distanceNum) > Number(sjsz.order.distance))
				) {
					return this.util.message(this.$t("in_goods.out_of_merchant_range"), 3, 2000)
				}
				if (this.havebxp) {
					let arr = this.ingood.filter(v => v.isMust == 1),
						num = 0,
						carr = this.scarList.goodsList.map(v => v.spuId)
					if (this.gs && this.gs.goodsInStyle == 2) {
						for (let i = 0; i < arr.length; i++) {
							if (this.scarList.categoryIds && this.scarList.categoryIds.includes(arr[i].id)) {
								num += 1
							}
						}
					} else {
						for (let i = 0; i < arr.length; i++) {
							if (arr[i].goodsList.find(item => carr.includes(item.id))) {
								num += 1
							}
						}
					}
					if (num < arr.length && (!this.scarList.tables || this.scarList.tables && !this.scarList.tables
							.orderSn)) {
						return this.util.message(this.$t("in_goods.add_required_items"), 3, 1500)
					}
					// console.log(arr, carr, num)
				}
				if (!this.jjmbxx) {
					try {
						await this.requestSM(['integralChange', 'balanceChange', 'vipChange'])
					} catch (e) {
						this.jjmbxx = true
						return
					}
				}
				this.gwc && clearInterval(this.gwc)
				this.go({
					t: 1,
					url: `/pages/shop/in/pay-order?tableId=${this.tableId}&diningType=${this.storeInfo.diningType}`
				})
			},
			sqsjh() {

				this.$refs['sqBtn'].open()
			},
			handReturn() {
				this.go({
					t: 5,
					url: `/pages/index/index`
				})
			},
		},
		onUnload() {
			this.gwc && clearInterval(this.gwc)
		},
	}
</script>
<style lang="scss" scoped>
	@import '../../index/goods/goods.scss';

	.header {
		padding-bottom: 40rpx;
	}

	.icon-right {
		transform: rotateZ(180deg);
	}

	.ysxy {
		padding: 60rpx;
		width: 80%;
		background: #fff;
	}

	.privacyTit {
		font-size: 32rpx;
		font-weight: bold;
		color: #333;
		text-align: center;
		overflow: hidden;
	}

	.privacyDesc {
		font-size: 28rpx;
		color: #666;
		overflow: hidden;
		margin-top: 30rpx;
	}

	.privacyDesc text {
		color: #333;
	}

	.privacyPost {
		overflow: hidden;
		margin-top: 60rpx;
	}

	.privacyPost .refuseBtn,
	.privacyPost .agreeBtn {

		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 28rpx;
		font-weight: bold;
		color: #fff;
		background: #a9a9a9;
		border-radius: 40rpx;
		box-sizing: border-box;
		overflow: hidden;
	}

	.noagreeBtn {
		margin-top: 20rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 28rpx;
		font-weight: bold;
		color: #fff;
		background: #a9a9a9;
		border-radius: 40rpx;
		box-sizing: border-box;
		overflow: hidden;
	}
</style>