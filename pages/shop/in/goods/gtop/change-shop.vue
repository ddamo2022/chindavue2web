<template>
	<view class="cshop">
		<view class="f-g-1 f-bt p2" v-if="navMenu">
			<view class="c3 f28 mt10" :style="{color:navFontColor}">
				<block v-if="storeInfo.tableInfo && storeInfo.tableInfo.id">
					{{storeInfo.tableInfo.type.name}}{{storeInfo.tableInfo.name}}
					<block v-if="storeInfo.tableInfo.people">
						<text class="line">|</text>
						<text>{{storeInfo.tableInfo.people}}{{$t("g-table.people_dining")}}</text>
					</block>
				</block>
			</view>
			<view class="f-y-c cf flex">
				<text class="iconfont icon-sousuo f44 c3" @click.stop="search"  :style="{color:navFontColor}"></text>
				<text class="iconfont icon-xiaoxi f44 c3 ml20" @click.stop="callWaiter"
					v-if="storeInfo.diningType==4 && storeInfo.tableInfo && storeInfo.tableInfo.store && storeInfo.tableInfo.store.inStoreSetting && storeInfo.tableInfo.store.inStoreSetting.order.attendant"  :style="{color:navFontColor}"></text>
				<text class="iconfont icon-duodingdan f44 c3 ml20" @click.stop="order"  :style="{color:navFontColor}"></text>
			</view>
		</view>
		<view v-else class="f-bt f-g-1 f-y-c p2">
			<view class="search f-g-1 mr20" @click.stop="search">
				<text class="iconfont icon-sousuo f28 mr20 ml20 c9"></text>
				<input disabled="" type="text" value="" :placeholder='$t("g-table.please_enter_product_name")' />
			</view>
			<view class="f-g-0">
				<text class="iconfont icon-duodingdan f44 c3 ml20" @click.stop="order"></text>
				<text class="iconfont icon-huiyuan f44 c3 ml20" @click="login" v-if="!isLogin && !user.mobile"></text>
			</view>
		</view>
		<view v-if="!navMenu" class="bline f-g-1 mt20"></view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		props: {
			storeInfo: {
				type: Object,
				default: {}
			},
			navMenu: {
				type: Boolean,
				default: true
			},
			navFontColor:{
				type: String,
				default:'',
			},
		},
		components: {

		},
		data() {
			return {

			}
		},
		computed: {
			// ...mapState(['sjxx']),
			...mapState({
				orderSetting: state => state.config.orderSetting,
				copywriting: state => state.layout.copywriting,
				storeBasicSetting: state => state.config.storeBasicSetting,
			}),
		},
		methods: {
			search() {
				this.go({
					t: 1,
					url: `/pages/shop/search/out?page=inGoods`,
				})
			},
			order() {
				this.go({
					t: 6,
					url: `/pages/index/order-index`,
				})
			},
			async callWaiter() {
				await this.util.modal(this.$t("g-table.are_you_sure_to_call_waiter"))
				let {
					data
				} = await this.util.request({
					url: `${this.api.call}/${this.storeInfo.tableInfo.id}`,
				})
				this.util.message(data, 3, 2000)
			},
			login() {
				this.$emit('sh')
			},
		}
	}
</script>

<style scoped lang="scss">
	.cshop {
		padding-bottom: 10rpx;
	}

	.line {
		margin-left: 10rpx;
		margin-right: 10rpx;
	}

	.search {
		width: 340rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		background: #f5f5f5;
		border-radius: 60rpx;
		line-height: 60rpx;
	}

	.bline {
		height: 2rpx;
		background: #f5f5f5;
	}
</style>