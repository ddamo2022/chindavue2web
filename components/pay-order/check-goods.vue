<template>
	<view v-if="dType=='ins' && dl.diningType==4">
		<view class="o-h" :style="{height:dl.goodsList && dl.goodsList.length>3 && !zkshow?'390rpx':'auto'}">
			<view class="wei f28 mb20 flex f-y-c"><view class="tline" :style="{background:tColor}"></view>{{$t("check-goods.to-be-ordered")}}</view>
			<view class="o-h">
				<view class="f-bt mb30" v-for="(v,i) in dl.goodsList" :key="i">
					<view class="f-g-0 mr10">
						<image :src="v.goods.logo" class="pro-img bs10" mode="scaleToFill"></image>
					</view>
					<view class="f-g-1 f-bt ml10">
						<view class="f-g-1 f-y-bt">
							<view class="f28 wei">{{v.goods |localizedName }}</view>
							<view class="f24">
								<text v-if="v.attrData.spec">{{v.attrData.spec}}</text>
								<text v-if="v.attrData.attr">{{v.attrData.attr}}</text>
								<text v-if="v.attrData.matal">{{v.attrData.matal}}</text>
							</view>
							<view class="f24" v-if="v.setMealData && v.setMealData.length">
								<view v-for="(cv,ci) in v.setMealData" :key="ci">{{cv.name}}*{{cv.num}}
									<text v-if="cv.attrData && cv.attrData.attr" class="ml10">[{{ cv.attrData.attr }}]</text>
									<text v-if="cv.attrData && cv.attrData.matal" class="ml10">[{{ cv.attrData.matal }}]</text>
								</view>
							</view>
							<view class="flex" v-if="v.discountLabel">
								<view class="goodLabel">{{v.discountLabel}}</view>
							</view>
							<view class="c9 f28 neutra-font">x{{v.num}}</view>
						</view>
						<view class="f-g-0 c3 wei neutra-font">
							<view class="line" :style="{background:tColor}"></view>
							฿{{ v.money }}
							<text class="f22 c9 t-d-l ml5 nowei" v-if="v.sellMoney && v.money && (Number(v.sellMoney)>Number(v.money))">฿{{ v.sellMoney }}</text>
						</view>
					</view>
				</view>
			</view>
			<block v-if="dl.prentGoods">
				<view class="wei f28 mb20 mt20 flex f-y-c"><view class="tline" :style="{background:tColor}"></view>{{$t("check-goods.ordered")}}</view>
				<view class="o-h">
					<view class="f-bt mb30" v-for="(v,i) in dl.prentGoods" :key="i">
						<view class="f-g-0 mr10">
							<image :src="v.logo" class="pro-img bs10" mode="scaleToFill"></image>
						</view>
						<view class="f-g-1 f-bt ml10">
							<view class="f-g-1 f-y-bt">
								<view class="f28 wei">{{v.name}}</view>
								<view class="f24">
									<text v-if="v.attrData.spec">{{v.attrData.spec}}</text>
									<text v-if="v.attrData.attr">{{v.attrData.attr}}</text>
									<text v-if="v.attrData.matal">{{v.attrData.matal}}</text>
								</view>
								<view class="f24" v-if="v.setMealData && v.setMealData.length">
									<view v-for="(cv,ci) in v.setMealData" :key="ci">{{cv.name}}*{{cv.num}}
										<text v-if="cv.attrData && cv.attrData.attr" class="ml10">[{{ cv.attrData.attr }}]</text>
										<text v-if="cv.attrData && cv.attrData.matal" class="ml10">[{{ cv.attrData.matal }}]</text>
									</view>
								</view>
								<view class="flex" v-if="v.discountLabel">
									<view class="goodLabel">{{v.discountLabel}}</view>
								</view>
								<view class="c9 f28 neutra-font">x{{v.num}}</view>
							</view>
							<view class="f-g-0 c3 wei neutra-font">฿{{ v.money }}
								<text class="f22 c9 t-d-l ml5 nowei"  v-if="v.sellMoney && v.money && (Number(v.sellMoney)>Number(v.money))">฿{{ v.sellMoney }}</text>
							</view>
						</view>
					</view>
					<view class="f-x-e" v-if="dl.payType==1">{{$t("check-goods.paid")}}：<span class="wei">฿{{dl.prentOrder.payMoney}}</span></view>
				</view>
			</block>
			<view class="f-g-1 f-bt mt10" v-if="dl.tableMoney>0">
				<view class="f-g-1 flex">
					<view class="f28 wei">{{dl.tableFormat || $t("check-goods.service-fee")}}</view>
					<view class="c9 f28 ml30">x{{dl.tableNum}}</view>
				</view>
				<view class="f-g-0 c3 wei neutra-font">฿{{ dl.tableMoney }}</view>
			</view>
		</view>
		<view class="f-g-1 f-c">
			<view @click="zkshow=!zkshow" v-if="dl.goodsList.length>3" class="f-c f26 l-h1 zhed">
				<view>{{zkshow? $t("check-goods.fold-all"): $t("check-goods.view-all")}}({{dl.goodsList.length}})</view>
				<text class="iconfont icon-top c3 ml5 f28" :class="{'xzdw':!zkshow}"></text>
			</view>
		</view>
	</view>
	<view v-else>
		<view class="o-h" :style="{height:  dl.goodsList &&  dl.goodsList.length>3 && !zkshow?'390rpx':'auto'}">
			<view class="f-bt mb30" v-for="(v,i) in dl.goodsList" :key="i">
				<view class="f-g-0 mr10">
					<image :src="v.goods.logo" class="pro-img bs10" mode="scaleToFill"></image>
				</view>
				<view class="f-g-1 f-bt ml10">
					<view class="f-g-1 f-y-bt">
						<view class="f28 wei">{{v.goods |localizedName }}</view>
						<view class="f24">
							<text v-if="v.attrData.spec">{{v.attrData.spec}}</text>
							<text v-if="v.attrData.attr">{{v.attrData.attr}}</text>
							<text v-if="v.attrData.matal">{{v.attrData.matal}}</text>
						</view>
						<view class="f24" v-if="v.setMealData && v.setMealData.length">
							<view v-for="(cv,ci) in v.setMealData" :key="ci">{{cv.name}}*{{cv.num}}
								<text v-if="cv.attrData && cv.attrData.attr" class="ml10">[{{ cv.attrData.attr }}]</text>
								<text v-if="cv.attrData && cv.attrData.matal" class="ml10">[{{ cv.attrData.matal }}]</text>
							</view>
						</view>
						<view class="flex" v-if="v.discountLabel">
							<view class="goodLabel">{{v.discountLabel}}</view>
						</view>
						<view class="c3 f28 neutra-font">x{{v.num}}</view>
					</view>
					<view class="f-g-0 c3 wei neutra-font">฿{{ v.money }}
						<text class="f22 c9 t-d-l ml5 nowei"  v-if="v.sellMoney && v.money && (Number(v.sellMoney)>Number(v.money))">฿{{ v.sellMoney }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="f-g-1 f-c">
			<view @click="zkshow=!zkshow" v-if="dl.goodsList.length>3" class="f-c f26 l-h1 zhed">
				<view>{{zkshow? $t("check-goods.fold-all"): $t("check-goods.view-all")}}({{dl.goodsList.length}})</view>
				<text class="iconfont icon-top c3 ml5 f28" :class="{'xzdw':!zkshow}"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import i18n from  '@/locale/index.js'
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		name: 'checkGoods',
		components: {

		},
		props: {
			dl: {
				type: Object,
				default: {}
			},
			pl: {
				type: Object,
				default: {}
			},
			dType: {
				type: String,
				default: () => 'out'
			}
		},
		filters: {
			localizedName(value) {
				const locale = i18n.locale; // 获取当前语言
				if (locale === 'en') {
					return value.name_en || value.name;
				} else if (locale === 'th') {
					return value.name_th || value.name;
				} else {
					return value.name;
				}
			}
		},
		computed: {
			...mapState(['sjxx']),
			...mapState({

			}),
		},
		data() {
			return {
				zkshow: false,
				yxdshow: false,
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.pro-img {
		width: 90rpx;
		height: 90rpx;
		flex-shrink: 0;
	}
	.tline{
		width: 6rpx;
		height: 28rpx;
		margin-right: 10rpx;
	}
</style>