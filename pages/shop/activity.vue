<template>
	<view class="acty p3">
		<block v-if="type==1 && sjxx.fullSub">
			<view class="f38 wei c0">{{$t('shop_activity.activity_rules')}}</view>
			<view class="mt20 c6">
				<view class="flex mt10">{{$t('shop_activity.activity_type')}}：{{sjxx.fullSub.type==1?$t('shop_activity.full_discount'):$t('shop_activity.discount')}}</view>
				<view class="flex mt10">{{$t('shop_activity.activity_time')}}：{{sjxx.fullSub.startTime}} ~ {{sjxx.fullSub.endTime}}</view>
				<view class="flex mt10">{{$t('shop_activity.usage_scenario')}}：<text v-if="sjxx.fullSub.scenario.includes(1)">{{$t('shop_activity.takeaway')}}，</text><text
						v-if="sjxx.fullSub.scenario.includes(2)">{{$t('shop_activity.self_pickup')}}</text></view>
				<view class="flex mt10">{{$t('shop_activity.threshold_limit')}}：<text v-if="sjxx.fullSub.threshold.includes(1)">{{$t('shop_activity.include_extra_item_price')}},</text><text
						v-if="sjxx.fullSub.threshold.includes(2)">{{$t('shop_activity.include_packaging_fee')}},</text><text
						v-if="sjxx.fullSub.threshold.includes(3)">{{$t('shop_activity.include_delivery_fee')}}</text></view>
				<view class="flex mt10">{{$t('shop_activity.applicable_products')}}：<text v-if="sjxx.fullSub.goodsType==1">{{$t('shop_activity.all_products')}}</text><text
						v-if="sjxx.fullSub.goodsType==2">{{$t('shop_activity.specified_products_applicable')}}</text><text
						v-if="sjxx.fullSub.goodsType==3">{{$t('shop_activity.specified_products_not_applicable')}}</text></view>
			</view>
			<view class="f38 wei c0 mt30">{{$t('shop_activity.activity_products')}}</view>
			<view class="mt20 c6">
				<view class="flex mt10">{{$t('shop_activity.applicable_products')}}：<text v-if="sjxx.fullSub.goodsType==1">{{$t('shop_activity.all_products')}}</text><text
						v-if="sjxx.fullSub.goodsType==2">{{$t('shop_activity.specified_products_applicable')}}</text><text
						v-if="sjxx.fullSub.goodsType==3">{{$t('shop_activity.specified_products_not_applicable')}}</text></view>
			</view>
		</block>
		<block v-else-if="type==2 && sjxx.newSub">
			<view class="f38 wei c0">{{$t('shop_activity.activity_rules')}}</view>
			<view class="mt20 c6">
				<view class="flex mt10">{{$t('shop_activity.activity_type')}}：{{$t('shop_activity.new_customer_discount')}}</view>
				<view class="flex mt10">{{$t('shop_activity.activity_time')}}：{{sjxx.newSub.startTime}} ~ {{sjxx.newSub.endTime}}</view>
				<view class="flex mt10">{{$t('shop_activity.usage_scenario')}}：
					<text v-if="sjxx.newSub.scenario.includes(1)">{{$t('shop_activity.takeaway')}}，</text>
					<text v-if="sjxx.newSub.scenario.includes(2)">{{$t('shop_activity.self_pickup')}}</text>
				</view>
				<view class="flex mt10">{{$t('shop_activity.applicable_products')}}：
					<text v-if="sjxx.newSub.goodsType==1">{{$t('shop_activity.all_products')}}</text>
					<text v-if="sjxx.newSub.goodsType==2">{{$t('shop_activity.specified_products_applicable')}}</text>
					<text v-if="sjxx.newSub.goodsType==3">{{$t('shop_activity.specified_products_not_applicable')}}</text>
				</view>
			</view>
			<view class="f38 wei c0 mt30">{{$t('shop_activity.activity_products')}}</view>
			<view class="mt20 c6">
				<view class="flex mt10">{{$t('shop_activity.applicable_products')}}：<text v-if="sjxx.newSub.goodsType==1">{{$t('shop_activity.all_products')}}</text><text
						v-if="sjxx.newSub.goodsType==2">{{$t('shop_activity.specified_products_applicable')}}</text><text
						v-if="sjxx.newSub.goodsType==3">{{$t('shop_activity.specified_products_not_applicable')}}</text></view>
			</view>
		</block>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'order-index',
		components: {

		},
		data() {
			return {
				type:1,
			}
		},
		onLoad(options) {
			if(options && options.type){
				this.type = options.type
			}
			
			this.getSystem()
			this.util.setNT(this.$t('shop_activity.activity_details'))
		},
		computed: {
			...mapState(['sjxx']),
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		},
	}
</script>
<style scoped lang="scss">
	.acty {
		.tit {}
	}
</style>