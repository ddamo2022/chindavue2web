import {
	mapState,
	mapActions,
} from "vuex";
import utils from '@/common/utils.js'
export const sljz = {
	data() {
		return {
			dataList: [],
			bfList: [],
			isget: false,
			mygd: false,
		}
	},
	onReachBottom: utils.debounce(function(e) {
		if (!this.mygd && this.isget) {
			this.isget = false
			this.getList();
		}
		// console.log('onReachBottom')
	}, 300),
}
export const utilMixins = {
	computed: {
		...mapState({}),
	},
	methods: {
		timeToDate(num, fmt) {
			return utils.timeToDate(num, fmt)
		},
		dateToTime(date) {
			return utils.dateToTime(date)
		},
		getSingleImg(url) {
			return url.indexOf('http') > -1 ? url : this.url + url
		},
		snText(t, n) {
			return t && t.length > n ? t.substring(0, n) + '...' : t
		},
		blxs(v, n = 2) {
			return Number(Number(v).toFixed(n))
		},
		payName(type) {
			let n = ''
			switch (+type) {
				case 1:
					n = "微信支付";
					break;
				case 2:
					n = "支付宝支付";
					break;
				case 3:
					n = "百度支付";
					break;
				case 5:
					n = "余额支付";
					break;
			}
			return n
		},
		cTR(c) {
			return utils.colorToRGB(c)
		},
		cTRld(c, l) {
			return utils.ldColor(c, l)
		},
	}
};
