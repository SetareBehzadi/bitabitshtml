/* ------------------------------------------------------------------------------------------ */
/*                                  PLYR - VIDEO PLAYER : X1                                  */
/* ------------------------------------------------------------------------------------------ */
function videoPlayerX1() {

	if (!jQuery('.videoPlayerX1').length) return

	const plyrControls = [
		'play-large',
		// 'restart',
		// 'rewind',
		'play',
		// 'fast-forward',
		'progress',
		'current-time',
		// 'duration',
		'mute',
		'volume',
		// 'captions',
		'settings',
		'pip',
		// 'airplay',
		// 'download',
		'fullscreen'
	]
	const plyrSettings = [
		// 'captions',
		'quality',
		'speed'
	]
	const plyr_i18n = {
		restart: 'راه اندازی مجدد',
		rewind: 'به عقب {seektime}ثانیه',
		play: 'اجرا',
		pause: 'مکث',
		fastForward: 'به جلو {seektime}ثانیه',
		seek: 'به دنبال',
		seekLabel: '{currentTime} از {duration}',
		played: 'اجرا شده',
		buffered: 'بافر',
		currentTime: 'زمان کنونی',
		duration: 'مدت زمان',
		volume: 'تنظیم صدا',
		mute: 'بی صدا',
		unmute: 'با صدا',
		enableCaptions: 'فعال کردن زیرنویس',
		disableCaptions: 'غیر فعال کردن زیرنویس',
		download: 'دانلود',
		enterFullscreen: 'تمام صفحه شود',
		exitFullscreen: 'از تمام صفحه خارج شود',
		frameTitle: 'اجراکننده برای {title}',
		captions: 'زیرنویس ها',
		settings: 'تنظیمات',
		menuBack: 'برگشتن به منوی قبلی',
		speed: 'سرعت',
		normal: 'معمولی',
		quality: 'کیفیت',
		loop: 'حلقه',
		start: 'شروع',
		end: 'پایان',
		all: 'همه',
		reset: 'تنظیم مجدد',
		disabled: 'غیرفعال',
		enabled: 'فعال',
		advertisement: 'تبلیغات',
		qualityBadge: {
			2160: '4K',
			1440: 'HD',
			1080: 'HD',
			720: 'HD',
			576: 'SD',
			480: 'SD'
		}
	}

	const player = Plyr.setup('.videoPlayerX1', {
		iconUrl: HOST_URL + '/media/plyr.svg',
		blankVideo: HOST_URL + '/media/blank.mp4',
		controls: plyrControls,
		settings: plyrSettings,
		i18n: plyr_i18n
	})

	// Expose
	// window.player = player
	// for (var i in player) {
	// 	player[i].on('play', function(instance) {
	// 		var source = instance.detail.plyr.source
	// 		for (var x in player) {
	// 			if (player[x].source != source) {
	// 				player[x].pause()
	// 			}
	// 		}
	// 	})
	// }

}
