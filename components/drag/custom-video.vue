<template>
	<view class="" :style="{marginTop:`${co.marginTop}${u}`,
		marginBottom:`${co.marginBottom}${u}`,
		marginLeft:`${co.marginLR}${u}`,
		marginRight:`${co.marginLR}${u}`}">
		<video class="w100" id="myVideo"  :style="{borderTopLeftRadius: co.tCircle + 'px',
	      borderTopRightRadius: co.tCircle + 'px',
	      borderBottomRightRadius: co.bCircle + 'px',
	      borderBottomLeftRadius: co.bCircle + 'px'}"
		   :src="co.imgUrlVideo && co.imgUrlVideo[0].img" 
		   @error="videoErrorCallback" 
		   :poster="co.imgUrl && co.imgUrl[0].img"  
		   object-fit="cover" controls 
			:autoplay="co.videoAutoplay && co.videoAutoplay==1 ? true : false" 
			:loop="co.videoLoop && co.videoLoop==1 ? true : false"
		   v-if="hasKp && co.type==1"></video>
		<video class="w100" id="myVideo" :style="{borderTopLeftRadius: co.tCircle + 'px',
	      borderTopRightRadius: co.tCircle + 'px',
	      borderBottomRightRadius: co.bCircle + 'px',
	      borderBottomLeftRadius: co.bCircle + 'px'}" 
		  :src="co.videoUrl"
		   @error="videoErrorCallback" 
		   controls :poster="co.imgUrl && co.imgUrl[0].img"
			object-fit="cover" 
			:autoplay="co.videoAutoplay && co.videoAutoplay==1 ? true : false"
			:loop="co.videoLoop && co.videoLoop==1 ? true : false"
			v-if="hasKp && co.type==3"></video>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'searchBox',
		props: {
			co: {
				type: Object,
				default: function() {
					return {
						icon: [{
							url: "",
						}],
						topMargin: 0,
						videocon: {
							links: "",
							title: "视频名"
						},
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
			}
		},
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				hasKp: state => state.config.hasKp,
			}),
		},
		methods: {
			videoErrorCallback(e) {
				console.log('e',e.target.errMsg)
				// uni.showModal({
				// 	content: e.target.errMsg,
				// 	showCancel: false
				// })
			},
			// webVideo(){
			// 	if(this.co.type=='2' && this.co.links.indexOf('.html') > -1){
			// 		this.go({
			// 			t: 1,
			// 			url: '/yb_wm/other/web-view?src=' + encodeURIComponent(JSON.stringify(this.co.links))
			// 		})
			// 	}
			// },
		},
		async created() {},
	}
</script>

<style scoped lang="scss">
</style>
