<template>
	<view class="mh100">
		<view class="yyxqbgc p-r cf" :style="{background:tColor}"></view>
		<view class="p3 p-r m2" :style="{marginTop: '-100rpx'}">
			<view class="bf bs20 p3">
				<view class="f-c">
					<view class="flex f-y-c">
						<view class="ya f-c mr20" :style="{background: tColor}"><text
								class="iconfont icon-gou f28 cf" /></view>
						<view class="f40 wei">交易完成</view>
					</view>
				</view>
				<view class="bs20 imgc p-r mt50" v-if="info.equityCard"
					:style="{background:info.equityCard.imageType ==1? info.equityCard.image ||'linear-gradient(95.39deg, rgb(233, 239, 244) -6.1%, #bcc9d0 98.38%)':''}">
					<view class="p-a wh" v-if="info.equityCard.imageType==2">
						<mg-img :src="info.equityCard.imageType==2?info.equityCard.image:''"></mg-img>
					</view>
					<view class="p-r wh cf p3">
						<view class="p34 f-y-c">
							<view class="f-1">
								<view class="f40 wei" :style="{color:info.equityCard.textColor ? '#fff' : '#000'}">
									{{info.equityCard.name}}</view>
								<view class="mt10 f24 t-o-e"
									:style="{color:info.equityCard.textColor ? '#fff' : '#000'}">
									{{info.equityCard.desc}}</view>
							</view>
						</view>
						<block>
							<view class="bot p-a t-l neutra-font">
								<text class="wei f40" :style="{color:info.equityCard.textColor ? '#fff' : '#000'}"><text
										class="nowei f24">฿</text>{{info.money}}</text>
								<text class="f24 ml5"
									:style="{color:info.equityCard.textColor ? '#fff' : '#000'}">/{{info.equityCard.day}}天</text>
							</view>
						</block>
					</view>
				</view>
			</view>
			<view class="mt20 p3 bf bs20">
				<view class="b-ab f26">
					<!-- <view class="f-bt mb30">
						<view>卡号：{{info.orderSn}}</view>
						<view class="fz ml20 c3 f24 ml10" @click="util.fz(basicSetting.wechaID)">复制</view>
					</view> -->
					<view class="f-bt mb30">
						<view>订单编号：{{info.orderSn}}</view>
						<view class="fz ml20 c3 f24 ml10" @click="util.fz(basicSetting.wechaID)">复制</view>
					</view>
					<view class="f-bt mb30">
						<view>购买时间：{{info.created_at}}</view>
					</view>
					<view class="f-bt mb30">
						<view>到期时间：{{info.endTime}}</view>
					</view>
				</view>
				<view class="f-bt mt30">
					<view>支付金额</view>
					<view class="f28 wei">฿{{info.money}}</view>
				</view>
			</view>
		</view>
		<view class="foot-btnc cf f30 bf" :style="{padding: '20rpx',bottom: isIpx?'40rpx':0}">
			<view class="f-g-1 mt10">
				<button @click="godd" class="foot-btn bs40 f30" hover-class="btnhc"
					:style="{background:'transparent',border:'1px solid '+tColor,color:tColor}">前往点单</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		utilMixins,
		sljz
	} from "@/common/util-mixins.js"
	export default {
		name: 'gmls',
		components: {

		},
		data() {
			return {
				params: {
					page: 1,
					size: 10,
					state: '',
				},
				info: {},
			}
		},
		onLoad(options) {
			let id
			if (options.id) {
				id = decodeURIComponent(options.id)
			} else {
				id = options.id
			}
			this.id = id
			this.util.setNT('订单详情')
			this.getData()
		},
		mixins: [utilMixins, sljz],
		computed: {},
		methods: {
			async getData() {
				let {
					data
				} = await this.util.request({
					url: `${this.api.equityCardOrder}/${this.id}`,
					mask: 1,
				})
				this.info = data
				this.showLoading = false
			},
			godd() {
				this.go({
					t: 6,
					url: `/pages/index/goods`,
				})
			},
		},
	}
</script>
<style scoped lang="scss">
	.mt120 {
		margin-top: 100rpx
	}

	.bor-b {
		border-bottom: 1px solid #EFF3F6;
	}

	.ya {
		width: 50rpx;
		height: 50rpx;
		border-radius: 50%;
	}

	.imgc {
		height: 360rpx;
	}

	.yyxqbgc {
		padding-bottom: 200rpx;

		.top {
			padding: 30rpx 50rpx;
		}
	}

	.fz {
		background: #f4f4f4;
	}

	.bot {
		bottom: 30rpx;
		left: 30rpx;
		width: 100%;
	}
</style>