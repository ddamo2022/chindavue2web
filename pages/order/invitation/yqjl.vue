<template>
	<view class="mh100 yqjl p2">
		<view class="bar f-bt">
			<view class="f-1 f-c c6 tab" :style="{color:i==tid?tColor:'',borderColor:i==tid?tColor:''}"
				v-for="(v,i) in tab" :key="i" @click="handTab(v,i)">{{v.label}}</view>
		</view>
		<block v-if="tid==0">
			<view class="bs20 p2 bf mt20" v-if="infoA.partyA && infoA.partyA.partyBCount">
				<view class="wei f28 b-b-e pb20">注册奖励</view>
				<view class="mt20">
					<view class="c6">
						已邀请
						<text class="wei f30 m01" :style="{color:tColor}">{{infoA.partyA && infoA.partyA.partyBCount}}</text>个新用户注册，
						已获得
						<text class="wei f30 m01" :style="{color:tColor}">{{infoA.partyA && infoA.partyA.integral}}</text>积分 
						<text class="wei f30 m01" :style="{color:tColor}">{{infoA.partyA && infoA.partyA.couponCount}}</text>张优惠券，
						<block v-if="partyAData.type && partyAData.type ==2">
							再邀请
							<text class="wei f30 m01" :style="{color:tColor}">{{partyAData.giveData && partyAData.giveData.person}}</text>
							个新用户注册将获得
							<block v-if="partyAData.giveData && partyAData.giveData.integralSwitch">
								<text class="wei f30 m01" :style="{color:tColor}">{{partyAData.giveData.integral}}</text>
								积分
							</block>
							<block v-if="partyAData.giveData && partyAData.giveData.couponSwitch && partyAData.giveData.couponData && partyAData.giveData.couponData.length">
								<text class="wei f30 m01" :style="{color:tColor}">{{partyAData.giveData.couponData.reduce((total, obj) => total + obj.num, 0)}}</text>张优惠券
							</block>
						</block>
						<block v-if="partyAData.type && partyAData.type == 3 && partyAData.giveData && partyAData.giveData.length">
							<view v-for="(v,i) in partyAData.giveData" :key="i" v-if="v.person > infoA.partyA.partyBCount">
								再邀请
								<text class="wei f30 m01" :style="{color:tColor}">{{v.person}}</text>
								个新用户注册将获得
								<block v-if="v.integralSwitch">
									<text class="wei f30 m01" :style="{color:tColor}">{{v.integral}}</text>
									积分
								</block>
								<block v-if="v.couponData && v.couponData.length">
									<text class="wei f30 m01" :style="{color:tColor}">{{v.couponData.reduce((total, obj) => total + obj.num, 0)}}</text>张优惠券
								</block>
							</view>
						</block>
					</view>
					<view class="mt10 p-15-30" v-if="infoA.couponList && infoA.couponList.length">
						<my-coupon :color='tColor' cname='mb30' v-for="(v,i) in infoA.couponList" :key='i' :co='v.coupon' :v="v"
							ptype='7'></my-coupon>
					</view>
				</view>
				<view class="" v-if="infoA.partyBList && infoA.partyBList.length">
					<view class="f-bt f24 f-y-c mt30" v-for="(v,i) in infoA.partyBList" :key="i">
						<view class="f-g-0 flex f-y-c">
							<view class="logo bsf mr20"><mg-img :src='`${onImgurl}no-user.png`'></mg-img></view>
							<view class="c0">{{v.user && v.user.mobile}}</view>
						</view>
						<view class="c9">{{v.created_at}}</view>
					</view>
				</view>
			</view>
			<view class="pt150" v-else>
				<i-default :imgn="7" zdytxt="暂无奖励"  />
			</view>
		</block>
		<block v-if="tid==1">
			<view class="bs20 p2 bf mt20" v-if="infoB && infoB.partyB && infoB.partyB.partyBstate">
				<view class="wei f28 b-b-e pb20">注册奖励</view>
				<view class="mt20">
					<view class="c6">
						已为“{{infoB.partyB && infoB.partyB.partyAUser && infoB.partyB.partyAUser.mobile}}”用户助力
						，已获得
						<block v-if="partyBData.partyB && partyBData.partyB.integralSwitch && partyBData.partyB.integral">
							<text class="wei f30 m01" :style="{color:tColor}">{{partyBData.partyB && partyBData.partyB.integral}}</text>积分
						</block>
						<block v-if="partyBData.partyB && partyBData.partyB.couponSwitch && partyBData.partyB.couponData && partyBData.partyB.couponData.length">
							<text class="wei f30 m01" :style="{color:tColor}">{{partyBData.partyB.couponData.reduce((total, obj) => total + obj.num, 0)}}</text>
							张优惠券
						</block>
					</view>
					<view class="mt10 p-15-30" v-if="partyBData.partyB && partyBData.partyB.couponSwitch && partyBData.partyB.couponData">
						<my-coupon :color='tColor' cname='mb30' v-for="(v,i) in partyBData.partyB.couponData" :key='i' :co='v.coupon' :v="v"
							ptype='7'></my-coupon>
					</view>
				</view>
			</view>
			<view class="bs20 p2 bf mt20" v-if="infoB && infoB.partyB && infoB.partyB.firstPayState">
				<view class="wei f28 b-b-e pb20">下单奖励</view>
				<view class="mt20">
					<view class="c6">
						已为“{{infoB.partyB && infoB.partyB.partyAUser && infoB.partyB.partyAUser.mobile}}”用户助力
						，已获得
						<block v-if="partyBData.firstPay && partyBData.firstPay.integralSwitch && partyBData.firstPay.integral">
							<text class="wei f30 m01" :style="{color:tColor}">{{partyBData.firstPay && partyBData.firstPay.integral}}</text>积分
						</block>
						<block v-if="partyBData.firstPay && partyBData.firstPay.couponSwitch && partyBData.firstPay.couponData && partyBData.firstPay.couponData.length">
							<text class="wei f30 m01" :style="{color:tColor}">{{partyBData.firstPay.couponData.reduce((total, obj) => total + obj.num, 0)}}</text>
							张优惠券
						</block>
					</view>
					<view class="mt10 p-15-30" v-if="partyBData.firstPay && partyBData.firstPay.couponSwitch && partyBData.firstPay.couponData">
						<my-coupon :color='tColor' cname='mb30' v-for="(v,i) in partyBData.firstPay.couponData" :key='i' :co='v.coupon' :v="v"
							ptype='7'></my-coupon>
					</view>
				</view>
			</view>
			<view class="pt150" v-else-if="infoB && infoB.partyB && (!infoB.partyB.partyBstate && !infoB.partyB.firstPayState)">
				<i-default :imgn="7" zdytxt="暂无奖励"  />
			</view>
		</block>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import iDefault from '@/components/common/default.vue'
	import myCoupon from '@/components/common/my-coupon.vue'
	export default {
		name: 'order-yqgz',
		components: {
			iDefault,
			myCoupon,
		},
		data() {
			return {
				infoA: {},
				infoB: {},
				partyAData:{},
				partyBData:{},
				tab: [{
						label: '邀请奖励',
						value: 1,
					},
					{
						label: '被邀请奖励',
						value: 1,
					}
				],
				tid: 0,
				dataList: [],
			}
		},
		async onLoad(options) {
			this.util.setNT('我的奖励')
			if(options && options.activityId){
				this.id = options.activityId
				this.getDataA()
			}
		},
		methods: {
			handTab(v,i){
				if(i == this.tid) return
				this.tid = i
				if(i==0){
					this.getDataA()
				}else{
					this.getDataB()
				}
			},
			async getDataA() {
				let {
					data
				} = await this.util.request({
					url: `${this.api.ldxjla}/${this.id}`,
				})
				this.infoA = data
				this.partyAData = data && data.activity && data.activity.partyA
			},
			async getDataB() {
				let {
					data
				} = await this.util.request({
					url: `${this.api.ldxjlb}/${this.id}`,
				})
				this.infoB = data
				this.partyBData = data && data.partyB && data.partyB.data
			},
		},
	}
</script>
<style scoped lang="scss">
	.bar {
		.tab {
			padding: 15rpx 0;
			border: 2rpx solid #ddd;
		}
	}

	.logo {
		width: 80rpx;
		height: 80rpx;
	}
</style>