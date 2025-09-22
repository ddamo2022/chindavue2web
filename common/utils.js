import i18n from '@/locale/index.js'
let util = {}
// 验证手机号
util.isTelCode = (str) => {
	/* var reg = /^(\d{8}|\d{11})$/;
	// /^[1]\d{10}$/
	return reg.test(str);
	console.log(reg.test(str)) */
	const result = str.length > 6;
	console.log(result);
	return result;
}

util.isEmail = (str) => {
	var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	console.log(reg.test(str))
	return reg.test(str);

}

util.nsswr = (n) => {
	return Math.floor(n * 100) / 100
}
util.swnb = (t) => {
	if (!t) {
		uni.navigateBack({

		})
	} else {
		setTimeout(() => {
			uni.navigateBack({

			})
		}, t)
	}
}
util.stfn = (fn, t = 1000) => {
	setTimeout(() => {
		fn()
	}, t)
}
util.jqzf = (obj) => {
	return obj.str.length <= obj.n ? obj.str : obj.str.substr(0, obj.n) + '...'
}
Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};

	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(
				RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}

	return fmt;
}
util.formatTime = date => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return [year, month, day].map(util.formatNumber).join('-') + ' ' + [hour, minute, second].map(util.formatNumber)
		.join(
			':')
}
util.formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}
util.timeToDate = (num, fmt = "yyyy-MM-dd hh:mm") => {
	// return util.formatTime(new Date(num * 1000))
	return new Date(+num * 1000).format(fmt)
}
util.dateToTime = date => {
	return Math.round((date ? new Date(date.replace(/-/g, '/')) : new Date()).getTime() / 1000);
}
util.countDownTime = (second) => {
	// 总秒数
	let s = Math.floor(second),
		// 天数
		day = Math.floor(s / 3600 / 24),
		// 小时
		hr = Math.floor(s / 3600 % 24),
		// 分钟
		min = Math.floor(s / 60 % 60),
		// 秒
		sec = Math.floor(s % 60);
	return [day, hr, min, sec].map(util.formatNumber)
}
/**  获取数据类型 */
util.getType = (obj) => {
	if (Object.prototype.toString.call(obj) === '[object Array]') {
		return 'array';
	} else if (obj === true || obj === false) {
		return 'boolean';
	} else if (typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" &&
		!obj.length) {
		return 'json'
	} else {
		return typeof(obj)
	}
}
util.failValue = (v, k) => {
	return (v == undefined || v == null || v == 'undefined' || v == 'null' || v == '' || (util.getType(v) ==
		'string' &&
		v.trim() == '') || (util.getType(v) == 'array' && v.length == 0) || !v || JSON.stringify(v) == '{}');
}
util.isFailParams = (option) => {
	let field = option.field

	function fail(key) {
		uni.showModal({
			title: i18n.t('modal.title'),
			content: option.tips && option.tips[key] ? option.tips[key] : key,
			showCancel: false,
			confirmText:i18n.t('modal.confirm'),
		})
		return false
	}
	for (let k in field) {
		if (util.failValue(field[k], k)) {
			if (option.filter) {
				if (util.getType(option.filter) == 'string' && k != option.filter) {
					return fail(k);
				} else if (util.getType(option.filter) == 'array' && option.filter.indexOf(k) < 0) {
					return fail(k);
				}
			} else {
				return fail(k);
			}
		}
	}
	return true
}
util.colorToRGB = color => {

	var color1, color2, color3;

	color = "" + color;

	if (typeof color !== "string") return;

	if (color.charAt(0) == "#") {

		color = color.substring(1);

	}

	if (color.length == 3) {

		color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];

	}

	if (/^[0-9a-fA-F]{6}$/.test(color)) {

		color1 = parseInt(color.substr(0, 2), 16);

		color2 = parseInt(color.substr(2, 2), 16);

		color3 = parseInt(color.substr(4, 2), 16);

		return color1 + "," + color2 + "," + color3;

	}

}
util.ldColor = (hex, lum = 0.5) => {
	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#",
		c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i * 2, 2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00" + c).substr(c.length);
	}

	return rgb;
}

function Rad(d) {
	return d * Math.PI / 180.0;
}
util.getDistance = (lat1, lng1, lat2, lng2) => {
	var radLat1 = Rad(lat1);
	var radLat2 = Rad(lat2);
	var a = radLat1 - radLat2;
	var b = Rad(lng1) - Rad(lng2);
	var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(
		Math.sin(
			b / 2), 2)));
	s = s * 6378137.0; // 取WGS84标准参考椭球中的地球长半径(单位:m)
	s = Math.round(s * 10000) / 10000;
	// console.log(s)
	if (s < 1000) {
		s = parseInt(s) + 'm'
	} else {
		s = (s / 1000).toFixed(2) + 'km'
	}
	return s
}

util.settime = (timestamp) => {
	let arrTimestamp = (timestamp + '').split('');
	for (let start = 0; start < 13; start++) {
		if (!arrTimestamp[start]) {
			arrTimestamp[start] = '0';
		}
	}
	timestamp = arrTimestamp.join('') * 1;

	let minute = 1000 * 60,
		hour = minute * 60,
		day = hour * 24,
		halfamonth = day * 15,
		month = day * 30,
		now = new Date().getTime(),
		diffValue = now - timestamp;
	// 如果本地时间反而小于变量时间
	if (diffValue < 0) {
		return '不久前';
	}

	// 计算差异时间的量级
	let monthC = diffValue / month,
		weekC = diffValue / (7 * day),
		dayC = diffValue / day,
		hourC = diffValue / hour,
		minC = diffValue / minute;

	// 数值补0方法
	var zero = function(value) {
		if (value < 10) {
			return '0' + value;
		}
		return value;
	};

	// 使用
	if (weekC >= 1) {
		return (function() {
			var date = new Date(timestamp),
				nowYear = new Date().getFullYear();
			if (weekC >= 1 && nowYear == date.getFullYear()) {
				return zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
			} else {
				return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) +
					'日';
			}
		})();
	} else if (monthC >= 1) {
		return parseInt(monthC) + "月前";
	} else if (weekC >= 1) {
		return parseInt(weekC) + "周前";
	} else if (dayC >= 1) {
		return parseInt(dayC) + "天前";
	} else if (hourC >= 1) {
		return parseInt(hourC) + "小时前";
	} else if (minC >= 1) {
		return parseInt(minC) + "分钟前";
	}
	return '刚刚';
}
util.DiffTime = (start_time, end_time) => {
	if (start_time.toString().length > 10) {
		start_time = parseInt(start_time / 1000)
		end_time = parseInt(end_time / 1000)
	}
	let startTime = 0,
		endTime = 0
	if (start_time < end_time) {
		startTime = start_time
		endTime = end_time
	} else {
		startTime = end_time
		endTime = start_time
	}
	//
	let timeDiff = endTime - startTime,
		year, month, day, hour, minute, second
	year = Math.floor(timeDiff / 86400 / 365);
	timeDiff = timeDiff % (86400 * 365);
	month = Math.floor(timeDiff / 86400 / 30);
	timeDiff = timeDiff % (86400 * 30);
	day = Math.floor(timeDiff / 86400);
	timeDiff = timeDiff % 86400;
	hour = Math.floor(timeDiff / 3600);
	timeDiff = timeDiff % 3600;
	minute = Math.floor(timeDiff / 60);
	timeDiff = timeDiff % 60;
	second = timeDiff;
	return [year, month, day, hour, minute, second]
}
util.deepCopy = (e) => {
	return JSON.parse(JSON.stringify(e))
}
util.getUrlParams = (url) => {
	const params = url.indexOf('#') > -1 ? url.split('#')[0].split("?")[1] : url.split("?")[1];
	const reg = /&?([^&]+)/g;
	let res = null,
		arr = [];
	const map = Object.create(null);
	while (res = reg.exec(params)) {
		const paramEntry = res[1].split("=");
		map[paramEntry[0]] = paramEntry[1];
		arr.push(paramEntry[0])
	}
	map.qarr = arr
	return map;
}
util.groupArr = (array) => {
	let arr1 = [],
		arr2 = []
	for (let i in array) {
		if (i % 2 == 0) {
			arr1.push(array[i])
		} else {
			arr2.push(array[i])
		}
	}
	return [arr1, arr2]
}
util.getOptions = (op, {
	key,
	q1,
	q2,
}) => {
	let id
	if (op[key]) {
		// console.log(op, op[key])
		id = op[key]
	} else if (op.scene) {
		id = decodeURIComponent(op.scene)
	} else if (op.q) {
		id = util.getUrlParams(decodeURIComponent(op.q))[key]
	} else if (q2) {
		id = q2
	} else {
		id = q1
	}
	// console.log(q1, q2, id)
	return id
}

util.throttle = (fn, interval) => {
	let enterTime = 0; //触发的时间
	let gapTime = interval || 300; //间隔时间
	return function() {
		let context = this,
			backTime = new Date(); //第一次函数return即触发的时间
		// console.log(this)
		if (backTime - enterTime > gapTime) {
			fn.call(context, arguments);
			enterTime = backTime; //赋值给第一次触发的时间，这样就保存了第二次触发的时间
		}
	};
}

util.debounce = (fn, interval) => {
	var timer;
	var gapTime = interval || 1000; //间隔时间，如果interval不传，则默认1000ms
	return function() {
		clearTimeout(timer);
		// var context = this;
		// var args = arguments; //保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
		timer = setTimeout(() => {
			fn.call(this, arguments);
		}, gapTime);
	};
}
util.hideNum = (tel) => {
	return tel.substr(0, Math.floor((tel.length - 4) / 2)) + '****' + tel.substr(Math.floor((tel.length - 4) / 2) +
		4)
}

util.hexToRgba = (hex, opacity) => { //16进制颜色转rgba
	return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt(
		"0x" + hex.slice(5, 7)) + "," + opacity + ")"
}

util.formatLocation = (longitude, latitude) => {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}

util.formatTime = (time) => {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function(n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

util.sB64 = (f, bs) => {
	uni.getFileSystemManager().writeFile({
		filePath: f,
		data: bs,
		encoding: 'base64',
		success: res => {
			uni.saveImageToPhotosAlbum({
				filePath: f,
				success: (ress) => {
					console.log('success', ress)
					uni.showToast({
						title: '已经保存到系统相册',
						icon: 'none'
					})
				},
				fail: (errr) => {
					console.log('errr', errr)
					uni.showToast({
						title: errr.errMsg,
						icon: 'none'
					})
				}
			})
		},
		fail: err => {
			console.log(err)
		}
	})
}

export default util;