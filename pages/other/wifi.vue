<template>
	<view class="content" v-if="sjxx && sjxx.id">
		<view class="cbg" :style="{background:tColor}">
			<view class="flex p2 cf" v-if="storeInfo">
				<view class="f-g-0 f-y-c"><text class="iconfont icon-im_dingwei f32 mr10 cf mt5"></text></view>
				<view class="f-g-1 t-o-e f-y-c" @click="goSelect">
					<text class="f30">{{storeInfo.name}}</text>
					<text class="iconfont icon-youjiantou f32 mr10 cf mt5"></text>
				</view>
			</view>
			<view class="p2 f-bt mt20">
				<view class="f-g-0 yuan bsf mr20 f-c" :style="{background:tColor}"><text
						class="iconfont icon-wifi1 f60 cf"></text></view>
				<view class="f-g-1 cf">
					<view class="f30 wei" v-if="connectedWifi && connectedWifi.name">
						{{$t("wifi.wifi_name")}}：{{connectedWifi.name}}
					</view>
					<view class="f30 wei" v-else>{{$t("wifi.no_wifi_info")}}</view>
					<view class="f30 wei f-bt f-y-c" v-if="connectedWifi && connectedWifi.password">
						<view class="f-g-1">{{$t("wifi.wifi_password")}}：{{connectedWifi.password}}</view>
						<!-- <view class="f-g-0 f26 cf nowei"><text @click='fzID'>复制</text></view> -->
					</view>
					<view class="f24 cf mt20">{{$t("wifi.quick_connect")}}</view>
				</view>
			</view>
		</view>
		<view class="bf bs20 f-c-c p2 wfb">
			<view class="wf f-g-1 f-c-c">
				<text class="iconfont icon-wifi1 f60 iconWifi" :style="{color:tColor}"></text>
				<view class="f24 c0960" v-if="cWifi && cWifi.SSID" :style="{color:tColor}">
					{{$t("wifi.phone_wifi_connected")}}：{{cWifi.SSID}}
				</view>
			</view>
			<view class="f-g-1 mt20" v-if="connectedWifi && connectedWifi.name && connectedWifi.password">


				<!-- #ifdef MP-WEIXIN -->
				<button class="foot-btn bs15 f30" hover-class="btnhc" v-if="cWifi && cWifi.SSID == connectedWifi.name"
					:style="{background:tColor}">{{$t("wifi.wifi_connected")}}</button>
				<button @click="content_wf" :loading="loading" :disabled="loading" class="foot-btn bs15 f30"
					hover-class="btnhc" v-else :style="{background:tColor}">{{$t("wifi.secure_connect")}}</button>
				<!-- #endif -->
			</view>
			<view class="mt20 f24 c0960" :style="{color:tColor}">{{$t("wifi.turn_on_wifi_before_connecting")}}</view>
		</view>
		<userPrivacy ref="privacy"></userPrivacy>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import userPrivacy from "@/components/user/userPrivacy.vue";
	import utils from '@/common/utils.js'
	import {
		getDw
	} from "@/common/wechat-util.js"
	export default {
		components: {
			userPrivacy,
		},
		data() {
			return {
				loading: false,
				connectedWifi: {},
				cWifi: {},
				wifiList: [],
				storeInfo: {},
			}
		},
		async onLoad(options) {
			console.log('options', options)
			await this.getLoginInfo()
			this.getLayout()
			if (options && options.storeId) {
				this.storeId = options.storeId
			} else if ((options.q && decodeURIComponent(options.q).indexOf('storeId') > -1)) {
				let q = decodeURIComponent(options.q)
				this.storeId = utils.getUrlParams(q)['storeId']
			} else {
				await this.gDw()
			}
			this.init()
		},
		onReady() {
			var _this = this;
			// #ifdef MP-WEIXIN
			wx.getPrivacySetting({
				success: res => {
					if (res.needAuthorization) {
						_this.$refs.privacy.open(res.privacyContractName)
						return;
					}
				},
				fail: () => {},
				complete: (res) => {
					console.log(res)
				}
			})
			// #endif
		},
		async onShow() {
			if (uni.getStorageSync('rStoreInfo')) {
				this.storeInfo = uni.getStorageSync('rStoreInfo')
				this.load(this.storeInfo.id)
			}
		},
		computed: {
			...mapState(['sjxx']),
		},
		methods: {
			...mapActions(['getSjxx']),
			async gDw() {
				if (this.storeInfo && this.storeInfo.id) {
					this.storeId = this.storeInfo && this.storeInfo.id
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
					this.storeId = this.storeInfo && this.storeInfo.id
				}
			},
			goSelect() {
				uni.navigateTo({
					url: '/pages/shop/select/index?page=recharge'
				})
			},
			async load(sid) {
				if (sid) {
					uni.removeStorageSync('rStoreInfo')
				}
				this.storeId = sid
				this.init()
			},
			async init() {
				await this.getSjxx({
					storeId: this.storeId,
					lat: this.lc && this.lc.latitude || '',
					lng: this.lc && this.lc.longitude || '',
				}).then(() => {

					// #ifdef MP-WEIXIN
					this.getStartWifi()
					// #endif
					this.storeInfo = this.sjxx
					if (this.sjxx && this.sjxx.storeWifiSetting && this.sjxx.storeWifiSetting.name && this.sjxx
						.storeWifiSetting.password) {
						this.connectedWifi = this.sjxx.storeWifiSetting
					} else {
						this.connectedWifi = {}
						this.util.message(this.$t("wifi.no_wifi_info"), 3, 2000)
					}
				})
			},
			getStartWifi() {
				let that = this
				uni.startWifi({
					success: (res) => {
						console.log("startWifi", res)
						that.getConnectedWifi()
					},
					fail: (error) => {
						console.log(error)
						that.msgCode(error)
					},
				})
			},
			getConnectedWifi() {
				let that = this
				uni.getConnectedWifi({
					success: (res) => {
						console.log("getConnectedWifi", res)
						if (res && res.wifi && res.wifi.SSID) {
							that.cWifi = res.wifi
						}
					},
					fail: (error) => {
						console.log(error)
						// that.msgCode(error)
					},
				})
			},
			// getWifiList() {
			// 	let that = this
			// 	uni.getWifiList({
			// 		success: (ress) => {
			// 			console.log("getWifilist==>", ress)
			// 			uni.onGetWifiList((resss) =>{
			// 				console.log("onGetWifiList==>", resss)
			// 				that.wifiList = resss ? resss : []
			// 			})
			// 		},
			// 		fail: (errors) => {
			// 			console.error('获取WiFi列表失败:', errors)
			// 		}
			// 	})
			// },
			content_wf() {
				let that = this
				console.log(that);
				uni.getSystemInfo({
					success: (res) => {
						let system = ''
						console.log("当前手机型号", res)
						if (res.platform == 'android') {
							system = parseInt(res.platform.substr(8))
						}
						if (res.platform == 'ios') {
							system = parseInt(res.platform.substr(4))
						}
						if (res.platform == 'android' && system < 6) {
							uni.showToast({
								title: this.$t("wifi.mobile_version_not_supported"),
								icon: 'none'
							})
							return
						}
						if (res.platform == 'ios' && system < 11.2) {
							uni.showToast({
								title: this.$t("wifi.mobile_version_not_supported"),
								icon: 'none'
							})
							return
						}
						that.start_wifi()
					}
				})
			},
			start_wifi() {
				let that = this
				uni.startWifi({
					success: (res) => {
						console.log("startWifi", res)
						that.connected()
					},
					fail: (error) => {
						console.log("error", error)
						that.msgCode(error)
					}
				})
			},

			connected() {
				let that = this
				that.loading = true
				uni.connectWifi({
					SSID: that.connectedWifi && that.connectedWifi.name,
					password: that.connectedWifi && that.connectedWifi.password,
					success: (res) => {
						console.log(res);
						this.util.message(this.$t("wifi.connection_successful"), 1, 2000)
						that.loading = false
						that.getConnectedWifi()
					},
					fail: (error) => {
						console.log('connectWifi', error)
						that.msgCode(error)
						that.loading = false
					}
				})
			},
			msgCode(e) {
				if (e && e.errCode == 12001) {
					this.util.message(this.$t("wifi.system_not_supported"), 3, 2000)
				} else if (e && e.errCode == 12002) {
					this.util.message(this.$t("wifi.password_error"), 3, 2000)
				} else if (e && e.errCode == 12003) {
					this.util.message(this.$t("wifi.connection_timeout"), 3, 2000)
				} else if (e && e.errCode == 12004) {
					this.util.message(this.$t("wifi.repeated_connection"), 3, 2000)
				} else if (e && e.errCode == 12005) {
					this.util.message(this.$t("wifi.open_wifi"), 3, 2000)
				} else if (e && e.errCode == 12006) {
					this.util.message(this.$t("wifi.open_gps"), 3, 2000)
				} else if (e && e.errCode == 12007) {
					this.util.message(this.$t("wifi.user_denied"), 3, 2000)
				} else if (e && e.errCode == 12008) {
					this.util.message(this.$t("wifi.invalid_wifi_name"), 3, 2000)
				} else if (e && e.errCode == 12009) {
					this.util.message(this.$t("wifi.operator_denied"), 3, 2000)
				} else if (e && e.errCode == 12011) {
					this.util.message(this.$t("wifi.background_config_not_supported"), 3, 2000)
				} else if (e && e.errCode == 12013) {
					this.util.message(this.$t("wifi.expired_wifi_config"), 3, 2000)
				} else if (e && e.errCode == 12014) {
					this.util.message(this.$t("wifi.invalid_password"), 3, 2000)
				} else {
					this.util.message(`${e.errCode}${e.errMsg}`, 3, 2000)
				}
			},
			fzID() {
				let id = this.connectedWifi.password
				this.util.fz(id)
			},
		}
	}
</script>
<style scoped lang='scss'>
	.cbg {
		height: 500rpx;
	}

	.yuan {
		width: 120rpx;
		height: 120rpx;
		background: #56F06E;
		border: 2rpx solid #fff;
	}

	.wfb {
		margin: -160rpx 40rpx 0 40rpx;
		z-index: 10;
	}

	.wf {
		.iconWifi {
			font-size: 140rpx;
			color: #09C260;
		}
	}

	.c0960 {
		color: #09C260;
	}

	.foot-btn {
		background: #09C260;
		width: 500rpx;
		height: 76rpx;
		line-height: 76rpx;
		border-radius: 60rpx;
	}
</style>