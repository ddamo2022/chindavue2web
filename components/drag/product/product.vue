<template>
	<view class="mBody" :style="{
			marginTop: co.marginTop + u,
			marginBottom: co.marginBottom + u,
			marginLeft: co.marginLR + u,
			marginRight: co.marginLR + u,
		}">
		<view class="mb10">
			<g-nav v-if="co.type == 2 && (co.typeImg == 2 || co.typeImg == 3)" :styles="co"></g-nav>
		</view>
		<view class="mItem">
			<t-em1 v-if="co.typeImg == 1" :styles="co" class="f-1" @gs="goGoods"></t-em1>
			<t-em2 v-if="co.typeImg == 2" :styles="co" class="f-1" @gs="goGoods"></t-em2>
			<t-em3 v-if="co.typeImg == 3" :styles="co" class="f-1" @gs="goGoods"></t-em3>
			<t-em4 v-if="co.typeImg == 4" :styles="co" class="f-1" @gs="goGoods"></t-em4>
			<t-em5 v-if="co.typeImg == 5" :styles="co" class="f-1" @gs="goGoods"></t-em5>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import jzz from '@/components/common/jzz.vue'
	import gNav from './components/g-nav.vue';
	import tEm1 from './components/t-em1.vue';
	import tEm2 from './components/t-em2.vue';
	import tEm3 from './components/t-em3.vue';
	import tEm4 from './components/t-em4.vue';
	import tEm5 from './components/t-em5.vue';
	export default {
		name: 'product',
		components: {
			jzz,
			gNav,
			tEm1,
			tEm2,
			tEm3,
			tEm4,
			tEm5,
		},
		props: {
			type: {
				type: String,
				default: '1'
			},
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
			u: {
				type: String,
				default: 'px'
			},
			shopinfo: Object,
		},
		data() {
			return {
				list: [],
				isget: false,
			};
		},
		watch: {
			// shopinfo: {
			// 	handler(newVal) {
			// 		if (newVal.id) {
			// 			if (this.co.typeProduct == 1 && this.co.productName && this.co.productName.length) {
			// 				let arr = this.co.productName.map(v => v.name.id).toString()
			// 				this.getData({
			// 					type: 1,
			// 					ids: arr,
			// 				})
			// 				console.log('商品组', arr)
			// 			} else if (this.co.typeProduct == 2 && this.co.productGroup && this.co.productGroup.length) {
			// 				if (this.co.productGroup[0].name.pid > 0) {
			// 					this.getData({
			// 						type: 2,
			// 						pid: this.co.productGroup[0].name.pid,
			// 						id: this.co.productGroup[0].name.id,
			// 						num: this.co.productNum,
			// 					})
			// 					console.log('商品组2级分类')
			// 				} else {
			// 					this.getData({
			// 						type: 2,
			// 						pid: this.co.productGroup[0].name.id,
			// 						num: this.co.productNum,
			// 					})
			// 					console.log('商品组1级分类')
			// 				}
			// 			} else if (this.co.typeProduct == 3) {
			// 				this.getData({
			// 					type: 3,
			// 					ranktype: this.co.productMarket,
			// 					num: this.co.productNum,
			// 				})
			// 			}
			// 		}

			// 	},
			// 	immediate: true
			// },
		},
		methods: {
			async getData(p) {
				let {
					data
				} = await this.util.request({
					'url': this.api.tzssp,
					method: 'POST',
					data: {
						...p,
						storeId: this.shopinfo.id
					}
				})
				this.list = data
				this.isget = true
			},
			goodinfo(v) {
				this.go({
					t: 1,
					url: `/pages/shop/out/goods-dl?gid=${v}&storeId=${this.shopinfo.id}&page=index`,
				})
			},
			goGoods(v){
				if(v && v.id) {
					uni.setStorageSync('hGoodsId',v.id)
					this.go({
						t: 6,
						url: `/pages/index/goods`
					})
				}
			}
		},
		created() {
			// console.log(this.co)
		}
	};
</script>

<style lang="scss" scoped>
	.mBody {
		.mItem {
			position: relative;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		}
	}
</style>
