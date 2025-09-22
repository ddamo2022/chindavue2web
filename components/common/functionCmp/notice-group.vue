<template>
	<view @click="goLink" class="bf" :style="{padding:co.txtOrImg==0?'25rpx 30rpx 0rpx':`${co.upDownPadding}${u} ${co.leftRightPadding}${u}`,marginTop:`${co.topMargin}${u}`}">
		<view class="p03 f-y-c" :style="[{backgroundColor:co.backgroundColor,borderRadius:co.txtOrImg==0?'20rpx':0,paddingRight: co.txtOrImg==0?'15rpx':''},sname]">
			<view class="f-g-0">
				<view v-if="co.txtOrImg==1&&co.icon[0].url" class="limg mr20">
					<mg-img m='aspectFit' :src='co.icon[0].url' />
				</view>
				<view v-else class="mr20 ggbt wei" :style="{color:co.notice.color,fontSize:co.notice.fontSize,}">{{co.notice.title}}</view>
			</view>
			<view class="f-g-1 ngr b-s1 bs10" :style="{height:co.txtOrImg==0?'70rpx':''}">
				<uni-notice-bar v-if="type==1&&notice" :scrollable="true" :single="true" :color="co.txtOrImg==0?'#8B5C42':tColor"
				 :background-color="co.backgroundColor" :text="notice" />
				<swiper v-else class="wh" circular="true" vertical="true" :autoplay="true" interval="2000">
					<block v-for="(v,i) in nlist" :key='i'>
						<swiper-item @click.stop="goDl(v)" class='f-c-xc'>
							<!-- <rich-text class='w100 c6 f24 t-o-e' :nodes="v.title"></rich-text> -->
							<view class='c6 f24 t-o-e' :style="{color:co.txtOrImg==0?'#8B5C42':''}">{{v.title}}</view>
						</swiper-item>
					</block>
				</swiper>
			</view>
			<text v-if="co.txtOrImg==0&&type!=1" class="ml10 iconfont iconright" style="color:#8B5C42;"></text>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import uniNoticeBar from '@/components/third/uni-notice-bar.vue'
	export default {
		name: 'searchBox',
		components: {
			uniNoticeBar
		},
		props: {
			co: {
				type: Object,
				default: function() {
					return {
						icon: [],
						link: {},
						notice: {},
						txtOrImg: 1,
					}
				}
			},
			sjxx: {
				type: Object,
				default: function() {
					return {}
				}
			},
			u: {
				type: String,
				default: 'px'
			},
			ptype: {
				type: String,
				default: '1' //1首页2积分商城主页3会员
			},
			type: {
				type: String,
				default: '1'
			},
			list: {
				type: Array,
				default: function() {
					return []
				}
			},
			sname: Object,
			color: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				notice: '',
				nlist: [],
			}
		},
		watch: {
			sjxx: {
				handler(newVal) {
					if (newVal.storeInfo) {
						this.notice = newVal.storeInfo.notice
						// this.list = [{
						// 	content: newVal.storeInfo.notice
						// }]
					}
					// console.log('newVal', newVal)
				},
				immediate: true
			},
		},
		methods: {
			goLink() {
				this.goUrl(this.co.link)
			},
			goDl(v) {
				uni.setStorageSync('fwb', v.content)
				this.go({
					t: 1,
					url: `/pages/my/other/gywm?t=${v.title}&p=4`
				})
			}
		},
		async created() {
			// console.log('notice-group', this.ptype, this.list)
			switch (+this.ptype) {
				case 1:
					let {
						data
					} = await this.util.request({
						'url': this.api.Notice,
					})
					this.nlist = data
					break;
				case 2:
					this.nlist = this.list
					break;
				default:
					break;
			}
		},
	}
</script>

<style scoped lang="scss">
	.ggbt {
		// transform: skew(-12deg, 0deg);
		padding: 1rpx 12rpx 1rpx 0;
		font-size: 24rpx;
		border-radius: 7rpx;
		// background: linear-gradient(to right, #FE8F43, #FD4C44);
	}

	.limg {
		width: 80rpx;
		height: 50rpx;
	}

	.ngr {
		padding: 10rpx 0rpx;
		height: 80rpx;
	}
</style>
