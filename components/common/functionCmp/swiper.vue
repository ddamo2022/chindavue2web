<template>
	<view class="" v-if="list.length" :class="co.class" :style="{marginTop:`${co.topMargin||''}${u}`,padding:co.class?'':`${co.upDownPadding||'0'}${u} ${co.leftRightPadding||'0'}${u}`,}">
		<swiper class="swiper" :duration="co.duration" :style="{height:`${u=='px'?getSjgd(co.height):co.height}${u}`,borderRadius:`${co.radius}${u}`,}"
		 :indicator-dots="list.length>1" circular="true" indicator-color="#ccc" indicator-active-color="#fff" :autoplay="co.auto||true"
		 :interval="co.interval*1000" duration="500">
			<block v-for="(v,i) in list" :key='i'>
				<swiper-item>
					<!-- #ifdef MP-WEIXIN
					<navigator wx:if="{{item.mini.type=='mini'}}" target='miniProgram' app-id='{{item.mini.url}}' class='wh'>
						<image mode="{{co.mode}}" src="{{item.url}}" class="wh" />
					</navigator>
					#endif  :style="{borderRadius:`${co.radius}${u}`,}" -->
					<view class='wh bf6 o-h' @click="goTo(i)">
						<mg-img :src='v.icon||v.url' />
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'swiper',
		props: {
			co: {
				type: Object,
				default: function() {
					return {
						class: '',
						topMargin: 0,
						leftRightPadding: 0,
						upDownPadding: 0,
						swiper: {
							children: []
						},
						duration: '',
						mode: '',
						height: '',
						radius: '',
						auto: true,
						interval: 5,
					}
				}
			},
			storeInfo: {
				type: Object,
				default: function() {
					return {}
				},
			},
			u: {
				type: String,
				default: 'px'
			},
			color: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				StoreAd: []
			}
		},
		computed: {
			list() {
				if (this.co.reverseThree != 1) {
					return this.co.swiper || []
				} else {
					return this.StoreAd
				}
			},
		},
		watch: {
			storeInfo: {
				async handler(newVal) {
					if (this.storeInfo.id && this.co.reverseThree == 1) {
						let {
							data
						} = await this.util.request({
							'url': this.api.StoreAd,
							data: {
								type: 1,
								storeId: this.storeInfo.id,
							}
						})
						this.StoreAd = data
					}
					// console.log('newVal', newVal)
				},
				immediate: true
			},
		},
		methods: {
			goTo(i) {
				let d = this.list[i]
				if (d.entry) {
					this.goUrl(d.entry, d)
				} else if (d.link) {
					switch (d.link.type) {
						case 'webUrl':
							this.go({
								t: 1,
								url: '/yb_wm/other/web-view?src=' + encodeURIComponent(JSON.stringify(d.link.url))
							})
							break;
						case 'miniUrl':
							uni.navigateTo({
								url: d.link.url,
							})
							break;
						case 'mini':
							uni.navigateToMiniProgram({
								appId: d.link.url,
								path: d.link.xcx_name,
							})
							break
					}
				}
			}
		},
		async created() {},
	}
</script>

<style scoped lang="scss">
	.swiper {
		width: 100%;
		height: 350rpx;
		overflow: hidden;
		transform: translateY(0)
	}
</style>
