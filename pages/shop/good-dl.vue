<template>
	<view class="goodDl h100v container">
		<view class="content">
			<view class="header">
				<button open-type="share" class="s-btn f-y-c">
					<image :src="mrtxImg"></image>
				</button>
			</view>
			<block v-if="ginfo.images && ginfo.images.length">
				<swiper :duration="1000" indicator-dots class="swiperwh" autoplay :interval="3000">
					<swiper-item v-for="(v, i) in ginfo.images" :key="i" class="swiper-item" @click="ylsw(i)">
						<image :src="v" class="w-100 h-100" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</block>
			<view class="imgh o-h bf f-c" v-else>
				<image :src="ginfo.logo" mode="aspectFit" class="swiper" style="width: 100%;" @click="yl(ginfo.logo)">
				</image>
			</view>
			<view class="wrapper bf">
				<view class="title">{{ ginfo.name }}</view>
				<view class="flex f20">
					<view class="mr10 mb10 neutra-font" v-if="orSet.inventoryShow==1 && (dType == 'out' || dType == 'ins')">库存:
						<text
							v-if="ginfo.specSwitch==0">{{ginfo.singleSpec && ginfo.singleSpec.surplusInventory}}</text>
						<text
							v-else-if="ginfo.specSwitch==1 && xzSpecInfo.specInfo && xzSpecInfo.specInfo.surplusInventory">{{xzSpecInfo.specInfo.surplusInventory}}</text>
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
				<view class="labels"
					v-if="(ginfo.specSwitch==0 && ginfo.discounts && ginfo.discounts.length) || (ginfo.specSwitch==1 && jsDiscountLabel)">
					<block v-if="ginfo.specSwitch==0">
						<view class="label goodlb" :style="{color:'#FF3131',borderColor:'#FF3131'}"
							v-for="(lv,li) in ginfo.discounts" :key="li">{{lv.discountLabel}}</view>
					</block>
					<block v-if="ginfo.specSwitch==1 && jsDiscountLabel">
						<view class="label goodlb" :style="{color:'#FF3131',borderColor:'#FF3131'}">{{jsDiscountLabel}}
						</view>
					</block>
				</view>
				<view class="mb-20 desc" v-if="ginfo.desc && ginfo.desc!='null'">{{ ginfo.desc }}</view>
				<block v-if="ginfo.type==1">
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
									:style="{background:cv.a?tColor:'',color:cv.a?fontColor:''}">
									{{cv.name}}
								</view>
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
												:style="{color:cv.a?fontColor:''}" @tap.stop="minusMaterial(i, ci)">
											</view>
											<view class="specsV f-g-1 f-bt">
												<view class="f-g-1 t-o-e f-s c0" :style="{color:cv.a?fontColor:''}">
													{{ cv.name }}
												</view>
												<view class="f-g-0 c0 wei neutra-font" :style="{color:cv.a?fontColor:''}">
													฿{{ cv.price && parseFloat(cv.price) }}</view>
											</view>
											<view class='iconfont icon-jiahao f34 c3 f-g-0 czjj'
												:style="{color:cv.a?fontColor:''}" @tap.stop="addMaterial(i, ci)">
											</view>
											<view class="p-a num bsf cf f20 f-c" v-show="cv.a"
												:style="{background:cv.a?tColor:'',color:cv.a?fontColor:''}">{{cv.num}}
											</view>
										</template>
									</template>
								</view>
							</view>
						</view>
					</block>
				</block>
				<block v-if="ginfo.type==2 && ginfo.setmealData">
					<block v-if="ginfo.setmealData.fix.length">
						<view v-for="(v,i) in ginfo.setmealData.fix" :key="i">
							<view class="wei mt20">{{v.name}}</view>
							<view class="tcgoods mt10 flex">
								<view class="gswh bs20 mr20 f-g-0 posi-r" :class="{'gswhb':cv.a}"
									:style="{borderColor:cv.a?tColor:'#f5f5f5'}" v-for="(cv,ci) in v.goods" :key="ci">
									<view class="f-g-1 f-c-c">
										<image :src="cv.logo" mode="aspectFit" class="whs"></image>
									</view>
									<view class="t-o-e t-c">{{cv.name}}</view>
									<view class="mt10 t-o-e f-c neutra-font"><text class="wei">{{cv.num || 1}}份</text></view>
									<view class="f-g-0 p10 f-c">
										<view class="materials-box" v-if="cv.isSpec">
											<button type="primary" size="mini" :style="{backgroundColor:tColor,color:fontColor}" class="materials-btn"
												@tap.stop="tchanddl(i,v,ci,cv)">选规格</button>
											<view class="number-badge" v-show="cv.num">
												<view class="number neutra-font" :style="{backgroundColor:tColor,color:fontColor}">{{ cv.num }}</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</block>
					<block v-if="ginfo.setmealData.match.length">
						<view v-for="(v,i) in ginfo.setmealData.match" :key="i" class="mb20">
							<view class="wei mt20">{{v.name}}{{v.goods && v.goods.length}}选{{v.select}}</view>
							<view class="tcgoods mt10 flex">
								<view class="gswh bs20 mr20 f-g-0 posi-r" :class="{'gswhb':cv.a}"
									:style="{borderColor:cv.a?tColor:'#f5f5f5'}" v-for="(cv,ci) in v.goods" :key="ci"
									@click="stcGoods(i,v,ci,cv)">
									<view class="f-g-1 f-c-c">
										<image :src="cv.logo" mode="aspectFit" class="whs"></image>
									</view>
									<view class="t-o-e t-c">{{cv.name}}</view>
									<view class="mt10 t-o-e f-c neutra-font">฿<text class="wei">{{cv.addPrice}}</text></view>
									<!-- <view class="tclable posi-a" :style="{color:tColor,borderColor:tColor}">{{cv.label}}</view> -->
									<view class="f-g-0 p10 f-c">
										<actions v-if="cv.price" :materials-btn="cv.isSpec" @materials="tchanddl(i,v,ci,cv)"
											:number="cv.num" @add="tchandcar($event,i,ci,cv)"
											@minus="tchandcar($event,i,ci,cv)" :product="cv" />
									</view>
								</view>
							</view>
						</view>
					</block>
				</block>
			</view>
			<view class="p2">
				<view class="bf p2 bs10" v-if="ginfo.content">
					<view class="f28 wei c3">商品详情</view>
					<view class="mt10">
						<mg-rtext type='2' :content="ginfo.content" />
					</view>
				</view>
			</view>
		</view>
		<view class="bottom"
			v-if="ginfo.isShow!=1 && (!ginfo.specSwitch && ginfo.singleSpec && ginfo.singleSpec.surplusInventory!=0 || ginfo.specSwitch && !ginfo.singleSpec)">
			<view class="flex aict f-bt">
				<view class="jljg f-g-1">
					<view class="price neutra-font">
						฿{{ jsPrice>=0 && jsPrice || (ginfo.specSwitch==1 ? ginfo.mixPrice : ginfo.singleSpec.price)}}
						<text class="f26 t-d-l c9 nowei ml10"
							v-if="ginfo.specSwitch==0 && ginfo.singleSpec.price && ginfo.singleSpec.linePrice>0 && (Number(ginfo.singleSpec.linePrice)>Number(ginfo.singleSpec.price))">฿{{parseFloat(ginfo.singleSpec.linePrice)}}</text>
						<text class="f26 t-d-l c9 nowei ml10"
							v-if="ginfo.specSwitch==1 && jslinePrice>0 && jsPrice && (Number(jslinePrice)>Number(jsPrice))">฿{{jslinePrice}}</text>
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
				<view class="f-g-0">
					<view class="num-box f-bt">
						<view class='iconfont icon-jianhao f40 cd f-g-0 f-c' :style="{color:tColor}" @tap.stop="minus">
						</view>
						<input class="f-g-1 number t-c h-100 f28" type="number" v-model="cnum" @input="cNum" />
						<view class='iconfont icon-jiahao1 f42 f-g-0 f-c' :style="{color:tColor}" @tap.stop="add">
						</view>
					</view>
				</view>
			</view>
			<view class="f22 c9 f-w" v-if="ginfo.type==2">
				<!-- <view v-if="xzTcInfo && xzTcInfo.tcdata && xzTcInfo.tcdata.length">{{xzTcInfo.tcdata}}</view> -->
				<block v-if="xzTcInfo && xzTcInfo.arr && xzTcInfo.arr.length">
					<view class="f-c f-g-1 mt20">
						<view class="zd f-c" @click="tcShow = !tcShow" :style="{background:tColor}">
							<text class="iconfont icon-top cf f24 wei" v-if="tcShow"></text>
							<text class="iconfont icon-youjiantou cf f24 wei" v-else></text>
						</view>
					</view>
					<view class="tcdb1 mt10" v-if="tcShow">
						<view class="goods1 bf p-r f-bt mb20" v-for="(v,i) in xzTcInfo.arr" :key="i">
							<view class="f-g-1 flex">
								<view class="logo f-g-0" :style="{borderColor:tColor}"><image :src="v.logo" mode="aspectFill" class="wh bsf"></image></view>
								<view class="ml10 f-g-1">
									<view class="f28 c3 t-o-e">{{v.name}}</view>
									<view class="f-bt f24 c3 neutra-font">
										<view>฿{{v.addPrice}}</view>
										<view>x{{v.num}}</view>
									</view>
									<view class="f24 c9 mt5" v-if="v.isSpec && v.g">
										<text v-if="v.g.jldata">[{{v.g.jldata}}]</text>
										<text v-if="v.g.attribute">[{{v.g.attribute}}]</text>
									</view>
								</view>
							</view>
							<view class="f-g-0 ml20 ricz f-x-e" v-if="v.type!=1">
								<actions :materials-btn="v.isSpec" @materials="tchanddls(v)"
									:number="v.num" @add="tchandcars($event,v)"
									@minus="tchandcars($event,v)" :product="v" />
							</view>
						</view>
					</view>
					<view class="tcdb flex f-nw mt10" v-else>
						<view class="xztcgoods bf p-r f-c mr30 f-g-0" v-for="(v,i) in xzTcInfo.arr" :key="i" :style="{borderColor:tColor}">
							<image :src="v.logo" mode="aspectFill" class="wh bsf"></image>
							<view class="p-a gnum f24 f-c cf neutra-font" :style="{background:tColor}">x{{v.num}}</view>
							<view class="p-a gclose f24 f-c cf" :style="{background:tColor}">
								<text class="iconfont icon-suo cf f24" v-if="v.type==1"></text>
								<text class="iconfont icon-guanbi cf f20" v-if="v.type==2" @click="tcClose(v)"></text>
							</view>
						</view>
					</view>
				</block>
			</view>
			<view class="f-bt">
				<button v-if="ginfo.type!=2" type="primary" plain class="buy-now-btn f-g-1 bs60" :style={color:tColor,borderColor:tColor}
					@tap="addBuyNow">立即购买</button>
				<button type="primary" class="add-cart-btn f-c f-g-1 ml20 bs60"
					:style="{backgroundColor:tColor,color:fontColor}" @tap="addToCart">加入购物袋</button>
			</view>
		</view>
		<view v-if="isIpx" class='bgf'></view>
		<sq-btn type="1" :lType="2" ref="sqBtn"></sq-btn>
		<userPrivacy ref="privacy"></userPrivacy>
		<product-modal ref="productModal" :product="tcproduct" :visible="productModalVisible"
			@cancel="closeProductDetailModal" @add-to-cart="handleAddToCartInModal" :storeId="storeId"></product-modal>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	import {
		getDw
	} from "@/common/wechat-util.js"
	import mgRtext from '@/components/common/functionCmp/rich-text.vue'
	import sqBtn from '@/components/common/sq-btn.vue'
	import userPrivacy from "@/components/user/userPrivacy.vue";
	import Actions from "@/components/goods/actions/actions.vue"
	import ProductModal from '@/components/goods/product-modal/tc-modal.vue'
	export default {
		name: 'goods-dl',
		components: {
			mgRtext,
			sqBtn,
			userPrivacy,
			Actions,
			ProductModal,
		},
		data() {
			return {
				dType: 'out',
				goodId: '',
				storeId: '',
				ginfo: {},
				cnum: 1,
				jsPrice: '',
				jslinePrice: '',
				jsDiscountLabel: '',
				diningType: '',
				tableId: 0,
				butType: '',
				tcproduct: {},
				tcShow:false,
			}
		},
		onLoad(options) {
			if (options && options.goodId) {
				this.goodId = options.goodId
				this.storeId = options.storeId
				this.dType = options.dType
				this.diningType = options.diningType
				this.tableId = options.tableId
				if (options.dType == 'ins') {
					this.loadIns(this.storeId)
				} else {
					this.load(this.storeId)
				}
			}
			this.util.setNT('商品详情')
		},
		onReady() {
			var _this = this;
			// #ifdef MP-WEIXIN
			wx.getPrivacySetting({
				success: res => {
					if (res.needAuthorization) {
						_this.$refs.privacy.open(res.privacyContractName)
						return;
					}
				},
				fail: () => {},
				complete: (res) => {
					console.log(res)
				}
			})
			// #endif
		},
		mixins: [utilMixins],
		computed: {
			...mapState(['sjxx', 'sjgood']),
			...mapState('dndc', ['latLng']),
			...mapMutations(["setNoLogin"]),
			...mapState({
				storeBasicSetting: state => state.config.storeBasicSetting,
				orSet: state => state.config.orderSetting,
				scarList: state => state.scarList.out || [],
				scarListIns: state => state.scarList.ins || [],
			}),
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
					obj.specInfo = this.ginfo.skus.find(v => v.specName.length && v.specName[0].id == i)
					return obj
				} else {
					return {}
				}
			},
			xzTcInfo() {
				let obj = {
					money: 0,
					arr: [],
					tcdata: [],
					fc : [],
					xz : []
				}
				if (this.ginfo.type == 2 && this.ginfo.setmealData && this.ginfo.setmealData.fix.length) {
					this.ginfo.setmealData.fix.forEach(({
						goods
					}) => {
						goods.forEach(cv => {
							cv.type = 1
							obj.arr.push(cv)
							obj.fc.push(`${cv.name}*${cv.num || 1} ${cv.g && cv.g.attribute || ''} ${cv.g && cv.g.jldata || ''}`)
						})
					})
				}
				if (this.ginfo.type == 2 && this.ginfo.setmealData && this.ginfo.setmealData.match.length) {
					let money = 0,
						arr = []
					this.ginfo.setmealData.match.forEach(({
						goods
					}) => {
						goods.forEach(cv => {
							if (cv.a) {
								cv.type = 2
								obj.arr.push(cv)
								obj.fc.push(`${cv.name}*${cv.num || 1} ${cv.g && cv.g.attribute || ''} ${cv.g && cv.g.jldata || ''}`)
								obj.xz.push(cv)
							}
						})
					})
					// obj.money = +obj.money.toFixed(2)
					// obj.arr = arr
					obj.tcdata = obj.fc.join('+')
				}
				return obj
			},
			mrtxImg() {
				return `${this.onImgurl}index/menupopup_btn_share_normal.png`
			},
		},
		methods: {
			...mapActions(['clearMycar', "getConfig", "getSjxx", "supdCar", "supInCar"]),
			async load() {
				await this.getLoginInfo()
				this.getGoodsDl()
				await this.getDw()
				await this.getSjxx({
					storeId: this.storeId,
					lat: this.lc.latitude || '',
					lng: this.lc.longitude || '',
				})
				// this.cDiningType()
				this.getConfig({
					ident: ["storeBasicSetting", "orderSetting"]
				})
			},
			async loadIns() {
				await this.getLoginInfo()
				this.getGoodsDlIns()
				await this.getDw()
				await this.getSjxx({
					storeId: this.storeId,
					lat: this.lc.latitude || '',
					lng: this.lc.longitude || '',
				})
				this.getConfig({
					ident: ["storeBasicSetting", "orderSetting"]
				})
			},
			async getDw() {
				let lc = await getDw({
					t: 0
				})
				this.lc = lc
			},
			// cDiningType() {
			// 	let arr = [],
			// 		sjsz = this.sjxx && this.sjxx.storeSetting
			// 	if (this.sjxx && sjsz && sjsz.pickupSwitch == 1 && sjsz.takeoutSwitch == 1) {
			// 		this.buyType = 2
			// 		if (this.orSet.orderPriority == 2) {
			// 			this.buyType = 1
			// 		}
			// 		if (this.xdtype) {
			// 			this.buyType = this.xdtype
			// 			setTimeout(() => {
			// 				uni.removeStorageSync('xdtype')
			// 			}, 2000)
			// 		}
			// 		return this.diningType = this.buyType == 2 ? this.sjxx.storeSetting.defaultType : 0
			// 	} else if (this.sjxx && sjsz && sjsz.pickupSwitch == 0 && sjsz.takeoutSwitch == 1) {
			// 		this.buyType = 1
			// 		return this.diningType = this.buyType == 2 ? this.sjxx.storeSetting.defaultType : 0
			// 	} else if (this.sjxx && sjsz && sjsz.pickupSwitch == 1 && sjsz.takeoutSwitch == 0) {
			// 		this.buyType = 2
			// 		return this.diningType = this.buyType == 2 ? this.sjxx.storeSetting.defaultType : 0
			// 	}
			// },
			async getGoodsDl() {
				let {
					data
				} = await this.util.request({
					url: `${this.api.goods}/${this.goodId}`,
					data: {
						storeId: this.storeId,
						diningType: this.diningType
					}
				})
				// this.ginfo = data
				this.product(data)
				this.havebxp = data.category.findIndex(v => v.isMust == 1) > -1
			},
			async getGoodsDlIns() {
				let {
					data
				} = await this.util.request({
					url: `${this.api.ingoods}/${this.goodId}`,
					data: {
						storeId: this.storeId,
						diningType: this.diningType
					}
				})
				this.product(data)
				this.havebxp = data.category.findIndex(v => v.isMust == 1) > -1
			},

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
				setTimeout(() => {
					this.comPrice()
				}, 500)
				this.ginfo = JSON.parse(JSON.stringify(val))
				this.ginfo.content = val.content && val.content.content ? val.content.content : ''
				// this.$set(this.ginfo, 'number', 1)
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
			},
			addMaterial(pi, ci) {
				let r = this.ginfo.materialData
				for (let n in r[pi].materialList) {
					// if (!r[pi].materialList[ci].a) return
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
				if(this.ginfo.type==2 && this.ginfo.setmealData &&  this.ginfo.setmealData.match){
					const gdsum = this.ginfo.setmealData.match.reduce((total, obj) => total + obj.select, 0)
					const xzsum = this.xzTcInfo.xz.reduce((total, obj) => total + obj.num, 0)
					if(xzsum<gdsum){
						return this.util.message('请选择可选搭配', 3)
					}
				}
				this.butType = 2
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
					},
					tcInfo = {
						setMealData: this.xzTcInfo.arr.map(v => ({
							id: v.id,
							name: v.name,
							num: v.num || 1,
							price: v.addPrice,
							logo: v.logo,
							specMd5: v.specMd5,
							attrData: v.g ? (v.g.specMd5 ? v.g.attrData : (v.g.specSwitch || v.g.attrSwitch || v.g
								.materialSwitch) ? {
								spec: v.g.specSwitch && v.g.ggdata ? v.g.ggdata : '',
								attr: v.g.attribute,
								matal: v.g.jldata,
								material: v.g.material,
							} : {}) : {},
						})),
						tcdata: '',
					}
				console.log(1, this.xzJlInfo, this.xzSxInfo, this.xzSpecInfo,this.xzTcInfo)
				sxInfo.attribute = this.xzSxInfo.arr.map(v => v.name).toString()
				jlInfo.jldata = this.xzJlInfo.arr.map(v => `${v.name}${v.num>1?'*'+v.num:''}`).toString()
				jlInfo.jlids = this.xzJlInfo.arr.map(v => v.id).toString()
				tcInfo.tcdata = this.xzTcInfo.arr.map(v => `${v.name}${v.num>1?'*'+v.num:''}`).toString()
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
				}, this.ginfo, specInfo, sxInfo, jlInfo, tcInfo)
				if (this.dType == 'ins') {
					this.handcarIns({
						g: goods,
						addwz: this.cnum > 1 ? this.cnum : 1,
					})
				} else {
					this.handcar({
						g: goods,
						addwz: this.cnum > 1 ? this.cnum : 1,
					})
				}
				this.cnum = 1
			},
			async handcar(p) {
				console.log('p', p)
				try {
					let res = await this.supdCar({
						storeId: this.storeId,
						spuId: p.g.id,
						specMd5: p.g.specSwitch ? p.g.specInfo && p.g.specInfo.specMd5 : p.g.specMd5 || p.g
							.singleSpec.specMd5,
						attrData: p.g.specMd5 ? p.g.attrData : (p.g.specSwitch || p.g.attrSwitch || p.g
							.materialSwitch) ? {
							spec: p.g.specSwitch && p.g.ggdata ? p.g.ggdata : '',
							attr: p.g.attribute,
							matal: p.g.jldata,
							material: p.g.material,
						} : {},
						setMealData:p.g.type==2 && p.g.setMealData ? p.g.setMealData : [],
						num: p.addwz,
						lat: this.lc.latitude || '',
						lng: this.lc.longitude || '',
						diningType: this.diningType,
					})
					if (res) {
						if (this.butType == 2) {
							this.go({
								t: 5,
								url: `/pages/index/goods`
							})
						} else if (this.butType == 1) {
							if (this.scarList && this.scarList.goodsCount) {
								this.pay()
							}
						}
					}
				} catch (e) {
					console.log(e)
				}
			},
			async handcarIns(p) {
				console.log('pp', p)
				try {
					let res = await this.supInCar({
						storeId: this.storeId,
						spuId: p.g.id,
						specMd5: p.g.specSwitch ? p.g.specInfo && p.g.specInfo.specMd5 : p.g.specMd5 || p.g
							.singleSpec.specMd5,
						attrData: p.g.specMd5 ? p.g.attrData : (p.g.specSwitch || p.g.attrSwitch || p.g
							.materialSwitch) ? {
							spec: p.g.specSwitch && p.g.ggdata ? p.g.ggdata : '',
							attr: p.g.attribute,
							matal: p.g.jldata,
							material: p.g.material,
						} : {},
						setMealData:p.g.type==2 && p.g.setMealData ? p.g.setMealData : [],
						num: p.addwz,
						lat: this.lc.latitude || '',
						lng: this.lc.longitude || '',
						diningType: this.diningType,
						tableId: this.tableId,
					})
					if (res) {
						if (this.butType == 2) {
							this.go({
								t: 5,
								url: `/pages/shop/in/goods?storeId=${this.storeId}&diningType=${this.diningType}&tableId=${this.tableId}`
							})
						} else if (this.butType == 1) {
							if (this.scarListIns && this.scarListIns.goodsCount) {
								if (this.diningType == 4 && this.scarListIns.tables.state == 0) {
									this.go({
										t: 5,
										url: `/pages/shop/in/goods?storeId=${this.storeId}&diningType=${this.diningType}&tableId=${this.tableId}`
									})
								} else {
									this.payIns()
								}
							}
						}
					}
				} catch (e) {
					console.log(e)
				}
			},
			async tchanddl(pi,pv,ci,cv) {
				console.log(cv)
				this.sPi = pi
				this.sCi = ci,
				this.sPv = pv
				let r = this.ginfo.setmealData && this.ginfo.setmealData.match && pv.type == 1 ? this.ginfo.setmealData.fix : this.ginfo.setmealData.match
				for (let n in r[pi].goods) {
					const sum = r[pi].goods.reduce((total, obj) => total + obj.num, 1)
					if (n == ci) {
						if(sum>r[pi].select && pv.type == 2){
							return this.util.message('不能再加了', 3, 1500)
						}
					}
				}
				let res = await this.util.request({
					'url': `${this.api.goods}/${cv.spuId}`,
					data: {
						storeId: this.storeId,
						diningType: this.diningType
					}
				})
				this.tcproduct = res.data
				this.productModalVisible = true
				this.$refs['productModal'].open(res.data, this.storeId, this.diningType)
			},
			handleAddToCartInModal(product) {
				let pi = this.sPi,
				ci = this.sCi,
				pv = this.sPv,
				r = this.ginfo.setmealData && this.ginfo.setmealData.match && pv.type == 1 ? this.ginfo.setmealData.fix : this.ginfo.setmealData.match
				for (let n in r[pi].goods) {
					if (n == ci) {
						this.$set(r[pi].goods[n], 'g', product.g)
						if(pv.type == 2){
							this.$set(r[pi].goods[n], 'num',  1)
							this.$set(r[pi].goods[n], 'a', 1)
						}
					}
				}
				this.comPrice()
				this.closeProductDetailModal()
			},
			closeProductDetailModal() {
				this.productModalVisible = false
				this.$refs['productModal'].close()
				setTimeout(() => {
					this.product = {}
				}, 100)
			},
			tchandcar(v, pi, ci, cv) {
				let r = this.ginfo.setmealData && this.ginfo.setmealData.match
				for (let n in r[pi].goods) {
					const sum = r[pi].goods.reduce((total, obj) => total + obj.num, v.addwz)
					if (n == ci) {
						if(sum>r[pi].select && v.addwz>=1){
							return this.util.message('不能再加了', 3, 1500)
						}
						this.$set(r[pi].goods[n], 'num', r[pi].goods[n].num = parseInt(r[pi].goods[n].num) + (v.addwz))
						this.$set(r[pi].goods[n], 'a', sum < 1 ? 0 : 1)
					}
				}
				this.comPrice()
			},
			stcGoods(pi, pv, ci, cv) {
				// this.tccurr = ci
				// if (cv.a) return
				let r = this.ginfo.setmealData && this.ginfo.setmealData.match
				for (let n in r[pi].goods) {
					const sum = r[pi].goods.reduce((total, obj) => total + obj.num, 1)
					if (n == ci) {
						if(sum>r[pi].select){
							if(!r[pi].goods[n].num){
								return this.util.message('不能再加了', 3, 1500)
							}else{
								this.$set(r[pi].goods[n], 'a', 0)
								this.$set(r[pi].goods[n], 'num', 0)
								 return
							}
							// return this.util.message('不能再加了', 3, 1500)
						}
						if(cv.isSpec){
							this.tchanddl(pi, pv, ci, cv)
						}else{
							this.$set(r[pi].goods[n], 'num',  r[pi].goods[n].num == 1 ? 0 : 1)
							this.$set(r[pi].goods[n], 'a', r[pi].goods[n].a == 1 ? 0 : 1)
						}
					}
				}
				this.comPrice()
			},
			tcClose(v){
				let r = this.ginfo.setmealData && this.ginfo.setmealData.match
				for(let i=0;i<r.length;i++){
					for(let j=0;j<r[i].goods.length;j++){
						if(r[i].goods[j].spuId == v.spuId){
							this.$set(r[i].goods[j], 'a', 0)
							this.$set(r[i].goods[j], 'num', 0)
						}
					}
				}
			},
			tchandcars(v,cv){
				let r = this.ginfo.setmealData && this.ginfo.setmealData.match
				for(let i=0;i<r.length;i++){
					for(let j=0;j<r[i].goods.length;j++){
						const sum = r[i].goods.reduce((total, obj) => total + obj.num, v.addwz)
						if(r[i].goods[j].spuId == cv.spuId){
							if(sum>r[i].select && v.addwz>=1){
								return this.util.message('不能再加了', 3, 1500)
							}
							this.$set(r[i].goods[j], 'num', r[i].goods[j].num = parseInt(r[i].goods[j].num) + (v.addwz))
						}
					}
				}
				this.comPrice()
			},
			async tchanddls(cv){
				let r = this.ginfo.setmealData && this.ginfo.setmealData.match && cv.type == 1 ? this.ginfo.setmealData.fix : this.ginfo.setmealData.match
				for(let i=0;i<r.length;i++){
					if(r[i].id == cv.setmealGoodsId){
						this.sPi = i
						this.sPv = r[i]
					}
					for(let j=0;j<r[i].goods.length;j++){
						if(r[i].goods[j].spuId == cv.spuId){
							this.sCi = j
						}
					}
				}
				let res = await this.util.request({
					'url': `${this.api.goods}/${cv.spuId}`,
					data: {
						storeId: this.storeId,
						diningType: this.diningType
					}
				})
				this.tcproduct = res.data
				this.productModalVisible = true
				this.$refs['productModal'].open(res.data, this.storeId, this.diningType)
			},
			async addBuyNow() {
				await this.clearMycar({
					storeId: this.sjxx.id,
				})
				await this.addToCart()
				this.butType = 1
			},
			async pay() {
				if (!this.isLogin && !this.noLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				let sjsz = this.sjxx.storeSetting
				if (!sjsz || (sjsz.pickupSwitch != 1 && sjsz.takeoutSwitch != 1)) {
					this.util.message('门店暂无下单渠道', 3, 2000)
					return
				}
				if (this.havebxp) {
					return this.util.message('请添加必选商品', 3, 1500)
				}
				// if (!this.jjmbxx) {
				// 	try {
				// 		await this.requestSM(['integralChange', 'balanceChange', 'vipChange'])
				// 	} catch (e) {
				// 		this.jjmbxx = true
				// 		return
				// 	}
				// }
				uni.navigateTo({
					url: `/pages/shop/out/pay-order?diningType=${this.diningType ==1 ? this.sjxx && this.sjxx.storeSetting.defaultType : this.diningType}`
				})
			},
			async payIns() {
				if (!this.isLogin && !this.noLogin) {
					this.$refs['sqBtn'].open()
					return
				}
				if (this.havebxp) {
					return this.util.message('请添加必选商品', 3, 1500)
				}
				// if (!this.jjmbxx) {
				// 	try {
				// 		await this.requestSM(['integralChange', 'balanceChange', 'vipChange'])
				// 	} catch (e) {
				// 		this.jjmbxx = true
				// 		return
				// 	}
				// }
				this.go({
					t: 1,
					url: `/pages/shop/in/pay-order?tableId=${this.tableId}&diningType=${this.diningType}`
				})
			},
			async comPrice() {
				let res = await this.util.request({
					'url': this.dType == 'ins' ? this.api.sPrice : this.api.cPrice,
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
						setMealData:this.ginfo.type ==2 && this.xzTcInfo && this.xzTcInfo.arr.map(v => ({
							id: v.id,
							name: v.name,
							num: v.num || 1,
							price: v.addPrice,
							logo: v.logo,
							specMd5: v.specMd5,
							attrData: v.g ? (v.g.specMd5 ? v.g.attrData : (v.g.specSwitch || v.g.attrSwitch || v.g
								.materialSwitch) ? {
								spec: v.g.specSwitch && v.g.ggdata ? v.g.ggdata : '',
								attr: v.g.attribute,
								matal: v.g.jldata,
								material: v.g.material,
							} : {}) : {},
						})),
						spuId: this.ginfo.id,
						num: this.cnum,
						diningType: this.diningType,
					}
				})
				this.jsPrice = res ? res.data && res.data.money : ''
				this.jslinePrice = res ? res.data && res.data.sellMoney : ''
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
		},
		onShareAppMessage() {
			let p =
				`pages/index/goods?goodId=${this.goodId}&storeId=${this.storeId}&tableId=${this.tableId}&diningType=${this.diningType}&dType=${this.dType}`
			return this.util.mpShare({
				t: this.ginfo && this.ginfo.name,
				i: this.getImgS(this.ginfo && this.ginfo.logo),
				p,
			})
		}
	}
</script>
<style scoped lang="scss">
	.goodDl {
		.header {
			padding: 20rpx 30rpx;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			display: flex;
			justify-content: flex-end;
			z-index: 11;

			.s-btn {
				width: 60rpx;
				height: 60rpx;
				position: relative;
				background: none;
				padding: 0;
			}

			image {
				width: 60rpx;
				height: 60rpx;

				&:nth-child(1) {
					// margin-right: 30rpx;
				}
			}
		}

		.content {
			padding-bottom: 440rpx;

			.swiperwh {
				height: 600rpx;
			}

			.imgh {
				height: 500rpx;
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

				.goodlb {
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
			padding: 20rpx 30rpx 60rpx 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			border-top: 1rpx solid rgba($color: $border-color, $alpha: 0.3);
			background-color: #fff;
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			z-index: 19;

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

			.czjj {
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

		.desc {
			word-break: break-all;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 4;
			overflow: hidden;
		}
	}

	.tcgoods {
		overflow: hidden;
		overflow-x: scroll;

		.gswh {
			background: #f5f5f5;
			width: 260rpx;
			// height: 300rpx;
			border: 2rpx solid #f5f5f5;

			.whs {
				width: 140rpx;
				height: 180rpx;
			}

			.tclable {
				top: 5rpx;
				left: 5rpx;
				font-size: 20rpx;
				padding: 2rpx 6rpx;
				color: '#FF3131';
				border: 2rpx solid #FF3131;
				border-radius: 6rpx;
			}
		}

		.gswhb {
			background: #F6FAFF;
			border: 2rpx solid #f5f5f5;
		}
	}
	
	.materials-box {
		position: relative;
		display: flex;
	
		.materials-btn {
			border-radius: 50rem !important;
		}
	
		.number-badge {
			z-index: 4;
			position: absolute;
			right: -16rpx;
			top: -14rpx;
			background-color: $bg-color-white;
			border-radius: 100%;
			width: 1.1rem;
			height: 1.1rem;
			display: flex;
			align-items: center;
			justify-content: center;
	
			.number {
				font-size: 20rpx;
				flex-shrink: 0;
				color: $bg-color-white;
				width: 0.9rem;
				height: 0.9rem;
				line-height: 0.9rem;
				text-align: center;
				border-radius: 100%;
			}
		}
	}
	
	
	.zd{
		width: 56rpx;
		height: 30rpx;
		border-radius: 20rpx;
		background: #f00;
		
		.icon-youjiantou{
			transform: rotateZ(90deg);
			margin-right: 6rpx;
		}
	}
	
	.tcdb{
		padding: 20rpx 0;
		overflow: hidden;
		overflow-x: scroll;
		
		.xztcgoods{
			width: 90rpx;
			height: 90rpx;
			border-radius: 50%;
			border: 2rpx solid #f00;
			.gnum{
				width: 60rpx;
				height: 30rpx;
				bottom: -14rpx;
				background: #f00;
				border-radius: 20rpx;
			}
			.gclose{
				width: 32rpx;
				height: 32rpx;
				background: #f00;
				border-radius: 50%;
				top: 0;
				right: -12rpx;
			}
		}
	}
	
	.tcdb1{
		padding: 20rpx 0;
		max-height: 500px;
		overflow-y: scroll;
		.logo{
			width: 90rpx;
			height: 90rpx;
			border-radius: 50%;
			border: 2rpx solid #f00;
		}
		.ricz{
			width: 175rpx;
		}
	}
</style>