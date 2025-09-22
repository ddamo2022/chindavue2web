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
					</view>
				</view>
				<view class="flex mt10">
					<view class="f24 c9">{{co.created_at}}</view>
				</view>
				<view class="number bs20 flex f-y-t mt20">
					<view class="c9 mr30">{{$t("other-reserve.reservation_info")}}</view>
					<view class="">
						<view class="wei f34 neutra-font" v-if="co.appointmentTime">{{co.appointmentTime}}</view>
						<view class="wei f34 mt10">
							<text v-if="co.area">{{co.area.name}}</text>
							<text v-if="co.type" class="ml10">{{co.type.name}}</text>
							<text v-if="co.money > 0" class="ml10"><text class="nowei f24">฿</text>{{co.money}}</text>
						</view>
						<view class="f24 c9 mt10">
							<text v-if="co.contact">{{co.contact}}</text>
							<text v-if="co.mobile" class="ml10">{{co.mobile}}</text>
							<text v-if="co.person" class="ml10">{{co.person}}{{$t("other-reserve.people_count")}}</text>
							<text v-if="co.num" class="ml10">{{co.num}}{{$t("other-reserve.table_count")}}</text>
						</view>
					</view>
				</view>
				<view class="action mt20">
					<button type="default" hover-class="none" class="bs30" v-if="co.state==1"
						@click.stop="$emit('operation',{t:'ljzf',co})">{{$t("other-reserve.pay_immediately")}}</button>
				</view>
				<!-- <view class="action mt20">
					<button type="default" hover-class="none" class="bs30" v-if="co.state==2"
						@click.stop="$emit('operation',{t:'qxpd',co})">取消预定</button>
				</view> -->
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
					url: '/pages/other/reserve/yyxq?id=' + v.orderSn
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	@import '../../../index/order/order.scss';

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