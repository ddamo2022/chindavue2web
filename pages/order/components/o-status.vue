<template>
	<view class="" v-if="dl.state<=6 && dl.state!=1">
		<view class="order-box bs20 p3 mt20" v-if="dl.scene==3 && dl.state!=6">
			<view class="flex w100 p03 f-c" v-if="dl.diningType==4">
				<view class="f-g-0 f-c-c cg" :style="{color:dl.state==2?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-duodingdan c9 f60"
							:style="{color:dl.state==2?tColor:''}"></text></view>
					<view>{{$t('o-status.order_placed')}}</view>
				</view>
				<view class="line"></view>
				<view class="f-g-0 f-c-c cg" :style="{color:dl.state==3?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-shouye c9 f60"
							:style="{color:dl.state==3?tColor:''}"></text></view>
					<view>{{$t('o-status.dining')}}</view>
				</view>
				<view class="line"></view>
				<view class="f-g-0 f-c-c cg" :style="{color:dl.state==4?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-biaodanwancheng c9 f60"
							:style="{color:dl.state==4?tColor:''}"></text></view>
					<view>{{$t('o-status.completed_status')}}</view>
				</view>
			</view>
			<view class="flex w100 p03 f-c" v-else>
				<view class="f-g-0 f-c-c cg" :style="{color:dl.state==2?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-duodingdan c9 f60"
							:style="{color:dl.state==2?tColor:''}"></text></view>
					<view>{{$t('o-status.order_placed')}}</view>
				</view>
				<view class="line"></view>
				<view class="f-g-0 f-c-c cg" :style="{color:dl.state==3?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-shouye c9 f60"
							:style="{color:dl.state==3?tColor:''}"></text></view>
					<view>{{$t('o-status.in_preparation')}}</view>
				</view>
				<view class="line"></view>
				<view class="f-g-0 f-c-c cg" :style="{color:dl.state==4?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-biaodanwancheng c9 f60"
							:style="{color:dl.state==4?tColor:''}"></text></view>
					<view>{{$t('o-status.please_pick_up_order')}}</view>
				</view>
			</view>
		</view>
		<view class="order-box bs20 p3 mt20" v-if="dl.scene==2 && dl.state!=6">
			<view class="flex w100 p03 f-c">
				<view class="f-g-0 f-c-c cg" :style="{color:dl.state==2?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-duodingdan c9 f60"
							:style="{color:dl.state==2?tColor:''}"></text></view>
					<view>{{$t('o-status.order_placed')}}</view>
				</view>
				<view class="line"></view>
				<view class="f-g-0 f-c-c cg" :style="{color:dl.state==3?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-shouye c9 f60"
							:style="{color:dl.state==3?tColor:''}"></text></view>
					<view>{{$t('o-status.in_preparation')}}</view>
				</view>
				<view class="line"></view>
				<view class="f-g-0 f-c-c cg" :style="{color:dl.state==4?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-biaodanwancheng c9 f60"
							:style="{color:dl.state==4?tColor:''}"></text></view>
					<view>{{$t('o-status.please_pick_up_order')}}</view>
				</view>
			</view>
		</view>
		<view class="order-box bs20 p3 mt20" v-if="dl.scene==1">
			<view class="flex w100 p03 f-c">
				<view class="f-g-0 f-c-c cg" :style="{color:dl.state==2?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-duodingdan c9 f60"
							:style="{color:dl.state==2?tColor:''}"></text></view>
					<view class="mt5">{{$t('o-status.awaiting_order_acceptance')}}</view>
				</view>
				<view class="line"></view>
				<view class="f-g-0 f-c-c cg" :style="{color:(dl.state==3 || dl.state==4)?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-shouye c9 f60"
							:style="{color:(dl.state==3 || dl.state==4)?tColor:''}"></text></view>
					<view class="mt5">{{$t('o-status.awaiting_delivery_status')}}</view>
				</view>
				<view class="line"></view>
				<view class="f-g-0 f-c-c cg" :style="{color:dl.state==5?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-waimai- c9 f60"
							:style="{color:dl.state==5?tColor:''}"></text></view>
					<view class="mt5">{{$t('o-status.in_delivery_status')}}</view>
				</view>
				<view class="line"></view>
				<view class="f-g-0 f-c-c cg" :style="{color:dl.state==6?tColor:''}">
					<view class="l-h1"><text class="iconfont icon-biaodanwancheng c9 f60"
							:style="{color:dl.state==6?tColor:''}"></text></view>
					<view class="mt5">{{$t('o-status.delivered')}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'dlStatus',
		components: {

		},
		props: {
			dl: {
				type: Object,
				default: {}
			},
		},
		computed: {
			// ...mapState(['sjxx']),
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.order-box {
		z-index: 10;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: $bg-color-white;
		flex-shrink: 0;

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
</style>
