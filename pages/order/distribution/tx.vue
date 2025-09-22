<template>
	<view>
		<view class="bf p3" v-if="xtData.rule">
			<mg-cell @tab="ljyq" btt="提现方式" bttc='f30' isr='1' arrow="1" hc='1'>
				<text slot='ft' class="cf7" :style="{color:tColor}">{{txName||'设置提现方式'}}</text>
			</mg-cell>
			<view v-if="params.type==1">
				<mg-input cname="p23" v-model="params.wxUserName" isr='1' ht='真实姓名' htc='f30' :pr='`请输入真实姓名`'
					icn='f30' />
			</view>
			<view v-if="params.type==2">
				<mg-input cname="p23" v-model="params.aliUserName" isr='1' ht='支付宝姓名' htc='f30' :pr='`请输入支付宝姓名`'
					icn='f30' />
				<mg-input cname="p23" v-model="params.aliAccount" isr='1' ht='支付宝账号' htc='f30' :pr='`请输入支付宝账号`'
					icn='f30' />
			</view>
			<view v-if="params.type==3">
				<mg-input cname="p23" v-model="params.bankName" isr='1' ht='所属银行' htc='f30' :pr='`请输入所属银行`' icn='f30' />
				<mg-input cname="p23" t='number' v-model="params.bankAccount" isr='1' ht='银行卡号' htc='f30'
					:pr='`请输入银行卡号`' icn='f30' />
				<mg-input cname="p23" v-model="params.bankUserName" isr='1' ht='户主姓名' htc='f30' :pr='`请输入户主姓名`'
					icn='f30' last="1" />
			</view>
			<view class="f-g-1 bf mdbd p30">
				<view class="mdbdt">
					<view class="c9">
						<text class="c6 f28">提现金额</text>
						<text class="f24 ml10">最低提现金额{{xtData.money || 0}}THB</text>
					</view>
					<view class="p20 b-b-e f-row" style="align-items: flex-start;">
						<text class="mr20 f56 wei" style="margin-top: 0rpx;">฿</text>
						<input v-model="params.money" :style="{caretColor:tColor}" focus='true' type="digit"
							class="f-g-1 mdinput wei" placeholder="请输入提现金额" :maxlength="txMoney && txMoney.length"
							placeholder-class='cd f32 nowei' />
					</view>
				</view>
				<view class="mdbdb mt15">
					<view class="c9 f-x-bt f24">
						<text>可提现金额：฿{{txMoney?txMoney:0}}</text>
						<text class="cf7" :style="{color:tColor}" @click="qbtx">全部提现</text>
					</view>
				</view>
				<!-- <mg-cell @tab="go({t:1,url:'txmx'})" btt="提现记录" bttc='f30' isr='1' arrow="1" hc='1'></mg-cell> -->
				
				<mg-cell btt="结算周期" bttc='f30' :ft='`t+${xtData.period || 0}`' ftc='c3' />
				<view class="bf p3">
					<view class="f30 mb10">提现说明</view>
					<mg-rtext type='2' :content="xtData.body" />
				</view>
				<view class="foot-btnc p-r mt10">
					<button @click="save" :disabled="loading" :loading="loading" class="foot-btn" hover-class="be"
						:style="{background:tColor}">提现</button>
				</view>
			</view>
		</view>
		<mg-popup close='1' v-model="shareshow" :z-index="5000">
			<view class="p0">
				<view class="bf p3 fxc">
					<view class="f-c">
						<view class="m02 f32 wei">请选择提现方式</view>
					</view>
					<view class="sharec">
						<mg-cell v-if="tabs.length" @tab="changeTab(i,v)" v-for="(v,i) in tabs" :key='i' cname="p30"
							bttc="f30" ac='iconright1' ftc="f24 cd">
							<view slot='bd'>
								<view class="flex">
									<view class="iconimg">
										<!-- <mg-img :src='`${onImgurl}tx/${v.icn}.png`'></mg-img> -->
										<mg-img :src='`../../static/tx/${v.icn}.png`'></mg-img>
									</view>
									<view class="ml20">{{v.name}}</view>
								</view>
							</view>
							<view slot='ft'>
								<view class="flex">
									<view class="iconimg" v-if="i==aIdx">
										<!-- <mg-img :src='`${onImgurl}tx/xzhover.png`'></mg-img> -->
										<mg-img :src='`../../static/tx/xzhover.png`'></mg-img>
									</view>
									<view class="iconimg" v-else>
										<!-- <mg-img :src='`${onImgurl}tx/xz.png`'></mg-img> -->
										<mg-img :src='`../../static/tx/xz.png`'></mg-img>
									</view>
								</view>
							</view>
						</mg-cell>
					</view>
				</view>
			</view>
		</mg-popup>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import mgRtext from '@/components/common/functionCmp/rich-text.vue'
	import utils from '@/common/utils.js'
	import MgCell from '@/components/common/my-cell.vue'
	import mgPopup from '@/components/common/popup.vue'
	import MgImg from '@/components/common/my-img.vue'
	import mgInput from '@/components/form/my-input.vue'
	export default {
		name: 'tx',
		components: {
			mgRtext,
			MgCell,
			mgPopup,
			MgImg,
			mgInput,
		},
		data() {
			return {
				loading: false,
				params: {
					money: '',
					wxUserName:'',
					aliUserName: '',
					aliAccount: '',
					bankName: '',
					bankUserName: '',
					bankAccount: '',
					type: '',
				},
				shareshow: false,
				aIdx: 0,
				tabs: [],
				xtData: {},
				txName: '',
				txMoney: '',
			}
		},
		onLoad(options) {
			// this.getSystem()
			this.util.setNT('提现')
			if (options.t) {
				this.params.item = options.t
				console.log('options', options.t)
			}
			this.getLoginInfo().then(() => {
				this.getTxConfig()
				if (this.params.item == '1') {
					this.txMoney = this.user.bonus
				} else if (this.params.item == '2') {
					this.txMoney = this.user.commission
				}
			})
		},
		onShow() {
			
		},
		computed: {
			...mapState('dndc', ['fxsInfo', 'fxsSq']),
		},
		methods: {
			async getTxConfig() {
				// let data = {
				// 	open:1,
				// 	channel:['1','2','3','4'],
				// }
				// let {
				// 	data
				// } = await this.util.request({
				// 	'url': this.api.config,
				// 	data: {
				// 		ident: this.params.item == '1' ? 'oldWithNewWithdrawalSet' :
				// 			'distributionWithdrawalSet'
				// 	},
				// })
				this.xtData = this.fxsInfo && this.fxsInfo.withdrawal
				let a = [],
					t = this.xtData.way
				if (t.includes(4)) {
					a.push({
						name: '余额',
						icn: 'ye',
						type: '4',
					})
				}
				if (t.includes(1)) {
					a.push({
						name: '微信',
						icn: 'wx',
						type: '1',
					})
				}
				if (t.includes(2)) {
					a.push({
						name: '支付宝',
						icn: 'zfb',
						type: '2',
					})
				}
				if (t.includes(3)) {
					a.push({
						name: '银行卡',
						icn: 'yhk',
						type: '3',
					})
				}
				this.tabs = a
				if (this.tabs.length) {
					for (let k in this.tabs) {
						this.params.type = this.tabs[0].type
						this.txName = this.tabs[0].name
					}
				}
			},
			ljyq() {
				this.shareshow = true
			},
			changeTab(index, v) {
				this.aIdx = index
				this.params.type = v.type
				this.txName = v.name
				this.shareshow = false
			},
			qbtx() {
				this.params.money = this.txMoney
			},
			async save() {
				if (!this.params.type) return this.util.message('请设置提现方式', 3)
				if (!this.params.money) {
					return this.util.message('请输入提现金额', 3)
				}
				if (this.params.type == '1') {
					if (!this.params.wxUserName) {
						return this.util.message('请输入真实姓名', 3)
					}
				}
				if (this.params.type == '2') {
					if (!this.params.aliUserName) {
						return this.util.message('请输入支付宝姓名', 3)
					}
					if (!this.params.aliAccount) {
						return this.util.message('请输入支付宝账号', 3)
					}
				}
				if (this.params.type == '3') {
					if (!this.params.bankName) {
						return this.util.message('请输入所属银行', 3)
					}
					if (!this.params.bankAccount) {
						return this.util.message('请输入银行卡号', 3)
					}
					if (!this.params.bankUserName) {
						return this.util.message('请输入户主姓名', 3)
					}
				}
				if (+this.params.money.trim() > +this.txMoney) return this.util.message('输入金额大于可提现金额', 3)
				if (+this.params.money.trim() < +this.xtData.money) return this.util.message('金额需大于最低提现金额', 3)
				this.loading = true
				this.params.money = this.params.money.trim()
				let res = await this.util.request({
					'url': this.api.memberBW,
					method: 'POST',
					mask: 1,
					data: this.params
				})
				if (!res) {
					this.loading = false
				} else {
					this.util.message('提交成功', 1, 1000)
					utils.stfn(() => {
						this.go({
							t: 1,
							url: 'fxzx'
						})
					})
					this.loading = false
				}
			},
		},
	}
</script>
<style scoped lang="scss">
	.mdbd {
		border-radius: 40rpx 40rpx 0 0;
	}

	.mdbdt {
		margin: 0 30rpx;
	}

	.mdinput {
		font-size: 70rpx;
		height: 2.9rem;
		line-height: 2.9rem;
		caret-color: #17E883
	}

	.mdbdb {
		padding: 0 50rpx;
	}

	.hdwith {
		width: 100rpx;
	}

	.fxc {
		border-radius: 30rpx 30rpx 0 0;
	}

	.sharec {
		margin-top: 50rpx;
	}

	.iconimg {
		width: 48rpx;
		height: 48rpx;
	}
</style>
