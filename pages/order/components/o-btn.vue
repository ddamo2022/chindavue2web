<template>
	<view>
		<view class="btnState" :style="{background:tColor}">
			<view class="f40 wei p2 zt t-l">
				<view :style="{color:fontColor}">{{order.stateFormat}}</view>
				<block v-if="order.scene==3">
					<block v-if="order.diningType == 4">
						<view :style="{color:fontColor}" class="f28 c9" v-if="order.state == 2 && !order.prentOrderSn">{{$t("o-btn.please_wait")}}，{{$t("o-btn.waiting_for_waiter")}}</view>
						<view :style="{color:fontColor}" class="f28 c9" v-if="order.state == 3">{{$t("o-btn.order_successful")}}，{{$t("o-btn.sit_and_eat")}}</view>
					</block>
					<block v-if="order.diningType == 6 || order.diningType == 5">
						<view :style="{color:fontColor}" class="f28 c9" v-if="order.state == 2">>{{$t("o-btn.please_wait_store_order")}}</view>
						<view :style="{color:fontColor}" class="f28 c9" v-if="order.state == 3">{{$t("o-btn.product_in_preparation")}}</view>
						<view :style="{color:fontColor}" class="f28 c9" v-if="order.state == 4">{{$t("o-btn.product_preparation_complete")}}</view>
					</block>
					<view :style="{color:fontColor}" class="f28 c9" v-if="order.state == 6">{{$t("o-btn.thank_you_for_visiting")}}</view>
				</block>
				<block v-if="order.scene==1 || order.scene==2">
					<view :style="{color:fontColor}" class="f28 c9" v-if="order.state == 2">{{$t("o-btn.please_wait_store_order")}}</view>
					<view :style="{color:fontColor}" class="f28 c9" v-if="order.scene==2 && order.state == 3">{{$t("o-btn.product_in_preparation")}}</view>
					<view :style="{color:fontColor}" class="f28 c9" v-if="order.scene==2 && order.state == 4">{{$t("o-btn.product_preparation_complete")}}</view>
					<view :style="{color:fontColor}" class="f28 c9" v-if="order.scene==1 && (order.state == 3)">{{$t("o-btn.product_in_preparation")}}</view>
					<view :style="{color:fontColor}" class="f28 c9" v-if="order.scene==1 && (order.state == 4)">{{$t("o-btn.product_preparation_complete")}}</view>
					<view :style="{color:fontColor}" class="f28 c9" v-if="order.scene==1 && order.state == 5">{{$t("o-btn.product_preparation_completed_waiting_for_rider")}}</view>
					<view :style="{color:fontColor}" class="f28 c9" v-if="order.state == 6">{{$t("o-btn.thank_you_for_visiting")}}</view>
				</block>
				<view :style="{color:fontColor}" class="f28 c9" v-if="order.state == 8">{{$t("o-btn.refund_successful")}}，{{$t("o-btn.order_closed")}}</view>
				<view :style="{color:fontColor}" class="f28 c9" v-if="order.state == 0">{{$t("o-btn.order_canceled")}}</view>
				<view :style="{color:fontColor}" class="f28 c9" v-if="order.state == 1">{{$t("o-btn.order_awaiting_payment")}}</view>
			</view>
		</view>
		<view class="order-box bs20 p3">
			<!-- <view class="f40 wei">{{order.stateFormat}}</view> -->
					<block v-if="order.pickNo">
						<view class="f30 c9" v-if="order.scene==2 || (order.scene==3 && order.diningType==6)">{{$t("o-btn.pickup_number")}}</view>
						<view class="f30 c9" v-else-if="order.scene==3 && (order.diningType==4 || order.diningType==5)">{{$t("o-btn.table_information")}}</view>
						<view class="f30 c9" v-else>{{$t("o-btn.serial_number")}}</view>
						<view class="f60 wei neutra-font" v-if="order.scene==1 || order.scene==2">{{order.pickNo}}</view>
						<view class="f60 wei neutra-font" v-else-if="order.scene==3 && (order.diningType==4 || order.diningType==5)">{{order.table && order.table.name}}</view>
						<view class="f60 wei neutra-font" v-else>{{order.pickNo}}</view>
					</block>
					<view class="mt" v-if="order.state==1" :style="{color: tColor}">{{stime}}</view>
					<dl-status :dl='order'></dl-status>
					<view v-if="order.scene==6">
						<view class="f60 wei neutra-font"><text class="f24">฿</text>{{order.money}}</view>
					</view>
					<!-- <view class="mt50 flex" v-if="order.scene==1 || order.scene==2">
						<block>
							<button type="default" hover-class="none" class="bs30 mr10"
								v-if="(order.scene==1 || order.scene==2) && order.state==1"
								@click.stop="$emit('op',{t:'qxdd',co:order})">{{$t("o-btn.serial_number")}取消订单</button>
							<button type="primary" hover-class="none" class="bs30 mr10" v-if="order.state==1"
								@click.stop="$emit('op',{t:'ljzf',co:order})" :style="{background:tColor}">立即支付</button>
							<button type="default" hover-class="none" class="bs30 mr10"
								v-if="orderSetting.onUserAllowRefunds==1 && order.state>1 && (order.scene==1 && order.state<=5 || order.scene==2 && order.state<=4)"
								@click.stop="$emit('op',{t:'sqtk',co:order})">申请退款</button>
							<button type="default" hover-class="none" class="bs30 mr10"
								v-if="order.scene==1 && order.state==5 || order.scene==2 && order.state==4"
								@click.stop="$emit('op',{t:'qrsh',co:order})" style="color: #333;">确认收货</button>
							<button type="default" hover-class="none" class="bs30 mr10" v-if="order.state==4"
								@click.stop="$emit('op',{t:'zlyd',co:order})">再来一单</button>
						</block>
					</view> -->
		</view>
	</view>
</template>

<script>
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import utils from '@/common/utils.js'
	import dlStatus from '../components/o-status.vue'
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'dlBtn',
		components: {
			dlStatus,
		},
		props: {
			order: {
				type: Object,
				default: {}
			},
		},
		computed: {
			...mapState({
				orderSetting: state => state.config.orderSetting,
			}),
		},
		mixins: [utilMixins],
		data() {
			return {
				stime: '',
			}
		},
		methods: {
			djs() {
				if (this.order.state == 1 && this.order.expiredTime) {
					let now = this.dateToTime(),
						time2 = this.dateToTime(this.order.expiredTime)
					if (time2 > now) {
						let a = utils.countDownTime(time2 - now)
						this.stime = `剩余 ${a[2]}:${a[3]}分钟`
						this.dsq = setInterval(async () => {
							time2 -= 1
							if (time2 == now) {
								clearInterval(this.dsq)
							}
							let arr = utils.countDownTime(time2 - now)
							this.stime = `剩余 ${arr[2]}:${arr[3]}分钟`
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
	.order-box {
		z-index: 10;
		// box-shadow: 0 0 20rpx 0 rgba($color: #333, $alpha: 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: $bg-color-white;
		flex-shrink: 0;
		margin: -80rpx 20rpx 0 20rpx;

		.images {
			image {
				flex-shrink: 0;
				width: 150rpx;
				height: 120rpx;
			}
		}

		.line {
			border: 2rpx dashed #DAD8D9;
			margin: 0 20rpx;
			width: 80rpx;
		}

		.cg {
			color: #DAD8D9;
		}
	}

	.mt50 {
		margin-top: 50rpx;
	}
	
	.btnState{
		height: 280rpx;
		.zt{
			padding-top: 60rpx;
			padding-left: 40rpx;
		}
	}
</style>