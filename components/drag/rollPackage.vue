<template>
	<view class="rollPackage" :style="{
	      marginTop: co.marginTop + 'px',
	      marginBottom: co.marginBottom + 'px',
	      marginLeft: co.marginLR + 'px',
	      marginRight: co.marginLR + 'px',
	      backgroundColor: co.colorBg,
	      borderTopLeftRadius: co.tCircle + 'px',
	      borderTopRightRadius: co.tCircle + 'px',
	      borderBottomRightRadius: co.bCircle + 'px',
	      borderBottomLeftRadius: co.bCircle + 'px',
	    }">
		<view class="tit f-bt">
			<view class="f-g-1 f-y-c">
				<view class="f28 wei" :style="{ color: co.titCg, fontSize: `${co.titFontSize}px` }">
					{{ co.titWord }}
				</view>
			</view>
			<view class="f-g-0 iconfont icon-gengduo f24"></view>
		</view>
		<view class="body flex">
		      <view class="cp f-bt f28 f-c mr20" v-for="(v, i) in rl" :key="i">
		        <view class="f-g-1 t-c left">
		          <view class="wei f42 price neutra-font"><text class="f24">฿</text>{{v.price}}</view>
		          <view class="mt10 price f24 t-o-e">{{v.name}}</view>
		        </view>
		        <view class="btn f-g-0 f-c cf wei f26" @click="goRoll(v)">抢购</view>
		        <view class="tYuan"></view>
		        <view class="bYuan"></view>
		      </view>
		    </view>
	</view>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'rollPackage',
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
			rl: {
				type: Array,
				default: []
			},
		},
		data() {
			return {};
		},
		computed: {
			...mapState({
				dPoint: state => state.layout.orderCollect || {},
			})
		},
		methods: {
			goLink(v) {
				this.goUrl(v.url)
			},
			goRoll(v) {
				this.go({
					t: 1,
					url: `/pages/other/rollPackage/rolldl?id=${v.id}`
				})
			}
		},
	};
</script>
<style lang="scss" scoped>
	.rollPackage {
	  .el {
	    padding: 60rpx 0;
	  }
	  .desc {
	    font-size: 24rpx;
	  }
	
	  .tit {
		padding: 30rpx 20rpx;
	    column-gap: 16rpx;
	    font-size: 26rpx;
	  }
	  .body {
	    padding: 20rpx;
		padding-top: 0;
	    flex-wrap: nowrap;
	    overflow: hidden;
	    overflow-x: scroll;
	
	    .cp {
	      background: #fdf7eb;
	      width: 440rpx;
	      padding: 0 20rpx;
	      border-radius: 30rpx;
	      position: relative;
	      .left {
	        width: 200rpx;
	        border-right: 2rpx dashed #e0d1d1;
	        padding: 20rpx 0;
	      }
	      .price {
	        color: #F53C2A;
	      }
	      .tYuan{
	        position:absolute;
	        top:-4rpx;
	        right:150rpx;
	        width:20rpx;
	        height:20rpx;
	        background:#fff;
	        border-radius:50%;
	      }
	      .bYuan{
	        position:absolute;
	        bottom:-4rpx;
	        right:150rpx;
	        width:20rpx;
	        height:20rpx;
	        background:#fff;
	        border-radius:50%;
	      }
	    }
	    .btn {
	      margin-left: 20rpx;
	      background: #f95c28;
	      border-radius: 120rpx;
	      width: 120rpx;
	      height: 60rpx;
	    }
	  }
	}
</style>