<template>
	<view class="coupon">
		<view class="p2 ccoupon">
			<my-coupon @change='radioChange' @btntap='btntap(v.id)' :color='tColor' cname='mb30' v-for="(v,i) in tList" :key='i' :co='v.coupon' :v="v" ptype='2'></my-coupon>
			<view class="f30 wei c9 mt20 mb20">{{$t('my-coupon.coupon_not_applicable')}}</view>
			<my-coupon :color='tColor' cname='mb30' v-for="(v,i) in fList" :key='i' :co='v.coupon' :v="v" ptype='3'></my-coupon>
			<!-- <jzz bgcolor="transparent" imgn='zwhb' :nodata="dataList.length==0&&isget" :mygd='mygd' /> -->
		</view>
		<!-- <view class="pt150">
			<i-default :imgn="2"  v-if="!dataList || dataList.length<=0"  />
		</view> -->
		<!-- <view class="foot-btnc cf f30 bf" :style="{padding: '20rpx',bottom: isIpx?'40rpx':0}">
			<view class="f-g-1 mt10">
				<button @click="save" :loading="loading" :disabled="loading" class="foot-btn bs60 f30"
					hover-class="btnhc" :style="{background:tColor}">确定</button>
			</view>
		</view>
		<view v-if="isIpx" class='bgf'></view> -->
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	// import jzz from '@/components/common/jzz.vue'
	import iDefault from '@/components/common/default.vue'
	import myCoupon from '@/components/common/my-coupon.vue'
	import utils from '@/common/utils.js'
	import {
		sljz
	} from "@/common/util-mixins.js"
	export default {
		name: 'coupon-list',
		components: {
			// jzz,
			iDefault,
			myCoupon,
		},
		data() {
			return {
				show: false,
				params: {
					page: 1,
					size: 10,
				},
				tList:[],
				fList:[],
			}
		},
		onLoad(options) {
			 this.util.setNT('优惠券列表')
			let arr = uni.getStorageSync('kyhb')
			if (options.couponId) {
				for (let i in arr.true) {
					if (options.couponId == arr.true[i].id) {
						arr.true[i].checked = !arr.true[i].checked
					} else {
						arr.true[i].checked = false
					}
				}
			}
			this.tList = arr.true
			this.fList = arr.false
			this.query = options
		},
		mixins: [sljz],
		computed: {},
		methods: {
			async btntap(e) {
				
			},
			radioChange(e) {
				this.util.showLoading()
				let arr = this.tList
				for (let i in arr) {
					if (e == arr[i].id) {
						arr[i].checked = !arr[i].checked
					} else {
						arr[i].checked = e == arr[i].id
					}
				}
				let i = arr.find(v => v.checked == true)
				uni.$emit('payorder', {
					hbInfo: i,
					type: this.query.t,
				});
				utils.swnb(200)
				// console.log(e, arr, i)
			},
		},
	}
</script>
<style scoped lang="scss">
	.coupon {
		.ccoupon {

			.left {
				width: 30%;
			}

			.qsy {
				width: 130rpx;
				height: 56rpx;
			}

			.criel {
				width: 36rpx;
				height: 36rpx;
				background: #eee;
			}

			.fanz {
				transform: rotateZ(180deg);
			}

			.fanzz {
				transform: rotateZ(0deg);
			}

			.lh40 {
				line-height: 48rpx;
			}
		}
	}
</style>