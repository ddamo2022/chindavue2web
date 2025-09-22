<template>
	<view v-if="info.id" class="mvh100 bf p3 pb130">
		<view class="ptc p23 p-r mb20">
			<view class="f30 f-x-bt">
				<text>{{$t("lineup.my_number")}}</text>
				<text>{{info.type && info.type.name}}-{{info.serialNum}}</text>
			</view>
			<view class="mt10 f-x-bt" :style="{color:tColor}">
				<view class="f50 wei">{{info.serialNum}}</view>
				<view class="f-g-0" :class="{'c9':info.state>2}">{{info.statusFormat}}</view>
			</view>
			<block v-if="info.state==1 || info.state==4">
				<view class="f38 mt5" :style="{color:tColor}">
					{{$t("lineup.call_number")}} {{info.jiaohao}}
				</view>
				<view class="f38">
					{{$t("lineup.waiting_tables_ahead")}}<text :style="{color:tColor}">
						{{info.waitingTable}}</text>{{$t("lineup.table")}}
				</view>
			</block>
			<mg-cell cname="p30 mt20" isl="1">
				<view slot='bd' class="f26 c6">
					<view v-if="info.state!=2" class="flex mt10">
						<view class="flex-0 leftw">{{$t("lineup.already_waited")}}：</view>
						<view class="flex-1">{{info.waitingTime}}{{$t("lineup.minutes")}}</view>
					</view>
					<view class="flex mt10" v-if="info.contact">
						<view class="flex-0 leftw">{{$t("lineup.phone_number")}}：</view>
						<view class="flex-1">{{hideNum(info.contact)}}</view>
					</view>
					<view class="flex mt10">
						<view class="flex-0 leftw">{{$t("lineup.take_number_time")}}：</view>
						<view class="flex-1">{{info.created_at}}</view>
					</view>
					<view class="flex mt10">
						<view class="flex-0 leftw">{{$t("lineup.take_number_channel")}}：</view>
						<view class="flex-1">{{info.scoreFormat}}</view>
					</view>
					<view class="flex mt10">
						<view class="flex-0 leftw">{{$t("lineup.take_number_store")}}：</view>
						<view class="flex-1">{{info.store && info.store.name}}</view>
					</view>
				</view>
			</mg-cell>
			<!-- <view class="c6 f24 tips pt20">
				<div class="mb10 f-y-c"><text class="iconfont iconjfgz mr10" :style="{color:tColor}"></text>商家提醒：</div>
				<book-text type='2' :content="info.notice" />
			</view> -->
			<!-- <view class="p-a w100 ptcdb">
				<mg-img m='aspectFill' :src="`${onImgurl}/img/pdbg.png`"></mg-img>
			</view> -->
		</view>
		<view v-if="info.state==1 || info.state==2" class="foot-btnc bf" @click='qxpd'>
			<view class="f22 t-c c6 mb20" v-if="info.state==2">
				{{$t("lineup.you_have_passed")}}，{{$t("lineup.click_button_to_requeue")}}
			</view>
			<button class="foot-btn"
				:style="{background:'transparent',border:'1px solid '+tColor,color:tColor}">{{info.state==1?$t("lineup.cancel_queue"):$t("lineup.requeue")}}</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import mgInput from '@/components/form/my-input.vue'
	import bookText from '@/components/common/functionCmp/rich-text.vue';
	import utils from '@/common/utils.js'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		name: 'pdxq',
		components: {
			mgInput,
			bookText,
		},
		data() {
			return {
				info: {},
				jdtz: '2',
				stateArr: [this.$t("lineup.in_queue"), this.$t("lineup.dined"), this.$t("lineup.passed"), this.$t(
					"lineup.cancelled")],
			}
		},
		async onLoad(options) {
			console.log(options)
			if (options && options.storeId) {
				this.id = options.storeId
			} else if ((options.q && decodeURIComponent(options.q).indexOf('storeId') > -1)) {
				let q = decodeURIComponent(options.q)
				this.id = utils.getUrlParams(q)['storeId']
			} else if ((options.q && decodeURIComponent(options.q).indexOf('id') > -1)) {
				let q = decodeURIComponent(options.q)
				console.log(q)
				console.log(utils.getUrlParams(q)['id'])
				this.id = utils.getUrlParams(q)['id']
			} else if (options && options.id) {
				this.id = options.id
			}
			await this.getLoginInfo()
			if (!await this.checkLogin()) return

			this.getLayout()
			this.getInfo()
		},
		mixins: [utilMixins],
		computed: {
			// pdState() {
			// 	return this.stateArr[+this.info.state - 1]
			// },
		},
		methods: {
			hideNum(v) {
				return utils.hideNum(v)
			},
			async getInfo() {
				let {
					data
				} = await this.util.request({
					url: `${this.api.pdxd}/${this.id}`,
					mask: this.$t("lineup.loading"),
				})
				this.info = data
				this.util.setNT(this.$t("lineup.queue_details"))
			},
			qxpd() {
				if (this.info.state == 1) {
					uni.showModal({
						title: this.$t("lineup.prompt"),
						content: this.$t("lineup.confirm_cancel_queue"),
						cancelText: this.$t("lineup.cancel_queue"),
						confirmText: this.$t("lineup.continue_queue"),
						success: async res => {
							if (res.cancel) {
								let data = await this.util.request({
									url: `${this.api.pdxd}/${this.id}`,
									method: 'DELETE',
									mask: this.$t("lineup.cancelling"),
								})
								if (data) {
									this.util.message(data && data.msg, 1)
									utils.swnb(1000)
								}
							}
						}
					})
				} else {
					this.go({
						t: 3,
						url: '/pages/my/lineup/pdqh?storeId=' + this.info.storeId
					})
				}
			},
			tzkg(e) {
				console.log(e)
			},
		},
	}
</script>

<style scoped lang="scss">
	.ptc {
		box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
		border-radius: 15rpx;
	}

	.ptcdb {
		left: 0;
		bottom: -28rpx;
		height: 37rpx;
	}

	.leftw {
		min-width: 150rpx;
	}

	.tz {
		border-left: none;
		border-right: none
	}

	.tips {
		line-height: 40rpx;
	}
</style>