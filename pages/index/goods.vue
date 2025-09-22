<template>
	<view class="bf h100v container">
		<view class="header">
			<uni-nav-bar id='uninavbar' :uropcity="0" :uriconopcity='0' :fixed='false' :ispr='false' :border='false'
				:statusBar="true" :isleft='false'>
				<view slot='left' class="f-c c0" v-if="orderSetting.together == 1">
					<bar-left></bar-left>
				</view>
				<view class="f-x-e f-g-1">
					<view class="search bsf f-c" @click.stop="serach"><text class="iconfont icon-sousuo f32 c9"></text></view>
				</view>
			</uni-nav-bar>
			<change-shop @dining-type="switchOrderType" @init="init" :xdtype="xdtype"></change-shop>
			<shop-notice></shop-notice>
		</view>
		<class-ts2 v-if="gs && gs.selfStyle==2" ref="classTs" :cs="categories" :st="scrollTop" :sx="sIndex" :cd="ccId"
			@handMenu="handMenu" :scarList="scarList" :str="pstop" @psroll="psroll" @handdl="handdl" @handcar="handcar"
			@rfcalc="rfcalc" class="main" :orSet="orderSetting" :swiper="swiper" :cgs="categoryGoods" :gs='gs'></class-ts2>
		<class-ts3 v-else-if="gs && gs.selfStyle==3" ref="classTs" :cs="categories" :st="scrollTop" :sx="sIndex"
			:cd="ccId" @handMenu="handMenu" :scarList="scarList" :str="pstop" @psroll="psroll" @handdl="handdl"
			@handcar="handcar" @rfcalc="rfcalc" class="main" :orSet="orderSetting" :swiper="swiper" :cgs="categoryGoods" :gs='gs'></class-ts3>
		<class-ts4 v-else-if="gs && gs.selfStyle==4" ref="classTs" :cs="categories" :st="scrollTop" :sx="sIndex"
			:cd="ccId" @handMenu="handMenu" :scarList="scarList" :str="pstop" @psroll="psroll" @handdl="handdl"
			@handcar="handcar" @rfcalc="rfcalc" class="main" :orSet="orderSetting" :swiper="swiper" :cgs="categoryGoods" :gs='gs'></class-ts4>
		<class-ts1 v-else ref="classTs" :cs="categories" :st="scrollTop" :sx="sIndex" :cd="ccId" @handMenu="handMenu"
			:scarList="scarList" :str="pstop" @psroll="psroll" @handdl="handdl" @handcar="handcar" @rfcalc="rfcalc"
			class="main" :orSet="orderSetting" :swiper="swiper" :cgs="categoryGoods" :gs='gs'>
				<!-- <view slot='swiper' id="ads" v-if="swiper && swiper.imgUrl.length">
					<picLunbo-by :co='swiper' u='rpx' :color='tColor'></picLunbo-by>
				</view> -->
			</class-ts1>
		<block v-if="rollOrder && rollOrder.length">
			<rollBag @open="rollOpen" />
			<rollPopup ref="rollPopup" :rr="rollOrder" />
		</block>
		<business-status :cd="scarList" />
		<block v-if="goodsAd">
			<g-ad :co="goodsAd"></g-ad>
		</block>
		<tcyhq v-if='wcInfo' type="1" @close='wcshow=false' :co='wcInfo' v-model="wcshow"></tcyhq>
		<block v-if="scarList.realtimeState!=3">
			<product-modal ref="productModal" :product="product" :visible="productModalVisible"
				@cancel="closeProductDetailModal" @add-to-cart="handleAddToCartInModal" @pay="pay" :orSet="orderSetting" :storeId="storeId"></product-modal>
			<view class="">
				<cart-bar :cart="scarList" @add="handcar" @minus="handcar" @clear="clearCart" @pay="pay">
				</cart-bar>
			</view>
		</block>
		<view class="posi-r">
			<tab-bar />
		</view>
		<load v-if="loading"></load>
		<sq-btn type="1" :lType="2" ref="sqBtn"></sq-btn>
	</view>

	<!-- <view class="loading" v-else>
		<image src="/static/images/loading.gif"></image>
	</view> -->
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
	import BarLeft from "./goods/gtop/bar-left.vue"
	import ChangeShop from "./goods/gtop/change-shop.vue"
	import ShopNotice from "@/components/goods/shop-notice.vue"
	import Actions from "@/components/goods/actions/actions.vue"
	import ProductModal from '@/components/goods/product-modal/product-modal.vue'
	import CartBar from '@/components/goods/cartbar/cartbar.vue'
	import cartPopup from '@/components/goods/cart-popup/cart-popup.vue'
	import businessStatus from './goods/business.vue'
	import load from '@/components/common/load.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import iDefault from '@/components/common/default.vue'
	import gAd from '@/components/drag/ad.vue';
	import picLunboBy from '@/components/drag/picLunbo.vue';
	import tcyhq from '@/components/template/tcyhq.vue'
	import classTs1 from '@/components/goods/template/class-ts1.vue'
	import classTs2 from '@/components/goods/template/class-ts2.vue'
	import classTs3 from '@/components/goods/template/class-ts3.vue'
	import classTs4 from '@/components/goods/template/class-ts4.vue'
	import rollBag from "./goods/rollBag/rollBag.vue"
	import rollPopup from "./goods/rollBag/rollPopup.vue"
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		components: {
			uniNavBar,
			BarLeft,
			ChangeShop,
			ShopNotice,
			Actions,
			ProductModal,
			CartBar,
			cartPopup,
			businessStatus,
			load,
			sqBtn,
			iDefault,
			gAd,
			picLunboBy,
			tcyhq,
			classTs1,
			classTs2,
			classTs3,
			classTs4,
			rollBag,
			rollPopup,
		},
		data() {
			return {
				loading: true,
				mainRef: null,
				categories: [],
				cart: [],
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
				diningType: '',
				xdtype: '',
				goodsAd: [],
				swiper: {
					imgUrl: [],
					height: '260',
					circle: '30'
				},
				wcshow: false,
				wcInfo: '',
				rollOrder:[],
				categoryGoods:[],
			}
		},
		onShow() {
			if (uni.getStorageSync('xdtype')) {
				this.xdtype = uni.getStorageSync('xdtype')
				this.diningType = this.xdtype == 1 ? 0 : 1
			}
			if (this.isload) {
				this.refresh()
			}
			if (uni.getStorageSync('hGoodsId') && this.storeId) {
				this.handdl({id:uni.getStorageSync('hGoodsId')})
			}
		},
		computed: {
			...mapState(['sjxx', 'sjgood']),
			...mapState('dndc', ['latLng']),
			...mapState({
				storeBasicSetting: state => state.config.storeBasicSetting,
				// integralSettingcustomTxt: state => state.config.integralSettingcustomTxt,
				orderSetting: state => state.config.orderSetting,
				scarList: state => state.scarList.out || [],
				gs: state => state.layout.goodStyle || {},
			}),
			// ztqs() {
			// 	return `rgba(${this.cTR(this.tColor)},0.1)`
			// },
			// gcnum() {
			// 	return id => this.scarList.goodsList.reduce((acc, cur) => {
			// 		if (cur.spuId === id) {
			// 			return acc += cur.num
			// 		}
			// 		return acc
			// 	}, 0)
			// },
		},
		mixins: [utilMixins],
		async onLoad(options) {
			console.log('options', options)
			let tid = utils.getOptions(options, {
				key: 'storeId',
				q1: options.storeId,
			})
			this.loading = true
			this.storeId = tid || uni.getStorageSync('storeId')
			console.log('storeId', this.storeId)
			await this.load(this.storeId)
			if(options && options.goodId){
				this.handdl({id:options.goodId})
			}
		},
		methods: {
			...mapActions(["getSjxx", "getConfig", "getGoods", "supdCar", "getMycar"]),
			...mapMutations(["setScarList","setGoods"]),
			async load(sid) {
				await this.getLoginInfo()
				this.storeId = sid
				await this.getDw()
				this.getLayout()
				this.getConfig({
					ident: ["storeBasicSetting", "orderSetting"]
				})
				uni.removeStorageSync('storeId')
			},
			async getDw() {
				let lc = await getDw({
					t: 0
				})
				this.lc = lc
				// await this.getAddInfo(lc)
				if (!this.storeId) {
					let res = await this.util.request({
						'url': this.api.mrmd,
						data: {
							lat: lc.latitude || '',
							lng: lc.longitude || '',
						}
					})
					if (res && res.data) {
						this.storeId = res.data
						this.init();
					} else {
						this.go({
							t: 2,
							url: `/pages/shop/select/index?page=goods'`,

						})
					}
				} else {
					this.init();
				}
			},
			async init() {
				this.loading = true
				await this.getSjxx({
					storeId: this.storeId,
					lat: this.lc.latitude || '',
					lng: this.lc.longitude || '',
				})
				this.cDiningType()
				if(this.gs && this.gs.goodsStyle==2){
					await this.getCategory()
				}else{
					this.getGoods({
						storeId: this.storeId,
						diningType: this.diningType,
					}).then(()=>{
						this.categories = utils.deepCopy(this.sjgood)
						this.ccId = this.categories.length && this.categories[0].id
						this.havebxp = this.sjgood.findIndex(v => v.isMust == 1) > -1
						this.$nextTick(() => this.$refs['classTs'].calcSize())
						this.loading = false
					}).catch(()=>{
						this.loading = false
					})
				}
				this.getMycar({
					storeId: this.storeId,
					diningType: this.diningType,
					lat: this.lc.latitude || '',
					lng: this.lc.longitude || '',
				})
				this.gAd()
				this.getWc()
				this.gRollOrder()
				this.storeId = this.sjxx.id
				if (uni.getStorageSync('hGoodsId') && this.storeId) {
					this.handdl({id:uni.getStorageSync('hGoodsId')})
				}
				// this.$nextTick(() => {
				// 	setTimeout(() => {
				// 		this.$refs['classTs'].calcSize()
				// 	}, 100)
				// })
				// this.$nextTick(() => this.$refs['classTs'].calcSize())
				// this.loading = false
				this.isload = true
			},
			async getCategory(){
				let {
					data
				} = await this.util.request({
					url: this.api.gCategory,
					data: {
						storeId: this.storeId,
						diningType: this.diningType,
					}
				})
				if(data && data.length){
					this.categories = data
					this.havebxp = this.categories.findIndex(v => v.isMust == 1) > -1
					this.ccId = data[0].id
					this.setGoods({params:{storeId: this.storeId,dType: 'out'},data,})
					await this.getCategoryGoods()
				}else{
					this.loading = false
				}
			},
			async getCategoryGoods(){
				let {
					data
				} = await this.util.request({
					url: this.api.goods,
					data: {
						storeId: this.storeId,
						diningType: this.diningType,
						categoryId:this.ccId,
					}
				})
				this.categoryGoods = data ? data :[]
				this.loading = false
			},
			async refresh() {
				this.cDiningType()
				await this.getMycar({
					storeId: this.storeId,
					diningType: this.diningType,
					lat: this.latLng.lat ? this.latLng.lat : '',
					lng: this.latLng.lng ? this.latLng.lng : '',
				})
			},
			async gAd() {
				let {
					data
				} = await this.util.request({
					'url': this.api.gglb,
					data: {
						location: 2,
						storeId: this.storeId
					}
				})
				this.goodsAd = data ? data.window : []
				if (data.banner && data.banner.length>0) {
					for (let k in data.banner) {
						data.banner[k].url = data.banner[k].link
					}
					this.swiper = {
						imgUrl: data.banner,
						height: '260',
						circle: '30'
					}
				}else{
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
				// console.log('wc', data)
			},
			async gRollOrder() {
				let {
					data
				} = await this.util.request({
					url: this.api.couponPack,
					data: {
						storeId: this.storeId
					}
				})
				this.rollOrder = data ? data.list : []
			},
			cDiningType() {
				let arr = [],
					sjsz = this.sjxx && this.sjxx.storeSetting
				if (this.sjxx && sjsz && sjsz.pickupSwitch == 1 && sjsz.takeoutSwitch == 1) {
					this.buyType = 2
					if (this.orderSetting.orderPriority == 2) {
						this.buyType = 1
					}
					if (this.xdtype) {
						this.buyType = this.xdtype
						setTimeout(() => {
							uni.removeStorageSync('xdtype')
						}, 2000)
					}
					return this.diningType = this.buyType == 2 ? this.sjxx.storeSetting.defaultType : 0
				} else if (this.sjxx && sjsz && sjsz.pickupSwitch == 0 && sjsz.takeoutSwitch == 1) {
					this.buyType = 1
					return this.diningType = this.buyType == 2 ? this.sjxx.storeSetting.defaultType : 0
				} else if (this.sjxx && sjsz && sjsz.pickupSwitch == 1 && sjsz.takeoutSwitch == 0) {
					this.buyType = 2
					return this.diningType = this.buyType == 2 ? this.sjxx.storeSetting.defaultType : 0
				}
			},
			async switchOrderType(type) {
				this.diningType = type
				this.getGoods({
					storeId: this.storeId,
					diningType: this.diningType,
				}).then(()=>{
					this.categories = utils.deepCopy(this.sjgood)
					this.ccId = this.categories.length && this.categories[0].id
					this.havebxp = this.sjgood.findIndex(v => v.isMust == 1) > -1
					this.$nextTick(() => this.$refs['classTs'].calcSize())
				})
				await this.getMycar({
					storeId: this.storeId,
					diningType: this.diningType,
					lat: this.lc.latitude || '',
					lng: this.lc.longitude || '',
					isChange: 1,
				})
			},
			async handcar(p) {
				console.log('p', p)
				if (!this.isLogin && !this.noLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				try {
					let res = await this.supdCar({
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
						lat: this.lc.latitude || '',
						lng: this.lc.longitude || '',
						diningType: this.diningType,
					})
				} catch (e) {
					console.log(e)
				}
			},
			async handdl(product) {
				uni.removeStorageSync('hGoodsId')
				if(product && product.type==2 || (this.gs && this.gs.goodsDetail==3)){
					this.go({
						t: 1,
						url: `/pages/shop/good-dl?goodId=${product.id}&storeId=${this.storeId}&diningType=${this.diningType}&dType=out`,
					})
				}else{
					let res = await this.util.request({
						'url': `${this.api.goods}/${product.id}`,
						data: {
							storeId: this.storeId,
							diningType: this.diningType
						}
					})
					this.product = res.data
					this.productModalVisible = true
					this.$refs['productModal'].open(product, this.storeId,this.diningType)
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
			openCartDetailsPopup() {
				this.$refs['cartPopup'].open()
			},
			clearCart() {
				this.cart = []
			},
			handMenu(id, i) {
				if(this.gs && this.gs.goodsStyle==2){
					if(this.ccId == id) return
					this.ccId = id
					this.getCategoryGoods()
				}else{
					this.sIndex = i
					this.pstop = this.categories.find(item => item.id == id).top
					// console.log('this.pstop', id, i, this.pstop)
					this.$nextTick(() => this.ccId = id)
				}	
			},
			psroll({
				detail
			}) {
				const {
					scrollTop
				} = detail
				let sr = scrollTop +140
				let tabs = this.categories.filter(item => item.top <= sr).reverse()
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
				if (!this.isLogin && !this.noLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				let sjsz = this.sjxx.storeSetting
				if (!sjsz || (sjsz.pickupSwitch != 1 && sjsz.takeoutSwitch != 1)) {
					this.util.message(this.$t("goods.store_no_order_channel"), 3, 2000)
					return
				}
				if (this.havebxp) {
					let arr = this.sjgood.filter(v => v.isMust == 1),
						num = 0,
						carr = this.scarList.goodsList.map(v => v.spuId)
					if(this.gs && this.gs.goodsStyle==2){
						for (let i = 0; i < arr.length; i++) {
							if (this.scarList.categoryIds && this.scarList.categoryIds.includes(arr[i].id)) {
								num += 1
							}
						}
					}else{
						for (let i = 0; i < arr.length; i++) {
							if (arr[i].goodsList.find(item => carr.includes(item.id))) {
								num += 1
							}
						}
					}
					if (num < arr.length) {
						return this.util.message(this.$t("goods.add_required_items"), 3, 1500)
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
				uni.navigateTo({
					url: `/pages/shop/out/pay-order?diningType=${this.diningType ==1 ? this.sjxx && this.sjxx.storeSetting.defaultType : this.diningType}`
				})
			},
			serach(){
				this.go({
					t: 1,
					url: `/pages/shop/search/out?page=shopGoods`,
				})
			},
			rollOpen(){
				this.$refs['rollPopup'].open()
			},
		},
		onShareAppMessage() {
			let p = `pages/index/goods?storeId=${this.storeId}`
			if(this.product && this.product.id){
				p = `pages/index/goods?storeId=${this.storeId}&goodId=${this.product.id}`
			}
			return this.util.mpShare({
				t: this.product && this.product.name || this.sjxx.name,
				i: this.getImgS(this.product && this.product.logo),
				p,
			})
		},
	}
</script>

<style scoped lang="scss">
	@import './goods/goods.scss';
</style>