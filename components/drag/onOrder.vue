<template>
	<view class="onOrder f-bt posi-r" :style="{
	      marginTop: co.marginTop + 'px',
	      marginBottom: co.marginBottom + 'px',
	      marginLeft: co.marginLR + 'px',
	      marginRight: co.marginLR + 'px',
		  backgroundColor: co.typeLR > 0 ? '' : co.colorBg,
		  borderTopLeftRadius: co.typeLR > 0 ? '0px' : co.tCircle + 'px',
		  borderTopRightRadius: co.typeLR > 0 ? '0px' : co.tCircle + 'px',
		  borderBottomRightRadius: co.typeLR > 0 ? '0px' : co.tCircle + 'px',
		  borderBottomLeftRadius: co.typeLR > 0 ? '0px' : co.tCircle + 'px',
	    }">
		<view class="f-g-1 el" v-for="(v, i) in co.btnList" :key="i" :style="{
	        backgroundColor: co.typeLR > 0 ? co.colorBg :'',
	        borderTopLeftRadius: co.typeLR > 0 ? co.tCircle + 'px' : '0px',
	        borderTopRightRadius: co.typeLR > 0 ? co.tCircle + 'px' : '0px',
	        borderBottomRightRadius: co.typeLR > 0 ? co.tCircle + 'px' : '0px',
	        borderBottomLeftRadius: co.typeLR > 0 ? co.tCircle + 'px' : '0px',
	        marginLeft: co.typeLR + 'px',
	        marginRight: co.typeLR + 'px',
	      }" @click="goLink(v)">
			<view v-if="co.txtDis == 1 && co.txtPos == 2" class="mb20">
				<view class="f-c wei mt20" :style="{ color: `${v.color}`, fontSize: `${co.fontSize}px` }">
					{{ v.text }}
				</view>
				<view class="f-c mt10 desc" :style="{ color: `${v.dColor}` }" v-if="v.desc">
					{{ v.desc }}
				</view>
			</view>
			<view class="f-c">
				<image :style="{
	            width: co.iconWidth ? co.iconWidth + 'px' : '50px',
	            height: co.iconWidth ? co.iconWidth + 'px' : '50px',
	          }" :src="v.img || img" fit="cover"></image>
			</view>
			<view v-if="co.txtDis == 1 && co.txtPos == 1">
				<view class="f-c wei mt20" :style="{ color: `${v.color}`, fontSize: `${co.fontSize}px` }">
					{{ v.text }}
				</view>
				<view class="f-c mt10 desc" :style="{ color: `${v.dColor}` }" v-if="v.desc">
					{{ v.desc }}
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'onOrder',
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
			goLink(v) {
				this.goUrl(v.url)
			},
		},
	};
</script>
<style lang="scss" scoped>
	.onOrder {
		.el {
			padding: 30px 0;
		}

		.desc {
			font-size: 12px;
		}
	}
</style>