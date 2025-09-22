<template>
	<view class="pb130">
		<view class="flex p2 c3" v-if="storeInfo">
			<view class="f-g-0 f-y-c"><text class="iconfont icon-im_dingwei f32 mr10 c3 mt5"></text></view>
			<view class="f-g-1 t-o-e f-y-c" @click="goSelect">
				<view class="f30">{{storeInfo.name}}</view>
				<text class="iconfont icon-youjiantou f32 mr10 c3 mt5"></text>
			</view>
		</view>
		<nav-tab cname="" ifsize='32' v-model="tIdx" @changeTab='changeTab' :tabs='tabs'></nav-tab>
		<block v-if="tIdx==0">
			<view class="bf mt20">
				<view class="f24 p03">
					<view class="hlb flex p20">
						<view class="f-4 t-c wei4">{{$t("lineup.table_type")}}</view>
						<view class="f-3 t-c wei4">{{$t("lineup.waiting_tables")}}</view>
						<view class="f-3 t-c wei4">{{$t("lineup.estimated_waiting")}}</view>
					</view>
					<view v-for='(v,i) in czInfo' :key='i' class="flex p20 c9">
						<view class="f-4 t-c">
							<view class="f30 c3">{{v.serialNum}}</view>
							<view>
								<text>{{v.name}}</text>({{v.minNum}}-{{v.maxNum}} {{$t('goods.people')}})
							</view>
						</view>
						<view class="f-3 f-c"><text class="f30"
								:style="{color:tColor}">{{v.queuingUp && v.queuingUp.count}}</text>{{$t("lineup.table")}}
						</view>
						<view class="f-3 f-c" v-if="v.queuingUp && v.queuingUp.minutes>0"><text
								class="f30 c3">{{v.queuingUp && v.queuingUp.minutes}}</text>{{$t("lineup.minutes")}}
						</view>
						<view class="f-3 f-c" v-else>{{$t("lineup.no_waiting")}}</view>
					</view>
				</view>
			</view>
			<view class="mt20">
				<mg-input @tab="toggleTab('number')" :value="qparams.peopleText" isr='1'
					:ht='$t("lineup.dining_people")' htc='c3 f30' :pr='$t("lineup.please_select")' icn='f30 c3 t-r'
					dis='1' arrow="1" ftc='c3'></mg-input>
				<view v-show="qparams.people>0">
					<mg-cell cname="p32" isr='1'>
						<template slot='bd'>
							<view class="c3 f30 f-bt">
								<text>{{$t("lineup.table_type")}}</text>
								<text v-if="!czInfo.length"
									class="cb">{{$t("lineup.please_select_people_based_on_table_type")}}</text>
							</view>
							<view v-if="czInfo.length" class="mt15">
								<view class="moudle mb20 p-r o-h" v-for="(v,i) in czInfo" :key='i'
									@click="clickMode(v,i)" :style="{borderColor:i==aIdx?tColor:''}">
									<text class="p-a" :class="i==aIdx?'sjx':''"
										:style="{borderTopColor:i==aIdx?tColor:''}"></text>
									<text class="p-a gou iconfont icon-gou cf f18"></text>
									{{v.name}}：{{$t("lineup.estimated_waiting")}}{{v.queuingUp && v.queuingUp.count}}{{$t("lineup.table")}}，{{v.queuingUp && v.queuingUp.minutes}}{{$t("lineup.minutes")}}
								</view>
							</view>
						</template>
					</mg-cell>
				</view>
				<mg-input v-model="qparams.contact" isr='1' :ht="$t('lineup.phone_number') +'+66'" :max="20"
					htc='c3 f30' :pr='$t("lineup.please_enter_phone_number")' icn='f30 c3 t-r'>

				</mg-input>
			</view>
			<!-- <view class="p253">
				<view class="be c6 f24 p2 tips">
					<div class="mb10 f-y-c"><text class="iconfont iconjfgz mr10" :style="{color:tColor}"></text>商家提醒：</div>
					<book-text type='2' :content="czInfo.other.notice" />
				</view>
			</view> -->
			<view class="foot-btnc bf">
				<button @click="save" :loading="loading" :disabled="loading" class="foot-btn"
					:style="{background:tColor}">{{$t("lineup.confirm_take_number")}}</button>
			</view>
		</block>
		<view class="mt20" v-if="tIdx==1">
			<scroll-view scroll-y="true" class="wh" style="height: 630px;" :refresher-threshold="100/pxToRpxRate"
				:refresher-triggered="refreshLoading" refresher-enabled="true" refresher-background="#f5f5f5"
				@refresherrefresh="onRefresh" @refresherpulling="onPulling" @refresherrestore="onRestore"
				@refresherabort="onAbort" @scrolltolower="nextPage">
				<order-list @operation='operation' v-for="(v,i) in dataList" :key='i' :co='v' :v="v"></order-list>
				<i-default :imgn="1" v-if="!dataList || dataList.length<=0" />
			</scroll-view>
		</view>
		<w-picker mode="selector" @confirm="onConfirm($event,'people')" ref="number" :selectList="pArr"></w-picker>
		<sq-btn type="1" ref="sqBtn"></sq-btn>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import mgInput from '@/components/form/my-input.vue'
	import wPicker from "@/components/form/w-picker.vue"
	import bookText from '@/components/common/functionCmp/rich-text.vue';
	import utils from '@/common/utils.js'
	import navTab from '@/components/common/functionCmp/nav-tab.vue'
	import MgCell from '@/components/common/my-cell.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import OrderList from "./components/order-list.vue"
	import iDefault from '@/components/common/default.vue'
	import {
		getDw
	} from "@/common/wechat-util.js"
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		name: 'pdqh',
		components: {
			mgInput,
			wPicker,
			bookText,
			navTab,
			MgCell,
			OrderList,
			sqBtn,
			iDefault,
		},
		data() {
			return {
				czInfo: {},
				bqarr: [],
				aIdx: 0,
				telcode: '+66',
				qparams: {
					people: '',
					type_id: '',
					peopleText: '',
					contact: '',
				},
				pArr: [],
				loading: false,
				tIdx: 0,
				tabs: [{
						name: this.$t("lineup.queue_for_number")
					},
					{
						name: this.$t("lineup.my_queue")
					},
				],
				labelArr: [],
				tntabs: [{
					name: this.$t("lineup.queue"),
					type: 5,
				}],
				dataList: [],
				laIdx: 0,
				isget: false,
				mygd: false,
				params: {
					size: 10,
					page: 1,
				},
				storeInfo: {},
				storeId: '',
				refreshLoading: true,
				status: 'loading',
			}
		},
		async onLoad(options) {
			this.query = options
			if (options && options.storeId) {
				this.storeId = options.storeId
				this.storeInfo.id = options.storeId
			} else if ((options.q && decodeURIComponent(options.q).indexOf('storeId') > -1)) {
				let q = decodeURIComponent(options.q)
				this.storeId = utils.getUrlParams(q)['storeId']
				this.storeInfo.id = this.storeId
			} else if (options && options.id) {
				this.storeId = options.id
				this.storeInfo.id = options.id
			} else {
				await this.gDw()
			}
			this.util.setNT(this.$t("lineup.queue_for_number"))
			this.init()
			// this.changeTab(this.tIdx)
			console.log('--1212', this.user)

			if (this.user.mobile) {
				this.qparams.contact = this.user.mobile.replace(/^(\+66|66)/, '');
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
			...mapActions(['getConfig', 'getSjxx']),
			async init() {
				await this.getLoginInfo()
				if (!await this.checkLogin()) return
	
				this.getLayout()
				await this.getSjxx({
					storeId: this.storeInfo && this.storeInfo.id,
					lat: this.lc && this.lc.latitude || '',
					lng: this.lc && this.lc.longitude || '',
				}).then(() => {
					this.storeInfo = this.sjxx
					if (this.sjxx && this.sjxx.queueingSetting && this.sjxx.queueingSetting.qSwitch != 1) {
						this.util.message(this.$t("lineup.store_queue_closed"), 3, 2000)
					}
				})
				this.getData()
			},
			async load(sid) {
				if (sid) {
					uni.removeStorageSync('rStoreInfo')
				}
				this.init()

				//this.bqarr = this.czInfo
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
						'url': this.api.dplb,
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
					this.params.api = 'pdlb'
					this.iparams = {}
					this.dataList = []
					this.getList()
				}
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
					url: this.api.pdxd,
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
					case 'qxpd':
						this.rfddcz(this.$t('lineup.confirm_cancel_queue'), 'pdxd', e.co.id)
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
					'url': this.api.pdcz,
					data: {
						storeId: this.storeInfo && this.storeInfo.id,
					},
				})
				this.czInfo = data ? data : [],
					console.log('121243', this.czInfo[0])
				var maxNum = 30
				if (this.czInfo && this.czInfo.length > 0) {
					maxNum = this.czInfo[0].maxNum
				}
				for (let i = 1; i <= maxNum; i++) {
					this.pArr.push({
						label: i,
						value: i
					})
				}
			},
			toggleTab(str) {
				this.$refs[str].show();
			},
			onConfirm(e, key) {
				console.log(key);
				console.log(this.qparams);
				console.log(e.result);
				switch (key) {
					case "people":
						this.qparams[key] = e.result
						this.qparams.peopleText = e.result + this.$t("goods.people")
						//let i = this.czInfo.find(v => e.result <= +v.max && e.result >= +v.min)
						//console.log(i)

						break;
				}
			},
			clickMode(v, i) {
				console.log(i)
				this.aIdx = i;
				console.log(v)
				this.qparams.type_id = v.id
				
				var maxNum=30
				if (v) {
					maxNum = v.maxNum
				}
				this.pArr=[]
				for (let i = 1; i <= maxNum; i++) {
					this.pArr.push({
						label: i,
						value: i
					})
				}
			},
			async save() {
				if (!this.isLogin) {
					return this.$refs['sqBtn'].open()
				}
				if (this.sjxx && this.sjxx.queueingSetting && this.sjxx.queueingSetting.qSwitch != 1) {
					console.log('1212')
					return this.util.message(this.$t("lineup.store_queue_closed"), 3, 2000)
				}

				if (!this.qparams.type_id) {
					this.qparams.type_id = this.czInfo && this.czInfo[0] ? this.czInfo[0].id : ''
				}
				console.log(this.qparams)
				this.qparams.storeId = this.storeInfo && this.storeInfo.id
				let filterArr = []
				let judgeData = utils.isFailParams({
					field: this.qparams,
					filter: filterArr,
					tips: {
						type_id: this.$t("lineup.please_select_valid_people_based_on_table_type"),
						people: this.$t("lineup.please_select_people"),
						contact: this.$t("lineup.please_fill_in_phone_number"),
					}
				})
				if (!judgeData) {
					return
				} else {
					if (!utils.isTelCode(this.qparams.contact)) return this.util.message(this.$t(
						"lineup.please_enter_correct_phone_number"), 3)
					console.log(this.qparams)
					// return
					this.loading = true
					// #ifdef MP-WEIXIN
					// if (!this.jjmbxx) {
					// 	try {
					// 		await this.requestSM('queuingOrder')
					// 	} catch (e) {
					// 		this.jjmbxx = true
					// 		this.loading = false
					// 		return
					// 	}
					// }
					// #endif
					//var contact=this.telcode+ this.params.contact

					var contact = this.qparams.contact;
					if (this.qparams.contact.startsWith('+66')) {
						contact = this.qparams.contact;
					} else if (this.qparams.contact.startsWith('66')) {
						contact = '+66' + this.qparams.contact.slice(2);
					} else {
						contact = '+66' + this.qparams.contact;
					}

					this.qparams.contact = contact
					let orderRes = await this.util.request({
						'url': this.api.pdxd,
						method: 'POST',
						mask: 1,
						data: this.qparams,
					})
					if (!orderRes) {
						this.loading = false
						//utils.swnb(1000)
						this.qparams.contact = this.qparams.contact.replace(/^(\+66|66)/, '');
					} else {
						this.util.message(orderRes.msg, 1, 1000)
						this.loading = false
						this.qparams.people = 0
						this.qparams.peopleText = ''
						utils.stfn(() => {
							this.go({
								t: 1,
								url: '/pages/my/lineup/pdxq?id=' + orderRes.data,
							})
						})
					}
				}
			},
		},
	}
</script>

<style scoped lang="scss">
	.f-4 {
		flex: 1 1 40%;
	}

	.f-3 {
		flex: 1 1 25%;
	}

	.tips {
		line-height: 40rpx;
	}

	.moudle {
		text-align: left;
		padding: 20rpx 18rpx;
		border-radius: 12rpx;
		color: #333;
		border: 1rpx solid #eee;
		background: #fff;
		position: relative;
	}

	.sjx {
		top: 0;
		right: 0;
		width: 0;
		height: 0;
		border-top: 45rpx solid red;
		border-left: 45rpx solid transparent;
	}

	.gou {
		right: 3rpx;
		top: 5rpx;
	}

	.foot-btn {
		height: 80rpx;
		line-height: 80rpx;
	}
</style>