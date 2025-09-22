<template>
	<view class="vipStyle">
		<view class="vipTop" :style="{ backgroundColor: styles.imgList && styles.imgList.img? 'none':styles.colorBg }">
		</view>
		<view class="us-info p-r">
			<view class="in-box">
				<view class="left">
					<view class="logo f-g-0" @click="bjuser">
						<image class="us-img" :src="user.avatar || user.applylogo" mode="aspectFill"></image>
					</view>
					<view class="text f-y-c f-raw f-g-1">
						<view class="point mt10 flex">
							<text class="name" @click="bjuser">{{user.nickname || $t("s-h2.wechat_user")}}</text>
							<text class="level" v-if="isLogin && user.vipCard"  @click="vInfo"
								:style="{color:tColor}">{{user.vipCard && user.vipCard.name}}</text>
						</view>
						<view v-if="!isLogin" class="c3 f24">{{$t("s-h2.become_member")}}，{{$t("s-h2.enjoy_more_benefits")}}</view>
						<view class="f24 mt10" v-if="isLogin" @click="vInfo">
							<template v-if="user.nextVip && user.nextVip.level">
								<view v-if="user.nextVip.level==10">{{user.nextVip.name}}</view>
								<view v-else>
									{{$t("s-h2.gain_more")}}{{user.nextVip && user.nextVip.exp}}{{$t("s-h2.unit")}}{{copywriting.czzName || $t("s-h2.growth_value")}}{{$t("s-h2.can_upgrade_to")}}{{user.nextVip && user.nextVip.name}}
								</view>
							</template>
							<view class="flex c9 f12 sTip mt10 neutra-font">
								<view class="flex" v-if="user.account  && user.nextVip">
									<progress :percent="(user.account.exp/user.nextVip.exp)*100" stroke-width="5"
										border-radius="5" style="width: 200rpx;" :activeColor="tColor" />
									<text
										class="f24 ml10 cf">{{user.account && user.account.exp}}/{{user.nextVip && user.nextVip.exp}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="right t-r f-g-0">
					<view class="iconfont icon-erweima f48 c0" v-if="isLogin && user.mobile && styles.vipCode==1" @click="userCode">
					</view>
					<view class="" v-else-if="!isLogin || isLogin && !user.mobile">
						<view :style="{background:tColor,color:fontColor }" class="cBtn" @click="sqsjh">{{$t("s-h2.login")}}/{{$t("s-h2.register")}}</view>
					</view>
				</view>
			</view>
			<view class="f-c" v-if="birthdayGift && birthdayGift.perfect && birthdayGift.perfect.switch==1 && !user.birthday">
				<view class="wszl f22 t-o-e" :style="{borderColor:tColor,color:tColor }"  @click="bjuser">{{birthdayGift.perfect.text || $t("s-h2.complete_profile")}}</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'sH2',
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
		data() {
			return {
				usImg: '',
				usrImg: '',
			};
		},
		computed: {
			...mapState({
				copywriting: state => state.layout.copywriting,
				birthdayGift: state => state.config.birthdayGift,
			}),
		},
		methods: {
			bjuser() {
				if(this.isLogin){
					this.go({
						t: 1,
						url: '/pages/other/chooseAvatar'
					})
				}
		
			},
			userCode() {
				this.go({
					t: 1,
					url: '/pages/my/user/mr-code'
				})
			},
			async vInfo() {
				if (!this.jjmbxx) {
					try {
						await this.requestSM(['vipChange', 'balanceChange', 'integralChange'])
					} catch (e) {
						this.jjmbxx = true
						return
					}
				}
				this.go({
					t: 1,
					url: '/pages/my/vip/wkk'
				})
			},
			sqsjh() {
				this.$emit('sh')
			},
		},
	};
</script>
<style lang="scss" scoped>
	.vipStyle {
		z-index: 2;
		position: relative;
		padding: 320rpx 20rpx 0;
		overflow: hidden;
	}

	.vipTop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 360rpx;
		padding: 180rpx 24rpx 0;
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: cover;
	}

	.us-info {
		width: 100%;
		min-height: 160rpx;
		margin-bottom: 20rpx;
		padding: 30rpx 20rpx;
		background-color: #fff;
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: cover;
		border-radius: 20rpx;

		.in-box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;

			.left {
				display: flex;
				flex: 1;
				align-items: flex-start;

				.logo {
					position: relative;
					width: 160rpx;
					height: 160rpx;
					margin-right: 20rpx;

					i {
						position: absolute;
						top: 60rpx;
						left: -6rpx;
						z-index: 2;
						width: 160rpx;
						height: 160rpx;
						font-size: 180rpx;
					}

					.us-img {
						position: absolute;
						top: 20rpx;
						right: 20rpx;
						bottom: 20rpx;
						left: 20rpx;
						z-index: 1;
						width: 128rpx;
						height: 128rpx;
						overflow: hidden;
						border-radius: 50%;
					}
				}

				.text {
					// flex: 1 1 0%;
					height: 160rpx;

					.point {
						margin-bottom: 4rpx;

						.name {
							display: inline-block;
							color: #383838;
							font-weight: 700;
							font-size: 32rpx;
							line-height: 1.2;
							vertical-align: middle;
						}

						.level {
							display: inline-block;
							margin-left: 10rpx;
							padding: 4rpx 8rpx;
							color: #fff;
							font-size: 24rpx;
							line-height: 1.2;
							vertical-align: middle;
							border-top-left-radius: 12rpx;
							border-top-right-radius: 12rpx;
							border-bottom-right-radius: 12rpx;
							border-bottom-left-radius: 4rpx;
							background-color: #fff;
						}
					}

					.sTip {
						.el-progress {
							width: 280rpx;
							margin-right: 10rpx;
							vertical-align: middle;
							position: relative;
							line-height: 1;
						}
					}
				}
			}

			.right {
				// width: 120rpx;
				padding-top: 10rpx;
			}
		}
	}

	.cBtn {
		width: 160rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		font-size: 24rpx;
		border-radius: 60rpx;
		color: #fff;
	}
	
	.wszl{
		border-radius: 40rpx;
		border: 2rpx solid #999;
		padding: 6rpx 20rpx;
	}
</style>