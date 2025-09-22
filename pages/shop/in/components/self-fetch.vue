<template>
	<view class="bf bdr">
		<view class="f-bt p2 f-y-c" v-if="dl.tables && dl.tables.id">
			<view class="flex c6 f-y-c">
				<text class="iconfont icon-diancan f34 c6 mr10"></text>
				<view class="f28">{{dl.tables.name}}</view>
			</view>
			<view class="f28 c6" v-if="dl.tables.people">{{dl.tables.people}}{{$t('goods.people')}}</view>
		</view>
		<view class="f-bt f-y-c f-bt pb20 pt20" v-if="dl.store && dl.store.inStoreSetting && dl.store.inStoreSetting.style!=1">
			<view v-for="(item, index) in itemArr" :key="item.value" @click="radioChange(item)"
				class="f-g-1 item f-x-c f-y-c p-r"
				:style="{borderColor:index == current?tColor:'',background:index == current?`rgba(${cTR(tColor)},0.1)`:''}">
				<text class="iconfont f48 c0" :class="item.icon"></text>
				<view class="f30 ml20 wei c0">{{item.name}}</view>
				<block v-if="index == current">
					<view class="sjx p-a" :style="{borderTopColor:tColor}"></view>
					<view class="iconfont icon-gou cf p-a"></view>
				</block>
			</view>
		</view>

		<!-- <view class="b-b-e f-bt p32 f-y-c f-bt">
			<view class="f-g-0">就餐类型：</view>
			<view class="f-g-1 f-x-e">
				<radio-group @change="radioChange" class="f-g-1 flex f-x-e">
					<block v-for="(item, index) in itemArr" :key="item.value">
						<label class="f-g-0 f-x-c mr30">
							<view>
								<radio :value="item.value" :color="tColor" :checked="index === current"
									style="transform:scale(0.9)" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</block>
				</radio-group>
			</view>
		</view> -->
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		name: 'SelfFetch',
		components: {

		},
		props: {
			dl: {
				type: Object,
				default: {}
			},
		},
		computed: {
			...mapState(['sjxx']),
			...mapState({
				copywriting: state => state.layout.copywriting,
			}),
			itemArr() {
				let arr = []
				arr = [{
						value: 0,
						name: this.copywriting.zqName,
						icon: 'icon-catering',
					},
					{
						value: 1,
						name: this.copywriting.dbName,
						icon: 'icon-iconset0316',
					}
				]
				return arr
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
				phone: '',
				current: 0,
			}
		},
		mixins: [utilMixins],
		methods: {
			radioChange(e) {
				if(this.current == +e.value) return
				this.current = +e.value
				this.$emit('radioChange', +e.value)
			},
		}
	}
</script>

<style scoped lang="scss">
	.bdr {
		border-radius: 20rpx;
	}

	.item {
		margin-left: 20rpx;
		margin-right: 20rpx;
		border: 2rpx solid #e5e5e5;
		border-radius: 10rpx;
		padding: 10rpx 0;
	}

	.sjx {
		top: 0;
		right: 0;
		width: 0;
		height: 0;
		border-top: 40rpx solid #e5e5e5;
		border-left: 40rpx solid transparent;
	}

	.icon-gou {
		top: 0;
		right: 2rpx;
		font-size: 18rpx;
	}
</style>