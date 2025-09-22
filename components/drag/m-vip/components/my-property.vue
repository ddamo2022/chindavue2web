<template>
	<view class="myPro">
		<view class="tit">{{$t("my_property.my_assets")}}</view>
		<view class="proList">
			<block v-for="(v, i) in styles.proList" :key="i">
				<view class="item" v-if="v.open == 1" @click="goTo(v)">
					<view class="nem">
						<img :src="v.img" v-if="v.img" />
						<text v-else class="iconfont f40 c3" :class="v.icon"></text>
						<text class="ml5 wei f30" :style="{ color: v.leftColor }">
						 {{ util.getTranslation("my_property",v.leftWord ) }}
		 
						</text>
					</view>
					<view class="dc mt10 neutra-font">
						<text class="nu wei">
							<text v-if="v.name=='积分'">
								{{isLogin?user.account && user.account.integral:'--'}}
							</text>
							<text v-if="v.name=='优惠券'">{{isLogin?user.coupons:'--'}}</text>
							<text
								v-if="v.name=='余额'">{{isLogin?user.account && parseFloat(user.account.balance):'--'}}</text>
						</text>
						<text class="f-g-0 t-o-e f24">
							{{$t("my_property.unused")}}
						</text>
					</view>
				</view>
			</block>
		</view>
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
			async goTo(v) {
				if (!this.isLogin) {
					this.$emit('sh')
					return
				}
				 this.goUrl(v.url, v)
				if (!this.jjmbxx) {
					let sm = []
					if(v.name == '积分'){
						sm =  ['integralChange', 'balanceChange', 'activity']
					}else if(v.name == '优惠券'){
						sm =  ['coupon', 'couponOverdue', 'vipChange']
					}else if(v.name == '余额'){
						sm =  ['integralChange', 'balanceChange', 'activity']
					}
					try {
						await this.requestSM(sm)
					} catch (e) {
						this.jjmbxx = true
						return
					}
				}
				if (v.name && v.name == '积分') {
					this.jjmbxx = false
					this.go({
						url: '/pages/my/integral/shop-index'
					})
				} else if (v.name && v.name == '优惠券') {
					this.jjmbxx = false
					this.go({
						url: '/pages/other/coupon/couponList'
					})
				} else if (v.name && v.name == '余额') {
					this.jjmbxx = false
					this.go({
						url: '/pages/other/recharge/index'
					})
				}
			},
		},
	};
</script>
<style lang="scss" scoped>
	.myPro {
		z-index: 1;
		position: relative;
		margin-bottom: 20rpx;
		padding-bottom: 20rpx;
		background: #fff;
		border-radius: 20rpx;
		margin: 0 20rpx 20rpx 20rpx;

		.tit {
			padding: 32rpx 0 0 32rpx;
			font-weight: 700;
			font-size: 30rpx;
		}

		.proList {
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			.item {
				width: 33%;
				padding-top: 40rpx;

				.nem {
					display: flex;
					align-items: center;
					justify-content: center;

					img {
						width: 40rpx;
						height: 40rpx;
						margin-right: 4rpx;
					}
				}

				.dc {
					display: flex;
					align-items: center;
					justify-content: center;
					color: #9a9a9a;

					.nu {
						margin-right: 4rpx;
						color: #f93a4a;
						font-size: 28rpx;
					}
				}
			}
		}
	}
</style>