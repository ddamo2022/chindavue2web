<template>
	<view v-show="vs?value:true">
		<view @touchmove.stop="" @click="maskTap" class="i-modal-mask" :class="{ 'i-modal-mask-show':value}" :style="{zIndex: zIndex}"></view>
		<view @touchmove.stop="" :style='{width: `${width}`,zIndex: zIndex}' class="i-modal" :class="{'i-modal-show':value}">
			<slot v-if="ismr"></slot>
			<view v-else class='f-c-c p23 bf'>
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'popup',
		props: {
			className: {
				type: String,
				default: ''
			},
			vs: {
				type: Boolean,
				default: false
			},
			value: {
				type: Boolean,
				default: false
			},
			width: {
				type: String,
				default: '70%'
			},
			ismr: {
				type: Boolean,
				default: false
			},
			zIndex: {
				type: Number,
				default: 999
			},
			close: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {

			}
		},
		computed: {},
		methods: {
			maskTap() {
				if (!this.close) return
				this.$emit('input', false)
			}
		},
	}
</script>

<style scoped lang="scss">
	.i-modal-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1000;
		transition: all 0.2s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.i-modal-mask-show {
		opacity: 1;
		visibility: visible;
	}

	.i-modal {
		position: fixed;
		top: 50%;
		left: 50%;
		/* width: 85%; */
		z-index: 1000;
		overflow: hidden;
		// border-radius: 20rpx;
		transition: all 0.2s;
		transform: translate3d(-50%, -50%, 0) scale(0.6);
		opacity: 0;
		visibility: hidden;
	}

	.i-modal-show {
		visibility: visible;
		transform: translate3d(-50%, -50%, 0) scale(1);
		opacity: 1;
	}
</style>
