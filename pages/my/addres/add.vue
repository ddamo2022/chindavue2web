<template>
	<view class="container">
		<view class="address-form">
			<list-cell padding="30rpx">
				<view class="form-item">
					<view class="label">{{$t("my-addres.contact_person")}}</view>
					<input type="text" v-model="params.contact"
						:placeholder="$t('my-addres.please_enter_name_of_recipient')" placeholder-class="placeholder" />
				</view>
			</list-cell>
			<list-cell padding="padding:0">
				<view class="form-item" style="margin-left: 30rpx;">
					<view class="label">{{$t("my-addres.gender")}}</view>
					<mg-radio v-model="params.call" :arr='sexArr'></mg-radio>
				</view>
			</list-cell>
			<list-cell padding="30rpx">
				<view class="form-item">
					<view class="label">{{$t("my-addres.phone_number")}}+66</view>
					<view class="f-bt f-g-1">
						<input class="f-g-1" v-model="params.mobile"
							:placeholder="$t('my-addres.please_enter_phone_number')" placeholder-class="placeholder" />
						<!-- 	<view class="f-g-0" v-if="user && user.mobile">
							<bk-b type='2' c-name='f24 p-5-10' :t='$t("my-addres.auto_fill")' :color="tColor"
								@tab="auZdtx"></bk-b>
						</view> -->
					</view>
				</view>
			</list-cell>
			<list-cell padding="30rpx">
				<view class="form-item">
					<view class="label">{{$t("my-addres.delivery_address")}}</view>
					<view class="f-bt f-g-1">
						<textarea maxlength="250" :focus="focus" v-model="params.address" :placeholder="$t('my-addres.click_to_select')" auto-height />
						<view class="f-g-0" style="display: flex;align-items: center;">
					<!-- 		<text @click="chooseLocation" class='iconfont icon-gengduo f28 c9'></text> -->
							<uni-icons @click="chooseLocation" type="location" size="30"></uni-icons>
						</view>
					</view>

				</view>
			</list-cell>

			<list-cell padding="30rpx">
				<view class="form-item">
					<view class="label">{{$t("my-addres.house_number")}}</view>
					<input type="text" v-model="params.description" placeholder-class="placeholder" />
				</view>
			</list-cell>

			<list-cell padding="30rpx">
				<view class="form-item">
					<view class="label">{{$t("my-addres.select_label")}}</view>
					<view class="f-raw">
						<block v-for="(v,i) in labels" :key="i">
							<bk-b type='2' @tab='label(v)' :c-name="`bf mr30 ${params.label!=v&&'c3'}`"
								:color="params.label==v?tColor:''" :sname="i==1?{padding:'7rpx 30rpx'}:''"
								:t='v'></bk-b>
						</block>
					</view>
				</view>
			</list-cell>

			<!-- <list-cell padding="30rpx" last>
				<view class="form-item">
					<view class="radio" @tap="form.is_default = !form.is_default">
						<view>设为默认地址</view>
					</view>
				</view>
			</list-cell> -->
		</view>
		<view class="save-btn f-bt">
			<button type="default" class="bs60 f-g-1 mr30" v-if="isEdit"
				@click="deleteAdd">{{$t("my-addres.delete")}}</button>
			<button type="info" class="bs60 cf f-g-1 f30" :style="{background:tColor,color:fontColor}"
				:loading="loading" :disabled="loading" @click="save">{{$t("my-addres.save")}}</button>
		</view>
		<mg-map ref='mgmap' @get-cl='setCLP' :scale="20" />
	</view>
</template>

<script>
	import listCell from '@/components/list-cell/list-cell.vue'
	import mgRadio from '@/components/form/my-radio.vue'
	import bkB from '@/components/common/block-b.vue'
	import mgMap from '@/components/form/my-map.vue'
	import utils from '@/common/utils.js'
	export default {
		components: {
			listCell,
			mgRadio,
			bkB,
			mgMap,
		},
		data() {
			return {
				params: {
					contact: '',
					call: 'mr',
					mobile: '',
					address: '',
					details: '',
					description: '',
					label: 'company',
					lat: '',
					lng: '',
					id: '',
				},
				focus:false,
				sexArr: [{
						value: 'mr',
						name: this.$t("my-addres.mr")
					},
					{
						value: 'ms',
						name: this.$t("my-addres.ms"),
						checked: 'true'
					}
				],
				labels: ['company', 'home', 'school'],
				loading: false,
				isEdit: false,
			}
		},
		async onLoad(options) {
			console.log('op', options)
			if (options && options.id) {
				this.isEdit = true
				this.id = options.id
				let res = await this.util.request({
					'url': `${this.api.wdshdz}/${options.id}`,
					data: {
						id: options.id,
					}
				})
				for (let k in this.params) {
					if (k == 'mobile') {
						this.params[k] = this.removePrefix(res.data[k])
					} else {
						this.params[k] = res.data[k]
					}

				}
			}
			if (options && options.add) {
				let addInfo = JSON.parse(decodeURIComponent(options.add))
				this.params.contact = addInfo.userName
				console.log(addInfo.telNumber)
				this.params.mobile = this.removePrefix(addInfo.telNumber)
				// this.params.address = `${addInfo.provinceName}${addInfo.cityName}${addInfo.countyName}`
				this.params.description = addInfo.detailInfo
			}
			if (options && options.type) {
				this.type = options.type
			}
			if (this.user.mobile) {
				this.params.mobile = this.removePrefix(this.user.mobile)
			}
		},
		methods: {
			chooseLocation() {
				this.$refs.mgmap.choose()
			},
			setCLP(res) {
				console.log(res)
				this.params.details = res.address
				this.params.address = res.address
				this.params.lat = res.latitude
				this.params.lng = res.longitude
				this.focus=true
			},
			label(e) {
				this.params.label = e
			},
			removePrefix(phoneNumber) {
				return phoneNumber.replace(/^\+66/, '');
			},
			auZdtx() {
				console.log('mobile', this.user.mobile)
				this.params.mobile = this.removePrefix(this.user.mobile)
			},
			async deleteAdd() {
				await this.util.modal(this.$t("my-addres.confirm_delete_address"))
				let {
					msg
				} = await this.util.request({
					'url': `${this.api.wdshdz}/${this.id}`,
					method: 'DELETE',
					mask: 1,
				})
				this.util.message(msg, 1, 1000)
				let lastPage = this.util.getPage()
				this.type == 'wdxddz' ? lastPage.$vm.getcData() : lastPage.$vm.getData()
				utils.swnb(1000)
			},
			async save() {
				let filterArr = ['lat', 'lng', ]
				if (!this.params.id) {
					filterArr.push('id')
				}
				let judgeData = utils.isFailParams({
					field: this.params,
					filter: filterArr,
					tips: {
						userId: this.$t("my-addres.missing_user"),
						contact: this.$t("my-addres.please_enter_contact_person"),
						mobile: this.$t("my-addres.enter_phone_number"),
						address: this.$t("my-addres.please_select_address"),
						description: this.$t("my-addres.please_enter_house_number_details"),
						label: this.$t("my-addres.please_select_label"),
						id: this.$t("my-addres.missing_address"),
					}
				})
				if (!judgeData) {
					return
				} else {
					// if (!utils.isTelCode(this.params.userTel)) return this.util.message('请输入正确的手机号', 3)
					//
					let params = {
						...this.params
					};
					var phone = params.mobile;
					if (params.mobile.startsWith('+66')) {
						phone = params.mobile;
					} else if (params.mobile.startsWith('66')) {
						phone = '+66' + params.mobile.slice(2);
					} else {
						phone = '+66' + params.mobile;
					}
					params.mobile = phone;

					this.loading = true
					let res = await this.util.request({
						url: this.params.id ? `${this.api.wdshdz}/${this.params.id}` : this.api.wdshdz,
						method: this.params.id ? 'PUT' : 'POST',
						mask: 1,
						data: params,
					})
					if (!res) {
						this.loading = false
					} else {
						this.util.message(this.$t("my-addres.save_successful"), 1, 1000)
						let lastPage = this.util.getPage()
						this.type == 'wdxddz' ? lastPage.$vm.getcData() : lastPage.$vm.getData()
						utils.swnb(1000)
					}
				}
			},
		}

	}
</script>

<style lang="scss" scoped>
	.address-form {
		margin-top: 20rpx;

		.form-item {
			width: 100%;
			display: flex;
			align-items: center;

			.label {
				width: 160rpx;
				font-size: 28rpx;
				font-weight: bold;
			}

			input {
				flex: 1;
			}

			.jump-icon {
				width: 30rpx;
				height: 48rpx;
			}

			.radio {
				display: flex;
				margin-right: 50rpx;

				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
				}
			}
		}
	}

	.save-btn {
		padding: 0 30rpx;
		margin-top: 60rpx;

		button {
			width: 100%;
			font-size: 30rpx;
		}
	}
</style>