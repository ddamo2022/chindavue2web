<template>
	<view>
		<uni-transition :mode-class="['slide-bottom']" :show="!!cartNum" :styles="cartBarStyles">
			<view>
				<view class="ac f-c p1 f24 neutra-font" v-if="!carOpen && cart.discountMoney>0">{{$t("cartbar.discount_applied")}}，
					{{$t("cartbar.total_discount")}}{{cart.discountMoney}}THB
				</view>
			</view>
			<view class="f-bt w-bg o-h" v-if="cart && cart.money">
				<view class="left">
					<view class="detail-action" @tap="details">
						<text class='iconfont icon-iconset0316 f60 cf'></text>
						<view class="badge f-c" :style="{backgroundColor:tColor,color:fontColor}">{{ cartNum }}</view>
					</view>
					<view>
						<view class="price l-h1 neutra-font">฿{{ cart.money }}
							<text class="t-d-l ml10 f24 c9 nowei" v-if="cart.money && cart.lineMoney && (Number(cart.lineMoney)>Number(cart.money))">฿{{ cart.lineMoney }}</text>
						</view>
						<view class="c9 f22 mt5" v-if="cart.diningType==0 && (cart.deliveryMoney && cart.deliveryMoney.money>0)">{{$t("cartbar.additional_delivery_fee")}}:฿{{cart.deliveryMoney.money}}</view>
					</view>
				</view>
				<button type="primary" class="right rnormal neutra-font"  disabled="true" :style="{backgroundColor:'#999'}" v-if="cart.deliveryMoney && cart.deliveryMoney.state==0">{{cart.deliveryMoney.msg}}</button>
				<button type="primary" class="right" :style="{backgroundColor:tColor,color:fontColor,width:'95px',padding:'0'}" v-else @tap="pay">{{copywriting.btnName || $t("cartbar.proceed_to_checkout")}}</button>
			</view>
		</uni-transition>
		<cart-popup v-if="dType=='out'" :cart="cart.goodsList || []" :cr="cart" ref="cartPopup" @add="add" @minus="minus" @clear="clear" @change="carClose"></cart-popup>
		<in-cart-popup v-else :cart="cart.goodsList || []" :cr="cart" ref="cartPopup" @add="add" @minus="minus" @clear="clear" @change="carClose" :storeInfo="storeInfo"></in-cart-popup>
	</view>
</template>

<script>
import uniTransition from '@/components/uni-transition/uni-transition.vue'
import cartPopup from '../cart-popup/cart-popup.vue'
import inCartPopup from '../cart-popup/in-cart-popup.vue'
import {mapState} from 'vuex'
export default {
	name: 'CartBar',
	components: {
		uniTransition,
		cartPopup,
		inCartPopup,
	},
	props: {
		cart: {
			type: Object,
			default: () => {}
		},
		storeInfo: {
			type: Object,
			default: () => {}
		},
		dType: {
			type: String,
			default: () => 'out'
		}
	},
	computed: {
		cartNum() {
			return this.cart.goodsCount
		},
		...mapState({
			copywriting: state => state.layout.copywriting,
		}),
	},
	data() {
		return {
			cartBarStyles: {
				'position': 'fixed',
				'bottom': '140rpx',
				// #ifdef H5
				// 'bottom': 'var(--window-bottom)',
				'bottom': '70px',
				// #endif
				'width': '100%',
				'z-index': '995',
				// #ifdef H5
				// 'z-index': '995',
				// #endif
				// 'height': '220rpx',
				'padding': '30rpx',
				'background-color': '#fff',
				'background': 'transparent',
				// 'border-bottom': '2rpx solid #c8c7cc',
				'display': 'flex',
				'flex-direction': 'column',
				'justify-content': 'space-between',
				'align-items': 'stretch',
			},
			carOpen:false,
		}
	},
	methods: {
		details() {
			this.$refs['cartPopup'].open()
			setTimeout(()=>{
				this.carOpen = true
			},0)
		},
		add(product) {
			product.id = product.spuId
			this.$emit('add', {
				g: product,
				addwz: 1,
			})
		},
		minus(product) {
			product.id = product.spuId
			this.$emit('minus', {
				g: product,
				addwz: -1,
			})
		},
		carClose(){
			this.carOpen = false
		},
		clear() {
			this.$emit('clear')
		},
		pay() {
			this.$emit('pay')
		}
	},
	watch: {
		cartNum(val) {
			if(!val) {
				this.$refs['cartPopup'].close()
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	.w-bg{
		height: 57px;
		border-radius: 60rpx;
		background: #323232;
	}
.left {
	display: flex;
	align-items: center;

	.detail-action {
		height: 100%;
		border-radius: 100%;
		background-color: #ffffff;
		background: transparent;
		// box-shadow: 0 10rpx 10rpx 0 rgba($color: $border-color, $alpha: 0.2);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 90rpx;
		height: 90rpx;
		// margin-top: -20rpx;
		margin-right: 20rpx;
		margin-left: 20rpx;

		.shopbag-btn {
			width: 70rpx;
			height: 70rpx;
		}

		.badge {
			// background-color: $color-primary;
			font-size: 20rpx;
			color: #000;
			line-height: 1rem;
			// width: 1rem;
			padding: 2rpx 6rpx;
			text-align: center;
			border-radius: 50%;
			position: absolute;
			right: 0;
			top: 0;
			width: 38rpx;
			height: 38rpx;
		}
	}

	.price {
		font-size: $font-size-extra-lg;
		font-weight: bold;
		color: $text-color-inverse;
	}
}

.right {
	display: flex;
	justify-content: center;
	align-items: center;
	// padding: 0 40rpx;
	border-radius: 0 !important;
	font-size: $font-size-lg;
}

.rnormal{
	padding: 0 20rpx;
	font-size: 26rpx
}

.ac{
	height: 34px;
	background: #FFF7E2;
	border-radius: 20rpx;
	z-index: -1;
}
</style>
