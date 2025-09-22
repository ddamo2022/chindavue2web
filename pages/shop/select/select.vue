<template>
	<gui-page :fullPage="true" :isLoading="pageLoading" ref="guiPage">
		<view slot="gBody" class="gui-flex1 gui-flex gui-columns">
			<view class="gui-padding gui-padding-top bf">
				<text class="gui-h6 gui-block-text gui-primary-color">当前城市 : {{address}}</text>
			</view>
			<!-- 城市列表 -->
			<scroll-view :scroll-y="true" :scroll-into-view="showCityId" :scroll-with-animation="true"
				:style="{height:mainHeight+'px',background:'#fff'}">
				<view class="gui-padding" id="pageTop">
					<block v-for="(cities, index) in cityData" :key="index">
						<text class="gui-city-AZ gui-block-text" :id="'gui-city-AZ-'+index">{{index}}</text>
						<text class="city-item gui-block-text gui-border-b" :id="'gui-city-list-'+city.code"
							v-for="(city, cindex) in cities" :key="cindex" :data-cityname="city.name"
							:data-citycode="city.code" @tap="chooseCity">{{city.name}}</text>
					</block>
				</view>
			</scroll-view>
			<view class="gui-city-AZ-right">
				<text class="gui-city-AZ-right-item gui-block-text gui-transition-all" v-for="(char, index) in AZ"
					:key="index"
					:class="[rightTapIdx == index ? 'gui-bg-black' : '', rightTapIdx == index ? 'gui-color-white' : '']"
					:data-char="char" :data-idx="index" @tap="changAZ">{{char}}</text>
			</view>
		</view>
	</gui-page>
</template>
<script>
	import guiPage from '@/components/grace/components/gui-page.vue'
	var graceJS = require('@/components/grace/js/grace.js');
	import {
		mapState,
		mapMutations,
	} from 'vuex'
	export default {
		components: {
			guiPage,
		},
		data() {
			return {
				pageLoading: true,
				mainHeight: 200,
				cityData: [],
				AZ: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X',
					'Y', 'Z'
				],
				currentCity: "北京市",
				showCityId: '',
				searchTimer: null,
				searchIndex: -1,
				rightTapIdx: -1
			}
		},
		onLoad: function() {
			this.init()
			// graceJS.getRefs('guiPage', this, 0, (ref) => {
			// 	ref.getDomSize('guiPageBody', (e) => {
			// 		this.mainHeight = e.height - uni.upx2px(120);
			// 		this.pageLoading = false;
			// 	});
			// });
		},
		computed: {
			...mapState('dndc', ['addInfo']),
			address() {
				console.log(this.addInfo)
				if (this.addInfo) {
					return this.addInfo.city.label
				} else {
					return ''
				}
			},
		},
		methods: {
			async init() {
				let {
					data
				} = await this.util.request({
					'url': this.api.region,
					method: 'get'
				})
				this.cityData = data
			},
			// 选择
			async chooseCity(e) {
				var cityname = e.currentTarget.dataset.cityname;
				var citycode = e.currentTarget.dataset.citycode;
				this.currentCity = cityname;
				let city = {}
				city.name = cityname
				city.code = citycode
				await this.getAddInfo({city})
				uni.$emit('changeCity');
				this.go({
					t: 4
				})
			},
			// 点击切换
			changAZ: function(e) {
				this.rightTapIdx = -1;
				var char = e.currentTarget.dataset.char;
				this.showCityId = 'gui-city-AZ-' + char;
				this.rightTapIdx = e.currentTarget.dataset.idx;
				setTimeout(() => {
					this.rightTapIdx = -1;
				}, 2000);
			}
		}
	}
</script>
<style>
	.gui-h6 {
		line-height: 66rpx;
	}

	.gui-city-search {
		padding: 20rpx 100rpx;
	}

	.gui-city-AZ {
		font-weight: 700;
		line-height: 88rpx;
		font-size: 30rpx;
	}

	.gui-city-AZ-right {
		width: 50rpx;
		position: fixed;
		right: 0;
		top: 80px;
	}

	/* #ifdef H5 */
	.gui-city-AZ-right {
		top: 110px;
	}

	/* #endif */
	.gui-city-AZ-right-item {
		line-height: 38rpx;
		height: 38rpx;
		width: 38rpx;
		border-radius: 40rpx;
		font-size: 22rpx;
		text-align: center;
	}

	.hotcity-item {
		width: 210rpx;
		font-size: 26rpx;
		height: 70rpx;
		line-height: 70rpx;
		border-radius: 10rpx;
		text-align: center;
		overflow: hidden;
		margin: 8rpx 5rpx;
		background-color: #F6F7F8;
	}

	.city-item {
		line-height: 88rpx;
		height: 88rpx;
		font-size: 26rpx;
	}
</style>
<style lang="scss" scoped>
	@import "@/components/grace/css/grace.css";
</style>
