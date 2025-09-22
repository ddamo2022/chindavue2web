<template>
	<view v-if="content" class="bf p23 mt20">
		<mg-rtext type='2' :content="content" />
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import mgRtext from '@/components/common/functionCmp/rich-text.vue'
	export default {
		name: 'xyzz',
		components: {
			mgRtext,
		},
		data() {
			return {
				loading: false,
				content: '',
			}
		},
		async onLoad(options) {
			await this.getConfig({
				ident: ["basicSetting"]
			})
			// await this.getSystem()
			if(options.p==1){
				this.util.setNT(this.basicSetting.agreementTitle)
			}else{
				this.util.setNT(options.t)
			}
			//1、用户服务协议，2、隐私权政策 /3关于我们、4、积分规则
			let c = ''
			switch (+options.p) {
				case 1:
					c = this.basicSetting.agreementCon
					break;
				case 2:
					c = this.system.basic_settings.privacy_agreement
					break;
				case 3:
					c = this.system.basic_settings.about_us
					break;
				case 4:
					c = this.inSet.ruleContent
					break;
				case 5:
					c = uni.getStorageSync('fwb');
					break;
				case 6:
					c = this.recharge.agreementContent
					break;
				case 7:
					c = this.birthdayGift.birthday.content
					break;
				case 8:
					c = this.birthdayGift.perfect.content
					break;
				case 9:
					c = this.fxsInfo.dealContent
					break;
			}
			this.content = c
			// console.log(options,this.system)
		},
		computed: {
			...mapState({
				system: state => state.system,
				basicSetting: state => state.config.basicSetting,
				recharge: state => state.config.storageVal,
				inSet: state => state.config.integralSetting,
				birthdayGift: state => state.config.birthdayGift,
			}),
			...mapState('dndc', ['fxsInfo']),
		},
		methods: {
			...mapActions(["getConfig"]),
		},
	}
</script>
<style scoped lang="scss">
</style>
