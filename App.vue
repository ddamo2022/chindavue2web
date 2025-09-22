<script>
	import siteInfo from './common/siteinfo'
	import utils from '@/common/utils';
	import util from '@/common/core/util';
	import i18n from '@/locale/index.js'
	export default {
		globalData: {
			siteInfo: {},
			onImgurl: '',
		},
		onLaunch: function(options) {
		 
			var extConfig = uni.getExtConfigSync ? uni.getExtConfigSync() : {};
			if (extConfig && extConfig.uniacid) {
				this.globalData.siteInfo.uniacid = extConfig.uniacid;
				this.globalData.siteInfo.siteroot = extConfig.siteroot;
				this.globalData.siteInfo.isDev = false;
				this.globalData.onImgurl = `${extConfig.siteroot}/storage/default/home/images/`
			} else {
				this.globalData.siteInfo = siteInfo;
				this.globalData.onImgurl = `${siteInfo.siteroot}/storage/default/home/images/`
			}
			// #ifdef H5
			
			if (!siteInfo.isDev) {
				let params = utils.getUrlParams(location.href);
				console.log('121221',params)
				this.globalData.siteInfo.uniacid = siteInfo.uniacid
				//this.globalData.siteInfo.uniacid = params.uniacid;
				// console.log('%c params ', 'color: white; background-color: #f00000', params,siteInfo);
				// if(!params.uniacid){
				// 	util.message('none uniacid', 3)
				// }
			} else {
				this.globalData.siteInfo.uniacid = siteInfo.uniacid
			}
			// #endif
			// #ifdef MP
			this.autoUpdate()
			// #endif
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary'); 
			const dom = weex.requireModule('dom');
			// #endif
		},
		methods: {
			// #ifdef MP
			autoUpdate() {
				const updateManager = uni.getUpdateManager();
				updateManager.onCheckForUpdate(res => {
					if (res.hasUpdate) {
						uni.showModal({
							title: '更新提示',
							confirmText: "确定更新",
							showCancel: false,
							content: '检测到新版本，是否下载新版本并重启小程序？',
							success: res => {
								if (res.confirm) {
									this.downLoadAndUpdate(updateManager)
								} else {
									uni.showModal({
										title: '温馨提示~',
										content: '本次版本更新涉及到新的功能添加，旧版本无法正常访问的哦~',
										showCancel: false,
										confirmText: "确定更新",
										success: res => {
											if (res.confirm) {
												this.downLoadAndUpdate(updateManager)
											}
										}
									})
								}
							}
						})
					}
				});
			},
			downLoadAndUpdate: function(updateManager) {
				uni.showLoading();
				updateManager.onUpdateReady(function() {
					uni.hideLoading()
					updateManager.applyUpdate()
				})
				updateManager.onUpdateFailed(function() {
					uni.hideLoading()
					uni.showModal({
						title: '已经有新版本了哟~',
						content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
					})
				})
			},
			// #endif
		},
		onShow: function(options) {
			console.log('onshow',options)
			if(options && options.referrerInfo && options.referrerInfo.appId){
				uni.$emit('onPay',options.referrerInfo)
			}
		},
		onHide: function() {}
	}
</script>

<style lang="scss">
	@import '~@/static/styles/app.scss';
	@import './common/styles/index.css';

	/* #ifdef H5 */
	uni-page-head {
		display: none;
	}

	/* #endif */
</style>
