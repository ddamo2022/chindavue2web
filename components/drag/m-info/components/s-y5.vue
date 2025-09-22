<template>
	<view class="f-bt style">
		<view class="sFive">
			<view class="sFiveM">
				<view class="sLogo">
					<mg-img :src='user.avatar || user.applylogo' class="usImg" />
				</view>
				<view class="sLevel">
					<text>L</text>
					<text class="f24 ml3">v{{user.vipCard && user.vipCard.level}}会员信息 ></text>
				</view>
				<view class="flex c9 f24 sTip mt5 f-c">
					<view class="flex neutra-font" v-if="user.account && user.nextVip">
						<progress :percent="(user.account.exp/user.nextVip.exp)*100" stroke-width="5" border-radius="5"
							:activeColor="tColor" style="width: 200rpx;" />
						<text
							class="f24 ml10">{{user.account && user.account.exp}}/{{user.nextVip && user.nextVip.exp}}</text>
					</view>
				</view>
			</view>
			<view class="sFiveG">
				<block v-for="(v, i) in styles.zCList" :key="i">
					<view class="sItem" v-if="v.open == 1" @click.stop="goTo(v)">
						<view class="sFixBox">
							<view class="sTit">{{ v.text || v.name }}</view>
							<view class="sGrade t-o-e o-h neutra-font">
								<text v-if="v.value == 1">{{user.account && parseFloat(user.account.balance)}}</text>
								<text v-else-if="v.value == 2">{{user.account && user.account.integral}}</text>
								<text v-else-if="v.value == 3">{{user && user.coupons}}</text>
								<text v-else-if="v.value == 4">{{user.account && user.account.exp}}</text>
							</view>
							<view class="sText">
								<text v-if="v.value == 1">{{ styles.yeMsg }}</text>
								<text v-else-if="v.value == 2">{{ styles.jfMsg }}</text>
								<text v-else-if="v.value == 3">{{ styles.yhqMsg }}</text>
								<text v-else-if="v.value == 4">兑换金额后礼品券</text>
							</view>
						</view>
					</view>
				</block>
			</view>
		</view>
		<view class="sGroup">
			<!-- <view class="gBox">
				<mg-img :src='scImg'  class="img" />
		      </view> -->
			<view class="gBox" @click="goTo(styles.style5.imgUrl[0])">
				<mg-img :src='styles.style5.imgUrl[0].img || `${onImgurl}layout/wmdj.jpg`' class="img" m="aspectFit" />
			</view>
			<view class="gBox" @click="goTo(styles.style5.imgUrl[1])">
				<mg-img :src='styles.style5.imgUrl[1].img || `${onImgurl}layout/ztdd.jpg`' class="img" m="aspectFit" />
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'SY5',
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
				wmImg: '/static/images/layout/wmdj.jpg',
				ztImg: '/static/images/layout/ztdd.jpg',
			};
		},
		methods: {
			goTo(i) {
				if (i.url) {
					this.goUrl(i.url)
				}
			},
			// goTo(v) {
			// 	if (v.value == 1) {
			// 		this.go({
			// 			url: '/pages/other/recharge/index'
			// 		})
			// 	} else if (v.value == 2) {
			// 		this.go({
			// 			url: '/pages/my/integral/shop-index'
			// 		})
			// 	} else if (v.value == 3) {
			// 		this.go({
			// 			url: '/pages/other/coupon/couponList'
			// 		})
			// 	}
			// },
		},
	};
</script>
<style lang="scss" scoped>
	.style {
		position: relative;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 0 16rpx;
		background-color: #fff;
		overflow: hidden;

		.sFive {
			border-radius: 30rpx;
			width: 360rpx;
			min-height: 520rpx;
			padding: 16rpx;

			.sFiveM {
				height: 268rpx;
				text-align: center;

				.sLogo {
					position: relative;
					width: 136rpx;
					height: 136rpx;
					margin: 0 auto;

					.usImg {
						position: absolute;
						top: 22rpx;
						left: 22rpx;
						z-index: 1;
						width: 100rpx;
						height: 100rpx;
						overflow: hidden;
						border-radius: 50%;
					}
				}

				.sLevel {
					margin: 6rpx auto;
					color: #000;
					font-weight: 700;
					font-size: 40rpx;
				}

				.sTip {
					.el-progress {
						width: 280rpx;
						margin-right: 10rpx;
						vertical-align: middle;
						position: relative;
						line-height: 1;
					}
				}
			}

			.sFiveG {
				display: flex;
				flex-wrap: wrap;
				align-items: flex-start;
				background-color: #fff;

				.sItem {
					width: 50%;
					margin-top: 16rpx;

					.sFixBox {
						position: relative;
						width: 100%;
						height: 174rpx;
						text-align: center;

						.sTit {
							color: #333;
							font-weight: 700;
							font-size: 28rpx;
							line-height: 1;
						}

						.sGrade {
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
							padding: 0 20rpx;
						}
					}

					.sFixBox:before {
						position: absolute;
						top: -16rpx;
						right: 0;
						left: 0;
						height: 2rpx;
						background-color: #e5e5e5;
						transform: scale(0.8);
						content: "";
					}

					.sFixBox:after {
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						width: 1px;
						background-color: #e5e5e5;
						transform: scale(0.8);
						content: "";
					}
				}

				.sItem:first-child .sFixBox:after,
				.sItem:first-child .sFixBox:before,
				.sItem:nth-child(2) .sFixBox:before,
				.sItem:nth-child(3) .sFixBox:after {
					display: none;
				}
			}
		}

		.sGroup {
			position: absolute;
			top: 0;
			right: 16rpx;
			bottom: 0;
			width: 340rpx;
			height: 100%;
			max-height: 780rpx;
			overflow: hidden;

			.gBox {
				display: block;
				width: 100%;
				height: 50%;

				.img {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>