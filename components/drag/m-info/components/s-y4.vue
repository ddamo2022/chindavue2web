<template>
	<view class="f-bt style">
		<view class="f-g-1">
			<view class="flex f-y-c f-bt f-g-1">
				<view class="usImg f-g-0">
					<mg-img :src='user.avatar || user.applylogo' />
				</view>
				<view class="f-g-1">
					<view class="f-y-c f-g-1">
						<view class="sPoint f-bt f-g-1">
							<view class="sName f-g-1 t-o-e">{{user.nickname}}</view>
							<view class="sLevel f-g-0 ml5"  :style="{background:tColor}">{{user.vipCard.name}}</view>
						</view>
					</view>
					<view class="flex c9 f24 sTip mt10 neutra-font">
						<view class="flex" v-if="user.account && user.nextVip">
							<progress :percent="(user.account.exp/user.nextVip.exp)*100" stroke-width="5" border-radius="5" :activeColor="tColor" style="width: 100rpx;" />
							<text class="f24 ml10">{{user.account && user.account.exp}}/{{user.nextVip && user.nextVip.exp}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="f-g-0">
			<view class="sSett f24 mt10 f-bt">
				<block v-for="(v, i) in styles.zCList" :key="i">
					<view v-if="v.open == 1" class="sItem f-1 t-o-e" @click.stop="goTo(v)">
						<block v-if="styles.position == 1">
							<view :style="{ color: styles.zcTxtColor }" class="c9">
								{{ v.text || v.name }}
							</view>
							<view :style="{ color: styles.zcNumColor }" class="mt5 f28 c6 neutra-font">
								<span v-if="v.value == 1">{{user.account && parseFloat(user.account.balance)}}</span>
								<span v-else-if="v.value == 2">{{user.account && user.account.integral}}</span>
								<span v-else-if="v.value == 3">{{user && user.coupons}}</span>
								<span v-else-if="v.value == 4">{{user.account && user.account.exp}}</span>
							</view>
						</block>
						<block v-else>
							<view :style="{ color: styles.zcNumColor }" class="f28 c6 neutra-font">
								<span v-if="v.value == 1">{{user.account && parseFloat(user.account.balance)}}</span>
								<span v-else-if="v.value == 2">{{user.account && user.account.integral}}</span>
								<span v-else-if="v.value == 3">0</span>
								<span v-else-if="v.value == 4">{{user.account && user.account.exp}}</span>
							</view>
							<view :style="{ color: styles.zcTxtColor }" class="c9 mt5">
								{{ v.text || v.name }}
							</view>
						</block>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'SY4',
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
			justify-content: center;
			display: flex;
			align-items: center;

			.sItem {
				position: relative;
				padding: 0 10rpx;
				text-align: center;
			}
		}
	}
</style>
