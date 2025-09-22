<template>
	<view class="bf bdr">
		<view class="b-b-e p32 posi-r">
			<image :src="mrtxImg" class="bgimg posi-a"></image>
			<view class="f-bt">
				<view class="f-g-1" @click="goSelect">
					<view class="wei f38">{{storeInfo.name || $t("integral.please_select_store")}}<text class="iconfont icon-youjiantou f32 mr10 c3 mt5"></text></view>
					<view class="mt10" v-if="storeInfo && storeInfo.address">{{storeInfo.address}}</view>
				</view>
				<view class="f-g-0">
					<text class="bf f20 wei p-r distance-text" v-if="storeInfo && storeInfo.distance">{{$t("integral.distance_from_you")}}{{storeInfo.distance}}</text>
					<view class="t-c">
						<text class="icon iconfont icon-dingwei f50 c9"></text>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="flex p2 c3" v-if="storeInfo">
			<view class="f-g-0 f-y-c"><text class="iconfont icon-im_dingwei f32 mr10 c3 mt5"></text></view>
			<view class="f-g-1 t-o-e f-y-c" @click="goSelect">
				<text class="f30">{{storeInfo.name || '请选择门店'}}</text>
				<text class="iconfont icon-youjiantou f32 mr10 c3 mt5"></text>
			</view>
		</view> -->
		<view class="b-b-e f-bt p32">
			<view class="f-g-0 wei">
				{{$t("integral.contact_phone_number")}}
			</view>
			<view class="f-g-1 f-x-e">
				<view class="mr20">
					<input type="text" v-model="phone" class="t-r" @change="iMobile" />
				</view>
				<button v-if="user && user.mobile" type="primary" plain :style="{color:tColor,borderColor:tColor}" class="f24 l-h1 f-c bs5" @click="auZdtx">{{$t("integral.auto_fill")}}</button>
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
	export default {
		name: 'SelfFetchAddres',
		components: {

		},
		props: {
			dl: {
				type: Object,
				default: {}
			},
			mobile: {
				type: String,
				default: ''
			},
			yjrV: {
				type: Object,
				default: {}
			},
			storeInfo: {
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
			...mapState({
				copywriting: state => state.layout.copywriting,
			}),
			mrtxImg() {
				return `${this.onImgurl}out/adbg.jpg`
			},
		},
		watch: {
			mobile: {
				handler(newVal) {
					this.phone = newVal
				},
				immediate: true
			},
		},
		data() {
			return {
				phone:'',
				current:0,
			}
		},
		methods: {
			radioChange(e) {
				this.current = +e.detail.value ==2 ? 1 : 0
				this.$emit('radioChange',+e.detail.value)
			},
			iMobile(){
				this.$emit('auZdtx', this.phone)
			},
			auZdtx() {
				console.log('mobile', this.user.mobile)
				this.$emit('auZdtx', this.user.mobile)
				// this.params.mobile = this.user.mobile
			},
			goSelect() {
				uni.navigateTo({
					url: `/pages/shop/select/index?page=recharge&searchIds=${this.dl.storeType ==2 ? this.dl.storeIds : ''}`
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.bgimg {
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 150rpx;
	}

	.distance-text {
		padding: 8rpx 16rpx;
		border-radius: 30rpx;
		box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
	}
	
	.bdr{
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
	}
	
	.yuan{
		width: 42rpx;
		height: 42rpx;
		border-radius: 50%;
		border: 2rpx solid #ccc;
		z-index: 10;
	}
	.rd{
		display: none;
	}
</style>
