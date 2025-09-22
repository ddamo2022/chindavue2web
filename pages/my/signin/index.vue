<template>
	<view class="pb20 o-h">
		<view class="qdc p-r o-h" v-if="mySignData">
			<view class="bf mb30 p3 today" :style="{background:tColor}">
				<view class="m20 f-bt posi-r body p3">
					<view class="f-g-1">
						<view class="cf f48 neutra-font">{{$t("my-signin.consecutive_check_ins")}}{{mySignData.continuous || 0}}{{$t("my-signin.days")}}</view>
						<view class="f30 cf mt20" v-if="mySignData.today">{{$t("my-signin.checked_in_today")}}</view>
						<view class="f30 cf mt20" v-else>{{$t("my-signin.not_checked_in_today")}}</view>
					</view>
					<view class="f-g-0 f-y-bt mt20">
						<button class="clearbtn sbtn f30 f-c c3" :style="{color:tColor}"
							@click="ljqd">{{mySignData.today ? $t("my-signin.checked_in") :$t("my-signin.check_in_now")}}</button>
					</view>
				</view>
			</view>
			<view class="m03 main">
				<view class="bf mb30 p30 bs20 mt20">
					<view class="calendar-content" v-if="showCalendar">
						<uni-calendar class="uni-calendar--hook" :selected="info.selected" :showMonth="false"
							@change="change" @monthSwitch="monthSwitch" />
					</view>
				</view>
				<view class="bf mb30 bs20 p30" v-if="config && config.seriesSwitch==1 && config.series">
					<view class="f-c c0 f32 wei">{{$t("my-signin.consecutive_check_in_rewards") }}</view>
					<view class="c6 p30">
						<view class="mt10 f26 mb30 f-g-1 p02" v-for="(v,i) in config.series" :key="i">
							<view class="wei f30 c0 neutra-font">{{$t("my-signin.streak") }}{{v.days}}{{$t("my-signin.days") }}：</view>
							<view v-if="v.balanceSwitch==1 && v.balance" class="mt10 f-g-1">{{$t("my-signin.gift_balance") }}：<text class="cf5 wei neutra-font"
									:style="{color:tColor}">{{v.balance}}</text></view>
							<view v-if="v.integralSwitch==1 && v.integral" class="mt10 f-g-1">{{$t("my-signin.gift_points") }}：<text class="cf5 wei neutra-font"
									:style="{color:tColor}">{{v.integral}}</text></view>
							<view v-if="v.couponSwitch==1 && v.couponList" class="mt10 f-g-1">{{$t("my-signin.gift_coupons") }}：
								<text v-for="(cv,ci) in v.couponList" :key="ci" class="cf5 wei neutra-font"
									:style="{color:tColor}">{{cv.name}} X{{cv.num}},</text>
							</view>
						</view>
					</view>
				</view>
				<view class="bf mb30 bs20 p30">
					<view class="f-c c0 f32 wei">{{$t("my-signin.my_check_ins") }}</view>
					<view class="f-row f-bt c6 p10">
						<view class="f-1 f-y-c f-col t-o-e" @click='mysignin'>
							<view class="f26"><text class="f36 wei cfc mr10 neutra-font">{{mySignData.integral}}</text>{{$t("my-signin.points") }}</view>
							<view class='f24'>{{$t("my-signin.total_points") }}</view>
						</view>
						<view class="f-1 f-y-c f-col t-o-e" @click="mybalance">
							<view class="f26"><text class="f36 wei cfc mr10 neutra-font">{{mySignData.balance}}</text>THB</view>
							<view class='f24'>{{$t("my-signin.total_balance") }}</view>
						</view>
						<view class="f-1 f-y-c f-col t-o-e" @click="mycoupon">
							<view class="f26"><text class="f36 wei cfc mr10 neutra-font">{{mySignData.couponCount}}</text>{{$t("my-signin.pieces") }}</view>
							<view class='f24'>{{$t("my-signin.total_coupons") }}</view>
						</view>
						<view class="f-1 f-y-c f-col t-o-e">
							<view class="f26"><text class="f36 wei cfc mr10 neutra-font">{{mySignData.total}}</text>{{$t("my-signin.times") }}</view>
							<view class='f24'>{{$t("my-signin.total_check_ins") }}</view>
						</view>
					</view>
				</view>
				<view class="bf mb30 bs20 p3">
					<view class="f-c c0 f32 wei">{{$t("my-signin.check_in_instructions") }}</view>
					<view class="p3 c6" v-html="config.body"></view>
				</view>
			</view>
		</view>
		<tab-bar></tab-bar>
		<load v-if="showLoading"></load>
		<sq-btn type="1" ref="sqBtn"></sq-btn>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import load from '@/components/common/load.vue'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import {
		getDw
	} from "@/common/wechat-util"
	import utils from '@/common/utils'
	import sqBtn from '@/components/common/sq-btn.vue'

	function getDate(date, AddDayCount = 0) {
		if (!date) {
			date = new Date()
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/')
		}
		const dd = new Date(date)

		dd.setDate(dd.getDate() + AddDayCount)

		const y = dd.getFullYear()
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()
		return {
			fullDate: y + '-' + m + '-' + d,
			year: y,
			month: m,
			date: d,
			day: dd.getDay()
		}
	}
	export default {
		name: 'index',
		components: {
			load,
			sqBtn,
		},
		data() {
			return {
				mySignData: '',
				config: {
					series: [],
				},
				showCalendar: false,
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},
				param: {
					year: getDate().year,
					month: getDate().month,
				},
			}
		},
		async onLoad() {
			await this.getpageconfig().then(() => {
				this.util.setNT(this.config.name || this.$t("my-signin.check_in"))
			})
			this.getLoginInfo()
			this.mySign()
		},
		onReady() {
			this.$nextTick(() => {
				this.showCalendar = true
			})
		},
		mixins: [utilMixins],
		computed: {
			jfName() {
				return this.system.custom.integral
			},
		},
		methods: {
			...mapActions(["getConfig"]),
			async getpageconfig() {
				let {
					data
				} = await this.util.request({
					'url': this.api.cMap,
					method: 'POST',
					ct: 1,
					data: {
						idents: ['singInSetting']
					}
				})
				this.config = data && data.singInSetting
				if (data.singInSetting && data.singInSetting.switch != 1) {
					uni.showModal({
						title:  this.$t("my-signin.tips"),
						content: this.$t("my-signin.check_in_function_is_closed"),
						showCancel: false,
						success: (res) => {
							this.go({
								t: 6,
								url: '/pages/index/my-index'
							})
						}
					});
				}
			},
			async mySign() {
				let {
					data
				} = await this.util.request({
					url: this.api.wdqdsj,
					data: this.param
				})
				this.mySignData = data
				let singInList = data && data.singInList ? data.singInList : []
				this.info.date = getDate(new Date(), -30).fullDate
				this.info.startDate = getDate(new Date(), -60).fullDate
				this.info.endDate = getDate(new Date(), 30).fullDate
				singInList.forEach((v) => {
					this.info.selected.push({
						date: v,
						info: this.$t("my-signin.checked_in")
					})
				})
			},
			async ljqd() {
				if (!this.isLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				let {
					res,
					msg
				} = await this.util.request({
					url: this.api.wdqdsj,
					method: 'POST'
				})
				this.util.message(msg, 1)
				setTimeout(() => {
					this.mySign()
				}, 500)
			},
			change(e) {
				// console.log('change 返回:', e)
			},
			monthSwitch(e) {
				this.param.year = e.year
				this.param.month = e.month
				this.mySign()
			},
			mysignin(type) {
				this.go({
					t: 1,
					url: '/pages/my/integral/my-integral?type=' + type.type
				})
			},
			mycoupon() {
				this.go({
					t: 1,
					url: '/pages/other/coupon/couponList'
				})
			},
			mybalance() {
				this.go({
					t: 1,
					url: '/pages/other/recharge/yemx'
				})
			},
			getDates(currentTime) {
				var currentDate = new Date(currentTime)
				var timesStamp = currentDate.getTime();
				var currenDay = currentDate.getDay();
				var dates = [];
				for (var i = 0; i < 7; i++) {
					dates.push(new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 6) % 7)).toLocaleDateString()
						.replace(
							/\//g, '-'));
				}
				for (let i in dates) {
					dates[i] = dates[i].split('-').map(utils.formatNumber).join('-')
				}
				console.log(dates)
				return dates
			}
		},
	}
</script>

<style scoped lang="scss">
	.qdh {
		width: 100%;
		height: 387rpx;
		// border-radius: 100% 100% 100% 100% / 0% 0% 35% 35%;
	}

	.qdc {

		// margin-top: -120rpx;;
		.today {
			width: 160%;
			margin-left: -30%;
			overflow: hidden;
			height: 400rpx;
			border-bottom-left-radius: 40%;
			border-bottom-right-radius: 40%;
			// position: relative;
			// z-index: 1;
			display: flex;
			justify-content: center;

			.body {
				width: 100vw;
				// padding-left: 30%;
			}
		}

		.main {
			margin-top: -150rpx;
		}
	}

	.bf2 {
		background: #FF5012;
	}

	.cf2 {
		color: #FF5012;
	}

	.goxd {
		width: 160rpx;
		height: 58rpx;
		border: 1rpx solid #FF5012;
		border-radius: 28px;
	}

	.qddays,
	.qddayw {
		width: 67rpx;
		height: 84rpx;
		border-radius: 8rpx;
		margin-left: 30rpx;
	}

	.qddays:first-child {
		margin-left: 0;
	}

	.icw {
		width: 34rpx;
		height: 24rpx;
	}

	.dhe {
		height: 40rpx;
	}

	.w630 {
		width: 630rpx;
	}

	.p24 {
		padding: 30rpx 0 40rpx 0;
	}

	.goodsc {
		width: 305rpx;
	}

	.goodsimg {
		width: 305rpx;
		height: 305rpx;
	}

	.boxs {
		border-radius: 8rpx;
		padding: 0 7rpx;
	}

	.sbtn {
		width: 200rpx;
		height: 74rpx;
		// background: linear-gradient(-90deg, rgba(255, 82, 23, 1) 0%, rgba(255, 119, 45, 1) 100%);
		background: #fff;
		border-radius: 47px;
	}

	.ysbtn {
		background: linear-gradient(-90deg, rgba(255, 82, 23, 1) 0%, rgba(255, 119, 45, 1) 100%);
		opacity: 0.5;
		color: #FFDBCC;
	}

	.cfc {
		color: #FF481C;
	}

	.p050 {
		padding: 5rpx 0;
	}

	::v-deep.uni-calendar-item--isDay {
		background-color: #fbf0f0 !important;
		color: #000 !important;
		opacity: 1 !important;
		border-radius: 20rpx;
	}

	::v-deep .uni-calendar-item--checked {
		background-color: #fbf0f0 !important;
		color: #000 !important;
		opacity: 1 !important;
		border-radius: 20rpx;
	}

	::v-deep .uni-calendar-item--isDay-text {
		color: #000 !important;
	}

	::v-deep .uni-calendar-item--extra {
		color: #e43d33 !important;
	}
</style>