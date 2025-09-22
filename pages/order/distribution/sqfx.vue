<template>
	<view class="container pb115">
		<!-- <mg-swiper :co='swiper' u='rpx' :color='tColor'></mg-swiper> -->
		<view class="main">
			<view class="bf mainc">
				<view class="p03">
					<view class="p30 f32 wei t-c">{{isbj?'修改':'填写'}}资料</view>
				</view>
				<mg-input isr='1' v-model="params.name" hw='130' ht='姓名' pr='请输入姓名' v-if="fxsInfo && fxsInfo.check.includes(0)"></mg-input>
				<mg-input isr='1' v-model="params.tel" :max='11' t='number' hw='130' ht='手机号' pr='请输入手机号' v-if="fxsInfo && fxsInfo.check.includes(1)">
				</mg-input>
				<mg-input isr='1' v-model="params.other" hw='130' ht='其他' pr='请输入其他信息' v-if="fxsInfo && fxsInfo.check.includes(2)"></mg-input>
			</view>
			<mg-agree :title='`${fxsInfo.dealTitle || "分销协议"}`' p='9' :color="tColor" v-model="agree"
				cname="p2"></mg-agree>
		</view>
		<view class="foot-btnc posi-r mt30">
			<button @click="save" :loading="loading" :disabled="loading" class="foot-btn bs15" hover-class="btnhc"
				:style="{background:tColor}">提交</button>
		</view>
		<sq-btn type="1" ref="sqBtn"></sq-btn>
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
	import utils from '@/common/utils.js'
	import MgSwiper from '@/components/common/functionCmp/swiper.vue'
	import mgAgree from '@/components/form/my-agree.vue'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		components: {
			mgInput,
			mgRadio,
			MgCell,
			bkB,
			sqBtn,
			MgSwiper,
			mgAgree,
		},
		data() {
			return {
				t: 'digit',
				params: {
					name: '',
					tel: '',
					other: '',
				},
				loading: false,
				isbj: false,
				agree: false,
			}
		},
		async onLoad(options) {
			if (options.userId) {
				this.isbj = true
			}
			this.util.setNT('申请')
			this.getLoginInfo().then(() => {
				this.getFxzx()
				this.params.tel = this.user.userTel || ''
				// if (this.isbj) {
				// 	this.params.realName = this.user.realName
				// }
			})
		},
		mixins: [utilMixins],
		computed: {
			...mapState('dndc', ['fxsInfo']),
			swiper() {
				return {
					topMargin: 0,
					leftRightPadding: 0,
					upDownPadding: 0,
					swiper: [{
						icon: this.fxsInfo.adImg
					}],
					duration: '',
					height: '250',
					radius: '0',
					auto: true,
					interval: 5,
				}
			},
		},
		methods: {
			...mapActions('dndc', ['getFxzx']),
			async save() {
				if (!this.isLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				let filterArr = ['other']
				if(this.fxsInfo && this.fxsInfo.check){
					if(!this.fxsInfo.check.includes(0)){
						filterArr.push('name')
					}
					if(!this.fxsInfo.check.includes(1)){
						filterArr.push('tel')
					}
				}
				let judgeData = utils.isFailParams({
					field: this.params,
					filter: filterArr,
					tips: {
						name: '请输入姓名',
						tel: '请输入手机号',
					}
				})
				if (!judgeData) {
					return
				} else {
					if (!this.agree) {
						return this.util.message('请阅读并同意服务协议', 3)
					}
					if (this.params.tel && !utils.isTelCode(this.params.tel)) return this.util.message('请输入正确的手机号', 3)
					this.loading = true
					let res = await this.util.request({
						'url': this.api.distributionAD,
						method: 'POST',
						mask: 1,
						ct: 1,
						data: {
							profix: this.params
						},
					})
					if (!res) {
						this.loading = false
					} else {
						this.util.message(res.data && res.data.msg, 1, 1000)
						this.loading = false
						utils.stfn(() => {
							this.go({
								t: 3,
								url: '/pages/index/my-index'
							})
						})
					}
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.main {
		padding: 0;
	}

	.mainc {
		padding: 0;
	}
</style>