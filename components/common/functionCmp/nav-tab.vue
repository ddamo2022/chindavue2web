<template>
	<view v-if="type==1" class="navTabBox" :class="[cname]" :style="[sname]">
		<!-- 标题数量小于5 -->
		<view class="shortTab" v-if="tabs.length<=5&&!isscroll">
			<!-- 导航栏 -->
			<view class='navTab' :style="{height:height+'rpx'}">
				<view v-for="(item,index) in tabs" :key="index" :style="[{color:index==tabClick?color||'#000':ncolor,width:iwidth,fontSize:ifsize+'rpx'},index==tabClick?isname:'']"
				 class='navTabItem' :class="[icname]" @click='navClick(index)'>
					<text v-if="item.icon" class="iconfont mr15 f36" :class="item.icon" :style="{color:index==tabClick?item.color||color:''}"></text>
					<view class="p-r">{{item.name}}
						<text v-if="item.num" class="p-a c9 f24 onum">{{item.num}}</text>
						<view v-if="item.dot>0" class="dot p-a r0 f20 cf nowei f-c bsf">{{item.dot}}</view>
					</view>
				</view>
			</view>
			<!-- 下划线 -->
			<view v-if="isWidth>0" class="underlineBox" :style="{transform:`translateX(${isLeft}px)`,width:`${isWidth}px`}">
				<view class="underline" :style="{background:xhxjb||color||tColor}"></view>
			</view>
		</view>
		<!-- 标题数量大于5 开启长导航栏模式 -->
		<view class="longTab" v-if="tabs.length>5||isscroll">
			<scroll-view scroll-x="true" style="white-space: nowrap; display: flex" scroll-with-animation :scroll-into-view="toView">
				<view class="longItem" :data-index="index" :style="[{color:index==tabClick?color||'#000':ncolor,fontSize:ifsize+'rpx',height:height+'rpx',width:itw},index==tabClick?isname:'']"
				 :class="[icname]" v-for="(item,index) in tabs" :key="index" :id="'id'+index" @click="longClick(index)">{{item.name}}</view>
				<view class="underlineBox" :style="{transform:isscroll?`translateX(${100*tabClick}%)`:`translateX(${isLeft}px)`,width:itw}">
					<view class="underline" :style="{background:xhxjb||color||tColor,width:`${uw}rpx`}"></view>
				</view>
			</scroll-view>
		</view>
	</view>
	<view v-else class="navTabBox" :class="[cname]">
		<scroll-view class='ws-n p20 longTab' scroll-x='true' scroll-with-animation :scroll-into-view="toView">
			<view class="p-r longItem longItem2" v-for="(item,index) in tabs" :key="index" :style="{color:index==tabClick?color||tColor:ncolor,width:itw,}"
			 :class="[icname]" :id="'id'+index" @click="longClick(index)">
				<view class="f-c mt10">
					<view class="typeimg bf6 bsf">
						<mg-img :src="item.icon"></mg-img>
					</view>
				</view>
				<view :style="{height:height+'rpx',lineHeight:height+'rpx',}">{{item.name}}</view>
				<view class="p-a underlineBox b0" :style="{width:'100%',}">
					<view class="underline" :style="{background:index==tabClick?color||tColor:'',width:`${uw}rpx`}"></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'navTab',
		props: {
			nid: '',
			value: '',
			cname: '',
			sname: '',
			isname: '',
			height: {
				type: String,
				default: '90',
			},
			ifsize: {
				type: String,
				default: '30',
			},
			icname: {
				type: String,
				default: 'f26',
			},
			iwidth: {
				type: String,
				default: '100%',
			},
			color: '',
			ncolor: {
				type: String,
				default: '#000',
			},
			xhxjb: {
				type: String,
				default: '',
			},
			tabs: {
				type: Array,
				default: function() {
					return []
				}
			},
			type: {
				type: String,
				default: '1',
			},
			itw: {
				type: String,
				default: '20%',
			},
			uw: {
				type: String,
				default: '84',
			},
			isscroll: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				isLeft: 0, //导航栏下划线位置
				isWidth: 0, //每个导航栏占位
				toView: '',
				isLongWidth: 0
			};
		},
		mounted() {
			// 获取导航宽度
			// this.$nextTick(() => {
			setTimeout(() => {
				let selectorQuery = uni.createSelectorQuery()
					// #ifndef MP-ALIPAY
					.in(this);
				// #endif
				selectorQuery.select('.navTabBox').boundingClientRect((rects) => {
					if (rects) {
						// console.log(this.nid,rects)
						this.isWidth = this.iwidth == '100%' ? rects.width / this.tabs.length : uni.upx2px(this.iwidth.substring(0,
							this.iwidth.length - 3))
						this.isLongWidth = rects.width / 5
						//console.log(uni.upx2px(this.iwidth.substring(0,this.iwidth.length -3)),+(this.iwidth.substring(0,this.iwidth.length -3)*this.util.getSb().rate).toFixed(2))
					}
				}).exec();
				this.toView = 'id0'
			}, 10)
			// })
		},
		computed: {
			tabClick: {
				get() {
					if (this.tabs.length > 5 || this.isscroll) {
						this.isLeft = this.value * this.isLongWidth
					} else {
						this.isLeft = this.value * this.isWidth
					}
					if (this.type == 2 || this.tabs.length > 5) {
						let tempIndex = this.value - 2
						tempIndex = tempIndex <= 0 ? 0 : tempIndex
						this.toView = `id${tempIndex}`
					}
					return this.value
				},
				set(newVal) {
					this.$emit("input", newVal)
					//console.log(newVal)
				}
			}
		},
		methods: {
			// 导航栏点击
			navClick(index) {
				// this.$parent.currentTab = index 
				this.tabClick = index //设置导航点击了哪一个
				this.$emit('changeTab', index); //设置swiper的第几页
			},
			longClick(index) {
				this.tabClick = index //设置导航点击了哪一个
				this.$emit('changeTab', index); //设置swiper的第几页
				// this.$parent.currentTab = index //设置swiper的第几页
			}
		}
	}
</script>

<style lang="scss">
	.navTabBox {
		width: 100%;
		color: rgba(255, 255, 255, 0.50);
		background: #fff;

		.click {
			//font-size: 30rpx;
			color: #333;
		}

		.longTab {
			width: 100%;

			.longItem {
				width: 20%;
				height: 90rpx;
				display: inline-block;
				line-height: 90rpx;
				text-align: center;
			}

			.longItem2 {
				height: auto;
				line-height: normal;
			}

			.typeimg {
				width: 90rpx;
				height: 90rpx;
			}

			.underlineBox {
				height: 6rpx;
				width: 20%;
				display: flex;
				align-content: center;
				justify-content: center;
				transition: .2s;

				.underline {
					width: 84rpx;
					height: 6rpx;
					background-color: white;
				}
			}
		}

		.shortTab {
			width: 100%;

			.navTab {
				display: flex;
				width: 100%;
				height: 90rpx;
				position: relative;

				.navTabItem {
					display: flex;
					align-items: center;
					justify-content: center;
					// width: 100%;
				}
			}

			.underlineBox {
				height: 6rpx;
				display: flex;
				align-content: center;
				justify-content: center;
				transition: .2s;

				.underline {
					width: 84rpx;
					height: 6rpx;
					background-color: white;
				}
			}
		}

		.onum {
			left: 110%;
			top: 50%;
			transform: translateY(-50%);
			font-weight: normal;
		}

		.dot {
			background: #FF5F58;
			width: 30rpx;
			height: 30rpx;
			top: -10rpx;
			right: -13rpx;
		}
	}
</style>
