<template>
	<view class="mh100 bf pb130">
		<nav-tab cname="" ifsize='32' v-model="tIdx" @changeTab='changeTab' :tabs='tabs'></nav-tab>
		<view class="f-raw f-x-bt p03">
			<view class="imgc bs10" v-for="(v,i) in list" :key='i' @click="yl(i)">
				<mg-img :src="v"></mg-img>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import MgImg from '@/components/common/my-img.vue'
	import navTab from '@/components/common/functionCmp/nav-tab.vue'
	export default {
		name: 'sjjs',
		components: {
			MgImg,
			navTab,
		},
		data() {
			return {
				info: {},
				list: [],
				tIdx: 0,
				tabs: [{
						name: 'Industry license'
					},
					{
						name: 'Business license'
					},
				],
			}
		},
		async onLoad(options) {
			this.info = JSON.parse(decodeURIComponent(options.info))
			this.changeTab(this.tIdx)
		},
		computed: {},
		methods: {
			changeTab(e) {
				if (this.tIdx == 0) {
					this.util.setNT('Industry license')
					this.list = this.info.tradeLicense.map(v => this.getImgS(v))
				} else if (this.tIdx == 1) {
					this.util.setNT('Business license')
					this.list = this.info.businessLicense.map(v => this.getImgS(v))
				}
			},
			yl(i) {
				this.util.preImg({
					idx: i,
					urls: this.list,
				})
			}
		},
		async created() {},
	}
</script>

<style scoped lang="scss">
	.imgc {
		width: 320rpx;
		height: 320rpx;
		margin-top: 30rpx;
	}
</style>
