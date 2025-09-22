<template>
	<view v-if="!hasKp && co.state==1 && (co.numType ==1 || co.numType ==2 && type==2)" class="open">
		<block>
			<view class="posi-f wh t0" style="z-index:9998">
				<video v-if="co.openType==2" class="wh" id="myVideo" :src="co.videoUrl" object-fit="cover" autoplay :controls="false" :enable-progress-gesture="false"></video>
				<mg-img :src='co.url' v-else />
				<view @click="tg" class='posi-a f-c countC cf'>{{second}} 跳过</view>
			</view>
		</block>
	</view>
</template>
<script>
	import {
		mapActions,
		mapState
	} from 'vuex';
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		name: 'open',
		props: {
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
		},
		components: {
			
		},
		data() {
			return {
				second: '',
				show: false,
				type:1,
			};
		},
		mixins: [utilMixins],
		computed: {
			...mapState({
				hasKp: state => state.config.hasKp,
			})
		},
		methods: {
			...mapActions(["getConfig"]),
			gbtc() {
				this.show = false
				setTimeout(() => {
					this.tg()
				}, 800)
			},
			tg() {
				this.getConfig({
					key: 'hasKp',
					data: true,
				})
				clearInterval(this.dsq)
			},
		},
		created() {
			if(this.co.numType && this.co.numType==2){
				if(uni.getStorageSync('isNumType')){
					this.type = 1
				}else{
					uni.setStorageSync('isNumType', true)
					this.type = 2
				}
			}
			// console.log('open', this.co,this.hasKp)
			if (this.co.state == 1 && !this.hasKp) {
				this.second = +this.co.autoCloseTime || 5
				this.dsq = setInterval(() => {
					this.second--
					if (this.second <= 0) {
						this.tg()
					}
				}, 1000)
			} else {
				this.tg()
			}
		}
	};
</script>
<style lang="scss" scoped>
	.countC {
		width: 140rpx;
		height: 60rpx;
		bottom: 80rpx;
		right: 40rpx;
		border-radius: 55rpx;
		background-color: rgba(0, 0, 0, 0.2);
	}

	.tcgg {
		width: 70%;
	}

	.tcbtm {
		margin-top: 50rpx;
	}

	.iconx2 {
		font-size: 68rpx;
	}
</style>
