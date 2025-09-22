<template>
	<view class="mh100">
		<nav-tab cname="fixedtop" v-model="aIdx" @changeTab='changeTab' :tabs='tabs'></nav-tab>
		<view class="mt120">
			<view class='p3 bf bor-b' v-for="(v,i) in dataList" :key="i">
				<view class="f-x-bt">
					<view class='t-o-e f28'>{{v.behaviorFormat}}</view>
					<view class="f32 c3 neutra-font">
						<text v-if="v.type=='1'" class="c4400">+{{v.value}}</text>
						<text v-else class="cf5">- {{v.value}}</text>
					</view>
				</view>
				<view class="f-x-bt">
					<view class='c9 f24 m10 f-g-1 t-o-e' v-if="v.notes">{{v.notes}}</view>
					<view class='c9 f24 m10 f-g-0'>{{v.created_at}}</view>
				</view>
			</view>
			<view class="pt150">
				<i-default :imgn="5" v-if="!dataList || dataList.length<=0" />
			</view>
		</view>
		<jzz bgcolor="transparent" imgn="zwye" :nodata="dataList.length==0&&isget" :mygd='mygd' />
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import navTab from '@/components/common/functionCmp/nav-tab.vue'
	import iDefault from '@/components/common/default.vue'
	import jzz from '@/components/common/jzz.vue'
	import {
		utilMixins,
		sljz
	} from "@/common/util-mixins.js"
	export default {
		name: 'yemx',
		components: {
			navTab,
			iDefault,
			jzz,
		},
		data() {
			return {
				aIdx: 0,
				tabs: [{
					name: this.$t("recharge.all"),
				}, {
					name: this.$t("recharge.recharge"),
				}, {
					name:  this.$t("recharge.consumption"),
				}],
				params: {
					page: 1,
					size: 10,
					state: '',
				},
				info: {},
			}
		},
		onLoad(options) {
			this.util.setNT( this.$t("recharge.transaction_record"))
			this.changeTab(this.aIdx)
		},
		mixins: [utilMixins, sljz],
		computed: {},
		methods: {
			changeTab(e) {
				this.isget = this.mygd = false
				this.params.page = 1
				let state = ''
				switch (e) {
					case 1:
						state = 'storedValue';
						break;
					case 2:
						state = 'pay';
						break;
				}
				this.params.state = state
				this.dataList = []
				this.getList()
			},
			async getList() {
				let {
					data
				} = await this.util.request({
					'url': this.api.yemx,
					data: this.params,
				})
				this.dataList = this.dataList.concat(data.list)
				this.info = data
				this.isget = true
				this.mygd = this.params.size > data.list.length
				this.params.page++
			},
		},
	}
</script>
<style scoped lang="scss">
	.mt120 {
		margin-top: 120rpx
	}

	.p43 {
		padding: 40rpx 30rpx;
	}

	.bor-b {
		border-bottom: 1px solid #EFF3F6;
	}
</style>