<template>
	<view class="main mt20">
		<scroll-view class="gleft" scroll-y scroll-with-animation :scroll-top="st">
			<class-left1 :cs="cs" :sx="sx" :cd="cd" @handMenu="handMenu"></class-left1>
		</scroll-view>
		<scroll-view class="gright" scroll-y scroll-with-animation  v-if="gs && (dType == 'out' && gs.goodsStyle == 2 || dType == 'ins' && gs.goodsInStyle == 2)">
			<view class="wrp">
				<view id="ads" class="mb20" v-if="swiper && swiper.imgUrl.length">
					<picLunbo-by :co='swiper' u='rpx' :color='tColor'></picLunbo-by>
				</view>
				<view class="glist class3" v-for="(v, i) in cgs" :key="i" :id="`g-${v.id}`">
					<view class="gname">{{ v.name }}</view>
					<view class="gwrp">
						<view class="goods bs20 b-s f-bt" v-for="(cv, ci) in v.goodsList" :key="ci" @tap="handdl(cv)">
							<view class="image3 f-g-0">
								<image :src="cv.logo" mode="aspectFit" class="image bs10"></image>
								<view  v-if='cv.goodsInventory<=0' class="p-a ysq f-c b0 cf w100 f22">已售罄</view>
								<view class="p-a ysq f-c t0 cf w100 f22 bs5" :style="{background:`rgba(${cTR(cv.mark.bgColor || '#BABABA')},0.8)`}" v-if="cv.mark && cv.mark.name && cv.mark.bgColor">{{cv.mark.name}}</view>
							</view>
							<view class="content p2">
								<view class="name">{{ cv.name }}</view>
								<view class="description" v-if="cv.desc">{{ cv.desc }}</view>
								<view class="flex f20">
									<view class="mr10 mb10 neutra-font" v-if="orSet.salesShow==1 && (dType == 'out' || dType == 'ins')">销量:{{cv.sales || 0}}</view>
								</view>
								<view class="labels" v-if="cv.label && cv.label.length">
									<view class="label"
										:style="{background:`rgba(${cTR(label.bgColor || '#BABABA')},0.1)`,color:label.bgColor || '#333',}"
										v-for="label in cv.label" :key="label.id">{{ label.name }}</view>
								</view>
								<view class="labels">
									<view class="label goodlb" v-if="cv.min && cv.min>1" :style="{color:tColor,borderColor:tColor}">最少购买{{cv.min}}份</view>
									<view class="label goodlb" v-if="cv.orderlimitSwitch && cv.orderlimit" :style="{color:tColor,borderColor:tColor}">每单限购{{cv.orderlimit}}份</view>
									<view class="label goodlb" v-if="cv.userlimitSwitch && cv.userlimit" :style="{color:tColor,borderColor:tColor}">每人限购{{cv.userlimit}}份</view>
									<view class="label goodlb" v-if="cv.daylimitSwitch && cv.daylimit" :style="{color:tColor,borderColor:tColor}">每天限购{{cv.daylimit}}份</view>
								</view>
								<view class="flex" v-if="cv.discountMinPrice">
									<view class="vipLabel f-bt f22 l-h1">
										<view class="f-g-1 left wei">฿
											<text class="f26 neutra-font">{{cv.discountMinPrice}}</text>
											<text v-if="cv.isSpec">起</text>
										</view>
										<view class="f-g-0 right">会员价</view>
									</view>
								</view>
								<view class="flex mb10" v-if="cv.equityCardPrice">
									<view class="vipLabel f-bt f22 l-h1">
										<view class="f-g-1 left wei">
											{{user.equityCard && user.equityCard.equityCard && user.equityCard.equityCard.name}}
										</view>
										<view class="f-g-0 right f22">
											<text class="neutra-font">专享฿{{cv.equityCardPrice}}</text>
											<text v-if="cv.isSpec">起</text>
										</view>
									</view>
								</view>
								<view class="labels" v-if="cv.discounts && cv.discounts.length">
									<view class="label goodlb" :style="{color:'#FF3131',borderColor:'#FF3131'}" v-for="(lv,li) in cv.discounts" :key="li">{{lv.discountLabel}}</view>
								</view>
								<view class="price" v-if="cv.isShow!=1">
									<view v-if="cv.price" class="f-g-1 t-o-e neutra-font">
										฿{{ cv.price}}
										<text v-if="cv.isSpec" class="f24 c9 nowei ml10">起</text>
									</view>
									<view v-if="sjxx.businessStatus!=3 && cv.goodsInventory!=0" class="f-g-0">
										<actions v-if="cv.price"
											:materials-btn="cv.isSpec"
											@materials="handdl(cv)" :number="gcnum(cv.id)" @add="handcar"
											@minus="handcar" :product="cv" />
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<scroll-view class="gright" scroll-y scroll-with-animation :scroll-top="str" @scroll="psroll" v-else>
			<view class="wrp">
				<view id="ads" class="mb20" v-if="swiper && swiper.imgUrl.length">
					<picLunbo-by :co='swiper' u='rpx' :color='tColor'></picLunbo-by>
				</view>
				<view class="glist class3" v-for="(v, i) in cs" :key="i" :id="`g-${v.id}`">
					<view class="gname">{{ v.name }}</view>
					<view class="gwrp">
						<view class="goods bs20 b-s f-bt" v-for="(cv, ci) in v.goodsList" :key="ci" @tap="handdl(cv)">
							<view class="image3 f-g-0">
								<image :src="cv.logo" mode="aspectFit" class="image bs10"></image>
								<view  v-if='cv.goodsInventory<=0' class="p-a ysq f-c b0 cf w100 f22">已售罄</view>
								<view class="p-a ysq f-c t0 cf w100 f22 bs5" :style="{background:`rgba(${cTR(cv.mark.bgColor || '#BABABA')},0.8)`}" v-if="cv.mark && cv.mark.name && cv.mark.bgColor">{{cv.mark.name}}</view>
							</view>
							<view class="content p2">
								<view class="name">{{ cv.name }}</view>
								<view class="description" v-if="cv.desc">{{ cv.desc }}</view>
								<view class="flex f20">
									<view class="mr10 mb10 neutra-font" v-if="orSet.salesShow==1 && (dType == 'out' || dType == 'ins')">销量:{{cv.sales || 0}}</view>
								</view>
								<view class="labels" v-if="cv.label && cv.label.length">
									<view class="label"
										:style="{background:`rgba(${cTR(label.bgColor || '#BABABA')},0.1)`,color:label.bgColor || '#333',}"
										v-for="label in cv.label" :key="label.id">{{ label.name }}</view>
								</view>
								<view class="labels">
									<view class="label goodlb" v-if="cv.min && cv.min>1" :style="{color:tColor,borderColor:tColor}">最少购买{{cv.min}}份</view>
									<view class="label goodlb" v-if="cv.orderlimitSwitch && cv.orderlimit" :style="{color:tColor,borderColor:tColor}">每单限购{{cv.orderlimit}}份</view>
									<view class="label goodlb" v-if="cv.userlimitSwitch && cv.userlimit" :style="{color:tColor,borderColor:tColor}">每人限购{{cv.userlimit}}份</view>
									<view class="label goodlb" v-if="cv.daylimitSwitch && cv.daylimit" :style="{color:tColor,borderColor:tColor}">每天限购{{cv.daylimit}}份</view>
								</view>
								<view class="flex" v-if="cv.discountMinPrice">
									<view class="vipLabel f-bt f22 l-h1">
										<view class="f-g-1 left wei">฿
											<text class="f26 neutra-font">{{cv.discountMinPrice}}</text>
											<text v-if="cv.isSpec">起</text>
										</view>
										<view class="f-g-0 right">会员价</view>
									</view>
								</view>
								<view class="labels" v-if="cv.discounts && cv.discounts.length">
									<view class="label goodlb" :style="{color:'#FF3131',borderColor:'#FF3131'}" v-for="(lv,li) in cv.discounts" :key="li">{{lv.discountLabel}}</view>
								</view>
								<view class="price" v-if="cv.isShow!=1">
									<view v-if="cv.price" class="f-g-1 t-o-e neutra-font">
										฿{{ cv.price}}
										<text v-if="cv.isSpec" class="f24 c9 nowei ml10">起</text>
									</view>
									<view v-if="sjxx.businessStatus!=3 && cv.goodsInventory!=0" class="f-g-0">
										<actions v-if="cv.price"
											:materials-btn="cv.isSpec"
											@materials="handdl(cv)" :number="gcnum(cv.id)" @add="handcar"
											@minus="handcar" :product="cv" />
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import classLeft1 from '@/components/goods/template/class-left1.vue'
	import Actions from "@/components/goods/actions/actions.vue"
	import picLunboBy from '@/components/drag/picLunbo.vue';
	export default {
		components: {
			classLeft1,
			Actions,
			picLunboBy,
		},
		props: {
			cs: {
				type: Array,
				default: []
			},
			cd: {
				type: Number,
				default: 0
			},
			st: {
				type: Number,
				default: 0
			},
			str: {
				type: Number,
				default: 0
			},
			pt: {
				type: Number,
				default: 0
			},
			pl: {
				type: Number,
				default: 0
			},
			scarList: {
				type: Object,
				default: {}
			},
			orSet: {
				type: Object,
				default: {}
			},
			dType: {
				type: String,
				default: () => 'out'
			},
			swiper: {
				type: Object,
				default: {
					imgUrl: [],
					height: '260',
					circle: '30'
				}
			},
			cgs: {
				type: Array,
				default: []
			},
			gs: {
				type: Object,
				default: {}
			},
		},
		data() {
			return {
				rectInfoList: [],
			}
		},
		computed: {
			...mapState(['sjxx']),
			gcnum() {
				return id => this.scarList && this.scarList.goodsList && this.scarList.goodsList.reduce((acc, cur) => {
					if (cur.spuId === id) {
						return acc += cur.num
					}
					return acc
				}, 0)
			},
		},
		mixins: [utilMixins],
		methods: {
			handMenu(id, i) {
				this.$emit('handMenu', id, i)
			},
			handdl(cv) {
				this.$emit('handdl', cv)
			},
			handcar(v) {
				this.$emit('handcar', v)
			},
			psroll(v) {
				this.$emit('psroll', v)
			},
			calcSize() {
				let h = 0
				let view = uni.createSelectorQuery().select('#ads')
				view.fields({
					size: true
				}, (data) => {
					h += Math.floor(data && data.height)
				}).exec()
				this.cs.forEach((item, i) => {
					const query = uni.createSelectorQuery().in(this);
					let view = query.select(`#g-${item.id}`)
					view.fields({
						size: true,
						rect: true
					}, data => {
						item.top = h
						h += Math.floor(data.height)
						item.bottom = h
						this.rectInfoList[i] = {
							'top': item.top,
							'bottom': item.bottom
						}
					}).exec()
				})
				setTimeout(() => {
					this.$emit('rfcalc', this.rectInfoList, this.cs)
				}, 100)
			},
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../pages/index/goods/goods.scss';
</style>