<template>
	<view class="container" v-if="orderInfo && orderInfo.scene">
		<self-fetch @radioChange="radioChange" :dl="orderInfo"></self-fetch>
		<view class="bf bs20 mt20 p32">
			<view class="pb20">
				<check-goods :dl="orderInfo" :pl="params" dType="ins"></check-goods>
				<discounts :dl="orderInfo" :pl="params" :dem="deliveryMode"></discounts>
			</view>
			<view class="f-x-e f-y-c mt20 neutra-font" v-if="orderInfo.vatMoney>0">
				<view class="mr10">{{$t("pay_order.vatMoney")}}({{ (orderInfo.vatValue * 100).toFixed(0) }}%) :</view>
				<view>
					<text>฿{{orderInfo.vatMoney}}</text>
				</view>
			</view>

			<view class="f-x-e f-y-c mt20 neutra-font" v-if="orderInfo.taxIncluded>0">
				<view class="mr10">{{$t("pay_order.taxIncluded")}}:</view>
				<view>
					<text>฿{{orderInfo.taxIncluded}}</text>
				</view>
			</view>
			<view class="f-x-e f-y-c mt20 neutra-font" v-if="orderInfo.taxIncluded>0">
				<view class="mr10">{{$t("pay_order.totaltax")}}:</view>
				<view>
					<text>฿{{totaltax}}</text>
				</view>
			</view>
			<view class="f-x-e f-y-c mt20 neutra-font" v-if="orderInfo.serviceMoney>0">
				<view class="mr10">{{$t("pay_order.serviceMoney")}}({{ (orderInfo.serviceValue * 100).toFixed(0) }}%) :
				</view>
				<view>
					<text>฿{{orderInfo.serviceMoney}}</text>
				</view>
			</view>
			<view class="f-x-e f-y-c mt20 neutra-font">
				<view class="f28 mr20" v-if="orderInfo.discountMoney>0">{{$t("pay_order.total_discount")}} <text
						class="cfa">฿{{orderInfo.discountMoney}}</text></view>
				<view class="mr10">{{$t("pay_order.subtotal")}} :</view>
				<view class="wei f38">
					<text>฿{{orderInfo.money}}</text>
					<text class="c9 f24 nowei t-d-l ml10"
						v-if="orderInfo.sellMoney && orderInfo.money && (Number(orderInfo.sellMoney) > Number(orderInfo.money))">฿{{ orderInfo.sellMoney }}</text>
				</view>
			</view>
		</view>
		<check-notes :dl="orderInfo" :pl="params" :dem="deliveryMode"></check-notes>
		<consumption-gift :dl="orderInfo" :pl="params" v-if="orderInfo.payGift"></consumption-gift>
		<check-point :dl="orderInfo" :pl="params" v-if="orderInfo.collectNum"></check-point>
		<check-save :dl="orderInfo" :pl="params" @spay="savePay" :style="style"></check-save>
		<pay ref="Pay" @pay="cPay"></pay>
		<tcyhq v-if='wcInfo' type="1" @close='wcshow=false' :co='wcInfo' v-model="wcshow"></tcyhq>
		<waiter @call="callWaiter"
			v-if="orderInfo.diningType==4 && orderInfo.store && orderInfo.store.inStoreSetting && orderInfo.store.inStoreSetting.order.attendant">
		</waiter>
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
	import SelfFetch from './components/self-fetch.vue'
	import Pay from '@/components/pay/pay.vue'
	import CheckGoods from '@/components/pay-order/check-goods.vue'
	import Discounts from '@/components/pay-order/discounts.vue'
	import CheckNotes from '@/components/pay-order/check-notes.vue'
	import Waiter from '@/components/pay-order/waiter.vue'
	import ConsumptionGift from '@/components/goods/consumption-gift.vue'
	import CheckSave from './components/check-save.vue'
	import Tcyhq from '@/components/template/tcyhq.vue'
	import CheckPoint from '@/components/pay-order/check-point.vue'

	export default {
		components: {
			SelfFetch,
			Pay,
			CheckGoods,
			Discounts,
			CheckNotes,
			ConsumptionGift,
			CheckSave,
			Tcyhq,
			CheckPoint,
			Waiter,
		},
		data() {
			return {
				showLoading: false,
				orderInfo: {},
				deliveryMode: 2,
				params: {
					remarks: '',
					mobile: '',
					couponId: 0,
					// packaging: 0,
				},
				loading: false,
				yjrV: {},
				radioType: 1,
				current: '',
				wcshow: false,
				wcInfo: '',
				query: {},
				sn: '',
			}
		},
		async onLoad(options) {
			this.util.setNT(this.$t("pay_order.submit_order"))
			this.params.storeId = this.sjxx.id
			this.params.mobile = this.user.mobile || ''
			if (options && options.tableId) {
				let tableId = options.tableId,
					diningType = options.diningType
				this.query = options
				this.getCheckOut(tableId)
			}
			uni.$on('payorder', (e) => {
				if (e.hasOwnProperty('hbInfo')) {
					if (e.type == 1) {
						this.params.couponId = e.hbInfo ? e.hbInfo.id : 0
						this.getCheckOut(this.deliveryMode == 1 ? 0 : this.radioType)
					}
				}
				console.log('payorderEl', e)
			})
			// this.getWc()
		},
		computed: {
			...mapState(['sjxx']),
			...mapState({
				orderSetting: state => state.config.orderSetting,
				copywriting: state => state.layout.copywriting,
				style: state => state.layout.style || {},
			}),
			totaltax() {
				return Number(this.orderInfo.taxIncluded) + Number(this.orderInfo.vatMoney);
			}
		},
		onUnload() {
			uni.$off('payorder');
		},
		methods: {
			...mapActions(["getInCar"]),
			async getCheckOut() {

				let {
					data
				} = await this.util.request({
					url: this.api.incheck,
					method: 'POST',
					data: {
						tableId: this.query.tableId,
						diningType: this.query.diningType,
						storeId: this.sjxx.id,
						notes: this.params.remarks,
						mobile: this.params.mobile,
						couponId: this.params.couponId,
						// packaging: this.params.packaging,
					}
				})
				this.orderInfo = utils.deepCopy(data)
			},
			setNote(v) {
				this.params.remarks = v
				this.getCheckOut()
			},
			async radioChange(e) {
				let {
					data
				} = await this.util.request({
					url: this.api.goodsPackAll,
					method: 'POST',
					data: {
						type: e == 0 ? 'back' : '',
						tableId: this.query.tableId,
						storeId: this.sjxx.id,
						diningType: this.query.diningType,
					},
				})
				// this.packaging = e
				this.getCheckOut()
			},
			async savePay() {

				if (!this.jjmbxx) {
					try {
						await this.requestSM(['pay', 'receive', `${this.deliveryMode==1?'delivery':'takeMeal'}`])
					} catch (e) {
						this.jjmbxx = true
						return
					}
				}
				this.pay()
			},
			async pay() {

				this.loading = true
				let {
					data,
					msg
				} = await this.util.request({
					url: this.api.inOrder,
					method: 'POST',
					ct: 1,
					mask: this.$t("pay_order.placing_order"),
					data: {
						tableId: this.query.tableId,
						diningType: this.query.diningType,
					},
				})
				if (data) {
					var orderid = data.prentOrderSn || data.orderSn
					if (orderid) {
						uni.setStorageSync('nologin_orderid', orderid);
					}
					if (data.payType == 1) {
						this.payOpen(data.orderSn, data.prentOrderSn)
					} else if (data.payType == 2) {
						this.util.message(msg, 3)
						this.go({
							t: 2,
							url: `/pages/order/detail?id=${data.prentOrderSn || data.orderSn}`
						})
					}
				} else {
					this.util.message(msg, 3)
					this.loading = false
				}
			},
			payOpen(sn, psn) {
				this.sn = psn
				this.$refs['Pay'].open(
					JSON.stringify({
						orderSn: sn,
						orderType: 4,
						go: ({
							t: 3,
							url: `/pages/order/detail?id=${psn || sn}`
						})
					})
				)
			},
			cPay() {
				this.getInCar({
					storeId: this.sjxx.id,
					tableId: this.query.tableId,
					diningType: this.query.diningType,
				})
			},
			async getWc() {
				let {
					data
				} = await this.util.request({
					url: this.api.wc,
					data: {
						pos: 4,
						storeId: this.sjxx.id
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
			async callWaiter() {
				await this.util.modal(this.$t("pay_order.are_you_sure_you_want_to_call_the_waiter"))
				let {
					data
				} = await this.util.request({
					url: `${this.api.call}/${this.query.tableId}`,
				})
				this.util.message(data, 3, 2000)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: auto;
		padding: 20rpx 20rpx 180rpx 20rpx;
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