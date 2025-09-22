<template>
	<view class="mh100">
		<view class="xqyfixedtop">
			<nav-tab cname="hlb" v-model="aIdx" @changeTab='changeTab' :tabs='tabs' :color='tColor'></nav-tab>
		</view>
		<view class="p3" :class="{mt90:aIdx!=-1}">
			<view class="p3 bf bs10 mb30" v-for="(v,i) in dataList" :key='i'>
				<mg-cell cname='p0' @tab="go({t:1,url:``})" last='1' :img='v.portrait' w='80' h='80' brs='50%'>
					<template slot='bd'>
						<view class="f26 f-row">
							<view class="f-1 f30 wei" v-if="v.user">{{v.user.nickname}}<text
									class="f22 c9 nowei ml5">（UID：{{v.user.id}}）</text></view>
							<view :style="{color:tColor}">{{v.stateFormat}}</view>
							<!-- <view :style="{color:v.type==1?'#74B9FF':'#14A118'}">{{v.type==1?'待入账':'已入账'}}</view> -->
						</view>
						<view class="f22 c9 mt10 f-x-bt">
							<view class="fsc bs5 p-3-10 f18 f-g-0">{{v.level}}级</view>
							<view class="f24 c9">预计收益:<text class="crb wei">฿{{v.money}}</text></view>
						</view>
					</template>
					<!-- <template slot='ft'></template> -->
				</mg-cell>
				<view class="mt30 f24 c6">订单编号：{{v.orderSn}}</view>
				<view class="mt10 f24 c6">订单时间：{{v.created_at}}</view>
			</view>
			<jzz bgcolor="transparent" :nodata="dataList.length==0&&isget" :mygd='mygd' otext="暂无订单" />
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		sljz,
		utilMixins,
	} from "@/common/util-mixins.js"
	import navTab from '@/components/common/functionCmp/nav-tab.vue'
	import jzz from '@/components/common/jzz.vue'
	export default {
		name: 'wdfs',
		components: {
			navTab,
			jzz
		},
		data() {
			return {
				aIdx: 0,
				tabs: [{
					name: '全部',
					value: '',
				}, {
					name: '进行中',
					value: 2,
				}, {
					name: '已完成',
					value: 3,
				}, {
					name: '已退款',
					value: 4,
				}],
				params: {
					size: 10,
					page: 1,
					state: '',
				},
				dataList: [],
			}
		},
		async onLoad(options) {
			console.log(options)
			let t = ''
			this.util.setNT('分销订单')
			await this.getLoginInfo()
			this.params.userId = this.uId

			this.changeTab(this.aIdx)
			// if (options.t > 1) {
			// 	this.getList()
			// } else {
			// 	this.changeTab(this.aIdx)
			// }
		},
		mixins: [sljz, utilMixins],
		computed: {},
		methods: {
			changeTab(e) {
				this.isget = this.mygd = false
				this.params.page = 1
				this.params.state = this.aIdx == 1 ? 'start' : this.aIdx == 2 ? 'bill' : this.aIdx == 3 ? 'refund' : ''
				this.dataList = []
				this.getList()
			},
			async getList() {
				this.dataList = []
				let {
					data: {
						list
					}
				} = await this.util.request({
					url: this.api.partnerOrder,
					data: this.params,
				})
				this.dataList = this.dataList.concat(list)
				this.isget = true
				this.mygd = this.params.size > list.length
				this.params.page++
			},
		},
	}
</script>
<style scoped lang="scss">
	.fsc {
		background: #404040;
		color: #EEC520;
	}
</style>