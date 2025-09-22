<template>
	<view class="mh100 pb200 bf" v-if="recharge&&recharge.state==1">
		<view class="flex p2 c3" v-if="storeInfo">
			<view class="f-g-0 f-y-c"><text class="iconfont icon-im_dingwei f32 mr10 c3 mt5"></text></view>
			<view class="f-g-1 t-o-e f-y-c" @click="goSelect">
				<text class="f30">{{storeInfo.name}}</text>
				<text class="iconfont icon-youjiantou f32 mr10 c3 mt5"></text>
			</view>
		</view>
		<view class="remain">
			<view class="topc p-r" :style="{background:tColor}">
				<view class="rwimg p-a r0">
					<mg-img m="scaleToFill" :src="recharge.bgImage || `${onImgurl}other/rbg.png`"></mg-img>
				</view>
				<view class="p-r">
					<view class="cf">
						<view>{{$t("recharge.account_balance")}}（THB）</view>
						<view class="accBalance wei neutra-font">{{isLogin?user.account && parseFloat(user.account.balance):0}}
						</view>
					</view>
					<view class="flex cf mt90 f28">
						<view class="f-y-c" @click="go({url:'yemx?idx=1'})">{{$t("recharge.transaction_record")}}<text
								class="iconfont icon-youjiantou ml5 cf f28"></text></view>
						<view class="f-y-c ml20" @click="goDhm">{{$t("recharge.stored_value_exchange")}}<text class="iconfont icon-youjiantou ml5 cf f28"></text></view>
					</view>
				</view>
			</view>
			<view class="f-bt f-w p2">
				<view v-for="(v,i) in rule.list" :key='i' @click="change(i)" class="ckic bs15 bf5 f-col posi-r"
					:style="{background:aIdx==i?`rgba(${cTR(tColor)},0.1)`:'',boxShadow:aIdx==i?'none':'',borderColor:aIdx==i?tColor:'',color:aIdx==i?tColor:'',}">
					<view class="f-1 f-c">
						<view class="f42 wei f48 neutra-font" :class="{'f48':aIdx==i}">{{Number(v.amount)}}</view>
						<view class="ml15 mt10 f30" :class="{'f30':aIdx==i}">THB</view>
					</view>
					<view class="hx ma" :style="{background:aIdx==i?tColor:''}"></view>
					<view class="f-c-c f24 p13 neutra-font">
				  	   <view  v-if="v.rule.balanceSwitch &&v.rule.balanceSwitch==1">{{$t("recharge.gift")}} {{v.rule.balanceGive}}THB{{$t("recharge.balance")}}</view> 
						<view v-else-if="v.rule.integralSwitch==1">{{$t("recharge.gift")}} {{v.rule.integralGive}}{{$t("recharge.points")}}</view>
					</view>
					<view class="posi-a scjl" v-if="aIdx==i && v.first==0" :style="{background:tColor}">{{$t("recharge.first_recharge_reward")}}</view>
				</view>
				<view v-if="recharge.topUpPrice==1" @click="change(-1)" class="ckic bs15 bf5 f-col"
					:style="{background:aIdx==-1?`rgba(${cTR(tColor)},0.1)`:'',boxShadow:aIdx==-1?'none':'',borderColor:aIdx==-1?tColor:'',color:aIdx==-1?tColor:'',}">
					<view class="f-1 f-c">
						<input :focus='focus' v-model="money" class="f42 srk t-c bt neutra-font" :class="{'f48':aIdx==-1}"
							type="digit" maxlength="6" :placeholder="$t('recharge.please_enter')" placeholder-class="f30 t-c"></input>
						<view class="f20" :class="{'f30':aIdx==-1}">THB</view>
					</view>
					<view class="hx ma" :style="{background:aIdx==-1?tColor:''}"></view>
					<view class="f-1 f-c-c f20">
						<view class="">{{$t("recharge.other_amount")}}</view>
					</view>
				</view>
			</view>
			<view class="mt20 p2" v-if="aIdx>=0">
				<view class="wei f30">{{$t("recharge.you_will_get")}}：</view>
				<view class="mt10">
	     		<view v-if=" xzrule.rule.balanceSwitch&& xzrule.rule.balanceSwitch==1">{{$t("recharge.give")}}：{{xzrule.rule.balanceGive}}THB{{$t("recharge.balance")}}</view>
					<view v-if="xzrule.rule.integralSwitch==1">{{$t("recharge.give")}}：{{xzrule.rule.integralGive}}{{$t("recharge.points")}}</view>
					<view v-if="xzrule.rule.couponSwitch==1">{{$t("recharge.give")}}：
						<text v-if="xzrule.rule.couponGive">
							<block v-for="(v,i) in xzrule.rule.couponGive" :key='i'>
								{{v.name}} <text class="ml10 mr20" :style="{color:tColor}">x{{v.num}}</text>
							</block>
						</text>
					</view>
					<view v-if="xzrule.rule.levelSwitch==1">{{$t("recharge.upgrade_to_membership_level")}}{{xzrule.rule.levelName}}</view>
				</view>
			</view>
			<view class="mt20 p2">
				<view class="wei f30">{{$t("recharge.instructions")}}：</view>
				<view class="mt10">
					<mg-rtext type='2' :content="recharge.ruleContent" />
				</view>
			</view>
		</view>
		<view class="foot-btnc cf f30 bf" :style="{padding: '20rpx',bottom: isIpx?'40rpx':0}">
			<view class="f-g-1"><mg-agree cname="p1" p='6' :title='$t("recharge.membership_stored_value_agreement")' :color="tColor" v-model="isAgree"></mg-agree>
			</view>
			<view class="f-g-1 mt10">
				<button @click="save" :loading="loading" :disabled="loading" class="foot-btn bs15 f30"
					hover-class="btnhc" :style="{background:tColor,color:fontColor}">{{$t("recharge.store_value_now")}}</button>
			</view>
		</view>
		<view v-if="isIpx" class='bgf'></view>
		<pay ref="Pay" @pay="rechargeRule"></pay>
		<sq-btn type="1" ref="sqBtn"></sq-btn>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import MgImg from '@/components/common/my-img.vue'
	import utils from '@/common/utils.js'
	import mgAgree from '@/components/form/my-agree.vue'
	import mgRtext from '@/components/common/functionCmp/rich-text.vue'
	import Pay from '@/components/pay/pay.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import {
		getDw
	} from "@/common/wechat-util.js"
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		name: 'index',
		components: {
			MgImg,
			mgAgree,
			mgRtext,
			Pay,
			sqBtn,
		},
		data() {
			return {
				aIdx: 0,
				focus: false,
				rule: {
					list: [],
				},
				xzrule: {},
				money: '',
				loading: false,
				isAgree: false,
				params: {
					id: '',
				},
				storeInfo: {},
				storeId: '',
			}
		},
		async onLoad() {
			this.util.setNT(this.$t("recharge.membership_stored_value"))
			this.gDw()
			this.init()
		},
		async onShow() {
			if (uni.getStorageSync('rStoreInfo')) {
				this.storeInfo = uni.getStorageSync('rStoreInfo')
				this.load(this.storeInfo.id)
			}
		},
		mixins: [utilMixins],
		computed: {
			...mapState({
				recharge: state => state.config.storageVal,
			}),
			...mapState(['sjxx']),
		},
		methods: {
			...mapActions(['getConfig', 'getSjxx']),
			async init() {
				await this.getLoginInfo()
				await this.getLayout()
				await this.getConfig({
					ident: ["storageVal"]
				}).then(() => {
					this.isload = true
					if (this.recharge.state != 1) {
						uni.showModal({
							title: this.$t("recharge.tip"),
							content: this.$t("recharge.stored_value_function_is_closed"),
							showCancel: false,
							confirmText:this.$t('modal.confirm'),
							success: (res) => {
								this.go({
									t: 6,
									url: '/pages/index/my-index'
								})
							}
						});
					}
				})
				this.rechargeRule()
			},
			async load(sid) {
				if (sid) {
					uni.removeStorageSync('rStoreInfo')
				}
			},
			async gDw() {
				if (this.storeInfo && this.storeInfo.id) {
					return
				} else {
					let lc = await getDw({
						t: 0
					})
					this.lc = lc
					await this.getAddInfo(lc)
					let res = await this.util.request({
						'url': this.api.dplb,
						data: {
							lat: lc.latitude || '',
							lng: lc.longitude || '',
							recharge: 1,
						}
					})
					this.storeInfo = res.data && res.data.list && res.data.list[0]
				}
			},
			goSelect() {
				uni.navigateTo({
					url: '/pages/shop/select/index?page=recharge'
				})
			},
			async rechargeRule() {
				this.refreshUser({
					get: 1,
					now: 1,
				})
				let {
					data
				} = await this.util.request({
					'url': this.api.czgz,
				})
				this.rule.list = data
				if (data.length) {
					this.aIdx = 0
					this.xzrule = data[0]
				}
			},
			change(v) {
				this.aIdx = v
				if (v == -1) {
					this.focus = true
				} else {
					this.focus = false
					this.xzrule = this.rule.list[v]
				}
			},
			async save() {
				if (!this.isLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				// if (this.recharge.selectopen == '1' && this.params.peopleText == '') {
				// 	this.util.message('请选择门店', 3)
				// 	return
				// }
				if (!this.isAgree) {
					this.util.message(this.$t("recharge.please_read_and_agree_to_the_membership_stored_value_agreement_carefully"), 3, 2000)
					return
				}
				let money = this.aIdx == -1 ? +this.money : this.xzrule.amount,
					id = this.aIdx == -1 ? 0 : this.rule.list[this.aIdx].id
				// console.log('cz', money, this.xzrule)
				if (!money) {
					this.util.message(this.$t("recharge.please_enter_the_stored_value_amount"), 3)
				} else if (this.aIdx == -1 && money < +this.recharge.minPrice) {
					this.util.message(this.$t("recharge.minimum_recharge_amount") + this.recharge.minPrice, 3)
				} else {
					// return
					this.loading = true
					// #ifdef  MP-WEIXIN
					// if (!this.jjmbxx) {
					// 	try {
					// 		await this.requestSM('recharge')
					// 	} catch (e) {
					// 		this.jjmbxx = true
					// 		this.loading = false
					// 		return
					// 	}
					// }
					// #endif
					let res = await this.util.request({
						'url': this.api.czgz,
						method: 'POST',
						mask: this.$t("recharge.placing_order"),
						data: {
							money: money,
							storeId: this.storeInfo && this.storeInfo.id,
							id,
						}
					})
					if (!res) {
						this.loading = false
					} else {
						this.$refs['Pay'].czOpen(
							JSON.stringify({
								orderSn: res.data.orderSn,
								orderType: 2,
								go: {
									t: 6,
									url: "/pages/other/recharge/index"
								},
							})
						)
						this.loading = false
					}
				}
			},
			goDhm() {
				this.go({
					url: `/pages/other/coupon/dhm?type=2`,
					t: 1
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	.rwimg {
		// width: 326rpx;
		// height: 270rpx;
		width: 100%;
		height: 100%;
		bottom: 0rpx;
	}

	.remain {
		margin: 0 0rpx;
	}

	.topc {
		padding: 45rpx 48rpx 40rpx;
	}

	.accBalance {
		font-size: 60rpx;
	}

	.jyjl {
		right: 30rpx;
		top: 30rpx;
	}

	.img {
		width: 120rpx;
		height: 120rpx;
	}

	.ml15 {
		margin-left: 15rpx;
	}

	.srk {
		height: 115rpx;
		width: 60%;
	}

	.ckic {
		width: 48%;
		margin-top: 45rpx;
		height: 180rpx;
		border: 2rpx solid #F5F5F5;
	}

	.hx {
		width: 100%;
		height: 1rpx;
		background: #dfdfdf;
	}

	.foot-btn {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 60rpx;
	}

	.p13 {
		padding: 13rpx;
	}

	.pb200 {
		padding-bottom: 200rpx;
	}

	.scjl {
		top: 0;
		right: 0;
		font-size: 20rpx;
		color: #fff;
		padding: 4rpx 6rpx;
	}
</style>