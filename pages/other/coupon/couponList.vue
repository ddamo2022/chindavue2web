<template>
	<view class="coupon h-100">
		<block v-if="!isload">
			<view class="bf5 h-100" v-if="cInfo && cInfo.coupon">
				<view class="f-c flex-column">
					<view class="mt120" v-if="user.id && cInfo.member && user.id!=cInfo.member.id">
						<view class="c9">
							{{$t("other-coupon.your_friend")}}“{{cInfo.member.nickname}}”，{{$t("other-coupon.send_you_coupon")}}
						</view>
					</view>
					<view class="cimg posi-r f-c mt90">
						<image :src='`${onImgurl}other/cp.png`' mode="aspectFill" class="wh">
							<view class="posi-a ctxt f-c-c t-o-e">
								<view class="f50 wei f-g-1">{{cInfo.coupon.name}}</view>
								<view class="mt10 f34">
									<span v-if="cInfo.coupon.startSwitch==0">{{$t("other-coupon.no_limit")}}</span>
									<span
										v-else-if="cInfo.coupon.startSwitch==1">{{$t("other-coupon.full")}}{{cInfo.coupon.startMoney && parseFloat(cInfo.coupon.startMoney)}}THB{{$t("other-coupon.available")}}</span>
								</view>
							</view>
					</view>
				</view>
				<view class="p3 mt90">
					<view class="flex-column f-c" v-if="user.id && cInfo.member && user.id==cInfo.member.id">
						<block v-if="cInfo.state==0">
							<view class="c9">
								{{$t("other-coupon.friend_not_received")}}，24{{$t("other-coupon.auto_return_hours")}}
							</view>
							<button class="cf xzhy f-c bs60 mt30" @click="qxzs(cInfo.id,cInfo.memberCouponId)"
								:style="{background:tColor}">{{$t("other-coupon.cancel_gift")}}</button>
						</block>
						<block v-else-if="cInfo.state==1 && cInfo.receiveMember">
							<view class="c9">“{{cInfo.receiveMember.nickname}}”{{$t("other-coupon.receive")}}</view>
						</block>
						<block v-else-if="cInfo.state==2">
							<view class="c9">{{$t("other-coupon.coupon_canceled")}}</view>
						</block>
					</view>
					<view class="f-c" v-else>
						<button v-if="cInfo.state==0" class="cf xzhy f-c bs60 mt30"
							@click="ljlq(cInfo.id,cInfo.memberCouponId)"
							:style="{background:tColor}">{{$t("other-coupon.immediate_receive")}}</button>
						<button v-else-if="cInfo.state==1" class="cf xzhy f-c bs60 mt30" :style="{background:tColor}"
							@click="go({t: 6,url: '/pages/index/my-index'})">{{$t("other-coupon.coupon_received")}}</button>
					</view>
				</view>
			</view>
		</block>
		<block v-else>
			<!-- <view class="f-bt p2 dy">
				<view class="f-g-1 c6">开启优惠券过期/到账提醒</view>
				<view class="f-g-0 f-c btn bs30 cf f22" :style="{background:tColor}" @click="ljdy">立即订阅</view>
			</view> -->
			<view class="p2">
				<view class="dh f-bt p-10-30 bf bs30 f-y-c" :style="{color:tColor}">
					<view class="f-g-1 flex f-y-c" @click="goDhm">
						<text class="iconfont icon-gengxin f32 mr10 c3" :style="{color:tColor}"></text>
						<view>{{$t("other-coupon.exchange_coupon")}}</view>
					</view>
					<view class="f-g-0"><text class="iconfont icon-youjiantou c3 f30" :style="{color:tColor}"></text>
					</view>
				</view>
			</view>
			<view class="p2 ccoupon">
				<my-coupon :color='tColor' cname='mb30' v-for="(v,i) in dataList" :key='i' :co='v.coupon' :v="v"
					ttype='2' @fx="fxd" @rf="changeTab"></my-coupon>
				<jzz bgcolor="transparent" imgn='zwhb' :nodata="dataList.length==0&&isget" :mygd='mygd' />
			</view>
			<view class="pt150">
				<i-default :imgn="2" v-if="!dataList || dataList.length<=0" />
			</view>
			<view class="foot-btnc c3 f28 bf f-bt f-y-c" :style="{padding: '20rpx',bottom: isIpx?'40rpx':0}">
				<view class="f-g-1 f-c" @click="go({url:'hisCoupon'})">{{$t("other-coupon.coupon_history")}}</view>
				<view class="f-g-0 bline"></view>
				<view class="f-g-1 f-c" @click="go({url:'givedl'})">{{$t("other-coupon.gift_record")}}</view>
			</view>
			<view v-if="isIpx" class='bgf'></view>
		</block>
		
		 
		<sq-btn type="1" ref="sqBtn"></sq-btn>
		<userPrivacy ref="privacy"></userPrivacy>
	
		<view class="posi-r">
			<tab-bar></tab-bar>
		</view>
			 
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import jzz from '@/components/common/jzz.vue'
	import iDefault from '@/components/common/default.vue'
	import myCoupon from '@/components/common/my-coupon.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import userPrivacy from "@/components/user/userPrivacy.vue";
	import {
		sljz
	} from "@/common/util-mixins.js"
	export default {
		name: 'coupon-list',
		components: {
			jzz,
			iDefault,
			myCoupon,
			sqBtn,
			userPrivacy,
		},
		data() {
			return {
				isload: '',
				params: {
					page: 1,
					size: 10,
					state: 'normal',
				},
				fx: {},
				cInfo: {},
			}
		},
		onReady() {
			var _this = this;
			// #ifdef MP-WEIXIN
			wx.getPrivacySetting({
				success: res => {
					if (res.needAuthorization) {
						_this.$refs.privacy.open(res.privacyContractName)
						return;
					}
				},
				fail: () => {},
				complete: (res) => {
					console.log(res)
				}
			})
			// #endif
		},
		async onLoad(options) {
			await this.getLoginInfo()
			if (!await this.checkLogin()) return
			console.log('options', options)
			if (options && options.couponId) {
				this.isload = false
				this.util.setNT(this.$t("other-coupon.coupon_collection"))
				this.query = options
				this.getCoupon(options.couponId)
			} else {
				this.isload = true
				this.refresh()
				this.util.setNT(this.$t("other-coupon.my_coupons"))
			}
			// this.getList()
		},
		mixins: [sljz],
		computed: {},
		onShow() {
			if (this.isload) {
				this.refresh()
			}
		},
		methods: {
			refresh() {
				this.changeTab(this.aIdx)
			},
			changeTab(e) {
				this.isget = this.mygd = false
				this.params.page = 1
				this.dataList = []
				this.getList()
			},
			async getList() {
				let {
					data
				} = await this.util.request({
					'url': this.api.mycp,
					data: this.params,
				})
				this.dataList = this.dataList.concat(data.list)
				this.isget = true
				this.mygd = this.params.size > data.list.length
				this.params.page++
			},
			async getCoupon(id) {
				let {
					data
				} = await this.util.request({
					'url': `${this.api.yhqzz}/${id}`,
				})
				this.cInfo = data
			},
			async ljlq(id, cid) {
				if (!this.isLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				let {
					msg
				} = await this.util.request({
					'url': `${this.api.jszz}/${id}`,
					'method': 'POST',
				})
				this.util.message(msg, 1, 1000)
				this.getCoupon(cid)
			},
			async qxzs(id, cid) {
				await this.util.modal(this.$t("other-coupon.confirm_cancel_gift"))
				let {
					msg
				} = await this.util.request({
					'url': `${this.api.yhqzz}/${id}`,
					'method': 'DELETE',
				})
				this.util.message(msg, 1, 1000)
				this.getCoupon(cid)
			},
			fxd(v) {
				console.log(v)
				this.fx = v
			},
			goDhm() {
				this.go({
					url: `/pages/other/coupon/dhm?type=1`,
					t: 1
				})
			},
			async ljdy() {
				if (!this.jjmbxx) {
					try {
						await this.requestSM(['coupon', 'couponOverdue', 'activity'])
					} catch (e) {
						this.jjmbxx = true
						return
					}
				}
			},
		},
		onShareAppMessage() {
			let p = `pages/other/coupon/couponList?couponId=${this.fx.id}&userId=${this.uId}`
			return this.util.mpShare({
				t: this.fx.coupon.regiftTitle,
				i: this.getImgS(this.fx.coupon.regiftImage),
				p,
			})
		},
	}
</script>
<style scoped lang="scss">
	.coupon {
		.dy {
			box-shadow: 0rpx 4rpx 20rpx 0rpx rgba(221, 221, 221, 0.8);

			.btn {
				width: 130rpx;
				height: 44rpx;
			}
		}

		.cimg {
			width: 640rpx;
			height: 460rpx;


			.ctxt {
				color: #F63D2C;
				width: 480rpx;
			}
		}

		.xzhy {
			width: 400rpx;
			height: 90rpx;
		}

		.bline {
			height: 26rpx;
			width: 2rpx;
			background: #ddd;
		}
	}
</style>