<template>
	<uni-popup ref="popup" type="center">
		<view class="bs30 bf">
			<map class="map" @callouttap='markertap' :latitude="sjxx.lat" :longitude="sjxx.lng" :markers="setCovers"
				scale='12'>
			</map>
			<view class="p3 f24">
				<view class="c9">{{$t("check-shop.please_confirm_pickup_store")}}</view>
				<view class="wei f32 mt10">{{sjxx.name}}</view>
				<view class="flex f-y-c c9 mt10">
					<view class="mr10"><text class='iconfont icon-dingwei f28 c9'></text></view>
					<view>{{$t("check-shop.distance_from_you")}}{{sjxx.distance}}</view>
				</view>
				<view class="mt10">{{sjxx.address}}</view>
				<view class="f-bt mt30 p03">
					<button type="primary" plain class="buy-now-btn f-g-1 bs60 f32"
						:style="{color:tColor,borderColor:tColor}" @click="goSelect"
						v-if="storeBasicSetting.changState!=2">{{$t("check-shop.change_store")}}</button>
					<button type="primary" class="add-cart-btn f-c f-g-1 ml20 bs60 f32"
						:style="{backgroundColor:tColor,color:fontColor}" @click="gopay">{{$t("check-shop.this_one")}}</button>
				</view>
			</view>
		</view>
		<view class="f-c cIcon" @click="close">
			<text class="cf icon-guanbi1 iconfont"></text>
		</view>
	</uni-popup>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		name: 'CheckShop',
		components: {

		},
		props: {
			visible: {
				type: Boolean,
				default: false
			},
		},
		computed: {
			...mapState(['sjxx']),
			...mapState({
				storeBasicSetting: state => state.config.storeBasicSetting,
			}),
			setCovers() {
				let v = this.sjxx
				return [{
					id: +v.id,
					latitude: v.lat,
					longitude: v.lng,
					iconPath: '/static/geocode.png',
					width: '25',
					height: '25',
					callout: {
						content: v.name + '>',
						color: '#333',
						fontSize: 14,
						borderRadius: 3,
						bgColor: '#fff',
						padding: 7,
						display: 'ALWAYS',
						textAlign: 'center',
					},
				}]
			},
		},
		data() {
			return {
				storeId: 58,
				latitude: 39.909,
				longitude: 116.39742,
				covers: [],
			}
		},
		methods: {
			open() {
				this.$refs['popup'].open()
			},
			close() {
				this.$refs['popup'].close()
			},
			goSelect() {
				this.close()
				uni.navigateTo({
					url: '/pages/shop/select/index?page=payOrder'
				})
			},
			gopay() {
				this.close()
				this.$emit('pay')
			},
		}
	}
</script>

<style scoped lang="scss">
	.map {
		width: 680rpx;
		height: 350rpx;
	}

	.cIcon {
		margin-top: 45rpx;

		.icon-guanbi1 {
			font-size: 70rpx;
		}
	}
</style>