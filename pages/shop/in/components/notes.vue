<template>
	<uni-popup ref="popup" type="center">
		<view class="bs20 bf">
			<view class="p3 cn">
				<view class="wei f32 f-c pb30">{{$t("in_goods_components.add_note")}}</view>
				<view class="bf9 bs10 wh p2">
					<textarea v-model="note" maxlength="50" class="w100 c6" style="height: 160rpx;"
						:placeholder="$t('in_goods_components.enter_note')" placeholder-class="f24"></textarea>
					<view class="f-x-e f24 c9">{{note.length}}<text class="m05">/</text>50{{$t("in_goods_components.characters")}}</view>
				</view>
				<view class="f-bt mt50 p03">
					<button type="primary" plain class="buy-now-btn f-g-1 bs60 f32"
						:style="{color:tColor,borderColor:tColor}" @click="close">{{$t("in_goods_components.cancel")}}</button>
					<button type="primary" class="add-cart-btn f-c f-g-1 ml20 bs60 f32"
						:style="{backgroundColor:tColor}" @click="save">{{$t("in_goods_components.confirm")}}</button>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		name: 'Notes',
		components: {

		},
		props: {
			visible: {
				type: Boolean,
				default: false
			},
		},
		computed: {

		},
		data() {
			return {
				note: '',
				loading: false,
			}
		},
		methods: {
			open(v) {
				if (v) {
					this.note = v
				}
				this.$refs['popup'].open()
			},
			close() {
				this.$refs['popup'].close()
			},
			save() {
				this.$emit('st', this.note)
				this.close()
			},
		}
	}
</script>

<style scoped lang="scss">
	.cn {
		width: 640rpx;
	}

	.m05 {
		margin: 0 5rpx;
	}

	.kjsr {
		margin: 35rpx 0;
		color: #8F8F8F;
	}

	.label {
		border: 1px solid #EFEFEF;
		padding: 8rpx 15rpx;
		margin: 0 20rpx 20rpx 0;
	}
</style>