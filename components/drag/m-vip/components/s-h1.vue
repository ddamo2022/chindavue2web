<template>
	<view class="vipStyle">
		<view class="vipTop" :style="{ backgroundColor: styles.imgList && styles.imgList.img? 'none':styles.colorBg }">
			<view class="us-info">
				<view class="avatar">
					<view class="us-img" @click="bjuser">
						<image class="wh" :src="user.avatar || user.applylogo" mode="aspectFill"></image>
					</view>
					<view class="text">
						<view class="point">
							<span class="name" @click="bjuser">{{user.nickname || $t("s-h1.wechat_user")}}</span>
							<span class="level" v-if="isLogin && user.vipCard" @click="vInfo"
								:style="{color:tColor}">{{user.vipCard && user.vipCard.name}}</span>
						</view>
						<view v-if="!isLogin" class="cf f26 mt10">{{$t("s-h1.better_service_prompt")}}</view>
						<view class="f24 mt10" v-if="isLogin" @click="vInfo">
							<template v-if="user.nextVip && user.nextVip.level">
								<view v-if="user.nextVip.level==10">{{user.nextVip.name}}</view>
								<view v-else>
									{{$t("s-h1.gain_more")}}{{user.nextVip && user.nextVip.exp}}{{copywriting.czzName || $t("s-h1.growth_value")}}{{$t("s-h1.can_upgrade_to")}}{{user.nextVip && user.nextVip.name}}
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
				<view class="iconfont icon-erweima f46 cf" v-if="isLogin && styles.vipCode==1" @click="userCode"></view>
				<view class="" v-else-if="!isLogin || isLogin">
					<view :style="{background:tColor,color:fontColor }" class="cBtn" @click="sqsjh">{{$t("s-h1.login")}}/{{$t("s-h1.register")}}</view>
				</view>
			</view>
			<view class="f-c" v-if="birthdayGift && birthdayGift.perfect && birthdayGift.perfect.switch==1 && !user.birthday">
				<view class="wszl f22 t-o-e" :style="{borderColor:'#fff',color:'#fff' }"  @click="bjuser">{{birthdayGift.perfect.text || $t("s-h1.complete_profile")}}</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		name: 'sH1',
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
			...mapState(['sjxx', 'sjgood']),
			...mapState({
				copywriting: state => state.layout.copywriting,
				birthdayGift: state => state.config.birthdayGift,
			}),
		},
		data() {
			return {
				usImg: '',
				usrImg: '',
			};
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
		position: relative;
		padding: 320rpx 20rpx 0;
		overflow: hidden;

		.bgimg {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			height: 420rpx;
		}
	}

	.vipTop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 360rpx;
		padding: 130rpx 24rpx 0;
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: cover;
		z-index: 2;

		.us-info {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.avatar {
				display: flex;
				align-items: center;
				color: #fff;
				font-size: 32rpx;

				.us-img {
					width: 110rpx;
					height: 110rpx;
					margin-right: 28rpx;
					background: #fff;
					// border: 6rpx solid #fff;
					border-radius: 50%;
					overflow: hidden;
				}

				.text {
					flex: 1 1 0%;

					.point {
						margin-bottom: 4rpx;

						.name {
							display: inline-block;
							color: #fff;
							font-weight: 700;
							font-size: 32rpx;
							line-height: 1.2;
							vertical-align: middle;
						}

						.level {
							display: inline-block;
							margin-left: 10rpx;
							padding: 4rpx 8rpx;
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
							width: 320rpx;
							margin-right: 10rpx;
							vertical-align: middle;
							position: relative;
							line-height: 1;
						}
					}
				}
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
		background: #fff;
		color: #fff;
	}
	
	.wszl{
		border-radius: 40rpx;
		border: 2rpx solid #999;
		padding: 6rpx 20rpx;
	}
</style>