<template>
	<view class="titles o-h" :style="{
			marginTop: co.marginTop + u,
			marginBottom: co.marginBottom + u,
			marginLeft: co.marginLR + u,
			marginRight: co.marginLR + u,
			borderRadius: `${co.tCircle}${u} ${co.tCircle}${u} ${co.bCircle}${u} ${co.bCircle}${u}`,
		}">
		<view class="titles-c f-y-c" :style="{ background: co.colorBg, }">
			<view @click="goLink(co.upLoad1)" class="f-1 f-y-c" :class="{'f-x-c':co.wordStatus=='center'}">
				<view v-if="co.upLoad1.img" class="img f-g-0 mr10">
					<mg-img :src='co.upLoad1.img'></mg-img>
				</view>
				<view class="f32 wei l-n" :style="{ color: co.upLoad1.colorWord }">{{ co.upLoad1.text }}</view>
			</view>
			<view @click="goLink(co.upLoad2)" class="f-y-c">
				<view class="f24 c9" :style="{ color: co.upLoad2.colorWord }">{{ co.upLoad2.text }}</view>
				<view v-if="co.upLoad2.img" class="img ml10">
					<mg-img :src='co.upLoad2.img'></mg-img>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'titles',
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
			goLink(v) {
				this.goUrl(v.url)
			},
		},
	};
</script>
<style lang="scss" scoped>
	.titles {
		&-c {
			padding: 15rpx 20rpx;

			.img {
				width: 48rpx;
				height: 48rpx;
			}
		}
	}
</style>
