<template>
	<view class="mh100">
		<view class="p3"></view>
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
					url: `${this.api.equityCard}/${this.id}`,
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
		bottom: 0;
		width: 100%;
	}
</style>