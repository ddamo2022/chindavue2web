<template>
	<view class="acty p3 bf">
		<block v-if="type==1">
			<view class="f38 wei c0">适用商品</view>
			<view class="flex">
				<view class="mt20 c6 elm bf bs20 f-g-0">
					<view class="img"></view>
					<view class="p2 t-o-e">测试套餐</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'see-goods',
		components: {

		},
		data() {
			return {
				type:1,
			}
		},
		onLoad(options) {
			if(options && options.type){
				this.type = options.type
			}
			this.getSystem()
			this.util.setNT('查看详情')
		},
		computed: {
			...mapState(['sjxx']),
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		},
	}
</script>
<style scoped lang="scss">
	.acty {
		.elm {
			box-shadow: 0rpx 4rpx 20rpx 0rpx rgba(221, 221, 221, 0.8);
			width: 260rpx;
			.img{
				width: 260rpx;
				height: 200rpx;
			}
		}
	}
</style>