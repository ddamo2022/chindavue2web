<template>
	<view class="noLogin fl_center f-g-1">
		<view class="nCon fl_center f-g-1 f-bt p02">
			<view class="logo bsf mr20 f-g-0">
				<mg-img :src="user.applylogo || `${onImgurl}no-user.png`" />
			</view>
			<view class="cTxt f-g-1">
				<view :style="{
	                  color: styles.nLogin.cWordColor,
	                }" class="cH1">
					 
					 {{ util.getTranslation("m-info",styles.nLogin.cWord) }}
				</view>
				<view :style="{
	                  color: styles.nLogin.cTitColor,
	                }" class="cH2 mt10">
					 
					 {{ util.getTranslation("m-info",styles.nLogin.cTit) }}
				</view>
			</view>
			<view :style="{
	                background: styles.nLogin.cBtnBgColor,
	                color: styles.nLogin.cBtnColor,
	              }" class="cBtn f-g-0"  @click="sqsjh">
 
				 {{ util.getTranslation("m-info",styles.nLogin.cBtn) }}
			</view>
		</view>
		<!-- <sq-btn type="1" ref="sqBtn"></sq-btn> -->
	</view>
</template>
<script>
	export default {
		components: {
			
		},
		name: 'style1',
		props: {
			styles: {
				type: Object,
				default: function() {
					return {}
				}
			},
			u: {
				type: String,
				default: 'px'
			},
		},
		data() {
			return {
				usImg: '',
				usrImg: '/static/images/no-user.png',
			};
		},
		methods: {
			
			sqsjh() {
				this.$emit('sh')
			},
			// bjuser(){
			// 	this.go({
			// 		t: 1,
			// 		url: '/pages/other/chooseAvatar'
			// 	})
			// },
		},
	};
</script>
<style lang="scss" scoped>
	.noLogin {
		border-radius: 8rpx;
		background: #f7f8fa;

		.nCon {
			height: 156rpx;
			border-radius: 20rpx;
			background: #fff;

			.logo {
				width: 100rpx;
				height: 100rpx;
			}

			.cTxt {
				display: flex;
				flex-direction: column;

				.cH1 {
					line-height: 40rpx;
					font-weight: 600;
				}

				.cH2 {
					line-height: 30rpx;
					font-size: 24rpx;
				}
			}

			.cBtn {
				width: 160rpx;
				height: 60rpx;
				text-align: center;
				line-height: 60rpx;
				font-size: 24rpx;
				font-weight: 600;
				border-radius: 60rpx;
			}
		}
	}

	.fl_center {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
