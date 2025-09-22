<template>
	<view class="container">
		<uni-nav-bar id='uninavbar' :uropcity="0" :uriconopcity='0' :fixed='false' :ispr='false' :border='false'
			:statusBar="true" :isleft='false' :bg="tColor">
			<view slot='left' class="f-c c0" @click="handReturn">
				<text class="iconfont icon-right c3 f34" :style="{color:fontColor}"></text>
			</view>
			<view class="f-g-1 f-c ml50 wei" :style="{color:fontColor}">{{$t('feedback.title')}}</view>
		</uni-nav-bar>

		<view class="content">
			<view class="feedback-title">
				<text class="title-text">{{$t('feedback.subtitle')}}</text>
			</view>

			<view class="feedback-container" v-if="menuList.length > 0">
				<view class="menu-item" v-for="(item, index) in menuList" :key="index">
					<!-- 菜品信息 -->
					<view class="menu-header">
						<text class="menu-number">{{index + 1}}</text>
						<text class="menu-icon"></text>
						<text class="menu-name">{{item.name}}</text>
					</view>

					<!-- 评分 -->
					<view class="rating-section">
						<view class="section-title">
							<text class="title-label">{{$t('feedback.overall_rating')}}</text>
						</view>
						<view class="stars-container">
							<view class="rating-area">
								<text v-for="(star, starIndex) in 10" :key="starIndex" class="star-item"
									:class="{'star-active': starIndex < item.rating}"
									@click="setRating(index, starIndex + 1)">★</text>
							</view>
							<text class="rating-value">{{item.rating}}/10</text>
						</view>
					</view>

					<!-- 多维度口味评价 -->
					<view class="taste-sections">
						<!-- 酸度评价 -->
						<view class="taste-section">
							<view class="section-title">
								<text class="title-label">{{$t('feedback.sour_level')}}</text>
							</view>
							<view class="option-group">
								<view v-for="(option, optIndex) in sourOptions" :key="optIndex" class="option-item"
									:class="{'option-active': item.sourLevel === option.value}"
									@click="setTasteOption(index, 'sourLevel', option.value)">
									<text>{{option.label}}</text>
								</view>
							</view>
						</view>

						<!-- 辣度评价 -->
						<view class="taste-section">
							<view class="section-title">
								<text class="title-label">{{$t('feedback.spicy_level')}}</text>
							</view>
							<view class="option-group">
								<view v-for="(option, optIndex) in spicyOptions" :key="optIndex" class="option-item"
									:class="{'option-active': item.spicyLevel === option.value}"
									@click="setTasteOption(index, 'spicyLevel', option.value)">
									<text>{{option.label}}</text>
								</view>
							</view>
						</view>

						<!-- 甜度评价 -->
						<view class="taste-section">
							<view class="section-title">
								<text class="title-label">{{$t('feedback.sweet_level')}}</text>
							</view>
							<view class="option-group">
								<view v-for="(option, optIndex) in sweetOptions" :key="optIndex" class="option-item"
									:class="{'option-active': item.sweetLevel === option.value}"
									@click="setTasteOption(index, 'sweetLevel', option.value)">
									<text>{{option.label}}</text>
								</view>
							</view>
						</view>
						<!-- 咸度评价 -->
						<view class="taste-section">
							<view class="section-title">
								<text class="title-label">{{$t('feedback.salty_level')}}</text>
							</view>
							<view class="option-group">
								<view v-for="(option, optIndex) in saltyOptions" :key="optIndex" class="option-item"
									:class="{'option-active': item.saltyLevel === option.value}"
									@click="setTasteOption(index, 'saltyLevel', option.value)">
									<text>{{option.label}}</text>
								</view>
							</view>
						</view>

						<!-- 整体口感 -->
						<view class="taste-section">
							<view class="section-title">
								<text class="title-label">{{$t('feedback.texture_level')}}</text>
							</view>
							<view class="option-group">
								<view v-for="(option, optIndex) in textureOptions" :key="optIndex" class="option-item"
									:class="{'option-active': item.textureLevel === option.value}"
									@click="setTasteOption(index, 'textureLevel', option.value)">
									<text>{{option.label}}</text>
								</view>
							</view>
						</view>


					</view>

					<!-- 改善建议 -->
					<view class="comment-section">
						<view class="section-title">
							<text class="title-label">{{$t('feedback.other_suggestions')}}</text>
						</view>
						<textarea class="comment-input" :placeholder="$t('feedback.input_placeholder')"
							v-model="item.suggestion" maxlength="200"></textarea>
						<text class="word-count">{{item.suggestion.length}}/200</text>
					</view>
				</view>
			</view>

			<!-- 提交按钮 -->
			<view class="submit-container">
				<button class="submit-btn" @click="submitFeedback">{{$t('feedback.submit')}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/third/uni-nav-bar.vue"
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				menuList: [],
				// 酸度选项
				sourOptions: [{
						label: this.$t('feedback.too_sour'),
						value: 'too_sour'
					},
					{
						label: this.$t('feedback.moderate_sour'),
						value: 'moderate_sour'
					},
					{
						label: this.$t('feedback.less_sour'),
						value: 'less_sour'
					}
				],
				// 辣度选项
				spicyOptions: [{
						label: this.$t('feedback.too_spicy'),
						value: 'too_spicy'
					},
					{
						label: this.$t('feedback.moderate_spicy'),
						value: 'moderate_spicy'
					},
					{
						label: this.$t('feedback.less_spicy'),
						value: 'less_spicy'
					}
				],
				// 甜度选项
				sweetOptions: [{
						label: this.$t('feedback.too_sweet'),
						value: 'too_sweet'
					},
					{
						label: this.$t('feedback.moderate_sweet'),
						value: 'moderate_sweet'
					},
					{
						label: this.$t('feedback.not_sweet'),
						value: 'not_sweet'
					}
				],
				// 口感选项
				textureOptions: [{
						label: this.$t('feedback.very_good'),
						value: 'very_good'
					},
					{
						label: this.$t('feedback.good'),
						value: 'good'
					},
					{
						label: this.$t('feedback.normal'),
						value: 'normal'
					},
					{
						label: this.$t('feedback.bad'),
						value: 'bad'
					}
				],

				// 咸度选项
				saltyOptions: [{
						label: this.$t('feedback.too_salty'),
						value: 'too_salty'
					},
					{
						label: this.$t('feedback.moderate_salty'),
						value: 'moderate_salty'
					},
					{
						label: this.$t('feedback.less_salty'),
						value: 'less_salty'
					}
				],

				orderId: '',
				orderInfo: {}
			}
		},
		computed: {
			...mapState({
				copywriting: state => state.layout.copywriting,
				orderSetting: state => state.config.orderSetting,
			}),
		},
		onLoad(options) {
			if (this.fontColor == '#000000' || this.fontColor == '#000') {
				uni.setNavigationBarColor({
					frontColor: '#000000',
				})
			} else {
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#ffffff'
				})
			}

			if (options && options.id) {
				this.orderId = options.id
				this.getOrderInfo()
			} else {
				// 测试数据
				this.initTestData()
			}
		},
		methods: {
			handReturn() {
				//uni.navigateBack()
				uni.reLaunch({
					url: '/pages/index/index'
				})
			},

			// 获取订单信息
			async getOrderInfo() {
				try {
					let {
						data
					} = await this.util.request({
						'url': `${this.api.gettastingmenu}/${this.orderId}`,
						mask: this.$t('common.loading'),
						data: {}
					})
					console.log(data)

					if (data && data.tasting_menus) {
						// 初始化菜单列表数据
						this.initMenuList(data.tasting_menus || [])
					}
				} catch (e) {
					console.error(e)
					uni.showToast({
						title: this.$t('feedback.get_order_info_failed'),
						icon: 'none'
					})
				}
			},

			// 初始化菜单列表
			initMenuList(items) {
				this.menuList = items.map(item => {
					return {
						id: item.id,
						name: item.name_th,
						rating: 0,
						sourLevel: '',
						spicyLevel: '',
						sweetLevel: '',
						textureLevel: '',
						flavorLevel: '',
						saltyLevel: '',
						appearanceLevel: '',
						freshnessLevel: '',
						portionLevel: '',
						repeatLevel: '',
						compareLevel: '',
						recommendLevel: '',
						suggestion: ''
					}
				})
			},

			// 测试数据
			initTestData() {
				this.menuList = [{
					id: '1',
					name: '',
					rating: 0,
					sourLevel: '',
					spicyLevel: '',
					sweetLevel: '',
					textureLevel: '',
					flavorLevel: '',
					saltyLevel: '',
					appearanceLevel: '',
					freshnessLevel: '',
					portionLevel: '',
					repeatLevel: '',
					compareLevel: '',
					recommendLevel: '',
					suggestion: ''
				}]
			},

			// 设置评分
			setRating(menuIndex, rating) {
				this.menuList[menuIndex].rating = rating
			},

			// 设置味道选项
			setTasteOption(menuIndex, optionType, value) {
				const menu = this.menuList[menuIndex]
				menu[optionType] = menu[optionType] === value ? '' : value
			},

			// 切换口味选项
			toggleTasteOption(menuIndex, optionValue) {
				const menu = this.menuList[menuIndex]
				const index = menu.tasteSelected.indexOf(optionValue)

				if (index === -1) {
					menu.tasteSelected.push(optionValue)
				} else {
					menu.tasteSelected.splice(index, 1)
				}
			},

			// 提交评价
			async submitFeedback() {
				// 验证数据
				const invalidMenu = this.menuList.find(menu => menu.rating === 0)
				if (invalidMenu) {
					uni.showToast({
						title: this.$t('feedback.please_rate', {
							name: invalidMenu.name
						}),
						icon: 'none'
					})
					return
				}

				try {
					// 构建提交数据，确保符合后端验证规则
					var items = this.menuList.map(menu => ({
						itemId: menu.id.toString(),
						name: menu.name || this.$t('feedback.unnamed_dish'),
						rating: parseInt(menu.rating) || 0,
						sourLevel: menu.sourLevel || '',
						spicyLevel: menu.spicyLevel || '',
						sweetLevel: menu.sweetLevel || '',
						textureLevel: menu.textureLevel || '',
						flavorLevel: menu.flavorLevel || '',
						saltyLevel: menu.saltyLevel || '',
						appearanceLevel: menu.appearanceLevel || '',
						freshnessLevel: menu.freshnessLevel || '',
						portionLevel: menu.portionLevel || '',
						repeatLevel: menu.repeatLevel || '',
						compareLevel: menu.compareLevel || '',
						recommendLevel: menu.recommendLevel || '',
						suggestion: menu.suggestion || ''
					}));
					const feedbackData = {
						orderId: this.orderId.toString(),
						items: JSON.stringify(items)
					}
					console.log(feedbackData)
					// 调用后端保存接口
					let res = await this.util.request({
						url: `${this.api.feedback}`,
						method: 'POST',
						data: feedbackData,
					    mask: this.$t('feedback.submitting'),
					})

					if (res?.code == 200) {
						this.util.message(res.msg, 3, 2000)
					}

					// uni.showToast({
					// 	title: '评价提交成功',
					// 	icon: 'success'
					// })
					// uni.reLaunch({
					// 	url: '/pages/index/index'
					// })
					// 提交成功后返回上一页
					// setTimeout(() => {
					// 	uni.navigateBack()
					// }, 1500)
				} catch (e) {
					console.error('提交评价失败:', e)
					uni.showToast({
						title: this.$t('feedback.submit_failed'),
						icon: 'none'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #f7f7f7;
		min-height: 100vh;
	}

	.content {
		padding: 20rpx 30rpx 30rpx;
	}

	.feedback-title {
		text-align: center;
		margin-bottom: 40rpx;
		margin-top: 10rpx;

		.title-text {
			font-size: 36rpx;
			font-weight: bold;
			color: #333;
			position: relative;
			display: inline-block;
			padding: 0 20rpx;

			&::after {
				content: '';
				position: absolute;
				bottom: -16rpx;
				left: 50%;
				transform: translateX(-50%);
				width: 80rpx;
				height: 6rpx;
				background-color: rgb(177, 30, 35);
				border-radius: 3rpx;
			}
		}
	}

	.feedback-container {
		position: relative;

		.menu-item {
			background-color: #fff;
			border-radius: 8rpx;
			margin-bottom: 40rpx;
			overflow: hidden;
			box-shadow: 0 2rpx 20rpx rgba(0, 0, 0, 0.05);
			position: relative;
		}

		.menu-header {
			position: relative;
			padding: 35rpx 30rpx;
			background: #fff;
			border-bottom: 1px solid rgba(0, 0, 0, 0.05);

			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				width: 8rpx;
				height: 100%;
				background: rgb(177, 30, 35);
			}

			.menu-number {
				display: inline-block;
				width: 40rpx;
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				background-color: rgb(177, 30, 35);
				color: #fff;
				font-size: 26rpx;
				font-weight: bold;
				border-radius: 50%;
				margin-right: 15rpx;
				vertical-align: middle;
			}

			.menu-icon {
				display: inline-block;
				width: 40rpx;
				height: 40rpx;
				margin-right: 20rpx;
				vertical-align: middle;
				position: relative;
				background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23B11E23"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>');
				background-repeat: no-repeat;
				background-size: contain;
			}

			.menu-name {
				font-size: 36rpx;
				font-weight: 600;
				color: #333;
				vertical-align: middle;
				letter-spacing: 1rpx;
				display: inline-block;
				position: relative;
				top: 1rpx;
			}
		}

		.section-title {
			margin-bottom: 20rpx;

			.title-label {
				font-size: 30rpx;
				color: #333;
				font-weight: 500;
				position: relative;
				padding-left: 15rpx;

				&::before {
					content: '';
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					width: 6rpx;
					height: 26rpx;
					background-color: rgb(177, 30, 35);
					border-radius: 3rpx;
				}
			}
		}

		.rating-section,
		.taste-section,
		.comment-section {
			padding: 30rpx;
			border-bottom: 1px solid #f5f5f5;

			&:last-child {
				border-bottom: none;
			}
		}

		.rating-section {
			padding: 35rpx 30rpx;
			border-bottom: 1px solid #f5f5f5;
		}

		.stars-container {
			display: flex;
			align-items: center;
			padding: 20rpx 0;
			flex-wrap: nowrap;
			position: relative;

			.rating-area {
				display: flex;
				flex-wrap: nowrap;
				max-width: calc(100% - 90rpx);
				overflow-x: auto;
				padding: 5rpx 0;
				-webkit-overflow-scrolling: touch;
				scrollbar-width: none;

				&::-webkit-scrollbar {
					display: none;
				}
			}

			.star-item {
				font-size: 40rpx;
				color: #e8e8e8;
				margin-right: 15rpx;
				transition: all 0.25s ease;
				flex-shrink: 0;

				&:active {
					transform: scale(1.2);
					color: rgb(177, 30, 35);
				}
			}

			.star-active {
				color: rgb(177, 30, 35);
			}

			.rating-value {
				font-size: 32rpx;
				color: rgb(177, 30, 35);
				font-weight: bold;
				margin-left: 20rpx;
				flex-shrink: 0;
				width: 70rpx;
				text-align: right;
			}
		}

		.taste-sections {
			.taste-section {
				&:not(:last-child) {
					margin-bottom: 20rpx;
				}
			}
		}

		.option-group {
			display: flex;
			flex-wrap: wrap;
			margin: 0 -8rpx;

			.option-item {
				flex: 0 0 auto;
				width: calc(33.33% - 16rpx);
				min-width: 0;
				height: 70rpx;
				margin: 0 8rpx 16rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #fafafa;
				border-radius: 6rpx;
				font-size: 28rpx;
				color: #666;
				transition: all 0.2s ease;
				border: 1px solid #eee;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				padding: 0 10rpx;
				box-sizing: border-box;

				&:active {
					background-color: #f3f3f3;
				}
			}

			.option-active {
				background-color: rgb(177, 30, 35);
				color: #fff;
				border-color: rgb(177, 30, 35);
			}
		}

		.comment-input {
			width: 100%;
			height: 180rpx;
			padding: 20rpx;
			font-size: 28rpx;
			border: 1px solid #eee;
			border-radius: 8rpx;
			background-color: #fafafa;
			box-sizing: border-box;
		}

		.word-count {
			font-size: 24rpx;
			color: #999;
			text-align: right;
			margin-top: 10rpx;
			display: block;
		}
	}

	.submit-container {
		padding: 30rpx 0 60rpx;

		.submit-btn {
			background-color: rgb(177, 30, 35);
			color: #fff;
			font-size: 32rpx;
			height: 88rpx;
			line-height: 88rpx;
			border-radius: 44rpx;
			width: 85%;
			margin: 0 auto;
			font-weight: 500;
			border: none;
			box-shadow: 0 4rpx 12rpx rgba(177, 30, 35, 0.2);
			letter-spacing: 2rpx;

			&:active {
				opacity: 0.9;
				transform: translateY(2rpx);
			}
		}
	}

	.icon-right {
		transform: rotateZ(180deg);
	}
</style>