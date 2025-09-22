<template>
	<view class="lines" :style="{background:co.colorBg,margin: `${co.marginTB}${u} 0`}">
		<view class="one" v-if="co.type==2 || co.type==4"
			:style="{borderColor:co.lineBg, borderWidth: co.height + u,borderTopStyle:co.type==2?'solid':co.type==4?'dashed':'dotted' }">
		</view>
		<view class="two" v-else-if="co.type==3" :style="{borderColor:co.lineBg, height: co.height + u }"></view>
		<view class="bf" v-else></view>
	</view>
</template>
<script>
	export default {
		name: 'lines',
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
			goTo(v) {
				this.goUrl(v.url, v)
			}
		},
	};
</script>
<style lang="scss" scoped>
	.lines {
		padding: 40rpx 0;

		.one {
			border-top: 1px solid #eee;
		}

		.two {
			border-width: 1px 0;
			border-style: solid;
		}
	}
</style>
