<template>
	<mg-modal :ismr="true" v-model="show" :width="'600rpx'" :z-index="3000">
		<view v-if="co.couponList">
			<view class="tctop posi-r">
				<view class="tcimg bs20"></view>
				<view class="posi-a tctopbd f-col">
					<view class="f-g-0 tctopbdt t-c">
						<view class="f34 wei f-c">
							<view class="hx"></view>
							<view class="zfls4">{{co.name}}</view>
							<view class="hx"></view>
						</view>
					</view>
					<scroll-view scroll-y class="f-1 tctopbdb o-h">
						<block v-if="co.couponGive && co.couponList.length">
							<view class="jlic p-r bs10" v-for="(v,i) in co.couponList" :key='i'>
								<view class="bgimg"></view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<view class="icon">
											<mg-img :src="mrtxImg" m='aspectFit'></mg-img>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c t-l">
										<view class="f26 t-o-e wei c0">{{v.name}}
										</view>
										<view class="f22 c9" v-if="v.timeArr.endTime">{{$t('goods.valid_until')}}{{v.timeArr.endTimeFormat}}
										</view>
									</view>
								</view>
								<view class="p-a counum cf t-c">x{{co.couponGive.find(item => item.id == v.id).num}}
								</view>
							</view>
						</block>
						<block v-if="co.balanceSwitch && co.balance>0">
							<view class="jlic p-r bs10">
								<view class="bgimg"></view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<view class="icon">
											<mg-img :src="`${onImgurl}common/ye.png`" m='aspectFit'></mg-img>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c t-l">
										<view class="f26 t-o-e wei c0"><text
												class="mr15 wei cf5">{{co.balance}}</text>{{$t('goods.gift_balance')}}</view>
										<view class="f22 c9" v-if="co.endTime">{{$t('goods.valid_until')}}{{co.endTime.substring(0, 10)}}
										</view>
									</view>
								</view>
							</view>
						</block>
						<block v-if="co.integralSwitch && co.integral>0">
							<view class="jlic p-r bs10">
								<view class="bgimg"></view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<view class="icon">
											<mg-img :src="`${onImgurl}common/jf.png`" m='aspectFit'></mg-img>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c t-l">
										<view class="f26 t-o-e wei c0"><text
												class="mr15 wei cf5">{{co.integral}}</text>{{$t('goods.gift_points')}}</view>
										<view class="f22 c9" v-if="co.endTime">{{$t('goods.valid_until')}}{{co.endTime.substring(0, 10)}}
										</view>
									</view>
								</view>
							</view>
						</block>
					</scroll-view>
					<view class="f24 c9 p2">{{$t('goods.limited_gift_availability')}}</view>
				</view>
				<view class="posi-a w100 tctopft f-c f22">
					<button class="lqbtn bs10 cf f28 f-c zfls4 wei bt" @click="show=false"
						:style="{background:tColor,color:fontColor}">{{$t('goods.got_it')}}</button>
				</view>
			</view>
		</view>
	</mg-modal>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import mgModal from '@/components/common/modal.vue'
	import utils from '@/common/utils.js'
	export default {
		name: 'searchBox',
		components: {
			mgModal,
		},
		props: {
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
			value: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: '1'
			},
		},
		data() {
			return {
				yhqbg: '/static/images/common/xfyl.png',
				loading: false,
			}
		},
		computed: {
			show: {
				get() {
					return this.value;
				},
				set(newVal) {
					this.$emit("input", newVal)
				}
			},
			mrtxImg() {
				return `${this.onImgurl}common/yhq.png`
			},
		},
		methods: {
			async ljlq() {
				// if (!await this.checkLogin()) return
				this.loading = true
				let res = await this.util.request({
					'url': this.api[this.type == 1 ? 'wc' : 'lqfqb'],
					method: 'POST',
					mask: 1,
					data: {
						id: this.co.id,
					},
				})
				if (res) {
					this.util.message(res.msg, 1)
					utils.stfn(() => {
						this.loading = this.show = false
					}, 500)
				} else {
					this.loading = false
				}
			},
			async dllq() {
				if (!this.isLogin) {
					await this.checkLogin()
					return
				}
				this.$emit('close')
				return
			},
		},
		async created() {}
	}
</script>

<style scoped lang="scss">
	.zfls4 {
		letter-spacing: 4rpx;
	}

	.tcimg {
		width: 100%;
		height: 845rpx;
		background: #fff;
	}

	.tctopbd {
		width: 560rpx;
		height: 700rpx;
		top: 10rpx;
		left: 50%;
		transform: translateX(-50%);
		// background: #fff;
	}

	.tctopft {
		height: 83rpx;
		bottom: 36rpx;

		.lqbtn {
			height: 100%;
			width: 500rpx;
			border-radius: 60rpx;
		}
	}

	.tctopbdt {
		padding: 20rpx 30rpx;

		.hx {
			margin: 0 15rpx;
			width: 24rpx;
			height: 1.5px;
			background: #333;
		}
	}

	.tctopbdb {
		padding: 0rpx 20rpx;
		// overflow-y: scroll;
	}

	.tcbtm {
		margin-top: 48rpx;
	}

	/*2*/
	.tcimg2 {
		width: 100%;
		height: 845rpx;
	}

	.tctopbd2 {
		width: 572rpx;
		height: 540rpx;
		top: 168rpx;
		left: 50%;
		transform: translateX(-50%);
	}

	.tctopbd2b {
		padding: 0rpx 20rpx;
	}

	.tcbtm2 {
		margin-top: 30rpx;
	}

	/**/
	.tcimg3 {
		height: 838rpx;
	}

	.tctopbd3 {
		width: 100%;
		height: 500rpx;
		top: 338rpx;
		left: 50%;
		transform: translateX(-50%);
		padding-bottom: 30rpx;
	}

	.tctopbd3b {
		padding: 30rpx 40rpx 20rpx;
	}

	.tcbtm3 {
		margin-top: 30rpx;
	}

	.jlic {
		margin: 10rpx 0 20rpx;
		background: #f5f5f5;

		.bgimg {
			height: 140rpx;
			background: #f5f5f5;
		}

		.coubd {
			top: 0;
			left: 0;
		}

		.coubdl {
			margin-left: 20rpx;

			.icon {
				width: 120rpx;
				height: 120rpx;
			}
		}

		.counum {
			top: 0;
			right: -50rpx;
			width: 100rpx;
			height: 45rpx;
			font-size: 20rpx;
			line-height: 52rpx;
			background: linear-gradient(#ff3a48, #ff3a48);
			transform: rotate(45deg);
			transform-origin: 50% 0%;
		}
	}
</style>