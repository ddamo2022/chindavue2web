<template>
	<view class="wh mt20">
		<view class="content">
			<list-cell v-for="(v, i) in dataList" :key="i" :line-left="false" @tap="choose(v)">
				<view class="address" :style="{opacity:v.disable==1 ? 0.3:''}">
					<view class="info">
						<view class="user-row flex f-y-c">
							<view class="f-g-0"><bk-b type='2' c-name='f-g-0 f22 c6 mr20 p-5-10' :t='v.label'
									:color="tColor"></bk-b></view>
							<view class="f-g-1">{{ `${v.address} ${v.description}` }}</view>
						</view>
						<view class="address-row">
							<view class="address c9">
								{{ `${v.contact}(${v.call})` }}<text class="ml20">{{v.mobile}}</text>
							</view>
						</view>
					</view>
					<text class="iconfont f40 icon-bianji edit-btn" @tap.stop="edit(v.id)"
						v-if="v && v.disable!=1"></text>
				</view>
			</list-cell>
			<i-default :imgn="3" v-if="!dataList || dataList.length<=0" />
		</view>
		<view class="footer f-bt">
			 <!-- #ifdef MP-WEIXIN -->
				<button type="default" class="bs60" @tap="importAdd">+{{$t("my-addres.wechat_import")}}</button>
			 <!-- #endif -->
			<button type="info" @tap="add" class="ml20 bs60" :style="{background:tColor,color:fontColor}">+{{$t("my-addres.add_new_address")}}</button>
		</view>
		<sq-btn type="1" ref="sqBtn"></sq-btn>
	</view>
</template>

<script>
	import listCell from '@/components/list-cell/list-cell.vue'
	import bkB from '@/components/common/block-b.vue'
	import iDefault from '@/components/common/default.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	let app = getApp().globalData
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		components: {
			listCell,
			bkB,
			iDefault,
			sqBtn,
		},
		data() {
			return {
				dataList: [],
				isget: false,
				mygd: false,
				type: 'wdshdz',
				params: {},
			}
		},
		async onLoad(options) {
			await this.getLayout()
			await this.getLoginInfo()
			if (options && options.type) {
				this.type = 'wdxddz'
				this.getcData()
			} else {
				this.getData()
			}
			this.isload = true
			
			
		},
		methods: {
			async getData() {
				let {
					data: {
						list
					}
				} = await this.util.request({
					'url': this.api[this.type],
					data: this.params
				})
				this.dataList = list || []
				// if (app.xzdzInfo) {
				// 	let t = this.dataList.findIndex(v => v.id == app.xzdzInfo.id) == -1
				// 	if (t) {
				// 		app.xzdzInfo = null
				// 	}
				// }
				// this.isget = this.mygd = true
			},
			async getcData() {
				let {
					data
				} = await this.util.request({
					'url': this.api[this.type],
					data: this.params
				})
				this.dataList = data || []
			},

			importAdd() {
				if (!this.isLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				var that = this
				uni.chooseAddress({
					success(res) {
						uni.navigateTo({
							url: `/pages/my/addres/add?add=${encodeURIComponent(JSON.stringify(res))}&type=${that.type}`
						})
						console.log(res)
					},
					complete(c) {
						console.log(c)
					}
				})
			},
			add() {
				if (!this.isLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				uni.navigateTo({
					url: `/pages/my/addres/add?type=${this.type}`
				})
			},
			edit(id) {
				uni.navigateTo({
					url: `/pages/my/addres/add?id=${id}&type=${this.type}`
				})
			},
			choose(v) {
				if (v.disable && v.disable == 1){
					this.util.message(this.$t("my-addres.current_address_out_of_delivery_range"), 3, 1000)
					return
				} 
				app.xzdzInfo = v
				this.go({
					t: 4
				})
			},
			labelColor(v) {
				return v == '公司' ? '#94B2D8' : v == '家' ? '#DF8884' : '#A0B888'
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 100%;
		padding-bottom: 170rpx;
	}

	.address {
		width: 100%;
		display: flex;
		align-items: center;

		.info {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-right: 20rpx;
			overflow: hidden;

			.user-row {
				font-size: $font-size-lg;
				font-weight: 500;
				margin-bottom: 10rpx;
			}

			.address-row {
				display: flex;
				align-items: center;

				.address {
					font-size: $font-size-base;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}

		.edit-btn {
			// width: 45rpx;
			// height: 45rpx;
			margin-right: 20rpx;
		}
	}

	// .is-default {
	// 	background-color: #faf5ef;
	// 	font-size: 16rpx;
	// 	color: $color-primary;
	// 	padding: 10rpx;
	// 	flex-shrink: 0;
	// 	margin-right: 6rpx;
	// }

	.footer {
		position: fixed;
		bottom: 30rpx;
		width: 100%;
		z-index: 10;
		background-color: $bg-color;
		// display: flex;
		// align-items: center;
		// justify-content: center;
		// height: 150rpx;
		padding: 0 30rpx;

		button {
			width: 100%;
			font-size: 34rpx;
		}
	}
</style>