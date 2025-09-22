<template>
	<uni-popup ref="popup" cname="z999" type="bottom" @change="change" :sname="{}">
		<view class="pwarp">
			<view class="tit p-r f-c" style="height:0px">
				<text class="p-a cIcon iconfont icon-guanbi c6 f36" @click="close"></text>
			</view>
			<view class="bf p3 content">
				<view class="flex f-y-c">
					<view class="bsf mr20 f-g-0" style="width: 100rpx;height: 100rpx;">
						<image class="wh" :src="user.applylogo || mrtxImg" mode="aspectFill">
						</image>
					</view>
				</view>

				<view class="f30 con">
					<view class="wei f36">{{$t("sq-btn.welcome")}}{{user && user.applyName}}</view>
				</view>
				<!-- #ifdef  MP-WEIXIN -->
				<view class="btn">
					<button :open-type="isAgree?'getPhoneNumber':''" @click="tlogin" @getphonenumber="mpGetphonenumber"
						class="f34 f-c bs60 cf" :style="{background:tColor,color:fontColor}">{{$t('sq-btn.phone_login')}}</button>
				</view>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view>
					<view class="f-s b-b-e pb20">
						<view class="f-g-0" style="padding-left: 10rpx; padding-right: 20rpx;">
							{{params.telcode}}
						</view>
						<view class="f-g-1"><input type="number" v-model="params.tel"
								:placeholder="$t('sq-btn.enter_phone_number')" class="f30" /></view>
					</view>
					<view class="f-bt b-b-e pb20 mt20 f-y-c">
						<view class="f-g-1">
							<input type="number" v-model="params.code"
								:placeholder="$t('sq-btn.enter_verification_code')" class="f30" />
						</view>
						<view class="f-g-0">
							<view v-if="time<=0" class="codeBtn f-c f24 c3" @click="sendcode('bindmobile')"
								:style="{color:params.tel && params.tel.length>7?fontColor:'',background:params.tel && params.tel.length>7?tColor:''}">
								{{btntxt}}
							</view>
							<view v-else class="codeBtn f-c f24 c3">{{$t('sq-btn.sent')}} {{btntxt}}</view>
						</view>
					</view>
					<view class="mt30">
						<button @click="bindmobile" class="f34 f-c bs60 cf"
							:style="{background:params.tel && params.code ? tColor :'#f7f7f7',color:params.tel && params.code ? fontColor :'#999'}">{{$t('sq-btn.bind_phone_number')}}</button>
					</view>
				</view>
				<!-- #endif -->
				<!-- #ifdef  MP-WEIXIN -->
				<view class="mt60">
					<mg-agree :txt="$t('sq-btn.allow_usage_of_personal_info')" cname="mt60" p='1' :color="tColor"
						:title="basicSetting.agreementTitle || $t('sq-btn.user_agreement')" v-model="isAgree">
					</mg-agree>
				</view>
				<!-- #endif -->
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import mgAgree from '@/components/form/my-agree.vue'
	export default {
		name: 'sq-btn',
		components: {
			uniPopup,
			mgAgree,
		},
		props: {
			cname: '',
			// sname: '',
			type: {
				type: String,
				default: '1',
			},
			storeid: {
				type: String,
				default: '',
			},
			value: {
				type: Boolean,
				default: false
			},
			lType: {
				type: Number,
				default: 1
			},
		},
		data() {
			return {
				loading: false,
				isAgree: false,
				params: {
					telcode: '+66',
					tel: '',
					code: '',
				},
				disabled: false,
				time: 0,
				btntxt: this.$t('sq-btn.get_verification_code'),
				partyAid: '',
				partnerId: '',
			}
		},
		computed: {
			...mapState({
				basicSetting: state => state.config.basicSetting,
			}),
			mrtxImg() {
				return `${this.onImgurl}my/mrtx.png`
			},
		},
		watch: {
			// sname: {
			// 	handler(newVal) {
			// 		console.log('newVal', newVal)
			// 	},
			// 	immediate: true
			// },
		},
		methods: {
			...mapMutations(["setMobile", "setToken", "setUser", "setNoLogin"]),
			open() {
				console.log('12')

				this.$refs['popup'].open()
			},
			openf(aid) {
				// const currentPage = getCurrentPages().pop();
				// const currentPath =
				// 	`/${currentPage.route}${currentPage.options ? '?' + Object.keys(currentPage.options).map(key => `${key}=${currentPage.options[key]}`).join('&') : ''}`;
				// console.log(currentPath)
				// uni.setStorageSync('redirectPath', currentPath);
				// uni.navigateTo({
				// 	url: '/pages/other/login'
				// })
				if (aid) {
					this.partnerId = aid
				}
				this.$refs['popup'].open()
			},
			close() {
				this.$refs['popup'].close()
			},
			change({
				show
			}) {
				this.$emit('change', show)
			},
			tlogin() {
				if (!this.isAgree) {
					this.util.message(
						`${this.$t('sq-btn.read_and_agree')}${this.basicSetting.agreementTitle || this.$t('sq-btn.user_agreement')}`,
						3, 2000)
				} else {
					this.$refs['popup'].close()
				}
			},
			clickNoLogin() {
				this.setNoLogin()
				this.$refs['popup'].close()
			},
			share() {
				uni.showModal({
					title: this.$t('sq-btn.prompt'),
					content: this.$t('sq-btn.click_top_right_to_share'),
					showCancel: false,
					confirmText: this.$t('sq-btn.got_it')
				})
			},
			onGetAuthorize(res) {
				// console.log('onGetAuthorize', res)
				my.getOpenUserInfo({
					fail: (res) => {},
					success: (res) => {
						// console.log('my.getOpenUserInfo', JSON.parse(res.response).response)
						let result = JSON.parse(res.response).response
						this.refreshUser({
							storeId: this.storeid,
							portrait: result.avatar,
							userName: result.nickName,
							userId: this.uId,
						}).then(res => {
							this.$emit('refresh')
						})
					}
				});
			},
			getAlPhoneNumber() {
				my.getPhoneNumber({
					success: res => {
						var resData = JSON.parse(res.response);
						this.util.request({
							url: this.api.jm,
							method: 'POST',
							data: {
								data: resData.response
							}
						}).then(res => {
							console.log('jm res', res)
							if (res.data) {
								this.show = false
								if (this.type == 4) {
									this.util.message(this.$t('sq-btn.binding_successful'), 1, 1000)
								} else {
									this.$emit('refresh', res.data)
								}
								this.refreshUser({
									nomask: 1,
									get: 1,
									now: 1,
								})
							}
						})
						console.log('getAlPhoneNumber success', resData)
					},
					fail: res => {
						console.log('getAlPhoneNumber fail', res)
					}
				})
			},
			mpGetphonenumber(result) {
				this.loading = true
				console.log('mpGetphonenumber', result);
				if (result.detail.errMsg == 'getPhoneNumber:ok') {
					let sessionKey = getApp().globalData.session_key,
						data = result.detail.encryptedData,
						iv = result.detail.iv
					// userId = this.uId
					this.util.request({
						url: this.api.jm,
						method: 'POST',
						data: {
							sessionKey,
							data,
							iv
						}
					}).then(async (res) => {
						this.loading = false
						if (res.data.phoneNumber) {
							var countryCode=res.data.countryCode
							var phoneNumber= '+'+countryCode+res.data.phoneNumber
							this.setMobile(phoneNumber)
							uni.setStorageSync('userTel', phoneNumber)
							let rest = await this.util.request({
								'url': this.api.gxmb,
								method: 'post',
								data: {
									mobile:phoneNumber,
									partyAid: this.partyAid,
									partnerId: this.partnerId,
								}
							}).then(async (rest) => {
								console.log('rest', rest)
								this.setToken(rest.data.token)
								this.setUser(rest.data.userInfo)
								this.util.message(this.$t('sq-btn.registration_successful'), 1,
									1000)
								this.$emit('rf')
							}).catch((e) => {
								this.loading = false
							})
						} else {
							console.log(res)
						}
					}).catch(() => {
						this.loading = false
					})
					console.log(sessionKey, data, iv)
				} else {
					this.loading = false
					uni.showModal({
						title: this.$t('sq-btn.warm_prompt'),
						content: this.$t('sq-btn.phone_authorization_failed'),
						showCancel: false,
						confirmText: i18n.t('modal.confirm'),
					});
					return;
				}
			},
			async sendcode(type) {
				if (this.params.tel && this.params.tel.length > 7) {
					await this.util.request({
						'url': this.api.smsLogin,
						method: 'POST',
						data: {
							mobile: this.params.telcode + this.params.tel,
							type: type,
						}
					})
					this.time = 60
					this.timer()
				}
			},

			timer() {
				if (this.time > 0) {
					this.disabled = true;
					this.time--;
					this.btntxt = this.time + this.$t('sq-btn.seconds');
					setTimeout(this.timer, 1000);
				} else {
					this.time = 0;
					this.btntxt = this.$t('sq-btn.send_verification_code');
					this.disabled = false;
				}
			},
			async h5Login() {
				if (!this.isAgree) {
					return this.util.message(
						`${this.$t('sq-btn.read_and_agree')}${this.basicSetting.agreementTitle || this.$t('sq-btn.user_agreement')}`,
						3, 2000)
				}
				if (this.params.tel && this.params.tel.length > 7 && this.params.code) {
					this.setMobile(this.params.telcode + this.params.tel)
					uni.setStorageSync('userTel', this.params.tel)
					let rest = await this.util.request({
						'url': this.api.mobileLogin,
						method: 'post',
						data: {
							mobile: this.params.telcode + this.params.tel,
							code: this.params.code,
						}
					}).then(async (rest) => {
						console.log('rest', rest)
						this.setToken(rest.data.token)
						this.setUser(rest.data.userInfo)
						this.util.message(this.$t('sq-btn.login_successful'), 1, 1000)
						this.$emit('rf')
						this.close()
					}).catch((e) => {
						this.loading = false
					})
				}
			},
			async bindmobile() {
				// if (!this.isAgree) {
				// 	return this.util.message(
				// 		`${this.$t('sq-btn.read_and_agree')}${this.basicSetting.agreementTitle || this.$t('sq-btn.user_agreement')}`,
				// 		3, 2000)
				// }
				if (this.params.tel && this.params.tel.length > 7 && this.params.code) {
					this.setMobile(this.params.telcode + this.params.tel)
					uni.setStorageSync('userTel', this.params.tel)
					let rest = await this.util.request({
						'url': this.api.gxmb,
						method: 'post',
						data: {
							mobile: this.params.telcode + this.params.tel,
							code: this.params.code,
							partyAid: this.partyAid,
							partnerId: this.partnerId,
							type: "bindmobile"
						}
					}).then(async (rest) => {
						console.log('rest', rest)
						this.setToken(rest.data.token)
						this.setUser(rest.data.userInfo)
						this.util.message(this.$t('sq-btn.login_successful'), 1, 1000)
						this.$emit('rf')
						this.close()
					}).catch((e) => {
						this.loading = false
					})
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	.pwarp {
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
	}

	.content {
		padding-top: 15rpx;
	}

	.tit {
		background: #fff;
		height: 20rpx;

		.cIcon {
			top: 26rpx;
			right: 30rpx;
		}
	}

	.con {
		margin-top: 10rpx;
		margin-bottom: 60rpx;
	}

	.btn {
		margin: 0 80rpx;

		button {
			height: 98rpx;
			line-height: 98rpx;
		}
	}

	.mt60 {
		margin-top: 60rpx;
	}

	.codeBtn {
		width: 180rpx;
		height: 60rpx;
		border-radius: 60rpx;
		background-color: #f7f7f7;
		color: rgba(0, 0, 0, .3);
	}
</style>