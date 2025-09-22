<template>
	<view>
		<view class="container" v-if="orderInfo && orderInfo.scene">
			<view class="bf mla mt20 pb20" v-if="ModeArr.length">
				<view class="p-r bf flex type">
					<view class="w50 t-c wei t-o-e" v-for="(v,i) in ModeArr" :key='i'
						:class="deliveryMode == v.value?v.acname:v.cname" @click="changeDeliveryMode(v.value)">
						<text class="iconfont c3 f40 mr10" :class="v.icon" v-if="deliveryMode == v.value"></text>
						{{v.name}}
					</view>
				</view>
			</view>
			<view v-if="deliveryMode==2">
				<self-fetch-addres @radioChange="radioChange" @selectTime="selectTime" @auZdtx="setMobile" :yjrV="yjrV"
					:dl="orderInfo" :mobile="params.mobile" :current="current" :cd="cd"></self-fetch-addres>
			</view>
			<view v-if="deliveryMode==1">
				<take-out-addres @selectTime="selectTime" :yjrV="yjrV" :dl="orderInfo" :cd="cd"></take-out-addres>
			</view>
			<view class="bf bs20 mt20 p32">
				<view class="b-b-e p20">
					<check-goods :dl="orderInfo" :pl="params"></check-goods>
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
				<view class="f-x-e f-y-c mt20">
					<view class="f28 mr20" v-if="orderInfo.discountMoney">{{$t('pay-order.total_discount')}} <text
							class="cfa neutra-font">฿{{orderInfo.discountMoney}}</text></view>
					<view class="mr10">{{$t('pay-order.subtotal')}}:</view>
					<view class="wei f38 neutra-font">
						<text>฿{{orderInfo.money}}</text>
						<text class="c9 f24 nowei t-d-l ml10" v-if="orderInfo.sellMoney && orderInfo.money && (Number(orderInfo.sellMoney) > Number(orderInfo.money))">฿{{ orderInfo.sellMoney }}</text>
					</view>
				</view>
			</view>
			<check-notes :dl="orderInfo" :pl="params" :dem="deliveryMode"></check-notes>
			<consumption-gift :dl="orderInfo" :pl="params" v-if="orderInfo.payGift"></consumption-gift>
			<check-point :dl="orderInfo" :pl="params" v-if="orderInfo.collectNum"></check-point>
			<check-save :dl="orderInfo" :pl="params" @spay="savePay" :style="style" :cd="cd" v-if="cd.realtimeState!=3"></check-save>
			<check-shop ref="CheckShop" @pay="pay"></check-shop>
			<check-time ref="CheckTime" :dl='orderInfo' @yjSelect="yjSelect" :cd="cd"></check-time>
			<pay ref="Pay" @pay="cPay"></pay>
			<tcyhq v-if='wcInfo' type="1" @close='wcshow=false' :co='wcInfo' v-model="wcshow"></tcyhq>
		</view>
		<business-status :cd="cd" :bt="20" />
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
	import SelfFetchAddres from './components/self-fetch-addres.vue'
	import TakeOutAddres from './components/take-out-addres.vue'
	import Pay from '@/components/pay/pay.vue'
	import CheckShop from './components/check-shop.vue'
	import CheckTime from './components/check-time.vue'
	import CheckGoods from '@/components/pay-order/check-goods.vue'
	import Discounts from '@/components/pay-order/discounts.vue'
	import CheckNotes from '@/components/pay-order/check-notes.vue'
	import ConsumptionGift from '@/components/goods/consumption-gift.vue'
	import CheckSave from './components/check-save.vue'
	import Tcyhq from '@/components/template/tcyhq.vue'
	import CheckPoint from '@/components/pay-order/check-point.vue'
	import businessStatus from '@/pages/index/goods/business.vue'

	export default {
		components: {
			SelfFetchAddres,
			TakeOutAddres,
			CheckShop,
			CheckTime,
			Pay,
			CheckGoods,
			Discounts,
			CheckNotes,
			ConsumptionGift,
			CheckSave,
			Tcyhq,
			CheckPoint,
			businessStatus,
		},
		data() {
			return {
				showLoading: false,
				orderInfo: {},
				deliveryMode: 2,
				params: {
					remarks: '',
					serverTime: '',
					mobile: '',
					addressId: '',
					couponId: 0,
				},
				loading: false,
				yjrV: {},
				radioType: 1,
				current: '',
				wcshow: false,
				wcInfo: '',
				cd:{},
				zfForm:{},
			}
		},
		async onLoad(options) {
			this.util.setNT(this.$t('pay-order.submit_order'))
			this.params.storeId = this.sjxx.id
			this.params.mobile = this.user.mobile || ''
			if(this.sjxx && this.sjxx.storeSetting && this.sjxx.storeSetting.takeEatType){
				if(this.sjxx.storeSetting.takeEatType.includes(1) && !this.sjxx.storeSetting.takeEatType.includes(2)){
					this.radioType = 2
					this.current = 1
				}else{
					this.current = 0
				}
			}
			if (options && options.diningType) {
				let diningType = options.diningType
				this.getCheckOut(diningType)
			}
			uni.$on('payorder', (e) => {
				if (e.hasOwnProperty('hbInfo')) {
					if (e.type == 1) {
						this.params.couponId = e.hbInfo ? e.hbInfo.id : 0
						this.getCheckOut(this.deliveryMode == 1 ? 0 :  this.radioType || this.sjxx.storeSetting.defaultType)
					}
				}
				console.log('payorderEl', e)
			})
			this.getWc()
		},
		onShow() {
			if (app.xzdzInfo) {
				this.params.addressId = app.xzdzInfo.id
				this.getCheckOut(this.deliveryMode == 1 ? 0 : this.radioType || this.sjxx.storeSetting.defaultType)
			}
		},
		onUnload() {
			uni.$off('payorder');
		},
		computed: {
			...mapState(['sjxx']),
			...mapState('dndc', ['latLng']),
			...mapState({
				orderSetting: state => state.config.orderSetting,
				copywriting: state => state.layout.copywriting,
				style: state => state.layout.style || {},
			}),
			ModeArr() {
				let arr = []
				if (this.sjxx.storeSetting) {
					let sjsz = this.sjxx.storeSetting
					if (sjsz.pickupSwitch == 1 && sjsz.takeoutSwitch == 1) {
						arr = [{
							name: this.copywriting.dnName || this.$t('pay-order.pick_up'),
							value: '2',
							cname: 'leftInactive',
							acname: 'leftActive',
							icon: 'icon-zhongbao-mendian',
						}, {
							name: this.copywriting.wmName || this.$t('pay-order.takeout'),
							value: '1',
							cname: 'rightInactive',
							acname: 'rightActive',
							icon: 'icon-waimaifuwu',
						}]
						if (this.orderSetting.orderPriority == 2) {
							arr = [{
								name: this.copywriting.wmName || this.$t('pay-order.takeout'),
								value: '1',
								cname: 'leftInactive',
								acname: 'leftActive',
								icon: 'icon-waimaifuwu',
							}, {
								name: this.copywriting.dnName || this.$t('pay-order.pick_up'),
								value: '2',
								cname: 'rightInactive',
								acname: 'rightActive',
								icon: 'icon-zhongbao-mendian',
							}]
						}
						this.buyType = +arr[0].value
					} else if (sjsz.pickupSwitch == 0 && sjsz.takeoutSwitch == 1) {
						this.buyType = 1
					} else if (sjsz.pickupSwitch == 1 && sjsz.takeoutSwitch == 0) {
						this.buyType = 2
					}
				}
				return arr
			},
			// cartNum() {
			// 	return this.cart.reduce((acc, cur) => acc + cur.number, 0)
			// },
			// cartAmount() {
			// 	return this.cart.reduce((acc, cur) => acc + cur.number * cur.price, 0)
			// },
		},
		methods: {
			...mapActions(["getMycar"]),
			async getCheckOut(diningType) {
				let {
					data
				} = await this.util.request({
					'url': this.api.checkout,
					method: 'POST',
					data: {
						diningType,
						storeId: this.sjxx.id,
						notes: this.params.remarks,
						serverTime: this.params.serverTime,
						mobile: this.params.mobile,
						addressId: this.params.addressId,
						couponId: this.params.couponId,
						lat: this.latLng.lat?this.latLng.lat:'',
						lng: this.latLng.lng?this.latLng.lng:'',
					}
				})
				this.cd = data
				this.deliveryMode = data.scene
				this.addressId = data.addressId
				this.orderInfo = utils.deepCopy(data)
			},
			changeDeliveryMode(v) {
				uni.setStorageSync('xdtype', v)
				if (v.value == this.deliveryMode) return
				this.deliveryMode = v.value
				this.yjrV = {}
				this.getCheckOut(v == 1 ? 0 : this.sjxx.storeSetting.defaultType || 1)
			},
			setMobile(m) {
				console.log(m)
				this.params.mobile = m
				this.getCheckOut(this.deliveryMode == 1 ? 0 : this.radioType || this.sjxx.storeSetting.defaultType)
			},
			yjSelect(v) {
				if (v && v.value) {
					this.params.serverTime = v.value
				}else{
					this.params.serverTime = ''
				}
				this.yjrV = v
				this.getCheckOut(this.deliveryMode == 1 ? 0 : this.radioType || this.sjxx.storeSetting.defaultType)
			},
			setNote(v) {
				this.params.remarks = v
				this.getCheckOut(this.deliveryMode == 1 ? 0 : this.radioType || this.sjxx.storeSetting.defaultType)
			},
			radioChange(type) {
				this.radioType = type
				this.getCheckOut(type)
			},
			async savePay() {
			    if(this.cd && this.cd.diningType==3) return this.util.message(this.$t('pay-order.please_select_dining_option'), 3)
				console.log(this.cd)
				if(this.cd.diningType==='1' ||this.cd.diningType===1 ||this.cd.diningType==='2' ||this.cd.diningType===2){
					if (!this.cd.mobile) {
						return this.util.message(this.$t('pay-order.please_enter_contact_number'), 3)
					}
				}
				if (!this.jjmbxx) {
					try {
						await this.requestSM(['pay', 'receive', `${this.deliveryMode==1?'delivery':'takeMeal'}`])
					} catch (e) {
						this.jjmbxx = true
						return
					}
				}
				if (this.orderSetting && this.orderSetting.onShopCheck == 1) {
					this.$refs['CheckShop'].open()
				} else {
					this.pay()
				}
			},
			async pay() {
				if (this.cd.realtimeState==4 && !this.params.serverTime) return this.util.message(this.$t('pay-order.please_select_appointment_time'), 3)
				if (this.deliveryMode == 1) {
					if (!this.addressId) {
						return this.util.message(this.$t('pay-order.please_select_address'), 3)
						// return this.$refs.getaddress.goChoose();
					}
				} else {
					// if (!this.params.mobile) {
					// 	return this.util.message('请输入联系电话', 3)
					// }
				}
				this.loading = true
				if(this.zfForm && this.zfForm.orderSn){
					this.$refs['Pay'].open(
						JSON.stringify({
							orderSn: this.zfForm.orderSn,
							orderType: 1,
							go: {
								t: 6,
								url: "/pages/index/order-index"
							},
						})
					)
				}else{
					let {
						data
					} = await this.util.request({
						'url': this.api['wmxd'],
						method: 'POST',
						ct: 1,
						mask: this.$t('pay-order.placing_order'),
					})
					if (data) {	
						this.zfForm = data
						this.$refs['Pay'].open(
							JSON.stringify({
								orderSn: data.orderSn,
								orderType: 1,
								go: {
									t: 6,
									url: "/pages/index/order-index"
								},
							})
						)
					} else {
						this.loading = false
					}
				}
			},
			selectTime() {
				this.$refs['CheckTime'].open(this.deliveryMode)
			},
			cPay() {
				this.getMycar({
					storeId: this.sjxx.id,
				})
			},
			async getWc() {
				let {
					data
				} = await this.util.request({
					'url': this.api.wc,
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
				// console.log('wc', data)
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