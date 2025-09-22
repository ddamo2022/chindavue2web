<template>
	<view class="footer f-bt f-y-c p2" :style="{marginBottom:isIpx?'40rpx':'' }">
		<view>
			<!-- <view class="" v-if="dl.diningType == 4">
				合计：<text class="f32 wei text-color-primary" :style="{color:tColor}">฿{{ dl.money }}</text>
			</view> -->
			<view  style="display: none;" class="f24 t-o-e" v-if="dl.integral || dl.growth">{{$t("in_goods_components.expected_to_gain")}}
				<text :style="{color: style.color && style.color.btnColor || '#4cd964'}"
					v-if="dl.integral">{{dl.integralFormat}}{{  $t("in_goods_components.points")}}</text>
				<block v-if="dl.exp">+<text
						:style="{color: style.color && style.color.textColor || '#f0ad4e'}">{{dl.expFormat}}{{ $t("in_goods_components.points")}}</text>
				</block>
			</view>
		</view>
		<view class="flex f-g-0">
			<button type="default" class="cf mr20" @click="jxdc" :style="{color:'#000'}">{{$t("in_goods_components.continue_ordering")}}</button>
			<button type="primary" :style="{background:tColor,color:fontColor}"
				@click="savePay">{{dl.payType==1?$t("in_goods_components.place_and_pay"):$t("in_goods_components.place_order_now")}}</button>
		</view>
		<view v-if="isIpx" class='bgf'></view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		name: 'checkGoods',
		components: {

		},
		props: {
			dl: {
				type: Object,
				default: {}
			},
			pl: {
				type: Object,
				default: {}
			},
			style: {
				type: Object,
				default: {}
			},
		},
		computed: {
			...mapState(['sjxx']),
			...mapState({

			}),
		},
		data() {
			return {

			}
		},
		methods: {
			jxdc() {
				this.go({
					t: 4
				})
			},
			savePay() {
				this.$emit('spay')
			},
		}
	}
</script>

<style scoped lang="scss">
	.pro-img {
		width: 120rpx;
		height: 90rpx;
		flex-shrink: 0;
	}

	.footer {
		box-shadow: 0rpx 4rpx 20rpx 0rpx rgba(221, 221, 221, 0.8);
		background-color: #FFFFFF;
		z-index: 10;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 125rpx;

		button {
			width: 170rpx;
			text-align: center;
			padding: 0;
			height: 100%;
			line-height: 70rpx;
			border-radius: 60rpx !important;
			font-size: 30rpx;
		}
	}
</style>