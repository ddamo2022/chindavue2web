<template>
	<view class="">
		<block v-if="navbar&&navbar.navs&&navbar.navs.length>0">
			<view class="navbar f-row" :class="{'xf':navbar.pType==2}"
				:style="{background:navbar.colorBg,borderTop:'1rpx solid '+navbar.border_color,bottom:isIpx?'40rpx':'' }">
				<block v-for="(item,idx) in navbar.navs" :key="idx">
					<view v-if="!item.item" class="navbargator f-g-1 f-y-c f-c-xc" @click="goPage(item,idx)">
						<view class='navbar-view f-c-c' :class="{'navtf':navbar.type==2 && idx==navbar.sv}">
							<image mode="aspectFit" v-if="item.icon" class="navbar-icon"
								:class="{'nav-tf-icon':navbar.type==2 && idx==navbar.sv}"
								:src="item.active?item.iconSelect:item.icon"></image>
							<view class="navbar-text" :style="{color:item.active?navbar.color:navbar.colorOff,}"
								v-if="navbar.type!=2 || idx!=navbar.sv">
								 {{ util.getTranslation("tabbar",item.title) }}
							</view>
						</view>
					</view>
				</block>
			</view>
			<view v-if="isIpx" class='bgf' :style="{background:navbar.colorBg}"></view>
		</block>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import utils from '@/common/utils.js'
	export default {
		name: 'tabbar',
		props: {
			type: {
				type: Object,
				default: function() {
					return {
						message: 'hello'
					}
				}
			},
			ptype: {
				type: String,
				default: 'index'
			},
			color: { // small.normal
				type: String,
				default: ''
			}
		},
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				layout: state => state.layout && state.layout.nav,
			}),
			navbar() {
				// console.log('layout',this.layout,getApp().globalData.tabbar)
				if (getApp().globalData.tabbar) {
					let nav = utils.deepCopy(getApp().globalData.tabbar),
						index = nav.navs.findIndex(item => item.url == this.util.getRoute() || `/${item.url}` == this.util
							.getRoute());
					if (index > -1) {
						nav.navs[index].active = true
						this.$emit('refresh', true)
					} else {
						nav = null
					}
					return nav
				} else {
					if (this.layout) {
						let nav = {
							colorBg: '#fff',
							border_color: "rgba(0,0,0,0.05)",
							color: '#333',
							colorOff: '#888',
							type: 1,
							pType: 1,
							sv: 2,
							navs: []
						}
						if (this.layout && this.layout.list && this.layout.list.length) {
							let laynav = this.layout
							nav.colorBg = laynav.bg
							// nav.border_color = laynav.colorLine
							nav.color = laynav.checkColor
							nav.colorOff = laynav.unCheckColor
							nav.type = laynav.type
							nav.pType = laynav.pType
							nav.sv = laynav.sv
							let arr = JSON.parse(JSON.stringify(laynav.list))
							for (let i in arr) {
								active: arr[i].iconSelect
							}
							nav.navs = arr
							nav.navs.forEach(v => {
								v.t = v.url.indexOf('/index/') != -1 ? 6 : 1
							})
							getApp().globalData.tabbar = utils.deepCopy(nav)
						} else {
							nav.navs = [{
									icon: '/static/tabbar/home.png',
									iconSelect: '/static/tabbar/home_selected.png',
									title: '首页',
									url: "pages/index/index"
								},
								{
									icon: '/static/tabbar/index.png',
									iconSelect: '/static/tabbar/index_selected.png',
									title: '点单',
									url: "pages/index/goods",
								},
								{
									icon: '/static/tabbar/order.png',
									iconSelect: '/static/tabbar/order_selected.png',
									title: '订单',
									url: "pages/index/order-index",
								},
								{
									icon: '/static/tabbar/my.png',
									iconSelect: '/static/tabbar/my_selected.png',
									title: '我的',
									url: "pages/index/my-index",
								},
							]
						}
						nav.navs.forEach(v => {
							v.t = v.url.indexOf('/index/') != -1 ? 6 : 1
						})
						// getApp().globalData.tabbar = utils.deepCopy(nav)
						let index = nav.navs.findIndex(item => item.url == this.util.getRoute() || `/${item.url}` == this
							.util.getRoute());
						if (index > -1) {
							nav.navs[index].active = true
							this.$emit('refresh', true)
						} else {
							nav = null
						}
						return nav
					}
				}
			},
		},
		methods: {
			goPage: utils.throttle(function(e) {
				console.log('e', e)
				if (e[0].active) return uni.vibrateShort()
				let t = e[0].t == 6 ? 6 : this.pageroute.indexOf('/index/') > -1 ? 1 : 2
				this.go({
					t,
					url: '/' + e[0].url
				})
				uni.vibrateShort()
			}, 500),
		},
		created() {
			this.pageroute = this.util.getRoute()
			uni.hideTabBar()
		}
	}
</script>

<style>
	.navtf {
		/* border-radius: 50%; */
		border-top-left-radius: 50%; 
		border-top-right-radius: 50%;
		border-bottom-right-radius: 0; 
		border-bottom-left-radius: 0; 
		background: #fff;
		height: 140rpx;
		width: 140rpx;
		margin-bottom: 30rpx;
		border-top: 1px solid rgba(0,0,0,0.05);
	}

	.nav-tf-icon {
		border-radius: 50%;
		width: 110rpx !important;
		height: 110rpx !important;
		margin-bottom: 20rpx;
	}
	.xf{
		left: 10rpx;
		margin: 30rpx;
		width: 90%;
		border-radius: 60rpx;
		box-shadow: 0rpx 8rpx 20rpx 0rpx rgba(0, 0, 0, 0.4);
	}
	.xf .navbar-icon {
		width: 42rpx;
		height: 42rpx;
	}
</style>