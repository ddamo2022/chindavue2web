<template>
	<view class="navBg">
		<view class="navItem curs" v-for="(v, i) in navList" :key="i" @click="changeNav(i)">
			<view class="navImg" v-if="styles.goodsNav == 1">
				<mg-img :src="`${onImgurl}layout/goodtab.png`"></mg-img>
			</view>
			<view class="navName" :class="{ active: taIx == i }">{{ v.name }}</view>
			<view class="navLine" v-if="taIx == i"></view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'g-nav',
		props: {
			styles: {
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
			return {
				imgTab: '/static/images/layout/goodtab.png',
				taIx: 0,
				navList: [{
						value: 1,
						name: "分类一",
					},
					{
						value: 2,
						name: "分类二",
					},
					{
						value: 3,
						name: "分类三",
					},
					{
						value: 4,
						name: "分类四",
					},
					{
						value: 5,
						name: "分类五",
					},
				],
			};
		},
		methods: {
			changeNav(i) {
				if (i == this.taIx) return;
				this.taIx = i;
			},
		},
	};
</script>
<style lang="scss" scoped>
	.navBg {
		padding: 24rpx 24rpx 0 24rpx;
		overflow: hidden;
		white-space: nowrap;

		.navItem {
			display: inline-block;
			margin-right: 44rpx;
			color: #454545;
			font-weight: 500;
			font-size: 24rpx;
			line-height: 1;
			text-align: center;

			.navImg {
				width: 50rpx;
				height: 50rpx;
				margin: 0 auto;
			}

			.navName {
				height: 40rpx;
				margin-bottom: 8rpx;
				line-height: 40rpx;
				font-size: 28rpx;
			}

			.active {
				font-weight: 700;
			}

			.navLine {
				width: 28rpx;
				height: 6rpx;
				margin: 0 auto;
				background: #d9a776;
				border-radius: 2rpx;
			}
		}
	}
</style>
