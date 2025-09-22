import api from '../api';
import utils from '@/common/utils.js'
import i18n from '@/locale/index.js'
import {
	openLocation
} from '../wechat-util.js'
var util = {
	burl: ''
};

util.url = function(action) {
	let url = ''
	if (util.burl) {
		url = util.burl
		// #ifdef H5
		// if (api.platform == 'h5') {
		// 	return uni.showModal({
		// 		title: '提示',
		// 		content: '请在微信内打开',
		// 		showCancel: false
		// 	})
		// }
		// #endif
	} else {
		let siteInfo = getApp().globalData.siteInfo,
			nowtime = Date.parse(new Date())
		url = util.burl = siteInfo.isDev ? siteInfo.siteroot : siteInfo.siteroot
	}
	return url + action;
}

function getQuery(url) {
	var theRequest = [];
	if (url.indexOf("?") != -1) {
		var str = url.split('?')[1];
		var strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			if (strs[i].split("=")[0] && unescape(strs[i].split("=")[1])) {
				theRequest[i] = {
					'name': strs[i].split("=")[0],
					'value': unescape(strs[i].split("=")[1])
				}
			}
		}
	}
	return theRequest;
}

function getUrlParam(url, name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = url.split('?')[1].match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

util.request = async function(option) {
	if (option.mask) {
		uni.showLoading({
			title: option.mask == 1 ? i18n.t('modal.loading') : option.mask,
			mask: true
		});
	}
	let app = getApp().globalData,
		url = util.url(option.url)
	var option = option || {};
	if (!url) {
		return false;
	}

	//console.log('1212', i18n.locale);

	//my.showNavigationBarLoading();
	let [error, res] = await uni.request({
		'url': url,
		'data': option.data ? option.data : {},
		'method': option.method ? option.method : 'GET',
		'header': {
			'content-type': option.ct ? 'application/json' : 'application/x-www-form-urlencoded',
			"appType": api.platform,
			'uniacid': app.siteInfo.uniacid,
			'module': 'yb_wm_v3',
			'lang': i18n.locale,
			'userId': uni.getStorageSync('userId'),
			'shopId': uni.getStorageSync('shopId'),
			'Authorization': `Bearer ${uni.getStorageSync('token')}`,
		}
	});
	if (option.mask) {
		uni.hideLoading();
	}
	if (res.data && res.data.code == 402) {
		util.message(res.data.msg || res.data, 3, 2000)
		uni.reLaunch({
			url: '/pages/other/block'
		})
	}
	if (res?.data?.code == 200) {
		return res.data
	} else {
		if (res?.data?.code == 400) {
 
			// return util.modal(res.data.msg || res.data)
			return util.message(res.data.msg || res.data, 3, 2000)
		} else if (res?.data?.code == 401) {
			console.log('%c token错误', 'color: white; background-color: #ffaaff', res)
			//return util.message(res.data.msg || res.data, 3, 2000)
			// uni.reLaunch({
			// 	url: '/pages/other/login'
			// })

			// this.go({
			// 	url: '/pages/other/login'
			// })
			return res.data
		} else {
			console.log('%c request异常', 'color: white; background-color: #f00000', res)
			return util.message(res.data.msg || res.data, 3, 2000)
		}
	}
}
util.ckWz = (obj) => {
	if (api.platform != 'weChat') {
		uni.openLocation({
			latitude: +obj.lat,
			longitude: +obj.lng,
			name: obj.name,
			address: obj.address,
		})
	} else {
		openLocation(obj)
	}
}

util.message = function(c, t, d) {
	uni.showToast({
		// #ifdef MP-ALIPAY
		icon: t == 1 ? 'success' : t == 2 || t == 3 ? 'none' : '',
		// #endif
		// #ifndef MP-ALIPAY
		icon: t == 1 ? 'success' : t == 2 ? 'loading' : t == 3 ? 'none' : '',
		// #endif
		title: c,
		duration: d || 1000,
	});
}
util.modal = async (c, t) => {
	let [error, res] = await uni.showModal({
		title: t || i18n.t('modal.title'),
		cancelText: i18n.t('modal.cancelText'),
		confirmText: i18n.t('modal.confirmText'),
		content: c,
	})
	return new Promise((resolve, reject) => {
		if (res.confirm) {
			resolve()
		} else if (res.cancel) {
			reject()
		}
	})
}
util.makeTel = (e) => {
	console.log(e)
	uni.makePhoneCall({
		phoneNumber: e || '123456'
	});
}

//封装微信等待提示，防止ajax过多时，show多次
util.showLoading = (c, m = 1) => {
	var isShowLoading = uni.getStorageSync('isShowLoading');
	if (isShowLoading) {
		uni.hideLoading();
		uni.setStorageSync('isShowLoading', false);
	}

	uni.showLoading({
		title: c || '加载中',
		mask: m ? true : false,
		complete: function() {
			uni.setStorageSync('isShowLoading', true);
		},
		fail: function() {
			uni.setStorageSync('isShowLoading', false);
		}
	});
}
util.getSb = () => {
	let info = getApp().globalData.sb;
	if (info) {
		return info
	} else {
		info = uni.getSystemInfoSync()
		// console.log(info)
		// let rate=uni.upx2px(750)/750,
		let rate = +(info.windowWidth / 750).toFixed(5),
			customNavh = info.statusBarHeight + 44
		getApp().globalData.sb = {
			...info,
			rate,
			customNavh,
		}
		return getApp().globalData.sb
	}
}
util.getPage = (i = 2) => {
	let pages = getCurrentPages()
	return pages[pages.length - i]
}
util.getRoute = () => {
	let pages = getCurrentPages(),
		currentPage = pages[pages.length - 1],
		url = currentPage.route || currentPage.__route__ //当前页面url
	//console.log(currentPage, currentPage.__route__, typeof currentPage)
	return url
}
util.preImg = (option) => {
	uni.previewImage({
		current: option.idx,
		urls: option.urls
	})
}
util.getSetting = (type) => {
	return new Promise((resolve, reject) => {
		uni.getSetting({
			success: (res) => {
				if (res.authSetting['scope.' + type]) {
					resolve(1);
				} else {
					resolve(2);
				}
				console.log(res.authSetting)
			}
		});
	});
}
util.setNT = (n) => {
	uni.setNavigationBarTitle({
		title: n
	})
}
util.setNB = (n = '#fff', nofc = false) => {
	uni.setNavigationBarColor({
		frontColor: n.indexOf('#fff') > -1 || nofc ? '#000000' : '#ffffff',
		backgroundColor: n,
	})
}
util.sj = () => {
	let r = Math.floor(Math.random() * 1000000 + 0);
	return r
}
util.fz = (n) => {
	uni.setClipboardData({
		data: n,
		success() {
			util.message('复制成功', 1)
			console.log('success');
		},
		fail(error) {
			console.log(error)
		}
	});
}
util.compareVersion = (v1, v2) => {
	v1 = v1.split('.')
	v2 = v2.split('.')
	const len = Math.max(v1.length, v2.length)
	while (v1.length < len) {
		v1.push('0')
	}
	while (v2.length < len) {
		v2.push('0')
	}
	for (let i = 0; i < len; i++) {
		const num1 = parseInt(v1[i])
		const num2 = parseInt(v2[i])
		if (num1 > num2) {
			return 1
		} else if (num1 < num2) {
			return -1
		}
	}
	return 0
}

util.mpShare = (obj) => {
	// console.log(obj,obj.p ? '/' + obj.p : '',)
	return {
		title: obj.t || '进来看看吧！',
		imageUrl: obj.i,
		// #ifndef MP-ALIPAY
		path: obj.p ? '/' + obj.p : '',
		// #endif
		// #ifdef MP-ALIPAY
		path: obj.p || '',
		// channel: "video",
		//  success: () => {
		// console.log("分享成功");
		//  },
		// #endif
	}
}

util.getIWH = (v) => {
	return new Promise((resolve, reject) => {
		uni.getImageInfo({
			src: v,
			success: (res) => {
				if (res.errMsg == 'getImageInfo:ok') {
					resolve(res.height);
				} else {
					resolve(res.height);
				}
			}
		});
	});
}


util.getTranslation = (page, key) => {
	return i18n.t(`${page}.${key}`)
}

export default util;