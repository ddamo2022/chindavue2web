<template>
	<view class="o-dl-main h100" v-if="bdl && bdl.id">
		<view class="bf p2 mt20">
			<view class="f-g-1 f28 c3 f-y-bt">
				<view class="flex f-y-c">
					<view class="f-g-1 wei f34">{{$t("refunddl.refund_reason")}}</view>
				</view>
				<view class="f-bt mt30 b-be" v-if="oset && oset.onRefundReason ==1 && oset.drawback">
					<radio-group class="f-g-1" @change="radioChange">
						<block v-for="(v, i) in oset.drawback" :key="i">
							<label class="f-bt mb20 f-g-1" v-if="v">
								<view class="f-g-1 f28">{{v}}</view>
								<view class="f-g-0">
									<radio :value="v" :color="tColor" :checked="i == current" />
								</view>
							</label>
						</block>
						<label class="f-bt mb20 f-g-1">
							<view class="f-g-1 f28">{{$t("refunddl.other_reason")}}</view>
							<view class="f-g-0">
								<radio value="0" :color="tColor" :checked="i == current" />
							</view>
						</label>
					</radio-group>
				</view>
			</view>
			<view class="f-g-1 f28 c3" v-if="selectType ==0">
				<view class="flex f-y-c">
					<view class="f-g-1 wei f34">{{$t("refunddl.other_reason")}}</view>
				</view>
				<view class="mt30">
					<textarea class="f28 f-g-1 bf6 w100 p2 bs10" v-model="reason" :placeholder="$t('refunddl.refund_remarks_optional')"
						style="height: 140rpx" />
				</view>
			</view>
		</view>
		<view class="o-foot p2">
			<view class="o-btn f-c f32 wei mb20 c0" :style="{background:tColor}" @click="qxdd">{{$t('refunddl.apply_refund')}}</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		components: {
			// uniNavBar,
			// dlrefund,
			// DlService
		},
		data() {
			return {
				status: '',
				bdl: {},
				changedColor: 'transparent',
				selectType: '0',
				reason:'',
			}
		},
		async onLoad(option) {
			this.id = option.id
			this.getDl(option.id)
		},
		computed: {
			...mapState({
				oset: state => state.config.orderSetting,
			}),
		},
		methods: {
			async getDl(id) {
				let {
					data
				} = await this.util.request({
					'url': `${this.api.wmxd}/${id}`,
					method: 'get'
				})
				this.bdl = data
			},
			radioChange(e) {
				this.selectType = e.detail.value
				if (e.detail.value == '0') {
					this.reason = ''
				} else {
					this.reason = e.detail.value
				}
			},
			async qxdd(e) {
				if (!this.reason) {
					this.util.message(this.$t('refunddl.select_refund_reason'), 3)
					return
				}
				let {
					msg
				} = await this.util.request({
					'url': `${this.api.sqtk}/${this.bdl.subOrder.id}`,
					method: 'POST',
					ct: 1,
					data: {
						refundCause: this.reason,
						storeId: this.bdl.subOrder.storeId,
					}
				})
				this.util.message(msg, 1)
				setTimeout(() => {
					this.go({
						t: 4
					})
				}, 500)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.o-dl-main {
		padding-bottom: 140rpx;

		.o-foot {
			background: #f5f7f9;
			position: fixed;
			bottom: 0;
			width: 100%;

			.o-btn {
				background: #f5f5f5;
				height: 80rpx;
				width: 100%;
				border-radius: 40rpx;
			}
		}
	}
</style>