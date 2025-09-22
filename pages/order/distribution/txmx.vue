<template>
	<view class="p30">
		<view class="xqyfixedtop">
			<nav-tab v-if="aIdx!=-1" cname="hlb" v-model="aIdx" @changeTab='changeTab' :tabs='tabs'
				:color='tColor'></nav-tab>
		</view>
		<mg-cell @tab="go({url:'txxq?id='+v.id})" hc='1' class="" v-for="(v,i) in dataList" :key='i' isr='1'
			:btt='txType(v.type)' bttc='f30' :bbt='`申请时间：${v.createdAt}`' ftc='f-s-1 t-r'>
			<template slot='ft'>
				<view class="f30 c3">-{{v.money}}</view>
				<view class="mt10 f26" :class="v.state==2?'c00':v.state==3?'crb':'cf3'">
					{{v.state==2?'已通过':v.state==3?'已拒绝':'待审核'}}</view>
			</template>
		</mg-cell>
		<jzz bgcolor="transparent" :nodata="dataList.length==0&&isget" :mygd='mygd' />
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
	import jzz from '@/components/common/jzz.vue'
	import navTab from '@/components/common/functionCmp/nav-tab.vue'
	export default {
		name: 'invite',
		components: {
			jzz,
			navTab,
		},
		data() {
			return {
				params: {
					size: 10,
					page: 1,
					item: '',
				},
				dataList: [],
				query: {},
				aIdx: 0,
				tabs: [{
						name: '全部',
					},
					{
						name: '待审核',
					},
					{
						name: '待打款',
					},
					{
						name: '已打款',
					},
					{
						name: '无效',
					},
				],
			}
		},
		async onLoad(op) {
			this.query = op
			this.util.setNT('提现记录')
			// await this.getLoginInfo()
			this.params.item = op.t
			// this.params.state = op.t == 1 ? '2' : op.t == 2 ? '1' : ''
			this.getList()
		},
		mixins: [sljz, utilMixins],
		computed: {},
		methods: {
			async getList() {
				this.dataList = []
				// let {
				// 	data
				// } = await this.util.request({
				// 	'url': this.api.memberWL,
				// 	method: 'POST',
				// 	data: this.params,
				// })
				// this.dataList = this.dataList.concat(data)
				this.isget = true
				// this.mygd = this.params.size > data.length
				this.params.page++
			},
			txType(v) {
				let n = ''
				switch (+v) {
					case 1:
						n = "微信";
						break;
					case 3:
						n = "银行卡";
						break;
					case 2:
						n = "支付宝";
						break;
					case 4:
						n = "余额";
						break;
				}
				return n
			},
			changeTab(e) {
				this.isget = this.mygd = false
				this.params.page = 1
				e != -1 && (this.params.type = e + 1)
				this.dataList = []
				this.getList()
			},
		},
	}
</script>
<style scoped lang="scss">

</style>