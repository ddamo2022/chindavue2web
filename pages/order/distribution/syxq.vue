<template>
	<view class="pb20 o-h">
		<view class="qdc p-r o-h">
			<view class="bf mb30 p3 today f-c" :style="{background:tColor}">
				<view class="f-c-c">
					<view class="cf">累计佣金(THB)</view>
					<view class="f60 wei cf mt20">{{fxsSq.account && fxsSq.account.earnings || 0}}</view>
				</view>
			</view>
			<view class="m03 main">
				<view class="bf mb30 p30 bs20 mt20">
					<view class="f-c-c">
						<view class="c9">可提现佣金(THB)</view>
						<view class="f60 wei c0 mt20">{{fxsSq.account && fxsSq.account.canWithdrawalAmount || 0}}</view>
					</view>
					<view class="f-c-c p23 mt20" v-if="fxsInfo.withdrawal && fxsInfo.withdrawal.rule">
						<button class="clearbtn sbtn f-c cf f30" @click="go({t:1,url:'tx?t=2'})"
							:style="{background:tColor}">申请提现</button>
					</view>
				</view>
				<view class="bs20 bf">
					<view class="f-bt f-y-c p32">
						<view class="f-g-1 flex">
							<view><text class="iconfont icon-zanwudingdan f30 c0 mr20"></text></view>
							<view>待入账佣金(THB)</view>
						</view>
						<view class="f-g-0 wei c6">{{fxsSq.account && fxsSq.account.freezeAmount || 0}}</view>
					</view>
					<view class="f-bt f-y-c p32">
						<view class="f-g-1 flex">
							<view><text class="iconfont icon-duodingdan f30 c0 mr20"></text></view>
							<view>提现中佣金(THB)</view>
						</view>
						<view class="f-g-0 wei c6">{{fxsSq.account && fxsSq.account.withdrawalAmount || 0}}</view>
					</view>
					<view class="f-bt f-y-c p32">
						<view class="f-g-1 flex">
							<view><text class="iconfont icon-biaodanwancheng f30 c0 mr20"></text></view>
							<view>已提现佣金(THB)</view>
						</view>
						<view class="f-g-0 wei c6">{{fxsSq.account && fxsSq.account.withdrawalCompleteAmount || 0}}</view>
					</view>
				</view>
				<!-- <view class="bs20 bf mt20 p32">
					<view class="wei f30">用户须知</view>
					<view class="c9 mt10 f24">
						<view>买家确认收货后，7天后可申请提现</view>
						<view>注意：可提现佣金满10THB后才能申请提现</view>
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'syxq',
		components: {

		},
		data() {
			return {

			}
		},
		async onLoad(options) {
			console.log(options)
			this.util.setNT('累计佣金')
		},
		computed: {
			...mapState('dndc', ['fxsInfo','fxsSq']),
		},
		methods: {

		},
	}
</script>
<style scoped lang="scss">
	.qdc {

		.today {
			width: 160%;
			margin-left: -30%;
			overflow: hidden;
			height: 400rpx;
			border-bottom-left-radius: 40%;
			border-bottom-right-radius: 40%;
			display: flex;
			justify-content: center;

			.body {
				width: 100vw;
			}
		}

		.main {
			margin-top: -90rpx;
		}
	}

	.sbtn {
		width: 560rpx;
		height: 78rpx;
		background: #0594FE;
		border-radius: 47px;
	}
</style>