<template>
	<view class="style">
		<view class="f-g-1 sTop f-bt">
			<view class="f-g-1 t-o-e">
				<view class="flex">
					<view class="">
						<view class="sPoint">
							<text class="sName">{{user.nickname}}</text>
							<text class="sLevel" :style="{background:tColor}">{{user.vipCard.name}}</text>
						</view>
						<view class="flex sSett f24 mt20">
							<view v-for="(v, i) in styles.zCList" :key="i">
								<view class="mr15 flex" v-if="v.open == 1" @click.stop="goTo(v)">
									<text :style="{ color: styles.zcTxtColor }">{{ v.text || v.name }}：</text>
									<text :style="{ color: styles.zcNumColor }" class="neutra-font">
										<text v-if="v.value == 1">{{user.account && parseFloat(user.account.balance)}}</text>
										<text v-else-if="v.value == 2">{{user.account && user.account.integral}}</text>
										<text v-else-if="v.value == 3">{{user && user.coupons}}</text>
										<text v-else-if="v.value == 4">{{user.account && user.account.exp}}</text>
									</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="f-g-0 RIcon mt5 f-c" :style="{background:tColor}"  @click="userCode">
				<text class="iconfont icon-erweima f50 cf" />
			</view>
		</view>
		<view class="f-bt f-y-c">
			<view class="f-g-1 flex f24">
				<view class="f-g-0 mr10 wei" :style="{ color: styles.style3.wordColor }">
					{{ styles.style3.word }}
				</view>
				<view class="t-o-e f-g-1" :style="{ color: styles.style3.wordMsgColor }">
					{{ styles.style3.wordMsg }}
				</view>
			</view>
			<view class="f-g-0">
				<text class='iconfont icon-gengduo f28 ml5 c9'></text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'SY3',
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
				usImg: '/static/images/layout/user.png',
				usrImg: '/static/images/layout/code.png',
			};
		},
		methods: {
			goTo(v) {
				if (v.value == 1) {
					this.go({
						url: '/pages/other/recharge/index'
					})
				} else if (v.value == 2) {
					this.go({
						url: '/pages/my/integral/shop-index'
					})
				} else if (v.value == 3) {
					this.go({
						url: '/pages/other/coupon/couponList'
					})
				}
			},
			userCode() {
				this.go({
					t: 1,
					url: '/pages/my/user/mr-code'
				})
			},
		},
	};
</script>
<style lang="scss" scoped>
	.style {
		min-height: 160rpx;
		padding: 30rpx 40rpx;
		background-color: #fff;
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: cover;

		.usImg {
			width: 120rpx;
			height: 120rpx;
			margin-right: 20rpx;
			overflow: hidden;
			border-radius: 50%;
		}

		.sTop {
			border-bottom: 2rpx solid #eee;
			padding-bottom: 20rpx;
			margin-bottom: 40rpx;
		}

		.sPoint {
			margin-bottom: 4rpx;

			.sName {
				display: inline-block;
				color: #383838;
				font-weight: 700;
				font-size: 30rpx;
				line-height: 1.2;
				vertical-align: middle;
			}

			.sLevel {
				background: rgba(207, 170, 67, 0.6);
				transform: scale(0.9);
				display: inline-block;
				margin-left: 10rpx;
				padding: 4rpx 8rpx;
				color: #fff;
				font-size: 24rpx;
				line-height: 1.2;
				vertical-align: middle;
				border-top-left-radius: 12rpx;
				border-top-right-radius: 12rpx;
				border-bottom-right-radius: 12rpx;
				border-bottom-left-radius: 4rpx;
			}
		}

		.RIcon {
			width: 100rpx;
			height: 100rpx;
			background: rgba(207, 170, 67, 0.6);
			border-radius: 50%;

			.usrImg {
				width: 44rpx;
				height: 44rpx;
				margin: 0 auto 4rpx;
			}

			.rTxt {
				color: #8a8a8a;
			}
		}
	}
</style>
