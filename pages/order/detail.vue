<template>
	<view class="container">
		<uni-nav-bar id='uninavbar' :uropcity="0" :uriconopcity='0' :fixed='false' :ispr='false' :border='false'
			:statusBar="true" :isleft='false' :bg="tColor">
			<view slot='left' class="f-c c0" @click="handReturn">
				<text class="iconfont icon-right c3 f34" :style="{color:fontColor}"></text>
			</view>
			<view class="f-g-1 f-c ml50 wei" :style="{color:fontColor}">{{$t("order-detail.order_details")}}</view>
		</uni-nav-bar>
		<!-- 0已关闭1待支付2已支付待接单3已接单制作中4制作完成待配送5配送中6已完成7申请退款8已退款 -->
		<view class="content" v-if="Object.keys(order).length>0">
			<dl-btn :order='order' @op="operation"></dl-btn>
			<view class="p02">
				<!-- <dl-status :dl='order'></dl-status> -->
				<view class="bs20 mt20 bannel" v-if="swiper && swiper.imgUrl.length">
					<picLunbo-by :co='swiper' u='rpx' :color='tColor'></picLunbo-by>
				</view>
				<consumption-gift :dl="order" v-if="order.payGift"></consumption-gift>
				<dl-discount :order='order' @op="operation"></dl-discount>
				<dl-info :order='order'></dl-info>
				<dl-out-btn :order='order' @op="operation" v-if="order.scene==1 || order.scene==2"></dl-out-btn>
				<dl-in-btn :order='order' @op="operation" v-if="order.scene==3"></dl-in-btn>
				<view class="f24 c9 mt30 f-c" v-if="order.diningType<=3">
					{{$t("order-detail.if_refund_needed")}},{{$t("order-detail.please_call_store")}} <text
						@click="util.makeTel(order.store.storeMobile)">{{order.store.storeMobile}}</text>
				</view>
			</view>
		</view>
		<pay ref="Pay" @pay="pay"></pay>
		<waiter @call="callWaiter"
			v-if="order.diningType==4 && order.store && order.store.inStoreSetting && order.store.inStoreSetting.order.attendant">
		</waiter>
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
	// import dlStatus from './components/o-status.vue'
	import dlDiscount from './components/o-discount.vue'
	import dlInfo from './components/o-info.vue'
	import Pay from '@/components/pay/pay.vue'
	import picLunboBy from '@/components/drag/picLunbo.vue';
	import ConsumptionGift from '@/components/goods/consumption-gift.vue'
	import Waiter from '@/components/pay-order/waiter.vue'
	import dlInBtn from './components/o-in-btn.vue'
	import dlOutBtn from './components/o-out-btn.vue'
	import uniNavBar from "@/components/third/uni-nav-bar.vue"
	export default {
		components: {
			dlBtn,
			// dlStatus,
			dlDiscount,
			dlInfo,
			Pay,
			picLunboBy,
			ConsumptionGift,
			Waiter,
			dlInBtn,
			dlOutBtn,
			uniNavBar,
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
			// materialsText() {
			// 	return materials => {
			// 		let arr = []
			// 		materials.forEach(item => arr.push(item.name))
			// 		return arr.join(',')
			// 	}
			// }
		},
		async onLoad(options) {
			// if(options.info) {
			// 	this.order = JSON.parse(options.info)
			// }
			if (this.fontColor == '#000000' || this.fontColor == '#000') {
				uni.setNavigationBarColor({
					frontColor: '#000000',
				})
			} else {
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#ffffff'
				})
			}
			console.log('options', options)
			await this.getLoginInfo()
			// if (!await this.checkLogin()) return
			if (options && options.id) {
				this.orderId = options.id
			} else if ((options.q && decodeURIComponent(options.q).indexOf('orderId') > -1)) {
				let q = decodeURIComponent(options.q)
				this.orderId = utils.getUrlParams(q)['orderId']
			} else if ((options.q && decodeURIComponent(options.q).indexOf('id') > -1)) {
				let q = decodeURIComponent(options.q)
				this.orderId = utils.getUrlParams(q)['id']
			}
			await this.getInfo()
			this.getLayout()
			this.gAd()
			this.getConfig({
				ident: ["orderSetting"]
			})
		},
		onShow() {
			if (this.orderId) {
				this.getInfo()
			}
		},
		methods: {
			...mapActions(["getConfig"]),
			async getInfo() {
				let {
					data
				} = await this.util.request({
					'url': `${this.api.wmxd}/${this.orderId}`,
					mask: this.$t("order-detail.loading"),
					data: {
						orderId: this.orderId
					},
				})
				if (data) {
					this.order = data.subOrder

					//order.discountsPlus
					if (this.order.discountsPlus && this.order.discountsPlus.length > 0) {
						// 计算所有优惠的总金额，将 money 转换为浮点数
						let totalDiscount = this.order.discountsPlus.reduce((sum, discount) => {
							return sum + parseFloat(discount.money); // 使用 parseFloat 将字符串转换为浮点数
						}, 0);

						console.log(totalDiscount);
						console.log(this.order.discountMoney);

						// 判断总优惠金额是否大于 discountMoney
						if (totalDiscount > this.order.discountMoney) {
							console.log('12');
							let difference = totalDiscount - this.order.discountMoney;

							// 从 discountsPlus 的末尾开始查找可以承担差额的活动
							for (let i = this.order.discountsPlus.length - 1; i >= 0; i--) {
								let currentDiscount = parseFloat(this.order.discountsPlus[i].money);

								// 如果当前的优惠金额足够减去差额
								if (currentDiscount >= difference) {
									this.order.discountsPlus[i].money = currentDiscount - difference;
									break; // 找到一个足够的活动后，停止循环
								}
							}
						}
					}

				}
			},
			async gAd() {
				let {
					data
				} = await this.util.request({
					'url': this.api.gglb,
					data: {
						location: 4
					}
				})
				if (data) {
					for (let k in data.banner) {
						data.banner[k].url = data.banner[k].link
					}
					this.swiper = {
						imgUrl: data.banner ? data.banner : [],
						height: '260',
						circle: '30'
					}
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
						this.rfddcz(this.$t("order-detail.confirm_cancel_order"), 'qxdd', e.co.id)
						break;
					case 'sqtk':
						await this.util.modal(this.$t("order-detail.confirm_apply_refund"))
						this.go({
							t: 1,
							url: `/pages/order/refunddl?id=${e.co.orderSn}&type=1`
						})
						// this.rfddcz('您确定申请退款吗', 'sqtk', e.co.id)
						break;
					case 'qrsh':
						this.rfddcz(this.$t("order-detail.confirm_receipt"), 'qrsh', e.co.id)
						break;
					case 'insqxdd':
						this.rfddcz(this.$t("order-detail.confirm_cancel_order"), 'insqxdd', e.co.id)
						break;
					case 'insqtk':
						this.rfddcz(this.$t("order-detail.confirm_apply_refund"), 'insqtk', e.co.orderSn)
						break;
					case 'inwcdd':
						this.rfddcz(this.$t("order-detail.confirm_complete_order"), 'inwcdd', e.co.orderSn)
						break;
					case 'zlyd':
						this.go({
							t: 6,
							url: `/pages/index/goods`
						})
					case 'jc':
						this.go({
							t: 2,
							url: `/pages/shop/in/goods?tableId=${e.co.table.id}&addgood=1`
						})
						break;
				}
			},
			openpay() {
				console.log('12')
				this.go({
					t: 1,
					url: `/pages/order/promptpay`
				})
			},
			async rfddcz(t, a, i) {
				await this.util.modal(t)
				let {
					msg
				} = await this.util.request({
					'url': `${this.api[a]}/${i}`,
					method: 'POST',
				})
				this.util.message(msg, 1, 1000)
				this.getInfo()
			},
			pay() {
				this.getInfo()
			},
			async callWaiter() {
				await this.util.modal(this.$t("order-detail.confirm_call_waiter"))
				let {
					data
				} = await this.util.request({
					url: `${this.api.call}/${this.order.table.id}`
				})
				this.util.message(data, 3, 2000)
			},
			handReturn() {
				this.go({
					t: 5,
					url: `/pages/index/index`
				})
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
		padding-bottom: 180rpx;
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

	.order-invoice {
		padding: 30rpx 40rpx;
		border-radius: 30rpx;
		box-shadow: 0 0 10rpx 0 rgba($color: #333, $alpha: 0.1);
		margin-bottom: 60rpx;
		background-color: #F6F6F6;
	}

	.icon-right {
		transform: rotateZ(180deg);
	}
</style>