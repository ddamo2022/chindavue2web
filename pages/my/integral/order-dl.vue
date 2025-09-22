<template>
	<view class="mh100" v-show="dlDatl.id">
		<view class="ptb7 cf" :style="{background:tColor}">
			<view class="f-bt f-y-c">
				<view class="f34">{{dlDatl.stateForamt}}</view>
				<!-- <view><text class="iconfont icon-jifen mr10 f60 cf"></text></view> -->
			</view>
			<view class="f-bt f-y-c">
				<view v-if="dlDatl.goods && dlDatl.goods.product_type=='1' && dlDatl.diningType=='2' && dlDatl.qrCode"
					class="f32 neutra-font">
					{{$t("integral.verification_code")}}：{{dlDatl.qrCode}}</view>
				<view @click="hxCode(dlDatl)" v-if="dlDatl.diningType==2 && dlDatl.state==2"><text class="iconfont icon-erweima mr10 f60 cf"></text></view>
			</view>
		</view>
		<view class="m23">
			<view v-if="dlDatl.diningType==1 && dlDatl.goods && dlDatl.goods.product_type=='1' && dlDatl.address" class="bf bs20 f24 p32 mb20">
				<view class="wei mb30 f28 c9">{{$t("integral.delivery_address")}}</view>
				<view class="f-bt">
					<view class="f-g-0 mr20">
						<view class="yuan f-c" :style="{background:tColor}"><text
								class="iconfont icon-im_dingwei mr10 f42 cf ml10"></text></view>
					</view>
					<view class="f-g-1">
						<view class="f28 c3">
							<text class="f32 mr20">{{dlDatl.address.contact}}({{dlDatl.address.call}})</text>
							<text class="c9">{{dlDatl.address.mobile}}</text>
						</view>
						<view class="f28 t-o-e2 mt0">{{dlDatl.address.address}}{{dlDatl.address.description}}</view>
					</view>
				</view>
			</view>
			<view v-if="dlDatl.diningType==2 && dlDatl.goods && dlDatl.goods.product_type=='1' && dlDatl.store" class="bf bs20 f24 p32 mb20">
				<view class="wei mb30 f28 c9">{{$t("integral.store_pickup_address")}}</view>
				<view class="f-bt">
					<view class="f-g-0 mr20">
						<view class="yuan f-c" :style="{background:tColor}"><text
								class="iconfont icon-im_dingwei mr10 f42 cf ml10"></text></view>
					</view>
					<view class="f-g-1">
						<view class="f28 c3">
							<text class="f32 mr20">{{dlDatl.store.contact}}</text>
							<text class="c9">{{dlDatl.store.storeMobile}}</text>
						</view>
						<view class="f28 t-o-e2 mt0">{{dlDatl.store.name}}</view>
						<view class="f28 t-o-e2 mt0 f-y-c" @click="ckwz(dlDatl.store)">{{dlDatl.store.address}} <text class="iconfont icon-youjiantou f32 mr10 c3 mt5"></text></view>
					</view>
				</view>
			</view>
			<view class="f28 bf bs20 p32 c3 mb20" v-if="dlDatl.goods">
				<view class="f-row">
					<view class="f-g-0 mr30">
						<view class="imgw bs10 bf7">
							<mg-img :src="dlDatl.goods.icon" />
						</view>
					</view>
					<view class="f-g-1 f-y-bt" v-if="dlDatl.goods">
						<view class="wei4 f30 t-o-e2 c6">{{dlDatl.goods.name}}</view>
						<view class="f-x-bt">
							<view class="cfa t-o-e wei4 neutra-font" :style="{color:tColor}">
								<text v-if="dlDatl.goods.integral>0">{{dlDatl.goods.integral}}</text>
								<text v-if="dlDatl.goods.integral>0" class="f26 ml10 nowei">{{$t("integral.points")}}</text>
								<text v-if="dlDatl.goods.integral>0 && dlDatl.money>0" class="nowei">+</text>
								<text v-if="dlDatl.goods.money>0"><text
										class="f22">฿</text>{{dlDatl.goods.money}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="f-bt mt20">
					<view>{{$t("integral.purchase_quantity")}}</view>
					<view>x1</view>
				</view>
				<view class="f-bt mt20">
					<view>{{$t("integral.product_type")}}</view>
					<view>{{dlDatl.goods.product_type==1?$t("integral.physical_product"):dlDatl.goods.product_type==2 ?$t("integral.coupon"):$t("integral.balance")}}</view>
				</view>
				<view v-if="dlDatl.goods.product_type==1 && dlDatl.diningType" class="f-bt mt20">
					<view class="f-g-0 mr30">{{$t("integral.delivery_method")}}</view>
					<view v-if="dlDatl.diningType==1" class="f-g-1 f-bt">
						<view class="">{{$t("integral.courier_delivery")}}</view>
						<view class="" :style="{color:tColor}" v-if="dlDatl.deliveryMoney>0">
							{{dlDatl.deliveryMoney>=0?`${$t("integral.shipping_fee")}:฿${dlDatl.deliveryMoney}`:$t("integral.free_shipping")}}
						</view>
					</view>
					<view v-if="dlDatl.diningType==2" class="f-g-1 f-x-e">
						<view class="">{{$t("integral.store_pickup")}}</view>
					</view>
				</view>
				<view class="wei4 cfa f-x-e mt20 mb20 line24 neutra-font" :style="{color:tColor}">
					<text class="c3">{{$t("integral.actual_payment")}}：</text>
					<text v-if="dlDatl.goods.integral>0">{{dlDatl.goods.integral}}</text>
					<text v-if="dlDatl.goods.integral>0" class="f26 ml10 nowei">{{$t("integral.points")}}</text>
					<text v-if="dlDatl.goods.integral>0 && dlDatl.money>0" class="nowei">+</text>
					<text v-if="dlDatl.money>0"><text class="f22">฿</text>{{dlDatl.money}}</text>
				</view>
			</view>
			<view class="f28 bf bs20 p32 c3 mb20">
				<view class="f28 c9 wei">{{$t("integral.order_details")}}</view>
				<view class="f-bt mt20">
					<view class="f-g-0 mr30">{{$t("integral.order_number")}}</view>
					<view class="f-g-1 c6">{{dlDatl.orderSn}}</view>
				</view>
				<view class="f-bt mt20" v-if="dlDatl.payTime">
					<view class="f-g-0 mr30">{{$t("integral.payment_time")}}</view>
					<view class="f-g-1 c6">{{dlDatl.payTime}}</view>
				</view>
				<view class="f-bt mt20" v-if="dlDatl.deliveryName">
					<view class="f-g-0 mr30">{{$t("integral.courier_name")}}</view>
					<view class="f-g-1 c6">{{dlDatl.deliveryName}}</view>
				</view>
				<view class="f-bt mt20" v-if="dlDatl.deliverySn">
					<view class="f-g-0 mr30">{{$t("integral.courier_tracking_number")}}</view>
					<view class="f-g-1 c6">{{dlDatl.deliverySn}}</view>
				</view>
				<view class="f-bt mt20">
					<view class="f-g-0 mr30">{{$t("integral.payment_method")}}</view>
					<view class="f-g-1 c6">{{dlDatl.orderIndex && dlDatl.orderIndex.payTypeFormat}}</view>
				</view>
			</view>
			<!-- <view class="foot-btn mt60" v-if="dlDatl.goodsType=='1' && dlDatl.diningType=='1' && dlDatl.state=='3'">
				<button class="foot-btn" :style="{background:tColor}">确认收货</button>
			</view> -->
		</view>
		<tcyhq v-if='qyInfo' type="5" @close='qyshow = false' :co='qyInfo' v-model="qyshow"></tcyhq>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import MgCell from '@/components/common/my-cell.vue'
	import tcyhq from '@/components/template/tcyhq.vue'
	export default {
		name: 'orderDl',
		components: {
			MgCell,
			tcyhq,
		},
		data() {
			return {
				dlDatl: '',
				qyInfo: '',
				qyshow: false,
			}
		},
		onLoad(options) {
			let id
			if (options.id) {
				id = decodeURIComponent(options.id)
			} else {
				id = options.id
			}
			this.id = id
			// this.getSystem({
			// 	setNB: 1,
			// })
			this.util.setNT(this.$t("integral.order_details"))
			this.getData()
		},
		mixins: [utilMixins],
		computed: {
			
		},
		methods: {
			async getData() {
				let {
					data
				} = await this.util.request({
					'url': `${this.api.jfdd}/${this.id}`,
					mask: 1,
				})
				this.dlDatl = data
				this.showLoading = false
			},
			hxCode(c) {
				this.qyInfo = c
				this.qyshow = true
			},
			ckwz(v) {
				this.util.ckWz({
					lat: v.lat,
					lng: v.lng,
					name: v.name,
					address: v.address,
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	.imgw {
		width: 100rpx;
		height: 100rpx;
	}

	.ptb7 {
		padding: 40rpx 70rpx;
	}

	.mt60 {
		margin-top: 60rpx;
	}

	.line24 {
		line-height: 24rpx;
	}

	.yuan {
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
	}

	.code {
		width: 200rpx;
		height: 200rpx;
	}
</style>