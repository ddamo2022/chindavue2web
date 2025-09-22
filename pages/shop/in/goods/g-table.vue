<template>
	<view v-if="showTable" class="tablec z9999 posi-f udlr">
		<view class="tcbg posi-a wh">
			<my-img
				:src="storeInfo && storeInfo.store && storeInfo.store.inStoreSetting && storeInfo.store.inStoreSetting.order && storeInfo.store.inStoreSetting.order.img || `${onImgurl}in/smdcbg.jpg`"></my-img>
		</view>
		<view class="posi-r h100 f-col">
			<view class="f-g-1 f-c-c cf" style="position: relative;">
				<view class="tctbt f40 p03">{{$t("g-table.welcome_to")}}</view>
				<view class="f-y-c">
					<!-- <view class="tcimg mr30">
						<my-img src="/static/images/common/ye.png"></my-img>
					</view> -->
					<view class="tctt">{{storeInfo.store.name}}</view>
				</view>
				 <view class="language-options" style="display: flex; justify-content: space-between; position: absolute; bottom: 0; left: 0; right: 0; padding: 10px;">
					<view @click="selectlanguage('zh')" class="language-item" :class="languageVal=='zh' ?'selectitem':''" style="flex: 1;text-align: center;">{{$t('modal.chinese')}}</view>
					<view @click="selectlanguage('en')" class="language-item" :class="languageVal=='en' ?'selectitem':''" style="flex: 1;text-align: center;">{{$t('modal.english')}}</view>
					<view @click="selectlanguage('th')" class="language-item" :class="languageVal=='th' ?'selectitem':''" style="flex: 1;text-align: center;">{{$t('modal.thai')}}</view>
				</view>
			</view>
			<view class="f-g-0 tbbd o-h p-r">
				<view class="p-a wh bf bs15 f-col tbbdc" :class="{totop:showTotop}">
					<view class="f-bt">
						<view class="w100 f36 c3 t-l mt20 wei">{{$t("g-table.please_select_dining_number")}}</view>
						<view class="f-g-0 f-y-c mt20">{{$t("g-table.table_number")}}：{{storeInfo.name}}</view>
					</view>
					<!-- <view class="f-y-c mt10">
						桌号：<text>{{storeInfo.tableInfo.typeName}}</text><text
							class="ml10">{{storeInfo.tableInfo.name}}</text>
						<text class="ml10"
							v-if="storeInfo.tableInfo.minNum && storeInfo.tableInfo.maxNum">{{storeInfo.tableInfo.minNum}}-{{storeInfo.tableInfo.maxNum}}人</text>
					</view> -->
					<view class="tbbdvc f-y-c f-w">
						<view @click="dcParr(i+1)" class="f-g-0 tbbdv f30 f-c" :class="{'bva':i+1==paIx}"
							:style="{borderColor:i+1==paIx?tColor:'',background:i+1==paIx?tColor:'',color:i+1==paIx?fontColor:''}"
							v-for="(v,i) in parr" :key='i'>{{v}}</view>
					</view>
					<view class="ljdc f-c b-l-f0f0 f30 cf" :style="{background:tColor,color:fontColor}" @click="ljdc">
						{{$t("g-table.start_ordering")}}
					</view>
				</view>
			</view>
			<view class="f-g-0 p3 f-c cf dbbq">
				<my-copy c="#fff"></my-copy>
			</view>

		</view>
		<my-modal :vs='true' :ismr="true" v-model="showxzrs" width="630rpx" :z-index="3000">
			<view class="bf bs10">
				<view class="p3 f30">
					<view class="t-c mb20">{{$t("g-table.please_enter_dining_number")}}</view>
					<my-input cname="p23" t='number' max="2" v-model="zdyrs" last='1'
						:ht='$t("g-table.number_of_people")' :pr='$t("g-table.please_enter")' />
				</view>
				<view class="f-row hlt" style="height: 100rpx;">
					<button hover-class='be' class="tcbtn f-1 bf f30 f-c c9"
						@click="showxzrs=false">{{$t("g-table.cancel")}}</button>
					<button :style="{color:tColor}" hover-class='be' class="tcbtn f-1 bf f30 f-c"
						@click="qdxzrs">{{$t("g-table.confirm")}}</button>
				</view>
			</view>
		</my-modal>
	</view>
</template>

<script>
	import MyImg from '@/components/common/my-img.vue'
	import MyModal from '@/components/common/modal.vue'
	import MyInput from '@/components/form/my-input.vue'
	import MyCopy from "@/pages/index/my/my-copy.vue"
	export default {
		name: 'gTable',
		components: {
			MyImg,
			MyModal,
			MyInput,
			MyCopy,
		},
		props: {
			showTable: {
				type: Boolean,
				default: false
			},
			storeInfo: {
				type: Object,
				default: () => {}
			},
		},
		computed: {

		},
		data() {
			return {
				showTotop: true,
				parr: ['1', '2', '3', '4', '5', '6', '7', '8', '9', this.$t("g-table.other")],
				paIx: 1,
				showxzrs: false,
				zdyrs: '',
				languageVal:this.$i18n.locale
			}
		},
		methods: {
			ljdc() {
				if (this.paIx == '') return this.util.message(this.$t("g-table.please_select_number_of_people"), 3)
				this.$emit('lc', this.paIx)
			},
			dcParr(i) {
				this.paIx = i
				if (i == 10) return this.showxzrs = true
			},
			qdxzrs() {
				if (this.zdyrs == '') return this.util.message(this.$t("g-table.please_enter_number_of_people"), 3)
				this.paIx = this.zdyrs
				this.$emit('lc', this.zdyrs)
			},
			close() {
				this.showTable = false
			},
			selectlanguage(value){
				uni.setLocale(value);
				this.$i18n.locale = value;
				console.log(value)
				this.languageVal=value;
				uni.setStorageSync('language', value);
			},
		}
	}
</script>

<style scoped lang="scss">
	.tablec {

		.tcbg {
			&::before {
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				// background: linear-gradient(0deg, hsla(0, 0%, 100%, 0), rgba(0, 0, 0, .8));
				background: rgba(0, 0, 0, .55);
			}
		}

		.tcimg {
			width: 100rpx;
			height: 100rpx;
		}

		.tctt {
			font-size: 60rpx;
		}

		.tctbt {
			margin-top: 40rpx;
		}

		.tbbd {
			height: 500rpx;
			margin: 0 30rpx;
			border-radius: 15rpx;
		}

		.dbbq {
			padding-bottom: 140rpx;
		}

		.tbbdc {
			padding: 0 30rpx;
			bottom: 0;
			transition: all 0.6s linear;
			transform: translateY(100%);
		}

		.totop {
			transform: none;
		}

		.tbbdvc {
			margin: 50rpx 0 30rpx 0;
		}

		.tbbdv {
			width: 106rpx;
			height: 72rpx;
			margin: 0 10rpx 40rpx 10rpx;
			border-radius: 78rpx;
			background: #F7F8FA;
		}
		
		.language-item{
			width: 106rpx;
			height: 72rpx;
			line-height:72rpx;
			background: #F7F8FA;
			color: #000000;
			margin-bottom: 72rpx;
			border-radius: 30rpx;
			margin-left: 20rpx;
		}
		.selectitem{
			background: rgb(177, 30, 35);
			color: rgb(255, 255, 255);
			border-color:rgb(177, 30, 35);
		}


		.bva {
			background: #FFF6D9;
			color: #fff;
			border: 2rpx solid #FFD343;
		}

		.ljdc {
			width: auto;
			background: #FFD343;
			height: 90rpx;
			border-radius: 90rpx;
		}

		.bqimg {
			width: 40rpx;
			height: 40rpx;
		}
	}
</style>