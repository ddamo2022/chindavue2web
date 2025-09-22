<template>
	<uni-popup ref="popup" type="bottom">
		<view class="bs30 bf">
			<view class="tit p-r f-c">
				<view class="f32 wei">	{{$t("check-time.select_appointment_time")}}</view>
				<text class="p-a cIcon iconfont icon-guanbi c6 f36" @click="close"></text>
			</view>
			<view class="p3">
				<!-- <view class="flex posi-r" v-if="type==2">
					<view class="f-g-0 mr20">
						<image :src="sjxx.shareImg" class="timg bs20"></image>
					</view>
					<view class="f-g-1 wei f40 c0">您好，什么时候取呢？</view>
					<view class="shopbg t-o-e f-y-c c6">自取门店：{{sjxx.name}}</view>
				</view> -->
				<view class="f-bt mt20">
					<block v-for="(v,i) in sType" :key="i">
						<view class="bf bs20 b-s-3 p2 xzsj" v-if="i==0 && cd.realtimeState!=4 || i==1 && cd.realtimeState!=5 && dl.reservationTime && dl.reservationTime.length" :class="{'ml30':i>0,'acctive':curr==i}"
							:style="{backgroundColor:curr==i?tColor:'',color:curr==i?fontColor:''}"
							@click="changeType(i)">
							<view class="c0 f30" :class="{'acctive':curr==i}" :style="{backgroundColor:curr==i?tColor:'',color:curr==i?fontColor:''}">
								{{type==2 ? v.tit : v.outTit}}</view>
							<view class="c9 f24" :class="{'acctive':curr==i}" :style="{backgroundColor:curr==i?tColor:'',color:curr==i?fontColor:''}">
								{{type==2 ? v.name : v.outName}}</view>
						</view>
					</block>
				</view>
				<view class="timeday" v-if="curr==1">
					<scroll-view scroll-x>
						<view class="flex f-nw w-100">
							<view class="times bs40 c0 p23 mr20 f24 f-g-0" :class="{'acctive':daycurr==i}"
								:style="{backgroundColor:daycurr==i?tColor:'',color:daycurr==i?fontColor:''}" v-for="(v,i) in dl.reservationTime"
								:key="i" @click="changeDay(i)">
								{{v.title}}
							</view>
						</view>
					</scroll-view>
					<scroll-view scroll-x class="mt20">
						<view class="flex f-nw w-100">
							<view class="times bs40 c0 p23 mr20 f24 f-g-0" :class="{'acctive':timecurr==i}"
								:style="{backgroundColor:timecurr==i?tColor:'',color:timecurr==i?fontColor:''}"
								v-for="(v,i) in dl.reservationTime[daycurr].timeArr" :key="i" @click="changeTime(i,v)">
								{{v.title}}
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="f-bt mt30">
					<button type="primary" class="add-cart-btn f-c f-g-1 bs60 f34" :style="{background:tColor,color:fontColor}" @click="gopay">{{$t("check-time.confirm")}}</button>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		name: 'CheckShop',
		components: {

		},
		props: {
			dl: {
				type: Object,
				default: {}
			},
			cd: {
				type: Object,
				default: {}
			},
		},
		computed: {
			...mapState(['sjxx']),
		},
		data() {
			return {
				type: '',
				curr: 0,
				daycurr: 0,
				timecurr: 0,
				sType: [{
						tit: this.$t("check-time.immediate_pickup"),
						name: this.$t("check-time.immediate_in-store_pickup"),
						outTit: this.$t("check-time.immediate_delivery"),
						outName: this.$t("check-time.start_making_immediately"),
					},
					{
						tit: this.$t("check-time.schedule_pickup"),
						name: this.$t("check-time.as_per_appointment_time")+'，'+this.$t("check-time.in-store_pickup"),
						outTit: this.$t("check-time.schedule_delivery"),
						outName: this.$t("check-time.as_per_appointment_time")+'，'+this.$t("check-time.in-store_pickup"),
					}
				],
				days: [{
						time: this.$t("check-time.today")+'('+this.$t("check-time.thursday")+')',
						value: '4',
					},
					{
						time: this.$t("check-time.tomorrow")+'('+this.$t("check-time.friday")+')',
						value: '5',
					},
					{
						time: this.$t("check-time.day_after_tomorrow")+'('+this.$t("check-time.saturday")+')',
						value: '7',
					}
				],
				times: [{
						time: '09:40',
						value: '1',
					},
					{
						time: '09:50',
						value: '2',
					},
					{
						time: '10:00',
						value: '3',
					},
					{
						time: '11:00',
						value: '4',
					}
				],
			}
		},
		methods: {
			open(type) {
				this.type = type
				// this.curr = 0
				this.$refs['popup'].open()
			},
			close() {
				let t = this.dl.reservationTime
				if (this.curr == 1 && t && t.length) {
					let v = {
						...t[this.daycurr].timeArr[this.timecurr],
						dayTit: t[this.daycurr].title
					}
					this.$emit('yjSelect', v)
				}else{
					this.$emit('yjSelect', {})
				}
				this.$refs['popup'].close()
			},
			changeType(i) {
				if (this.curr === i) return
				this.curr = i
			},
			changeDay(i) {
				if (this.daycurr === i) return
				this.daycurr = i
			},
			changeTime(i, v) {
				if (this.timecurr === i) return
				this.timecurr = i
			},
			gopay() {
				this.close()
			},
		}
	}
</script>

<style scoped lang="scss">
	.tit {
		background: #F2F0F3;
		height: 100rpx;

		.cIcon {
			top: 26rpx;
			right: 30rpx;
		}
	}

	.timg {
		width: 140rpx;
		height: 140rpx;
	}

	.shopbg {
		bottom: 10rpx;
		padding-left: 150rpx;
		z-index: -1;
		background: #f5f5f5;
		width: 100%;
		height: 70rpx;
		border-radius: 30rpx;
	}

	.timeday {
		margin-top: 40rpx;
		margin-bottom: 50rpx;

		.times {
			background: #f5f5f5;
		}
	}

	.acctive {
		// background: #fff;
		color: #fff;
	}
	
	.xzsj{
		width: 50%;
	}
</style>