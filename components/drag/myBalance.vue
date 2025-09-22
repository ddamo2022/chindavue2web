<template>
	<view class="titles o-h" :style="{
			marginTop: co.marginTop + u,
			marginBottom: co.marginBottom + u,
			marginLeft: co.marginLR + u,
			marginRight: co.marginLR + u,
			borderRadius: `${co.tCircle}${u} ${co.tCircle}${u} ${co.bCircle}${u} ${co.bCircle}${u}`,
			background: co.colorBg,
		}">
		<block v-if="v.name=='balance'">
			<view class="f-bt bT p2 f-y-c">
				<view class="f-g-1 flex f-y-c">
					<view class="mr10" v-if="co.iconOpen == 1">
						<view class="balanceIcon" v-if="co.imgList.img">
							<mg-img :src="co.imgList.img"></mg-img>
						</view>
						<text class='iconfont icon-qianbao f32 c9' v-else></text>
					</view>
					<view :style="{ color: co.wordColor1 }" class="wordtxt">{{ co.balWord }}</view>
				</view>
				<view class="f-g-0 flex" @click="goLink('/pages/other/recharge/yesy')">
					<view class="f-g-1 flex f-y-c mr10 neutra-font" v-if="co.type == 2" :style="{ color: co.wordColor2 }">
						<text class="f24 l-h1">฿</text>
						<view class="f24 l-h1">{{isLogin?user.account && parseFloat(user.account.balance):'0'}}</view>
					</view>
					<text class='iconfont icon-gengduo f28 ml5 c9'></text>
				</view>
			</view>
			<view class="f-bt bB p2 f-y-c" v-if="co.type == 1">
				<view class="f-g-1 flex f-y-e" :style="{ color: co.wordColor2 }"
					@click="goLink('/pages/other/recharge/yesy')">
					<text class="f24 mr5">฿</text>
					<view class="wei f50 l-h1 neutra-font">{{isLogin?user.account && parseFloat(user.account.balance):'--'}}</view>
				</view>
				<view class="f-g-0 bBtn" :style="{
		          color: co.btnColor,
		          backgroundColor: co.btnColorBg,
		        }" @click="ljdl">
					{{ co.btnWord }}
				</view>
			</view>
		</block>
		<block v-else>
			<view class="f-bt bT p2 f-y-c">
				<view class="f-g-1 flex f-y-c">
					<view class="mr10" v-if="co.iconOpen == 1">
						<view class="balanceIcon" v-if="co.imgList.img">
							<mg-img :src="co.imgList.img"></mg-img>
						</view>
						<text class='iconfont icon-jifen f32 c9' v-else></text>
					</view>
					<view :style="{ color: co.wordColor1 }" class="wordtxt">{{ co.balWord }}</view>
				</view>
				<view class="f-g-0 flex" @click="goLink('/pages/other/recharge/yesy')">
					<view class="f-g-1 flex f-y-c mr10 neutra-font" v-if="co.type == 2" :style="{ color: co.wordColor2 }">
						<text class="f24 l-h1">฿</text>
						<view class="f24 l-h1">{{isLogin?user.account && user.account.integral:'0'}}</view>
					</view>
					<text class='iconfont icon-gengduo f28 ml5 c9'></text>
				</view>
			</view>
			<view class="f-bt bB p2 f-y-c" v-if="co.type == 1">
				<view class="f-g-1 flex f-y-e" :style="{ color: co.wordColor2 }"
					@click="goLink('/pages/other/recharge/yesy')">
					<text class="f24 mr5">฿</text>
					<view class="wei f50 l-h1 neutra-font">{{isLogin?user.account && user.account.integral:'--'}}</view>
				</view>
				<view class="f-g-0 bBtn" :style="{
			          color: co.btnColor,
			          backgroundColor: co.btnColorBg,
			        }" @click="ljdl">
					{{ co.btnWord }}
				</view>
			</view>
		</block>
	</view>
</template>
<script>
	export default {
		name: 'titles',
		props: {
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
			v: {
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
			return {};
		},
		methods: {
			async goLink(url) {
				if (!this.isLogin) {
					this.$emit('sh')
					return
				}
				this.go({
					t: 1,
					url,
				})
			},
			async ljdl() {
				if (!this.isLogin) {
					this.$emit('sh')
					return
				}
				this.goUrl(this.co.urlLink.url, this.co.urlLink)
			},
		},
		created() {
			// console.log(this.co)
		}
	};
</script>
<style lang="scss" scoped>
	.bT {
		height: 50px;

		.balanceIcon {
			width: 14px;
			height: 14px;
		}
	}

	.bB {
		height: 60px;

		.bBtn {
			width: 90px;
			height: 32px;
			border-radius: 32px;
			font-size: 13px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	
	.wordtxt{
		font-weight: 700;
		font-size: 30rpx;
	}
</style>
