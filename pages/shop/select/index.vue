<template>
	<view class="fCol h100">
		<view class="f-bt bf f-y-c">
			<view class="f-g-0 tbw">
				<nav-tab cname='' ncolor="#000" ifsize='32' height='100' :isname="{}" :color='tColor' v-model="aIdx"
					@changeTab='changeTab' :tabs='tabs'></nav-tab>
			</view>
			<view class="f-g-0">
				<view @click="djss" class="bf6 stssk f-c p03 f28 c9 mr20">
					<text class="iconfont icon-sousuo"></text>
					<text class="ml5">{{ $t('shop-select.search')}}</text>
				</view>
			</view>
		</view>
		<view class="f-1">
			<swiper :class="zfbH" :current="aIdx" @change="swiperTab">
				<swiper-item @touchmove.stop='stopTouchMove'>
					<view class="h100 f-col">
						<view v-if="query.page!='recharge' && query.page!='cashier' && query.page!='fastOrder'">
							<view class="p23 f-y-c f30" style="padding-bottom: 0;">
								<view @click="xzcs" class="f-y-c f-1 c0 mt10 t-o-e" style="padding-bottom: 6rpx;">
									<text class="iconfont icon-location f26 mr10 c0 mt5"></text>
									<view class="mr10 t-o-e" >{{address}}</view>
									<!-- <view class="mr10 t-o-e" @click='chooseLocation'
										v-if="sbset.pageState==1">{{address}}</view>
									<view class="mr10 t-o-e" @click="chooseArea" v-else>{{address}}</view> -->
									<text class="iconfont icon-right c3 ml5"></text>
								</view>
								<view class="bf stssk f-c p02 f28 c9 ml20 b-d" v-if="!dtshow" @click="dtshow=!dtshow">
									<text class="ml5">{{ $t('shop-select.view_map')}}</text>
								</view>
							</view>
							<!-- <view v-show="dtshow"></view> -->
							<map v-show="dtshow" class="map mt20" @callouttap='markertap' :latitude="latitude"
								:longitude="longitude" :markers="covers" scale='16'>
							</map>
							<view @click="dtshow=!dtshow" class="f-c p23 f26 bt-e l-h1 bf" v-if="dtshow">
								<view>{{dtshow? $t('shop-select.collapse'):  $t('shop-select.expand')}} {{$t('shop-select.map')}}</view>
								<text class="iconfont icon-top c3 ml5" :class="{'xzdw':!dtshow}"></text>
							</view>
						</view>
						<scroll-view class="f-1 o-a p330 mt20" style="padding: 0 10rpx 15rpx 10rpx;" scroll-y="true"
							@scrolltolower="lower">
							<view @click="selectStore(v,i)" v-for="(v,i) in dataList[aIdx].list" :key='i'
								class="dpic bs15 b-f5 bf mb30 f-row p-r"  :style="{borderColor:i==xzdpidx?tColor:'#fff'}">
								<view class="p03 f-1 dpiclt b-re" :class="{'xxz':v.realtimeState==3}">
									<!-- <view v-if="isDev" class="mb10">店铺ID:{{v.id}}</view> -->
									<view class="mb10 wei f34">{{v.name}}</view>
									<view v-if='v.storeSetting && v.storeSetting' class="f-raw">
										<view v-if='v.storeSetting.takeoutSwitch==1'
											class="mb10 f20 p-3-10 bs5 mr10"
											style="background: #EAF3E8;color: #5AA540;">{{$t('shop-select.delivery_available')}}</view>
										<view v-if='v.storeSetting.pickupSwitch==1'
											class="mb10 f20 p-3-10 bs5 mr10" style="background: #EAF3E8;color: #5AA540;">
											{{$t('shop-select.pick_up_available')}}
										</view>
										<block v-if="v.label && v.label.length">
											<view class="mb10 f20 p-3-10 bs5 mr10" style="background: #EAF3E8;color: #5AA540;" v-for="(lbv,lbi) in v.label" :key="lbi">{{lbv.name}}</view>
										</block>
									</view>
									<view class="f-row f26 c6 mt5 f-y-c" :class="{'xxz':v.realtimeState==3}">
										<text class="iconfont icon-location f26 mr10 c3 mt10"
											:class="{'xxz':v.realtimeState==3}"></text>
										<text>{{v.address}}</text>
									</view>
									<view class="f-row f26 c6 mt5 f-y-c" :class="{'xxz':v.realtimeState==3}">
										<text class="iconfont icon-sj f26 mr10 c3 mt10"
											:class="{'xxz':v.realtimeState==3}"></text>
										<text>{{yysj(v)}}</text>
									</view>
									<view class="f-raw mt15">
										<view class="text-btn f24 p-3-10 bs5 mr10 c9"
											:style="{borderColor:v.realtimeState==1|| v.realtimeState==2?tColor:'',color:v.realtimeState==1|| v.realtimeState==2?tColor:''}">
											{{v.realtimeState==1? $t('shop-select.open'):v.realtimeState==2?$t('shop-select.busy'):$t('shop-select.resting')}}
										</view>
										<view class="text-btn f24 p-3-10 bs5 mr10 cf" :style="{background:tColor}"
											v-if="v.storeSetting &&(v.storeSetting.takeSubscribe || v.storeSetting.outAppoint)">
											<text class="iconfont icon-sj f24 mr10 cf mt10"></text> {{ $t('shop-select.accept_reservations')}}
										</view>
										<view v-if="v.typeName" class="text-btn f24 p-3-10 bs5 mr10"
											:style="{borderColor:tColor,color:tColor}">{{v.typeName}}</view>
										<view v-if="v.labelName" class="text-btn f24 p-3-10 bs5"
											:style="{borderColor:tColor,color:tColor}">{{v.labelName}}</view>
									</view>
								</view>
								<view class="dpicrt f-c-c p-3-10 f26">
									<view :style="{color:tColor}"> {{ $t('shop-select.place_order')}}</view>
									<view class="f24 c6 mt10">{{ $t('shop-select.distance')}}{{v.distance}}</view>
									<view class="f-y-c mt30 pt10">
										<view @click.stop="bddh(v)" class="f-c bf5 dtanc mr20">
											<text class="iconfont icon-dianhua f32" :style="{color:tColor}"></text>
										</view>
										<view @click.stop="ckwz(v)" class="f-c bf5 dtanc p-r">
											<text class="iconfont icon-daohang f32" :style="{color:tColor}"></text>
											<!-- <view class="p-a f20 cf cq" :style="{background:tColor}">常去
												<view class="sjx p-a":style="{borderColor:`${tColor} transparent transparent transparent`}"></view>
											</view> -->
										</view>
									</view>
								</view>
								<!-- <view class="yddsj p-a" :style="{borderBottom:i==xzdpidx?'56rpx solid '+tColor:''}"></view> -->
								<!-- <text v-if="v.value==params.isOut" class="icgou p-a iconfont icon-gou cf f20"></text> -->
							</view>
							<jzz bgcolor="transparent" :nodata="dataList[aIdx].list.length==0&&dataList[aIdx].isget"
								:mygd='dataList[aIdx].mygd' />
						</scroll-view>
					</view>
				</swiper-item>
				<swiper-item @touchmove.stop='stopTouchMove'>
					<scroll-view class="h100 p330" scroll-y="true" @scrolltolower="lower">
						<view @click="selectStore(v,i)" v-for="(v,i) in dataList[aIdx].list" :key='i'
							class="dpic bs15 b-f5 bf mb30 f-row p-r">
							<view class="p03 f-1 dpiclt b-re" :class="{'xxz':v.realtimeState==3}">
								<view class="mb10 f-y-c wei f34">
									<!-- <text class="iconfont mt0 c3 iconxx mr15 f26"
										:style="{color:tColor}"></text> -->
									{{v.name}}
								</view>
								<view v-if='v.storeSetting && v.storeSetting' class="f-raw">
									<view v-if='v.storeSetting.takeoutSwitch==1'
										class="mb10 f20 p-3-10 bs5 mr10" style="background: #EAF3E8;color: #5AA540;">{{ $t('shop-select.delivery_available')}}
									</view>
									<view v-if='v.storeSetting.pickupSwitch==1'
										class="mb10 f20 p-3-10 bs5 mr10" style="background: #EAF3E8;color: #5AA540;">{{ $t('shop-select.pick_up_available')}}
									</view>
									<block v-if="v.label && v.label.length">
										<view class="mb10 f20 p-3-10 bs5 mr10" style="background: #EAF3E8;color: #5AA540;" v-for="(lbv,lbi) in v.label" :key="lbi">{{lbv.name}}</view>
									</block>
								</view>
								<view class="f-row f26 c6 mt5 f-y-c" :class="{'xxz':v.realtimeState==3}">
									<text class="iconfont icon-location f30 mr10 c3 mt10"
										:class="{'xxz':v.realtimeState==3}"></text>
									<text>{{v.address}}</text>
								</view>
								<view class="f-row f26 c6 mt5 f-y-c" :class="{'xxz':v.realtimeState==3}">
									<text class="iconfont icon-sj f30 mr10 c3 mt10"
										:class="{'xxz':v.realtimeState==3}"></text>
									<text>{{yysj(v)}}</text>
								</view>
								<view class="f-raw mt15">
									<view class="text-btn f24 p-3-10 bs5 mr10 c9"
										:style="{borderColor:v.realtimeState==1 || v.realtimeState==2?tColor:'',color:v.realtimeState==1 || v.realtimeState==2?tColor:''}">
										{{v.realtimeState==1?  $t('shop-select.open'):v.realtimeState==2? $t('shop-select.busy'):$t('shop-select.resting')}}
									</view>
									<view class="text-btn f24 p-3-10 bs5 mr10 cf" :style="{background:tColor}"
										v-if="v.storeSetting && (v.storeSetting.takeSubscribe || v.storeSetting.outAppoint)">
										<text class="iconfont icon-sj f24 mr10 cf mt10"></text>{{$t('shop-select.accept_reservations')}}
									</view>
									<view v-if="v.typeName" class="text-btn f20 p-3-10 bs5"
										:style="{borderColor:tColor,color:tColor}">{{v.typeName}}</view>
								</view>
							</view>
							<view class="dpicrt f-c-c p-3-10 f26">
								<view>{{$t('shop-select.place_order')}}</view>
								<view class="f24 c6 mt10">{{$t('shop-select.distance')}}{{v.distance}}</view>
								<view class="f-y-c mt30 pt10">
									<view @click.stop="bddh(v)" class="f-c bf5 dtanc mr20">
										<text class="iconfont icon-dianhua f32" :style="{color:tColor}"></text>
									</view>
									<view @click.stop="ckwz(v)" class="f-c bf5 dtanc p-r">
										<text class="iconfont icon-daohang f32" :style="{color:tColor}"></text>
										<view class="p-a f20 cf cq" :style="{background:tColor}">{{$t('shop-select.frequent')}}
											<view class="sjx p-a"
												:style="{borderColor:`${tColor} transparent transparent transparent`}">
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						<jzz bgcolor="transparent" imgn="zwyyd"
							:nodata="dataList[aIdx].list.length==0&&dataList[aIdx].isget" :mygd='dataList[aIdx].mygd' />
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<view v-show="showSearch" class="wh p-a t0 bf f-col">
			<view class="searchc p3 f-y-c b-be">
				<view class="f-1 scl bf6 f-y-c p03">
					<text class="iconfont icon-sousuo c6"></text>
					<input class="f-1 p02" :focus="false" v-model.trim="ssobj.params.keyword" confirm-type='search'
						placeholder-class="cb2" :placeholder="$t('shop-select.enter_store_name')" @confirm='confirm' />
					<text @tap="cleanKey" v-if="ssobj.params.keyword" class="iconfont icon-yx"
						style="color: #ADACAB;"></text>
				</view>
				<view @click="qxss" class="c8 ml30">{{$t('shop-select.cancel')}}</view>
			</view>
			<scroll-view class="f-1 o-a p03 bf5" scroll-y="true">
				<view @click="xzssdp(v)" v-for="(v,i) in ssobj.list" :key='i' class="p30 b-be">
					<view class="f30 t-o-e">{{v.name}}·{{v.distance}}</view>
					<view class="f24 c9 t-o-e">{{v.address}}</view>
				</view>
				<jzz v-show="issearch" otext='' imgn="zwmd" bgcolor="transparent"
					:nodata="ssobj.list.length==0&&ssobj.isget" :mygd='ssobj.isget' />
			</scroll-view>
		</view>
		<tab-bar></tab-bar>
		<mg-map ref='mgmap' @get-cl='setCLP' :scale="20" />
		
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import navTab from '@/components/common/functionCmp/nav-tab.vue'

	import jzz from '@/components/common/jzz.vue'
	import utils from '@/common/utils.js'
	import mgMap from '@/components/form/my-map.vue'
	import {
		getDw
	} from "@/common/wechat-util.js"
	export default {
		name: 'select-index',
		components: {
			navTab,
			jzz,
			mgMap
		},
		data() {
			return {
				aIdx: 0,
				// #ifdef H5
				params: {
					isOut: undefined,
				},
				// #endif
				select: {},
				tabs: [{
					name: this.$t('shop-select.select_store')
				}, {
					name:this.$t('shop-select.favorite_store')
				}],
				latitude: 13.7854976,
				longitude: 100.5879296,
				covers: [],
				dwcsInfo: {},
				dtshow: false,
				dataList: [{
					list: [],
					isget: false,
					mygd: false,
					api: 'dplb',
					params: {
						page: 1,
						size: 10,
						lat: '',
						lng: '',
						cityId: '',
						storeId: '',
					}
				}, {
					list: [],
					isget: false,
					mygd: false,
					api: 'dplb',
					params: {
						page: 1,
						size: 10,
						lat: '',
						lng: '',
						collect: 1,
					}
				}],
				xzdpidx: -1,
				ssobj: {
					list: [],
					isget: false,
					params: {
						keyword: '',
					}
				},
				query:{},
				issearch: false,
				showSearch: false,
				// #ifdef  MP-WEIXIN
				zfbH: 'h100',
				// #endif
				// #ifdef  MP-ALIPAY || MP-TOUTIAO || H5
				zfbH: 'mvh100',
				// #endif
			}
		},
		async onLoad(options) {
			this.util.setNT( this.$t('shop-select.select_store'))
			this.query = options
			if(options && (options.page=='recharge' || options.page=='cashier'|| options.page=='fastOrder')){
				this.ssobj.params.recharge = 1
				this.dataList[0].params.recharge = 1
			}
			if(options.searchIds){
				this.ssobj.params.searchIds = options.searchIds
				this.dataList[0].params.searchIds = options.searchIds
			}
			this.swiperTab({
				detail: {
					current: +options.idx || 0
				}
			})
			uni.$on('changeCity', (e) => {
				this.dataList[0] = {
					list: [],
					isget: false,
					mygd: false,
					api: 'dplb',
					params: {
						page: 1,
						size: 10,
						lat: this.dataList[0].params.lat,
						lng: this.dataList[0].params.lng,
						cityId: this.dwcsInfo.cityId,
					}
				}
				this.xzdpidx = 0
				this.getList()
				// console.log('changeCity', e)
			})
			console.log(options)
			if(this.sbset && this.sbset.showMapState==0){
				this.dtshow = false
			}
		},
		onUnload() {
			uni.$off('changeCity');
		},
		computed: {
			...mapState('dndc', ['addInfo', 'latLng']),
			...mapState({
				sbset: state => state.config.storeBasicSetting,
				oset: state => state.config.orderSetting,
			}),
			address() {
				console.log('info', this.addInfo)
				console.log('12-1',this.latLng)
				if (this.addInfo && this.sbset.pageState == 1) {
					return this.addInfo.maddress
				} else if (this.addInfo && this.sbset.pageState == 2) {
					return this.addInfo.city.name
				} else if (this.addInfo) {
					return this.addInfo.maddress
				}else {
					return this.$t('shop-select.locating')
				}
			},
			// labelColor() {
			// 	return `background:${utils.hexToRgba(this.tColor,0.9)},color:${utils.hexToRgba(this.tColor,0.1)}`
			// },
		},
		methods: {
			...mapActions(["getConfig","getSjxx"]),
			chooseLocation() {
			  this.$refs.mgmap.choose()
			  console.log(121)
			},
			chooseArea() {
				this.go({
					url: 'select?info=' + encodeURIComponent(JSON.stringify(this.dwcsInfo))
				})
			},
			setCLP(res) {
				this.select.address = res.address
				this.select.details = res.name
				this.select.lat = res.latitude
				this.select.lng = res.longitude
				this.getAddInfo({
					address: res.address
				})
				this.dataList[0] = {
					list: [],
					isget: false,
					mygd: false,
					api: 'dplb',
					params: {
						page: 1,
						size: 10,
						lat: res.latitude,
						lng: res.longitude,
					}
				}
				this.getList()
			},
			async getDwcs(o) {
				this.latitude = this.dataList[0].params.lat = this.dataList[1].params.lat = o.latitude
				this.longitude = this.dataList[0].params.lng = this.dataList[1].params.lng = o.longitude
				this.dataList[0].params.storeId = this.query.storeId || ''
			},
			stopTouchMove() {
				return false
			},
			changeTab(index) {
				// console.log(index, this.aIdx, this.dataList)
				// #ifdef  MP-ALIPAY
				this.swiperTab({
					detail: {
						current: +index || 0
					}
				})
				// #endif
			},
			async swiperTab(e) {
				this.aIdx = e.detail.current;
				// #ifndef  MP-ALIPAY
				// if (this.aIdx != 0 && !e.detail.hasOwnProperty('source')) {
				// 	return
				// }
				// #endif
				if (!this.dataList[e.detail.current].isget) {
					if (this.aIdx == 0 && !this.dwcsInfo.hasOwnProperty('cityId')) {
						// if (this.query.latLng) {
						// 	await this.getDwcs({
						// 		latitude: this.query.lat,
						// 		longitude: this.query.lng
						// 	})
						// } else {
						let lc = await getDw({
							t: 0
						})
						await this.getAddInfo(lc)
						await this.getDwcs(lc)
						// }
					}
					this.getList()
				}
				// console.log(e)
			},
			lower: utils.throttle(function(e) {
				if (!this.dataList[this.aIdx].mygd && this.dataList[this.aIdx].isget) {
					this.dataList[this.aIdx].isget = false
					this.getList();
				}
			}, 300),
			async getList() {
				this.dataList[this.aIdx].params.cityId = this.addInfo.city && this.addInfo.city.code
				let obj = this.dataList[this.aIdx]
				let {
					data: {
						list
					}
				} = await this.util.request({
					'url': this.api[this.dataList[this.aIdx].api],
					data: this.dataList[this.aIdx].params,
				})
				obj.list = obj.list.concat(list)
				obj.isget = true
				obj.mygd = obj.params.size > list.length
				obj.params.page++
				this.$set(this.dataList, this.aIdx, obj)
				if (this.aIdx == 0) {
					this.setCovers()
				}
				// console.log(obj)
			},
			setCovers() {
				if (this.dataList[0].list[0]) {
					utils.stfn(() => {
						this.latitude = +this.dataList[0].list[0].lat
						this.longitude = +this.dataList[0].list[0].lng
					}, 400)
					// console.log('setCovers',this.latitude,this.longitude)
				}
				this.covers = this.dataList[0].list.map(v => ({
					id: +v.id,
					latitude: v.lat,
					longitude: v.lng,
					iconPath: '/static/geocode.png',
					width: '25',
					height: '25',
					callout: {
						content: v.name + '>',
						color: '#333',
						fontSize: 14,
						borderRadius: 3,
						bgColor: '#fff',
						padding: 7,
						display: 'ALWAYS',
						textAlign: 'center',
					},
				}))
				
				console.log('888',this.covers )
			},
			async selectStore(v, i) {
				this.xzdpidx = i
				this.latitude = v.lat
				this.longitude = v.lng
				let msg = ''
				if (v.realtimeState == 3) {
					msg = `[${v.name}] ${this.$t('shop-select.resting')}${this.$t('shop-select.confirm_switch_to_store')}？`
				} else if (v.distance && this.oset.shopDistance && v.distance.split('km')[0] >= this.oset.shopDistance) {
					msg = `${this.$t('shop-select.far_from_store')} ${this.$t('shop-select.confirm_switch_to')} [${v.name}]  ${this.$t('shop-select.store_query')}？`
				}
				try {
					msg && await this.util.modal(msg)
					// this.qhdp(v)
					let lastPage = this.util.getPage()
					if (lastPage && this.query.page != 'payOrder' && this.query.page != 'recharge' && this.query.page != 'index' && this.query.page != 'cashier'&& this.query.page != 'fastOrder') {
						lastPage.$vm.load(v.id)
						// utils.swnb(1000)
						setTimeout(()=>{
							this.go({t: 4})
						},200)
					} else if(this.query.page == 'recharge') {
						uni.setStorageSync('rStoreInfo', v)
						setTimeout(()=>{
							this.go({t: 4})
						},500)
					}else if(this.query.page == 'cashier') {
						this.getSjxx({
							storeId: v.id,
							lat: +this.dataList[0].list[0].lat || '',
							lng: this.dataList[0].params.lng || '',
						})
						setTimeout(() =>{
							this.go({
								t: 3,
								url: `/pages/shop/in/dmf?storeId=${v.id}`,
							})
						},500)
					}else if(this.query.page == 'fastOrder') {
						this.getSjxx({
							storeId: v.id,
							lat: +this.dataList[0].list[0].lat || '',
							lng: this.dataList[0].params.lng || '',
						})
						setTimeout(() =>{
							this.go({
								t: 3,
								url: `/pages/shop/in/goods?diningType=6&storeId=${v.id}`,
							})
						},500)
					}else {
						uni.setStorageSync('storeId', v.id)
						setTimeout(() =>{
							this.go({
								t: 3,
								url: '/pages/index/goods'
							})
						},500)
					}
				} catch (e) {
					console.log(e)
				}
				// console.log('selectStore', v, i)
			},
			qhdp(v) {
				this.getConfig({
					key: 'storeInfo',
					data: {
						id: v.id,
						name: v.name,
						distance: v.distance,
					}
				})
			},
			markertap(e) {
				let v = this.dataList[0].list.find((v, i) => v.id == e.detail.markerId),
					i = this.dataList[0].list.findIndex((v, i) => v.id == e.detail.markerId)
				this.selectStore(v, i)
				// console.log('markertap', e, v, i)
			},
			xzcs() {
				if (this.dwcsInfo.cityId) {
					this.go({
						url: 'select?info=' + encodeURIComponent(JSON.stringify(this.dwcsInfo))
					})
				}
			},
			yysj(co) {
				let text = ''
				let info = co
				if (info.businessData && info.businessData.times) {
					text =
						`${info.businessData.times[0].start}-${info.businessData.times[0].ciri?  this.$t('shop-select.next_day'):''}${info.businessData.times[0].end}`
					if (info.businessData.times[1]) {
						text += ' ' +
							`${info.businessData.times[1].start}-${info.businessData.times[1].ciri? this.$t('shop-select.next_day'):''}${info.businessData.times[1].end}`
					}
					if (info.businessData.times[2]) {
						text += ' ' +
							`${info.businessData.times[2].start}-${info.businessData.times[2].ciri? this.$t('shop-select.next_day'):''}${info.businessData.times[2].end}`
					}
				}
				return text
			},
			//
			djss() {
				this.showSearch = true
			},
			qxss() {
				this.showSearch = this.issearch = false
				this.ssobj = {
					list: [],
					isget: false,
					params: {
						keyword: '',
					}
				}
			},
			cleanKey() {
				this.ssobj.params.keyword = ''
				this.issearch = false
				this.ssobj.list = []
				this.ssobj.isget = false
			},
			confirm(e) {
				if (!this.ssobj.params.keyword) return this.util.message('请输入搜索内容', 3)
				this.ssobj.params.lat= this.dataList[0].params.lat,
				this.ssobj.params.lng= this.dataList[0].params.lng,
				this.issearch = true
				this.ssobj.list = []
				this.ssobj.isget = false
				this.getssList()
			},
			async getssList() {
				let {
					data :{list}
				} = await this.util.request({
					'url': this.api.dplb,
					data: this.ssobj.params,
				})
				this.ssobj.list = this.ssobj.list.concat(list)
				this.ssobj.isget = true
			},
			async xzssdp(e) {
				this.qxss()
				let i = this.dataList[0].list.findIndex((v, i) => v.id == v.id)
				this.selectStore(e, i)
				// this.dataList[0] = {
				// 	list: [],
				// 	isget: false,
				// 	mygd: false,
				// 	api: 'dplb',
				// 	params: {
				// 		page: 1,
				// 		size: 10,
				// 		lat: this.dataList[0].params.lat,
				// 		lng: this.dataList[0].params.lng,
				// 		cityId: this.addInfo.city.code,
				// 	}
				// }
				// this.xzdpidx = 0
				// this.getList()
			},
			bddh(v) {
				this.util.makeTel(v.mobile)
			},
			ckwz(v) {
				this.util.ckWz({
					lat: v.lat,
					lng: v.lng,
					name: v.name,
					address: v.address,
				})
			},
			// handDtshow(){
			// 	let getdtshow = uni.getStorageSync('dtshow'),
			// 	setdtshow
			// 	if(getdtshow == true){
			// 		setdtshow = false	
			// 	}else{
			// 		setdtshow = true	
			// 	}
			// 	this.dtshow = setdtshow
			// 	uni.setStorageSync('dtshow', setdtshow)
			// },
		},
	}
</script>
<style scoped lang="scss">
	.stssk {
		height: 68rpx;
		border-radius: 68rpx;
	}

	.bt-e {
		border-bottom: 1px solid #EAEAEA;
	}

	.map {
		width: 750rpx;
		height: 490rpx;
	}

	.dpic {
		padding: 40rpx 0;

		.dpicrt {
			width: 28%;

			.dtanc {
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;

				.cq {
					top: -40rpx;
					left: 8rpx;
					padding: 2rpx 6rpx;
					border-radius: 4rpx;
				}
			}
		}
	}

	.yddsj {
		right: 0;
		bottom: 0;
		width: 0;
		height: 0;
		border-bottom: 56rpx solid #fff;
		border-left: 56rpx solid transparent;
	}

	.icgou {
		right: 8rpx;
		bottom: 6rpx;
	}

	.scl {
		height: 70rpx;
		border-radius: 70rpx;
	}

	.tbw {
		width: 500rpx;
	}

	.sjx {
		bottom: -17rpx;
		left: 16rpx;
		width: 0;
		height: 0;
		border-width: 10rpx;
		border-style: solid;
		border-color: #eee transparent transparent transparent;
	}

	.xxz {
		color: #999;
	}
	.fCol{
		 // #ifdef MP-WEIXIN
		display: flex;
		flex-direction: column;
		 // #endif
	}
</style>