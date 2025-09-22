<template>
	<view class="sBody">
		<view class="sCon">
			<view class="sConL">
				<view :style="{
	            color: styles.titColorWord,
	          }">
					{{ styles.title }}
				</view>
			</view>
			<view class="sConR">
				<view>查看所有门店</view>
				<text class='iconfont icon-gengduo f28 ml5 c9'></text>
			</view>
		</view>
		<view class="f16 wei mt20">门店名称东湖店</view>
		<view class="f12 c9 mt10">
			距离10km | 湖北省武汉市洪山区珞珈山未来城购物中心
		</view>
	</view>
</template>
<script>
	export default {
		name: 'sH3',
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
				usrImg: '',
			};
		},
		methods: {

		},
	};
</script>
<style lang="scss" scoped>
	.sBody {
		padding: 20rpx;

		.sCon {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.sConL {
				display: flex;
				align-items: center;
			}

			.sConR {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
	}
</style>
