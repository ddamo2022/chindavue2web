<template>
	<view class="footer f-bt f-y-c p2" :style="{marginBottom:isIpx?'40rpx':'' }">
		<view>
			<view class="neutra-font">
				{{$t("integral.total")}}：
				<text class="f32 wei" :style="{color:tColor}">{{dl.points}}{{$t("integral.points")}}</text>
				<text class="f32 wei" :style="{color:tColor}" v-if="dl.money>0">+฿{{dl.money}}</text>
			</view>
		</view>
		<view class="flex f-g-0">
			<button type="primary" :style="{background:tColor,color:fontColor}"
				@click="savePay">{{$t("integral.confirm_redemption")}}</button>
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