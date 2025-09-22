<template>
	<view class="order-box bs20 p3 mt20 flex-fill o-h">
		<view class="order-info w-100">
			<view class="f-bt b-b-e pb20 f-y-c">
				<view class="f-g-1">
					<view class="wei f30">{{ order.store.name }}</view>
					<view class="f24 c9">{{ order.store.address }}</view>
				</view>
				<view class="f-g-0 flex">
					<view class="icon-bg1 bsf f-c" @click="util.makeTel(order.store.storeMobile)">
						<text class="iconfont icon-dianhua1 f34 c6"></text>
					</view>
					<view class="icon-bg ml20 f-c bs30">
						<text class="f24" @click.stop="ckwz(order.store)">{{$t("in_goods_components.navigation")}}</text>
						<text class="iconfont icon-daohang1 f34 c6"></text>
					</view>
				</view>
			</view>
			<view class="b-b-e pb20">
				<view class="o-h" :style="{height: order.goods && order.goods.length>3 && !zkshow?'510rpx':'auto'}">
					<view class="f-bt mt20" v-for="(v, i) in order.goods" :key="i">
						<view class="f-g-1 f-bt">
							<view class="f-g-0 images mr10">
								<image :src="v.logo" class="bs10" mode="scaleToFill"></image>
							</view>
							<view class="f-g-1">
								<view class="f30 wei">{{ v.name }}</view>
								<view class="f24 c9">
									<text v-if="v.attrData.spec">[{{v.attrData.spec}}]</text>
									<text v-if="v.attrData.attr">[{{v.attrData.attr}}]</text>
									<text v-if="v.attrData.matal">{{v.attrData.matal}}</text>
									<!-- {{ materialsText(item.materials) }} -->
								</view>
							</view>
						</view>
						<view class="f-g-0">
							<view class="wei">฿{{ v.money }}</view>
							<view class="f24 f-x-e c9">x{{ v.num }}</view>
						</view>
					</view>
				</view>
				<view class="f-g-1 f-c">
					<view @click="zkshow=!zkshow" v-if="order.goods.length>3" class="f-c f26 l-h1 zhed">
						<view>{{zkshow?$t("in_goods_components.collapse_all"):$t("in_goods_components.view_all")}}({{order.goods.length}})</view>
						<text class="iconfont icon-top c3 ml5 f28" :class="{'xzdw':!zkshow}"></text>
					</view>
				</view>
				<view class="f-bt mt20" v-if="order.boxMoney>0">
					<view class="f-g-1 flex f-y-c">
						<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor}">{{$t("in_goods_components.package")}}</view>
						<view>{{$t("in_goods_components.packaging_fee")}}</view>
					</view>
					<view class="f-g-0 c0 f-y-c">
						<text>฿{{order.boxMoney}}</text>
					</view>
				</view>
				<view class="f-bt mt20" v-if="order.discounts && order.discounts.fullsub">
					<view class="f-g-1 flex f-y-c">
						<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor}">{{$t("in_goods_components.discount")}}</view>
						<view>{{$t("in_goods_components.discount_offer")}}</view>
					</view>
					<view class="f-g-0 c9 f-y-c">
						<text class="cfa">-฿{{order.discounts.fullsub.money}}</text>
					</view>
				</view>
				<view class="f-bt mt20" v-if="order.discounts && order.discounts.newSub">
					<view class="f-g-1 flex f-y-c">
						<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor}">{{$t("in_goods_components.new")}}</view>
						<view>{{$t("in_goods_components.new_customer_discount")}}</view>
					</view>
					<view class="f-g-0 c9 f-y-c">
						<text class="cfa">-฿{{order.discounts.newSub.money}}</text>
					</view>
				</view>
				<view class="f-bt mt20" v-if="order.discounts && order.discounts.coupon">
					<view class="f-g-1 flex f-y-c">
						<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor}">{{$t("in_goods_components.coupon")}}</view>
						<view>{{ order.discounts.coupon.activityName}}</view>
					</view>
					<view class="f-g-0 c9 f-y-c">
						<text class="cfa">-฿{{order.discounts.coupon.money}}</text>
					</view>
				</view>
				<view class="f-bt mt20" v-if="order.discounts && order.discounts.deliveryCoupon">
					<view class="f-g-1 flex f-y-c">
						<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor}">{{$t("in_goods_components.coupon")}}</view>
						<view>{{ order.discounts.deliveryCoupon.activityName}}</view>
					</view>
					<view class="f-g-0 c9 f-y-c">
						<text class="cfa">-฿{{order.discounts.deliveryCoupon.money}}</text>
					</view>
				</view>
			</view>
			<view class="f-x-e f-y-c mt20">
				<!-- <view class="mr10">共{{order.goods && order.goods.length}}件商品</view> -->
				<view class="f28 mr10" v-if="order.discountMoney">{{$t("in_goods_components.discount_applied")}} <text class="cfa">฿{{order.discountMoney}}</text>
				</view>
				<view class="mr10">{{$t("in_goods_components.total_amount")}}:</view>
				<view class="wei f38">฿{{ order.money }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'dlDiscount',
		components: {

		},
		props: {
			order: {
				type: Object,
				default: {}
			},
		},
		computed: {
			// ...mapState(['sjxx']),
		},
		data() {
			return {
				zkshow: false,
			}
		},
		methods: {
			ckwz(v) {
				this.util.ckWz({
					lat: v.lat,
					lng: v.lng,
					name: v.name,
					address: v.address,
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.order-box {
		z-index: 10;
		// box-shadow: 0 0 20rpx 0 rgba($color: #333, $alpha: 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: $bg-color-white;
		flex-shrink: 0;

		.images {
			image {
				flex-shrink: 0;
				width: 110rpx;
				height: 100rpx;
			}
		}

		.line {
			border: 2rpx dashed #DAD8D9;
			margin: 0 20rpx;
			width: 80rpx;
		}

		.cg {
			color: #DAD8D9;
		}
	}

	.order-info {
		.icon-bg1 {
			width: 50rpx;
			height: 50rpx;
			border: 1px solid #f2f2f2;
		}

		.icon-bg {
			width: 130rpx;
			height: 50rpx;
			border: 1px solid #f2f2f2;
		}
	}
</style>