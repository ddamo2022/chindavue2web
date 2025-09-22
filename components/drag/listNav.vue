<template>
	<view id="listNav">
	    <ul
	      class="list-nav"
	      :style="{
	        borderTopLeftRadius: co.tCircle + 'px',
	        borderTopRightRadius: co.tCircle + 'px',
	        borderBottomRightRadius: co.bCircle + 'px',
	        borderBottomLeftRadius: co.bCircle + 'px',
	        marginTop: co.marginTop + 'px',
	        marginBottom: co.marginBottom + 'px',
	        marginLeft: co.marginLR + 'px',
	        marginRight: co.marginLR + 'px',
	        backgroundColor: co.colorBg,
	      }"
	    >
		<view class="zjTit tit" v-if="co.titShow == 1" :style="{ fontSize: `${co.titFontSize}px`, }">{{co.titWord}}</view>
	      <li v-for="(v, i) in co.imgUrl" :key="i" @click="goLink(v)" :style="{ borderBottom: `${co.lineShow == 2 ? 'none' :'1px solid #eee'}`}">
	        <view>
	          <template v-if="co.type == 2">
	            <img
	              v-if="v.img == ''"
	              :style="{width: `${co.iconSize || 20}px`,height: `${co.iconSize || 20}px`}"
	              :src="img"
	              fit="cover"
	            ></img>
	            <img
	              v-else
	              :style="{width: `${co.iconSize || 20}px`,height: `${co.iconSize || 20}px`}"
	              :src="v.img"
	              fit="cover"
	            ></img>
	          </template>
	          <text :style="{ color: v.leftColor,fontSize: `${co.fontSize}px`, }" class="wei">{{
	            v.leftWord
	          }}</text>
	        </view>
	        <view>
	         <text class="iconfont icon-right c9"></text>
	        </view>
	      </li>
	    </ul>
	  </view>
</template>
<script>
	export default {
		name: 'titles',
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
	.list-nav {
	  padding: 0 15px;
	  background-color: #fff;
	  .tit{
		  padding-left: 0;
	  }
	  > li {
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    border-bottom: 1px solid #eee;
	    padding: 15px 0;
	    > view {
	      display: flex;
	      justify-content: flex-start;
	      align-items: center;
	      > text {
	        margin-left: 10px;
	      }
	    }
	    > view:nth-of-type(2) {
	      > text {
	        color: #999;
	        font-size: 14px;
	        margin-right: 10px;
	      }
	    }
	  }
	}
</style>
