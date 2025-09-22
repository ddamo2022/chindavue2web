<template>
	<view class='f-raw f-bt p23' v-if="goodsList.length">
		<view @click="go({t:1,url:'/pages/my/integral/details?id=' + v.id})" class="bf goodsc mb20 bs15"
			v-for="(v,i) in goodsList" :key='i'>
			<view class="goodsimg posi-r">
				<mg-img :src="v.icon"></mg-img>
				<view class="hot posi-a cf f20" v-if="v.hot_switch == 1">{{$t("integral.hot")}}</view>
			</view>
			<view class='jfgb'>
				<view class="f-bt f-y-c">
					<!-- <view class="coupon-label f-c mr10" :style="{backgroundColor:tColor,color:fontColor}">
						<text v-if="v.product_type == 1">实</text>
						<text v-else-if="v.product_type == 2">券</text>
						<text v-else-if="v.product_type == 3">余</text>
					</view> -->
					<view class="t-o-e f-g-1 wei f32">{{v.name}}</view>
				</view>
				<view class="cfa neutra-font">
					<view class="t-o-e f30" :style="{color:tColor}">
						<text v-if="v.integral>0">{{v.integral}}</text>
						<text v-if="v.integral>0" class="f22 c9 nowei ml10">{{$t("integral.points")}}</text>
						<text v-if="v.integral>0 && v.money>0" class="nowei c9">+</text>
						<text v-if="v.money>0">{{v.money}}<text class="f22 c9">THB</text></text>
					</view>
					<view class="t-o-e c9 f22 wei4">{{$t("integral.remaining_pieces")}}{{v.stock}}{{$t("integral.pieces")}}</view>
					<!-- <view class="t-o-e t-d-l c9 f22 wei4">{{sl+v.price}}</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
	} from 'vuex'
	export default {
		name: 'goods-list',
		props: {
			list: {
				type: Array,
				default: function() {
					return []
				}
			},
		},
		data() {
			return {

			}
		},
		computed: {
			jfName() {
				return '积分'
				// return this.system.custom.integral
			},
			goodsList() {
				// console.log(this.list)
				return this.list
			},
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		},
	}
</script>

<style scoped lang="scss">
	.jfgb {
		padding: 12rpx 20rpx;
	}

	.bf2 {
		background: #FF5012;
	}

	.goodsc {
		width: 330rpx;
	}

	.goodsimg {
		width: 330rpx;
		height: 330rpx;
	}

	.hot {
		top: 0;
		right: 0;
		background: #E85757;
		padding: 4rpx;
		border-radius: 6rpx;
	}
</style>