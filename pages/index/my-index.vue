<template>
	<view class="o-h pb230"
		:style="{background:layout.pageSetting && layout.pageSetting.styles && layout.pageSetting.styles.colorIcon || ''}">
		<uni-nav-bar v-if="layout.pageSetting.styles.navOpen==1" id='uninavbar' uropcity="1" :isleft="false"
			:fixed='true' :ispr='true' :statusBar="true" :border='false' :bg='layout.pageSetting.styles.navColorBg'
			:color="layout.pageSetting.styles.colorWord" :title="$t('pagetitle.personalcenter')">
		</uni-nav-bar>
		<block v-for="(v, i) in layout.list" :key="i">
			<m-vip :co="v.styles" v-if="v.hide==1 && v.name == 'myVip'" @sh="sqsjh"></m-vip>
			<picLunbo-by :co="v.styles" v-if="v.hide==1 && v.name == 'picLunbo'"></picLunbo-by>
			<m-info :co="v.styles" v-else-if="v.hide==1 && v.name == 'myBalance'"></m-info>
			<h-zone :co="v.styles" v-else-if="v.hide==1 && v.name == 'hot'"></h-zone>
			<p-img :co="v.styles" v-else-if="v.hide==1 && v.name == 'pictures'"></p-img>
			<b-group :co="v.styles" v-else-if="v.hide==1 && v.name == 'btn'" @tabitem="tabitem"></b-group>
			<l-wire :co="v.styles" v-else-if="v.hide==1 && v.name == 'lines'"></l-wire>
			<b-tit :co="v.styles" v-else-if="v.hide==1 && v.name == 'titles'"></b-tit>
			<m-gic :co="v.styles" v-else-if="v.hide==1 && v.name == 'margic'"></m-gic>
			<m-bale :co="v.styles" :v="v" v-else-if="v.hide==1 && v.name == 'balance'" @sh="sqsjh"></m-bale>
			<m-bale :co="v.styles" :v="v" v-else-if="v.hide==1 && v.name == 'integral'" @sh="sqsjh"></m-bale>
			<l-nav :co="v.styles" :v="v" v-else-if="v.hide==1 && v.name == 'listNav'"></l-nav>
			<s-notice :co="v.styles" v-else-if="v.hide==1 && v.name == 'notice'"></s-notice>
			<m-ability :co="v.styles" :v="v" v-else-if="v.hide==1 && v.name == 'myAbility'" @sh="sqsjh"></m-ability>
			<s-point :co="v.styles" :v="v"
				v-else-if="v.hide==1 && v.name == 'setPoint' && orderCollect && orderCollect.id"></s-point>
			<custom-video :co="v.styles" :v="v" v-else-if="v.hide==1 && v.name == 'videos'" />
			<roll-package :co="v.styles" :v="v" v-else-if="v.hide==1 && v.name == 'rollPackage'" :rl="rollOrder" />
		</block>
		<block v-if="userAd">
			<m-ad :co="userAd"></m-ad>
		</block>
		<view>
			<my-copy></my-copy>
		</view>
		<view class="posi-r">
			<tab-bar></tab-bar>
		</view>
		<sq-btn type="1" ref="sqBtn"></sq-btn>
		<load v-if="showloading"></load>
		<userPrivacy ref="privacy"></userPrivacy>
		<language ref="language"></language>
		<bind-mobile ref="bindmobile"></bind-mobile>
		<editbirthday ref="editbirthday"></editbirthday>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import uniNavBar from "@/components/third/uni-nav-bar.vue"
	import myCopy from "./my/my-copy.vue"
	import mVip from '@/components/drag/m-vip/m-vip.vue';
	import mInfo from '@/components/drag/m-info/m-info.vue';
	import picLunboBy from '@/components/drag/picLunbo.vue';
	import HZone from '@/components/drag/hot.vue';
	import pImg from '@/components/drag/pictures.vue';
	import bGroup from '@/components/drag/btn.vue';
	import lWire from '@/components/drag/lines.vue';
	import bTit from '@/components/drag/titles.vue';
	import mGic from '@/components/drag/margic.vue';
	import mBale from '@/components/drag/myBalance.vue';
	import aTion from '@/components/drag/attenTion.vue';
	import lNav from '@/components/drag/listNav.vue';
	import load from '@/components/common/load.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import mAd from '@/components/drag/ad.vue';
	import sNotice from '@/components/drag/notice.vue';
	import mAbility from '@/components/drag/myAbility.vue';
	import sPoint from '@/components/drag/setPoint.vue'
	import userPrivacy from "@/components/user/userPrivacy.vue";
	import customVideo from '@/components/drag/custom-video.vue'
	import rollPackage from '@/components/drag/rollPackage.vue'
	import language from '@/components/language/language.vue'
	import bindMobile from '@/components/common/bind-mobile.vue'
	import editbirthday from '@/components/common/editbirthday.vue'
	export default {
		components: {
			uniNavBar,
			myCopy,
			mVip,
			picLunboBy,
			mInfo,
			HZone,
			pImg,
			bGroup,
			lWire,
			bTit,
			mGic,
			mBale,
			aTion,
			lNav,
			load,
			sqBtn,
			mAd,
			sNotice,
			sPoint,
			mAbility,
			userPrivacy,
			customVideo,
			rollPackage,
			language,
			bindMobile,
			editbirthday
		},
		computed: {
			...mapState({
				layout: state => state.layout.user || {},
				orderCollect: state => state.layout.orderCollect || {},
			})
		},
		data() {
			return {
				showloading: true,
				privacyShow: false,
				userAd: [],
				rollOrder: [],
			}
		},
		onReady() {
			var _this = this;
			// #ifdef MP-WEIXIN
			wx.getPrivacySetting({
				success: res => {
					if (res.needAuthorization) {
						_this.$refs.privacy.open(res.privacyContractName)
						return;
					}
				},
				fail: () => {},
				complete: (res) => {
					console.log(res)
				}
			})
			// #endif
		},
		async onLoad(options) {
			// if (options && options.linecode) {
			// 	await this.checkLineCode(options.linecode);
			// }
			await this.init()
			this.showloading = false
			if (this.isLogin) {
				if (!this.user.mobile) {
					this.$refs['bindmobile'].open()
				} else {
					if (!this.user.birthday) {
						this.$refs['editbirthday'].open()
					}
				}
			}


		},
		methods: {
			...mapActions(["getConfig", "checkLineCode"]),
			async init() {
				await this.getLoginInfo()
				await this.getConfig({
					// ident: ["growthSetting.customTxt","integralSetting.customTxt"]
					ident: ["basicSetting", "birthdayGift"]
				})
				await this.getLayout()
				await this.gAd()
				console.log('ly', this.layout)
				if (this.layout && this.layout.list) {
					if (this.layout.list.find(v => v.name == 'rollPackage')) {
						this.gRollOrder()
					}
				}
				// await this.getSystem();
			},
			sqsjh() {
				this.$refs['sqBtn'].open()
			},
			async gAd() {
				let {
					data
				} = await this.util.request({
					'url': this.api.gglb,
					data: {
						location: 3
					}
				})
				this.userAd = data ? data.window : []
			},
			async gRollOrder() {
				let {
					data
				} = await this.util.request({
					url: this.api.couponPack,
				})
				this.rollOrder = data ? data.list : []
			},
			tabitem(e) {
				console.log(e.word);
				//切换语言
				this.$refs['language'].open()
				// if(e.word==='Language'){
				// 	this.privacyShow =true
				// }
			},
		},
		onShow() {
			if (this.uId) {
				this.refreshUser({
					nomask: 1,
					get: 1,
					now: 1,
				})
			}
		},
	}
</script>

<style scoped lang="scss">
	.db {
		position: absolute;
		bottom: 190rpx;
		width: 100%;
	}

	.pb230 {
		padding-bottom: 230rpx;
	}

	.privacyTit {
		font-size: 32rpx;
		font-weight: bold;
		color: #333;
		text-align: center;
		overflow: hidden;
	}

	.privacyDesc {
		font-size: 28rpx;
		color: #666;
		overflow: hidden;
		margin-top: 30rpx;
	}

	.privacyDesc text {
		color: #333;
	}

	.privacyPost {
		overflow: hidden;
		margin-top: 60rpx;
	}

	.privacyPost .refuseBtn,
	.privacyPost .agreeBtn {

		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 28rpx;
		font-weight: bold;
		color: #fff;
		background: #a9a9a9;
		border-radius: 40rpx;
		box-sizing: border-box;
		overflow: hidden;
	}

	.noagreeBtn {
		margin-top: 20rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 28rpx;
		font-weight: bold;
		color: #fff;
		background: #a9a9a9;
		border-radius: 40rpx;
		box-sizing: border-box;
		overflow: hidden;
	}
</style>