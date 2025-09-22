<template>
	<view class="pt110 pb130">
		<nav-tab cname="fixedtop" v-model="aIdx" @changeTab='changeTab' :tabs='tabs'></nav-tab>
		<view class='bf bs20 f24 p3 m23' v-for="(v,i) in dataList" :key="i"
			@click="go({t:1,url:'order-dl?id=' + v.orderSn})">
			<view class="f-x-bt pb20 b-b-e c3">
				<view class="f24 wei4">{{$t("integral.order_number")}}：{{v.orderSn}}</view>
				<view class="f24 wei4" :class="v.state==2 ? 'cf7': v.state==3 ? 'c1f' : v.state==4 ? 'c3f' : 'cfa'">
					{{v.stateForamt}}</view>
			</view>
			<view class="bf f-row p20">
				<view class="f-g-0 mr30">
					<view class="imgw bs10 bf7">
						<mg-img :src="v.goods && v.goods.icon" />
					</view>
				</view>
				<view class="f-g-1 f-y-bt" v-if="v.goods">
					<view class="wei4 f30 t-o-e2 c6">{{v.goods.name}}</view>
					<view class="f-x-bt">
						<view class="cfa t-o-e wei4 neutra-font" :style="{color:tColor}">
							<text v-if="v.goods.integral>0">{{v.goods.integral}}</text>
							<text v-if="v.goods.integral>0" class="f26 ml10 nowei">{{$t("integral.points")}}</text>
							<text v-if="v.goods.integral>0 && v.goods.money>0" class="nowei">+</text>
							<text v-if="v.goods.money>0"><text class="f22">฿</text>{{v.goods.money}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="p20 t-r mr20">
				<view class="f28 wei4 cfa neutra-font" v-if="v.goods" :style="{color:tColor}">
					<text class="f24 c9 mr20">{{$t("integral.total_pieces")}}1{{$t("integral.pieces")}}</text>
					<text class="c3">{{$t("integral.actual_payment")}}：</text>
					<text v-if="v.goods.integral>0">{{v.goods.integral}}</text>
					<text v-if="v.goods.integral>0" class="f26 ml10 nowei">{{$t("integral.points")}}</text>
					<text v-if="v.goods.integral>0 && v.money>0" class="nowei">+</text>
					<text v-if="v.money>0"><text class="f22">฿</text>{{v.money}}</text>
				</view>
			</view>
			<view class="pt20 mr20 b-t-e f-x-e" v-if="v.state==1">
				<view class="f28 c3 wei4 f-x-e">
					<view class="obtn b-d bwid bs30" :style="{color:tColor,borderColor:tColor}"
						@click.stop="qxdd(v.orderSn)">{{$t("integral.cancel_order")}}</view>
				</view>
				<view class="f28 c3 wei4 f-x-e">
					<view class="obtn b-d bwid bs30" :style="{color:tColor,borderColor:tColor}"
						@click.stop="ljzf(v)">{{$t("integral.pay_now")}}</view>
				</view>
			</view>
			<view class="pt20 mr20 b-t-e" v-if="v.state==2 && v.diningType!=2">
				<view class="f28 c3 wei4 f-x-e">
					<view class="obtn b-d bwid bs30" :style="{color:tColor,borderColor:tColor}"
						@click.stop="sqtk(v.orderSn)">{{$t("integral.apply_for_refund")}}</view>
				</view>
			</view>
			<view class="pt20 mr20 b-t-e" v-if="v.state==3 && v.diningType==1">
				<view class="f28 c3 wei4 f-x-e">
					<view class="obtn b-d bwid bs30" :style="{color:tColor,borderColor:tColor}"
						@click.stop="qrsh(v.orderSn)">{{$t("integral.confirm_receipt")}}</view>
				</view>
			</view>
			<view v-if="v.state==2 && v.diningType==2">
				<view class="pt20 mr20 b-t-e f-x-bt f28">
					<view class="c3 wei4" :style="{color:tColor}">{{$t("integral.self_pickup_order")}}</view>
					<view v-if="v.qrCode">{{$t("integral.verification_code")}}：<text :style="{color:tColor}" class="neutra-font">{{v.qrCode}}</text></view>
				</view>
				<view class="flex f-x-e">
					<view class="f28 c3 wei4 f-x-e mt20" v-if="v.state==2">
						<view class="obtn b-d bwid bs30" :style="{color:tColor,borderColor:tColor}"
							@click.stop="sqtk(v.orderSn)">{{$t("integral.apply_for_refund")}}</view>
					</view>
					<view class="f28 c3 wei4 f-x-e mt20" v-if="v.state!='4'">
						<view class="obtn b-d bwid bs30" :style="{color:tColor,borderColor:tColor}"
							@click.stop="wyqh(v.orderSn)">{{$t("integral.i_have_picked_up")}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="pt150" v-if="dataList.length==0">
			<i-default :imgn="7" />
		</view>
		<jzz bgcolor="transparent" :nodata="dataList.length==0&&isget" :mygd='mygd' />
		<tab-bar></tab-bar>
		<pay ref="Pay" @pay="changeTab(aIdx)"></pay>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import navTab from '@/components/common/functionCmp/nav-tab.vue'
	import jzz from '@/components/common/jzz.vue'
	import iDefault from '@/components/common/default.vue'
	import Pay from '@/components/pay/pay.vue'
	import {
		sljz
	} from "@/common/util-mixins.js"
	export default {
		name: 'integralRecord',
		components: {
			navTab,
			jzz,
			iDefault,
			Pay,
		},
		data() {
			return {
				aIdx: 0,
				tabs: [{
						name: this.$t("integral.all"),
						value: '',
					},
					// {
					// 	name: '待支付',
					// 	value: 'unpaid',
					// },
					{
						name: this.$t("integral.pending_shipment"),
						value: 'unDelivery',
					},
					{
						name: this.$t("integral.pending_receipt"),
						value: 'delivery',
					}, {
						name: this.$t("integral.completed"),
						value: 'complete',
					}
				],
				dataList: [],
				params: {
					page: 1,
					size: 10,
					state: '',
				},
			}
		},
		onLoad(options) {
			this.getSystem()
			this.util.setNT(this.$t("integral.redemption_record"))
			this.aIdx = +options.idx || 0
			this.changeTab(this.aIdx)
		},
		mixins: [sljz],
		computed: {
			jfName() {
				return this.system.custom.integral || this.$t("integral.points")
			},
		},
		methods: {
			async getList() {
				let {
					data: {
						list
					}
				} = await this.util.request({
					'url': this.api.jfdd,
					data: this.params,
				})
				this.dataList = this.dataList.concat(list)
				this.isget = true
				this.mygd = this.params.size > list.length
				this.params.page++
			},
			changeTab(e) {
				this.isget = this.mygd = false
				this.params.page = 1
				let type = ''
				switch (e) {
					case 0:
						type = '';
						break;
					// case 1:
					// 	type = 'unpaid';
					// 	break;
					case 1:
						type = 'unDelivery';
						break;
					case 2:
						type = 'delivery';
						break;
					case 3:
						type = 'complete';
						break;
				}
				this.params.state = type
				this.dataList = []
				this.getList()
				// console.log(e, this.aIdx)
			},
			async qxdd(id) {
				try {
					await this.util.modal(this.$t("integral.are_you_sure_to_cancel_order"))
					let res = await this.util.request({
						'url': `${this.api.jfscqx}/${id}`,
						mask: 1,
						method: 'POST'
					})
					if (res) {
						this.util.message(res.msg, 1, 1000)
						this.changeTab(this.aIdx)
					}
				} catch (e) {}
			},
			async ljzf(v) {
				if(v && v.orderSn){
					this.$refs['Pay'].open(
						JSON.stringify({
							orderSn: v.orderSn,
							orderType: 5
						})
					)
				}
			},
			async sqtk(id) {
				try {
					await this.util.modal(this.$t("integral.are_you_sure_to_apply_for_refund"))
					let res = await this.util.request({
						'url': `${this.api.jfsctk}/${id}`,
						mask: 1,
						method: 'POST'
					})
					if (res) {
						this.util.message(res.msg, 1, 1000)
						this.changeTab(this.aIdx)
					}
				} catch (e) {}
			},
			async qrsh(id) {
				try {
					await this.util.modal(this.$t("integral.are_you_sure_to_confirm_receipt"))
					let res = await this.util.request({
						'url': `${this.api.jfqrsh}/${id}`,
						mask: 1,
						method: 'POST',
					})
					if (res) {
						this.util.message(res.msg, 1, 1000)
						//utils.swnb(1000)
						this.changeTab(this.aIdx)
					}
				} catch (e) {}
			},
			async wyqh(id) {
				try {
					await this.util.modal(this.$t("integral.have_you_received_the_goods"))
					let res = await this.util.request({
						'url': `${this.api.jfqrsh}/${id}`,
						mask: 1,
						method: 'POST'
					})
					if (res) {
						this.util.message(res.msg, 1, 1000)
						//utils.swnb(1000)
						this.changeTab(this.aIdx)
					}
				} catch (e) {}
			},
		},
		async onPullDownRefresh() {
			this.showloading = true
			await this.changeTab(this.aIdx)
			this.showloading = false
			uni.stopPullDownRefresh();
		},
	}
</script>

<style scoped lang="scss">
	.imgw {
		width: 100rpx;
		height: 100rpx;
	}

	.bor-b {
		border-bottom: 1px solid #EFF3F6;
	}

	.pt110 {
		padding-top: 110rpx;
	}

	.bwid {
		width: 175rpx;
	}

	.c1f {
		color: #1FBF5F;
	}

	.c3f {
		color: #999;
	}
</style>