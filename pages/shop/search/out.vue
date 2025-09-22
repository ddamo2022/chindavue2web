<template>
	<view class="mh100 bf">
		<view class="searchc p3 f-y-c">
			<view class="f-g-1 scl bf2f f-y-c p03">
				<text class="iconfont icon-sousuo c0"></text>
				<input class="f-1 p02" :focus="true" auto-focus v-model.trim="params.keyword" confirm-type='search'
				 placeholder-class="cb2" :placeholder="$t('goods.enter_product_name_to_search')" @confirm='confirm' />
				<text @tap="cleanKey" v-if="params.keyword" class="iconfont icon-yx" style="color:#ADACAB;"></text>
			</view>
			<view @click="confirm" class="f-g-0 c8 ml30">{{$t('goods.search')}}</view>
		</view>
		<view v-show="!issearch" class="p03">
			<view class="p30 f-x-bt">
				<view class="wei">{{$t('goods.search_history')}}</view>
				<view @click="clear" class="f-y-c p2">
					<text class="iconfont icon-shanchu c3"></text>
				</view>
			</view>
			<view class="f-raw">
				<block v-for="(v,i) in history" :key="i">
					<view @click="setKey(v)" class='f26 bf2f mr20 mb20 c3 lstag'>{{v}}</view>
				</block>
			</view>
		</view>
		<view class="glist">
			<view class="gwrp p2">
				<view class="goods" v-for="(cv, ci) in dataList" :key="ci" @tap="handdl(cv)">
					<view class="image mr10">
						<image :src="cv.logo" mode="aspectFill" class="image bs10"></image>
						<view v-if='!cv.specSwitch && cv.singleSpec.surplusInventory<=0' class="p-a ysq f-c b0 cf w100 f22">{{$t('goods.sold_out')}}</view>
					</view>
					<view class="content f-bt ml10">
						<view class="name">{{ cv | localizedName }}</view>
						<view class="description" v-if="cv.desc">{{ cv.desc }}</view>
						<view class="price" v-if="cv.isShow!=1">
							<view v-if="cv.mixPrice || cv.price" class="f-g-1 t-o-e neutra-font">
								฿{{ cv.specSwitch==1 ? cv.mixPrice : cv.price}}
								<text v-if="cv.specSwitch || cv.attrSwitch || cv.materialSwitch"
									class="f24 c9 nowei ml10">{{$t('goods.starting_from')}}</text>
							</view>
							<view v-if="sjxx.businessStatus!=3 && (!cv.specSwitch && cv.singleSpec.surplusInventory!=0 || cv.specSwitch && !cv.singleSpec)" class="f-g-0">
								<actions v-if="cv.mixPrice || cv.price"
									:materials-btn="cv.specSwitch || cv.attrSwitch || cv.materialSwitch"
									@materials="handdl(cv)" :number="gcnum(cv.id)" @add="handcar"
									@minus="handcar" :product="cv" />
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-show="issearch">
			<jzz :nodata="dataList.length==0&&isget" :mygd='mygd' />
		</view>
		<block v-if="scarList.realtimeState!=3">
			<product-modal ref="productModal" :product="product" :visible="productModalVisible"
				@cancel="closeProductDetailModal" @add-to-cart="handleAddToCartInModal" @pay="pay"></product-modal>
		</block>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import Actions from "@/components/goods/actions/actions.vue"
	import ProductModal from '@/components/goods/product-modal/product-modal.vue'
	import {
		getDw,
	} from "@/common/wechat-util.js"
	import jzz from '@/components/common/jzz.vue'
	import i18n from  '@/locale/index.js'
	export default {
		name: 'Search',
		components: {
			Actions,
			ProductModal,
			jzz,
		},
		data() {
			return {
				query: {},
				history: [],
				key: "",
				issearch: false,
				dataList: [],
				isget: false,
				mygd: false,
				params: {},
				tableId:'',	
				product: {},
				productModalVisible: false,
			}
		},
		filters: {
			localizedName(value) {
				const locale = i18n.locale; // 获取当前语言
				if (locale === 'en') {
					return value.name_en || value.name;
				} else if (locale === 'th') {
					return value.name_th || value.name;
				} else {
					return value.name;
				}
			}
		},
		async onLoad(options) {
			this.query = options
			this.getSystem({
				nosetNB: 1
			})
			this.util.setNT(this.$t('goods.search'))
			if (options.page == 'shopGoods') {
				this.params = {
					storeId: this.sjxx.id,
					page: 1,
					size: 10,
					keyword: '',
				}
				this.query.api = 'spss'
			} else if (options.page == 'inGoods') {
				this.params = {
					storeId: this.sjxx.id,
					page: 1,
					size: 10,
					keyword: '',
				}
				this.query.api = 'inspss'
			}
			if(options.tableId && options.page=='inGoods'){ 
				this.tableId = options.tableId
			}
			uni.getStorageSync('searchHistory') || uni.setStorageSync('searchHistory', [])
			this.history = uni.getStorageSync('searchHistory')
			// console.log(options)
		},
		onReachBottom() {
			if (!this.mygd && this.isget) {
				this.isget = false
				this.getList();
			}
		},
		computed: {
			...mapState(['sjxx']),
			...mapState({
				storeBasicSetting: state => state.config.storeBasicSetting,
				orderSetting: state => state.config.orderSetting,
				scarList: state => state.scarList.out || [],
				scarinList: state => state.scarList.ins || [],
			}),
			gcnum() {
				let carList = this.query.page=='inGoods' ? this.scarinList.goodsList : this.scarList.goodsList
				return id => carList.reduce((acc, cur) => {
					if (cur.spuId === id) {
						return acc += cur.num
					}
					return acc
				}, 0)
			},
		},
		methods: {
			setKey(v) {
				this.params.keyword = v
				this.confirm()
			},
			cleanKey() {
				this.params.keyword = ''
				this.issearch = false
				this.isget = false
				this.mygd = false
				this.params.page = 1
				this.dataList = []
			},
			async clear() {
				try {
					await this.util.modal(this.$t('goods.confirm_clear_search_history'))
					this.history = []
					uni.removeStorageSync('searchHistory')
				} catch (e) {
				}
			},
			confirm(e) {
				if (!this.params.keyword) return this.util.message(this.$t('goods.please_enter_search_content'), 3)
				this.issearch = true
				this.isget = false
				this.mygd = false
				this.params.page = 1
				this.dataList = []
				this.getList()
				this.setHistory()
			},
			async getList() {
				
				let {
					data :{list}
				} = await this.util.request({
					url: `${this.api[this.query.api]}/${this.sjxx.id}`,
					data: this.params,
				})
				this.dataList = this.dataList.concat(list)
				this.isget = true
				this.mygd = this.params.size > list.length
				this.params.page++
			},
			setHistory() {
				let h = uni.getStorageSync('searchHistory')
				if (h.findIndex(v => v == this.params.keyword) == -1) {
					h.push(this.params.keyword)
					uni.setStorageSync('searchHistory', h)
				}
				this.history = uni.getStorageSync('searchHistory')
			},
			handcar(p){
				let lastPage = this.util.getPage()
				lastPage.$vm.handcar(p)
			},
			async handdl(product) {
				let res = await this.util.request({
					'url': `${this.api.goods}/${product.id}`,
					data: {
						storeId: this.sjxx.id
					}
				})
				this.product = res.data
				this.productModalVisible = true
				this.$refs['productModal'].open(product, this.sjxx.id)
			},
			closeProductDetailModal() {
				this.productModalVisible = false
				this.$refs['productModal'].close()
				setTimeout(() => {
					this.product = {}
				}, 100)
			},
			handleAddToCartInModal(product) {
				this.handcar(product)
				this.closeProductDetailModal()
			},
			closeProductDetailModal() {
				this.productModalVisible = false
				this.$refs['productModal'].close()
				setTimeout(() => {
					this.product = {}
				}, 100)
			},
			pay(){
				let lastPage = this.util.getPage()
				lastPage.$vm.pay()
				this.productModalVisible = false
			},
		},
	}
</script>

<style scoped lang="scss">
	@import '../../index/goods/goods.scss';
	.scl {
		height: 66rpx;
		border-radius: 35rpx;
	}

	.lstag {
		padding: 16rpx 26rpx;
		border-radius: 50rpx;
		line-height: 28rpx;
	}

	.okzt {
		width: 35rpx;
		height: 35rpx;
		font-size: 24rpx;
		margin-left: 10rpx;
		border-radius: 5rpx;
	}

	.wai {
		color: #EC9C1F;
		background: #FFF3E3;
	}

	.pai {
		color: #35B0A5;
		background: #DDFAFE;
	}

	.mai {
		color: #DC5338;
		background: #FFEDEA;
	}

	.m05 {
		margin: 0 8rpx;
	}
</style>
