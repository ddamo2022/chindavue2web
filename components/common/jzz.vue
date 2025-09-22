<template>
	<view class="page__bd" :style="{background:bgcolor}">
		<block v-if='nodata'>
			<view class="no-data-tip" :style="[sname]">
				<!-- <image class='no-data-tipimg' :src='`../../static/tx/${imgn}.png`'></image> -->
				<view :style="{color:tcolor}">{{otext}}</view>
				<view v-if="ttext" :style="{color:tcolor}">{{ttext}}</view>
			</view>
		</block>
		<block v-else>
			<view class="weui-loadmore" v-if='!mygd'>
				<view class="weui-loading"></view>
				<view class="weui-loadmore__tips" style='margin:0;' :style="{color:tcolor}">{{$t('modal.loading')}}</view>
			</view>
			<view class="weui-loadmore" v-if="mygd">
				<view class='hx'></view>
				<view class="weui-loadmore__tips" :style="{color:tcolor}">{{$t('modal.loading_complete')}}</view>
				<view class='hx'></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'mg-img',
		props: {
			sname: Object,
			imgn: {
				type: String,
				default: 'zwdd'
			},
			bgcolor: '',
			mygd: {
				type: Boolean,
				default: false
			},
			tcolor: {
				type: String,
				default: ''
			},
			nodata: '',
			otext: {
				type: String,
				default: ''
			},
			ttext: {
				type: String,
				default: ''
			},
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped lang='scss'>
	.page__bd {
		background: #fff;
		font-size: 28rpx;
	}

	.weui-loadmore {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 20rpx;
	}

	.weui-loadmore__tips {
		color: #999;
		margin: 0 20rpx;
	}

	.hx {
		width: 100rpx;
		height: 2rpx;
		background: #e5e5e5;
	}

	.no-data-tip {
		padding: 0 0 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #999;
	}

	.no-data-tipimg {
		width: 480rpx;
		height: 480rpx;
		/* margin-bottom: 0rpx; */
	}
</style>
