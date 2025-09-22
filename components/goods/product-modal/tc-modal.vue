<template>
	<uni-popup ref="popup" cname="z999" type="bottom" @change="change">
		<view class="pwarp" :style="{paddingBottom:isIpx?'40rpx':'' }">
			<!-- <modal :show="visible" custom padding="0" width="90%" radius="18rpx"> -->
			<view class="header">
				<!-- <button open-type="share" class="s-btn f-y-c">
					<image src="/static/images/index/menupopup_btn_share_normal.png"></image>
				</button> -->
				<image :src="mrtxImg" @tap="$emit('cancel')"></image>
			</view>
			<scroll-view scroll-y class="content bf">
				<block v-if="ginfo.images && ginfo.images.length">
					<swiper :duration="1000" indicator-dots class="swiperwh" autoplay :interval="3000">
						<swiper-item v-for="(v, i) in ginfo.images" :key="i" class="swiper-item" @click="ylsw(i)">
							<image :src="v" class="w-100 h-100" mode="aspectFill"></image>
						</swiper-item>
					</swiper>
				</block>
				<view class="imgh o-h" v-else>
					<image :src="ginfo.logo" mode="aspectFit" class="swiper" style="width: 100%;" @click="yl(ginfo.logo)"></image>
				</view>
				<view class="wrapper">
					<view class="title">{{ ginfo.name }}</view>
					<view class="flex f20">
						<view class="mr10 mb10 neutra-font" v-if="orSet.inventoryShow==1 && (dType == 'out' || dType == 'ins')">库存:
							<text v-if="ginfo.specSwitch==0">{{ginfo.singleSpec && ginfo.singleSpec.surplusInventory}}</text>
							<text v-else-if="ginfo.specSwitch==1 && xzSpecInfo.specInfo && xzSpecInfo.specInfo.surplusInventory">{{xzSpecInfo.specInfo.surplusInventory}}</text>
						</view>
					</view>
					<view class="labels">
						<view class="label bs5" v-for="(label, index) in ginfo.label" :key="index"
							:style="{background:`rgba(${cTR(label.bgColor || '#BABABA')},0.1)`,color:label.bgColor || '#333',}">
							{{ label.name }}
						</view>
					</view>
					<view class="flex mb10" v-if="ginfo.discountMinPrice">
						<view class="vipLabel f-bt f22 l-h1">
							<view class="f-g-1 left wei neutra-font">฿
								<text class="f26">{{ginfo.discountMinPrice}}</text>
								<text v-if="ginfo.specSwitch || ginfo.attrSwitch || ginfo.materialSwitch">起</text>
							</view>
							<view class="f-g-0 right">会员价</view>
						</view>
					</view>
					<view class="flex mb10" v-if="ginfo.equityCardPrice">
						<view class="vipLabel f-bt f22 l-h1">
							<view class="f-g-1 left wei">
								{{user.equityCard && user.equityCard.equityCard && user.equityCard.equityCard.name}}
							</view>
							<view class="f-g-0 right f22">
								<text class="neutra-font">专享฿{{ginfo.equityCardPrice}}</text>
								<text v-if="ginfo.specSwitch || ginfo.attrSwitch || ginfo.materialSwitch">起</text>
							</view>
						</view>
					</view>
					<view class="labels" v-if="(ginfo.specSwitch==0 && ginfo.discounts && ginfo.discounts.length) || (ginfo.specSwitch==1 && jsDiscountLabel)">
						<block v-if="ginfo.specSwitch==0">
							<view class="label goodlb" :style="{color:'#FF3131',borderColor:'#FF3131'}" v-for="(lv,li) in ginfo.discounts" :key="li">{{lv.discountLabel}}</view>
						</block>
						<block v-if="ginfo.specSwitch==1 && jsDiscountLabel">
							<view class="label goodlb" :style="{color:'#FF3131',borderColor:'#FF3131'}">{{jsDiscountLabel}}</view>
						</block>
					</view>
					<view class="mb-20 desc" v-if="ginfo.desc && ginfo.desc!='null'">{{ ginfo.desc }}</view>
					<block v-if="ginfo.specSwitch==1 && ginfo.specData.length">
						<!-- <view class="p15 c6" :style="{color:tColor}">规格</view> -->
						<view v-for="(pv,pi) in ginfo.specData" :key='pi' class="" @click="comPrice">
							<view class="p15 c6 f26">{{pv.name}}</view>
							<view class="f-raw">
								<view v-if="cv.name" @click="clickSpec(pi,ci,cv)" v-for="(cv,ci) in pv.value" :key='ci'
									class="specv t-o-e f26 c6 neutra-font" :class="{'opc':!cv.b}"
									:style="{background:cv.b && cv.a?tColor:'',color:cv.b && cv.a?fontColor:''}">
									{{cv.name}}
									฿{{cv.price}}
								</view>
							</view>
						</view>
					</block>
					<block v-if="ginfo.attrSwitch==1 && ginfo.attrData.length">
						<!-- <view class="p15 c6" :style="{color:tColor}">属性</view> -->
						<view v-for="(pv,pi) in ginfo.attrData" :key='pi' class="">
							<view class="p15 c6 f26">{{pv.name}}</view>
							<view class="f-raw">
								<view v-if="cv.name" @click="clickAttribute(pi,ci)" v-for="(cv,ci) in pv.value"
									:key='ci' class="specv t-o-e f26 c6"
									:style="{background:cv.a?tColor:'',color:cv.a?fontColor:''}">{{cv.name}}</view>
							</view>
						</view>
					</block>
					<block v-if="ginfo.materialSwitch==1 && ginfo.materialData.length">
						<view class="materials" style="width: 100%;" v-for="(v, i) in ginfo.materialData" :key="i">
							<view class="p15 c6 f26">{{ v.name }}
								<text class="f20 c9 ml10" v-if="v.required==1">(必选)</text>
							</view>
							<view class="values">
								<view class="t-o-e f26 specv f-bt p-r numSpec c6" :class="{'opc':!cv.b}"
									:style="{background:cv.a?tColor:'',color:cv.a?fontColor:''}"
									@tap="clickMaterial(i, ci ,cv)" v-for="(cv, ci) in v.materialList" :key="ci">
									<view class="t-o-e f-g-1" v-if="v.required==1 && v.maxNum<=1">
										{{cv.name}}
										<text v-if="cv.price" class="ml10 neutra-font"
											:style="{color:cv.a?fontColor:''}">฿{{parseFloat(cv.price)}}</text>
									</view>
									<template v-else>
										<template v-if="!cv.b">
											<view class="specsV f-g-1 f-bt ysq">
												<view class="f-g-1 t-o-e f-s">{{ cv.name }}</view>
												<view class="f-g-0">已售罄</view>
											</view>
										</template>
										<template v-else>
											<view class='iconfont icon-jjian- f30 c3 f-g-0 czjj'
												:style="{color:cv.a?fontColor:''}" @tap.stop="minusMaterial(i, ci)"></view>
											<view class="specsV f-g-1 f-bt">
												<view class="f-g-1 t-o-e f-s c0" :style="{color:cv.a?fontColor:''}">
													{{ cv.name }}</view>
												<view class="f-g-0 c0 wei neutra-font" :style="{color:cv.a?fontColor:''}">
													฿{{ cv.price && parseFloat(cv.price) }}</view>
											</view>
											<view class='iconfont icon-jiahao f34 c3 f-g-0 czjj'
												:style="{color:cv.a?fontColor:''}" @tap.stop="addMaterial(i, ci)"></view>
											<view class="p-a num bsf cf f20 f-c" v-show="cv.a"
												:style="{background:cv.a?tColor:'',color:cv.a?fontColor:''}">{{cv.num}}</view>
										</template>
									</template>
								</view>
							</view>
						</view>
					</block>
				</view>
			</scroll-view>
			<view class="bottom"
				v-if="ginfo.isShow!=1 && (!ginfo.specSwitch && ginfo.singleSpec && ginfo.singleSpec.surplusInventory!=0 || ginfo.specSwitch && !ginfo.singleSpec)">
				<view class="flex aict f-bt">
					<view class="jljg f-g-1">
						<view class="price neutra-font">
							฿{{ jsPrice>=0 && jsPrice || (ginfo.specSwitch==1 ? ginfo.mixPrice : ginfo.singleSpec.price)}}
							<text class="f26 t-d-l c9 nowei ml10" v-if="ginfo.specSwitch==0 && ginfo.singleSpec.linePrice>0 && ginfo.singleSpec.price && (Number(ginfo.singleSpec.linePrice)>Number(ginfo.singleSpec.price))">฿{{parseFloat(ginfo.singleSpec.linePrice)}}</text>
							<text class="f26 t-d-l c9 nowei ml10" v-if="ginfo.specSwitch==1 && jslinePrice>0 && jsPrice && (Number(jslinePrice)>Number(jsPrice))">฿{{jslinePrice}}</text>
						</view>
						<view class="f22 c9 flex f-w">
							<view v-if="xzSpecInfo && xzSpecInfo.ggdata">[{{xzSpecInfo.ggdata}}]</view>
							<view v-if="xzSxInfo.arr && xzSxInfo.arr.length">[{{xzSxInfo.arr.map(v => v.name).join()}}]
							</view>
							<view class="materials" v-show="getProductSelectedMaterials" :style="{color:'#999'}">
								{{ getProductSelectedMaterials }}
							</view>
						</view>
					</view>
				<!-- 	<view class="f-g-0">
						<view class="num-box f-bt">
							<view class='iconfont icon-jianhao f40 cd f-g-0 f-c' :style="{color:tColor}"
								@tap.stop="minus"></view>
							<input class="f-g-1 number t-c h-100 f28" type="number" v-model="cnum" @input="cNum" />
							<view class='iconfont icon-jiahao1 f42 f-g-0 f-c' :style="{color:tColor}" @tap.stop="add">
							</view>
						</view>
					</view> -->
				</view>
				<view class="f-bt">
					<!-- <button type="primary" plain class="buy-now-btn f-g-1 bs60" :style={color:tColor,borderColor:tColor}
						@tap="addBuyNow">立即购买</button> -->
					<button type="primary" class="add-cart-btn f-c f-g-1 ml20 bs60" :style="{backgroundColor:tColor,color:fontColor}"
						@tap="addToCart">选好了</button>
				</view>
			</view>
			<view v-if="isIpx" class='bgf'></view>
		</view>
		<!-- </modal> -->
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import Actions from '../actions/actions.vue'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import {
		mapState,
		mapActions,
	} from 'vuex'

	export default {
		name: 'ProductModal',
		components: {
			Actions
		},
		props: {
			visible: {
				type: Boolean,
				default: false
			},
			product: {
				type: Object,
				default: () => {}
			},
			// storeId: {
			// 	type: String,
			// 	default: ''
			// },
			dType: {
				type: String,
				default: () => 'out'
			},
			orSet: {
				type: Object,
				default: {}
			},
		},
		data() {
			return {
				ginfo: {},
				cnum: 1,
				jsPrice: '',
				jslinePrice: '',
				jsDiscountLabel: '',
				storeId:'',
				diningType:'',
			}
		},
		watch: {
			product(val) {
				if (val.specSwitch == 1 && val.specData) {
					val.specData.forEach(v => {
						v.value = v.value.map((v, i) => {
							let kc = val.skus.find(f => f.specName[0].id == v.id).surplusInventory
							return {
								name: v.name,
								id: v.id,
								price: val.skus.find(f => f.specName[0].id == v.id).price,
								a: kc && v.checkId ? 1 : 0,
								b: val.skus.find(f => f.specName[0].id == v.id).surplusInventory,
							}
						})
					})
				}
				if (val.attrSwitch == 1 && val.attrData) {
					val.attrData.forEach(v => {
						v.value.forEach((v, i) => {
							v.a = v.checkId ? 1 : 0
						})
					})
				}
				if (val.materialSwitch == 1 && val.materialData) {
					this.havebxjl = val.materialData.findIndex(v => v.required == 1) > -1
					val.materialData.forEach(v => {
						v.materialList.forEach((v, i) => {
							v.a = v.inventory && v.checkId ? 1 : 0
							v.b = v.inventory
							v.num = v.checkId ? 1 : 0
						})
					})
				}
				setTimeout(() =>{
					this.comPrice()
				},500)
				this.ginfo = JSON.parse(JSON.stringify(val))
				// this.$set(this.ginfo, 'number', 1)
			}
		},
		mixins: [utilMixins],
		computed: {
			...mapState({
				scarList: state => state.scarList.out || [],
				scarListIns: state => state.scarList.ins || [],
			}),
			...mapState(['sjxx']),
			getProductSelectedMaterials() {
				if (this.ginfo.materialSwitch && this.ginfo.materialData) {
					let materialData = []
					this.ginfo.materialData.forEach(({
						materialList
					}) => {
						materialList.forEach(value => {
							if (value.a) {
								materialData.push(`${value.name}${value.num>1?'*'+value.num:''}`)
							}
						})
					})
					return materialData.length ? materialData.join(',') : ''
				}
				return ''
			},
			xzJlInfo() {
				// console.log('materialData', this.ginfo.materialData)
				let obj = {
					money: 0,
					arr: []
				}
				if (this.ginfo.materialSwitch == 1 && this.ginfo.materialData.length) {
					let money = 0,
						arr = []
					this.ginfo.materialData.forEach(({
						materialList
					}) => {
						materialList.forEach(cv => {
							if (cv.a) {
								arr.push(cv)
							}
						})
					})
					// obj.money = +obj.money.toFixed(2)
					obj.arr = arr
				}
				return obj
			},
			xzSxInfo() {
				// console.log('attrData', this.ginfo.attrData)
				let obj = {
					arr: []
				}
				if (this.ginfo.attrSwitch == 1 && this.ginfo.attrData.length) {
					let r = this.ginfo.attrData,
						c = [];
					for (let n in r) {
						for (let d in r[n].value) {
							if (r[n].value[d].a) {
								c.push(r[n].value[d])
								// break
							}
						}
					}
					obj.arr = c
				}
				return obj
			},
			xzSpecInfo() {
				let obj = {
					ggdata: [],
					specInfo: {},
				}
				if (this.ginfo.specSwitch == 1 && this.ginfo.specData.length) {
					let r = this.ginfo.specData,
						i = [],
						c = [];
					for (let n in r) {
						for (let d in r[n].value) {
							if (r[n].value[d].a) {
								c.push(r[n].value[d].name)
								i.push(r[n].value[d].id)
								break
							}
						}
					}
					obj.ggdata = c.toString()
					obj.specInfo = this.ginfo.skus.find(v => v.specName[0].id == i)
					return obj
				} else {
					return {}
				}

			},
			mrtxImg() {
				return `${this.onImgurl}index/round_close_btn.png`
			},
		},
		methods: {
			...mapActions(['clearMycar']),
			async open(v,sid,diningType) {
				this.cnum = 1
				this.jsPrice = ''
				this.jslinePrice = ''
				this.$refs['popup'].open()
				this.storeId = sid
				this.diningType = diningType
			},
			close() {
				this.$refs['popup'].close()
				this.jsPrice = ''
				this.jslinePrice = ''
			},
			change({
				show
			}) {
				this.$emit('change', show)
			},
			clickSpec(pi, ci, cv) {
				if (!cv.b) return
				let r = this.ginfo.specData
				for (let n in r[pi].value) {
					if (n == ci) {
						this.$set(r[pi].value[n], 'a', 1)
					} else {
						this.$set(r[pi].value[n], 'a', 0)
					}
				}
			},
			clickAttribute(pi, ci) {
				let r = this.ginfo.attrData
				for (let n in r[pi].value) {
					if (r[pi].state && r[pi].state == 1) {
						if (n == ci) this.$set(r[pi].value[n], 'a', r[pi].value[n].a == 1 ? 0 : 1)
					} else {
						if (n == ci) {
							this.$set(r[pi].value[n], 'a', 1)
						} else {
							this.$set(r[pi].value[n], 'a', 0)
						}
					}
				}
			},
			clickMaterial(pi, ci, cv) {
				if (!cv.b) return
				let r = this.ginfo.materialData
				for (let n in r[pi].materialList) {
					if (r[pi].required == 1 && r[pi].maxNum <= 1) {
						// n == ci ? r[pi].materialList[n].a = 1 : r[pi].materialList[n].a = 0
						if (n == ci) {
							this.$set(r[pi].materialList[n], 'a', 1)
							this.$set(r[pi].materialList[n], 'num', 1)
						} else {
							this.$set(r[pi].materialList[n], 'a', 0)
							this.$set(r[pi].materialList[n], 'num', 1)
						}
					} else {
						if (n == ci && !r[pi].materialList[n].num) {
							this.$set(r[pi].materialList[n], 'a', r[pi].materialList[n].a == 1 ? 0 : 1)
							this.$set(r[pi].materialList[n], 'num', r[pi].materialList[n].num == 1 ? 0 : 1)
						}
					}
				}
				this.comPrice()
				// const r = this.ginfo.materialData[index].materialList[key]
				// if (!r.is_exclusive) {
				// 	if (r.a) return
				// 	this.ginfo.materialData[index].materialList.forEach(value => this.$set(value, 'a', 0))
				// 	r.a = 1
				// 	this.ginfo.number = 1
				// } else {
				// 	r.a = !r.a
				// 	this.ginfo.number = 1
				// }
			},
			addMaterial(pi, ci) {
				let r = this.ginfo.materialData
				for (let n in r[pi].materialList) {
					// if(!r[pi].materialList[ci].a) return
					if (n == ci) {
						if(!r[pi].materialList[ci].a) {this.$set(r[pi].materialList[n], 'a', 1)}
						this.$set(r[pi].materialList[n], 'num', r[pi].materialList[n].num + 1)
					}
				}
				this.comPrice()
			},
			minusMaterial(pi, ci) {
				let r = this.ginfo.materialData
				for (let n in r[pi].materialList) {
					if (n == ci) {
						if (!r[pi].materialList[n].a) return
						if (r[pi].materialList[n].num > 1) {
							this.$set(r[pi].materialList[n], 'num', r[pi].materialList[n].num - 1)
						} else if (r[pi].materialList[n].num = 1) {
							this.$set(r[pi].materialList[n], 'num', 0)
							this.$set(r[pi].materialList[n], 'a', 0)
						} else {
							this.util.message('不能再少了', 3)
						}
					}
				}
				this.comPrice()
			},
			countjl() {
				return new Promise((reslove, reject) => {
					let jlkg = this.ginfo.materialSwitch,
						jldata = this.ginfo.materialData
					if (jlkg == 1 && jldata) {
						jldata.forEach(v => {
							if (v.required && !this.xzJlInfo.arr.find(f => f.category.id == v.id)) {
								this.util.message(`${v.name}必选`, 3)
								reject()
							} else {
								reslove()
							}
						})
					} else {
						reslove()
					}
				})
			},
			cNum() {
				if (this.cnum <= 0) {
					this.cnum = 1
				}
				if (this.cnum >= 999999) {
					this.cnum = 999999
				}
			},
			add() {
				this.cnum = parseInt(this.cnum) + 1
				this.comPrice()
			},
			minus() {
				if (this.cnum == 1) {
					return
				}
				this.cnum = parseInt(this.cnum) - 1
				this.comPrice()
			},
			async addToCart() {
				let specInfo = Object.assign({}, this.xzSpecInfo),
					jlInfo = {
						jlmoney: this.xzJlInfo.money,
						material: this.xzJlInfo.arr.map(v => ({
							id: v.id,
							name: v.name,
							num: v.num || 1
						})),
						jldata: '',
						jlids: '',
					},
					sxInfo = {
						attribute: '',
					}
				// specInfo.groupId = specInfo.id || ''
				//specInfo有id属性
				// delete specInfo.id
				console.log(1, this.xzJlInfo, this.xzSxInfo, this.xzSpecInfo)
				sxInfo.attribute = this.xzSxInfo.arr.map(v => v.name).toString()
				jlInfo.jldata = this.xzJlInfo.arr.map(v => `${v.name}${v.num>1?'*'+v.num:''}`).toString()
				jlInfo.jlids = this.xzJlInfo.arr.map(v => v.id).toString()
				if (this.havebxjl) {
					let arr = this.ginfo.materialData.filter(v => v.required == 1),
						num = 0,
						carr = jlInfo.material.map(v => v.id)
					for (let i = 0; i < arr.length; i++) {
						if (arr[i].materialList.find(item => carr.includes(item.id))) {
							num += 1
						}
					}
					if (num < arr.length) {
						return this.util.message('请选择必选加料', 3, 1500)
					}
				}
				let goods = Object.assign({
					ggnum: this.ginfo.ggnum
				}, this.ginfo, specInfo, sxInfo, jlInfo)
				this.$emit('add-to-cart', {
					g: goods,
					addwz: this.cnum > 1 ? this.cnum : 1,
				})
				this.cnum = 1
				// let i
				// if (this.ginfo.specSwitch != 1 && this.ginfo.materialSwitch != 1 && this.ginfo.attrSwitch != 1) {
				// 	i = this.scarList && this.scarList.goodsList.find(v => v.spuId == this.ginfo.id)
				// } else {
				// 	i = this.scarList && this.scarList.goodsList.find(v => v.spuId == this.ginfo.id && v.groupId == specInfo.groupId && v.materialIds ==
				// 		jlInfo.jlids && v.attribute == sxInfo.attribute)
				// }
				// if (i) {
				// 	// 
				// 	if (this.co.maxNum > 0 && Number(i.num) + Number(this.ginfo.ggnum) > this.co.maxNum) {
				// 		return this.util.message(`此商品限购${this.co.maxNum}份`, 3)
				// 	}
				// } else {
				// 	// 
				// 	if (this.co.minNum > 1 && this.co.minNum > this.ginfo.ggnum) {
				// 		return this.util.message(`此商品${this.co.minNum}份起购`, 3)
				// 	}
				// 	// 
				// 	if (this.co.maxNum > 0 && this.ginfo.ggnum > this.co.maxNum) {
				// 		return this.util.message(`此商品限购${this.co.maxNum}份`, 3)
				// 	}
				// }
			},
			async addBuyNow() {
				await this.clearMycar({
					storeId: this.sjxx.id,
				})
				await this.addToCart()
				setTimeout(() =>{
					if(this.dType=='ins' && this.scarListIns && this.scarListIns.goodsCount || this.dType=='out' && this.scarList && this.scarList.goodsCount){
						 this.$emit('pay')
					}
				},500)
			},
			async comPrice() {
				let res = await this.util.request({
					'url': this.dType=='ins' ? this.api.sPrice : this.api.cPrice,
					method: "POST",
					ct: 1,
					data: {
						storeId: this.sjxx.id || this.storeId,
						specMd5: this.ginfo.specSwitch ? this.xzSpecInfo.specInfo && this.xzSpecInfo.specInfo
							.specMd5 : this.ginfo.singleSpec && this.ginfo.singleSpec.specMd5,
						attrData: this.ginfo.specSwitch || this.ginfo.attrSwitch || this.ginfo.materialSwitch ?
						{
							spec: this.ginfo.specSwitch && this.xzSpecInfo.ggdata ? this.xzSpecInfo
								.ggdata : '',
							attr: this.xzSxInfo.arr.map(v => v.name).toString(),
							matal: this.xzJlInfo.arr.map(v => `${v.name}${v.num>1?'*'+v.num:''}`)
							.toString(),
							material: this.xzJlInfo.arr.map(v => ({
								id: v.id,
								name: v.name,
								num: v.num || 1
							})),
						} : {},
						spuId: this.ginfo.id,
						num: this.cnum,
						diningType: this.diningType,
					}
				})
				this.jsPrice = res ? res.data  && res.data.money : ''
				this.jslinePrice =  res ? res.data  && res.data.sellMoney : ''
				this.jsDiscountLabel = res ? res.data && res.data.discountLabel : ''
			},
			yl(i) {
				let ci = []
				ci.push(i)
				this.util.preImg({
					idx: 0,
					urls: ci,
				})
			},
			ylsw(i) {
				this.util.preImg({
					idx: i,
					urls: this.ginfo.images,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pwarp {
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
	}

	.header {
		padding: 20rpx 30rpx;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: flex-end;
		z-index: 11;

		image {
			width: 60rpx;
			height: 60rpx;

			&:nth-child(1) {
				// margin-right: 30rpx;
			}
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		font-size: $font-size-sm;
		color: $text-color-assist;
		min-height: 1vh;
		max-height: calc(100vh - 100rpx - 250rpx - 200rpx);
		
		.swiperwh{
			height: 600rpx;
		}

		.imgh {
			height: 400rpx;
		}

		.wrapper {
			width: 100%;
			height: 100%;
			overflow: hidden;
			padding: 30rpx 30rpx 20rpx;
		}

		.title {
			font-size: $font-size-extra-lg;
			color: $text-color-base;
			font-weight: bold;
			margin-bottom: 10rpx;
		}

		.labels {
			display: flex;
			font-size: 20rpx;
			margin-bottom: 10rpx;
			overflow: hidden;
			flex-wrap: wrap;

			.label {
				max-width: 40%;
				padding: 6rpx 10rpx;
				margin-right: 10rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.goodlb{
				font-size: 20rpx;
				padding: 2rpx 6rpx;
				border: 2rpx solid #BABABA;
				color: #BABABA;
			}
		}

		.materials {
			width: 80%;
			margin-bottom: 20rpx;

			.values {
				display: flex;
				flex-wrap: wrap;
				// overflow: hidden;
			}
		}
	}

	.bottom {
		padding: 20rpx 40rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-top: 1rpx solid rgba($color: $border-color, $alpha: 0.3);
		background-color: $bg-color-white;
		position: relative;
		z-index: 11;

		.jljg {
			flex: 1;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			margin-right: 10rpx;

			.price {
				color: #333;
				font-size: $font-size-extra-lg;
				font-weight: bold;
			}

			.materials {
				font-size: $font-size-sm;
				color: $text-color-assist;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
		}


		.buy-now-btn {
			margin-top: 20rpx;
			font-size: $font-size-lg;
		}

		.add-cart-btn {
			margin-top: 20rpx;
			font-size: $font-size-lg;
			// border-radius: $border-radius-base;
		}
	}

	.specv {
		min-width: 115rpx;
		padding: 0 20rpx;
		height: 60rpx;
		border-radius: 10rpx;
		text-align: center;
		line-height: 60rpx;
		background: #F5F5F7;
		margin: 0 20rpx 20rpx 0;

		.specsV {
			width: 180rpx
		}

		.num {
			width: 36rpx;
			height: 36rpx;
			top: -13rpx;
			right: -11rpx;
			background: #f5f5f5;
			border: 2rpx solid #fff;
		}
	}

	.numSpec {
		min-width: 170rpx;
		height: 70rpx;
		line-height: 70rpx;
		margin-right: 20rpx;
		overflow: visible;
		padding: 0;
		.czjj{
			width: 70rpx;
		}
	}

	.num-box {
		width: 220rpx;
		height: 58rpx;
		border-radius: 60rpx;
		border: 2rpx solid #ccc;

		.icon-jianhao,
		.icon-jiahao1 {
			width: 70rpx;
		}

		.number {
			border: 2rpx solid #ccc;
			border-top: none;
			border-bottom: none;
		}
	}

	.opc {
		background: #f8f8f8;
		color: #ccc;
	}

	.ysq {
		color: #ccc;
		width: 282rpx !important;
	}
	
	.desc{
		word-break:break-all;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		overflow: hidden;
	}
	
	.s-btn {
		width: 60rpx;
		height: 60rpx;
		position: relative;
		background: none;
		padding: 0;
		margin-right: 30rpx;
	}
</style>