function Gallery(sSelector) {
	// ***************** свойства *******************//
	var g = this;
	g.init(sSelector);
	g.pictures      = g.findObj('.picture');
	g.pictureImage  = g.findObj('.picture__image');
	g.arrowPrev     = g.findObj('.preview__arrow_prev');
	g.arrowNext     = g.findObj('.preview__arrow_next');
	g.circles       = g.findObj('.circles');
	g.random        = g.findObj('.random');
	//Текущее изображеие
	g.current       = 0;
	// Количество изображений
	g.max           = 15;
	// Начало нумерации изображений
	g.min           = 0;
	//Директория с изображениями
	var patchImages = '../images/gallery/';
	
	// ******************* методы  *******************//
	g.showImage          = function (iShift) {
		g.current += iShift;
		if (g.current > g.max) {
			g.current = g.min;
		}
		else if (g.current < g.min) {
			g.current = g.max;
		}
		g.changeTitle();
		g.checkRemoveLight();
		g.addLightCircle(g.current);
	};
	g.showRefImage       = function () {
		g.current = g.circles.index(this);
		g.checkRemoveLight();
		g.addLightCircle(g.current);
		g.changePatch(g.current);
		g.changeTitle();
	};
	g.showPrevious       = function () {
		g.showImage(-1);
		g.changePatch(g.current);
	};
	g.showNext           = function () {
		g.showImage(+1);
		g.changePatch(g.current);
	};
	g.showRandom         = function () {
		g.current = Math.floor(Math.random() * (
			g.max - g.min + 1
		)) + g.min;
		g.changePatch(g.current);
		g.changeTitle();
		g.checkRemoveLight();
		g.addLightCircle();
	};
	g.changePatch        = function (nNumber) {
		var currentPath = '';
		currentPath += patchImages + g.current + '.png';
		g.pictureImage.attr('src', currentPath);
	};
	g.checkRemoveLight   = function () {
		if (g.circles.hasClass('circles-light')) {
			g.circles.removeClass('circles-light');
		}
	};
	g.addLightCircle     = function (nNumber) {
		if (g.circles.eq(g.current).hasClass('circles')) {
			g.circles.eq(g.current).addClass('circles-light');
		}
	};
	g.changeTitle        = function () {
		var currentTitle = '';
		currentTitle += (
		                g.current + 1
		                ) + ' слайд';
		g.pictureImage.attr('title', currentTitle);
		g.changeTitleButtons();
	};
	g.changeTitleButtons = function () {
		var currentTitle = '';
		currentTitle += 'к ' + g.shiftPrevTitle(g.current) + ' слайду';
		g.arrowPrev.attr('title', currentTitle);
		currentTitle = '';
		currentTitle += 'к ' + g.shiftNextTitle(g.current) + ' слайду';
		g.arrowNext.attr('title', currentTitle);
	};
	g.shiftPrevTitle     = function (nNumber) {
		var currentShift = nNumber;
		if (currentShift == g.min) {
			currentShift = g.max + 1;
		}
		return currentShift;
	};
	g.shiftNextTitle     = function (nNumber) {
		var currentShift = nNumber;
		if (currentShift == g.max) {
			currentShift = g.min + 1;
		}
		else {
			currentShift += 2;
		}
		
		return currentShift;
	};
	// ******************* события *******************//
	g.arrowPrev.click(g.showPrevious);
	g.arrowNext.click(g.showNext);
	g.random.click(g.showRandom);
	g.pictureImage.click(g.showRandom);
	g.circles.click(g.showRefImage);
}

Gallery.prototype = new Component();
