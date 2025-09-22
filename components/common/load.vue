<template>
	<view v-if="type==1" class="posi-f wh bf t0 z9999" :style="{zIndex:zix}">
		<view class="animation_opactiy posi-f wh bf t0 l0"></view>
		<view class="jzzc" :class="loadingImg && loadingImg.imgUrl?'':'f-c'">
			<mg-img v-if="loadingImg.imgUrl" m='widthFix' :src="loadingImg.imgUrl"></mg-img>
			<view v-else class="weui-loading"></view>
		</view>
	</view>
	<view v-else @touchmove.stop="" class="posi-f wh t0 z9999 skeletonbg" v-show="value"></view>
</template>

<script>
	import {
		mapActions,
		mapState
	} from 'vuex';
	export default {
		props: {
			zix: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: '1'
			},
			value: {
				type: Boolean,
				default: false
			},
		},
		computed: {
			...mapState({
				loadingImg: state => state.layout && state.layout.loadingImg,
			})
		},
		data() {
			return {

			}
		}
	}
</script>
<style scoped lang='scss'>
	.skeletonbg {}

	@keyframes backOpacity {
		0% {
			opacity: 0
		}

		25% {
			opacity: .2
		}

		50% {
			opacity: 0.5
		}

		75% {
			opacity: .2
		}

		100% {
			opacity: 0
		}
	}

	.animation_opactiy {
		animation: backOpacity 1s ease-in-out infinite;
	}

	.jzzc {
		width: 300rpx;
		height: 300rpx;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.weui-loading {
		width: 80rpx;
		height: 80rpx;
	}
</style>
