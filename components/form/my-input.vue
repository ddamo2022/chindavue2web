<template>
	<mg-cell @tab="$emit('tab')" v-if='formt==1' :last='last' :cname='cname' :sname="sname" :hw='hw' :isl='isl' :isr="isr"
	 :iconn='iconn' :ht='ht' :htc='`f30 ${htc}`' :ft='ft' :arrow='arrow' :ftc='ftc'>
		<template slot='hd'>
			<slot name='hd'></slot>
		</template>
		<template v-slot:bd>
			<!-- #ifndef MP-TOUTIAO -->
			<input @click.stop="" v-if="!dis" v-model="inputVal" :type="t" :disabled="dis" :maxlength='max' class="weui-input"
			 :class="[icn]" :placeholder="pr" placeholder-style="color:#BBBBBB;" />
			<view v-else class="weui-input t-o-e" :class="[icn]" :style="{color:inputVal?'':'#BBBBBB'}">{{inputVal||pr}}</view>
			<!-- #endif -->
			<!-- #ifdef MP-TOUTIAO -->
			<input v-show='formt==1' @blur="$emit('input', $event.target.value)" :value="value" :type="t" :disabled="dis"
			 :maxlength='max' class="weui-input" :class="[icn]" :placeholder="pr" placeholder-style="color:#BBBBBB;" />
			<!-- #endif -->
		</template>
		<template slot='ft'>
			<slot name='ft'></slot>
		</template>
	</mg-cell>
	<mg-cell v-else-if='formt==2' :last='last' :cname='cname' :sname="sname" :hw='hw' :ht='ht' :isl='isl' :isr="isr">
		<switch @change='switchChange' slot='ft' :color="tColor" :checked="value==1" style="transform:scale(0.85)"></switch>
	</mg-cell>
</template>

<script>
	import MgCell from '@/components/common/my-cell.vue'
	export default {
		name: 'mg-input',
		components: {
			MgCell,
		},
		props: {
			cname: {
				type: String,
				default: 'p23',
			},
			sname: '',
			last: '',
			iconn: {
				type: String,
				default: '',
			},
			formt: {
				type: String,
				default: '1',
			},
			hw: {
				type: String,
				default: '',
			},
			isl: {
				type: String,
				default: '',
			},
			isr: {
				type: String,
				default: '',
			},
			ht: {
				type: String,
				default: '',
			},
			htc: {
				type: String,
				default: '',
			},
			ft: {
				type: String,
				default: '',
			},
			ftc: {
				type: String,
				default: '',
			},
			arrow: {
				type: String,
				default: '',
			},
			dis: {
				type: [Boolean, String],
				default: false,
			},
			t: {
				type: String,
				default: 'text',
			},
			value: {
				type: String,
				default: '',
			},
			icn: {
				type: String,
				default: '',
			},
			max: {
				type: [String, Number],
				default: 60,
			},
			pr: {
				type: String,
				default: '',
			},
		},
		data() {
			return {}
		},
		computed: {
			inputVal: {
				get() {
					return this.value
				},
				set(newVal) {
					this.$emit("input", newVal)
				}
			}
		},
		methods: {
			switchChange(e) {
				this.$emit("input", e.detail.value ? '1' : '2')
				console.log(e.detail.value)
			},
			maskTap() {
				this.$emit('input', false)
			}
		},
	}
</script>
<style scoped lang="scss">
	.weui-input {
		width: 100%;
		font-size: 30rpx;
		outline: none;
		border: none;
		padding: 0;
		margin: 0;
		text-decoration: inherit;

		&:disabled {
			background: transparent
		}
	}
</style>
