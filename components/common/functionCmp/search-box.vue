<template>
	<view class="p-10-20 f-y-c" :class="[bgc,cname]" :style="{height:`${co.height}${u}`}">
		<view class="f-g-1 f-x-bt">
			<view @click="goSearch" class="f-g-0 searchr p02 f-y-c" :class="{'f-c':co.fontStyle!='left','f-g-1':1}" :style="{height:`${sheight}${u}`,background:sbg,borderRadius:co.shape==3?'40rpx':co.shape==1?'10rpx':'0'}">
				<text class='iconfont icon-iconsearch' :class="ssc" :style="{color:stc}"></text>
				<text class="cb2 f26" :style="{color:stc}">{{co.recommendSearch?co.keyWords||'搜索':'搜索'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'searchBox',
		props: {
			co: {
				type: Object,
				default: function() {
					return {
						borderStyle: 0,
						city: 1,
						fontStyle: "left",
						height: 40,
						keyWords: "",
						recommendSearch: 1,
						shape: 3,
						shopName: "",
						showMore: 1,
					}
				}
			},
			cname: '',
			bgc: {
				type: String,
				default: 'bf'
			},
			storeInfo: {},
			u: {
				type: String,
				default: 'px'
			},
			color: {
				type: String,
				default: ''
			},
			sbg: {
				type: String,
				default: '#F5F5F5'
			},
			sheight: {
				type: String,
				default: '35'
			},
			ptype: '',
			stc: {
				type: String,
				default: ''
			},
			ssc: {
				type: String,
				default: 'mr20'
			},
		},
		data() {
			return {

			}
		},
		methods: {
			goSearch() {
				let url
				switch (this.ptype) {
					case 'index':
					case 'gfoodcategory':
						url = '/yb_o2o/gfood/search/out?page=index'
						break;
					case 'shopgoods':
						url = '/yb_o2o/gfood/search/out?page=shopGoods'
						break;
					case 'shopdl':
						url = '/yb_o2o/gfood/search/out?page=shopdl'
						break;
					default:
						break;
				}
				this.go({
					t: 1,
					url
				})
			}
		},
		async created() {},
	}
</script>
<style>
	.pr {
		color: #666;
		font-size: 24rpx;
	}
</style>
<style scoped lang="scss">
	.searchr {
		// border: 0.5px solid #ebedf0;
	}
</style>
