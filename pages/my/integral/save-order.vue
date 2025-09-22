<template>
	<view class="pb130 p2">
		<view class="bf mla mt20 pb20" v-if="ModeArr.length>1">
			<view class="p-r bf flex type">
				<view class="w50 t-c wei t-o-e" v-for="(v,i) in ModeArr" :key='i'
					:class="deliveryMode == v.value?v.acname:v.cname" @click="changeDeliveryMode(v)">
					<text class="iconfont c3 f40 mr10" :class="v.icon" v-if="deliveryMode == v.value"></text>
					{{v.name}}
				</view>
			</view>
		</view>
		<view v-if="deliveryMode==2">
			<self-fetch-addres @radioChange="radioChange" @selectTime="selectTime" @auZdtx="setMobile" @handstore="handstore" :dl="checkData.goods"
				:mobile="params.mobile" :current="current" :cd="cd" :storeInfo="storeInfo"></self-fetch-addres>
		</view>
		<view v-if="deliveryMode==1">
			<take-out-addres @selectTime="selectTime" :yjrV="yjrV" :dl="checkData.order" :cd="cd"></take-out-addres>
		</view>

		<view class="f-bt mb30 bf p2 mt20" v-if="checkData.goods">
			<view class="f-g-0 mr10">
				<image :src="checkData.goods.icon" class="pro-img bs10" mode="aspectFit"></image>
			</view>
			<view class="f-g-1 f-bt ml10 flex">
				<view class="f-g-1 f-y-bt">
					<view class="f28 wei">{{checkData.goods.name}}</view>
					<view class="c9 f28">x1</view>
				</view>
				<view class="t-o-e f30 f-g-0 neutra-font" :style="{color:tColor}" v-if="checkData.goods">
					<text v-if="checkData.goods.integral>0" class="f36 wei">{{checkData.goods.integral}}</text>
					<text v-if="checkData.goods.integral>0" class="f22 c9 nowei ml10">{{$t("integral.points")}}</text>
					<text v-if="checkData.goods.integral>0 && checkData.goods.money>0" class="nowei c9">+</text>
					<text v-if="checkData.goods.money>0" class="f36 wei">{{checkData.goods.money}}<text
							class="f22 c9">THB</text></text>
				</view>
			</view>
		</view>
		<view class="f-bt bf p2 bs10" v-if="deliveryMode==1">
			<view class="f-g-1">{{$t("integral.courier_fee")}}</view>
			<view class="f-g-0 neutra-font">฿{{checkData.goods && checkData.goods.delivery_fee}}</view>
		</view>
		<check-save :dl="checkData.order" :pl="params" @spay="savePay" :style="style"></check-save>
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
	let app = getApp().globalData
	import utils from '@/common/utils.js'
	import CheckSave from './components/check-save.vue'
	import SelfFetchAddres from './components/self-fetch-addres.vue'
	import TakeOutAddres from './components/take-out-addres.vue'
	import load from '@/components/common/load.vue'
	import Pay from '@/components/pay/pay.vue'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		name: 'js-details',
		components: {
			CheckSave,
			SelfFetchAddres,
			TakeOutAddres,
			load,
			Pay,
		},
		data() {
			return {
				deliveryMode: '1',
				showLoading: true,
				loading: false,
				payObj: {},
				params: {
					storeId: 0,
					addressId: 0,
					goodsId: '',
					diningType: 1,
				},
				storeInfo:{},
				checkData: {},
				showGg: false,
			}
		},
		async onLoad(options) {
			let id, diningType
			if (options.id && options.diningType) {
				id = options.id
				diningType = options.diningType
			}
			this.id = id
			this.params.goodsId = id
			this.params.diningType = diningType
			this.deliveryMode = diningType
			this.util.setNT(this.$t("integral.confirm_redemption"))
			this.getCheckOut()
		},
		onShow() {
			if (app.xzdzInfo) {
				this.params.addressId = app.xzdzInfo.id
				this.params.diningType = this.deliveryMode
				this.getCheckOut()
			}
			if (uni.getStorageSync('rStoreInfo')) {
				this.storeInfo = uni.getStorageSync('rStoreInfo')
				this.handstore(this.storeInfo)
				this.load(this.storeInfo.id)
			}
		},
		mixins: [utilMixins],
		computed: {
			ModeArr() {
				let arr = []
				if (this.checkData && this.checkData.goods && this.checkData.goods.deliveryChannel.indexOf(1) > -1) {
					arr.push({
						name: this.$t("integral.courier_delivery"),
						value: '1',
						cname: 'leftInactive',
						acname: 'leftActive',
						icon: 'icon-waimaifuwu',
					})
				}
				if (this.checkData && this.checkData.goods && this.checkData.goods.deliveryChannel.indexOf(2) > -1) {
					arr.push({
						name: this.$t("integral.store_pickup"),
						value: '2',
						cname: 'rightInactive',
						acname: 'rightActive',
						icon: 'icon-zhongbao-mendian',
					})
				}
				return arr
			},
		},
		methods: {
			async getCheckOut() {
				let {
					data
				} = await this.util.request({
					url: this.api.pMallOut,
					data: this.params
				})
				if (data) this.check = false
				this.checkData = data
			},

			async savePay() {
				if(this.params.diningType==1 && !this.checkData.order.address){
					return this.util.message(this.$t("integral.please_select_address"), 3)
				}
				if(this.params.diningType==2 && !this.params.storeId){
					return this.util.message(this.$t("integral.please_select_store"), 3)
				}
				await this.util.modal(this.$t("integral.are_you_sure_to_redeem_product"))
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
				this.getCheckOut()
			},

			changeDeliveryMode(v) {
				if (v.value == this.deliveryMode) return
				this.deliveryMode = v.value
				this.params.diningType = v.value
				this.getCheckOut()
			},
			selectTime() {
				this.$refs['CheckTime'].open(this.deliveryMode)
			},
			setMobile(m) {
				this.params.mobile = m
				this.params.diningType = this.deliveryMode
				this.getCheckOut()
			},
			handstore(s){
				this.params.storeId = s.id
				this.params.diningType = this.deliveryMode
				this.getCheckOut()
			},
			async load(sid) {
				if (sid) {
					uni.removeStorageSync('rStoreInfo')
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.bor-b {
		border-bottom: 1px solid #EFF3F6;
	}

	.bor-t {
		border-top: 1px solid #EFF3F6;
	}



	.imgw {
		width: 130rpx;
		height: 130rpx;
	}

	.pstypec {
		width: 180rpx;
		height: 58rpx;
		border: 1rpx solid #ddd;
		border-radius: 28px;
	}

	.qrdh {
		border-radius: 48rpx;
	}

	.pro-img {
		width: 120rpx;
		height: 90rpx;
		flex-shrink: 0;
	}

	.type {
		height: 50rpx;
		border-radius: 20rpx;

		.leftActive {
			position: absolute;
			bottom: 0;
			left: 0;
			height: 70rpx;
			line-height: 70rpx;
			font-size: 30rpx;
			font-weight: bold;
			border-radius: 20rpx;
			background: #FFF;
		}

		.leftInactive {
			position: absolute;
			left: 0;
			height: 100%;
			height: 70rpx;
			line-height: 70rpx;
			font-size: 26rpx;
			background: #E8E8E8;
			border-radius: 20rpx 0 20rpx 0;
		}

		.rightActive {
			position: absolute;
			bottom: 0;
			right: 0;
			height: 70rpx;
			font-size: 30rpx;
			line-height: 70rpx;
			font-weight: bold;
			border-radius: 20rpx;
			background: #FFF;
		}

		.rightInactive {
			position: absolute;
			right: 0;
			height: 100%;
			height: 70rpx;
			font-size: 26rpx;
			line-height: 70rpx;
			background: #E8E8E8;
			border-radius: 0 20rpx 0 20rpx;
		}
	}
</style>