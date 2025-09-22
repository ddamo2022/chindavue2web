<template>
	<view class="wrapper">
		<view class="order-list">
			<view class="order" @click="goDl(co)">
				<view class="header f-bt">
					<view class="flex-fill f30 wei flex f-g-1 f-y-c">
						<view class="l-s mr10 f-nw f-g-0 f-c" :style="{color:tColor,borderColor:tColor}" v-if="co.diningTypeFormat">
							{{co.diningTypeFormat}}</view>
						<view class="t-o-e">{{ co.store.name }}</view>
					</view>
					<view class="status f-g-0">
						<view class="c3" :style="{color: tColor}">
							{{co.stateFormat}}
						</view>
						<view class="mr10 ml10" v-if="co.state==1" :style="{color: tColor}">{{stime}}</view>
					</view>
				</view>
				<view class="flex mt10">
					<view class="f24 c9">{{co.created_at}}</view>
				</view>
				<block v-if="co.goods && co.goods.length">
					<view class="f-bt goods mt20">
						<block v-if="co.goods.length==1">
							<view class="f-g-1 mr10 f-bt" v-for="(v, i) in co.goods" :key="i">
								<view class="f-g-0 images mr10">
									<image :src="v.logo" class="bs10" mode="aspectFill"></image>
								</view>
								<view class="f-g-1 f24">
									<view class="c3 t-o-e">{{v | localizedName}}</view>
									<view class="c9 t-o-e">
										<text v-if="v.attrData.spec">{{v.attrData.spec}}</text>
										<text v-if="v.attrData.attr">{{v.attrData.attr}}</text>
										<text v-if="v.attrData.matal">{{v.attrData.matal}}</text>
									</view>
									<view class="c9" v-if="v.setMealData && v.setMealData.length">
										<view v-for="(cv,ci) in v.setMealData" :key="ci">{{cv.name}}*{{cv.num}}
											<text v-if="cv.attrData && cv.attrData.attr" class="ml10">[{{ cv.attrData.attr }}]</text>
											<text v-if="cv.attrData && cv.attrData.matal" class="ml10">[{{ cv.attrData.matal }}]</text>
										</view>
									</view>
								</view>
							</view>
						</block>
						<block v-else>
							<scroll-view scroll-x class="f-g-1">
								<view class="flex">
									<view v-for="(v, i) in co.goods" :key="i" class="imgb mr15">
										<view class="f-g-0 images">
											<image :src="v.logo" class="bs10" mode="aspectFill"></image>
										</view>
										<view class="c3 t-o-e">{{v | localizedName}}</view>
									</view>
								</view>
							</scroll-view>
						</block>
						<view class="f-g-0 t-r neutra-font">
							<view class="f30 wei">฿{{co.money}}</view>
							<view class="f24 c9">{{$t("order-list.total")}}{{co.goodsNum}}{{$t("order-list.pieces")}}</view>
						</view>
					</view>
				</block>
				<blick v-else-if="v.type==3 || v.type==2 || v.type==6">
					<view class="f-bt mt20">
						<view>{{$t("order-list.amount")}}</view>
						<view class="f30 wei neutra-font">฿{{co.money}}</view>
					</view>
				</blick>
				<view class="number bs20 flex f-y-c mt20"
					v-if="co.state>2 && co.state<6 && co.diningType==1 || co.diningType==2">
					<view class="c9 mr30">{{$t("order-list.order_number")}}</view>
					<view class="wei f34 neutra-font">{{co.pickNo}}</view>
				</view>
				<view class="action mt20" v-if="co.diningType==1 || co.diningType==2">
					<button type="default" hover-class="none" class="bs30" v-if="co.state==1"
						@click.stop="$emit('operation',{t:'qxdd',co})">{{$t("order-list.cancel_order")}}</button>
					<button type="primary" hover-class="none" class="bs30"
						:style="{backgroundColor:tColor,height:'64rpx',color:fontColor}" v-if="co.state==1"
						@click.stop="$emit('operation',{t:'ljzf',co})">{{$t("order-list.pay_now")}}</button>
					<button type="default" hover-class="none" class="bs30" v-if="v.type!=3 && v.type!=4 && orderSetting.onUserAllowRefunds==1 && co.state==2"
						@click.stop="$emit('operation',{t:'sqtk',co})">{{$t("order-list.apply_for_refund")}}</button>
					<button type="default" hover-class="none" class="bs30" v-if="co.state==3"
						@click.stop="$emit('operation',{t:'zlyd',co})">{{$t("order-list.order_again")}}</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import utils from '@/common/utils.js'
	import i18n from  '@/locale/index.js'
	export default {
		components: {

		},
		mixins: [utilMixins],
		props: {
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
			v: {
				type: Object,
				default: function() {
					return {}
				}
			},
		},
		filters: {
			localizedName(value) {
				//console.log(value)
				const locale = i18n.locale; // 获取当前语言
				if (locale === 'en') {
					return value.name_en || value.name;
				} else if (locale === 'th') {
					return value.name_th || value.name;
				} else {
					return value.name;
				}
			}
		},
		computed: {
			...mapState({
				copywriting: state => state.layout.copywriting,
				orderSetting: state => state.config.orderSetting,
			}),
		},
		data() {
			return {
				notices: [],
				showShop: false,
				stime: '',
			}
		},
		methods: {
			goDl(v) {
				this.go({
					t: 1,
					url: '/pages/order/detail?id=' + v.orderSn
				})
			},
			stateFor(v) {
				let state = ''
				switch (v.state) {
					case 0:
						state =this.$t("order-list.closed")
						break;
					case 1:
						state =this.$t("order-list.pending_payment")
						break;
					case 2:
						state = v.scene == 2 ? this.$t("order-list.paid") : this.$t("order-list.order_pending")
						break;
					case 3:
						state = v.scene == 2 ?this.$t("order-list.in_production")  :this.$t("order-list.order_accepted") 
						break;
					case 4:
						state = v.scene == 2 ?this.$t("order-list.production_completed"): this.$t("order-list.pending_delivery") 
						break;
					case 5:
						state = v.scene == 2 ? '' : this.$t("order-list.in_delivery")
						break;
					case 6:
						state = v.scene == 2 ? '' : this.$t("order-list.completed")
						break;
					case 7:
						state = this.$t("order-list.apply_for_refund") 
						break;
					case 8:
						state =this.$t("order-list.refunded") 
						break;
				}
				return state
			},
			djs() {
				if (this.co.state == 1 && this.co.expiredTime) {
					let now = this.dateToTime(),
						time2 = this.dateToTime(this.co.expiredTime)
					if (time2 > now) {
						let a = utils.countDownTime(time2 - now)
						this.stime = `${this.$t("order-list.remaining") } ${a[2]}:${a[3]}${this.$t("order-list.minutes") }`
						this.dsq = setInterval(async () => {
							time2 -= 1
							if (time2 == now) {
								clearInterval(this.dsq)
								// this.$emit('operation', {
								// 	t: 'ddqx',
								// 	co: this.co
								// })
							}
							let arr = utils.countDownTime(time2 - now)
							this.stime = `${this.$t("order-list.remaining") }  ${arr[2]}:${arr[3]}${this.$t("order-list.minutes") }`
						}, 1000)
					}
				}
			},
		},
		async created() {
			this.djs()
		},
		destroyed() {
			clearInterval(this.dsq)
		},
	}
</script>

<style scoped lang="scss">
	@import './order.scss';

	.orders-scroll {
		padding-top: 20rpx;
	}

	.l-p {
		padding: 3rpx 8rpx;
		font-size: 24rpx;
		border-radius: 4rpx;
		background: $color-primary;
		color: #fff;
	}

	.l-s {
		padding: 3rpx 8rpx;
		height: 40rpx;
		font-size: 22rpx;
		border-radius: 4rpx;
		border: 2rpx solid $color-primary;
		color: $color-primary;
	}

	.number {
		background: #F6F6F6;
		padding: 30rpx 20rpx;
	}
</style>