<template>
	<view class="">
		<nav-tab cname="fixedtop" v-model="aIdx" @changeTab='changeTab' :tabs='tabs'></nav-tab>
		<view class="mt120">
			<view class='p3 bf bor-b' v-for="(v,i) in dataList" :key="i">
				<view class="f-bt">
					<view>
						<view class='t-o-e f28'>{{v.coupon.name}}</view>
						<view class='c9 f24 m10'>{{v.created_at}}</view>
					</view>
					<view class="f32 c3">
						<button v-if="aIdx==0" class="cf xzhy f-c bs10" @click="qxzz(v)" :style="{background:tColor}">{{$t("other-coupon.cancel_gift")}}</button>
						<view v-else class='c9 f24 m10'>{{$t("other-coupon.on")}}{{v.updated_at}}{{$t("other-coupon.receive")}}</view>
					</view>
				</view>
			</view>
			<view class="pt150">
				<i-default :imgn="2" v-if="!dataList || dataList.length<=0" />
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
		name: 'give-dl',
		components: {
			navTab,
			iDefault,
			jzz,
		},
		data() {
			return {
				aIdx: 0,
				tabs: [{
					name: this.$t("other-coupon.gifting"),
				}, {
					name: this.$t("other-coupon.gifted"),
				}],
				params: {
					page: 1,
					size: 10,
					state: '',
				},
				dataList: [],
			}
		},
		onLoad(options) {
			this.changeTab(this.aIdx)
			this.util.setNT( this.$t("other-coupon.gift_records"))
		},
		mixins: [utilMixins, sljz],
		computed: {},
		methods: {
			changeTab(e) {
				this.isget = this.mygd = false
				this.params.page = 1
				let state = ''
				switch (e) {
					case 0:
						state = 'giveing';
						break;
					case 1:
						state = 'receive';
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
					'url': this.api.yhqzz,
					data: this.params,
				})
				this.dataList = this.dataList.concat(data.list)
				this.info = data
				this.isget = true
				this.mygd = this.params.size > data.list.length
				this.params.page++
			},
			async qxzz(v){
				await this.util.modal(this.$t("other-coupon.confirm_cancel_gift"))
				let {
					msg
				} = await this.util.request({
					'url': `${this.api.yhqzz}/${v.id}`,
					'method': 'DELETE',
				})
				this.util.message(msg, 1, 1000)
				this.changeTab(this.aIdx)
			}
		},
	}
</script>
<style scoped lang="scss">

</style>