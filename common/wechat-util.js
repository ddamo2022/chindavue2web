import util from '@/common/core/util'
import api from '@/common/api';
// import wx from "@/static/util-js/jweixin-1.4.0.js";
// let wx = require('@/static/util-js/index.js')
// #ifdef  H5
import wx from 'weixin-js-sdk'
import ap from '@/common/ali-js-sdk'
// #endif
import store from '@/store'
import siteInfo from '@/common/siteinfo'
export const jsApiList = [
	"chooseWXPay", "getLocation", "updateAppMessageShareData", "updateTimelineShareData", "onMenuShareAppMessage",
	"onMenuShareTimeline", "openLocation", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice",
	"stopVoice", "onVoicePlayEnd", "chooseImage", "getLocalImgData", "downloadImage", "uploadImage", "uploadVoice",
	"downloadVoice", "scanQRCode"
];
let isWxRegistered = false
export function registerConfig(url) {
	return new Promise(async function(resolve, reject) {
		// if(location.hostname=='127.0.0.1'){
		// 	url = 'https://v3.bkycms.com/channelApi/wechat/index?acid=39'
		// }
		// console.log(123,url)
		try {
			let {
				data
			} = await util.request({
				'url': api.WxSign,
				// method:'POST',
				// ct: 1,
				data: {
					url: url || encodeURIComponent(url)
				}
			})
			if (data) {
				wx.config({
					debug: false,
					appId: data.appId,
					nonceStr: data.nonceStr,
					timestamp: data.timestamp,
					signature: data.signature,
					jsApiList: jsApiList
				});
				wx.error(err => {
					console.log('config fail:', err);
				});
				wx.ready(res => {
					resolve()
					console.log('%c wx.ready ', 'color: white; background-color: #95B46A')
				});
			}
		} catch (e) {
			console.log("微信环境出问题了", e)
		}
	})
}
export function configWX(url) {
	return new Promise(async function(resolve, reject) {
		// #ifdef  H5
		if (isWxRegistered) {
			resolve()
		} else {
			let signUrl = url || location.href.split('#')[0]
			console.log('%c configWX ', 'color: white; background-color: #95B46A', signUrl, util.getSb())
			if (util.getSb().platform == 'ios') {
				await registerConfig(signUrl)
				isWxRegistered = true
				resolve()
				console.log('iosios')
			} else {
				await registerConfig(signUrl)
				isWxRegistered = true
				resolve()
				console.log('android')
			}
		}
		// #endif
		// #ifdef  MP
		resolve()
		// #endif
	})
}
export async function getDw(option) {
	let timestamp = Date.parse(new Date()),
		firstdwtime = uni.getStorageSync('firstdwtime'),
		gdlocation = getApp().globalData.gdlocation;
	return new Promise(async (resolve, reject) => {
		// console.log(option, timestamp, firstdwtime, firstdwtime + 300 * 1000, gdlocation)
		if (option.t == '0' && gdlocation && timestamp < (firstdwtime + 300 * 1000)) {
			resolve(gdlocation)
			return
		}
		// #ifndef H5
		// util.showLoading('定位中')
		uni.getLocation({
			type: 'gcj02' || option.type,
			success: res => {
				resolve(res)
				store.commit('dndc/setLatLng', {
					lat: res.latitude,
					lng: res.longitude,
				})
				// uni.hideLoading()
				getApp().globalData.gdlocation = res
				uni.setStorageSync('firstdwtime', timestamp)
				if (process.env.NODE_ENV === 'development') {
					console.log('当前位置res', res)
				}
			},
			fail: (err) => {
				console.log('util.getDwfail', err);
				resolve({
					latitude: '39.906930',
					longitude: '116.397570'
				})
				store.commit('dndc/setLatLng', {
					lat: '39.906930',
					lng: '116.397570'
				})
				// uni.hideLoading()
				getApp().globalData.gdlocation = {
					latitude: '39.906930',
					longitude: '116.397570'
				}
			},
		})
		// #endif
		// #ifdef H5
		if (api.platform == 'weChat') {
			//util.showLoading('定位中')
			await configWX()
			wx.getLocation({
				type: 'gcj02' || option.type,
				success: res => {
					resolve(res)
					store.commit('dndc/setLatLng', {
						lat: res.latitude,
						lng: res.longitude,
					})
					//uni.hideLoading()
					getApp().globalData.gdlocation = res
					uni.setStorageSync('firstdwtime', timestamp)
					console.log('当前位置res', res)
				},
				fail: (err) => {
					console.log('util.getDwfail', err);
					resolve({
						latitude: '39.906930',
						longitude: '116.397570'
					})
					store.commit('dndc/setLatLng', {
						lat: '39.906930',
						lng: '116.397570'
					})
					uni.hideLoading()
					getApp().globalData.gdlocation = {
						latitude: '39.906930',
						longitude: '116.397570'
					}
					//uni.hideLoading()
					console.log("%c 定位失败", "font-size:40px;color:orange", e)
				}
			});
		} else {
			//util.showLoading('定位中...')
			//alert(option.type)
			uni.getLocation({
				type: 'wgs84' || option.type,
				success: res => {
					resolve(res)
					store.commit('dndc/setLatLng', {
						lat: res.latitude,
						lng: res.longitude,
					})
					//uni.hideLoading()
					 
					getApp().globalData.gdlocation = res
					uni.setStorageSync('firstdwtime', timestamp)
					console.log('当前位置res', res)
				},
				fail: (err) => {
				 
					console.log('util.getDwfail', err);
					resolve({
						latitude: '13.7854976',
						longitude: '100.5879296'
					})
					store.commit('dndc/setLatLng', {
						lat: '13.7854976',
						lng: '100.5879296'
					})
					//uni.hideLoading()
					getApp().globalData.gdlocation = {
						latitude: '13.7854976',
						longitude: '100.5879296'
					}
				}
			})
		}
		// #endif
	})
}
export async function openLocation(obj) {
	await configWX()
	wx.openLocation({
		latitude: +obj.lat,
		longitude: +obj.lng,
		name: obj.name, 
		address: obj.address,
		scale: 18,
		infoUrl: obj.url,
	});
}
export async function scanCode(obj) {
	// console.log(obj)
	uni.scanCode({
		success: (res) => {
			console.log(res)
			if(res && res.result && !res.path){
				let r = res.result.split('/s/')[1].split('/')[0],
				q = res.result.split('/s/')[1].split('/')[3],
				t = res.result.split('/s/')[1].split('?')[1]
				console.log(r,q,t)
				if(r == 'personPay'){
					obj.go({
						t: 1,
						url: `/pages/shop/in/dmf${q}`,
					})
				}else if(r == 'storeGoods'){
					obj.go({
						t: 6,
						url: `/pages/index/goods${q}`,
					})
				}else if(r == 'fastfood'){
					obj.go({
						t: 1,
						url: `/pages/shop/in/goods${q}`,
					})
				}else if(r =='table'){
					obj.go({
						t: 1,
						url: `/pages/shop/in/goods?${t}`,
					})
				}
			}else{
				let path = res.path,
					tnurl = '/' + path
				obj.go({
					t: 1,
					url: tnurl,
				})
			}
		},
		fail: (res) => {
			console.log('fail',res)
		}
	});
}
export async function chooseWXPay(config, callback) {
	console.log("%c 支付参数", "font-size:40px;color:orange", config)
	await configWX()
	return new Promise((resolve, reject) => {
		wx.chooseWXPay({
			timestamp: config.timeStamp,
			nonceStr: config.nonceStr,
			package: config.package,
			signType: config.signType,
			paySign: config.paySign,
			success(res) {
				// 支付成功后的回调函数
				resolve(1)
				callback && callback(res);
			},
			fail(e) {
				resolve(2)
				uni.showModal({
					title: '微信支付错误',
					content: JSON.stringify(e)
				})
			},
			cancel() {
				resolve(3)
				// 支付取消
			}
		});
	})
}
export function getImgS(src) {
	return src.indexOf('http') > -1 ? src : store.state.system.attachurl + src
}
export function getEwmLink(src) {
	return `${siteInfo.siteroot}?i=${siteInfo.uniacid}&link=/${src}`
	// return `${siteInfo.siteroot.match(/(\S*)app/)[1]}app/index.php?i=${siteInfo.uniacid}&c=entry&eid=${siteInfo.eid}&link=/${src}`
}
export function getSLink(src) {
	if (api.platform == 'weChat') {
		return `${location.href.split('#')[0]}#/${src}`
	}
}
export async function wxShare(config = {}) {
	if (api.platform == 'weChat') {
		return new Promise(async function(resolve, reject) {
			await configWX()
			let url = config.link || location.href;
			let {
				title = store.state.system.name || "标题",
					desc = store.state.system.introduction || '进来看看吧',
					link = url, 
					imgUrl = getImgS(store.state.system.icon),
			} = config;
			// link = link.split('#')[0] + '#' + link.split('#')[1]  https://v3.b-ke.cn/views/mobile/index.html?uniacid=16
			link =
				`${siteInfo.siteroot}/views/mobile/index.html?uniacid=${siteInfo.uniacid}&link=${encodeURIComponent(link.split('#')[1])}`
				// `${siteInfo.siteroot.match(/(\S*)app/)[1]}app/index.php?i=${siteInfo.uniacid}&c=entry&eid=${siteInfo.eid}&link=${encodeURIComponent(link.split('#')[1])}`
			console.log("%c wxShare url", "font-size:20px;color:green", url, link,title,store.state.system.introduction)
			//朋友
			wx.updateAppMessageShareData({
				title,
				desc,
				link,
				imgUrl: getImgS(imgUrl),
			})
			// wx.onMenuShareAppMessage()
			//圈
			wx.updateTimelineShareData({
				title,
				link,
				imgUrl: getImgS(imgUrl),
			})
			// wx.onMenuShareTimeline()
		})
	} else {
		return
	}
}
export function choosePhoto(option) {
	return new Promise(async (resolve, reject) => {
		if (api.platform != 'weChat') {
			uni.chooseImage({
				count: +option.num || 9,
				sizeType: ['compressed'],
				// sourceType: ['album'],
				success: (res) => {
					resolve(res.tempFilePaths)
					console.log(res.tempFilePaths);
				}
			});
		} else {
			await configWX()
			wx.chooseImage({
				count: +option.num || 9,
				sizeType: ['compressed'],
				sourceType: ['album', 'camera'],
				success: async function(res) {
					console.log('choosePhoto', res.localIds);
					resolve(res.localIds);
				}
			});
		}
	})
}
export function uploadImage(localId, showTips = 1) {
	return new Promise(function(resolve, reject) {
		wx.uploadImage({
			localId,
			isShowProgressTips: showTips,
			success: function(res) {
				resolve(res)
			}
		});
	})
}
export function uploadImg({
	files
}) {
	// const that = this;
	// async function ys(file) {
	// 	console.log("file", file)
	// 	return new Promise((resolve, reject) => {


	// 		if (that.getType(file) == 'string') {
	// 			if (file.indexOf('http') > -1) {
	// 				return resolve({
	// 					type: 'img',
	// 					url: file.substring(that.assetPath.length)
	// 				})
	// 			}
	// 		}

	// 		picCompress({
	// 			file,
	// 			quality: 5,
	// 			async callBack(ret) {
	// 				//console.log("图片压缩成功");
	// 				const res = await requestByUpload(ret)
	// 				return resolve({
	// 					url: res.src,
	// 					type: "img"
	// 				})
	// 			}
	// 		})
	// 	})
	// }
	return new Promise(async function(resolve, reject) {
		let images = files.map(async item => {
			if (item.tmp) {
				if (api.platform != 'weChat') {
					return await wxUploadImg(item.url);
				} else {
					let {
						data
					} = await util.request({
						'url': api.WxUpload,
						method: 'POST',
						data: {
							mediaId: item.url
						}
					})
					return data
				}
			} else {
				return item.url
			}
		})
		images = await Promise.all(images)
		return resolve(images)
	})
}

function wxUploadImg(file) {
	return new Promise(function(resolve, reject) {
		uni.uploadFile({
			url: util.url(api.sctp),
			filePath: file,
			fileType: 'image',
			name: 'file',
			header: {
				'content-type': 'multipart/form-data',
				"appType": api.platform,
				'uniacid': siteInfo.uniacid,
				'module': 'yb_wm_v3',
			},
			success: (res) => {
				resolve(res.data)
				// console.log('uploadImage success, res is:', res)
			},
			fail: (err) => {
				console.log('uploadImage fail', err);
			},
			// complete(res) {
			// 	console.log('uploadImage complete', res);
			// }
		});
	})
}

export function aliAuthCode() {
	console.log('ap',ap,store.state.config.zfbSettingapp_id)
	return new Promise(async (resolve, reject) => {
		ap.getAuthCode ({
		   appId : store.state.config.zfbSettingapp_id,
		   scopes : ['auth_user'],
		},function(res){
		   // ap.alert (JSON.stringify(res))
			 resolve(res)
		})
	})
}

export async function chooseAliPay(config, callback) {
	console.log("%c ali支付参数", "font-size:40px;color:orange", config)
	return new Promise((resolve, reject) => {
		ap.tradePay ({
			tradeNO: config.trade_no,
			success(res) {
				if(res && res.resultCode==9000){
					resolve(1)
				}else if(res && res.resultCode==6001){
					resolve(3)
				}else{
					uni.showModal({
						title: '支付错误代码',
						content: JSON.stringify(res.resultCode)
					})
				}
				callback && callback(res);
			},
			fail(e) {
				resolve(2)
				uni.showModal({
					title: '支付错误',
					content: JSON.stringify(e)
				})
			},
			cancel() {
				resolve(3)
			}
		});
	})
}
