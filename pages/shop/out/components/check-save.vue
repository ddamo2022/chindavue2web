<template>
	<view class="footer f-bt f-y-c p2" :style="{marginBottom:isIpx?'40rpx':'' }">
		<view>
			<view class="">
				{{$t("check-save.total")}}：<text class="font-size-lg wei text-color-primary neutra-font" :style="{color:tColor}">฿{{ dl.money }}</text>
			</view>
			<view class="f24 t-o-e neutra-font" v-if="dl.integral || dl.growth">	{{$t("check-save.estimated_earnings")}}
				<text :style="{color: style.color && style.color.btnColor || '#4cd964'}"
					v-if="dl.integral">{{dl.integralFormat}}{{copywriting.jfName || $t("check-save.points")}}</text>
				<block v-if="dl.exp">+<text :style="{color: style.color && style.color.textColor || '#f0ad4e'}">{{dl.expFormat}}{{copywriting.czzName || $t("check-save.growth_value")}}</text>
				</block>
			</view>
		</view>
		<button type="primary" class="f26" :style="{background:'#999'}" disabled="true" v-if="cd.delivery && cd.delivery.state==0">{{cd.delivery.msg}}</button>
		<button type="primary" :style="{background:tColor,color:fontColor}" @click="savePay" v-else>{{$t("check-save.order_now")}}</button>
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
			cd: {
				type: Object,
				default: {}
			},
		},
		computed: {
			...mapState(['sjxx']),
			...mapState({
				copywriting: state => state.layout.copywriting,
			}),
		},
		data() {
			return {

			}
		},
		methods: {
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
			width: 250rpx;
			text-align: center;
			padding: 0;
			height: 100%;
			line-height: 85rpx;
			border-radius: 60rpx !important;
			font-size: $font-size-lg;
		}
	}
</style>