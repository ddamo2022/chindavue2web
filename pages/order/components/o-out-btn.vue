<template>
	<view class="footer f-bt f-y-c p2" :style="{marginBottom:isIpx?'40rpx':'' }" v-if="order.state!=6 && order.state!=8 && order.state!=0 && (order.scene==1 || order.scene==2 )">
		<view class="flex f-y-c"></view>
		<view class="flex f-g-0">
			<block>
				<button type="default" hover-class="none" class="bs30 mr10"
					v-if="(order.scene==1 || order.scene==2) && order.state==1"
					@click.stop="$emit('op',{t:'qxdd',co:order})">{{$t("o-out-btn.cancel_order")}}</button>
				<button type="primary" hover-class="none" class="bs30 mr10" v-if="order.state==1"
					@click.stop="$emit('op',{t:'ljzf',co:order})" :style="{background:tColor,color:fontColor}">{{$t("o-out-btn.pay_now")}}</button>
				<button type="default" hover-class="none" class="bs30 mr10"
					v-if="orderSetting.onUserAllowRefunds==1 && order.state>1 && (order.scene==1 && order.state<=5 || order.scene==2 && order.state<=4)"
					@click.stop="$emit('op',{t:'sqtk',co:order})">{{$t("o-out-btn.apply_for_refund_btn")}}</button>
				<button type="default" hover-class="none" class="bs30 mr10"
					v-if="order.scene==1 && order.state==5 || order.scene==2 && order.state==4"
					@click.stop="$emit('op',{t:'qrsh',co:order})" style="color: #333;">{{$t("o-out-btn.confirm_receipt_btn")}}</button>
				<button type="default" hover-class="none" class="bs30 mr10" v-if="order.state==4"
					@click.stop="$emit('op',{t:'zlyd',co:order})">{{$t("o-out-btn.order_again")}}</button>
			</block>
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
		name: 'oInBtn',
		components: {

		},
		props: {
			order: {
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
				orderSetting: state => state.config.orderSetting,
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