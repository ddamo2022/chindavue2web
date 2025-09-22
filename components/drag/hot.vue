<template>
	<view class="hot o-h" :style="{
			margin:`${co.marginTop}${u} ${co.marginLR}${u} ${co.marginBottom}${u}`,
			borderRadius:`${co.tCircle}${u} ${co.tCircle}${u} ${co.bCircle}${u} ${co.bCircle}${u}`,
		}">
		<mg-img cname="imgha" :src="co.img" m="widthFix"></mg-img>
		<view v-for="(v, i) in co.divStyles" :key="i" class="react" @click="goTo(v)" :style="{
				width: v.width+ 'rpx',
				height: v.height+ 'rpx',
				left: '10rpx',
				top: '10rpx',
				transform: 'translateX(' + v.sX+ 'rpx) translateY(' + v.sY+ 'rpx)'
			}">
		</view>
	</view>
</template>
<script>
	import utils from '@/common/utils.js'
	export default {
		name: 'hot',
		props: {
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
			u: {
				type: String,
				default: 'px'
			},
		},
		data() {
			return {};
		},
		methods: {
			goTo(v) {
				// console.log(v, utils.getType(v.url))
				if (!v.url.params) {
					v.url = JSON.parse(v.url)
				}
				this.goUrl(v.url, v)
			}
		},
	};
</script>
<style lang="scss" scoped>
	.hot {
		// width: 100%;
		height: auto;
		position: relative;
		transform: translate3d(0, 0, 0);
	}

	.react {
		border: 1px solid #38f;
		background: rgba(51, 136, 255, 0.5);
		color: #ffffff;
		position: absolute;
		user-select: auto;
		opacity: 0;
	}
</style>
