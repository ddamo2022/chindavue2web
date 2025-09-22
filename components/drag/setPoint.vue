<template>
	<view class="setPoint" :style="{
	      marginTop: co.marginTop + 'px',
	      marginBottom: co.marginBottom + 'px',
	      marginLeft: co.marginLR + 'px',
	      marginRight: co.marginLR + 'px',
	      backgroundColor: co.colorBg,
	      borderTopLeftRadius: co.tCircle + 'px',
	      borderTopRightRadius: co.tCircle + 'px',
	      borderBottomRightRadius: co.bCircle + 'px',
	      borderBottomLeftRadius: co.bCircle + 'px',
	      paddingBottom: co.type == 2 ? '10px' : '',
	    }">
		<view class="tit f-bt" @click="goPoint">
			<view class="f-g-1 f-y-c">
				<!-- <view class="sImg" v-if="co.typeLR">
	          <image :src="co.typeLR" />
	        </view>
	        <view class="sIcon" v-else>
	          <i class="iconfont icon-shinshoplipinqia f16" />
	        </view> -->
				<view class="f14 wei" :style="{ color: co.titCg, fontSize: `${co.titFontSize}px` }">
					{{ util.getTranslation("drag-btn",co.titWord) }}
				</view>
			</view>
			<view class="f-g-0 iconfont icon-gengduo f12"></view>
		</view>
		<block v-if="co.type == 1">
			<view class="body">
				<view class="bodyPoint">
					<view class="pLeft f-nw">
						<view class="pItem" v-for="(v, i) in dPoint.num || 10" :key="i">
							<image class="icImg wh"
								:src="(co.jdICon && co.jdICon.img) || `${onImgurl}common/cup1.png`"
								v-if="dPoint.userData && dPoint.userData.point && i<dPoint.userData.point" />
							<image class="icImg wh" :class="co.jdICon && co.jdICon.img && (!co.jdIConN || co.jdIConN && !co.jdIConN.img)? 'opo' : ''"
								:src=" (co.jdIConN && co.jdIConN.img) || (co.jdICon && co.jdICon.img) || `${onImgurl}common/cup2.png`" />
						</view>
					</view>
					<view class="pRight neutra-font" :style="{ color: co.jdCg }">
						<view class="rightNum">{{dPoint.userData && dPoint.userData.point || 0}}</view>
						<view>/{{dPoint.num}}</view>
					</view>
				</view>
				<view class="bodyFoot neutra-font" :style="{ color: co.msgCg }">
					 <span class="fNum"
						:style="{ color: co.jdCg }">{{dPoint.userData && dPoint.userData.point && (dPoint.num - dPoint.userData.point)  || dPoint.num}}</span>{{dPoint.numName }} {{$t('drag-btn.receive_gifts')}}
				</view>
			</view>
		</block>
		<block v-if="co.type == 2">
			<view class="style2 p2" :style="{ backgroundColor: co.styleBg }">
				<view class="f-bt f-y-c">
					<view class="f-g-0">
						<view class="sIcon" v-if="co.jdICon.img">
							<image :src="co.jdICon.img" class="wh" />
						</view>
						<view class="sIcon f-c" v-else>
							<text class="iconfont icon-naichaxiaochi1 f60" style="color: #a3af81" />
						</view>
					</view>
					<view class="f-g-1 f-y-c">
						<view class="pRight ml20 neutra-font" :style="{ color: co.jdCg }">
							<view class="rightNum">{{dPoint.userData.point || 0}}</view>
							<view>/{{dPoint.num}}</view>
						</view>
						<view class="flex c9 f12 sTip mt10">
							<progress :percent="40" stroke-width="5" border-radius="5" :activeColor="tColor"
								style="width: 200rpx;" />
						</view>
					</view>
					<view class="f-g-0 bBtn" @click="goPoint" :style="{ color: co.btnCg, backgroundColor: co.btnBg}">
						{{ co.btnWord }}
					</view>
				</view>
				<view class="bodyFoot neutra-font" :style="{ color: co.msgCg }">
					<span class="fNum"
						:style="{ color: co.jdCg }">{{dPoint.userData && dPoint.userData.point && (dPoint.num - dPoint.userData.point)  || dPoint.num}}</span>{{dPoint.numName }}{{$t('drag-btn.receive_gifts')}}
				</view>
			</view>
		</block>
	</view>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'setPoint',
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
		},
		data() {
			return {};
		},
		computed: {
			...mapState({
				dPoint: state => state.layout.orderCollect || {},
			})
		},
		methods: {
			goLink(v) {
				this.goUrl(v.url)
			},
			goPoint() {
				uni.setStorageSync('pointDl', this.co)
				this.go({
					t: 1,
					url: '/pages/other/setPoint/pointdl'
				})
			}
		},
	};
</script>
<style lang="scss" scoped>
	.setPoint {
		.el {
			padding: 60rpx 0;
		}

		.desc {
			font-size: 24rpx;
		}

		.tit {
			padding: 30rpx 20rpx;
			column-gap: 16rpx;
			font-size: 26rpx;
		}

		.body {
			margin: 0 0 24rpx 0;

			.bodyPoint {
				display: flex;
				align-items: center;

				.pLeft {
					flex: 1;
					height: 60rpx;
					overflow: hidden;
					overflow-x: scroll;

					.pItem {
						display: inline-block;
						width: 60rpx;
						height: 60rpx;
						margin: 0 4rpx;
						vertical-align: middle;
						position: relative;
						overflow: hidden;
					}
				}

				.pRight {
					font-weight: 400;
					font-size: 28rpx;
					line-height: 34rpx;
					display: flex;
					margin-right: 16rpx;
					align-items: baseline;

					.rightNum {
						font-size: 60rpx;
						font-weight: 700;
					}
				}
			}

			.bodyFoot {
				margin-top: 16rpx;
				margin-left: 20rpx;
				font-style: normal;
				font-weight: 400;
				font-size: 28rpx;
				line-height: 50rpx;
				color: #999;

				.fNum {
					// margin: 0 20rpx;
				}
			}
		}

		.style2 {
			background: #f5f5f5;
			border-radius: 16rpx;

			.sIcon {
				width: 100rpx;
				height: 100rpx;
				background: #eaf1d0;
				border-radius: 50%;
				overflow: hidden;
			}

			.pRight {
				font-weight: 400;
				font-size: 28rpx;
				line-height: 34rpx;
				display: flex;
				margin-right: 16rpx;
				align-items: baseline;

				.rightNum {
					font-size: 60rpx;
					font-weight: 700;
				}
			}

			.bBtn {
				width: 160rpx;
				height: 68rpx;
				border-radius: 34rpx;
				font-size: 26rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #333;
				color: #fff;
			}

			.bodyFoot {
				margin-top: 16rpx;
				margin-left: 20rpx;
				font-style: normal;
				font-weight: 400;
				font-size: 28rpx;
				line-height: 50rpx;
				color: #999;

				.fNum {
					margin: 0 20rpx;
				}
			}

			.sTip {
				.el-progress {
					width: 200rpx;
					margin-right: 10rpx;
					vertical-align: middle;
					position: relative;
					line-height: 1;
				}
			}
		}
		.opo{
			opacity: 0.2;
		}
	}
</style>