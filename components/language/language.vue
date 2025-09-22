<template>
	<uni-popup ref="popup" type="bottom">
		<view class="bs30 bf">
			<view class="tit p-r f-c">
				<view class="f32 wei">{{$t("modal.choose_language")}}</view>
				<text class="p-a cIcon iconfont icon-guanbi c6 f36" @click="close"></text>
			</view>
			<view class="p3">
				<view class="payOptions">
					<radio-group name='radiogroup' @change="radioChange">
						<label class="weui-cell right30 f-s mb30 bf" v-for='(label, key) in languages' :key='key'>
							<view class="weui-cell__bd">
								<view class="f-row">
									<view class="f34 f-1 l-n">{{ label }}
									</view>
									<view class="weui-cell__ft_in-radio">
										<view class="yuan f-c"
											:style="{backgroundColor:key == radioVal? tColor:'',borderColor:key == radioVal? tColor:''}">
											<text class="iconfont f20 icon-gou wei" v-if="key == radioVal"
												:style="{color:key == radioVal?fontColor:''}"></text>
										</view>
										<radio :value="key" color="#F98811" :checked="key == radioVal"
											class="weui-check" />
									</view>
								</view>
							</view>
						</label>
					</radio-group>
				</view>
				<view class="">
					<button @click="switchLanguage" :style="{backgroundColor:tColor,color:fontColor}"
						:disabled="loading" :loading="loading"
						class="foot-btn bs60 f30 wei cf">{{$t("modal.confirm")}}</button>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	// import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import utils from '@/common/utils.js'
	import api from '@/common/api'
	export default {
		name: 'language',
		components: {

		},
		props: {
			visible: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				loading: false,
				languages: {
					en: this.$t('modal.english'),
					zh: this.$t('modal.chinese'),
					th: this.$t('modal.thai')
				},
				radioVal: uni.getStorageSync('language') || 'en',
			}
		},
		computed: {},
		methods: {
			async open() {

				this.$nextTick(() => {
					// 这里可以放任何需要在语言切换后重新渲染的逻辑
					this.$refs['popup'].open()
					this.refreshPopup()
				});
			},
			refreshPopup() {
				this.languages = {
					en: this.$t('modal.english'),
					zh: this.$t('modal.chinese'),
					th: this.$t('modal.thai')
				};
		 
			},
			close() {
				this.loading = false
				this.$refs['popup'].close()
			},
			radioChange(e) {
				console.log(e);
				this.radioVal = e.detail.value
			},
			switchLanguage() {
				if (this.radioVal) {
					uni.setLocale(this.radioVal);
					this.$i18n.locale = this.radioVal;
					console.log(this.radioVal)
					this.loading = false
					this.$refs['popup'].close()
					uni.setStorageSync('language', this.radioVal);
			
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.tit {
		background: #F2F0F3;
		height: 100rpx;

		.cIcon {
			top: 26rpx;
			right: 30rpx;
		}
	}

	.weui-cell {
		padding: 40rpx 35rpx 40rpx;
		border-radius: 20rpx;
	}

	.weui-cell-hover {
		border: 2rpx solid #F98811;
		background: linear-gradient(180deg, #FBF4E2, #F9EED8);
		color: #333;
	}

	.weui-cell:last-child:after {
		display: block;
	}

	.weui-cell__bd {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}

	.weui-cell:after {}

	.hdimg {
		width: 49rpx;
		height: 49rpx;
		margin-right: 30rpx;
	}

	.right30::after {
		right: 30rpx;
	}

	.foot-btn {
		background: $bg-primary;
	}

	.yuan {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		border: 2rpx solid #ccc;
		z-index: 10;
	}
</style>