<template>
	<view class="bf mh100">
		<view class="xqyfixedtop">
			<nav-tab v-if="aIdx!=-1" cname="hlb" v-model="aIdx" @changeTab='changeTab' :tabs='tabs'
				:color='tColor'></nav-tab>
		</view>
		<view class="p03 mt90">
			<view class="f-bt p20 b-b-e" v-for="(v,i) in dataList" :key="i">
				<view class="f-g-1 flex">
					<view class="img bsf mr30">
						<mg-img :src='v.avatar'></mg-img>
					</view>
					<view>
						<view class="f28 wei f-1 c0 t-o-e">{{v.nickname}}</view>
						<view class="f22">订单：<text :style="{color:tColor}">{{v.partner_order_count || 0}}</text></view>
						<view class="f22 mt10">{{v.mobile}}</view>
						<!-- <text class="f22 c9 ml5">（UID：{{v.bindId}}）</text> -->
					</view>
				</view>
				<view class="f-g-0 f22 t-r">
					<view class="mt5">消费：<text :style="{color:tColor}">฿{{v.partnerOrder_sum || 0}}</text></view>
					<view class="c9">{{v.created_at}}</view>
				</view>
			</view>
			<jzz bgcolor="transparent" :nodata="dataList.length==0&&isget" :mygd='mygd' otext="暂无数据" />
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
	import MgImg from '@/components/common/my-img.vue'
	export default {
		name: 'wdfs',
		components: {
			navTab,
			jzz,
			MgImg,
		},
		data() {
			return {
				aIdx: 0,
				params: {
					userId: '',
					size: 10,
					page: 1,
					level: 1,
				},
				dataList:[],
				tabs: [{
						name: '一级',
					},
					{
						name: '二级',
					},
				],
			}
		},
		async onLoad(options) {
			console.log(options)
			this.util.setNT('我的伙伴')
			await this.getLoginInfo()
			this.params.userId = this.uId
			this.changeTab(this.aIdx)
		},
		mixins: [sljz, utilMixins],
		computed: {
			...mapState('dndc', ['fxsInfo']),
			// tabs() {
			// 	let a = [{
			// 		name: `一级（${this.fxsInfo.fristNum}）`,
			// 	}, {
			// 		name: `二级（${this.fxsInfo.secondNum}）`,
			// 	}]
			// 	if (this.fxsInfo.grade != 1) {
			// 		a.splice(1, 1)
			// 	}
			// 	return a
			// },
		},
		methods: {
			changeTab(e) {
				this.isget = this.mygd = false
				this.params.page = 1
				e != -1 && (this.params.level = e + 1)
				this.dataList = []
				this.getList()
			},
			async getList() {
				let {
					data :{list}
				} = await this.util.request({
					'url': this.api.partnerDownline,
					data: this.params,
				})
				this.dataList = this.dataList.concat(list)
				this.isget = true
				this.mygd = this.params.size > list.length
				this.params.page++
			}
		},
	}
</script>
<style scoped lang="scss">
	.img {
		width: 100rpx;
		height: 100rpx;
	}
</style>