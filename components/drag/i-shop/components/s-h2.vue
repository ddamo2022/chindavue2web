<template>
	<view class="sBody">
		<view class="sCon">
			<view class="sConL">
				<view>东湖万达店</view>
			</view>
			<view class="sConR">
				<view>1000M</view>
				<text class='iconfont icon-gengduo f28 ml5 c9'></text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'sH2',
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
