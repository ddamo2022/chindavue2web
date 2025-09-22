<template>
	<view v-if="co.state" class="bf9 mvh100 pb130">
		<view class="yyxqbgc p-r cf" :style="{background:`linear-gradient(90deg,${tbgo},${tColor})`}">
			<view class="top">
				<view class="f44 wei">{{co.stateFormat}}</view>
				<view v-if="co.state==2" class="mt20">
					<view class="bztc p-r f-y-c">
						<view class="bzyd" :style="{background:tbgo2,}" :class="{active:0==aIdx}"></view>
						<view class="bzhx f-1" :style="{background:tbgo2,}"></view>
						<view class="bzyd" :style="{background:tbgo2,}" :class="{active:1==aIdx}"></view>
						<view class="bzhx f-1" :style="{background:tbgo2,}"></view>
						<view class="bzyd" :style="{background:tbgo2,}" :class="{active:2==aIdx}"></view>
						<view class="p-a jdt" :style="{width:(aIdx+1)/3*100+'%'}"></view>
					</view>
					<view class="f-x-bt mt10">
						<view v-for="(v,i) in arr" :key='i' :style="{opacity:i==aIdx?'':'0.6',}">{{v}}</view>
					</view>
				</view>
			</view>
			<!-- <view class="p-a b0 zjsjx"></view> -->
		</view>
		<view class="p3 p-r" :style="{marginTop: '-230rpx',}">
			<!-- <view v-if="co.state==3&&zqmArr" class="bf p23 bs20 b-s mb30">
				<view class="f30 wei">订单核销码</view>
				<view class="mt30 mb20 f-c">
					<view class="zqmc f-c" :class="{'mr30':i<zqmArr.length-1}" v-for="(v,i) in zqmArr" :key='i'>{{v}}</view>
				</view>
			</view> -->
			<view class="bf bs20 b-s p-r">
				<mg-cell @tab='go({t: 3,url: `/pages/index/goods?storeId=${co.storeId}`})' isr='1' brs="5rpx" :btt='co.store && co.store.name' bttc='f36 wei' arrow="1" ftc='c6'></mg-cell>
				<view class="p23 f30 c9">
					<view class="p20 f-row">
						<view class="f32 mr30 c3">{{$t("other-reserve.time_and_number_of_people")}}</view>
						<view class="f-1">{{`${co.appointmentTime}，${co.person} ${$t("other-reserve.people")}`}}</view>
					</view>
					<view class="p20 f-row">
						<view class="f32 mr30 c3">{{$t("other-reserve.position_requirements")}}</view>
						<view class="f-1">{{co.area && co.area.name}} {{co.type && co.type.name}}</view>
					</view>
					<view class="p20 f-row">
						<view class="f32 mr30 c3">{{$t("other-reserve.contact_information_again")}}</view>
						<view class="f-1">{{`${co.contact} ${co.mobile}`}}</view>
					</view>
					<view v-if="co.money>0" class="p20 f-row">
						<view class="f32 mr30 c3">{{$t("other-reserve.reservation_deposit")}}</view>
						<view class="f-1">฿{{co.money}}</view>
					</view>
					<view class="p20 f-row">
						<view class="f32 mr30 c3">{{$t("other-reserve.order_time")}}</view>
						<view class="f-1">{{co.created_at}}</view>
					</view>
					<view class="p20 f-row">
						<view class="f32 mr30 c3">{{$t("other-reserve.order_number")}}</view>
						<view class="f-1">{{co.orderSn}}</view>
					</view>
					<view v-if="co.notes" class="p20 f-row">
						<view class="f32 mr30 c3">{{$t("other-reserve.order_notes")}}</view>
						<view class="f-1">{{co.notes}}</view>
					</view>
				</view>
				<!-- <text v-if="co.state==4||co.state==6" class="p-a iconfont yyzt" :class="co.state==4?'iconyjj':'iconyqx'"></text> -->
			</view>
		</view>
		<!-- <view class="foot-btnc" v-if="co.state==2">
			<button @click="save" :loading="loading" :disabled="loading"
			 class="foot-btn" :style="{background:co.state<4?'#ddd':`linear-gradient(90deg,${tbgo},${tColor})`}" hover-class="btnhc">取消预定</button>
		</view> -->
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import utils from '@/common/utils.js'
	import MgCell from '@/components/common/my-cell.vue'
	export default {
		name: 'reserve-yyxq',
		components: {
			MgCell,
		},
		data() {
			return {
				aIdx: 0,
				arr: [this.$t("other-reserve.contacting_merchant"), this.$t("other-reserve.merchant_processing"), this.$t("other-reserve.result_confirmation")],
				loading: false,
				co: {},
			}
		},
		onLoad(options) {
			this.query = options
			this.getSystem({
				nosetNB: 1
			})
			this.util.setNT(this.$t("other-reserve.reservation_details"))
			this.getData()
		},
		mixins: [utilMixins],
		computed: {
			tbgo() {
				return `rgba(${this.cTR(this.tColor)},0.65)`
			},
			tbgo2() {
				return this.cTRld(this.tColor, 0.15)
			},
			// zqmArr() {
			// 	return this.co.code && this.co.code.split('')
			// },
		},
		methods: {
			async getData() {
				let {
					data
				} = await this.util.request({
					url: `${this.api.yycj}/${this.query.id}`,
					mask: 1
				})
				this.co = data
			},
			async qxdd(e) {
				if (e) {
					try {
						await this.util.modal(this.$t("other-reserve.confirm_cancel_order"))
					} catch (e) {
						return
					}
				}
				let data = await this.util.request({
					'url': this.api.qxyy,
					method: 'POST',
					mask: this.$t("other-reserve.cancelling_order"),
					data: {
						id: this.query.id,
						type:'cancel'
					},
				})
				if (data) {
					this.util.message(this.$t("other-reserve.operation_successful"), 1)
					utils.swnb(1000)
				}
			},
			save() {
				uni.showModal({
					title: this.$t("other-reserve.prompt"),
					content: this.$t("other-reserve.confirm_cancel_reservation"),
					cancelText: this.$t("other-reserve.cancel_reservation_again"),
					confirmText: this.$t("other-reserve.continue_reservation"),
					success: async res => {
						if (res.cancel) {
							let data = await this.util.request({
								url: `${this.api.yycj}/${this.id}`,
								method: 'DELETE',
								mask: this.$t("other-reserve.cancelling"),
							})
							if (data) {
								this.util.message(data && data.msg, 1)
								utils.swnb(1000)
							}
						}
					}
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	.yyxqbgc {
		padding-bottom: 200rpx;

		.top {
			padding: 30rpx 50rpx;
		}
	}

	.bztc {
		padding: 10rpx 0rpx;
		margin: 0 50rpx;

		.jdt {
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			height: 6rpx;
			background: #fff;
		}
	}

	.bzyd {
		width: 18rpx;
		height: 18rpx;
		border-radius: 50%;
	}

	.active {
		position: relative;

		&::after {
			content: '';
			position: absolute;
			width: 35rpx;
			height: 35rpx;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: rgba(#fff, 0.4);
			border-radius: 50%;
		}

		&::before {
			content: '';
			position: absolute;
			width: 18rpx;
			height: 18rpx;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: #fff;
			border-radius: 50%;
		}
	}

	.bzhx {
		height: 6rpx;
	}

	.zjsjx {
		width: 0;
		height: 0;
		border-color: #F9F9F9 transparent;
		border-width: 0 0 130rpx 100vw;
		border-style: solid;
	}

	.yyzt {
		top: 110rpx;
		right: 50rpx;
		font-size: 160rpx;
		color: #ddd;
	}

	.zqmc {
		width: 80rpx;
		height: 80rpx;
		border-radius: 10rpx;
		border: 1px dashed #ddd;
	}
</style>
