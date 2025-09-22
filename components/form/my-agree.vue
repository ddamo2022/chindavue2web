<template>
	<view class="bf p-r" :class="[cname]">
		<checkbox-group @change="checkboxChange">
			<label class='f-y-c'>
				<block v-if='type==1'>
					<view class="flex f-y-c" v-if="p=='6'">
						<checkbox :checked="cbVal" class="weui-check" />
						<view class="yuan f-c mr10" :style="{backgroundColor:cbVal?color||tColor:'',borderColor:cbVal?color||tColor:''}">
							<text class="iconfont f20 icon-gou wei" v-if="cbVal" :style="{color:cbVal?fontColor:''}"></text>
						</view>
						<!-- <text class="iconfont mr10" :class="cbVal?'icon-gx':'icon-wgx'"
							:style="{color:cbVal?color:'#000'}"></text> -->
						<view class="f-nw f28 c0 f-y-c">
							{{$t("my-agree.i_have_read_and_agree")}}
							<navigator :url='`/pages/my/other/gywm?t=${title}&p=${p}`' class="weui-agree__link"
								:style="{color:color}">《{{title}}》</navigator>
						</view>
					</view>
					<view class="flex f-y-c" v-else>
						<!-- <checkbox :checked="cbVal" :color="color" style="transform:scale(0.7)" /> -->
						<checkbox :checked="cbVal" class="weui-check" />
						<view class="yuan f-c mr10 f-g-0" :style="{backgroundColor:cbVal?color||tColor:'',borderColor:cbVal?color||tColor:''}">
							<text class="iconfont f20 icon-gou wei" v-if="cbVal" :style="{color:cbVal?fontColor:''}"></text>
						</view>
						<!-- <text class="iconfont mr10" :class="cbVal?'icon-gx':'icon-wgx'"
							:style="{color:cbVal?color:''}"></text> -->
						<view class="f-nw f24">
							<text class="mr10" v-if="txt">{{txt}}</text>
								{{$t("my-agree.i_have_read_and_agree")}}
							<navigator :url='`/pages/my/other/gywm?t=${title}&p=${p}`' class="weui-agree__link"
								:style="{color:color}">《{{title}}》</navigator>
							<navigator v-if="titlet" :url='`/pages/my/other/gywm?t=${titlet}&p=${p}`'
								class="weui-agree__link" :style="{color:color}">《{{titlet}}》</navigator>
						</view>
					</view>
				</block>
				<block v-else>
					<checkbox :checked="cbVal" class="weui-check" />
					<view class="yuan f-c mr10" :style="{backgroundColor:cbVal?color||tColor:'',borderColor:cbVal?color||tColor:''}">
						<text class="iconfont f20 icon-gou wei" v-if="cbVal" :style="{color:cbVal?fontColor:''}"></text>
					</view>
					<!-- <text class="iconfont mr10" :class="cbVal?'icon-gx':'icon-gx'"
						:style="{color:cbVal?color:''}"></text> -->
					<view class="c9 f24">{{title}}</view>
				</block>
			</label>
		</checkbox-group>
	</view>
</template>
<script>
	import MgCell from '@/components/common/my-cell.vue'
	export default {
		components: {
			MgCell,
		},
		props: {
			txt: '',
			title: '',
			titlet: '',
			value: '',
			color: '',
			p: '',
			cname: '',
			sname: '',
			type: {
				type: String,
				default: '1',
			},
		},
		data() {
			return {}
		},
		computed: {
			cbVal: {
				get() {
					return this.value
				},
				set(newVal) {
					this.$emit("input", newVal)
				}
			}
		},
		methods: {
			checkboxChange(e) {
				this.cbVal = !this.cbVal
			}
		}
	}
</script>

<style scoped>
	.weui-cell {
		padding: 30rpx 40rpx 30rpx 0;
	}
	.yuan{
		width: 34rpx;
		height: 34rpx;
		border-radius: 50%;
		border: 2rpx solid #565656;
	}
</style>