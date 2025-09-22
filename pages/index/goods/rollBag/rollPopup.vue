<template>
	<uni-popup ref="popup" type="bottom" :sname="{bottom:'172rpx',zIndex:'999'}" tBom="172" @change="change">
		<view class="cart-popup">
			<view class="header">
				<view class="order-type">
					<view class="font-weight-bold">优惠券包</view>
				</view>
			</view>
			<scroll-view scroll-y class="content">
				<view class="wrapper">
					<block v-for="(v,i) in rr" :key="i">
						<view class="cps f-bt mt20 bs20 p-r">
							<view class="f-g-1 flex">
								<view class="logo bs15 f-g-0">
									<image :src="v.image" class="wh" mode="aspectFill"></image>
								</view>
								<view class="ml20 f-g-1">
									<view class="f30 wei l-h1 t-o-e">{{v.name}}</view>
									<view class="flex">
										<view class="times cf mt20 f20" :style="{background:tColor,color:fontColor}"
											v-if="v.countdown">
											距结束
											<text class="ml10 mr10 neutra-font">{{v.countdown.d}}</text>
											天
											<text class="ml10 mr10 neutra-font">{{v.countdown.h}}</text>
											时
											<text class="ml10 mr10 neutra-font">{{v.countdown.m}}</text>
											分
										</view>
									</view>
								</view>
							</view>
							<view class="btn f-g-0 f-c cf f24 t-o-e mt30 f-y-c" :style="{background:tColor,color:fontColor}"
								@click="goRoll(v)"><text class="f24 neutra-font" v-if="v.price">฿{{v.price}}</text>抢</view>
							<view class="p-a cpsnum c0 t-c" v-if="v.couponGive && v.couponGive.length">x {{coupinNum(v.couponGive)}}</view>
						</view>
						<view class="f-c-c" v-if="v.couponGive && v.couponGive.length">
							<view class="yy"></view>
							<view class="yy2"></view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		components: {
			uniPopup,
		},
		props: {
			rr: {
				type: Array,
				default: () => []
			},
		},
		computed: {
			...mapState(['sjxx'])
		},
		methods: {
			open() {
				this.$refs['popup'].open()
			},
			close() {
				this.$refs['popup'].close()
			},
			change({
				show
			}) {
				if (!show) {
					this.$emit('change', show)
				}
			},
			coupinNum(arr) {
				let sum = 0;
				for (let i = 0; i < arr.length; i++) {
				  sum += Number(arr[i].num)
				}
				return sum
			},
			goRoll(v) {
				this.go({
					t: 1,
					url: `/pages/other/rollPackage/rolldl?storeId=${this.sjxx.id}&id=${v.id}`
				})
				this.close()
			}
		}
	};
</script>

<style lang="scss" scoped>
	.cart-popup {
		background-color: $bg-color-white;
		margin-bottom: 0;
		padding-bottom: 90rpx;
		border-radius: 30rpx 30rpx 0 0;
		position: relative;
	}

	.header {
		padding: 20rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid rgba($color: $border-color, $alpha: 0.6);
		font-size: $font-size-sm;
		color: $text-color-assist;

		.order-type {
			display: flex;
			align-items: center;
			font-size: $font-size-sm;
			color: $text-color-base;
		}

		.delete-btn {
			width: 46rpx;
			height: 46rpx;
			margin-right: 10rpx;
		}
	}

	.content {
		max-height: calc(100vh - 600rpx);

		.wrapper {
			width: 100%;
			height: 100%;
			padding: 0 30rpx;

			.cps {
				padding: 20rpx 20rpx 40rpx 20rpx;
				border: 2rpx solid #F2DFD8;
				background: #FDF5F2;

				.logo {
					width: 120rpx;
					height: 110rpx;
				}

				.times {
					padding: 0 10rpx;
					background: #f95c28;
					border-radius: 8rpx;
				}

				.btn {
					margin-left: 20rpx;
					background: #f95c28;
					border-radius: 120rpx;
					width: 150rpx;
					height: 60rpx;
				}

				.cpsnum {
					top: 0;
					right: 0;
					width: 50rpx;
					height: 35rpx;
					font-size: 20rpx;
					border-radius: 0 0 0 10rpx;
					background: linear-gradient(#F9D976, #FAC63E);
				}
			}
			.yy{
				background: #FEEDE9;
				height: 10rpx;
				width: 96%;
				border-radius: 0 0 20rpx 20rpx;
				border-bottom: 2rpx solid #F2DFD8;
			}
			.yy2{
				background: #FEEDE9;
				height: 8rpx;
				width: 92%;
				border-radius: 0 0 20rpx 20rpx;
				border-bottom: 2rpx solid #F2DFD8;
			}
		}

	}
</style>