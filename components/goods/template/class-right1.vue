<template>
	<block>
		<view class="glist" v-for="(v, i) in cs" :key="i" :id="`g-${v.id}`">
			<view class="gname">{{ v.name }}</view>
			<view class="gwrp">
				<view class="goods" v-for="(cv, ci) in v.goodsList" :key="ci" @tap="handdl(cv)">
					<view class="image mr10">
						<image :src="cv.logo" mode="aspectFill" class="image bs10"></image>
						<view v-if='!cv.specSwitch && cv.singleSpec.surplusInventory<=0' class="p-a ysq f-c b0 cf w100 f22">{{$t("goods.sold_out")}}</view>
					</view>
					<view class="content">
						<view class="name">{{ cv.name }}</view>
						<view class="labels" v-if="cv.label && cv.label.length">
							<view class="label"
								:style="{background:`rgba(${cTR(label.bgColor || '#BABABA')},0.1)`,color:label.bgColor || '#333',}"
								v-for="label in cv.label" :key="label.id">{{ label.name }}</view>
						</view>
						<view class="description" v-if="cv.desc">{{ cv.desc }}</view>
						<view class="price" v-if="cv.isShow!=1">
							<view v-if="cv.mixPrice || cv.price" class="f-g-1 t-o-e">
								฿{{ cv.specSwitch==1 ? cv.mixPrice : cv.price}}
								<text v-if="cv.specSwitch || cv.attrSwitch || cv.materialSwitch"
									class="f24 c9 nowei ml10">{{$t("goods.starting_from")}}</text>
							</view>
							<view v-if="sjxx.businessStatus!=3 && (!cv.specSwitch && cv.singleSpec.surplusInventory!=0 || cv.specSwitch && !cv.singleSpec)" class="f-g-0">
								<actions v-if="cv.mixPrice || cv.price"
									:materials-btn="cv.specSwitch || cv.attrSwitch || cv.materialSwitch"
									@materials="handdl(cv)" :number="gcnum(cv.id)" @add="handcar"
									@minus="handcar" :product="cv" />
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</block>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import Actions from "@/components/goods/actions/actions.vue"
	export default {
		components: {
			Actions,
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
			scarList: {
				type: Object,
				default: {}
			},
		},
		data() {
			return {

			}
		},
		computed: {
			...mapState(['sjxx']),
			gcnum() {
				return id => this.scarList.goodsList.reduce((acc, cur) => {
					if (cur.spuId === id) {
						return acc += cur.num
					}
					return acc
				}, 0)
			},
		},
		mixins: [utilMixins],
		methods: {
			handdl(cv){
				this.$emit('handdl',cv)
			},
			handcar(v){
				this.$emit('handcar',v)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../pages/index/goods/goods.scss';
</style>