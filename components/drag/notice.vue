<template>
	<view class="notice" :style="{
			marginTop: co.marginTop + u,
			marginBottom: co.marginBottom + u,
			marginLeft: co.marginLR + u,
			marginRight: co.marginLR + u,
		}">
		<view class="f-y-c p02"
			:style="{ background: co.colorBg, borderRadius: `${co.tCircle}${u} ${co.tCircle}${u} ${co.bCircle}${u} ${co.bCircle}${u}` }">
			<view class="f-g-0">
				<view v-if="co.slotLeft==2" class="ggbt wei mr20"
					:style="{color:co.leftText.color,background: co.leftText.colorBg}">{{co.leftText.text}}</view>
				<block v-else>
					<view v-if="co.hand[0].img" class="limg mr20">
						<mg-img m='aspectFit' :src='co.hand[0].img' />
					</view>
					<text v-else class="iconfont icon-gg mt0 f38 mr10"></text>
				</block>
			</view>
			<view class="f-g-1 ngr b-s1 bs10" :style="{height:notice?'70rpx':''}">
				<!-- <uni-notice-bar v-if="type==1&&notice" :scrollable="true" :single="true"
					:color="ptype==1?co.colorWord:co.hand[0].img?tColor:'#8B5C42'"
					:background-color="co.backgroundColor" :text="notice" /> -->
				<swiper class="wh" circular="true" :vertical="co.mode==1 ? true : false" :autoplay="true" interval="2000">
					<block v-for="(v,i) in nlist" :key='i'  v-if="i!=='isget'">
						<swiper-item @click.stop="goDl(v)" class='f-c-xc'>
							<view class='c6 f26 t-o-e' :style="{color:co.colorWord}">{{v.title}}</view>
						</swiper-item>
					</block>
				</swiper>
			</view>
			<!-- <text v-if="arrow&&!notice" class="iconfont icon-right" :style="{color:co.colorWord}"></text> -->
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'notice',
		components: {
		},
		props: {
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
			u: {
				type: String,
				default: 'px'
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
			color: {
				type: String,
				default: ''
			},
			arrow: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				notice: '这里是公告',
			}
		},
		computed: {
			...mapState({
				nlist: state => state.layout.notice || [],
			})
		},
		methods: {
			goDl(v) {
				uni.setStorageSync('fwb', v.contents)
				this.go({
					t: 1,
					url: `/pages/my/other/gywm?t=${v.title}&p=5`
				})
			}
		},
	}
</script>

<style scoped lang="scss">
	.ggbt {
		// transform: skew(-12deg, 0deg);
		padding: 1rpx 12rpx;
		font-size: 28rpx;
		border-radius: 7rpx;
		// background: linear-gradient(to right, #FE8F43, #FD4C44);
	}

	.limg {
		width: 48rpx;
		height: 48rpx;
	}

	.ngr {
		padding: 10rpx 0rpx;
		height: 80rpx;
	}
</style>
