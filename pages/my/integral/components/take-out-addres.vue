<template>
	<view class="bf bdr">
		<view class="b-b-e p32" v-if="dl.address">
			<view class="wei f38 f-y-c flex" @tap="switchOrderType">
				<view class="f-g-1 t-o-e2">{{dl.address.address}}{{dl.address.description}}</view>
				<view class='iconfont icon-gengduo f28 ml5 c0'></view>
			</view>
			<view class="flex f-y-c c0 mt10">
				<view>{{dl.address.contact}}({{dl.address.call}}) <text class="ml10">{{dl.address.mobile}}</text></view>
			</view>
		</view>
		<view class="b-b-e p32 mt20" v-else>
			<view class="wei f38 f-y-c t-o-e" @tap="switchOrderType">
				{{$t("integral.please_select_delivery_address")}}
				<text class='iconfont icon-gengduo f28 ml5 c0'></text>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations,mapActions} from 'vuex'
	export default {
		name: 'SelfFetchAddres',
		components: {

		},
		props: {
			dl: {
				type: Object,
				default: {}
			},
			yjrV: {
				type: Object,
				default: {}
			},
			cd: {
				type: Object,
				default: {}
			},
		},
		data() {
			return {
				current: 0,
			}
		},
		computed: {
			...mapState(['sjxx']),
		},
		methods: {
			switchOrderType() {
				uni.navigateTo({
					url: `/pages/my/addres/addresses`
				})
			},
			radioChange() {
				this.$emit('radioChange')
			},
			selectTime() {
				this.$emit('selectTime')
			},
		}
	}
</script>

<style scoped lang="scss">
.bdr{
	border-bottom-right-radius: 20rpx;
	border-bottom-left-radius: 20rpx;
}
</style>
