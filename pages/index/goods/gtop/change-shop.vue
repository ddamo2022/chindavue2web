<template>
	<view class="flex p2 f-bt" style="padding-bottom: 10rpx;height: 150rpx;" v-if="sjxx && sjxx.name">
		<view class="f-g-1">
			<view class="wei f34 f-y-c t-o-e" @click="goSelect"><text class="iconfont mt0 c3 icon-shoucang mr15 f38"
					:style="{color:sjxx && sjxx.collectStore ? tColor:'#333'}"
					:class="{'icon-shoucangxuanzhong': sjxx && sjxx.collectStore}"
					@click.stop="collStore"></text>{{sjxx.name}} <text class="iconfont icon-youjiantou f28 c3"></text>
			</view>
			<view class="c9 f26 mt10"><text class="iconfont icon-im_dingwei f32 mr10 c9 mt5"></text>{{ $t('goods.distanceyou')}}{{sjxx.distance}}
			</view>
		</view>
		<view v-if="ModeArr.length" class="f-row ml30">
			<view class="f-c buytype">
				<view v-for="(v,i) in ModeArr" :key='i' class="type bs30 f24 c9"
					:class="{'atype cf':buyType==v.value}" :style="{background:buyType==v.value?tColor:'',color:buyType==v.value?fontColor:''}"
					@click="changeBuyType(v)">
					{{v.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	const app = getApp().globalData
	export default {
		props:{
			xdtype: {
				type: String,
				default: ''
			},
		},
		components: {

		},
		data() {
			return {
				buyType: 1,
				storeId: '58',
			}
		},
		watch: {
			xdtype: {
				handler(newVal) {
					console.log('xdtypel', newVal)
					this.buyType = this.newVal
				},
			},
		},
		computed: {
			...mapState(['sjxx']),
			...mapState({
				orderSetting: state => state.config.orderSetting,
				copywriting: state => state.layout.copywriting,
				storeBasicSetting: state => state.config.storeBasicSetting,
			}),
			ModeArr() {
				let arr = []
				if (this.sjxx.storeSetting) {
					let sjsz = this.sjxx.storeSetting
					if (sjsz.pickupSwitch == 1 && sjsz.takeoutSwitch == 1) {
						arr = [{
							name: this.copywriting.dnName || this.$t('goods.Pickup'),
							value: '2',
						}, {
							name: this.copywriting.wmName || this.$t('goods.takeout'),
							value: '1',
						}]
						if (this.orderSetting.orderPriority == 2) {
							arr.reverse()
						}
						this.buyType = +arr[0].value
						if (this.xdtype) {
							this.buyType = this.xdtype
						}
					} else if (sjsz.pickupSwitch == 0 && sjsz.takeoutSwitch == 1) {
						arr = [{
							name: this.copywriting.wmName || this.$t('goods.takeout'),
							value: '1',
						}]
						this.buyType = 1
					} else if (sjsz.pickupSwitch == 1 && sjsz.takeoutSwitch == 0) {
						arr = [{
							name: this.copywriting.dnName || this.$t('goods.Pickup'),
							value: '2',
						}]
						this.buyType = 2
					}
				}
				// console.log('ModeArrModeArr', this.buyType, arr, this.xdtype)
				return arr
			},
		},
		methods: {
			goSelect() {
				if (this.storeBasicSetting && this.storeBasicSetting.changState == 2) {
					this.util.message( this.$t('goods.store_switching_disabled'), 3, 2000)
					return
				}
				uni.navigateTo({
					url: '/pages/shop/select/index?page=goods&storeId=' + this.sjxx.id
				})
			},
			async collStore() {
				let {
					msg
				} = await this.util.request({
					'url': `${this.api.storesc}/${this.sjxx.id}`,
					method: 'POST',
				})
				this.util.message(msg, 2000)
				this.$emit('init')
			},
			changeBuyType(v) {
				if (v.value == this.buyType) return
				// if (v.value == 1 && this.ModeArr[0].value == 2) {
				// 	app.xzdzInfo = null
				// 	this.go({
				// 		t: 1,
				// 		url: `/pages/my/addres/addresses?from=2&storeId=${this.storeId}`,
				// 	})
				// 	return
				// } else if (v.value == 2) {
				// 	app.xzdzInfo = null
				// }
				this.buyType = v.value
				let diningType = this.buyType == 2 ? (this.sjxx.storeSetting.takeAppointTimeStep.length == 2 ? 1 : 2) : 0
				this.$emit('dining-type', diningType)
				// console.log(v, this.ModeArr)
				// this.buyType = this.buyType == 1 ? 0 : 1
			},
			// switchOrderType() {
			// 	this.$emit('switch-order-type')
			// },
		}
	}
</script>

<style scoped lang="scss">
	.buytype {
		height: 62rpx;
		padding: 0 6rpx;
		border-radius: 45rpx;
		border: 0.5px solid #f6f6f6;
		background: #f6f6f6;

		.type {
			min-width: 90rpx;
			// padding: 0 10rpx;
			height: 50rpx;
			text-align: center;
			line-height: 50rpx;
		}

		.atype {
			color: #fff;
			
			background: #B11E23;
		}
	}
</style>