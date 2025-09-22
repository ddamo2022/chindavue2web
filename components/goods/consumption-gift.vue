<template>
	<view class="bf bs20 mt20 p32">
		<view class="f-bt">
			<view class="pro-img f-g-0 bs10 mr20">
				<mg-img :src="dl.payGift.logo|| `${onImgurl}common/libao.png`" m='aspectFit'></mg-img>
			</view>
			<view class="f-g-1 f-bt f-y-c">
				<view class="f-g-1">
					<view class="t-o-e c0">{{dl.payGift.name}}</view>
					<view class="c9 f22 neutra-font">{{$t('goods.actual_spending_reaches')}}{{dl.payGift.money}}({{$t('goods.includes')}})，{{$t('goods.gift_after_order_completion')}}</view>
				</view>
				<view class="f-g-0 ml20">
					<button class="cf f-c bs30 f24 xzhy" @click="fxhy" :style="{background:tColor,color:fontColor}">{{$t('goods.view_gift')}}</button>
				</view>
			</view>
		</view>
		<xfyl v-if='dl.payGift' @close='xfshow=false' :co='dl.payGift' v-model="xfshow"></xfyl>
	</view>
</template>

<script>
	import xfyl from '@/components/template/xfyl.vue'
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		name: 'checkGoods',
		components: {
			xfyl,
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
		},
		computed: {
			...mapState(['sjxx']),
			...mapState({

			}),
		},
		data() {
			return {
				xfshow: false,
			}
		},
		methods: {
			fxhy() {
				this.xfshow = true
			},
		}
	}
</script>

<style scoped lang="scss">
	.pro-img {
		width: 100rpx;
		height: 100rpx;
		flex-shrink: 0;
	}

	.xzhy {
		width: 160rpx;
		height: 60rpx;
	}
</style>