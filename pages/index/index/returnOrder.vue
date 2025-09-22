<template>
	<view class="flex rollBag" @click="open">
		<view class="tool f-c f22 bf">
			<view class="mr10">
				<!-- <view class="icImg">
					<image class="wh" src="/static/images/common/yhq.png" />
				</view> -->
			</view>
			<view>{{$t("modal.return_table")}}</view>
		</view>
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
				gs: state => state.layout.goodStyle || {},
			}),
		},
		methods: {
			open(){
				this.$emit('open')
			},
		}
	}
</script>

<style scoped lang="scss">
	.rollBag {
		position: fixed;
		right: 0;
		top: 380rpx;
		z-index: 10;
	}

	.tool {
		padding: 0 10rpx;
		border-radius: 40rpx 0 0 40rpx;
		height: 60rpx;
		box-shadow: 0rpx 0rpx 6rpx 4rpx #f5f5f5;
	}

	.icImg {
		width: 40rpx;
		height: 40rpx;
	}
</style>