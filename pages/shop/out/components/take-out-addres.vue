<template>
	<view class="bf bdr">
		<view class="b-b-e p32" v-if="dl.addressId && dl.address">
			<view class="wei f38 f-y-c flex" @tap="switchOrderType">
				<view class="f-g-1 t-o-e2">{{dl.address.description}}{{dl.address.address}}</view>
				<view class='iconfont icon-gengduo f28 ml5 c0'></view>
			</view>
			<view class="flex f-y-c c0 mt10">
				<view>{{dl.address.contact}}({{dl.address.call}}) <text class="ml10">{{dl.address.mobile}}</text></view>
			</view>
		</view>
		<view class="b-b-e p32 mt20" v-else>
			<view class="wei f38 f-y-c t-o-e" @tap="switchOrderType">
			{{$t("take-out-addres.please_select_delivery_address")}}
				<text class='iconfont icon-gengduo f28 ml5 c0'></text>
			</view>
		</view>
		<view class="b-b-e f-bt p32" v-if="cd.realtimeState!=3">
			<view class="f-g-0 wei">
					{{$t("take-out-addres.delivery_time")}}
			</view>
			<view class="f-g-1 f-x-e f-y-c" @click="selectTime">
				<view class="text-color-primary" :style="{color:tColor}">
					<text v-if='yjrV.value'>{{yjrV.dayTit}} {{yjrV.title}}</text>
					<text v-else>	{{$t("take-out-addres.deliver_asap")}}</text>
				</view>
				<text class='iconfont icon-gengduo f28 ml5 c9'></text>
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
				default:{}
			},
			yjrV: {
				type: Object,
				default:{}
			},
			cd: {
				type: Object,
				default:{}
			},
		},
		data() {
			return {
				current: 0,
			}
		},
		computed: {
			...mapState(['sjxx']),
			// address(){
			// 	// this.dl.addressList.forEach(v => {
			// 	// 	if (v.id == this.dl.addressId) {
			// 	// 		return v
			// 	// 	}
			// 	// })
			// 	return this.dl.addressId && this.dl.addressList.find(v => v.id == this.dl.addressId)
			// }
		},
		methods: {
			switchOrderType() {
				uni.navigateTo({
					url: `/pages/my/addres/addresses?type=1`
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
