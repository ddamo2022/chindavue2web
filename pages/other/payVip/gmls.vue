<template>
	<view class="mh100 p2">
		<view class="">
			<view class='p3 bf bor-b mb20 bs20' v-for="(v,i) in dataList" :key="i">
				<view class="flex p2 ddbh">订单编号：{{v.orderSn}}</view>
				<view class="f-bt mt20">
					<view class="f-g-0 cardimg bs10" v-if="v.equityCard && v.equityCard.imageType==1"
						:style="{background:v.equityCard.imageType ==1? v.equityCard.image ||'linear-gradient(95.39deg, rgb(233, 239, 244) -6.1%, #bcc9d0 98.38%)':''}">
					</view>
					<view class="f-g-0 cardimg bs10" v-if="v.equityCard && v.equityCard.imageType==2">
						<mg-img :src="v.equityCard.imageType==2?v.equityCard.image:''"></mg-img>
					</view>
					<view class="f-g-1 ml20 f-y-ad p20">
						<view class="t-o-e wei">{{v.equityCard && v.equityCard.name}}</view>
						<view>支付金额：฿{{v.money}}</view>
					</view>
				</view>
				<view class="mt20 f-bt f-y-c">
					<view class="f-g-1 c9 f24">{{v.created_at}}</view>
					<view class="f28 c3 wei4 f-x-e f-g-0" v-if="v.state!='4'">
						<view class="obtn b-d bwid bs30" :style="{color:tColor,borderColor:tColor}"
							@click="handDl(v.id)">查看详情</view>
					</view>
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
	import iDefault from '@/components/common/default.vue'
	import jzz from '@/components/common/jzz.vue'
	import {
		utilMixins,
		sljz
	} from "@/common/util-mixins.js"
	export default {
		name: 'gmls',
		components: {
			iDefault,
			jzz,
		},
		data() {
			return {
				params: {
					page: 1,
					size: 10,
					state: '',
				},
				info: {},
			}
		},
		onLoad(options) {
			this.util.setNT('购买历史')
			this.getList()
		},
		mixins: [utilMixins, sljz],
		computed: {},
		methods: {
			async getList() {
				let {
					data
				} = await this.util.request({
					url: this.api.equityCardOrder,
					data: this.params,
				})
				this.dataList = this.dataList.concat(data.list)
				this.info = data
				this.isget = true
				this.mygd = this.params.size > data.list.length
				this.params.page++
			},
			handDl(o) {
				this.go({
					url: `/pages/other/payVip/ckxq?id=${o}`,
					t: 1
				})
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

	.cardimg {
		width: 240rpx;
		height: 140rpx;
	}

	.ddbh {
		border-bottom: 1px dotted #eee;
		padding-top: 0;
		padding-left: 0;
	}
</style>