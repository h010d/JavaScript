function Window(sSelector) {
	var w = this;
	w.init(sSelector);
	w.startCountdownBtn = w.findObj('.b-mywindow__start-countdown');
	w.stopCountdownBtn  = w.findObj('.b-mywindow__stop-countdown');
	w.startTickerBtn    = w.findObj('.b-mywindow__start-ticker');
	w.stopTickerBtn     = w.findObj('.b-mywindow__stop-ticker');
	w.openWindowBtn     = w.findObj('.b-mywindow__open-window');
	w.closeWindowBtn    = w.findObj('.b-mywindow__close-window');
	w.ticker            = null; //периодический таймер
	w.countdown         = null; //счетчик обратного отсчета
	w.tickerTime        = 0; //время таймера(накопитель)
	w.tickerPeriod      = 2; //шаг таймера
	w.newWindow         = null; //указатель окна
	
	//*****************методы********************** */
	w.startCountdown        = function () { // обратный отсчет
		var mayIStart = confirm('можно приступать?'); // window.confirm('можно приступать?');
		if (mayIStart){
			w.countdown = window.setTimeout(
				w.countdownNotification, 3000
			);
		}
		else{
			alert('Ну не хотите, как хотите!');
		}
	};
	w.stopCountdown         = function () {
		window.clearTimeout(w.countdown);
		alert('Таймер остановлен');
	};
	w.startTicker           = function () { //таймер
		w.ticker = window.setInterval(w.tickerNotification, w.tickerPeriod * 1000);
	};
	w.stopTicker            = function () {
		window.clearInterval(w.ticker);
		console.info('Таймер на паузе');
	};
	w.openWindow            = function () { //окно
		w.newWindow = window.open('gallery.html', '_blank', 'width = 400, height = 450');
	};
	w.closeWindow           = function () {
		w.newWindow.close();
	};
	w.countdownNotification = function () { //уведомления
		alert('Время иссякло');
	};
	w.tickerNotification    = function () {
		w.tickerTime += w.tickerPeriod;
		console.info('Прошло ' + w.tickerTime + ' секунд');
	};
	
	
	w.startCountdownBtn.click(w.startCountdown);
	w.stopCountdownBtn.click(w.stopCountdown);
	w.startTickerBtn.click(w.startTicker);
	w.stopTickerBtn.click(w.stopTicker);
	w.openWindowBtn.click(w.openWindow);
	w.closeWindowBtn.click(w.closeWindow);
}

Window.prototype = new Component();
