<template>
	<view class="">
		<view class="ccbd p3">
			<my-coupon @btntap='btntap(v.id)' :color='tColor' cname='mb30' v-for="(v,i) in dataList" :key='i' :co='v'></my-coupon>
			<jzz bgcolor="transparent" imgn='zwhb' :nodata="dataList.length==0&&isget" :mygd='mygd' />
		</view>
		<view class="pt150">
			<i-default :imgn="2"  v-if="!dataList || dataList.length<=0"  />
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
				dataList:[]
			}
		},
		async onLoad(options) {
			this.util.setNT(this.$t("other-coupon.coupon_center"))
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
					'url': this.api.lqzx,
					data: this.params,
				})
				this.dataList = this.dataList.concat(data.list)
				this.isget = true
				this.mygd = this.params.size > data.list.length
				this.params.page++
			},
			async btntap(e) {
				if (!this.isLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				let res = await this.util.request({
					'url': this.api.lqzx,
					method: 'POST',
					mask: 1,
					data: {
						couponId: e,
					},
				})
				if (res && res.data) {
					this.util.message(res.msg, 3)
					setTimeout(() => {
						this.refresh();
					}, 500)
				}else{
					this.util.message(res.msg, 2)
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.wxts {
		height: 70rpx;
	}

	.ccbd {
		// padding-top: 80rpx;
	}

</style>
