<template>
	<view class="wh loginMain posi-r">
		<view class="posi-r w100":style="{top:0,height:`${statusNavBarHeight+200}px`,paddingTop:`${menuButtonTop}px`,color:'#fff',zIndex:16}">
			<view class="flex mt10">
				<view @click="go({t: 4})" class="f-g-0 ml20">
					<text class="iconfont icon-fanhui f32 c0"></text>
				</view>
				<view class="t-c f32 wei c0 f-g-1">
					<view>登录/注册</view>
				</view>
			</view>
			<view class="logiset" v-if='system.basic_settings'>
				<view class="logo">
					<image class="wh bsf" :src="system.basic_settings.login_logo" mode="aspectFit"></image>
					<!-- <image class="wh bsf" src="/static/local/img/xiaolg.png" mode="aspectFit"></image> -->
				</view>
				<!-- <view class="f-x-c mt20 f42 wei c0">{{system.basic_settings.platform_name}}</view> -->
			</view>
		</view>
		<view class='lgbg posi-a t0'>
			<qby-img src="/static/local/img/login_bg.png"></qby-img>
		</view>
		<view class="o-main" >
			<!-- #ifndef H5 -->
			<view class="f44"  v-if="!mobile">
				<button :disabled="loading" class="btni bf f-c f32 telbtn c3"
					:style="{background:'#FFD11A',borderColor:'#FFD11A',}" open-type="getPhoneNumber"
					@getphonenumber="mpGetphonenumber">一键登录</button>
			</view>
			<view class="f44" v-else>
				<!-- #ifdef MP-WEIXIN -->
				<button class="btni bf f-c f32 telbtn c3" :style="{background:'#FFD11A',borderColor:'#FFD11A',}"  @click="mpGetphonenumbert">
					一键登录
				</button>
				<!-- #endif -->
				<!-- #ifdef MP-KUAISHOU -->
				<button class="btni bf f-c f32 telbtn c3" :open-type="getUserInfo" scope='userInfo' :style="{background:'#FFD11A',borderColor:'#FFD11A',}" @click="getUserInfo">
					一键登录
				</button>
				<!-- #endif -->
			</view>
		<!-- 	<view class="f44" v-else>
				<button class="btni bf f-c f32 telbtn c3" :style="{background:'#FFD11A',borderColor:'#FFD11A',}"  @click="bindProfile">
					<view class="btnLogo f-c mr10">
						<image class="wh bsf" src="/static/local/img//weixin_icon.png" mode="aspectFit"></image>
					</view>
					微信用户一键登录
				</button>
			</view> -->
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<button class="btni bf f-c f32 btnit" :style="{borderColor:'#E7E7E7',color:'#656565'}"
				 @click="goRegister">手机号登录/注册</button>
			<!-- #endif -->
			<button class="btni bf f-c f28 btnit btnizbd" :style="{borderColor:'#E7E7E7',color:'#656565'}"
				@click="go({t:4})">暂不登录</button>
		</view>
		<view class="posi-f xybox w100 f24 mb30 mt20">
			<view class="flex">
				<u-checkbox-group>
					<u-checkbox activeColor='#F98811' v-model="ysxy" label-size="24" shape="circle">登录即代表您已阅读并同意接受
						<text v-if="system.basic_settings && system.basic_settings.platform_name">{{system.basic_settings.platform_name}}</text>
						<text :style="{color:'#F98811'}" @click="go({ t: 1, url:`/pages/my/other/tz?t=${'用户服务协议'}&p=${1}`})">《用户服务协议》、</text>
						<text :style="{color:'#F98811'}" @click="go({ t: 1, url:`/pages/my/other/tz?t=${'隐私权保护政策'}&p=${2}`})">《隐私权保护政策》</text>
					</u-checkbox>
				</u-checkbox-group>
			</view>
		</view>
		<yszc :value="fwxyshow" @close='fwxyshow=false' @agree='bindProfile'></yszc>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import utils from '@/common/utils.js'
	export default {
		name: 'login',
		components: {
		},
		data() {
			return {
				loading: false,
				ysxy:true,
			}
		},
		computed: {
			...mapState({
				fwxyshow: state => state.fwxyshow,
				system: state => state.system,
			}),
		},
		async onLoad() {
			this.getSystem()
			this.util.setNT('登录')
			await this.init()
		},
		methods: {
			...mapActions(["setSystemInfo", "getConfig"]),
			...mapMutations(['setMobile']),
			async init() {
				this.GetPxToRpxRate()
			},
			async GetPxToRpxRate() {
				if (!this.pxToRpxRate) {
					await this.setSystemInfo()
				}
			},
			// bindProfile() {
			// 	if (this.loading) return
			// 	this.loading = true
			// 	uni.getUserProfile({
			// 		desc: '用于完善用户资料',
			// 		success: res => {
			// 			try {
			// 				if (res.errMsg == 'getUserProfile:ok') {
			// 					let openid = getApp().globalData.openid,
			// 						unionid = getApp().globalData.unionid,
			// 						portrait = res.userInfo.avatarUrl,
			// 						nickname = res.userInfo.nickName,
			// 						mobil e= this.mobile
			// 						let rest = await util.request({
			// 							'url': api.wrg,
			// 							method: 'post',
			// 							data: {
			// 								avatar,
			// 								nickname,
			// 								mobile,
			// 								openid,
			// 								unionid,
			// 							}
			// 						}).then(async (rest) => {
			// 							rest.data && commit('setToken', rest.data.token)
			// 							this.util.message('登录成功', 1, 1000)
			// 							let resx = await util.request({
			// 								'url': api.profix,
			// 								data: {
			// 									// token: rest.data.token,
			// 								}
			// 							})
			// 							resx.data && commit('setUser', resx.data)
			// 							utils.swnb(1000)
			// 							resolve()
			// 						}).catch(() => {
			// 							this.loading = false
			// 						})
			// 				}

			// 			} catch (e) {
			// 				this.loading = false
			// 				console.log(e)
			// 			}
			// 		},
			// 		fail: err => {
			// 			this.loading = false
			// 			uni.showModal({
			// 				title: '温馨提示',
			// 				content: '获取头像等信息失败',
			// 				showCancel: false
			// 			});
			// 		}
			// 	})
			// },
			// mpGetphonenumber(result) {
			// 	console.log('mpGetphonenumber', result);
			// 	if (result.detail.errMsg == 'getPhoneNumber:ok') {
			// 		this.setfwxy(true)
			// 		let sessionKey = getApp().globalData.session_key,
			// 			data = result.detail.encryptedData,
			// 			iv = result.detail.iv
			// 		this.util.request({
			// 			url: this.api.jm,
			// 			method: 'POST',
			// 			data: {
			// 				sessionKey,
			// 				data,
			// 				iv
			// 			}
			// 		}).then(res => {
			// 			if (res?.data?.phoneNumber) {
			// 				this.setMobile(res.data.phoneNumber)
			// 			}
			// 		})
			// 		// console.log(sessionKey, data, iv)
			// 	} else {
			// 		uni.showModal({
			// 			title: '温馨提示',
			// 			content: '获取手机号失败',
			// 			showCancel: false
			// 		});
			// 		return;
			// 	}
			// },
			mpGetUserInfo(){
				console.log(123)
			},
			goRegister() {
				this.go({
					t: 1,
					url: '/pages/other/register'
				})
			},
		}
	}
</script>
<style scoped lang='scss'>
	.loginMain{
		
	}
	.lgbg{
		width:750rpx;
		height: 100%;
		z-index: 0;
	}
	.logiset{
		margin-top: 60rpx;
	}
	.o-main {
		width: 100%;
		z-index: 6;
		padding-top: 200rpx;
		
		/* #ifdef  MP-KUAISHOU */
			padding-left: 20rpx;
			padding-right: 20rpx;
		/* #endif */
		
		/* border-radius: 50rpx 50rpx 0 0; */
		/* padding-top: 200rpx; */
	}

	.logo {
		width: 600rpx;
		height: 350rpx;
		margin: 0 auto;
	}

	.btnLogo{
		width: 40rpx;
		height: 40rpx;
		margin-top: 4rpx;
	}
	.btni {
		/* #ifndef  MP-KUAISHOU */
		margin: 0 30rpx;
		/* #endif */
		border: 1px solid #FFD11A;
		height: 90rpx;
		border-radius: 20rpx;
	}

	.btnit {
		margin: 60rpx 30rpx 0 30rpx;
		/* #ifdef  MP-KUAISHOU */
		margin: 60rpx 0 0 0;
		/* #endif */
	}
	
	.btnizbd{
		border: none;
		margin-top: 30rpx;
	}
	.xybox{
		padding: 0 20rpx;
		bottom: 40rpx;
	}
</style>
