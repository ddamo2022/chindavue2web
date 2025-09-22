<template>
	<view class="">
		<view class="bs20 mt20 bf p3">
			<view class="f-g-1 wei f30 b-b-e pb20">{{$t("in_goods_components.order_information")}}</view>
			<view class="f-bt mt20">
				<view class="f-g-0 c9">{{$t("in_goods_components.ordering_store")}}</view>
				<view class="f-g-1 c3 f-x-e">{{ order.store.name }}</view>
			</view>
			<view class="f-bt mt20">
				<view class="f-g-0 c9">{{$t("in_goods_components.order_type")}}</view>
				<view class="f-g-1 c3 f-x-e">
					{{order.orderTypeFormat}}
				</view>
			</view>
			<!-- <view class="f-bt mt20" v-if="order.scene !=1">
				<view class="f-g-0 c9">取单时间</view>
				<view class="f-g-1 c3 f-x-e">预计:{{order.serverTime}}</view>
			</view>
			<view class="f-bt mt20" v-if="order.scene ==1">
				<view class="f-g-0 c9">送达时间</view>
				<view class="f-g-1 c3 f-x-e">预计:{{order.serverTime}}</view>
			</view> -->
			<view class="f-bt mt20" v-if="order.table">
				<view class="f-g-0 c9">{{$t("in_goods_components.table_number")}}</view>
				<view class="f-g-1 c3 f-x-e">{{order.table.name}}</view>
			</view>
			<view class="f-bt mt20">
				<view class="f-g-0 c9">{{$t("in_goods_components.order_time")}}</view>
				<view class="f-g-1 c3 f-x-e">{{order.created_at}}</view>
			</view>
			<view class="f-bt mt20">
				<view class="f-g-0 c9">{{$t("in_goods_components.order_number")}}</view>
				<view class="f-g-1 c3 f-x-e">
					{{order.orderSn}}
					<text @click='util.fz(order.orderSn)' class="fz ml10">{{$t("in_goods_components.copy")}}</text>
				</view>
			</view>
			<view class="f-bt mt20">
				<view class="f-g-0 c9">{{$t("in_goods_components.payment_method")}}</view>
				<view class="f-g-1 c3 f-x-e">{{order.payTypeFormat}}</view>
			</view>
			<view class="f-bt mt20">
				<view class="f-g-0 c9">{{$t("in_goods_components.note_information")}}</view>
				<view class="f-g-1 c3 f-x-e">{{order.notes || '无'}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import bkB from '@/components/common/block-b.vue'
	export default {
		name: 'dlInfo',
		components: {
			bkB,
		},
		props: {
			order: {
				type: Object,
				default: {}
			},
		},
		computed: {
			// ...mapState(['sjxx']),
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">

</style>