<template>
	<view class="">
		<view class="p2">
			<view class="p32 f-y-c bf bs20">
				<input class="f-1 mr30 srk f30" v-model.trim="dhm" :placeholder="$t('other-coupon.enter_exchange_code')" />
				<text class="iconfont icon-31saoma f42 c3" @tap="sm"></text>
			</view>
		</view>
		<view class="foot-btnc">
			<button @click="dhcx" :loading="loading" class="foot-btn f30 bf" :style="{background:tColor,color:fontColor}">{{$t("other-coupon.confirm_exchange")}}</button>
		</view>
		<sq-btn type="1" ref="sqBtn"></sq-btn>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		scanCode
	} from "@/common/wechat-util.js"
	import utils from '@/common/utils.js'
	import sqBtn from '@/components/common/sq-btn.vue'
	export default {
		name: 'dhm',
		components: {
			sqBtn,
		},
		data() {
			return {
				dhm: '',
				loading: false,
				showyhq: false,
				dhloading: false,
				dhmInfo: {},
				type: 1,
			}
		},
		onLoad(options) {
			console.log('options',options)
			this.getLayout()
			this.getLoginInfo()
			if(options && options.q){
				let q = decodeURIComponent(options.q)
				this.dhm = utils.getUrlParams(q)['code']
			}
			if (options && options.type) {
				this.type = options.type
			}
			this.util.setNT(this.$t("other-coupon.exchange_center"))
		},
		computed: {},
		methods: {
			cleanKey() {
				this.dhm = ''
			},
			sm() {
				uni.scanCode({
					success: (res) => {
						this.dhm = res.result
					},
					fail: (res) => {
						console.log('fail', res)
					}
				});
			},
			async dhcx() {
				if (!this.isLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				if (!this.dhm.trim()) return this.util.message(this.$t("other-coupon.enter_exchange_code"), 3)
				await this.util.modal(this.$t("other-coupon.exchange_code_description")+'，'+this.$t("other-coupon.use_when_ordering")+'，'+this.$t("other-coupon.confirm_exchange_action"))
				this.loading = true
				let res = await this.util.request({
					'url': this.api.dhm,
					method: 'POST',
					mask: 1,
					data: {
						sn: this.dhm
					},
				})
				if (!res) {
					this.loading = false
					this.util.message(res.msg, 3, 2000)
				} else {
					this.loading = false
					this.util.message(res.msg, 3, 2000)
					this.dhm = ''
					// this.refreshUser({
					// 	nomask: 1,
					// 	get: 1,
					// 	now: 1,
					// })
					setTimeout(() => {
						this.go({
							t: 6,
							url: '/pages/index/my-index'
						})
					}, 500)
				}
			},
		},
	}
</script>
<style scoped lang="scss">

</style>