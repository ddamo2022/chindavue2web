<template>
	<view class="m2 mt40" v-if="copyright">
		<view class="flex f-c c9" :style="{color:c}">
			<view class="kf-img mr10" v-if="copyright.appImg">
				<image class="wh" :src="copyright.appImg" mode="">
				</image>
			</view>
			<view class="f24" v-if="copyright.weChat==1">{{copyright.name}}</view>
			<view v-if="copyright.name" class="f24" @click="util.makeTel(copyright.phone || '123456')" v-else-if="copyright.weChat==2">
				{{copyright.name}}
			</view>
			<view class="f24" @click="tz" v-else-if="copyright.weChat==3">{{copyright.name}}33</view>
		</view>
		<view class="flex f-c c9 mt10" :style="{color:c}">
			<view class="f24"  v-if="copyright.intro">{{copyright.intro}}</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		components: {

		},
		props: {
			styles: {
				type: Object,
				default: () => {}
			},
			c: {
				type: String,
				default: () => '#999'
			}
		},
		computed: {
			...mapState({
				copyright: state => state.layout.copyright || {},
			})
		},
		data() {
			return {

			}
		},
		methods: {
			tz() {
				uni.navigateToMiniProgram({
					appId: this.copyright.appId,
					complete(res) {
						console.log(res)
					}
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
	.kf-img {
		width: 38rpx;
		height: 38rpx;
	}
</style>