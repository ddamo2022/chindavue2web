<template>

	<view class="content">
		<uni-nav-bar id='uninavbar' :uropcity="0" :uriconopcity='0' :fixed='true' :ispr='false' :border='false'
			:statusBar="true" :isleft='false'>
			<view slot='left' class="f-c c0" @click="go({t: 4})">
				<text class="iconfont icon-right c3 f34"></text>
			</view>
		</uni-nav-bar>

		<view class="topBox">

		</view>
		<view class="inputBox">
			<view class="Boxtop">
				<h3>WELCOME</h3>
				<h3>{{$t("login.welcome_message")}}Damofoods</h3>
				<!-- 	<p>是否是line客户端： {{$liff.isInClient()}}</p>
				<p>是否登录： {{$liff.isLoggedIn()}}</p> -->
				<!-- <div v-if="userProfile">
					<p>Welcome, {{ userProfile.displayName }}!</p>
					<img :src="userProfile.pictureUrl" alt="User profile picture">
				</div> -->

			</view>
			<view class="ipt">
				<input v-model="username" :placeholder="$t('login.enter_email_or_phone')" class="f30" />
			</view>
			<view class="ipt">
				<input password type="text" v-model="password" :placeholder="$t('login.enter_password')" />
			</view>
			<button class="loginBtn" @click="login">{{$t("login.login")}}</button>
			<view class="forgetPwd">
				<span @click="openforgot()">{{$t("login.forgot_password")}}</span>
				<span @click="openregister()">{{$t("login.no_account")}}，{{$t("login.register")}}</span>
			</view>

			<!-- #ifdef  H5 -->
			<view class="tipbox">
				<view class="txt">
					—— {{$t("login.third_party_login")}} ——
				</view>
				<!-- 		<view class="otherUser">

					<image class="btnicon" @click="openlogin(1)" src="../../static/tx/line.png"></image>
					<image class="btnicon" style="margin-left: 60rpx;" @click="openlogin(2)" src="../../static/tx/facebook.png"></image>
				</view> -->

				<view class="otherUser">
					<view class="button-container">
						<button class="login-button line-button" @click="openlogin(1)">
							<image src="/static/line-icon.png" class="icon"></image>
							Login with LINE
						</button>
						<button class="login-button facebook-button" @click="openlogin(2)">
							<image src="/static/facebook-icon.png" class="icon"></image>
							Login with Facebook
						</button>
					</view>
				</view>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import {
		loadLineSDK
	} from '@/common/line-sdk-loader.js';
	import uniNavBar from "@/components/third/uni-nav-bar.vue"
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				username: '',
				password: '',
				userProfile: null
			}
		},
		components: {
			uniNavBar,
		},
		async onLoad(options) {
			if (!this.isLogin) {
				let liffId = getApp().globalData.siteInfo.liffId
				var _this = this;
				//	console.log('login-linisLoggedIn', liff.isLoggedIn())
				loadLineSDK(liffId).then(async (liff) => {
					if (liff.isLoggedIn()) {
						return liff.getProfile();
					} else {
						if (liff.isInClient()) {
							return liff.login()
						}
					}
				}).then(async profile => {

					if (profile && profile.userId) {
						console.log(profile)
						await _this.linelogin(profile.userId, profile.displayName)
					}

				}).catch(err => {
					console.error(err);
				});
			}
		},
		mounted() {
			this.initializeFacebookSDK();
		},
		methods: {
			...mapMutations(["setMobile", "setToken", "setUser"]),
			async linelogin(id, name) {
				var rest = await this.util.request({
					'url': this.api.lineLogin,
					method: 'post',
					data: {
						id: id,
						name: name
					}
				})
				if (rest.data) {
					this.setToken(rest.data.token)
					this.setUser(rest.data.userInfo)
					this.util.message(this.$t('sq-btn.login_successful'), 1, 1000)

					const redirectPath = uni.getStorageSync('redirectPath') || '/';
					uni.removeStorageSync('redirectPath');
					uni.reLaunch({
						url: redirectPath
					});
				}
			},
			initializeFacebookSDK() {
				this.$loadFacebookSDK().then(FB => {
					//this.fbReady = true;
					console.log('Facebook SDK loaded and initialized.');
				}).catch(error => {
					console.error('Error loading Facebook SDK:', error);
				});
			},
			async login() {
				if (!this.username) {
					return this.util.message(this.$t("login.enter_email_or_phone_placeholder"), 3)
				}
				if (!this.password) {
					return this.util.message(this.$t("login.enter_password_placeholder"), 3)
				}
				let rest = await this.util.request({
					'url': this.api.emaillogin,
					method: 'post',
					data: {
						username: this.username,
						password: this.password,
					}
				}).then(async (rest) => {

					if (rest.data) {
						console.log('rest', rest.data.token)
						// this.setToken(rest.data.token)
						// this.setUser(rest.data.userInfo)
						this.$store.commit('setUser', rest.data.userInfo);
						this.$store.commit('setToken', rest.data.token);
						
						this.util.message(this.$t('sq-btn.login_successful'), 1, 1000)

						const redirectPath = uni.getStorageSync('redirectPath') || '/';
						uni.removeStorageSync('redirectPath');
						uni.reLaunch({
							url: redirectPath
						});

						// uni.reLaunch({
						// 	url: '/pages/index/index'
						// })
					} else {
						return this.util.message(rest.msg, 3)
					}
				}).catch((e) => {

				})

			},
			openforgot() {
				uni.navigateTo({
					url: '/pages/other/forgetting'
				})
			},
			openregister() {
				uni.navigateTo({
					url: '/pages/other/register'
				})
			},
			async openlogin(type) {
				const redirectPath = uni.getStorageSync('redirectPath') || '/';
				//uni.removeStorageSync('redirectPath');
				console.log(redirectPath)
				console.log(getApp().globalData.siteInfo.siteroot)
				var url = `${getApp().globalData.siteInfo.siteroot}/h5/#${redirectPath}`
				console.log(url)
				if (type == 1) {
					window.location.href =
						`${getApp().globalData.siteInfo.siteroot}/line/${getApp().globalData.siteInfo.uniacid}?refererUrl=${btoa(url)}`
					const currentPage = getCurrentPages().pop();
					const currentPath =
						`/${currentPage.route}${currentPage.options ? '?' + Object.keys(currentPage.options).map(key => `${key}=${currentPage.options[key]}`).join('&') : ''}`;

					//window.liff.login();
				}
				if (type == 2) {

					// window.location.href =
					// 	`${getApp().globalData.siteInfo.siteroot}/facebook/${getApp().globalData.siteInfo.uniacid}?refererUrl=${btoa(url)}`
					var _this = this;
					FB.login(async function(response) {
						if (response.authResponse) {
							console.log('Welcome! Fetching your information....');
							FB.api('/me', {
								fields: 'id,name,email'
							}, async function(userResponse) {
								console.log(userResponse);
								console.log('Good to see you, ' + userResponse.name + '.');
								var name = ""
								if (userResponse.name) {
									name = userResponse.name
								}
								var email = "";
								if (userResponse.email) {
									email = userResponse.email;
								}
								if (userResponse.id) {
									await _this.facebooklogin(userResponse.id, name, email)
								} else {
									return _this.util.message(_this.$t(
										"modal.authorization_failed"), 3)
								}
							});
						} else {
							console.log('User cancelled login or did not fully authorize.');
							return _this.util.message(_this.$t("modal.authorization_failed"), 3)
						}
					}, {
						scope: 'public_profile,email'
					});
				}

			},
			async facebooklogin(id, name, email) {
				var rest = await this.util.request({
					'url': this.api.facebookLogin,
					method: 'post',
					data: {
						id: id,
						name: name,
						email: email
					}
				})
				if (rest.data) {
					// this.setToken(rest.data.token)
					// this.setUser(rest.data.userInfo)
					this.$store.commit('setUser', rest.data.userInfo);
					this.$store.commit('setToken', rest.data.token);
					this.util.message(this.$t('sq-btn.login_successful'), 1, 1000)

					const redirectPath = uni.getStorageSync('redirectPath') || '/';
					uni.removeStorageSync('redirectPath');
					uni.reLaunch({
						url: redirectPath
					});
				}
			}
		}
	}
</script>

<style scoped>
	.icon-right {
		transform: rotateZ(180deg);
	}

	.content {
		height: 100vh;
		/* background-color: aquamarine; */
		/* background: url("@/static/tx/bj.jpg") no-repeat; */
		background-size: cover;
		background-color: #fff;
	}

	.topBox {
		font-size: 34rpx;
		color: #fff;
		padding: 80rpx 30rpx;
	}

	h3 {
		margin-bottom: 10rpx;
	}

	.Boxtop {
		font-size: 34rpx;
		padding: 80rpx 0rpx;
	}

	.inputBox {
		position: fixed;
		top: 70rpx;
		left: 0;
		width: 750rpx;
		height: 85vh;
		background-color: #fff;
		/* 	border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
 */
		padding: 80rpx 60rpx 60rpx 60rpx;
		/* box-sizing: border-box; */
	}

	.ipt {
		margin-bottom: 50rpx;

	}

	.ipt h4 {
		margin-bottom: 20rpx;
		font-size: 36rpx;
		color: #333;
	}

	/* 	.ipt input {
		border-bottom: 1px solid #dedede;
		padding-bottom: 20rpx;
		font-size: 28rpx;
	} */

	.loginBtn {
		margin-top: 30rpx;
		line-height: 85rpx;
		text-align: center;
		background: linear-gradient(to right, rgb(177, 30, 35), rgb(177, 30, 35));
		border-radius: 40rpx;
		color: #fff;
		margin-top: 50rpx;
	}

	.registerBtn {
		margin-top: 20rpx;
		line-height: 85rpx;
		text-align: center;
		border-radius: 40rpx;

		color: rgb(255, 255, 255);
		margin-top: 50rpx;
		border: none;
	}

	.tipbox {
		/* 	position: fixed;
		bottom: 320rpx;
		left: 50%;
		transform: translate(-50%, -120px); */
		text-align: center;
		margin-top: 40rpx;
	}

	.otherUser {
		margin-top: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;


	}

	.button-container {
		display: flex;
		flex-direction: column;
		gap: 25rpx;
	}

	.login-button {
		display: flex;
		align-items: center;
		border-radius: 10rpx;
		font-size: 30rpx;
		color: #ffffff;
		justify-content: center;
	}

	.icon {
		width: 100rpx;
		height: 100rpx;
		/* margin-right: 20rpx; */
	}

	.line-button {
		background-color: #00C300;
	}

	.facebook-button {
		background-color: #3F51B5;
	}

	.txt {
		font-size: 28rpx;
		color: #969696;
	}

	.btnicon {

		width: 80rpx;
		height: 80rpx;
	}

	.forgetPwd {
		margin-top: 30rpx;
		font-size: 26rpx;
		color: #b5b5b5;
		text-align: end;
		padding: 0 10rpx;
		display: flex;
		justify-content: space-between;
	}
</style>