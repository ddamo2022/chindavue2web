<template>
	<view class="open" v-if="co && co.length">
		<mg-popup v-model="show" :close='false' :mask="true" :animation="false">
			<view class="tcggc h100v f-c-c">
				<view class="tcgg">
					<picLunbo-by :co='sw' u='rpx' :color='tColor'></picLunbo-by>
					<view @click="gbtc" class="tcbtm f-c"><text class="iconfont icon-guanbi1 cf"></text></view>
				</view>
			</view>
		</mg-popup>
	</view>
</template>
<script>
	import {
		mapActions,
		mapState
	} from 'vuex';
	import mgPopup from '@/components/common/popup.vue'
	import picLunboBy from '@/components/drag/picLunbo.vue';
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		name: 'open',
		props: {
			co: {
				type: Array,
				default: function() {
					return []
				}
			},
		},
		components: {
			mgPopup,
			picLunboBy,
		},
		data() {
			return {
				second: '',
				show: true,
				swiper: {
					imgUrl: [],
					height: '700',
					circle: '30'
				},
			};
		},
		mixins: [utilMixins],
		computed: {
			sw() {
				if (this.co) {
					for (let k in this.co) {
						this.co[k].url = this.co[k].link
					}
					let gssw = {
						imgUrl: this.co,
						height: '700',
						circle: '30'
					}
					return gssw
				} else {
					return this.swiper
				}
			},
		},
		methods: {
			gbtc() {
				this.show = false
			},
		},
	};
</script>
<style lang="scss" scoped>
	.countC {
		width: 140rpx;
		height: 55rpx;
		top: 80rpx;
		left: 30rpx;
		border-radius: 55rpx;
		background-color: rgba(147, 147, 147, 0.6);
	}

	.tcgg {
		width: 70%;
	}

	.tcbtm {
		margin-top: 20rpx;
	}

	.icon-guanbi1 {
		font-size: 68rpx;
	}
</style>