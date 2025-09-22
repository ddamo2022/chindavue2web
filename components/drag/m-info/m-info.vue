<template>
	<view class="titles o-h posi-r" :style="{
			marginTop: co.marginTop + u,
			marginBottom: co.marginBottom + u,
			marginLeft: co.marginLR + u,
			marginRight: co.marginLR + u,
			borderRadius: `${co.tCircle}${u} ${co.tCircle}${u} ${co.bCircle}${u} ${co.bCircle}${u}`,
		}">
		<block v-if="isLogin">
			<s-y1 v-if="co.type==1" :styles="co"></s-y1>
			<s-y2 v-if="co.type==2" :styles="co"></s-y2>
			<s-y3 v-if="co.type==3" :styles="co"></s-y3>
			<s-y4 v-if="co.type==4" :styles="co"></s-y4>
			<s-y5 v-if="co.type==5" :styles="co"></s-y5>
			<s-y6 v-if="co.type==6" :styles="co"></s-y6>
			<s-y7 v-if="co.type==7" :styles="co"></s-y7>
			<s-y8 v-if="co.type==8" :styles="co"></s-y8>
		</block>
		<block v-else>
			<n-lo :styles="co"  @sh="sqsjh"></n-lo>
		</block>
	</view>
</template>
<script>
	import NLo from './components/n-lo.vue';
	import SY1 from './components/s-y1.vue';
	import SY2 from './components/s-y2.vue';
	import SY3 from './components/s-y3.vue';
	import SY4 from './components/s-y4.vue';
	import SY5 from './components/s-y5.vue';
	import SY6 from './components/s-y6.vue';
	import SY7 from './components/s-y7.vue';
	import SY8 from './components/s-y8.vue';
	export default {
		name: 'MemberInfo',
		components: {
			NLo,
			SY1,
			SY2,
			SY3,
			SY4,
			SY5,
			SY6,
			SY7,
			SY8,
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
			sqsjh() {
				this.$emit('sh')
			},
		},
	};
</script>
<style lang="scss" scoped>
	
</style>
