<template>
	<view class="bf mh100" :style="{background:tColor}">
		<uni-nav-bar id='uninavbar' :uropcity="0" :uriconopcity='0' :bg="changedColor" :fixed='true' :ispr='false'
			:border='false' :statusBar="true" :isleft='false'>
			<view slot='left' class="hdsy bsf f-c" @click="go({t: 4})">
				<text class="iconfont icon-youjiantou f46 cf rowshow" :style="{color:fontColor}"></text>
			</view>
			<view class="t-c f30 wei f-g-1 cf ml50" :style="{color:fontColor}">{{$t('mr-code.membership_code')}}</view>
		</uni-nav-bar>
		<view class="sfbg" :style="{background:tColor}"></view>
		<view class="bf bgx">
			<view class="sfimg bsf ma">
				<mg-img :src="user.avatar|| `${onImgurl}my/mrtx.jpg`"></mg-img>
			</view>
			<view class="t-c mt15 mb50 f30">{{user.nickname || $t('mr-code.wechat_user')}}</view>
			<view class="sfbd">
				<!-- <tkiBarcode cid="itf14" :loadMake="false" format="itf14" val="1234567890123" ref="itf14" @result="itf14" /> -->
				<!-- <view class="ucode">
					<tki-barcode
					ref="itf14"
					format="itf14"
					cid="itf14"
					:width="6"
					:val="1234567890123"
					:loadMake="true" />
				</view> -->
				<view class="code1">
					<mg-img :src='code1'></mg-img>
				</view>
				<view class="t-c c9 f24" v-if="user && user.vipCardNum">
					{{$t('mr-code.membership_card_number')}}:{{user &&user.vipCardNum}}
				</view>
				<view class="t-c p30">
					<view class="sfmc f-c">
						<!-- 	<view class="sfm">
							<mg-img v-if="code" local='1' :src="code"></mg-img>
						</view> -->
						<view class="code2">
							<mg-img :src='code2'></mg-img>
						</view>
					</view>
					<view class="f24 wei4 f-c" style="color: #A3A8AE;">
						<text class='iconfont icon-shuaxin f28 c9 mr10'
							@click="makeMemberCode"></text>{{$t('mr-code.auto_update_seconds')}}
					</view>
				</view>
			</view>
			<view class="p3 f-row ab-e">
				<view @click="myDataClick(v)" v-for="(v,i) in darr" :key='i' class="f-1 t-c">
					<view class="f38 wbba neutra-font" :style="{color:tColor}">{{v.num}}</view>
					<view class="c6">{{v.name}}</view>
				</view>
			</view>
			<view class="f-c mt30 mb20 c4c50" @click="govip">
				<view>{{$t("mr-code.viewMembershipBenefits")}}</view>
				<text class='iconfont icon-gengduo f28 c4c50'></text>
			</view>
		</view>
		<!-- <uni-qrcode cid="zfewm" ref='zfewm' :text="ewmlink" :margin="0" /> -->
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import uniNavBar from "@/components/third/uni-nav-bar.vue"
	// import uniQrcode from '@/components/uQrcode/uni-qrcode.vue'
	// import tkiBarcode from "@/components/tki-barcode/tki-barcode.vue"
	export default {
		name: 'mrCode',
		components: {
			uniNavBar,
			// uniQrcode,
			// tkiBarcode,
		},
		data() {
			return {
				isgx: false,
				ewmlink: '',
				code: '',
				code1: '',
				code2: '',
			}
		},
		async onLoad(options) {
			// this.util.setNB('#424141')
			// this.getSystem({
			// 	setNB: 1
			// })
		    await this.getLoginInfo()
			await this.checkLogin();
			
			if (!this.user.vipCard && this.isLogin) {
				this.go({
					t: 1,
					url: '/pages/other/activate'
				})
			}


			this.$nextTick(() => {
				// this.$refs['itf14']._makeCode()
				this.makeMemberCode()
			})
			this.dsq = setInterval(() => {
				this.makeMemberCode()
			}, 30000)
			if (this.fontColor == '#000000' || this.fontColor == '#000') {
				uni.setNavigationBarColor({
					frontColor: '#000000',
				})
			} else {
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#ffffff'
				})
			}
		},
		// onUnload() {
		// 	this.dsq && clearInterval(this.dsq)
		// },
		onUnload() {
			if (this.dsq) {
				console.log("Clearing interval:", this.dsq);
				clearInterval(this.dsq);
				this.dsq = null;
				console.log("Interval cleared");
			} else {
				console.log("No interval to clear");
			}
		},
		onHide() {
			// Clear the interval when the page is hidden
			if (this.dsq) {
				clearInterval(this.dsq);
				this.dsq = null; // Explicitly reset to null
			}
		},
		computed: {
			...mapState({
				copywriting: state => state.layout.copywriting,
			}),
			darr() {
				return [{
					url: '/pages/other/coupon/couponList',
					num: this.user.mobile && this.user.coupons || 0,
					name: this.$t('mr-code.coupon'),
				}, {
					url: '/pages/my/integral/shop-index',
					num: this.user.mobile && this.user.account && this.user.account.integral || 0,
					name: this.copywriting.jfName || this.$t('mr-code.points'),
				}, {
					url: '/pages/other/recharge/index',
					num: this.user.mobile && this.user.account && this.user.account.balance || 0,
					name: this.copywriting.yeName || this.$t('mr-code.balance'),
				}]
			},
		},
		methods: {
			syye() {
				this.isgx = !this.isgx
				this.makeMemberCode()
			},
			async makeMemberCode() {
				// this.util.showLoading()
				// this.ewmlink = this.user.userTel || this.RandomRange(18, 18)
				// this.ewmlink = this.uId + this.RandomRange(6, 6)
				// this.$nextTick(async () => {
				// 	this.code = await this.$refs.zfewm.make()
				// 	uni.hideLoading()
				// })
				let {
					data
				} = await this.util.request({
					'url': this.api.qrCode
				})
				this.code1 = data.oneCode
				this.code2 = data.towCode
				console.log('makeMemberCode', data)
			},
			RandomRange(min, max) {
				var returnStr = "",
					range = (max ? Math.round(Math.random() * (max - min)) + min : min),
					arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
						'j', 'k',
						'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E',
						'F', 'G',
						'H',
						'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
					];
				for (var i = 0; i < range; i++) {
					var index = Math.round(Math.random() * (arr.length - 1));
					returnStr += arr[index];
				}
				return returnStr;
			},
			myDataClick(v) {
				if (!this.user.mobile) return
				this.go({
					t: 1,
					url: v.url
				})
			},
			govip() {
				this.go({
					t: 1,
					url: '/pages/my/vip/wkk'
				})
			}
		},
	}
</script>
<style scoped lang="scss">
	.sfbg {
		background-color: #424141;
		height: 15vh;
	}

	.bgx {
		border-radius: 20rpx;
		margin: 20rpx;
		padding: 0rpx 20rpx 140rpx 20rpx;
	}

	.sfimg {
		width: 140rpx;
		height: 140rpx;
		border: 10rpx solid #fff;
		margin-top: -70rpx;
		overflow: hidden;
	}

	.sfbd {
		padding: 0 60rpx;
	}

	.sfmc {
		margin: 0 0 30rpx;
	}

	.sfm {
		width: 340rpx;
		height: 340rpx;
	}

	.ab-e {
		border-top: 2rpx dashed #ddd;
		// border-bottom: 2rpx dashed #ddd;
	}

	.c4c50 {
		color: rgb(177, 30, 35);
	}

	.ucode {
		text-align: center;
		width: 560rpx;
	}

	.code1 {
		width: 100%;
		height: 200rpx;
	}

	.code2 {
		width: 360rpx;
		height: 360rpx;
	}
</style>