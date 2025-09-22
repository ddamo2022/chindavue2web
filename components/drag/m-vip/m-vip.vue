<template>
	<view id="myVip" class="p-r">
		<vip-style1 v-if="co.type == 1" :styles="co" @sh="sqsjh"></vip-style1>
		<vip-style2 v-if="co.type == 2" :styles="co" @sh="sqsjh"></vip-style2>
		<image class="wh bgimg" :src="co.imgList && co.imgList.img" mode="aspectFill"></image>
		<view class="bg" :style="{ backgroundColor: co.colorBg }"
			v-if="co.type == 1 && (co.myPro == 1 || co.myOrder == 1)"></view>
		<view :style="{ marginTop: co.type == 1 ? '-40px' : '0' }">
			<my-property v-if="co.myPro == 1" :styles="co"  @sh="sqsjh"></my-property>
			<my-order v-if="co.myOrder == 1" :styles="co"></my-order>
		</view>
	</view>
</template>
<script>
	import vipStyle1 from './components/s-h1.vue';
	import vipStyle2 from './components/s-h2.vue';
	import myProperty from './components/my-property.vue';
	import myOrder from './components/my-order.vue';
	import { mapState } from 'vuex'
	export default {
		name: 'myVip',
		components: {
			vipStyle1,
			vipStyle2,
			myProperty,
			myOrder,
		},
		props: {
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
			u: {
				type: String,
				default: 'px'
			},
		},
		data() {
			return {};
		},
		computed: {
			...mapState({
				layout: state => state.layout.user || {},
			})
		},
		methods: {
			sqsjh() {
				this.$emit('sh')
			},
		},
	};
</script>
<style lang="scss" scoped>
	.bg {
		height: 50px;
	}
	.bgimg {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		height: 420rpx;
	}
</style>
