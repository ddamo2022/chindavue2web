<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<mg-popup v-model="privacyShow" :close='false' :mask="true" :animation="false">
			<view class="privacyBox h100v f-c-c">
				<view class="ysxy bs20">
					<view class="privacyTit">{{basicSetting.tit || $t('privacy.privacy_policy_title')}}</view>
					<view class="privacyDesc">
						{{basicSetting.before || $t('privacy.privacy_policy_intro')}}<text
							@click="openClick">{{name || $t('privacy.privacy_policy_link')}}</text>{{basicSetting.after || $t('privacy.privacy_policy_agreement')}}
					</view>
					<view class="privacyPost">
						<view class="refuseBtn">
							<navigator target="miniProgram" open-type="exit">{{$t('privacy.reject_button')}}</navigator>
						</view>
						<button class="agreeBtn ml20" open-type="agreePrivacyAuthorization"
							@agreeprivacyauthorization="agreeClick"
							:style="{background:tColor,color:fontColor}">{{ $t('privacy.agree_button')}}</button>
					</view>
				</view>
			</view>
		</mg-popup>
		<!-- #endif -->
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import mgPopup from '@/components/common/popup.vue'
	export default {
		components: {
			mgPopup,
		},
		data() {
			return {
				privacyShow: false,
				name: this.$t('privacy.default_privacy_policy_name'),
			}
		},
		computed: {
			...mapState({
				basicSetting: state => state.config.basicSetting,
			}),
		},
		methods: {
			open(n) {
				this.name = n
				this.privacyShow = true
			},
			openClick() {
				wx.openPrivacyContract({
					success: () => {},
					fail: () => {},
					complete: (res) => {
						console.log('res', res)
					}
				})
			},
			agreeClick() {
				this.privacyShow = false;
				this.$parent.init();
			},

		}
	}
</script>

<style scoped lang="scss">
	.ysxy {
		padding: 60rpx;
		width: 80%;
		background: #fff;
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
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.privacyPost .refuseBtn,
	.privacyPost .agreeBtn {
		flex: 1;
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