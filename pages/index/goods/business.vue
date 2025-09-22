<template>
	<view v-show="xxshow" class="posi-f closec" :style="{bottom:`${bt}rpx`}">
		<view class="h100 f32 cf f-c-c">
			<view class="t-c">{{sjxx.storeSetting && sjxx.storeSetting.mdMsg || $t("goods.store_closed_try_another")}}</view>
			<view class="f28">{{$t('shop-notice.business_hours')}}：{{yysj}}</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'business',
		components: {

		},
		props: {
			cart: {
				type: Object,
				default: () => {}
			},
			cd: {
				type: Object,
				default: () => {}
			},
			bt: {
				type: String,
				default: () => '157'
			}
		},
		computed: {
			...mapState(['sjxx']),
			...mapState({
				scarList: state => state.scarList.out || [],
			}),
			xxshow() {
				return this.cd.realtimeState == 3
			},
			yysj() {
				let text = ''
				let info = this.sjxx
				if (info.businessData && info.businessData.times) {
					text =
						`${info.businessData.times[0].start}-${info.businessData.times[0].ciri? this.$t('shop-notice.next_day'):''}${info.businessData.times[0].end}`
					if (info.businessData.times[1]) {
						text += ' ' +
							`${info.businessData.times[1].start}-${info.businessData.times[1].ciri?this.$t('shop-notice.next_day'):''}${info.businessData.times[1].end}`
					}
					if (info.businessData.times[2]) {
						text += ' ' +
							`${info.businessData.times[2].start}-${info.businessData.times[2].ciri?this.$t('shop-notice.next_day'):''}${info.businessData.times[2].end}`
					}
				}
				return text
			},
		},
		data() {
			return {

			}
		},
		methods: {

		},

	};
</script>

<style lang="scss" scoped>
	.closec {
		width: 100%;
		height: 130rpx;
		bottom: 157rpx;
		background: rgba(0, 0, 0, 0.75);
		z-index: 2000;
	}
</style>