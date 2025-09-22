<template>
	<view class="ccoupon mb20" v-if="ptype==1">
		<view class="bs20 p2 bf posi-r" :class="ttype==2 && v.num>1 ? 'b-s-1' :''">
			<view class="dot1 bf"></view>
			<view class="dot2 bf"></view>
			<view class="f-bt pb20 b-be pt20">
				<view class="f-g-0 left f-c-c">
					<view class="f-c crb f-y-e l-h1" v-if="co.type==1">
						<text class="f56 wei">{{co.rule.money}}</text>
						<text class="ml5">THB</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==2">
						<text class="f56 wei">{{co.rule.discount}}</text>
						<text class="ml5">{{$t('my-coupon.discount')}}</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==3">
						<text class="f30">{{$t('my-coupon.exchange_product')}}</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==4">
						<text class="f30" v-if="co.rule.disContent==1">{{$t('my-coupon.free_shipping')}}</text>
						<text class="f36"
							v-if="co.rule.disContent==3">{{$t('my-coupon.instant_discount')}}{{co.rule.money}}THB</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==5">
						<text class="f30">{{$t('my-coupon.fixed')}}{{co.rule.money}}THB</text>
					</view>
					<view class="c9 mt10 f24">
						<span v-if="co.startSwitch==0">{{$t('my-coupon.no_restrictions')}}</span>
						<span v-else-if="co.startSwitch==1">{{$t('my-coupon.min_purchase')}}
							{{co.startMoney && parseFloat(co.startMoney)}}THB {{$t('my-coupon.usable')}}</span>
					</view>
				</view>
				<view class="f-g-1">
					<view class="wei f30 t-o-e">{{co.name}}</view>
					<view class="f24 c9 mt5" v-if="ttype==1 && co.timeArr && co.timeArr.startTime">
						{{co.timeArr.startTime.substring(0, 10)}} ~ {{co.timeArr.endTime.substring(0, 10)}}
					</view>
					<view class="f24 c9 mt5" v-else-if="ttype==2 && v.startTime">{{v.startTime.substring(0, 10)}} ~
						{{v.endTime.substring(0, 10)}}
					</view>
				</view>
			</view>
			<view class="p02 mt20">
				<view class="f-bt">
					<view class="f-g-0 flex f-y-c" @click="show=!show">
						<view class="c3 f26">{{$t('my-coupon.usage_rules')}}</view>
						<view class="criel bsf ml10 f-c"><text class="iconfont icon-top c3 f22 fanz"
								:class="{'fanzz':show}"></text></view>
					</view>
					<view class="flex f-y-c">
						<view class="iconfont icon-erweima f40 c3 mr20 mt5" v-if="ttype==2 && co.verificationSwitch"
							@click="ewm"></view>
						<button @click.stop="zsClick" v-if="ttype==2 && co.regiftSwitch"
							class="coubtn f-c f22 clearbtn mr20"
							:style="{background:tColor}">{{$t('my-coupon.gift_to_friend')}}</button>
						<button @click.stop="btnClick" :disabled="disabled" class="coubtn f-c f22 clearbtn"
							:style="{background:tColor}">{{typeName.t}}</button>
					</view>
				</view>
				<view class='f26 lh40 mt10 c6' v-if="show">
					<view>{{$t('my-coupon.coupon')}}：{{co.sn}} <text @click='fzID' class="ml10"
							:style="{color:tColor}">{{$t('my-coupon.copy')}}</text></view>
					<view v-if="co.type==3 || co.type==5">{{$t('my-coupon.exchange_rules')}}：
						<text v-if="co.rule.disType==1">{{$t('my-coupon.highest_price_discount')}}</text>
						<text v-if="co.rule.disType==2">{{$t('my-coupon.lowest_price_discount')}}</text>
						<text v-if="co.rule.disType==3">{{$t('my-coupon.second_highest_price_discount')}}</text>
					</view>
					<view>{{$t('my-coupon.applicable_stores')}}：
						<text v-if="co.storeType == 1">{{$t('my-coupon.all_stores')}}</text>
						<text v-else-if="co.storeType == 2">{{$t('my-coupon.applicable_stores_specified')}}</text>
						<text
							v-else-if="co.storeType == 3">{{$t('my-coupon.not_applicable_for_specified_stores')}}</text>
						<!-- <text class="ml10" :style="{color:tColor}" v-if="co.storeType!=1" @click="goSelect">查看门店 ></text> -->
					</view>
					<view>{{$t('my-coupon.applicable_products')}}：
						<text v-if="co.goodsType == 1">{{$t('my-coupon.all_products')}}</text>
						<text v-else-if="co.goodsType == 2">{{$t('my-coupon.applicable_specified_products')}}</text>
						<text
							v-else-if="co.goodsType == 3">{{$t('my-coupon.not_applicable_for_specified_products')}}</text>
						<!-- <text class="ml10" :style="{color:tColor}" v-if="co.goodsType!=1" @click="ckac(1)">查看商品 ></text> -->
					</view>
					<view>{{$t('my-coupon.usage_scenario')}}：
						<text v-if="co.scenario.includes(2)">{{$t('my-coupon.self_pickup')}}</text>
						<text v-if="co.scenario.includes(1)" class="ml10">{{$t('my-coupon.takeaway')}}</text>
						<text v-if="co.scenario.includes(3)" class="ml10">{{$t('my-coupon.scan_to_order')}}</text>
						<text v-if="co.scenario.includes(4)" class="ml10">{{$t('my-coupon.fast_food')}}</text>
						<text v-if="co.scenario.includes(5)" class="ml10">{{$t('my-coupon.pay_in_person')}}</text>
					</view>
					<view v-if="ttype==1">{{$t('my-coupon.validity_period')}}：{{co.startTime}} ~ {{co.endTime}}</view>
					<view>{{$t('my-coupon.validity_period_usage')}}：
						<text v-if="co.period.type == 1">{{co.period.timeArr.startTime}} ~
							{{co.period.timeArr.endTime}}</text>
						<text v-if="co.period.type == 2">
							{{$t('my-coupon.received_coupon')}}{{ co.period.day.type == 1 ? $t('my-coupon.effective_from_day') : $t('my-coupon.valid_from') }}{{$t('my-coupon.start')}}{{ co.period.day.value }}{{$t('my-coupon.valid_for_n_days')}}</text>
						<text v-if="co.period.type == 3">
							{{$t('my-coupon.received_coupon')}}{{ co.period.hours.type == 1 ? $t('my-coupon.effective_from_day') : $t('my-coupon.valid_from') }}{{$t('my-coupon.start')}}{{
							            co.period.hours.value
							          }}{{$t('my-coupon.valid_for_n_hours')}}
						</text>
					</view>
					<view>{{$t('my-coupon.coupon_description')}}：<block v-if="co.body">{{co.body}}</block>
					</view>
					<view v-if="ttype==2">{{$t('my-coupon.coupon_source')}}：{{v.channelFormat}}</view>
				</view>
			</view>
			<!-- <view class="p-a couqlx cf t-c" :style="{background:qlx.c}">{{qlx.t}}</view> -->
			<!-- <view class="p-a counum cf t-c" v-if="ttype==2 && v.num>1">x{{v.num}}</view> -->
			<view class="p-a counum2 cf t-c " v-if="ttype==2 && v.num>1" :style="{background:tColor}">
				{{v.num}}{{$t('my-coupon.quantity')}}
			</view>
		</view>
		<view class="f-c-c" v-if="ttype==2 && v.num>1">
			<view class="b-s-1 yy bf"></view>
			<view class="b-s-1 yy2 bf"></view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="popCode bs20">
				<view class="code">
					<image :src="cCode" class="wh" mode="widthFix" v-if="cCode"></image>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="popupShare" type="center">
			<!-- #ifdef  MP-WEIXIN -->
			<view class="popShare bs20">
				<view class="wei f40 f-c">{{$t('my-coupon.notification')}}</view>
				<view class="mt30 f-c">{{cpName}}</view>
				<view class="f-c">
					<button class="cf xzhy f-c bs10 f30" open-type="share" @click="fxhy"
						:style="{background:tColor}">{{$t('my-coupon.choose_friend')}}</button>
				</view>
			</view>
			<!-- #endif -->
			<!-- #ifdef  H5 -->
			<view class="popShare bs20">
				<view class="wei f40 f-c">{{$t('my-coupon.notification')}}</view>
				<view class="mt30 f-c">{{cpName}}</view>
				<view class="mt30 f-c"><input maxlength="15" style="width: 100%;;border-bottom: 1px solid #808080;"
						v-model="mobile" :placeholder="$t('my-coupon.enter_phone_number')" class="f30" /></view>
				<view class="f-c">
					<button class="cf xzhy f-c bs10 f30" @click="confirmGift"
						:style="{background:tColor}">{{$t('my-coupon.confirm_gift')}}</button>
				</view>
			</view>
			<!-- #endif -->
		</uni-popup>
	</view>
	<view class="ccoupon mb20" v-else-if="ptype==2">
		<view class="bs20 p2 bf posi-r" @click="co.isUse!=1?$emit('change',v.id):''">
			<view class="f-bt pb20 pt20">
				<view class="f-g-0 left f-c-c">
					<view class="f-c crb f-y-e l-h1" v-if="co.type==1">
						<text class="f56 wei">{{co.rule.money}}</text>
						<text class="ml5">THB</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==2">
						<text class="f56 wei">{{co.rule.discount}}</text>
						<text class="ml5">{{$t('my-coupon.discount')}}</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==3">
						<text class="f30">{{$t('my-coupon.exchange_product')}}</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==4">
						<text class="f30" v-if="co.rule.disContent==1">{{$t('my-coupon.free_shipping')}}</text>
						<text class="f36"
							v-if="co.rule.disContent==3">{{$t('my-coupon.instant_discount')}}{{co.rule.money}}THB</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==5">
						<text class="f30">{{$t('my-coupon.fixed')}}{{co.rule.money}}THB</text>
					</view>
					<view class="c9 mt10 f24">
						<span v-if="co.startSwitch==0">{{$t('my-coupon.no_restrictions')}}</span>
						<span
							v-else-if="co.startSwitch==1">{{$t('my-coupon.min_purchase')}}{{co.startMoney && parseFloat(co.startMoney)}}THB{{$t('my-coupon.usable')}}</span>
					</view>
				</view>
				<view class="f-g-1">
					<view class="wei f30 t-o-e">{{co.name}}</view>
					<view class="f24 c9 mt5" v-if="ttype==1">{{co.timeArr.startTime}} ~ {{co.timeArr.endTime}}</view>
					<view class="f24 c9 mt5" v-else-if="ttype==2">{{v.startTime}} ~ {{v.endTime}}</view>
					<!-- <view class="f24 mt5" :style="{color:tColor}">距离过期仅剩2天</view> -->
				</view>
				<view class="f-g-0 f-c">
					<radio :color="tColor" v-if="co.isUse!=1" :checked="v.checked" />
				</view>
			</view>
			<!-- <view class="p-a couqlx cf t-c" :style="{background:qlx.c}">{{qlx.t}}</view> -->
			<view class="p-a counum cf t-c" v-if="ttype==2 && v.num>1">x{{v.num}}</view>
		</view>
	</view>
	<view class="ccoupon mb20" v-else-if="ptype==3">
		<view class="bs20 p2 bf posi-r">
			<view class="f-bt pb20 pt20 b-be">
				<view class="f-g-0 left f-c-c">
					<view class="f-c crb f-y-e l-h1" v-if="co.type==1">
						<text class="f56 wei">{{co.rule.money}}</text>
						<text class="ml5">THB</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==2">
						<text class="f56 wei">{{co.rule.discount}}</text>
						<text class="ml5">{{$t('my-coupon.discount')}}</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==3">
						<text class="f30">{{$t('my-coupon.exchange_product')}}</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==4">
						<text class="f30" v-if="co.rule.disContent==1">{{$t('my-coupon.free_shipping')}}</text>
						<text class="f36"
							v-if="co.rule.disContent==3">{{$t('my-coupon.instant_discount')}}{{co.rule.money}}THB</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==5">
						<text class="f30">{{$t('my-coupon.fixed')}}{{co.rule.money}}THB</text>
					</view>
					<view class="c9 mt10 f24">
						<span v-if="co.startSwitch==0">{{$t('my-coupon.no_restrictions')}}</span>
						<span
							v-else-if="co.startSwitch==1">{{$t('my-coupon.min_purchase')}}{{co.startMoney && parseFloat(co.startMoney)}}THB{{$t('my-coupon.usable')}}</span>
					</view>
				</view>
				<view class="f-g-1">
					<view class="wei f30 t-o-e c9">{{co.name}}</view>
					<view class="f24 c9 mt5 c9">{{co.timeArr.startTime}} ~ {{co.timeArr.endTime}}</view>
				</view>
			</view>
			<view class="p2">
				<view class="cfa f22"><text
						class="iconfont icon-tishi cfa f28 mr10"></text>{{$t('my-coupon.reason_unusable')}}</view>
				<view class="f22 c9 mb10 mt5" v-for="(v,i) in v.msg" :key='i'>{{v}}</view>
			</view>
			<!-- <view class="p-a couqlx cf t-c" :style="{background:qlx.c}">{{qlx.t}}</view> -->
			<view class="p-a counum cf t-c" v-if="v.num>1">x{{v.num}}</view>
		</view>
	</view>
	<view class="ccoupon mb20" v-else-if="ptype==4">
		<view class="bs20 p2 bf posi-r">
			<view class="f-bt pb20 pt20 b-be">
				<view class="f-g-0 left f-c-c">
					<view class="f-c c9 f-y-e l-h1" v-if="co.type==1">
						<text class="f56 wei">{{co.rule.money}}</text>
						<text class="ml5">THB</text>
					</view>
					<view class="f-c c9 f-y-e l-h1" v-else-if="co.type==2">
						<text class="f56 wei">{{co.rule.discount}}</text>
						<text class="ml5">{{$t('my-coupon.discount')}}</text>
					</view>
					<view class="f-c c9 f-y-e l-h1" v-else-if="co.type==3">
						<text class="f30">{{$t('my-coupon.exchange_product')}}</text>
					</view>
					<view class="f-c c9 f-y-e l-h1" v-else-if="co.type==4">
						<text class="f30" v-if="co.rule.disContent==1">{{$t('my-coupon.free_shipping')}}</text>
						<text class="f36"
							v-if="co.rule.disContent==3">{{$t('my-coupon.instant_discount')}}{{co.rule.money}}THB</text>
					</view>
					<view class="f-c c9 f-y-e l-h1" v-else-if="co.type==5">
						<text class="f30">{{$t('my-coupon.fixed')}}{{co.rule.money}}THB</text>
					</view>
					<view class="c9 mt10 f24">
						<span v-if="co.startSwitch==0">{{$t('my-coupon.no_restrictions')}}</span>
						<span
							v-else-if="co.startSwitch==1">{{$t('my-coupon.min_purchase')}}{{co.startMoney && parseFloat(co.startMoney)}}THB{{$t('my-coupon.usable')}}</span>
					</view>
				</view>
				<view class="f-g-1">
					<view class="wei f30 t-o-e c9">{{co.name}}</view>
					<view class="f24 c9 mt5 c9">
					{{v.startTimeFormat}} ~ {{v.endTimeFormat}}
					</view>
				</view>
			</view>
			<view class="p02 mt20">
				<view class="f-bt">
					<view class="f-g-0 flex f-y-c" @click="show=!show">
						<view class="c3 f26">{{$t('my-coupon.usage_rules')}}</view>
						<view class="criel bsf ml10 f-c"><text class="iconfont icon-top c3 f22 fanz"
								:class="{'fanzz':show}"></text></view>
					</view>
				</view>
				<view class='f26 lh40 mt10 c6' v-if="show">
					<view>{{$t('my-coupon.applicable_stores')}}：
						<text v-if="co.storeType == 1">{{$t('my-coupon.all_stores')}}</text>
						<text v-else-if="co.storeType == 2">{{$t('my-coupon.applicable_stores_specified')}}</text>
						<text
							v-else-if="co.storeType == 3">{{$t('my-coupon.not_applicable_for_specified_stores')}}</text>
						<!-- <text class="ml10" :style="{color:tColor}" v-if="co.storeType!=1" @click="goSelect">查看门店 ></text> -->
					</view>
					<view>{{$t('my-coupon.applicable_products')}}：
						<text v-if="co.goodsType == 1">{{$t('my-coupon.all_products')}}</text>
						<text v-else-if="co.goodsType == 2">{{$t('my-coupon.applicable_specified_products')}}</text>
						<text
							v-else-if="co.goodsType == 3">{{$t('my-coupon.not_applicable_for_specified_products')}}</text>
						<!-- <text class="ml10" :style="{color:tColor}" v-if="co.goodsType!=1" @click="ckac(1)">查看商品 ></text> -->
					</view>
					<view>{{$t('my-coupon.usage_scenario')}}：
						<text v-if="co.scenario.includes(2)">{{$t('my-coupon.self_pickup')}}</text>
						<text v-if="co.scenario.includes(1)" class="ml10">{{$t('my-coupon.takeaway')}}</text>
						<text v-if="co.scenario.includes(3)" class="ml10">{{$t('my-coupon.scan_to_order')}}</text>
						<text v-if="co.scenario.includes(4)" class="ml10">{{$t('my-coupon.fast_food')}}</text>
						<text v-if="co.scenario.includes(5)" class="ml10">{{$t('my-coupon.pay_in_person')}}</text>
					</view>
					<!-- <view v-if="ttype==1">领取有效期：{{co.startTime}} ~ {{co.endTime}}</view> -->
					<!-- <view>使用有效期：
						<text v-if="co.period.type == 1">{{co.period.timeArr.startTime}} ~
							{{co.period.timeArr.endTime}}</text>
						<text v-if="co.period.type == 2">
							获得券{{ co.period.day.type == 1 ? "当日起" : "此日起" }}开始{{ co.period.day.value }}个自然日内有效</text>
						<text v-if="co.period.type == 3">
							获得券{{ co.period.day.type == 1 ? "当日起" : "此日起" }}开始{{
							            co.period.day.value
							          }}个小时内有效
						</text>
					</view> -->
					<view>{{$t('my-coupon.coupon_description')}}：<block v-if="co.body">{{co.body}}</block>
					</view>
					<view v-if="ttype==2">{{$t('my-coupon.coupon_source')}}：{{v.channelFormat}}</view>
				</view>
			</view>
			<!-- <view class="p-a couqlx cf t-c" :style="{background:qlx.c}">{{qlx.t}}</view> -->
			<view class="p-a counum cf t-c" v-if="v.num>1">x{{v.num}}</view>
		</view>
	</view>
	<view class="ccoupon mb20" v-else-if="ptype==5">
		<view class="bs20 p2 bf posi-r">
			<view class="f-bt pb20 pt20">
				<view class="f-g-0 left f-c-c borleft">
					<view class="f-c cf5f f-y-e l-h1" v-if="co.type==1">
						<text class="f56 wei">{{co.rule.money}}</text>
						<text class="ml5">THB</text>
					</view>
					<view class="f-c cf5f f-y-e l-h1" v-else-if="co.type==2">
						<text class="f56 wei">{{co.rule.discount}}</text>
						<text class="ml5">{{$t('my-coupon.discount')}}</text>
					</view>
					<view class="f-c cf5f f-y-e l-h1" v-else-if="co.type==3">
						<text class="f30">{{$t('my-coupon.exchange_product')}}</text>
					</view>
					<view class="f-c cf5f f-y-e l-h1" v-else-if="co.type==4">
						<text class="f30" v-if="co.rule.disContent==1">{{$t('my-coupon.free_shipping')}}</text>
						<text class="f36"
							v-if="co.rule.disContent==3">{{$t('my-coupon.instant_discount')}}{{co.rule.money}}THB</text>
					</view>
					<view class="f-c cf5f f-y-e l-h1" v-else-if="co.type==5">
						<text class="f30">{{$t('my-coupon.fixed')}}{{co.rule.money}}THB</text>
					</view>
					<view class="c9 mt10 f24">
						<span v-if="co.startSwitch==0">{{$t('my-coupon.no_restrictions')}}</span>
						<span
							v-else-if="co.startSwitch==1">{{$t('my-coupon.min_purchase')}}{{co.startMoney && parseFloat(co.startMoney)}}THB{{$t('my-coupon.usable')}}</span>
					</view>
				</view>
				<view class="f-g-1">
					<view class="wei f30 t-o-e c3">{{co.name}}</view>
					<view class="f24 mt5 c9" v-if="co.timeArr && co.timeArr.startTime">
						{{co.timeArr.startTime.substring(0, 10)}} ~ {{co.timeArr.endTime.substring(0, 10)}}
					</view>
				</view>
			</view>
			<!-- <view class="p-a couqlx cf t-c" :style="{background:qlx.c}">{{qlx.t}}</view> -->
			<view class="p-a counum cf t-c" v-if="v.couponIds && v.couponIds.find(item => item.id == co.id).num > 0">
				x{{v.couponIds.find(item => item.id == co.id).num}}</view>
		</view>
	</view>
	<view class="" v-else-if="ptype==6">
		<view class="cps p2 f-bt bs20 f-1 mb20 p-r">
			<view class="f-g-1 f-y-bt">
				<view class="flex l-h1">
					<view class="wei f30 t-o-e">{{co.name}}</view>
					<view class="ty f20 ml10">{{co.typeFormat}}</view>
				</view>
				<view class="f24 c9 mt10" v-if="co.timeArr && co.timeArr.startTime">
					{{co.timeArr.startTime.substring(0, 10)}} ~ {{co.timeArr.endTime.substring(0, 10)}}
				</view>
				<view class="f24 c9 mt10" v-else-if="co.startTime">{{co.startTime.substring(0, 10)}} ~
					{{co.endTime.substring(0, 10)}}
				</view>
				<view class="c9 f24 mt10 flex f-y-c" @click="show=!show">
					<view class="f24 c9">{{$t('my-coupon.usage_rules')}}</view>
					<view class="criel bsf ml10 f-c"><text class="iconfont icon-top c9 f22 fanz"
							:class="{'fanzz':show}"></text></view>
				</view>
				<view class='f24 lh40 mt10 c6' v-if="show">
					<view>{{$t('my-coupon.coupon')}}：{{co.sn}}
						<!-- <text @click='fzID(co)' class="ml10" :style="{color:tColor}">复制</text> -->
					</view>
					<view v-if="co.type==3 || co.type==5">{{$t('my-coupon.exchange_rules')}}：
						<text v-if="co.rule.disType==1">{{$t('my-coupon.highest_price_discount')}}</text>
						<text v-if="co.rule.disType==2">{{$t('my-coupon.lowest_price_discount')}}</text>
						<text v-if="co.rule.disType==3">{{$t('my-coupon.second_highest_price_discount')}}</text>
					</view>
					<view>{{$t('my-coupon.applicable_stores')}}：
						<text v-if="co.storeType == 1">{{$t('my-coupon.all_stores')}}</text>
						<text v-else-if="co.storeType == 2">{{$t('my-coupon.applicable_stores_specified')}}</text>
						<text
							v-else-if="co.storeType == 3">{{$t('my-coupon.not_applicable_for_specified_stores')}}</text>
					</view>
					<view>{{$t('my-coupon.applicable_products')}}：
						<text v-if="co.goodsType == 1">{{$t('my-coupon.all_products')}}</text>
						<text v-else-if="co.goodsType == 2">{{$t('my-coupon.applicable_specified_products')}}</text>
						<text
							v-else-if="co.goodsType == 3">{{$t('my-coupon.not_applicable_for_specified_products')}}</text>
					</view>
					<view>{{$t('my-coupon.usage_scenario')}}：
						<text v-if="co.scenario.includes(2)">{{$t('my-coupon.self_pickup')}}</text>
						<text v-if="co.scenario.includes(1)" class="ml10">{{$t('my-coupon.takeaway')}}</text>
						<text v-if="co.scenario.includes(3)" class="ml10">{{$t('my-coupon.scan_to_order')}}</text>
						<text v-if="co.scenario.includes(4)" class="ml10">{{$t('my-coupon.fast_food')}}</text>
						<text v-if="co.scenario.includes(5)" class="ml10">{{$t('my-coupon.pay_in_person')}}</text>
					</view>
					<view>{{$t('my-coupon.validity_period_usage')}}：
						<text v-if="co.period.type == 1">{{co.period.timeArr.startTime}} ~
							{{co.period.timeArr.endTime}}</text>
						<text v-if="co.period.type == 2">
							{{$t('my-coupon.received_coupon')}}{{ co.period.day.type == 1 ?  $t('my-coupon.effective_from_day')  :  $t('my-coupon.valid_from')  }}{{$t('my-coupon.start')}}{{ co.period.day.value }}{{$t('my-coupon.valid_for_n_days')}}</text>
						<text v-if="co.period.type == 3">
							{{$t('my-coupon.received_coupon')}}{{ co.period.hours.type == 1 ? $t('my-coupon.effective_from_day')  :  $t('my-coupon.valid_from')  }}{{$t('my-coupon.start')}}{{
								            co.period.hours.value
								          }}{{$t('my-coupon.valid_for_n_hours')}}
						</text>
					</view>
					<view>{{$t('my-coupon.coupon_description')}}：<block v-if="co.body">{{co.body}}</block>
					</view>
				</view>
			</view>
			<view class="f-g-0 rollRitht f-y-t">
				<view class="f-c-c">
					<view class="f-c crb f-y-e l-h1" v-if="co.type==1">
						<text class="f56 wei">{{co.rule && co.rule.money}}</text>
						<text class="ml5">THB</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==2">
						<text class="f56 wei">{{co.rule && co.rule.discount}}</text>
						<text class="ml5">{{$t('my-coupon.discount')}}</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==3">
						<text class="f30">{{$t('my-coupon.exchange_product')}}</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==4">
						<text class="f30"
							v-if="co.rule && co.rule.disContent==1">{{$t('my-coupon.free_shipping')}}</text>
						<text class="f36"
							v-if="co.rule && co.rule.disContent==3">{{$t('my-coupon.instant_discount')}}{{co.rule && co.rule.money}}THB</text>
					</view>
					<view class="f-c crb f-y-e l-h1" v-else-if="co.type==5">
						<text class="f30">{{$t('my-coupon.fixed')}}{{co.rule.money}}THB</text>
					</view>
					<view class="c9 mt10 f24">
						<span v-if="co.startSwitch==0">{{$t('my-coupon.no_restrictions')}}</span>
						<span
							v-else-if="co.startSwitch==1">{{$t('my-coupon.min_purchase')}}{{co.startMoney && parseFloat(co.startMoney)}}THB{{$t('my-coupon.usable')}}</span>
					</view>
				</view>
			</view>
			<view class="p-a cpsnum c0 t-c"
				v-if="v && v.couponGive && v.couponGive.find(item => item.id == co.id).num > 1">
				x{{v.couponGive.find(item => item.id == co.id).num}}</view>
		</view>
	</view>
	<view class="ccoupon mb20" v-else-if="ptype==7">
		<view class="bs20 p2 cps7 posi-r">
			<view class="dot1 bf"></view>
			<!-- <view class="dot2 bf"></view> -->
			<view class="f-bt pb10 pt10">
				<view class="f-g-0 left f-c-c mr20">
					<view class="f-c cf5f f-y-e l-h1" v-if="co.type==1">
						<text class="f56 wei">{{co.rule.money}}</text>
						<text class="ml5">THB</text>
					</view>
					<view class="f-c cf5f f-y-e l-h1" v-else-if="co.type==2">
						<text class="f56 wei">{{co.rule.discount}}</text>
						<text class="ml5">{{$t('my-coupon.discount')}}</text>
					</view>
					<view class="f-c cf5f f-y-e l-h1" v-else-if="co.type==3">
						<text class="f30">{{$t('my-coupon.exchange_product')}}</text>
					</view>
					<view class="f-c cf5f f-y-e l-h1" v-else-if="co.type==4">
						<text class="f30" v-if="co.rule.disContent==1">{{$t('my-coupon.free_shipping')}}</text>
						<text class="f36"
							v-if="co.rule.disContent==3">{{$t('my-coupon.instant_discount')}}{{co.rule.money}}THB</text>
					</view>
					<view class="f-c cf5f f-y-e l-h1" v-else-if="co.type==5">
						<text class="f30">{{$t('my-coupon.fixed')}}{{co.rule.money}}THB</text>
					</view>
					<view class="c9 mt10 f24">
						<span v-if="co.startSwitch==0">{{$t('my-coupon.no_restrictions')}}</span>
						<span
							v-else-if="co.startSwitch==1">{{$t('my-coupon.min_purchase')}}{{co.startMoney && parseFloat(co.startMoney)}}THB{{$t('my-coupon.usable')}}</span>
					</view>
				</view>
				<view class="f-g-1">
					<view class="wei f30 t-o-e c3">{{co.name}}</view>
					<view class="f24 mt5 c9" v-if="co.timeArr && co.timeArr.startTime">
						{{co.timeArr.startTime.substring(0, 10)}} ~ {{co.timeArr.endTime.substring(0, 10)}}
					</view>
				</view>
			</view>
			<view class="p-a counum7 cf t-c" v-if="v.num && v.num > 0" :style="{background:tColor}">
				{{v.num}}{{$t('my-coupon.quantity')}}
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		utilMixins
	} from "@/common/util-mixins.js"
	export default {
		name: 'coupon',
		components: {

		},
		props: {
			v: {
				type: Object,
				default: function() {
					return {}
				}
			},
			co: {
				type: Object,
				default: function() {
					return {}
				}
			},
			gttype: {
				type: String,
				default: ''
			},
			ptype: { //样式类型 1领券中心,我的券,2/可使用券3不可使用券、4、已使用券已过期/5优惠券显示
				type: String,
				default: '1'
			},
			ttype: { //文字类型 1领券中心2我的券
				type: String,
				default: '1'
			},
			cname: {
				type: String,
				default: ''
			},
			u: {
				type: String,
				default: 'px'
			},
			color: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				show: false,
				active: false,
				disabled: false,
				cCode: '',
				cpName: '',
				mobile: ''
			}
		},
		mixins: [utilMixins],
		computed: {
			typeName() {
				let t, c = ''
				switch (this.ptype) {
					case '1':
						if (this.ttype == 1) {
							t = this.$t('my-coupon.claim_now')
							c = 'linear-gradient(90deg, #ff3a48, #ff3a48)'
						} else {
							t = this.$t('my-coupon.use_now')
							c = 'linear-gradient(90deg, #ff3a48, #ff3a48)'
						}
						break;
					default:
						break;
				}
				return {
					t,
					c
				}
			},
			qbbl() {
				return this.co.saleNum / this.co.totalNum >= 1 ? 1 : this.co.saleNum / this.co.totalNum
			},
			qlx() {
				let t, c = ''
				switch (this.co.type) {
					case 1:
						t = this.$t('my-coupon.generation')
						c = '#136FFE'
						break;
					case 2:
						t = this.$t('my-coupon.discount')
						c = '#67C23A'
						break;
					case 3:
						t = this.$t('my-coupon.exchange')
						c = '#FF4046'
						break;
					case 4:
						t = this.$t('my-coupon.shipping')
						c = '#FFAF24'
						break;
					default:
						break;
				}
				return {
					t,
					c
				}
			},
			iswdq() {
				return this.ttype == 2 && this.co.receiveType == 13
			},
		},
		methods: {
			goTo() {
				let url = '/pages/my/coupon/coupon-dl?id=' + (this.co.couponId ? this.co.couponId : this.co.id)
				if (this.ptype == 1 && this.ttype == 2 || this.ptype == 4) {
					url = '/pages/my/coupon/coupon-dl?islq=1&receiveId=' + this.co.id
				} else if (this.ptype == 8) {
					url = '/pages/order/coupon-bag/qbxq?id=' + this.co.id
				}
				this.go({
					t: 1,
					url,
				})
			},
			btnClick() {
				if (this.typeName.c) {
					if (this.ptype == 1 && this.ttype == 1) {
						// console.log(this.co)
						this.disabled = true
						setTimeout(() => {
							this.disabled = false
						}, 1000)
						this.$emit('btntap')
					} else if (this.ptype == 1 && this.ttype == 2) {
						this.go({
							t: 6,
							url: '/pages/index/goods'
						})
					}

				}
			},
			async zsClick() {
				this.cpName = `${ this.$t('my-coupon.confirm_gift')}[${this.co.name}]${ this.$t('my-coupon.coupon')}`
				this.$emit('fx', this.v)
				this.$refs['popupShare'].open()
			},
			async fxhy() {
				await this.util.request({
					'url': this.api.yhqzz,
					'method': 'POST',
					data: {
						id: this.v.id
					}
				})
				setTimeout(() => {
					this.$emit('rf', 0)
					this.$refs['popupShare'].close()
				}, 1000)
			},
			async confirmGift() {
				//confirmGift
				var data = await this.util.request({
					'url': `${this.api.confirmGift}`,
					'method': 'POST',
					data: {
						mobile: this.mobile,
						id: this.v.id
					}
				})
				console.log('1212', data)
				this.util.message(data.msg, 3, 2000)
				if (data.data) {
					this.$emit('rf', 0)
					this.$refs['popupShare'].close()
				}
				
			},
			fzID() {
				let id = this.co.sn.toString()
				this.util.fz(id)
			},
			async ewm() {
				let {
					data
				} = await this.util.request({
					'url': `${this.api.cCode}/${this.v.id}`
				})
				if (data) {
					this.cCode = data
					this.$refs['popup'].open()
				}
			},
			ckac(type) {
				return
				this.go({
					t: 1,
					url: `/pages/shop/seeGoods?type=${type}`
				})
			},
			goSelect() {
				return
				uni.navigateTo({
					url: '/pages/shop/select/index?page=recharge'
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	.ccoupon {

		.dot1,
		.dot2 {
			position: absolute;
			width: 30rpx;
			height: 15rpx;
			background: #f7f7f7;
		}

		.dot1 {
			left: -9rpx;
			top: 156rpx;
			border-radius: 0 0 30px 30px;
			border-top: 0;
			transform: rotateZ(-90deg);
		}

		.dot2 {
			right: -9rpx;
			top: 156rpx;
			border-radius: 30px 30px 0 0;
			transform: rotateZ(-90deg);
			border-bottom: 0;
		}

		.left {
			width: 30%;
		}

		.borleft {
			border-right: 2rpx dashed #b5b5b5;
			margin-right: 30rpx;
		}

		.qsy {
			width: 130rpx;
			height: 56rpx;
		}

		.criel {
			width: 36rpx;
			height: 36rpx;
			background: #eee;
		}

		.fanz {
			transform: rotateZ(180deg);
		}

		.fanzz {
			transform: rotateZ(0deg);
		}

		.lh40 {
			line-height: 48rpx;
		}
	}

	.coubtn {
		min-width: 130rpx;
		height: 56rpx;
		color: #fff;
		background: #DDD;
		border-radius: 30rpx;
	}

	.couqlx {
		top: 0;
		left: -50rpx;
		width: 100rpx;
		height: 45rpx;
		font-size: 18rpx;
		line-height: 52rpx;
		background: linear-gradient(#ff3a48, #ff3a48);
		transform: rotate(-45deg);
		transform-origin: 50% 0%;
	}

	.counum {
		top: 0;
		right: -50rpx;
		width: 100rpx;
		height: 45rpx;
		font-size: 20rpx;
		line-height: 52rpx;
		background: linear-gradient(#ff3a48, #ff3a48);
		transform: rotate(45deg);
		transform-origin: 50% 0%;
	}

	.counum2 {
		top: 0;
		left: 0;
		// width: 80rpx;
		height: 30rpx;
		line-height: 30rpx;
		font-size: 20rpx;
		border-radius: 20rpx 0 20rpx 0;
		background: linear-gradient(#ff3a48, #ff3a48);
	}

	.yy {
		height: 16rpx;
		width: 96%;
		border-radius: 0 0 20rpx 20rpx;
	}

	.yy2 {
		height: 10rpx;
		width: 92%;
		border-radius: 0 0 20rpx 20rpx;
	}

	.popCode,
	.popShare {
		padding: 100rpx;
		position: relative;
		background: #fff;

		.code {
			width: 400rpx;
			height: 400rpx;
		}

		.xzhy {
			width: 400rpx;
			height: 90rpx;
			margin-top: 60rpx;
		}
	}

	.cps {
		border: 2rpx solid #F2DFD8;
		background: #FDF5F2;

		.pc {
			color: #F85129;
		}

		.fanz {
			transform: rotateZ(180deg);
		}

		.fanzz {
			transform: rotateZ(0deg);
		}

		.ty {
			padding: 6rpx;
			border-radius: 4rpx;
			border: 2rpx solid #F2DFD8;
			color: #F85129;
		}

		.rollRitht {
			padding-right: 20rpx;
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
	}

	.cps7 {
		background: #FDF3F2;

		.dot1,
		.dot2 {
			top: 65rpx;
			background: #fff;
		}

		.counum7 {
			top: 0;
			right: 0;
			width: 65rpx;
			height: 40rpx;
			font-size: 20rpx;
			line-height: 40rpx;
			background: linear-gradient(#ff3a48, #ff3a48);
			border-radius: 0 0 0 20rpx;
		}
	}
</style>