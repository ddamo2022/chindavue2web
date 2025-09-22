let isDev = false
var siteinfo = {
	isDev: isDev,
	"uniacid": "3",
	"acid": "2",
	"multiid": "0",
	"version": "1.0",
	"siteroot": "https://www.vdamo.com", //https://www.vdamo.com  http://212.64.23.83:8081
	// "siteroot": "https://ybv3.b-ke.cn", //wx8b3a52014e0b39e1 18
	"design_method": "3",
	"liffId":"2004473321-d7Wny8Rw",
	"facebookid":"819653516790587"
}
if (process.env.NODE_ENV !== 'development') {
	siteinfo.isDev = false
	// #ifdef H5
	siteinfo.siteroot = `https://${location.hostname}`
	// #endif
	console.log('produce',siteinfo.siteroot)
} else {
	console.log('development')
}
module.exports = siteinfo
