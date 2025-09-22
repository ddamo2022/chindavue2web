<template>
	<view class="mh100 pb130" v-if="jfName">
		<view class="mt30">
			<view class='p3 bf bor-b' v-for="(v,i) in dataList" :key="i">
				<view class="f-x-bt">
					<view class='t-o-e f28'>{{v.behaviorFormat}}</view>
					<view class="f32 c3 neutra-font">
						<text v-if="v.type=='1'" class="c4400">+{{v.value}}</text>
						<text v-else class="cf5">- {{v.value}}</text>
					</view>
				</view>
				<view class="f-x-bt">
					<view class='c9 f24 m10'>{{v.created_at}}</view>
				</view>
			</view>
			<view class="pt150">
				<i-default :imgn="7"  v-if="!dataList || dataList.length<=0"  :zdytxt="$t('integral.no_points_detail_yet')" />
			</view>
		</view>
		<jzz bgcolor="transparent" imgn="zwjf" :nodata="dataList.length==0&&isget" :mygd='mygd' />
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		utilMixins,
		sljz
	} from "@/common/util-mixins.js"
	import jzz from '@/components/common/jzz.vue'
	import iDefault from '@/components/common/default.vue'
	export default {
		name: 'myIntegral',
		components: {
			jzz,
			iDefault,
		},
		data() {
			return {
				params: {
					page: 1,
					size: 10,
				},
				integral: '0',
				dataList: [],
			}
		},
		async onLoad() {
			this.util.setNT(this.jfName + this.$t("integral.details"))
			// await this.getLoginInfo()
			// this.integral = this.user.integral
			this.getList()
		},
		mixins: [utilMixins, sljz],
		computed: {
			jfName() {
				return  this.$t("integral.points")
			},
		},
		methods: {
			async getList() {
				let {
					data
				} = await this.util.request({
					'url': this.api.jfmx,
					mask: 1,
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
	.bor-b {
		border-bottom: 1px solid #EFF3F6;
	}
</style>