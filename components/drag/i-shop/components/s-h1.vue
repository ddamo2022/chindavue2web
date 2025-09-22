<template>
	<view class="sBody">
		<view class="sHead">
			<view class="sHeadTit">
				东湖万达店<text class='iconfont icon-gengduo f28 ml5 c9'></text>
			</view>
			<view class="sHeadBtn">
				<view class="btn btnText">自提</view>
				<view class="btn">外卖</view>
			</view>
		</view>
		<view class="sText">东湖高新区南二环路8888号</view>
	</view>
</template>
<script>
	export default {
		name: 'sH1',
		props: {
			styles: {
				type: Object,
				default: function() {
					return {}
				}
			},
			u: {
				type: String,
				default: 'px'
			},
		},
		data() {
			return {
				usImg: '',
				usrImg: '',
			};
		},
		methods: {

		},
	};
</script>
<style lang="scss" scoped>
	.sBody {
		padding: 20rpx;

		.sHead {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.sHeadTit {
				color: #121212;
				font-weight: 700;
				font-size: 30rpx;
			}

			.sHeadBtn {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 194rpx;
				height: 62rpx;
				padding: 0 6rpx;
				background: #f9f9f9;
				border: 2rpx solid #eee;
				border-radius: 30rpx;

				.btn {
					width: 86rpx;
					height: 52rpx;
					line-height: 52rpx;
					text-align: center;
					border-radius: 23rpx;
				}

				.btnText {
					color: #fff;
					background: #333;
				}
			}
		}

		.sText {
			color: #999;
			font-weight: 500;
			font-size: 24rpx;
		}
	}
</style>
