<template>
	<view class="mh100 yqjl p2">
		<view class="hbg bs20" v-if="hbimg">
			<mg-img :src='`${hbimg}`' m="aspectFit"></mg-img>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="foot-btnc cf f30" :style="{padding: '20rpx',bottom: isIpx?'40rpx':0}">
			<view class="f-g-1 mt10">
				<button @click="down" :loading="loading" :disabled="loading" class="foot-btn bs15 f30"
					hover-class="btnhc" :style="{background:tColor,color:fontColor}">保存分享图</button>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import utils from '@/common/utils.js'
	export default {
		name: 'order-yqhb',
		components: {

		},
		data() {
			return {
				showLoading: true,
				hbimg: '',
			}
		},
		async onLoad(options) {
			this.util.setNT('海报分享')
			if (options && options.id) {
				this.id = options.id
				this.getData()
			}
		},
		methods: {
			async getData() {
				let {
					data
				} = await this.util.request({
					url: `${this.api.ldxhb}/${this.id}`,
				})
				this.hbimg = data
			},
			down() {
				let i = this.hbimg,
					t = '老带新海报',
					n = t
				let number = Math.floor(Math.random() * 1000000 + 0),
					filePath = wx.env.USER_DATA_PATH + '/pic' + number + t + '.png',
					base64 =  i.replace(/^data:image\/\w+;base64,/, "");
				utils.sB64(filePath, base64)
				// setTimeout(()=>{
				// 	uni.$u.toast('已经保存到系统相册')
				// }, 500);
			},
		},
	}
</script>
<style scoped lang="scss">
	.hbg {
		width: 100%;
		height: 1200rpx;
	}

	.foot-btn {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 60rpx;
	}
</style>