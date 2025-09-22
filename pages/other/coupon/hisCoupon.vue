<template>
	<view class="">
		<nav-tab cname="fixedtop" v-model="aIdx" @changeTab='changeTab' :tabs='tabs'></nav-tab>
		<view class="p2 ccoupon pt150">
			<my-coupon :color='tColor' cname='mb30' v-for="(v,i) in dataList" :key='i' :co='v.coupon' :v="v"
				ptype='4'></my-coupon>
			<jzz bgcolor="transparent" imgn='zwhb' :nodata="dataList.length==0&&isget" :mygd='mygd' />
			<i-default :imgn="2" v-if="!dataList || dataList.length<=0" />
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import navTab from '@/components/common/functionCmp/nav-tab.vue'
	import iDefault from '@/components/common/default.vue'
	import myCoupon from '@/components/common/my-coupon.vue'
	import jzz from '@/components/common/jzz.vue'
	import {
		sljz
	} from "@/common/util-mixins.js"
	export default {
		name: 'order-index',
		components: {
			navTab,
			iDefault,
			myCoupon,
			jzz,
		},
		data() {
			return {
				aIdx: 0,
				tabs: [{
					name: this.$t("other-coupon.used"),
				}, {
					name:this.$t("other-coupon.expired"),
				}],
				params: {
					page: 1,
					size: 10,
					state: 'use',
				},
				dataList: [],
			}
		},
		onLoad(options) {
			this.util.setNT(this.$t("other-coupon.coupon_history"))
			this.getList()
		},
		mixins: [sljz],
		computed: {},
		methods: {
			refresh() {
				this.changeTab(this.aIdx)
			},
			changeTab(e) {
				this.isget = this.mygd = false
				this.params.page = 1
				this.params.state = this.aIdx == 0 ? 'use' : 'overdue'
				this.dataList = []
				this.getList()
			},
			async getList() {
				let {
					data
				} = await this.util.request({
					'url': this.api.mycp,
					data: this.params,
				})
				this.dataList = this.dataList.concat(data.list)
				this.isget = true
				this.mygd = this.params.size > data.list.length
				this.params.page++
			},
		},
	}
</script>
<style scoped lang="scss">

</style>