<template>
	<view class="myPro">
		<view class="tit">{{$t("my.myorder")}}</view>
		<view class="proList">
			<block v-for="(v, i) in styles.orderList" :key="i">
				<view
					v-if="v.url && v.url.name && v.url.name.id=='contactCustomer' && basicSetting && basicSetting.relation  && basicSetting.relation.length==1 && basicSetting.relation.includes(2)"
					class="item">
					<button class="sevBtn" :style="{ color: v.leftColor }"
						v-if="basicSetting.relService==2 && basicSetting.connect" @click="zxkf">
						<view class="nem">
							<img :src="v.img" v-if="v.img" />
							<img :src="v.icon || `${onImgurl}no.png`" v-else />
						</view>
						<view class="dc mt10 f24">
							<span class="ml5" :style="{ color: v.leftColor }"> {{ util.getTranslation("my",  v.leftWord) }}</span>
						</view>
					</button>
					<button class="sevBtn" :style="{ color: v.leftColor }" v-else open-type='contact'>
						<view class="nem">
							<img :src="v.img" v-if="v.img" />
							<img :src="v.icon || `${onImgurl}no.png`" v-else />
						</view>
						<view class="dc mt10 f24">
							<span class="ml5" :style="{ color: v.leftColor }">{{ util.getTranslation("my",  v.leftWord) }}</span>
						</view>
					</button>
				</view>
				<view v-else class="item" @click="goTo(v)">
					<view class="nem">
						<img :src="v.img" v-if="v.img" />
						<img :src="v.icon || `${onImgurl}no.png`" v-else />
						<!-- <text v-else class="iconfont f40 c3" :class="v.icon"></text> -->
					</view>
					<view class="dc mt10 f24">
						<span class="ml5" :style="{ color: v.leftColor }">{{ util.getTranslation("my",  v.leftWord) }}</span>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'myOrder',
		props: {
			styles: {
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
		computed: {
			...mapState({
				basicSetting: state => state.config.basicSetting,
			}),
		},
		data() {
			return {
				usImg: '',
				usrImg: '',
			};
		},
		methods: {
			goTo(v) {
				if (v.url) {
					this.goUrl(v.url, v)
				}
			},
			zxkf() {
				// #ifdef  MP-WEIXIN
				wx.openCustomerServiceChat({
					extInfo: {
						url: this.basicSetting.connect
					},
					corpId: this.basicSetting.firmID,
					success(res) {},
					fail(e) {
						console.log(e)
					}
				})
				// #endif	
			},
		},
	};
</script>
<style lang="scss" scoped>
	.myPro {
		position: relative;
		margin-bottom: 20rpx;
		padding-bottom: 20rpx;
		background: #fff;
		border-radius: 20rpx;
		margin: 0 20rpx 20rpx 20rpx;

		.tit {
			padding: 32rpx 0 0 32rpx;
			font-weight: 700;
			font-size: 30rpx;
		}

		.proList {
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			.item {
				width: 25%;
				padding-top: 40rpx;

				.nem {
					display: flex;
					align-items: center;
					justify-content: center;

					img {
						width: 60rpx;
						height: 60rpx;
						margin-right: 4rpx;
					}
				}

				.dc {
					display: flex;
					align-items: center;
					justify-content: center;
					color: #9a9a9a;

					.nu {
						margin-right: 4rpx;
						color: #f93a4a;
						font-size: 28rpx;
					}
				}
			}
		}
	}

	.sevBtn {
		background: transparent;
		line-height: 2;
	}
</style>