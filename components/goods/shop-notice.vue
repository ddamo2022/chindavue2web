<template>
	<view>
		 <view class="f-bt c9 p2" v-if="dType=='ins'">
		 	<view class="f-1 f-y-c f24">
		 		<text class="iconfont icon-xiaoxi mr15 f32"></text>
		 		<text class="t-o-e c3" @click="ggxq(sjxx.gg)">{{sjxx.gg && sjxx.gg.title || $t('shop-notice.welcome')}}</text>
		 	</view>
		 	<view class="f24 ml20 f-y-c c3" @click="open">{{dType=='ins'? $t('shop-notice.store_information'): $t('shop-notice.more')}}
		 		<text class='iconfont icon-youjiantou f24 ml5 c9'></text>
		 	</view>
		 </view>
		<view class="f-bt c9 p02" v-else>
			<view class="f-1 f-y-c f24">
				<text class="iconfont icon-xiaoxi mr15 f32" :style="{color:tColor}"></text>
				<text class="t-o-e" @click="ggxq(sjxx.gg)">{{sjxx.gg && sjxx.gg.title || $t('shop-notice.welcome')}}</text>
			</view>
			<view class="f24 ml20 f-y-c c3" @click="open">{{dType=='ins'? $t('shop-notice.store_information'): $t('shop-notice.more')}}
				<text class='iconfont icon-youjiantou f24 ml5 c9'></text>
			</view>
		</view>
		<uni-popup ref="popup" type="top" :sname="{top:`${sHeight}rpx`}" :tTop="sHeight">
			<view class="shopInfo p2">
				<view class="f24 c9 djsq posi-a" @click="close">{{ $t('shop-notice.click_to_collapse')}}</view>
				<block v-if="sjxx.fullSub || sjxx.newSub">
					<view class="f-bt">
						<view class="f-g-1 wei f30 c0">{{ $t('shop-notice.discount')}}</view>
					</view>
					<view class="flex mt20 mb20" v-if="sjxx.fullSub">
						<view class="label f-y-c f-g-0" :style="{borderColor:tColor,color:tColor}">{{ $t('shop-notice.full_reduction')}}</view>
						<view class="f-bt f-g-1">
							<view class="ml20 f-g-1">{{mjtxt}}</view>
							<view class="f-g-0 basec t-d-ul" :style="{color:tColor}"  @click="ckac(1)">{{ $t('shop-notice.view')}}</view>
						</view>
					</view>
					<view class="flex mt20 mb20" v-if="sjxx.newSub">
						<view class="label f-y-c f-g-0" :style="{borderColor:tColor,color:tColor}">{{ $t('shop-notice.new_customer_discount')}} </view>
						<view class="f-bt f-g-1">
							<view class="ml20 f-g-1">{{ $t('shop-notice.instant_discount')}}{{sjxx.newSub.money}}</view>
							<view class="f-g-0 basec t-d-ul" :style="{color:tColor}"  @click="ckac(2)">{{ $t('shop-notice.view')}}</view>
						</view>
					</view>
				</block>

				<block v-if="dType!='ins' && sjxx.takeoutSwitch">
					<view class="f-bt">
						<view class="f-g-1 wei f30 c0">{{ $t('shop-notice.instant_discount')}}</view>
					</view>
					<view class='f26 c9 mt20' v-if="sjxx.delivery">
						<block v-if="sjxx.delivery.state==1">
							<view>
								{{ $t('shop-notice.full')}} {{sjxx.delivery.startMoney}}{{sjxx.delivery.startRule.type==1?'THB':'件'}} {{ $t('shop-notice.starting_delivery')}}，{{ $t('shop-notice.delivery_fee')}}{{sjxx.delivery.money}} {{ $t('shop-notice.currency')}}
							</view>
							<view class="mt10"> {{ $t('shop-notice.store_by')}}
								<block v-if="sjxx.delivery.deliveryType==1">
									<text v-if="sjxx.delivery.channel.includes(1)">{{sjxx.delivery.deliveryData && sjxx.delivery.deliveryData.find(v => v.type == 1).name || $t('shop-notice.mytian_delivery')}}、</text>
									<text v-if="sjxx.delivery.channel.includes(2)">{{sjxx.delivery.deliveryData && sjxx.delivery.deliveryData.find(v => v.type == 2).name || $t('shop-notice.makeco_delivery')}}</text>
									<text v-if="sjxx.delivery.channel.includes(3)">{{sjxx.delivery.deliveryData && sjxx.delivery.deliveryData.find(v => v.type == 3).name || $t('shop-notice.wsb_delivery')}}</text>
								</block>
								<block v-if="sjxx.delivery.deliveryType==2">
								 {{	$t('shop-notice.merchant_self_delivery') }}
								</block>
								{{	$t('shop-notice.delivery_service_provided') }}，{{	$t('shop-notice.store_delivery_range') }}{{sjxx.delivery.km}} {{$t('shop-notice.within_kilometers') }}( {{$t('shop-notice.delivery_range_weather_influence') }}，{{$t('shop-notice.real_time_delivery_range') }})
								
							</view>
						</block>
						<block v-else>
							<view>{{sjxx.delivery.msg}}</view>
						</block>
					</view>
				</block>

				<view class="f-bt mt40">
					<view class="f-g-1 wei f30 c0">{{$t('shop-notice.store_information') }}</view>
				</view>
				<view class='flex f26 c9 mt20'>
					<view>{{$t('shop-notice.business_hours') }}：</view>
					<view>{{yysj}}</view>
				</view>
				<view class='flex f26 c9 mt20'>
					<view>{{$t('shop-notice.contact_information') }}：</view>
					<view>{{sjxx.storeMobile}}</view>
					<view class="label ml10" :style="{borderColor:tColor,color:tColor}"
						@click='util.makeTel(sjxx.storeMobile)'>{{$t('shop-notice.call_now') }}</view>
				</view>
				<view class='flex f26 c9 mt20'>
					<view>{{$t('shop-notice.store_address') }}：</view>
					<view>{{sjxx.address}}</view>
				</view>
				<view class='flex f26 c9 mt20'>
					<view class="basec t-d-ul" :style="{color:tColor}" @click="ckda">{{$t('shop-notice.view_store_services') }}</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import utils from '@/common/utils.js'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup,
		},
		props: {
			dType: {
				type: String,
				default: () => 'out'
			}
		},
		data() {
			return {
				notices: [],
				showShop: false,
			}
		},
		computed: {
			...mapState(['sjxx']),
			yysj() {
				let text = ''
				let info = this.sjxx
				if (info.businessData && info.businessData.times) {
					text =
						`${info.businessData.times[0].start}-${info.businessData.times[0].ciri? this.$t('shop-notice.next_day'):''}${info.businessData.times[0].end}`
					if (info.businessData.times[1]) {
						text += ' ' +
							`${info.businessData.times[1].start}-${info.businessData.times[1].ciri?this.$t('shop-notice.next_day'):''}${info.businessData.times[1].end}`
					}
					if (info.businessData.times[2]) {
						text += ' ' +
							`${info.businessData.times[2].start}-${info.businessData.times[2].ciri?this.$t('shop-notice.next_day'):''}${info.businessData.times[2].end}`
					}
				}
				return text
			},
			sHeight(){
				return (75+32+this.util.getSb().statusBarHeight)*2
			},
			mjtxt() {
				let f = this.sjxx.fullSub
				if (f && f.rulesType == 2) {
					return `${this.$t('shop-notice.every_full')} ${f.rules.full} ${this.$t('shop-notice.reduce')}${f.rules.sub} ${this.$t('shop-notice.maximum_reduction')}${f.rules.max}`
				} else if (f && f.rulesType == 1) {
					return f.rules.map(v => `${this.$t('shop-notice.full')} ${v.full} ${this.$t('shop-notice.reduce')}${v.sub}`).reverse().toString()
				}
			},
		},
		methods: {
			open() {
				this.$refs['popup'].open()
			},
			close() {
				this.$refs['popup'].close()
			},
			ckda() {
				this.go({
					t: 1,
					url: '/pages/shop/out/sjjs?type=2&info=' + encodeURIComponent(JSON.stringify(this.sjxx))
				})
			},
			ckac(type) {
				this.go({
					t: 1,
					url: `/pages/shop/activity?type=${type}`
				})
			},
			ggxq(v){
				uni.setStorageSync('fwb', v.contents)
				this.go({
					t: 1,
					url: `/pages/my/other/gywm?t=${v.title}&p=5`
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.shopInfo {
		border-radius: 0 0 35rpx 35rpx;
		width: 100%;
		// height: 860rpx;
		position: absolute;
		background: #fff;
		padding-bottom: 40rpx;
		// top: -44rpx;

		.label {
			font-size: 20rpx;
			border-radius: 8rpx;
			padding: 2rpx 16rpx;
			border: 2rpx solid $text-color-base;
		}

		.basec {
			color: $text-color-base;
		}
		
		.djsq{
			right: 30rpx;
			top: 30rpx;
		}
	}

	.mt40 {
		margin-top: 40rpx;
	}
</style>