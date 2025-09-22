<template>
	<view class="titles o-h posi-r" :style="{
			marginTop: co.marginTop + u,
			marginBottom: co.marginBottom + u,
			marginLeft: co.marginLR + u,
			marginRight: co.marginLR + u,
			background:co.colorBg,
			borderRadius: `${co.tCircle}${u} ${co.tCircle}${u} ${co.bCircle}${u} ${co.bCircle}${u}`,
		}">
		<block>
			<s-h1 v-if="co.type==1" :styles="co"></s-h1>
			<s-h2 v-if="co.type==2" :styles="co"></s-h2>
			<s-h3 v-if="co.type==3" :styles="co"></s-h3>
		</block>
	</view>
</template>
<script>
	import SH1 from './components/s-h1.vue';
	import SH2 from './components/s-h2.vue';
	import SH3 from './components/s-h3.vue';
	export default {
		name: 'IShop',
		components: {
			SH1,
			SH2,
			SH3,
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
		methods: {
			async goLink(url) {
				if (!await this.checkLogin()) return
				this.go({
					t: 1,
					url,
				})
			},
			async ljdl() {
				if (!await this.checkLogin()) return
			},
		},
		created() {
			// console.log(this.co)
		}
	};
</script>
<style lang="scss" scoped>
	
</style>
