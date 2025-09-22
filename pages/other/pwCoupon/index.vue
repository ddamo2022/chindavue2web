<template>
	<view class="cmain" v-if="cInfo && cInfo.id" :style="{background:cInfo && cInfo.bg || '#F37C41'}">
		<view class="topc p-r t0">
			<view class="rwimg p-a r0">
				<mg-img m="aspectFit" :src="cInfo.logo || `${onImgurl}common/klfq.png`"></mg-img>
			</view>
		</view>
		<view class="main bf bs20 p32 m3 p-r f-c-c">
			<view class="wei c0 f30 mt30">输入口令 领取福利</view>
			<view class="klbb bs10 p2 mt50 f-g-1 f-c">
				<input type="text" v-model="value" placeholder="请输入口令" class="f40 t-c" />
			</view>
			<view class="f-g-1 mt30 klbt">
				<button @click="save" :loading="loading" :disabled="loading || !value" class="foot-btn bs20 f30"
					hover-class="btnhc" :style="{background:cInfo && cInfo.bg || '#F37C41',color:fontColor}">立即兑换</button>
				<view class="f24 c9 mt50 f-c curs" @click="go({url: '/pages/other/coupon/couponList'})">我的兑换记录</view>
			</view>
		</view>
		<view class="bs20 p32 m3 bf" v-if="cInfo && cInfo.body">
			<view class="wei f30">使用规则：</view>
			<view class="mt10">
				<mg-rtext type='2' :content="cInfo.body" />
			</view>
		</view>
		<sq-btn type="1" ref="sqBtn"></sq-btn>
		<tcyhq  type="8" @close='srshow=false' :co='lqInfo' v-model="srshow"></tcyhq>
	</view>
</template>

<script>
	import sqBtn from '@/components/common/sq-btn.vue'
	import mgRtext from '@/components/common/functionCmp/rich-text.vue'
	import tcyhq from '@/components/template/tcyhq.vue'
	export default {
		name: 'pwCoupon',
		components: {
			sqBtn,
			mgRtext,
			tcyhq,
		},
		data() {
			return {
				cInfo: {},
				loading: false,
				srshow:false,
				value: '',
				lqInfo:{},
			}
		},
		async onLoad(options) {
			this.util.setNT('口令发券')
			await this.getLoginInfo()
			this.getCoupon()
		},
		computed: {

		},
		methods: {
			async getCoupon() {
				let {
					data
				} = await this.util.request({
					'url': this.api.wordCoupon,
				})
				this.cInfo = data
			},
			async save(e) {
				if (!this.isLogin) {
					//this.$refs['sqBtn'].open()
					uni.reLaunch({
						url: '/pages/other/login'
					})
					return
				}
				this.loading = true
				let res = await this.util.request({
					url: this.api.wordCoupon,
					method: 'POST',
					mask: 1,
					data: {
						id: this.cInfo.id,
						word: this.value,
					},
				})
				if (res && res.data) {
					this.util.message(res.msg, 3)
					this.srshow = true
					this.lqInfo = res.data
					this.value = ''
					this.loading = false
				} else {
					this.loading = false
					this.util.message(res.msg, 2)
				}
			},
		},
		onShareAppMessage() {
			let p = `pages/other/pwCoupon/index`
			return this.util.mpShare({
				t: this.cInfo.name,
				i: this.getImgS(this.cInfo.logo),
				p,
			})
		},
	}
</script>

<style scoped lang="scss">
	.cmain {
		padding-bottom: 30rpx;
		min-height: 100vh;
	}

	.main {
		padding-bottom: 80rpx;

		.klbb {
			border: 2rpx solid #ddd;
			width: 90%;
			height: 100rpx;
		}
		.klbt{
			width: 90%;
		}
	}

	.topc {
		width: 100%;
		min-height: 560rpx;

		.rwimg {
			width: 100%;
			top: 0;
			bottom: 0rpx;
		}
	}
</style>