<template>
	<view class="uni-navbar">
		<view :class="{'uni-navbar--fixed': fixed,'uni-navbar--shadow':border,'uni-navbar--border':border}" :style="{'background':bg||`rgba(255,255,255,${uropcity})`}"
		 class="uni-navbar__content">
			<uni-status-bar v-if="statusBar" />
			<view v-if="urbd" :style="{color:color}" class="uni-navbar__header uncv">
				<view class="header-l f-g-0 p02 f-y-c">
					<view v-if="isleft" class="urlc f-row" :style="{background:`rgba(255, 255, 255,${uriconopcity})`}">
						<view @click="back" class="f-1 posi-r f-c">
							<text class="iconfont" :class="[leftcn]" :style="{color:uropcity>=1?color:'#000',fontSize:size+'rpx'}" />
						</view>
						<view class="urlcsx"></view>
						<view @click="more" class="f-1 posi-r f-c">
							<text class="iconfont" :class="[rightcn]" :style="{color:uropcity>=1?color:'#000',fontSize:size+'rpx'}" />
						</view>
					</view>
					<view v-else-if="isHome" class="f-row" :style="{background:`rgba(255, 255, 255,${uriconopcity})`}">
						<view @click="goHome" class="f-1 posi-r f-c ml10">
							<text class="iconfont" :class="[leftcn]" :style="{color:uropcity>=1?color:'#000',fontSize:size+'rpx'}" />
						</view>
					</view>
					<slot name="left" />
				</view>
				<view v-if="title.length" class="f-g-1 t-c wei f30 uncv" :class="[{'uni-navbar__header-container':isleft}]" :style="{color:uropcity>=1?'':'#fff',opacity:isleft?uropcity:''}">{{ title }}</view>
				<view v-else class="uni-navbar__header-container f-c">
					<slot />
				</view>
				<view class="uni-navbar__header-btns uncv" @tap="onClickRight">
					<view v-if="rightIcon.length" class="uncv">
						<text class="iconfont" :class="[rightIcon]" :style="{color:color,fontSize:size+'rpx'}" />
					</view>
					<!-- 优先显示图标 -->
					<view v-if="rightText.length&&!rightIcon.length" class="uni-navbar-btn-text uncv">{{ rightText }}</view>
					<slot name="right" />
				</view>
			</view>
			<slot v-else></slot>
		</view>
		<view v-if="fixed&&ispr" class="uni-navbar__placeholder">
			<uni-status-bar v-if="statusBar" />
			<view class="uni-navbar__placeholder-view" />
		</view>
	</view>
</template>

<script>
	import uniStatusBar from './uni-status-bar.vue'
	export default {
		name: 'UniNavBar',
		components: {
			uniStatusBar,
		},
		props: {
			urbd: {
				type: Boolean,
				default: true
			},
			title: {
				type: String,
				default: ''
			},
			isleft: {
				type: Boolean,
				default: true
			},
			isHome: {
				type: Boolean,
				default: true
			},
			isright: {
				type: Boolean,
				default: false
			},
			leftcn: {
				type: String,
				default: 'iconleft',
			},
			rightcn: {
				type: String,
				default: 'iconshx',
			},
			rightText: {
				type: String,
				default: ''
			},
			leftIcon: {
				type: String,
				default: ''
			},
			rightIcon: {
				type: String,
				default: ''
			},
			fixed: {
				type: [Boolean, String],
				default: false
			},
			color: {
				type: String,
				default: '#000000'
			},
			bg: {
				type: String,
				default: ''
			},
			statusBar: {
				type: Boolean,
				default: false
			},
			shadow: {
				type: Boolean,
				default: true
			},
			border: {
				type: Boolean,
				default: true
			},
			size: {
				type: String,
				default: '42'
			},
			ispr: {
				type: Boolean,
				default: true
			},
			uropcity: {
				type: [String, Number],
				default: '0'
			},
			uriconopcity: {
				type: [String, Number],
				default: '0.5'
			},
			leftArr: {
				type: Array,
				default: function() {
					return []
				}
			},
			customback: {
				type: Boolean,
				default: false
			},
			custommore: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				showMore: false,
			}
		},
		computed: {

		},
		methods: {
			back() {
				if (!this.customback) {
					this.go({
						t: getCurrentPages().length == 1 ? 6 : 4,
						url: '/pages/index/index'
					})
				} else {
					this.$emit('on-back')
				}
			},
			goHome(){
				this.go({
					t: 6,
					url: '/pages/index/index'
				})
			},
			more() {
				if (!this.custommore) {
					this.showMore = true
				} else {
					this.$emit('on-more')
				}
			},
			gogn(i) {
				this.go({
					t: 6,
					url: this.gnarr[i].url
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.uni-navbar__content {
		display: block;
		position: relative;
		width: 100%;
		overflow: hidden
	}

	.uni-navbar__content .uncv {
		line-height: 44px
	}

	.uni-navbar__header {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 44px;
		line-height: 44px;
		font-size: 16px
	}

	.header-l {
		min-width: 60rpx;
	}

	.uni-navbar__header-btns {
		display: inline-flex;
		flex-wrap: nowrap;
		flex-shrink: 0;
		padding: 0 20rpx;
	}

	.uni-navbar__header-btns:last-child {
		width: 30px
	}

	.uni-navbar__header-container {
		width: 100%;
		padding-right: 75px;
		/* #ifdef H5 */
		padding-right: 0;
		/* #endif */
	}

	.uni-navbar__placeholder-view {
		height: 44px
	}

	.uni-navbar--fixed {
		position: fixed;
		top: 0;
		z-index: 9999
	}

	.uni-navbar--shadow {
		box-shadow: 0 1px 6px #ccc
	}

	.uni-navbar--border:after {
		position: absolute;
		z-index: 3;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc
	}

	.urlc {
		position: relative;
		width: 186rpx;
		height: 32px;
		padding: 5 0;
		border-radius: 32px;
	}

	.urlc:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 200%;
		height: 200%;
		border: 1px solid #ddd;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scale(.5, .5);
		transform: scale(.5, .5);
		border-radius: 32px;
	}

	.urlcsx {
		width: 1px;
		height: 18px;
		background: #ddd;
		margin: auto 0;
	}

	.urgnc {
		width: 22%;
		height: 120rpx;
		border-radius: 24rpx;
		background: rgba(0, 0, 0, 0.4);
		margin-right: 4%;
		margin-bottom: 4%;

		&:nth-of-type(4n) {
			margin-right: 0;
		}
	}
</style>
