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
							{{co.statusFormat}}
						</view>
						<!-- <view class="mr10 ml10" v-if="co.state==1" :style="{color: tColor}">{{stime}}</view> -->
					</view>
				</view>
				<view class="flex mt10">
					<view class="f24 c9">{{co.created_at}}</view>
				</view>
				<view class="number bs20 flex f-y-c mt20">
					<view class="c9 mr30">{{$t("lineup.take_number_info")}}</view>
					<view class="flex f-y-c">
						<view class="wei f34 neutra-font">{{co.serialNum}}</view>
						<view class="f24 c9 ml10">
							<text v-if="co.type">{{co.type.name}}</text>
							<text v-if="co.people" class="ml10">{{co.people}}人</text>
							<text v-if="co.waitingTime && co.state==1" class="ml10">{{$t("lineup.already_waited")}}{{co.waitingTime}}{{$t("lineup.minutes")}}</text>
						</view>
					</view>
				</view>
				<view class="action mt20">
					<button type="default" hover-class="none" class="bs30" v-if="co.state==1"
						@click.stop="$emit('operation',{t:'qxpd',co})">{{$t("lineup.cancel_queue")}}</button>
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
					url: '/pages/my/lineup/pdxq?id=' + v.id
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