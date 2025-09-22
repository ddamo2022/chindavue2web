<template>
	<view class="bf">
		<jzz :nodata="true" :mygd='true' />
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import jzz from '@/components/common/jzz.vue'
	export default {
		name: 'order-index',
		components: {
			jzz,
		},
		data() {
			return {

			}
		},
		onLoad(options) {
			this.getSystem()
			this.util.setNT(this.$t("my-other.stay_tuned"))
		},
		computed: {},
		methods: {
			onClick() {
				this.$emit('click')
			}
		},
	}
</script>
<style scoped lang="scss">

</style>
