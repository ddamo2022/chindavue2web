<template>
	<view class="mh100 pb200 p-r">
		<view class="remain">
			<view class="topc p-r" :style="{background:tColor}">
				<view class="rwimg p-a r0">
					<mg-img m="aspectFill" :src="dPoint.images || `${onImgurl}common/jd.png`"></mg-img>
				</view>
			</view>
			<view class="f-w p3 bf bs20 m3 p-r jdbody" v-if="dPoint.name">
				<view class="bf5 f-bt p1 bs10 f-g-1 f24">
					<view class="f-g-0">
						<!-- <text class="iconfont icon-sj f30 mr10 c9"></text> -->
					</view>
					<view class="f-g-1 f-c wei p1 f28">{{dPoint.name}}</view>
				</view>
				<view class="mt30 f-c-c f-g-1" v-if="dPoint.num">
					<view class="bodyPoint f-g-1">
						<view class="pLeft f-nw">
							<view class="pItem" v-for="(v, i) in dPoint.num" :key="i">
								<image class="icImg wh" v-if="dPoint.userData && dPoint.userData.point && i < dPoint.userData.point"
									:src="(pdl.jdICon && pdl.jdICon.img) || `${onImgurl}common/cup1.png`" />
								<image class="icImg wh" :class="pdl.jdICon && pdl.jdICon.img && (!pdl.jdIConN || pdl.jdIConN && !pdl.jdIConN.img) ? 'opo' : ''"
									:src="(pdl.jdIConN && pdl.jdIConN.img) || (pdl.jdICon && pdl.jdICon.img) || `${onImgurl}common/cup2.png`" />
							</view>
						</view>
					</view>
					<template v-if="dPoint.userData">
						<view class="wei f30">{{$t("pointdl.already_have")}}{{dPoint.userData.point}}“{{dPoint.numName || $t("pointdl.collect_points")}}”</view>
						<view class="mt10 f26">{{$t("pointdl.still_missing")}} {{dPoint.userData && dPoint.userData.point && (dPoint.num-dPoint.userData.point)}}“{{dPoint.numName || $t("pointdl.collect_points")}}”{{$t("pointdl.can_get")}}</view>
					</template>
					<template v-else>
						<view class="wei f30">{{$t("pointdl.already_have")}}0“{{dPoint.numName ||  $t("pointdl.collect_points")}}”</view>
						<view class="mt10 f26">{{$t("pointdl.still_missing")}} {{dPoint.num}}“{{dPoint.numName ||  $t("pointdl.collect_points")}}”{{$t("pointdl.can_get")}}</view>
					</template>
					<view class="mt10 f26 mb30 f-g-1">
						<view v-if="dPoint.balanceSwitch" class="mt10 f-g-1">{{$t("pointdl.balance")}}：<text class="cf5 wei" :style="{color:tColor}">{{dPoint.balance}}</text></view>
						<view v-if="dPoint.integralSwitch" class="mt10 f-g-1">{{$t("pointdl.points")}}：<text class="cf5 wei" :style="{color:tColor}">{{dPoint.integral}}</text></view>
						<view v-if="dPoint.couponSwitch && dPoint.couponGive" class="mt10 f-g-1">{{$t("pointdl.coupons")}}：
							<text v-for="(v,i) in dPoint.couponGive" :key="i" class="cf5 wei" :style="{color:tColor}">{{v.name}} X{{v.num}},</text>
						</view>
					</view>
				</view>
			</view>
			<view class="p3 bf bs20 m3" v-if="dPoint.body">
				<view class="wei f34 f-c-c f-g-1">{{$t("pointdl.event_description")}}</view>
				<view class="f-g-1 mt20">
					<rich-text type='2' :content="dPoint.body" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import RichText from '@/components/common/functionCmp/rich-text.vue'
	export default {
		name: 'point-dl',
		components: {
			RichText,
		},
		data() {
			return {
				pdl: {},
			}
		},
		onLoad(options) {
			if(uni.getStorageSync('pointDl')){
				this.pdl = uni.getStorageSync('pointDl')
			}
			this.util.setNT(this.$t("pointdl.points_for_gift"))
		},
		computed: {
			...mapState({
				dPoint: state => state.layout.orderCollect || {},
			})
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		},
	}
</script>
<style scoped lang="scss">
	.remain{
		padding-bottom: 50rpx;
	}
	
	.jdbody {
		margin-top: -80rpx;
	}

	.topc {
		padding: 45rpx 48rpx 40rpx;
		width: 100%;
		height: 500rpx;

		.rwimg {
			width: 100%;
			height: 500rpx;
			top: 0;
			bottom: 0rpx;
		}
	}

	.bodyPoint {
		display: flex;
		align-items: center;
		margin-bottom: 30rpx;

		.pLeft {
			flex: 1;

			.pItem {
				display: inline-block;
				width: 96rpx;
				height: 96rpx;
				margin: 30rpx 15rpx 20rpx 15rpx;
				vertical-align: middle;
				position: relative;
				overflow: hidden;
			}
		}

	}
	.opo{
		opacity: 0.2;
	}
</style>