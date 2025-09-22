<template>
	<view class="no-order-content"  v-if="defaultImg && defaultImg[imgn]" :style="[sname]">
		<image :src="defaultImg[imgn].upUrl || defaultImg[imgn].url"></image>
		<view class="tips">
			<view>{{zdytxt || defaultImg[imgn].txt}}</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		name: 'img-default',
		props: {
			sname: Object,
			imgn: {
				type: Number,
				default: 1
			},
			bgcolor: '',
			tcolor: {
				type: String,
				default: ''
			},
			zdytxt: '',
		},
		computed: {
			...mapState({
				defaultImg: state => state.layout.defaultImg || [],
			}),
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped lang='scss'>
	.no-order-content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		image {
			width: 300rpx;
			height: 300rpx;
			margin-bottom: 50rpx;
		}

		.tips {
			color: $text-color-assist;
			display: flex;
			flex-direction: column;
			align-items: center;
			line-height: 1.2rem !important;
			margin-bottom: 50rpx;
		}

		button {
			width: 50%;
		}
	}
</style>