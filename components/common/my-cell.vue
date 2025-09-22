<template>
	<view @click="$emit('tab')" class="weui-cell" :class="[{'last':last},{'left0':isl},{'right30':isr},{'aligns':noc},cname]"
	 :style="[{background:bgc},sname]" :hover-class="hc?'weui-cell_active':''">
		<view class="f-g-0 f-c" :class="hdc">
			<view v-if='img' class="img o-h" :style="{width:w+'rpx',height:h+'rpx',borderRadius:brs,marginRight:imgr+'rpx'}">
				<mg-img :m='m' :src="img" />
			</view>
			<text v-if="iconn" class="iconfont mr30" :class="iconn"></text>
			<view v-if='ht' class="weui-label" :class="htc" :style="{width:hw+'rpx'}">{{ht}}</view>
			<slot name="hd"></slot>
		</view>
		<view class="f-1" :style="{minWidth:bdmw}">
			<view v-if='btt' :class="bttc">{{btt}}</view>
			<view v-if='bbt' class="mt10 c9 f24">{{bbt}}</view>
			<slot name='bd'></slot>
		</view>
		<view v-if="ft" class="c9" :class="ftc" :style="{color:color}">{{ft}}</view>
		<slot name='ft'></slot>
		<text v-if="arrow" class="iconfont icon-right c9 arrow ml5" :class="[ftc,ac]" :style="{color:acolor,fontSize:asize+'rpx'}"></text>
	</view>
</template>

<script>
	export default {
		name: 'mg-cell',
		props: {
			bgc: {
				type: String,
				default: ''
			},
			htc: '',
			last: '',
			cname: '',
			noc: '',
			sname: '',
			isl: '',
			isr: '',
			iconn: '',
			ht: '',
			hdc: '',
			hw: '',
			img: '',
			m: {
				type: String,
				default: 'aspectFill',
			},
			w: '',
			h: '',
			brs: '',
			imgr: '',
			bdmw: {
				type: String,
				default: '0',
			},
			btt: '',
			bttc: '',
			bbt: '',
			ft: '',
			ftc: '',
			color: '',
			arrow: '',
			ac: '',
			asize: '',
			acolor: '',
			hc: {
				type: String,
				value: '',
			},
			// last: {
			// 	type: String,
			// 	default: ''
			// },
			// cname: {
			// 	type: String,
			// 	default: ''
			// },
			// noc: {
			// 	type: String,
			// 	default: ''
			// },
			// sname: {
			// 	type: String,
			// 	default: ''
			// },
			// isl: {
			// 	type: String,
			// 	default: ''
			// },
			// isr: {
			// 	type: String,
			// 	default: ''
			// },
			// ht: {
			// 	type: String,
			// 	default: ''
			// },
			// hw: {
			// 	type: String,
			// 	default: ''
			// },
			// img: {
			// 	type: String,
			// 	default: ''
			// },
			// m: {
			// 	type: String,
			// 	default: 'aspectFill',
			// },
			// w: {
			// 	type: String,
			// 	default: ''
			// },
			// h: {
			// 	type: String,
			// 	default: ''
			// },
			// brs: {
			// 	type: String,
			// 	default: ''
			// },
			// btt: {
			// 	type: String,
			// 	default: ''
			// },
			// bttc: {
			// 	type: String,
			// 	default: ''
			// },
			// bbt: {
			// 	type: String,
			// 	default: ''
			// },
			// ft: {
			// 	type: String,
			// 	default: ''
			// },
			// ftc: {
			// 	type: String,
			// 	default: ''
			// },
			// color: {
			// 	type: String,
			// 	default: ''
			// },
			// arrow: {
			// 	type: String,
			// 	default: ''
			// },
		},
		data() {
			return {}
		},
		computed: {},
		methods: {
			maskTap() {
				this.$emit('input', false)
			}
		},
	}
</script>

<style scoped lang="scss">
	.weui-cell:after {
		display: block;
	}

	.img {
		width: 50rpx;
		height: 50rpx;
		margin-right: 20rpx;
	}

	.last:after {
		display: none;
	}

	.left0:after {
		left: 0rpx;
	}

	.right30:after {
		right: 30rpx;
	}

	.arrow {
		margin-right: -5rpx;
	}

	.aligns {
		align-items: flex-start
	}
</style>
