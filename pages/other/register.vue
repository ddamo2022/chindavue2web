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
				<h3>{{$t("registration.welcome_message")}}Damofoods</h3>
			</view>
			<view class="ipt" v-if="type==1">
				<view class="f-s">
					<view class="f-g-0" style="padding-left: 10rpx; padding-right: 20rpx;">
						{{telcode}}
					</view>
					<view class="f-g-1"><input type="number" v-model="phone" :placeholder="$t('registration.enter_phone_number')" class="f30" /></view>
				</view>
			</view>
			<view class="ipt" v-else>
				<input v-model="email" :placeholder="$t('registration.enter_email')" class="f30" />
			</view>

			<view class="ipt">
				<view class="f-bt mt20 f-y-c">
					<view class="f-g-1">
						<input type="number" v-model="code" maxlength="6" :placeholder="$t('registration.enter_verification_code')" class="f30" />
					</view>
					<view class="f-g-0">
						<view v-if="time<=0" class="codeBtn f-c f24 c3" :class="{ disabled: isSending }"
							@click="sendcode(1)">
							{{btntxt}}
						</view>
						<view v-else class="codeBtn f-c f24 c3">{{$t('sq-btn.sent')}} {{btntxt}}</view>
					</view>
				</view>
			</view>
			<view class="ipt">
				<input password v-model="password" :placeholder="$t('registration.enter_password')" class="f30" />
			</view>
			<view class="ipt">
				<input password v-model="respassword" :placeholder="$t('registration.enter_confirm_password')" class="f30" />
			</view>
			<button class="loginBtn" @click="save" :disabled="disabled">{{$t('registration.register_and_login')}}</button>
			<view class="forgetPwd">
				<span v-if="type==1" @click="selecttype(0)">{{$t('registration.register_with_email')}}</span>
				<span v-else @click="selecttype(1)">{{$t('registration.register_with_phone')}}</span>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/third/uni-nav-bar.vue"
	import utils from '@/common/utils.js'
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				type: 1,
				disabled: false,
				time: 0,
				btntxt: this.$t('sq-btn.send_verification_code'),
				telcode: '+66',
				code: '',
				email: '',
				phone: '',
				password: '',
				respassword: '',
				isSending: false,
			}
		},
		components: {
			uniNavBar,
		},
		methods: {
			...mapMutations(["setMobile", "setToken", "setUser"]),
			selecttype(type) {
				this.time = 0
				this.type = type
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
			async sendcode(type) {

				if (this.type == 1 && this.phone.length < 7) {
					return this.util.message(this.$t('registration.enter_phone_number'), 3)
				}
				if (this.type == 0 && !this.email) {
					return this.util.message(this.$t('registration.enter_email'), 3)
				}
				this.isSending = true;
				let rest = await this.util.request({
					'url': this.api.sendRegisterCode,
					method: 'POST',
					mask: this.$t('password_reset.sending'),
					data: {
						phone: this.type == 1 ? this.telcode + this.phone : "",
						email: this.type == 0 ? this.email : "",
						type: this.type
					}
				})
				this.isSending = false;
				console.log('1212', rest)
				if (rest && rest.code == 200) {
					this.time = 60
					this.timer()
				}

			},
			async save() {

				if (this.type == 1 && this.phone.length < 7) {
					return this.util.message(this.$t('password_reset.enter_phone_number'), 3)
				}
				if (this.type == 0 && !this.email) {
					return this.util.message(this.$t('password_reset.enter_email'), 3)
				}
				if (this.type == 0 && this.email && !utils.isEmail(this.email)) {
					return this.util.message(this.$t('password_reset.enter_email'), 3)
				}
				if (!this.code) {
					return this.util.message(this.$t('password_reset.enter_verification_code'), 3)
				}
				if (!this.password) {
					return this.util.message(this.$t('registration.enter_password'), 3)
				}
				if (this.password != this.respassword) {
					return this.util.message(this.$t('registration.passwords_do_not_match'), 3)
				}

				this.disabled = true
				let rest = await this.util.request({
					'url': this.api.emailRegister,
					method: 'post',
					mask: this.$t('password_reset.saving'),
					data: {
						type: this.type,
						phone: this.type == 1 ? this.telcode + this.phone : "",
						email: this.type == 0 ? this.email : "",
						code: this.code,
						password: this.password,
					}
				})
				this.disabled = false
				if (rest.data) {
					console.log('rest', rest.data.token)
					this.setToken(rest.data.token)
					this.setUser(rest.data.userInfo)
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
	.disabled {
		pointer-events: none;
		opacity: 0.6;
	}

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
	}

	.txt {
		font-size: 28rpx;
		color: #969696;
	}

	.btnicon {
		margin-left: 30rpx;
		width: 60rpx;
		height: 60rpx;
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