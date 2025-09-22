<template>
	<view class="waiter f-c-c b-s" @click="callWaiter">
		<view><text class="iconfont icon-xiaoxi f40" :style="{color:tColor}"></text></view>
		<view class="f24">{{$t("waiter.waiter")}}</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		name: 'Waiter',
		components: {

		},
		props: {
			dl: {
				type: Object,
				default: {}
			},
			pl: {
				type: Object,
				default: {}
			},
			dem: {
				type: Number,
				default: 0
			},
		},
		computed: {
			...mapState(['sjxx']),
			...mapState({

			}),
		},
		data() {
			return {

			}
		},
		methods: {
			callWaiter(){
				this.$emit('call')
			},
		}
	}
</script>

<style scoped lang="scss">
	.waiter{
		position: fixed;
		left: 1%;
		bottom: 30%;
		width: 120rpx;
		height: 120rpx;
		background: #fff;
		border-radius: 50%;
	}
</style>