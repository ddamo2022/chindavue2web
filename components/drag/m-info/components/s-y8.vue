<template>
	<view class="style">
		<view class="sTop">
			<mg-img :src='styles.style8.img || stopImg' class="img" />
		</view>
		<view class="sBt">
			<view class="sSett f12 mt10 p02">
				<block v-for="(v, i) in styles.zCList" :key="i">
					<block v-if="v.open == 1">
						<view class="sItem f-g-1" @click.stop="goTo(v)">
							<block v-if="styles.position == 1">
								<view :style="{ color: styles.zcTxtColor }" class="c9">
									{{ v.text || v.name }}
								</view>
								<view :style="{ color: styles.zcNumColor }" class="mt5 f16 c6 wei neutra-font">
									<text
										v-if="v.value == 1">{{user.account && parseFloat(user.account.balance)}}</text>
									<text v-else-if="v.value == 2">{{user.account && user.account.integral}}</text>
									<text v-else-if="v.value == 3">{{user && user.coupons}}</text>
									<text v-else-if="v.value == 4">{{user.account && user.account.exp}}</text>
								</view>
							</block>
							<block v-else>
								<view :style="{ color: styles.zcNumColor }" class="f16 c6 wei neutra-font">
									<text
										v-if="v.value == 1">{{user.account && parseFloat(user.account.balance)}}</text>
									<text v-else-if="v.value == 2">{{user.account && user.account.integral}}</text>
									<text v-else-if="v.value == 3">{{user && user.coupons}}</text>
									<text v-else-if="v.value == 4">{{user.account && user.account.exp}}</text>
								</view>
								<view :style="{ color: styles.zcTxtColor }" class="c9 mt5">
									{{ v.text || v.name }}
								</view>
							</block>
						</view>
					</block>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'SY8',
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
		min-height: 160rpx;
		background-color: #fff;

		.sTop {
			height: 120rpx;
			border-radius: 40rpx 40rpx 0 0;
		}

		.sBt {
			height: 120rpx;
			background: #fff;
			border-radius: 40rpx;

			.sSett {
				justify-content: center;
				display: flex;
				align-items: center;

				.sItem {
					position: relative;
					padding: 0 20rpx;
					text-align: center;
				}
			}
		}
	}
</style>