<template>
	<view class="cmain h100">
		<!-- <uni-nav-bar id='uninavbar' :uropcity="0" :uriconopcity='0' :bg="changedColor" :fixed='true' :ispr='false'
			:border='false' :statusBar="true" :isleft='false'>
			<view slot='left' class="hdsy bsf f-c" @click="go({t: 4})">
				<text class="iconfont icon-youjiantou f46 cf rowshow" :style="{color:fontColor}"></text>
			</view>
			<view class="t-c f30 wei f-g-1 cf ml50" :style="{color:fontColor}">领取优惠券</view>
		</uni-nav-bar> -->
		<view class="topc p-r t0">
			<view class="rwimg p-a r0">
				<mg-img m="aspectFit" :src="cInfo.bodyImg || `${onImgurl}common/lqhd.jpg?1`"></mg-img>
			</view>
		</view>
		<view class="main">
			<view class="ccbd p3 m3 bs15 p-r">
				<my-coupon @btntap='btntap(v.id)' :color='tColor' cname='mb30' v-for="(v,i) in cInfo.couponList" :key='i' :co='v' ptype='5' :v="cInfo"></my-coupon>
			</view>
			<view class="mt20 p2 p-r">
				<view class="wei f30">{{$t("other-coupon.activity_description")}}：</view>
				<view class="mt10">
					<mg-rtext type='2' :content="cInfo.body" />
				</view>
			</view>
		</view>
		<view class="f30 p2 foot-btnc" :style="{padding: '26rpx'}">
			<view class="f-g-1 mt10">	
				<button @click="save" :loading="loading" :disabled="loading" class="foot-btn bs60 f30"
					hover-class="btnhc" :style="{background:tColor,color:fontColor}" v-if="timeif()">{{$t("other-coupon.immediate_receive")}}</button>
				<button :disabled="true" class="foot-btn bs60 f30" hover-class="btnhc" :style="{background:'#999',color:'#333'}" v-else>{{$t("other-coupon.activity_ended")}}</button>
			</view>
		</view>
		<sq-btn type="1" ref="sqBtn"></sq-btn>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import myCoupon from '@/components/common/my-coupon.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import mgRtext from '@/components/common/functionCmp/rich-text.vue'
	import utils from '@/common/utils.js'
	// import uniNavBar from "@/components/third/uni-nav-bar.vue"
	import {
		sljz
	} from "@/common/util-mixins.js"
	export default {
		name: 'CouponDl',
		components: {
			myCoupon,
			sqBtn,
			mgRtext,
			// uniNavBar,
		},
		data() {
			return {
				aIdx: 0,
				params: {
					page: 1,
					size: 10,
					// type: 1,
				},
				dataList:[],
				cInfo:{},
				loading:false,
			}
		},
		async onLoad(options) {
			this.util.setNT(this.$t("other-coupon.receive_coupon"))
			await this.getLoginInfo()
			console.log(options)
			this.isLoad = true
			if((options.q && decodeURIComponent(options.q).indexOf('couponId')>-1)){
				let q = decodeURIComponent(options.q)
				this.couponId = utils.getUrlParams(q)['couponId']
				this.getCoupon(utils.getUrlParams(q)['couponId'])
			}else{
				let couponId = utils.getOptions(options, {
					key: 'couponId',
				})
				this.couponId = couponId
				this.getCoupon(couponId)
			}
		},
		mixins: [sljz],
		computed: {

		},
		methods: {
			...mapActions(["getConfig"]),
			
			async getCoupon(id) {
				let {
					data
				} = await this.util.request({
					'url': `${this.api.lqhd}/${id}`,
				})
				this.cInfo = data
			},
			async save(e) {
				if (!this.isLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				this.loading = true
				let res = await this.util.request({
					url: this.api.lqzx,
					method: 'POST',
					mask: 1,
					data: {
						couponId: this.cInfo.id,
					},
				})
				if (res && res.data) {
					this.util.message(res.msg, 3)
					this.loading = false
					setTimeout(() => {
						this.go({
							url: `/pages/other/coupon/couponList`,
							t: 3
						})
					}, 500)
				}else{
					this.loading = false
					this.util.message(res.msg, 2)
				}
			},
			timeif(){
				if(utils.dateToTime() < utils.dateToTime(this.cInfo.endTime)){
					return true
				}else{
					return false
				}
			},
		},
		onShareAppMessage() {
			let p = `pages/other/coupon/coupondl?couponId=${this.cInfo.id}&userId=${this.uId}`
			return this.util.mpShare({
				t: this.cInfo.name,
				i: this.getImgS(this.cInfo.bodyImg),
				p,
			})
		},
	}
</script>

<style scoped lang="scss">
	.cmain {
		// padding-top: 400rpx;
		background: linear-gradient(to bottom, #c40000 0%, #e07300 100%);
	}
	.main{
	 
		padding-bottom: 180rpx;
	}
	
	.topc {
		padding: 45rpx 48rpx 40rpx;
		width: 100%;
		min-height: 500rpx;
	
		.rwimg {
			width: 100%;
			// height: 500rpx;
			top: 0;
			bottom: 0rpx;
		}
	}

	.ccbd {
		// background-color: rgba(0, 0, 0, 0.2);
	}
	
	.foot-btnc{
		//background: #FFF2BE;
		background: #e07300;
	}

</style>
