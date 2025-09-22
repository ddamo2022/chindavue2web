<template>
	<view id="myAbility">
		<view class="my-ability" :style="{
	        marginTop: co.marginTop + 'px',
	        marginBottom: co.marginBottom + 'px',
			marginLeft: co.marginLR + 'px',
			marginRight: co.marginLR + 'px',
	      }">
			<view class="proList">
				<block v-for="(v, i) in co.imgUrl" :key="i">
					<view class="item f-g-1" :class="{ m0: i == 1 || i == 3 }" :style="{
	              borderTopLeftRadius: co.tCircle + 'px',
	              borderTopRightRadius: co.tCircle + 'px',
	              borderBottomRightRadius: co.bCircle + 'px',
	              borderBottomLeftRadius: co.bCircle + 'px',
	              backgroundColor: co.colorBg,
	            }" @click="goTo(v)">
						<view class="f-bt f-y-e">
							<view class="f-g-1 f-y-e neutra-font">
								<text class="num l-h1" v-if="v.value=='jf'" :style="{color:tColor}">
									{{isLogin?user.account && user.account.integral:'--'}}
								</text>
								<text class="num l-h1" v-if="v.value=='yhq'"
									:style="{color:tColor}">{{isLogin?user.coupons:'--'}}</text>
								<text class="num l-h1" v-if="v.value=='ye'"
									:style="{color:tColor}">{{isLogin?user.account && parseFloat(user.account.balance):'--'}}</text>
								<text class="num l-h1" v-if="v.value=='lpk'"
									:style="{color:tColor}">{{isLogin?0:'--'}}</text>
								<text>{{ v.unit }}</text>
							</view>
							<!-- <view class="f-g-0 an f-c" v-if="i == 0" :style="{background:tColor}">{{ v.rightWord }}
							</view> -->
						</view>
						<view class="dc mt20 f-y-c">
							<view class='f-g-1'>
								<text class="ml5 mr5 f24" :style="{ color: v.leftColor }">{{ v.leftWord}}</text>
								<text class="iconfont icon-right c9"></text>
							</view>
							<view class="f-g-0 an f-c" v-if="i == 0" :style="{background:tColor}">{{ v.rightWord }}
							</view>
						</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'myAbility',
		props: {
			co: {
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
			return {};
		},
		methods: {
			async goTo(v) {
				if (!this.isLogin) {
					this.$emit('sh')
					return
				}
				if (!this.jjmbxx) {
					let sm = []
					if(v.value == 'jf'){
						sm =  ['integralChange', 'balanceChange', 'activity']
					}else if(v.value == 'yhq'){
						sm =  ['coupon', 'couponOverdue', 'vipChange']
					}else if(v.value == 'ye'){
						sm =  ['integralChange', 'balanceChange', 'activity']
					}
					try {
						await this.requestSM(sm)
					} catch (e) {
						this.jjmbxx = true
						return
					}
				}
				if (v.url) {
					this.jjmbxx = false
					this.goUrl(v.url, v)
				}
			},
		},
	};
</script>
<style lang="scss" scoped>
	.my-ability {
		.proList {
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			.item {
				background: #fff;
				padding: 40rpx 20rpx;
				width: 47%;
				margin: 0 20rpx 20rpx 0;
				border-radius: 20rpx;

				.num {
					font-size: 50rpx;
					font-weight: bold;
					margin-right: 10rpx;
				}

				.an {
					background: #333;
					border-radius: 40rpx;
					color: #fff;
					width: 100rpx;
					height: 46rpx;
				}
			}

			.m0 {
				margin-right: 0;
			}
		}
	}
</style>