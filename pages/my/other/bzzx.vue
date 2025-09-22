<template>
	<view class="bf m3 bs20">
		<block v-for="(v,i) in arr" :key="i">
			<view class="bf">
				<my-cell @tab="goDl(v)" :last="i==arr.length-1" isr='1' :btt='v.name' bttc="c3" arrow="1" cname="p23" />
			</view>
		</block>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import MyCell from '@/components/common/my-cell.vue'
	import jzz from '@/components/common/jzz.vue'
	export default {
		name: 'bzzx',
		components: {
			MyCell,
			jzz,
		},
		data() {
			return {
				arr: [],
			}
		},
		async onLoad(options) {
			this.util.setNT(this.$t("my-other.help_center"))
			let {
				data
			} = await this.util.request({
				'url': this.api.bzzx,
			})
			this.arr = data.list
		},
		computed: {},
		methods: {
			goDl(v) {
				uni.setStorageSync('fwb', v.body)
				this.go({
					t: 1,
					url: `/pages/my/other/gywm?t=${v.name}&p=5`
				})
			}
		},
	}
</script>
<style scoped lang="scss">
</style>
