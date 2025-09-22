<template>
	<view v-show="show">
		<!-- #ifdef H5 -->
		<mg-popup v-model="show" :z-index="998">
			<view class="iframe bf">
				<map id="map" class="map mt20" :latitude="latitude" :longitude="longitude" @regionchange="regionchange"
					:markers="covers" :scale='scale'>
				</map>
				<view class="box">
					<view class="label">
						<!-- <icon type="search" size="16" color="#b8b8b8" />
						<input type="text" :placeholder="lang=='cn'?'搜索地点':'search place'"
							placeholder-style="color:#b8b8b8;" v-model="searchAddress"> -->
						<text class="iconfont icon-sousuo c6"></text>
						<input class="f-1 p02" :focus="false" v-model.trim="searchAddress" confirm-type='search'
							placeholder-class="cb2" @input="confirm" placeholder="search place" />
						<text @tap="cleanKey" v-if="searchAddress" class="iconfont icon-yx"
							style="color: #ADACAB;"></text>
					</view>
					<view class="lists">
						<radio-group @change="radioChange">
							<label class="list" v-for="(item, index) in list" :key="item.place_id">
								<view class="flex-1">
									<view class="">
										<text v-text="item.name"></text>
									</view>
									<view class="info">
										<text v-if="item.address" v-text="item.address"></text>
										<text v-else v-text="item.vicinity"></text>
									</view>
								</view>
								<view class="radio">
									<radio :value="index.toString()" :checked="index === current"
										style="transform:scale(0.7)" class="rd" :color="tColor" />
								</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="map-fb f-x-bt">
					<view class="f-c" @click="show=false">{{$t('modal.cancelText')}}</view>
					<view class="f-c" :style="{background: tColor}" @click="qd">{{$t('modal.confirmText')}}</view>
				</view>
			</view>
		</mg-popup>
		<!-- #endif -->
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import mgPopup from '@/components/common/popup.vue'
	export default {
		name: 'mg-map',
		components: {
			mgPopup,
		},
		props: {
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
			scale: {
				type: Number,
				default: 12
			},
			value: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				show: false,
				getMapSrc: '',
				chooselocation: '',
				latitude: 13.7854976,
				longitude: 100.5879296,
				list: [],
				current: -1,
				searchAddress: "",
				covers: [],
			}
		},
		computed: {
			...mapState('dndc', ['addInfo', 'latLng']),
			...mapState({
				basicSetting: state => state.config.basicSetting,
			})
			// show: {
			// 	get() {
			// 		return this.value;
			// 	},
			// 	set(newVal) {
			// 		this.$emit("input", newVal)
			// 	}
			// },
		},
		watch: {},
		mounted() {

		},
		methods: {

			confirm(e) {
				console.log(e)
				this.place(this.searchAddress)
			},
			regionchange(e) {
				//console.log(e.latitude)
				console.log(e);
				if (e.type === 'end') {
					
					if(e.detail.centerLocation){
						console.log(e.detail.centerLocation.latitude)
						this.covers = [{
							latitude: e.detail.centerLocation.latitude,
							longitude: e.detail.centerLocation.longitude,
							iconPath: '/static/geocode.png'
						}];
						this.getaddress(e.detail.centerLocation.latitude,e.detail.centerLocation.longitude)
					}
					// 当地图拖动结束时获取中心位置
					// const mapContext = uni.createMapContext('map');
					// mapContext.getCenterLocation({
					// 	success: (res) => {
					// 		console.log(res)
					// 		//this.updateMarkerPosition(res.latitude, res.longitude);
					// 	},
					// });
				}
			},
			async place(address) {
				let {
					data
				} = await this.util.request({
					'url': '/common/place/search-places',
					data: {
						query: address,
						location: this.latitude + ',' + this.longitude
					}
				})
				if (data) {
					console.log(data)
					this.list = data;
				}

			},
			
			async getaddress(latitude,longitude) {
				let {
					data
				} = await this.util.request({
					'url': '/common/place/getaddress',
					data: {
						longitude: longitude,
						latitude: latitude,
					}
				})
				 console.log(data)
				if (data) {
					this.list = data;
				}
			
			},
			async choose() {
				// #ifndef H5
				uni.chooseLocation({
					success: (res) => {
						this.$emit("get-cl", res)
						// console.log(res)
					},
					complete: (res) => {
						console.log(res)
					},
				})
				// #endif
				// #ifdef H5

					if (!this.latLng.lat) {
						uni.getLocation({
							type: 'wgs84',
							success: function(res) {
								console.log('当前位置的经度：' + res.longitude);
								console.log('当前位置的纬度：' + res.latitude);
								this.latitude = res.latitude
								this.longitude = res.longitude

							}
						});
					} else {
						this.latitude = this.latLng.lat
						this.longitude = this.latLng.lng
					}

					this.covers = [{
						latitude: this.latitude,
						longitude: this.longitude,
						iconPath: '/static/geocode.png'
					}];
					this.show = true
					await this.place('')
				// #endif
			},
			qd() {
				const loc = this.chooselocation;
				if (!loc) return this.util.message($t('addres.please_select_location'), 3)
				this.show = false;
				console.log(loc)
				var address = loc.address
				if (!loc.address) {
					address = loc.name
				}
				this.$emit('get-cl', {
					address: address,
					name: loc.name,
					latitude: loc.geometry.location.lat,
					longitude: loc.geometry.location.lng,
				})
				// console.log(loc)
			},

			radioChange(e) {
				console.log(e)
				this.current = e.detail.value;
				var curPlace = this.list[this.current];
				//console.log(curPlace.geometry.location.lat)
				this.chooselocation = curPlace;
				console.log(curPlace)
				this.latitude = curPlace.geometry.location.lat
				this.longitude = curPlace.geometry.location.lng
				this.covers = [{
					latitude: curPlace.geometry.location.lat,
					longitude: curPlace.geometry.location.lng,
					iconPath: '/static/geocode.png'
				}];
			},
			cleanKey() {
				this.searchAddress = ''
				this.list = []
				this.chooselocation = ''
			},
		},
		created() {
			// #ifdef H5
			// this.loadMap()

			// #endif
		}
	}
</script>

<style scoped lang="scss">
	.map {
		width: 750rpx;
		height: 490rpx;
	}

	.iframe {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		padding-top: 0px;

		.map-fb {
			border-top: 1.1px solid #e5e5e5;
			height: 12%;
			padding: 0 8%;

			view {
				width: 45%;
				height: 50%;
				border-radius: 20rpx;
				border: 1.1px solid #d5d5d5;
				color: #666;
			}

			view:nth-child(2) {
				color: #fff;
				border-color: #fff;
			}
		}
	}

	.box {
		padding: 20rpx;
		box-sizing: border-box;
		height: 50vh;

		.label {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #ebebeb;
			padding: 0 20rpx;

			input {
				padding-left: 10rpx;
				flex: 1;
				height: 60rpx;
				line-height: 60rpx;
				box-sizing: border-box;
				border-radius: 10rpx;
				font-size: 28rpx;
			}
		}

		.lists {
			overflow: auto;
			height: calc(100% - 60rpx);

			.list {
				padding: 20rpx 0;
				box-sizing: border-box;
				border-bottom: 1px solid #d4d4d4;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.flex-1 {
					flex: 1;
				}

				.radio {}

				.info {
					margin-top: 10rpx;
					color: #a4a4a4;
					font-size: 24rpx;
				}
			}
		}
	}
</style>