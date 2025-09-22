<template>
	<mg-modal :ismr="true" v-model="show" :width="type==1?'632rpx':type==2?'632rpx':'562rpx'" :z-index="3000">
		<view v-if="type==1&&co.couponList" class="">
			<view class="tctop posi-r">
				<view class="tcimg">
					<mg-img :src="co.images || `${onImgurl}common/yhqbg.png`"></mg-img>
				</view>
				<view class="posi-a tctopbd f-col">
					<view class="f-g-0 tctopbdt t-c">
						<view class="f34 wei cf f-c">
							<view class="hx"></view>
							<view class="zfls4">{{co.name}}</view>
							<view class="hx"></view>
						</view>
					</view>
					<scroll-view scroll-y class="f-1 tctopbdb o-h">
						<block v-if="co.couponGive && co.couponList.length">
							<view class="jlic p-r" v-for="(v,i) in co.couponList" :key='i'>
								<view class="bgimg">
									<image class="wh" :src="`${onImgurl}common/xyhq.png`"></image>
								</view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<view class="f-c cf5 f-y-e l-h1" v-if="v.type==1">
											<text class="f56 wei">{{v.rule.money}}</text>
											<text class="ml5">THB</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==2">
											<text class="f56 wei">{{v.rule.discount}}</text>
											<text class="ml5">{{$t('my-coupon.discount')}}</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==3">
											<text class="f30" v-if="v.rule.disType==1">{{$t('my-coupon.highest_price_discount')}}</text>
											<text class="f30" v-if="v.rule.disType==2">{{$t('my-coupon.lowest_price_discount')}}</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==4">
											<text class="f30" v-if="v.rule.disContent==1">{{$t('my-coupon.free_shipping')}}</text>
											<text class="f36" v-if="v.rule.disContent==3">{{$t('my-coupon.instant_discount')}}{{v.rule.money}}THB</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==5">
											<text class="f30">{{$t('my-coupon.fixed')}}{{v.rule.money}}THB</text>
										</view>
										<view class="c9 mt10 f24">
											<span v-if="v.startSwitch==0">{{$t('my-coupon.no_restrictions')}}</span>
											<span
												v-else-if="v.startSwitch==1">{{$t('my-coupon.min_purchase')}}฿{{v.startMoney && parseFloat(v.startMoney)}}</span>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c t-l">
										<view class="f26 t-o-e wei c0">{{v.name}}
										</view>
										<view class="f22 c9" v-if="v.timeArr.endTime">{{$t('my-coupon.valid_until')}}{{v.timeArr.endTimeFormat}}
										</view>
									</view>
								</view>
							</view>
						</block>
					</scroll-view>
				</view>
				<view class="posi-a w100 tctopft f-c f22" v-if="co.receiveType==2">
					<button :disabled="loading" :style="{background:loading?'transparent':tColor}"
						class="lqbtn bs10 cf f28 f-c zfls4 wei bt" @click="ljlq">{{$t('my-coupon.claim_now')}}</button>
				</view>
				<view class="posi-a w100 tctopft f-c f22" v-else>
					<button class="lqbtn bs10 cf f28 f-c zfls4 wei bt" @click="show=false">{{$t('my-coupon.issued_successfully')}}</button>
				</view>
			</view>
			<view @click="show=false" class="tcbtm f-c"><text class="iconfont icon-guanbi1 cf"
					style="font-size: 68rpx;"></text></view>
		</view>
		<block v-else-if="type==2&&co.couponArr">
			<view class="tctop posi-r">
				<view class="tcimg2">
					<mg-img :src="co.bgImg||`${onImgurl}img/yhqbg.png`"></mg-img>
				</view>
				<view class="posi-a tctopbd2 f-col">
					<view class="f-g-0 tctopbdt t-c">
						<view class="f34 wei cf f-c">
							<view class="hx"></view>
							<view class="zfls4">{{co.name}}</view>
							<view class="hx"></view>
						</view>
					</view>
					<scroll-view scroll-y class="f-1 tctopbd2b o-h">
						<view v-for="(v,i) in co.couponArr" :key='i' class='mb20'>
							<mg-coupon ptype="2" :color='color' cname='mb20' :co='v'></mg-coupon>
						</view>
					</scroll-view>
				</view>
				<view class="posi-a w100 tctopft f-c f22">
					<button :disabled="loading" :style="{background:loading?'transparent':''}"
						class="lqbtn bs10 cf f28 f-c zfls4 wei bt" @click="ljlq">{{$t('my-coupon.claim_now')}}</button>
				</view>
			</view>
			<view @click="show=false" class="tcbtm2 f-c"><text class="iconfont icon-guanbi1 cf"
					style="font-size: 68rpx;"></text></view>
		</block>
		<block v-else-if="type==3">
			<view class="tctop posi-r">
				<view class="tcimg3">
					<mg-img :src="co.images || `${onImgurl}common/xrzxbg.png`"></mg-img>
				</view>
				<view class="posi-a tctopbd3 f-col">
					<scroll-view scroll-y class="f-1 tctopbd3b o-h">
						<block v-if="co.couponSwitch && co.couponList.length">
							<view class="jlic p-r" v-for="(v,i) in co.couponList" :key='i'>
								<view class="bgimg">
									<image class="wh" :src="`${onImgurl}common/xyhq.png`"></image>
								</view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<!-- <view>x<text class="ml10 wei cf5 f36">{{v.num}}</text></view> -->
										<view class="f-c cf5 f-y-e l-h1" v-if="v.type==1">
											<text class="f56 wei">{{v.rule.money}}</text>
											<text class="ml5">THB</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==2">
											<text class="f56 wei">{{v.rule.discount}}</text>
											<text class="ml5">{{$t('my-coupon.discount')}}</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==3">
											<text class="f30" v-if="v.rule.disType==1">{{$t('my-coupon.highest_price_discount')}}</text>
											<text class="f30" v-if="v.rule.disType==2">{{$t('my-coupon.lowest_price_discount')}}</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==4">
											<text class="f30" v-if="v.rule.disContent==1">{{$t('my-coupon.free_shipping')}}</text>
											<text class="f36" v-if="v.rule.disContent==3">{{$t('my-coupon.instant_discount')}}{{v.rule.money}}THB</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==5">
											<text class="f30">{{$t('my-coupon.fixed')}}{{v.rule.money}}THB</text>
										</view>
										<view class="c9 mt10 f24">
											<span v-if="v.startSwitch==0">{{$t('my-coupon.no_restrictions')}}</span>
											<span
												v-else-if="v.startSwitch==1">{{$t('my-coupon.min_purchase')}}฿{{v.startMoney && parseFloat(v.startMoney)}}</span>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c t-l">
										<view class="f26 t-o-e wei c0">{{v.name}}
										</view>
										<view class="f22 c9" v-if="v.timeArr.endTime">{{$t('my-coupon.valid_until')}}{{v.timeArr.endTimeFormat}}
										</view>
									</view>
								</view>
							</view>
						</block>
						<block v-if="co.balanceSwitch && co.balance>0">
							<view class="jlic p-r">
								<view class="bgimg">
									<image class="wh" :src="`${onImgurl}common/xyhq.png`"></image>
								</view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<view class="icon">
											<mg-img :src="`${onImgurl}common/ye.png`" m='aspectFit'></mg-img>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c">
										<view class="f26"><text class="mr15 wei cf5">{{co.balance}}</text>{{$t('my-coupon.bonus_balance')}}
										</view>
										<view class="f22 c9" v-if="co.endTime">{{$t('my-coupon.valid_until')}}{{co.endTime.substring(0, 10)}}
										</view>
									</view>
								</view>
							</view>
						</block>
						<block v-if="co.integralSwitch && co.integral>0">
							<view class="jlic p-r">
								<view class="bgimg">
									<image class="wh" :src="`${onImgurl}common/xyhq.png`"></image>
								</view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<view class="icon">
											<mg-img :src="`${onImgurl}common/jf.png`" m='aspectFit'></mg-img>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c">
										<view class="f26"><text class="mr15 wei cf5">{{co.integral}}</text>{{$t('my-coupon.bonus_points')}}
										</view>
										<view class="f22 c9" v-if="co.endTime">{{$t('my-coupon.valid_until')}}{{co.endTime.substring(0, 10)}}
										</view>
									</view>
								</view>
							</view>
						</block>
					</scroll-view>
					<view class="dlblq">
						<button :disabled="loading" :style='{background:tColor}' class="lqbtn bs10 cf f28 f-c zfls4 wei bt"
						 @click="dllq">{{$t('my-coupon.login_and_claim')}}</button>
					</view>
				</view>
			</view>
			<view @click="$emit('input', false)" class="tcbtm3 f-c"><text class="iconfont icon-guanbi1 cf f60"
					style="font-size: 68rpx;"></text>
			</view>
		</block>
		<block v-else-if="type==4&&co">
			<view class="bf posi-r hyqy bs20">
				<!-- <view class="tcimg2">
					<mg-img :src="co.bgImg||`${onImgurl}img/yhqbg.png`"></mg-img>
				</view> -->
				<view class="wei f34">{{co.showName}}</view>
				<!-- <view class="mt20">赠送余额10000</view> -->
				<view class="mt20">{{co.desc}}</view>
			</view>
			<view @click="show=false" class="tcbtm2 f-c"><text class="iconfont icon-guanbi1 cf"
					style="font-size: 68rpx;"></text></view>
		</block>
		<block v-else-if="type==5&&co">
			<view class="bf posi-r hyqy bs20 f-c">
				<view class="codeImg t-c">
					<mg-img :src="co.verificationCode"></mg-img>
					<view class="f24 c9 mt20">{{$t('my-coupon.show_redeem_code')}}</view>
				</view>
			</view>
			<view @click="show=false" class="tcbtm2 f-c"><text class="iconfont icon-guanbi1 cf"
					style="font-size: 68rpx;"></text></view>
		</block>
		<view v-if="type==6&&co" class="">
			<view class="tctop posi-r">
				<view class="tcimg">
					<mg-img :src="co.image"></mg-img>
				</view>
				<view class="posi-a tctopbd tctopbd6 f-col">
					<view class="f-g-0 tctopbdt t-c">
						<view class="f34 wei cf f-c">
							<view class="hx"></view>
							<view class="zfls4">{{co.title}}</view>
							<view class="hx"></view>
						</view>
					</view>
					<scroll-view scroll-y class="f-1 tctopbdb o-h">
						<block v-if="co.couponSwitch && co.couponGive && co.couponGive.length">
							<view class="jlic p-r" v-for="(v,i) in co.couponGive" :key='i'>
								<view class="bgimg">
									<image class="wh" :src="`${onImgurl}common/xyhq.png`"></image>
								</view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<view class="f-c cf5 f-y-e l-h1" v-if="v.type==1">
											<text class="f56 wei">{{v.rule.money}}</text>
											<text class="ml5">THB</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==2">
											<text class="f56 wei">{{v.rule.discount}}</text>
											<text class="ml5">{{$t('my-coupon.discount')}}</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==3">
											<text class="f30" v-if="v.rule.disType==1">{{$t('my-coupon.highest_price_discount')}}</text>
											<text class="f30" v-if="v.rule.disType==2">{{$t('my-coupon.lowest_price_discount')}}</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==4">
											<text class="f30" v-if="v.rule.disContent==1">{{$t('my-coupon.free_shipping')}}</text>
											<text class="f36" v-if="v.rule.disContent==3">{{$t('my-coupon.instant_discount')}}{{v.rule.money}}THB</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==5">
											<text class="f30">{{$t('my-coupon.fixed')}}{{v.rule.money}}THB</text>
										</view>
										<view class="c9 mt10 f24">
											<span v-if="v.startSwitch==0">{{$t('my-coupon.no_restrictions')}}</span>
											<span
												v-else-if="v.startSwitch==1">{{$t('my-coupon.min_purchase')}}฿{{v.startMoney && parseFloat(v.startMoney)}}</span>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c t-l">
										<view class="f26 t-o-e wei c0">{{v.name}}
										</view>
										<view class="f22 c9" v-if="v.timeArr.endTime">{{$t('my-coupon.valid_until')}}{{v.timeArr.endTimeFormat}}
										</view>
									</view>
								</view>
								<view class="p-a cpsnum c0 t-c" v-if="co.couponList && co.couponList.find(item => item.id == v.id).num > 1" :style="{background:tColor}">x{{co.couponList.find(item => item.id == v.id).num}}</view>
							</view>
						</block>
						<block v-if="co.balanceSwitch && co.balance>0">
							<view class="jlic p-r">
								<view class="bgimg">
									<image class="wh" :src="`${onImgurl}common/xyhq.png`"></image>
								</view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<view class="icon">
											<mg-img :src="`${onImgurl}common/ye.png`" m='aspectFit'></mg-img>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c">
										<view class="f26"><text class="mr15 wei cf5">{{co.balance}}</text>{{$t('my-coupon.bonus_balance')}}
										</view>
									</view>
								</view>
							</view>
						</block>
						<block v-if="co.integralSwitch && co.integral>0">
							<view class="jlic p-r">
								<view class="bgimg">
									<image class="wh" :src="`${onImgurl}common/xyhq.png`"></image>
								</view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<view class="icon">
											<mg-img :src="`${onImgurl}common/jf.png`" m='aspectFit'></mg-img>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c">
										<view class="f26"><text class="mr15 wei cf5">{{co.integral}}</text>{{$t('my-coupon.bonus_points')}}
										</view>
									</view>
								</view>
							</view>
						</block>
					</scroll-view>
				</view>
				<view class="posi-a w100 tctopft f-c f22">
					<button :disabled="loading" :style="{background:loading?'transparent':tColor}"
						class="lqbtn bs10 cf f28 f-c zfls4 wei bt">{{$t('my-coupon.claimed_successfully')}}</button>
				</view>
			</view>
			<view @click="show=false" class="tcbtm f-c"><text class="iconfont icon-guanbi1 cf"
					style="font-size: 68rpx;"></text></view>
		</view>
		<block v-else-if="type==7&&co">
			<view class="bf posi-r hyqy bs20 f-c-c tcyhq7">
				<view class="f-c-c">
					<view class='iconfont icon-gou1 f40 wei c9' :style="{color:tColor}"></view>
					<view class="wei f40 mt-20" :style="{color:tColor}">{{$t('my-coupon.claimed_successfully')}}</view>
				</view>
				<view class="mt30">
					<view class="f28">
						<text v-if="co.integralSwitch && co.integral">
							<text :style="{color:tColor}" class="f30 wei ml5 mr10">{{co.integral}}</text>
							{{$t('my-coupon.points')}}
						</text>
						<text v-if="co.couponSwitch && co.couponData && co.couponData.length">
							<text :style="{color:tColor}" class="f30 wei ml5 mr10">{{co.couponData.reduce((total, obj) => total + obj.num, 0)}}</text>
							{{$t('my-coupon.coupon')}}
						</text>
						{{$t('my-coupon.added_to_account')}}
					</view>
					<view class="f24 c9 mt5"> {{$t('my-coupon.personal_center')}}</view>
				</view>
				<view class="f-bt mt30 btn">
					<view class="f-1 left f-c t-o-e" :style="{borderColor:tColor,color:tColor}" @click="$emit('cj')">{{$t('my-coupon.participate_now')}}</view>
					<view class="f-1 right f-c t-o-e ml20 cf" :style="{background:tColor}" @click="$emit('xd')">{{$t('my-coupon.place_order')}}</view>
				</view>
			</view>
			<view @click="show=false" class="tcbtm2 f-c"><text class="iconfont icon-guanbi1 cf"
					style="font-size: 68rpx;"></text></view>
		</block>
		<view v-else-if="type==8&&co" class="">
			<view class="tctop posi-r bs20 bfa">
				<view class="tcimg">
					<!-- <mg-img :src="co.image"></mg-img> -->
				</view>
				<view class="posi-a tctopbd tctopbd6 f-col">
					<scroll-view scroll-y class="f-1 tctopbdb o-h">
						<block v-if="co.coupon && co.coupon.length">
							<view class="jlic p-r" v-for="(v,i) in co.coupon" :key='i'>
								<view class="bgimg">
									<image class="wh" :src="`${onImgurl}common/xyhq.png`"></image>
								</view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<view class="f-c cf5 f-y-e l-h1" v-if="v.type==1">
											<text class="f56 wei">{{v.coupon.rule.money}}</text>
											<text class="ml5">THB</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==2">
											<text class="f56 wei">{{v.coupon.rule.discount}}</text>
											<text class="ml5">{{$t('my-coupon.discount')}}</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==3">
											<text class="f26" v-if="v.coupon.rule.disType==1">{{$t('my-coupon.highest_price_discount')}}</text>
											<text class="f26" v-if="v.coupon.rule.disType==2">{{$t('my-coupon.lowest_price_discount')}}</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==4">
											<text class="f30" v-if="v.coupon.rule.disContent==1">{{$t('my-coupon.free_shipping')}}</text>
											<text class="f36" v-if="v.coupon.rule.disContent==3">{{$t('my-coupon.instant_discount')}}{{v.coupon.rule.money}}THB</text>
										</view>
										<view class="f-c cf5 f-y-e l-h1" v-else-if="v.type==5">
											<text class="f30">{{$t('my-coupon.fixed')}}{{v.coupon.rule.money}}THB</text>
										</view>
										<view class="c9 mt10 f24">
											<span v-if="v.coupon.startSwitch==0">{{$t('my-coupon.no_restrictions')}}</span>
											<span
												v-else-if="v.coupon.startSwitch==1">{{$t('my-coupon.min_purchase')}}฿{{v.coupon.startMoney && parseFloat(v.coupon.startMoney)}}</span>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c t-l">
										<view class="f26 t-o-e wei c0">{{v.name}}
										</view>
										<view class="f22 c9" v-if="v.coupon.timeArr.endTime">{{$t('my-coupon.valid_until')}}{{v.coupon.timeArr.endTimeFormat}}
										</view>
									</view>
								</view>
								<view class="p-a cpsnum cf t-c" :style="{background:tColor}">x{{v.num}}</view>
							</view>
						</block>
						<block v-if="co.balance && co.balance>0">
							<view class="jlic p-r">
								<view class="bgimg">
									<image class="wh" :src="`${onImgurl}common/xyhq.png`"></image>
								</view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<view class="icon">
											<mg-img :src="`${onImgurl}common/ye.png`" m='aspectFit'></mg-img>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c">
										<view class="f26"><text class="mr15 wei cf5">{{co.balance}}</text>{{$t('my-coupon.bonus_balance')}}
										</view>
									</view>
								</view>
							</view>
						</block>
						<block v-if="co.integral && co.integral>0">
							<view class="jlic p-r">
								<view class="bgimg">
									<image class="wh" :src="`${onImgurl}common/xyhq.png`"></image>
								</view>
								<view class="p-a coubd wh f-row">
									<view class="coubdl p20 f-c-c">
										<view class="icon">
											<mg-img :src="`${onImgurl}common/jf.png`" m='aspectFit'></mg-img>
										</view>
									</view>
									<view class="p-10-30 f-1 f-col f-x-c">
										<view class="f26"><text class="mr15 wei cf5">{{co.integral}}</text>{{$t('my-coupon.bonus_points')}}
										</view>
									</view>
								</view>
							</view>
						</block>
					</scroll-view>
				</view>
				<view class="posi-a w100 tctopft f-c f22">
					<button :disabled="loading" :style="{background:loading?'transparent':tColor}"
						class="lqbtn bs10 cf f28 f-c zfls4 wei bt" @click="show=false">{{$t('my-coupon.claimed_successfully')}}</button>
				</view>
			</view>
			<view @click="show=false" class="tcbtm f-c"><text class="iconfont icon-guanbi1 cf"
					style="font-size: 68rpx;"></text></view>
		</view>
		<block v-else-if="type==9&&co">
			<view class="bf posi-r hyqy bs20">
				<mg-img :src="co.code2"></mg-img>
			</view>
			<view @click="show=false" class="tcbtm2 f-c"><text class="iconfont icon-guanbi1 cf"
					style="font-size: 68rpx;"></text></view>
		</block>
	</mg-modal>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import mgModal from '@/components/common/modal.vue'
	import utils from '@/common/utils.js'
	export default {
		name: 'searchBox',
		components: {
			mgModal,
		},
		props: {
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
			value: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: ''
			},
			type: { //1弹窗优惠券2--3新人礼包
				type: String,
				default: '1'
			},
		},
		data() {
			return {
				yhqbg: '/static/images/common/xyhq.png',
				loading: false,
			}
		},
		computed: {
			show: {
				get() {
					return this.value;
				},
				set(newVal) {
					this.$emit("input", newVal)
				}
			},
		},
		methods: {
			async ljlq() {
				// if (!await this.checkLogin()) return
				this.loading = true
				let res = await this.util.request({
					'url': this.api[this.type == 1 ? 'wc' : 'lqfqb'],
					method: 'POST',
					mask: 1,
					data: {
						id: this.co.id,
					},
				})
				if (res) {
					this.util.message(res.msg, 1)
					utils.stfn(() => {
						this.loading = this.show = false
					}, 500)
				} else {
					this.loading = false
				}
			},
			async srlq(){
				this.loading = true
				let res = await this.util.request({
					url: this.api.birthday,
					mask: 1,
				})
				if (res) {
					this.util.message(res.msg, 1)
					utils.stfn(() => {
						this.loading = this.show = false
					}, 500)
					this.refreshUser({
						nomask: 1,
						get: 1,
						now: 1,
					})
				} else {
					this.loading = false
				}
			},
			async dllq() {
				if (!this.isLogin) {
					this.$emit('sh')
					this.$emit('close')
					return
				}
				this.$emit('close')
				return
			},
		},
		async created() {}
	}
</script>

<style scoped lang="scss">
	.zfls4 {
		letter-spacing: 4rpx;
	}

	.tctop {}
	
	.hyqy{
		padding: 60rpx;
		height: 540rpx;
	}

	.tcimg {
		width: 100%;
		height: 845rpx;
	}

	.tctopbd {
		width: 572rpx;
		height: 540rpx;
		top: 168rpx;
		left: 50%;
		transform: translateX(-50%);
		// background: #fff;
	}
	.tctopbd6{
		top: 80rpx;
		height: 578rpx;
	}

	.tctopft {
		height: 83rpx;
		bottom: 36rpx;
		color: #fff;

		.lqbtn {
			height: 100%;
			width: 360rpx;
		}
	}

	.tctopbdt {
		padding: 20rpx 30rpx;

		.hx {
			margin: 0 15rpx;
			width: 24rpx;
			height: 1.5px;
			background: #fff;
		}
	}

	.tctopbdb {
		padding: 0rpx 20rpx;
		// overflow-y: scroll;
	}

	.tcbtm {
		margin-top: 48rpx;
	}

	/*2*/
	.tcimg2 {
		width: 100%;
		height: 845rpx;
	}

	.tctopbd2 {
		width: 572rpx;
		height: 540rpx;
		top: 168rpx;
		left: 50%;
		transform: translateX(-50%);
	}

	.tctopbd2b {
		padding: 0rpx 20rpx;
	}

	.tcbtm2 {
		margin-top: 30rpx;
	}

	/**/
	.tcimg3 {
		height: 838rpx;
	}

	.tctopbd3 {
		width: 100%;
		height: 500rpx;
		top: 338rpx;
		left: 50%;
		transform: translateX(-50%);
		padding-bottom: 40rpx;
	}

	.tctopbd3b {
		padding: 30rpx 40rpx 20rpx;
	}

	.tcbtm3 {
		margin-top: 30rpx;
	}

	.jlic {
		margin: 10rpx 0 20rpx;

		.bgimg {
			height: 140rpx;
		}

		.coubd {
			top: 0;
			left: 0;
		}

		.coubdl {
			width: 205rpx;

			.icon {
				width: 120rpx;
				height: 120rpx;
			}
		}
	}
	.dlblq{
		padding: 0 50rpx;
	}
	.codeImg{
		width: 360rpx;
		height: 360rpx;
	}
	
	.cpsnum {
		top: 0;
		right: 0;
		width: 50rpx;
		height: 35rpx;
		font-size: 20rpx;
		border-radius: 0 0 0 10rpx;
		background: linear-gradient(#F9D976, #FAC63E);
	}
	
	.tcyhq7{
		padding: 20rpx;
		.icon-gou1{
			font-size: 90rpx;
		}
		.mt-20{
			margin-top: -20rpx;
		}
		.btn{
			width: 100%;
			margin-top: 60rpx;
			.left{
				border: 2rpx solid #ccc;
				padding: 20rpx 10rpx;
				border-radius: 60rpx;
			}
			.right{
				padding: 20rpx 10rpx;
				border-radius: 60rpx;
			}
		}
	}
</style>