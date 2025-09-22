<template>
	<view class="container">
		<view class="content mt20" v-if="Object.keys(order).length>0">
			<dl-btn :order='order' @op="operation"></dl-btn>
			<consumption-gift :dl="order" v-if="order.payGift"></consumption-gift>
			<dl-discount :order='order'></dl-discount>
			<dl-info :order='order'></dl-info>
			<check-order :dl="order" @spay="savePay" :style="style"></check-order>
		</view>
		<pay ref="Pay" @pay="pay"></pay>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import utils from '@/common/utils.js'
	import dlBtn from './components/o-btn.vue'
	import dlDiscount from './components/o-discount.vue'
	import dlInfo from './components/o-info.vue'
	import Pay from '@/components/pay/pay.vue'
	import ConsumptionGift from '@/components/goods/consumption-gift.vue'
	import CheckOrder from './components/check-order.vue'
	export default {
		components: {
			dlBtn,
			dlDiscount,
			dlInfo,
			Pay,
			ConsumptionGift,
			CheckOrder,
		},
		data() {
			return {
				order: {},
				stime: '',
				swiper: {
					imgUrl: [],
					height: '260',
					circle: '30'
				},
			}
		},
		computed: {
			...mapState({
				copywriting: state => state.layout.copywriting,
				orderSetting: state => state.config.orderSetting,
			}),
		},
		async onLoad(options) {
			this.orderId = options.id
			await this.getInfo()
			this.getConfig({
				ident: ["orderSetting"]
			})
		},
		methods: {
			...mapActions(["getConfig"]),
			async getInfo() {
				let {
					data
				} = await this.util.request({
					url: `${this.api.inOrder}/${this.orderId}`,
					mask: this.$t("detail.loading"),
					data: {
						orderId: this.orderId
					},
				})
				if (data) {
					this.order = data
				}
			},
			async operation(e) {
				switch (e.t) {
					case 'ljzf':
						this.$refs['Pay'].open(
							JSON.stringify({
								orderSn: e.co.orderSn,
								orderType: 1
							})
						)
						break;
					case 'qxdd':
						this.rfddcz(this.$t("detail.are_you_sure_you_want_to_cancel_the_order"), 'qxdd', e.co.id)
						break;
					case 'sqtk':
						this.rfddcz(this.$t("detail.are_you_sure_you_want_to_apply_for_a_refund"), 'sqtk', e.co.id)
						break;
					case 'qrsh':
						this.rfddcz(this.$t("detail.are_you_sure_you_want_to_confirm_receipt"), 'qrsh', e.co.id)
						break;
					case 'zlyd':
						this.go({
							t: 6,
							url: `/pages/index/goods`
						})
						break;
				}
			},
			async rfddcz(t, a, i) {
				await this.util.modal(t)
				let {
					msg
				} = await this.util.request({
					url: `${this.api[a]}/${i}`,
					method: 'POST',
				})
				this.util.message(msg, 1, 1000)
				this.getInfo()
			},
			async savePay() {
				if (!this.jjmbxx) {
					try {
						await this.requestSM(['pay', 'receive', 'takeMeal'])
					} catch (e) {
						this.jjmbxx = true
						return
					}
				}
				this.$refs['Pay'].open(
					JSON.stringify({
						orderSn: this.order.orderSn,
						orderType: 4,
					})
				)
			},
			pay() {
				this.getInfo()
			},
		},
		async onPullDownRefresh() {
			this.showloading = true
			await this.getInfo()
			this.showloading = false
			uni.stopPullDownRefresh();
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 0 20rpx;
		padding-bottom: 60rpx;
		display: flex;
		flex-direction: column;
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.bannel {
			width: 700rpx;
		}
	}
</style>