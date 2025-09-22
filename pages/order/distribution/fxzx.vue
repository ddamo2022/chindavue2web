<template>
	<view class="pb130 mh100 distribution">
		<uni-nav-bar id='uninavbar' :uropcity="0" :uriconopcity='0' :fixed='true' :ispr='false' :border='false'
			:statusBar="true" :isleft='false'>
			<view slot='left' class="f-c c0" @click="handReturn">
				<view class="sy bsf f-c"><text class="iconfont icon-shouye1 c3 f34"></text></view>
			</view>
		</uni-nav-bar>
		<view class="hbg" :style="{background:tColor}">
			<view class="bs20 fx1c f-row posi-r">
				<view class="img bsf mr30">
					<mg-img :src='user && user.avatar'></mg-img>
				</view>
				<view class="f-1">
					<view class="f-x-bt">
						<view class="f38 wei f-1 cf">{{fxsSq.user && fxsSq.user.nickname}}</view>
						<view @click="ljyq" class="yqhb f-c f24 cf bf f-y-c" :style="{color:tColor}">
							<text class="iconfont icon-erweima f30 c0 mr10" :style="{color:tColor}"></text>分享
						</view>
					</view>
					<view class="mt10 cf f24">{{fxsSq.user && fxsSq.user.mobile}}</view>
				</view>
			</view>
			<view class="fx2c posi-r">
				<mg-cell cname='p3' isr='1' bgc='none' last='1'>
					<view slot='bd' class="f-y-c">
						<view @click="go({t:1,url:v.url})" v-for="(v,i) in syarr" :key='i' class="f-1 f-c-c">
							<view class="f32 wei cf">{{v.n}}</view>
							<view class="f26 cf m20">{{v.t}}</view>
						</view>
					</view>
				</mg-cell>
			</view>
		</view>
		<view class="bf">
			<view class="f-bt p32 b-bes">
				<view class="f-g-1 wei">账单信息</view>
				<view class="f-g-0 c9 f24" @click="go({t:1,url:'txmx?t=2'})"  v-if="fxsInfo.withdrawal && fxsInfo.withdrawal.rule">
					提现明细 <text class='iconfont icon-youjiantou f24 ml5 c9'></text>
				</view>
			</view>

			<view class="fx2c bf pb20 posi-r mt30">
				<mg-cell cname='p23' isr='1' last='1'>
					<view slot='bd' class="f-y-c">
						<view v-for="(v,i) in tjarr" :key='i' class="f-1 f-c-c">
							<view class="f32 wei">฿{{v.n}}</view>
							<view class="f24 c9 mt20">{{v.t}}</view>
						</view>
					</view>
				</mg-cell>
				<view class="f-c-c p23 mt20" v-if="fxsInfo.withdrawal && fxsInfo.withdrawal.rule">
					<button class="clearbtn sbtn f-c cf f30" @click="go({t:1,url:'tx?t=2'})"
						:style="{background:tColor}">提现</button>
				</view>
			</view>
		</view>

		<!-- <view class="p34 mt10">
			<mg-cell @tab="go({t:1,url:'syxq'})" cname="p30" last="1" iconn='iconcz f44 icname' btt="分销订单" bttc="f30"
				arrow="1" ac='iconright1' ftc="f24 cd"></mg-cell>
			<mg-cell @tab="go({t:1,url:'wdfs'})" cname="p30" last="1" iconn='icondhjl f44 icname' btt="我的团队" bttc="f30"
				arrow="1" ac='iconright1' ftc="f24 cd"></mg-cell>
			<mg-cell  v-if="ldxConfig.open==1" @tab="go({t:1,url:'txmx?t=2'})" cname="p30" last="1" iconn='iconjfgz f40 icname' btt="提现明细"
				bttc="f30" arrow="1" ac='iconright1' ftc="f24 cd"></mg-cell>
		</view> -->
		<!-- <mg-share wxs='1' :hbs='shareCo.isget' v-model="shareshow" ptype='2' :co='shareCo'></mg-share> -->
		<mg-share wxs='1' :hbs="true" v-model="shareshow" @hb='goHb'></mg-share>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import utils from '@/common/utils.js'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import {
		wxShare,
		getSLink
	} from "@/common/wechat-util.js"
	import uniNavBar from "@/components/third/uni-nav-bar.vue"
	import MgImg from '@/components/common/my-img.vue'
	import MgCell from '@/components/common/my-cell.vue'
	import mgModal from '@/components/common/modal.vue'
	import mgShare from '@/components/template/share.vue'
	export default {
		name: 'fxzx',
		components: {
			uniNavBar,
			MgImg,
			MgCell,
			mgModal,
			mgShare,
		},
		data() {
			return {
				shareshow: false,
				shareCo: {
					isget: true,
				},
				name: '分销中心',
				iData: {},
				arr: [{
						icn: 'iconcz f44',
						url: 'syxq',
						name: '分销订单',
						ftnumber: '0',
						ftunit: '笔',
					},
					{
						icn: 'icondhjl f44',
						url: 'wdfs',
						name: '我的团队',
						ftnumber: '0',
						ftunit: '人',
					},
					{
						icn: 'iconjfgz f40',
						url: 'txmx?t=2',
						name: '提现明细',
					},
				],
			}
		},
		onLoad(options) {
			this.util.setNT('分销中心')
			this.getLoginInfo().then(async () => {
				// await this.getFxzx()
				await this.getFxSq()
				// this.getIndex()
			})
		},
		mixins: [utilMixins],
		computed: {
			...mapState('dndc', ['fxsInfo','fxsSq']),
			syarr() {
				return [{
					t: '累计佣金',
					url: 'syxq?t=1',
					n: this.fxsSq.account && this.fxsSq.account.earnings || 0,
				}, {
					t: "下线",
					url: 'wdfs',
					n: this.fxsSq.downline_count || 0,
				}, {
					t: "分销订单",
					url: 'fxdd',
					n: this.fxsSq.order_count || 0,
				}]
			},
			tjarr() {
				return [{
					t: '待入账',
					url: 'syxq?t=1',
					n: this.fxsSq.account && this.fxsSq.account.freezeAmount || 0,
				}, {
					t: '可提现',
					url: 'syxq?t=2',
					n: this.fxsSq.account && this.fxsSq.account.canWithdrawalAmount || 0,
				}, {
					t: '提现中',
					url: 'syxq?t=3',
					n: this.fxsSq.account && this.fxsSq.account.withdrawalAmount || 0,
				}, {
					t: '已提现',
					url: 'syxq?t=3',
					n: this.fxsSq.account && this.fxsSq.account.withdrawalCompleteAmount || 0,
				}]
			},
		},
		methods: {
			...mapActions('dndc', ['getFxzx', 'getLdxConfig']),
			async getIndex() {
				let {
					data
				} = await this.util.request({
					url: this.api.distributionIndex,
					mask: 1,
				})
				this.iData = data
			},
			ljyq() {
				this.shareshow = true
			},
			ljtx() {
				this.go({
					t: 1,
					url: `/pages/order/distribution/tx?p=6`
				})
			},
			handReturn() {
				this.go({
					t: 6,
					url: `/pages/index/index`
				})
			},
			goHb(){
				this.shareshow = false
				this.go({
					t: 1,
					url: `/pages/order/distribution/fxhb?id=$1}`
				})
			},
		},
		onShareAppMessage() {
			this.shareshow = false
			let p = `pages/index/index?partnerId=${this.uId}`
			return this.util.mpShare({
				t: this.fxsInfo.title,
				i: this.fxsInfo.image && this.getSingleImg(this.fxsInfo.image),
				p,
			})
		},
	}
</script>
<style scoped lang="scss">
	.distribution {
		// background: #fff;
	}

	.main {
		padding: 70rpx 40rpx;
	}

	.hbg {
		width: 100%;
		height: 600rpx;
		background: linear-gradient(to bottom, #05A0FD, #0387FD);
	}

	.fx1c {
		padding: 220rpx 30rpx 10rpx 30rpx;

		.img {
			width: 120rpx;
			height: 120rpx;
			// border: 6rpx solid #fff;
		}

		.yqhb {
			// background: linear-gradient(to right, #FE8B0C, #FEBD3C);
			height: 54rpx;
			padding: 0 25rpx;
			border-radius: 54rpx;
		}
	}

	.fx2c {
		margin-top: 30rpx;
		
		.b-r-d::after {
			background: #eee;
		}

		.lb {
			height: 80rpx;
		}
	}

	.sbtn {
		width: 560rpx;
		height: 78rpx;
		background: #0594FE;
		border-radius: 47px;
	}

	.p34 {
		padding: 30rpx 40rpx;
	}

	.b-bes {
		border-bottom: 2rpx solid #eee;
	}
</style>