<template>
	<view>
		<view class="mItemBg f-1" v-for="(v, i) in styles.productName" :key="i" :style="{
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
						<text v-if="styles.goodsJgSt == 1" class="iconfont icon-gouwuche f44" :style="{color: tColor}"  />
						<text v-if="styles.goodsJgSt == 2" class="iconfont icon-jiahao2fill f44" :style="{color: tColor}"  />
						<text v-if="styles.goodsJgSt == 3" class="iconfont icon-jiahao f44" :style="{color: tColor}" />
						<text v-if="styles.goodsJgSt == 4" class="iconfont icon-gouwuche2 f44" :style="{color: tColor}"  />
						<text v-if="styles.goodsJgSt == 5" class="iconfont icon-gouwuche1 f44" :style="{color: tColor}"  />
					</template>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'tem1',
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
		line-height: 1;
		background: #fff;
		border-radius: 16rpx;
		overflow:hidden;

		.mItemImg {
			// width: 700rpx;
			height: 700rpx;
			border-radius: 16rpx;
		}

		.mItemBody {
			// width: 700rpx;
			padding: 40rpx;

			.mTit {
				overflow: hidden;
				color: #333;
				font-weight: 700;
				font-size: 30rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.mTxt {
				height: 24rpx;
				margin: 14px 0;
				margin-left: -36rpx;
				overflow: hidden;
				color: #999;
				font-weight: 500;
				font-size: 22rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
				transform: scale(0.9);
			}

			.mPrice {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 60rpx;
				color: #333;
				font-weight: 700;
				font-size: 36rpx;

				.mAdd {
					width: 60rpx;
				}

				.mInv {
					display: inline-block;
					margin-left: 12px;
					color: #a3a3a3;
					font-weight: 500;
					font-size: 22rpx;
					text-decoration: line-through;
					transform: scale(0.9);
				}
			}
		}
	}
</style>
