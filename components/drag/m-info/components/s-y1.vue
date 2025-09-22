<template>
	<view class="f-bt style">
		<view class="f-g-1">
			<view class="flex f-bt" v-if="user">
				<view class="usImg f-g-0">
					<mg-img :src="user.avatar || user.applylogo" />
				</view>
				<view class="f-g-1 t-o-e">
					<view class="sPoint">
						<text class="sName t-o-e">{{user.nickname}}</text>
						<text class="sLevel" :style="{background:tColor}">{{user.vipCard.name}}</text>
					</view>
					<view class="flex sSett f24 mt5">
						<view v-for="(v, i) in styles.zCList" :key="i">
							<view class="mr15 flex t-o-e" v-if="v.open == 1" @click.stop="goTo(v)">
								<text :style="{ color: styles.zcTxtColor }">{{ v.text || v.name }}：</text>
								<text :style="{ color: styles.zcNumColor }" class="t-o-e neutra-font">
									<text
										v-if="v.value == 1">{{user.account && parseFloat(user.account.balance)}}</text>
									<text v-else-if="v.value == 2">{{user.account && user.account.integral}}</text>
									<text v-else-if="v.value == 3">{{user && user.coupons}}</text>
									<text v-else-if="v.value == 4">{{user.account && user.account.exp}}</text>
								</text>
							</view>
						</view>
					</view>
					<view class="flex c9 f12 sTip mt10 neutra-font">
						<view class="flex" v-if="user.account  && user.nextVip">
							<progress :percent="(user.account.exp/user.nextVip.exp)*100" stroke-width="5" border-radius="5" :activeColor="tColor"
								style="width: 200rpx;" />
							<text
								class="f24 ml10">{{user.account && user.account.exp}}/{{user.nextVip && user.nextVip.exp}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="f-g-0 RIcon" @click="userCode">
			<view class="usrImg">
				<mg-img :src='`${onImgurl}layout/code.png`' />
			</view>
			<view class="rTxt f24 t-c mt10">会员码</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'SY1',
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
				usImg: '/static/images/layout/code.png',
				usrImg: '/static/images/no-user.png',
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
		padding: 30rpx 20rpx;
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

		.sSett {
			padding-top: 8rpx;
			line-height: 1;
		}

		.RIcon {
			width: 120rpx;

			.usrImg {
				width: 48rpx;
				height: 48rpx;
				margin: 0 auto 6rpx;
			}

			.rTxt {
				color: #000;
			}
		}
	}
</style>