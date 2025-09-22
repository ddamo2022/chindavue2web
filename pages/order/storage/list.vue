<template>
	<view class="pb115" :class="showCoupon||showCancel?'bgfix':''">
		<view class="nfix">
			<view class="flex p2 c3" v-if="storeInfo">
				<view class="f-g-0 f-y-c"><text class="iconfont icon-im_dingwei f32 mr10 c3 mt5"></text></view>
				<view class="f-g-1 t-o-e f-y-c" @click="goSelect">
					<view class="f30">{{storeInfo.name}}</view>
					<text class="iconfont icon-youjiantou f32 mr10 c3 mt5"></text>
				</view>
			</view>
			<nav-tab  cname="" ifsize='32' v-model="aIdx" @changeTab='changeTab' :tabs='tabs'></nav-tab>
			<!-- view class="p253 bf5 ft" v-if="labelArr.length">
				<scroll-view class='ws-n ipolcs f-y-c' scroll-x='true'>
					<block v-for="(v,i) in labelArr" :key="i">
						<bk-b @tab='lTab(i)' :c-name="`f-g-0 dis-in mr20 bs60 ${i!=laIdx&&'c3'}`" :color="i==laIdx?tColor:'#F1F2F3'"
						 :sname="{padding:'10rpx 30rpx',minWidth:'140rpx'}" :t='v'></bk-b>
					</block>
				</scroll-view>
			</view> -->
		</view>
		<view class="ipomt p3">
			<view v-for="(v,i) in dataList" :key='i' class="bs20 bf mb30"  @click="ckxq(v)">
				<mg-cell cname="p253" noc='1' isr='1'>
					<view slot='bd' class="f-bt">
						<view class="f-g-1 f-y-c">
							<view class="mrltc bsf f-c mr15" v-if="v.drink && v.drink.logo">
								<image :src="v.drink && v.drink.logo" mode="aspectFit"></image>
							</view>
							<view class="flex-1">
								<view class="f-x-bt">
									<view class="">
										<view class='t-o-e f28'>{{v.drink && v.drink.name}}</view>
									</view>
								</view>
							</view>
						</view>
						<view class="f-g-0 ml10 t-r">
							<view class="flex">剩余数量：<view :style="{color:tColor}">{{v.residue}} {{v.drink && v.drink.unit}}</view></view>
							<view class="f24" :style="{color:stateColor(v.state)}">{{v.stateFormat}}</view>
						</view>
					</view>
				</mg-cell>
				<mg-cell last='1' cname="p23" noc='1' :img='v.logo' w="110" h="110" brs='10rpx'>
					<view class="" slot='bd'>
						<view class=" mt10 c6">
							<blcok>
								<view>寄存门店：{{v.store && v.store.name}}</view>
								<view>寄存数量：{{v.num}} {{v.drink && v.drink.unit}} {{v.drink && v.drink.name}}</view>
								<view>寄存时间：{{v.created_at}}</view>
								<view>剩余数量：{{v.residue}} {{v.drink && v.drink.unit}} {{v.drink && v.drink.name}}</view>
								<view>过期时间：{{v.expiredTimeFormat || '-'}}</view>
								<!-- <view>联系人：{{v.contacts}}</view> -->
								<!-- <view>联系电话：{{v.mobile}}</view> -->
								<!-- <view>订单编号：{{v.orderSn}}</view> -->
								<!-- <view v-if="v.notes">订单备注：{{v.notes}}</view> -->
							</blcok>
						</view>
					</view>
				</mg-cell>
				<view class="p23">
					<view class="f-row">
						<view class="f-g-1 f-x-e">
							<view @click="ckxq(v)" class="obtn b-d">查看详情</view>
							<!-- <view @click="lqjc(v)" class="obtn b-d" :style="{borderColor:tColor,background:tColor,color:fontColor}">取出</view> -->
						</view>
					</view>
				</view>
			</view>
			<jzz bgcolor="transparent" :nodata="dataList.length==0&&isget" :mygd='mygd' />
		</view>
		<mg-modal :vs='true' :ismr="true" v-model="showCancel" width="600rpx" :z-index="3000">
			<view class="bs10 bf p-r">
				<view class="p20 ggh f-c f32">
					<view class="t-o-e t-c" style="width: 80%;">取出</view>
				</view>
				<mg-input cname="p23" t='number' v-model="lqsl" isr='1' ht='取出数量' htc='f30' :pr='`请输入取出数量`' icn='f30' />
				<button @click="save" :disabled="loading" :loading="loading" class="foot-btn3 w33 cf" style="margin: 30rpx auto;"
				 hover-class="btnhc" :style="{background:tColor}">确定</button>
			</view>
		</mg-modal>
	</view>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import navTab from '@/components/common/functionCmp/nav-tab.vue'
	import jzz from '@/components/common/jzz.vue'
	import TabBar from '@/components/common/tabbar.vue'
	import MgCell from '@/components/common/my-cell.vue'
	import bkB from '@/components/common/block-b.vue'
	import mgModal from '@/components/common/modal.vue'
	import mgInput from '@/components/form/my-input.vue'
	import {
		getDw
	} from "@/common/wechat-util.js"
	export default {
		name: 'wdjc',
		components: {
			navTab,
			jzz,
			TabBar,
			bkB,
			MgCell,
			mgModal,
			mgInput,
		},
		data() {
			return {
				aIdx: 0,
				tabs: [{
					name: '全部',
					value: ''
				}, {
					name: '存储中',
					value: 'start'
				}, {
					name: '全部取出',
					value: 'over'
				}, {
					name: '已过期',
					value: 'expired'
				}],
				// tabs: [{
				// 	name: '我的寄存',
				// 	type: 1
				// }, {
				// 	name: '存/取记录',
				// 	type: 2
				// }],
				laIdx: 0,
				labelArr: [],
				dataList: [],
				isget: false,
				mygd: false,
				params: {
					userId: '',
					size: 10,
					page: 1,
					state: '', 
				},
				iparams: {
					state: ''
				},
				lqsl: '',
				showCancel: false,
				loading: false,
				yyArr: [],
				yyradio: "",
				stateArr: ['', '审核中', '存储中', '已拒绝', '已失效'],
				qstateArr: ['', '待确认', '已完成', ],
				storeInfo: {},
			}
		},
		async onLoad(options) {
			this.util.setNT('我的寄存')
			await this.gDw()
			this.init()
		},
		onReachBottom() {
			if (!this.mygd && this.isget) {
				this.isget = false
				this.getList();
			}
		},
		async onShow() {
			if (uni.getStorageSync('rStoreInfo')) {
				this.storeInfo = uni.getStorageSync('rStoreInfo')
				this.load(this.storeInfo.id)
			}
		},
		mixins: [utilMixins],
		computed: {
			...mapState(['sjxx']),
		},
		methods: {
			// ...mapActions(["getConfig"]),
			// ...mapActions('dndc', ['getPayConfig']),
			async init() {
				await this.getLoginInfo()
				this.getLayout()
				this.params.userId = this.user.id || ''
				// this.aIdx = +options.idx || 0
				this.changeTab(this.aIdx)
			},
			async load(sid) {
				if (sid) {
					uni.removeStorageSync('rStoreInfo')
				}
				this.init()
			},
			async gDw() {
				if (this.storeInfo && this.storeInfo.id) {
					return
				} else {
					let lc = await getDw({
						t: 0
					})
					this.lc = lc
					await this.getAddInfo(lc)
					let res = await this.util.request({
						url: this.api.dplb,
						data: {
							lat: lc.latitude || '',
							lng: lc.longitude || '',
							recharge: 1,
						}
					})
					this.storeInfo = res.data && res.data.list && res.data.list[0]
				}
			},
			goSelect() {
				uni.navigateTo({
					url: '/pages/shop/select/index?page=recharge'
				})
			},
			
			stateColor(v) {
				let color = ''
				switch (+v) {
					case 1:
						color = this.tColor;
						break;
					case 2:
						color = '#f00';
						break;
					default:
						color = '#999';
				}
				return color
			},
			getState(n) {
				if (this.aIdx == 0) {
					return this.stateArr[n]
				} else {
					return this.qstateArr[n]
				}
			},
			lqjc(v) {
				this.showCancel = true
				this.xzinfo = v
			},
			ckxq(v){
				uni.navigateTo({
					url: `/pages/order/storage/detail?id=${v.id}&storeId=${this.storeInfo.id}`
				})
			},
			async save() {
				if (this.lqsl.trim() == '') return this.util.message('请输入数量', 3)
				this.loading = true
				let res = await this.util.request({
					'url': this.api.jcqj,
					method: 'POST',
					mask: 1,
					data: {
						takeNum: this.lqsl,
						id: this.xzinfo.id
					},
				})
				if (res) {
					this.util.message('保存成功', 1, 1000)
					this.showCancel = false
					this.refresh();
				}
				this.loading = false
			},
			refresh() {
				this.changeTab(this.aIdx)
			},
			changeTab(e) {
				this.laIdx = 0;
				this.isget = this.mygd = false
				this.params.page = 1
				this.params.size = 10
				this.params.storeId = this.storeInfo && this.storeInfo.id
				this.dataList = []
				this.params.api = 'dOrder'
				this.iparams = {
					state: this.tabs[e].value
				}
				// switch (this.tabs[e].type) {
				// 	case 1:
				// 		this.labelArr = ['全部','存储中', '已取完','已过期']
				// 		this.params.api = 'dOrder'
				// 		this.iparams = {
				// 			state: ''
				// 		}
				// 		break;
				// 	case 2:
				// 		this.labelArr = ['全部', '待确认', '已完成']
				// 		this.params.api = 'dLog'
				// 		this.iparams = {
				// 			state: ''
				// 		}
				// 		break;
				// }
				this.getList()
			},
			lTab(e) {
				this.laIdx = e
				this.isget = this.mygd = false
				this.params.page = 1
				this.params.size = 10
				this.params.storeId = this.storeInfo && this.storeInfo.id
				this.dataList = []
				if (this.aIdx == 0) {
					let state = ''
					switch (e) {
						case 0:
							state = '';
							break;
						case 1:
							state = 'start';
							break;
						case 2:
							state = 'over';
							break;
						case 3:
							state = 'expired';
							break;
					}
					this.iparams.state = state
				} else if (this.aIdx == 1) {
					let state = ''
					switch (e) {
						case 0:
							state = '';
							break;
						case 1:
							state = '1';
							break;
						case 2:
							state = '2';
							break;
					}
					this.iparams.state = state
				}
				this.getList()
			},
			async getList() {
				let {
					data :{list}
				} = await this.util.request({
					url: this.api[this.params.api],
					data: { ...this.params,
						...this.iparams
					},
				})
				this.dataList = this.dataList.concat(list)
				this.isget = true
				this.mygd = this.params.size > list.length
				this.params.page++
			},
		},
	}
</script>
<style scoped lang="scss">
	.ipolcs {
		height: 65rpx;
	}

	.ipomt {
		margin-top: 200rpx;
	}

	.mrltc {
		width: 50rpx;
		height: 50rpx;
	}

	.b-l-yy {
		background: linear-gradient(to bottom, #05CBE0, #02AABA);
	}

	.nfix {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 9;
		background-color: #F5F5F5;
	}
</style>
