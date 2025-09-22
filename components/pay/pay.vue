<template>
	<uni-popup ref="popup" type="bottom">
		<view class="bs30 bf">
			<view class="tit p-r f-c">
				<view class="f32 wei">{{$t("pay.confirm_payment")}}</view>
				<text class="p-a cIcon iconfont icon-guanbi c6 f36" @click="close"></text>
			</view>
			<view class="p3">
				<form @submit="formSubmit">
					<view class="payOptions">
						<radio-group name='radiogroup' @change="radioChange">
							<label class="weui-cell right30 f-s mb30 bf" v-for='(v,i) in payArr' :key='i'>
								<view class="f-y-c">
									<image class='hdimg' mode='aspectFit' :src='v.img'></image>
								</view>
								<view class="weui-cell__bd">
									<view class="f-row">
										<view class="f34 f-1 l-n">{{v.name}}
											<text class="c9 f24 ml10 neutra-font"
												v-if="v.value=='ye'">({{$t("pay.available")}}:฿{{parseFloat(v.balance)}})</text>
										</view>
										<view class="weui-cell__ft_in-radio">
											<!-- <text class="iconfont f40" :class="v.value == radioVal?'icon-gx':'icon-wgx'"
												:style="{color:v.value == radioVal?v.color||tColor:''}"></text> -->
											<view class="yuan f-c"
												:style="{backgroundColor:v.value == radioVal?v.color||tColor:'',borderColor:v.value == radioVal?v.color||tColor:''}">
												<text class="iconfont f20 icon-gou wei" v-if="v.value == radioVal"
													:style="{color:v.value == radioVal?fontColor:''}"></text>
											</view>
											<radio :value="v.value" color="#F98811" :checked="v.value == radioVal"
												class="weui-check" />
										</view>
									</view>
								</view>
							</label>
						</radio-group>
					</view>
					<view v-if="payArr.length" class="">
						<button :style="{backgroundColor:tColor,color:fontColor}" :disabled="loading" :loading="loading"
							form-type="submit" class="foot-btn bs60 f30 wei cf">{{$t("pay.pay")}}<text
								class="neutra-font ml10">{{pmoney}}</text>THB</button>
					</view>
				</form>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	// import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import utils from '@/common/utils.js'
	import api from '@/common/api'
	import {
		chooseAliPay
	} from "@/common/wechat-util"
	export default {
		name: 'payMoney',
		components: {

		},
		props: {
			visible: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				loading: false,
				radioVal: 'ye',
				payArr: [],
				payObj: {},
				payDataObj: {},
				yeczrule: [],
			}
		},
		computed: {
			pmoney() {
				return Number(this.payDataObj && this.payDataObj.money || 0).toFixed(2)
			},
		},
		methods: {
			async open(payObj) {
				this.gUser()
				this.payObj = JSON.parse(payObj)
				await this.getPayArr()
				if (this.payDataObj && this.payDataObj.money <= 0) {
					this.formSubmit('zero')
					return
				}
				uni.getProvider({
					service: 'payment',
					success: (res) => {
						if (res.provider.indexOf('wxpay')) {
							this.provider = 'wxpay'
						} else if (res.provider.indexOf('alipay')) {
							this.provider = 'alipay'
						} else if (res.provider.indexOf('baidu')) {
							this.provider = 'baidu'
						} else if (res.provider.indexOf('toutiao')) {
							this.provider = 'toutiao'
						}
					}
				});
				this.$refs['popup'].open()
			},
			async czOpen(payObj) {
				this.gUser()
				this.payObj = JSON.parse(payObj)
				let {
					data
				} = await this.util.request({
					'url': `${this.api.pay}/${this.payObj.orderSn}`,
					method: 'get',
					mask: 1
				})
				this.payDataObj = data
				this.payObj.payId = data.payList && data.payList[0].id
				this.formSubmit('cz')
			},
			async jfOpen(payObj, pay) {
				this.gUser()
				this.payObj = JSON.parse(payObj)
				this.payDataObj = JSON.parse(pay)
				let payArr = [],
					data = JSON.parse(pay)
				for (let i = 0; i < data.payList.length; i++) {
					if (data.payList[i].payType == 'balance') {
						this.payObj.payId = data.payList[i].id
						payArr.push({
							name: this.$t("pay.balance_payment"),
							value: 'ye',
							img: `${this.onImgurl}pay/yezf.png`,
							isDefault: data.payList[i].isDefault,
							id: data.payList[i].id,
							balance: data.payList[i].balance,
						})
					}
					if (data.payList[i].payType == 'weixin') {
						this.payObj.payId = data.payList[i].id
						payArr.push({
							name: this.$t("pay.wechat_payment"),
							value: 'wx',
							img: `${this.onImgurl}pay/wxzf.png`,
							isDefault: data.payList[i].isDefault,
							id: data.payList[i].id,
						})
					}
					if (data.payList[i].payType == 'alipay') {
						this.payObj.payId = data.payList[i].id
						payArr.push({
							name: this.$t("pay.alipay_payment"),
							value: 'zfb',
							img: `${this.onImgurl}pay/zfbzf.png`,
							isDefault: data.payList[i].isDefault,
							id: data.payList[i].id,
						})
					}

					if (data.payList[i].payType == 'ksher') {
						this.payObj.payId = data.payList[i].id
						payArr.push({
							name: 'ksher',
							value: 'ksher',
							img: `${this.onImgurl}pay/wxzf.png`,
							isDefault: data.payList[i].isDefault,
							id: data.payList[i].id,
						})
					}
				}
				this.payArr = payArr
				console.log(payArr)
				return
				this.radioChange({
					detail: {
						value: payArr.find(v => v.isDefault == 1).value
					}
				})
				uni.getProvider({
					service: 'payment',
					success: (res) => {
						if (res.provider.indexOf('wxpay')) {
							this.provider = 'wxpay'
						} else if (res.provider.indexOf('alipay')) {
							this.provider = 'alipay'
						} else if (res.provider.indexOf('baidu')) {
							this.provider = 'baidu'
						} else if (res.provider.indexOf('toutiao')) {
							this.provider = 'toutiao'
						}
					}
				});
				this.$refs['popup'].open()
			},
			close() {
				this.$emit('pay')
				this.loading = false
				this.$refs['popup'].close()
			},
			radioChange(e) {
				this.radioVal = e.detail.value
				let item = this.payArr.find(v => v.value == e.detail.value)
				this.payObj.payId = item.id
			},
			async getPayArr() {
				let {
					data
				} = await this.util.request({
					'url': `${this.api.pay}/${this.payObj.orderSn}`,
					method: 'get',
					mask: 1
				})
				this.payDataObj = data
				if (this.payDataObj && this.payDataObj.money <= 0) return
				let payArr = []
				for (let i = 0; i < data.payList.length; i++) {
					if (data.payList[i].payType == 'balance') {
						this.payObj.payId = data.payList[i].id
						payArr.push({
							name: this.$t("pay.balance_payment"),
							value: 'ye',
							img: `${this.onImgurl}pay/yezf.png`,
							isDefault: data.payList[i].isDefault,
							id: data.payList[i].id,
							balance: data.payList[i].balance,
						})
					}
					if (data.payList[i].payType == 'weixin') {
						this.payObj.payId = data.payList[i].id
						payArr.push({
							name: this.$t("pay.wechat_payment"),
							value: 'wx',
							img: `${this.onImgurl}pay/wxzf.png`,
							isDefault: data.payList[i].isDefault,
							id: data.payList[i].id,
						})
					}
					if (data.payList[i].payType == 'alipay') {
						this.payObj.payId = data.payList[i].id
						payArr.push({
							name: this.$t("pay.alipay_payment"),
							value: 'zfb',
							img: `${this.onImgurl}pay/zfbzf.png`,
							isDefault: data.payList[i].isDefault,
							id: data.payList[i].id,
						})
					}
					if (data.payList[i].payType == 'ksher') {
						this.payObj.payId = data.payList[i].id
						// #ifdef MP-WEIXIN
							payArr.push({
								name: 'promptpay',
								value: 'promptpay',
								img: `${this.onImgurl}pay/promptpay.png`,
								isDefault: data.payList[i].isDefault,
								id: data.payList[i].id,
							})
					   // #endif
					   // #ifndef MP-WEIXIN
							payArr.push({
								name: 'ksher',
								value: 'ksher',
								img: `${this.onImgurl}pay/ksher.png`,
								isDefault: data.payList[i].isDefault,
								id: data.payList[i].id,
							})
					   // #endif
					}
				}
				this.payArr = payArr

				this.radioChange({
					detail: {
						value: payArr.find(v => v.isDefault == 1).value
					}
				})
			},
			async formSubmit(e) {
			 
				// #ifdef MP-WEIXIN
					var orderSn=this.payObj.orderSn
					var orderType=this.payObj.orderType
					var payId=this.payObj.payId
					this.go({
						t: 1,
						url: `/pages/order/promptpay?orderSn=${orderSn}&orderType=${orderType}&payId=${payId}`
					})
				// #endif
				// #ifdef  H5
				if (this.payObj && this.payObj.orderType == 'jfsc') {
					await this.util.request({
						url: this.api.jfsplb,
						method: 'POST',
						ct: 1,
					})
					await this.$emit('zfPay')
				}
				let payObj = this.payObj = utils.deepCopy(this.payObj)
				this.loading = true
				let payres = await this.util.request({
					'url': this.api.orderPay,
					method: 'POST',
					mask: 1,
					data: payObj,
				})
				if (payres) {
					//console.log(payres.data.pay_content)
					if (e.detail && e.detail.value.radiogroup != 'ye' || e == 'cz') {
						console.log('112')
						if (payres.data) {
							console.log(payres.data.pay_content)
							window.location = payres.data.pay_content
						}
					} else {
						this.util.message(payres.msg, payres.data ? 1 : 2)
						this.ctx()
						this.close()
					}
				} else {
					this.loading = false;
					// this.close()
					// setTimeout(() => {
					// 	this.go({
					// 		t: 4
					// 	})
					// }, 900)
				}
				// #endif
			},
			ctx() {
				setTimeout(() => {
					this.go({
						t: this.payObj.go && this.payObj.go.t,
						url: this.payObj.go && this.payObj.go.url
					})
				}, 500)
			},
			gUser() {
				if (this.uId) {
					this.refreshUser({
						nomask: 1,
						get: 1,
						now: 1,
					})
				}
			},
			async cPay(cp) {
				let {
					data
				} = await this.util.request({
					url: `${this.api.pQuery}/${this.payObj.orderSn}`
				})
				console.log('data', data)
				if (data && data.state >= 2) {
					this.util.message('支付成功', 1)
					this.ctx()
					this.close()
				} else {
					this.util.message('支付失败', 3)
					this.close()
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.tit {
		background: #F2F0F3;
		height: 100rpx;

		.cIcon {
			top: 26rpx;
			right: 30rpx;
		}
	}

	.weui-cell {
		padding: 40rpx 35rpx 40rpx;
		border-radius: 20rpx;
	}

	.weui-cell-hover {
		border: 2rpx solid #F98811;
		background: linear-gradient(180deg, #FBF4E2, #F9EED8);
		color: #333;
	}

	.weui-cell:last-child:after {
		display: block;
	}

	.weui-cell__bd {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}

	.weui-cell:after {
		left: 112rpx;
	}

	.hdimg {
		width: 49rpx;
		height: 49rpx;
		margin-right: 30rpx;
	}

	.right30::after {
		right: 30rpx;
	}

	.foot-btn {
		background: $bg-primary;
	}

	.yuan {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		border: 2rpx solid #ccc;
		z-index: 10;
	}
</style>