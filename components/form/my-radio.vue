<template>
	<radio-group @change="radioChange" v-model="radioVal">
		<view v-if="rtype==1" class="f-raw">
			<label class="weui-cell mr-r1i noafter" v-for="(item, index) in arr" :key="index" :style="[rsname]">
				<view class="mr10">
					<radio :value="item.value" :checked="item.value == radioVal" class="weui-check" />
					<view class="yuan f-c" :style="{backgroundColor:item.value == radioVal?color||tColor:'',borderColor:item.value == radioVal?color||tColor:''}">
						<text class="iconfont f20 icon-gou wei" v-if="item.value == radioVal" :style="{color:item.value == radioVal?fontColor:''}"></text>
					</view>
					<!-- <text class="iconfont f40" :class="item.value == radioVal?'icon-gx':'icon-wgx'" :style="{color:item.value == radioVal?color||tColor:''}"></text> -->
				</view>
				<view>{{item.name}}</view>
			</label>
		</view>
		<view v-else-if="rtype==2">
			<label v-for="(item, index) in arr" :key="index">
				<mg-cell isr='1' :btt="item.name" :bttc='`c3 ${bttc}`' cname="p253" :last="last||index==arr.length-1">
					<block v-if="ranktype==1">
						<view slot='ft' class="f-y-c">
							<radio :value="item.value" :checked="item.value == radioVal" class="weui-check" />
							<text class="iconfont f40" :class="item.value == radioVal?'icon-gx':'icon-wgx'" :style="{color:item.value == radioVal?color||tColor:''}"></text>
						</view>
					</block>
					<block v-else>
						<view slot='hd' class="f-y-c mr30">
							<radio :value="item.value" :checked="item.value == radioVal" class="weui-check" />
							<view class="yuan f-c" :style="{backgroundColor:item.value == radioVal?color||tColor:'',borderColor:item.value == radioVal?color||tColor:''}">
								<text class="iconfont f20 icon-gou wei" v-if="item.value == radioVal" :style="{color:item.value == radioVal?fontColor:''}"></text>
							</view>
							<!-- <text class="iconfont f40" :class="item.value == radioVal?'icon-gx':'icon-wgx'" :style="{color:item.value == radioVal?color||tColor:''}"></text> -->
						</view>
					</block>
				</mg-cell>
			</label>
		</view>
	</radio-group>
</template>
<script>
	import MgCell from '@/components/common/my-cell.vue'
	export default {
		components: {
			MgCell,
		},
		props: {
			arr: '',
			value: '',
			color: '',
			rtype: {
				type: String,
				default: '1',
			},
			rsname: Object,
			ranktype: {
				type: String,
				default: '1',
			},
			bttc: {
				type: String,
				default: '',
			},
			last: {
				type: String,
				default: '',
			},
		},
		data() {
			return {
				items: [],
				current: ''
			}
		},
		computed: {
			radioVal: {
				get() {
					return this.value
				},
				set(newVal) {
					this.$emit("input", newVal)
					//console.log(newVal)
				}
			}
		},
		methods: {
			radioChange(e) {
				this.radioVal = e.detail.value
				this.$emit('change', e.detail.value)
				//console.log(e.detail.value,this.radioVal)
			}
		}
	}
</script>

<style scoped>
	.mr-r1i {
		padding: 30rpx 40rpx 30rpx 0;
	}
	.yuan{
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		border: 2rpx solid #565656;
	}
</style>
