<template>
	<view class="p2 mh100 yqgz bf" v-if="co && co.id">
		<view>
			<view class="tit wei f30">基本信息</view>
			<view class="flex f26 mt10">
				<view class="c9 f-g-0">活动名称：</view>
				<view class="c0 f-g-1">{{co.title}}</view>
			</view>
			<view class="flex f26 mt10">
				<view class="c9 f-g-0">活动时间：</view>
				<view class="c0 f-g-1">{{co.startTime}} 至 {{co.endTime}}</view>
			</view>
			<view class="flex f26 mt10">
				<view class="c9 f-g-0">活动对象：</view>
				<view class="c0 f-g-1">全部客户</view>
			</view>
			<view class="flex f26 mt10">
				<view class="c9 f-g-0">活动类型：</view>
				<view class="c0 f-g-1">
					<text v-if="co.partyA && co.partyA.type==1">单次奖励</text>
					<text v-if="co.partyA && co.partyA.type==2">循环奖励</text>
					<text v-if="co.partyA && co.partyA.type==3">阶梯奖励</text>
				</view>
			</view>
		</view>
		<view class="mt30" v-if="co.partyA && co.partyA.giveData">
			<view class="tit wei f30">邀请人奖励</view>
			<view class="flex f26 mt10">
				<view class="c9 f-g-0">发放时间：</view>
				<view class="c0 f-g-1">立即发放</view>
			</view>
			<view class="flex f26 mt10">
				<view class="c9 f-g-0">注册奖励：</view>
				<view class="c0 f-g-1">
					<block v-if="co.partyA.type==1 || co.partyA.type==2">
						<view>
							<text>
								<text v-if="co.partyA.type==2">每</text>
								邀请{{co.partyA.giveData.person}}个新用户注册，可获得
								<text v-if="co.partyA.giveData.integralSwitch">{{co.partyA.giveData.integral}}积分</text>
								<text v-if="co.partyA.giveData.integralSwitch && co.partyA.giveData.couponSwitch && co.partyA.giveData.couponData">和</text>
								<text v-if="co.partyA.giveData.couponSwitch && co.partyA.giveData.couponData && co.partyA.giveData.couponData.length" class="mr10">{{co.partyA.giveData.couponData.reduce((total, obj) => total + obj.num, 0)}}张优惠券</text>
							</text>
						</view>
						<view class="mt10" v-if="co.partyA.giveData.couponSwitch && co.partyA.giveData.couponData">
							<my-coupon :color='tColor' cname='mb30' v-for="(v,i) in co.partyA.giveData.couponData" :key='i' :co='v.coupon' :v="v"
								ptype='7'></my-coupon>
						</view>
					</block>
					<block v-if="co.partyA.type==3 && co.partyA.giveData && co.partyA.giveData.length">
						<view v-for="(v,i) in co.partyA.giveData" :key="i">
							<view>
								邀请{{v.person}}个新用户注册，可获得
								<text v-if="v.integralSwitch">{{v.integral}}积分</text>
								<text v-if="v.integralSwitch && v.couponSwitch && v.couponData">和</text>
								<text v-if="v.couponSwitch && v.couponData && v.couponData.length" class="mr10">{{v.couponData.reduce((total, obj) => total + obj.num, 0)}}张优惠券</text>
							</view>
							<view class="mt10" v-if="v.couponSwitch && v.couponData">
								<my-coupon :color='tColor' cname='mb30' v-for="(cv,ci) in v.couponData" :key='ci' :co='cv.coupon' :v="cv"
									ptype='7'></my-coupon>
							</view>
						</view>
					</block>
				</view>
			</view>
		</view>
		<view class="mt30" v-if="co.partyB">
			<view class="tit wei f30">被邀请人奖励</view>
			<view class="flex f26 mt10">
				<view class="c9 f-g-0">发放时间：</view>
				<view class="c0 f-g-1">立即发放</view>
			</view>
			<view class="flex f26 mt10" v-if="co.partyB.partyB && co.partyB.partyB.switch">
				<view class="c9 f-g-0">注册奖励：</view>
				<view class="c0 f-g-1">
					<view>
						被邀请用户注册，可获得
							<text v-if="co.partyB.partyB.integralSwitch">{{co.partyB.partyB.integral}}积分</text>
							<text v-if="co.partyB.partyB.integralSwitch && co.partyB.partyB.couponSwitch && co.partyB.partyB.couponData">和</text>
							<text v-if="co.partyB.partyB.couponSwitch && co.partyB.partyB.couponData && co.partyB.partyB.couponData.length" class="mr10">{{co.partyB.partyB.couponData.reduce((total, obj) => total + obj.num, 0)}}张优惠券</text>
					</view>
					<view class="mt10" v-if="co.partyB.partyB.couponSwitch && co.partyB.partyB.couponData">
						<my-coupon :color='tColor' cname='mb30' v-for="(v,i) in co.partyB.partyB.couponData" :key='i' :co='v.coupon' :v="v"
							ptype='7'></my-coupon>
					</view>
				</view>
			</view>
			<view class="flex f26 mt10" v-if="co.partyB.firstPay && co.partyB.firstPay.switch">
				<view class="c9 f-g-0">首次消费：</view>
				<view class="c0 f-g-1">
					<view>
						被邀请用户首次消费，可获得
							<text v-if="co.partyB.firstPay.integralSwitch">{{co.partyB.firstPay.integral}}积分</text>
							<text v-if="co.partyB.firstPay.integralSwitch && co.partyB.firstPay.couponSwitch && co.partyB.firstPay.couponData">和</text>
							<text v-if="co.partyB.firstPay.couponSwitch && co.partyB.firstPay.couponData && co.partyB.firstPay.couponData.length" class="mr10">{{co.partyB.firstPay.couponData.reduce((total, obj) => total + obj.num, 0)}}张优惠券</text>
					</view>
					<view class="mt10" v-if="co.partyB.firstPay.couponSwitch && co.partyB.firstPay.couponData">
						<my-coupon :color='tColor' cname='mb30' v-for="(v,i) in co.partyB.firstPay.couponData" :key='i' :co='v.coupon' :v="v"
							ptype='7'></my-coupon>
					</view>
				</view>
			</view>
		</view>
		<view class="mt30">
			<view class="tit wei f30">活动介绍</view>
			<view class="flex mt10">
				<rich-text type='2' :content="co.contents" />
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import RichText from '@/components/common/functionCmp/rich-text.vue'
	import myCoupon from '@/components/common/my-coupon.vue'
	export default {
		name: 'order-yqgz',
		components: {
			RichText,
			myCoupon,
		},
		data() {
			return {
				type: 1,
				co: {},
			}
		},
		async onLoad(options) {
			this.util.setNT('活动规则')
			this.getData()
		},
		methods: {
			async getData() {
				let {
					data
				} = await this.util.request({
					url: this.api.ldx,
				})
				this.co = data && data.activity || {}
			},
		},
	}
</script>
<style scoped lang="scss">
	.yqgz {
		.tit {
			padding: 10rpx 0;
		}
	}
</style>