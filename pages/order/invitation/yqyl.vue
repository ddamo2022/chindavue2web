<template>
	<view class="mh100 invite posi-r">
		<uni-nav-bar id='uninavbar' :uropcity="0" :uriconopcity='0' :fixed='true' :ispr='false' :border='false'
			:statusBar="true" :isleft='false'>
			<view slot='left' class="f-c c0" @click="handReturn">
				<view class="sy bsf f-c"><text class="iconfont icon-shouye1 c3 f34"></text></view>
			</view>
		</uni-nav-bar>
		<view class="hbg" v-if="ldxInfo && ldxInfo.activity && ldxInfo.activity.partyAPage && ldxInfo.partyA">
			<mg-img :src='`${ldxInfo.activity.partyAPage.image}`'></mg-img>
		</view>
		<view class="hbgb" v-if="ldxInfo && ldxInfo.activity && ldxInfo.activity.partyAPage && partyAid">
			<mg-img :src='`${ldxInfo.activity.partyBPage.image}`'></mg-img>
		</view>
		<view class="bar posi-a f-bt f22">
			<view>
				<view class="f-g-0 lbg bf flex" @click="gojl" v-if="ldxInfo && partyAid">
					<view class='iconfont icon-youjiantou f22 ml5 c9'></view>
					<view>奖励</view>
				</view>
			</view>
			<view class="f-g-0 bf rbg f-y-c" @click="gogz">
				<text>规则</text>
				<text class='iconfont icon-youjiantou f22 ml5 c9'></text>
			</view>
		</view>
		<view class="main posi-r" v-if="ldxInfo && ldxInfo.partyA">
			<view class="f-g-1">
				<button v-if="ldxInfo && ldxInfo.activity && ldxInfo.activity.subState==0"  class="foot-btn" :disabled="true" :style="{background:'#999'}"><text class="cf">活动已结束</text></button>
				<button v-else @click="ljyq" :loading="loading" :disabled="loading" class="foot-btn"
					:style="{background:tColor}" hover-class="btnhc"><text class="wei t-o-e">{{ldxInfo && ldxInfo.activity && ldxInfo.activity.partyAPage && ldxInfo.activity.partyAPage.text || '立即邀请'}}</text></button>
			</view>
			<view class="bf bs20 mt30 my pb20">
				<view class="f-c">
					<view class="jl cf f28" :style="{background:tColor}">我的奖励</view>
				</view>
				<view class="p3 f-bt f-y-c" @click="gojl">
					<view class="f-1 f-c-c">
						<view class="wei f40 c0">{{ldxInfo.partyA.partyBCount || 0}}</view>
						<view class="c6">助力（次）</view>
					</view>
					<view class="f-g-0 line"></view>
					<view class="f-1 f-c-c">
						<view class="wei f40 c0">{{ldxInfo.partyA.couponCount || 0}}</view>
						<view class="c6">券（次）</view>
					</view>
					<view class="f-g-0 line"></view>
					<view class="f-1 f-c-c">
						<view class="wei f40 c0">{{ldxInfo.partyA.integral || 0}}</view>
						<view class="c6">积分</view>
					</view>
				</view>
			</view>
		</view>
		<view class="f-g-1 posi-a btnb" v-if="partyAid">
			<view class="p3" v-if="ldxInfo && ldxInfo.activity && ldxInfo.activity.subState==0">
				<button  class="foot-btn" :disabled="true" :style="{background:'#999'}"><text class="cf">活动已结束</text></button>
			</view>
			<block v-else>
				<view class="msg p2 f24 cf f-c" v-if="ldxInfo && ldxInfo.partyB && partyAid == ldxInfo.partyB.partyAid">您与邀请人已绑定</view>
				<view class="msg p2 f24 cf f-c" v-if="ldxInfo && ldxInfo.partyB && partyAid != ldxInfo.partyB.partyAid">已注册助力</view>
				<view class="p3">
					<button @click="goSave" v-if="ldxInfo && !ldxInfo.partyB && user.newUser" class="foot-btn" :style="{background:tColor}"><text class="wei t-o-e">{{ldxInfo && ldxInfo.activity && ldxInfo.activity.partyBPage && ldxInfo.activity.partyBPage.text || '领取奖励'}}</text></button>
					<button @click="getData" v-if="ldxInfo && ldxInfo.partyB || !user.newUser" class="foot-btn" :style="{background:tColor}"><text class="wei t-o-e">{{ldxInfo && ldxInfo.activity && ldxInfo.activity.partyBPage && ldxInfo.activity.partyBPage.bText || '我也要参与'}}</text></button>
				</view>
			</block>
		</view>
		<mg-share wxs='1' :hbs="true" v-model="shareshow" @hb='goHb'></mg-share>
		<sq-btn type="1" ref="sqBtn" @rf="goSave"></sq-btn>
		<tcyhq  type="7" @close='srshow=false' :co='ldxInfo && ldxInfo.activity && ldxInfo.activity.partyB && ldxInfo.activity.partyB.partyB' v-model="srshow" @cj="cj" @xd="xd"></tcyhq>
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
	import mgShare from '@/components/template/share.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import tcyhq from '@/components/template/tcyhq.vue'
	import uniNavBar from "@/components/third/uni-nav-bar.vue"
	export default {
		name: 'order-yqyl',
		components: {
			mgShare,
			sqBtn,
			tcyhq,
			uniNavBar,
		},
		data() {
			return {
				showLoading: true,
				ldxInfo: '',
				hdInfo: {},
				partyAid: '',
				activityId:'',
				shareshow: false,
				srshow: false,
			}
		},
		async onLoad(options) {
			this.util.setNT('邀请有礼')
			await this.getLoginInfo()
			console.log('options',options)
			if(options && options.partyAid && options.partyAid!= this.user.id){
				this.partyAid = options.partyAid
				// this.activityId = options.activityId
				this.getDataB()
			}else if((options.q && decodeURIComponent(options.q).indexOf('partyAid')>-1)){
				let q = decodeURIComponent(options.q)
				this.partyAid = utils.getUrlParams(q)['partyAid']
				// this.activityId = utils.getUrlParams(q)['activityId']
				if(this.partyAid == this.user.id){
					this.getData()
				}else{
					this.getDataB()
				}
			}else{
				this.getData()
			}
		},
		mixins: [utilMixins],
		computed: {

		},
		methods: {
			gojl(){
				this.go({
					t: 1,
					url: `/pages/order/invitation/yqjl?activityId=${this.ldxInfo && this.ldxInfo.activity && this.ldxInfo.activity.id}`
				})
			},
			gogz(){
				this.go({
					t: 1,
					url: `/pages/order/invitation/yqgz`
				})
			},
			goHb(){
				this.shareshow = false
				this.go({
					t: 1,
					url: `/pages/order/invitation/yqhb?id=${this.ldxInfo && this.ldxInfo.activity && this.ldxInfo.activity.id}`
				})
			},
			async ljyq(type) {
				if (!this.isLogin) {
					return this.$refs['sqBtn'].open()
				}
				this.shareshow = true
			},
			async getData() {
				this.partyAid = ''
				// this.activityId = ''
				let {
					data
				} = await this.util.request({
					url: this.api.ldx,
				})
				this.ldxInfo = data
				this.hdInfo = data.activity || {}
			},
			async getDataB() {
				let {
					data
				} = await this.util.request({
					url: this.api.ldxb,
					data:{
						partyAid: this.partyAid,
					}
				})
				this.ldxInfo = data
				this.hdInfo = data.activity || {}
			},
			async goSave(){
				if (!this.isLogin) {
					return this.$refs['sqBtn'].open(this.partyAid)
				}
				let {
					data,msg,code
				} = await this.util.request({
					url: this.api.ldxb,
					method: 'POST',
					data:{
						partyAid: this.partyAid,
					}
				})
				if(data && code ==200){
					if(this.hdInfo && this.hdInfo.partyB && this.hdInfo.partyB.partyB && this.hdInfo.partyB.partyB.switch && (this.hdInfo.partyB.partyB.integralSwitch || this.hdInfo.partyB.partyB.couponSwitch)){
						this.srshow = true
						this.getDataB()
					}else{
						this.util.message(msg, 3)
						this.getDataB()
					}
				}
			},
			cj(){
				this.srshow = false
				this.getData()
			},
			xd(){
				this.go({t: 6,url: `/pages/index/goods`})
			},
			handReturn(){
				this.go({t: 6,url: `/pages/index/index`})
			},
		},
		onPageScroll(e) {
			if (this.opcity >= 1 && e.scrollTop / 64 >= 1) {
				return;
			}
			let o = e.scrollTop / 64
			this.opcity = o;
		},
		onShareAppMessage() {
			this.shareshow = false
			if(this.ldxInfo && this.ldxInfo.partyA){
				let p = `pages/order/invitation/yqyl?partyAid=${this.ldxInfo.partyA && this.ldxInfo.partyA.userId}&activityId=${this.ldxInfo.activity && this.ldxInfo.activity.id}`
				return this.util.mpShare({
					t: this.ldxInfo && this.ldxInfo.activity && this.ldxInfo.activity.shearPage && this.ldxInfo.activity.shearPage.title,
					i: this.ldxInfo && this.ldxInfo.activity && this.ldxInfo.activity.shearPage && this.getSingleImg(this.ldxInfo.activity.shearPage.bg),
					p,
				})
			}
		},
	}
</script>
<style scoped lang="scss">
	.invite {
		background: #F5F5F5;
		
		.sy {
			background-color: rgba(255, 255, 255, 0.5);
			height: 70rpx;
			width: 70rpx;
			margin-right: 15px;
		}
	}

	.hbg {
		width: 100%;
		height: 1200rpx;
	}
	.hbgb{
		width: 100%;
		height: 100vh;
	}

	.bar {
		width: 100%;
		top: 260rpx;

		.lbg {
			padding: 4rpx 20rpx 4rpx 0;
			border-radius: 0 30rpx 30rpx 0;

			.icon-youjiantou {
				transform: rotateZ(-180deg)
			}
		}

		.rbg {
			padding: 4rpx 0 4rpx 20rpx;
			border-radius: 30rpx 0 0 30rpx;
		}
	}

	.main {
		padding: 40rpx;

		.foot-btn {
			height: 86rpx;
			line-height: 86rpx;
		}

		.my {
			.jl {
				padding: 15rpx 50rpx;
				background: #F5F5F5;
				border-radius: 0 0 20rpx 20rpx;
			}

			.line {
				width: 2rpx;
				height: 60rpx;
				background: #d5d5d5;
			}
		}
	}
	.btnb{
		width: 100%;
		bottom: 80rpx;
		.msg{
			background: #CCCCCC;
		}
	}
</style>