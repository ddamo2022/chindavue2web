<template>
	<view class="order-box bs20 p3 mt20 flex-fill o-h">
		<view class="order-info w-100">
			<view class="f-bt b-b-e pb20 f-y-c">
				<view class="f-g-1">
					<view class="wei f30">{{ order.store.name }}</view>
					<view class="f24 c9">{{ order.store.address }}</view>
				</view>
				<view class="f-g-0 flex">
					<view class="icon-bg1 bsf f-c" @click="openline()">
						<image style="width: 20px;height: 20px" src="/static/line-icon.png"></image>
					</view>
					<view class="icon-bg1 ml20 bsf f-c" @click="util.makeTel(order.store.storeMobile)">
						<text class="iconfont icon-dianhua1 f34 c6"></text>
					</view>
					<view class="icon-bg ml20 f-c bs30">
						<text class="f24" @click.stop="ckwz(order.store)">{{$t("o-discount.navigation")}}</text>
						<text class="iconfont icon-daohang1 f34 c6"></text>
					</view>
				</view>
			</view>
			<view class="b-b-e pb20" v-if="order.subOrder || order.goods">
				<block v-if="order.diningType==4 && order.subOrder">
					<view class="o-h"
						:style="{height: order.subOrder && order.subOrder.length>3 && !zkshow?'510rpx':'auto'}">
						<view v-for="(v, i) in order.subOrder" :key="i">
							<view class="f-bt f24 mt20 c0" v-if="order.subOrder.length>1">
								<view class="f-g-1">
									{{$t("o-discount.order_count1")}}{{v.addNum}}{{$t("o-discount.order_count2")}}
								</view>
								<view class="flex f-g-0">
									<view class="mr10">{{v.stateFormat}}</view>
									<view class="c9 f22">{{v.created_at}}</view>
								</view>
							</view>
							<view class="f-bt mt20" v-for="(cv, ci) in v.goods" :key="ci">
								<view class="f-g-1 f-bt">
									<view class="f-g-0 images mr10">
										<image :src="cv.logo" class="bs10" mode="aspectFill"></image>
									</view>
									<view class="f-g-1 ml10">
										<view class="f28 wei flex l-h1">
											<view class="flex">
												<view class="tui" v-if="cv.state==8">{{cv.discountLabel}}</view>
												{{ cv |localizedName }}
											</view>
											<view class="tlabel ml5" :style="{color:'#FF3131',borderColor:'#FF3131'}"
												v-if="cv.discountType">{{cv.discountLabel}}</view>
										</view>
										<!-- <view class="flex">
											<view class="l-s mr10 f-nw f-g-0 f-c" :style="{color:tColor,borderColor:tColor}" v-if="v.packagingFormat">{{v.packagingFormat}}</view>
										</view> -->
										<view class="f24 c9">
											<text v-if="cv.attrData.spec">[{{cv.attrData.spec}}]</text>
											<text v-if="cv.attrData.attr">[{{cv.attrData.attr}}]</text>
											<text v-if="cv.attrData.matal">{{cv.attrData.matal}}</text>
										</view>
										<view class="f24 c9" v-if="cv.setMealData && cv.setMealData.length">
											<view v-for="(pv,pi) in cv.setMealData" :key="pi">{{pv.name}}*{{pv.num}}
												<text v-if="pv.attrData && pv.attrData.attr"
													class="ml10">[{{ pv.attrData.attr }}]</text>
												<text v-if="pv.attrData && pv.attrData.matal"
													class="ml10">[{{ pv.attrData.matal }}]</text>
											</view>
										</view>
									</view>
								</view>
								<view class="f-g-0 f-y-bt">
									<view class="wei l-h1 t-r neutra-font">
										<view>฿{{ cv.money }}</view>
										<view class="f20 c9 t-d-l nowei"
											v-if="cv.sellMoney && cv.money && Number(cv.sellMoney) > Number(cv.money)">
											฿{{cv.sellMoney}}</view>
									</view>
									<view class="f24 f-x-e c9">x{{ cv.num }}</view>
								</view>
							</view>
							<!-- <view class="f-x-e mt10">
								<button type="default" hover-class="none" class="bs30 mr10 f20" v-if="v.state==2" @click.stop="$emit('op',{t:'insqxdd',co:v})">取消订单</button>
							</view> -->
						</view>
						<view class="f-bt mt20" v-if="order.tableMoney>0">
							<view class="flex f28 wei f-g-1">{{ order.tableFormat || $t("o-discount.service_fee") }}
							</view>
							<view class="f-g-0 flex f-y-c">
								<view class="f24 c9 mr30">x{{ order.tableNum }}</view>
								<view class="wei neutra-font">฿{{ order.tableMoney }}</view>
							</view>
						</view>

						 
					</view>
					<view class="f-g-1 f-c">
						<view @click="zkshow=!zkshow" v-if="order.subOrder.length>3" class="f-c f26 l-h1 zhed">
							<view>
								{{zkshow? $t("o-discount.collapse_all") :$t("o-discount.view_all")}}({{order.subOrder.length}})
							</view>
							<text class="iconfont icon-top c3 ml5 f28" :class="{'xzdw':!zkshow}"></text>
						</view>
					</view>
				</block>
				<block v-else>
					<view class="o-h" :style="{height: order.goods && order.goods.length>3 && !zkshow?'510rpx':'auto'}">
						<view class="f-bt mt20" v-for="(v, i) in order.goods" :key="i">
							<view class="f-g-1 f-bt">
								<view class="f-g-0 images mr10">
									<image :src="v.logo" class="bs10" mode="aspectFill"></image>
								</view>
								<view class="f-g-1 f-y-bt ml10">
									<view class="f28 wei">{{ v |localizedName }}</view>
									<view class="f24 c9">
										<text v-if="v.attrData.spec">[{{v.attrData.spec}}]</text>
										<text v-if="v.attrData.attr">[{{v.attrData.attr}}]</text>
										<text v-if="v.attrData.matal">{{v.attrData.matal}}</text>
									</view>
									<view class="f24 c9" v-if="v.setMealData && v.setMealData.length">
										<view v-for="(cv,ci) in v.setMealData" :key="ci">{{cv.name}}*{{cv.num}}
											<text v-if="cv.attrData && cv.attrData.attr"
												class="ml10">[{{ cv.attrData.attr }}]</text>
											<text v-if="cv.attrData && cv.attrData.matal"
												class="ml10">[{{ cv.attrData.matal }}]</text>
										</view>
									</view>
									<view class="flex" v-if="v.discountLabel">
										<view class="goodLabel">{{v.discountLabel}}</view>
									</view>
								</view>
							</view>
							<view class="f-g-0 f-y-bt neutra-font">
								<view class="wei">฿{{ v.money }}
									<text class="f20 c9 t-d-l nowei"
										v-if="v.sellMoney && v.money && Number(v.sellMoney) > Number(v.money)">฿{{v.sellMoney}}</text>
								</view>
								<view class="f24 f-x-e c9">x{{ v.num }}</view>
							</view>
						</view>
					</view>
					<view class="f-g-1 f-c">
						<view @click="zkshow=!zkshow" v-if="order.goods && order.goods.length>3"
							class="f-c f26 l-h1 zhed">
							<view>
								{{zkshow?$t("o-discount.collapse_all") :$t("o-discount.view_all")}}({{order.goods.length}})
							</view>
							<text class="iconfont icon-top c3 ml5 f28" :class="{'xzdw':!zkshow}"></text>
						</view>
					</view>
				</block>
				<view class="f-bt mt20" v-if="order.boxMoney>0">
					<view class="f-g-1 flex f-y-c">
						<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">包</view>
						<view>{{$t("o-discount.packing_fee") }}</view>
					</view>
					<view class="f-g-0 c0 f-y-c neutra-font">
						<text>฿{{order.boxMoney}}</text>
					</view>
				</view>
				<view class="f-bt mt20" v-if="order.deliveryMoney>0">
					<view class="f-g-1 flex f-y-c">
						<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">配</view>
						<view>{{$t("o-discount.delivery_fee") }}</view>
					</view>
					<view class="f-g-0 c0 f-y-c neutra-font">
						<text>฿{{order.deliveryMoney}}</text>
					</view>
				</view>
				<block v-if="order.discountsPlus && order.discountsPlus.length">
					<view class="f-bt mt20" v-for="(v,i) in order.discountsPlus" :key="i">
						<view class="f-g-1 flex f-y-c">
							<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}"
								v-if="v.title && v.title.length<=1">{{v.title}}</view>
							<view>{{v.activityName}}</view>
						</view>
						<view class="f-g-0 c9 f-y-c neutra-font">
							<text class="cfa">-฿{{v.money}}</text>
						</view>
					</view>
				</block>

				<!-- <view class="f-bt mt20" v-if="order.discounts && order.discounts.fullsub">
					<view class="f-g-1 flex f-y-c">
						<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">减</view>
						<view>满减优惠</view>
					</view>
					<view class="f-g-0 c9 f-y-c">
						<text class="cfa">-฿{{order.discounts.fullsub.money}}</text>
					</view>
				</view>
				<view class="f-bt mt20" v-if="order.discounts && order.discounts.newSub">
					<view class="f-g-1 flex f-y-c">
						<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">新</view>
						<view>新客立减</view>
					</view>
					<view class="f-g-0 c9 f-y-c">
						<text class="cfa">-฿{{order.discounts.newSub.money}}</text>
					</view>
				</view>
				<view class="f-bt mt20" v-if="order.discounts && order.discounts.coupon">
					<view class="f-g-1 flex f-y-c">
						<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">劵</view>
						<view>{{ order.discounts.coupon.activityName}}</view>
					</view>
					<view class="f-g-0 c9 f-y-c">
						<text class="cfa">-฿{{order.discounts.coupon.money}}</text>
					</view>
				</view>
				<view class="f-bt mt20" v-if="order.discounts && order.discounts.deliveryCoupon">
					<view class="f-g-1 flex f-y-c">
						<view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">劵</view>
						<view>{{ order.discounts.deliveryCoupon.activityName}}</view>
					</view>
					<view class="f-g-0 c9 f-y-c">
						<text class="cfa">-฿{{order.discounts.deliveryCoupon.money}}</text>
					</view>
				</view> -->
			</view>
			<view class="b-b-e pb20" v-if="order.scene==6 && order.activity">
				<!-- <view v-for="(v,i) in order.couponGive" :key="i" class="f-bt f24 mt10">
					<view class="f-g-1 t-o-e">{{v.name}}</view>
					<view class="f-g-0">x{{v.num}}</view>
				</view> -->
				<view class="t-c f28 wei mt20">{{order.activity.name}}</view>
			</view>
			<view class="f-bt mt20" v-if="order.tableMoney>0">
				<view class="flex f28 wei f-g-1">{{ order.tableFormat || $t("o-discount.service_fee") }}
				</view>
				<view class="f-g-0 flex f-y-c">
					<view class="f24 c9 mr30">x{{ order.tableNum }}</view>
					<view class="wei neutra-font">฿{{ order.tableMoney }}</view>
				</view>
			</view>
			
			<view class="f-bt mt20" v-if="order.vatMoney>0">
				<view class="flex f28 wei f-g-1">
					{{$t("pay_order.vatMoney")}}({{ (order.vatValue * 100).toFixed(0) }}%)</view>
				<view class="f-g-0 flex f-y-c">
					<view class="wei neutra-font">฿{{ order.vatMoney }}</view>
				</view>
			</view>
			
			<view class="f-bt mt20" v-if="order.taxIncluded>0">
				<view class="flex f28 wei f-g-1">{{$t("pay_order.taxIncluded")}}</view>
				<view class="f-g-0 flex f-y-c">
					<view class="wei neutra-font">฿{{ order.taxIncluded }}</view>
				</view>
			</view>
			
			<view class="f-bt mt20" v-if="order.taxIncluded>0">
				<view class="flex f28 wei f-g-1">{{$t("pay_order.totaltax")}}</view>
				<view class="f-g-0 flex f-y-c">
					<view class="wei neutra-font">฿{{ totaltax }}</view>
				</view>
			</view>
			
			<view class="f-bt mt20" v-if="order.serviceMoney>0">
				<view class="flex f28 wei f-g-1">
					{{$t("pay_order.serviceMoney")}}({{ (order.serviceValue * 100).toFixed(0) }}%)</view>
				<view class="f-g-0 flex f-y-c">
					<view class="wei neutra-font">฿{{ order.serviceMoney }}</view>
				</view>
			</view>
			
			<view class="f-x-e f-y-c mt20">
				<!-- <view class="mr10">共{{order.goods && order.goods.length}}件商品</view> -->
				<view class="f28 mr10" v-if="order.discountMoney>0">
				 {{$t("o-discount.discount_applied")}} <text
						class="cfa neutra-font">฿{{order.discountMoney}}</text>
				</view>
				<view class="mr10">{{$t("o-discount.total")}}:</view>
				<view class="wei f38 t-r neutra-font">
					<text>฿{{ order.money }}</text>
					<text class="c9 f24 nowei t-d-l ml10"
						v-if="order.money && order.sellMoney && (Number(order.sellMoney)>Number(order.money))">฿{{ order.sellMoney }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import i18n from '@/locale/index.js'
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
		filters: {
			localizedName(value) {
				console.log(value)
				const locale = i18n.locale; // 获取当前语言
				if (locale === 'en') {
					return value.name_en || value.name;
				} else if (locale === 'th') {
					return value.name_th || value.name;
				} else {
					return value.name;
				}
			}
		},
		computed: {
			// ...mapState(['sjxx']),

			totaltax() {
				const total = Number(this.order.taxIncluded) + Number(this.order.vatMoney);
				return total.toFixed(2); // 保留两位小数
			}
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
			openline() {
				window.location.href = "https://lin.ee/LbRIZeN"; // 在
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
				width: 100rpx;
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

	.l-s {
		padding: 3rpx 8rpx;
		height: 40rpx;
		font-size: 22rpx;
		border-radius: 4rpx;
		border: 2rpx solid $color-primary;
		color: $color-primary;
	}

	.tlabel {
		padding: 2rpx 4rpx;
		font-size: 20rpx;
		font-weight: normal;
		color: #fff;
		border-radius: 6rpx;
		margin-right: 10rpx;
		border: 2rpx solid #f5f5f5;
	}

	.tui {
		padding: 2rpx 4rpx;
		font-size: 20rpx;
		font-weight: normal;
		color: #fff;
		border-radius: 6rpx;
		margin-right: 10rpx;
		background: #3E77B9;
	}
</style>