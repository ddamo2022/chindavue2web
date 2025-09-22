<template>
	<view class="mh100 p-r p2 rollDl" v-if="pdl && pdl.id">
		<view class="flex p2 c3" v-if="storeInfo">
			<view class="f-g-0 f-y-c"><text class="iconfont icon-im_dingwei f32 mr10 c3 mt5"></text></view>
			<view class="f-g-1 t-o-e f-y-c" @click="goSelect">
				<view class="f30">{{storeInfo.name}}</view>
				<text class="iconfont icon-youjiantou f32 mr10 c3 mt5"></text>
			</view>
		</view>
		<view class="logo bs20">
			<mg-img m="aspectFill" :src="pdl.image" class="wh"></mg-img>
		</view>
		<view class="mt20">
			<view class="p32 bf bs20">
				<view class="f-bt f-y-c">
					<view class="f-g-1 wei f30 t-o-e">{{pdl.name}}</view>
					<view class="f-g-0 t-r ts">
						<view class="wei">距结束</view>
						<view class="flex mt10" v-if="pdl.countdown">
							<view class="times wei neutra-font">{{pdl.countdown.d}}</view>
							<text>天</text>
							<view class="times wei neutra-font">{{pdl.countdown.h}}</view>
							<text>时</text>
							<view class="times wei neutra-font">{{pdl.countdown.m}}</view>
							<text>分</text>
						</view>
					</view>
				</view>
				<view class="mt10 f22 c9 neutra-font" v-if="pdl.inventoryType==1">库存：{{pdl.inventory}}</view>
			</view>
			<view class="rollbb"></view>
			<view class="p2 bs20 bf">
				<my-coupon :color='tColor' cname='mb30' v-for="(v,i) in pdl.couponList"
					:key='i' :co='v' ptype='6' :v="pdl"></my-coupon>
			</view>
			<view class="p2 bs20 bf mt20" v-if="pdl.desc">
				<view class="wei f28">购买须知</view>
				<view class="mt10">{{pdl.desc}}</view>
			</view>
		</view>
		<view class="foot-btnc cf f30 bf" :style="{padding: '20rpx',bottom: isIpx?'40rpx':0}">
			<view class="f-g-1 mt10">
				<button @click="save" :loading="loading" :disabled="loading" class="foot-btn bs15 f30"
					hover-class="btnhc" :style="{background:tColor,color:fontColor}">
					<text class="mr10 f30 neutra-font" v-if="pdl.price">฿{{pdl.price}}</text>
					<!-- <text class="mr10 f24 t-d-l" v-if="pdl.sellPrice && pdl.price && (Number(pdl.sellPrice) > Number(pdl.price))">{{pdl.sellPrice}}</text> -->
					立即抢购</button>
			</view>
		</view>
		<view v-if="isIpx" class='bgf'></view>
		<pay ref="Pay" @pay="getInfo"></pay>
		<sq-btn type="1" ref="sqBtn"></sq-btn>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import myCoupon from '@/components/common/my-coupon.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import Pay from '@/components/pay/pay.vue'
	import {
		getDw
	} from "@/common/wechat-util.js"
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		name: 'roll-dl',
		components: {
			myCoupon,
			sqBtn,
			Pay,
		},
		data() {
			return {
				storeInfo: {},
				pdl: {},
				show: false,
			}
		},
		async onLoad(options) {
			if(options && options.storeId && options.id){
				this.storeId = options.storeId
				this.id = options.id
				this.init()
				this.getStore()
			}else if(options && options.id && !options.storeId){
				this.id = options.id
				await this.gDw()
				this.init()
			}
			this.util.setNT('券包详情')
		},
		computed: {
			...mapState(['sjxx']),
		},
		mixins: [utilMixins],
		async onShow() {
			if (uni.getStorageSync('rStoreInfo')) {
				this.storeInfo = uni.getStorageSync('rStoreInfo')
				this.load(this.storeInfo.id)
			}
		},
		methods: {
			...mapActions(['getSjxx']),
			async init() {
				await this.getLoginInfo()
				 this.getLayout()
				this.getInfo()
			},
			async load(sid) {
				if (sid) {
					uni.removeStorageSync('rStoreInfo')
				}
				this.init()
			},
			async gDw() {
				if (this.storeInfo && this.storeInfo.id) {
					return
				} else {
					let lc = await getDw({
						t: 0
					})
					this.lc = lc
					await this.getAddInfo(lc)
					let res = await this.util.request({
						url: this.api.dplb,
						data: {
							lat: lc.latitude || '',
							lng: lc.longitude || '',
							recharge: 1,
						}
					})
					this.storeInfo = res.data && res.data.list && res.data.list[0]
				}
			},
			async getStore(){
					this.storeInfo = this.sjxx
				// this.getSjxx({
				// 	storeId: this.storeId,
				// 	lat: this.lc && this.lc.latitude || '',
				// 	lng: this.lc && this.lc.longitude || '',
				// }).then(()=>{
				// 	this.storeInfo = this.sjxx
				// })
			},
			goSelect() {
				uni.navigateTo({
					url: '/pages/shop/select/index?page=recharge'
				})
			},
			async getInfo() {
				let {
					data
				} = await this.util.request({
					url: `${this.api.couponPack}/${this.id}`,
					mask: '加载中',
					data: {
						storeId: this.storeId ? this.storeId : ''
					}
				})
				if (data) {
					this.pdl = data ? data : {}
				}
			},
			async save() {
				if (!this.isLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				if (this.pdl.inventoryType == 1 && this.pdl.inventory <=0) {
					return this.util.message('库存不足', 3, 2000)
				}
				this.loading = true
				let res = await this.util.request({
					'url': this.api.couponPackOrder,
					method: 'POST',
					mask: '下单中',
					data: {
						storeId: this.storeInfo && this.storeInfo.id,
						couponPackId: this.id
					}
				})
				if (!res) {
					this.loading = false
				} else {
					this.$refs['Pay'].open(
						JSON.stringify({
							orderSn: res.data,
							orderType: 6,
							go: ({
								t: 3,
								url: `/pages/order/detail?id=${res.data}`
							})
						})
					)
					this.loading = false
				}
			},
			fzID(v) {
				let id = v.sn.toString()
				this.util.fz(id)
			},
		},
	}
</script>
<style scoped lang="scss">
	.rollDl {
		padding-bottom: 160rpx;

		.rollbb {
			border-bottom: 2rpx dashed #e0d1d1;
			margin: 0 40rpx;
		}

		.logo {
			width: 100%;
			height: 400rpx;
		}

		.ts {
			color: #FF3131;

			.times {
				margin: 0 10rpx;
				padding: 0 6rpx;
				border: 2rpx solid #FF3131;
			}
		}

		.foot-btn {
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			border-radius: 60rpx;
		}

		.bgf {
			z-index: 10;
		}
	}
</style>