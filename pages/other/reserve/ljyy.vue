<template>
	<view v-show="yyxx.config" class="bf9 mvh100 pb130">
		<view class="main">
			<view class="f-bt userInfo bf bs20 b-s p2">
				<view class="f-g-0 logo bsf mr20"><image class="wh" :src="user.avatar || user.applylogo" mode="aspectFill"></image></view>
				<view class="f-g-1">
					<view class="wei">{{user.nickname ||  $t("other-reserve.wechat_user")}}</view>
					<view class="mt20">{{checkInfo.store && checkInfo.store.name}}，{{$t("other-reserve.welcome")}}</view>
				</view>
			</view>
			<!-- <view class="bf bs20 b-s mt30">
				<mg-input @tab="go({url:'index?change=1&storeId='+params.storeId})" last='1' isr='1' dis='1' v-model="params.ydxx"
				 pr='请修改预定信息' icn='f30' iconn='iconbianji'>
					<view slot='ft' :style="{color:tColor}">修改</view>
				</mg-input>
			</view> -->
			<view class="bf bs20 b-s mt30">
				<mg-input isr='1' v-model="params.userName" :pr='$t("other-reserve.please_enter_contact_name")' icn='f30' iconn='iconwd f34'>
					<view slot='ft' class="c3 f30">
						<mg-radio v-model="params.sex" :arr='sexArr' :rsname="{padding:'0 0 0 30rpx'}"></mg-radio>
					</view>
				</mg-input>
				<mg-input isr='1' v-model="params.userTel" :max='11' t='number' :pr='$t("other-reserve.please_enter_phone_number")' icn='f30' iconn='icondh4 f34'>
					<view slot='hd' class="f-y-c sjhqh">
						<text>{{$t("other-reserve.contact_information")}} +66</text>
						<text class="iconfont icondown c3 f28 ml5"></text>
					</view>
				</mg-input>
				<mg-input isr='1' v-model="params.num" :max='11' t='number' :pr='$t("other-reserve.please_enter_reservation_number")' icn='f30' iconn='icondh4 f34' @input='checkOut'>
					<view slot='hd' class="f-y-c sjhqh">
						<text>{{$t("other-reserve.reservation_number")}}</text>
					</view>
				</mg-input>
				<mg-input last='1' isr='1' v-model="params.note" max='25' :pr='$t("other-reserve.please_note")' icn='f30' iconn='icondd'>
					<view slot='ft'>{{params.note.length}}/25</view>
				</mg-input>
			</view>
			<!-- <view v-if="params.xzyy&&params.xzyy[4].value.money>0" class="bf bs20 b-s mt30 p23 l-n">
				<view class="f30 wei mb15">定金说明</view>
				<mg-rtext type='2' :content="yyxx.config.introduction" />
			</view> -->
			<view class="bf bs20 b-s mt30 p2" v-if="params.xzyy">
				<view class="f-bt mb30 b-b-e pb20">
					<view class="f-g-0">{{$t("other-reserve.dining_time")}}</view>
					<view class="f-g-1 f-x-bt ml30">{{params.xzyy[2].value}}</view>
				</view>
				<view class="f-bt mb30 b-b-e pb20">
					<view class="f-g-0">{{$t("other-reserve.number_of_people")}}</view>
					<view class="f-g-1 f-x-bt ml30">{{params.xzyy[3].name}}</view>
				</view>
				<view class="f-bt mb30 b-b-e pb20">
					<view class="f-g-0">{{$t("other-reserve.dining_area")}}</view>
					<view class="f-g-1 f-x-bt ml30">{{params.xzyy[5].name}}</view>
				</view>
				<view class="f-bt mb30 b-b-e pb20">
					<view class="f-g-0">{{$t("other-reserve.dining_position")}}</view>
					<view class="f-g-1 f-x-bt ml30">{{params.xzyy[4].name}}</view>
				</view>
				<view class="f-bt pb20" v-if="checkInfo.money>0">
					<view class="f-g-0">{{$t("other-reserve.reservation_amount")}}</view>
					<view class="f-g-1 f-x-bt ml30">฿{{checkInfo.money}}</view>
				</view>
			</view>
		</view>
		<view class="foot-btnc bf9">
			<block v-if="checkInfo.money>0">
				<!-- <view class="p-a ydjc bf f24">
					<view class="f-y-c">距离就餐时间不足{{yyxx.config.expired}}分钟，商家接单后支付金额无法返还</view>
					<view class="p-a xxsj"></view>
				</view> -->
				<view class="yd2 f-y-c">
					<view class="f-1 ml20">
						<view class="f-row f-y-e wbba" :style="{color:tColor}">
							<text>฿</text>
							<text class="f34 wei ml5">{{checkInfo.money}}</text>
						</view>
						<!-- <view class="f22 c9">支付即表示您已同意上述规则说明</view> -->
					</view>
					<button @click="save" :loading="loading" :disabled="loading" class="yd2r f34 f-c cf" :style="{background:tColor}">{{$t("other-reserve.pay_now")}}</button>
				</view>
			</block>
			<block v-else>
				<button @click="save" :loading="loading" :disabled="loading" class="foot-btn" :style="{background:tColor}"
				 hover-class="btnhc">{{$t("other-reserve.book_now")}}</button>
			</block>
		</view>
		<pay ref="Pay" @pay="getInfo"></pay>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import mgInput from '@/components/form/my-input.vue'
	import MgCell from '@/components/common/my-cell.vue'
	import mgRadio from '@/components/form/my-radio.vue'
	import bkB from '@/components/common/block-b.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import mgRtext from '@/components/common/functionCmp/rich-text.vue'
	import utils from '@/common/utils.js'
	import Pay from '@/components/pay/pay.vue'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		name: 'reserve-ljyy',
		components: {
			mgInput,
			mgRadio,
			MgCell,
			bkB,
			sqBtn,
			mgRtext,
			Pay,
		},
		data() {
			return {
				yyxx: {},
				params: {
					storeId: '',
					people: '',
					userName: '',
					userTel: '',
					telcode:'+66',
					num: 1,
					sex: this.$t("other-reserve.male"),
					note: '',
					ydxx: '',
				},
				sexArr: [{
						value: this.$t("other-reserve.female"),
						name: this.$t("other-reserve.lady")
					},
					{
						value: this.$t("other-reserve.male"),
						name: this.$t("other-reserve.mr"),
						checked: 'true'
					}
				],
				loading: false,
				isbj: false,
				checkInfo:{},
			}
		},
		async onLoad(options) {
			this.util.setNT(this.$t("other-reserve.reserve"))
			this.params.storeId = options.storeId
			this.getLoginInfo()
			this.getData()
		},
		onShow() {
			this.params.ydxx = uni.getStorageSync('bdhc').map(v => v.name).join('，').replace('，', ' ').replace('，', ' ')
			this.params.xzyy = uni.getStorageSync('bdhc')
			this.checkOut()
		},
		mixins: [utilMixins],
		computed: {
			
		},
		methods: {
			...mapActions(["getConfig"]),
			async checkOut(){
				let {
					data
				} = await this.util.request({
					url: this.api.yycheck,
					method: 'get',
					data: {
						appointmentTime:this.params.xzyy[2].value,
						person:this.params.xzyy[3].value,
						typeId:this.params.xzyy[4].value.id,
						areaId:this.params.xzyy[5].value,
						num:this.params.num,
						contact:this.params.userName,
						sex:this.params.sex,
						notes:this.params.note,
						mobile:this.params.telcode+this.params.userTel,
						storeId:this.params.storeId,
					},
				})
				this.checkInfo = data
			},
			async getData() {
				let data = uni.getStorageSync('fwb')
				this.yyxx = data
			},
			setTel(e) {
				this.params.userTel = e
			},
			async save() {
				if (!this.params.xzyy) return this.util.message(this.$t("other-reserve.please_complete_reservation_info"), 3)
				if (this.params.num<=0) return this.util.message(this.$t("other-reserve.minimum_reservation_number")+'1', 3)
				this.params.typeId = this.params.xzyy[4].value.id
				console.log(this.params)
				this.checkOut()
				let filterArr = ['people', 'note']
				let judgeData = utils.isFailParams({
					field: this.params,
					filter: filterArr,
					tips: {
						typeId: this.$t("other-reserve.missing_type"),
						storeId: this.$t("other-reserve.missing_merchant"),
						userName: this.$t("other-reserve.please_enter_contact_name_again"),
						userTel: this.$t("other-reserve.please_enter_phone_number_again"),
					}
				})
				if (!judgeData) {
					return
				} else {
					
					//if (!utils.isTelCode(this.params.userTel)) return this.util.message(this.$t("other-reserve.please_enter_correct_phone_number"), 3)
					this.loading = true
					// #ifdef MP-WEIXIN
					// if (!this.jjmbxx) {
					// 	try {
					// 		await this.requestSM('appointmentOrder')
					// 	} catch (e) {
					// 		this.jjmbxx = true
					// 		this.loading = false
					// 		return
					// 	}
					// }
					// #endif
					let orderRes = await this.util.request({
						url: this.api.yycj,
						method: 'POST',
						mask: 1,
						data: {
							appointmentTime:this.params.xzyy[2].value,
							person:this.params.xzyy[3].value,
							typeId:this.params.xzyy[4].value.id,
							areaId:this.params.xzyy[5].value,
							num:this.params.num,
							contact:this.params.userName,
							sex:this.params.sex,
							notes:this.params.note,
							mobile: this.params.telcode+this.params.userTel,
							storeId:this.params.storeId,
						},
					})
					if (!orderRes) {
						this.loading = false
					} else {
						uni.removeStorageSync('bdhc')
						if (this.checkInfo.money > 0) {
							this.$refs['Pay'].open(
								JSON.stringify({
									orderSn: orderRes.data,
									orderType: 7,
									go: ({
										t: 2,
										url: `/pages/other/reserve/yyxq?id=${orderRes.data}`
									})
								})
							)
						}else {
							this.util.message(orderRes.msg, 1, 1000)
							this.loading = false
							setTimeout(() => {
								this.go({
									t: 2,
									url: '/pages/other/reserve/yyxq?id=' + orderRes.data,
								})
							}, 1000)
						}
					}
				}
			},
		}
	}
</script>
<style scoped lang="scss">
	.pb130 {
		padding-bottom: 200rpx;
	}

	.main {
		padding: 30rpx;
	}

	.b-s {
		box-shadow: 5rpx 5rpx 8rpx 3rpx rgba(221, 221, 221, 0.5)
	}

	.sjhqh {
		padding-right: 30rpx;
		margin-right: 30rpx;
	}

	.hlr::after {
		border-color: #BBBBBB;
	}

	.ydjc {
		top: 10rpx;
		transform: translateY(-100%);
		padding: 20rpx 40rpx;
		border-radius: 60rpx;
	}

	.xxsj {
		bottom: -20rpx;
		left: 30rpx;
		width: 0;
		height: 0;
		border-width: 30rpx 30rpx 0;
		border-style: solid;
		border-color: #fff transparent transparent;
	}

	.yd2r {
		width: 250rpx;
		height: 80rpx;
		border-radius: 80rpx;
	}
	
	.userInfo{
		.logo{
			width: 120rpx;
			height: 120rpx;
		}
	}
</style>
