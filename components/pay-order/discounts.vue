<template>
	<view>
		<view class="f-bt mt20" v-if="dl.boxMoney>0">
			<view class="f-g-1 flex f-y-c">
				<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">{{$t("discounts.package")}}</view>
				<view>	{{$t("discounts.packing-fee")}}</view>
			</view>
			<view class="f-g-0 c3 f-y-c neutra-font">
				<text>฿{{dl.boxMoney}}</text>
			</view>
		</view>
		<view class="f-bt mt20"
			v-if="dem==1 && (dl.delivery.money>0 || dl.delivery.origMoney > dl.delivery.money)">
			<view class="f-g-1 flex f-y-c">
				<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">{{$t("discounts.delivery")}}</view>
				<view>{{$t("discounts.delivery-fee")}}</view>
			</view>
			<view class="f-g-0 c3">
				<view class="f-x-e neutra-font">
					<text class="t-d-l c9 mr10" v-if="dl.delivery.discount">฿{{dl.delivery.origMoney}}</text>
					<text class="">฿{{dl.delivery.money}}</text>
				</view>
				<view>
					<text class="psyh cfa" v-if="dl.delivery.discount">{{$t("discounts.reduce")}}{{dl.delivery.discount}}THB{{$t("discounts.delivery-fee")}}</text>
				</view>
			</view>
		</view>
		<view class="f-bt mt20" v-if="dl.discounts && dl.discounts.fullsub">
			<view class="f-g-1 flex f-y-c">
				<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">{{$t("discounts.reduce")}}</view>
				<view>{{$t("discounts.full-reduction-promotion")}}</view>
			</view>
			<view class="f-g-0 c3 f-y-c neutra-font">
				<text class="cfa">-฿{{dl.discounts.fullsub.money}}</text>
			</view>
		</view>
		<view class="f-bt mt20" v-if="dl.discounts && dl.discounts.newSub">
			<view class="f-g-1 flex f-y-c">
				<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">{{$t("discounts.new")}}</view>
				<view>{{$t("discounts.new-customer-discount")}}</view>
			</view>
			<view class="f-g-0 c3 f-y-c neutra-font">
				<text class="cfa">-฿{{dl.discounts.newSub.money}}</text>
			</view>
		</view>
		<view class="f-bt mt20" v-if="dl.discounts && dl.discounts.vipDiscount">
			<view class="f-g-1 flex f-y-c">
				<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">{{$t("discounts.member")}}</view>
				<view>{{$t("discounts.member-discount")}}</view>
			</view>
			<view class="f-g-0 c3 f-y-c neutra-font">
				<text class="cfa">-฿{{dl.discounts.vipDiscount.money}}</text>
			</view>
		</view>
		<view class="f-bt mt20" v-if="dl.discounts && dl.discounts.deliverySub">
			<view class="f-g-1 flex f-y-c">
				<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">{{$t("discounts.reduce")}}</view>
				<view>{{$t("discounts.delivery-fee-full-reduction")}}</view>
			</view>
			<view class="f-g-0 c3 f-y-c neutra-font">
				<text class="cfa">-฿{{dl.discounts.deliverySub.money}}</text>
			</view>
		</view>
		<view class="f-bt mt20">
			<view class="f-g-1 flex f-y-c">
				<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">{{$t("discounts.coupon")}}</view>
				<view>{{$t("discounts.available-coupons")}}</view>
			</view>
			<view class="f-g-0 c9 f-y-c">
				<block v-if="dl.couponCount>0 && dl.couopnList">
					<text class='cfa neutra-font' @click="sCoupon"
						v-if="pl.couponId && dl.discounts && dl.discounts.coupon">-฿{{dl.discounts.coupon.money}}</text>
					<text class='cnum cfa neutra-font' @click="sCoupon"
						v-else>{{dl.couponCount}} {{$t("discounts.available")}}</text>
				</block>
				<text v-else>{{$t("discounts.no-available")}}</text>
				<text class='iconfont icon-gengduo f28 ml5 c9'></text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		name: 'Discounts',
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
			dem: {
				type: Number,
				default: 0
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
			sCoupon() {
				if (this.dl && this.dl.couopnList) {
					uni.setStorageSync('kyhb', this.dl.couopnList)
					this.go({
						t: 1,
						url: '/pages/shop/select/couponList?t=1&name=优惠券&couponId=' + this.pl.couponId
					})
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.cnum {
		border-radius: 20rpx;
		border: 2rpx solid #ff4d3a;
		font-size: 20rpx;
		padding: 2rpx 12rpx;
	}

	.psyh {
		border-radius: 4rpx;
		border: 2rpx solid #ff4d3a;
		font-size: 20rpx;
		padding: 2rpx 12rpx;
	}
</style>