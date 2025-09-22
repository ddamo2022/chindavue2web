<template>
	<view class="">
		<view class="bs20 mt20 bf p3" v-if="order.scene==1">
			<view class="f-g-1 wei f30 b-b-e pb20">{{$t("o-info.delivery_information")}}</view>
			<view class="f-bt mt20">
				<view class="f-g-0 c9">{{$t("o-info.delivery_address")}}</view>
				<view class="f-g-1 c3 ml20 f-x-e">
					<view class="f-g-0"><bk-b type='2' c-name='f22 c6 mr10 p-5-10' :t='order.address.label'
							:color="tColor"></bk-b></view>
					<view class="f-g-0 mr10">{{order.address.contact}}</view>
					<view class="f-g-0 mr10">{{order.address.call}}</view>
					<view>{{order.address.address}} {{order.address.description}}</view>
				</view>
			</view>
			<block v-if="order.state>=5">
				<view class="f-bt mt20">
					<view class="f-g-0 c9">{{$t("o-info.delivery_mode")}}</view>
					<view class="f-g-1 c3 f-x-e ml20">{{order.deliveryOrder.deliveryTypeFormat}}</view>
				</view>
				<view class="f-bt mt20">
					<view class="f-g-0 c9">{{$t("o-info.delivery_channel")}}</view>
					<view class="f-g-1 c3 f-x-e ml20">{{order.deliveryOrder.channelName}}</view>
				</view>
				<view class="f-bt mt20">
					<view class="f-g-0 c9">{{$t("o-info.rider_information")}}</view>
					<view class="f-g-1 c3 f-x-e ml20">
						{{ order.deliveryOrder.rider && order.deliveryOrder.rider.name || "-" }}
						{{ order.deliveryOrder.rider && order.deliveryOrder.rider.mobile || "-" }}
					</view>
				</view>
			</block>
		</view>
		<view class="bs20 mt20 bf p3">
			<view class="f-g-1 wei f30 b-b-e pb20">{{$t("o-info.order_information")}}</view>
			<view class="f-bt mt20" v-if="order.pickNo && order.diningType==4">
				<view class="f-g-0 c9">{{$t("o-info.order_number")}}</view>
				<view class="f-g-1 c3 f-x-e">{{order.pickNo}}</view>
			</view>
			<view class="f-bt mt20" v-if="order.orderTypeFormat">
				<view class="f-g-0 c9">{{$t("o-info.order_type")}}</view>
				<view class="f-g-1 c3 f-x-e">
					{{order.orderTypeFormat}}
				</view>
			</view>
			<view class="f-bt mt20" v-if="order.packagingFormat">
				<view class="f-g-0 c9">{{$t("o-info.dining_type")}}</view>
				<view class="f-g-1 c3 f-x-e">{{order.packagingFormat}}</view>
			</view>
			<view class="f-bt mt20" v-if="order.scene !=1 && order.serverTime">
				<view class="f-g-0 c9">{{$t("o-info.pick_up_time")}}</view>
				<view class="f-g-1 c3 f-x-e">{{$t("o-info.estimated")}}:{{order.serverTime}}</view>
			</view>
			<view class="f-bt mt20" v-if="order.scene ==1">
				<view class="f-g-0 c9">{{$t("o-info.expected_delivery_time")}}</view>
				<view class="f-g-1 c3 f-x-e">{{$t("o-info.estimated")}}:{{order.serverTime}}</view>
			</view>
			<view class="f-bt mt20" v-if="order.pickNo && order.diningType!=4 && order.orderIndex && order.orderIndex.type!=3">
				<view class="f-g-0 c9">{{$t("o-info.pickup_number")}}</view>
				<view class="f-g-1 c3 f-x-e">{{order.pickNo}}</view>
			</view>
			<view class="f-bt mt20" v-if="order.table">
				<view class="f-g-0 c9">{{$t("o-info.table_information")}}</view>
				<view class="f-g-1 c3 f-x-e">{{order.table.type.name}}{{order.table.name}}
					<text v-if="order.diningType==4 && order.people">/{{order.people}}{{$t("o-info.people_dining")}}</text>
				</view>
			</view>
			<view class="f-bt mt20">
				<view class="f-g-0 c9">{{$t("o-info.order_time")}}</view>
				<view class="f-g-1 c3 f-x-e">{{order.created_at}}</view>
			</view>
			<view class="f-bt mt20">
				<view class="f-g-0 c9">{{$t("o-info.order_number")}}</view>
				<view class="f-g-1 c3 f-x-e">
					{{order.orderSn}}
					<text @click='util.fz(order.orderSn)' class="fz ml10">{{$t("o-info.copy")}}</text>
				</view>
			</view>
			<view class="f-bt mt20" v-if="order.payTypeFormat">
				<view class="f-g-0 c9">{{$t("o-info.payment_method")}}</view>
				<view class="f-g-1 c3 f-x-e">{{order.payTypeFormat}}</view>
			</view>
			<view class="f-bt mt20">
				<view class="f-g-0 c9">{{$t("o-info.remarks_information")}}</view>
				<view class="f-g-1 c3 f-x-e">{{order.notes || ''}}</view>
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