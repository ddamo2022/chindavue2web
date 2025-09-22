<template>
	<view class="">
		<view class="f-row pb20 cf head" :style="{background:tColor}">
			<view class="f-1">
				<view class="p13 f-g-1 f-c inval">
					<text class='iconfont icon-jifen f50 cf mr20'></text>
					<view class="f60 wei neutra-font">{{isLogin?user.account && user.account.integral:0}}</view>
				</view>
				<view class="p30 f30 f-row l-h1">
					<!-- <view @click='mySigin' class="f-1 t-c b-re">积分签到</view> -->
					<view @click="integralRecord" class="f-1 t-c b-re">{{$t("integral.points_record")}}</view>
					<view @click='myIntegral' class="f-1 t-c b-re">{{$t("integral.points_details")}}</view>
					<view @click='integralRule' class="f-1 t-c">{{$t("integral.points_rules")}}</view>
				</view>
			</view>
		</view>
		<!-- <view class="sign m3 bf p3 flex bs20 f-y-c">
			<view class="icon bsf f-c mr20 cf">1</view>
			<view>积分签到</view>
		</view> -->
		<view class="mt20">
			<nav-tab :color='tColor' v-model="aIdx" @changeTab='changeTab' :tabs='tabs' iwidth="200rpx"
				:sname="{background:'none'}" :isscroll="true"></nav-tab>
		</view>
		<view class="mt10">
			<goods-list :color='tColor' :list='dataList' />
			<view class="pt150" v-if="!dataList || dataList.length<=0">
				<i-default :imgn="7" :zdytxt="$t('integral.no_products_available_for_redemption_in_current_category')"  />
			</view>
		</view>
		<jzz bgcolor="transparent" imgn="zwjf" :nodata="dataList.length==0&&isget" :mygd='mygd' />
		<!-- <load v-if="showLoading"></load> -->
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		sljz
	} from "@/common/util-mixins.js"
	import navTab from '@/components/common/functionCmp/nav-tab.vue'
	import goodsList from './goods-list.vue'
	import jzz from '@/components/common/jzz.vue'
	import load from '@/components/common/load.vue'
	import iDefault from '@/components/common/default.vue'
	export default {
		name: 'jfsc',
		components: {
			jzz,
			load,
			navTab,
			iDefault,
			goodsList,
		},
		data() {
			return {
				params: {
					type_id: '',
					page: 1,
					size: 10,
					// sort: '',
				},
				// showLoading: true,
				aIdx: 0,
				tabs: [],
				jfName: this.$t("integral.points"),
				dataList: [],
			}
		},
		async onLoad(options) {
			this.getLoginInfo()
			this.util.setNT(this.jfName + this.$t("integral.shop"))
			await this.getConfig({
				ident: ["integralSetting"]
			})
			this.getCategory()
			// this.getList()
		},
		onShow() {
			if (this.uId) {
				this.refreshUser({
					nomask: 1,
					get: 1,
					now: 1,
				})
			}
		},
		mixins: [sljz],
		computed: {
			// jfName() {
			// 	return this.system.custom.integral
			// },
		},
		methods: {
			...mapActions('dndc', ['getSwitchConfig']),
			...mapActions(['getConfig']),
			async getCategory(){
				let {
					data :{ list }
				} = await this.util.request({
					url: this.api.jfscfl,
					data:{
						pageNo:1,
						pageSize:999,
					}
				})
				this.tabs = list ? list : [],
			 
				
				this.tabs.unshift({ name: this.$t("integral.all"), id: 0 })
				this.getList()
			},
			mySigin(){
				this.go({
					t: 1,
					url: '/pages/my/signin/index'
				})
			},
			myIntegral() {
				this.go({
					t: 1,
					url: '/pages/my/integral/my-integral'
				})
			},
			integralRule() {
				this.go({
					t: 1,
					url: `/pages/my/other/gywm?t=${this.jfName}规则&p=4`
				})
			},
			integralRecord() {
				this.go({
					t: 1,
					url: '/pages/my/integral/integral-record'
				})
			},
			tabitem(e) {
				this.isget = this.mygd = false
				this.params.type_id = e.id || ''
				this.params.page = 1
				this.dataList = []
				this.getList()
			},
			changeTab(e) {
				this.isget = this.mygd = false
				this.params.type_id = this.tabs[e].id
				this.params.page = 1
				this.dataList = []
				this.getList()
			},
			async getList() {
				let {
					data :{ list }
				} = await this.util.request({
					'url': this.api.jfsplb,
					method: 'get',
					data: this.params,
				})
				this.dataList = this.dataList.concat(list)
				this.isget = true
				this.mygd = this.params.size > list.length
				this.params.page++
			},
		},
	}
</script>

<style scoped lang="scss">
	.head {
		background: #5DBC54;

		.inval {
			margin-top: 100rpx;
		}
	}

	.sign {
		.icon {
			width: 80rpx;
			height: 80rpx;
			background: #FFD462;
		}
	}
</style>