<template>
	<view class="bf bs20 mt20 p2">
		<view class="flex mt20">
			<view class="f-g-0 flex">
				<view class="coupon-label f-c mr10 mt10" :style="{backgroundColor:tColor,color:fontColor}">{{$t("check-point.collect-points")}}</view>
			</view>
			<view class="f-g-1 c3">
				<view>
					{{$t("check-point.current-order-can-obtain")}}
					<text class="ml10">{{dl.collectNum}}</text>
					<text class="ml10">{{dl.orderCollect.numName}}</text>
				</view>
				<view class="c9 mt5 f24">
					 <rich-text :nodes="dl.orderCollect.body"></rich-text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		name: 'checkPoints',
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
		},
		computed: {
			...mapState(['sjxx']),
			...mapState({
				orderSetting: state => state.config.orderSetting,
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
</style>