<template>
	<view class="">
		<view class="us-bg" :style="{background:tColor}">11</view>
		<view class="f-x-bt p2 us-info bf bs20">
			<view class="f-raw f-g-1" style="flex-wrap: nowrap;">
				<view class="bsf mr30 f-g-0" style="width: 110rpx;height: 110rpx;">
					<image class="wh" :src="user.avatar || 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132'" mode="aspectFill"></image>
				</view>
				<view class="f36 f-col f-g-1">
					<view class="f-g-1" v-if="isLogin && user.nickname">
						<view class="flex f-g-1">
							<view class="f34 wei c0 l-h1 t-o-e">{{user.nickname}}</view>
							<view class="flex ml20">
								<view class="flex daren">
									<view class="dr-bg f20 f-y-c">
										<view class="wei">ID:{{user.id}}</view>
									</view>
								</view>
							</view>
						</view>
						<view class="f26 wei mt10">{{user.mobile}}</view>
					</view>
					<view v-else class="f36 wei">
						<view class="f44 wei">
							<!-- #ifndef H5 -->
							<button class="f40 telbtn c3 wei t-l" @click="bjuser">微信用户</button>
							<!-- #endif -->
							<!-- #ifdef H5 -->
							<!-- <view class="f44 wei">
								<button class="f44 telbtn c3 wei t-l" @click="goRegister">登录/注册</button>
							</view> -->
							<!-- #endif -->
						</view>
					</view>
				</view>
			</view>
			<view class="f-g-0" @click="bjuser"  v-if="isLogin">
				<text class="iconfont icon-shezhi f48 wei ml5 c0"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		components: {
			
		},
		props: {
			styles: {
				type: Object,
				default: () => {}
			}
		},
		computed: {
			...mapState({
				fwxyshow: state => state.fwxyshow,
			})				
		},
		data() {
			return {
			
			}
		},
		methods: {
			async ljdl() {
				if (!await this.checkLogin()) return
			},
			async goRegister() {
				if (!await this.checkLogin()) return
				// this.go({
				// 	t: 1,
				// 	url: '/pages/other/register'
				// })
			},
			bjuser(){
				this.go({
					t: 1,
					url: '/pages/other/chooseAvatar'
				})
			},
			xguser(){
				this.setfwxy(true)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.us-bg{
		height: 500rpx;
	}
	.us-info{
		margin: -100rpx 30rpx 30rpx 30rpx;
		padding: 46rpx 30rpx;
	}
	.telbtn {
		line-height: 1.8;
		background: none;
		padding-left: 0;
		margin-left: 0rpx;
	}

	.daren {
		height: 40rpx;

		.dr-bg {
			color: #FBF0D0;
			border-radius: 20rpx;
			padding: 0 18rpx;
			background: #222124;

			.dr-img {
				width: 22rpx;
				height: 28rpx;
			}
		}
	}

</style>
