<template>
	<view class="lines" :style="{
			marginTop: co.marginTop + u,
			marginBottom: co.marginBottom + u,
			marginLeft: co.marginLR + u,
			marginRight: co.marginLR + u,
			borderRadius: `${co.tCircle}${u} ${co.tCircle}${u} ${co.bCircle}${u} ${co.bCircle}${u}`,
			background: co.colorBg,
		}">
		<view class="orderC">
			<view class="f-bt bT f-y-c p1" @click="myorder">
				<view class="f-g-1 flex f-y-c">
					<view class="mr10" v-if="co.iconOpen == 1">
						<view class="balanceIcon" v-if="co.titImg.url">
							<mg-img :src="co.titImg.url"></mg-img>
						</view>
						<text v-else class="iconfont icon-duodingdan c9 f32"></text>
					</view>
					<view :style="{ color: co.wordColor }">{{ co.word }}</view>
				</view>
				<view class="f-g-0 flex">
					<text class='iconfont icon-gengduo f28 c9'></text>
				</view>
			</view>
			<!-- <scroll-view scroll-x class="mt20">
				<view class="flex f-nw w-100"></view>
				</view>
			</scroll-view> -->
			<view v-if="ddList.length<=0" class="f24 f-c c9 p2">
				<text class='iconfont icon-zanwudingdan f28 c9 mr10'></text>
				<text>{{$t("common.noOrdersYet")}}~</text>
			</view>
			<swiper v-else class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(v,i) in ddList" :key="i">
					<view class="orderB f-bt f-y-c p1 f-g-0">
						<view class="f-g-1 wei f48 c0 neutra-font">
							{{v.pickNo}} <span class="f24 c6 nowei"> {{v.stateFormat}}</span>
						</view>
						<view class="f-g-1" v-if="v.scene==2">
							<view class="f-bt f-y-c">
								<view class="f-g-1 f-c">
									<text class="iconfont icon-duodingdan f56"
										:style="{color:v.state==2?tColor:'#999'}"></text>
								</view>
								<view class="spilt" :style="{color:v.state==3?tColor:'#999'}"></view>
								<view class="f-g-1 f-c">
									<text class="iconfont icon-shouye f56"
										:style="{color:v.state==3?tColor:'#999'}"></text>
								</view>
								<view class="spilt scf" :style="{color:v.state==4?tColor:'#999'}"></view>
								<view class="f-g-1 f-c">
									<text class="iconfont icon-biaodanwancheng f56 cf5"
										:style="{color:v.state==4?tColor:'#999'}"></text>
								</view>
							</view>
						</view>
						<view class="f-g-1" v-if="v.scene==1">
							<view class="f-bt f-y-c">
								<view class="f-g-1 f-c">
									<text class="iconfont icon-duodingdan f56"
										:style="{color:v.state==2?tColor:'#999'}"></text>
								</view>
								<view class="spilt" :style="{color:v.state==3 || v.state==4?tColor:'#999'}"></view>
								<view class="f-g-1 f-c">
									<text class="iconfont icon-shouye f56"
										:style="{color:v.state==3 || v.state==4?tColor:'#999'}"></text>
								</view>
								<view class="spilt scf" :style="{color:v.state==5?tColor:'#999'}"></view>
								<view class="f-g-1 f-c">
									<text class="iconfont icon-waimai- f56 cf5"
										:style="{color:v.state==5?tColor:'#999'}"></text>
								</view>
								<view class="spilt scf" :style="{color:v.state==6?tColor:'#999'}"></view>
								<view class="f-g-1 f-c" :style="{color:v.state==6?tColor:'#999'}">
									<text class="iconfont icon-biaodanwancheng f56 cf5"></text>
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'o-status',
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
			wccdd: {
				type: Array,
				default: []
			},
		},
		watch: {
			wccdd: {
				handler(newVal) {
					this.ddList = newVal
				}
			}
		},
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				ddList: [],
			};
		},
		methods: {
			goTo(v) {
				this.goUrl(v.url, v)
			},
			myorder() {
				this.go({
					t: 6,
					url: "/pages/index/order-index"
				})
			},
		},
	};
</script>
<style lang="scss" scoped>
	.orderC {
		display: flex;
		flex-direction: column;
		width: 100%;
		border-radius: 20rpx;

		.bT {
			height: 100rpx;

			.balanceIcon {
				width: 28rpx;
				height: 28rpx;
			}
		}

		.orderB {
			height: 100rpx;
			width: 100%;

			.spilt {
				height: 0;
				width: 24rpx;
				border: 2rpx dashed #333;
			}

			.scf {
				border: 2rpx dashed #cfcfcf;
			}

			.cf5 {
				color: #cfcfcf;
			}

			.stepIcon {
				width: 50rpx;
				height: 50rpx;
			}
		}
	}

	.swiper {
		height: 100rpx;
	}
</style>