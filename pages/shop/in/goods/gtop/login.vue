<template>
	<view class="flex f-bt login">
		<view class="f-g-1 flex col f-y-c">
			<text class="iconfont icon-huiyuan f30 mr10" style="color: #F9DBAD"></text>
			<view class="f22">{{$t("g-table.login_member")}} | {{$t("g-table.enjoy_more_exclusive_privileges")}}</view>
		</view>
		<view class="f-g-0 btn f22 f-c" @click="login">{{$t("g-table.login")}}</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {

			}
		},
		methods: {
			login() {
				this.$emit('sh')
			},
		}
	}
</script>

<style scoped lang="scss">
	.login {
		background: #3F3F41;
		border-radius: 20rpx;
		margin: 20rpx;
		padding: 15rpx;

		.col {
			color: #F9DBAD;
		}

		.btn {
			background: #F9DBAD;
			border-radius: 30rpx;
			width: 90rpx;
			height: 40rpx;
		}
	}
</style>