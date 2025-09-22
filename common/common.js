import {
	mapActions,
	mapState,
	mapMutations,
	mapGetters
} from "vuex";
import {
	getDw,
	scanCode,
	configWX
} from "@/common/wechat-util.js"
const Plugin = Object.create(null);
Plugin.install = function(Vue, options) {
	Vue.mixin({
		data() {
			return {}
		},
		computed: {
			...mapState({
				user: state => state.user,
				uId: state => state.user.id || '',
				isVip: state => state.user.level > 0,
				isLogin: state => state.isLogin,
				noLogin: state => state.noLogin,
				tColor: state => state.layout.style &&  state.layout.style.color && state.layout.style.color.btnColor || '#B11E23',
				fontColor: state => state.layout.style &&  state.layout.style.color && state.layout.style.color.fontColor || '#fff',
				url: state => state.system.attachurl,
				system: state => state.system,
				isIpx: state => state.isIpx,
				sl: state => state.system.custom.hbfh,
				dw: state => state.system.custom.hbmc,
				basicSetting: state => state.config.basicSetting,
			}),
			...mapState('dndc', ['smConfig', 'fxsInfo', 'fxsSq']),
			...mapState(['sjxx']),
			onImgurl() {
				return getApp().globalData.onImgurl
			},
		},
		methods: {
			...mapActions(["getSystem", "getLoginInfo", "refreshUser", "getLayout", "getAd"]),
			...mapActions('dndc', ['getSmConfig', 'getAddInfo','getFxzx','getFxSq']),
			...mapMutations('dndc', ["setCityInfo", 'setAddInfo']),
			go(option) {
				switch (option.t) {
					case undefined:
					case 1:
						uni.navigateTo({
							url: option.url
						})
						break;
					case 2:
						uni.redirectTo({
							url: option.url
						})
						break;
					case 6:
						uni.switchTab({
							url: option.url
						})
						break;
					case 3:
						uni.reLaunch({
							url: option.url
						})
						break;
					case 4:
						uni.navigateBack({
							delta: 1
						})
						break;
					case 5:
						if (getCurrentPages().length > 1) {
							uni.navigateBack({
								delta: 1
							})
						} else {
							uni.reLaunch({
								url: option.url
							})
						}
						break;
				}
			},
			getConfigWX() {
				return configWX()
			},
			async goUrl(option, obj) {
				let url, type;
				if (option) {
					type = option.t || '1'
					switch (option.params) {
						case 'platform':
							if (option.name.id == 'distribution') {
								await this.getFxzx()
								if(!this.fxsInfo.switch){
									this.util.message('未开启分销商功能', 3)
									return
								}
								await this.getFxSq()
								if (this.fxsSq) {
									let i = this.fxsSq.state
									if (i != 1) {
										this.util.message(this.fxsSq.stateFormat, 3)
									} else if (i == 1) {
										this.go({
											url: '/pages/order/distribution/fxzx'
										})
									}
								} else {
									this.go({
										url: '/pages/order/distribution/sqfx'
									})
								}
								return
							}
							url = this.changeUrl(option)
							if (!url) {
								return
							}
							type = '1'
							if (url.indexOf('/index/') != -1) {
								type = '4'
							}
							// console.log(this.changeUrl(option))
							break;
						case 'link':
							type = '1'
							if (option.category.indexOf('http') > -1) {
								url = '/pages/other/web-view?src=' + encodeURIComponent(JSON.stringify(
									option.category.substring(0, 1) ==
									'h' ? option.category : option.category.substring(7)))
							} else {
								url = option.category
							}
							break;
						case 'appjump':
							url = option.name.path;
							type = '5'
							break;
						case 'call':
							this.util.makeTel(option.param.phone)
							return;
						case 'product':
							url =
								`/pages/shop/out/goods-dl?gid=${option.name.id}&storeId=${this.$store.state.config.storeInfo.id}&page=index`
							break;
						case 'productCategory':
							url = '/pages/index/goods'
							type = '4'
							break;
						case 'customPage':
							url = '/pages/order/other/custom?pid=' + option.name.id
							break;
					}
					if (type == '1') {
						if(url=='/pages/shop/in/dmf'){
							if(this.sjxx && this.sjxx.id){
								uni.navigateTo({
									url: `/pages/shop/in/dmf?storeId=${ this.sjxx.id}`,
								})
							}else{
								uni.navigateTo({
									url: '/pages/shop/select/index?page=cashier'
								})
							}
						}else if(url=='/pages/shop/in/goods'){
							if(this.sjxx && this.sjxx.id){
								uni.navigateTo({
									url: `/pages/shop/in/goods?diningType=6&storeId=${ this.sjxx.id}`,
								})
							}else{
								uni.navigateTo({
									url: '/pages/shop/select/index?page=fastOrder'
								})
							}
						}else{
							uni.navigateTo({
								url: url,
							})
						}
					} else if (type == '4') {
						uni.switchTab({
							url: url,
						})
						if (option.name.id == 'takeOutFood' || option.name.id == 'TakeFood') {
							uni.setStorageSync('xdtype', option.name.id == 'takeOutFood' ? 1 : 2)
						}
					} else if (type == '2') {
						uni.redirectTo({
							url: url,
						})
					} else if (type == '3') {
						uni.reLaunch({
							url: url,
						})
					} else if (type == '5') {
						uni.navigateToMiniProgram({
							appId: option.name.appId,
							path: option.name.path,
							complete(res) {
								// console.log(res)
							}
						})
					}
				} else {
					// this.util.message('跳转路径无效', 3)
				}
				if (process.env.NODE_ENV === 'development') {
					console.log(option, url, type)
				}
			},
			changeUrl(option) {
				// console.log(option)
				let url = ''
				if (option.params == 'platform') {
					switch (option.name.id) {
						case 'index':
							url = '/pages/index/index'
							break;
						case 'goods':
						case 'TakeFood':
						case 'takeOutFood':
							url = '/pages/index/goods'
							break;
						case 'myOrder':
							url = '/pages/index/order-index'
							break;
						case 'member':
							url = '/pages/index/my-index'
							break;
						case 'myAddress':
							url = '/pages/my/addres/addresses'
							break;
						case 'contactCustomer':
							url = '/pages/my/other/zkf'
							break;
						case 'conceal':
							url = `/pages/my/other/gywm?t='协议政策'&p=1`
							break;
						case 'aboutUs':
							url = '/pages/my/other/gywmtwo'
							break;
						case 'helpCenter':
							url = '/pages/my/other/bzzx'
							break;
						case 'couponCenter':
							if(option.value && option.value.id){
								url = `/pages/other/coupon/coupondl?couponId=${option.value.id}`
							}else{
								url = '/pages/other/coupon/center'
							}
							break;
						case 'rollPackage':
							if(option.value && option.value.id){
								url = `/pages/other/rollPackage/rolldl?id=${option.value.id}`
							}
							break;
						case 'myCoupon':
							url = '/pages/other/coupon/couponList'
							break;
						case 'giftCard':
							url = '/pages/other/giftCard/cardList'
							break;
						case 'balanceRecharge':
							url = '/pages/other/recharge/index'
							break;
						case 'signIndex':
							url = '/pages/my/signin/index'
							break;
						case 'integralShop':
							url = '/pages/my/integral/shop-index'
							break;
						case 'officialLink':
							url = '/pages/other/web-view?src=' + encodeURIComponent(JSON.stringify(this.basicSetting.officialLink))
							break;
						case 'navigation':
							url = '/pages/shop/select/index?page=index'
							// url = `/pages/shop/select/index?page=index&storeId=${this.$store.state.config.storeInfo.id?this.$store.state.config.storeInfo.id:''}`
							break;
						case 'cardIndex':
							url = '/pages/order/vip/wkk'
							break;
						case 'shopSignUp':
							url =
								`/pages/other/mall/mbaoming?storeId=${this.$store.state.config.storeInfo.id}`
							break;
						case 'shopOrder':
							url = `/pages/other/mall/morder-index`
							break;
						case 'vipCode':
							url = `/pages/my/user/mr-code`
							break;
						case 'setPoint':
							url = `/pages/other/setPoint/pointdl`
							break;
						case 'exchange':
							url = `/pages/other/coupon/dhm`
							break;
						case 'cashier':
							url = '/pages/shop/in/dmf'
							break;
						case 'fastOrder':
							url = `/pages/shop/in/goods`
							break;
						case 'queuing':
							url = '/pages/my/lineup/pdqh'
							break;
						case 'reserve':
							url = '/pages/other/reserve/index'
							break;
						case 'oldWithNew':
							url = '/pages/order/invitation/yqyl'
							break;
						case 'wifi':
							url = '/pages/other/wifi'
							break;
						case 'pData':
							url = '/pages/other/chooseAvatar'
							break;
						case 'vipEquity':
							url = '/pages/my/vip/wkk'
							break;
						case 'pwCoupon':
							url = '/pages/other/pwCoupon/index'
							break;
						case 'drinks':
							url = '/pages/order/storage/list'
							break;
						case 'payVip':
							url = '/pages/other/payVip/index'
							break;
						case 'scanOrder':
							scanCode(this)
							return;
							
					}
				}
				return url
			},
			requestSM(type) {
				return new Promise(async (resolve, reject) => {
					// #ifdef  MP-WEIXIN
					await this.getSmConfig()
					var tarr = []
					if(this.smConfig && type){
						this.smConfig.forEach((v, i) => {
							if(type.includes(v.type)){
								tarr.push(v.tempId)
							}
						})
					}
					if(!tarr.length){
						resolve()
						return
					}
					uni.requestSubscribeMessage({
						tmplIds: tarr,
						complete: (res) => {
							if (res.errMsg == 'requestSubscribeMessage:ok') {
								if (JSON.stringify(res).indexOf('reject') > -1) {
									reject()
								} else {
									resolve()
								}
							} else {
								resolve()
							}
							// console.log(res, JSON.stringify(res).indexOf('reject'))
						}
					})
					// #endif
					// #ifdef MP-ALIPAY
					resolve()
					return
					// await this.getSmConfig()
					requestSubscribeMessage({
						entityIds: this.smConfig[type],
						callback: res => {
							console.log('订阅回调', res);
							if (res.success) {
								const successIds = this.smConfig[type]
									.filter(i => res[i.entityId] === 'accept')
									.map(i => i.entityId);
								resolve()
							} else {
								switch (res.errorCode) {
									case 11: {
										my.call('toast', {
											content: '用户未订阅关闭弹窗',
										});
										reject()
										break;
									}
									default: {
										my.call('toast', {
											content: `ErrorCode: ${res.errorCode}, ErrorMsg: ${res.errorMessage}`,
										});
										resolve()
										break;
									}
								}
							}
						},
					});
					// #endif
					// #ifndef  MP-WEIXIN || MP-ALIPAY
					resolve()
					// #endif	
				});
			},
			getSjgd(v) {
				return parseInt((v * 2 * this.util.getSb().rate)) //375px/750rpx=h/(拖拽式400px*2)
			},
			addFwjl(obj) {
				this.util.request({
					'url': this.api.fwjl,
					method: 'POST',
					data: {
						storeId: obj.storeId,
						moduleName: obj.origin,
					}
				})
			},
			async qkdw() {
				getApp().globalData.gdlocation = null
				this.setAddInfo(null)
				this.setCityInfo({})
			},
			// async getLocInfo() {
			// 	let lc = await getDw({
			// 		t: 0
			// 	})
			// 	await this.getAddInfo(lc)
			// },
			getImgS(src) {
				return src ? src.indexOf('http') > -1 ? src : this.url + src : ''
			},
			async checkLogin() {
				if (!this.isLogin) {
					try {
						const currentPage = getCurrentPages().pop();
						const currentPath =
							`/${currentPage.route}${currentPage.options ? '?' + Object.keys(currentPage.options).map(key => `${key}=${currentPage.options[key]}`).join('&') : ''}`;
						console.log(currentPath)
						uni.setStorageSync('redirectPath', currentPath);
						// await this.util.modal('请先进行登录');
						this.go({
							url: '/pages/other/login'
						})
					} catch (e) {
						return false
					}
				} else {
					return true
				}
			}
		}
	})
}
export default Plugin;
