<template>
	<view class="coupon">
		<!-- <view class="f-bt p2 dy">
			<view class="f-g-1 c6">开启优惠券过期/到账提醒</view>
			<view class="f-g-0 f-c btn bs30 cf f22" :style="{background:tColor}">立即订阅</view>
		</view> -->
		<view class="p2">
			<view class="dh f-bt p-10-30 bf bs30 f-y-c" :style="{color:tColor}">
				<view class="f-g-1 flex f-y-c" @click="go({url:'dhCard'})">
					<text class="iconfont icon-gengxin f32 mr10 c3" :style="{color:tColor}"></text>
					<view>兑换礼品卡</view>
				</view>
				<view class="f-g-0"><text class="iconfont icon-youjiantou c3 f30" :style="{color:tColor}"></text></view>
			</view>
		</view>
		<view class="pt150">
			<i-default :imgn="6" />
		</view>
		<view class="foot-btnc c3 f28 bf f-bt f-y-c" :style="{padding: '20rpx',bottom: isIpx?'40rpx':0}">
			<view class="f-g-1 f-c" @click="go({url:'hisCard'})">历史礼品卡</view>
			<view class="f-g-0 bline"></view>
			<view class="f-g-1 f-c" @click="go({url:'carddl'})">获卡记录</view>
			<view class="f-g-0 bline"></view>
			<view class="f-g-1 f-c" @click="go({url:'givedl'})">赠送记录</view>
		</view>
		<view v-if="isIpx" class='bgf'></view>
		<!-- <jzz :nodata="true" :mygd='true' /> -->
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import jzz from '@/components/common/jzz.vue'
	import iDefault from '@/components/common/default.vue'
	export default {
		name: 'coupon-list',
		components: {
			jzz,
			iDefault,
		},
		data() {
			return {
				show: false,
			}
		},
		onLoad(options) {
			this.getSystem()
			this.util.setNT('礼品卡列表')
		},
		computed: {},
		methods: {
			onClick() {
				this.$emit('click')
			}
		},
	}
</script>
<style scoped lang="scss">
	.coupon {
		.dy {
			box-shadow: 0rpx 4rpx 20rpx 0rpx rgba(221, 221, 221, 0.8);

			.btn {
				width: 130rpx;
				height: 44rpx;
			}
		}

		.bline {
			height: 26rpx;
			width: 2rpx;
			background: #ddd;
		}
	}
</style>