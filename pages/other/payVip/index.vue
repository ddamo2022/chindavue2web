<template>
	<view class="pb130 mh100 cont bf">
		<nav-tab cname="" ifsize='32' v-model="tIdx" @changeTab='changeTab' :tabs='tabs' :color="tColor"></nav-tab>
		<block v-if="tIdx==0">
			<view class="o-h mt30">
				<view class="wk1ic">
					<ls-swiper :list="lsarr" imgKey="imgUrl" :crown="true" :slots='true' :loop="true" :shadow='true'
						height='180' :previousMargin="PM" :nextMargin='NM' imgRadius="15" @change='lschange'
						:swcurrent='swcurrent'>
					</ls-swiper>
				</view>
			</view>
			<view class="mt30 tq" v-if="xzin.discountSwitch || xzin.couponSwitch || (xzin.periodCouponGive && xzin.periodCouponGive.switch) || xzin.deliveryFreeSwitch">
				<view class="tit f30 c0 wei">专属权益</view>
				<view v-if="xzin.discountSwitch">
					<view class="qy f-bt f-y-c b-b-e pb20 mt30">
						<view class="f-g-1 f-bt">
							<view class="f-g-0 logo bf5 bsf mr20 f-c">
								<text class='iconfont icon-huiyuan f42 wei'></text>
							</view>
							<view class="f-g-1">
								<view class="wei t-o-e">{{xzin.discountTitle}}</view>
								<view class="c9t-o-e">{{xzin.discountDesc}}</view>
							</view>
						</view>
						<view class="f-g-0 wei">
							<view v-if="xzin.goodsType==1">
								<view v-if="xzin.discountType==1"><text class="wei f36">{{xzin.discountRule}}</text>折</view>
								<view v-if="xzin.discountType==2">立减<text class="wei f36">{{xzin.discountRule}}</text>THB</view>
								<view v-if="xzin.discountType==3">指定价格<text class="wei f36">{{xzin.discountRule}}</text>THB</view>
							</view>
							<view v-else>指定商品适用</view>
						</view>
					</view>
					<block v-if="xzin.discountShow && xzin.goods && xzin.goodsType==2" >
						<view class="flex f-w o-h" :style="{height: xzin.goods && xzin.goods.length>3 && !zkshow?'340rpx':'auto'}">
							<view class="goods f-c-xc mt20" v-for="(v,i) in xzin.goods" :key="i">
								<view class="gwh bs20">
									<mg-img :src="v.logo"></mg-img>
								</view>
								<view class="t-o-e mt10 f26">{{v.name}}</view>
								<view class="mt10 f22" :style="{color:tColor}">
									<block v-if="xzin.discountType==1">
										<view>外฿{{v.wmDiscount}}折</view>
										<view>堂฿{{v.wmDiscount}}折</view>
									</block>
									<block v-if="xzin.discountType==2">
										<view>外฿{{v.wmDiscount}}THB</view>
										<view>堂฿{{v.wmDiscount}}THB</view>
									</block>
									<block v-if="xzin.discountType==3">
										<view>฿{{v.wmDiscount}}THB</view>
										<view>฿{{v.wmDiscount}}THB</view>
									</block>
								</view>
							</view>
						</view>
						<view class="f-g-1 f-c">
							<view @click="zkshow=!zkshow" v-if="xzin.goods && xzin.goods.length>3" class="f-c f26 l-h1 zhed">
								<!-- <view>{{zkshow?'收起全部':'查看全部'}}({{xzin.goods.length}})</view> -->
								<text class="iconfont icon-top c3 ml5 f32 wei" :class="{'xzdw':!zkshow}"></text>
							</view>
						</view>
					</block>
				</view>
				<view class="qy b-b-e pb20 mt30" v-if="xzin.couponSwitch">
					<view class="f-bt f-y-c">
						<view class="f-g-1 f-bt">
							<view class="f-g-0 logo bf5 bsf mr20 f-c">
								<text class='iconfont icon-zyhq f42 wei'></text>
							</view>
							<view class="f-g-1">
								<view class="wei">赠送优惠券</view>
								<view class="c9">开卡当日发放优惠券</view>
							</view>
						</view>
						<view class="f-g-0 wei"></view>
					</view>
					<view class="bf5 p2 mt20" v-if="xzin.couponGive">
						<view class="f-bt" v-for="(v,i) in xzin.couponGive" :key="i">
							<view>{{v.name}}</view>
							<view>{{v.num}}张</view>
						</view>
					</view>
				</view>
				<view class="qy b-b-e pb20 mt30" v-if="xzin.periodCouponGive && xzin.periodCouponGive.switch">
					<view class="f-bt f-y-c">
						<view class="f-g-1 f-bt">
							<view class="f-g-0 logo bf5 bsf mr20 f-c">
								<text class='iconfont icon-zyhq f42 wei'></text>
							</view>
							<view class="f-g-1">
								<view class="wei">周期返券</view>
								<view class="c9">开卡后每隔{{xzin.periodCouponGive.periodDay}}天发一次券</view>
							</view>
						</view>
						<view class="f-g-0 wei"></view>
					</view>
					<view class="bf5 p2 mt20" v-if="xzin.periodCouponGive.couponGive">
						<view class="f-bt" v-for="(v,i) in xzin.periodCouponGive.couponGive" :key="i">
							<view>{{v.name}}</view>
							<view>{{v.num}}张</view>
						</view>
					</view>
				</view>
				<view class="qy b-b-e pb20 mt30" v-if="xzin.deliveryFreeSwitch">
					<view class="f-bt f-y-c">
						<view class="f-g-1 f-bt">
							<view class="f-g-0 logo bf5 bsf mr20 f-c">
								<text class='iconfont icon-shinshoplipinqia f42 wei'></text>
							</view>
							<view class="f-g-1">
								<view class="wei t-o-e">{{xzin.deliveryFreeTitle}}</view>
								<view class="c9 t-o-e">{{xzin.deliveryFreeDesc}}</view>
							</view>
						</view>
						<view class="f-g-0 wei"></view>
					</view>
				</view>
			</view>
			<view class="foot-btnc cf f30 bf" :style="{padding: '20rpx',bottom: isIpx?'40rpx':0}">
				<view class="f-g-1 mt10">
					<button @click="save" :loading="loading" :disabled="loading" class="foot-btn bs15 f30"
						hover-class="btnhc" :style="{background:tColor,color:fontColor}"><text
							class="mr10">฿{{xzin.money}}</text>立即购买</button>
				</view>
			</view>
			<view v-if="isIpx" class='bgf'></view>
		</block>
		<view v-if="tIdx==1" class="myVip">
			<view class="f-bt f-y-c p2 f24">
				<view class="f-g-1 flex f-y-c">
					<view @click="handChange(1)" :class="cdxz==1 ? 'wei' :''">有效卡</view>
					<view class="line"></view>
					<view @click="handChange(2)" :class="cdxz==2 ? 'wei' :''">失效卡</view>
				</view>
				<view class="f-g-0" @click="handDl">购买历史</view>
			</view>
			<view class="p23">
				<block v-for="(v,i) in cardList" :key="i">
					<view class="bs20 imgc p-r mb20" v-if="v.equityCard"
						:style="{background:v.equityCard.imageType ==1? v.equityCard.image ||'linear-gradient(95.39deg, rgb(233, 239, 244) -6.1%, #bcc9d0 98.38%)':''}">
						<view class="p-a wh" v-if="v.equityCard.imageType==2">
							<mg-img :src="v.equityCard.imageType==2?v.equityCard.image:''"></mg-img>
						</view>
						<view class="p-r wh cf p3">
							<view class="p34 f-y-c">
								<view class="f-1">
									<view class="f40 wei t-o-e"
										:style="{color:v.equityCard.textColor ? '#fff' : '#000'}">{{v.equityCard.name}}
									</view>
									<view class="mt10 f24 t-o-e"
										:style="{color:v.equityCard.textColor ? '#fff' : '#000'}">
										<view>有效期至：{{v.endTime}}</view>
										<view class="mt10">已使用：{{v.orderCount || 0}}单，{{v.goods_count || 0}}件</view>
									</view>
								</view>
							</view>
							<block>
								<!-- <view class="bot p-a t-r f-x-e">
									<view class="obtn bwid bs30"
										:style="{color:v.equityCard.textColor ? '#fff' : '#000'}" @click="handDl(v)">
										<text class="l-h1">查看详情</text>
										<text class='iconfont icon-gengduo f28 ml5 c9'
											:style="{color:v.equityCard.textColor ? '#fff' : '#000'}"></text>
									</view>
								</view> -->
							</block>
						</view>
					</view>
				</block>
				<view class="pt150" v-if="cardList.length==0">
					<i-default :imgn="1" zdytxt="您暂时还没有权益卡哦~" />
				</view>
				<jzz bgcolor="transparent" :nodata="cardList.length==0&&isget" :mygd='mygd' />
			</view>
		</view>
		<pay ref="Pay" @pay="cPay" @zfPay="zfPay"></pay>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import navTab from '@/components/common/functionCmp/nav-tab.vue'
	import utils from '@/common/utils';
	import LsSwiper from '@/components/third/ls-swiper/payVip.vue'
	import tcyhq from '@/components/template/tcyhq.vue'
	import Pay from '@/components/pay/pay.vue'
	import jzz from '@/components/common/jzz.vue'
	import iDefault from '@/components/common/default.vue'
	export default {
		name: 'pay-vip',
		components: {
			navTab,
			LsSwiper,
			tcyhq,
			Pay,
			jzz,
			iDefault,
		},
		data() {
			return {
				tIdx: 0,
				tabs: [{
						name: '购买权益卡'
					},
					{
						name: '我的权益卡'
					},
				],

				loading: false,
				PM: '42',
				NM: '42',
				lsarr: [],
				swcurrent: 0,
				vipInfo: {},
				xzin: {},
				qyshow: false,
				qyInfo: '',
				cardState: 1,
				cardList: [],
				params: {
					page: 1,
					size: 10,
					state: 'start',
				},
				isget: false,
				mygd: false,
				cdxz: 1,
				total: 0,
				zkshow: false,
			}
		},
		async onLoad(options) {
			this.util.setNT('权益卡')
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
					url: this.api.equityCard,
				})
				this.lsarr = data
				if (data.length) {
					this.lschange(data[0])
				}
				this.$nextTick(function() {
					this.showloading = false
				})
			},
			lschange(e) {
				this.xzin = e
			},
			qydl(c) {
				this.qyInfo = c
				this.qyshow = true
			},
			changeTab(e) {
				this.tIdx = e
				if (e == 0) {
					this.getDjlb()
				} else {
					this.isget = this.mygd = false
					this.params.page = 1
					this.cardList = []
					this.getMyCard()
				}
			},
			async getMyCard() {
				let {
					data: {
						list,
						total
					}
				} = await this.util.request({
					'url': this.api.myCard,
					data: this.params,
				})
				this.cardList = this.cardList.concat(list)
				this.total = total
				this.isget = true
				this.mygd = this.params.size > list.length
				this.params.page++
			},
			handChange(t) {
				this.cdxz = t
				if (t == 1) {
					this.params.state = 'start'
				} else {
					this.params.state = 'end'
				}
				this.isget = this.mygd = false
				this.params.page = 1
				this.cardList = []
				this.getMyCard()
			},
			async save() {
				this.loading = true
				let orderRes = await this.util.request({
					url: this.api.equityCardOrder,
					method: 'POST',
					mask: 1,
					data: {
						equityCardId: this.xzin.id
					},
				})
				if (!orderRes) {
					this.loading = false
				} else {
					this.$refs['Pay'].open(
						JSON.stringify({
							orderSn: orderRes.data && orderRes.data.orderSn,
							go: ({
								t: 2,
								url: `/pages/other/payVip/ckxq?id=${orderRes.data.id}`
							})
						})
					)
				}
			},
			handDl() {
				this.go({
					url: `/pages/other/payVip/gmls`,
					t: 1
				})
			},
		},
	}
</script>
<style scoped lang="scss">
	.cont {
		.tq {
			padding: 10rpx 30rpx;

			.qy {
				.logo {
					width: 90rpx;
					height: 90rpx;
				}
			}
		}
	}

	.foot-btn {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 60rpx;
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

	.myVip {
		.line {
			width: 2rpx;
			height: 20rpx;
			background: #D8D8D8;
			margin: 0 20rpx;
		}
	}

	.imgc {
		height: 360rpx;
	}

	.bot {
		bottom: 30rpx;
		right: 30rpx;
		width: 100%;

		.obtn {
			width: 180rpx;
			background-color: rgba(255, 255, 255, 0.4);
			border: none;
		}
	}
	
	.goods{
		width: 25%;
		.gwh{
			width: 95%;
			height: 180rpx;
			margin: 0 auto;
		}
	}
	
	.zhed{
		border-radius: 8rpx;
		width: 220rpx;
		height: 70rpx;
		// border: 2rpx solid #dcdcdc;
		border: none;
	}
</style>