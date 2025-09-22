<template>
	<view class="bf bdr">
		<view class="b-b-e p32 posi-r">
			<image :src="mrtxImg" class="bgimg posi-a"></image>
			<view class="f-bt">
				<view class="f-g-1">
					<view class="wei f38">{{sjxx.name}}</view>
					<view class="mt10">{{sjxx.address}}</view>
				</view>
				<view class="f-g-0">
					<text class="bf f20 wei p-r distance-text">{{$t("self-fetch-addres.distance_from_you")}}{{sjxx.distance}}</text>
					<view class="t-c">
						<text class="icon iconfont icon-dingwei f50 c9"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="b-b-e f-bt p32">
			<view class="f-g-0 wei">
				{{$t("self-fetch-addres.contact_phone")}}
			</view>
			<view class="f-g-1 f-x-e">
				<view class="mr20">
					
					<input type="text" v-model="phone" class="t-r" @input="iMobile" />
				</view>
				<button v-if="user && user.mobile" type="primary" plain :style="{color:tColor,borderColor:tColor}" class="f24 l-h1 f-c bs5" @click="auZdtx"> {{$t("self-fetch-addres.autofill")}}</button>
			</view>
		</view>
		<view class="b-b-e f-bt p32" v-if="cd.realtimeState!=3">
			<view class="f-g-0 wei">
				{{$t("self-fetch-addres.order_pickup_time")}}
			</view>
			<view class="f-g-1 f-x-e f-y-c" @click="selectTime">
				<view class="text-color-primary"  :style="{color:tColor}">
					<text v-if='yjrV.value'>{{yjrV.dayTit}} {{yjrV.title}}</text>
					<text v-else>		{{$t("self-fetch-addres.pick_up_order_now")}}</text>
				</view>
				<text class='iconfont icon-gengduo f28 ml5 c9'></text>
			</view>
		</view>
		<view class="b-b-e f-bt p32" v-if="sjxx.storeSetting && sjxx.storeSetting.takeEatType.length >1">
			<radio-group @change="radioChange" class="f-g-1 f-bt">
				<block v-for="(item, index) in itemArr" :key="item.value" >
					<label class="f-g-1 f-x-c" v-if="sjxx.storeSetting && sjxx.storeSetting.takeEatType.includes(item.display)">
						<view class="p-r">
							<view class="yuan f-c mr10 mt5" :style="{backgroundColor:item.value == Number(dl.diningType)?tColor:'',borderColor:item.value == Number(dl.diningType)?tColor:''}">
								<text class="iconfont f20 icon-gou wei" v-if="item.value == Number(dl.diningType)" :style="{color:item.value == Number(dl.diningType)?fontColor:''}"></text>
							</view>
							<radio class="rd" :value="item.value" :color="tColor" :checked="item.value == Number(dl.diningType)"
								style="transform:scale(0.9)" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</block>
			</radio-group>
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
			// current: {
			// 	type: Number,
			// 	default: 0
			// },
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
			itemArr(){
				let arr = []
				arr = [{
						value: 1,
						name: this.copywriting.dbName || this.$t("self-fetch-addres.takeout"),
						display: 2,
					},
					{
						value: 2,
						name: this.copywriting.zqName ||  this.$t("self-fetch-addres.dine_in"),
						display: 1,
					}
				]
				return arr
			},
			mrtxImg() {
				return `${this.onImgurl}out/adbg.jpg`
			},
		},
		watch: {
			mobile: {
				handler(newVal) {
					console.log(newVal)
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
			selectTime() {
				this.$emit('selectTime')
			},
			iMobile(){
				console.log('1212')
				this.$emit('auZdtx', this.phone)
			},
			auZdtx() {
				console.log('mobile', this.user.mobile)
				this.$emit('auZdtx', this.user.mobile)
				// this.params.mobile = this.user.mobile
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
