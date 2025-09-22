<template>
	<view class="actions">
		<template v-if="!materialsBtn">
			<view class="jh f-c jhb" v-show="number" @tap.stop="minus">
				<text class='iconfont icon-jianhao f26 nowei c0'></text>
			</view>
			<!-- <text class='iconfont icon-jjian- f40 cd nowei' v-show="number" @tap.stop="minus"> -->
			</text>
			<view v-if="number && number>0" class="number neutra-font">{{ number }}</view>
			<!-- <text class='iconfont icon-tianjiagouwuche f42 nowei f-c' :style="{color:tColor}" @tap.stop="add"></text> -->
			<view class="jh f-c" :style="{background:tColor}" @tap.stop="add">
				<text class='iconfont icon-jiahao1 f26 nowei' :style="{color:fontColor}"></text>
			</view>
		</template>
		<template v-else>
			<view class="materials-box">
				<button type="primary" size="mini" :style="{backgroundColor:tColor,color:fontColor}" class="materials-btn"
					@tap.stop="$emit('materials')">{{$t("goods.select_specifications")}}</button>
				<view class="number-badge" v-show="number">
					<view class="number neutra-font" :style="{backgroundColor:tColor,color:fontColor}">{{ number }}</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		name: 'Actions',
		props: {
			number: {
				type: Number,
				default: 0
			},
			materialsBtn: {
				type: Boolean,
				default: false
			},
			product: {
				type: Object,
				default: () => {}
			}
		},
		methods: {
			add() {
				this.$emit('add', {
					g: this.product,
					addwz: 1,
				})
			},
			minus() {
				this.$emit('minus', {
					g: this.product,
					addwz: -1,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.actions {
		margin-right: 12rpx;
		display: flex;
		align-items: center;

		.add-btn,
		.minus-btn {
			width: 44rpx;
			height: 44rpx;
		}

		.number {
			width: 44rpx;
			height: 44rpx;
			margin: 0 20rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: $font-size-extra-lg;
			font-weight: normal;
		}

		.materials-box {
			position: relative;
			display: flex;

			.materials-btn {
				border-radius: 50rem !important;
			}

			.number-badge {
				z-index: 4;
				position: absolute;
				right: -16rpx;
				top: -14rpx;
				background-color: $bg-color-white;
				border-radius: 100%;
				width: 1.1rem;
				height: 1.1rem;
				display: flex;
				align-items: center;
				justify-content: center;

				.number {
					font-size: 20rpx;
					flex-shrink: 0;
					// background-color: $color-primary;
					color: $bg-color-white;
					width: 0.9rem;
					height: 0.9rem;
					line-height: 0.9rem;
					text-align: center;
					border-radius: 100%;
				}
			}
		}
	}
	.jh{
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
	}
	.jhb{
		border: 2rpx solid #ddd;
	}
</style>
