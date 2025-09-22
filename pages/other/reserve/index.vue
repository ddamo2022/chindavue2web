<template>
	<view class="mvh100 pb130">
		<view class="flex p2 c3" v-if="storeInfo">
			<view class="f-g-0 f-y-c"><text class="iconfont icon-im_dingwei f32 mr10 c3 mt5"></text></view>
			<view class="f-g-1 t-o-e f-y-c" @click="goSelect">
				<view class="f30">{{storeInfo.name}}</view>
				<text class="iconfont icon-youjiantou f32 mr10 c3 mt5"></text>
			</view>
		</view>
		<nav-tab  cname="" ifsize='32' v-model="tIdx" @changeTab='changeTab' :tabs='tabs'></nav-tab>
		<block v-if="tIdx==0">
			<view class="yd1">
				<scroll-view scroll-with-animation scroll-x="true" class='ws-n ydsv' :scroll-into-view="siv1">
					<view :id='`v1${i}`' class="dis-in svic" v-for="(v,i) in arr1" :key="i" @click='click1(i)'>
						<view class="svitem f-c-c" :class="{'wei':i==aIdx1}" :style="{color:i==aIdx1?tColor:'',background:i==aIdx1?tbgo:'',}">
							<view>{{v}}{{$t("other-reserve.people_again")}}</view>
						</view>
					</view>
				</scroll-view>
				<scroll-view scroll-with-animation scroll-x="true" class='ws-n ydsv' :scroll-into-view="siv2">
					<view class="f-row">
						<view :id='`v2${i}`' class="svic" v-for="(v,i) in arr2" :key="i" @click='click2(i)'>
							<view class="svitem f-c-c" :class="{'wei':i==aIdx2}" :style="{color:i==aIdx2?tColor:'',background:i==aIdx2?tbgo:'',}">
								<view>{{v.title}}</view>
								<view class="f20 nowei">{{v.week}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<scroll-view scroll-with-animation scroll-x="true" class='ws-n ydsv' :scroll-into-view="siv3">
					<view :id='`v3${i}`' class="dis-in svic" v-for="(v,i) in arr3" :key="i" @click='click3(i)'>
						<view class="svitem f-c-c" :class="{'wei':i==aIdx3}" :style="{color:i==aIdx3?tColor:'',background:i==aIdx3?tbgo:'',}">
							<view>{{v.title}}</view>
						</view>
					</view>
				</scroll-view>
				<scroll-view scroll-with-animation scroll-x="true" class='ws-n ydsv' :scroll-into-view="siv5">
					<view class="f-row">
						<view :id='`v5${i}`' class="svic" v-for="(v,i) in arr5" :key="i" @click='click5(i)'>
							<view class="svitem f-c-c" :class="{'wei':i==aIdx5}" :style="{color:i==aIdx5?tColor:'',background:i==aIdx5?tbgo:'',}">
								<view>{{v.name}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<scroll-view scroll-with-animation scroll-x="true" class='ws-n ydsv' :scroll-into-view="siv4">
					<view class="f-row">
						<view :id='`v4${i}`' class="svic" v-for="(v,i) in arr4" :key="i" @click='click4(i)'>
							<view class="svitem f-c-c" :class="{'wei':i==aIdx4}" :style="{color:i==aIdx4?tColor:'',background:i==aIdx4?tbgo:'',}">
								<view :style="{color:v.min>peopleNum||v.max<peopleNum?'#999':''}">{{v.name}}</view>
								<view :style="{color:v.min>peopleNum||v.max<peopleNum?'#999':''}" class="f20 nowei">{{regionText(v)}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view v-if="xzyy" class="foot-btnc">
				<view v-if="aIdx4>-1&&arr4[aIdx4].earnest>0" class="p-a ydjc bf f24">
					<view class="f-y-c">{{$t("other-reserve.prepayment_per_table")}}{{sl+arr4[aIdx4].earnest}} {{$t("other-reserve.deposit")}}<text class="iconfont iconwen f26 c3 ml10"></text></view>
					<view class="f20 c9">{{$t("other-reserve.cancel_if_not_arrived_in_time")}}，{{$t("other-reserve.cancel_before_dining")}}{{yyxx.config.expired}}{{$t("other-reserve.minutes_can_cancel_order")}}</view>
					<view class="p-a xxsj"></view>
				</view>
				<view class="yd2 f-row cf" :style="{background:`linear-gradient(90deg,rgba(${cTR(tColor)},0.65),${tColor})`}">
					<view class="f-1 o-x-s f-y-c yd2l">
						<text class="f-g-0 mr10">{{xzyy[0].name}}</text>
						<text class="f-g-0 mr10">{{xzyy[1].name}}</text>
						<text class="f-g-0 mr10">{{xzyy[2].name}}</text>
						<text class="f-g-0 mr10">{{xzyy[3].name}}</text>
						<text class="f-g-0 mr10">{{xzyy[5].name}}</text>
						<text class="f-g-0">{{xzyy[4].name}}</text>
					</view>
					<view @click="ljdz" class="yd2r f34 f-y-c b-r-d">{{$t("other-reserve.reserve_now")}}</view>
				</view>
			</view>
		</block>
		<view class="mt10">
			<block v-if="tIdx==1">
				<scroll-view scroll-y="true" class="wh" style="height: 630px;"
					:refresher-threshold="100/pxToRpxRate" :refresher-triggered="refreshLoading" refresher-enabled="true"
					refresher-background="#f5f5f5" @refresherrefresh="onRefresh" @refresherpulling="onPulling"
					@refresherrestore="onRestore" @refresherabort="onAbort" @scrolltolower="nextPage">
					<order-list @operation='operation' v-for="(v,i) in dataList" :key='i' :co='v' :v="v"></order-list>
					<i-default :imgn="1" v-if="!dataList || dataList.length<=0" />
				</scroll-view>
			</block>
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
		utilMixins
	} from "@/common/util-mixins.js"
	import utils from '@/common/utils.js'
	import navTab from '@/components/common/functionCmp/nav-tab.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import OrderList from "./components/order-list.vue"
	import iDefault from '@/components/common/default.vue'
	import Pay from '@/components/pay/pay.vue'
	import {
		getDw
	} from "@/common/wechat-util.js"
	export default {
		name: 'reserve-index',
		components: {
			navTab,
			OrderList,
			sqBtn,
			iDefault,
			Pay,
		},
		data() {
			return {
				yyxx: {},
				arr1: [],
				aIdx1: 0,
				arr2: [],
				aIdx2: 0,
				aIdx3: 0,
				arr4: [],
				aIdx4: 0,
				aIdx5: 0,
				siv1: '',
				siv2: '',
				siv3: '',
				siv4: '',
				siv5: '',
				notice: '',
				tIdx:0,
				arr5:[],
				tabs:[
					{
						name: this.$t("other-reserve.table_reservation")
					},
					{
						name: this.$t("other-reserve.my_reservations")
					},
				],
				dataList: [],
				laIdx: 0,
				isget: false,
				mygd: false,
				params: {
					size: 10,
					page: 1,
				},
				storeInfo: {},
				refreshLoading: true,
				status: 'loading',
			}
		},
		async onLoad(options) {
			this.query = options
			this.util.setNT(this.$t("other-reserve.table_reservation_again"))
			await this.gDw()
			this.init()
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
			tbgo() {
				return `rgba(${this.cTR(this.tColor)},0.13)`
			},
			peopleNum() {
				return this.arr1[this.aIdx1]
			},
			arr3() {
				return this.arr2 && this.arr2.length ? this.arr2[this.aIdx2].timeArr : []
			},
			xzyy() {
				if (this.arr4 && this.arr4.length) {
					return [
						{
							value: this.arr2[this.aIdx2].week,
							name: this.arr2[this.aIdx2].title
						},
						{
							name: this.arr2[this.aIdx2].week
						},
						{
							value: this.arr3[this.aIdx3].value,
							name: this.arr3[this.aIdx3].title
						},
						{
							value: this.arr1[this.aIdx1],
							name: this.arr1[this.aIdx1]  
						},
						{
							value: this.arr4[this.aIdx4],
							name: this.arr4[this.aIdx4] && this.arr4[this.aIdx4].name || ''
						},
						{
							value: this.arr5[this.aIdx5].id,
							name: this.arr5[this.aIdx5] && this.arr5[this.aIdx5].name || ''
						}
					]
				}
			},
		},
		methods: {
			...mapActions(['getConfig', 'getSjxx']),
			async init() {
				await this.getLoginInfo()
				this.getLayout()
				// this.getSjxx({
				// 	storeId: this.storeInfo && this.storeInfo.id,
				// 	lat: this.lc.latitude || '',
				// 	lng: this.lc.longitude || '',
				// })
				this.getData()
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
			
			changeTab(e) {
				this.laIdx = 0
				this.isget = this.mygd = false
				this.params.page = 1
				if (this.tIdx == 1) {
					this.labelArr = []
					this.params.api = 'yycj'
					this.iparams = {}
					this.dataList = []
					this.getList()
				}
			},
			async refresh() {
				this.params.page = 1
				await this.getList()
			},
			onPulling(e) {
				// console.log("onpulling", e);
			},
			onRefresh() {
				if (this.freshing) return;
				this.freshing = true;
				setTimeout(() => {
					this.refresh()
					this.refreshLoading = false;
					this.freshing = false;
				}, 500)
			},
			onRestore() {
				this.refreshLoading = 'restore';
				console.log("onRestore");
			},
			onAbort() {
				// console.log("onAbort");
			},
			async getList(type) {
				this.status = 'loading'
				let {
					data: {
						list
					}
				} = await this.util.request({
					url: this.api.yycj,
					data: this.params,
				})
				if (type !== 'nextPage' || this.params.page === 1) {
					this.dataList = list
				} else {
					if (list.length === 0) {
						this.status = 'nomore'
						return
					}
					this.dataList = this.dataList.concat(list)
				}
				this.status = 'loadmore'
			},
			async refresh() {
				this.params.page = 1
				await this.getList()
			},
			nextPage() {
				if (this.status === 'loading') {
					return
				}
				this.params.page++
				this.getList('nextPage')
			},
			async operation(e) {
				this.orderInfo = e.co
				this.operationt = e.t
				let obj = {}
				switch (e.t) {
					case 'ljzf':
						this.$refs['Pay'].open(
							JSON.stringify({
								orderSn: e.co.orderSn,
								orderType: 7
							})
						)
					break;
					case 'qxpd':
						this.rfddcz(this.$t("other-reserve.confirm_cancel_reservation_again"), 'yycj', e.co.id)
						break;
				}
			},
			async rfddcz(t, a, i) {
				await this.util.modal(t)
				let {
					msg
				} = await this.util.request({
					url: `${this.api[a]}/${i}`,
					method: 'DELETE',
				})
				this.util.message(msg, 1, 1000)
				this.refresh()
			},
			async getData() {
				let {
					data
				} = await this.util.request({
					url: this.api.yyxx,
					method: 'get',
					data: {
						storeId: this.storeInfo && this.storeInfo.id,
					},
				})
				if(data && data.config && data.config.switch == 0){
					return this.util.message(this.$t("other-reserve.table_reservation_closed"), 3, 2000)
				}
				if(data && data.config && !data.config.ident){
					this.arr1 = []
					this.arr2 = []
					this.arr5 = []
					this.arr4 = []
					return this.util.message(this.$t("other-reserve.table_reservation_not_set"), 3, 2000)
				}
				this.yyxx = data
				uni.setStorageSync('fwb', data)
				for (let i = 1; i <= 1; i++) {
					if (i >= data.config.min) {
						this.arr1.push(i)
					}
				}
				this.arr2 = data.timeDataArr
				this.arr5 = data.area
				this.arr4 = data.typeList
				this.getaIdx4()
			},
			getaIdx4() {
				this.aIdx4 = this.arr4.findIndex(v => this.peopleNum >= v.min && this.peopleNum <= v.max)
				this.siv4 = `v4${this.aIdx4-2<0?0:this.aIdx4-2}`
			},
			regionText(v) {
				return v.min > this.peopleNum ? `${v.min}${this.$t("other-reserve.minimum_people_per_reservation")}` : v.max < this.peopleNum ? `${this.$t("other-reserve.maximum")}${v.max}${this.$t("other-reserve.people_final")}` : ''
			},
			click1(e) {
				this.aIdx1 = e
				this.siv1 = `v1${e-2}`
				this.getaIdx4()
			},
			click2(e) {
				this.aIdx2 = e
				this.siv2 = `v2${e-2}`
				this.aIdx3 = 0
				this.siv3 = `v3${0}`
			},
			click3(e) {
				this.aIdx3 = e
				this.siv3 = `v3${e-2}`
			},
			click4(e) {
				if (this.arr4[e].min > this.peopleNum || this.arr4[e].max < this.peopleNum) return
				this.aIdx4 = e
				this.siv4 = `v4${e-2}`
			},
			click5(e){
				this.aIdx5 = e
				this.siv5 = `v4${e-2}`
			},
			ljdz() {
				if (!this.isLogin) {
					return this.$refs['sqBtn'].open()
				}
				if (this.aIdx2 == -1 || this.aIdx4 == -1) return this.util.message(this.$t("other-reserve.please_choose_reservation_type"), 3)
				// let lastPage = this.util.getPage()
				// // console.log(this.xzyy, lastPage)
				// lastPage.$vm.params.ydxx = this.xzyy.map(v => v.name).join()
				// lastPage.$vm.params.xzyy = this.xzyy
				uni.setStorageSync('bdhc', this.xzyy)
				this.go({
					t: 1,
					url: 'ljyy?storeId=' + this.storeInfo.id
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	.yd1 {
		padding-top: 35rpx;
		padding-bottom: 200rpx;
	}

	.ydsv {
		padding: 35rpx 0 35rpx 50rpx;
		// height: 87rpx;
	}

	.svic {
		height: 90rpx;
	}

	.svitem {
		padding: 0 20rpx;
		height: 100%;
		min-width: 135rpx;
		border-radius: 60rpx;

		.acitve {}
	}

	.yd2 {
		height: 87rpx;
		border-radius: 87rpx;

		.b-r-d::after {
			background: #fff;
			left: 0;
		}

		.b-r-d:last-child::after {
			display: block;
		}
	}

	.yd2l {
		padding-left: 30rpx;
		margin-right: 20rpx;
	}

	.yd2r {
		padding: 0 50rpx 0 40rpx;
	}

	.ydjc {
		top: 0;
		transform: translateY(-100%);
		padding: 20rpx 40rpx;
		border-radius: 100rpx;
	}

	.xxsj {
		bottom: -20rpx;
		left: 100rpx;
		width: 0;
		height: 0;
		border-width: 30rpx 30rpx 0;
		border-style: solid;
		border-color: #fff transparent transparent;
	}
</style>
