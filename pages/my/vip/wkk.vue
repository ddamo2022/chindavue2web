<template>
	<view class="pb130 mh100 cont">
		<view class="f-bt p2 f28">
			<view class="f-g-1 f30 wei">
				
				<text v-if="user.vipCard">{{user.vipCard && user.vipCard.name}}</text>
				<!-- <text class="ml10">会员</text> -->
			</view>
			<!-- <view class="f-g-0 c9">等级说明<text class="iconfont icon-right f24"></text></view> -->
		</view>
		<scroll-view scroll-x class="mt20">
			<view class="flex f-nw w-100 jdt">
				<view class="f20 c9 p-r f-g-0 le" v-for="(v,i) in lsarr" :key="i">
					<view>{{v.exp}}</view>
					<view class="yan mt10" :style="{background:v.level == user.vipCard.level?tColor:''}"></view>
					<view class="c0 mt10 t-o-e">{{v.name}}</view>
					<view class="line p-a" v-if="i<lsarr.length-1"></view>
				</view>
			</view>
		</scroll-view>
		<view class="o-h mt90">
			<view class="wk1ic">
				<ls-swiper :list="lsarr" imgKey="imgUrl" :code1="code1" :crown="true" :slots='true' :loop="true" :shadow='true'
					height='220' :previousMargin="PM" :nextMargin='NM' imgRadius="15" @change='lschange' @clickItem="showcode"
					:swcurrent='swcurrent'>
				</ls-swiper>
			</view>
			<view class="p2 f-c f30 mt20 wei" v-if="xzin.name">{{xzin.name}} {{$t("my-vip.privileges")}}</view>
		</view>
		<block v-if="xzin && xzin.power">
			<view class="p03 tq b-s" v-if="xzin.balanceSwitch || xzin.integralSwitch || xzin.couponSwitch">
				<view class="tit f24 cf" :style="{background:tColor}">{{$t("my-vip.upgrade_rewards")}}</view>
				<view class="flex f-s f-w">
					<view class="f-c-c yh" v-if="xzin.balanceSwitch" @click="qydl(xzin.power.balance)" >
						<view class="p-r">
							<view class="image">
								<image :src="xzin.power.balance.icon" class="wh" mode="widthFix" v-if="xzin.power.balance" />
							</view>
							<view class="p-a jb cf f20 f-c" :style="{background:tColor}" v-if="xzin.balance">x{{parseFloat(xzin.balance)}}</view>
						</view>
						<view class="c6 f26 mt20">{{xzin.power.balance && xzin.power.balance.showName || $t("my-vip.gift_balance")}}</view>
					</view>
					<view class="f-c-c yh" v-if="xzin.integralSwitch" @click="qydl(xzin.power.integral)" >
						<view class="p-r">
							<view class="image">
								<image :src="xzin.power.integral.icon" class="wh" mode="widthFix" v-if="xzin.power.integral" />
							</view>
							<view class="p-a jb cf f20 f-c" :style="{background:tColor}" v-if="xzin.integral">x{{xzin.integral}}</view>
						</view>
						<view class="c6 f26 mt20">{{xzin.power.integral && xzin.power.integral.showName ||  $t("my-vip.gift_points")}}</view>
					</view>
					<block v-if="xzin.couponSwitch && xzin.couponGive">
						<view class="f-c-c yh" v-for="(v,i) in xzin.couponGive" :key="i" @click="qydl(xzin.power.couponGive)" >
							<view class="p-r">
								<view class="image">
									<image :src="xzin.power.couponGive.icon" class="wh" mode="widthFix" v-if="xzin.power.couponGive" />
								</view>
								<view class="p-a jb cf f20 f-c" :style="{background:tColor}" v-if="xzin.balance">x{{v.num}}</view>
							</view>
							<view class="c6 f26 mt20">{{v.name}}</view>
						</view>
					</block>
				</view>
			</view>
			<view class="p03 tq b-s mt20" v-if="xzin.discountSwitch || xzin.integralMultiplierSwitch || xzin.freeMailSwitch || xzin.extPowerData.length">
				<view class="tit f24 cf" :style="{background:tColor}">{{$t("my-vip.membership_benefits")}}</view>
				<view class="flex f-s f-w">
					<view class="f-c-c yh" v-if="xzin.discountSwitch && xzin.power.discount" @click="qydl(xzin.power.discount)" >
						<view class="p-r">
							<view class="image">
								<image :src="xzin.power.discount.icon" class="wh" mode="widthFix" v-if="xzin.power.discount" />
							</view>
							<view class="p-a jb cf f20 f-c" :style="{background:tColor}" v-if="xzin.discount">{{xzin.discount}}{{$t("my-vip.discount")}}</view>
						</view>
						<view class="c6 f26 mt20">{{xzin.power.discount && xzin.power.discount.showName ||$t("my-vip.product_discount") }}</view>
					</view>
					<view class="f-c-c yh" v-if="xzin.integralMultiplierSwitch && xzin.power.integralMultiplier" @click="qydl(xzin.power.integralMultiplier)" >
						<view class="p-r">
							<view class="image">
								<image :src="xzin.power.integralMultiplier.icon" class="wh" mode="widthFix" v-if="xzin.power.integralMultiplier" />
							</view>
							<view class="p-a jb cf f20 f-c" :style="{background:tColor}" v-if="xzin.integralMultiplier">{{parseFloat(xzin.integralMultiplier)}}{{$t("my-vip.multiplier")}}</view>
						</view>
						<view class="c6 f26 mt20">{{xzin.power.integralMultiplier && xzin.power.integralMultiplier.showName ||$t("my-vip.points_multiplier")}}</view>
					</view>
					<view class="f-c-c yh" v-if="xzin.freeMailSwitch && xzin.power.freeMail" @click="qydl(xzin.power.freeMail)" >
						<view class="p-r">
							<view class="image">
								<image :src="xzin.power.freeMail.icon" class="wh" mode="widthFix" v-if="xzin.power.freeMail" />
							</view>
							<view class="p-a jb cf f20 f-c" :style="{background:tColor}" v-if="xzin.freeMailLimit">{{$t("my-vip.free_shipping_over")}}{{parseFloat(xzin.freeMailLimit)}}THB</view>
						</view>
						<view class="c6 f26 mt20">{{xzin.power.freeMail && xzin.power.freeMail.showName || $t("my-vip.free_shipping")}}</view>
					</view>
					<template v-if="xzin.extPowerData">
						<view class="f-c-c yh" @click="qydl(v)" v-for="(v,i) in xzin.extPowerData" :key="i">
							<view class="p-r">
								<view class="image">
									<image :src="v.icon" class="wh" mode="aspectFit" v-if="v.icon" />
								</view>
							</view>
							<view class="c6 f26 mt20">{{v.showName || v.name}}</view>
						</view>
					</template>
				</view>
			</view>
		</block>
		<tcyhq v-if='qyInfo' :type="type" @close='qyshow=false' :co='qyInfo' v-model="qyshow"></tcyhq>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import utils from '@/common/utils';
	import LsSwiper from '@/components/third/ls-swiper/index.vue'
	import tcyhq from '@/components/template/tcyhq.vue'
	export default {
		name: 'wkk',
		components: {
			LsSwiper,
			tcyhq,
		},
		data() {
			return {
				loading: false,
				PM: '42',
				NM: '42',
				lsarr: [],
				swcurrent: 0,
				vipInfo: {},
				xzin: {},
				qyshow: false,
				qyInfo: '',
				code1:'',
				code2:'',
				type:4,
			}
		},
		async onLoad(options) {
			this.util.setNT(this.$t("my-vip.membership_benefits"))
			 await this.getLoginInfo().then(() => {
			 	console.log('fx12', this.fxsId, this.isLogin)
			 	if (this.fxsId && !this.isLogin) {
			 		this.$refs['sqBtn'].openf(this.fxsId)
			 	}
			 })
			 await this.checkLogin()
			 
			if (!this.user.vipCard && this.isLogin) {
				this.go({
					t: 1,
					url: '/pages/other/activate'
				})
			}
			this.makeMemberCode()
			this.getDjlb()
		},
		computed: {
			...mapState({
				system: state => state.system,
			}),
		},
		methods: {
			async getDjlb() {
				let {
					data
				} = await this.util.request({
					'url': this.api.hydj,
				})
				this.lsarr = data
				if (data.length) {
					this.lschange(data[0])
					if (this.user && this.user.vipCard) {
						this.refreshUser({
							nomask: 1,
							get: 1,
							now: 1,
						})
						this.swcurrent = data.findIndex(v => v.level == this.user.vipCard.level)
						this.vipInfo = data[this.swcurrent]
						this.xzin= data[this.swcurrent]
						// this.getVipdata()
					}
				}
				this.$nextTick(function() {
					this.showloading = false
				})
			},
			lschange(e) {
			    console.log('lschange', e)
			
				this.xzin = e
				// this.qyarr.btnList = e.rightsList.map(v => ({
				// 	img: v.icon,
				// 	word: v.name,
				// 	describe: v.describe,
				// }))
			},
			showcode(){
				this.qyInfo = {code2:this.code2}
				//console.log('12123444',this.qyInfo)
				this.qyshow = true
				this.type=9
			},
			async makeMemberCode() {
				// this.util.showLoading()
				// this.ewmlink = this.user.userTel || this.RandomRange(18, 18)
				// this.ewmlink = this.uId + this.RandomRange(6, 6)
				// this.$nextTick(async () => {
				// 	this.code = await this.$refs.zfewm.make()
				// 	uni.hideLoading()
				// })
				let {
					data
				} = await this.util.request({
					'url': this.api.qrCode
				})
				this.code1 = data.oneCode
				this.code2 = data.towCode
				console.log('makeMemberCode', data)
			},
			qydl(c){
				this.qyInfo = c
				this.qyshow = true
				this.type=4
			},
		},
	}
</script>
<style scoped lang="scss">
	.cont {
		.tq {
			margin: 40rpx 20rpx 0 20rpx;
			padding: 100rpx 30rpx 80rpx 30rpx;
			position: relative;
			
			.image{
				width: 80rpx;
				height: 80rpx;
			}

			.tit {
				padding: 5rpx 20rpx;
				position: absolute;
				top: 0;
				left: 0;
			}

			.yh {
				width: 33%;
				margin-bottom: 40rpx;

				.jb {
					top: 0;
					right: -50rpx;
					min-width: 40rpx;
					height: 30rpx;
					padding: 8rpx 12rpx;
					border-radius: 16rpx 16rpx 16rpx 0;
				}
			}
		}
	}

	.jdt {
		padding: 20rpx 60rpx;

		.le {
			width: 140rpx;
		}

		.yan {
			width: 20rpx;
			height: 20rpx;
			border-radius: 50%;
			background: #D8D8D8;
			z-index: 10;
		}

		.line {
			top: 48rpx;
			left: 20rpx;
			width: 100%;
			height: 6rpx;
			background: #D8D8D8;
		}
	}

	.wk1ic {
		// margin: -300rpx 0 42rpx;

		.imgc {
			height: 360rpx;
		}
	}

</style>