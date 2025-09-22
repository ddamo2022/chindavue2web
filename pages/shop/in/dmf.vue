<template>
	<view class="index p10">
		<block v-if="storeInfo && storeInfo.id">
			<view class="f-bt p3 f-y-c" @click="goSelect">
				<view>
					<view class="c9">{{$t("dmf.pay_to_merchant")}}</view>
					<view class="wei mt5 f30">{{$t("dmf.name")}}：{{storeInfo.name}}</view>
				</view>
				<view><text class='iconfont icon-youjiantou f32 ml5 c0'></text></view>
			</view>
			<view class="bf mdbd p3">
				<view class="c9 f-x-bt">
					<text>{{$t("dmf.amount")}}</text>
				</view>
				<view class="p20 b-b-e f-row" style="align-items: flex-start;" @click="open">
					<text class="mr20 f56 wei" style="margin-top: -6rpx;">฿</text>
					<view class="mninput">
						<text v-if="money" class="neutra-font">{{money}}<text class="cursor"><text
									class="line"></text></text></text>
						<text class="wsr" v-else><text class="cursor"><text
									class="line"></text></text>{{$t("dmf.enter_amount")}}</text>
					</view>
				</view>
				<discounts :dl="orderInfo" :pl="params" @handCoupon="selectCop" v-if="money"></discounts>
				<view class="f-x-e f-y-c mt20 neutra-font" v-if="money && orderInfo.discountMoney>0">
					<view class="f28 mr20" v-if="orderInfo.discountMoney">{{$t("dmf.total_discount")}} <text
							class="cfa">฿{{orderInfo.discountMoney}}</text></view>
					<view class="mr10">{{$t("dmf.actual_payment")}}:</view>
					<view class="wei f38">฿{{orderInfo.money}}</view>
				</view>
				<view v-if="params.remarks" class="mt20 f26">
					{{$t("dmf.remark")}}：{{params.remarks}} <span class="ml10 curs" :style="{color:tColor}"
						@click="addNote">{{$t("dmf.modify")}}</span>
				</view>
				<view v-else class="c9 mt10 f26" @click="addNote"> {{$t("dmf.add_remark")}}</view>
			</view>
		</block>
		<cuKeyboard ref="cukeyboard" :confirmBtn="tColor" @change="change" @confirm="confirm"></cuKeyboard>
		<sq-btn type="1" ref="sqBtn" @rf="init"></sq-btn>
		<pay ref="Pay" @pay="init"></pay>
		<notes ref="Notes" @st="setNote"></notes>
		<view v-if="isIpx" class='bgf z0'></view>
		<userPrivacy ref="privacy"></userPrivacy>
		<sCoupon ref="sCouponRef" @change="sChangeClose" @payorder="payorder"></sCoupon>
	</view>
</template>

<script>
	import cuKeyboard from '@/components/cu-keyboard/cu-keyboard.vue'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import utils from '@/common/utils.js'
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import sqBtn from '@/components/common/sq-btn.vue'
	import Pay from '@/components/pay/pay.vue'
	import notes from './components/notes.vue'
	import userPrivacy from "@/components/user/userPrivacy.vue";
	import sCoupon from './dmf/sCoupon.vue'
	import Discounts from './dmf//discounts.vue'
	export default {
		components: {
			cuKeyboard,
			sqBtn,
			Pay,
			notes,
			userPrivacy,
			sCoupon,
			Discounts,
		},
		data() {
			return {
				value: '',
				activeNum: 1,
				isInputFocus: false,
				show: false,
				phone: '',

				money: '',
				params: {
					money: '',
					storeId: '',
					remarks: '',
					couponId: 0,
				},
				storeInfo: {},
				orderInfo: {},
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
		async onLoad(options) {
			console.log('options', options)
			this.util.setNT(this.$t("dmf.pay_bill"))
			this.params.storeId = utils.getOptions(options, {
				key: 'storeId',
				q1: options.storeId,
			})
			await this.getLoginInfo()
			
		    if (!await this.checkLogin()) return

			this.init()
			this.open()
		},
		mixins: [utilMixins],
		onShow() {
			if (uni.getStorageSync('rStoreInfo')) {
				this.storeInfo = uni.getStorageSync('rStoreInfo')
				this.params.storeId = this.storeInfo.id
				this.load(this.storeInfo.id)
			}
		},
		computed: {
			...mapState({
				payCig: state => state.config.personPayOrderConfig,
			}),
		},
		methods: {
			...mapActions(["getConfig"]),
			async load(sid) {
				if (sid) {
					uni.removeStorageSync('rStoreInfo')
					this.init()
				}
			},
			async init() {
				let {
					data
				} = await this.util.request({
					'url': `${this.api.mdxx}/${this.params.storeId}`,
				})
				this.storeInfo = data.store
				this.getConfig({
					ident: ["personPayOrderConfig"]
				})
				this.getCheckOut()
			},
			async getCheckOut() {
				let {
					data
				} = await this.util.request({
					'url': this.api.ppcheckout,
					data: {
						storeId: this.params.storeId,
						couponId: this.params.couponId,
						money: this.money,
					}
				})
				this.orderInfo = utils.deepCopy(data)
			},
			change(e) {
				this.money = e;
				console.log("e", this.money, e)
				this.getCheckOut()
			},
			open() {
				this.$refs.cukeyboard.open();
			},
			setNote(v) {
				this.params.remarks = v
			},
			async confirm(e) {
				if (this.payCig && this.payCig.loginSwitch == 1 && !this.isLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				if (!this.money) {
					return this.util.message(this.$t("dmf.please_enter_amount"), 3)
				}
				this.params.money = this.money
				this.loading = true
				this.$refs.cukeyboard.close()
				let {
					data
				} = await this.util.request({
					url: this.api.mdxx,
					method: 'POST',
					ct: 1,
					mask: this.$t("dmf.ordering"),
					data: this.params,
				})
				if (data) {
					if (data && this.payCig && this.payCig.balanceSwitch == 2) {
						this.$refs['Pay'].czOpen(
							JSON.stringify({
								orderSn: data.orderSn,
								orderType: 3,
								go: {
									t: 6,
									url: "/pages/index/order-index"
								},
							})
						)
					} else {
						this.$refs['Pay'].open(
							JSON.stringify({
								orderSn: data.orderSn,
								orderType: 3,
								go: {
									t: 6,
									url: "/pages/index/order-index"
								},
							})
						)
					}
				} else {
					this.loading = false
					this.getCheckOut()
				}
			},
			goSelect() {
				uni.navigateTo({
					url: '/pages/shop/select/index?page=recharge'
				})
			},
			addNote() {
				this.$refs['Notes'].open(this.params.notes)
			},
			selectCop(i) {
				this.$refs['sCouponRef'].open(i)
			},
			sChangeClose() {

			},
			payorder(e) {
				this.params.couponId = e ? e.id : 0
				this.getCheckOut()
				this.$refs['sCouponRef'].close()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.index {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.mdbd {
		border-radius: 40rpx 40rpx 0 0;
	}

	.mninput {
		font-size: 70rpx;
		height: 2.9rem;
		line-height: 2.9rem;
		caret-color: #17E883;
		min-width: 0;
		flex-grow: 1;
		flex-shrink: 1;
		font-weight: bold;
		color: #000;

		.wsr {
			font-size: 45rpx;
			font-weight: normal;
			line-height: normal;
			color: #E6E6E6;
		}
	}


	@keyframes cursor-blinks {
		0% {
			opacity: 1;
			display: block;
		}

		50% {
			opacity: 0;
			display: none;
		}

		100% {
			opacity: 1;
			display: block;
		}
	}

	.cursor {
		width: 0;
		overflow: visible;
		position: relative;
	}

	.line {
		position: absolute;
		width: 2px;
		height: 90%;
		background-color: #49c265;
		left: 0;
		top: 50%;
		transform: translate(0, -50%);
		animation: cursor-blinks 1.5s infinite steps(1, start);
	}

	.z0 {
		z-index: 0;
	}
</style>