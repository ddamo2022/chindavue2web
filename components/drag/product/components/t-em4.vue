<template>
	<view class="">
		<view class="mItemBg" v-for="(v, i) in styles.productName" :key="i" :style="{
			  borderTopLeftRadius: styles.tCircle  + u,
			  borderTopRightRadius: styles.tCircle  + u,
			  borderBottomRightRadius: styles.bCircle  + u,
			  borderBottomLeftRadius: styles.bCircle + u,
			}" @click="goGoods(v)">
			<view class="mItemImg">
				<mg-img :src="v.logo || imgMr"></mg-img>
			</view>
			<view class="mItemBody">
				<view class="mTit" v-if="styles.goodsMc == 1">{{v.name || '商品名称'}}</view>
				<view class="mTxt">
					<text v-if="styles.goodsMd == 1">{{v.desc || '商品描述'}}</text>
				</view>
				<view class="mPrice">
					<view>
						<text v-if="styles.goodsPrice == 1">
							<text v-if="v.specSwitch">฿{{v.minPrice}}~{{v.maxPrice}}</text>
							<text v-else>฿{{v.price || 0}}</text>
						</text>
						<text class="mInv" v-if="styles.goodsYj == 1 && !v.specSwitch">฿{{v.linePrice || 0}}</text>
					</view>
					<template v-if="styles.goodsJg == 1">
						<i v-if="styles.goodsJgSt == 1" class="iconfont icon-gouwuche f30"  :style="{color: tColor}"  />
						<i v-if="styles.goodsJgSt == 2" class="iconfont icon-jiahao2fill f30"  :style="{color: tColor}"  />
						<i v-if="styles.goodsJgSt == 3" class="iconfont icon-jiahao f30"  :style="{color: tColor}"  />
						<i v-if="styles.goodsJgSt == 4" class="iconfont icon-gouwuche2 f30"  :style="{color: tColor}"  />
						<i v-if="styles.goodsJgSt == 5" class="iconfont icon-gouwuche1 f30" :style="{color: tColor}"  />
					</template>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'tem4',
		props: {
			styles: {
				type: Object,
				default: function() {
					return {}
				}
			},
			u: {
				type: String,
				default: 'px'
			},
		},
		data() {
			return {
				usImg: '',
				usrImg: '',
			};
		},
		methods: {
			goGoods(v){
				this.$emit('gs',v)
			}
		},
	};
</script>
<style lang="scss" scoped>
	.mItemBg {
		display: flex;
		width: 100%;
		height: 180rpx;
		margin-bottom: 22rpx;
		line-height: 1;
		background: #fff;
		border-radius: 8rpx;
		overflow: hidden;

		.mItemImg {
			width: 180rpx;
			height: 180rpx;
			border-radius: 8rpx;
		}

		.mItemBody {
			width: 520rpx;
			padding: 30rpx 20rpx 20rpx 30rpx;

			.mTit {
				font-size: 28rpx;
				overflow: hidden;
				color: #333;
				font-weight: 700;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.mTxt {
				height: 24rpx;
				margin: 14rpx 0;
				overflow: hidden;
				font-weight: 500;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin-left: -26rpx;
				color: #a3a3a3;
				font-size: 24rpx;
				transform: scale(0.9);
			}

			.mPrice {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 52rpx;
				color: #333;
				font-weight: 700;
				font-size: 30rpx;

				.mAdd {
					width: 52rpx;
				}

				.mInv {
					display: inline-block;
					margin-left: 12rpx;
					color: #a3a3a3;
					font-weight: 500;
					font-size: 22rpx;
					text-decoration: line-through;
					transform: scale(0.8);
				}
			}
		}
	}

	.mItemBg:first-child {
		margin-left: 0;
	}
</style>
