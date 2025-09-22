<template>
	<view class="container">
		<view class="qr-container">
			<image :src="imagesrc" style="width: 236px; height: 236px;">
			</image>
		</view>
		<view class="payment-info">
			<text class="amount">{{$t("promptpay.payment_info")}}: ฿{{order.money}}</text>
			<text class="time-left" style="display: none;">
				{{$t("promptpay.time_left")}}: {{ minutes }} {{$t("promptpay.minutes")}} {{ seconds }}
				{{$t("promptpay.seconds")}}
			</text>

		</view>
		<view class="instructions">
			<text>{{$t("promptpay.scan_to_pay")}}</text>
			<text>{{$t("promptpay.auto_redirect")}}</text>
		</view>
		<view class="warning">
			<text>{{$t("promptpay.note")}}</text>
		</view>
	</view>

</template>


<script>
	import utils from '@/common/utils.js'
	import api from '@/common/api'
	export default {
		data() {
			return {
				order: {},
				imagesrc: '',
				orderSn: '',
				orderType: 0,
				payId: 0,
				timer: null,
				checkPaymentTimer: null,
				totalTime: 10 * 60 + 27, // 总时间为7分27秒
			}
		},
		onLoad(options) {
			if (options && options.orderSn) {
				this.orderSn = options.orderSn
			}
			if (options && options.orderType) {
				this.orderType = options.orderType
			}
			if (options && options.payId) {
				this.payId = options.payId
			}
			console.log('1212', this.orderSn)
			if (this.orderSn) {
				this.getorder()
				this.promptpay()
			}
		},
		computed: {
			minutes() {
				return Math.floor(this.totalTime / 60);
			},
			seconds() {
				return this.totalTime % 60;
			}
		},
		onShow() {
			this.startCountdown();
			this.startCheckPayment();
		},
		onHide() {
			this.clearCountdown();
			this.clearCheckPayment();
		},
		onUnload() {
			this.clearCountdown();
			this.clearCheckPayment();
		},
		methods: {
			startCountdown() {
				this.timer = setInterval(() => {
					if (this.totalTime > 0) {
						this.totalTime--;
					} else {
						this.cancelOrder();
					}
				}, 1000);
			},
			clearCountdown() {
				if (this.timer) {
					clearInterval(this.timer);
					this.timer = null;
				}
			},
			cancelOrder() {
				this.clearCountdown();
				// 取消订单的逻辑
				// 例如，发送请求到服务器端API取消订单或更新界面
				console.log('订单已取消');
			},
			promptpay() {
				if (this.orderSn) {
					var payObj = {
						orderSn: this.orderSn,
						orderType: this.orderType,
						payId: this.payId
					}
					this.util.request({
						url: this.api.orderPay,
						method: 'POST',
						mask: 1,
						data: payObj,
					}).then(res => {
						if (res) {
							console.log(res)
							if (!res.data.imgdat) {
								this.go({
									t: 6,
									url: "/pages/index/order-index"
								})
							}
							this.imagesrc = res.data.imgdat
						}
					})
				}
			},
			startCheckPayment() {
				this.checkPaymentTimer = setInterval(() => {
					// 实时查询支付订单的逻辑
					this.checkPaymentStatus();
				}, 3000); // 每3秒查询一次
			},
			clearCheckPayment() {
				if (this.checkPaymentTimer) {
					clearInterval(this.checkPaymentTimer);
					this.checkPaymentTimer = null;
				}
			},
			getorder() {
				this.util.request({
					url: `${this.api.pay}/${this.orderSn}`
				}).then(res => {
					console.log(res)
					if (res) {
						this.order = res.data
						console.log(this.order)
					}
				})
			},

			checkPaymentStatus() {
				this.util.request({
					url: `${this.api.pQuery}/${this.orderSn}`
				}).then(res => {
					console.log('1212', res)
					//
					if (res) {
						if (res && res.data.state >= 2) {
							//this.go({t: 6,url: `/pages/index/order-index`})
							this.go({
								t: 6,
								url: "/pages/index/order-index"
							})
						}
					}
				})
			},
		},
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		font-family: 'Arial', sans-serif;
		padding: 16px;
		width: 100%;
		box-sizing: border-box;
		/* 确保内边距不会增加总宽度 */

		/* 添加底部圆角 */
		border-bottom-left-radius: 20px;
		/* 左下角圆角半径 */
		border-bottom-right-radius: 20px;
		/* 右下角圆角半径 */

		/* 根据需要添加其他样式，如背景颜色等 */
		background-color: #fff;
		/* 举例：白色背景 */
		/* 添加阴影效果提升层次感（可选） */
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}


	/* 标题样式 */
	.title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 32px;
	}

	/* QR码样式 */
	.qr-container {
		width: 60%;
		/* 根据实际需求调整 */
		margin-bottom: 24px;
	}

	/* 支付信息样式 */
	.payment-info {
		text-align: center;
		margin-bottom: 16px;
	}

	.amount {
		font-size: 20px;
		font-weight: bold;
		color: #000;
		margin-bottom: 8px;
	}

	.time-left {
		font-size: 16px;
		color: #555;
	}

	/* 说明文本样式 */
	.instructions {
		font-size: 14px;
		color: #666;
		text-align: center;
		margin-bottom: 24px;
	}

	/* 警告信息样式 */
	.warning {
		font-size: 14px;
		color: red;
		text-align: center;
	}
</style>