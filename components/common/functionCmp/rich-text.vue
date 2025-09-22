<template>
	<view v-if="type==1&&co.html" class='bf p23' :style="{
		margin:`${co.marginTop}${u} ${co.marginLR}${u} ${co.marginBottom}${u}`,
		borderRadius:co.circle+u,
		background:co.colorBg,
		}">
		<rich-text class="wbba" :nodes="nodes"></rich-text>
	</view>
	<!-- #ifndef MP-ALIPAY -->
	<rich-text  class="wbba o-h" v-else-if="type==2" :nodes="nodes"></rich-text>
	<!-- #endif -->
	<!-- #ifdef MP-ALIPAY -->
	<view v-else-if="type==2" class="o-x-h">
		<u-parse :content="nodes" @preview="preview" @navigate="navigate" />
	</view>
	<!-- #endif -->
	<!-- <rich-text class="wbba o-h" v-else-if="type==2" :nodes="nodes"></rich-text> -->
	<u-parse v-else-if="type==3" :content="nodes" @preview="preview" @navigate="navigate" />
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import uParse from '@/components/uParse/src/wxParse.vue'
	export default {
		name: 'searchBox',
		components: {
			uParse,
		},
		props: {
			type: {
				type: String,
				default: '1'
			},
			co: {
				type: Object,
				default: function() {
					return {
						richText: "",
						topMargin: 0,
					}
				}
			},
			u: {
				type: String,
				default: 'px'
			},
			color: {
				type: String,
				default: ''
			},
			content: {
				type: String,
				default: ''
			},
		},
		data() {
			return {

			}
		},
		computed: {
			nodes() {
				if (this.type == 1) {
					// return this.co.html.replace(/\<p class="ql-align-center/gi,
					// 		'<p style="text-align:center" class="ql-align-center')
					// 	.replace(/\<img/gi, '<img style="max-width:100%;height:auto"')
				} else {
					// #ifndef H5 || MP-TOUTIAO || MP-ALIPAY
						return  this.content.replace(/<img[^>]*>/gi, function (match, capture) {
						   return match.replace(/style=|alt\s*?=\s*?([‘"])[\s\S]*?\1/ig, 'style="width:100%;height:auto;"')
						})
					// #endif
					// #ifdef  MP-ALIPAY
						return this.content.replace(/style=[\'\"]?([^\'\"]*)[\'\"]?/gi,
							'style="max-width:100%;height:auto;"')
					// #endif
					// #ifdef  MP-TOUTIAO
						return this.content.replace(/style=[\'\"]?([^\'\"]*)[\'\"]?/gi,
						'style="width:100%;height:auto;"')
					// #endif
					// #ifdef H5
						if(this.content.indexOf('alt') > -1){
							return  this.content.replace(/<img[^>]*>/gi, function (match, capture) {
							   return match.replace(/alt\s*?=\s*?([‘"])[\s\S]*?\1/ig, 'style="width:100%;height:auto;"')
							})
						}else{
							return  this.content.replace(/<img[^>]*>/gi, function (match, capture) {
							   return match.replace(/style\s*?=\s*?([‘"])[\s\S]*?\1/ig, 'style="width:100%;height:auto;"')
							})
						}
					// #endif
					// return this.content.replace(/style=[\'\"]?([^\'\"]*)[\'\"]?/gi,
					// 	'style="width:100%;height:auto;"')
				}
			},
		},
		methods: {
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				uni.showModal({
					content: "点击链接为：" + href,
					showCancel: false
				})
			}
		},
		async created() {
			// console.log(this.co.html)
		},
	}
</script>

<style scoped lang="scss">
	@import url("../../uParse/src/wxParse.css");
</style>
