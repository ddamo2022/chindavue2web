<template>
	<!-- 
	swiper中的transfrom会使fixed失效,此时用height="100%"固定高度; 
	swiper中无法触发mescroll-mixins.js的onPageScroll和onReachBottom方法,只能用mescroll-uni,不能用mescroll-body
	-->
	<!-- ref动态生成: 字节跳动小程序编辑器不支持一个页面存在相同的ref (如不考虑字节跳动小程序可固定值为 ref="mescrollRef") -->
	<mescroll-uni :ref="'mescrollRef'+i" :fixed="false" @init="mescrollInit" :down="downOption" @down="downCallback" :up="upOption"
	 @up="upCallback" @emptyclick="emptyClick">
		<!-- 数据列表 -->
		<slot></slot>
	</mescroll-uni>
</template>

<script>
	import utils from '@/common/utils.js'
	import MescrollMixin from "@/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/mescroll-uni/mescroll-uni.vue"
	export default {
		components: {
			MescrollUni
		},
		mixins: [MescrollMixin], // 注意此处还需使用MescrollMoreItemMixin (必须写在MescrollMixin后面)
		data() {
			return {
				downOption: {
					auto: false // 不自动加载 (mixin已处理第一个tab触发downCallback)
				},
				upOption: {
					doUpcallback: false, //自行添加的属性
					auto: false, // 不自动加载
					page: {
						num: 0,
						size: 10,
					},
					textLoading: '正在加载',
					// textNoMore: '加载完毕',
					empty: {
						use: false,
					}
				},
			}
		},
		props: {
			i: Number, // 每个tab页的专属下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
			index: { // 当前tab的下标 (除了支付宝小程序必须在这里定义, 其他平台都可不用写, 因为已在MescrollMoreItemMixin定义)
				type: Number,
				default () {
					return 0
				}
			},
		},
		methods: {
			/*下拉刷新的回调 */
			downCallback() {
				// console.log('下拉')
				// 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
				// console.log('downCallback')
				// this.mescroll.setPageNum(1)
				this.mescroll.resetUpScroll()
				// console.log('this.mescroll.resetUpScroll()')
				this.$emit('pullup', {
					sx: 1
				})
				// this.mescroll.endSuccess()
			},
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			upCallback(page) {
				// console.log('上拉加载',page)
				// setTimeout(() => {
				// 	this.mescroll.endSuccess(0);
				// }, 1000)
				this.$emit('pullup', {
					sl: 1
				})
			},
			//点击空布局按钮的回调
			emptyClick() {
				uni.showToast({
					title: '点击了按钮,具体逻辑自行实现'
				})
			}
		}
	}
</script>
