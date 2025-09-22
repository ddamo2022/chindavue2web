<template>
	<view class="order-box bs20 p3">
		<view class="f40 wei" v-if='order.state==1'>{{$t("in_goods_components.order_successful")}}，{{$t("in_goods_components.wait_to_eat")}}</view>
		<view class="f26 mt10">{{$t("in_goods_components.dish_in_preparation")}}</view>
		<block v-if="order.table">
			<view class="f60 wei">{{order.table.name}}</view>
			<view class="f30">{{$t("in_goods_components.table_number")}}</view>
		</block>
	</view>
</template>

<script>
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import utils from '@/common/utils.js'
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'dlStatus',
		components: {

		},
		props: {
			order: {
				type: Object,
				default: {}
			},
		},
		computed: {
			...mapState({
				orderSetting: state => state.config.orderSetting,
			}),
		},
		mixins: [utilMixins],
		data() {
			return {
				stime: '',
			}
		},
		methods: {
			
		},
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
				width: 150rpx;
				height: 120rpx;
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

	.mt50 {
		margin-top: 50rpx;
	}
</style>