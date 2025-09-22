<template>
	<uni-popup ref="popup" cname="z999" type="bottom" @change="change" :sname="{}">
		<view class="pwarp">
			<view class="tit p-r f-c" style="height:0px">
				<text class="p-a cIcon iconfont icon-guanbi c6 f36" @click="close"></text>
			</view>
			<view class="bf p3 content">
				<view class="flex f-y-c">
					<view class="bsf mr20 f-g-0" style="width: 100rpx;height: 100rpx;">
						<image class="wh" :src="user.applylogo || mrtxImg" mode="aspectFill">
						</image>
					</view>
				</view>
				<view class="f30 con">
					<view class="wei f36">{{$t("sq-btn.welcome")}}{{user && user.applyName}}</view>
				</view>
				<view>
					<view class="f-s b-b-e pb20">
						<view class="f-g-0" style="padding-left: 20rpx; padding-right: 40rpx;">
							{{$t('chooseAvatar.birthday')}}
						</view>
						<view class="f-g-1">
							<picker mode="date" :value="params.birthday" @change="bindDateChange" :start="startDate"
								:end="endDate">
								<view >
									{{params.birthday || $t('modal.select_date')}}
								</view>
							</picker>
						</view>
					</view>
					<view class="mt30">
						<button class="f34 f-c bs60 cf" @click="save"
							:style="{background:params.birthday ? tColor :'#f7f7f7',color:params.birthday ? fontColor :'#999'}">{{$t('modal.save')}}</button>
					</view>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		name: 'editbirthday',
		components: {
			uniPopup,
		},
		props: {

		},
		data() {
			return {
				loading: false,
				params: {
					birthday: ''
				},
			}
		},
		computed: {
			...mapState({
				basicSetting: state => state.config.basicSetting,
			}),
			mrtxImg() {
				return `${this.onImgurl}my/mrtx.png`
			},
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		watch: {

		},
		methods: {
			...mapMutations(["setMobile", "setToken", "setUser", "setNoLogin"]),
			open() {
				console.log('12')

				this.$refs['popup'].open()
			},
			close() {
				this.$refs['popup'].close()
			},
			change({
				show
			}) {
				this.$emit('change', show)
			},
			async bindDateChange(e) {
				console.log(e)
				//await this.util.modal(this.$t('chooseAvatar.merchants_discounts_based_on_birthday'))
				this.params.birthday = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			async save(){
				let rest = await this.util.request({
					'url': this.api.updateBirthday,
					method: 'post',
					data: {
						birthday: this.params.birthday 
					}
				}).then((rest) => {
					console.log('rest', rest)
					//this.$emit('rf')
					this.util.message(rest.data, 1, 1000)
					this.close()
				}).catch((e) => {
					this.loading = false
				})
			}
		}
	}
</script>
<style scoped lang='scss'>
	.pwarp {
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
	}

	.content {
		padding-top: 15rpx;
	}

	.tit {
		background: #fff;
		height: 20rpx;

		.cIcon {
			top: 26rpx;
			right: 30rpx;
		}
	}

	.con {
		margin-top: 10rpx;
		margin-bottom: 60rpx;
	}

	.btn {
		margin: 0 80rpx;

		button {
			height: 98rpx;
			line-height: 98rpx;
		}
	}

	.mt60 {
		margin-top: 60rpx;
	}

	.codeBtn {
		width: 180rpx;
		height: 60rpx;
		border-radius: 60rpx;
		background-color: #f7f7f7;
		color: rgba(0, 0, 0, .3);
	}
</style>