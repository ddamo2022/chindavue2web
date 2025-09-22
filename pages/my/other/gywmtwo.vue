<template>
	<view class="mh100">
		<view class="gyhead posi-r">
			<view class="wh" :style="{background:tColor}"></view>
			<view class="posi-a t270 wh">
				<view class="m03">
					<view class="bf mb20 bs20 p3 minhe">
						<view class="iconwidth bs10">
							<mg-img :src="user && user.applylogo"></mg-img>
						</view>
						<!-- <view class="f-c c0 f32 mt90 f26 c3">{{system.name}}</view> -->
						<view class="f28 c6 mt30">
							<mg-rtext type='2' :content="basicSetting.aboutUs" />
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="posi-f b0 w100" style="height: 100rpx;bottom:70rpx" @click="xcxbb"></view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import mgRtext from '@/components/common/functionCmp/rich-text.vue'
	export default {
		name: 'gywm',
		components: {
			mgRtext,
		},
		data() {
			return {
				loading: false,
				content: '',
				systemData: '',
			}
		},
		async onLoad(options) {
			await this.getConfig({
				ident: ["basicSetting"]
			})
			this.util.setNT(this.$t("my-other.about_us"))
			console.log(this.basicSetting)
		},
		computed: {
			...mapState({
				basicSetting: state => state.config.basicSetting,
			}),
		},
		methods: {
			...mapActions(["getConfig"]),
			xcxbb() {
				uni.showModal({
					title: this.$t("my-other.version_number"),
					content: '20240126'
				})
			},
		},
	}
</script>
<style scoped lang="scss">
	// @import url("../../../components/uParse/src/wxParse.css");

	.gyhead {
		width: 100%;
		height: 300rpx;
	}

	.t270 {
		top: 100rpx;
	}

	.iconwidth {
		width: 120rpx;
		height: 120rpx;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
		//margin-top: -90rpx;
	}

	.minhe {
		min-height: 800rpx;
		margin-top: 60rpx;
	}
</style>
