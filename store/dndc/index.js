import util from '../../common/core/util.js';
import api from '../../common/api.js';

export default {
	namespaced: true,
	state: {
		smConfig: [],
		addInfo: {},
		cityInfo: {},
		latLng: {},
		fxsInfo: {},
		fxsSq: {},
	},
	mutations: {
		setSmConfig(state, data) {
			state.smConfig = data
		},
		setAddInfo(state, data) {
			state.addInfo = data
			// console.log('dndc setAddInfo', data)
		},
		setCityInfo(state, data) {
			state.cityInfo = data
			// console.log('dndc setCityInfo', data)
		},
		setLatLng(state, data) {
			state.latLng = data
			// console.log('dndc setLatLng', data)
		},
		setFsxInfo(state, data) {
			state.fxsInfo = data
		},
		setFsxSq(state, data) {
			state.fxsSq = data
		},
	},
	actions: {
		async getAddInfo({
			commit,
			state
		}, params) {
			if (!state.addInfo.maddress && !state.addInfo.city) {
				let add = {
					maddress: '',
					city: '',
				}
				if (!params.maddress) {
					let {
						data
					} = await util.request({
						'url': api.zbtdz,
						data: {
							lat: params.latitude,
							lng: params.longitude,
						}
					})
					add.maddress = params.address || data.formatted_addresses && data
						.formatted_addresses.recommend ||
						data.address
					add.city = data.region
				} else {
					add.maddress = params.address
					add.city = params.city;
				}
				commit('setAddInfo', add)
			} else {
				if (params.address || params.city) {
					let add = {
						maddress: '',
						city: '',
					}
					add.maddress = params.address
					add.city = params.city;
					commit('setAddInfo', add)
				}
			}
		},
		async getSmConfig({
			commit,
			state
		}, params) {
			if (!state.smConfig.length) {
				let res = await util.request({
					'url': api.wmmbxx,
					mask: 1,
				})
				res && commit('setSmConfig', res.data)
				return
			}
		},
		async getFxzx({
			commit,
			state
		}, params) {
			let res = await util.request({
				'url': api.cMap,
				method: 'POST',
				ct: 1,
				data: {
					idents: ['distributor']
				},
			})
			if (res && res.data) {
				// res.data.createdAt = res.data.createdAt.substring(0, 16)
				commit('setFsxInfo', res.data.distributor)
			} else {
				setTimeout(() => {
					params.that.go({
						t: 5,
						url: '/pages/index/my-index'
					})
				}, 1500)
			}
		},
		async getFxSq({
			commit,
			state
		}, params) {
			let res = await util.request({
				'url': api.distributionAD,
				mask: 1,
			})
			if (res) {
				commit('setFsxSq', res.data)
			} else {
				setTimeout(() => {
					params.that.go({
						t: 5,
						url: '/pages/index/my-index'
					})
				}, 1500)
			}
		},
	}
}