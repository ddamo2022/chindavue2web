<template>
	<view class="">
		<!-- <nav-tab cname="fixedtop" v-model="aIdx" @changeTab='changeTab' :tabs='tabs'></nav-tab> -->
		<view class="pt150">
			<i-default :imgn="6" v-if="!dataList || dataList.length<=0" />
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	// import navTab from '@/components/common/functionCmp/nav-tab.vue'
	import iDefault from '@/components/common/default.vue'
	import jzz from '@/components/common/jzz.vue'
	export default {
		name: 'order-index',
		components: {
			// navTab,
			iDefault,
			jzz,
		},
		data() {
			return {
				aIdx: 0,
				tabs: [{
					name: '已使用',
				}, {
					name: '已失效',
				}],
				params: {
					page: 1,
					size: 10,
					type: 2,
				},
				dataList:[],
			}
		},
		onLoad(options) {
			this.getSystem()
			this.util.setNT('获卡记录')
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
