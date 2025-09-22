<template>
	<view :style="{
			backgroundColor: co.colorBg,
			margin:`${co.marginTop}${u} ${co.marginLR}${u} ${co.marginBottom}${u}`,
			borderRadius: `${co.tCircle}${u} ${co.tCircle}${u} ${co.bCircle}${u} ${co.bCircle}${u}`,
		}" :class='[bgc]' v-if="ebg.btnList.length>0">
		<view class="zjTit" v-if="ebg.titShow == 1" :style="{ fontSize: `${ebg.titFontSize}px`, }">{{ebg.titWord}}
		</view>
		<swiper :style="{height:`${ebg.height}rpx`}" :circular='ebg.circular' :indicator-dots='showdot'
			indicator-color='#f5f5f5' indicator-active-color='#ccc' :autoplay='ebg.autoplay' :interval='ebg.interval'>
			<swiper-item v-for='(pv,pi) in ebg.btnList' :key='pi'>
				<view class='f-row swiper-v'>
					<block v-for='(v,i) in pv' :key='i'>
						<view @click='goTo(v)' :style="{width:`${ebg.width}%`,height:iheight+'rpx'}" class='f-c-c p-r'>
							<view class='swiper-imgv o-h'
								:style="{width: `${ebg.btnSize}px`,height: `${ebg.btnSize}px`,borderRadius: co.circleBtn + '%'}">
								<mg-img :src='v.img' />
							</view>
							<view
								:style="[{color:ebg.active&&activeIndex==v.id?color:ebg.colorWord,fontSize: `${ebg.btnFontSize}px`,fontWeight: ebg.btnBold==1?'bold':'none'},ebg.tsname]"
								class='swiper-tv mt10 t-o-e'> {{ util.getTranslation("drag-btn",v.word) }}</view>
							<view v-if="v.labelOpen==1" class="p-a swiper-fbt br bs30 cf f-c"
								:style="{background:v.colorLabelBg}">{{ util.getTranslation("drag-btn",v.labelWord) }}</view>
						</view>
					</block>
				</view>
			</swiper-item>

		</swiper>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		scanCode
	} from "@/common/wechat-util.js"
	import mgModal from '@/components/common/modal.vue'
	import bkB from '@/components/common/block-b.vue'
	import MgCell from '@/components/common/my-cell.vue'
	import MgImg from '@/components/common/my-img.vue'
	export default {
		name: 'btn',
		components: {
			mgModal,
			bkB,
			MgCell,
			MgImg,
		},
		props: {
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
			iheight: { //一行的高度
				type: String,
				default: '170'
			},
			oheight: { //额外加的高度
				type: Number,
				default: 0
			},
			u: {
				type: String,
				default: 'px'
			},
			color: {
				type: String,
				default: ''
			},
			imgw: {
				type: String,
				default: ''
			},
			bgc: '',
		},
		data() {
			return {
				ebg: {
					class: '',
					padding: 0,
					topMargin: 0,
					buttonNumberOfCol: 5,
					buttonNumberOfRow: 1,
					color: "#666",
					btnList: [],
					shape: 1,
					autoplay: true,
					circular: true,
					interval: '5000'
				},
				show: false,
				showsm: false,
				shareshow: false,
				activeIndex: -1,
			}
		},
		computed: {
			...mapState(['sjxx', 'sjwifi']),
			showdot() {
				return this.ebg.btnList.length > 1
			},
		},
		watch: {
			co: {
				handler(newVal) {
					let typeObj = Object.assign({}, newVal),
						colnum = newVal.num,
						rownum = newVal.line,
						height;
					var navs = [];
					if (typeObj.btnList.length > 0) {
						for (var i = 0, len = typeObj.btnList.length; i < len; i += colnum * rownum) {
							navs.push(typeObj.btnList.slice(i, i + colnum * rownum));
						}
						// console.log(navs)
						// return
						if (rownum == 2 && navs[0].length > colnum) {
							height = navs.length > 1 ? this.iheight * 2 + 20 : this.iheight * 2;
						} else if (rownum == 3 && navs[0].length > colnum) {
							height = navs.length > 1 ? this.iheight * 3 + 20 : this.iheight * 3;
						} else {
							height = navs.length > 1 ? +this.iheight + 20 : this.iheight;
						}
					}
					typeObj.width = 100 / colnum
					typeObj.btnList = navs
					typeObj.height = +height + this.oheight
					this.ebg = Object.assign({}, this.ebg, typeObj)
					// console.log('newVal', newVal, this.ebg)
				},
				immediate: true
			},
			// co(newValue, oldValue) {
			// 	console.log(newValue);
			// 	//this.styles = Object.assign({}, this.styles, newValue);
			// }
		},
		methods: {
			goTo(v) {
				console.log(v.url)
				if (v.url) {
					if (v.url.name.id == 'swifisc') {
						this.show = true
					} else if (v.url.param == 'inStore') {
						this.showsm = true
					} else if (v.url.param == 'share') {
						this.shareshow = true
					} else if (v.url.param == 'reserve' || v.url.param == 'queuing') {
						if (this.sjxx.storeInfo.isOpen == 1) {
							this.goUrl(v.url, v)
						} else {
							this.util.message( this.$t("drag-btn.merchant_on_break"), 3)
						}
					} else {
						this.goUrl(v.url, v)
					}
				} else {
					this.activeIndex = v.id == this.activeIndex ? -1 : v.id
					this.$emit('tabitem', v.id == this.activeIndex ? v : {})
				}
			},
			smdc() {
				this.showsm = false
				scanCode(this)
			},
		},
	}
</script>

<style scoped lang="scss">
	.swiper-v {
		width: 100%;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	.swiper-imgv {
		margin-top: 15rpx;
		width: 88rpx;
		height: 88rpx;
	}

	.swiper-tv {
		font-size: 24rpx;
		width: 100%;
		text-align: center;
	}

	.swiper-fbt {
		top: 10rpx;
		right: 10rpx;
		padding: 0rpx 10rpx;
		font-size: 18rpx;
	}

	.dbbtnc {
		height: 100rpx;
	}

	.smc {
		padding: 100rpx 40rpx 30rpx;
	}

	.smimg {
		width: 190rpx;
		height: 190rpx;
	}

	.foot-btn {
		height: 84rpx;
		line-height: 84rpx;
	}
</style>