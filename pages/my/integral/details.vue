<template>
	<view class="pb130">
		<!-- <mg-swiper :co='swiper' u='rpx' :color='tColor'></mg-swiper> -->
		<view class="imgh o-h bf">
			<image :src="dlDatl.icon" mode="aspectFit" class="wh" @click="yl(dlDatl.icon)">
			</image>
		</view>
		<view class='p3 bf mb20'>
			<view class='jfgb'>
				<view class="f-bt f-y-c">
				<!-- 	<view class="coupon-label f-c mr10 f-g-0" :style="{backgroundColor:tColor,color:fontColor}">
						<text v-if="dlDatl.product_type == 1">实</text>
						<text v-else-if="dlDatl.product_type == 2">券</text>
						<text v-else-if="dlDatl.product_type == 3">余</text>
					</view> -->
					<view class="t-o-e f-g-1 wei f34">{{dlDatl.name}}</view>
				</view>
				<!-- <view class="flex mt10">
					<view v-if="dlDatl.product_type==2" class="flex">
						<view class="f-g-0 c9 f24">兑换优惠券：</view>
						<view class="wei f24 c0 f-g-1">
							<text v-for="(v,i) in dlDatl.coupon_collection" :key="i" class="mr10">{{v.name}} <text class="c9 f20 nowei ml5">x{{v.num}}</text></text>
						</view>
					</view>
					<view v-if="dlDatl.product_type==3" class="flex">
						<view class="f-g-0 c9 f22">兑换余额：</view>
						<view class="wei f24 c0 f-g-1 neutra-font">
							<text class="wei f24 c0">฿{{dlDatl.balance}}</text>
						</view>
					</view>
				</view> -->
				<view class="cfa mt10 neutra-font">
					<view class="t-o-e f30" :style="{color:tColor}">
						<text v-if="dlDatl.integral>0" class="f36 wei">{{dlDatl.integral}}</text>
						<text v-if="dlDatl.integral>0" class="f22 c9 nowei ml10">{{$t("integral.points")}}</text>
						<text v-if="dlDatl.integral>0 && dlDatl.money>0" class="nowei c9">+</text>
						<text v-if="dlDatl.money>0" class="f36 wei">{{dlDatl.money}}<text
								class="f22 c9">THB</text></text>
						<text v-if="dlDatl.original_price>0" class="t-d-l ml10 f22"
							style="color: #999;">{{$t("integral.original_price")}}{{dlDatl.original_price}}<text class="f22 c9">THB</text></text>
					</view>
					<view class="f-bt">
						<view class="c9 f22 wei4">{{$t("integral.sales")}}{{dlDatl.sales}} {{$t("integral.pieces")}}</view>
						<view class="c9 f22 wei4">{{$t("integral.remaining_pieces")}} {{dlDatl.stock}}{{$t("integral.pieces")}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bf p3">
			<view class="f32 wei">{{$t("integral.product_details")}}</view>
			<view v-if="dlDatl.body" class="mt30">
				<mg-rtext type='2' :content="dlDatl.body" />
			</view>
		</view>

		<view class="dbbtnc" :style="{bottom: isIpx?'40rpx':0}">
			<view class="dbbtn">
				<button @click="ljdh" class="rt f-c" :style="{background:check ? '#999':tColor}"
					:disabled="check">{{$t("integral.redeem_now")}}</button>
			</view>
		</view>
		<view v-if="isIpx" class='bgf' style="z-index: 0;"></view>
		<!-- <load v-if="showLoading"></load> -->
		<pay ref="Pay" @pay="cPay" @zfPay="zfPay"></pay>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	// import MgSwiper from '@/components/common/functionCmp/swiper.vue'
	import mgRtext from '@/components/common/functionCmp/rich-text.vue'
	import utils from '@/common/utils.js'
	import load from '@/components/common/load.vue'
	import Pay from '@/components/pay/pay.vue'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		name: 'js-details',
		components: {
			// MgSwiper,
			mgRtext,
			load,
			Pay,
		},
		data() {
			return {
				swiper: {
					class: '',
					padding: 0,
					swiper: [{
						icon: ''
					}],
					duration: '',
					mode: '',
					height: '500',
					radius: '0',
					auto: true,
					interval: 5,
				},
				showLoading: true,
				loading: false,
				dlDatl: {},
				check: true,
				checkData: {},
				zfForm: {},
			}
		},
		async onLoad(options) {
			if (options.id) {
				this.id = options.id
			}
			await this.getLoginInfo()
			this.util.setNT(this.$t("integral.product_details"))
			this.getData()
		},
		mixins: [utilMixins],
		computed: {},
		methods: {
			async getData() {
				let {
					data
				} = await this.util.request({
					url: `${this.api.jfsplb}/${this.id}`,
					mask: 1,
				})
				// this.swiper.swiper[0].icon = data.icon
				this.dlDatl = data ? data : {}
				this.getCheckOut()
				this.showLoading = false
			},
			async getCheckOut() {
				let {
					data
				} = await this.util.request({
					url: this.api.pMallOut,
					data: {
						goodsId: this.id
					},
				})
				if (data) this.check = false
				this.checkData = data
			},
			async ljdh() {
				// return
				if (this.dlDatl.product_type == 1) {
					let diningType = this.checkData.goods.deliveryChannel && this.checkData.goods.deliveryChannel.indexOf(1) > -1 ? 1 : 2
					this.go({
						t: 2,
						url: `/pages/my/integral/save-order?id=${this.id}&diningType=${diningType}`
					})
				} else {
					await this.util.modal(this.$t("integral.confirm_redemption_of_product"))
					// return
					this.loading = true
					if (this.checkData.pay && this.checkData.pay.money > 0) {
						this.zfForm = this.checkData.pay
						this.$refs['Pay'].jfOpen(
							JSON.stringify({
								orderSn: this.checkData.pay.orderSn,
								orderType: 'jfsc',
								go: {
									t: 2,
									url: `/pages/my/integral/integral-record?orderSn=${this.checkData.pay.orderSn}`
								},
							}),
							JSON.stringify(this.checkData.pay)
						)
					} else {
						this.zfPay()
					}
				}
			},
			async zfPay() {
				this.loading = false
				if (this.checkData.pay && this.checkData.pay.money <= 0) {
					let {
						data,
						msg
					} = await this.util.request({
						url: this.api.jfsplb,
						method: 'POST',
						ct: 1,
					})
					this.util.message(msg, 3)
					// this.getCheckOut()
					setTimeout(() => {
						this.go({
							t: 2,
							url: `/pages/my/integral/integral-record?orderSn=${data.orderSn}`,
						})
					}, 300)
				}
			},
			cPay() {
				// this.go({
				// 	t: 2,
				// 	url: `/pages/my/integral/integral-record`,
				// })
			},
			yl(i) {
				let ci = []
				ci.push(i)
				this.util.preImg({
					idx: 0,
					urls: ci,
				})
			},

		},
		onShareAppMessage() {
			let p = `pages/my/integral/details?id=${this.dlDatl.id}`
			return this.util.mpShare({
				t: this.dlDatl.id,
				i: this.getImgS(this.dlDatl && this.dlDatl.icon),
				p,
			})
		},
	}
</script>

<style scoped lang="scss">
	.dbbtnc {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 30rpx;

		.dbbtn {
			height: 86rpx;
			border-radius: 80rpx;
			overflow: hidden;
			display: flex;
			box-shadow: 0rpx 8rpx 18rpx 5rpx rgba(221, 221, 221, 0.9);

			.rt {
				color: #fff;
				width: 100%;
				height: 100%;
				border-radius: 0;
				font-size: 30rpx;
				padding: 0;
			}
		}
	}

	.imgh {
		height: 600rpx;
	}
</style>