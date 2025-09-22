<template>
	<view class="flex">
		<view class="tool bs30 f-c f26 p2">
			<view class="mr10">
				<view class="icImg" v-if="orderSetting.toImage">
					<image class="wh" :src="orderSetting.toImage" />
				</view>
				<text v-else class="iconfont icon-naichaxiaochi f36"></text>
			</view>
			<view>{{orderSetting.toName || '一起喝'}}</view>
		</view>
		<!-- <view class="search bsf f-c ml20"><text class="iconfont sousuo f32 c9"></text></view> -->
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		components: {

		},
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				orderSetting: state => state.config.orderSetting,
			}),
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.tool {
		height: 70rpx;
		border: 1px solid #eaeaea;
	}

	.search {
		border: 1px solid #eaeaea;
		height: 70rpx;
		width: 70rpx;
	}
	
	.icImg{
		width: 50rpx;
		height: 50rpx;
	}
</style>