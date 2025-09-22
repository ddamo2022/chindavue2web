<template>
	<view class="leftwrp">
		<view class="mi" @tap="$emit('handMenu',v.id,i)" v-for="(v, i) in cs" :key="i">
			<view class="title-bx cf5f f18" v-if="v.label"
				:style="{background:`rgba(${cTR(v.label.bgColor)},0.1)`,color:v.label.bgColor}">
				{{v.label.name}}
			</view>
			<view v-if='v.isMust' class="title-bxt cf5f f18 nowei">{{$t("goods.required")}}</view>
			<view class="sitem f-c-xc" :class="{active: cd == v.id,'ysyj':i==sx+1,'yxyj':i==sx-1}"
				:style="{borderColor:cd == v.id?tColor:''}">
				<image :src="v.logo" class="image" mode="widthFix" v-if="v.logo"></image>
				<view class="f-c mt10 t-c f26">{{ v.name }}</view>
			</view>
		</view>
		<!-- <view class="mi" style="background: #f5f5f5;"></view> -->
		<view style="background: #f5f5f5;height: 350rpx;"></view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		components: {

		},
		props: {
			cs: {
				type: Array,
				default: []
			},
			sx: {
				type: Number,
				default: 0
			},
			cd: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				
			}),
		},
		mixins: [utilMixins],
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../pages/index/goods/goods.scss';
</style>