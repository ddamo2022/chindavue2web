<template>
	<view class="">
		<view class="p2">
			<view class="p32 f-y-c bf bs20">
				<input class="f-1 mr30 srk f30" v-model.trim="dhm" placeholder="请输入秘钥" />
				<text @tap="cleanKey" class="iconfont icon-yx f42" style="color: #CBCBCB;"></text>
			</view>
		</view>
		<view class="foot-btnc">
			<button @click="dhcx" :loading="loading" class="foot-btn f30 bf" :style="{background:!dhm?'#999':tColor}">{{'确认兑换'}}</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'dhm',
		components: {
			
		},
		data() {
			return {
				dhm: '',
				loading: false,
				showyhq: false,
				dhloading: false,
				dhmInfo: {},
			}
		},
		onLoad(options) {
			this.getSystem()
			this.util.setNT('兑换礼品卡')
		},
		computed: {},
		methods: {
			cleanKey() {
				this.dhm = ''
			},
		},
	}
</script>
<style scoped lang="scss">

</style>
