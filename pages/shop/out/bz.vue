<template>
	<view class="">
		<view class="p3">
			<view class="bf9 bs10 p2">
				<textarea v-model="note" maxlength="50" class="w100 c6" style="height: 160rpx;" :placeholder="$t('bz.please-enter-remarks')"
				 placeholder-class="f24"></textarea>
				<view class="f-x-e f24 c9">{{note.length}}<text class="m05">/</text>50{{$t("bz.characters")}}</view>
			</view>
			<view v-if="larr.length" class="kjsr">{{$t("bz.entry")}}</view>
			<view class="f-raw">
				<view @click="djnote(v)" class="label bs10 f-c c6 f26" v-for="(v,i) in larr" :key='i'>{{v}}</view>
			</view>
		</view>
		<view class="foot-btnc posi-r mt30">
			<button @click="save" :loading="loading" :disabled="loading" class="foot-btn b00 bs15" :style="{background:tColor,color:fontColor}"
			 hover-class="btnhc">{{$t("bz.submit")}}</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name: 'order-index',
		data() {
			return {
				note: '',
				loading: false,
				btncolor: '',
				type: '1',
				bz:'',
			}
		},
		onLoad(options) {
			this.util.setNT(this.$t("bz.order-notes"))
			this.note = options.note || ''
			this.btncolor = options.color
			this.type = options.type
			this.bz = options.bz
		},
		computed: {
			...mapState(['sjxx']),
			larr() {
				let ln = uni.getStorageSync('note') ? [uni.getStorageSync('note')] : []
				return ln.concat([])
			},
		},
		methods: {
			djnote(v) {
				let t = this.note + v + '，',
					last = this.note.substr(this.note.length - 1, 1)
				if (t.length > 50) {
					return this.util.message(this.$t("bz.upper-limit")+"50"+this.$t("bz.characters"), 3)
				}
				if (last == '，' || last == ',' || last == '') {
					this.note += v + '，'
				} else {
					this.note += '，' + v
				}

			},
			save() {
				this.loading = true
				let lastPage = this.util.getPage()
				lastPage.$vm.setNote(this.note)
				this.go({
					t: 4
				})
			},
		},
	}
</script>
<style>
	page {
		background: #fff;
	}
</style>
<style scoped lang="scss">
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
