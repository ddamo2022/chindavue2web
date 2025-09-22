<template>
	<view v-if="co.picType==2" :style="{
					margin:`${co.marginTop}${u} ${co.marginLR}${u} ${co.marginBottom}${u}`,
				}">
		<video class="w100"
			v-if="hasKp"
			:style="{height:`${u=='px'?getSjgd(co.height):co.height}${u}`,borderRadius:`${co.tCircle || co.circle}${u} ${co.tCircle|| co.circle}${u} ${co.bCircle|| co.circle}${u} ${co.bCircle|| co.circle}${u}`,}"
			id="myVideo" :src="co.videoUrl" @error="videoErrorCallback" :poster="co.imgUrl[0].img" :autoplay="(co.videoAutoplay && co.videoAutoplay==2 ? false : true) || hasKp" 
			:loop="co.videoLoop && co.videoLoop==1 ? true : false"
			object-fit="cover" :controls="false" :enable-progress-gesture="false"></video>
	</view>
	<block v-else>
		<view v-if="list.length" :class="co.class" :style="{
					margin:`${co.marginTop}${u} ${co.marginLR}${u} ${co.marginBottom}${u}`,
				}">
			<swiper class="swiper" :duration="co.duration"
				:style="{height:`${u=='px'?getSjgd(co.height):co.height}${u}`,borderRadius:`${co.tCircle || co.circle}${u} ${co.tCircle|| co.circle}${u} ${co.bCircle|| co.circle}${u} ${co.bCircle|| co.circle}${u}`,}"
				:indicator-dots="list.length>1" circular="true" indicator-color="#ccc" indicator-active-color="#fff"
				:autoplay="co.auto||true" :interval="co.timeCs && `${co.timeCs}000`  || 5000" duration="500">
				<block v-for="(v,i) in list" :key='i'>
					<swiper-item v-if="v.img">
						<view class='wh o-h' @click="goTo(i)">
							<mg-img :src='v.img||v.url' />
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
	</block>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'picLunbo',
		props: {
			co: {
				type: Object,
				default: function() {
					return {}
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
				StoreAd: [],
				handhasKp:false,
			}
		},
		computed: {
			...mapState({
				hasKp: state => state.config.hasKp,
			}),
			list() {
				if (this.co.reverseThree != 1) {
					return this.co.imgUrl || []
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
				if (d.url) {
					this.goUrl(d.url, d)
				} else if (d.link) {
					switch (d.link.type) {
						case 'webUrl':
							this.go({
								t: 1,
								url: '/pages/other/web-view?src=' + encodeURIComponent(JSON.stringify(d.link.url))
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
			},
			videoErrorCallback(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
		},
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