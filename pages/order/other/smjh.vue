<template>
	<view class="">
		<load v-if="showloading"></load>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import load from '@/components/common/load.vue'
	import utils from '@/common/utils.js'
	export default {
		name: 'order-index',
		components: {
			load,
		},
		data() {
			return {
				showloading: true
			}
		},
		async onLoad(options) {
			this.getSystem()
			if (!options.q && !getApp().globalData.siteInfo.qrCode) return this.util.message('未获取到参数', 3)	
			if(!options.q){
				var q = utils.getUrlParams(decodeURIComponent(getApp().globalData.siteInfo.qrCode))	
			}else{
				var q = utils.getUrlParams(decodeURIComponent(options.q))
			}
			// console.log('options', options, decodeURIComponent(options.q), q)
			let res = await this.util.request({
				'url': this.api.smjhm,
				method: 'POST',
				ct: 1,
				mask: '参数获取中',
				data: {
					data:q,
				},
			})
			if (res) {
				// return
				let t = 2,
					data = res.data,
					url = ''
				switch (data.type) {
					case 'table':
						url = '/pages/shop/in/goods?scene=' + data.tableId
						break;
					case 'cashier':
						url = '/pages/shop/in/dmf?storeId=' + data.storeId
						break;
					case 'fastOrder':
						url = '/pages/shop/ffmode/goods?storeId=' + data.storeId
						break;
					case 'goods':
						url = '/pages/index/goods?storeId=' + data.storeId
						t = 3
						break;
					default:
						uni.showModal({
							title: 'Prompt',
							content: 'Scanning parameters are not currently supported for recognition',
							showCancel: false,
							confirmText:i18n.t('modal.confirm'),
							success: (res) => {
								this.go({
									t: 6,
									url: '/pages/index/index'
								})
							}
						})
						break;
				}
				this.go({
					t,
					url
				})
			}
			// this.util.setNT('')
		},
		computed: {},
		methods: {},
	}
</script>
<style scoped lang="scss">

</style>
