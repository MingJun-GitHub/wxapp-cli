import { formatTime } from '../../utils/util.js';
// import lazyImg from '../../behaviors/lazyImg'
Page({
	data: {
		logs: [],
	},
	//behaviors: [lazyImg],
	onLoad() {
		this.setData({
			logs: (wx.getStorageSync('logs') || []).map(function (log) {
				return formatTime(new Date(log));
			}),
		});
	},
	// 试一下全局加图片懒加载
	onPageScroll(e) {
		console.log('距离顶部', e.scrollTop)
	}
});
