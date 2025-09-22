<template>
	<view class="jrwm h100">
		<view class="jr-main bs20 bf">
			<view class="f30 wei mt30 t-c">{{$t("my-other.contact_information")}}</view>
			<view class="f-c-c codeM" v-if="basicSetting.relation && basicSetting.relation.includes(1)">
				<view class="nav-code" v-if="basicSetting.qrCode">
					<mg-img :src="basicSetting.qrCode" @click="yl(basicSetting.qrCode)"></mg-img>
				</view>
				<view class="flex f-c mt20" v-if="basicSetting.wechaID">
					<view>{{basicSetting.wechaID}}</view>
					<view class="fz ml20 c3 f24 ml10" @click="util.fz(basicSetting.wechaID)">{{$t("my-other.copy_wechat_id")}}</view>
				</view>
				<view class="flex f-c mt20" v-if="basicSetting.phone">
					<view>{{basicSetting.phone}}</view>
					<view class="fz ml20 c3 f24 ml10" @click="util.makeTel(basicSetting.phone)">{{$t("my-other.make_a_call")}}</view>
				</view>
				<view class="mt60 c9 f28">
					{{$t("my-other.long_press_to_identify_qr_code")}}
				</view>
				<view class="mt20 c9 f28 t-c">
				{{$t("my-other.if_unable_to_identify_qr_code")}}，{{$t("my-other.save_image_and_scan_in_wechat")}}
				</view>
			</view>
		</view>
		<view class="f30 c0 f-c" v-if="basicSetting.relation && basicSetting.relation.includes(2)">
			<button class="sevBtn c9" v-if="basicSetting.relService==2 && basicSetting.connect" @click="zxkf"
				:style="{background:tColor}">{{$t("my-other.online_customer_service")}}</button>
			<button class="sevBtn c9" v-else open-type='contact' :style="{background:tColor}">{{$t("my-other.online_customer_service")}}</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import util from '@/common/core/util'
	export default {
		name: 'zkf',
		components: {

		},
		data() {
			return {

			}
		},
		async onLoad(options) {
			this.util.setNT(this.$t("my-other.contact_us"))
			await this.getConfig({
				ident: ["basicSetting"]
			})
		},
		computed: {
			...mapState({
				basicSetting: state => state.config.basicSetting,
			}),
		},
		methods: {
			...mapActions(["getConfig"]),
			yl(i) {
				let ci = []
				ci.push(i)
				util.preImg({
					idx: 0,
					urls: ci,
				})
			},
			zxkf() {
				// #ifdef  MP-WEIXIN
				wx.openCustomerServiceChat({
					extInfo: {
						url: this.basicSetting.connect
					},
					corpId: this.basicSetting.firmID,
					success(res) {},
					fail(e) {
						console.log(e)
					}
				})
				// #endif	
			},
		},
	}
</script>
<style scoped lang="scss">
	.jrwm {
		background: #F6F6F6;

		.jr-main {
			margin: 40rpx;
			padding: 40rpx;

			.nav-log {
				width: 100rpx;
				height: 100rpx;
			}

			.codeM {
				padding: 80rpx 40rpx 40rpx 40rpx;
			}

			.nav-code {
				width: 400rpx;
				height: 400rpx;
			}
		}

		.fz {
			background: #f4f4f4;
		}
	}
	.mt60{
		margin-top: 60rpx;
	}

	.sevBtn {
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: transparent;
		padding: 0;
		font-size: 30rpx;
		width: 400rpx;
		border-radius: 40rpx;
		color: #fff;
	}
</style>