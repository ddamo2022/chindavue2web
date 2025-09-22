<template>
	<uni-popup ref="popup" cname="z999" type="bottom" @change="change">
		<view class="pwarp">
			<view class="tit p-r f-c">
				<text class="p-a cIcon iconfont icon-guanbi c6 f36" @click="close"></text>
			</view>
			<view class="bf p3 content">
				<my-coupon @change='radioChange' @btntap='btntap(v.id)' :color='tColor' cname='mb30' v-for="(v,i) in tList" :key='i' :co='v.coupon' :v="v" ptype='2'></my-coupon>
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
	import myCoupon from '@/components/common/my-coupon.vue'
	export default {
		components: {
			uniPopup,
			myCoupon,
		},
		props: {
			cart: {
				type: Array,
				default: () => []
			},
			cr: {
				type: Object,
				default: () => {}
			},
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
		computed: {
			
		},
		methods: {
			open(couponId) {
				let arr = uni.getStorageSync('kyhb')
				if (couponId) {
					for (let i in arr.true) {
						if (couponId == arr.true[i].id) {
							arr.true[i].checked = !arr.true[i].checked
						} else {
							arr.true[i].checked = false
						}
					}
				}
				this.tList = arr.true
				this.fList = arr.false
				this.query = couponId
				this.$refs['popup'].open()
			},
			close() {
				this.$refs['popup'].close()
			},
			change({
				show
			}) {
				if(!show){
					this.$emit('change', show)
				}
			},
			async btntap(e) {
				
			},
			radioChange(e) {
				let arr = this.tList
				for (let i in arr) {
					if (e == arr[i].id) {
						arr[i].checked = !arr[i].checked
					} else {
						arr[i].checked = e == arr[i].id
					}
				}
				let i = arr.find(v => v.checked == true)
				this.$emit('payorder', i)
				// console.log(e, arr, i)
			},

		}
	};
</script>

<style lang="scss" scoped>
	.pwarp {
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
	}
	.content{
		padding-top: 15rpx;
		max-height: 1400rpx;
		overflow: hidden;
		overflow-y: scroll;
	}
	
	.tit {
		background: #fff;
		height: 20rpx;
	
		.cIcon {
			top: 26rpx;
			right: 30rpx;
		}
	}
	
	.con {
		margin-top: 10rpx;
		margin-bottom: 120rpx;
	}
	
	.btn {
		margin: 0 80rpx;
	
		button {
			height: 98rpx;
			line-height: 98rpx;
		}
	}
	.mt60{
		margin-top: 60rpx;
	}
</style>
