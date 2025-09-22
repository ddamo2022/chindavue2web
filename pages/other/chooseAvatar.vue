<template>
	<view class="container pb115">
		<!-- 		<view class="wszl f22 f-bt c6"
			v-if="birthdayGift && birthdayGift.perfect && birthdayGift.perfect.switch==1 && !user.birthday"
			:style="{background:`rgba(${cTR(tColor)},0.2)`,color:tColor}">
			<view class="f-g-1 t-o-e">
				{{birthdayGift.perfect.text || $t("chooseAvatar.complete_profile")}}
			</view>
			<view class="f-g-0 ml20" :style="{color:tColor}" @click="ckzl">{{$t("chooseAvatar.check_now")}}</view>
		</view> -->
		<view class="wszl f22 f-bt c6" :style="{background:`rgba(${cTR(tColor)},0.2)`,color:tColor}"
			v-if="!user.vipCard">
			<view class="f-g-1 t-o-e">
				{{$t("chooseAvatar.membership_card")}}
			</view>
			<!-- <view class="f-g-0 ml20" :style="{color:tColor}" @click="ckzl">{{$t("chooseAvatar.check_now")}}</view> -->
		</view>
		<view class="bf mb20 maint">
			<view class="f-c wh">
				<view class="timg ttop">
					<button class="avatar-wrapper timg bbx">
						<image class="avatar wh" :src="avatarUrl || user.portrait"></image>
						<view class="gx bsf f-c"><text class="iconfont icon-gengxin f30 cf"></text></view>
					</button>
				</view>
			</view>
			<view class="p32 f-bt b-b-e">
				<view class="f30 wei">{{$t("chooseAvatar.user")}}</view>
				<view>
					<input v-model="userId || user.id" class="f28 t-r c9" :disabled="true" />
				</view>
			</view>
			<view class="p32 b-b-e box">
				<view class="f30 wei leftbox">{{$t("chooseAvatar.user_nickname")}}</view>
				<view class="f-y-c rightbox">
					<input type="nickname" v-model="nickname" @change="onInput" class="f28"
						:placeholder="$t('chooseAvatar.enter_user_nickname')" />

				</view>
			</view>
			<view class="p32 b-b-e box">
				<view class="f30 wei leftbox">{{$t('chooseAvatar.mobile_number')}} <span v-if="!isuserMobile">+66</span>
				</view>
				<view class="flex rightbox">
					<input v-model="params.userTel" :placeholder="$t('chooseAvatar.enter_mobile')"
						class="f28 c9" :disabled="isuserMobile" />
				</view>
			</view>
			<view class="p32 box b-b-e" v-if="!isuserMobile">
				<view class="f30 wei leftbox">{{$t('chooseAvatar.requestopt')}}</view>
				<view class="f-y-c">
					<view v-if="time<=0" class="codeBtn f-c f24 c3" :class="{ disabled: isSending }"
						@click="sendcode()">
						{{btntxt}}
					</view>
					<view v-else class="codeBtn1 f-c f24 c3">{{$t('sq-btn.sent')}} {{btntxt}}</view>
				</view>
			</view>
			<view class="p32 box b-b-e" v-if="!isuserMobile">
				<view class="f30 wei leftbox">{{$t('chooseAvatar.enteropt')}}</view>
				<view class="f-y-c rightbox">
					<input v-model="params.code" maxlength="6" :placeholder="$t('chooseAvatar.enter_code')"
						class="f28 c9" />
				</view>
			</view>
			<view class="p32 box b-b-e">
				<view class="f30 wei leftbox">{{$t('chooseAvatar.email')}}</view>
				<view class="f-y-c rightbox">
					<input v-model="params.email" :placeholder="$t('chooseAvatar.enter_email')"
						class="f28 c9" :disabled="email" />
				</view>
			</view>
			<view class="p32 box b-b-e">
				<view class="f30 wei leftbox">{{$t('chooseAvatar.real_name')}}</view>
				<view class="f-y-c rightbox">
					<input v-model="params.realName" :placeholder="$t('chooseAvatar.enter_realName')"
						class="f28 c9" />
				</view>
			</view>
			<view class="p32 box b-b-e">
				<view class="f30 wei leftbox">{{$t('chooseAvatar.gender')}}</view>
				<view class="r-box rightbox">
					<mg-radio v-model="params.sex" :arr='sexArr' :color="tColor"></mg-radio>
				</view>
			</view>
			<view class="p32 f-bt">
				<view class="f30 wei">{{$t('chooseAvatar.birthday')}}</view>
				<view class="r-box">
					<picker v-if="!birthday" mode="date" :value="params.birthday" @change="bindDateChange"
						:start="startDate" :end="endDate">
						<view class="f30">
							{{params.birthday || $t('chooseAvatar.birthday_once_modified')+'，'+$t('chooseAvatar.cannot_edit_again')}}
						</view>
					</picker>
					<input v-else v-model="birthday" class="f28 f-1 f-x-e t-r c9" @click="djsr" />
				</view>
			</view>
		</view>
 
		<!-- 	<view class="p2 f24 bs20 f-bt sryl c6"
			v-if="birthdayGift && birthdayGift.birthday && birthdayGift.birthday.switch==1">
			<view class="f-g-1 t-o-e">
				{{birthdayGift.birthday.title ||  $t('chooseAvatar.birthday_gift_rules')}}
			</view>
			<view class="f-g-0 ml20" :style="{color:tColor}" @click="ckxz">{{$t('chooseAvatar.check_now')}}</view>
		</view> -->
		<!-- 	<view class="p2 f24 bs20 f-bt sryl c6">
			<view class="f-g-1 t-o-e">
				完善手机号、生日等资料领取会员卡
			</view>
			<view class="f-g-0 ml20" :style="{color:tColor}" @click="ckxz">{{$t('chooseAvatar.check_now')}}</view>
		</view> -->
		<view class="foot-btnc posi-r mt40">
			<button @click="goLogin" :loading="loading" :disabled="loading" class="foot-btn bs20 f36 f-c cf"
				hover-class="btnhc" :style="{background:tColor,color:fontColor}">{{$t('chooseAvatar.save')}}</button>
			<button @click="outLogin" class="foot-btn bs20 f36 f-c c0 mt20"
				hover-class="btnhc">{{$t('chooseAvatar.log_out')}}</button>
		</view>

		<sq-btn type="1" ref="sqBtn"></sq-btn>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import utils from '@/common/utils.js'
	import api from '@/common/api';
	import sqBtn from '@/components/common/sq-btn.vue'
	import mgRadio from '@/components/form/my-radio.vue'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		components: {
			sqBtn,
			mgRadio,
		},
		name: 'chooseAcatar',
		data() {
			return {
				loading: false,
				avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132',
				baseData: '',
				nickname: '',
				userId: '',
				userMobile: '',
				isuserMobile: false,
				email: '',
				time: 0,
				btntxt: this.$t('chooseAvatar.send_verification_code'),
				isSending: false,
				params: {
					userId: '',
					userTel: '',
					email: '',
					birthday: '2000-01-01',
					sex: this.$t('chooseAvatar.male'),
					realName: '',
					createdAt: '',
				},
				sexArr: [{
						value: 1,
						name: this.$t('chooseAvatar.male')
					},
					{
						value: 2,
						name: this.$t('chooseAvatar.female'),
						checked: 'true'
					}
				],
				birthday: '',
			}
		},
		async onLoad() {
			//uni.setLocale('en');
			this.util.setNT(this.$t('chooseAvatar.personal_info'))
			if (this.user) {
				this.avatarUrl = this.user.avatar
				this.nickname = this.user.nickname
				this.userId = this.user.id
				if (this.user.mobile && this.user.mobile.length > 0) {
					this.userMobile = this.user.mobile
					this.isuserMobile = true
				}

				this.params.userTel = this.user.mobile
				this.params.email = this.user.email
				this.params.realName = this.user.realName
				this.params.sex = this.user.sex ? this.user.sex : 1


				if (this.user.birthday && this.isValidDateTime(this.user.birthday)) {
					console.log('1--12', this.user.birthday)
					this.params.birthday = this.user.birthday
					this.birthday = this.user.birthday
				}


			}
			this.getConfig({
				ident: ["basicSetting", "birthdayGift"]
			})

		},
		computed: {
			...mapState({
				system: state => state.system,
				birthdayGift: state => state.config.birthdayGift,
			}),
			// uploadUrl() {
			// 	let siteInfo = getApp().globalData.siteInfo
			// 	return `${siteInfo.siteroot}/channelApi/file/upload`
			// },
			hToken() {
				return `Bearer ${uni.getStorageSync('token')}`
			},
			appType() {
				return api.platform
			},
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		mixins: [utilMixins],
		methods: {
			...mapActions(["getConfig"]),
			...mapMutations(["setMobile", "setToken", "setUser"]),
			onChooseAvatar(e) {
				console.log('e', e)
				this.avatarUrl = e.detail.avatarUrl
			},
			isValidDateTime(value) {
				const date = new Date(value);
				return date instanceof Date && !isNaN(date);
			},
			onInput(e) {
				console.log(e)
				this.nickname = e.detail.value
			},
			sqsjh() {
				this.$refs['sqBtn'].open()
			},
			async bindDateChange(e) {
				console.log(e)
				//await this.util.modal(this.$t('chooseAvatar.merchants_discounts_based_on_birthday'))
				this.params.birthday = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			timer() {
				if (this.time > 0) {
					this.time--;
					this.btntxt = this.time + this.$t('sq-btn.seconds');
					setTimeout(this.timer, 1000);
				} else {
					this.time = 0;
					this.btntxt = this.$t('sq-btn.send_verification_code');
				}
			},
			async sendcode() {
				if (this.params.userTel.length < 7) {
					return this.util.message(this.$t('registration.enter_phone_number'), 3)
				}
				var phone = this.params.userTel;
				if (this.params.userTel.startsWith('+66')) {
					phone = this.params.userTel;
				} else if (this.params.userTel.startsWith('66')) {
					phone = '+66' + this.params.userTel.slice(2);
				} else {
					phone = '+66' + this.params.userTel;
				}
				this.isSending = true;
				let rest = await this.util.request({
					'url': this.api.sendRegisterCode,
					method: 'POST',
					mask: this.$t('password_reset.sending'),
					data: {
						phone: phone,
						type: 1
					}
				})
				this.isSending = false;
				console.log('1212', rest)
				if (rest && rest.code == 200) {
					this.time = 60
					this.timer()
				}
			},
			async cmb(result) {
				console.log('mpGetphonenumber', result);
				if (result.detail.errMsg == 'getPhoneNumber:ok') {
					this.loading = true
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
							this.setMobile(res.data.phoneNumber)
							uni.setStorageSync('userTel', res.data.phoneNumber)
							let rest = await this.util.request({
								'url': this.api.gxmb,
								method: 'post',
								data: {
									mobile: res.data.phoneNumber,
								}
							}).then(async (rest) => {
								console.log('rest', rest)
								this.setToken(rest.data.token)
								this.setUser(rest.data.userInfo)
								this.util.message(rest.msg || this.$t(
									'chooseAvatar.registration_successful'), 1, 1000)
								utils.swnb(1000)
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
						title: this.$t('chooseAvatar.warm_reminder'),
						content: this.$t('chooseAvatar.authorized_mobile_number_failed'),
						showCancel: false,
						confirmText: i18n.t('modal.confirm'),
					});
					return;
				}
			},
			async goLogin() {

				if (!this.params.userTel) {
					this.util.message(this.$t('chooseAvatar.please_authorize_mobile_number'), 3, 2000)
					return
				}
				if (!this.params.birthday) {
					this.util.message(this.$t('chooseAvatar.please_birthday'), 3, 2000)
					return
				}

				// var userTel = this.params.userTel
				// if (userTel && !userTel.startsWith('+')) {
				// 	userTel = '+66' + userTel;
				// }
				var phone = this.params.userTel;
				if (this.params.userTel.startsWith('+66')) {
					phone = this.params.userTel;
				} else if (this.params.userTel.startsWith('66')) {
					phone = '+66' + this.params.userTel.slice(2);
				} else {
					phone = '+66' + this.params.userTel;
				}
				await this.refreshUser({
					get: 0,
					now: 1,
					mobile: phone,
					avatar: this.avatarUrl,
					nickname: this.nickname,
					realName: this.params.realName ? this.params.realName : '',
					sex: this.params.sex,
					birthday: this.params.birthday,
					code: this.params.code,
					email: this.params.email
				})

				this.util.message(this.$t('chooseAvatar.modification_successful'), 1, 1000)
				this.refreshUser({
					get: 1,
					now: 1,
				})
				utils.swnb(1000)
				// uni.reLaunch({
				// 	url: '/pages/my/vip/wkk'
				// });
				// 	if (this.avatarUrl && this.nickname) {
				// 		console.log('avatar', this.avatarUrl)
				// 		if (this.avatarUrl.indexOf('//tmp') > -1 || this.avatarUrl.indexOf('http://tmp') > -1) {
				// 			const fs = wx.getFileSystemManager()
				// 			const ab = new ArrayBuffer(1024)
				// 			fs.readFile({
				// 				filePath: this.avatarUrl,
				// 				encoding: 'base64',
				// 				position: 0,
				// 				success: async (res) => {
				// 					console.log(res)
				// 					let siteInfo = getApp().globalData.siteInfo
				// 					let {
				// 						data
				// 					} = await this.util.request({
				// 						'url': `/common/file/uploadBase64`,
				// 						method: 'post',
				// 						data: {
				// 							ext: 'jpeg',
				// 							file: res.data,
				// 						}
				// 					})
				// 					console.log('data', data)
				// 					if (!data) return
				// 					this.loading = true
				// 					await this.refreshUser({
				// 						get: 0,
				// 						now: 1,
				// 						avatar: data,
				// 						nickname: this.nickname,
				// 						realName: this.params.realName ? this.params.realName : '',
				// 						sex: this.params.sex,
				// 						email:this.params.email,
				// 						birthday: this.params.birthday,
				// 					})
				// 					this.util.message(this.$t('chooseAvatar.modification_successful'), 1, 1000)
				// 					this.refreshUser({
				// 						get: 1,
				// 						now: 1,
				// 					})
				// 					utils.swnb(1000)
				// 				},
				// 				fail(res) {
				// 					console.error(res)
				// 				}
				// 			})
				// 		} else {

				// 		}
				// 		return
				// 	} else {
				// 		this.util.message(this.$t('chooseAvatar.select_image_or_nickname'), 3, 2000)
				// 	}
			},
			async outLogin() {
				await this.util.modal(this.$t('chooseAvatar.confirm_logout'))
				let {
					msg
				} = await this.util.request({
					url: this.api.logout,
					method: "POST",
				})
				this.util.message(msg, 1, 1000)
				await this.setUser({
					id: '',
					mobile: ''
				})
				await this.setToken("")
				this.getLoginInfo()
				utils.swnb(1000)
			},
			handleAvatarSuccess2(res) {
				this.avatarUrl = res.data
				// this.util.message(res.msg, 1)
			},
			ckxz() {
				this.go({
					t: 1,
					url: `/pages/my/other/gywm?t=活动说明&p=7`
				})
			},
			ckzl() {
				this.go({
					t: 1,
					url: `/pages/my/other/gywm?t=活动说明&p=8`
				})
			},
			djsr() {
				this.util.message(this.$t('chooseAvatar.birthday_cannot_be_modified'), 3, 2000)
			},
		}
	}
</script>
<style scoped lang='scss'>
	.codeBtn {
		background: #B11E23;
		color: #ffffff;
		padding: 5rpx 15rpx;
		border-radius: 10rpx;
	}

	.codeBtn1 {
		background: #f6f6f6;

		padding: 5rpx 15rpx;
		border-radius: 10rpx;
	}

	.container {
		padding-top: 60px;
	}

	.maint {
		padding: 100rpx 10rpx 20rpx 10rpx;
		margin: 80rpx 20rpx 20rpx 20rpx;
		border-radius: 20rpx;
		box-shadow: 0rpx 4rpx 20rpx 0rpx rgba(221, 221, 221, 0.8)
	}

	.wszl {
		padding: 15rpx 20rpx;
		background: #e6e6e6;
		position: absolute;
		top: 0;
		width: 100%;
	}

	.sryl {
		margin: 20rpx 20rpx 80rpx 20rpx;
		background: #efefef;

		.sric {
			width: 40rpx;
			height: 40rpx;
		}
	}

	.bbx {
		position: relative;
		border-radius: 50%;
		overflow: visible;
	}

	.timg {
		width: 160rpx;
		height: 160rpx;
	}

	.ttop {
		margin-top: -200rpx;
		border-radius: 50%;
	}

	.gx {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 40rpx;
		height: 40rpx;
		background: #666;
	}

	.avatar-wrapper {
		padding: 0;

		.avatar {
			border-radius: 50%;
		}
	}

	.sqsjh {
		width: 140rpx;
		height: 50rpx;
		background: #FFD11A;
	}

	.ghb {
		background: #fff;
		padding: 0;
		height: 44rpx;
		line-height: 44rpx;
		margin-left: 10rpx;
	}

	::v-deep .r-box .mr-r1i {
		padding: 0 !important;
		margin-left: 40rpx;
	}

	.underline-input {
		border: 1rpx solid #e6e6e6;
		height: 65rpx;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		width: 100%;
		text-align: right;
		padding-right: 10rpx;

	}

	.box {
		display: flex;
	}

	.leftbox {
		flex: 1;
	}

	.rightbox {
		flex: 2;
	}
</style>