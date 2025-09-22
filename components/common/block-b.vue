<template>
	<block v-if='type==1'>
		<text @click.stop="$emit('tab')" class='text-btnf' :class="[cName]" :style="[{background:color,borderColor:color,display:block&&'block'},sname]">{{t}}</text>
	</block>
	<block v-else-if='type==2'>
		<text @click.stop="$emit('tab')" class='text-btn' :class="[cName]" :style="[{color:color,borderColor:color,display:block&&'block'},sname]">{{t}}</text>
	</block>
</template>

<script>
	export default {
		name: 'popup',
		props: {
			cName: {
				type: String,
				default: ''
			},
			sname: '',
			type: {
				type: String,
				default: '1'
			},
			t: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: ''
			},
			block: {
				type: String,
				default: ''
			},
		},
		methods: {},
	}
</script>

<style scoped lang="scss">
</style>
