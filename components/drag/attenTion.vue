<template>
	<!-- #ifdef MP-WEIXIN || MP-BAIDU || MP-TOUTIAO -->
	<view v-if="showTips" class="tipsc f26 f-row" @click="close" :style="{top:util.getSb().customNavh+'px'}">
		<view class="f-1 f-y-c">
			<!-- <view class="img f-g-0 bsf mr20">
				<mg-img :src="co.img"></mg-img>
			</view> -->
			<view>{{co.msgTxt}}</view>
		</view>
		<view class="f-g-0 tipx f-c bsf">
			<text class="iconfont icon-guanbi cf f14"></text>
		</view>
		<view class="posi-a triangle-up"></view>
	</view>
	<!-- #endif -->
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		name: 'attenTion',
		components: {},
		props: ['co'],
		data() {
			return {}
		},
		methods: {
			close() {
				//console.log(this, this.__proto__, this.$store)
				this.$store.state.config.showTips = false
				uni.setStorageSync('tips', true)
			},
		},
		computed: {
			...mapState({
				showTips: state => state.config.showTips,
			})
		},
	}
</script>

<style scoped lang="scss">
	.tipsc {
		position: fixed;
		background: #fff;
		z-index: 10;
		width: 520rpx;
		padding: 20rpx;
		right: 10px;
		border-radius: 8rpx;
		box-shadow: 0 0rpx 8rpx 3rpx #D1D1D1;

		.img {
			width: 60rpx;
			height: 60rpx;
		}
	}

	.tipx {
		background: #e8e8e8;
		width: 40rpx;
		height: 40rpx;
	}

	.f14 {
		font-size: 14rpx;
	}

	.triangle-up {
		top: -16rpx;
		right: 57px;
		width: 0;
		height: 0;
		border-left: 15rpx solid transparent;
		border-right: 15rpx solid transparent;
		border-bottom: 20rpx solid #fff;
	}
</style>
