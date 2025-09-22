<template>
	<view class="footer f-bt f-y-c p2" :style="{marginBottom:isIpx?'40rpx':'' }"
		v-if="(order.diningType==4 && order.state!=6 && order.state!=8 && order.state!=0) || ((order.diningType==5 || order.diningType==6) && order.state!=3 && order.state!=6 && order.state!=8)">
		<view class="flex f-y-c">
			<block v-if="order.diningType==4 && order.state==3 && order.payType==2">
				<view class="f22 c9">{{$t("o-in-btn.pending_payment_in_btn")}}:</view>
				<view>
					<text class="f22" :style="{color:'#f00'}">฿</text>
					<text class="f40 wei" :style="{color:'#f00'}">{{order.money}}</text>
				</view>
			</block>
		</view>
		<view class="flex f-g-0">
			<block v-if='order.diningType==4 || order.diningType==5 || order.diningType==6'>
				<button type="default" hover-class="none" class="bs30 mr10 wei" v-if="order.state==2"
					@click.stop="$emit('op',{t:'insqxdd',co:order})" :style="{color:'#000'}">{{$t("o-in-btn.cancel_order")}}</button>
				<!-- <button type="default" hover-class="none" class="bs30 mr10"
					v-if="orderSetting.onUserAllowRefunds==1 && (order.diningType==5 || order.diningType==6) && (order.state>=3 && order.state<=4)"
					@click.stop="$emit('op',{t:'insqtk',co:order})">申请退款</button> -->
				<button type="default" hover-class="none" class="bs30 mr10 wei"
					v-if="(order.diningType==5 || order.diningType==6) && order.state==4"
					@click.stop="$emit('op',{t:'inwcdd',co:order})" :style="{color:'#000'}">{{$t("o-in-btn.complete_order_in_btn")}}</button>
				<button type="default" hover-class="none" class="bs30 mr10 wei" v-if="order.addFood"
					@click.stop="$emit('op',{t:'jc',co:order})" :style="{color:'#000'}">{{$t("o-in-btn.continue_adding_dishes")}}</button>
				<button type="primary" hover-class="none" class="bs30 mr10 wei" disabled="disabled"
					v-if="order.diningType==4 && order.store.inStoreSetting && order.store.inStoreSetting.order.setting==2 && (order.state==1 || order.state==3 && order.payType==2 )"
					:style="{background:tColor,color:fontColor}" style="width:280rpx">{{$t("o-in-btn.contact_waiter_for_payment")}}</button>
				<button type="primary" hover-class="none" class="bs30 mr10 wei"
					v-if="order.state==1 && (!order.store.inStoreSetting || order.store.inStoreSetting.order.setting!=2) || order.state==3 && order.payType==2 && order.store.inStoreSetting.order.setting!=2"
					@click.stop="$emit('op',{t:'ljzf',co:order})" :style="{background:tColor,color:fontColor}">{{$t("o-in-btn.pay_immediately_in_btn")}}</button>
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