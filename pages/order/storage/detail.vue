<template>
	<view class="container">
		<view class="p02">
			<view class="">
				<view class="bs20 mt20 bf p3">
					<view class="f-g-1 wei f30 b-b-e pb20">寄存信息</view>
					<view class="f-bt mt20">
						<view class="f-g-0 c9">寄存门店</view>
						<view class="f-g-1 c3 f-x-e">{{order.store && order.store.name}}</view>
					</view>
					<view class="f-bt mt20">
						<view class="f-g-0 c9">寄存数量</view>
						<view class="f-g-1 c3 f-x-e">{{ order.num }} {{order.drink && order.drink.unit}}
							{{order.drink && order.drink.name}}
						</view>
					</view>
					<view class="f-bt mt20">
						<view class="f-g-0 c9">寄存时间</view>
						<view class="f-g-1 c3 f-x-e">
							{{order.created_at}}
						</view>
					</view>
					<view class="f-bt mt20">
						<view class="f-g-0 c9">剩余数量</view>
						<view class="f-g-1 c3 f-x-e">
							<view class="c0">{{ order.residue }} {{order.drink && order.drink.unit}}
								{{order.drink && order.drink.name}}
							</view>
						</view>
					</view>
					<view class="f-bt mt20">
						<view class="f-g-0 c9">过期时间</view>
						<view class="f-g-1 c3 f-x-e">{{ order.expiredTimeFormat }}</view>
					</view>
					<view class="f-bt mt20">
						<view class="f-g-0 c9">联系人</view>
						<view class="f-g-1 c3 f-x-e">{{ order.contacts }}</view>
					</view>
					<view class="f-bt mt20">
						<view class="f-g-0 c9">联系电话</view>
						<view class="f-g-1 c3 f-x-e">{{ order.mobile }}</view>
					</view>
					<view class="f-bt mt20">
						<view class="f-g-0 c9">订单编号</view>
						<view class="f-g-1 c3 f-x-e">{{ order.orderSn }}</view>
					</view>
					<view class="f-bt mt20">
						<view class="f-g-0 c9">订单备注</view>
						<view class="f-g-1 c3 f-x-e">{{ order.notes }}</view>
					</view>
					<view class="f-bt mt20">
						<view class="f-g-0 c9">操作人</view>
						<view class="f-g-1 c3 f-x-e" v-if="order.admin">{{ order.admin.nickname }}</view>
					</view>
				</view>
				<view class="bs20 mt20 bf p3" v-if="log && log.length">
					<view class="f-g-1 wei f30 b-b-e pb20">寄存记录</view>
					<uni-steps :options="log" :active-color="tColor" :active="0"
						direction="column" />
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import utils from '@/common/utils.js'
	import uniNavBar from "@/components/third/uni-nav-bar.vue"
	export default {
		name: 'my-detail',
		components: {
			uniNavBar,
		},
		data() {
			return {
				id: '',
				storeId: '',
				order: {},
				log: [],
			}
		},
		async onLoad(options) {
			this.util.setNT('寄存详情')
			if (options && options.id) {
				this.id = options.id
				this.storeId = options.storeId
				this.fetchData()
				this.fetchDataLog()
			}
		},
		computed: {
			...mapState({

			}),
		},
		methods: {
			async fetchData() {
				let {
					data
				} = await this.util.request({
					'url': `${this.api.dOrder}/${this.id}`,
					data: {
						storeId: this.storeId,
					},
				})
				this.order = data ? data : {}
			},
			async fetchDataLog() {
				let {
					data: {
						list
					}
				} = await this.util.request({
					'url': this.api.dLog,
					data: {
						drinksOrderId: this.id,
						storeId: this.storeId,
					},
				})
				this.log = list.map(v => ({
					desc: v.created_at,
					title: `${v.typeFormat} ${v.num} ${v.drink && v.drink.unit}${v.drink && v.drink.name} 剩余 ${v.residue} ${v.drink && v.drink.unit}${v.drink && v.drink.name}`,
				}))
			},
			handReturn() {
				this.go({
					t: 5,
					url: `/pages/index/index`
				})
			},
		},
	}
</script>
<style scoped lang="scss">
	.container {
		padding-bottom: 180rpx;
		display: flex;
		flex-direction: column;
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.bannel {
			width: 700rpx;
		}
	}

	.order-invoice {
		padding: 30rpx 40rpx;
		border-radius: 30rpx;
		box-shadow: 0 0 10rpx 0 rgba($color: #333, $alpha: 0.1);
		margin-bottom: 60rpx;
		background-color: #F6F6F6;
	}

	.icon-right {
		transform: rotateZ(180deg);
	}
</style>