<template>
	<view class="">
		<view class="ccbd p3">
			<view class='bf bor-b mb20 bs20' v-for="(v,i) in dataList" :key="i" @click="seeActive(v)">
				<image :src="v.logo" class="image" mode="aspectFill"></image>
				<view class="p2">
					<view class="f-x-bt">
						<view class='t-o-e f28'>{{v.name}}</view>
					</view>
					<view class="f-x-bt">
						<view class='c9 f24 m10'>{{v.startTime}}-{{v.endTime}}</view>
					</view>
				</view>
			</view>
			<jzz bgcolor="transparent" imgn='zwhb' :nodata="dataList.length==0&&isget" :mygd='mygd' />
		</view>
		<view class="pt150">
			<i-default :imgn="2" v-if="!dataList || dataList.length<=0" />
		</view>
		<sq-btn type="1" ref="sqBtn"></sq-btn>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import myCoupon from '@/components/common/my-coupon.vue'
	import jzz from '@/components/common/jzz.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import iDefault from '@/components/common/default.vue'
	import {
		sljz
	} from "@/common/util-mixins.js"
	export default {
		name: 'CouponCeter',
		components: {
			myCoupon,
			jzz,
			sqBtn,
			iDefault,
		},
		data() {
			return {
				aIdx: 0,
				params: {
					page: 1,
					size: 10,
					// type: 1,
				},
				dataList: [],
			}
		},
		async onLoad(options) {
			this.util.setNT(this.$t("other-coupon.coupon_event"))
			await this.getLoginInfo()
			console.log(options)
			this.isLoad = true
			this.getList()
		},
		onShow() {
			// console.log(this.isLoad)
			if (this.isLoad) {
				// this.changeTab(this.aIdx)
			}
		},
		mixins: [sljz],
		computed: {

		},
		methods: {
			...mapActions(["getConfig"]),
			refresh() {
				this.changeTab(this.aIdx)
			},
			changeTab(e) {
				this.isget = this.mygd = false
				this.params.page = 1
				// this.params.type = this.tabs[e].type
				this.dataList = []
				this.getList()
			},
			async getList() {
				let {
					data
				} = await this.util.request({
					'url': this.api.lqhd,
					data: this.params,
				})
				this.dataList = this.dataList.concat(data.list)
				this.isget = true
				this.mygd = this.params.size > data.list.length
				this.params.page++
			},
			seeActive(v){
				this.go({
					url: `/pages/other/coupon/coupondl?couponId=${v.id}`,
					t: 1
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	.image {
		width: 100%;
		height: 300rpx;
	}
</style>