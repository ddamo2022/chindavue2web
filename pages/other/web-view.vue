<template>
	<view v-if="src">
		<web-view :src="src" @message="getMessage"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: ''
			}
		},
		onLoad(options) {
			this.util.setNT('')
			this.src = JSON.parse(decodeURIComponent(options.src));
			// console.log(JSON.parse(decodeURIComponent(options.src)))
		},
		methods: {
			getMessage(event) {
				uni.showModal({
					content: JSON.stringify(event.detail),
					showCancel: false
				});
			}
		}
	}
</script>

<style>

</style>
