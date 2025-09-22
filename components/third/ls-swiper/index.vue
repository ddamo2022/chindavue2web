<template>
	<view class="wrap">
		<swiper class="swiper" :style="{height: height *2 + 'rpx'}" :autoplay="autoplay" :interval="interval"
			:duration="duration" :circular='loop' @change='change' :previous-margin='previousMargin + "rpx"'
			:next-margin='nextMargin + "rpx"' :current='current'>
			<swiper-item v-for="(item,index) in list" :key='index' @click="showcode(item)">
				<view v-if="list && list.length>0" class="item"
					:class="[!crown ? '' : current==index ? 'crown-active':'crown']">
					<!-- <image v-if="!slots" class="item-img" :class="[imgShadow?'imgShadow':'']" :src="item[imgKey]" :style="{ borderRadius: imgRadius + 'px',width:imgWidth}"
					 mode="aspectFill"></image> -->
					<!-- <slot v-else :data='item'></slot> -->

					<template v-if="item">
						<view class="bs20 imgc p-r"
							:style="{background:!item.styleSwitch? item.style ||'linear-gradient(95.39deg, rgb(233, 239, 244) -6.1%, #bcc9d0 98.38%)':'',height: height *2 + 'rpx'}">
							<view class="p-a wh" v-if="item.styleSwitch==1">
								<mg-img :src="item.styleSwitch==1?item.style:''"></mg-img>
							</view>
							<view class="p-r wh cf">
								<view class="p34 f-y-c">
									<!-- <view class="f-1 f32 wei">{{item.name}}</view>
									<view class="rdj b-d f26 l-n">VIP{{item.level}}</view> -->
								</view>
								<block v-if="item.level == user.vipCard.level">
									<view class="right p-a f22">
										{{$t("my-vip.permanently_valid")}}-{{user.vipCard && user.vipCard.name}}
									</view>
									<view class="bot p-a f22 t-r">{{user.expirationDate}}</view>

									<view class="p3 mt50">
										<!-- 	<view class="f40 l-n">{{item.condition}}1212</view> -->
										<view class="f30 wei">{{user.nickname}}</view>
										<view class="mt20 code1" style="background-color: #fff; padding: 2px 2px;"><mg-img :src='code1'></mg-img></view>
									</view>
								</block>
							</view>
						</view>
					</template>

					<!-- <view>{{item.name}}</view> -->
				</view>
			</swiper-item>
		</swiper>
		<view class="dots flex" :style="{bottom: bottom * 2 + 'rpx'}" v-if="dots">
			<view class="dot" :class="[current == i ? 'curr-dot' : '']" v-for="(d,i) in list" :key='i'>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => []
			},
			// 轮播图片key
			imgKey: {
				type: String,
				required: true
			},
			code1: {
				type: String,
				default: ''
			},
			// 高度
			height: {
				type: Number,
				default: 200
			},
			// 图片圆角
			imgRadius: {
				type: Number,
				default: 0
			},
			// 图片阴影
			imgShadow: {
				type: Boolean,
				default: false
			},
			// 前边距
			previousMargin: {
				type: Number,
				default: 0
			},
			// 后边距
			nextMargin: {
				type: Number,
				default: 0
			},
			// 图片宽度
			imgWidth: {
				type: String,
				default: '100%'
			},
			// 是否循环
			loop: {
				type: Boolean,
				default: false
			},
			// 自动播放
			autoplay: {
				type: Boolean,
				default: false
			},
			// 播放时间间隔
			interval: {
				type: Number,
				default: 2000
			},
			// 滑动速度
			duration: {
				type: Number,
				default: 600
			},
			// 显示指示点
			dots: {
				type: Boolean,
				default: false
			},
			// 轮播点下边距
			bottom: {
				type: Number,
				default: 10
			},
			// 卡片特效
			crown: {
				type: Boolean,
				default: false
			},
			slots: {
				type: Boolean,
				default: false
			},
			swcurrent: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				current: 0,
				// slots: false
			};
		},
		watch: {
			swcurrent(val) {
				this.current = val
				// console.log('swcurrent', val)
			},
			// 判断异步数据源，是否使用插槽自定义样式
			// list: {
			// 	handler(val) {
			// 		console.log(this.$slots)
			// 		if (val.length > 0 && this.$slots.default) {
			// 			this.slots = true
			// 		}
			// 	},
			// 	immediate: true,
			// }
		},
		methods: {
			change(event) {
				console.log(this.user)
				// console.log('change', event)
				let current = event.detail.current
				this.current = current
				this.$emit('change', this.list[current])
			},
			showcode(item){
 
				if(item.level == this.user.vipCard.level){
					console.log('34534')
					//this.$emit('showcode', this.list[current])
				    this.$emit('clickItem',item)
				}
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		position: relative;

		.crown {
			transform: scale(0.93, 0.85);
		}

		.item {
			height: 100%;
			transition: 1.2s;
		}

		.item-img {
			width: 100%;
			height: 100%;
		}

		.imgShadow {
			height: calc(100% - 10px);
			margin-bottom: 10px;
			box-shadow: 0 6px 6px rgba(0, 0, 0, .15);
		}

		.crown-active {
			transform: scale(1);
		}

		.dots {
			display: flex;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);

			.dot {
				width: 6rpx;
				height: 6rpx;
				border-radius: 50%;
				background-color: #D6D6D6;
				margin-right: 8rpx;
			}

			.curr-dot {
				height: 6rpx;
				width: 22rpx;
				border-radius: 6rpx;
				background-color: #fff;
			}
		}

	}

	.imgc {
		height: 360rpx;
	}

	.p34 {
		padding: 30rpx 40rpx;
	}

	.rdj {
		padding: 6rpx 16rpx;
		border-radius: 30rpx;
		border-color: #fff;
	}

	.right {
		top: 0;
		right: 0;
		padding: 6rpx 14rpx;
		// background: #A49F98;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 0 0 4rpx 0;
	}

	.bot {
		bottom: 0;
		width: 100%;
		padding: 10rpx 20rpx;
		background-color: rgba(0, 0, 0, 0.4)
	}
	
	.code1 {
		width: 100%;
		height: 100rpx;
	}
</style>