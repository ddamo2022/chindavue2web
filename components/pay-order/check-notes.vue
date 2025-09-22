<template>
	<block v-if="dl.scene==3">
		<view class="bf bs20 mt20 p32" v-if="inStoreOrderConfig.onOrderRemarks==1">
			<view class="f-bt">
				<view class="f-g-0">
					<view>{{$t("check-notes.notes")}}:</view>
				</view>
				<view class="f-g-1 c9 flex f-y-c t-o-e">
					<navigator hover-class="none" open-type="navigate" :url="'/pages/shop/out/bz?note='+ pl.remarks + '&bz=' + inStoreOrderConfig.takeOutDefaultPrompt" class="t-o-e f-g-1">
						<view class="t-o-e ml10 f-g-1 t-r">{{pl.remarks || $t("check-notes.please-enter-your-special-requests")}}</view>
					</navigator>
					<text class='iconfont icon-gengduo f28 ml5 c9'></text>
				</view>
			</view>
		</view>
	</block>
	<block v-else>
		<view class="bf bs20 mt20 p32" v-if="orderSetting.onOrderRemarks==1">
			<view class="f-bt">
				<view class="f-g-0">
					<view>{{$t("check-notes.notes")}}:</view>
				</view>
				<view class="f-g-1 c9 flex f-y-c t-o-e">
					<navigator hover-class="none" open-type="navigate" :url="'/pages/shop/out/bz?note='+ pl.remarks + '&bz=' + orderSetting.takeOutDefaultPrompt" class="t-o-e f-g-1">
						<view class="t-o-e ml10 f-g-1 t-r">{{pl.remarks || $t("check-notes.please-enter-your-special-requests")}}</view>
					</navigator>
					<text class='iconfont icon-gengduo f28 ml5 c9'></text>
				</view>
			</view>
		</view>
	</block>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		name: 'checkGoods',
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
				orderSetting: state => state.config.orderSetting,
				inStoreOrderConfig: state => state.config.inStoreOrderConfig,
			}),
		},
		data() {
			return {
				zkshow: false,
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.pro-img {
		width: 120rpx;
		height: 90rpx;
		flex-shrink: 0;
	}
</style>