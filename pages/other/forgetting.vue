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
				<h3>{{$t("password_reset.reset_password")}}</h3>
			</view>
			<view class="ipt" v-if="type==1">

				<view class="f-s">
					<view class="f-g-0" style="padding-left: 10rpx; padding-right: 20rpx;">
						{{telcode}}
					</view>
					<view class="f-g-1"><input type="number" v-model="phone" :placeholder="$t('password_reset.enter_phone_number')" class="f30" /></view>
				</view>
			</view>
			<view class="ipt" v-else>
				<input v-model="email" :placeholder="$t('password_reset.ente_email')" class="f30" />
			</view>
			<view class="ipt">
				<view class="f-bt mt20 f-y-c">
					<view class="f-g-1">
						<input type="number" v-model="code" :placeholder="$t('password_reset.enter_verification_code')" class="f30" />
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
				<input password v-model="password" :placeholder="$t('password_reset.enter_new_password')" class="f30" />
			</view>
			<button class="loginBtn" @click="save">{{$t("password_reset.confirm")}}</button>
			<view class="forgetPwd">
				<span v-if="type==1" @click="selecttype(0)">{{$t("password_reset.reset_password_via_email")}}</span>
				<span v-else @click="selecttype(1)">{{$t("password_reset.reset_password_via_phone")}}</span>
			</view>
		</view>
	</view>

</template>
<script>
	import uniNavBar from "@/components/third/uni-nav-bar.vue"
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				type: 1,
				isSending: false,
				telcode: '+66',
				phone: '',
				email: '',
				code: '',
				password: '',
				time: 0,
				btntxt: this.$t('sq-btn.send_verification_code')
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
			async save() {
				console.log('1212');
				if (this.type == 1 && this.phone.length < 7) {
					return this.util.message(this.$t("password_reset.enter_phone_number"), 3)
				}
				if (this.type == 0 && !this.email) {
					return this.util.message(this.$t("password_reset.ente_email"), 3)
				}
				if (!this.code) {
					return this.util.message(this.$t("password_reset.enter_verification_code"), 3)
				}
				if (!this.password) {
					return this.util.message(this.$t("password_reset.enter_new_password"), 3)
				}
				//resetPassword
				let rest = await this.util.request({
					'url': this.api.resetPassword,
					method: 'post',
					mask: this.$t("password_reset.saving"),
					data: {
						type: this.type,
						phone: this.telcode + this.phone,
						email: this.email,
						code: this.code,
						password: this.password,
					}
				})

				if (rest && rest.code == 200) {
					this.util.message(this.$t("password_reset.saved_successfully"), 3)
					this.go({
						t: 3,
						url: "/pages/other/login"
					})
				}

			},
			async sendcode(type) {
				if (!this.isSending) {
					this.isSending = true;
				}
				if (this.type == 1 && this.phone.length < 7) {
					return this.util.message(this.$t("password_reset.enter_phone_number"), 3)
				}
				if (this.type == 0 && !this.email) {
					return this.util.message(this.$t("password_reset.ente_email"), 3)
				}
				let rest = await this.util.request({
					'url': this.api.sendCode,
					method: 'POST',
					mask: this.$t("password_reset.sending"),
					data: {
						phone: this.telcode + this.phone,
						email: this.email,
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

	.get-code-button {
		margin-left: 10px;
		padding: 5px 10px;
		font-size: 16px;
		cursor: pointer;
	}
</style>