<template>
	<view class="container">
		<view class="tabbar">
			<view class="item c0 posi-r f-c f-g-1" v-for="(v,i) in tabs" :key="i" @click="tClick(i,v)"
				:class="{ active: taIdx == i }"
				:style="{ color: taIdx == i ? tColor:'',borderColor:taIdx == i ? tColor:'',fontWeight:taIdx == i ? 'bold':''}">
				{{v.name}}
				<view class="line p-a" v-if="taIdx == i" :style="{background:tColor}"></view>
			</view>
		</view>
		<view class="mt20">
			<scroll-view scroll-y="true" class="wh" style="height: 630px;" :refresher-threshold="100/pxToRpxRate"
				:refresher-triggered="refreshLoading" refresher-enabled="true" refresher-background="#f5f5f5"
				@refresherrefresh="onRefresh" @refresherpulling="onPulling" @refresherrestore="onRestore"
				@refresherabort="onAbort" @scrolltolower="nextPage">
				<order-list @operation='operation' v-for="(v,i) in list" :key='i' :co='v.subOrder' :v="v"></order-list>
				<i-default :imgn="1" v-if="!list || list.length<=0" />
			</scroll-view>
		</view>
		<pay ref="Pay" @pay="pay"></pay>
		<view class="posi-r">
			<tab-bar></tab-bar>
		</view>
		<load v-if="showloading"></load>
	</view>
</template>

<script>
	import {
		loadLineSDK
	} from '@/common/line-sdk-loader.js';
	import OrderList from "./order/order-list.vue"
	import Pay from '@/components/pay/pay.vue'
	import load from '@/components/common/load.vue'
	import iDefault from '@/components/common/default.vue'
	import {
		mapActions,
		mapState
	} from 'vuex';
	export default {
		components: {
			OrderList,
			Pay,
			load,
			iDefault,
		},
		data() {
			return {
				showloading: true,
				tabs: [{
					value: 'inStore',
					name: this.$t("order-index.store_order")
				}, {
					value: 'storedValue',
					name: this.$t("order-index.stored_value_order")
				}, {
					value: 'persionPay',
					name: this.$t("order-index.pay_the_bill_order")
				}, {
					value: 'couponPack',
					name: this.$t("order-index.coupon_package_order")
				}],
				taIdx: 0,
				tabIndex: 0,
				orderMenuIndex: 0,
				orders: [],
				storeOrders: [],
				refreshLoading: true,
				status: 'loading',
				list: [],
				params: {
					page: 1,
					size: 10,
					state: 'inStore',
				},
			}
		},
		async onLoad(options) {
			this.init()
			this.freshing = false;
			await this.$store.dispatch('getLoginInfo');
			if (options && options.linetype) {
				await this.iniline();
			}
		},
		onShow() {
			if (this.isload) {
				this.refresh()
			}
		},
		computed: {
			...mapState({
				layout: state => state.layout.index || {},
				defaultImg: state => state.layout.defaultImg || [],
			}),
			batchInvoiceVisible() {
				return (!this.orderMenuIndex && this.orders.length) || (this.orderMenuIndex && this.storeOrders.length)
			}
		},
		methods: {
			...mapActions(["getConfig"]),
			async init() {

				await this.getLayout()
				await this.fetchData()
				this.isload = true
				this.getConfig({
					ident: ["orderSetting"]
				})
				this.showloading = false
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
			async iniline() {

				var _this = this;
				if (!this.$store.state.isLogin) {
					// const currentPage = getCurrentPages().pop();
					// const currentPath =
					// 	`/${currentPage.route}${currentPage.options ? '?' + Object.keys(currentPage.options).map(key => `${key}=${currentPage.options[key]}`).join('&') : ''}`;

					// console.log(currentPath)
					// console.log(getApp().globalData.siteInfo.siteroot)
					// var url = `${getApp().globalData.siteInfo.siteroot}/h5/#${currentPath}`
					// window.location.href =
					// 	`${getApp().globalData.siteInfo.siteroot}/line/${getApp().globalData.siteInfo.uniacid}?refererUrl=${btoa(url)}`

					// console.log(url)
					// if (type == 1) {
					// 	window.location.href =
					// 		`${getApp().globalData.siteInfo.siteroot}/line/${getApp().globalData.siteInfo.uniacid}?refererUrl=${btoa(url)}`

					// 	//window.liff.login();
					// }


					let liffId = getApp().globalData.siteInfo.liffId
					var _this = this;
					loadLineSDK(liffId).then(async (liff) => {
						console.log(liff.isLoggedIn())
						if (liff) {
							if (liff.isLoggedIn()) {
								return liff.getProfile();
							} else {
								return liff.login({
									redirectUri: window.location.href
								})
							}
						}
					}).then(async profile => {
						if (profile && profile.userId) {
							await _this.linelogin(profile.userId, profile.displayName)
						}

					}).catch(err => {
						console.error(err);
					});
				}
			},
			async linelogin(id, name) {
				var rest = await this.util.request({
					'url': this.api.lineLogin,
					method: 'post',
					data: {
						id: id,
						name: name
					}
				})
				if (rest.data) {
					this.$store.commit('setUser', rest.data.userInfo);
					this.$store.commit('setToken', rest.data.token);
				}
			},
			async fetchData(type) {
				var orderid = uni.getStorageSync('nologin_orderid');
				if (!this.user.id && orderid) {
					this.params.orderid = orderid
				}

				this.status = 'loading'
				let {
					data: {
						list
					}
				} = await this.util.request({
					'url': this.api.wmxd,
					data: this.params,
				})
				if (type !== 'nextPage' || this.params.page === 1) {
					this.list = list
				} else {
					if (list.length === 0) {
						this.status = 'nomore'
						return
					}
					this.list = this.list.concat(list)
				}
				this.status = 'loadmore'
			},
			async refresh() {
				this.params.page = 1
				await this.fetchData()
			},
			nextPage() {
				if (this.status === 'loading') {
					return
				}
				this.params.page++
				this.fetchData('nextPage')
			},
			async tClick(i, v) {
				// if (!await this.checkLogin()) return
				if (i == this.taIdx) return
				this.taIdx = i
				this.params.state = v.value
				this.refresh()
			},
			async operation(e) {
				this.orderInfo = e.co
				this.operationt = e.t
				let obj = {}
				switch (e.t) {
					case 'ljzf':
						this.$refs['Pay'].open(
							JSON.stringify({
								orderSn: e.co.orderSn,
								orderType: 1
							})
						)
						break;
					case 'qxdd':
						this.rfddcz(this.$t("order-index.confirm_cancel_order"), 'qxdd', e.co.id)
						break;
					case 'sqtk':
						await this.util.modal(this.$t("order-index.confirm_apply_refund"))
						this.go({
							t: 1,
							url: `/pages/order/refunddl?id=${e.co.orderSn}&type=1`
						})
						break;
					case 'zlyd':
						this.go({
							t: 6,
							url: `/pages/index/goods`
						})
						break;
				}
			},
			async rfddcz(t, a, i) {
				await this.util.modal(t)
				if (!this.jjmbxx) {
					try {
						await this.requestSM(['refund'])
					} catch (e) {
						this.jjmbxx = true
						return
					}
				}
				let {
					msg
				} = await this.util.request({
					'url': `${this.api[a]}/${i}`,
					method: 'POST',
				})
				this.util.message(msg, 1, 1000)
				this.refresh()
			},
			pay() {
				this.refresh()
			},
			handleSwiperItemChange() { //禁止手动滑动
				return true
			},
			async switchMenuTab(index) {
				if (this.orderMenuIndex === index) return
				this.orderMenuIndex = index
				await this.getOrders()

			},
			// async getOrders() {
			// 	if (!this.orderMenuIndex) {
			// 		this.orders = await this.$api('orders')
			// 	} else {
			// 		this.storeOrders = await this.$api('storeOrders')
			// 	}
			// }
		},
		// async onPullDownRefresh() {
		// 	this.showloading = true
		// 	await this.refresh()
		// 	this.showloading = false
		// 	uni.stopPullDownRefresh();
		// },
	};
</script>

<style lang="scss" scoped>
	@import './order/order.scss';
</style>