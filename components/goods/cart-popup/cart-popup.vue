<template>
	<uni-popup ref="popup" type="bottom" :sname="{bottom:'172rpx'}" tBom="172" @change="change">
		<view class="cart-popup">
			<view class="ac f-c p1 f24 neutra-font" v-if="cr.discountMoney>0">{{$t("cart-popup.discount_applied")}}，{{$t("cart-popup.total_discount")}}{{cr.discountMoney}}THB</view>
			<view class="header">
				<view class="order-type">
					<view class="font-weight-bold">{{$t("cart-popup.selected_items")}}</view>
					<!-- <view class="extra">自提/外送</view> -->
				</view>
				<view class="flex aict" @tap="clearCar">
					<text class='iconfont icon-shanchu f28 c9 mr10'></text>
					<view>{{$t("cart-popup.clear")}}</view>
				</view>
			</view>
			<scroll-view scroll-y class="content">
				<view class="wrapper">
					<view class="list">
						<view class="item" v-for="(v, i) in cart" :key="i">
							<view class="left f-y-t">
								<image :src="v.goods.logo" class="image bs10 mr10" mode="aspectFill"></image>
							</view>
							<view class="right">
								<view class="name-and-materials">
									<view class="name">{{ v.goods | localizedName }}</view>
									<view class="flex f-w">
										<view class="materials" v-if="v.attrData && v.attrData.spec">[{{ v.attrData.spec }}]</view>
										<view class="materials" v-if="v.attrData && v.attrData.attr">[{{ v.attrData.attr }}]</view>
										<view class="materials" v-if="v.attrData && v.attrData.matal">{{ v.attrData.matal }}</view>
										<view class="materials" v-if="v.setMealData && v.setMealData.length">
											<view v-for="(cv,ci) in v.setMealData" :key="ci">{{cv.name}}*{{cv.num}}
												<text v-if="cv.attrData && cv.attrData.attr" class="ml10">[{{ cv.attrData.attr }}]</text>
												<text v-if="cv.attrData && cv.attrData.matal" class="ml10">[{{ cv.attrData.matal }}]</text>
											</view>
										</view>
									</view>
								</view>
								<view class="flex" v-if="v.discountLabel">
									<view class="goodLabel">{{v.discountLabel}}</view>
								</view>
								<view class="price-and-actions f-y-c">
									<view class="price neutra-font">
										฿{{ v.money }}
										<text class="f22 c9 t-d-l ml5" v-if="v.sellMoney && v.money && (Number(v.sellMoney) > Number(v.money))">฿{{ v.sellMoney }}</text>
									</view>
									<actions :number="v.num" @add="add(v)" @minus="minus(v)"></actions>
								</view>
							</view>
						</view>
						<!-- <view v-if="cr.diningType==0 && (cr.deliveryMoney && cr.deliveryMoney.money>0)">另需配送费：฿{{cr.deliveryMoney.money}}</view> -->
						<view>
							<view v-if="cr.boxMoney>0" class="neutra-font">{{$t("cart-popup.packaging_fee")}}：฿{{cr.boxMoney}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import actions from '../actions/actions.vue'
    import i18n from  '@/locale/index.js'
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		components: {
			uniPopup,
			actions
		},
		props: {
			cart: {
				type: Array,
				default: () => []
			},
			cr: {
				type: Object,
				default: () => {}
			},
		},
		computed: {
			...mapState(['sjxx']),
		},
		filters: {
			localizedName(value) {
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
		methods: {
			...mapActions(['clearMycar', "getMycar"]),
			open() {
				this.$refs['popup'].open()
			},
			close() {
				this.$refs['popup'].close()
			},
			change({
				show
			}) {
				if(!show){
					this.$emit('change', show)
				}
			},
			add(item) {
				this.$emit('add', item)
			},
			minus(item) {
				this.$emit('minus', item)
			},
			async clearCar() {
				try {
					await this.util.modal(this.$t("cart-popup.confirm_cart_clear"))
					await this.clearMycar({
						storeId: this.sjxx.id,
					})
					this.$emit('clear')
				} catch (e) {}
			},
		}
	};
</script>

<style lang="scss" scoped>
	.cart-popup {
		background-color: $bg-color-white;
		margin-bottom: 150rpx;
		padding-bottom: 130rpx;
		border-radius: 30rpx 30rpx 0 0;
		position: relative;
	}

	.header {
		padding: 20rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid rgba($color: $border-color, $alpha: 0.6);
		font-size: $font-size-sm;
		color: $text-color-assist;

		.order-type {
			display: flex;
			align-items: center;
			font-size: $font-size-sm;
			color: $text-color-base;

			.extra {
				margin-right: 10rpx;
				border: 2rpx solid $color-primary;
				font-size: 18rpx;
				padding: 2rpx 10rpx;
				color: $color-primary;
				margin-left: 10rpx;
			}
		}

		.delete-btn {
			width: 46rpx;
			height: 46rpx;
			margin-right: 10rpx;
		}
	}

	.content {
		max-height: calc(100vh - 600rpx);

		.wrapper {
			width: 100%;
			height: 100%;
			padding: 0 30rpx;
		}

		.list {
			display: flex;
			flex-direction: column;
			margin-bottom: 30rpx;

			.item {
				display: flex;
				align-items: stretch;
				padding: 30rpx 0;
				position: relative;

				// &:after {
				// 	content: ' ';
				// 	position: absolute;
				// 	bottom: 0;
				// 	left: 180rpx;
				// 	right: 0;
				// 	border-bottom: 1rpx solid rgba($color: $border-color, $alpha: 0.6);
				// }

				.left {
					flex-shrink: 0;
					display: flex;
					align-items: flex-start;

					.image {
						width: 120rpx;
						height: 120rpx;
					}
				}

				.right {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					font-size: $font-size-medium;
					color: $text-color-base;

					.name-and-materials {
						display: flex;
						flex-direction: column;
						margin-bottom: 20rpx;

						.name {
							font-weight: bold;
						}

						.materials {
							font-size: $font-size-sm;
							color: $text-color-assist;
						}
					}

					.price-and-actions {
						display: flex;
						justify-content: space-between;

						.price {
							color: $text-color-grey;
						}
					}
				}
			}
		}
	}
	
	.ac{
		height: 34px;
		background: #FFF7E2;
		border-radius: 20rpx;
	}
</style>
