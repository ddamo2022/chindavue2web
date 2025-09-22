<template>
	<view class="f-bt style">
		<view class="sItem">
			<view class="sItemBox">
				<view class="sTit">会员信息</view>
				<view class="sLevel">
					<text>L</text>
					<text class="f12 ml3">v{{user.vipCard.level}}</text>
				</view>
				<view class="sText t-o-e2">
					<text>需</text>
					<text class="neutra-font">{{user.nextVip && user.nextVip.exp}}</text>
					<text>经验值升级</text>
				</view>
				<view class="sBottom">
					<view class="sImg" v-if="styles.zCListO.img">
						<mg-img :src='styles.zCListO.img' />
					</view>
					<view class="sIcon" v-else>
						<text class="iconfont icon-huiyuan" />
					</view>
					<view class="sView">
						<text class="mt5">查看全部 ></text>
					</view>
				</view>
			</view>
		</view>
		<block v-for="(v, i) in styles.zCList" :key="i">
			<view class="sItem" v-if="v.open == 1">
				<view class="sItemBox">
					<view class="sTit">{{ v.text || v.name }}</view>
					<view class="sLevel">
						<text class="neutra-font">
							<text v-if="v.value == 1">{{user.account && parseFloat(user.account.balance)}}</text>
							<text v-else-if="v.value == 2">{{user.account && user.account.integral}}</text>
							<text v-else-if="v.value == 3">{{user && user.coupons}}</text>
							<text v-else-if="v.value == 4">{{user.account && user.account.exp}}</text>
						</text>
						<text class="f12 ml3">
							<text v-if="v.value == 1">THB</text>
							<text v-else-if="v.value == 2">个</text>
							<text v-else-if="v.value == 3 || v.value == 4">张</text>
						</text>
					</view>
					<view class="sText">
						<text v-if="v.value == 1">{{ styles.yeMsg }}</text>
						<text v-else-if="v.value == 2">{{ styles.jfMsg }}</text>
						<text v-else-if="v.value == 3">{{ styles.yhqMsg }}</text>
						<text v-else-if="v.value == 4">兑换金额后礼品券</text>
					</view>
					<view class="sBottom" @click.stop="goTo(v)">
						<view class="sImg" v-if="v.img">
							<mg-img :src='v.img' />
						</view>
						<view class="sIcon" v-else>
							<text v-if="v.value == 1" class="iconfont icon-yue" style="font-size: 32px" />
							<text v-else-if="v.value == 2" class="iconfont icon-jifen" />
							<text v-else-if="v.value == 3" class="iconfont icon-youhuiquan" />
							<text v-else-if="v.value == 4" class="iconfont icon-shinshoplipinqia" />
						</view>
						<view class="sView">
							<text class="mt5">查看全部 ></text>
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'SY7',
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
		},
	};
</script>

<style lang="scss" scoped>
	.style {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: flex-start;
		margin-right: -20rpx;
		padding: 20rpx 20rpx 0 20rpx;

		.sItem {
			width: 33.33%;
			min-width: 200rpx;
			margin-bottom: 20rpx;
			padding-right: 20rpx;

			.sItemBox {
				border-radius: 30rpx;
				position: relative;
				width: 100%;
				height: 380rpx;
				padding: 20rpx 12rpx;
				text-align: center;
				background-color: #fff;

				.sTit {
					color: #333;
					font-weight: 700;
					font-size: 30rpx;
				}

				.sLevel {
					margin: 6rpx auto;
					color: #000;
					font-weight: 700;
					font-size: 40rpx;
				}

				.sText {
					height: 80rpx;
					color: #666;
					font-size: 24rpx;
					line-height: 40rpx;
				}

				.sBottom {
					position: absolute;
					bottom: 10bpx;
					width: 100%;
					color: #666;
					font-size: 24rpx;
					text-align: center;

					.sView {
						color: #666;
						font-size: 24rpx;
						text-align: center;
					}

					.sIcon {

						// opacity: 0.2;
						.iconfont {
							color: #000;
							font-size: 72rpx;
						}
					}

					.sImg {
						width: 64rpx;
						height: 64rpx;
						margin: 0 auto 20rpx auto;
					}
				}
			}
		}

		.ml3 {
			margin-left: 6rpx;
		}
	}
</style>