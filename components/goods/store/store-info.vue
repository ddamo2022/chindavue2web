<template>
	<mg-popup v-model="show" :z-index="5000" position="top">
		<view class="gdmdxx o-y-s bf7" v-if="show">
			<view class="p3 p-r f40 c0 wei t-c">1</view>
			
		</view>
	</mg-popup>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import mgPopup from '@/components/common/popup.vue'
	// import utils from '@/common/utils.js'
	export default {
		name: 'mg-share',
		components: {
			mgPopup,
		},
		props: {
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
			type: {
				type: String,
				default: '1'
			},
			value: {
				type: Boolean,
				default: false
			},
			ptype: String,
			qlist: Array,
			sjqb: Array,
		},
		data() {
			return {
				loading: false,
				sjyhqArr: [],
				zkshow: false,
			}
		},
		computed: {
			show: {
				get() {
					return this.value;
				},
				set(newVal) {
					this.$emit("input", newVal)
				}
			},
		},
		watch: {
			
		},
		methods: {
			
		},
	}
</script>

<style scoped lang="scss">
	.gdmdxx {
		border-radius: 35rpx 35rpx 0 0;
		padding: 10rpx 30rpx 40rpx;

		.svbd {
			max-height: 900rpx;
		}

		.lbtn {
			font-size: 20rpx;
			color: #666;
			padding: 3rpx 25rpx;
			border: 1px solid #ddd;
			border-radius: 5rpx;
		}

		.lbtn2 {
			color: #FF5F2F;
			border-color: #F3D8DB;
		}

		.lbtn3 {
			color: #4BC436;
			border-color: #98ED8B;
		}
	}

	.dzic {
		width: 58rpx;
		height: 58rpx;
		background: #F2F3F5;

		.dzi {
			color: #5B688B;
		}

		.dd {
			background: #FFEFEA;
			padding: 3rpx 10rpx;
			top: -10%;
			right: -70%;
		}
	}
</style>
