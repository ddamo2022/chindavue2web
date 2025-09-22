module.exports = {
	// 获取ref ( 循环获取，直到 组件创建完成并获取成功 )
	getRefs: function(ref, _this, count, fun) {
		if (count >= 50) {
			fun(_this.$refs[ref]);
			return false;
		}
		var refReturn = _this.$refs[ref];
		if (refReturn) {
			fun(refReturn);
		} else {
			count++;
			setTimeout(() => {
				this.getRefs(ref, _this, count, fun);
			}, 100);
		}
	},
	
}
