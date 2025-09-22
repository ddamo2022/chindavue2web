import Vue from 'vue'
import Vuex from 'vuex'
import util from '../common/core/util';
import api from '../common/api';
import utils from '@/common/utils.js'
import {
	aliAuthCode
} from "@/common/wechat-util.js"
Vue.use(Vuex)

import dndc from './dndc'

const store = new Vuex.Store({
	state: {
		system: {
			custom: {
				live: '',
				takeOut: '',
				integral: '',
				balance: '',
				informationTitle: '',
				hbfh: '',
				hbmc: '',
				inStore: '',
			},
			powerList: {},
		},
		user: {},
		mobile: uni.getStorageSync('userTel'),
		token: '',
		isLogin: false,
		noLogin: false,
		isIpx: false,
		scarList: {
			out: {
				data: []
			},
			fast: {
				data: []
			},
			ins: {
				data: []
			},
		},
		sjxx: {},
		sjgood: {},
		ingood: {},
		layout: {
			index: {},
			user: {},
			nav: {},
			copywriting: {},
			defaultImg: {},
			firing: {},
			loadingImg: {},
			style: {},
			copyright: {},
			notice: [],
			orderCollect: {},
			goodStyle: {},
		},
		config: {
			hasKp: false,
			storeBasicSetting: {},
			orderSetting: {},
			integralSettingcustomTxt: '',
			growthSettingcustomTxt: '',
			zfbSettingapp_id: '',
			basicSetting: {},
			storageVal: {},
			vipset: {},
			storageset: {},
			integralSetting: {},
			personPayOrderConfig: {},
			inStoreOrderConfig: {},
			birthdayGift: {},
		},
		adList: {
			index: {},
			orderInfo: {},
			user: {},
		},
	},
	mutations: {
		setUser(state, data) {
			data.integral = data.integral || 0
			data.balance = data.balance || 0
			state.user = data
			//state.isLogin = true
			state.isLogin = data.id ? true : false
			//alert(state.isLogin)
			uni.setStorageSync('userId', data.id)
			// console.log('setUsersetUsersetUser', data, state.isLogin)
		},
		setNoLogin(state, data) {
			state.noLogin = true
		},
		setMobile(state, data) {
			uni.setStorageSync('userTel', data)
			state.mobile = data
		},
		setToken(state, data) {
			// console.log('token', data)
			uni.setStorageSync('token', data)
			// // #ifdef H5
			// window.sessionStorage.setItem('token', data)
			// // #endif
			state.token = data
		},
		setSystem(state, data) {
			state.system = data
		},
		setScarList(state, data) {
			// console.log('setScarList', data, state.scarList)
			if (!data.key) {
				state.scarList['out'] = data.data
			} else {
				state.scarList[data.key] = data.data
			}
		},
		setInCar(state, data) {
			state.scarList['ins'] = data.data
		},
		setSjxx(state, data) {
			state.sjxx = data
			// uni.setStorageSync('storeId', data.id)
		},
		setGoods(state, {
			params,
			data
		}) {
			if (params.dType == "ins") {
				state.ingood = data
			} else {
				state.sjgood = data
			}
		},
		setLayout(state, {
			params,
			data
		}) {
			state.layout[params] = data
			// console.log(params,data)
		},
		setConfig(state, {
			params,
			data
		}) {
			state.config[params] = data
		},
		setadList(state, {
			params,
			data
		}) {
			state.adList[params] = data
		},
	},
	getters: {

	},
	actions: {
		async getSystem({
			commit,
			state
		}, params = {}) {
			// console.log('state', state, params)
			if (!state.system.color || params.get) {
				let res = {};
				state.isIpx = util.getSb().model.search('iPhone X') != -1 || util.getSb().model.search(
						'iPhone 1') != -1 || util
					.getSb().model.search('iPhone1') != -1
			}
		},
		async checkBindTel({
			commit,
			rootState
		}, params) {
			return new Promise((reslove, reject) => {
				if (!rootState.user.userTel) {
					uni.showModal({
						title: '提示',
						content: '请先绑定手机号',
						confirmText: '前往绑定',
						cancelText: '暂不绑定',
						success: res => {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/my/login/index',
								});
							}
						}
					});
				} else {
					reslove()
				}
			})
		},
		async getLoginInfo({
			commit,
			state
		}, params = {}) {
			if (state.user.id) {
				return
			} else {
				return await new Promise(async (resolve, reject) => {
					let siteInfo = getApp().globalData.siteInfo
					// #ifndef H5
					// util.showLoading()
					uni.login({
						success: async (lres) => {
							let res = await util.request({
								'url': api.login,
								method: 'post',
								// mask: 1,
								data: {
									code: lres.code
								}
							})
							if (res.code == 200) {
								if (res?.data?.token) {
									if (res.data.session_key) {
										getApp().globalData.session_key = res.data
											.session_key
									}
									commit('setToken', res.data.token)
									if (res.data && res.data.userInfo) {
										commit('setUser', res.data.userInfo)
										resolve()
									} else {
										let resu = await util.request({
											'url': api.profix,
											data: {}
										})
										commit('setUser', resu.data)
										resolve()
									}
								}
								// if (res?.data?.openid) {
								// 	getApp().globalData.session_key = res.data
								// 		.session_key
								// 	getApp().globalData.openid = res.data
								// 		.openid
								// 	getApp().globalData.unionid = res.data
								// 		.unionid
								// 	console.log('游客', res.data)
								// 	if (res && res.data) {
								// 		let openid = res.data.openid,
								// 			unionid = res.data.unionid ? res.data
								// 			.unionid : ''
								// 		let rest = await util.request({
								// 			'url': api.wrg,
								// 			method: 'post',
								// 			data: {
								// 				avatar: '',
								// 				nickname: `用户_${util.sj()}`,
								// 				mobile: '',
								// 				openid,
								// 				unionid,
								// 			}
								// 		}).then(async (rest) => {
								// 			console.log('rest', rest)
								// 			resolve()
								// 			rest.data && commit(
								// 				'setToken', rest
								// 				.data.token)
								// 			rest.data && commit(
								// 				'setUser', rest.data
								// 				.userInfo)
								// 		}).catch((e) => {
								// 			console.log(e)
								// 		})
								// 	} else {
								// 		uni.showModal({
								// 			title: '温馨提示',
								// 			content: '请重新进入小程序',
								// 			showCancel: false
								// 		});
								// 		return;
								// 	}
								// } else {
								// 	// console.log('已登录', res)
								// }
							} else {
								reject()
								util.modal('小程序秘钥配置')
							}
						},
						fail: (err) => {
							console.log('失败', err)
							if (err.errMsg.indexOf('permission') > -1) {
								resolve()
							}
							reject(err)
						}
					})
					// #endif
					// #ifdef H5
					if (api.platform == 'wechat' && uni.getStorageSync('token')) {
						console.log('%c api.platform ',
							'color: white; background-color: #ff55ff', api.platform, uni
							.getStorageSync('token'))
						if (!getApp().globalData.siteInfo.isDev) {
							let link = window.location.href,
								params = utils.getUrlParams(link)
							console.log('%c params ', 'color: white; background-color: #ff0000',
								params)
							// if(!uni.getStorageSync('token')){
							// 	window.location.href = `${getApp().globalData.siteInfo.siteroot}/wechat/${params.uniacid}?refererUrl=${btoa(window.location.href)}`
							// }
							if (uni.getStorageSync('token')) {
								let {
									data
								} = await util.request({
									url: api.profix
								})
								data && commit('setUser', data)
								resolve()
							}

							return
							if (params.code && uni.getStorageSync('bdCode')) {
								window.sessionStorage.setItem('wcode', params.code)
							}
							if (!state.user.id && uni.getStorageSync('token')) {
								let {
									data
								} = await util.request({
									'url': api.profix
								})
								data && commit('setUser', data)
								resolve()
							}
							if (process.env.NODE_ENV === 'development' && params.token) {
								commit('setToken', params.token)
								let {
									data
								} = await util.request({
									'url': api.profix
								})
								data && commit('setUser', data)
								resolve()
							}
							if (uni.getStorageSync('token')) return;
							if (state.user && state.user.unionid && !uni.getStorageSync(
									'token')) return;
							if (params.code && window.sessionStorage.getItem('wcode')) {
								console.log(params, link)
								let rest = await util.request({
									'url': api.wcl,
									method: 'post',
									data: {
										code: window.sessionStorage.getItem('wcode') ||
											params.code
									}
								}).then(async (rest) => {
									if (rest.data.token) {
										commit('setToken', rest.data.token)
										// util.message('登录成功', 1, 1000)
										commit('setUser', rest.data.userInfo)
										resolve()
										uni.removeStorageSync('bdCode')
									} else if (!rest.data.id && rest.data.openid) {
										commit('setUser', rest.data)
										uni.removeStorageSync('bdCode')
										// uni.navigateTo({
										// 	url: '/pages/other/register',
										// });
										resolve()
									} else {
										util.showLoading()
										let {
											data
										} = await util.request({
											'url': api.wau,
											mask: 1,
											data: {
												refererUrl: link
											}
										})
										// window.location.href = `${data.split('&')[0]}`
										window.location.href = data;
									}
								}).catch((error) => {
									console.log('error', error)
									this.loading = false
								})
							}
						}
					} else if (api.platform == 'alih5') {
						console.log('%c api.platform ',
							'color: white; background-color: #ff55ff', api.platform, uni
							.getStorageSync('token'))
						let ress = await util.request({
							'url': api.cMap,
							method: 'POST',
							ct: 1,
							data: {
								idents: ['zfbSetting.app_id']
							},
						})
						if (ress) {
							commit('setConfig', {
								params: 'zfbSettingapp_id',
								data: ress.data['zfbSetting.app_id']
							})
							let code = await aliAuthCode()
							console.log('code', code)
							let res = await util.request({
								'url': api.login,
								method: 'post',
								// mask: 1,
								data: {
									code: code.authCode
								}
							})
							if (res.code == 200) {
								if (res?.data?.token) {
									commit('setToken', res.data.token)
									if (res.data && res.data.userInfo) {
										commit('setUser', res.data.userInfo)
										resolve()
									} else {
										let resu = await util.request({
											'url': api.profix,
											data: {}
										})
										commit('setUser', resu.data)
										resolve()
									}
								}
							} else {
								reject()
								util.modal('支付宝秘钥配置')
							}
						}
					} else {
						console.log('%c api.platform ',
							'color: white; background-color: #ff55ff', api.platform)
						// commit('setUser', {
						// 	id: "1",
						// 	userId: '1',
						// 	openId: "123",
						// 	userName: "测试",
						// 	userTel: "13823515936",
						// 	portrait: ""
						// })

						// commit('setToken', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RhbW8uOTlzYWFzLmNsb3VkL2NoYW5uZWxBcGkvd2VjaGF0L2xvZ2luIiwiaWF0IjoxNzExNDQ5MTQ4LCJleHAiOjE3MTI3NDUxNDgsIm5iZiI6MTcxMTQ0OTE0OCwianRpIjoiMFhNMWd5RWMwRDFqQWlQTCIsInN1YiI6MjQsInBydiI6Ijg2NjVhZTk3NzVjZjI2ZjZiOGU0OTZmODZmYTUzNmQ2OGRkNzE4MTgifQ.ySZfG1vQ5OYiSxXN4iSPGUGEy3MNLGyJQ_AwzjJ8hF8')
						// commit('setUser', {
						// 	id: 4568,
						// 	nickname: "从前慢",
						// 	mobile: "13823515936",
						// })
						//resolve()
						if (api.platform == 'h5') {
							var token = await uni.getStorageSync('token')
							if (token) {
								let {
									data
								} = await util.request({
									url: api.profix
								})
								console.log(data)
								if (data) {
									commit('setUser', data)
								} else {
									commit('setToken', "");
								}
								resolve()
							}
							resolve()
							// return uni.showModal({
							// 	title: '提示',
							// 	content: '请在微信内打开',
							// 	showCancel: false
							// })
						}
					}
					// #endif
				})
			}

		},
		async refreshUser({
			commit,
			state
		}, params) {
			// console.log(params)
			// return
			let {
				data
			} = await util.request({
				'url': params.get ? api.profix : api.xgyh,
				method: params.get ? 'GET' : 'POST',
				mask: params.nomask ? 0 : 1,
				data: params
			})
			console.log('533', data)
			if (data && data.token) {
				commit('setToken', data.token);
				commit('setUser', data.userInfo)
			}
			if (params.now) {
				data && commit('setUser', data)

			} else {
				setTimeout(() => {
					data && commit('setUser', data)
				}, 200);
			}
			return data
		},
		async loginBind({
			commit,
			state
		}, params) {
			let res = await util.request({
				'url': api.bind,
				method: 'POST',
				mask: 1,
				data: params
			})
			res && commit('setUser', res.data)
			return res
		},
		async clearMycar({
			dispatch,
			commit,
			state
		}, params) {
			let res = await util.request({
				'url': api.qkgwc,
				method: 'DELETE',
				mask: 1,
				data: params
			})
			// if (res) {
			// 	dispatch('getMycar', {
			// 		// key: params.key,
			// 		storeId: params.storeId,
			// 	})
			// }
			res && commit('setScarList', {
				key: params.key,
				data: {
					goodsList: [],
					goodsCount: 0
				}
			})
		},
		async getMycar({
			commit,
			state
		}, params) {
			let res = await util.request({
				'url': api.wdgwc,
				mask: params.mask,
				data: params
			})
			res && commit('setScarList', {
				key: params.key,
				data: res.data
			})
			// console.log('index.js,getMycar', params, state.scarList)
		},
		async supdCar({
			dispatch,
			commit,
			state
		}, params) {
			let res = await util.request({
				'url': api.xggwc,
				ct: 1,
				method: 'POST',
				// mask: 1,
				data: params
			})
			// console.log('index.js,SaveShopCar', params, res)
			if (res) {
				commit('setScarList', {
					key: params.key,
					data: res.data.cart
				})
				return +res.data.count
				// dispatch('getMycar', {
				// 	// key: params.key,
				// 	// userId: params.userId,
				// 	// item: params.item,
				// 	storeId: params.storeId,
				// 	lat: params.lat,
				// 	lng: params.lng,
				// })
				// console.log(this)
			}
			// console.log('index.js,supdCar', params)
		},
		async getInCar({
			commit,
			state
		}, params) {
			let res = await util.request({
				'url': api.ingwc,
				mask: params.mask,
				data: params
			})
			res && commit('setInCar', {
				key: params.key,
				data: res.data
			})
		},
		async supInCar({
			dispatch,
			commit,
			state
		}, params) {
			let res = await util.request({
				'url': api.ingwc,
				ct: 1,
				method: 'POST',
				data: params
			})
			if (res) {
				commit('setInCar', {
					data: res.data.cart
				})
				return +res.data.count
			}
		},
		async clearIncar({
			dispatch,
			commit,
			state
		}, params) {
			let res = await util.request({
				'url': api.inqkgwc,
				method: 'DELETE',
				mask: 1,
				data: params
			})
			res && commit('setInCar', {
				data: {
					goodsList: [],
					goodsCount: 0
				}
			})
		},
		async getSjxx({
			commit,
			state
		}, params) {
			let {
				data
			} = await util.request({
				'url': `${api.dplb}/${params.storeId}`,
				data: {
					lat: params.lat,
					lng: params.lng,
				}
			})
			commit('setSjxx', data)
			return data
		},

		async getGoods({
			commit,
			state
		}, params) {
			let {
				data
			} = await util.request({
				'url': params.dType == 'ins' ? api.ingoods : api.goods,
				data: params
			})
			commit('setGoods', {
				data,
				params,
			})
			return data
		},
		async getLayout({
			commit,
			state
		}, params = {
			page: 'index',
			id: '1',
		}) {
			//alert('开始getLayout0')
			state.isIpx = util.getSb().model.search('iPhone X') != -1 || util.getSb().model.search(
				'iPhone 1') != -1 || util.getSb().model.search('iPhone1') != -1
			for (let k in state.layout) {
				if (state.layout[k].isget) {
					return
				}
			}
			//alert('开始getLayout1')
			let res = await util.request({
				'url': api.layout,
				data: params
			})
			// console.timeEnd('getLayout')
			if (res) {
				for (let k in res.data) {
					commit('setLayout', {
						params: k,
						data: {
							isget: true,
							...res.data[k],
						}
					})
				}
			}
		},
		async getAd({
			commit,
			state
		}, params) {
			for (let k in state.adList) {
				if (state.adList[k].isget && !params) {
					return
				}
			}
			let res = await util.request({
				'url': api.gglb,
				data: params
			})
			if (res) {
				for (let k in res.data) {
					commit('setadList', {
						params: k,
						data: {
							isget: true,
							...res.data[k],
						}
					})
				}
			}
		},
		async getConfig({
			commit,
			state
		}, params) {
			if (params.ident) {
				for (let k of params.ident) {
					let nkey = k.replace(/\./g, "")
					if (state.config[nkey].isget) {
						return
					}
				}
				let res = await util.request({
					'url': api.cMap,
					method: 'POST',
					ct: 1,
					data: {
						idents: params.ident
					},
				})
				if (res) {
					for (let k of params.ident) {
						if (k.indexOf('.') > -1) {
							let nkey = k.replace(/\./g, "")
							commit('setConfig', {
								params: nkey,
								data: res.data[k]
							})
						} else {
							commit('setConfig', {
								params: k,
								data: {
									isget: true,
									...res.data[k]
								}
							})
						}
					}
				}
			} else {
				commit('setConfig', {
					params: params.key,
					data: params.data,
				})
			}
		},
		async checkLineCode({
			commit,
			state
		}, linecode) {
			if (state.user.id) {
				return;
			}
			console.log('linecode', linecode)
			let {
				data
			} = await util.request({
				'url': api.checkLineCode,
				method: 'POST',
				data: {
					code: linecode
				},
			})
			console.log(data)
			const redirectPath = uni.getStorageSync('redirectPath') || '/';
			console.log(redirectPath)
			if (data && data.token) {
				commit('setToken', data.token)
				commit('setUser', data.userInfo)
				uni.reLaunch({
					url: redirectPath
				});
			}
		},
	},
	modules: {
		dndc,
	}
})

export default store